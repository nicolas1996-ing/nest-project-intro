import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class CarsService {
  private cars: any[] = [
    {
      id: 1,
      name: 'car-1',
    },
    {
      id: 2,
      name: 'car-2',
    },
    {
      id: 3,
      name: 'car-3',
    },
    {
      id: 4,
      name: 'car-4',
    },
  ];

  findAll() {
    return this.cars;
  }

  findById(id: number) {
    const car = this.cars.find((c) => c.id === id);
    if (!car) {
      const errorMsm = `car with id ${id} no found`;
      throw new NotFoundException(errorMsm);
    }
    return car;
  }
}
