import React from "react";
import { NavLink } from "react-router-dom";
import VisitList from "./VisitList.js";
import AddForm from "./AddForm.js";
class UserPanel extends React.Component {
  counter = 5;
  state = {
    visits: [
      { id: 1, date: "2020-10-10", type: "Coloring" },
      { id: 2, date: "2020-10-12", type: "Shearing" },
      { id: 3, date: "2020-10-11", type: "Wash" },
      { id: 4, date: "2020-10-14", type: "Balayage" },
    ],
    newDate:  new Date().toISOString().slice(0, 10),
    newType: "pick",

  };
  handleInputType = (e) => {
    
      this.setState({ newType: e.target.value });
      
  };
  handleAddVisit = (e) => {
    e.preventDefault()
    if(this.state.newType === "pick"){
      alert("Please pick a type of visit")
    }
    else{
    const visit = {
      id: this.counter,
      date: this.state.newDate,
      type: this.state.newType,
    };
    this.counter++;
    this.setState((prevState) => ({ visits: [...prevState.visits, visit] }));
  }
  };
  handleInputData = (e) => {
    
    this.setState({ newDate: e.target.value });
  };
  handleDeleteVisit = (id) => {
    let visits = [...this.state.visits]
    visits = visits.filter(visit => visit.id !== id)
    this.setState({visits})
  }
 
  render() {
    // const visits = this.state.map((visit) => <Visit />);
    return (
      <div className="userPanel">
        <NavLink className="login__back" to="/">
          Home
        </NavLink>
        <h1 className="userPanel__header">Hairdresser</h1>
        <AddForm handleAddVisit={this.handleAddVisit} handleInputData={this.handleInputData} handleInputType={this.handleInputType} newDate={this.state.newDate} newType={this.state.newType} />
        <VisitList deleteVisit={this.handleDeleteVisit} visits={this.state.visits}/>
      </div>
    );
  }
}

export default UserPanel;
