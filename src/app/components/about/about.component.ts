import { Component, OnInit } from '@angular/core';

interface Member {
  name: string;
  image: string;
  role?: string; // ? optional
}

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
 
  members: Member[] = [ 
    {
      name: 'Member 1',
      image: 'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50',
      role: 'CEO'
    },
    {
      name: 'Member 2',
      image: 'https://www.gravatar.com/avatar/00000000000000000000000000000000',
      role: 'CTO'
    }
  ];

  showList = true;


  constructor() { }

  ngOnInit() {
  }

}
