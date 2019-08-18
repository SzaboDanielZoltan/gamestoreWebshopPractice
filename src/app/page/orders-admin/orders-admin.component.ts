import { Component, OnInit, OnDestroy } from '@angular/core';
import { OrderService } from 'src/app/service/order.service';
import { Order } from 'src/app/model/order';
import { Observable, Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-orders-admin',
  templateUrl: './orders-admin.component.html',
  styleUrls: ['./orders-admin.component.css']
})
export class OrdersAdminComponent implements OnInit, OnDestroy {
  userSubscription: Subscription;
  orderList: Order[];
  urlForServer = '';
  oneOfTheDatas = '';
  counter = 0;
  orderDirection: number = 1;
  orderKey: string = 'id';

  constructor(
    private orderService: OrderService,
    private router: Router
  ) {
    this.urlForServer = this.router.url.split('/')[2];
    if (this.router.url.split('/')[3] != undefined) {
      this.oneOfTheDatas = this.router.url.split('/')[3];
    };
  }

  deleteOrder(orderObj) {
    this.orderService.remove(this.urlForServer, orderObj).forEach(
      data => {
        let index = this.orderList.indexOf(orderObj);
        this.orderList.splice(index, 1);
        this.counter++;
      }
    )
  }

  setSorterKey(key: string): void {
    if (key === this.orderKey) {
      this.orderDirection = this.orderDirection === -1 ? 1 : -1;
    } else {
      this.orderDirection = 1;
    }
    this.orderKey = key;
    Array.from(document.querySelectorAll('table thead th.title')).forEach(
      el => el.children[0] !== undefined ? el.removeChild(el.children[0]) : el);
    if (this.orderDirection === 1) {
      document.querySelector(`.${key}`).innerHTML += '<i class="fa fa-sort-asc" aria-hidden="true"></i>';
    } else {
      document.querySelector(`.${key}`).innerHTML += '<i class="fa fa-sort-desc" aria-hidden="true"></i>';
    }
  }


  ngOnInit() {
    this.userSubscription = this.orderService.getAll(this.urlForServer, this.oneOfTheDatas).subscribe(
      orders => {
        this.orderList = orders;
      },
      err => console.error(err)
    );
  }

  ngOnDestroy() {
    this.userSubscription.unsubscribe();
  }
}
