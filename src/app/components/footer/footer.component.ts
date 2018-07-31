import { Component, OnInit,
        Input,

        Output, EventEmitter
      
      } from '@angular/core';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  // Input for property binding []
  // to receive input from parent component

  @Input()
  company: string;

  @Input()
  year: number;

  @Input()
  address:any;

  // Output, child to parent communication
  // Always through custom event only
  // (eventBinding) ==> (contactEvent)="expr"
  @Output()
  contactEvent: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
    console.log("address ", typeof this.address);
  }

  contactClicked() {
    // TODO: trigger custom event

    // in parent, this.address can be accessed as $event
    this.contactEvent.emit(this.address);
  }

}
