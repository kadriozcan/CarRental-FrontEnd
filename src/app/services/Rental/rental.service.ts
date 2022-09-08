import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RentalDetailResponseModel } from 'src/app/models/Rental/rentalDetailResponseModel';

@Injectable({
  providedIn: 'root'
})
export class RentalService {

  apuUrl = "https://localhost:44351/api/rentals/getrentaldetails";

  constructor(private httpClient:HttpClient) { }

  getRentalDetails():Observable<RentalDetailResponseModel> {
    return this.httpClient.get<RentalDetailResponseModel>(this.apuUrl);
  }

}
