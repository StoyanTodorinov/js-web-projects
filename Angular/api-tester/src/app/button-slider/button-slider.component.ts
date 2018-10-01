import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-button-slider',
  templateUrl: './button-slider.component.html',
  styleUrls: ['./button-slider.component.css']
})
export class ButtonSliderComponent implements OnInit {
  
  classes: string = "App-button-slider-bullet";
   
  constructor() { }

  ngOnInit() {
  }

  click() {
    if (this.classes.includes("active")) {
      this.classes = "App-button-slider-bullet";
    } else {
      this.classes += " App-button-slider-bullet-active";
    }
  }
}
