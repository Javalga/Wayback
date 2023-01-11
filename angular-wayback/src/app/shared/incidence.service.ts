import { Injectable } from '@angular/core';
import { Incidence } from 'src/app/models/incidence';
import { HttpClient } from '@angular/common/http';
import { ApiPathService } from './api-path.service';

@Injectable({
  providedIn: 'root',
})
export class IncidenceService {
  public incidences: Incidence[];
  public url: string;
  constructor(private http: HttpClient, private apiPathService: ApiPathService) {}
  // get en la tabla csv y un insert en la tabla de incidents

  getIncidence(ref) {
    console.log(ref);
    this.url = `${this.apiPathService.apiPath}/incidence?number_expedient=${ref}`;
    console.log(this.url);
    return this.http.get(this.url);
  }

  postIncidence(incidence) {
    this.url = `${this.apiPathService.apiPath}/incidence`;
    console.log(incidence);

    return this.http.post(this.url, incidence);
  }

  getAllIncidence() {
    this.url = `${this.apiPathService.apiPath}/incidence_processed`;
    return this.http.get(this.url);
  }

  getAllIncidenceDateRange(dateSince, dateUntil) {
    this.url = `${this.apiPathService.apiPath}/incidence_processed?since=${dateSince}&until=${dateUntil}`;
    return this.http.get(this.url);
  }

  getOneIncidence(incidence_ref: Number) {
    this.url = `${this.apiPathService.apiPath}/incidence_processed?incidence_ref=${incidence_ref}`;
    return this.http.get(this.url);
  }

  getSolvedIncidence(dateSince, dateUntil) {
    this.url = `${this.apiPathService.apiPath}/incidence_solved?since=${dateSince}&until=${dateUntil}`;
    return this.http.get(this.url);
  }

  getIncidenceToReturn(dateSince, dateUntil) {
    this.url = `${this.apiPathService.apiPath}/incidence_to_return?since=${dateSince}&until=${dateUntil}`;
    return this.http.get(this.url);
  }

  gettFilteredIncidences(col, value) {
    this.url = `${this.apiPathService.apiPath}/filter?col=${col}&value=${value}`;
    return this.http.get(this.url);
  }

  putIncidence(incidence) {
    this.url = `${this.apiPathService.apiPath}/incidence_form`;
    console.log(incidence);
    return this.http.put(this.url, incidence);
  }

  getIncidenceDashboard(dateSince, dateUntil) {
    console.log(dateSince);
    this.url = `${this.apiPathService.apiPath}/incidence_dashboard?since=${dateSince}&until=${dateUntil}`;
    return this.http.get(this.url);
  }
}



