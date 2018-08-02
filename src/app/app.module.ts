import { AuthGuard } from './guards/auth.guard';

import {NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { SharedModule } from './shared/shared.module';
  
// import { ProductModule } from './product/product.module';

// ng 4.3 onwards
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';

// Step 1
// configuration, map url to a component
import {Routes, RouterModule} from '@angular/router';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { LoginComponent } from './components/login/login.component';
import { IntercepterService } from './services/interceptor.service';


 
const routes: Routes = [
    {
        path: '',
        component:  HomeComponent
    },
    {
        path: 'about',
        component: AboutComponent
    },

    {
        path: 'contact',
        component: ContactComponent
    }, 

    { // for lazy loading
        path: 'products',
        loadChildren: './product/product.module#ProductModule',
        canActivate: [AuthGuard]
    },

    {
        path: 'login',
        component: LoginComponent
    },

    {
        path: '**', // not found
        component: NotFoundComponent
    }
];

@NgModule({
    // other module depenencies
    imports: [
        BrowserModule,
        HttpClientModule,

        SharedModule,

        // Step 2: apply route configuration into module
        RouterModule.forRoot(routes),

       // ProductModule
    ],

    // components, directive, pipes
    declarations: [
        AppComponent,
        HeaderComponent,
        FooterComponent,
        HomeComponent,
        AboutComponent,
        ContactComponent,
        NotFoundComponent,
        LoginComponent,
         
        // HeaderComponent,
        // FooterComponent, HomeComponent
    ],

    bootstrap: [
        // Step 3
        AppComponent
    ],

    providers: [
        AuthGuard,
        {
            provide: HTTP_INTERCEPTORS,
            useClass: IntercepterService,
            multi: true
        }
    ]
})
export class AppModule {

}
