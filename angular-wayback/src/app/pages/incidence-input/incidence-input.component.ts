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
      if (this.loginService.user.role_id == 3) {
        this.warehouses = this.warehouses.filter(
          (elem) => elem.warehouse_id == this.loginService.user.warehouse_id
        );
      } else if (this.loginService.user.role_id == 2) {
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
            "html": `<!DOCTYPE html
            PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
        <html xmlns="http://www.w3.org/1999/xhtml" xmlns:o="urn:schemas-microsoft-com:office:office">
        
        <head>
            <meta charset="UTF-8">
            <meta content="width=device-width, initial-scale=1" name="viewport">
            <meta name="x-apple-disable-message-reformatting">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta content="telephone=no" name="format-detection">
            <title></title>
            <!--[if (mso 16)]>
            <style type="text/css">
            a {text-decoration: none;}
            </style>
            <![endif]-->
            <!--[if gte mso 9]><style>sup { font-size: 100% !important; }</style><![endif]-->
            <!--[if gte mso 9]>
        <xml>
            <o:OfficeDocumentSettings>
            <o:AllowPNG></o:AllowPNG>
            <o:PixelsPerInch>96</o:PixelsPerInch>
            </o:OfficeDocumentSettings>
        </xml>
        <![endif]-->
        </head>
        
        <body bis_status="ok">
            <div class="es-wrapper-color">
                <!--[if gte mso 9]>
              <v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="t">
                <v:fill type="tile" color="#f6f6f6"></v:fill>
              </v:background>
            <![endif]-->
                <table class="es-wrapper" width="100%" cellspacing="0" cellpadding="0" style="background-color: #1b2431">
                    <tbody>
                        <tr>
                            <td class="esd-email-paddings" valign="top">
                                <table class="esd-header-popover es-header" cellspacing="0" cellpadding="0" align="center">
                                    <tbody>
                                        <tr>
                                            <td class="esd-stripe" align="center">
                                                <table class="es-header-body" width="600" cellspacing="0" cellpadding="0"
                                                    bgcolor="#ffffff" align="center" style="background-color:#222c3c">
                                                    <tbody>
                                                        <tr>
                                                            <td class="es-p20t es-p20r es-p20l esd-structure" align="left">
                                                                <!--[if mso]><table width="560" cellpadding="0"
                                    cellspacing="0"><tr><td width="50" valign="top"><![endif]-->
                                                                <table class="es-left" cellspacing="0" cellpadding="0"
                                                                    align="left">
                                                                    <tbody>
                                                                        <tr>
                                                                            <td class="es-m-p0r es-m-p20b esd-container-frame"
                                                                                width="50" valign="top" align="center">
                                                                                <table width="100%" cellspacing="0"
                                                                                    cellpadding="0">
                                                                                    <tbody>
                                                                                        <tr>
                                                                                            <td align="center"
                                                                                                class="esd-block-image"
                                                                                                style="font-size: 0px;"><a
                                                                                                    target="_blank"><img
                                                                                                        class="adapt-img"
                                                                                                        src="https://demo.stripocdn.email/content/guids/374cf6b9-0b8b-45b1-99bd-45174ef940a5/images/logo.png"
                                                                                                        alt
                                                                                                        style="display: block;"
                                                                                                        width="50"></a></td>
                                                                                        </tr>
                                                                                    </tbody>
                                                                                </table>
                                                                            </td>
                                                                        </tr>
                                                                    </tbody>
                                                                </table>
                                                                <!--[if mso]></td><td width="20"></td><td width="490" valign="top"><![endif]-->
                                                                <table cellspacing="0" cellpadding="0" align="right">
                                                                    <tbody>
                                                                        <tr>
                                                                            <td class="esd-container-frame" width="490"
                                                                                align="left">
                                                                                <table width="100%" cellspacing="0"
                                                                                    cellpadding="0">
                                                                                    <tbody>
                                                                                        <tr>
                                                                                            <td align="left"
                                                                                                class="esd-block-text">
                                                                                                <p
                                                                                                    style="color: #ffffff; font-size: 28px;">
                                                                                                    <strong>Resolucion de
                                                                                                        incidencia&nbsp;</strong>
                                                                                                </p>
                                                                                            </td>
                                                                                        </tr>
                                                                                    </tbody>
                                                                                </table>
                                                                            </td>
                                                                        </tr>
                                                                    </tbody>
                                                                </table>
                                                                <!--[if mso]></td></tr></table><![endif]-->
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                <table class="es-content" cellspacing="0" cellpadding="0" align="center">
                                    <tbody>
                                        <tr>
                                            <td class="esd-stripe" align="center">
                                                <table class="es-content-body" width="600" cellspacing="0" cellpadding="0"
                                                    bgcolor="#ffffff" align="center" style="background-color:#222c3c">
                                                    <tbody>
                                                        <tr>
                                                            <td class="es-p20t es-p20r es-p20l esd-structure" align="left">
                                                                <table width="100%" cellspacing="0" cellpadding="0">
                                                                    <tbody>
                                                                        <tr>
                                                                            <td class="esd-container-frame" width="560"
                                                                                valign="top" align="center">
                                                                                <table width="100%" cellspacing="0"
                                                                                    cellpadding="0">
                                                                                    <tbody>
                                                                                        <tr>
                                                                                            <td align="left"
                                                                                                class="esd-block-text">
                                                                                                <p style="color: #ffffff;">Hola,
                                                                                                    <strong>${this.incidence.customer_name}</strong>.
                                                                                                    Su paquete no ha podido ser
                                                                                                    entregado, por favor rellene
                                                                                                    el formulario en el
                                                                                                    siguiente link para
                                                                                                    especificar la hora y el dia
                                                                                                    de entrega de su paquete,
                                                                                                    muchas gracias.<br><br></p>
                                                                                            </td>
                                                                                        </tr>
                                                                                    </tbody>
                                                                                </table>
                                                                            </td>
                                                                        </tr>
                                                                    </tbody>
                                                                </table>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                <table class="esd-footer-popover es-footer" cellspacing="0" cellpadding="0" align="center">
                                    <tbody>
                                        <tr>
                                            <td class="esd-stripe" align="center">
                                                <table class="es-footer-body" width="600" cellspacing="0" cellpadding="0"
                                                    bgcolor="#ffffff" align="center" style="background-color:#222c3c">
                                                    <tbody>
                                                        <tr>
                                                            <td class="esd-structure es-p20t es-p20b es-p20r es-p20l"
                                                                align="left">
                                                                <table cellspacing="0" cellpadding="0" width="100%">
                                                                    <tbody>
                                                                        <tr>
                                                                            <td class="esd-container-frame" width="560"
                                                                                align="left">
                                                                                <table width="100%" cellspacing="0"
                                                                                    cellpadding="0">
                                                                                    <tbody>
                                                                                        <tr>
                                                                                            <td align="center"
                                                                                                class="esd-block-button"><span
                                                                                                    class="es-button-border"
                                                                                                    style="border-color: #f06835; background: #f06835;"><a
                                                                                                        href='http://localhost:4200/customer-input/${this.incidence.incidence_ref}'
                                                                                                        class="es-button"
                                                                                                        target="_blank"
                                                                                                        style="background: #f06835; border-color: #f06835;">
                                                                                                        Formulario </a></span>
                                                                                            </td>
                                                                                        </tr>
                                                                                    </tbody>
                                                                                </table>
                                                                            </td>
                                                                        </tr>
                                                                    </tbody>
                                                                </table>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </body>
        
        </html>`
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
