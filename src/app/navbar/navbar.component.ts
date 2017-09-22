
import { AuthService } from './../services/auth/auth.service';
import { Component, OnInit } from '@angular/core';
import { AppUser } from "../models/app-user";
import { ComplianceCartService } from '../services/compliance-cart.service';
import { Observable } from 'rxjs/Observable';
import { ComplianceCart } from '../models/compliance-cart';


@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

  export class NavbarComponent implements OnInit {
  appUser: AppUser;
  cart$: Observable<ComplianceCart>
  
    constructor(private auth: AuthService, private complianceCartService: ComplianceCartService) {  
    }
 
    async ngOnInit() {
      this.auth.appUser$.subscribe(appUser => this.appUser = appUser);
      this.cart$ = await this.complianceCartService.getCart();
      
    }
 
    logout() {
      this.auth.logout();
    }
}

