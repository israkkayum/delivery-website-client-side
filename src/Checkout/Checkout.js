import React, { useEffect, useRef, useState } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import './Checkout.css';
import { useHistory } from 'react-router';

const Checkout = () => {

    const [users, setUsers] = useState([]);

    const nameRef = useRef();
    const emailRef = useRef();
    const addressRef = useRef();
    const cityRef = useRef();
    const zipRef = useRef();
    const phoneRef = useRef();

    const history = useHistory()

    const redirect_uri = '/delivery';
    

    const handleAddUser = e => {

        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const address = addressRef.current.value;
        const city = cityRef.current.value;
        const zip = zipRef.current.value;
        const phone = phoneRef.current.value;


        const newUser = { name: name, email: email, address: address, city: city, zip: zip, phone: phone,}
    
        // send data to the server
        fetch('https://food-delivery-sabbir.herokuapp.com/users', {
          method: 'post',
          headers: {
            'content-type': 'application/json'
          },
          body: JSON.stringify(newUser)
        })
          .then(res => res.json())
          .then(data => {
            const addedUser = data;
            const newUsers = [...users, addedUser];
            setUsers(newUsers);
            // reset name and email
            nameRef.current.value = '';
            emailRef.current.value = '';
            addressRef.current.value = '';
            cityRef.current.value = '';
            zipRef.current.value = '';
            phoneRef.current.value = '';
          })

          .then(result =>{
            history.push(redirect_uri);
        })

    
        e.preventDefault();
      }


    return (
          <div className="container my-5">
             <div className="checkout-header">
             <h1>Check Your Burgers</h1>
              <p>We guarantee delivery that arrives within an hour</p>
             </div>

<Form onSubmit={handleAddUser}>
   <div className="checkout-form">
   <Row className="mb-3">

   <Form.Group as={Col} controlId="formGridName">
      <Form.Label>Full Name</Form.Label>
      <Form.Control type="name" ref={nameRef} required placeholder="Enter Full Name" />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridEmail">
      <Form.Label>Email</Form.Label>
      <Form.Control type="email" ref={emailRef} required placeholder="Enter email" />
    </Form.Group>

  </Row>

  <Form.Group className="mb-3" controlId="formGridNumber">
    <Form.Label>Phone Number</Form.Label>
    <Form.Control placeholder="+880 1XXXXXXX" required ref={phoneRef} />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formGridAddress">
    <Form.Label>Address</Form.Label>
    <Form.Control placeholder="Apartment, studio, or floor" required ref={addressRef} />
  </Form.Group>

  <Row className="mb-3">
    <Form.Group as={Col} controlId="formGridCity">
      <Form.Label>City</Form.Label>
      <Form.Control ref={cityRef} required/>
    </Form.Group>

    <Form.Group as={Col} controlId="formGridState">
      <Form.Label>State</Form.Label>
      <Form.Select defaultValue="Choose...">
        <option>Choose...</option>
        <option>...</option>
      </Form.Select>
    </Form.Group>

    <Form.Group as={Col} controlId="formGridZip">
      <Form.Label>Zip</Form.Label>
      <Form.Control  ref={zipRef} required/>
    </Form.Group>
  </Row>
   </div>

  <div className="checkout-button">
  <Button variant="warning" type="submit">
    PLACE ORDER
  </Button>
  </div>
</Form>
           
          </div>
    );
};

export default Checkout;