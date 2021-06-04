import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import {
  debounceTime, distinctUntilChanged, switchMap
} from 'rxjs/operators'
import { MovieService } from './movie.service';
import { Movie } from './movie.interface';
@Component({
  selector: 'app-movie-search',
  templateUrl: './movie-search.component.html',
  styleUrls: ['./movie-search.component.css']
})
export class MovieSearchComponent implements OnInit {
  title = '';
  movies: Movie[] = [];
  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
  }
  findMovie() {
    this.movieService.findMovieByTitle(this.title)
    .subscribe();
  }

}
