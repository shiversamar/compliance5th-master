import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database';
import { Compliance } from '../models/compliance';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/map';
import { ComplianceCart } from '../models/compliance-cart';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ComplianceCartService {

  constructor(private db: AngularFireDatabase) { }

  async getCart(): Promise<Observable<ComplianceCart>> {
    let cartId = await this.getOrCreateCartId();
    return this.db.object('/compliance-cart/' + cartId)
     .map(x => new ComplianceCart(x.items));
  }

  async addToCart(compliance: Compliance) {
    this.updateItem(compliance, 1);
   }
  
   async removeFromCart(compliance: Compliance) {
    this.updateItem(compliance, -1);
   }

   async clearCart() { 
    let cartId = await this.getOrCreateCartId();
    this.db.object('/compliance-cart/' + cartId + '/items').remove();
  }


  private create() {
    return this.db.list('/compliance-cart').push({
      dateCreated: new Date().getTime()
    });
  }

  private getItem(cartId:string, complianceId: string){
    return this.db.object('/compliance-cart/' + cartId + '/items/' + complianceId);
  }


  private async getOrCreateCartId(): Promise<string> {
    let cartId = localStorage.getItem('cartId');
    if (cartId) return cartId;

    let result = await this.create();
    localStorage.setItem('cartId', result.key);
    return result.key;
    }
  

   private async updateItem(compliance: Compliance, change: number) {
        let cartId = await this.getOrCreateCartId();
        let item$ = this.getItem(cartId, compliance.$key);
        item$.take(1).subscribe(item => {
            let quantity = (item.quantity || 0) + change;
            if (quantity === 0) item$.remove();
            else item$.update({ 
              title: compliance.title,
              revision: compliance.revision,
              qtylist: compliance.qtylist,
              company: compliance.company,
              datevalidity: compliance.datevalidity,
              imageUrl: compliance.imageUrl,
              quantity: quantity
          });   
        });  
       }
    }


// async addToCart(compliance: Compliance) {
//   this.updateItem(compliance, 1);
//  }

//  async removeFromCart(compliance: Compliance) {
//   this.updateItem(compliance, -1);
//  }

//  private async updateItem(compliance: Compliance, change:number) {
//     let cartId = await this.getOrCreateCartId();
//     let item$ = this.getItem(cartId, compliance.$key);
//     item$.take(1).subscribe(item => {
//       item$.update({  
//         title: compliance.title,
//         revision: compliance.revision,
//         qtylist: compliance.qtylist,
//         desc: compliance.desc,
//         company: compliance.company,
//         name: compliance.name,
//         datevalidity: compliance.datevalidity,
//         imageUrl: compliance.imageUrl,
//         quantity: (item.quantity || 0)  + change 
//       });   
//     });  


// let cartId = await this.getOrCreateCartId();
// let item$ = this.getItem(cartId, compliance.$key);
// item$.take(1).subscribe(item => {
//   item$.update({ compliance: compliance, quantity: (item.quantity || 0 ) + change});   
// });  