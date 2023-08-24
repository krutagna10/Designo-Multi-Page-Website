import { Link } from "react-router-dom";
import logoDark from "../../assets/shared/desktop/logo-dark.png";
import "./Header.css";
import { useState } from "react";

const HEADER_LINKS = [
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

function Header() {
  const [isNavigationOpen, setIsNavigationOpen] = useState(false);

  function handleToggleIsNavigationOpen() {
    setIsNavigationOpen((prevIsNavigationOpen) => !prevIsNavigationOpen);
  }

  return (
    <div>
      <header className="header-section background-white">
        <div className="header container flex flex--justify-space flex--align-center">
          <Link to="/" className="header__logo-link">
            <img src={logoDark} className="header__logo" alt="Designo" />
          </Link>

          <nav className="header__nav" aria-label="primary navigation">
            <ul
              id="header__nav-list"
              className="header__nav-list flex"
              data-visible={isNavigationOpen}
            >
              {HEADER_LINKS.map((link, index) => (
                <li key={index}>
                  <Link to={link.to} className="header__nav-link">
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <button
            className="header__mobile-nav-toggle"
            aria-controls="header__nav-list"
            aria-expanded={isNavigationOpen}
            onClick={handleToggleIsNavigationOpen}
          >
            <span className="sr-only">Menu</span>
          </button>
        </div>
      </header>
    </div>
  );
}

export default Header;
