export class Book {
  isbn13: string;
  isbn10: string;
  title?: string;
  numPages?: number;

  constructor(data?: any) {
    this.isbn10 = '';
    this.isbn13 = '';
    if (data) {
      this.fromAPI(data);
    }
  }
  fromAPI(data: any) {
    this.title = data.title;
    this.numPages = data.number_of_pages;
    this.isbn10 = data.isbn_10;
    this.isbn13 = data.isbn_13;
  }
}
