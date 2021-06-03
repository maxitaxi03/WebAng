import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import {Book} from './book.model';
import {IBook} from './book.interface';
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
   * Get IBook by ISBN. Returns 404 if isbn not found
   * @param author
   */
  findBookByAuthor(author: string): Observable<IBook[] | undefined> {
    // const url = `${this.booksUrl}/${isbn}.json`;
    return of([]);
  }
  /**
   * Get IBook by ISBN. Returns 404 if isbn not found
   * @param isbn
   */
  getBook(isbn: string): Observable<IBook | undefined> {
    const url = `${this.booksUrl}/${isbn}.json`;
    return this.http.get(url).pipe(
      map((data: any) => {
        return data ? BookService.bookFromAPI(data) : undefined;
      }),
      tap(_ => console.log(`fetched hero id=${isbn}`)),
      catchError(this.handleError<IBook>(`getBook isbn=${isbn}`))
    );
  }
  /**
   * Get IBook by ISBN. Returns 404 if isbn not found
   * @param isbn
   */
  getBookModel(isbn: string): Observable<Book> {
    const url = `${this.booksUrl}/${isbn}.json`;
    return this.http.get(url).pipe(
      map((data: any) => {
        return new Book(data);
      }),
      tap(_ => console.log(`fetched hero id=${isbn}`)),
      catchError(this.handleError<Book>(`getBook isbn=${isbn}`))
    );
  }
  private static bookFromAPI(data: any): IBook {
    return {
      title: data.title,
      numPages: data.number_of_pages,
      isbn10: data.isbn_10,
      isbn13: data.isbn_13,
    }
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
