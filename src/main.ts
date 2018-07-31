 // bootstrap file
// first file to be executed

// load angular module into browser
// start angular application

import { platformBrowserDynamic } 
        from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
 

// // Step 1
 platformBrowserDynamic()
         .bootstrapModule(AppModule);

// Step 2: JIT 