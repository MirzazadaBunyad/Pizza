import React from 'react'
import { Badge, Container, Nav, Navbar } from 'react-bootstrap'
import {BsCart4} from 'react-icons/bs'

function Header({setModal, order}) {
  return (
    <header>
        <Navbar collapseOnSelect expand="lg" bg="danger" variant="dark">
            <Container>
                <Navbar.Brand href="#home">
                    <img id="logo" src="https://seeklogo.com/images/P/pizza-logo-42816D88BE-seeklogo.com.png" alt="Pizza logo" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link href="#" className='position-relative'>
                            <BsCart4 onClick={() => setModal(true)} />
                            <Badge pill bg="light"  text="dark"  className="position-absolute top-0">
                                {order.length}
                            </Badge>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
            </Navbar>
    </header>
  )
}

export default Header