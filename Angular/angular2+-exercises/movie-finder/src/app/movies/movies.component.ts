import { Component, OnInit } from '@angular/core';
import { Form } from '@angular/forms'

import { MoviesService } from '../service/movies.service'

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})

export class MoviesComponent implements OnInit {

  searchResults: object = undefined;
  popular: object = {};
  theaters: object = {};
  kids: object = {};
  dramas: object = {};
  moviesService: MoviesService;

  constructor(moviesService: MoviesService) {
    this.moviesService = moviesService;
  }

  ngOnInit() {
    this.moviesService.getPopular().subscribe(data => {
      this.popular = data;
    });
    this.moviesService.getTheaters().subscribe(data => {
      this.theaters = data;
    });
    this.moviesService.getKids().subscribe(data => {
      this.kids = data;
    });
    this.moviesService.getDramas().subscribe(data => {
      this.dramas = data;
    });
  }

  search(value) {
    this.moviesService.getMoviesByName(value.search).subscribe(data => {
      this.searchResults = data;
    })
  }
}
