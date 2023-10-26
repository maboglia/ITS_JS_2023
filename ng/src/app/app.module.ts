import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatCardModule} from '@angular/material/card';
import { CardComponent } from './components/card/card.component'; 
import {MatButtonModule} from '@angular/material/button'; 
import {MatToolbarModule} from '@angular/material/toolbar';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import {MatIconModule} from '@angular/material/icon';
import { HomeComponent } from './components/home/home.component';
import { CaniService } from './services/cani.service';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from '@angular/forms';
import { ScienziatiComponent } from './components/scienziati/scienziati.component';
import { ScienziatiService } from './services/scienziati.service';


@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    TopBarComponent,
    HomeComponent,
    ScienziatiComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule, 
    MatIconModule,
  ],
  providers: [CaniService,ScienziatiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
