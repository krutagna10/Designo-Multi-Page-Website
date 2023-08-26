import Layout from "../../layout/Layout.jsx";
import HeroDesign from "../../components/HeroDesign/HeroDesign.jsx";
import Card from "../../components/Card/Card.jsx";
import Service from "../../components/Service/Service.jsx";
import CallToAction from "../../components/CallToAction/CallToAction.jsx";
import airFilterImage from "../../assets/app-design/desktop/image-airfilter.jpg";
import eyecamImage from "../../assets/app-design/desktop/image-eyecam.jpg";
import faceItImage from "../../assets/app-design/desktop/image-faceit.jpg";
import todoImage from "../../assets/app-design/desktop/image-todo.jpg";
import loopStudiosImage from "../../assets/app-design/desktop/image-loopstudios.jpg";

const CARDS = [
  {
    title: "Airfilter",
    description:
      "Solving the problem of poor indoor air quality by filtering the air",
    image: airFilterImage,
    alt: "Airfilter app",
  },
  {
    title: "Eyecam",
    description:
      "Product that lets you edit your favorite photos and videos at any time",
    image: eyecamImage,
    alt: "Eyecam app",
  },
  {
    title: "Faceit",
    description:
      "A state-of-the-art music player with high-resolution audio and DSP effects",
    image: faceItImage,
    alt: "Faceit app",
  },
  {
    title: "Todo",
    description: "A todo app that features cloud sync with light and dark mode",
    image: todoImage,
    alt: "Todo app",
  },
  {
    title: "Loopstudios",
    description: "A VR experience app made for Loopstudios",
    image: loopStudiosImage,
    alt: "Loopstudios website",
  },
];

const services = [
  {
    className: "service--web",
    title: "Web Design",
    to: "/web-design",
  },
  {
    className: "service--graphic",
    title: "Graphic Design",
    to: "/graphic-design",
  },
];

function AppDesign() {
  return (
    <Layout>
      <HeroDesign
        title="App design"
        description="Our mobile designs bring intuitive digital solutions to your customers right at their fingertips"
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

export default AppDesign;
