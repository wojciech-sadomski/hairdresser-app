import React from "react";
import { NavLink } from "react-router-dom";
const Login = () => {
  const handleLogin = (e) => {
    e.preventDefault();
    return console.log(Date.now());
  };
  return (
    <div className="login">
      <NavLink className="login__back" to="/">
        Home
      </NavLink>
      <h1 className="login__haeder">Hairdresser</h1>
      <div className="login__panel">
        <form className="form">
          <input className="login__input" type="text" placeholder="Imię" />
          <input
            className="login__input"
            type="email"
            placeholder="Adres e-mail"
          />
          <input className="login__input" type="password" placeholder="Hasło" />
          <NavLink to="/user">
            <button className="login__button">Zaloguj</button>
          </NavLink>

          <button onClick={handleLogin} className="login__button">
            Utwórz konto
          </button>
        </form>
      </div>
    </div>
  );
};
export default Login;
