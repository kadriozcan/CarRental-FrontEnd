import { Component, OnInit } from '@angular/core';
import { Brand } from 'src/app/models/Brand/brand';
import { BrandService } from 'src/app/services/Brand/brand.service';
import { BrandResponseModel } from 'src/app/models/Brand/brandResponseModel';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css']
})
export class BrandComponent implements OnInit {

  brands : Brand[] = [];

  dataLoaded = false;

  // brandResponseModel : BrandResponseModel = {
  //   data : this.brands,
  //   message : "",
  //   success : true
  // };

  constructor(private brandService:BrandService) { }

  ngOnInit(): void {
    this.getBrands();

  }

  getBrands() {
    this.brandService.getBrands().subscribe(response => {
      this.brands = response.data;
      this.dataLoaded  = true;
    })
  }

}
