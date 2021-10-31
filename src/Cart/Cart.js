import React from 'react';
import { Image } from 'react-bootstrap';
import './Cart.css';

const Cart = ({cart}) => {

    const {name, img, price, quantity} = cart;

    return (
        <div className="cart-product">
            <div>
            <Image src={img} />
            </div>
            <div>
            <h5>{name}</h5>
            <h6>$ {price} × {quantity}</h6>
            </div>
        </div>
    );
};

export default Cart;