import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Movie } from './movie.interface';
import { AppService } from '../app.service';
// import { CMovie } from './movie.model';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  // private apiKey = 'a79519cfb6488a747b0d0b8e4af2e1f7';
  private moviesUrl: string = 'https://api.themoviedb.org/3/search/movie?api_key=a79519cfb6488a747b0d0b8e4af2e1f7';

  //persons have to enter a key that consists of both letters and numbers

  httpOptions = {
    headers: new HttpHeaders({'Accept': 'text/json'})
  };

  constructor(
    private http: HttpClient,
  ) {}

  /**
   * Search for movies by title
   * @param term
   */
  findMovieByTitle(term: string): Observable<Movie[]> {
    if (!term.trim()) {
      // if no search term, return empty movie array.
      return of([]);
    }
    const url = `${this.moviesUrl}&query=${term}`;
    return this.http.get(url)
      .pipe(
        map((data: any) => {
          // console.log(data);
          // const movies = data.results;
          // console.log(movies[0]);
          return data.results;
        }),
        /*tap(data => data.results.length ?
          console.log(`Found ${data.results.length} movies. ${data.results}`) :
          console.log(`no movie found`)),*/
        catchError(AppService.handleError<Movie[]>(
          'findMovieByTitle', []))
      );
  }

  /**
   * Get a movie by ID
   * @param id
   */
  getMovie(id: string): Observable<Movie | undefined> {
    const url = `${this.moviesUrl}/${id}.json`;
    return this.http.get(url).pipe(
      map((data: any) => {
        return data ? MovieService.movieFromAPI(data) : undefined;
      }),
      tap(_ => console.log(`fetched movie name`)),
      catchError(AppService.handleError<Movie>(`getMovie id=${id}`))
    );
  }
  private static movieFromAPI(data: any): Movie {
    return {
      title: data.title,
      overview: data.overview,
    }
  }
}
