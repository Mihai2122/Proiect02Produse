import React from "react";

const Produs = (props) => {
  return (
    <div>
      <img src={props.imageLink} width = '200px' />
      <div>
        <h2>{props.title}</h2>
      </div>
      <div>
        <h3>{props.price}</h3>
      </div>
    </div>
  );
};

export default Produs;
