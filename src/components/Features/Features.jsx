import Section from "../UI/Section/Section.jsx";
import Container from "../UI/Container/Container.jsx";
import { features } from "../../data/home.js";
import "./Features.css";

function Features() {
  return (
    <Section>
      <Container className="grid gap grid-cols-3">
        {features.map((feature, index) => (
          <div key={index} className="feature grid gap">
            <div className="feature__image-wrapper grid place-content-center">
              <img
                src={feature.image}
                className="feature__image"
                alt=""
                aria-hidden="true"
              />
            </div>
            <div className="flow text-center">
              <h2 className="feature__title fs-200 text-black fs-200 text-uppercase">
                {feature.title}
              </h2>
              <p className="text-black">{feature.description}</p>
            </div>
          </div>
        ))}
      </Container>
    </Section>
  );
}

export default Features;
