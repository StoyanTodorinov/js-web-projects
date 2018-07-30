import { Component, OnInit } from '@angular/core';

import { MoviesService } from '../service/movies.service'

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})

export class MoviesComponent implements OnInit {

  moviesService: MoviesService;
  popular: object = {};
  theaters: object = {};

  constructor(moviesService: MoviesService) {
    this.moviesService = moviesService;
  }

  ngOnInit() {
    this.moviesService.getPopular().subscribe(data => {
      this.popular = data;
      console.log(this.popular)
    });
    this.moviesService.getTheaters().subscribe(data => {
      this.theaters = data;
      console.log(this.theaters)
    });
  }
}
