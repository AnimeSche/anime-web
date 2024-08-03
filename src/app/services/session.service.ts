import {Injectable} from '@angular/core';
import {Subject} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class SessionService {
  constructor() {
  }

  setCurrentUser(user: any) {
    localStorage.setItem('currentUser', JSON.stringify(user))
  }

  getCurrentUser(currentUser: any) {
    const user = localStorage.getItem('currentUser')
    return user ? JSON.parse(user): {};
  }

  setToken(token: any){
    sessionStorage.setItem('token', JSON.stringify(token))
  }

  getToken() {
    const item = sessionStorage.getItem('token')
    return item ? JSON.parse(item) : false;
  }
}
