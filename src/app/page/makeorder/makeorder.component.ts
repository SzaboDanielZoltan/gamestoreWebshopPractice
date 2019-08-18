import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OrderService } from 'src/app/service/order.service';
import { Product } from 'src/app/model/product';
import { Order } from 'src/app/model/order';

@Component({
  selector: 'app-makeorder',
  templateUrl: './makeorder.component.html',
  styleUrls: ['./makeorder.component.css']
})
export class MakeorderComponent implements OnInit {
  urlForServer = '';
  oneOfTheDatas = '';
  product: Product;
  order: Order;

  constructor(
    private os: OrderService,
    private router: Router
  ) {
    this.urlForServer = this.router.url.split('/')[2];
    if (this.router.url.split('/')[3] != undefined) {
      this.oneOfTheDatas = this.router.url.split('/')[3];
    };
    this.os.getAll(this.urlForServer, this.oneOfTheDatas).forEach(
      product => {
        this.product = product;
        this.order = {
          "id": 0,
          "orderdate": new Date(),
          "userName": "",
          "userEmail": "",
          "newsletter": false,
          "shippingAddress": "",
          "productId": this.product.id,
          "amount": 1
        }
      }
    )
  }

  makeOrder() {
    this.os.add('orders', this.order).forEach(
      next => {
        let inputs = document.getElementsByTagName("input");
        for (let i = 0; i < inputs.length; i++) {
          if (inputs[i].type == "text") {
            inputs[i].value = "";
          }
        }
      }
    )
  }

  ngOnInit() {
  }

}
