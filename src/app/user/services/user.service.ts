import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, pipe, of, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  isConnected = false;
  apiUrl = "https://scrum-server.appspot.com/api/";

  private connectionSubject$ = new BehaviorSubject<boolean>(null);

  constructor(private http: HttpClient) { }

  get connection$() {
    return this.connectionSubject$.value;
  }

  login(credentials: {email, password}) {
    return this.http.post(this.apiUrl + "users/login", credentials).pipe(
      catchError(errorReturn => {
        const error = errorReturn.error.error;
        const obj = {
          status: error.statusCode,
          code: error.code,
          message: error.message
        }
        return throwError(obj);
      }),
      tap(value => this.connectionSubject$.next(true))
    );
  }

  register(credentials: {username, email, password}) {
    return this.http.post(this.apiUrl + "users", credentials)
      .pipe(
        catchError(errorReturn => {
          const error = errorReturn.error.error;
          const obj = {
            status: error.statusCode,
            code: error.code,
            message: error.message
          }
          return throwError(obj);
        })
      );
  }

  logout() {
    this.isConnected = false;
  }
}
