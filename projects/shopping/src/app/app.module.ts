import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { DatabindingComponent } from './components/databinding/databinding.component';
import { NetflixindexComponent } from './Netflix/netflixindex/netflixindex.component';
import { NetflixheaderComponent } from './Netflix/netflixheader/netflixheader.component';
import { NetflixmainComponent } from './Netflix/netflixmain/netflixmain.component';
import { NetflixregisterComponent } from './Netflix/netflixregister/netflixregister.component';
import { AccordianComponent } from './Netflix/accordian/accordian.component';
import { IfdemoComponent } from './components/ifdemo/ifdemo.component';
import { ContentprojectiondemoComponent } from './components/contentprojectiondemo/contentprojectiondemo.component';
import { ShoppingapiComponent } from './components/shoppingapi/shoppingapi.component';
import { SwitchdemoComponent } from './components/switchdemo/switchdemo.component';
import { FordemoComponent } from './components/fordemo/fordemo.component';
import { ShoppingcartComponent } from './components/shoppingcart/shoppingcart.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    DatabindingComponent,
    NetflixindexComponent,
    NetflixheaderComponent,
    NetflixmainComponent,
    NetflixregisterComponent,
    AccordianComponent,
    IfdemoComponent,
    ContentprojectiondemoComponent,
    ShoppingapiComponent,
    SwitchdemoComponent,
    FordemoComponent,
    ShoppingcartComponent 
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [ShoppingcartComponent]
})
export class AppModule { }
