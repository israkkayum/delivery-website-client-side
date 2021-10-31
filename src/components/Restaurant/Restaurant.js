import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import './Restaurant.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Restaurant = ({restaurant}) => {

    const {title, img, tag, time, footerImg, address, _id} = restaurant;

    const clock = <FontAwesomeIcon icon={faClock} />
    const mapMaker = <FontAwesomeIcon icon={faMapMarkerAlt} />

    return (
          <div>
            <Col>
            <Card>
                <Card.Img variant="top" src={img} style={{height:'300px'}}/>
                <Card.Body>
                <Card.Title style={{fontSize:'25px', fontWeight:'bold'}}>{title}</Card.Title>
                <Card.Text>
                    <ul style={{listStyleType:'none'}}>
                    {
                        tag.map(tag => <li style={{float:'left', marginRight:'20px', marginBottom:'10px'}}>{tag}</li>)
                    }
                    </ul>
                </Card.Text>
                </Card.Body>
                <Card.Footer className="card-footer">
                    <div className='card-footer-half'>
                    <div>
                    <img src={footerImg}  style={{marginRight:'10px', height:'50px', width:'50px'}} />
                    </div>
                    <div>
                    <div className="text-time">{clock} &nbsp; {time}</div>
                    <div className="text-muted">{mapMaker} &nbsp; {address}</div>
                    </div>
                    </div>
                    <div>
                    <Link to={`/shop/${_id}`}>
                     <Button variant="warning">Details</Button>
                    </Link>
                    </div>
                </Card.Footer>
            </Card>
            </Col>
          </div>
    );
};

export default Restaurant;