import { Controller, Get, UseGuards } from '@nestjs/common';
import { Ctx, EventPattern, Payload, RmqContext } from '@nestjs/microservices';
import { RmqService, JwtAuthGuard } from '@app/common';
import { UpdatingService } from './updating.service';

@Controller()
export class UpdatingController {
  constructor(
    private readonly updatingService: UpdatingService,
    private readonly rmqService: RmqService,
  ) {}

  @Get()
  getHello(): string {
    return this.updatingService.getHello();
  }

  @EventPattern('notes_created')
  @UseGuards(JwtAuthGuard)
  async handlenoteCreated(@Payload() data: any, @Ctx() context: RmqContext) {
    this.updatingService.update(data);
    this.rmqService.ack(context);
  }
}
