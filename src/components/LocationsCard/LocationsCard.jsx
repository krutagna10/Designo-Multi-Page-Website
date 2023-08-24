import { Link } from "react-router-dom";
import illustrationCanada from "../../assets/shared/desktop/illustration-canada.svg";
import illustrationAustralia from "../../assets/shared/desktop/illustration-australia.svg";
import illustrationUnitedKingdom from "../../assets/shared/desktop/illustration-united-kingdom.svg";
import "./LocationsCard.css";

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
      <section className="locations-section section-padding section-padding-inline">
        <div className="container locations grid">
          {locations.map((location, index) => (
            <div
              key={index}
              className="locations__item flex flex--column flex--align-center"
            >
              <div className="locations__image-wrapper">
                <img
                  src={location.image}
                  className="locations__image"
                  alt=""
                  aria-hidden="true"
                />
              </div>
              <div className="locations__text-content grid grid--items-center text-align-center">
                <h3 className="locations__heading tertiary-heading text-dark-grey uppercase letter-spacing-2">
                  {location.title}
                </h3>
                <Link to="/locations" className="btn btn--dark locations__btn">
                  See Location
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default LocationsCard;
