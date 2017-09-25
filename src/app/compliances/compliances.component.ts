import { Component, OnInit } from '@angular/core';
import { ComplianceService } from "../services/auth/compliance/compliance.service";
import { ActivatedRoute } from "@angular/router";
import { Compliance } from "../models/compliance";
import 'rxjs/add/operator/switchMap';
import { ComplianceCartService } from '../services/compliance-cart.service';
import { Observable } from 'rxjs/Observable';
import { ComplianceCart } from '../models/compliance-cart';

@Component({
  selector: 'app-compliances',
  templateUrl: './compliances.component.html',
  styleUrls: ['./compliances.component.css']
})
export class CompliancesComponent implements OnInit {
  compliances: Compliance[] = [];
  filteredCompliances: Compliance[] = [];
  company: string;
  cart$: Observable<ComplianceCart>;


  constructor (
    private route: ActivatedRoute,
    private complianceService: ComplianceService,
    private complianceCartService: ComplianceCartService
  ) {
   }

   async ngOnInit() {
     this.cart$ = await this.complianceCartService.getCart();
     this.populatedCompliances();
   }

   private populatedCompliances() {
    this.complianceService
      .getAll()
      .switchMap(compliances => {
      this.compliances = compliances;
      return this.route.queryParamMap;
      })     
      .subscribe(params => {
        this.company = params.get('company');
        this.applyFilter();
      }); 
    }
  
   private applyFilter() {
    this.filteredCompliances = (this.company) ?
    this.compliances.filter(c => c.company === this.company) :
    this.compliances;
   }
}
