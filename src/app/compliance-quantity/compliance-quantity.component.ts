import { Component, OnInit, Input } from '@angular/core';
import { Compliance } from '../models/compliance';
import { ComplianceCartService } from '../services/compliance-cart.service';

@Component({
  selector: 'compliance-quantity',
  templateUrl: './compliance-quantity.component.html',
  styleUrls: ['./compliance-quantity.component.css']
})
export class ComplianceQuantityComponent {
  @Input('compliance') compliance: Compliance;
  @Input('compliance-cart') complianceCart;
  constructor(private cartService: ComplianceCartService) { }

  addToCart() {
    this.cartService.addToCart(this.compliance);
  }

  removeFromCart(){
    this.cartService.removeFromCart(this.compliance);
  }


  // getQuantity() {
  //   if (!this.complianceCart) return 0;

  //   let item = this.complianceCart.items[this.compliance.$key];
  //   return item ? item.quantity : 0;
  // }

}

  