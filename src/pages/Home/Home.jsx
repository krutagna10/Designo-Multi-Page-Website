import { Link } from "react-router-dom";
import Layout from "../../layout/Layout.jsx";
import CallToAction from "../../components/CallToAction/CallToAction.jsx";
import heroPhoneImage from "../../assets/home/desktop/image-hero-phone.png";
import Features from "../../components/Features/Features.jsx";
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
      <Features />
      <CallToAction />
    </Layout>
  );
}

export default Home;
