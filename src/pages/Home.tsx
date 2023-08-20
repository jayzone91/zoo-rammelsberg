import { Container } from "react-bootstrap";
import useTitle from "../hooks/useTitle";

export default function Home() {
  useTitle();

  return (
    <Container fluid="sm" className="mt-5">
      <h1 className="text-center">Zoo am Rammelsberg</h1>
      <h2 className="text-center">Familie Schwenk</h2>
      <p>
        Im Jahr 1974 wurde in Privatinitiative von Horst Schwenk mit Familie der
        Kasseler Kleintierzoo am Rammelsberg gegründet.
      </p>
      <p>
        Thomas und Monika Schwenk haben den Zoo im Jahr 1999 in zweiter
        Generation übernommen, mit weiterer Unterstützung der Eltern.
      </p>
      <p>Der Zoo ist in erster Linie Familienfreundlich.</p>
      <p>
        Neben Haustieren wie Eseln, Alpakas, Meerschweinchen, Haushühnern, Puten
        und Ziegen gibt es noch verschiedene Eulen, Emus, Nandus, Störche und
        Flamingos und sogar Weißbüscheläffchen sowie Riesenschlangen und andere
        Tiere zu bewundern.
      </p>
      <p>
        In den Volieren leben neben Aras, Sittichen und anderen Papageien auch
        einheimische Singvögel.
      </p>
      <p>
        Im kleinen Cafe am Eingang können Sie verschieden Getränke und Eis
        kaufen.
      </p>
    </Container>
  );
}
