import { Link } from "react-router-dom";
import "./Services.css";

function Services({ services }) {
  return (
    <>
      {services.map((service, index) => (
        <Link
          key={index}
          to={service.to}
          className={`service grid place-content-center gap text-white ${service.className}`}
        >
          <span className="service__title fs-400">{service.title}</span>
          <span className="service__text fs-100">
            View Projects <span className="service__link-symbol">&#62;</span>
          </span>
        </Link>
      ))}
    </>
  );
}

export default Services;
