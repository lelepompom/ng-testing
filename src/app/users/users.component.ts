import { Component, OnInit } from '@angular/core';
import { UserModel } from '../models/user.model';
import { UserMockService } from '../services/user-mock.service';

@Component({
  selector: 'lel-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  public usersList: UserModel[];

  constructor(
    private userService: UserMockService
  ) { }

  ngOnInit() {
    this.userService.getAllUsers().subscribe(data => this.usersList = data);
  }

}
