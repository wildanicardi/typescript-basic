export class UserClass {
  name: string;
  constructor(name: string, public age: number) {
    this.name = name;
  }
  setName(value: string): void {
    this.name = value;
  }
  getName = (): string => {
    return this.name;
  };
}
let myuser = new UserClass("wildan", 10);
// console.log(myuser.name);

// inheritance
class Admin extends UserClass {
  read: boolean = true;
  write: boolean = true;
  private _email: string = "";
  // static method
  static getRoleName:string = "Admin";
  constructor(public phone: string, name: string, age: number) {
    super(name, age);
  }
  getRole(): { read: boolean; write: boolean } {
    return {
      read: this.read,
      write: this.write,
    };
  }
  set email(value: string) {
    this._email = value;
  }
  get email(): string {
    return this._email;
  }
}
let adminUser = new Admin("123", "ALi", 20);
adminUser.email = "aliwildan@mail.com" ;
let role = Admin.getRoleName;
console.log(role);
