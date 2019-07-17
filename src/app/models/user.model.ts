export interface IUserModel {
  name: string;
  age: number;
  job: string;
}


export class UserModel implements IUserModel {

  constructor(
    public name: string = '',
    public age: number = 0,
    public job: string = ''
  ) { }

}
