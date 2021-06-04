import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Movie } from './movie.interface';
import {AppService} from '../app.service';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private moviesUrl: string = 'https://api.themoviedb.org/3/search/movie';

  //persons have to enter a key that consists of both letters and numbers
  private apiKey = 'a79519cfb6488a747b0d0b8e4af2e1f7';
  httpOptions = {
    headers: new HttpHeaders({'Accept': 'text/json'})
  };

  constructor(
    private http: HttpClient,
  ) {}


//get movie via title
  findMovieByTitle(term: string): Observable<Movie[]> {
    if (!term.trim()) {
      // if no search term, return empty movie array.
      return of([]);
    }
    const url = `${this.moviesUrl}/?title=${term}`;
    return this.http.get<Movie[]>(url)
      .pipe(
        tap(movie => movie.length ?
          console.log(`found movie`) :
          console.log(`no movie found`)),
        catchError(AppService.handleError<Movie[]>(
          'findMovieByTitle', []))
      );
  }

}
