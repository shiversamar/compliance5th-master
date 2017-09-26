import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { ComplianceCartService } from "../compliance-cart.service";

@Injectable()
export class RequestService {

  constructor( private db:AngularFireDatabase, private complianceCartService : ComplianceCartService ) { }

  async storeRequest(request) {
    let result = await this.db.list('/request').push(request);
    this.complianceCartService.clearCart();
    return result;
  }
}
