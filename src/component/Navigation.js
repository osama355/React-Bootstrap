import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar, NavDropdown,Nav, Button, Modal} from 'react-bootstrap';
import '../App.css';

function Navigation() {

  const [smShow, setSmShow] = useState(false);

  // const handleClose = () => setSmShow(false);
  const handleShow=()=>setSmShow(true);
  return (
    <div className="App">

      <Navbar className="nav" collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">More deets</Nav.Link>
            <Nav.Link eventKey={2} href="#memes" onClick={handleShow}>
              Login
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>  

      <Modal
        size="sm"
        show={smShow}
        onHide={() => setSmShow(false)}
        aria-labelledby="example-modal-sizes-title-sm"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-sm">
            Welcome to React-Bootstrap
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>Login Successful</Modal.Body>
      </Modal>
    </div>
  );
}



// render(<Example />);

export default Navigation;
