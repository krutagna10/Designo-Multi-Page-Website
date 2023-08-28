import Layout from "../../layout/Layout.jsx";
import DesignHero from "../../components/DesignHero/DesignHero.jsx";
import CallToAction from "../../components/CallToAction/CallToAction.jsx";
import Services from "../../components/Services/Services.jsx";
import { services } from "../../data/shared.js";
import { cards } from "../../data/web-design.js";
import Section from "../../components/UI/Section/Section.jsx";
import Container from "../../components/UI/Container/Container.jsx";
import Cards from "../../components/Cards/Cards.jsx";

function WebDesign() {
  const webServices = services.filter(
    (service) => service.title !== "Web Design",
  );

  return (
    <Layout>
      <DesignHero
        title="Web design"
        description="We build websites that serve as powerful marketing tools and bring memorable brand experiences"
      />
      <Cards cards={cards} />
      <Section className="services-section">
        <Container className="grid gap grid-cols-2">
          <Services services={webServices} />
        </Container>
      </Section>
      <CallToAction />
    </Layout>
  );
}

export default WebDesign;
