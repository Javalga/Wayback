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
}



