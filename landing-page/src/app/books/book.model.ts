export class Book {
  isbn13 = '';
  isbn10 = '';
  title?: string;
  numPages?: number;

  constructor(data?: any) {
    if (data) {
      this.title = data.title;
      this.numPages = data.numPages;
      this.isbn10 = data.isbn10;
      this.isbn13 = data.isbn13;
    }
  }
  static fromAPI(data: any) {
    return {
      title: data.title,
      numPages: data.number_of_pages,
      isbn10: data.isbn_10,
      isbn13: data.isbn_13,
      physicalFormat: data.physical_format,
      publishDate: data.publish_date,
      publishers: data.publishers,
    }
  }
}
