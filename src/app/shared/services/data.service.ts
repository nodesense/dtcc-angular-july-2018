import { Injectable } from '@angular/core';

import { Subject } from 'rxjs';
import {BehaviorSubject} from 'rxjs';

export interface Member {
  name: string;
  image: string;
  role?: string; // ? optional
}


@Injectable({
  providedIn: 'root'
})
export class DataService {

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

  // Observable $ is convention
  // members$: Subject<Member[]> = new Subject();

  // behavior subject publish values as soon as consumer subscribe
  members$: BehaviorSubject<Member[]> = new BehaviorSubject(this.members);

  constructor() { 
    console.log('Data service created');
  }

  empty() {
    // option 1
    // keep the existing array, remove elements inside  
    // this.members.splice(0, this.members.length);

    // option 2
    // assign new array
    this.members = [];

    // publish the new value/members
    this.members$.next(this.members);
  }
}
