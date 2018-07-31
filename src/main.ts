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

// Step 2: JIT - HTML => JS conversion happens at Browser
// JIT - Good for development, compile fast
// JIT not for production


// AOT - Ahead of Time (production)
// Build Time (node.js) on dev machines
// HTML => TypeScript => JS => main bundle
// AOT HMTL view (.html file) is not bundled