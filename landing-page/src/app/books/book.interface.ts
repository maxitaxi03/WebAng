export interface IBook {
  isbn13: string;
  isbn10: string;
  title?: string;
  numPages?: number;
  physicalFormat?: string;
  publishDate?: string;
  publishers?: string[];
}

