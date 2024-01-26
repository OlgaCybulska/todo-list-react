import Section from "../../common/Section";
import Header from "../../common/Header";
import Container from "../../common/Container";

export default () => (
  <Container>
    <Header title="O autorze" />

    <Section
      title="Olga Cybulska"
      body={
        <>
          Jestem absolwentką <strong>Politechniki Gdańskiej</strong> na
          kierunkach:
          <ul>
            <li>Matematyka </li>
            <li>Mechanika i Budowa Maszyn.</li>
          </ul>{" "}
          Od dwóch lat zajmuję się prowadzeniem zajęć indywidualnych z
          matematyki.
          <p>Wcześniej pracowałam jako konstruktor.</p> Kilka lat wcześniej
          chciałam uczyć się programowania, ale zawsze było coś "ważniejszego"
          😆
          <p>
            Po obejrzeniu reklamy na Tik-toku stwierdziłam, że nadszedł
            odpowieni czas, żeby zrealiwoać swoje marzenie!
          </p>
        </>
      }
    />
  </Container>
);
