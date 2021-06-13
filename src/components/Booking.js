import React from "react";
import "./Booking.css";

export const Booking = () => {
  return (
    <div className="booking">
      <h1>Book an Appointment</h1>
      <div className="booking-wrapper">
        <form method="post" action="" className="booking-form-wrapper">
          <div className="booking-outer">
            <div className="booking-inner">
              <label className="booking-form-label">
                <strong>First Name</strong>
                <strong className="required"> *</strong>
              </label>
              <input
                type="text"
                name="first name"
                size="20"
                className="booking-input"
                required
                placeholder="John"
              />
            </div>
            <div className="booking-inner">
              <label className="booking-form-label">
                <strong>Last Name</strong>
                <strong className="required"> *</strong>
              </label>
              <input
                type="text"
                name="last name"
                size="20"
                className="booking-input"
                required
                placeholder="Doe"
              />
            </div>
            <div className="booking-inner last">
              <label className="booking-form-label">
                <strong>Age</strong>
                <strong className="required"> *</strong>
              </label>
              <input
                type="text"
                name="age"
                size="20"
                className="booking-input"
                required
                placeholder="20"
              />
            </div>
          </div>
          <div className="booking-outer">
            <div className="booking-inner">
              <label className="booking-form-label">
                <strong>Email</strong>
                <strong className="required"> *</strong>
              </label>
              <input
                type="email"
                name="email"
                size="50"
                className="booking-input"
                required
                placeholder="email@example.com"
              />
            </div>
            <div className="booking-inner last">
              <label className="booking-form-label">
                <strong>Phone Number</strong>
                <strong className="required"> *</strong>
              </label>
              <input
                type="tel"
                name="phonenumber"
                size="50"
                className="booking-input"
                required
                placeholder="xxx-xxx-xxxx"
              />
            </div>
          </div>
          <div className="booking-outer">
            <div className="booking-inner">
              <label className="booking-form-label">
                <strong>Date</strong>
                <strong className="required"> *</strong>
              </label>
              <input
                type="date"
                name="date"
                size="50"
                className="booking-input"
                placeholder="yyyy-mm-dd"
                required
              />
            </div>
            <div className="booking-inner last">
              <label className="booking-form-label">
                <strong>Time</strong>
                <strong className="required"> *</strong>
              </label>
              <input
                type="time"
                name="time"
                size="50"
                className="booking-input"
                placeholder="hh-mm"
                required
              />
            </div>
          </div>
          <div className="services-drop">
            <label className="booking-form-label">
              <strong>Service</strong>
              <strong className="required"> *</strong>
            </label>
            <select
              name="booking-service"
              id="booking-service"
              className="booking-input"
            >
              <option defaultValue></option>
              <option value="Chiropractics">Chiropractics</option>
              <option value="MassageTherapy">Massage Therapy</option>
              <option value="Physiotherapy">Physiotherapy</option>
              <option value="Acupuncture">Acupuncture</option>
              <option value="CustomKneeBracing">Custom Knee Bracing</option>
              <option value="CustomOrthotics">Custom Orthotics</option>
            </select>
          </div>
          <div className="services-drop">
            <label className="form-label">Any Additional Info We Should Know</label>
            <textarea rows="4" cols="25" className="contact-input" placeholder="Type here"></textarea>
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
