import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  isConnected = false;
  apiUrl = "https://scrum-server.appspot.com/api/users/login";

  private connectionSubject$ = new BehaviorSubject<boolean>(null);

  constructor(private http: HttpClient) { }

  get connection$() {
    return this.connectionSubject$.value;
  }

  login(credentials: {email, password}) {
    this.http.post(this.apiUrl, credentials).subscribe(
      value => console.log({value}),
      error => console.log({error})
    );
  }

  logout() {
    this.isConnected = false;
  }
}
