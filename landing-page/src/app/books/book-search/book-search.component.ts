import { Component, OnInit } from '@angular/core';
import {IBook} from '../book.interface';
import {BookService} from '../book.service';

@Component({
  selector: 'app-book-search',
  templateUrl: './book-search.component.html',
  styleUrls: ['./book-search.component.css']
})
export class BookSearchComponent implements OnInit {
  author = '';
  books: IBook[] = [];
  constructor(private bookService: BookService) { }

  ngOnInit(): void {}
  findBook() {
    this.bookService.findBookByAuthor(this.author)
      .subscribe();
  }

}
