import React from "react";

class AddForm extends React.Component {
   
  render() {
    const {newDate,handleInputData, handleInputType, handleAddVisit} = this.props
    const minDate = new Date().toISOString().slice(0, 10);
    return (
      <div className="userPanel__info">
        <form onSubmit={handleAddVisit} className="userPanel__info__data">
          <h2>Pick a date and add</h2>
          <input
            type="date"
            value={newDate}
            min={minDate}
            onChange={handleInputData}
            

          />
          <p>
            <select id="visitType" onChange={handleInputType}>
            <option value="pick">Pick</option>
              <option value="Coloring">Coloring</option>
              <option value="Shearing">Shearing</option>
              <option value="Wash">Wash</option>
              <option value="Balayage">Balayage</option>
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
