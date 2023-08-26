import "./HeroDesign.css";

function HeroDesign({ title, description }) {
  return (
    <section className="hero-padding section-padding-inline">
      <div className="hero-design container grid place-content-center bg-peach text-align-center">
        <div className="hero-design__text-content flow">
          <h1 className="primary-heading text-white">{title}</h1>
          <p className="hero__design__text fs-100 text-white"> {description}</p>
        </div>
      </div>
    </section>
  );
}

export default HeroDesign;
