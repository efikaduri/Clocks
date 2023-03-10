import { Component, Input, OnInit } from '@angular/core';
import { City } from 'src/app/models/city';

@Component({
  selector: 'app-analog-clock',
  templateUrl: './analog-clock.component.html',
  styleUrls: ['./analog-clock.component.scss']
})
export class AnalogClockComponent implements OnInit {

  @Input()
  city: City;
  clock: Date;

  constructor() { }

  ngOnInit(): void {
    setInterval(() => {
      const currentDate = new Date();
      this.clock = new Date(currentDate.setHours(currentDate.getHours() + this.city.addHours));
    }, 1000);
  }

}
