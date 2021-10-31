import React, { useEffect, useState } from 'react';
import { Button, Col, Image, Row } from 'react-bootstrap';
import Team from '../Team/Team';
import onlineDelivery from '../../images/Online-delivery.png'

const Teams = () => {

    const [teams, setTeams] = useState([])
    
    useEffect(() => {
        fetch('http://:5000/teams')
        .then(res => res.json())
        .then(data => setTeams(data))
    } ,[]);

    return (
          <div>
              <h5 className="small-title pt-5" id="team">TEAM MEMBERS</h5>
              <h1 className="big-title">Meet Our Best Team</h1>
              <div className="title-border"></div>
              
               <div className="container pt-5">
                     <Row xs={1} md={4} className="g-4">
                        {
                            teams.map(team => <Team
                             
                               key={team._id}
                               team={team}

                            ></Team>)
                        }
                     </Row>
               </div>

              <div className="container pt-5 pb-5" style={{marginTop:'100px'}}>
                <Row xs={1} md={2} className="g-5">
                    <Col>

                        <h5 className="small-title pb-2" style={{textAlign:'left', marginTop:'0'}}>DINE IN OR TAKE AWAY</h5>
                        <h1 className="big-title" style={{textAlign:'left'}}>Get Your Order 24/7 Right At Your Doorsteps</h1>
                        <div className="title-border" style={{marginLeft:'0'}}></div>
                        <p className="mb-5">Plant-based diets may offer an advantage over those that are not plant based with respect to prevention and management of diabetes. the adventist health studies found that vegetarians have approximately half the risk of developing diabetes</p>

                        <Button variant="warning px-5 py-3 m-2" style={{fontSize:'20px', fontWeight:'bold'}}>Order Food</Button>
                        <Button variant="dark px-5 py-3 m-2" style={{fontSize:'20px', fontWeight:'bold'}}>Search Now</Button>
                    </Col>

                        <Col style={{textAlign:'center'}}> 
                        <Image src={onlineDelivery} fluid  className="pt-2"/>
                        
                    </Col>
                </Row>
              </div>
          </div>
    );
};

export default Teams;