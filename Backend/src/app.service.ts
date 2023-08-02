
import { CoordinateDTO, LineListBustStopDTO, LineDataDTO } from './dto/lineBusStop-dto';
import { response } from 'express';
import { CreateBustrackerInput, CreateBustrackerMutation, CreateHeatMapMutation, CreateLogBusTrackerInput, CreateLogBusTrackerMutation, CreateVirtualBusTrackerInput, CreateVirtualBusTrackerMutation, GetBusLocatorStatusQuery, GetBustrackerQuery, GetListLineBusStopsQuery, GetStatusAPIQuery, ListBusLocatorStatusesQuery, ListBusStopsQuery, ListBustrackersQuery, ListHeatMapsQuery, ListHotZonesQuery, ListHotZonesQueryVariables, ListListLineBusStopsQuery, ListLocatorProgressesQuery, ListStatusAPISQuery, ListVirtualBusTrackersQuery, TableIntFilterInput, UpdateBustrackerMutation, UpdateLocatorProgressInput, UpdateLocatorProgressMutation, UpdateStatusAPIMutation } from './API';

import { HttpException, HttpStatus, Injectable, Body } from '@nestjs/common';



import { API, GraphQLQuery, } from '@aws-amplify/api'
import { graphqlOperation } from 'aws-amplify'
import * as jwt from 'jsonwebtoken';
import { v4 as uuidv4 } from 'uuid';
import { createBustracker, createHeatMap, createHotZone, createLogBusTracker, createSession, createVirtualBusTracker, updateBustracker, updateLocatorProgress, updateStatusAPI } from './graphql/mutations.js'

import { CreateSessionInput, CreateSessionMutation, GetSessionQuery, CreateHotZoneMutation } from './API';
import { getSession, listBusStops, listBustrackers, listListLineBusStops, listLogBusTrackers, listHotZones, listHeatMaps, listStatusAPIS, listBusLocatorStatuses, getStatusAPI, getBusLocatorStatus, listLocatorProgresses, getListLineBusStops, getBustracker, listVirtualBusTrackers } from './graphql/queries';
import { UpdateStatusAPIInput } from './API';
import { Cron, CronExpression } from '@nestjs/schedule';
import { myLocatorProgress } from './dto/locatorProgress-dto';

// import { createCipheriv, randomBytes, scrypt } from 'crypto';
// import { promisify } from 'util';
@Injectable()
export class AppService {
  constructor() {
    console.log("injected complete")
  


    try {
     
      const awsmobile = {
       

      };

      API.configure(awsmobile)
      console.log("connect to appsync")


    }
    catch (e) {
      console.log(e)
    }




  }
  public async getMySession(myIp: string): Promise<string> {
    try {
      const clientId = uuidv4();
      const token = jwt.sign({ address: myIp, client: clientId }, 'my-secret-key', { expiresIn: '30m' });

      console.log("-------------")
      console.log(token)
      console.log("-------------")
      console.log(clientId)
      console.log("-------------")
      const de = jwt.decode(token)
      console.log(de)
      console.log(de["address"])
      const temp: CreateSessionInput = { client: clientId, sskey: token, created: de['iat'], expired: de['exp'], ip: myIp.toString() }
      console.log("whhhh")
      const test = await API.graphql<GraphQLQuery<CreateSessionMutation>>(graphqlOperation(createSession, { input: temp }))
      console.log("-------------")
      console.log(test)
      return token;
    }
    catch (e) {
      throw (e)
    }
    // console.log(getSessionRequest)

  }
  public async getSessionBySession(mySession: string, client: string) {
    console.log("inside", mySession)
    try {
      const temp = { sskey: mySession, client: client }
      console.log("ihhhh", mySession)
      const sessionTemp = await API.graphql<GraphQLQuery<GetSessionQuery>>(graphqlOperation(getSession, temp))
      if (sessionTemp != null) {
        return sessionTemp
      }
      else {
        return null
      }
    }
    catch (e) {
      console.log("e+", e)
      throw (e)
    }
  }
  public async listAllBusStops() {
    try {
      console.log("daaaddda")
      const dataTemp = await API.graphql<GraphQLQuery<ListBusStopsQuery>>(graphqlOperation(listBusStops, { limit: 100 }))
      console.log("da")
      return dataTemp
    }
    catch (e) {
      throw response.status(404).json("no data busStops right now")
    }
  }
  public async sendHotZoneTest(myLat, myLng) {
    try {
      const timeTemps = Date.now()
      console.log("mytime", timeTemps, typeof (timeTemps))
      const randomTemp = uuidv4();
      const inputTemp = { hzid: randomTemp, lat: myLat, long: myLng, timeStamp: timeTemps }

      // const inputTemp = { hzid: randomTemp, lat: req.lat, long: req.long, timeStamp: timeTemps }
      const dataTemp = await API.graphql<GraphQLQuery<CreateHotZoneMutation>>(graphqlOperation(createHotZone, { input: inputTemp }))
      console.log("inside hz", dataTemp)
      return true
    }
    catch (e) {
      console.log("inside catce hz", e)
      return false
    }
  }

