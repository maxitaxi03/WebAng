import { Component, OnInit,Input } from '@angular/core';
import {BookService} from './book.service';
import {Book} from './book.model';
import {IBook} from './book.interface';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  // @Input() book?: IBook;
  inputISBN = '9780140328721';
  book: IBook = {isbn10: '', isbn13: '', title: undefined};
  bookModel: Book;
  constructor(private bookService: BookService) {
    this.bookModel = new Book();
  }

  ngOnInit(): void {}

  /**
   *
   */
  getBook(): void {
    // Todo: make sure input is 10 or 13 characters
    this.bookService.getBook(this.inputISBN)
      .subscribe(book => {
        if (book) {
          this.book = book
        }
        });
  }
  getBookModel(): void {
    // Todo: make sure input is 10 or 13 characters
    this.bookService.getBookModel(this.inputISBN)
      .subscribe(book => this.bookModel = book);
  }
}
