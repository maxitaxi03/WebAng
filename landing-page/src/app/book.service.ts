import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Book } from './book';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {catchError, map, tap} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class BookService {
  private booksUrl: string = "https://openlibrary.org/isbn"
  httpOptions = {
    headers: new HttpHeaders({ 'Accept': 'text/json' })
  };

  constructor(
    private http: HttpClient,
  ) { }

  /**
   * Get Book by ISBN. Returns 404 if isbn not found
   * @param isbn
   * Todo: shape raw json data with Book interface
   */
  getBook(isbn: string) {
    const url = `${this.booksUrl}/${isbn}.json`;
    return this.http.get<Book>(url).pipe(
      map(data => {
        console.log(data);
        return data ? {
          title: 'Hello',
          numPages: 0,
          isbn10: '123',
          isbn13: '12345',
        } : undefined;
      }),
      tap(_ => console.log(`fetched hero id=${isbn}`)),
      catchError(this.handleError<Book>(`getBook isbn=${isbn}`))
    );
  }
  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
