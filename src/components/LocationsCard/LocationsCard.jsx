import { Link } from "react-router-dom";
import illustrationCanada from "../../assets/shared/desktop/illustration-canada.svg";
import illustrationAustralia from "../../assets/shared/desktop/illustration-australia.svg";
import illustrationUnitedKingdom from "../../assets/shared/desktop/illustration-united-kingdom.svg";
import "./LocationsCard.css";

function LocationsCard() {
  return (
    <>
      <section className="locations-section section-padding section-padding-inline">
        <div className="container locations grid">
          <div className="locations__item flex flex--column flex--align-center">
            <div className="locations__image-wrapper">
              <img
                src={illustrationCanada}
                className="locations__image"
                alt=""
                aria-hidden="true"
              />
            </div>
            <div className="locations__text-content grid grid--items-center text-align-center">
              <h3 className="locations__heading tertiary-heading text-dark-grey uppercase letter-spacing-2">
                Canada
              </h3>
              <Link to="/locations" className="btn btn--dark locations__btn">
                See Location
              </Link>
            </div>
          </div>

          <div className="locations__item flex flex--column flex--align-center">
            <div className="locations__image-wrapper">
              <img
                src={illustrationAustralia}
                className="locations__image"
                alt=""
                aria-hidden="true"
              />
            </div>
            <div className="locations__text-content grid grid--items-center text-align-center">
              <h3 className="locations__heading tertiary-heading text-dark-grey uppercase letter-spacing-2">
                Australia
              </h3>
              <Link to="/locations" className="btn btn--dark locations__btn">
                See Location
              </Link>
            </div>
          </div>

          <div className="locations__item flex flex--column flex--align-center">
            <div className="locations__image-wrapper">
              <img
                src={illustrationUnitedKingdom}
                className="locations__image"
                alt=""
                aria-hidden="true"
              />
            </div>
            <div className="locations__heading locations__text-content grid grid--items-center text-align-center">
              <h3 className="tertiary-heading text-dark-grey uppercase letter-spacing-2">
                United Kingdom
              </h3>
              <Link to="/locations" className="btn btn--dark locations__btn">
                See Location
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default LocationsCard;
