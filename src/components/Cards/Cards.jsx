import Section from "../UI/Section/Section.jsx";
import Container from "../UI/Container/Container.jsx";
import { Link } from "react-router-dom";
import "./Cards.css";

function Cards({ cards }) {
  return (
    <Section className="cards-section">
      <Container className="container grid gap grid-cols-3">
        {cards.map((card, index) => (
          <Link key={index} className="card__link bg-very-light-peach" to="#">
            <span className="card__image-wrapper">
              <img src={card.image} className="card__image" alt={card.alt} />
            </span>
            <span className="card__content text-center flow">
              <span className="card__title fs-200 text-uppercase text-peach">
                {card.title}
              </span>
              <span className="card__description text-dark-grey fs-100">
                {card.description}
              </span>
            </span>
          </Link>
        ))}
      </Container>
    </Section>
  );
}

export default Cards;
