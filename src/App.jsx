import { useState } from "react";
import Navbar from "./Components/Layout/Navbar";

function App() {
  const [selectCard, setSelectCard] = useState([]);

  return (
    <>
      <Navbar SelectCard={selectCard} />
    </>
  );
}

export default App;