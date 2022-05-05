import React from 'react';
import { Button, Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import { auth } from '../../../firebase.init';
import logo from '../../../images/logo.png';
import './Header.css';
import { signOut } from 'firebase/auth';


const Header = () => {
    const [user] = useAuthState(auth);
    return (
        <header className='my_header'>
            <Navbar collapseOnSelect expand="lg" className=' bg-transparent'>
                <Container>
                    <Navbar.Brand as={Link} to="/">
                        <img height={64} className='home_header_logo' src={logo} alt="" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav" className='justify-content-md-end'>
                        <Nav className='nav_a fw-bold'>

                            <Nav.Link as={Link} to="/" className='  text-success' > Home </Nav.Link>
                            <Nav.Link as={Link} to="/about" className=' text-success' >About </Nav.Link>
                            <Nav.Link as={Link} to="/blogs" className=' text-success' > Blog </Nav.Link>

                            <NavDropdown title="Admin" id="collasible-nav-dropdown" className='myBrandBgColor  text-success rounded-3'  >
                                <NavDropdown.Item as={Link} to="/blogs" className={({ isActive }) => (isActive ? "myBrandColor" : "myBrandColor")}> Blog </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="/signup"> SignUp </NavDropdown.Item>

                                <NavDropdown.Divider />
                                {
                                    // user?<small className='fw-lighter px-1'>{user?.displayName}</small>:''
                                    user?<small className='fw-lighter px-1'>{user?.email}</small>:''
                                }
                                
                                {user ? (
                                    <Button className=' bg-light border-0 fw-bold text-start w-100 rounded-0 text-success' onClick={() => signOut(auth)}>
                                        Logout
                                    </Button>
                                ) : (
                                    <NavDropdown.Item
                                        className=' bg-light border-0 fw-bold text-start w-100 rounded-0 text-success'
                                        as={Link} to="/login">Login </NavDropdown.Item>
                                )}
                                
                            </NavDropdown>


                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>


    );
};

export default Header;