import { BehaviorSubject, Subject } from "rxjs";
import { CartItem } from "../model/CartItem";

export class CartStore{

    private _cart: CartItem[] = [];
    //public cartSubject: Subject<CartItem[]> = new Subject<CartItem[]>();
    public cartSubject: Subject<CartItem[]> = new BehaviorSubject<CartItem[]>([]);

    public addToCart(item: CartItem){
        this._cart.push(item);

        //publish the updated cart
        this.cartSubject.next([...this._cart]);
    }

    public removeItem(item: CartItem){
        
        const index = this._cart.findIndex(c => c.product?.id === item.product?.id);
        if(index !== -1){
            this._cart.splice(index, 1);
             //publish the updated cart
            this.cartSubject.next([...this._cart]);
        }
    }
    public getCart(): CartItem[]{
        return [...this._cart];
    }

}
export const cartStore = new CartStore();

