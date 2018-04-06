import { Component, OnInit } from '@angular/core';
import {User} from "../../models/User";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: User[];

  constructor() { }

  ngOnInit() {
    this.users = [
      {
        firstName: 'Nancy',
        lastName: 'Trump',
        age: 78,
        address: {
          street: '44 Tidewater Cir',
          city: 'Foster City',
          state: 'CA'
        }
      },
      {
        firstName: 'Donald',
        lastName: 'Pelosi',
        age: 49,
        address: {
          street: '101 Main St',
          city: 'Menlo Park',
          state: 'CA'
        }
      },
      {
        firstName: 'John',
        lastName: 'Musk',
        age: 63,
        address: {
          street: '1100 Lincoln Center Dr',
          city: 'Stockton',
          state: 'CA'
        }
      }
    ];
  }

}
