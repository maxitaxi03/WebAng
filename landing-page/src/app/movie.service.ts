import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

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
  ) { }
}

//get movie via
getMovie(apiKey: string): Observable<Movie | undefined> {
  const url = 
}