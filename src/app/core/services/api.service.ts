import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DailyWeather } from '../interfaces/DailyWeather';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  API_KEY = environment.WEATER_API_KEY;

  constructor(private http: HttpClient) { }

  optionsHeader = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json; charset=UTF-8',
    }),
  };

  getDailyWeather(city: string): Observable<Array<DailyWeather>> {
    return this.http.get<Array<DailyWeather>>(`forecast.json?key=${this.API_KEY}&q=${city}&days=1&aqi=no&alerts=no`);
  }
}
