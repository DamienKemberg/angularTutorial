import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  isConnected = false;

  constructor() { }

  login() {
    this.isConnected = true;
  }

  logout() {
    this.isConnected = false;
  }
}
