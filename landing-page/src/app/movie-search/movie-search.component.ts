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
  movies: Movie[] = [];
  movies$!: Observable<Movie[]>;
  constructor(private movieService: MovieService) { }

  ngOnInit(): void {}

  /**
   *
   */
  search(searchTerm: string): void {
    this.movies$ = this.movieService.findMovieByTitle(searchTerm);
  }

}
