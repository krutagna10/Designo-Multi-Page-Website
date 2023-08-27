import Layout from "../../layout/Layout.jsx";
import DesignHero from "../../components/DesignHero/DesignHero.jsx";
import Card from "../../components/Card/Card.jsx";
import Service from "../../components/Service/Service.jsx";
import CallToAction from "../../components/CallToAction/CallToAction.jsx";
import { cards } from "../../data/app-design.js";
import { services } from "../../data/shared.js";

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
      <section className="cards-section section-padding">
        <div className="container grid grid-cols-3">
          {cards.map((card, index) => (
            <Card key={index} {...card} />
          ))}
        </div>
      </section>
      <section className="services__section section-padding">
        <div className="container grid grid-cols-2">
          {appServices.map((service, index) => (
            <Service
              key={index}
              title={service.title}
              to={service.to}
              className={service.className}
            />
          ))}
        </div>
      </section>
      <CallToAction />
    </Layout>
  );
}

export default AppDesign;
