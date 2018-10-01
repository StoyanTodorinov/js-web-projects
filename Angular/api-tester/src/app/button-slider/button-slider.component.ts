import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-button-slider',
  templateUrl: './button-slider.component.html',
  styleUrls: ['./button-slider.component.css']
})
export class ButtonSliderComponent implements OnInit {

  classes: string = "App-button-slider-bullet";
  text: string = "Dark";

  constructor() { }

  ngOnInit() {
  }

  click() {
    let el = document.querySelector('body');
    el.classList.toggle('night-mode');
    if (this.classes.includes("active")) {
      this.classes = "App-button-slider-bullet";
      this.text = 'Dark';
    } else {
      this.classes += " App-button-slider-bullet-active";
      this.text = 'Light';
    }
  }
}
