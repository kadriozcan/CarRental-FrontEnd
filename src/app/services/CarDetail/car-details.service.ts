import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarDetails } from '../../models/CarDetail/carDetails';
import { CarDetailsResponseModel } from '../../models/CarDetail/carDetailsResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarDetailsService {


  apiUrl = "https://localhost:44351/api/cars/getcardetails";

  constructor(private httpClient: HttpClient) { }

  getCarDetails(): Observable<CarDetailsResponseModel> {
    return this.httpClient
      .get<CarDetailsResponseModel>(this.apiUrl);
  }
}
