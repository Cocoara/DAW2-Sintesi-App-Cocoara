import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { Temas } from '../models/temas';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  private _user: BehaviorSubject<User[]> = new BehaviorSubject([]);

  constructor(private http: HttpClient) { }

  set user(user: User) {
    let userData = {
      'id': user.id,
      'username': user.user,
      'token': user.token,
      'group': user.group,
    }
  
    localStorage.setItem("USER_SESSION", JSON.stringify(userData));
  }

  get user(): User {
    let userStr = localStorage.getItem("USER_SESSION");
    let user = new User();
    if (userStr != null) {
      let userObj = JSON.parse(userStr);
      user.id = userObj.id;
      user.user = userObj.username;
      user.email = userObj.email;
      user.token = userObj.token;
      user.group = userObj.group;

    }

    return user;
  }

  updateToken(token) {
    let userData = {
      'id': this.user.id,
      'username': this.user.user,
      'token': token,
      'group': this.user.group
    }
    localStorage.setItem("USER_SESSION", JSON.stringify(userData));
  }

  deleteUserSession() {
    localStorage.removeItem("USER_SESSION");
  }

  login(username: string, password: string) {
    let loginData = {
      username: username,
      password: password
    };

    let options = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
      observe: 'response' as 'response'
    };

    return this.http.post('http://localhost/BitBit/private/login', loginData, options);

  }

  logout() {
    let logoutData = {
      username: this.user.user
    };

    let options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + this.user.token
      }),
    };

    return this.http.post('http://localhost/BitBit/private/logout', logoutData, options);
  }
}
