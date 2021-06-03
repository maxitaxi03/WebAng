import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { bookContent } from './book-content';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class BookServiceService {
  private bookUrl: string = "https://openlibrary.org/isbn/"
  getBooks() {
    return this.http.get(this.bookUrl);
  }
  
  getBook(isbn: number) {
    const url = `${this.bookUrl}/${isbn}.json`;
    return this.http.get(url);
  }

  constructor(
    private http: HttpClient,
  ) { }
}