  public async sendHotZone(req) {
    try {
      const timeTemps = Date.now()
      console.log("mytime", timeTemps, typeof (timeTemps))
      const randomTemp = uuidv4();


      const inputTemp = { hzid: randomTemp, lat: req.lat, long: req.long, timeStamp: timeTemps }
      const dataTemp = await API.graphql<GraphQLQuery<CreateHotZoneMutation>>(graphqlOperation(createHotZone, { input: inputTemp }))
      console.log("inside hz", dataTemp)
      return true
    }
    catch (e) {
      console.log("inside catce hz", e)
      return false
    }
  }
  public checkBusStop(busTemp, keyChanged): CoordinateDTO {
    try {
      var ansTemp = []
      var bsidTemp: number
      for (const i of busTemp) {

        if (i['bsid'] == keyChanged) {
          ansTemp = i['coordinate']
          bsidTemp = i['bsid']
          break;
        }

      }
      if (ansTemp[0] > ansTemp[1]) {
        const myTemp = ansTemp[1]
        ansTemp[1] = ansTemp[0]
        ansTemp[0] = myTemp
      }

      const myCoor: CoordinateDTO = { lat: ansTemp[0], lng: ansTemp[1], bsid: bsidTemp }
      return myCoor
    }
    catch (e) {
      throw new e
    }
    // const foundBus = Object.values(busTemp).find(bus => console.log("type:", busTemp.map))
    // return foundBus ? foundBus['coordinate'] : undefined

  }

  public async listAllListLineBusStops() {
    try {
      console.log("noaaa")
      const listTemp = await this.listAllBusStops()
      const listTempData = listTemp.data.listBusStops.items
      console.log("no")
      const dataTemp = await API.graphql<GraphQLQuery<ListListLineBusStopsQuery>>(graphqlOperation(listListLineBusStops))
      var testInt = 0
      var myAllListLineDataDTO = []
      for (const i in dataTemp.data.listListLineBusStops.items) {
        console.log(testInt)
        const objectTemp = dataTemp.data.listListLineBusStops.items[testInt].lineData
        const result = JSON.parse(objectTemp)
        const myMap = new Map<string, string>(Object.entries(result));
        var mapInt = 0
        var checkCo: CoordinateDTO
        var myLineData: LineDataDTO
        var myListLineData = []
        var myListLineDataDTO: LineListBustStopDTO
        for (const j of myMap) {
          checkCo = this.checkBusStop(listTempData, j[1])
          myLineData = { key: mapInt.toString(), value: checkCo }
          myListLineData.push(myLineData)
          mapInt += 1
        }
        myListLineDataDTO = { lid: testInt.toString(), line: dataTemp.data.listListLineBusStops.items[testInt].line, lineData: myListLineData }
        myAllListLineDataDTO.push(myListLineDataDTO)
        testInt += 1
      }
      return myAllListLineDataDTO
    }
    catch (e) {
      console.log(e)
    }
  }



