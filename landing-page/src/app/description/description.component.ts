import { Component, OnInit } from '@angular/core';
import {AppService} from '../app.service';
import {Content} from '../content';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.css']
})
export class DescriptionComponent implements OnInit {
  pageContent: Content = {id: ''};

  constructor(private appService: AppService) { }

  ngOnInit(): void {
     this.getContent();
  }
  getContent() {
    this.pageContent = this.appService.getContent('description');
  }

}
