import { Injectable } from '@angular/core';
import {Content} from './content';
import {DATA} from './data';

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
}
