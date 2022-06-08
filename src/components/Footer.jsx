import React from "react";
import Contact from "./Contact";
const style = {
  backgroundColor: "black",
  color: "white",
  fontSize: ".5rem",
};

const Footer = () => {
  return (
    <div style={style}>
      <h1>Agrivyapar</h1>
      <Contact />
    </div>
  );
};

export default Footer;
