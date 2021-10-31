import React, { useEffect, useRef, useState } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { useHistory } from 'react-router';

const AddRestaurant = () => {

    const [restaurants, setRestaurants] = useState([]);

    const titleRef = useRef();
    const imgRef = useRef();
    const addressRef = useRef();
    const timeRef = useRef();
    const tagRef = useRef();
    const footerImgRef = useRef();
    const products = useRef();
    

    const history = useHistory()

    const redirect_uri = '/home';
    

    const handleAddRestaurant = e => {

        const title = titleRef.current.value;
        const img = imgRef.current.value;
        const address = addressRef.current.value;
        const time = timeRef.current.value;
        const tag = tagRef.current.value;
        const footerImg = footerImgRef.current.value;

        const products = [];


        const newRestaurant = { title: title, img: img, address: address, time: time, tag: [tag], footerImg: footerImg, products: [products]}
    
        // send data to the server
        fetch('https://food-delivery-sabbir.herokuapp.com/restaurant', {
          method: 'post',
          headers: {
            'content-type': 'application/json'
          },
          body: JSON.stringify(newRestaurant)
        })
          .then(res => res.json())
          .then(data => {
            const addedRestaurant = data;
            const newRestaurants = [...restaurants, addedRestaurant];
            setRestaurants(newRestaurants);
            // reset name and email

            titleRef.current.value = '';
            imgRef.current.value = '';
            addressRef.current.value = '';
            timeRef.current.value = '';
            tagRef.current.value = '';
            footerImgRef.current.value = '';
          })

          .then(result =>{
            history.push(redirect_uri);
        })

    
        e.preventDefault();
      }


    return (
          <div className="container my-5">
             <div className="checkout-header pb-5">
             <h1>Add Your Restaurant</h1>
             </div>

<Form onSubmit={handleAddRestaurant}>
   <div className="checkout-form">
   <Row className="mb-3">

   <Form.Group as={Col} controlId="formGridName">
      <Form.Label>Restaurant Name</Form.Label>
      <Form.Control type="title" ref={titleRef} required placeholder="Enter Restaurant Name" />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridEmail">
      <Form.Label>Header Image URL</Form.Label>
      <Form.Control type="img" ref={imgRef} required placeholder="Enter Image URL" />
    </Form.Group>

  </Row>

  <Form.Group className="mb-3" controlId="formGridNumber">
    <Form.Label>Footer Image URL</Form.Label>
    <Form.Control type="img" placeholder="Enter Image URL" required ref={footerImgRef} />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formGridAddress">
    <Form.Label>Address</Form.Label>
    <Form.Control placeholder="Apartment, studio, or floor" required ref={addressRef} />
  </Form.Group>

  <Row className="mb-3">
    <Form.Group as={Col} controlId="formGridCity">
      <Form.Label>Time</Form.Label>
      <Form.Control ref={timeRef} required placeholder="Enter Business Time"/>
    </Form.Group>

    <Form.Group as={Col} controlId="formGridZip">
      <Form.Label>Tag</Form.Label>
      <Form.Control  ref={tagRef} required/>
    </Form.Group>
  </Row>
   </div>

  <div className="checkout-button">
  <Button variant="warning" type="submit">
    ADD YOUR RESTAURANT
  </Button>
  </div>
</Form>
           
          </div>
    );
};

export default AddRestaurant;