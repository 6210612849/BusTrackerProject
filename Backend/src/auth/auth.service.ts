import { Injectable, Dependencies, HttpStatus, UnauthorizedException } from '@nestjs/common';
import { AppService } from 'src/app.service';
import * as bcrypt from 'bcrypt';
import { GetUserDTO, LoginRequest } from 'src/type/type';
import { getUserDTO } from 'src/dto/get-task.dto';
import { error } from 'console';
import { async } from 'rxjs';
import * as jwt from 'jsonwebtoken';
@Injectable()
@Dependencies(AppService)
export class AuthService {
  constructor(private appService: AppService) {
    this.appService = appService;
  }

  async validateToken(token: string) {
    try {
      const isMySession = jwt.verify(token, 'my-secret-key')
      const tempToken = await this.appService.getSessionBySession(token, isMySession['client'])
      if (!tempToken) {
        return false
      }
      else {
        return true
      }
    }
    catch (e) {

      return false
    }

    // const user = await this.appService.getSessionBySession(mySession);
    // console.log(loginRequest.password, user, "aaadakkkkk")
    // if (user) {

    //   console.log(loginRequest.password, user, "aaadafuqaaa")
    //   const test = await bcrypt.compare(loginRequest.password, user.password)
    //   if (test) {
    //     return user
    //   }
    //   else {
    //     return null
    //   }
    // }
    // else {
    //   throw HttpStatus.UNAUTHORIZED
    // }

  }
}