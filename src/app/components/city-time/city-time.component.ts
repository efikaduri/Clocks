import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { City } from 'src/app/models/city';
import { CitiesService } from 'src/app/services/cities/cities.service';

@Component({
  selector: 'app-city-time',
  templateUrl: './city-time.component.html',
  styleUrls: ['./city-time.component.scss']
})
export class CityTimeComponent implements OnInit {

  cities: Observable<City[]>;
  selectedCities: City[];

  constructor(private citiesService: CitiesService) {
  }

  ngOnInit(): void {
    this.cities = this.citiesService.getCities();
    this.cities.subscribe(list => {
      this.selectedCities = list;
    })
  }

  onCheckboxChange(event: any, i: number) {
    this.selectedCities[i].display = event.target.checked;
  }
}
