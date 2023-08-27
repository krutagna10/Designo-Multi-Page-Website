import "./Card.css";
import { Link } from "react-router-dom";

function Card({ title, description, image, alt }) {
  return (
    <div className="card bg-very-light-peach">
      <Link className="card__link" to="#">
        <span className="card__image-wrapper">
          <img src={image} className="card__image" alt={alt} />
        </span>
        <span className="card__content text-center flow">
          <span className="card__title tertiary-title text-uppercase letter-spacing-2 text-peach">
            {title}
          </span>
          <span className="card__description text-dark-grey fs-100">
            {description}
          </span>
        </span>
      </Link>
    </div>
  );
}

export default Card;
