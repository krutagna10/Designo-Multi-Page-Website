import Layout from "../../layout/Layout.jsx";
import CallToAction from "../../components/CallToAction/CallToAction.jsx";
import heroPhoneImage from "../../assets/home/desktop/image-hero-phone-cropped.png";
import Features from "../../components/Features/Features.jsx";
import Services from "../../components/Services/Services.jsx";
import Container from "../../components/UI/Container/Container.jsx";
import Section from "../../components/UI/Section/Section.jsx";
import CustomLink from "../../components/UI/CustomLink/CustomLink.jsx";
import { services } from "../../data/shared.js";
import "./Home.css";
import Wrapper from "../../components/UI/Wrapper/Wrapper.jsx";

function Home() {
  return (
    <Layout>
      <Section className="hero-section">
        <Wrapper>
          <Container className="hero grid grid-cols-2 gap bg-peach">
            <div className="hero__content grid gap place-content-center">
              <h1 className="fs-500">
                Award-winning custom designs and digital branding solutions
              </h1>
              <p>
                With over 10 years in the industry, we are experienced in
                creating fully responsive websites, app design, and engaging
                brand experiences. Find out more about our services.
              </p>
              <CustomLink to="/about" className="hero__link link--light">
                Learn More
              </CustomLink>
            </div>
            <div className="hero__image-wrapper grid place-content-center">
              <img className="hero__image" src={heroPhoneImage} alt="Phone" />
            </div>
          </Container>
        </Wrapper>
      </Section>
      <Section className="services-section">
        <Container className="services--home grid gap grid-cols-2">
          <Services services={services} />
        </Container>
      </Section>
      <Features />
      <CallToAction />
    </Layout>
  );
}

export default Home;
