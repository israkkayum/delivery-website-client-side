import React from 'react';
import { Col, Row } from 'react-bootstrap';
import logo from '../../images/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faMapMarkerAlt, faShoppingBag } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {

    const clock = <FontAwesomeIcon icon={faClock} />
    const mapMaker = <FontAwesomeIcon icon={faMapMarkerAlt} />
    const shoppingBag = <FontAwesomeIcon icon={faShoppingBag} />

    return (
        <div>
          <div className="container pt-5 mt-5" style={{fontWeight:'bold'}}>
             <Row xs={1} md={3} className="g-5">
                <Col>
                  <img src ={logo} style={{height:'100px', width:'250px', marginBottom:'10px'}}/>
                  <p>One is to focus on the quality of your meat. If you can call out organic beef, sustainable farming.</p>
                   <h6>Phone: +80018451584</h6>
                   <h6>Email: israk.kayum@gmail.com</h6>
                </Col>

                <Col>
                   <h5 className="pb-3 pt-3">LET’S GET TOGETHER</h5>
                   <div className="text-muted pb-3">{mapMaker} &nbsp; 60 East 65th Street, NY</div>
                   <div className="text-muted pb-3">{clock} &nbsp; Mon - Sat: 11AM - 11PM <br />
                   <span className="mx-4 mt-2">Sun: 11AM - 08PM</span></div>
                   <div className="text-muted">{shoppingBag} &nbsp; Sat: 01PM - 10PM</div>
                </Col>

                <Col>
                  <h5 className="pb-3 pt-3">QUICK MENU</h5>
                  <h6>Home</h6>
                  <h6>Categories</h6>
                  <h6>Restaurants</h6>
                  <h6>Simple Process</h6>
                  <h6>Meet Our Best Team</h6>
                </Col>
            </Row>    
          </div>
          <h6 style={{textAlign:'center', marginTop:'20px'}}>Copyright 2021 © foodota.  All Rights Reserved</h6>
        </div>
          
    );
};

export default Footer;