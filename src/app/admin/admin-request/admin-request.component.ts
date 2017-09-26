import { Component, OnInit } from '@angular/core';
import { RequestService } from '../../services/auth/request.service';

@Component({
  selector: 'app-admin-request',
  templateUrl: './admin-request.component.html',
  styleUrls: ['./admin-request.component.css']
})
export class AdminRequestComponent {
  requests$;
 
  constructor(private requestService: RequestService) { 
    this.requests$ = requestService.getRequests();
  }
}


// import { Order } from './../../models/order';
// import { OrderService } from './../../order.service';
// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-admin-orders',
//   templateUrl: './admin-orders.component.html',
//   styleUrls: ['./admin-orders.component.css']
// })
// export class AdminOrdersComponent {
//   orders$;

//   constructor(private orderService: OrderService) { 
//     this.orders$ = orderService.getOrders();
//   }
