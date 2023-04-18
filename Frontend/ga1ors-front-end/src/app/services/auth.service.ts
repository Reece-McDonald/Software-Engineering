import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment.development";
import {User} from "../interfaces/user";
import {Message} from "../interfaces/message";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    protected http: HttpClient) {
  }

  register(data: any): Observable<User> {
    return this.http.post<User>(`${environment.api}/register`, data);
  }

  verify(data: any): Observable<any> {
    return this.http.post<any>(`${environment.api}/verify`, data)
  }

  login(data: any): Observable<any> {
    return this.http.post(`${environment.api}/login`, data);
  }

  user(): Observable<User> {
    return this.http.get<User>(`${environment.api}/user`);
  }

  logout(): Observable<void> {
    return this.http.post<void>(`${environment.api}/logout`, {})
  }

  updateInfo(data: any): Observable<User> {
    return this.http.put<User>(`${environment.api}/users/info`, data);
  }

  updatePassword(data: any): Observable<User> {
    return this.http.put<User>(`${environment.api}/users/password`, data);
  }

  createMessage(data: any): Observable<Message> {
    return this.http.post<Message>(`${environment.api}/message`, data);
  }
}
