import Layout from "../../layout/Layout.jsx";
import DesignHero from "../../components/DesignHero/DesignHero.jsx";
import CallToAction from "../../components/CallToAction/CallToAction.jsx";
import Card from "../../components/Card/Card.jsx";
import expressImage from "../../assets/web-design/desktop/image-express.jpg";
import transferImage from "../../assets/web-design/desktop/image-transfer.jpg";
import photonImage from "../../assets/web-design/desktop/image-photon.jpg";
import builderImage from "../../assets/web-design/desktop/image-builder.jpg";
import blogrImage from "../../assets/web-design/desktop/image-blogr.jpg";
import campImage from "../../assets/web-design/desktop/image-camp.jpg";
import Service from "../../components/Service/Service.jsx";

const CARDS = [
  {
    title: "Express",
    description: "A multi-carrier shipping website for ecommerce businesses",
    image: expressImage,
    alt: "Express website",
  },
  {
    title: "Transfer",
    description:
      "Site for low-cost money transfers and sending money within seconds",
    image: transferImage,
    alt: "Transfer website",
  },
  {
    title: "Photon",
    description:
      "A state-of-the-art music player with high-resolution audio and DSP effects",
    image: photonImage,
    alt: "Photon website",
  },
  {
    title: "Builder",
    description:
      "Connects users with local contractors based on their location",
    image: builderImage,
    alt: "Builder website",
  },
  {
    title: "Blogr",
    description:
      "Blogr is a platform for creating an online blog or publication",
    image: blogrImage,
    alt: "Blogr website",
  },
  {
    title: "Camp",
    description:
      "Get expert training in coding, data, design, and digital marketing",
    image: campImage,
    alt: "Camp website",
  },
];

const services = [
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

function WebDesign() {
  return (
    <Layout>
      <DesignHero
        title="Web design"
        description="We build websites that serve as powerful marketing tools and bring memorable brand experiences"
      />
      <section className="cards-section section-padding">
        <div className="container grid grid-cols-3">
          {CARDS.map((card, index) => (
            <Card key={index} {...card} />
          ))}
        </div>
      </section>
      <section className="services__section section-padding">
        <div className="container grid grid-cols-2">
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

export default WebDesign;
