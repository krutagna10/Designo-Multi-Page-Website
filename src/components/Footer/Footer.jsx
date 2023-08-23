import { Link } from "react-router-dom";
import logoLight from "../../assets/shared/desktop/logo-light.png";
import "./Footer.css";
import { IonIcon } from "@ionic/react";
import {
  logoFacebook,
  logoInstagram,
  logoPinterest,
  logoTwitter,
  logoYoutube,
} from "ionicons/icons";

function Footer() {
  return (
    <footer className="footer-section section-padding background-black">
      <div className="footer container">
        <a className="footer__logo-link flex flex--center" href="#">
          <img src={logoLight} className="footer__logo" alt="Designo" />
        </a>
        <nav className="footer__nav" aria-label="secondary navigation">
          <ul className="footer__nav-list flex flex--column flex--gap">
            <li>
              <Link className="footer__nav-link" to="/about">
                Our company
              </Link>
            </li>
            <li>
              <Link className="footer__nav-link" to="/locations">
                Locations
              </Link>
            </li>
            <li>
              <Link className="footer__nav-link" to="/contact">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
        <div className="footer__address-wrapper text-grey">
          <p className="footer__address text-bold">Designo Central Office</p>
          <p className="footer__address">3886 Wellington Street</p>
          <p className="footer__address">Toronto, Ontario M9C 3J5</p>
        </div>
        <div className="footer__contact text-grey">
          <p className="footer__contact-heading text-bold">
            Contact Us (Central Office)
          </p>
          <a className="footer__contact-link" href="tel: +1 253-863-8967">
            P : +1 253-863-8967
          </a>
          <a className="footer__contact-link" href="contact@designo.co">
            M : contact@designo.co
          </a>
        </div>
        <div className="footer__social-logos-wrapper flex flex--gap">
          <a
            className="footer__social-logo-link"
            href="https://www.facebook.com/"
          >
            <IonIcon className="footer__social-logo" icon={logoFacebook} />
          </a>
          <a
            className="footer__social-logo-link"
            href="https://www.youtube.com/"
          >
            <IonIcon className="footer__social-logo" icon={logoYoutube} />
          </a>
          <a className="footer__social-logo-link" href="https://twitter.com/">
            <IonIcon className="footer__social-logo" icon={logoTwitter} />
          </a>
          <a
            className="footer__social-logo-link"
            href="https://in.pinterest.com/"
          >
            <IonIcon className="footer__social-logo" icon={logoPinterest} />
          </a>
          <a
            className="footer__social-logo-link"
            href="https://www.instagram.com/"
          >
            <IonIcon className="footer__social-logo" icon={logoInstagram} />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
