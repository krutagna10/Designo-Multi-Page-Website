import { Link } from "react-router-dom";
import logoDark from "../../assets/shared/desktop/logo-dark.png";
import "./Header.css";

function Header() {
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
              data-visible="false"
            >
              <li>
                <Link to="/about" className="header__nav-link">
                  Our Content
                </Link>
              </li>
              <li>
                <Link to="/locations" className="header__nav-link">
                  Locations
                </Link>
              </li>
              <li>
                <Link to="/contact" className="header__nav-link">
                  Contact
                </Link>
              </li>
            </ul>
          </nav>

          <button
            className="header__mobile-nav-toggle"
            aria-controls="header__nav-list"
            aria-expanded="false"
          >
            <span className="sr-only">Menu</span>
          </button>
        </div>
      </header>
    </div>
  );
}

export default Header;
