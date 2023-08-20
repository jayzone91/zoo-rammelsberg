import { useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse";
import NavbarToggle from "react-bootstrap/esm/NavbarToggle";
import { NavLink } from "react-router-dom";

export default function Menu() {
  const [expanded, setExpanded] = useState<boolean>(false);

  return (
    <Container fluid>
      <Navbar
        expand="lg"
        bg="light"
        className="bg-body-tertiary"
        expanded={expanded}
      >
        <Container>
          <NavbarToggle
            aria-controls="basic-navbar-nav"
            onClick={() => setExpanded(expanded ? false : true)}
          />
          <NavbarCollapse id="basic-navbar-nav">
            <Nav className="me-auto" variant="underline" fill>
              <NavLink
                className="nav-link"
                to="/"
                onClick={() => setExpanded(false)}
              >
                Start
              </NavLink>
              <NavLink
                className="nav-link"
                to="/Oeffnungszeiten"
                onClick={() => setExpanded(false)}
              >
                Öffnungszeiten
              </NavLink>
              <NavLink
                className="nav-link"
                to="/Zoo"
                onClick={() => setExpanded(false)}
              >
                Der Zoo
              </NavLink>
              <NavLink
                className="nav-link"
                to="/Ehrenbrief"
                onClick={() => setExpanded(false)}
              >
                Ehrenbrief
              </NavLink>
              <NavLink
                className="nav-link"
                to="/Anfahrt"
                onClick={() => setExpanded(false)}
              >
                Anfahrt
              </NavLink>
              <NavLink
                className="nav-link"
                to="/Links"
                onClick={() => setExpanded(false)}
              >
                Links
              </NavLink>
              <NavLink
                className="nav-link"
                to="/Impressum"
                onClick={() => setExpanded(false)}
              >
                Impressum
              </NavLink>
              <NavLink
                className="nav-link"
                to="/Datenschutz"
                onClick={() => setExpanded(false)}
              >
                Datenschutz
              </NavLink>
            </Nav>
          </NavbarCollapse>
        </Container>
      </Navbar>
    </Container>
  );
}
