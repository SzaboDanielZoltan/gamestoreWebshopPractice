import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/service/order.service';
import { Order } from 'src/app/model/order';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-order-admin',
  templateUrl: './order-admin.component.html',
  styleUrls: ['./order-admin.component.css']
})
export class OrderAdminComponent implements OnInit {

  // list: Order[] = [];
  list$: Observable<any> = this.orderService.getAll();

  constructor(
    private orderService: OrderService
  ) { }

  ngOnInit() {
    /* this.os.getAll().subscribe(
      orders => this.list = orders,
      err => console.error(err)
    ); */
  }

}
