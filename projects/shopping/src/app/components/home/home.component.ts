import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  Product:any ={
    'Name':'Samsung TV',
    'Price': 56000.44,
    'Stock': false
  }
      
  
  
}
