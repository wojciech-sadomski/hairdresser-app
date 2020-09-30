import React from "react";
import { NavLink } from "react-router-dom";
const Login = () => {
  return (
    <div className="login">
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

          <button>Zaloguj</button>
          <button>Utwórz konto</button>
        </form>
      </div>
      <NavLink className="login__back" to="/">
        Home
      </NavLink>
    </div>
  );
};
export default Login;
