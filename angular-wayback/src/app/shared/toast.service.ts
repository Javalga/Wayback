import { Injectable } from '@angular/core';
import Swal from 'sweetalert2'
@Injectable({
  providedIn: 'root'
})
export class ToastService {

  constructor() { }
  toast(params: object) {
    Swal.fire(params)
  }
}
