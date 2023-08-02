
import { CreateLogBusTrackerInput, CreateVirtualBusTrackerInput, GetListLineBusStopsQuery, ListLocatorProgressesQuery, UpdateLocatorProgressInput } from './API';

import { HttpException, HttpStatus, Injectable, Body } from '@nestjs/common';



import { API, GraphQLQuery, } from '@aws-amplify/api'
import { graphqlOperation } from 'aws-amplify'
import { v4 as uuidv4 } from 'uuid';


import { listLocatorProgresses, getListLineBusStops } from './graphql/queries';

import { Cron, CronExpression } from '@nestjs/schedule';
import { AppService } from './app.service.js';


// import { createCipheriv, randomBytes, scrypt } from 'crypto';
// import { promisify } from 'util';
@Injectable()
export class ScheduleService {

    private myData3: any
    private index3 = 0
    private index4 = 0
    private end4 = 0
    private end3 = 0
    private myData4: any
    constructor(private appService: AppService) {
        this.appService = appService;


    }

    // @Cron(CronExpression.EVERY_5_SECONDS) async handleCron() {
    //     try {
    //         const tempData = await this.appService.getBusTracker(3)
    //         const time = Date.now().toString()
    //         const object = JSON.parse(tempData.data.getBustracker.data)
    //         console.log("testtemp", tempData)
    //         const inputTemp: CreateVirtualBusTrackerInput = { bbid: "3", timeStamp: time, lat: object.latitude, lng: object.longitude }
    //         const res = await this.appService.createVirtualBustracker(inputTemp)
    //         console.log(res)
    //     }
    //     catch (e) {
    //         throw (e)
    //     }

    // }

    @Cron(CronExpression.EVERY_5_SECONDS) async handleCronBus() {
        try {
            if (this.myData4 == null) {
                const test = await this.appService.listAllVirtualBustrackerBybbid("4")
                this.myData4 = test
                this.end4 = test.length

                const test3 = await this.appService.listAllVirtualBustrackerBybbid("3")
                this.myData3 = test3
                this.end3 = test.length



            }

            else {

                if (this.index4 < this.end4) {
                    const myData = this.myData4[this.index4]

                    await this.appService.updateBustrackerVisual(4, myData)
                    this.index4 += 1

                }
                else {
                    this.index4 = 0;
                }

                if (this.index3 < this.end3) {
                    const myData = this.myData3[this.index3]

                    await this.appService.updateBustrackerVisual(3, myData)
                    this.index3 += 1

                }
                else {
                    this.index3 = 0;
                }
            }


            // const indexData3 = this.myData3.le
            // const tempData = await this.appService.getBusTracker(3)
            // const time = Date.now().toString()
            // const object = JSON.parse(tempData.data.getBustracker.data)
            // console.log("testtemp", tempData)
            // const inputTemp: CreateVirtualBusTrackerInput = { bbid: "3", timeStamp: time, lat: object.latitude, lng: object.longitude }
            // const res = await this.appService.createVirtualBustracker(inputTemp)
            // console.log(res)
        }
        catch (e) {
            throw (e)
        }

    }

    // async fetchVirtual(bbid: String) {
    //     const test = await this.appService.listAllVirtualBustrackerBybbid(bbid)
    //     const temp = JSON.stringify(test)

    //     console.log(temp)
    //     return temp
    // }






    @Cron(CronExpression.EVERY_5_SECONDS)
    async handleCron() {
        try {
            // console.log("infinity")
            const dataTemp = await API.graphql<GraphQLQuery<ListLocatorProgressesQuery>>(graphqlOperation(listLocatorProgresses))
            const dataTempLen = dataTemp.data.listLocatorProgresses.items.length

            const dataTempFor = dataTemp.data.listLocatorProgresses.items
            for (let i = 0; i < dataTempLen; i++) {
                if (dataTempFor[i].isActive == true) {
                    // console.log(dataTempFor[i].isActive)
                    const tempCorLocator = await this.appService.listAllBusTracker()
                    const myCor = tempCorLocator.find(index => {
                        if (index.uuid === parseInt(dataTempFor[i].lid)) {
                            return index

                        }

                    })
                    const inputLineTemp = { lid: dataTempFor[i].lineID }
                    const tempLineBus = await API.graphql<GraphQLQuery<GetListLineBusStopsQuery>>(graphqlOperation(getListLineBusStops, inputLineTemp))
                    const objectLineBus: Map<string, string> = new Map(Object.entries(JSON.parse(tempLineBus.data.getListLineBusStops.lineData)));
                    const objectProgress: Map<string, string> = new Map(Object.entries(JSON.parse(dataTempFor[i].progress)));
                    if (objectLineBus.size > objectProgress.size) {
                        const keynext = objectProgress.size.toString()
                        const nextBusStopID = objectLineBus.get(keynext)

                        const listTemp = await this.appService.listAllBusStops()
                        const listTempData = listTemp.data.listBusStops.items
                        const checkCo = this.appService.checkBusStop(listTempData, nextBusStopID)
                        // console.log(checkCo)

                        const checkabs = 0.001
                        const nextBusStopCor = { lat: checkCo.lat, lng: checkCo.lng }
                        // console.log(typeof (nextBusStopCor.lat), typeof (myCor.lat))
                        const absLat: number = parseFloat(Math.abs(nextBusStopCor.lat - myCor.lat).toFixed(6))
                        const absLng: number = parseFloat(Math.abs(nextBusStopCor.lng - myCor.lng).toFixed(6))


                        if ((absLat < checkabs) && (absLng < checkabs)) {

                            const myDataProgress = objectProgress.set(objectProgress.size.toString(), nextBusStopID)
                            const myDataProgressTemp = JSON.stringify(Object.fromEntries(myDataProgress));
                            const inputTemp: UpdateLocatorProgressInput = { lid: dataTempFor[i].lid, progress: myDataProgressTemp }

                            const res = await this.appService.updateLocatorProgress(inputTemp)


                        }
                        else {

                        }
                        const date = new Date();
                        const randomTemp = uuidv4();

                        const unixTimestamp = Math.floor(date.getTime() / 1000);
                        const inputTempLog: CreateLogBusTrackerInput = { llid: randomTemp, bsid: dataTempFor[i].lid, lat: myCor.lat, lng: myCor.lng, timeStamp: unixTimestamp.toString() }
                        const res = await this.appService.createLogBusTracker(inputTempLog)
                    }

                    else if (objectLineBus.size == objectProgress.size) {
                        const restartProgressTemp: Map<string, string> = new Map([['0', objectLineBus.get('0')]])
                        const myDataProgressTemp = JSON.stringify(Object.fromEntries(restartProgressTemp));

                        const inputTemp: UpdateLocatorProgressInput = { lid: dataTempFor[i].lid, progress: myDataProgressTemp }
                        const res = await this.appService.updateLocatorProgress(inputTemp)

                    }



                }

            }
        }
        catch (e) {
            throw new HttpException(e, 500)
        }
    }


}