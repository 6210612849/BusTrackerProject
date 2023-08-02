
import { BadRequestException, } from '@nestjs/common';
import { Body, Controller, Get, Post, Req, Request, Session, UseGuards, HttpException, } from '@nestjs/common';
import { AppService } from './app.service';

import { JwtAuthGuard } from './auth/jwt-auth.guard';
import { ListHotZonesQueryVariables } from './API';


@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  public async welcome() {
    return "hello welcome lul"
  }

  // @Post()
  // public async createOne(@Body() createUserRequest: CreateUserDTO) {
  //   try {
  //     const res = await this.appService.createTestOne(createUserRequest);
  //     return res
  //   }
  //   catch (e) {

  //     throw e
  //   }

  // }

  // @Get('/getuser')
  // public async getlUserByUsername(@Body() createUserRequest: GetUserDTO) {
  //   try {
  //     const res = await this.appService.getUserByUsername(createUserRequest);

  //     return res;
  //   }
  //   catch (e) {
  //     console.log(e)
  //     throw e
  //   }
  // }
  // @UseGuards(JwtAuthGuard)
  @Post('sendHotZone')
  async sendHotZone(@Body() req: any) {
    try {
      console.log("what da", req)
      const res = await this.appService.sendHotZone(req)
      if (res) {
        return true
      }
      else {
        throw new BadRequestException()
      }
    }
    catch (e) {
      console.log("Hz", e)
      throw new BadRequestException()
    }
  }


  @Post('sendHotZoneTest')
  async sendHotZoneTest(@Body() req: any) {
    try {
      for (let i = 0; i < 50; i++) {
        const min = 14.065218;
        const max = 14.080854;
        const myLat = min + Math.random() * (max - min);
        const minLng = 100.593705;
        const maxLng = 100.617651;
        const myLng = minLng + Math.random() * (maxLng - minLng);
        const res = await this.appService.sendHotZoneTest(myLat, myLng)
      }

      return true

    }
    catch (e) {
      console.log("Hz", e)
      throw new BadRequestException()
    }
  }


  @Get('listAllBusTrackers')
  async listAllBusTrackers(@Request() req) {
    const res = await this.appService.listAllBusTracker()
    return res
  }


  // @UseGuards(JwtAuthGuard)
  @Get('listAllBusStops')
  async listAllBusStops(@Request() req) {
    try {
      console.log("busStop")
      const res = await this.appService.listAllBusStops()
      return res
    }
    catch (e) {
      throw (e)
    }
  }

  @UseGuards(JwtAuthGuard)
  @Get('session/check')
  checkSession(@Request() req) {
    console.log("hhhhhh", req)
    return "wait"
  }


  @Get('listAllListLineBusStops')
  async listAllListLineBusStops() {
    const res = await this.appService.listAllListLineBusStops()
    return res
  }

  // @Get('listAllListLineBusStopsV2')
  // async listAllListLineBusStopsV2(@Request() req) {
  //   const res = await this.appService.listAllListLineBusStopsV2()
  //   return res
  // }



  @Get('session')
  public async getSession(@Req() req) {
    try {
      const userIP = req.headers['x-forwarded-for'] || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress;
      console.log("nani", typeof (userIP))
      console.log("/************", userIP)
      const res = await this.appService.getMySession(userIP)

      return res
    }
    catch (e) {
      throw new BadRequestException(e)
    }

  }

  @Get('sendLogBusTracker')
  public async sendLogBusTracker(@Body() req) {
    try {
      const res = await this.appService.sendLogBusTracker(req.busID, req.lat, req.lng)

      return res
    }
    catch (e) {
      throw new BadRequestException(e)
    }

  }
  @Post('listHotZoneByDay')
  public async listHotZoneByDay(@Body() req) {
    try {
      console.log("dafuq")
      const res = await this.appService.listHotZonesByDays(req)
      return res

    }
    catch (e) {
      throw new BadRequestException(e)
    }
  }

  @Get('listRecentHeatMap')
  public async getHeatMap() {
    try {
      const res = await this.appService.listRecentHeatMap()
      return res
    }
    catch (e) {
      throw new BadRequestException(e)
    }
  }

  @Get('listAllBusTrackerSpeed')
  public async listAllBusTrackerSpeed(@Body() req) {
    try {

    }
    catch (e) {
      throw new BadRequestException(e)
    }
  }

  @Get('listAllStatusAPI')
  public async listAllStatusAPI() {
    try {
      const res = await this.appService.listAllStatusAPI()
      return res
    }
    catch (e) {
      throw new BadRequestException(e)
    }
  }

  @Post('getStatusAPI')
  public async getStatusAPI(@Body() req) {
    try {
      const res = await this.appService.getStatusAPI(req)
      return res
    }
    catch (e) {
      throw new BadRequestException(e)
    }
  }
  @Post('updateStatusAPI')
  public async updateStatusAPI(@Body() req) {
    try {
      const res = await this.appService.updateStatusAPI(req)
      return res
    }
    catch (e) {
      throw new BadRequestException(e)
    }
  }


  @Get('listBusLocatorStatuses')
  public async listBusLocatorStatuses() {
    try {
      const res = await this.appService.listBusLocatorStatuses()
      return res
    }
    catch (e) {
      throw new BadRequestException(e)
    }
  }

  @Post('getBusLocatorStatuses')
  public async getBusLocatorStatus(@Body() req) {
    try {
      const res = await this.appService.getBusLocatorStatuses(req)
      return res
    }
    catch (e) {
      throw new BadRequestException(e)
    }
  }

  @Get('listAllLocatorProgresses')
  public async listAllLocatorProgresses() {
    try {
      const res = await this.appService.listAllLocatorProgresses()
      return res
    }
    catch (e) {
      throw new BadRequestException(e)
    }
  }




}
