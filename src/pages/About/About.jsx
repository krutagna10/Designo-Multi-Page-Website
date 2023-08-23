import Layout from "../../layout/Layout.jsx";

function About() {
  return (
    <Layout>
      <section className="about-section hero-padding section-padding-inline">
        <div className="about container about--hero background-peach grid">
          <div className="about__image-wrapper about__image-wrapper--hero"></div>
          <div className="about__text-content hero-flow">
            <h1 className="about__heading primary-heading text-white">
              About Us
            </h1>
            <p className="about__text font-size-100 text-white">
              Founded in 2010, we are a creative agency that produces lasting
              results for our clients. We’ve partnered with many startups,
              corporations, and nonprofits alike to craft designs that make real
              impact. We’re always looking forward to creating brands, products,
              and digital experiences that connect with our clients’ audiences.
            </p>
          </div>
        </div>
      </section>
      <section className="talent-section section-padding section-padding-inline">
        <div className="about about--talent container background-very-light-peach grid">
          <div className="about__image-wrapper about__image-wrapper--talent"></div>
          <div className="about__text-content hero-flow">
            <h1 className="about__heading secondary-heading text-peach">
              World-class talent
            </h1>
            <p className="about__text font-size-100 text-dark-grey">
              We are a crew of strategists, problem-solvers, and technologists.
              Every design is thoughtfully crafted from concept to launch,
              ensuring success in its given market. We are constantly updating
              our skills in a myriad of platforms.
            </p>
            <p className="about__text font-size-100 text-dark-grey">
              Our team is multi-disciplinary and we are not merely interested in
              form — content and meaning are just as important. We give great
              importance to craftsmanship, service, and prompt delivery. Clients
              have always been impressed with our high-quality outcomes that
              encapsulates their brand’s story and mission.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default About;
