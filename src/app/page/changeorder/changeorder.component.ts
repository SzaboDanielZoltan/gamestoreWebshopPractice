import { Component } from '@angular/core';
import { Order } from 'src/app/model/order';
import { OrderService } from 'src/app/service/order.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-changeorder',
  templateUrl: './changeorder.component.html',
  styleUrls: ['./changeorder.component.css']
})
export class ChangeorderComponent {
  urlForServer = '';
  oneOfTheDatas = '';
  order: Order;

  constructor(
    private os: OrderService,
    private router: Router
  ) {
    this.urlForServer = this.router.url.split('/')[2];
    if (this.router.url.split('/')[3] === '0') {
      this.order = new Order();
    } else {
      this.oneOfTheDatas = this.router.url.split('/')[3];
      this.os.getAll(this.urlForServer, this.oneOfTheDatas).forEach(
        order => this.order = order
      )
    }
  }

  onSubmit(event: Event): void {
    event.preventDefault();
    if (this.router.url.split('/')[3] === '0') {
      this.os.add(this.urlForServer, this.order).forEach(
        data => this.router.navigateByUrl("/admin/orders")
      );
    } else {
      this.os.edit(this.urlForServer, this.order).forEach(
        data => this.router.navigateByUrl("/admin/orders")
      );
    }
  }
}
