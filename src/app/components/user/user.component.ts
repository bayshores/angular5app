import {Component, OnInit} from '@angular/core';
import {User} from "../../models/User";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user: User;

  constructor() {

  }

  ngOnInit() {
    this.user = {
      firstName: 'Nancy',
      lastName: 'Trump',
      age: 78,
      address: {
        street: '44 Tidewater Cir',
        city: 'Foster City',
        state: 'CA'
      }
    }
  }

}

