import { Component, OnInit, OnDestroy } from '@angular/core';
import { OrderService } from 'src/app/service/order.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { Product } from 'src/app/model/product';

@Component({
  selector: 'app-products-admin',
  templateUrl: './products-admin.component.html',
  styleUrls: ['./products-admin.component.css']
})
export class ProductsAdminComponent implements OnInit, OnDestroy {
  userSubscription: Subscription;
  productList: Product[];
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

  deleteProduct(productObj) {
    console.log(productObj);
    this.orderService.remove(productObj).forEach(
      data => {
        let index = this.productList.indexOf(productObj);
        this.productList.splice(index, 1);
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
