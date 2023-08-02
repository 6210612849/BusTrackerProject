// import { PythonModule } from './python/python.module';

import { Logger, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { WebSocketGateway, WebSocketServer, OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect, SubscribeMessage, MessageBody } from '@nestjs/websockets';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { AuthService } from './auth/auth.service';
import { JwtStrategy } from './auth/jwt.strategy';
import { PythonModule } from './python/python.module';
import { IOTModule } from './iot/iot.module';
import { ScheduleService } from './schedule.service';

// TypeOrmModule.forFeature([User, Room]), DatabaseModule,SocketController, PollService, PollGateway
@Module({
  imports: [PassportModule, JwtModule.register({
    secret: 'my-secret-key',
    signOptions: { expiresIn: '1200s' },
  }), PythonModule, IOTModule],
  controllers: [AppController],
  providers: [AppService, AuthService, JwtStrategy,]
})
export class AppModule { }
