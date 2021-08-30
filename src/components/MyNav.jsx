import { Navbar, Nav } from 'react-bootstrap'

const MyNav = ({ title, color }) => {
  
    return (
        <Navbar collapseOnSelect expand="lg" bg={color} variant={color}>
            <Navbar.Brand href="#home">{title} - Strive for book</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Link href="#">Home</Nav.Link>
                    <Nav.Link href="#">Abount</Nav.Link>
                    <Nav.Link href="#">Browse</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default MyNav