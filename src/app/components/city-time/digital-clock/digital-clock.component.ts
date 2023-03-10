import { Component, Input, OnInit } from '@angular/core';
import { City } from 'src/app/models/city';

@Component({
  selector: 'app-digital-clock',
  templateUrl: './digital-clock.component.html',
  styleUrls: ['./digital-clock.component.scss']
})
export class DigitalClockComponent implements OnInit {

  @Input()
  city: City;

  clock: Date;
  hour: number = 0;
  minute: number = 0;
  second: number = 0;

  hourHandStyle; 
  minuteHandStyle; 
  secondHandStyle; 
  
  constructor() { }

  ngOnInit(): void {
    setInterval(() => {
      const currentDate = new Date();
      this.clock = new Date(currentDate.setHours(currentDate.getHours() + this.city.addHours));
      this.hour = this.clock.getHours();
      this.minute = this.clock.getMinutes();
      this.second = this.clock.getSeconds();
      this.animateAnalogClock();
    }, 1000);
  }

  animateAnalogClock() {
    this.hourHandStyle = { transform: `translate3d(-50%, 0, 0) rotate(${(this.hour * 30) + (this.minute * 0.5) + (this.second * (0.5 / 60))}deg)` };
    this.minuteHandStyle = { transform: `translate3d(-50%, 0, 0) rotate(${(this.minute * 6) + (this.second * 0.1)}deg)` };
    this.secondHandStyle = { transform: `translate3d(-50%, 0, 0) rotate(${this.second * 6}deg)` };
  }

}
