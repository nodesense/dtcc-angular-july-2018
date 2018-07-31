import { Component } from '@angular/core';

@Component({
    // Meta Data
    // html custom tag/name

    // Step 4
    selector: 'app-root', // <app-root></app-root>

    // View
    templateUrl: 'app.component.html',

    // Scopped Styles
    styleUrls: [
        'app.component.css'
    ]
})
export class AppComponent {
    // MVW => Model View Whatever
    // MVC => Model View Component

    // models
    // type inference from assignment/initialization
    appTitle = 'Product app';
    address = {city: 'Chennai', state: 'TN'};

    constructor() {
        console.log('App Component created');
    }

    // to be called when customEvent triggered
    // handler method for custom event
    contactHandler(address: any) {
        alert(address.city);
    }

}
