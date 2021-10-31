import React from 'react';
import { Card, Col } from 'react-bootstrap';

const Categorie = ({categorie}) => {

    const {title, img, restaurants} = categorie;

    return (
          <div>
            <Col>
            <Card style={{border:'none'}}>
                <Card.Img variant="top" src={img} style={{height:'200px'}}/>
                <Card.Body style={{textAlign:'center'}}>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                    {restaurants}  Restaurants
                </Card.Text>
                </Card.Body>
            </Card>
            </Col>
          </div>
    );
};

export default Categorie;