import { GraphQLQuery, API } from '@aws-amplify/api';
import { listBustrackers } from './../graphql/queries';


import { Dependencies, HttpException } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import { graphqlOperation } from 'aws-amplify';
import { device, thingShadow } from 'aws-iot-device-sdk';
import { count, error } from 'console';
import * as fs from 'fs';
import { delay } from 'rxjs';
import { CreateHeatMapInput, CreateHeatMapMutation, HeatMap, HeatMapDataInput } from 'src/API';
import { AppService } from 'src/app.service';
import * as util from 'util'
import { createHeatMap } from 'src/graphql/mutations';
import { v4 as uuidv4 } from 'uuid';
@Dependencies(AppService)
export class IOTService {

    constructor(private appService: AppService) {
        this.appService = appService;
    }

    public async SettingIntervalAll(req: any) {
        try {

            const myDevice = await this.createMyDevice()
            myDevice.on('connect', function () {
                myDevice.publish('esp32/setinterval', JSON.stringify({ timeInterval: req.timeInterval }), null, (error) => {
                    if (error) {
                        myDevice.end()
                        throw new HttpException(error, 404)
                    }
                    else {
                        myDevice.end()
                    }
                });

            })

        }
        catch (e) {
            console.log("error on", e)
        }
    }

    public async SettingIntervalByID(req: any) {
        try {
            const myDevice = await this.createMyDevice()
            myDevice.on('connect', function () {
                console.log('connect');
                myDevice.publish('esp32/' + req.device + 'setinterval', JSON.stringify({ timeInterval: req.timeInterval }), null, (error) => {
                    if (error) {
                        myDevice.end()
                        throw new HttpException(error, 404)
                    }
                    else {
                        myDevice.end()
                    }
                });
            })

        }
        catch (e) {
            console.log("error on", e)
            throw new HttpException(e, 500)
        }
    }
    public async SetStatusOffAll() {
        try {
            const myDevice = await this.createMyDevice()
            myDevice.on('connect', async function () {
                console.log('connect');
                myDevice.publish('esp32/setAll', JSON.stringify({ "status": false }), null, (error) => {
                    if (error) {
                        myDevice.end()
                        throw new HttpException(error, 404)
                    }
                    else {
                        myDevice.end()
                    }
                })
            })
        }
        catch (e) {
            throw new HttpException(e, 500)
        }
    }

    public async SetStatusOnAll() {
        try {
            const myDevice = await this.createMyDevice()
            myDevice.on('connect', function () {
                console.log('connect');
                myDevice.publish('esp32/setAll', JSON.stringify({ "status": true }), null, (error) => {
                    if (error) {
                        myDevice.end()
                        throw new HttpException(error, 404)
                    }
                    else {
                        myDevice.end()
                    }
                });
            })
        }
        catch (e) {
            console.log("error on", e)
            throw new HttpException(e, 500)
        }
    }
    public async setStatusByID(req) {

        try {
            const myDevice = await this.createMyDevice()
            myDevice.on('connect', function () {
                console.log('connect');
                myDevice.publish('esp32/' + req.device + '/setStatus', JSON.stringify({ "status": req.deviceStatus }), null, (error) => {
                    if (error) {
                        myDevice.end()
                        throw new HttpException(error, 404)
                    }
                    else {
                        myDevice.end()
                    }
                });
            })
        }
        catch (e) {
            console.log("error on", e)
            throw new HttpException(e, 500)
        }
    }

    private async createMyDevice(): Promise<device> {
        const myPath = './src/iot/0/'
        const myDevice = new device({ keyPath: myPath + "private.key", certPath: myPath + "cert.crt", caPath: myPath + "ca.pem", clientId: "BackEnd", host: "a1o8gg2gj90gqo-ats.iot.ap-southeast-1.amazonaws.com" })
        return myDevice
    }
    public async listAllBustrackers() {
        const res = await this.appService.listAllBusTracker()
        return res
    }
    public async test() {
        const myDevice = await this.createMyDevice();
        console.log("yee", "ggg")
        myDevice.subscribe('esp32/setinterval')
        myDevice.on('connect', function () {
            myDevice.on('message', (topic, payload) => {
                console.log('Received message:', topic, payload.toString());
            });
        })

    }

    // @Cron(CronExpression.EVERY_HOUR)
    // handleCron() {
    // public async test() {
    //     try {
    //         const timeTemps = Date.now()
    //         const randomTemp = uuidv4();
    //         console.log('Called when every Hour');
    //         const latSlice = 0.003
    //         const lngSlice = 0.0045


    //         const dataTemp = await this.appService.listHotZonesByDays(7)
    //         console.log(dataTemp.length)
    //         if (dataTemp.length >= 24) {
    //             type myHeatMapType = [{ lat: number, lng: number }, { weight: number }]
    //             const myHeatMap = []

    //             for (let latStart = 14.065218; latStart < 14.080854; latStart += latSlice) {
    //                 for (let lngStart = 100.593705; lngStart < 100.617651; lngStart += lngSlice) {
    //                     var matchCount = 0
    //                     for (let i in dataTemp) {

    //                         if (((latStart < dataTemp[i].lat) && (dataTemp[i].lat < (latStart + latSlice))) && ((lngStart < dataTemp[i].long) && (dataTemp[i].long < (lngStart + lngSlice)))) {
    //                             let index: number = +i
    //                             dataTemp.splice(index, 1)
    //                             matchCount += 1

    //                         }
    //                         else {
    //                         }
    //                     }
    //                     const latNum: number = +latStart.toFixed(6)
    //                     const lngNum: number = +lngStart.toFixed(6)
    //                     const microHeatMap: myHeatMapType = [{ lat: latNum, lng: lngNum }, { weight: matchCount }]
    //                     myHeatMap.push(microHeatMap)
    //                 }
    //             }
    //             const dataFilter = myHeatMap.filter((obj) => {
    //                 return obj[1].weight! >= 1
    //             })
    //             // const inputHeatMap = { hid: randomTemp, timeStamp: timeTemps.toString(), heatMapData: dataFilter }
    //             const tempListHeatMapData = []
    //             for (let i in dataFilter) {
    //                 const tempHeatMapData: HeatMapDataInput = { lat: dataFilter[i][0].lat, lng: dataFilter[i][0].lng, weight: dataFilter[i][1].weight }
    //                 tempListHeatMapData.push(tempHeatMapData)
    //             }

    //             const tempHeatMapInput: CreateHeatMapInput = { hid: randomTemp, timeStamp: timeTemps.toString(), heatMapData: tempListHeatMapData }
    //             const sendHeatMap = await API.graphql<GraphQLQuery<CreateHeatMapMutation>>(graphqlOperation(createHeatMap, { input: tempHeatMapInput }))
    //             console.log(sendHeatMap)
    //         }


    //         else {
    //             return dataTemp
    //         }
    //     }
    //     catch (e) {
    //         console.log(e)
    //         throw new (e)
    //     }

    // }

}

