import { NavLink, Route } from "react-router-dom";
import AdaugaProdus from "./Pages/AdaugaProdus/AdaugaProdus";
import ListaProduse from "./Pages/ListaProduse";
import produse from "./DateIntrare";
import { useState } from "react";

function App() {
  const [lista, setLista] = useState(produse);

  const adaugaProdus = (produs) => {
    console.log(lista);
    setLista((previous) => [...previous, produs]);
    console.log(lista);
  };

  return (
    <div>
      <h2>
        <ul>
          <li>
            <NavLink to="/lista">Lista Produse</NavLink>
          </li>
          <li>
            <NavLink to="/adauga">Add</NavLink>
          </li>
        </ul>
      </h2>

      <Route path="/lista">
        <ListaProduse produse={lista} />
      </Route>
      <Route path="/adauga">
        <AdaugaProdus onAddProdus={adaugaProdus} />
      </Route>
    </div>
  );
}

export default App;
