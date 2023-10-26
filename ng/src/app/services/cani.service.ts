import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CaniService {

  CANI = [
    {nome:'kant', razza:'pastore'},
    {nome:'yuki', razza:'husky'},
  ]
 
  constructor() { }

  
  public getCANI() {
    return this.CANI
  }
  
}
