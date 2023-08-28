import errorIcon from "../../assets/contact/desktop/icon-error.svg";
import LocationsCard from "../../components/LocationsCard/LocationsCard.jsx";
import "./Contact.css";
import Section from "../../components/UI/Section/Section.jsx";
import Layout from "../../layout/Layout.jsx";
import Container from "../../components/UI/Container/Container.jsx";
import Wrapper from "../../components/UI/Wrapper/Wrapper.jsx";
import ContactForm from "../../components/ContactForm/ContactForm.jsx";

function Contact() {
  return (
    <Layout>
      <Section className="contact-section hero-section">
        <Wrapper>
          <Container className="contact container--rounded grid grid-cols-2 gap bg-peach">
            <div className="flow flex flex-col justify-center">
              <h1 className="fs-500">Contact us</h1>
              <p className="fs-100">
                Ready to take it to the next level? Let’s talk about your
                project or idea and find out how we can help your business grow.
                If you are looking for unique digital experiences that’s
                relatable to your users, drop us a line.
              </p>
            </div>
            <ContactForm />
          </Container>
        </Wrapper>
      </Section>
      <LocationsCard />
    </Layout>
  );
}

export default Contact;
