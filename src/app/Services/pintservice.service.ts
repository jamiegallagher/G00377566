import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PintserviceService {
  price: any;
  amount: any;

  constructor(private http:HttpClient) { }

  GetPintData():Observable<any>{
    return this.http.get("https://www.jsonblob.com/api/jsonblob/e80987f9-b1a9-11eb-804a-45321f7eae18");
  }

  GetHotDrinkData():Observable<any>
  {
    return this.http.get('https://www.jsonblob.com/api/jsonblob/a07112fb-b273-11eb-8c49-9d5ed249f9c8');
  }

  GetLongneckData():Observable<any>{
    return this.http.get('https://www.jsonblob.com/api/jsonblob/7a473c35-b262-11eb-8c49-4749d31970c8');
  }

  GetSnackData():Observable<any>
  {
    return this.http.get('https://www.jsonblob.com/api/jsonblob/204cac46-b277-11eb-8c49-51492d30faed');
  }

  GetSoftDrinkData():Observable<any>{
    return this.http.get("https://www.jsonblob.com/api/jsonblob/fc22b07e-b258-11eb-8c49-7995f113563b");
  }

  private cart = [];
  private cartItemCount = new BehaviorSubject(0);

  getHotDrinkProducts() {
    return this.GetHotDrinkData;
  }

  getSoftDrinkProducts()
  {
    return this.GetSoftDrinkData;
  }

  getSnackProducts()
  {
    return this.GetSnackData;
  }

  getLongneckProducts()
  {
    return this.GetLongneckData;
  }

  getPintProducts()
  {
    return this.GetPintData;
  }

  getCart(){
    return this.cart;
  }

  getCartItemCount()
  {
    return this.cartItemCount;
  }

  addPint(GetPintData)
  {
    let added = false;
    for(let draughts of this.cart) {
      if(draughts.name == GetPintData.name) {
        draughts.amount += 1;
        added = true;
        break;
      }
    }
    if(!added) {
      this.cart.push(GetPintData);
    }
    this.cartItemCount.next(this.cartItemCount.value + 1);
  }

  addSnack(GetSnackData)
  {

  }

  addLongneck(GetLongneckData)
  {

  }

  addSoftDrink(GetSoftDrinkData)
  {

  }

  addHotDrink(GetHotDrinkData)
  {

  }

  decreasePint(GetPintData)
  {
    for(let [index, draughts] of this.cart.entries()) {
      if(draughts.name == GetPintData.name) {
        draughts.amount -=1;
        if(draughts.amount == 0) {
          this.cart.splice(index, 1);
        }
      }
    }
    this.cartItemCount.next(this.cartItemCount.value - 1);
  }

  decreaseLongneck(GetLongneckData)
  {

  }

  decreaseSnack(GetSnackData)
  {

  }

  decreaseSoftDrink(GetSoftDrinkData)
  {

  }

  decreaseHotDrink(GetHotDrinkData)
  {

  }

  removePint(GetPintData)
  {
    for(let [index, draughts] of this.cart.entries()) {
      if(draughts.name == GetPintData.name) {
        this.cartItemCount.next(this.cartItemCount.value - draughts.amount);
        this.cart.splice(index, 1);
      }
    }
  }

  removeLongneck( GetLongneckData)
  {

  }

  removeSnack (GetSnackData)
  {

  }

  removeSoftDrink(GetSoftDrinkData)
  {

  }

  removeHotDrink(GetHotDrinkData)
  {

  }
}
