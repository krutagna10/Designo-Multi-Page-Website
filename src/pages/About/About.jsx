import Layout from "../../layout/Layout.jsx";
import LocationsCard from "../../components/LocationsCard/LocationsCard.jsx";
import CallToAction from "../../components/CallToAction/CallToAction.jsx";
import "./About.css";
import Section from "../../components/UI/Section/Section.jsx";
import Container from "../../components/UI/Container/Container.jsx";
import Wrapper from "../../components/UI/Wrapper/Wrapper.jsx";
import aboutHeroMobileImage from "../../assets/about/mobile/image-about-hero.jpg";
import aboutHeroTabletImage from "../../assets/about/tablet/image-about-hero.jpg";
import aboutHeroDesktopImage from "../../assets/about/desktop/image-about-hero.jpg";

function About() {
  return (
    <Layout>
      <Section className="about-section hero-section">
        <Wrapper>
          <Container className="about about--hero bg-peach grid">
            <picture>
              <source media="(min-width:48em)" srcSet={aboutHeroDesktopImage} />
              <source media="(min-width:32em)" srcSet={aboutHeroTabletImage} />
              <img
                src={aboutHeroMobileImage}
                alt="A Desk filled with electronic items"
                className="about__image"
              />
            </picture>
            <div className="about__text-content flow">
              <h1 className="about__heading primary-title text-white">
                About Us
              </h1>
              <p className="about__text fs-100 text-white">
                Founded in 2010, we are a creative agency that produces lasting
                results for our clients. We’ve partnered with many startups,
                corporations, and nonprofits alike to craft designs that make
                real impact. We’re always looking forward to creating brands,
                products, and digital experiences that connect with our clients’
                audiences.
              </p>
            </div>
          </Container>
        </Wrapper>
      </Section>
      <Section className="talent-section">
        <Wrapper>
          <Container className="about about--talent bg-very-light-peach grid">
            <div className="about__image-wrapper about__image-wrapper--talent"></div>
            <div className="about__text-content flow">
              <h1 className="about__heading secondary-title text-peach">
                World-class talent
              </h1>
              <p className="about__text fs-100 text-dark-grey">
                We are a crew of strategists, problem-solvers, and
                technologists. Every design is thoughtfully crafted from concept
                to launch, ensuring success in its given market. We are
                constantly updating our skills in a myriad of platforms.
              </p>
              <p className="about__text fs-100 text-dark-grey">
                Our team is multi-disciplinary and we are not merely interested
                in form — content and meaning are just as important. We give
                great importance to craftsmanship, service, and prompt delivery.
                Clients have always been impressed with our high-quality
                outcomes that encapsulates their brand’s story and mission.
              </p>
            </div>
          </Container>
        </Wrapper>
      </Section>
      <LocationsCard />
      <Section className="deal-section">
        <Wrapper>
          <Container className="about about--deal grid bg-very-light-peach">
            <div className="about__image-wrapper about__image-wrapper--deal"></div>
            <div className="about__text-content flow">
              <h1 className="about__heading secondary-title text-peach">
                The real deal
              </h1>
              <p className="about__text fs-100 text-dark-grey">
                As strategic partners in our clients’ businesses, we are ready
                to take on any challenge as our own. Solving real problems
                require empathy and collaboration, and we strive to bring a
                fresh perspective to every opportunity. We make design and
                technology more accessible and give you tools to measure
                success.
              </p>
              <p className="about__text fs-100 text-dark-grey">
                We are visual storytellers in appealing and captivating ways. By
                combining business and marketing strategies, we inspire
                audiences to take action and drive real results.
              </p>
            </div>
          </Container>
        </Wrapper>
      </Section>
      <CallToAction />
    </Layout>
  );
}

export default About;
