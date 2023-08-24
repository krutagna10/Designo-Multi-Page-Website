import Layout from "../../layout/Layout.jsx";
import HeroDesign from "../../components/HeroDesign/HeroDesign.jsx";
import Card from "../../components/Card/Card.jsx";
import Service from "../../components/Service/Service.jsx";
import CallToAction from "../../components/CallToAction/CallToAction.jsx";
import changeImage from "../../assets/graphic-design/desktop/image-change.jpg";
import boxedWaterImage from "../../assets/graphic-design/desktop/image-boxed-water.jpg";
import scienceImage from "../../assets/graphic-design/desktop/image-science.jpg";

const CARDS = [
  {
    title: "Tim Brown",
    description: "A book cover designed for Tim Brown’s new release, ‘Change’",
    image: changeImage,
    alt: "Timbrown bok",
  },
  {
    title: "Boxed water",
    description: "A simple packaging concept made for Boxed Water",
    image: boxedWaterImage,
    alt: "Boxed Water",
  },
  {
    title: "Science!",
    description: "A poster made in collaboration with the Federal Art Project",
    image: scienceImage,
    alt: "Science",
  },
];

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
];

function GraphicDesign() {
  return (
    <Layout>
      <HeroDesign
        title="Graphic design"
        description="We deliver eye-catching branding materials that are tailored to meet your business objectives"
      />
      <section className="cards-section section-padding">
        <div className="container grid grid--3-columns">
          {CARDS.map((card, index) => (
            <Card key={index} {...card} />
          ))}
        </div>
      </section>
      <section className="services__section section-padding">
        <div className="container grid grid--2-columns">
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
      <CallToAction />
    </Layout>
  );
}

export default GraphicDesign;
