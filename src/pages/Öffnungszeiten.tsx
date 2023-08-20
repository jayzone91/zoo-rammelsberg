import { Col, Container, Row } from "react-bootstrap";
import useTitle from "../hooks/useTitle";

export default function Öffnungszeiten() {
  useTitle("Öffnungszeiten");

  return (
    <Container fluid="sm" className="mt-5 text-center">
      <h1 className="mb-3">Öffnungszeiten</h1>
      <h2 className="mb-3">März - Oktober:</h2>
      <Container className="text-start align-content-center justify-content-center mb-3">
        <Row>
          <Col className="text-end">Dienstag - Freitag:</Col>
          <Col>14:00 - 18:00 Uhr</Col>
        </Row>
        <Row>
          <Col className="text-end">Samstag, Sonntag & Feiertage:</Col>
          <Col>10:00 - 18:00 Uhr</Col>
        </Row>
      </Container>

      <h2>November</h2>
      <Container className="text-start align-content-center justify-content-center mb-3">
        <Row>
          <Col className="text-end">Dienstag - Freitag:</Col>
          <Col>14:00 - 16:00 Uhr</Col>
        </Row>
        <Row>
          <Col className="text-end">Samstag, Sonntag & Feiertage:</Col>
          <Col>10:00 - 16:00 Uhr</Col>
        </Row>
      </Container>
      <h2 className="mb-3">Dezember - Februar</h2>
      <p>Winterpause</p>
    </Container>
  );
}
