import { IfStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shoppingcart',
  templateUrl: './shoppingcart.component.html',
  styleUrls: ['./shoppingcart.component.css']
})
export class ShoppingcartComponent implements OnInit {

  categories:string[]|null = null;
  products:any[]|null = null;
  cartItems:any[]|null =[];
  cartItemsCount:number|undefined =0;
  isCartVisible:boolean = false;

  GetCartItemsCount(){
    this.cartItemsCount = this.cartItems?.length;   
  }

  GetCategories(){
    fetch('http://fakestoreapi.com/products/categories')
    .then(response=> response.json())
    .then(data=> {
      data.unshift('ALL');
      this.categories = data;
    })
  }

  GetProducts(url:any){
    fetch(url)
    .then(response=> response.json())
    .then(data=> {
      this.products = data;
    })
  }
  constructor() { }

  ngOnInit(): void {
    this.GetCategories();
    this.GetProducts('http://fakestoreapi.com/products  ');
  }

  onCategoryChange(e:any){
    if(e.target.value=="All"){
      this.GetProducts('http://fakestoreapi.com/products');
    }
    else{
      this.GetProducts(`http://fakestoreapi.com/products/category/${e.target.value}`);
    }
  }
  onAddToCartClick(id:any){
    fetch(`http://fakestoreapi.com/products/${id}`)
    .then(response=> response.json())
    .then(data=>{
      this.cartItems?.push(data);
      alert('item added to cart');
      this.GetCartItemsCount();
    })
  }
  onToggleCart(){
    this.isCartVisible =(this.isCartVisible==false)?true:false;
  }
}
