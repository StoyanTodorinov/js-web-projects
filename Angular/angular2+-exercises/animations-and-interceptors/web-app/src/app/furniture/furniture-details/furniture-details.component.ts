import { Component, OnInit } from '@angular/core';
import { FurnitureService } from '../furniture.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-furniture-details',
  templateUrl: './furniture-details.component.html',
  styleUrls: ['./furniture-details.component.css']
})
export class FurnitureDetailsComponent implements OnInit {

  id: string;
  product: object;

  constructor(
    private funitureService: FurnitureService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params['id'];
    })
    this.funitureService
      .details(this.id)
      .subscribe(data => {
        this.product = data;
      })
  }
}
