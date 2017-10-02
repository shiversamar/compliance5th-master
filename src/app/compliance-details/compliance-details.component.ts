import { AuthService } from '../services/auth/auth.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { ComplianceService } from '../services/auth/compliance/compliance.service';
import { Compliance } from '../models/compliance';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { DataTableResource } from 'angular-4-data-table/src';
import { AppUser } from '../models/app-user';

@Component({
  selector: 'app-compliance-details',
  templateUrl: './compliance-details.component.html',
  styleUrls: ['./compliance-details.component.css']
})
export class ComplianceDetailsComponent implements OnInit, OnDestroy {
  appUser: AppUser;
  compliances: Compliance[];

 subscription: Subscription;
 tableResource: DataTableResource<Compliance>;
 items: Compliance[] = [];
 itemCount: number;

 constructor(private complianceService: ComplianceService,private auth: AuthService ) { 
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

 // special properties:
     rowClick(rowEvent) {
         console.log('Clicked: ' + rowEvent.row.item.company);
     }
 
     rowDoubleClick(rowEvent) {
         alert('Double clicked: ' + rowEvent.row.item.company);
     }
 
     rowTooltip(item) { return item.jobTitle; }


  ngOnInit() {
  this.auth.appUser$.subscribe(appUser => this.appUser = appUser);
 }
}