  public async listAllBusTracker() {
    const dataTemp = await API.graphql<GraphQLQuery<ListBustrackersQuery>>(graphqlOperation(listBustrackers))
    const tempList = []
    var testInt = 0
    for (const i in dataTemp.data.listBustrackers.items) {
      const jsonTemp = JSON.parse(dataTemp.data.listBustrackers.items[testInt].data)
      const objectTemp = { uuid: dataTemp.data.listBustrackers.items[testInt].uuid, lat: jsonTemp.latitude, lng: jsonTemp.longitude, timeStamp: dataTemp.data.listBustrackers.items[testInt].timeStamp, status: jsonTemp.status }
      tempList.push(objectTemp)
      testInt += 1
    }
    return tempList
  }
  public async getBusTracker(myID) {
    try {
      const inputTemp = { uuid: myID }
      const dataTemp = await API.graphql<GraphQLQuery<GetBustrackerQuery>>(graphqlOperation(getBustracker, inputTemp))

      return dataTemp
    }
    catch (e) {
      console.log("why", e)
    }
  }



  public async sendLogBusTracker(busID, mylat, mylng) {
    try {
      const timeTemps = Date.now()
      const randomTemp = uuidv4();
      const inputTemp = { llid: randomTemp, bsid: busID, lat: mylat, lng: mylng, timeStamp: timeTemps }
      const dataTemp = await API.graphql<GraphQLQuery<CreateLogBusTrackerMutation>>(graphqlOperation(createLogBusTracker, { input: inputTemp }))
    }
    catch (e) {
      throw new HttpException(e, 500)
    }
  }
  public async listHotZonesByDays(req) {
    try {

      const myDay: number = req.day
      const currentTimeStamp = Date.now();
      const sevenDaysAgoTimeStamp: number = currentTimeStamp - (myDay * 24 * 60 * 60 * 1000);
      const variables = {
        timeStamp: { gt: sevenDaysAgoTimeStamp.toString() }

      }
      console.log(sevenDaysAgoTimeStamp)
      const dataTemp = await API.graphql<GraphQLQuery<ListHotZonesQuery>>(graphqlOperation(listHotZones, { filter: variables, limit: 150 }))

      const tempList = []

      for (const i in dataTemp.data.listHotZones.items) {
        tempList.push(dataTemp.data.listHotZones.items[i])
      }
      return tempList
    }
    catch (e) {
      console.log(e)
      throw new HttpException(e, 401)
    }

  }

  public async listRecentHeatMap() {
    try {
      console.log("listHors")
      const dataTemp = await API.graphql<GraphQLQuery<ListHeatMapsQuery>>(graphqlOperation(listHeatMaps, { limit: 1 }))
      console.log(dataTemp.data.listHeatMaps.items)
      return dataTemp.data.listHeatMaps.items
    }
    catch (e) {
      throw new HttpException(e, 401)
    }
  }

  public async getStatusAPI(req) {
    try {
      console.log("getStatusAPI")
      const inputTemp = { apiid: req.apiid }
      const dataTemp = await API.graphql<GraphQLQuery<GetStatusAPIQuery>>(graphqlOperation(getStatusAPI, inputTemp))
      console.log(dataTemp.data.getStatusAPI)
      return dataTemp.data.getStatusAPI
    }
    catch (e) {
      throw new HttpException(e, 401)
    }
  }



  public async listAllStatusAPI() {
    try {
      console.log("listAllStatusAPI")
      const dataTemp = await API.graphql<GraphQLQuery<ListStatusAPISQuery>>(graphqlOperation(listStatusAPIS))
      console.log(dataTemp.data.listStatusAPIS.items)
      return dataTemp.data.listStatusAPIS.items
    }
    catch (e) {
      throw new HttpException(e, 401)
    }
  }

  public async updateStatusAPI(req) {
    try {
      console.log("updateAAllStatusAPI", req)

      const inputTemp: UpdateStatusAPIInput = { apiid: req.apiid, des: req.des, isAvalible: req.isAvalible, usedAll: req.usedAll, usedMonth: req.usedMonth }
      console.log(inputTemp)
      const dataTemp = await API.graphql<GraphQLQuery<UpdateStatusAPIMutation>>(graphqlOperation(updateStatusAPI, { input: inputTemp }))
      console.log(dataTemp.data.updateStatusAPI)
      return dataTemp.data.updateStatusAPI
    }
    catch (e) {
      throw new HttpException(e, 401)
    }
  }

  public async getBusLocatorStatuses(req) {
    try {
      console.log("getBusLocatorStatuses")
      const inputTemp = { bbid: req.bbid }
      const dataTemp = await API.graphql<GraphQLQuery<GetBusLocatorStatusQuery>>(graphqlOperation(getBusLocatorStatus, inputTemp))
      console.log(dataTemp.data.getBusLocatorStatus)
      return dataTemp.data.getBusLocatorStatus
    }
    catch (e) {
      throw new HttpException(e, 401)
    }
  }


