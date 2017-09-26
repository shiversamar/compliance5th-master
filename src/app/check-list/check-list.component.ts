import { Component, OnInit, OnDestroy } from '@angular/core';
import { ComplianceCartService } from '../services/compliance-cart.service';
import { ComplianceCart } from '../models/compliance-cart';
import { Subscription } from 'rxjs/Subscription';
import { RequestService } from '../services/auth/request.service';
import { AuthService } from "../services/auth/auth.service";
import { Request } from '../models/request';
import { Router } from "@angular/router";



@Component({
  selector: 'app-check-list',
  templateUrl: './check-list.component.html',
  styleUrls: ['./check-list.component.css']
})
export class CheckListComponent implements OnInit, OnDestroy {
 
  sending = {};
  cart: ComplianceCart;
  cartSubscription: Subscription;
  userSubscription: Subscription;
  userId: string;
  

  constructor(
    private router: Router,
    private authService: AuthService,
    private requestService: RequestService,
    private complianceCartService: ComplianceCartService) { }

  async ngOnInit() {
    let cart$ = await this.complianceCartService.getCart();
    this.cartSubscription = cart$.subscribe(cart => this.cart = cart);
    this.userSubscription = this.authService.user$.subscribe(user => this.userId = user.uid);
  }

  ngOnDestroy() {
    this.cartSubscription.unsubscribe(); 
    this.userSubscription.unsubscribe(); 
  }

   async placeRequest() {
    let request = new Request(this.userId, this.sending, this.cart);
    let result = await this.requestService.storeRequest(request);
    this.router.navigate(['/submit-success', result.key])
  }
}


// storeRequest(request) {
//   this.db.list('/requests').push(request);
// }


// export class CheckOutComponent { 
//   shipping = {}; 
  
//   placeOrder() {
//     console.log(this.shipping);
//   }    
// }