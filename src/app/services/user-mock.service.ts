import { Injectable } from '@angular/core';
import { UserModel } from '../models/user.model';
import { USERS } from '../models/user.data';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserMockService {

  public userList: UserModel[];

  constructor() {
    this.userList = USERS;
  }

  public getAllUsers() {
    return of(this.userList);
  }

  public getUser(index: number) {
    return of(this.userList[index]);
  }

}
