import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PintserviceService {

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
}
