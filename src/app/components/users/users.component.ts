import {Component, OnInit} from '@angular/core';
import {User} from '../../models/User';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  user: User = {
    firstName: '',
    lastName: '',
    email: ''
  }
  users: User[];
  showExtended: boolean = false;
  loaded: boolean = false;
  enableAdd: boolean = false;
  showUserForm: boolean = true;

  constructor() {
  }

  ngOnInit() {

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

    this.loaded = true;
  }


  addUser() {
    this.user.isActive = true;
    this.user.registered = new Date();
    this.users.unshift(this.user);

    this.user = {
      firstName: '',
      lastName: '',
      email: ''
    };
  }

  toggleHide(user:User) {
    user.hide = !user.hide;
  }

  onSubmit(e) {
    console.log('1234');
    e.preventDefault();
  }
}
