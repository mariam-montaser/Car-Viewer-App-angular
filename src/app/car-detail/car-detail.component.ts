import { Component, OnInit } from '@angular/core';
import { Car } from '../Car';
import { ActivatedRoute } from '@angular/router';
import { CarService } from '../car.service';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css']
})
export class CarDetailComponent implements OnInit {

  loading: boolean = true;
  error: string;
  car: Car;

  constructor(private route: ActivatedRoute, private carService: CarService) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.carService.getCar(id).subscribe((car: Car) => {
      this.car = car;
      this.loading = false;
    }, error => {
      this.error = error.message;
      this.loading = false;
    })
  }

}
