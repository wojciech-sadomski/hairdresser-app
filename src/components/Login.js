import React from "react";
import { NavLink } from "react-router-dom";
const Login = () => {
  return (
    <div className="login">
      <NavLink className="login__back" to="/">
        Home
      </NavLink>
      <h1 className="login__haeder">Hairdressier</h1>
      <div className="login__panel">
        <form className="formularz">
          <input
            className="login__input"
            type="email"
            placeholder="Imię i Nazwisko"
          />
          <input
            className="login__input"
            type="text"
            placeholder="Adres e-mail"
          />

          <button className="login__button">Zaloguj</button>
          <button className="login__button">Utwórz konto</button>
        </form>
      </div>
    </div>
  );
};
export default Login;
