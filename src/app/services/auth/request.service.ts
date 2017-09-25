import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable()
export class RequestService {

  constructor( private db:AngularFireDatabase ) { }

  storeRequest(request) {
   return this.db.list('/requests').push(request);
  }

}
