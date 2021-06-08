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
  movies$!: Observable<Movie[]>;
  private searchTerms = new Subject<string>();

  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
    this.movies$ = this.searchTerms.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((searchTerm: string) =>
        this.movieService.findMovieByTitle(searchTerm))
    );
  }

  /**
   *
   */
  search(term: string): void {
    this.searchTerms.next(term);
  }

}
