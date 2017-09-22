import { Component, OnInit, Input } from '@angular/core';
import { Compliance } from "../models/compliance";
import { ComplianceCartService } from '../services/compliance-cart.service';
import { ComplianceCart } from '../models/compliance-cart';

@Component({
  selector: 'compliance-card',
  templateUrl: './compliance-card.component.html',
  styleUrls: ['./compliance-card.component.css']
})
export class ComplianceCardComponent  {
  @Input('compliance') compliance: Compliance;
  @Input('show-actions') showActions = true;
  @Input('compliance-cart') complianceCart: ComplianceCart;
  constructor(private cartService: ComplianceCartService) { }

  addToCart() {
    // this.cartService.addToCart(compliance, cart); Note: if the user add to compliance page
    this.cartService.addToCart(this.compliance);
  }

  removeFromCart(){
    this.cartService.removeFromCart(this.compliance);
  }

  getQuantity() {
    if (!this.complianceCart) return 0;

    let item = this.complianceCart.items[this.compliance.$key];
    return item ? item.quantity : 0;
  }

}
