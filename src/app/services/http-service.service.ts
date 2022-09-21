import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {

  constructor(private http: HttpClient) { }
  getData() {
    return this.http.get('https://api.chucknorris.io/jokes/random')
  }
}
  