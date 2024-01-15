import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './navBarStyled.css';
import CarWidget from '../CartWidgets/CarWidget';
function BasicExample() {
  const handleClick = (event) => {
    console.log(event);
  };
  return (
    <Navbar bg="dark" data-bs-theme="dark" expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Pro Gamer Store</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Inicio</Nav.Link>
            <Nav.Link href="#link">Productos</Nav.Link>
            <NavDropdown title="Categorias" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Consolas</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Juegos
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Mandos</NavDropdown.Item>
              <NavDropdown.Divider />
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        <CarWidget number={0} handleClick={handleClick} />
      </Container>
    </Navbar>
  );
}

export default BasicExample;