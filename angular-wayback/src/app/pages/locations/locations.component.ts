import { Component, ViewChild } from '@angular/core';
import { LocationService } from "src/app/shared/location.service"
import { LoginService } from 'src/app/shared/login.service';
import { Location } from 'src/app/models/location';
import { ToastService } from 'src/app/shared/toast.service';


@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.css'],
})
export class LocationsComponent {
  public value: string = 'Filtrar';
  public cols: string[];
  public rows = [];
  public locations: Location[];
  public location: Location;
  public filteredLocations: Location[];
  public auxRows;

  constructor(
    public LocationService: LocationService,
    public loginService: LoginService,
    public toastService: ToastService
  ) {
    this.LocationService.getLocations().subscribe((data: Location[]) => {
      this.locations = data;

      this.cols = ['Nombre'];
      if (this.loginService.user.role_id == 2) {
        this.locations = this.locations.filter(
          (elem) => elem.location_id == this.loginService.user.location_id
        );
      }
      for (let i = 0; i < this.locations.length; i++) {
        this.rows.push([this.locations[i].name]);
      }
    });
    this.auxRows = this.rows;
  }
  useFilter(params: string[]) {
    function normalizeString(text: string) {
      text = text.toLowerCase();
      text = text.replace(/á/gi, 'a');
      text = text.replace(/é/gi, 'e');
      text = text.replace(/í/gi, 'i');
      text = text.replace(/ó/gi, 'o');
      text = text.replace(/ú/gi, 'u');
      text = text.replace(/ñ/gi, 'n');
      return text;
    }
    let key = params[0];
    if (params[1] !== '') {
      this.filteredLocations = this.locations.filter(function (elem) {
        return normalizeString(elem[key]) === normalizeString(params[1]);
      });
      this.locations = this.filteredLocations;
      this.rows = [];
      this.filteredLocations.forEach((location, index, arr) => {
        this.rows.push([]);
        this.rows[index].push(location.name);
      });
    } else {
      this.rows = this.auxRows;
    }
  }

  createLocation(input) {
    let location = new Location(input);
    this.LocationService.postLocation(location).subscribe((data) => {
      this.LocationService.getLocations().subscribe((data: Location[]) => {
        this.locations = data;

        this.cols = ['Nombre'];
        this.rows = [];
        for (let i = 0; i < this.locations.length; i++) {
          this.rows.push([this.locations[i].name]);
        }
      });
    });
    this.toastService.toast({
      position: 'bottom-end',
      icon: 'success',
      title: `Localidad creada correctamente`,
      showConfirmButton: false,
      timer: 4000
    })
  }
}
