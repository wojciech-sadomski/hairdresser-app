import React from "react";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <div className="main">
      <div className="main__panel">
        <h1 className="haeder">Hair dressier</h1>
      </div>
      <div className="sidePanel">
        <div className="sidePanel__top">
          <NavLink to="/news">Zobacz nasze fryzury</NavLink>
        </div>
        <div className="sidePanel__bottom">
          <NavLink to="/login">Zaloguj się lub załóż konto</NavLink>
        </div>
      </div>
    </div>
  );
};
export default Home;
