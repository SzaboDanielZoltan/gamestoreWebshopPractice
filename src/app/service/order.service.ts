import { Injectable } from '@angular/core';
import { Order } from '../model/order';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  /* orders: Order[] = [
    new Order(),
    new Order(),
    new Order(),
  ]; */

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  getAll(): Observable<any> {
    const urlForServer = this.router.url.split('/')[2];
    let oneOfTheDatas = '';
    if (this.router.url.split('/')[3] != undefined) {
      oneOfTheDatas = `/${this.router.url.split('/')[3]}`;
    }
    console.log(this.router.url.split('/'));
    return this.http.get(`http://localhost:3210/${urlForServer}${oneOfTheDatas}`);
    /* return new Observable(observer => {
      observer.next(this.orders);
    }) */
  }

}
