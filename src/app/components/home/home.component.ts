import { DataService, Member } from './../../shared/services/data.service';
import { Component, OnInit } from '@angular/core';


import {Observable} from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  counter = 100;
  price = 99.99;
  today = new Date();
  title = 'Home';

  members$: Observable<Member[]>;

  constructor(private dataService: DataService) { 
    this.members$ = this.dataService.members$;
  }

  ngOnInit() {
  }

  increment() {
    this.counter++;
  }

}
