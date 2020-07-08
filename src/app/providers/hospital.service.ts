import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Hospital } from '../models/hosptial.model';

@Injectable({
  providedIn: 'root'
})
export class HospitalService {

  constructor(private http: HttpClient) { }

  fetchAll() {
    const url: string = "https://dashboard.healthit.gov/api/open-api.php?source=hospital-mu-public-health-measures.csv";

    return this.http.get<Hospital[]>(url)
  }

}


