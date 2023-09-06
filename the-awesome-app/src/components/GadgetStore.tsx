import { useEffect, useState } from "react"
import { Product } from "../model/Product";
import axios from "axios";

function GadgetStore(){

    const [products, setProducts] = useState<Product[]>([]);
    useEffect(() => {

        fetchProducts();

    }, [])

    async function fetchProducts(){

        try {
            
            const response = await axios.get("http://localhost:9000/products");
            setProducts(response.data);

        } catch (error) {
            console.log("error", error);
        }
    }


    return (
        <div>
            <h4>Gadget Store</h4>
        </div>
    )
}

export default GadgetStore