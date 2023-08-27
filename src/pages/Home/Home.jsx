import { Link } from "react-router-dom";
import Layout from "../../layout/Layout.jsx";
import CallToAction from "../../components/CallToAction/CallToAction.jsx";
import heroPhoneImage from "../../assets/home/desktop/image-hero-phone-cropped.png";
import Features from "../../components/Features/Features.jsx";
import "./Home.css";
import Service from "../../components/Service/Service.jsx";
import Container from "../../components/UI/Container/Container.jsx";
import Section from "../../components/UI/Section/Section.jsx";
import CustomLink from "../../components/UI/CustomLink/CustomLink.jsx";

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
      <Section className="hero-section">
        <Container className="hero grid gap bg-peach">
          <div className="hero__content grid gap place-content-center">
            <h1 className="fs-500">
              Award-winning custom designs and digital branding solutions
            </h1>
            <p>
              With over 10 years in the industry, we are experienced in creating
              fully responsive websites, app design, and engaging brand
              experiences. Find out more about our services.
            </p>
            <CustomLink to="/about" className="hero__link link--light">
              Learn More
            </CustomLink>
          </div>
          <div className="hero__image-wrapper grid place-content-center">
            <img className="hero__image" src={heroPhoneImage} alt="Phone" />
          </div>
        </Container>
      </Section>
      <Section>
        <Container className="service__container grid gap grid-cols-2">
          {services.map((service, index) => (
            <Service
              key={index}
              title={service.title}
              to={service.to}
              className={service.className}
            />
          ))}
        </Container>
      </Section>
      <Features />
      <CallToAction />
    </Layout>
  );
}

export default Home;
