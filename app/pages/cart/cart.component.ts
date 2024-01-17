import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  
  cartProducts:any[]=[];
  constructor(private pro:ProductsService){
    this.pro.cartAddedSubject.subscribe(res=>{

    })
  }
  ngOnInit(): void {
    // this.loadcart();
    this.pro.getCartItemByCusId(1).subscribe((res:any)=>{
      this.cartProducts=res.data;
   })
  }
  

  loadcart(){
    this.pro.getCartItemByCusId(1).subscribe((res:any)=>{
       this.cartProducts=res.data;
    })
  }


}
