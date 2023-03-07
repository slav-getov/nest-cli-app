import { Controller, Get } from '@nestjs/common';

@Controller('cats')
export class CatsController {
  @Get('/all')
  findAll(): string {
    return 'This action returns all cats';
  }

  @Get('/basics')
  findSingle(): string {
    return 'This will get the basics';
  }

  @Get('/others')
  findNumber(): number {
    return 1;
  }
}
