import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Nav from 'react-bootstrap/Nav'

class Header extends Component {
    constructor(props){
        super(props);
        
    }

     render() {
        return (
           <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed={this.props.position}>
            <Navbar.Brand href="#home">MySchool</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="#features">MyMarks</Nav.Link>
                    <Nav.Link href="#pricing">MyTeachers</Nav.Link>
                    <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                <Nav>
                    <Nav.Link href="#deets">Details</Nav.Link>
                    <Nav.Link eventKey={2} href="#memes">
                        Notes
          </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
        );
    }
 
   

}

export default Header;