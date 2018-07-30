import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

const apiKeyV3 = 'aaefaaf37f30588d59ee2ac2f10cdbb3'
const apiKeyV4 = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhYWVmYWFmMzdmMzA1ODhkNTllZTJhYzJmMTBjZGJiMyIsInN1YiI6IjViNWIwMmRhOTI1MTQxMmFhZDAwZGQ2MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.5DYjEi7kUzjR2LniWI4bMl5ihUnOOrJPUJ4F2JesVU8';

@Injectable({
  providedIn: 'root',
})

export class MoviesService {
  
  httpClient: HttpClient;

  path: string = 'https://api.themoviedb.org/3/';
  popular: string = 'discover/movie?sort_by=popularity.desc';
  theaters: string = 'discover/movie?primary_release_date.gte=2014-09-15&primary_release_date.lte=2014-10-22'
  authentication: string = '&api_key=' + apiKeyV3;

  constructor(httpClient: HttpClient) {
    this.httpClient = httpClient;
  }

  getPopular() {
    return this.httpClient.get(this.path + this.popular + this.authentication);
  }

  getTheaters() {
    return this.httpClient.get(this.path + this.theaters + this.authentication);
  }
}
