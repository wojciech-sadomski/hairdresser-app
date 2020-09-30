import React from "react";
import { NavLink } from "react-router-dom";

const AboutUs = () => {
  return (
    <div className="aboutUs">
      <NavLink to="/">
        <button>Wróć</button>
      </NavLink>
      <h1>Zobacz fryzury naszych klientów</h1>
      <div className="gallery">Tutaj będą fotki klientów</div>
    </div>
  );
};
export default AboutUs;
