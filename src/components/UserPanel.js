import React from "react";
import { NavLink } from "react-router-dom";
class UserPanel extends React.Component {
  state = {};
  render() {
    return (
      <div className="userPanel">
        <NavLink className="login__back" to="/">
          Home
        </NavLink>
        <h1 className="userPanel__header">Hairdresser</h1>
        <div className="userPanel__info">
          <div className="userPanel__info userPanel__info--center">
            <input type="date" />
          </div>
        </div>
        <div className="userPanel__info">
          <div className="userPanel__info--top">
            <ul>
              <li>Balejaż</li>
              <li>Czesanie</li>
              <li>Farbowanie</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default UserPanel;
