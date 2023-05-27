import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { CarsService } from './cars.service';

// .../cars
@Controller('cars')
export class CarsController {
  constructor(private readonly carService: CarsService) {}

  // http://localhost:3000/cars - method: GET
  @Get()
  getAllCars() {
    return this.carService.findAll();
  }

  // // http://localhost:3000/cars/:id - method: GET
  // ParseIntPipe: string to int , add validations
  @Get(':id')
  getCardById(@Param('id', ParseIntPipe) id: number) {
    return this.carService.findById(id);
  }

  @Post()
  createCar(@Body() data: any) {
    return { success: true, data };
  }

  @Patch(':id')
  udpateCar(@Body() data: any, @Param('id', ParseIntPipe) id: number) {
    return { success: true, id, data };
  }

  @Delete(':id')
  deleteCar(@Param('id', ParseIntPipe) id: number) {
    return { success: true, id };
  }
}
