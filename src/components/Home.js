import React from "react";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <div className="main">
      <div className="main__panel"></div>
      <div className="sidePanel">
        <div className="sidePanel__top">
          <h1 className="sidePanel__top__header">Hairdreser</h1>
          <NavLink to="/news">
            Style is e choice
            <p className="sidePanel__top--bold"> Read about us</p>
          </NavLink>
        </div>
        <div className="sidePanel__bottom">
          <NavLink to="/login">Sign In</NavLink>
        </div>
      </div>
    </div>
  );
};
export default Home;
