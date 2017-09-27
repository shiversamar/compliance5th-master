import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { ComplianceService } from '../services/auth/compliance/compliance.service';
import { Compliance } from '../models/compliance';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-compliance-details',
  templateUrl: './compliance-details.component.html',
  styleUrls: ['./compliance-details.component.css']
})
export class ComplianceDetailsComponent implements OnInit {
  compliances: Compliance[] = [];

  constructor( private db: AngularFireDatabase, 
               private complianceService: ComplianceService,
               private route: ActivatedRoute, ) { }

  getAll() {
    return this.db.list('/compliances');
  }

  get(complianceId) {
  return this.db.object('/compliances/' + complianceId);
 }

  ngOnInit() {
  }

}



