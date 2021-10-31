import React from 'react';
import { Button, Container, Image, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../hooks/useAuth';
import './Header.css';
import logo from '../../images/logo.png';

const Header = () => {
    const { user, logOut } = useAuth();
    console.log(user);
    return (
        <>
            <Navbar bg="white" variant="light" sticky="top" collapseOnSelect expand="lg" className="header-navbar" >
                <Container className="header-container">
                    <Navbar.Brand className="logo" href="/home#home"> <img src= {logo} /> </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse className="justify-content-end header-text">
                        <Nav.Link as={HashLink} to="/home#home" style={{color:'black'}}>Home</Nav.Link>
                        <Nav.Link as={HashLink} to="/home#categories" style={{color:'black'}}>Categories</Nav.Link>
                        <Nav.Link as={HashLink} to="/home#restaurants" style={{color:'black'}}>Restaurants</Nav.Link>
                        <Nav.Link as={HashLink} to="/home#process" style={{color:'black'}}>Process</Nav.Link>
                        <Nav.Link as={HashLink} to="/home#team" style={{color:'black'}}>Team</Nav.Link>
                        {user?.email ? <Nav.Link as={NavLink} to="/my-order" style={{color:'black'}}>My Order</Nav.Link>:<span></span>}
                        {user?.email ?<div>
                        <Button onClick={logOut} variant="warning" className="px-5" style={{fontSize:'20px', fontWeight:'bold'}}>Sign Out</Button>
                        <Navbar.Text className="mx-3">
                            {<Image src={user?.photoURL} roundedCircle style={{width: '50px', height: '50px'}} />}
                        </Navbar.Text></div> :
                            <Nav.Link  as={Link} to="/login"><Button variant="warning" className="px-5" style={{fontSize:'20px', fontWeight:'bold'}}>Sign In</Button></Nav.Link>}
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;