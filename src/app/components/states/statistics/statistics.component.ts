import { Component, OnInit, Input } from '@angular/core';

import { Hospital } from 'src/app/models/hosptial.model';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent implements OnInit {
  @Input() hospital: Hospital;

  constructor() { }

  ngOnInit(): void {
    console.log(this.hospital)
  }

}
