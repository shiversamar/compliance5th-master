
import { AuthService } from './../services/auth/auth.service';
import { Component, OnInit } from '@angular/core';
import { AppUser } from "../models/app-user";
import { ComplianceCartService } from '../services/compliance-cart.service';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

  export class NavbarComponent implements OnInit {
  complianceCartService: any;
  appUser: AppUser;
  complianceCartItemCount: number;

    constructor(private auth: AuthService, complianceCartService: ComplianceCartService) {  
    }
 
    async ngOnInit() {
      this.auth.appUser$.subscribe(appUser => this.appUser = appUser);

      let cart$ = await this.complianceCartService.getCart();
      cart$.subscribe(cart => {
        this.complianceCartItemCount = 0;
        for (let complianceId in cart.items)
        this.complianceCartItemCount += cart.items[complianceId].quantity;
      });
    }
   
    logout() {
      this.auth.logout();
    }
}
