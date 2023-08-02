import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException, Dependencies, Body, HttpStatus } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginRequest } from 'src/type/type';
import { getUserDTO } from 'src/dto/get-task.dto';
import { CheckSessionDTO } from 'src/dto/session-dto';
import { ExtractJwt, } from 'passport-jwt';
import { JWTPayload } from './jwt.payload';

@Injectable()
@Dependencies(AuthService)
export class JwtStrategy extends PassportStrategy(Strategy, 'jwt') {
  constructor(private authService: AuthService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: 'my-secret-key',
      usernameField: 'token'

    })
    this.authService = authService;;
  }

  async validate(token: string, password: string) {
    try {
      const isToken = await this.authService.validateToken(token)
      console.log(isToken, "token")
      if (!isToken) {
        return false
      }
      else {
        return true
      }
    }
    catch (e) {
      return HttpStatus.BAD_REQUEST
    }
  }
}



  // constructor(private authService: AuthService) {
  //   super({
  //     jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  //     ignoreExpiration: false,
  //     secretOrKey: 'my-secret-key'
  //   });
  //   this.authService = authService;
  //   console.log("working auth")
  // }

  // async validate(payload: any) {
  //   console.log("heee", payload)
  //   return { userId: payload.sub, username: payload.username };
  // }
  // public async validate(mySession): Promise<any> {
  //   console.log("what dafuq", mySession)
  // const myValidate = mySession
  // const user = await this.authService.validateUser(myValidate);
  // if (user == null) {
  //   console.log("b4 hegot",)
  //   throw new UnauthorizedException();
  // }
  // else {
  //   console.log("hegot")
  //   return user
  // }

