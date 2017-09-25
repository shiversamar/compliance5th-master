import { ComplianceCartItem } from "./compliance-cart-item";
import { Compliance } from "./compliance";

export class ComplianceCart {
    items: ComplianceCartItem[] = [];

    constructor(public itemsMap: { [complianceId: string]: ComplianceCartItem }) {
      this.itemsMap = itemsMap || {};

        for(let complianceId in itemsMap) {
          let item = itemsMap[complianceId];
          this.items.push(new ComplianceCartItem({ ...item, $key: complianceId}));
        }
    }

    getQuantity(compliance: Compliance) {
      let item = this.itemsMap[compliance.$key];
      return item ? item.quantity: 0;      
    }

    get totalQtylist(){
        let sum = 0;
        for (let complianceId in this.items)
            sum += this.items[complianceId].totalQtylist;
        return sum;
    }

    get totalItemsCount() {
        let count = 0;
        for (let complianceId in this.itemsMap)
           count += this.itemsMap[complianceId].quantity;
        return count;
    }
}




// this.itemsMap = itemsMap || {};
        // for(let complianceId in itemsMap) {
        //   let item = itemsMap[complianceId]; sa loob ng compliance-cart
        //   let x = new ComplianceCartItem();
        //   Object.assign(x, item);
        //   x.$key = complianceId;
        //   this.items.push(x);
        // }

        

        // for (let complianceId in itemsMap) {
        //     let item = itemsMap[complianceId];
        //     this.items.push(new ComplianceCartItem(item.compliance, item.quantity));
        // }


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