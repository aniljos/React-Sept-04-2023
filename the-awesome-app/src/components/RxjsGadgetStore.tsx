import { useEffect, useState } from "react"
import { Product } from "../model/Product";
import axios from "axios";
import {cartStore} from '../rxjs/CartStore';
import { CartItem } from "../model/CartItem";
import RxjsViewCart from "./RxjsViewCart";
import { useAxiosFetchProducts } from "../hooks/useAxiosFetchProducts";

function RxjsGadgetStore(){

    const [products] =  useAxiosFetchProducts();
    // const [products, setProducts] = useState<Product[]>([]);
   

    // useEffect(() => {

    //     fetchProducts();
        

    // }, [])

    // async function fetchProducts(){

    //     try {
            
    //         const response = await axios.get(process.env.REACT_APP_BASE_URL + "/products");
    //         setProducts(response.data);

    //     } catch (error) {
    //         console.log("error", error);
    //     }
    // }

    function addToCart(item: Product){
        cartStore.addToCart(new CartItem(item, 1));
    }

    function renderProducts() {

        const productsView =  products.map((item, index) => {
            return (
                <div className="col" key={index} >
                    <div className="card border-warning" >
                        <div className="card-body text-success">
                            <h5 className="card-title">{item.name}</h5>
                            <p className="card-text">{item.description}</p>
                            <p className="card-text text-primary">INR {item.price}</p>
                            <button  className="btn btn-primary" onClick={() => addToCart(item)}>Add To Cart</button>
                        </div>
                    </div>
    
                </div>
            );
        })
        return (
            <div className="row row-cols-1 row-cols-md-2 g-4">
                {productsView}
            </div>
        )
    }


    return (
        <div>
            <h4>Rxjs Gadget Store</h4>
            <div style={{border: "2px solid green", minHeight: "200px"}}>
                <RxjsViewCart/>
            </div>
            <div>
                {renderProducts()}
            </div>
        </div>
    )
}

export default RxjsGadgetStore