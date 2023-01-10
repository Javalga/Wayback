import { Injectable } from '@angular/core';
import { Incidence } from 'src/app/models/incidence';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class IncidenceService {
  public incidences: Incidence[];
  public url: string;
  constructor(private http: HttpClient) {}
  // get en la tabla csv y un insert en la tabla de incidents

  getIncidence(ref) {
    console.log(ref);
    this.url = `http://localhost:3000/incidence?number_expedient=${ref}`;
    console.log(this.url);
    return this.http.get(this.url);
  }

  postIncidence(incidence) {
    this.url = `http://localhost:3000/incidence`;
    console.log(incidence);

    return this.http.post(this.url, incidence);
  }

  getAllIncidence() {
    this.url = 'http://localhost:3000/incidence_processed';
    return this.http.get(this.url);
  }

  getOneIncidence(incidence_ref: Number) {
    this.url = `http://localhost:3000/incidence_processed?incidence_ref=${incidence_ref}`;
    return this.http.get(this.url);
  }

  getSolvedIncidence(dateSince, dateUntil) {
    this.url = `http://localhost:3000/incidence_solved?since=${dateSince}&until=${dateUntil}`;
    return this.http.get(this.url);
  }

  getIncidenceToReturn(dateSince, dateUntil) {
    this.url = `http://localhost:3000/incidence_to_return?since=${dateSince}&until=${dateUntil}`;
    return this.http.get(this.url);
  }

  gettFilteredIncidences(col, value) {
    this.url = `http://localhost:3000/filter?col=${col}&value=${value}`;
    return this.http.get(this.url);
  }

  putIncidence(incidence) {
    this.url = `http://localhost:3000/incidence_form`;
    console.log(incidence);
    return this.http.put(this.url, incidence);
  }

  getIncidenceDashboard(dateSince, dateUntil) {
    console.log(dateSince);
    this.url = `http://localhost:3000/incidence_dashboard?since=${dateSince}&until=${dateUntil}`;    
    return this.http.get(this.url);
  }
}



