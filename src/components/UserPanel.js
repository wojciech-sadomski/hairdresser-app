import React from "react";
import { NavLink } from "react-router-dom";
class UserPanel extends React.Component {
  state = {
    users: [
      { id: 0, name: "Marta", email: "marta@email.com", visits: ["Balejaż"] },
    ],
  };

  render() {
    const now = new Date();
    const userVisits = this.state.users.map(user);
    return (
      <div className="userPanel">
        <NavLink className="login__back" to="/">
          Home
        </NavLink>
        <h1 className="userPanel__header">Hairdresser</h1>
        <hr />
        <div className="userPanel__info">
          <div className="userPanel__info--date">
            <h2>Pick a date and add</h2>
            <input onChange={console.log(now)} type="date" />
            <button className="userPanel__info__button">Add visit</button>
          </div>
        </div>
        <div className="userPanel__info">
          <div className=" userPanel__info--visits">
            <ul>
              <li>Balejaż </li>
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
