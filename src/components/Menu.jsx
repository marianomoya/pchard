import { NavDropdown, Navbar, Nav, Form, Container, Button } from "react-bootstrap"
import CartWidget from './CartWidget'
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <>
      <header>
        <Navbar expand="lg" variant="dark" bg="dark">
          <Container fluid>
            <Link className="navLogo" to="/" />
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: "100px" }}
                navbarScroll
              >
                <Link to="/">
                  <Nav className="navText nav-link"> Inicio </Nav>
                </Link>
                <NavDropdown
                  title="Productos"
                  id="navbarScrollingDropdown"
                  className="navText"
                >
                  <Link to="/category/1" className="dropdown-item nav-link">
                    Componentes
                  </Link>
                  <Link to="/category/2" className="dropdown-item nav-link">
                    Periféricos y accesorios
                  </Link>
                  <Link to="/category/3" className="dropdown-item nav-link">
                    Equipos y Notebooks
                  </Link>
                  <NavDropdown.Divider />
                  <Link to="/category/4" className="dropdown-item nav-link">
                    Otros
                  </Link>
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