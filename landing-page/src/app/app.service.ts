import { Injectable } from '@angular/core';
import {Content} from './content';
import {DATA} from './data';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  constructor() { }
  getContent(id: string): Content {
    const index = DATA.findIndex(item => {
      return id === item.id;
    });
    return index > -1 ? DATA[index] : {id: ''};
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
   static handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
