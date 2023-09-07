import axios from "axios";
import { CartItem } from "../model/CartItem";

export const createAddToCartAction = (payload: CartItem) => {
    return {
        type: "ADD_TO_CART", payload
    }
}

export const createSetProductsAction = () => {

    return async (dispatch: any) => {

        try {
            const response = await axios.get(process.env.REACT_APP_BASE_URL + "/products");
            const products = response.data;
            dispatch({
                type: "SET_PRODUCTS", payload: products
            })
        } catch (error) {
            
        }

    }
}