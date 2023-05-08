import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello JoDo';
  }
  getCalc(num1, num2): number {
    const result = parseInt(num1) + parseInt(num2);
    console.log('결과값:', result);
    return result;
  }
}
