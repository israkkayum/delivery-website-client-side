import React from 'react';
import { Button, Col, Image, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import pageNotFound from '../../images/page-not-found.png';
import './PageNotFound.css';

const PageNotFound = () => {
    return (
          <div>
              <div className="container pt-5">
                     <Row xs={1} md={2} className="g-4">
                        
                        <Col> 

                           <div className="page-not-found">
                           <h2>OOPS!!!</h2>
                           <h1>Page Not Be FoundPage</h1>
                           </div>

                           <Link to="/home">  <Button className="not-found-btn" variant="warning">Go To Home</Button></Link>

                        </Col>
                        <Col>
                          
                        <Image src={pageNotFound} fluid />
                        
                        </Col>

                     </Row>
               </div>
          </div>
    );
};

export default PageNotFound;