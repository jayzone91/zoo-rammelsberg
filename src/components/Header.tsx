import { Container, Image } from "react-bootstrap";

export default function Header() {
  return (
    <Container fluid>
      <Image
        fluid
        rounded
        src="/Images/Banner.webp"
        alt="Eingangsbereich des Zoos"
      />
    </Container>
  );
}
