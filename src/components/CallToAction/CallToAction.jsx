import { Link } from "react-router-dom";
import "./CallToAction.css";
import Container from "../UI/Container/Container.jsx";
import Wrapper from "../UI/Wrapper/Wrapper.jsx";

function CallToAction() {
  return (
    <section className="cta-section">
      <Wrapper>
        <Container className="cta bg-peach grid gap">
          <div className="cta__content flow">
            <h2 className="fs-400">Let’s talk about your project</h2>
            <p>
              Ready to take it to the next level? Contact us today and find out
              how our expertise can help your business grow.
            </p>
          </div>
          <div className="grid">
            <Link to="/contact" className="cta__link link link--light">
              Get in Touch
            </Link>
          </div>
        </Container>
      </Wrapper>
    </section>
  );
}

export default CallToAction;
