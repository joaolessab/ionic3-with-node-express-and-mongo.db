import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class RegisterProvider {

  constructor(public http: HttpClient) {   

  }

  //Using observables
  //Method calling API
  registerUser(fullName, email, password): Observable<any>{
    return this.http
    .post('http://localhost:3000/api/signup/user', {
      fullName: fullName,
      email: email,
      password: password
    });
  }
}