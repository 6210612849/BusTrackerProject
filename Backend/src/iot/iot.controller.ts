import { Controller, Get, Body, Post } from '@nestjs/common';
import { IOTService } from './iot.service';

@Controller("iot")
export class IOTController {
    constructor(
        private readonly myIotService: IOTService) {
    }

    @Post('SettingIntervalAll')
    public async SettingIntervalAll(@Body() req) {

        const res = this.myIotService.SettingIntervalAll(req)
        return res
    }

    @Post('SettingIntervalByID')
    public async SettingIntervalByID(@Body() req) {
        const res = this.myIotService.SettingIntervalByID(req)
        return res
    }

    @Get('setStatusOffAll')
    public async setStatusOffALL() {
        const res = this.myIotService.SetStatusOffAll()
        return res
    }

    @Get('setStatusOnAll')
    public async setStatusOnALL() {
        const res = this.myIotService.SetStatusOnAll()
        return res
    }

    @Post('setStatusByID')
    public async setStatusByID(@Body() req) {
        const res = this.myIotService.setStatusByID(req)
        return res
    }

    @Post('listBustrackerAll')
    public async listBustrackerAll(@Body() req) {
        const res = this.myIotService.listAllBustrackers()
        return res
    }

    @Get('test')
    public async test(@Body() req) {
        const res = this.myIotService.test()
        return res
    }

    // @Get('test')
    // public async test(@Body() req) {
    //     const res = this.myIotService.test()
    //     return res
    // }

}
