import Layout from "../../layout/Layout.jsx";
import DesignHero from "../../components/DesignHero/DesignHero.jsx";
import Card from "../../components/Card/Card.jsx";
import Services from "../../components/Services/Services.jsx";
import CallToAction from "../../components/CallToAction/CallToAction.jsx";
import { services } from "../../data/shared.js";
import { cards } from "../../data/graphic-design.js";
import Cards from "../../components/Cards/Cards.jsx";
import Section from "../../components/UI/Section/Section.jsx";
import Container from "../../components/UI/Container/Container.jsx";

function GraphicDesign() {
  const graphicServices = services.filter(
    (service) => service.title !== "Graphic Design",
  );

  return (
    <Layout>
      <DesignHero
        title="Graphic design"
        description="We deliver eye-catching branding materials that are tailored to meet your business objectives"
      />
      <Cards cards={cards} />
      <Section className="services-section">
        <Container className="grid gap grid-cols-2">
          <Services services={graphicServices} />
        </Container>
      </Section>
      <CallToAction />
    </Layout>
  );
}

export default GraphicDesign;
