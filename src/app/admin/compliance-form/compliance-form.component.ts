import { CompanyService } from '../../services/auth/company.service';
import { Component, OnInit } from '@angular/core';
import { ComplianceService } from '../../services/auth/compliance/compliance.service';
import { Router, ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/take';
import { Compliance } from '../../models/compliance';

@Component({
  selector: 'app-compliance-form',
  templateUrl: './compliance-form.component.html',
  styleUrls: ['./compliance-form.component.css']
})

export class ComplianceFormComponent implements OnInit {
  companies$;
  compliance = { };
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

  save(compliance) {
    if (this.id) this.complianceService.update(this.id, compliance);
    else this.complianceService.create(compliance);

    this.router.navigate(['/admin/compliance']);
  }

  delete() {
    if (!confirm('Are you sure you want to delete this compliance?')) return;

    this.complianceService.delete(this.id);
    this.router.navigate(['/admin/compliance']);
  }

  ngOnInit() {
  }

}
