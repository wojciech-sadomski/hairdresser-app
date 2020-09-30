import React from "react";
import { NavLink } from "react-router-dom";

const AboutUs = () => {
  return (
    <div className="aboutUs">
      <NavLink className="aboutUs__back" to="/">
        Home
      </NavLink>
      <img src="" alt="" className="AboutUs__foto" />
      <div className="aboutUs__logo"></div>
      <div className="aboutUs__description">
        <h1 className="aboutUs__description__header">Something about us</h1>
        <p className="aboutUs__description__text"></p>
        <p></p>
        <p></p>
      </div>
    </div>
  );
};
export default AboutUs;
