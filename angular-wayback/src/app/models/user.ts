

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
  public role_id: number;
  public warehouse_id: number;
  public location_id: number; 

  constructor(
    username?: string,
    password?: string,
    name?: string,
    role?: string,
    mail?: string,
    warehouse?: string,
    location?: string,
    active?: boolean,
    role_id?: number,
    warehouse_id?: number,
    location_id?: number, 
  ) {
    this.username = username;
    this.password = password;
    this.name = name;
    this.role = role;
    this.mail = mail;
    this.warehouse = warehouse;
    this.location = location;
    this.active = active
    this.role_id = role_id;
    this.warehouse_id = warehouse_id;
    this.location_id = location_id; 

  }
}
