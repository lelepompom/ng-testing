import { TestBed } from '@angular/core/testing';

import { UserMockService } from './user-mock.service';
import { USERS } from '../models/user.data';
import { UserModel } from '../models/user.model';

describe('UserMockService', () => {
  let service: UserMockService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service  = TestBed.get(UserMockService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return all users', () => {
    service.getAllUsers().subscribe((data: UserModel[]) => {
      expect(data).not.toBeNull();
      expect(data).toEqual(USERS);
    });
  });

  it('should return one user', () => {
    service.getUser(1).subscribe((data: UserModel) => {
      expect(data).not.toBeNull();
      expect(data.name).toEqual(USERS[1].name);
    });
  });
});
