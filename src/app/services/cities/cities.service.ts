import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { City } from 'src/app/models/city';

@Injectable({
  providedIn: 'root'
})
export class CitiesService {

  constructor(private http: HttpClient) { }

  getCities(): Observable<City[]> {
    return this.http.get<City[]>('../../assets/cities.json')
      .pipe(
        map(list => {
          list.forEach(c => c.display = true);
          return list;
        })
      );
  }
}
