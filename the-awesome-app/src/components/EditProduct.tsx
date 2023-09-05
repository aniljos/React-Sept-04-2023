import { ChangeEvent, useEffect, useState } from 'react';
import {useParams} from 'react-router-dom';
import { Product } from '../model/Product';
import axios from 'axios';

function EditProduct(){

    const [product, setProduct] = useState<Product>(new Product());
    const params = useParams();
    const productId = params["id"];

    useEffect(() => {
        fetchProduct();
    }, [])

    async function fetchProduct(){

        try {
            const url = "http://localhost:9000/products/" + productId;
            const response = await axios.get(url);
            setProduct(response.data);
        } catch (error) {
            
        }
    }

    function handleChangeName(evt: ChangeEvent<HTMLInputElement>){

        const value = evt.target.value;
        const copy_product = {...product};
        copy_product.name = value;
        setProduct(copy_product);
    }

    return (
        <div>
            <h4>Edit Product: {productId}</h4>

            <div className="form-group">
                <label>Name</label>
                <input className="form-control" placeholder="Name" 
                                value={product.name} onChange={handleChangeName}/>
            </div>

            <div className="form-group">
                <label>Price</label>
                <input type="number" className="form-control" placeholder="Price" 
                                value={product.price}/>
            </div>

            <div className="form-group">
                <label>Description</label>
                <input type="text" className="form-control" placeholder="Description" 
                                value={product.description}/>
            </div>

            <div>
                <button className="btn btn-primary">Save</button>&nbsp;
                <button className="btn btn-primary">Cancel</button>
            </div>
        </div>
    )
}


export default EditProduct;