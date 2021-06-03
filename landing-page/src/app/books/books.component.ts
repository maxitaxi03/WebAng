import { Component, OnInit,Input } from '@angular/core';
import {bookContent} from '../book-content';
import {BookServiceService} from '../book-service.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  @Input() book?: bookContent;
  constructor(private bookService: BookServiceService) { }
  
  ngOnInit(): void {
    this.getBooks();
  }
  getBooks(): void {
    this.bookService.getBooks();
  }
}
