import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  public cartAddedSubject=new Subject<boolean>();

  constructor(private http:HttpClient) { }

  getAllProducts():Observable<any>{
    return this.http.get<any[]>("https://freeapi.miniprojectideas.com/api/amazon/GetAllProducts");
  }
  addToCart(obj:any):Observable<any>{
    return this.http.post<any[]>("https://onlinetestapi.gerasim.in/api/Ecomm/AddToCart",obj);
  }

  getCartItemByCusId(custId:number){
    return this.http.get("https://onlinetestapi.gerasim.in/api/Ecomm/GetCartProductsByCustomerId?id=1"+custId)
  }
}
