import { Component, OnInit } from '@angular/core';
import { mergeMap } from 'rxjs/operators';

import { Car } from '../Car';
import { CarService } from '../car.service';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css']
})
export class CarListComponent implements OnInit {

  loading: boolean = true;
  cars: Car[];
  error: string;
  filters;

  constructor(private carService: CarService) { }

  ngOnInit(): void {
    this.carService.getFilter().pipe(mergeMap(filters => {
      this.filters = filters;
      return this.carService.getCarList();
    })).subscribe((cars: Car[]) => {
      this.cars = cars;
      this.loading = false;
    }, (error) => {
      this.error = error.message;
      this.loading = false;
    })
  }

  filterValues(type: string, value: string) {
    this.loading = true;
    this.carService.getFilteredCarList(type, value).subscribe((cars: Car[]) => {
      this.cars = cars;
      this.loading = false;
    }, error => {
      this.error = error.message;
      this.loading = false;
    })
  }

}
