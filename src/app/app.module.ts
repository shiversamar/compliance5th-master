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
import { DataTableModule } from 'angular-4-data-table';

// Services 
import { AuthService } from './services/auth/auth.service';
import { AuthGuardService } from './services/auth/auth-guard.service';
import { UserService } from './services/auth/user.service';
import { AdminAuthGuardService } from './services/auth/admin-auth-guard.service';
import { CompanyService } from './services/auth/company.service';
import { ComplianceService } from './services/auth/compliance/compliance.service';
import { ComplianceCartService } from './services/compliance-cart.service';

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
    ComplianceQuantityComponent

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
      { path: '', component: CompliancesComponent },
      { path: 'compliances', component: CompliancesComponent },
      { path: 'compliance-cart', component: ComplianceCartComponent },
      { path: 'login', component: LoginComponent },

      { path: 'check-list', component: CheckListComponent, canActivate: [AuthGuardService] },
      { path: 'submitsuccess', component: SubmitSuccessComponent, canActivate: [AuthGuardService] },
      { path: 'my-request', component: MyRequestComponent, canActivate: [AuthGuardService] },
      {
        path: 'admin/compliance/new',
        component: ComplianceFormComponent,
        canActivate: [AuthGuardService, AdminAuthGuardService]
      },
      {
        path: 'admin/compliance/:id',
        component: ComplianceFormComponent,
        canActivate: [AuthGuardService, AdminAuthGuardService]
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
    ComplianceCartService

  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
