import { ChangeEvent, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import {useParams} from 'react-router-dom';
import { Product } from '../model/Product';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
import Alert, { AlertRef } from './Alert';

function EditProduct(){

    
    const [product, setProduct] = useState<Product>(new Product(0, "", 0, ""));
    const [severity, setSeverity] = useState("info");
    const params = useParams();
    const navigate = useNavigate();
    const alertRef = useRef<AlertRef>(null);
    const inputRef = useRef<HTMLInputElement>(null);
    const productId = params["id"];

    useEffect(() => {
        fetchProduct();
    }, [])

    async function fetchProduct(){

        try {
            const url = process.env.REACT_APP_BASE_URL + "/secure_products/" + productId;
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
        setSeverity("info");
    }

    function handlePriceChange(evt: ChangeEvent<HTMLInputElement>){

        setProduct({...product, price: Number(evt.target.value)});
        setSeverity("warning");
    }

    const handleAlertClose = useCallback( () => {
    
        alert("Closing the alert: " +  product.name);
    
    }, [product.name]);

    async function save(){

        
        try {
            const url = "http://localhost:9000/products/" + productId;
            await axios.put(url, product);
            alert("Saved");
            navigate(-1);

        } catch (error) {
            alert("Failed to save");
        }

    }
    function cancel(){
        navigate(-1);
    }

    const calc = useMemo( ()=>{

        console.log("invoking calc");
        if(product.price){
            return product.price * 7;
        }
        return 0;
       
    }, [product.price]);

    function showRefs(){
        console.log("alertRef", alertRef);
        console.log("inputRef", inputRef);

        if(alertRef.current?.isHelperVisible)
        {
            alertRef.current.hideHelperText();
        }
        else{
            alertRef.current?.showHelperText();
        }
    }

    return (
        <div>
            <h4>Edit Product: {productId}</h4>
            {"result: " + calc}

            <Alert ref={alertRef} message='Updating the product...' severity={severity} onClose={handleAlertClose}/>

            <div>
                <button className='btn btn-warning' onClick={showRefs}>Show refs</button>
            </div>

            <div className="form-group">
                <label>Name</label>
                <input ref={inputRef} className="form-control" placeholder="Name" 
                                value={product.name} onChange={handleChangeName}/>
            </div>

            <div className="form-group">
                <label>Price</label>
                <input type="number" className="form-control" placeholder="Price" 
                                value={product.price} onChange={handlePriceChange}/>
            </div>

            <div className="form-group">
                <label>Description</label>
                <input type="text" className="form-control" placeholder="Description" 
                                value={product.description} 
                                onChange={(evt) => setProduct({...product, description: evt.target.value})}/>
            </div>

            <div>
                <button className="btn btn-primary" onClick={save}>Save</button>&nbsp;
                <button className="btn btn-primary" onClick={cancel}>Cancel</button>
            </div>
        </div>
    )
}


export default EditProduct;