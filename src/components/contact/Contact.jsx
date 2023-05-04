import React from "react";
import "./contact.css";
import {GrMapLocation} from "react-icons/gr"
import {MdOutlineAlternateEmail} from "react-icons/md"

const Contact = () => {
  return (
    <section id="contact" className="container contact">
      <h2 className="section__title">Get In Touch</h2>

      <div className="grid contact__container">
        <div className="contact__info">
          <h3 className="contact__title">Let's cover all the bases.</h3>
          <p className="contact__details">If forms aren't your cup of tea, you can always drop me an email instead</p>
        </div>

        <form action="" className="contact__form">
          <div className="contact__form-group">
            <div className="contact__form-div">
              <input type="text" className="contact__form-input" placeholder="Your name" />
            </div>

            <div className="contact__form-div">
              <input type="email" className="contact__form-input" placeholder="Your email" />
            </div>
          </div>
          <div className="contact__form-div">
              <input type="text" className="contact__form-input" placeholder="Subject" />
          </div>
          <div className="contact__form-div contact__form-area">
              <textarea 
                name ="" 
                id="" 
                cols="30" 
                rows="10" 
                className="contact__form-input" 
                placeholder="Your message">
              </textarea>
          </div>

          <button className="btn">Send Message</button>

        </form>
      </div>
    </section>
  )
}

export default Contact