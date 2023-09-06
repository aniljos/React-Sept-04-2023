import { CartItem } from "../model/CartItem";
import { Product } from "../model/Product";

export type GadgetStoreState = {

    cart: CartItem[];
    products: Product[]
}

//initState

const initState: GadgetStoreState = {
    cart: [],
    products: []
}

//reducer

export const gadgetStoreReducer = (state = initState, action: any) => {

    //{type: "ADD_TO_CART", payload: new CartItem(product, qty)}
    if(action.type === "ADD_TO_CART"){

        const cart = [...state.cart];
        cart.push(action.payload);
        return {
            ...state,
            cart
        };
    }
     //{type: "SET_PRODUCTS", payload: [array_of_products]}
    if(action.type === "SET_PRODUCTS"){
        return {
            ...state,
            products:action.payload
        }
    }

    return state;
}