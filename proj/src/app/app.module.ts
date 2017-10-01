import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component';
import { CustomerModule } from './customer/customer.module';
import { CustomerComponent } from './customer/customer.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core' ;
// import { CustomerRoutingModule } from './customer/customer-routing.module'

@NgModule({
  declarations: [
    AppComponent,LoginComponent,HomeComponent,CustomerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule,
    HttpModule,
    AppRoutingModule,
    CustomerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
