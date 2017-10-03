import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CompanyService } from '../services/auth/company.service';
import { ComplianceService } from '../services/auth/compliance/compliance.service';
import { FirebaseListObservable } from 'angularfire2/database';
import { Compliance } from '../models/compliance';

@Component({
  selector: 'app-upload-compliance',
  templateUrl: './upload-compliance.component.html',
  styleUrls: ['./upload-compliance.component.css']
})
export class UploadComplianceComponent implements OnInit {
  compliance = {}; //black object for new component
  // compliance: Compliance;
  id;
  companies$: FirebaseListObservable<any[]>;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private companyService: CompanyService,
    private complianceService: ComplianceService ) { 
    this.companies$ = companyService.getCompanies();
    
    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id) this.complianceService.get(this.id).take(1).subscribe(c => this.compliance = c);
     }
  
  save(compliance) {
      if (this.id) this.complianceService.update(this.id, compliance);
      else this.complianceService.create(compliance);
  
      this.router.navigate(['/']);  
    }
  
  delete() {
    if (!confirm('Are you sure you want to delete this product?')) return;
  
    this.complianceService.delete(this.id);
    this.router.navigate(['/']);
  }

  ngOnInit() {
  }

}