import { useState } from "react";
import Navbar from "./Components/Layout/Navbar";
import Header from "./Components/ui/Header";
import Products from "./Components/Pages/Products";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import GetStarted from "./Components/ui/GetStarted";

const ProductsPromis = fetch("/ProductsCard.json").then((res) => res.json());

function App() {
  const [selectCard, setSelectCard] = useState([]);

  return (
    <>
    <div>
      <Navbar SelectCard={selectCard} />
      <Header />
      <Products
        ProductsPromis={ProductsPromis}
        SelectCard={selectCard}
        setSelectCard={setSelectCard}
      />z
      <GetStarted />
      </div>
      <ToastContainer />
    </>
  );
}

export default App;