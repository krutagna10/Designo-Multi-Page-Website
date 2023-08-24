import { Link } from "react-router-dom";
import "./Service.css";

function Service({ className, title, to }) {
  return (
    <Link
      to={to}
      className={`service grid grid--content-center grid-gap ${className}`}
    >
      <span className="service__heading secondary-heading letter-spacing-1">
        {title}
      </span>
      <span className="service__text font-size-100 letter-spacing-2">
        View Projects <span className="service__link-symbol">&#62;</span>
      </span>
    </Link>
  );
}

export default Service;
