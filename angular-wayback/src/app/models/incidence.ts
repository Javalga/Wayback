export class Incidence {
  public number_expedient: number;
  public status: string;
  public incidence_type: string;
  public costumer_name: string;
  public costumer_phone: number;
  public costumer_mail: string;
  public costumer_direction: string;
  public costumer_cp: number;
  public costumer_poblation: string;
  public warehouse_ubication: string;
  public input_date: Date;
  public output_date: Date;
  public next_delivey: Date;
  public delivery_time: string;

  constructor(
    number_expedient: number,
    status: string,
    incidence_type: string,
    costumer_name: string,
    costumer_phone: number,
    costumer_mail: string,
    costumer_direction: string,
    costumer_cp: number,
    costumer_poblation: string,
    warehouse_ubication: string
  ) {
    this.number_expedient = number_expedient;
    this.status = status;
    this.incidence_type = incidence_type;
    this.costumer_name = costumer_name;
    this.costumer_phone = costumer_phone;
    this.costumer_mail = costumer_mail;
    this.costumer_direction = costumer_direction;
    this.costumer_cp = costumer_cp;
    this.costumer_poblation = costumer_poblation;
    this.warehouse_ubication = warehouse_ubication;
  }
}
