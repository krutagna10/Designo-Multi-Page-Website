import { Link } from "react-router-dom";
import logoLight from "../../assets/shared/desktop/logo-light.png";
import "./Footer.css";
import { IonIcon } from "@ionic/react";
import { footerNavLinks, footerSocialLinks } from "../../data/footer.js";

function Footer() {
  return (
    <footer className="footer-section bg-black">
      <div className="footer container">
        <a
          className="footer__logo-link flex justify-center items-center"
          href="#"
        >
          <img src={logoLight} className="footer__logo" alt="Designo" />
        </a>
        <nav className="footer__nav" aria-label="secondary navigation">
          <ul className="footer__nav-list flex flex-col gap">
            {footerNavLinks.map((link, index) => (
              <li key={index}>
                <Link className="footer__nav-link" to={link.to}>
                  {link.text}
                </Link>
              </li>
            ))}
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
          <a className="footer__contact-link" href="mailto:contact@designo.co">
            M : contact@designo.co
          </a>
        </div>
        <div className="footer__social-logos-wrapper flex gap">
          {footerSocialLinks.map((socialLink, index) => (
            <a
              key={index}
              className="footer__social-logo-link"
              href={socialLink.href}
            >
              <IonIcon className="footer__social-logo" icon={socialLink.logo} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
