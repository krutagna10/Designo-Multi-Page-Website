import illustrationPassionate from "../../assets/home/desktop/illustration-passionate.svg";
import illustrationResourceFul from "../../assets/home/desktop/illustration-resourceful.svg";
import illustrationFriendly from "../../assets/home/desktop/illustration-friendly.svg";
import "./Features.css";
import Section from "../UI/Section/Section.jsx";
import Container from "../UI/Container/Container.jsx";

const features = [
  {
    title: "Passionate",
    description:
      "Each project starts with an in-depth brand research to ensure we only create products that serve a purpose to customers.",
    image: illustrationPassionate,
  },
  {
    title: "Resourceful",
    description:
      "Everything that we do has a purpose. We use an agile approach in all of our projects and value customer needs.",
    image: illustrationResourceFul,
  },
  {
    title: "Friendly",
    description:
      "We are a group of enthusiastic folks who know how to put people first. Our success depends on our customers.",
    image: illustrationFriendly,
  },
];

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
