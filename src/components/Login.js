import React from "react";
import { NavLink } from "react-router-dom";
const Login = () => {
  const handleCreateAccount = (e) => {
    e.preventDefault();
    return console.log(Date.now());
  };
  const handleLogin = (e) => {
    e.preventDefault();
    return console.log(Date.now());
  };
  return (
    <div className="login">
      <NavLink className="login__back" to="/">
        Home
      </NavLink>
      <NavLink className="login__back_2" to="/user">
        temprorary user login__panel
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
          <button onClick={handleLogin} className="login__button">
            Sigin
          </button>
          <button onClick={handleCreateAccount} className="login__button">
            Create account
          </button>
        </form>
      </div>
    </div>
  );
};
export default Login;
