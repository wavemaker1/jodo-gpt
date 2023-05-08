import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { NumberDto } from './number.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  //인사 요청에 대한 응답
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  //더하기 요청에 대한 응답
  @Post()
  async getCalc(@Body() numbers: NumberDto) {
    console.log('요청한수 : ', numbers.num1, numbers.num2);
    return await this.appService.getCalc(numbers.num1, numbers.num2);
  }
}
