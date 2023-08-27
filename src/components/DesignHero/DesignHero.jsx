import Section from "../UI/Section/Section.jsx";
import Container from "../UI/Container/Container.jsx";
import "./DesignHero.css";
import Wrapper from "../UI/Wrapper/Wrapper.jsx";

function DesignHero({ title, description }) {
  return (
    <Section>
      <Wrapper>
        <Container className="design-hero grid place-items-center bg-peach text-center">
          <div className="design-hero__content flow">
            <h1 className="primary-title text-white">{title}</h1>
            <p className="fs-100 text-white"> {description}</p>
          </div>
        </Container>
      </Wrapper>
    </Section>
  );
}

export default DesignHero;
