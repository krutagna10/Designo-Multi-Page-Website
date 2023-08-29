import Section from "../UI/Section/Section.jsx";
import Wrapper from "../UI/Wrapper/Wrapper.jsx";
import Container from "../UI/Container/Container.jsx";
import "./LocationCards.css";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

function LocationCards({ locations }) {
  return (
    <Section className="location-section hero-section flow">
      {locations.map((location, index) => (
        <Wrapper key={index}>
          <Container className="location container--rounded location--canada grid">
            <MapContainer
              center={[location.lat, location.long]}
              zoom={13}
              scrollWheelZoom={false}
            >
              <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
              <Marker position={[location.lat, location.long]}>
                <Popup>
                  <strong>{location.office}</strong>
                  <br />
                  {location.street}
                  <br />
                  {location.city}
                </Popup>
              </Marker>
            </MapContainer>
            <div className="location__content bg-very-light-peach flow">
              <h2 className="fs-400 text-peach">{location.country}</h2>
              <div className="grid">
                <div>
                  <p className="text-dark-grey text-bold">{location.office}</p>
                  <p className="text-dark-grey">{location.street}</p>
                  <p className="text-dark-grey">{location.city}</p>
                </div>

                <div>
                  <p className="text-dark-grey text-bold">Contact</p>
                  <a
                    className="text-dark-grey location__contact-link"
                    href={`tel: ${location.phone}`}
                  >
                    P: {location.phone}
                  </a>
                  <a
                    className="text-dark-grey location__contact-link"
                    href={`mailto: ${location.email}`}
                  >
                    M: {location.email}
                  </a>
                </div>
              </div>
            </div>
          </Container>
        </Wrapper>
      ))}
    </Section>
  );
}

export default LocationCards;
