import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_cv9yo5j",
        "template_ndu1f3l",
        form.current,
        "hCJMfiSSf4ZJXcOf3"
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
    <div>
      <div className="container mb-5">
        <div className="row">
          <div className="col-12 text-center py-4 my-4">
            <h1>Have Some Question?</h1>
            <hr />
          </div>
        </div>
        <div className="row">
          <div className="col-md 5 d-flex justify-content-center">
            <img
              src="/assets/images/contact.png"
              alt="Contact Us"
              height="300px"
              width="300px"
            />
          </div>
          <div className="col-md-6">
            <form ref={form} onSubmit={sendEmail}>
              <div class="mb-3">
                <label for="exampleForm" class="form-label">
                  Full Name
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleForm fullName"
                  placeholder="Shubh"
                  name="user_name"
                />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleFormControlInput1 email_id"
                  name="user_email"
                  placeholder="name@example.com"
                />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">
                  Example textarea
                </label>
                <textarea
                  name="message"
                  class="form-control"
                  id="exampleFormControlTextarea1 message"
                  rows="5"
                ></textarea>
              </div>
              {/* <button type="submit" class="btn btn-outline-primary">
                Send Message
              </button> */}
              <input
                className="btn btn-outline-primary px-3"
                type="submit"
                value="Send"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
