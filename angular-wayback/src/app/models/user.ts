

export class User {
  public user_id: number;
  public username: string;
  public password: string;
  public name: string;
  public role: string;
  public mail: string;
  public warehouse: string;
  public location: string;
  public active: boolean;

  constructor(
    username: string,
    password: string,
    name: string,
    role: string,
    mail: string,
    warehouse: string,
    location: string,
    active: boolean
  ) {
    this.username = username;
    this.password = password;
    this.name = name;
    this.role = role;
    this.mail = mail;
    this.warehouse = warehouse;
    this.location = location;
    this.active = active

  }
}
