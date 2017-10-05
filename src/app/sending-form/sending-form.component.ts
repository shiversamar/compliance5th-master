import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { ComplianceCart } from '../models/compliance-cart';
import { Sending } from '../models/sending';
import { Subscription } from 'rxjs/Subscription';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth/auth.service';
import { RequestService } from '../services/auth/request.service';


@Component({
  selector: 'sending-form',
  templateUrl: './sending-form.component.html',
  styleUrls: ['./sending-form.component.css']
})
export class SendingFormComponent implements OnInit, OnDestroy {
  @Input('cart') cart: ComplianceCart;
  // sending: Sending;
  sending = {};
  userSubscription: Subscription;
  userId: string;

  constructor(
    private router: Router,
    private authService: AuthService,
    private requestService: RequestService ) { }

  ngOnInit() {
    this.userSubscription = this.authService.user$.subscribe(
      user => this.userId = user.uid);
  }

  ngOnDestroy() {
    this.userSubscription.unsubscribe();  
  }

  async placeRequest() {
    let request = new Request(this.userId, this.sending);
    let result = await this.requestService.storeRequest(request);
    this.router.navigate(['/submit-success', result.key])
    }

}



// @Component({
//   selector: 'app-check-list',
//   templateUrl: './check-list.component.html',
//   styleUrls: ['./check-list.component.css']
// })
// export class CheckListComponent implements OnInit, OnDestroy {
 
//   sending = {};
//   // sending: Sending;
//   cart: ComplianceCart;
//   cartSubscription: Subscription;
//   userSubscription: Subscription;
//   userId: string;
  

//   constructor(
//     private router: Router,
//     private authService: AuthService,
//     private requestService: RequestService,
//     private complianceCartService: ComplianceCartService) { }

//   async ngOnInit() {
//     let cart$ = await this.complianceCartService.getCart();
//     this.cartSubscription = cart$.subscribe(cart => this.cart = cart);
//     this.userSubscription = this.authService.user$.subscribe(user => this.userId = user.uid);
//   }

//   ngOnDestroy() {
//     this.cartSubscription.unsubscribe(); 
//     this.userSubscription.unsubscribe(); 
//   }

//    async placeRequest() {
//     let request = new Request(this.userId, this.sending, this.cart);
//     let result = await this.requestService.storeRequest(request);
//     this.router.navigate(['/submit-success', result.key])
//   }
// }