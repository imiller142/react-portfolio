import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import React from 'react';

const handleClick = (e) => {
    e.preventDefault();
    console.log(e.target.name + ' has been selected')
}

function Navigation(props) {
    const {
        categories = [],
        currentCategory,
        setCurrentCategory
    } = props;
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
        <Container className="justify-content-between">
            <Nav className="justify-content-between w-100">
                {categories.map((category) => (
                    <Nav.Item>
                        <Nav.Link href='#' name={category.name}  onClick={handleClick}>{category.name}</Nav.Link>
                    </Nav.Item>
                ))}
            </Nav>
        </Container>
        </Navbar>
    );
}


export default Navigation;