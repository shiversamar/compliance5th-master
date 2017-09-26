import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth/auth.service';
import { RequestService } from '../services/auth/request.service';
import 'rxjs/add/operator/switchMap';


@Component({
  selector: 'app-my-request',
  templateUrl: './my-request.component.html',
  styleUrls: ['./my-request.component.css']
})
export class MyRequestComponent {
  requests$;

  constructor( private authService: AuthService,
               private requestService: RequestService ) { 
  this.requests$ = authService.user$.switchMap(u => requestService.getRequestsByUser(u.uid));
  }

}
