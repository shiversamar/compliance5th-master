import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CompanyService } from '../services/auth/company.service';
import { ComplianceService } from '../services/auth/compliance/compliance.service';
import { FirebaseListObservable } from 'angularfire2/database';
import { Compliance } from '../models/compliance';
import { ComplianceType } from '../models/compliance-type';

@Component({
  selector: 'app-upload-compliance',
  templateUrl: './upload-compliance.component.html',
  styleUrls: ['./upload-compliance.component.css']
})
export class UploadComplianceComponent implements OnInit {
  compliance = {}; //black object for new component
  // compliance: Compliance;
  id;
  
  // compliancetype = {};

  complianceTypes: Array<string> = [
    'ISO Certification',
    'Letter of Intent',
    'Certificate of Registration',
    'Permit to Locate',
    'Authorization Letter',
    'Business Permit License',
    'Application for Permit to Locate',
    'Request for Certification',
    'Material Safety Data Sheet',
    'Scope of the QMS (clause 4.3)',
    'Quality Policy (clause 5.2)',
    'Quality objectives (clause 6.2)',
    'Criteria for evaluation  and selection of suppliers (clause 8.4.1)',
    'Records of training, skills, experience and qualification(clause 8.3.2)',
    'Product/service requirements review records (clause 8.2.3.2)',
    'Record about design and development outputs review* (clause 8.3.2)',
    'Records about design and development inputs* (clause 8.3.3)',
    'Records of design and development controls* (clause 8.3.4)',
    'Records of design and development outputs *(clause 8.3.5)',
    'Design and development changes records* (clause 8.3.6)',
    'Characteristics of product to be produced and service to be provided (clause 8.5.1)',
    'Records about customer property (clause 8.5.3)',
    'Production/service provision change control records (clause 8.5.6)',
    'Record of conformity of product/service with acceptance criteria (clause 8.6)',
    'Record of nonconforming outputs (clause 8.7.2)',
    'Monitoring and measurement results (clause 9.1.1)',
    'Internal audit program (clause 9.2)',
    'Results of internal audits (clause 9.2)',
    'Results of the management review (clause 9.3)',
    'Results of corrective actions (clause 10.1)'
  ];

  companies$: FirebaseListObservable<any[]>;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private companyService: CompanyService,
    private complianceService: ComplianceService ) { 
    this.companies$ = companyService.getCompanies();
    
    // this.id = this.route.snapshot.paramMap.get('id');
    // if (this.id) this.complianceService.get(this.id).take(1).subscribe(c => this.compliance = c );
     }
  
  save(compliance) {
      // if (this.id) this.complianceService.update(this.id, compliance);
      // else this.complianceService.create(compliance);
      this.complianceService.create(compliance);


      // this.router.navigate(['/admin/compliance','/']);
      this.router.navigate(['/']);   
    }
  
  delete() {
    if (!confirm('Are you sure you want to delete this product?')) return;
  
    this.complianceService.delete(this.id);
    this.router.navigate(['/']);
    // this.router.navigate(['/admin/compliance', '/']);
  }

  ngOnInit() {
  }

}