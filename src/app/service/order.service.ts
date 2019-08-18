import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(
    private http: HttpClient
  ) { }

  getAll(jsonName, id): Observable<any> {
    return this.http.get(`http://localhost:3210/${jsonName}/${id}`);
  }

  add(jsonName, object): Observable<any> {
    return this.http.post(`http://localhost:3210/${jsonName}`, object);
  }

  edit(jsonName, object): Observable<any> {
    return this.http.put(`http://localhost:3210/${jsonName}/${object.id}`, object);
  }

  remove(jsonName, object): Observable<any> {
    return this.http.delete(`http://localhost:3210/${jsonName}/${object.id}`);
  }

}
