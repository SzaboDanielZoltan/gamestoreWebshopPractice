import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/service/order.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  list$: Observable<any> = this.orderService.getAll();

  constructor(
    private orderService: OrderService
  ) { }

  ngOnInit() {
  }

}
