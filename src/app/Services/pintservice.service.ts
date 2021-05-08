import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PintserviceService {

  constructor(private http:HttpClient) { }

  GetPintData():Observable<any>{
    return this.http.get("https://www.jsonblob.com/api/jsonblob/8877ad0a-b03d-11eb-83dc-21fe562972d5");
  }
}
