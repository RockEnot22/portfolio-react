import React, { useState, useRef } from "react";
import "./contact.css";
import emailjs from "@emailjs/browser";
import Popup from "../general/Popup";

const Contact = () => {
  const [isOpen, setItOpen] = useState(false);
  const togglePopup = () => {
    setItOpen(!isOpen);
  };

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_d1n510k",
        "template_ow8nq9r",
        form.current,
        "w22ZumGthd4W6MRDP"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
  };

  return (
    <section id="contact" className="container contact">
      <h2 className="section__title">Get In Touch</h2>

      <div className="grid contact__container">
        <div className="contact__info">
          <h3 className="contact__title">Let's cover all the bases.</h3>
          <p className="contact__details">
            If forms aren't your cup of tea, you can always drop me an email
            instead
          </p>
        </div>

        <form ref={form} onSubmit={sendEmail} className="contact__form">
          <div className="contact__form-group">
            <div className="contact__form-div">
              <input
                type="text"
                className="contact__form-input"
                name="name"
                placeholder="Your name"
                required
              />
            </div>

            <div className="contact__form-div">
              <input
                type="email"
                className="contact__form-input"
                name="email"
                placeholder="Your email"
                required
              />
            </div>
          </div>
          <div className="contact__form-div">
            <input
              type="text"
              className="contact__form-input"
              name="subject"
              placeholder="Subject"
            />
          </div>
          <div className="contact__form-div contact__form-area">
            <textarea
              name="message"
              id=""
              cols="30"
              rows="10"
              className="contact__form-input"
              placeholder="Your message"
            ></textarea>
          </div>

          <button className="btn" onClick={togglePopup}>
            Send Message
          </button>
        </form>
        {isOpen && (
          <Popup
            handleClose={togglePopup}
            content={
              <p>
                Your message was like a much-needed cup of coffee on a Monday
                morning - it woke me up and put a smile on my face. Thanks!
              </p>
            }
          />
        )}
      </div>
    </section>
  );
};

export default Contact;
