import { ComplianceCart } from "./compliance-cart";
import { Sending } from "./sending";

export class Request{
    datePlaced: number;
    items: any[];
   
    
    constructor(public userId: string, public sending:any, complianceCart: ComplianceCart){
        this.datePlaced = new Date().getTime();

        this.items = complianceCart.items.map(i => {
        return {
          compliance: {
            title: i.title,
            revision: i.revision,
            qtylist: i.qtylist,
            company: i.company,
            datevalidity: i.datevalidity,
            imageUrl: i.imageUrl
          },
          quantity: i.quantity,
          totalQtylist: i.totalQtylist
        }
      })
    }
}