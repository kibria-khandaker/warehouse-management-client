import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import { auth } from '../../../firebase.init';
import logo from '../../../images/logo.png';
import CustomLink from './CustomLink';
import './Header.css';

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
                        <Nav className='nav_a text-success'>

                            <Nav.Link as={CustomLink} to="/"  > Home </Nav.Link>
                            <Nav.Link as={CustomLink} to="/blogs"  > Blog </Nav.Link>
                            <Nav.Link as={CustomLink} to="/signup"  > SignUp </Nav.Link>

                            {
                                user ? (<>
                                    <Nav.Link onClick={() => signOut(auth)} as={CustomLink} to="/login" >LogOut</Nav.Link>
                                    <NavDropdown title="Admin" id="collasible-nav-dropdown" className=' myBrandBgColor text-success rounded-3 '  >
                                        {
                                            user ?
                                                <>
                                                    <small className='fw-lighter px-1'>{user?.email}</small>
                                                    <NavDropdown.Divider />
                                                </>
                                                : ''
                                        }
                                        {/* <NavDropdown.Item as={Link} to="/blogs" className={({ isActive }) => (isActive ? "myBrandColor" : "myBrandColor")}> Blog </NavDropdown.Item> */}
                                        <NavDropdown.Item as={CustomLink} to="/ManageInventories"  > Manage Items </NavDropdown.Item>
                                        <NavDropdown.Item as={CustomLink} to="/addNewItem"  > Add Item </NavDropdown.Item>
                                        <NavDropdown.Item as={CustomLink} to="/myitems"  > My Items </NavDropdown.Item>
                                    </NavDropdown>
                                </>
                                ) : (
                                    <Nav.Link as={CustomLink} to="/login" className=' text-success' >Login</Nav.Link>
                                )
                            }

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>


    );
};

export default Header;