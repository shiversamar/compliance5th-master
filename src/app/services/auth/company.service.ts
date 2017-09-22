import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable()
export class CompanyService {

  constructor(private db: AngularFireDatabase ) { }

  getCompanies() {
    return this.db.list('/companies', {
      query: {
        orderByChild: 'name'
      }
    });
  }

}
