import { Module } from "@nestjs/common";
import { IOTService } from "./iot.service";
import { IOTController } from "./iot.controller";
import { AppService } from "src/app.service";
import { ScheduleModule } from '@nestjs/schedule';

@Module({
    imports: [ScheduleModule.forRoot()],
    providers: [IOTService, AppService],
    controllers: [IOTController]
})
export class IOTModule { }