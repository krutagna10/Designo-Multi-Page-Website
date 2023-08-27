import Section from "../UI/Section/Section.jsx";
import Container from "../UI/Container/Container.jsx";
import Card from "../Card/Card.jsx";

function Cards({ cards }) {
  return (
    <Section className="cards-section">
      <Container className="container grid gap grid-cols-3">
        {cards.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </Container>
    </Section>
  );
}

export default Cards;
