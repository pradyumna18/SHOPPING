import { Component, OnInit } from '@angular/core';

import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  constructor(private pro:ProductsService){}

  productsList:any[]=[];
  cartObj:any={
    "CartId": 0,
    "CustId": 1,
    "ProductId": 0,
    "Quantity": 0,
    "AddedDate": "2024-01-15T12:30:44.886Z"
  }


  loadAllProducts(){
    this.pro.getAllProducts().subscribe((result:any)=>{
          this.productsList=result.data;
    })
  }

  addItemToCart(productId:number){
    this.cartObj.productId.productId;
    this.pro.addToCart(this.cartObj).subscribe((result:any)=>{
      if(result.result){
        alert("Products Added Successfully");
        this.pro.cartAddedSubject.next(true);
      }
    })
  }

  ngOnInit(): void {
    this.loadAllProducts();
  }



}
