import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'

/*
  Generated class for the WeatherProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DataProvider {

url;


  constructor(public http: HttpClient) {
    console.log('Hello Data Provider');
    this.url = 'http://www.mocky.io/v2/5ac394e13000006500f46fa6';
  }
  getData() {
    return this.http.get(this.url);

  }

}
