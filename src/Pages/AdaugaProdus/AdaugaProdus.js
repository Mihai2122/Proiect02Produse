import ProdusForm from "./ProdusForm";

const AdaugaProdus = (props) => {
  const formSubmit = (infoProdus) => {
    console.log("In comp Adauga Produs");
    console.log("Info Produs");
    props.onAddProdus(infoProdus);
  };

  return (
    <div>
      <ProdusForm onFormSubmit={formSubmit} />
    </div>
  );
};

export default AdaugaProdus;
