import { ComplianceCartItem } from "./compliance-cart-item";
import { Compliance } from "./compliance";

export class ComplianceCart {
    items: ComplianceCartItem[] = [];

    constructor(public itemsMap: { [complianceId: string]: ComplianceCartItem }) {
        for(let complianceId in itemsMap) {
          let item = itemsMap[complianceId];
            this.items.push(new ComplianceCartItem(item.compliance, item.quantity));
        }
    }


    getQuantity(compliance: Compliance) {
      let item = this.itemsMap[compliance.$key];
      return item ? item.quantity: 0;      
    }

    get totalItemsCount() {
        let count = 0;
        for (let complianceId in this.itemsMap)
        count += this.itemsMap[complianceId].quantity;
        return count;
    }

}



// get totalItemsCount() {
//     let count = 0;
//     for (let complianceId in this.itemsMap)
//     count += this.itemsMap[complianceId].quantity;
//     return count;
// }




// get totalItemsCount() {
//     let count = 0;
//     for (let complianceId in this.items)
//         count += this.items[complianceId].quantity;
//     return count;