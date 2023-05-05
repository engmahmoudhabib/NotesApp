import { NestFactory } from '@nestjs/core';
import { RmqService } from '@app/common';
import { UpdatingModule } from './updating.module';

async function bootstrap() {
  const app = await NestFactory.create(UpdatingModule);
  const rmqService = app.get<RmqService>(RmqService);
  app.connectMicroservice(rmqService.getOptions('UPDATING'));
  await app.startAllMicroservices();
}
bootstrap();
