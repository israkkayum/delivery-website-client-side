import React from 'react';
import { Col, Image, Row } from 'react-bootstrap';
import order from '../../images/process/order.png';
import cash from '../../images/process/cash.png';
import receive from '../../images/process/receive.png';
import profit from '../../images/process/profit.png'
import promotion from '../../images/process/promotion.png'
import foodWomen  from '../../images/process/food-women.jpg';

const Process = () => {
    return (
          <div>
              <h5 className="small-title pt-5" id="process">HOW IT WORKS</h5>
              <h1 className="big-title">Simple Process</h1>
              <div className="title-border"></div>
              <div className="container pt-5">
                <Row xs={1} md={3} className="g-4">
                    <Col>
                      <img src={order} style={{marginBottom:'20px'}} />
                      <h2 style={{marginBottom:'10px'}}>Your Order</h2>
                      <p>Thank you for being valued customer. We are so grateful to serving for the honored be clients pleasure of serving hope we meets.</p>
                    </Col>
                    <Col>
                       <img src={cash} style={{marginBottom:'20px'}}/>
                       <h2 style={{marginBottom:'10px'}}>Cash On Delivery</h2>
                       <p>Online food Delivery for hiring Food Foodota We appreciate your business, and we’ll do best to continue to give you the new kind.</p>
                    </Col>
                    <Col>
                        <img src={receive} style={{marginBottom:'20px'}}/>
                        <h2 style={{marginBottom:'10px'}}>Receive Order</h2>
                        <p>We at truly appreciate your business and we’re grateful for the trust you’ve placed in us. We sincerely hope you are satisfied .</p>
                    </Col>
                </Row>    
              </div>


              <div className="container pt-5" style={{marginTop:'100px'}}>
                <Row xs={1} md={2} className="g-5">
                    <Col>

                      <h5 className="small-title pb-2" style={{textAlign:'left', marginTop:'0'}}>PIZZA DELIVERY</h5>
                      <h1 className="big-title" style={{textAlign:'left'}}>Get Started Today!</h1>
                      <div className="title-border" style={{marginLeft:'0'}}></div>
                      <h2 className="mb-4">Everything you need to build an amazing food restaurant responsive websit</h2>
                      <p className="mb-5">Hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis.</p>
                      
                      <Row  xs={2} className="g-4">
                          <Col>

                            <img src={profit} className="mb-3" />
                            <h3 className="mb-3">Food Order</h3>
                            <p>Food is the necessity of life. It provides nutrition, sustenance growth to human body. Food can be classified.</p>
                          
                          </Col>
                          <Col>

                          <img src={promotion} className="mb-3"/>
                            <h3 className="mb-3">Promote Restaurant</h3>
                            <p>Food can be classified into cereals, pulses, nuts and oilseeds, vegetable, fruits, milk and milk products and flesh food.</p>
                          
                          </Col>
                      </Row>
                    
                    </Col>

                      <Col style={{textAlign:'center'}}> 
                      <Image src={foodWomen} roundedCircle fluid  className="pt-2"/>

                    </Col>
                </Row>
              </div>
          </div>
    );
};

export default Process;