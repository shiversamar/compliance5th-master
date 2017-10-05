import { Component, OnInit, Input } from '@angular/core';
import { ComplianceCart } from '../models/compliance-cart';




@Component({
  selector: 'app-myrequest-view',
  templateUrl: './myrequest-view.component.html',
  styleUrls: ['./myrequest-view.component.css']
})
export class MyrequestViewComponent implements OnInit {

  @Input('cart') cart: ComplianceCart;

  constructor() { }

  ngOnInit() {
  }

}
