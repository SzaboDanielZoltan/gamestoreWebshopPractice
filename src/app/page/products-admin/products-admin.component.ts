import { Component, OnInit, OnDestroy } from '@angular/core';
import { OrderService } from 'src/app/service/order.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products-admin',
  templateUrl: './products-admin.component.html',
  styleUrls: ['./products-admin.component.css']
})
export class ProductsAdminComponent implements OnInit, OnDestroy {
  userSubscription: Subscription;
  list;
  urlForServer = '';
  oneOfTheDatas = '';

  constructor(
    private orderService: OrderService,
    private router: Router
  ) {
    this.urlForServer = this.router.url.split('/')[2];
    if (this.router.url.split('/')[3] != undefined) {
      this.oneOfTheDatas = this.router.url.split('/')[3];
    };
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
