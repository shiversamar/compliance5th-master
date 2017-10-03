import { environment } from './../environments/environment';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database'
import { AngularFireAuthModule } from 'angularfire2/auth';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { CustomFormsModule } from 'ng2-validation';
import { DataTableModule } from 'angular-4-data-table/src/index';

// Services 
import { AuthService } from './services/auth/auth.service';
import { AuthGuardService } from './services/auth/auth-guard.service';
import { UserService } from './services/auth/user.service';
import { AdminAuthGuardService } from './services/auth/admin-auth-guard.service';
import { CompanyService } from './services/auth/company.service';
import { ComplianceService } from './services/auth/compliance/compliance.service';
import { ComplianceCartService } from './services/compliance-cart.service';
import { RequestService } from './services/auth/request.service';


import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CheckListComponent } from './check-list/check-list.component';
import { ComplianceCartComponent } from './compliance-cart/compliance-cart.component';
import { CompliancesComponent } from './compliances/compliances.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MyRequestComponent } from './my-request/my-request.component';
import { SubmitSuccessComponent } from './submit-success/submit-success.component';
import { AdminComplianceComponent } from './admin/admin-compliance/admin-compliance.component';
import { AdminRequestComponent } from './admin/admin-request/admin-request.component';
import { ComplianceFormComponent } from './admin/compliance-form/compliance-form.component';
import { ComplianceFilterComponent } from './compliances/compliance-filter/compliance-filter.component';
import { ComplianceCardComponent } from './compliance-card/compliance-card.component';
import { ComplianceQuantityComponent } from './compliance-quantity/compliance-quantity.component';
import { ComplianceCartSummaryComponent } from './compliance-cart-summary/compliance-cart-summary.component';
import { ComplianceDetailsComponent } from './compliance-details/compliance-details.component';
import { SendingFormComponent } from './sending-form/sending-form.component';
import { UploadComplianceComponent } from './upload-compliance/upload-compliance.component';
import { ComplianceViewComponent } from './compliance-view/compliance-view.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CheckListComponent,
    ComplianceCartComponent,
    CompliancesComponent,
    HomeComponent,
    LoginComponent,
    MyRequestComponent,
    SubmitSuccessComponent,
    AdminComplianceComponent,
    AdminRequestComponent,
    ComplianceFormComponent,
    ComplianceFilterComponent,
    ComplianceCardComponent,
    ComplianceQuantityComponent,
    ComplianceCartSummaryComponent,
    ComplianceDetailsComponent,
    SendingFormComponent,
    UploadComplianceComponent,
    ComplianceViewComponent

  ],

  imports: [
    BrowserModule,
    FormsModule,
    DataTableModule,
    CustomFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    NgbModule.forRoot(),
    RouterModule.forRoot([
      { path: 'home', component: HomeComponent },
      { path: '', component: CompliancesComponent },
      { path: 'compliances/:id', component: CompliancesComponent },
      { path: 'compliance-cart', component: ComplianceCartComponent },
      { path: 'compliance-details', component: ComplianceDetailsComponent },
      { path: 'compliance-view/:id', component: ComplianceViewComponent },
      { path: 'login', component: LoginComponent },

      { path: 'check-list', component: CheckListComponent, canActivate: [AuthGuardService] },
      { path: 'upload-compliance/new', component: UploadComplianceComponent, canActivate: [AuthGuardService] },
      { path: 'upload-compliance/:id', component: UploadComplianceComponent, canActivate: [AuthGuardService] },
      { path: 'upload-compliance', component: UploadComplianceComponent, canActivate: [AuthGuardService] },
      
      { path: 'submit-success/:id', component: SubmitSuccessComponent, canActivate: [AuthGuardService] },
      { path: 'my-request', component: MyRequestComponent, canActivate: [AuthGuardService] },
      {
        path: 'admin/compliance/new',
        component: ComplianceFormComponent,
        canActivate: [AuthGuardService, AdminAuthGuardService]
      },
      {
        path: 'admin/compliance/:id',
        component: ComplianceFormComponent,
        canActivate: [AuthGuardService,AdminAuthGuardService]
      },
      {
        path: 'admin/compliance',
        component: AdminComplianceComponent,
        canActivate: [AuthGuardService, AdminAuthGuardService]
      },
      {
        path: 'admin/request',
        component: AdminRequestComponent,
        canActivate: [AuthGuardService, AdminAuthGuardService]
      }
    ])

  ],
  providers: [
    AuthService,
    AuthGuardService,
    UserService,
    AdminAuthGuardService,
    CompanyService,
    ComplianceService,
    ComplianceCartService,
    RequestService

  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
