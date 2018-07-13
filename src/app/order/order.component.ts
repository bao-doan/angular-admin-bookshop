import { Component, OnInit } from '@angular/core';
import { Order } from '../view-models/order';
import { OrderService } from '../services/order.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  componentTitle: string = 'Manage Orders';
  orders: Order[];
  selectedOrder: Order;
  constructor(private orderService: OrderService) { }

  ngOnInit() {
    this.getOrders();
  }
  onSelect(order: Order):void {
    this.selectedOrder = order;
  }
  getOrders(): void {
    this.orderService.getOrders().subscribe(_ => this.orders = _);
  }

}
