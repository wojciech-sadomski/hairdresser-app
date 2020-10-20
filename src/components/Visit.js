import React from "react";

const Visit = (props) => {
  const { date, type, deleteVisit, id } = props;
  return (
    <>
      <div className="visit">
        <li>
          <strong>{type}</strong> in <span>{date}</span>
        </li>
        <button onClick={()=>deleteVisit(id)} className="visit__button">Dismiss</button>
      </div>
    </>
  );
};
export default Visit;
