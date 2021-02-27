import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Images } from '../model/Images.Model';

@Injectable
({
  providedIn: 'root'
})
export class CrudService 
{

  constructor(private http:HttpClient) { }

  //public getFotos():Observable<List<Images>>
  public getFotos():Observable<any>
  {
    return this.http.get('https://jsonplaceholder.typicode.com/photos');
  }
}
