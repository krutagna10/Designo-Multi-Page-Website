import { Link } from "react-router-dom";
import Section from "../UI/Section/Section.jsx";
import Container from "../UI/Container/Container.jsx";
import { countries } from "../../data/shared.js";
import "./CountryCards.css";

function CountryCards() {
  return (
    <>
      <Section>
        <Container className="grid grid-cols-3 gap">
          {countries.map((country, index) => (
            <div key={index} className="country grid place-items-center">
              <div className="country__image-wrapper">
                <img src={country.image} alt="" aria-hidden="true" />
              </div>
              <div className="country__content grid place-items-center gap text-center">
                <h3 className="fs-200 text-dark-grey text-uppercase">
                  {country.title}
                </h3>
                <Link
                  to="/locations"
                  className="link link--dark locations__btn"
                >
                  See Location
                </Link>
              </div>
            </div>
          ))}
        </Container>
      </Section>
    </>
  );
}

export default CountryCards;
