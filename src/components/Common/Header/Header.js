import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../../images/logo.png';
import './Header.css';

const Header = () => {
    return (
        <header className='header'>
            <Navbar collapseOnSelect expand="lg" className=' bg-transparent'>
                <Container>
                    <Navbar.Brand as={Link} to="/">
                        <img height={64} className='home_header_logo' src={logo} alt="" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav" className='justify-content-md-end'>
                        <Nav className='nav_a fw-bold'>

                            <Nav.Link as={Link} to="/" className={({ isActive }) => (isActive ? "myBrandColor" : "text-dark")}> Home </Nav.Link>
                            <Nav.Link as={Link} to="/about" className={({ isActive }) => (isActive ? "myBrandColor" : "text-dark")}>About </Nav.Link>
                            <Nav.Link as={Link} to="/blogs" className={({ isActive }) => (isActive ? "myBrandColor" : "text-dark")}> Blog </Nav.Link>
                            
                            <NavDropdown title="Admin" id="collasible-nav-dropdown"  className='myBrandBgColor text-white rounded-3'  >
                                <NavDropdown.Item  as={Link} to="/blogs" className={({ isActive }) => (isActive ? "myBrandColor" : "text-dark")}> Blog </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                            </NavDropdown>


                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>


    );
};

export default Header;