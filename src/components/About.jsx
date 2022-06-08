import React from "react";
import { NavLink } from "react-router-dom";

const About = () => {
  return (
    <div>
      <div className="container py-5 my-5">
        <div className="row">
          <div className="col-md-6">
            <h1 className="text-primary fw-bold mb-4">About Us</h1>
            <p className="lead mb-4">
              <b>Agrivyapar</b> mainly focuses on providing high quality
              pesticides, fertilizers, seeds and Farming equipment directly from
              dealer to Farmer on a cheaper rate as compared to retailers. As we
              all know well in today’s world how much corruption is getting
              spread, the same product or goods whether it is of any domain like
              electronic, electrical, Agri Product or whatever with the same MRP
              is getting a sale by two vendors in two different rates. If one
              vendor or shopkeeper takes less margin at the same time another
              wants to take more margin and make the consumer fool and due to
              these things, we consumers get the whole pain. If we talk about
              particularly Agriculture domain then Farmers these days get the
              same Urea, Pesticide, Insecticide and many more goods which are
              used during farming and cultivation process at different rates.
              So, our main motivation to make this website is to treat every
              Farmer at an equal level by providing a platform on which they can
              order their all day-to-day requirements only from their home. This
              will not only help them by providing equal rate or price to every
              Farmer but also, they can save time and use this time to do more
              farming. After all, farmers are the only ones who are giving food
              to each and every family.
            </p>
            <NavLink to="/contact" className="btn btn-outline-primary px-3">
              Contact Us
            </NavLink>
          </div>
          <div className="col-md-6 d-flex justify-content-center">
            <img
              src="/assets/images/Agriculture_icon.png"
              alt="About Us"
              height="400px"
              width="400px"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
