import errorIcon from "../../assets/contact/desktop/icon-error.svg";
import LocationsCard from "../../components/LocationsCard/LocationsCard.jsx";
import "./Contact.css";
import Header from "../../components/Header/Header.jsx";
import Footer from "../../components/Footer/Footer.jsx";

function Contact() {
  return (
    <>
      <Header />
      <section className="contact-section hero-padding section-padding-inline">
        <div className="contact container grid grid--2-columns background-peach">
          <div className="contact__text-content flow flex flex--column flex--justify-center">
            <h1 className="contact__heading primary-heading text-white">
              Contact us
            </h1>
            <p className="contact__text font-size-100 text-white">
              Ready to take it to the next level? Let’s talk about your project
              or idea and find out how we can help your business grow. If you
              are looking for unique digital experiences that’s relatable to
              your users, drop us a line.
            </p>
          </div>

          <div className="contact__form-wrapper">
            <form action="#" className="contact__form flow grid">
              <div className="contact__input-wrapper contact__name-wrapper">
                <label htmlFor="contact__name">
                  <span className="sr-only">Name</span>
                  <input
                    type="text"
                    name="contact__name"
                    className="contact__form-input"
                    id="contact__name"
                    placeholder="Name"
                  />
                </label>
                <div className="contact__error-wrapper flex flex--gap">
                  <p className="contact__error-message text-white">
                    Name cannot be empty
                  </p>
                  <img
                    src={errorIcon}
                    className="contact__error-icon"
                    alt="Error icon"
                  />
                </div>
              </div>

              <div className="contact__input-wrapper contact__email-wrapper">
                <label htmlFor="contact__email">
                  <span className="sr-only">Email</span>
                  <input
                    type="email"
                    name="contact__email"
                    className="contact__form-input"
                    id="contact__email"
                    placeholder="Email Address"
                  />
                </label>
                <div className="contact__error-wrapper flex flex--gap">
                  <p className="contact__error-message text-white">
                    Enter a valid email
                  </p>
                  <img
                    src={errorIcon}
                    className="contact__error-icon"
                    alt="Error icon"
                  />
                </div>
              </div>

              <div className="contact__input-wrapper contact__number-wrapper">
                <label htmlFor="contact__phone-number">
                  <span className="sr-only">Phone Number</span>
                  <input
                    type="number"
                    name="contact__phone-number"
                    className="contact__form-input"
                    id="contact__phone-number"
                    placeholder="Phone Number"
                  />
                </label>
                <div className="contact__error-wrapper flex flex--gap">
                  <p className="contact__error-message contact__error-message--phone text-white">
                    Phone number cannot be empty
                  </p>
                  <img
                    src={errorIcon}
                    className="contact__error-icon"
                    alt="Error icon"
                  />
                </div>
              </div>

              <div className="contact__input-wrapper contact__message-wrapper">
                <label htmlFor="contact__message">
                  <span className="sr-only">Message</span>
                  <textarea
                    name="contact__message"
                    id="contact__message"
                    cols="30"
                    rows="5"
                    className="contact__form-input"
                    placeholder="Your Message"
                  />
                </label>
                <div className="contact__error-wrapper flex flex--gap">
                  <p className="contact__error-message text-white">
                    Message cannot be empty
                  </p>
                  <img
                    src={errorIcon}
                    className="contact__error-icon"
                    alt="Error icon"
                  />
                </div>
              </div>

              <button className="contact__submit-btn btn btn--light">
                Submit
              </button>
            </form>
          </div>
        </div>
      </section>
      <LocationsCard />
      <Footer className="footer-section--contact" />
    </>
  );
}

export default Contact;
