import "./App.css";
import ShoppingCart from "./ShoppingCart";
import Header from "./Header";
import ProductsFetch from "./ProductsFetch";
import { useState } from "react";

function App() {
  const [currentItem, setCurrentItem] = useState([]);

  const getShoppingItem = (item) => {
     setCurrentItem(item)
  }
  
  return (
    <>
      <Header />
      <ShoppingCart currentItem={currentItem}/>
      <ProductsFetch getShoppingItem={getShoppingItem}/>
    </>
  );
}

export default App;
