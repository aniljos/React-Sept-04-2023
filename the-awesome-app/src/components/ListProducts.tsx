import { useEffect, useState } from "react";
import axios from 'axios';
import { Product } from '../model/Product';
import './ListProducts.css';
import {useNavigate} from 'react-router-dom';
import Alert from "./Alert";
import {useSelector} from 'react-redux';
import { AppState } from "../redux/store";
import { AuthState } from "../redux/authReducer";

function ListProducts() {

    const [products, setProducts] = useState<Product[]>([]);
    const [message, setMessage] = useState("");
    const [severity, setSeverity] = useState("");
    const navigate = useNavigate();
    const auth = useSelector<AppState>(state => state.auth) as AuthState;

    useEffect(() => {
        fetchProducts();
    }, [])

    async function fetchProducts() {

        const url = process.env.REACT_APP_BASE_URL + "/secure_products" //"http://localhost:9000/products";
        // axios
        //     .get(url)
        //     .then((response)=> {
        //         console.log("response", response);
        //     }, (error) => {
        //         console.log("error", error);
        //     })

        try {
            // Moved to the axios interceptor
            //const headers = {Authorization: `Bearer ${auth.accessToken}`}
            //const response = await axios.get(url, {headers});
            const response = await axios.get(url);
            console.log("response", response);
            setProducts(response.data);

        } catch (error) {
            console.log("error", error);
        }
    }

    async function remove(item:Product){

        try {
            const url = process.env.REACT_APP_BASE_URL + "/secure_products/" + item.id //"http://localhost:9000/products/" + item.id;
            await axios.delete(url);
            fetchProducts();
           // alert("Record deleted");
           setMessage(`Record with Id: ${item.id} was deleted`);
           setSeverity("success");
           setTimeout(() => {
            setMessage("")
           }, 3000)

        } catch (error) {
            //alert("Failed to delete record");

            setMessage(`Failed to delete record with Id: ${item.id}`);
            setSeverity("error");
        }

    }

    function edit(item: Product){

        navigate("/products/" + item.id);
    }
    function closeAlert(){
        setMessage("");
    }

    return (
        <div>
            <h3>List Products</h3>

            {message ? <Alert message={message} severity={severity} onClose={closeAlert}/> : null}

            <div style={{display: "flex", flexFlow: 'row wrap', justifyContent: 'center'}}>
                {products.map((item, index) => {
                    return (
                        // <ProductView product={index} onRemove={remove} onEdit={edit}/>
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