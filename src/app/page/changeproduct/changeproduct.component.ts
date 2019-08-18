import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product';
import { OrderService } from 'src/app/service/order.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-changeproduct',
  templateUrl: './changeproduct.component.html',
  styleUrls: ['./changeproduct.component.css']
})
export class ChangeproductComponent {
  urlForServer = '';
  oneOfTheDatas = '';
  product: Product;

  constructor(
    private os: OrderService,
    private router: Router
  ) {
    this.urlForServer = this.router.url.split('/')[2];
    if (this.router.url.split('/')[3] === '0') {
      this.product = new Product();
    } else {
      this.oneOfTheDatas = this.router.url.split('/')[3];
      this.os.getAll(this.urlForServer, this.oneOfTheDatas).forEach(
        product => this.product = product
      )
    }
  }

  onSubmit(event: Event): void {
    event.preventDefault();
    if (this.router.url.split('/')[3] === '0') {
      this.os.add(this.urlForServer, this.product).forEach(
        data => this.router.navigateByUrl("/admin/products")
      );
    } else {
      this.os.edit(this.product).forEach(
        data => this.router.navigateByUrl("/admin/products")
      );
    }
  }
}
