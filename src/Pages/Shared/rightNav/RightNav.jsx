import React from 'react';
import { FaFacebookSquare } from "react-icons/fa";
import { Button, ListGroup } from 'react-bootstrap';
import Qzone from '../Qzone/Qzone.jsx';

const RightNav = () => {
    return (
        <div className='text-center'>
            <div className='my-4'>
            <Button className='my-4c' variant="secondary">login by google</Button>
            <br />
            <Button variant="secondary">login by git</Button>
            </div>
            <div className='my-4'>
                <h2>find us on</h2>
                <ListGroup>
                    <ListGroup.Item><FaFacebookSquare/>Facebook</ListGroup.Item>
                    <ListGroup.Item><FaFacebookSquare/>Facebook</ListGroup.Item>
                    <ListGroup.Item><FaFacebookSquare/>Facebook</ListGroup.Item>
                </ListGroup>
            </div>
            <Qzone></Qzone>
        </div>
    );
};

export default RightNav;