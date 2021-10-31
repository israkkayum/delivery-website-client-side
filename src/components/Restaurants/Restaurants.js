import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import Restaurant from '../Restaurant/Restaurant';
import addRestaurant from '../../images/add-restaurant.png';
import { Link } from 'react-router-dom';

const Restaurants = () => {
    
    const [restaurants, setRestaurants] = useState([])
    
    useEffect(() => {
        fetch('https://food-delivery-sabbir.herokuapp.com/restaurant')
        .then(res => res.json())
        .then(data => setRestaurants(data))
    } ,[]);

    return (
          <div>
              <h5 className="small-title pt-5" id="restaurants">TOP RESTAURANT</h5>
              <h1 className="big-title">Papular Restaurant</h1>
              <div className="title-border"></div>
              
               <div className="container pt-5">
                     <Row xs={1} md={3} className="g-4">
                        {
                            restaurants.map(restaurant => <Restaurant
                             
                               key={restaurant._id}
                               restaurant={restaurant}

                            ></Restaurant>)
                        }

            <Col>
            <Card>
                <Card.Img variant="top" src={addRestaurant} style={{height:'300px'}}/>
                <Card.Body>
                <Card.Title style={{fontSize:'25px', fontWeight:'bold', textAlign:'center'}}>

                  <Link to="/add-restaurant"><Button variant="warning">Add Your Restaurants</Button></Link>

                </Card.Title>
                </Card.Body>
            </Card>
            </Col>

                     </Row>
               </div>

          </div>
    );
};

export default Restaurants;