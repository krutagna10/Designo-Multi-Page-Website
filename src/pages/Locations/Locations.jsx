import Layout from "../../layout/Layout.jsx";
import CallToAction from "../../components/CallToAction/CallToAction.jsx";
import "./Locations.css";
import Section from "../../components/UI/Section/Section.jsx";
import Container from "../../components/UI/Container/Container.jsx";
import Wrapper from "../../components/UI/Wrapper/Wrapper.jsx";
import MapCards from "../../components/MapCards/MapCards.jsx";
import locations from "../../data/locations.js";

function Locations() {
  return (
    <Layout>
      <MapCards locations={locations} />
      <CallToAction />
    </Layout>
  );
}

export default Locations;
