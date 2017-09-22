import { Component, OnInit, OnDestroy } from '@angular/core';
import { ComplianceService } from "../services/auth/compliance/compliance.service";
import { ActivatedRoute } from "@angular/router";
import { Compliance } from "../models/compliance";
import 'rxjs/add/operator/switchMap';
import { ComplianceCartService } from '../services/compliance-cart.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-compliances',
  templateUrl: './compliances.component.html',
  styleUrls: ['./compliances.component.css']
})
export class CompliancesComponent implements OnInit, OnDestroy {
  compliances: Compliance[] = [];
  filteredCompliances: Compliance[] = [];
  company: string;
  cart: any;
  subscription: Subscription;

  constructor (
    route: ActivatedRoute,
    complianceService: ComplianceService,
    private complianceCartService: ComplianceCartService
  ) {

  
    complianceService
      .getAll()
      .switchMap(compliances => {
      this.compliances = compliances;
      return route.queryParamMap;
      })     
      .subscribe(params => {
        this.company = params.get('company');

        this.filteredCompliances = (this.company) ?
          this.compliances.filter(c => c.company === this.company) :
          this.compliances;
      }); 
   }

   async ngOnInit() {
     this.subscription = (await this.complianceCartService.getCart())
     .subscribe(cart => this.cart = cart);
   }

   ngOnDestroy(){
     this.subscription.unsubscribe();
   }

}
