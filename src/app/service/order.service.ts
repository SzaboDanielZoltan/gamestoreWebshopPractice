import { Injectable } from '@angular/core';
import { Order } from '../model/order';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  urlForServer = '';
  oneOfTheDatas = '';

  constructor(
    private http: HttpClient,
    private router: Router
  ) {
    this.urlForServer = this.router.url.split('/')[2];
    if (this.router.url.split('/')[3] != undefined) {
      this.oneOfTheDatas = `/${this.router.url.split('/')[3]}`;
    }
  }

  getAll(jsonName, id): Observable<any> {
    return this.http.get(`http://localhost:3210/${jsonName}/${id}`);
  }

  add(object): Observable<any> {
    return this.http.post(`http://localhost:3210/${this.urlForServer}${this.oneOfTheDatas}`, object);
  }

  edit(object): Observable<any> {
    return this.http.put(`http://localhost:3210/${this.urlForServer}${this.oneOfTheDatas}`, object);
  }

  remove(object): Observable<any> {
    return this.http.delete(`http://localhost:3210/${this.urlForServer}${this.oneOfTheDatas}`);
  }

}
