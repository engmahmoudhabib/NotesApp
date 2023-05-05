/* eslint-disable prettier/prettier */
import { ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { notesModule } from './notes.module';
import * as Sentry from '@sentry/node';



async function bootstrap() {
  const app = await NestFactory.create(notesModule);
  app.useGlobalPipes(new ValidationPipe());
  const configService = app.get(ConfigService);
  await app.listen(configService.get('PORT'));
  Sentry.init({
    dsn: "https://c3f9ec6cd7794db998a15c4b5c4cec06@o4505130667540480.ingest.sentry.io/4505130671538176",
    tracesSampleRate: 1.0,
  });
  
}
bootstrap();