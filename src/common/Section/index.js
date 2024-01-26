import { SectionHeader, Container, StyledSection } from "./styled";

const Section = ({ title, body, extrHeaderContent }) => (
  <StyledSection>
    <Container $grid>
      <SectionHeader>{title}</SectionHeader>
      {extrHeaderContent}
    </Container>
    <Container>{body}</Container>
  </StyledSection>
);

export default Section;
