import { Link } from "react-router-dom";
import "./Service.css";

function Service({ className, title, to }) {
  return (
    <Link
      to={to}
      className={`service grid place-items-center gap ${className}`}
    >
      <span className="service__heading secondary-title letter-spacing-1">
        {title}
      </span>
      <span className="service__text fs-100 letter-spacing-2">
        View Projects <span className="service__link-symbol">&#62;</span>
      </span>
    </Link>
  );
}

export default Service;
