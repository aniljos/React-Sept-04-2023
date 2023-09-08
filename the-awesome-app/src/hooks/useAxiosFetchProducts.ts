import { useEffect, useState } from "react"
import { Product } from "../model/Product"
import axios from "axios"


// const [products] = useAxiosFetchProducts();
export const useAxiosFetchProducts = () => {

    const [products, setProducts] = useState<Product[]>([])

    useEffect(() => {
        fetchProducts();
    }, [])

    async function fetchProducts(){
        try {
            
            const url = process.env.REACT_APP_BASE_URL + "/secure_products";
            const response = await axios.get(url);
            setProducts(response.data);

        } catch (error) {
            
        }
    }

    return [products] as const;

}