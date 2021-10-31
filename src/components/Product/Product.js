import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Button } from 'react-bootstrap';
import './Product.css';


const Product = (props) => {

    const { key, name, img, text, price } = props.item;

    return (
        <div className="product">
            <div className="item">
            <div>
            <img src={img} />
            </div>
            <div>
            <h2>{name}</h2>
            <p>{text}</p>
            <h6 style={{color:'red'}}>$ {price}</h6>
            </div>
            </div>
            <div>
            <Button
                onClick={() => props.handleAddToCart(props.item)}
                    variant="warning">
                    <FontAwesomeIcon icon={faShoppingCart} /> Add to cart</Button>
            </div>
        </div>
    );
};

export default Product;