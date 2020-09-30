import React from "react";
import { NavLink } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="errorPage">
      <NavLink to="/">
        <button>Wróć</button>
      </NavLink>
      <h1>Nie działa</h1>
    </div>
  );
};
export default ErrorPage;
