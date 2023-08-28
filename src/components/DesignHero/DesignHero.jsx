import Section from "../UI/Section/Section.jsx";
import Container from "../UI/Container/Container.jsx";
import "./DesignHero.css";
import Wrapper from "../UI/Wrapper/Wrapper.jsx";

function DesignHero({ title, description }) {
  return (
    <Section>
      <Wrapper>
        <Container className="design-hero grid place-content-center gap bg-peach text-center">
          <div className="flow">
            <h1 className="fs-500">{title}</h1>
            <p className="fs-100"> {description}</p>
          </div>
        </Container>
      </Wrapper>
    </Section>
  );
}

export default DesignHero;
