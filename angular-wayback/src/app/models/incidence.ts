export class Incidence {
  public number_expedient: number;
  public status: string;
  public incidence_type: string;
  public customer_name: string;
  public customer_phone: number;
  public customer_mail: string;
  public customer_direction: string;
  public customer_cp: number;
  public customer_poblation: string;
  public warehouse_ubication: string;
  public input_date: Date;
  public output_date: Date;
  public next_delivey: Date;
  public delivery_time: string;

  constructor(
    number_expedient: number,
    status: string,
    incidence_type: string,
    customer_name: string,
    customer_phone: number,
    customer_mail: string,
    customer_direction: string,
    customer_cp: number,
    customer_poblation: string,
    warehouse_ubication: string
  ) {
    this.number_expedient = number_expedient;
    this.status = status;
    this.incidence_type = incidence_type;
    this.customer_name = customer_name;
    this.customer_phone = customer_phone;
    this.customer_mail = customer_mail;
    this.customer_direction = customer_direction;
    this.customer_cp = customer_cp;
    this.customer_poblation = customer_poblation;
    this.warehouse_ubication = warehouse_ubication;
  }
}
