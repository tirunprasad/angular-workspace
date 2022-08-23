import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fordemo',
  templateUrl: './fordemo.component.html',
  styleUrls: ['./fordemo.component.css']
})
export class FordemoComponent implements OnInit {

  MarsObject:any | null = null;
 
  constructor() { }

  ngOnInit(): void {
    fetch('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=DEMO_KEY&#39')
    .then(response=> response.json())
    .then(data=> {
      this.MarsObject = data;
  })
}
}
