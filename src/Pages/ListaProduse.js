import React, { useState } from "react";
import Produs from "./Produs";

const ListaProduse = (props) => {
  let lista = props.produse;
  console.log(lista);
  return (
    <div>
      {lista.map((element) => (
        <div key={element.title}>
          <Produs
            imageLink={element.imageLink}
            title={element.title}
            price={element.price}
          ></Produs>
          <p>_____________________</p>
        </div>
      ))}
    </div>
  );
};

export default ListaProduse;
