import React from "react";
import "./Contact.css";

export const Contact = () => {
  return (
    <div className="contact">
      <h1>Contact Us</h1>
      <p className="instructions">
        If you have any questions or inquiries about any of our services please
        feel free to send us an email with your name and phone number and we
        will get back to you as soon as possible. Thank you!
      </p>
      <div className="contact-wrapper">
        <form method="post" action="/" className="form-wrapper">
          <div className="question-wrapper">
            <label className="form-label">Name</label>
            <input
              type="text"
              name="first name"
              size="50"
              className="contact-input"
              placeholder="John Doe"
            />
          </div>
          <div className="question-wrapper">
            <label className="form-label">Email</label>
            <input
              type="email"
              name="email"
              size="50"
              className="contact-input"
              placeholder="name@example.com"
            />
          </div>
          <div className="question-wrapper">
            <label className="form-label">Phone Number</label>
            <input
              type="tel"
              name="phone"
              size="50"
              className="contact-input"
              placeholder="xxx-xxx-xxxx"
            />
          </div>
          <div className="question-wrapper">
            <label className="form-label">Preferred Contact Method</label>
            <label htmlFor="email" className="radio-label">Email</label>
            <input type="radio" id="emailradio" name="contactmethod" value="email" className="contact-radio"/>
            <label htmlFor="phone" className="radio-label">Phone Number</label>
            <input type="radio" id="phoneradio" name="contactmethod" value="phone" className="contact-radio"/>
          </div>
          <div className="question-wrapper">
            <label className="form-label">Question</label>
            <textarea rows="4" cols="25" className="contact-input"></textarea>
          </div>
          <div className="button-wrapper">
            <input
              type="button"
              value="Submit"
              className="btn submit"
              //   onClick={handleSubmit}
            />
            <input type="reset" value="Clear" className="btn" />
          </div>
        </form>
      </div>
    </div>
  );
};
