import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-shoppingapi',
  templateUrl: './shoppingapi.component.html',
  styleUrls: ['./shoppingapi.component.css']
})
export class ShoppingapiComponent implements OnInit {

  product:any|null = null;
  thenBlock:TemplateRef<any>|null = null;
  buttonText:string = 'Preview';
  count:number = 1;
  
  @ViewChild('preview', {static:true}) preview:TemplateRef<any>|null =null;
  @ViewChild('description', {static:true}) description:TemplateRef<any>|null = null;
  constructor() { }

  GetData(id:number) {
    fetch(`http://fakestoreapi.com/products/${id}`)
    .then(response => response.json())
    .then(data =>{
      this.product =data;
    })
  }

  ngOnInit(): void {
    this.thenBlock =this.preview;
    this.GetData(this.count);
   
  }
  onToggle(){
    this.thenBlock=(this.thenBlock==this.preview)? this.description:this.preview;
    this.buttonText=(this.buttonText=='Preview')? 'Description':'Preview' ;
  }
  
  onNextClick(){
    this.count++;
    this.GetData(this.count);
  }

  onPreviousClick(){
    this.count--;
    this.GetData(this.count);
  }
}
