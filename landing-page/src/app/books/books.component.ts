import { Component, OnInit,Input } from '@angular/core';
import {Book} from '../book';
import {BookService} from '../book.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  // @Input() book?: Book;
  inputISBN = '9780140328721';
  book: Book = {isbn10: '', isbn13: '', title: undefined};
  constructor(private bookService: BookService) { }

  ngOnInit(): void {}

  /**
   *
   */
  getBook(): void {
    console.log(this.inputISBN);
    // make sure input is 10 or 13 characters
    this.bookService.getBook(this.inputISBN)
      .subscribe(book => {
        if (book) {
          this.book = book
        }
        });
  }
}
