import React from "react";

class AddForm extends React.Component {
  minData = new Date().toISOString().slice(0, 10);
  // state = {
  //   data: this.minData,
  //   type: "Cokolwiek",
  // };
 handleInputData = (e) => {
   this.props.handleInputData(e)
   console.log("obsługa daty");
 }
 handleInputType = (e) => {
  this.props.handleInputType(e)
  console.log("obsługa typu");
}
handleAddVisit = (e) => {
  this.props.handleAddVisit(e)
  console.log("wysłanie formularza");
}
  render() {
    const {newDate, newTask } = this.props;
    return (
      <div className="userPanel__info">
        <form onSubmit={this.handleAddVisit} className="userPanel__info__data">
          <h2>Pick a date and add</h2>
          <input
            type="date"
            onChange={this.handleInputData}
            value={newDate}
          />
          <p>
            <select id="visitType" value={newTask} onChange={this.handleInputType}>
              <option value="coloring">Coloring</option>
              <option value="shearing">Shearing</option>
              <option value="wash">Wash</option>
              <option value="balayage">Balayage</option>
            </select>
          </p>
          <button className="userPanel__info__button">
            Add visit
          </button>
        </form>
      </div>
    );
  }
}

export default AddForm;
