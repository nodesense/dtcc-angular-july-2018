import { Component, OnInit,

          ViewChild,
          ElementRef

} from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  // Step 1
  constructor() { }

  // Step 2: Take HTML view, load into browser

  toHighlight = false;

  address: any;


  // <input #nameElement /
  @ViewChild('nameElement')
  nameElement: ElementRef; // wrapper on top of DOM

  // Step 3: ngOnInit, view initializ
  ngOnInit() {
    // nativeElement is real DOM object
    this.nameElement.nativeElement.focus();
    this.nameElement.nativeElement.value = 'NG';
  }

  divClicked() {
    console.log('Div click');
  }

  btnClicked(e: Event) {
    console.log('btn clicked', e);
    // stop event bubble going parent
    e.stopPropagation();
  }

}
