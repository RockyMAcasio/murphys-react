'use client';

import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';

import {
  Container,
  Row,
  Col,
  Navbar,
  Nav,
  Image,
} from 'react-bootstrap';

import {
  Instagram,
  Facebook,
  Twitter,
} from 'react-bootstrap-icons';

// Component 1: Top Menu
function TopMenu() {
  return (
    <Navbar expand="lg" className="murphys-navbar" variant="dark">
      <Container>
        <Navbar.Brand href="#">
          <Image
            src="/murphys-logo.png"
            alt="Murphy's Bar and Grill"
            width={150}
            fluid
          />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="murphys-nav" />

        <Navbar.Collapse id="murphys-nav">
          <Nav className="ms-auto align-items-lg-center">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About Us</Nav.Link>
            <Nav.Link href="#stpatricks">St. Patrick&apos;s Day</Nav.Link>
            <Nav.Link href="#ordering">To Go Ordering</Nav.Link>
            <Nav.Link href="https://instagram.com">
              <Instagram />
            </Nav.Link>
            <Nav.Link href="https://facebook.com">
              <Facebook />
            </Nav.Link>
            <Nav.Link href="https://twitter.com">
              <Twitter />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

// Component 2: Middle Section
function MiddleSection() {
  return (
    <Container fluid className="murphys-middle" id="home">
      <Row className="h-100 justify-content-center align-items-center">
        <Col xs={11} md={8} lg={6} className="text-center">
          <section className="middle-content">
            <h2>
              Now accepting reservations for St Patrick&apos;s Day
            </h2>

            <h2>
              Please call 808-531-0422 for reservations
            </h2>

            <h2>
              St Patrick&apos;s Day To-Go Orders can be ordered
              on our website menu.
            </h2>
          </section>
        </Col>
      </Row>
    </Container>
  );
}

// Component 3: Footer
function Footer() {
  return (
    <footer className="murphys-footer">
      <Container>
        <Row>
          <Col xs={12} md={4}>
            <h6>Lunch</h6>
            <hr />
            <p>
              Monday - Friday: 11:00am - 2:30pm
              <br />
              Saturday - Sunday: Not open
            </p>
          </Col>

          <Col xs={12} md={4}>
            <h6>Bar</h6>
            <hr />
            <p>
              Monday - Friday: From 11:00am to closing
              <br />
              Saturday - Sunday: Not open
            </p>
          </Col>

          <Col xs={12} md={4}>
            <h6>Dinner</h6>
            <hr />
            <p>
              Monday - Friday: 5:00pm - 9:00pm
              <br />
              Saturday - Sunday: Not open
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

// Main Page
export default function Home() {
  return (
    <main>
      <TopMenu />
      <MiddleSection />
      <Footer />
    </main>
  );
}
