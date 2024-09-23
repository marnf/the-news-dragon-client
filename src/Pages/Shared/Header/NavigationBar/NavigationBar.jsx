import React, { useContext } from 'react';

import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../../Providers/AuthProvider';

const NavigationBar = () => {

    const { user,logOut } = useContext(AuthContext);
    
    const handleLogOut =()=>{
        logOut()
        .then()
        .catch(error =>{ console.log(error)})
    }

    return (
        <div>
            <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
                <Container>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto">
                            <Link to="/categories/0" >Home</Link>
                            <Nav.Link href="#pricing">About</Nav.Link>
                            <Nav.Link href="#pricing">Career</Nav.Link>
                        </Nav>
                        <Nav>
                            {user && <Nav.Link href="#">{user.displayName}</Nav.Link>}
                            {user ? <Button variant="secondary" onClick={handleLogOut}>
                                logOut
                            </Button> :
                                <Link to='/logIn'> log in</Link>

                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default NavigationBar;