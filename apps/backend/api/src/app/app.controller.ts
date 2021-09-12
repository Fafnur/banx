import { Body, Controller, Get } from '@nestjs/common';

import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getData(): { message: string } {
    return this.appService.getData();
  }

  /**
   * NOTE: DON'T USE IT ON PRODUCTION.
   */
  @Get('logger')
  logger(@Body() data: Record<string, any>): void {
    return console.log(data);
  }
}
