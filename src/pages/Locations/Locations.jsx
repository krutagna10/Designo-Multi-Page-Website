import Layout from "../../layout/Layout.jsx";
import CallToAction from "../../components/CallToAction/CallToAction.jsx";
import "./Locations.css";
import Section from "../../components/UI/Section/Section.jsx";

function Locations() {
  return (
    <Layout>
      <Section className="location-section hero-section">
        <div className="location location--canada container grid">
          <div className="location__text-content bg-very-light-peach flow flex flex-col justify-center">
            <h2 className="location__heading secondary-title text-peach">
              Canada
            </h2>
            <div className="location__contact-wrapper grid">
              <div className="location__address-wrapper fs-100 text-dark-grey">
                <p className="location__address text-bold">
                  Designo Central Office
                </p>
                <p className="location__address">3886 Wellington Street</p>
                <p className="location__address">Toronto, Ontario M9C 3J5</p>
              </div>

              <div className="location__contact-box fs-100 text-dark-grey">
                <p className="location__contact-heading text-bold">Contact</p>
                <a
                  className="location__contact-link"
                  href="tel: +1 253-863-8967"
                >
                  P : +1 253-863-8967
                </a>
                <a
                  className="location__contact-link"
                  href="mailto:contact@designo.co"
                >
                  M : contact@designo.co
                </a>
              </div>
            </div>
          </div>
          <div className="location__image-wrapper"></div>
        </div>

        <div className="location location--australia container grid">
          <div className="location__image-wrapper"></div>
          <div className="location__text-content bg-very-light-peach flow flex flex-col justify-center">
            <h2 className="location__heading secondary-title text-peach">
              Australia
            </h2>
            <div className="location__contact-wrapper grid">
              <div className="location__address-wrapper fs-100 text-dark-grey">
                <p className="location__address text text-bold">
                  Designo AU Office
                </p>
                <p className="location__address">19 Balonne Street</p>
                <p className="location__address">New South Wales 2443</p>
              </div>

              <div className="location__contact-box fs-100 text-dark-grey">
                <p className="location__contact-heading text-bold">Contact</p>
                <a className="location__contact-link" href="tel:(02) 6720 9092">
                  P : (02) 6720 9092
                </a>
                <a
                  className="location__contact-link"
                  href="mailto:contact@designo.au"
                >
                  M : contact@designo.au
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="location location--uk container grid">
          <div className="location__text-content bg-very-light-peach flow flex flex-col justify-center">
            <h2 className="location__heading secondary-title text-peach">
              United Kingdom
            </h2>
            <div className="location__contact-wrapper grid">
              <div className="location__address-wrapper">
                <p className="location__address fs-100 text-dark-grey text-bold">
                  Designo UK Office
                </p>
                <p className="location__address fs-100 text-dark-grey">
                  13 Colorado Way
                </p>
                <p className="location__address fs-100 text-dark-grey">
                  Rhyd-y-fro SA8 9GA
                </p>
              </div>

              <div className="location__contact-box">
                <p className="location__contact-heading fs-100 text-dark-grey text-bold">
                  Contact{" "}
                </p>
                <a
                  className="location__contact-link fs-100 text-dark-grey"
                  href="tel: 078 3115 1400"
                >
                  P : 078 3115 1400
                </a>
                <a
                  className="location__contact-link fs-100 text-dark-grey"
                  href="mailto: contact@designo.uk"
                >
                  M : contact@designo.uk
                </a>
              </div>
            </div>
          </div>
          <div className="location__image-wrapper"></div>
        </div>
      </Section>
      <CallToAction />
    </Layout>
  );
}

export default Locations;