  public async listBusLocatorStatuses() {
    try {
      console.log("  listBusLocatorStatuses")
      const dataTemp = await API.graphql<GraphQLQuery<ListBusLocatorStatusesQuery>>(graphqlOperation(listBusLocatorStatuses))
      console.log(dataTemp.data.listBusLocatorStatuses.items)
      return dataTemp.data.listBusLocatorStatuses.items
    }
    catch (e) {
      throw new HttpException(e, 401)
    }
  }

  public async updateLocatorProgress(data) {
    try {
      const inputTemp: UpdateLocatorProgressInput = { lid: data.lid, isActive: data.isActive, lineID: data.lineID, progress: data.progress }
      console.log(inputTemp, "input")
      const dataTemp = await API.graphql<GraphQLQuery<UpdateLocatorProgressMutation>>(graphqlOperation(updateLocatorProgress, { input: inputTemp }))
      return dataTemp
    }
    catch (e) {
      throw new HttpException(e.error, 401)
    }

  }

  public async createLogBusTracker(data) {
    try {
      const inputTemp: CreateLogBusTrackerInput = { llid: data.llid, bsid: data.bsid, lat: data.lat, lng: data.lng, timeStamp: data.timeStamp }

      const dataTemp = await API.graphql<GraphQLQuery<CreateLogBusTrackerMutation>>(graphqlOperation(createLogBusTracker, { input: inputTemp }))

    }
    catch (e) {

    }
  }
  public async listAllLocatorProgresses() {
    try {
      console.log("listAllLocatorProgresses")
      const dataTemp = await API.graphql<GraphQLQuery<ListLocatorProgressesQuery>>(graphqlOperation(listLocatorProgresses))
      const dataObject = JSON.stringify(dataTemp.data.listLocatorProgresses.items)
      const dataArray = JSON.parse(dataObject);
      const temp = []
      for (let i in dataArray) {
        const tempParse = JSON.parse(dataArray[i].progress)
        const myInterface: myLocatorProgress = { lid: dataArray[i].lid, isActive: dataArray[i].isActive, lineID: dataArray[i].lineID, progress: tempParse }
        temp.push(myInterface)
      }
      return temp
    }
    catch (e) {
      throw new HttpException(e, 401)
    }
  }
  public async createVirtualBustracker(myData: CreateVirtualBusTrackerInput) {
    try {
      const dataTemp = await API.graphql<GraphQLQuery<CreateVirtualBusTrackerMutation>>(graphqlOperation(createVirtualBusTracker, { input: myData }))
      return dataTemp
    }
    catch (e) {
      throw new Error(e)
    }
  }

  public async listAllVirtualBustrackerBybbid(bbid: String) {
    try {
      const variables = {
        bbid: { eq: bbid }
      }



      const dataTemp = await API.graphql<GraphQLQuery<ListVirtualBusTrackersQuery>>(graphqlOperation(listVirtualBusTrackers, { filter: variables, limit: 1000 }))

      return dataTemp.data.listVirtualBusTrackers.items
    }
    catch (e) {
      throw new Error(e)
    }
  }
  public async updateBustrackerVisual(bbid: number, myData) {
    try {
      const Temp = {
        latitude:
          myData['lat'],

        longitude: myData['lng'],

        status: "true"
      }
      const jTemp = JSON.stringify(Temp)
      const inputTemp: CreateBustrackerInput = {
        uuid: bbid, data: jTemp, timeStamp: Date.now().toString()
      }

      const dataTemp = await API.graphql<GraphQLQuery<UpdateBustrackerMutation>>(graphqlOperation(updateBustracker, { input: inputTemp }))
      return dataTemp

    }
    catch (e) {
      throw e
    }
  }

  // @Cron(CronExpression.EVERY_5_SECONDS)
  // async handleCron() {
  //   try {
  //     console.log("infinity")
  //     const dataTemp = await API.graphql<GraphQLQuery<ListLocatorProgressesQuery>>(graphqlOperation(listLocatorProgresses))
  //     const dataTempLen = dataTemp.data.listLocatorProgresses.items.length

