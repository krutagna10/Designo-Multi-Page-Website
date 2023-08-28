import "./ContactForm.css";

function ContactForm() {
  return (
    <form className="form flow">
      <div className="form__control">
        <input className="form__input" type="text" placeholder="Name" />
      </div>
      <div className="form__control">
        <input
          className="form__input"
          type="email"
          placeholder="Email Address"
        />
      </div>
      <div className="form__control">
        <input className="form__input" type="number" placeholder="Phone" />
      </div>
      <div className="form__control">
        <textarea className="form__input" placeholder="Your Message" rows="5" />
      </div>
      <button className="form__btn">Submit</button>
    </form>
  );
}

export default ContactForm;
