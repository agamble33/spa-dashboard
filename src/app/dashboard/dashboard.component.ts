import { Component, OnInit, Input } from '@angular/core';
import { ChartDataSets } from 'chart.js';

import { HospitalService } from "../providers/hospital.service"
import { Hospital } from "../models/hosptial.model"

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  public hospitals: Array<Hospital> = [];
  public selectedState: string = "";
  public selectedHospital: Hospital;
  public graphData: ChartDataSets[] = [];
  constructor(public hospitalService: HospitalService) { }

  ngOnInit(): void {
    this.hospitalService.fetchAll().subscribe(hospitals => {
      this.hospitals = hospitals.filter(hospital => {
        return hospital.period == 2015
      })
    })
  }

  onStateChange(value: string) {
    this.selectedHospital = this.hospitals.filter(h => {
      return h.region === this.selectedState
    })[0];
    if (this.selectedHospital) {
      this.graphData = this.generateGraphData(this.selectedHospital)
    } else {
      this.graphData = [];
    }
  }

  private generateGraphData(hospital: Hospital): ChartDataSets[] {
    return [
      {
        data: [hospital.immunization_measure],
        label: 'Immunization Measure'
      },
      {
        data: [hospital.reportable_lab_results_measure],
        label: 'Reported Results'
      },
      {
        data: [hospital.syndromic_surveillance_measure],
        label: 'Syndromic surveillance measure'
      },
      {
        data: [hospital.registry_measure],
        label: 'Registery Measure'
      },
    ]
  }

}

