import React from 'react';
import { useEffect, useState } from 'react';
import Product from '../Product/Product';
import { useParams } from 'react-router';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Shop.css';
import Cart from '../../Cart/Cart';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const Shop = () => {
 
    const { restaurantId } = useParams();
    const [cart, setCart] = useState([]);


    const [items, setItems] = useState([]);
    const [restaurant, setRestaurant] = useState({});

    const mapMaker = <FontAwesomeIcon icon={faMapMarkerAlt} />

    useEffect(() =>{
        fetch(`https://food-delivery-sabbir.herokuapp.com/${restaurantId}`)
        .then(res => res.json())
        .then(data => {
            setItems(data.products);
            setRestaurant(data)
        })
}, []);

const handleAddToCart = (product) => {
    const exists = cart.find(pd => pd.key === product.key);
    let newCart = [];
    if (exists) {
        const rest = cart.filter(pd => pd.key !== product.key);
        exists.quantity = exists.quantity + 1;
        newCart = [...rest, product];
    }
    else {
        product.quantity = 1;
        newCart = [...cart, product];
    }
    setCart(newCart);

}

    return (
        <div>
            <img src ={restaurant.img}  style={{width:'100%', height:'500px'}}/> 
        <div className='container mb-5'>
        <div className="shop-header">
        <div>
        <img src={restaurant.footerImg} />
        </div>
         <div>
         <h1>{restaurant.title}</h1>
         <h6> {mapMaker} &nbsp; {restaurant.address}</h6>
         </div>
        </div>
            
        <div className="shop-cart">
        <div>
            {
                    items.map(item => <Product
                        item ={item}
                        key={item.key}
                        handleAddToCart={handleAddToCart}
                    >

                    </Product>)
            }
         </div>
         <div className="cart-container">
             <h3>Your Order</h3>
             <div>
             {
               cart.map(cart => <Cart
                cart ={cart}
               ></Cart>)
             }
             </div>
             <div className="checkout-button">
             <Link to="/checkout"><Button  variant="warning"> CHECKOUT </Button></Link>
             </div>
         </div>
        </div>

        </div>
        </div>
    );
};

export default Shop;