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
  orderDirection: number = 1;
  orderKey: string = 'id';
  filterPhrase: string = '';

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
    this.orderService.remove(this.urlForServer, productObj).forEach(
      data => {
        let index = this.productList.indexOf(productObj);
        this.productList.splice(index, 1);
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
    Array.from(document.querySelectorAll('table thead th.thtitle')).forEach(
      el => el.children[0] !== undefined ? el.removeChild(el.children[0]) : el);
    if (this.orderDirection === 1) {
      document.querySelector(`.${key}`).innerHTML += '<i class="fa fa-sort-asc" aria-hidden="true"></i>';
    } else {
      document.querySelector(`.${key}`).innerHTML += '<i class="fa fa-sort-desc" aria-hidden="true"></i>';
    }
  }

  ngOnInit() {
    this.userSubscription = this.orderService.getAll(this.urlForServer, this.oneOfTheDatas).subscribe(
      products => {
        this.productList = products;
        console.log(this.productList);
      },
      err => console.error(err)
    );
  }

  ngOnDestroy() {
    this.userSubscription.unsubscribe();
  }

}
