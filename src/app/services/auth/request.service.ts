import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { ComplianceCartService } from "../compliance-cart.service";

@Injectable()
export class RequestService {

  constructor( private db:AngularFireDatabase, private complianceCartService : ComplianceCartService ) { }

  async placeRequest(request) {
    let result = await this.db.list('/requests').push(request);
    this.complianceCartService.clearCart();
    return result;
  }

  getRequests() {
    return this.db.list('/requests');
  }

  getRequestsByUser(userId: string) {
    return this.db.list('/requests', {
      query: {
        orderByChild: 'userId',
        equalTo: userId
      }
    });
  }


  get(requestId) {
    return this.db.object('/requests/' + requestId);
  }

  delete(requestId) {
    return this.db.object('/requests/' + requestId).remove();
  }




}
