import { Component, OnInit } from '@angular/core';
import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  newProducts;
  promoProducts;

  constructor(
    private homeService: HomeService
  ) { }

  ngOnInit() {
    this.homeService.getNewProducts().subscribe(data => {
      this.newProducts = data;
      console.log(data);
    })
    this.homeService.getPromoProducts().subscribe(data => {
      this.promoProducts = data;
      console.log(data);
    })
  }
}
