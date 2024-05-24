import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import React from 'react';

import banner from "../../assets/images/joe-griffin-redbubble-banner-art.jpg"


function Navigation(props) {
    const {
        categories = [],
        currentCategory,
        setCurrentCategory,
        resumeSelected,
        setResumeSelected
    } = props;
    return (

            <Navbar expand="lg" className="bg-secondary py-4 bg-img">
                <Container className='w-25'>
                    <Navbar.Brand className='text-secondary'> Ian Miller's Portfolio
                    </Navbar.Brand>
                </Container>
                <Container className="justify-content-between">
                    <Nav className="justify-content-between w-100">
                        {categories.map((category) => (
                            <Nav.Item key={category.name}>
                                <Nav.Link href='#' className='text-quad' name={category.name} key={category.name} data-testid={category.name}  onClick={ () => {setCurrentCategory(category)}}>{category.name}</Nav.Link>
                            </Nav.Item>
                        ))}
                    </Nav>
                </Container>
            </Navbar>
    );
}


export default Navigation;