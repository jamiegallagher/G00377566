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
}
