import { DataService } from './../../shared/services/data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  membersLength = 0;

  constructor(private dataService: DataService) {
      // this.membersLength = dataService.members.length;
  }

  ngOnInit() {
     // subscription for members change
     this.dataService.members$
          .subscribe ( members => {
             console.log('Header member Subscription');
             this.membersLength = members.length;
          });
  }

  empty() {
    this.dataService.empty();
    // this.membersLength = this.dataService.members.length;
  }

}
