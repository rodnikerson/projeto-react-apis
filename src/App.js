import { Route, Routes } from "react-router-dom";
import { Reset } from "./globalStyles";
import Details from "./Pages/Details";
import Home from "./Pages/Home";
import Pokedex from "./Pages/Pokedex";
import { PokemonProvider } from "./PokemonContext";

function App() {
  return (
    <>
      <PokemonProvider>
        <Reset />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pokedex" element={<Pokedex />} />
          <Route path="/details/:id" element={<Details />} />
        </Routes>
      </PokemonProvider>
    </>
  );
}

export default App;
