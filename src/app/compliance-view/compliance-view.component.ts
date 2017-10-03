import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CompanyService } from '../services/auth/company.service';
import { ComplianceService } from '../services/auth/compliance/compliance.service';
import { Compliance } from '../models/compliance';
import 'rxjs/add/operator/take';

@Component({
  selector: 'app-compliance-view',
  templateUrl: './compliance-view.component.html',
  styleUrls: ['./compliance-view.component.css']
})
export class ComplianceViewComponent implements OnInit {
  companies$;
  // compliance = {};
  compliance: Compliance;
  id;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private companyService: CompanyService,
    private complianceService: ComplianceService ) { 
    this.companies$ = companyService.getCompanies();
        this.id = this.route.snapshot.paramMap.get('id');
        if (this.id) this.complianceService.get(this.id).take(1).subscribe(c => this.compliance = c);
      }

  ngOnInit() {
  }

}







