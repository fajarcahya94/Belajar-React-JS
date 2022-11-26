import { Container, Form, Nav, Navbar, Offcanvas } from "react-bootstrap";
import icon1 from "../../src/assets/icons/icon1.png";

const NavigationBar = () => {
  return (
    <div>
      {["lg"].map((expand) => (
        <Navbar key={expand} expand={expand}>
          <Container>
            <Navbar.Brand href="#home">
              {/* <a href="https://www.flaticon.com/free-icons/film" title="film icons">Film icons created by BZZRINCANTATION - Flaticon</a> */}
              <div className="fw-bold fs-4 text">
                <img alt="icon" src={icon1} width="30" height="30" className="d-inline-block align-items-center" /> Movies
              </div>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas id={`offcanvasNavbar-expand-${expand}`} aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`} placement="end">
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  <h1 className="fw-bold fs-2 text">Movies</h1>
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-center flex-grow-1 pe-3 fw-bold">
                  <Nav.Link href="#action1">Home</Nav.Link>
                  <Nav.Link href="#action2">Tentang Kami</Nav.Link>
                  <Nav.Link href="#action2">Film</Nav.Link>
                </Nav>
                <Form className="d-flex">
                  <Form.Control type="search" placeholder="Cari Film" className="me-2" aria-label="Search" />
                  <button className="btn-lihat fw-bold">Cari</button>
                </Form>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </div>
  );
};

export default NavigationBar;
