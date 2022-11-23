import { NavDropdown, Navbar, Nav, Form, Container, Button } from "react-bootstrap"
import CartWidget from './CartWidget'



const Menu = () => {
  return (
    <>
      <header>
        <Navbar expand="lg" variant="dark" bg="dark">
          <Container fluid>
            <Navbar.Brand href="#" className="navLogo">
              <img src="../" alt="" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: "100px" }}
                navbarScroll
              >
                <Nav.Link href="#" className="navText">
                  Inicio
                </Nav.Link>
                <NavDropdown
                  title="Productos"
                  id="navbarScrollingDropdown"
                  className="navText"
                >
                  <NavDropdown.Item href="#" className="navText">
                    Componentes
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#" className="navText">
                    Periféricos y accesorios
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#" className="navText">
                    Equipos y Notebooks
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#" className="navText">
                    Otros
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
              <Form className="d-flex">
              
                  
          
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  id="navSearch"
                  aria-label="Search"
                />
                <Button variant="outline-none" className="searchBtn">
                  
                </Button>
              </Form>
              <CartWidget />
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
    </>
  );
}

export default Menu;