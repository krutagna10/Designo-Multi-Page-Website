import { Link } from "react-router-dom";
import illustrationCanada from "../../assets/shared/desktop/illustration-canada.svg";
import illustrationAustralia from "../../assets/shared/desktop/illustration-australia.svg";
import illustrationUnitedKingdom from "../../assets/shared/desktop/illustration-united-kingdom.svg";
import "./LocationsCard.css";
import Section from "../UI/Section/Section.jsx";
import Container from "../UI/Container/Container.jsx";

const locations = [
  {
    title: "Canada",
    image: illustrationCanada,
  },
  {
    title: "United Kingdom",
    image: illustrationUnitedKingdom,
  },
  {
    title: "Australia",
    image: illustrationAustralia,
  },
];

function LocationsCard() {
  return (
    <>
      <Section className="locations-section">
        <Container className="locations grid">
          {locations.map((location, index) => (
            <div
              key={index}
              className="locations__item flex flex-col items-center"
            >
              <div className="locations__image-wrapper">
                <img
                  src={location.image}
                  className="locations__image"
                  alt=""
                  aria-hidden="true"
                />
              </div>
              <div className="locations__text-content grid place-content-center text-center">
                <h3 className="locations__heading tertiary-title text-dark-grey text-uppercase letter-spacing-2">
                  {location.title}
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

export default LocationsCard;
