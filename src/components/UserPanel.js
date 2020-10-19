import React from "react";
import { NavLink } from "react-router-dom";
import VisitList from "./VisitList.js";
import AddForm from "./AddForm.js";
class UserPanel extends React.Component {
  counter = 5;
  state = {
    visits: [
      { id: 1, date: "2020-10-10", type: "coloring" },
      { id: 2, date: "2020-10-12", type: "shearing" },
      { id: 3, date: "2020-10-11", type: "wash" },
      { id: 4, date: "2020-10-14", type: "balayage" },
    ],
    newDate:  new Date().toISOString().slice(0, 10),
    newType: "Wash",

  };
  handleAddVisit = (e, date, inputType) => {
    e.preventDefault()
    const visit = {
      id: this.counter,
      date: this.state.newDate,
      type: this.state.newType,
    };
    this.counter++;
    this.setState((prevState) => ({ visits: [...prevState.visits, visit] }));
    console.log(visit);
  };
  handleInputData = (e) => {
    this.setState({ newData: e.target.value });
  };
  handleInputType = (e) => {
    this.setState({ newType: e.target.value });
  };
  render() {
    // const visits = this.state.map((visit) => <Visit />);
    return (
      <div className="userPanel">
        <NavLink className="login__back" to="/">
          Home
        </NavLink>
        <h1 className="userPanel__header">Hairdresser</h1>
        <AddForm handleAddVisit={this.handleAddVisit} handleInputData={this.handleInputData} handleInputType={this.handleInputType} newData={this.newDate} newType={this.newType}/>
        <VisitList visits={this.state.visits} />
      </div>
    );
  }
}

export default UserPanel;
