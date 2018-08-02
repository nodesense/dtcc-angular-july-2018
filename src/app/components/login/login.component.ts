import { environment } from './../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  login() {
    const user = {username: 'admin', password: 'admin'};

    this.http.post(`http://localhost:7070/oauth/token`, user)
              .subscribe ( (data: any) => {
                  console.log('data ', data);
                  window.localStorage.setItem('token', data.token);
              });
  }

}
