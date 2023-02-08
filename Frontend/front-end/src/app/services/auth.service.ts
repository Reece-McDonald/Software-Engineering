import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    protected http: HttpClient) {
  }

  login(data: any): Observable<any> {
    return this.http.post(`${environment.api}/login`, data, {
      withCredentials: true
    });
  }

  register(data: any): Observable<any> {
    return this.http.post(`${environment.api}/register`, data);
  }

  // user(): Observable<any>{
  //   this.http.get(`${environment.api}/user`, {
  //     withCredentials: true
  //   });
  // }
}
