import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { ChildOneComponent } from './childone.component';
import { ChildTwoComponent } from './childtwo.component';
import { CustomerComponent } from './customer.component';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core' ;

@NgModule({
  declarations: [ChildOneComponent,ChildTwoComponent,CustomerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule,
    HttpModule,
  ],
  providers: [],
})
export class CustomerModule { }
