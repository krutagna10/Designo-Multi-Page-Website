import illustrationCanada from "../assets/shared/desktop/illustration-canada.svg";
import illustrationUnitedKingdom from "../assets/shared/desktop/illustration-united-kingdom.svg";
import illustrationAustralia from "../assets/shared/desktop/illustration-australia.svg";

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
  {
    className: "service--graphic",
    title: "Graphic Design",
    to: "/graphic-design",
  },
];

const countries = [
  {
    title: "Canada",
    image: illustrationCanada,
  },
  {
    title: "UK",
    image: illustrationUnitedKingdom,
  },
  {
    title: "Australia",
    image: illustrationAustralia,
  },
];

export { services, countries };
