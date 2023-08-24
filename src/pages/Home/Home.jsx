import { Link } from "react-router-dom";
import Layout from "../../layout/Layout.jsx";
import CallToAction from "../../components/CallToAction/CallToAction.jsx";
import heroPhoneImage from "../../assets/home/desktop/image-hero-phone.png";
import Features from "../../components/Features/Features.jsx";
import "./Home.css";
import Service from "../../components/Service/Service.jsx";

const services = [
  {
    className: "service--web",
    title: "Web Design",
    to: "/web-design",
  },
  {
    className: "service--app",
    title: "App Design",
    to: "/app-design",
  },
  {
    className: "service--graphic",
    title: "Graphic Design",
    to: "/graphic-design",
  },
];

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
      <section className="services__section section-padding">
        <div className="container service__container grid grid--2-columns">
          {services.map((service, index) => (
            <Service
              key={index}
              title={service.title}
              to={service.to}
              className={service.className}
            />
          ))}
        </div>
      </section>
      <Features />
      <CallToAction />
    </Layout>
  );
}

export default Home;
