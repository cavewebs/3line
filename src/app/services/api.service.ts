import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, from } from 'rxjs';
import { tap, map, catchError } from "rxjs/operators";
 
const API_STORAGE_KEY = 'specialkey';
const API_URL = 'http://jsonplaceholder.typicode.com/';
 
@Injectable({
  providedIn: 'root'
})
export class ApiService {
 
  constructor(private http: HttpClient) { }
 
   getUsers(){
      return this.http.get(`${API_URL}/users`).pipe(
        map(res=>res['data'])
      )
    }
  

  
}