import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment.development";

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  endpoint = `${environment.api}/messages`;

  constructor(private http: HttpClient) {
  }

  all(): Observable<any> {
    return this.http.get<any>(this.endpoint);
  }
}
