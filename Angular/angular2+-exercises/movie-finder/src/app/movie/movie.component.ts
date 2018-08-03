import { Component, OnInit } from '@angular/core';

import { MoviesService } from '../service/movies.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  movie: object;

  constructor(
    private movieService: MoviesService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      let id = params['id'];
      this.movieService.getMovie(id).subscribe(movie => {
        this.movie = movie;
        console.log(movie);
      })
    })
  }
}
