import { Link } from "react-router-dom";
import "./Service.css";

function Service({ className, title, to }) {
  return (
    <Link
      to={to}
      className={`service grid place-content-center gap text-white ${className}`}
    >
      <span className="service__title fs-400">{title}</span>
      <span className="service__text fs-100">
        View Projects <span className="service__link-symbol">&#62;</span>
      </span>
    </Link>
  );
}

export default Service;
