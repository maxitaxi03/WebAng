import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import {Book} from './book.model';
import {IBook} from './book.interface';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {catchError, map, tap} from 'rxjs/operators';
import {AppService} from '../app.service';


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
   * @param isbn eg: 9780340024232
   */
  getBook(isbn: string): Observable<IBook | undefined> {
    const url = `${this.booksUrl}/${isbn}.json`;
    return this.http.get(url).pipe(
      map((data: any) => {
        return data ? Book.fromAPI(data) : undefined;
      }),
      tap(_ => console.log(`fetched hero id=${isbn}`)),
      catchError(AppService.handleError<IBook>(`getBook isbn=${isbn}`))
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
        return new Book(Book.fromAPI(data));
      }),
      tap(_ => console.log(`fetched hero id=${isbn}`)),
      catchError(AppService.handleError<Book>(`getBook isbn=${isbn}`))
    );
  }

}
