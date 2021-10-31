import React from 'react';
import { Button, Col, FormControl, InputGroup, Row } from 'react-bootstrap';
import banner from '../../images/banner.jpg';
import img1 from '../../images/img1.png'
import './Banner.css';
import Restaurant1 from '../../images/Restaurant/img1.jpg';
import Restaurant2 from '../../images/Restaurant/img2.jpg';
import Restaurant3 from '../../images/Restaurant/img3.jpg';
import Restaurant4 from '../../images/Restaurant/img4.jpg';
import Restaurant5 from '../../images/Restaurant/img5.jpg';
import Restaurant6 from '../../images/Restaurant/img6.jpg';
import Restaurant7 from '../../images/Restaurant/img7.jpg';

const Banner = () => {
    return (
          <div id="home" style={{backgroundImage: `url(${banner})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', height:'1000px'}}>
              <Row xs={1} md={2} className="g-4">
                <Col>
                    <div className="banner-img">
                    <img src={img1} />
                </div>
                <div className="banner-title">
                    <h1>Order Healthy And Fresh Food Any Time</h1>
                </div>
                <div className="banner-text">
                    <p>Italian food makes people think of big family dinners. So you may want to position your restaurant as a place to bring the whole family.</p>
                </div>
                <div className="banner-input">
                <InputGroup className="mb-3">
                    <FormControl
                        className="p-3"
                        placeholder="Recipe Name Here"
                    />
                    <Button variant="warning" id="button-addon2">Search Keywords</Button>
                </InputGroup>
                </div>
                <div className="popular-restaurant">
                    <h2>Popular Restaurant</h2>
                    <img src={Restaurant1} />
                    <img src={Restaurant2} />
                    <img src={Restaurant3} />
                    <img src={Restaurant4} />
                    <img src={Restaurant5} />
                    <img src={Restaurant6} />
                    <img src={Restaurant7} />
                </div>
                </Col>
                 <Col>
                </Col>
              </Row>
          </div>
    );
};

export default Banner;