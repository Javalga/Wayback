export class Incidence {
  public incidence_ref: number;
  public warehouse_id: number;
  public status: string;
  public incidence_type: string;
  public customer_name: string;
  public customer_phone: string;
  public customer_mail: string;
  public customer_address: string;
  public customer_cp: string;
  public customer_city: string;
  public input_date: Date;
  public output_date: Date;
  public next_delivey: Date;
  public delivery_time: string;
  public warehouse_location: string

  constructor(
    incidence_ref?: number,
    warehouse_id?: number,
    status?: string,
    incidence_type?: string,
    customer_name?: string,
    customer_phone?: string,
    customer_mail?: string,
    customer_address?: string,
    customer_cp?: string,
    customer_city?: string,
  ) {
    this.incidence_ref = incidence_ref;
    this.warehouse_id = warehouse_id;
    this.status = status;
    this.incidence_type = incidence_type;
    this.customer_name = customer_name;
    this.customer_phone = customer_phone;
    this.customer_mail = customer_mail;
    this.customer_address = customer_address;
    this.customer_cp = customer_cp;
    this.customer_city = customer_city;
  }
}
