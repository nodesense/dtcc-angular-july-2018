import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  counter = 100;

  constructor() { }

  ngOnInit() {
  }

  increment() {
    this.counter++;
  }

}
