import Layout from "../../layout/Layout.jsx";
import { Link } from "react-router-dom";
import CallToAction from "../../components/CallToAction/CallToAction.jsx";
import heroPhoneImage from "../../assets/home/desktop/image-hero-phone.png";
import illustrationPassionate from "../../assets/home/desktop/illustration-passionate.svg";
import illustrationResourceFul from "../../assets/home/desktop/illustration-resourceful.svg";
import illustrationFriendly from "../../assets/home/desktop/illustration-friendly.svg";
import "./Home.css";

function Home() {
  return (
    <Layout>
      <section className="hero-section hero-padding section-padding-inline">
        <div className="hero grid background-peach">
          <div className="hero__description hero-flow">
            <h1 className="hero__heading primary-heading text-white">
              Award-winning custom designs and digital branding solutions
            </h1>
            <p className="hero__text font-size-100 text-white">
              With over 10 years in the industry, we are experienced in creating
              fully responsive websites, app design, and engaging brand
              experiences. Find out more about our services.
            </p>
            <Link
              to="/about"
              className="btn btn--light hero__btn font-size-100"
            >
              Learn more
            </Link>
          </div>
          <div className="hero__image-wrapper">
            <img
              src={heroPhoneImage}
              className="hero__image"
              alt="phone image"
            />
          </div>
        </div>
      </section>
      <section className="services-section section-padding">
        <div className="container grid grid--2-columns">
          <Link
            to="/web-design"
            className="service service--web grid grid--content-center grid-gap"
          >
            <span className="service__heading secondary-heading letter-spacing-1">
              Web Design
            </span>
            <span className="service__text font-size-100 letter-spacing-2">
              View Projects <span className="service__link-symbol">&#62;</span>
            </span>
          </Link>

          <Link
            to="app-design"
            className="service service--app grid grid--content-center grid-gap"
          >
            <span className="service__heading secondary-heading letter-spacing-1">
              App Design
            </span>
            <span className="service__text font-size-100 letter-spacing-2">
              View Projects <span className="service__link-symbol">&#62;</span>
            </span>
          </Link>

          <Link
            to="graphic-design"
            className="service service--graphic grid grid--content-center grid-gap"
          >
            <span className="service__heading secondary-heading letter-spacing-1">
              Graphic Design
            </span>
            <span className="service__text font-size-100 letter-spacing-2">
              View Projects <span className="service__link-symbol">&#62;</span>
            </span>
          </Link>
        </div>
      </section>
      <section className="features-section section-padding">
        <div className="container grid grid--3-columns">
          <div className="feature grid">
            <div className="feature__image-wrapper">
              <img
                src={illustrationPassionate}
                className="feature__image"
                alt=""
                aria-hidden="true"
              />
            </div>
            <div className="feature__text-content flow text-align-center">
              <h2 className="feature__heading tertiary-heading font-size-200 uppercase letter-spacing-2">
                Passionate
              </h2>
              <p className="feature__text">
                Each project starts with an in-depth brand research to ensure we
                only create products that serve a purpose. We merge art, design,
                and technology into exciting new solutions
              </p>
            </div>
          </div>
          <div className="feature grid">
            <div className="feature__image-wrapper">
              <img
                src={illustrationResourceFul}
                className="feature__image"
                alt=""
                aria-hidden="true"
              />
            </div>
            <div className="feature__text-content flow text-align-center">
              <h2 className="feature__heading tertiary-heading font-size-200 uppercase letter-spacing-2">
                Resourceful
              </h2>
              <p className="feature__text">
                Everything that we do has a strategic purpose. We use an agile
                approach in all of our projects and value customer
                collaboration. It guarantees superior results that fulfill our
                clients’ needs.
              </p>
            </div>
          </div>
          <div className="feature grid">
            <div className="feature__image-wrapper">
              <img
                src={illustrationFriendly}
                className="feature__image"
                alt=""
                aria-hidden="true"
              />
            </div>
            <div className="feature__text-content flow text-align-center">
              <h2 className="feature__heading tertiary-heading font-size-200 uppercase letter-spacing-2">
                Friendly
              </h2>
              <p className="feature__text font-size-100">
                We are a group of enthusiastic folks who know how to put people
                first. Our success depends on our customers, and we strive to
                give them the best experience a company can provide.
              </p>
            </div>
          </div>
        </div>
      </section>
      <CallToAction />
    </Layout>
  );
}

export default Home;
