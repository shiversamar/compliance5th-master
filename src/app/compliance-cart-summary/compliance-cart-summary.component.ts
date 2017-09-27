import { Component, OnInit, Input } from '@angular/core';
import { ComplianceCart } from "../models/compliance-cart";

@Component({
  selector: 'compliance-cart-summary',
  templateUrl: './compliance-cart-summary.component.html',
  styleUrls: ['./compliance-cart-summary.component.css']
})

export class ComplianceCartSummaryComponent {
  
  @Input('cart') cart: ComplianceCart;
}
