import React from "react";
import Visit from "./Visit.js";

const VisitsList = (props) => {
  const { visits, deleteVisit } = props;
  const visitsList = visits.map((visit) => (
    <Visit  key={visit.id} date={visit.date} type={visit.type} deleteVisit={deleteVisit} id={visit.id}/>
  ));
  return (
    <div className="userPanel__info">
      <div className=" userPanel__info--visits">
        <h2>Your visits:</h2>
        <ul>{visitsList}</ul>
      </div>
    </div>
  );
};
export default VisitsList;
