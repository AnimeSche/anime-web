import { Injectable } from '@angular/core';
import { Subject } from "rxjs";
import { Action } from 'rxjs/internal/scheduler/Action';


export interface User {
  username: string;
  password?: string;
  uuid: string;
  active: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class SessionService {
  constructor() {
  }

  setCurrentUser(user: any) {
    localStorage.setItem('currentUser', JSON.stringify(user))
  }

  getCurrentUser() {
    const user = localStorage.getItem('currentUser')
    return user ? JSON.parse(user) : {};
  }

  setToken(token: any) {
    sessionStorage.setItem('token', JSON.stringify(token))
  }

  getToken() {
    const item = sessionStorage.getItem('token')
    return item ? JSON.parse(item) : false;
  }

  isLoggedIn(): User {
    const user = this.getCurrentUser()
    const parsed_user: User = { username: user.username, uuid: user.uuid, active: user.active }
    return parsed_user
  }

  setCurrentPage(page: string) {
    localStorage.setItem('page', page)
  }

  getCurrentPage() {
    const page = localStorage.getItem('page')
    return page
  }
}
