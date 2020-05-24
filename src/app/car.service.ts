import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../environments/environment';
import { Observable } from 'rxjs';
import { Car } from './Car';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  private BASE_URL = environment.API_URl;

  constructor(private http: HttpClient) { }

  getCarList(): Observable<Car[]> {
    return this.http.get<Car[]>(`${this.BASE_URL}/cars`);
  }

  getFilteredCarList(type: string, value: string): Observable<Car[]> {
    return this.http.get<Car[]>(`${this.BASE_URL}/filter/${type}/${value}`);
  }

  getCar(id: string): Observable<Car> {
    return this.http.get<Car>(`${this.BASE_URL}/cars/${id}`);
  }

  getFilter(): Observable<Car[]> {
    return this.http.get<Car[]>(`${this.BASE_URL}/filter`);
  }
}
