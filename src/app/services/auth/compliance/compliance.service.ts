import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable()
export class ComplianceService {

  constructor(private db: AngularFireDatabase ) { }

  create(compliance) {
    return this.db.list('/compliances').push(compliance);
  }

  getAll() {
    return this.db.list('/compliances');
  }

  get(complianceId) {
    return this.db.object('/compliances/' + complianceId);
  }

  update(complianceId, compliance) {
    return this.db.object('/compliances/' + complianceId).update(compliance);
  }

  delete(complianceId) {
    return this.db.object('/compliances/' + complianceId).remove();
  }


}
