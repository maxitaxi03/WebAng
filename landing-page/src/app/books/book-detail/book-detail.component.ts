import { Component, OnInit } from '@angular/core';
import {BookService} from '../book.service';

import {IBook} from '../book.interface';

@Component({
  selector: 'app-books',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {
  book: IBook = {isbn10: '', isbn13: '', title: undefined};

  constructor(private bookService: BookService) {}

  ngOnInit(): void {}

  /**
   *
   */
  getBook(isbn: string): void {
    // Todo: make sure input is 10 or 13 characters
    this.bookService.getBook(isbn)
      .subscribe(book => {
        if (book) {
          this.book = book
        }
        });
  }
}
