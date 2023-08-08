import Button from "../button/Button.tsx";
import {
  Col,
  Collapse,
  Nav,
  Navbar,
  NavbarBrand,
  NavItem,
  NavLink,
  Row,
} from "reactstrap";
import { useState } from "react";
import Hamburger from "hamburger-react";
import "./navbar.css";

function NavbarTransmicable() {
  const [isOpen, setOpen] = useState(false);
  const toggleNavbar = () => setOpen(!isOpen);

  return (
    <section>
      <Navbar container="lg" style={{ backgroundColor: "#b7d4dc" }}>
        <NavbarBrand>
          <Hamburger
            toggled={isOpen}
            toggle={toggleNavbar}
            color="#32667E"
            size={23}
          />
        </NavbarBrand>
        <Row
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            alignContent: "center",
          }}
        >
          <Col>
            <Button text="Contacto" action={() => {}} />
          </Col>
          <Col>
            <Button text="Descargas" action={() => {}} />
          </Col>
        </Row>
      </Navbar>
      <Navbar container="lg" style={{ backgroundColor: "#b7d4dc" }}>
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar>
            <NavItem>
              <NavLink href={"#page1"}>
                <b>Resultados de la evaluación del TransMiCable</b>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href={"#page2"}>
                <b>Qué es TransMiCable</b>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href={"#page3"}>
                <b>Linea del TransMiCable</b>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href={"#page4"}>
                <b>Objetivo del estudio TrUST</b>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href={"#page5"}>
                <b>Resultados estudio TrUST</b>
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </section>
  );
}

export default NavbarTransmicable;
