import Header from "./components/Layout/Header";
import Subheader from "./components/Layout/Subheader";
import Products from "./components/Products/Products";
import { useState } from "react";

function App() {
  const [cartItems, setCartItems] = useState(0);
  const handleAddItem = () => {
    setCartItems(cartItems + 1);
  }
  const handleRemoveItem = () => {
    setCartItems(cartItems - 1);
  }
  return (
    <div>
      <Header count={cartItems} />
      <Subheader />
      <Products onAddItem={handleAddItem} onRemoveItem={handleRemoveItem}/>
    </div>
  );
}

export default App;
