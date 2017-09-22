import { Subscription } from "rxjs/Subscription";
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ComplianceService } from "../../services/auth/compliance/compliance.service";
import { Compliance } from "../../models/compliance";
import { DataTableResource } from "angular-4-data-table/dist";


@Component({
  selector: 'app-admin-compliance',
  templateUrl: './admin-compliance.component.html',
  styleUrls: ['./admin-compliance.component.css']
})
export class AdminComplianceComponent implements OnInit, OnDestroy {
  compliances: Compliance[];
 
  subscription: Subscription;
  tableResource: DataTableResource<Compliance>;
  items: Compliance[] = [];
  itemCount: number;

  constructor(private complianceService: ComplianceService) { 
    this.subscription = this.complianceService.getAll()
    .subscribe(compliances => {
      this.compliances = compliances;
      this.initializeTable(compliances);
    }); 
  }

  private initializeTable(compliances: Compliance[]) {
    this.tableResource = new DataTableResource(compliances);
      this.tableResource.query({ offset: 0 })
        .then(items => this.items = items);
      this.tableResource.count()
        .then(count => this.itemCount = count);
  }


  reloadItems(params){
    if (!this.tableResource) return;
    this.tableResource.query(params)
        .then(items => this.items = items);
  }


  filter(query: string) {
    let filteredCompliances = (query) ?
      // this.compliances.filter(c => c.title.toLowerCase().includes(query.toLowerCase())):
      this.compliances.filter(c => c.company.toLowerCase().includes(query.toLowerCase())):
      this.compliances;

      this.initializeTable(filteredCompliances);
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();

  }

  ngOnInit() {
  }

}


