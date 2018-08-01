import { Component, OnInit } from '@angular/core';
import { FurnitureModel } from '../models/furniture.model';
import { FurnitureService } from '../furniture.service';
import { SignUpModel } from '../../authentication/models/signup.model';

@Component({
  selector: 'app-create-furniture',
  templateUrl: './create-furniture.component.html',
  styleUrls: ['./create-furniture.component.css']
})
export class CreateFurnitureComponent implements OnInit {
  model: FurnitureModel;

  constructor(private furnitureService: FurnitureService) {
    this.model = new FurnitureModel("", "", 0, "", 0, "", "");
  }

  ngOnInit() { }

  create(form) {
    this.furnitureService
      .create(form.value)
      .subscribe();
  }
}
