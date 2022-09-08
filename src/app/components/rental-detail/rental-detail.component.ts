import { Component, OnInit } from '@angular/core';
import { RentalDetail } from 'src/app/models/Rental/rentalDetail';
import { RentalService } from 'src/app/services/Rental/rental.service';

@Component({
  selector: 'app-rental-detail',
  templateUrl: './rental-detail.component.html',
  styleUrls: ['./rental-detail.component.css']
})
export class RentalDetailComponent implements OnInit {


  rentalDetails : RentalDetail[] = [];

  dataLoaded = false;

  constructor(private rentalService : RentalService) { }

  ngOnInit(): void {
    this.getRentalDetails()
  }

  getRentalDetails() {
    this.rentalService.getRentalDetails().subscribe(response => {
      this.rentalDetails = response.data;
      this.dataLoaded = true;
    })
  }

}
