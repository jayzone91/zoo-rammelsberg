import { Container } from "react-bootstrap";

export default function Footer() {
  return (
    <Container fluid className="text-center">
      <small className="font-secondary">
        &copy; 2023 - Johannes Kirchner - Betreiber und Inhaber des Zoos: Thomas
        & Monika Schwenk - E-Mail:
        <a href="mailto:info@zoo-rammelsberg.de">info@zoo-rammelsberg.de</a>
      </small>
    </Container>
  );
}
