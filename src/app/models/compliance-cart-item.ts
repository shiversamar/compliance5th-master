import { Compliance } from "./compliance";

export class ComplianceCartItem {
   constructor(public compliance: Compliance, public quantity:number) {}

   get totalQtylist() { return this.compliance.qtylist * this.quantity; }
  
}