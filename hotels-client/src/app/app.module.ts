import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";


import { AppComponent } from './app.component';
import {HotelsService} from "../Services/Hotels.service";
import {HttpModule} from "@angular/http";
import { ListHotelsComponent } from './list-hotels/list-hotels.component';
import { StarsComponent } from './stars/stars.component';
import { AmenitiesComponent } from './amenities/amenities.component';
import {NgProgressModule} from "ngx-progressbar";

@NgModule({
  declarations: [
    AppComponent,
    ListHotelsComponent,
    StarsComponent,
    AmenitiesComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    BrowserAnimationsModule,
    NgProgressModule,
  ],
  providers: [
    HotelsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
