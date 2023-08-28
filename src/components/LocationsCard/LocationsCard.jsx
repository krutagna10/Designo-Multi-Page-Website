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
    title: "UK",
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
      <Section>
        <Container className="locations grid grid-cols-3 gap">
          {locations.map((location, index) => (
            <div key={index} className="grid place-items-center">
              <div className="locations__image-wrapper">
                <img src={location.image} alt="" aria-hidden="true" />
              </div>
              <div className="locations__content grid place-items-center gap text-center">
                <h3 className="locations__title fs-200 text-dark-grey text-uppercase">
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
