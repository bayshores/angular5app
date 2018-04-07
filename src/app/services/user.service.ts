import { Injectable } from '@angular/core';
import {User} from "../models/User";
import {Observable} from "rxjs/Observable";
import {of} from "rxjs/observable/of";

@Injectable()
export class UserService {
  users: User[];

  constructor() {
    this.users = [
      {
        firstName: 'Nancy',
        lastName: 'Trump',
        email: 'nancy@gmail.com',
        isActive: true,
        registered: new Date('01/01/2018 08:30:00'),
        hide: true
      },
      {
        firstName: 'Donald',
        lastName: 'Pelosi',
        email: 'donald@yahoo.com',
        isActive: false,
        registered: new Date('02/18/2018 04:30:00'),
        hide: true
      },
      {
        firstName: 'John',
        lastName: 'Musk',
        email: 'john@outlook.com',
        isActive: true,
        registered: new Date('03/30/2017 12:30:15'),
        hide: true
      }
    ];
  }

  getUsers(): Observable<User[]> {
    return of(this.users);
  }

  addUser(user: User) {
    this.users.unshift(user);
  }
}
