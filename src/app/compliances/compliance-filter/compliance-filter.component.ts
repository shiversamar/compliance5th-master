import { Component, OnInit, Input } from '@angular/core';
import { CompanyService } from "../../services/auth/company.service";

@Component({
  selector: 'compliance-filter',
  templateUrl: './compliance-filter.component.html',
  styleUrls: ['./compliance-filter.component.css']
})
export class ComplianceFilterComponent implements OnInit {
  companies$;
  @Input('company') company;
  
  constructor(companyService: CompanyService) { 
    this.companies$ = companyService.getCompanies();    
    
  }

  ngOnInit() {
  }

}
