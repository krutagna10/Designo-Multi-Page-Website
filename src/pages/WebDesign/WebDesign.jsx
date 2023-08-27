import Layout from "../../layout/Layout.jsx";
import DesignHero from "../../components/DesignHero/DesignHero.jsx";
import CallToAction from "../../components/CallToAction/CallToAction.jsx";
import Card from "../../components/Card/Card.jsx";
import Service from "../../components/Service/Service.jsx";
import { services } from "../../data/shared.js";
import { cards } from "../../data/web-design.js";

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
      <section className="cards-section section-padding">
        <div className="container grid grid-cols-3">
          {cards.map((card, index) => (
            <Card key={index} {...card} />
          ))}
        </div>
      </section>
      <section className="services__section section-padding">
        <div className="container grid grid-cols-2">
          {webServices.map((service, index) => (
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

export default WebDesign;
