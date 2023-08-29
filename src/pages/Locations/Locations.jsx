import Layout from "../../layout/Layout.jsx";
import CallToAction from "../../components/CallToAction/CallToAction.jsx";
import LocationCards from "../../components/LocationCards/LocationCards.jsx";
import locations from "../../data/locations.js";
import "./Locations.css";

function Locations() {
  return (
    <Layout>
      <LocationCards locations={locations} />
      <CallToAction />
    </Layout>
  );
}

export default Locations;
