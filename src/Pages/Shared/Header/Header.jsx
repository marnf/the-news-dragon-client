import React, { useContext } from 'react';
import moment from 'moment';
import logo from '../../../assets/logo.png'
import { Button, Container, } from 'react-bootstrap';
import { AuthContext } from '../../../Providers/AuthProvider';
import NavigationBar from './NavigationBar/NavigationBar.jsx';

const Header = () => {

    const { user } = useContext(AuthContext);
    console.log(user)


    return (
        <div>
            <Container>
                <div className="text-center">
                    <img src={logo} alt="" />
                    <p className='text-secondary'>journalism without fear or favour</p>
                    <p>{moment().format("dddd,DD MMMM YYYY")}</p>
                </div>
                <div className='d-flex'>
                    <Button variant="secondary">
                        news
                    </Button>
                    <marquee >
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque esse, velit temporibus explicabo perspiciatis quidem tenetur libero similique sunt a!
                    </marquee>
                </div>
            </Container>
            <NavigationBar></NavigationBar>
        </div>
    );
};

export default Header;