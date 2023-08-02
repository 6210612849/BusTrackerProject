import { Module, Global } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { config } from '../ormconfig'

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '',
      port: ,
      username: '',
      password: '',
      database: '',
      autoLoadEntities: true,
      synchronize: true
    }),
  ]
})
export class DatabaseModule { }
