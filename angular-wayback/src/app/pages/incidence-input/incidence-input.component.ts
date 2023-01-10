import { Component } from '@angular/core';
import { Incidence } from 'src/app/models/incidence';
import { IncidenceService } from 'src/app/shared/incidence.service';
import { IncidenceTypeService } from 'src/app/shared/incidence-type.service';
import { IncidenceType } from 'src/app/models/incidence-type';
import { WarehouseService } from 'src/app/shared/warehouse.service';
import { Warehouse } from 'src/app/models/warehouse';
import { ToastService } from 'src/app/shared/toast.service';
import { HttpClient } from '@angular/common/http';
import { LoginService } from 'src/app/shared/login.service';
import * as moment from 'moment';


@Component({
  selector: 'app-incidence-input',
  templateUrl: './incidence-input.component.html',
  styleUrls: ['./incidence-input.component.css'],
})
export class IncidenceInputComponent {
  public value: string = 'Registro';
  public incidence: Incidence;
  public warehouses: Warehouse[];
  public incidence_type: IncidenceType[];
  public csv_response;
  public inputResponse;
  constructor(
    public incidenceService: IncidenceService,
    public IncidenceTypeService: IncidenceTypeService,
    public WarehouseService: WarehouseService,
    public toastService: ToastService,
    public loginService: LoginService,
    private http: HttpClient
  ) {
    this.incidence = new Incidence();
    this.WarehouseService.getWarehouses().subscribe((data: Warehouse[]) => {
      this.warehouses = data;
      if (this.loginService.user.role_id == 3){
        this.warehouses = this.warehouses.filter(
          (elem) => elem.warehouse_id == this.loginService.user.warehouse_id
        );
      }else if(this.loginService.user.role_id == 2){
        this.warehouses = this.warehouses.filter(
          (elem) => elem.location_id == this.loginService.user.location_id
        );
      }
        
      
    });

    this.IncidenceTypeService.getIncidence_type().subscribe(
      (data: IncidenceType[]) => {
        this.incidence_type = data;
      }
    );
  }
  sendEmail(body) {
    let url = "http://localhost:3000/mailer"
    return this.http.post(url, body)
  }
  registerIncidence(ref, warehouse_id, incidence_type_id) {
    this.incidenceService.getIncidence(ref).subscribe((data) => {
      this.csv_response = data;

      let warehouse = this.warehouses.filter((elem) => elem.warehouse_id == warehouse_id);
      let location_id = warehouse[0].location_id
           
      this.incidence.incidence_ref = ref;
      this.incidence.warehouse_id = Number(warehouse_id);
      this.incidence.location_id = location_id;
      this.incidence.status_id = 1;
      this.incidence.incidence_type_id = Number(incidence_type_id);
      this.incidence.customer_name = this.csv_response[0].Nombre;
      this.incidence.customer_phone = this.csv_response[0].Movil;
      this.incidence.customer_mail = this.csv_response[0].Email;
      this.incidence.customer_address = this.csv_response[0].Direccion;
      this.incidence.customer_cp = this.csv_response[0].CP;
      this.incidence.customer_city = this.csv_response[0].Poblacion;
      this.incidence.input_date = moment().format('YYYY-MM-DD');

      console.log(this.incidence);
      this.incidenceService.postIncidence(this.incidence).subscribe((data) => {
        this.inputResponse = data;

        if (this.inputResponse.code == 'ER_DUP_ENTRY') {
          const audio = new Audio('assets/perder-incorrecto-no-valido.mp3');
          audio.play();
          this.toastService.toast({
            position: 'bottom-end',
            icon: 'error',
            title: `Incidencia Ya Introducida`,
            showConfirmButton: false,
            timer: 4000,
          });
        } else {
          this.sendEmail({
            "email": `${this.incidence.customer_mail}`,
            "subject": "Su pedido no ha podido ser entregado",
            "html": `<b>Hola, <strong>${this.incidence.customer_name}</strong>,\nEl paquete con numero de referencia ${this.incidence.incidence_ref} no ha podido ser entregado,
            por favor entra en este enlace para completar la gestion de la incidencia.</p>
            <a href='http://localhost:4200/customer-input/${this.incidence.incidence_ref}'>Click aqui</a>`
          }).subscribe((data) => {
            console.log(data);
          })
          const audio = new Audio('assets/pitido.mp3');
          audio.play();
        }
      });
    });
  }
}