  //     const dataTempFor = dataTemp.data.listLocatorProgresses.items
  //     for (let i = 0; i < dataTempLen; i++) {
  //       if (dataTempFor[i].isActive == true) {
  //         console.log(dataTempFor[i].isActive)
  //         const tempCorLocator = await this.listAllBusTracker()
  //         const myCor = tempCorLocator.find(index => {
  //           if (index.uuid === parseInt(dataTempFor[i].lid)) {
  //             return index

  //           }

  //         })


  //         const inputLineTemp = { lid: dataTempFor[i].lineID }
  //         const tempLineBus = await API.graphql<GraphQLQuery<GetListLineBusStopsQuery>>(graphqlOperation(getListLineBusStops, inputLineTemp))
  //         const objectLineBus: Map<string, string> = new Map(Object.entries(JSON.parse(tempLineBus.data.getListLineBusStops.lineData)));
  //         const objectProgress: Map<string, string> = new Map(Object.entries(JSON.parse(dataTempFor[i].progress)));
  //         if (objectLineBus.size > objectProgress.size) {
  //           const keynext = objectProgress.size.toString()
  //           const nextBusStopID = objectLineBus.get(keynext)

  //           const listTemp = await this.listAllBusStops()
  //           const listTempData = listTemp.data.listBusStops.items
  //           const checkCo = this.checkBusStop(listTempData, nextBusStopID)
  //           console.log(checkCo)

  //           const checkabs = 0.001
  //           const nextBusStopCor = { lat: checkCo.lat, lng: checkCo.lng }
  //           console.log(typeof (nextBusStopCor.lat), typeof (myCor.lat))
  //           const absLat: number = parseFloat(Math.abs(nextBusStopCor.lat - myCor.lat).toFixed(6))
  //           const absLng: number = parseFloat(Math.abs(nextBusStopCor.lng - myCor.lng).toFixed(6))


  //           if ((absLat < checkabs) && (absLng < checkabs)) {

  //             const myDataProgress = objectProgress.set(objectProgress.size.toString(), nextBusStopID)
  //             const myDataProgressTemp = JSON.stringify(Array.from(myDataProgress.entries()));
  //             const inputTemp: UpdateLocatorProgressInput = { lid: dataTempFor[i].lid, progress: myDataProgressTemp }
  //             const res = await this.updateLocatorProgress(inputTemp)

  //           }
  //           else {

  //           }
  //         }
  //         else if (objectLineBus.size == objectProgress.size) {

  //         }
  //       }

  //     }
  //   }
  //   catch (e) {
  //     throw new HttpException(e, 500)
  //   }
  // }

  // public async createRecentHeapMap() {
  //   try {
  //     const dataTemp = await API.graphql<GraphQLQuery<CreateHeatMapMutation>>(graphqlOperation(createHeatMap,))
  //   }
  //   catch (e) {

  //   }
  // }

  // public async createTestOne(modelGetTaskRequest: createUserDTO) {
  //   try {
  //     const user: User = new User();
  //     user.username = modelGetTaskRequest.username;
  //     if (modelGetTaskRequest.mail) {
  //       user.email = modelGetTaskRequest.mail
  //     }
  //     // const iv = randomBytes(8);
  //     const password = await myEncrypted(modelGetTaskRequest.password, mySalt);
  //     // const key = (await promisify(scrypt)(password, 'salt', 32)) as Buffer;
  //     // const cipher = createCipheriv('aes-256-ctr', key, iv);

  //     // const textToEncrypt = 'Nest';
  //     // const encryptedText = Buffer.concat([
  //     //   cipher.update(textToEncrypt),
  //     //   cipher.final(),
  //     // ]);
  //     user.password = password
  //     await this.UserRepo.save(user);
  //     return { data: user.username, status: HttpStatus.OK }
  //   }
  //   catch (e) {
  //     throw Error(e);

  //   }
  // }


  // public async getUserByUsername(modelGetTaskRequest: getUserDTO) {
  //   console.log("whaaaaat", modelGetTaskRequest)
  //   const myData = await this.UserRepo.findOne({ where: { username: modelGetTaskRequest.username } });
  //   console.log("nani", myData)
  //   return myData
  // }

}

