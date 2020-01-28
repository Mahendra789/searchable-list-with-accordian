import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpClient: HttpClient) { }

  public getData() {
    return this.httpClient.get<any[]>(`https://reqres.in/api/users?page=2`);
  }


  
}