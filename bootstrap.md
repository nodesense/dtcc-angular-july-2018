browser send request to 4200

server sends index.html with script tags

browser load index.html, 
    <app-root>
    </app-root>

download scripts
    all files
    +
    main.js (main.ts, ..)

    bootStrap Module(AppModule)
        bootStrapComponent(AppComponent)
            find the selector for AppComponent (app-root)
            -- Create component for AppComponent
            -- Place AppComponent html into app-root in index.html