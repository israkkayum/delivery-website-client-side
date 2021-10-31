import React from 'react';
import { Card, Col } from 'react-bootstrap';

const Team = ({team}) => {

    const {name, img, expertize} = team;

    return (
          <div>
            <Col>
            <Card style={{border:'none'}}>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                    {expertize}
                </Card.Text>
                </Card.Body>
            </Card>
            </Col>
          </div>
    );
};

export default Team;