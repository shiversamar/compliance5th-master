import { Component, OnInit, Input } from '@angular/core';
import { ComplianceCart } from '../models/compliance-cart';
import { Observable } from 'rxjs/Observable';
import { ComplianceCartService } from '../services/compliance-cart.service';


@Component({
  selector: 'app-myrequest-view',
  templateUrl: './myrequest-view.component.html',
  styleUrls: ['./myrequest-view.component.css']
})
export class MyrequestViewComponent implements OnInit {

  cart$: Observable<ComplianceCart>;

  constructor( private complianceCartService: ComplianceCartService) { }

  async ngOnInit() {
    this.cart$ = await this.complianceCartService.getCart();
  }


}



// export class ComplianceCartComponent implements OnInit {
//   cart$: Observable<ComplianceCart>;
//   // cart$;


//   constructor(private complianceCartService: ComplianceCartService) { }

//   async ngOnInit() {
//     this.cart$ = await this.complianceCartService.getCart();
//   }

//   clearCart() { 
//     this.complianceCartService.clearCart();
//   }


// }
