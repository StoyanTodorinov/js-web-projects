import { Component, OnInit } from '@angular/core';
import { HomeService } from '../services/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  newProducts$;
  promoProducts$;

  constructor(
    private homeService: HomeService
  ) { }

  ngOnInit() {
    this.newProducts$ = this.homeService.getNewProducts();
    this.promoProducts$ = this.homeService.getPromoProducts();
  }
}
