
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as session from 'express-session';
import * as express from 'express'
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(
    session({
      secret: 'my-secret-key',
      resave: false,
      saveUninitialized: true,
      cookie: { secure: false },
    }),
  );
  app.use(express.json({ limit: '50mb' }))
  app.use(express.urlencoded({ limit: '50mb', extended: true, parameterLimit: 100000, }));
  app.enableCors();
  const port = process.env.PORT || 8080;
  console.log("Superlative", port)
  await app.listen(port)
}
bootstrap();
