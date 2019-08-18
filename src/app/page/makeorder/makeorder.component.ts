import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { OrderService } from 'src/app/service/order.service';
import { Product } from 'src/app/model/product';

@Component({
  selector: 'app-makeorder',
  templateUrl: './makeorder.component.html',
  styleUrls: ['./makeorder.component.css']
})
export class MakeorderComponent implements OnInit {
  urlForServer = '';
  oneOfTheDatas = '';
  product: Product;

  constructor(
    private ar: ActivatedRoute,
    private os: OrderService,
    private router: Router
  ) {
    this.urlForServer = this.router.url.split('/')[2];
    if (this.router.url.split('/')[3] != undefined) {
      this.oneOfTheDatas = this.router.url.split('/')[3];
    };
    this.os.getAll(this.urlForServer, this.oneOfTheDatas).forEach(
      product => this.product = product
    )
  }

  ngOnInit() {
  }

}
