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
  list;
  urlForServer = '';
  oneOfTheDatas = '';
  counter = 0;

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
    console.log(orderObj);
    this.orderService.remove(orderObj).forEach(
      data => {
        let index = this.list.indexOf(orderObj);
        this.list.splice(index, 1);
        this.counter++;
      }
    )
  }

  ngOnInit() {
    this.userSubscription = this.orderService.getAll(this.urlForServer, this.oneOfTheDatas).subscribe(
      orders => {
        this.list = orders;
        console.log(this.list);
      },
      err => console.error(err)
    );
  }

  ngOnDestroy() {
    this.userSubscription.unsubscribe();
  }
}
