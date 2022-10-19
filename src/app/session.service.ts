import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  constructor(private http: HttpClient) { }

  email = ""
  password = ""
  signupApi(user: any): Observable<any> {
    console.log("signupApiCalled()");
    console.log(user);
    return this.http.post("http://localhost:9090/signup", user)

  }
  loginApi(user: any): Observable<any> {

    return this.http.post("http://localhost:9090/login", user)
  }
  forgetApi(user: any): Observable<any> {
    return this.http.post("http://localhost:9090/forgetpassword", user)
  }

}
