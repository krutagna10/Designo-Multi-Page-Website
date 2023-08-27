import { useState } from "react";
import { Link } from "react-router-dom";
import Container from "../UI/Container/Container.jsx";
import logoDark from "../../assets/shared/desktop/logo-dark.png";
import { links } from "../../data/header.js";
import "./Header.css";

function Header() {
  const [isNavigationOpen, setIsNavigationOpen] = useState(false);

  function handleToggleIsNavigationOpen() {
    setIsNavigationOpen((prevIsNavigationOpen) => !prevIsNavigationOpen);
  }

  return (
    <header className="header bg-white">
      <Container className="flex justify-between items-center">
        <Link to="/" className="header__link">
          <img className="header__logo" src={logoDark} alt="Designo" />
        </Link>

        <nav className="header__nav" aria-label="primary navigation">
          <ul
            id="header__nav-list"
            className="header__nav-list flex gap"
            data-visible={isNavigationOpen}
          >
            {links.map((link, index) => (
              <li key={index}>
                <Link to={link.to} className="header__nav-link fs-300">
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
      </Container>
    </header>
  );
}

export default Header;
