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

const FOOTER_LINKS = [
  {
    to: "/about",
    text: "Our Content",
  },
  {
    to: "/locations",
    text: "Locations",
  },
  {
    to: "/contact",
    text: "Contact",
  },
];

const FOOTER_SOCIAL_LINKS = [
  {
    href: "https://www.facebook.com/",
    logo: logoFacebook,
  },
  {
    href: "https://www.youtube.com/",
    logo: logoYoutube,
  },
  {
    href: "https://twitter.com/",
    logo: logoTwitter,
  },
  {
    href: "https://in.pinterest.com/",
    logo: logoPinterest,
  },
  {
    href: "https://www.instagram.com/",
    logo: logoInstagram,
  },
];

function Footer({ className }) {
  return (
    <footer
      className={`footer-section section-padding bg-black ${
        className ? className : ""
      }`}
    >
      <div className="footer container">
        <a
          className="footer__logo-link flex justify-center items-center"
          href="#"
        >
          <img src={logoLight} className="footer__logo" alt="Designo" />
        </a>
        <nav className="footer__nav" aria-label="secondary navigation">
          <ul className="footer__nav-list flex flex-col gap">
            {FOOTER_LINKS.map((link, index) => (
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
          {FOOTER_SOCIAL_LINKS.map((socialLink, index) => (
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
