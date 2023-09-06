import { Container } from "react-bootstrap";
import useTitle from "../hooks/useTitle";

export default function Impressum() {
  useTitle("Impressum");
  return <Container>
    <h1 className="text-center">Impressum</h1>
  </Container>;
}
