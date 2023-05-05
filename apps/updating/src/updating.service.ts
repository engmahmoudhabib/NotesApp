import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class UpdatingService {
  private readonly logger = new Logger(UpdatingService.name);

  getHello(): string {
    return 'Hello World!';
  }

  update(data: any) {
    this.logger.log('Updating...', data);
  }
}
