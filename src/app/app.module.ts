import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
//import { AppComponent } from './app.component';
import { AppComponent } from './models/feedback.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule }    from '@angular/common/http';
import { FormsModule ,ReactiveFormsModule } from '@angular/forms';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";





@NgModule({
  declarations: [
    AppComponent
  
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule ,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    FormsModule,
    MatSelectModule,
BrowserAnimationsModule,
    MatRadioModule,
    MatCheckboxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
