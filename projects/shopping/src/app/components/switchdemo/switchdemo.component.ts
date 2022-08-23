import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-switchdemo',
  templateUrl: './switchdemo.component.html',
  styleUrls: ['./switchdemo.component.css']
})
export class SwitchdemoComponent implements OnInit {

  product:any | null =null;
  viewName:string = 'basicdetails';
  productId:number =1;
  
  constructor() { }

  GetData(id:number):void{
    fetch(`http://fakestoreapi.com/products/${id}`)
    .then(response => response.json())
    .then(data => {
      this.product = data;
    })

  }
  ngOnInit(): void {
    this.GetData(1);
  }

  ChangeView(e:any):void{
    this.viewName = e.target.name;
  }

  onPreviousClick(){
    this.productId++;
    this.GetData(this.productId);
  }

  onNextClick(){
    this.productId--;
    this.GetData(this.productId);
  }
}
