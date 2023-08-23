import "./CallToAction.css";

function CallToAction() {
  return (
    <section className="call-to-action-section">
      <div className="call-to-action container background-peach grid">
        <div className="call-to-action__text-content flow">
          <h2 className="call-to-action__heading secondary-heading text-white">
            Let’s talk about your project
          </h2>
          <p className="call-to-action__description font-size-100 text-white">
            Ready to take it to the next level? Contact us today and find out
            how our expertise can help your business grow.
          </p>
        </div>
        <div className="call-to-action__btn-wrapper grid">
          <a href="/contact" className="call-to-action__btn btn btn--light">
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
}

export default CallToAction;
