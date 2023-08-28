import { Link } from "react-router-dom";
import logoLight from "../../assets/shared/desktop/logo-light.png";
import "./Footer.css";
import { IonIcon } from "@ionic/react";
import { footerNavLinks, footerSocialLinks } from "../../data/footer.js";
import Container from "../UI/Container/Container.jsx";

function Footer() {
  return (
    <footer className="footer-section bg-black">
      <Container className="footer grid gap">
        <a className="footer__link flex justify-center items-center" href="#">
          <img src={logoLight} alt="Designo" />
        </a>
        <nav className="footer__nav" aria-label="secondary navigation">
          <ul className="footer__nav-list flex gap">
            {footerNavLinks.map((link, index) => (
              <li key={index}>
                <Link
                  className="footer__nav-link text-white text-uppercase"
                  to={link.to}
                >
                  {link.text}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div>
          <p className="text-bold">Designo Central Office</p>
          <p className="text-grey">3886 Wellington Street</p>
          <p className="text-grey">Toronto, Ontario M9C 3J5</p>
        </div>
        <div className="footer__contact">
          <p className="text-bold">Contact Us (Central Office)</p>
          <a className="footer__contact-link" href="tel: +1 253-863-8967">
            P : +1 253-863-8967
          </a>
          <a className="footer__contact-link" href="mailto:contact@designo.co">
            M : contact@designo.co
          </a>
        </div>
        <div className="footer__social-links flex gap">
          {footerSocialLinks.map((socialLink, index) => (
            <a
              key={index}
              className="footer__social-link text-white"
              href={socialLink.href}
            >
              <IonIcon className="fs-200" icon={socialLink.logo} />
            </a>
          ))}
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
