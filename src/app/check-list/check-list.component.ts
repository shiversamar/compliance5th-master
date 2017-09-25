import { Component, OnInit, OnDestroy } from '@angular/core';
import { ComplianceCartService } from '../services/compliance-cart.service';
import { ComplianceCart } from '../models/compliance-cart';
import { Subscription } from 'rxjs/Subscription';
import { RequestService } from '../services/auth/request.service';


@Component({
  selector: 'app-check-list',
  templateUrl: './check-list.component.html',
  styleUrls: ['./check-list.component.css']
})
export class CheckListComponent implements OnInit, OnDestroy {
  // [x: string]: any;
  // sending: any;
  sending: { };

  cart: ComplianceCart;
  subscription: Subscription;

  constructor(
    private requestService: RequestService,
    private complianceCartService: ComplianceCartService) { }

  async ngOnInit() {
    let cart$ = await this.complianceCartService.getCart();
    this.subscription = cart$.subscribe(cart => this.cart = cart);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe(); 
  }

  placeRequest() {
    let request = {
      datePlaced: new Date().getTime(),
      sending: this.sending,
      items: this.cart.items.map(i => {
        return {
          compliance: {
            title: i.title,
            revision: i.revision,
            qtylist: i.qtylist,
            company: i.company,
            datevalidity: i.datevalidity,
            imageUrl: i.imageUrl
          },
          quantity: i.quantity,
          totalQtylist: i.totalQtylist
        }
      })
    };
    this.requestService.storeRequest(request);
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