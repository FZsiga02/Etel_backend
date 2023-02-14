/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, Param, Post, Render } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { AppService } from './app.service';
import { Etel } from './etel.entity';
import NewEtelDto from './newEtelDto';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private dataSource: DataSource,
  ) {}

  @Get()
  @Render('index')
  index() {
    return { message: 'Welcome to the homepage' };
  }

  @Get('/etel')
  listEtelek() {
    const etelRepo = this.dataSource.getRepository(Etel);
    return etelRepo.find();
  }

  @Delete('/etel/:id')
  deleteEtel(@Param('id') id: number) {
    const etelRepo = this.dataSource.getRepository(Etel)
    etelRepo.delete(id)
  }

  @Post('/etel')
  async newEtel(@Body() etel: NewEtelDto) {
      const etelRepo = this.dataSource.getRepository(Etel)
      etelRepo.save(etel)
      return etel;
  }
}
