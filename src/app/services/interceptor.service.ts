import { Injectable } from '@angular/core';

import { HttpInterceptor, 
  HttpRequest, 
  HttpHandler, 
  HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
 

@Injectable({
  providedIn: 'root'
})
export class IntercepterService implements HttpInterceptor  {
  
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
     
    console.log ('Intercepter ', request.url, request.method);
    //TODO: injector
  
    const token = window.localStorage.getItem('token');

    request = request.clone({
      setHeaders: {
        Authorization: 'JWT ' + token
      }
    });
    
    return next.handle(request);
  }
}