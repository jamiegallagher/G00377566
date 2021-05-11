import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LongnecksService {

  constructor(private Http:HttpClient) { }

  GetLongneckData():Observable<any>{
    return this.Http.get('https://www.jsonblob.com/api/jsonblob/7a473c35-b262-11eb-8c49-4749d31970c8');
  }
}
