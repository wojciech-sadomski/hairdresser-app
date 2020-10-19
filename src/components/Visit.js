import React from "react";

const Visit = (props) => {
  const { date, type } = props;
  return (
    <>
      <div className="visit">
        <li>
          <strong>{type}</strong> in <span>{date}</span>
        </li>
        <button className="visit__button">Dismiss</button>
      </div>
    </>
  );
};
export default Visit;
