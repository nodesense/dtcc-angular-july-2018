import {NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { SharedModule } from './shared/shared.module';
  
@NgModule({
    // other module depenencies
    imports: [
        BrowserModule,

        SharedModule
    ],

    // components, directive, pipes
    declarations: [
        AppComponent,
        HeaderComponent,
        FooterComponent,
        HomeComponent,
        AboutComponent,
        ContactComponent,
         
        // HeaderComponent,
        // FooterComponent, HomeComponent
    ],

    bootstrap: [
        // Step 3
        AppComponent
    ]
})
export class AppModule {

}
