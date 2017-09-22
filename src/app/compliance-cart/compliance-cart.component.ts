import { Component, OnInit } from '@angular/core';
import { ComplianceCartService } from '../services/compliance-cart.service';
import { ComplianceCart } from '../models/compliance-cart';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-compliance-cart',
  templateUrl: './compliance-cart.component.html',
  styleUrls: ['./compliance-cart.component.css']
})
export class ComplianceCartComponent implements OnInit {
  cart$: Observable<ComplianceCart>;
  // cart$;


  constructor(private complianceCartService: ComplianceCartService) { }

  async ngOnInit() {
    this.cart$ = await this.complianceCartService.getCart();
  }

}
