import Layout from "../../layout/Layout.jsx";
import DesignHero from "../../components/DesignHero/DesignHero.jsx";
import Services from "../../components/Services/Services.jsx";
import CallToAction from "../../components/CallToAction/CallToAction.jsx";
import { cards } from "../../data/app-design.js";
import { services } from "../../data/shared.js";
import Cards from "../../components/Cards/Cards.jsx";
import Section from "../../components/UI/Section/Section.jsx";
import Container from "../../components/UI/Container/Container.jsx";

function AppDesign() {
  const appServices = services.filter(
    (service) => service.title !== "App Design",
  );

  return (
    <Layout>
      <DesignHero
        title="App design"
        description="Our mobile designs bring intuitive digital solutions to your customers right at their fingertips"
      />
      <Cards cards={cards} />
      <Section className="services-section">
        <Container className="grid gap grid-cols-2">
          <Services services={appServices} />
        </Container>
      </Section>
      <CallToAction />
    </Layout>
  );
}

export default AppDesign;
