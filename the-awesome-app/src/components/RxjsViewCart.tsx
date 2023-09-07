import React, {JSX, useEffect, useState} from 'react';
import { CartItem } from '../model/CartItem';
import {cartStore} from '../rxjs/CartStore';

function RxjsViewCart(): JSX.Element {

    const [cart, setCart] = useState<CartItem[]>([]);

    useEffect(() => {

        //setCart(cartStore.getCart());
        cartStore.cartSubject.subscribe((updatedCart) => {
            setCart(updatedCart);
        })
    }, [])

    function remove(item: CartItem) {

    }
    return (
        <div>
            <h5>Gadgets Cart</h5>

            <div className="row row-cols-1 row-cols-md-2 g-4">
                {cart.map((item, index) => {
                    return (
                        <div className="col" key={index}>
                            <div className="card bg-light mb-3 border-success">
                                <p className="card-header">{item.product?.name}</p>
                                <div className="card-body">
                                    <p className="card-text">{item.product?.description}</p>
                                    <p className="card-text">Quantity: {item.quantity}</p>
                                </div>
                                <div className="card-footer">
                                    <button className="btn btn-success" onClick={() => { remove(item) }}>Remove</button>
                                </div>

                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}

export default RxjsViewCart;