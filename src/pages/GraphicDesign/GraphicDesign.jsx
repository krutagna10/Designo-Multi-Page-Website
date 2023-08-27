import Layout from "../../layout/Layout.jsx";
import DesignHero from "../../components/DesignHero/DesignHero.jsx";
import Card from "../../components/Card/Card.jsx";
import Service from "../../components/Service/Service.jsx";
import CallToAction from "../../components/CallToAction/CallToAction.jsx";
import { services } from "../../data/shared.js";
import { cards } from "../../data/graphic-design.js";

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
      <section className="cards-section section-padding">
        <div className="container grid grid-cols-3">
          {cards.map((card, index) => (
            <Card key={index} {...card} />
          ))}
        </div>
      </section>
      <section className="services__section section-padding">
        <div className="container grid grid-cols-2">
          {graphicServices.map((service, index) => (
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

export default GraphicDesign;
