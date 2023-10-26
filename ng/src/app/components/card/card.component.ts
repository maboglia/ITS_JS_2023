import { Component, OnInit } from '@angular/core';
import { CaniService } from 'src/app/services/cani.service';
import { ScienziatiService } from 'src/app/services/scienziati.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit{

  scienziati: any;
  cani: any;

  constructor(
    private caniservice: CaniService, 
    private scienziatiService:ScienziatiService,
    ){
  }
  ngOnInit(): void {
    this.cani = this.caniservice.getCANI()
    this.scienziatiService.getScienziati().subscribe(
      data => {
        console.log(data);
        
        this.scienziati = data
      }
      
    )

  }



}
