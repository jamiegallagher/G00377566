import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SoftdrinkService {

  constructor(private Http:HttpClient) { }

  GetSoftDrinkData():Observable<any>{
    return this.Http.get("https://www.jsonblob.com/api/jsonblob/fc22b07e-b258-11eb-8c49-7995f113563b");
  }
}
