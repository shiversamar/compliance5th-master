import { Compliance } from "./compliance";

export class ComplianceCartItem {
    $key: string;
    title: string;
    revision: string;
    desc: string;
    qtylist: number;
    company: string;
    datevalidity: string;
    imageUrl: string;
    quantity: number;
    
    constructor(init?: Partial<ComplianceCartItem>) {
        Object.assign(this, init);
    }

   get totalQtylist() { return this.qtylist - this.quantity; }
  
}

