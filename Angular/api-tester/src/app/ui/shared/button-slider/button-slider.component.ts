import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-button-slider',
  templateUrl: './button-slider.component.html',
  styleUrls: ['./button-slider.component.css']
})
export class ButtonSliderComponent implements OnInit {

  classes: string = "App-button-slider-bullet";
  text: string = "";

  constructor() { }

  ngOnInit() {
    this.setTheme();
  }

  click() {
    let isDark = localStorage.getItem('theme');
    let el = document.querySelector('body');
    el.classList.toggle('night-mode');
    if (isDark && isDark === "Light") {
      this.classes += " App-button-slider-bullet-active";
      this.text = 'Dark';
      localStorage.setItem('theme', "Dark");
    } else {
      this.classes = "App-button-slider-bullet";
      this.text = 'Light';
      localStorage.setItem('theme', "Light");
    }
  }

  private setTheme() {
    let isDark = localStorage.getItem('theme');
    let el = document.querySelector('body');
    this.text = isDark || "Light";
    let additionalClass = isDark && isDark === "Dark" ? " App-button-slider-bullet-active" : "";
    this.classes += additionalClass;
    if (isDark === "Dark") {
      el.classList.toggle('night-mode');
    }
  }
}
