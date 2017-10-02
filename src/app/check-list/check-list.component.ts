import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';
import { ComplianceCartService } from '../services/compliance-cart.service';
import { ComplianceCart } from '../models/compliance-cart';

@Component({
  selector: 'app-check-list',
  templateUrl: './check-list.component.html',
  styleUrls: ['./check-list.component.css']
})

export class CheckListComponent implements OnInit {
   cart$: Observable<ComplianceCart>;

  constructor(private complianceCartService: ComplianceCartService) { 
  }

  async ngOnInit() {
    this.cart$ = await this.complianceCartService.getCart();
  } 
}
