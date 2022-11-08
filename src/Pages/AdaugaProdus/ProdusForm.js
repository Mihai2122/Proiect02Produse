import React, { useState } from "react";

const ProdusForm = (props) => {
  const [sursaImagine, setSursaImagine] = useState("");
  const [adaugaTitlu, setAdaugaTitlu] = useState("");
  const [adaugaPret, setAdaugaPret] = useState("");

  const imagineHandler = (event) => {
    setSursaImagine(event.target.value);
  };
  const titluHandler = (event) => {
    setAdaugaTitlu(event.target.value);
  };
  const pretHandler = (event) => {
    setAdaugaPret(event.target.value);
  };

  const adaugaHandler = (event) => {
    event.preventDefault();

    const produsAdaugat = {
      imagine: sursaImagine,
      titlu: adaugaTitlu,
      pret: adaugaPret,
    };

    console.log(produsAdaugat);
    console.log("In Componenta Produs Nou");
    setSursaImagine("");
    setAdaugaTitlu("");
    setAdaugaPret("");

props.onFormSubmit(produsAdaugat);

  };


  return (
    <form onSubmit={adaugaHandler}>
      <label>Imagine</label>
      <input type="text" value={sursaImagine} onChange={imagineHandler} />
      <label>Titlu</label>
      <input type="text" value={adaugaTitlu} onChange={titluHandler} />
      <label>Pret</label>
      <input type="number" value={adaugaPret} onChange={pretHandler} />
      <button type="submit">Adauga Produs</button>
    </form>
  );
};

export default ProdusForm;
