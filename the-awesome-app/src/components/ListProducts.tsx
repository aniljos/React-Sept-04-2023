import { useEffect, useState } from "react";
import axios from 'axios';
import { Product } from '../model/Product';
import './ListProducts.css';
import {useNavigate} from 'react-router-dom';

function ListProducts() {

    const [products, setProducts] = useState<Product[]>([])
    const navigate = useNavigate();

    useEffect(() => {
        fetchProducts();
    }, [])

    async function fetchProducts() {

        const url = "http://localhost:9000/products";
        // axios
        //     .get(url)
        //     .then((response)=> {
        //         console.log("response", response);
        //     }, (error) => {
        //         console.log("error", error);
        //     })

        try {

            const response = await axios.get(url);
            console.log("response", response);
            setProducts(response.data);

        } catch (error) {
            console.log("error", error);
        }
    }

    async function remove(item:Product){

        try {
            const url = "http://localhost:9000/products/" + item.id;
            await axios.delete(url);
            fetchProducts();
            alert("Record deleted");
        } catch (error) {
            alert("Failed to delete record");
        }

    }

    function edit(item: Product){

        navigate("/products/" + item.id);
    }

    return (
        <div>
            <h3>List Products</h3>
            <div style={{display: "flex", flexFlow: 'row wrap', justifyContent: 'center'}}>
                {products.map((item, index) => {
                    return (
                        <div key={index} className="product">
                            <p>Id: {item.id}</p>
                            <p>{item.name}</p>
                            <p>{item.description}</p>
                            <p>Price: {item.price}</p>
                            <div>
                                <button onClick={() => {remove(item)}}>Delete</button> &nbsp;
                                <button onClick={() => edit(item)}>Edit</button>
                            </div>

                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default ListProducts;