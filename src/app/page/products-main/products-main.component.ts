import { Component, OnInit, OnDestroy } from '@angular/core';
import { OrderService } from 'src/app/service/order.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products-main',
  templateUrl: './products-main.component.html',
  styleUrls: ['./products-main.component.css']
})
export class ProductsMainComponent implements OnInit, OnDestroy {
  userSubscription: Subscription;
  list;
  urlForServer = '';
  oneOfTheDatas = '';
  genreFilter = '';


  constructor(
    private orderService: OrderService,
    private router: Router
  ) {
    this.urlForServer = this.router.url.split('/')[2];
    if (this.router.url.split('/')[3] != undefined) {
      this.oneOfTheDatas = this.router.url.split('/')[3];
    };
  }

  genreFilterDefault() {
    this.genreFilter = '';
  }

  ngOnInit() {
    this.userSubscription = this.orderService.getAll(this.urlForServer, this.oneOfTheDatas).subscribe(
      products => {
        this.list = products;
        let genrelist = new Set();
        products.forEach(product => genrelist.add(product.type));
        genrelist.forEach(genre =>
          document.querySelector('#genre').innerHTML += `<option value="${genre}">${genre}</option>`)
      },
      err => console.error(err)
    );
  }

  ngOnDestroy() {
    this.userSubscription.unsubscribe();
  }

}
