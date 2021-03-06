import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }

  getWeather(city) {
    return this._http.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=93447b78ed332dc0065cc3d3cb874fe6`)
  }

}
