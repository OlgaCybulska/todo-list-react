import { SectionHeader, Container } from "./styled";

const Section = ({ title, body, extrHeaderContent }) => (
  <section>
    <Container $grid>
      <SectionHeader>{title}</SectionHeader>
      {extrHeaderContent}
    </Container>
    <Container>{body}</Container>
  </section>
);

export default Section;
