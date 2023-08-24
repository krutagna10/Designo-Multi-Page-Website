import "./Card.css";

function Card({ title, description, image, alt }) {
  return (
    <div className="card background-very-light-peach">
      <a className="card__link" href="#">
        <span className="card__image-wrapper">
          <img src={image} className="card__image" alt={alt} />
        </span>
        <span className="card__text-content text-align-center flow">
          <span className="card__heading tertiary-heading uppercase letter-spacing-2 text-peach">
            {title}
          </span>
          <span className="card__text text-dark-grey font-size-100">
            {description}
          </span>
        </span>
      </a>
    </div>
  );
}

export default Card;
