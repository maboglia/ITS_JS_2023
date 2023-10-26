import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScienziatiService {

  URL = 'http://www.bogliaccino.it/api/public/scienziati.php'
  constructor(private _http: HttpClient) { }

  getScienziati(){
    return this._http.get(this.URL);
  }
}
