import Header from "./components/Layout/Header";
import Subheader from "./components/Layout/Subheader";
import Products from "./components/Products/Products";
import { useState } from "react";

function App() {
  const [cartItems, setCartItems] = useState([]);
  const handleAddItem = (item) => {
    // setCartItems(cartItems + 1);
    let items = [...cartItems];
    let index = items.findIndex(i => i.id === item.id);
    if (index > -1) {
      items[index] = item;
    }
    else {
      items = [...items, item];
    }
    setCartItems([...items]);
  }
  const handleRemoveItem = (item) => {
    // setCartItems(cartItems - 1);
    let items = [...cartItems];
    let index = items.findIndex(i => i.id === item.id);
    if (items[index].quantity === 0) {
      items.splice(index, 1);
    }
    else {
      items[index] = item;
    }
    setCartItems([...items]);
  }
  return (
    <div>
      <Header count={cartItems.length} items={cartItems}/>
      <Subheader />
      <Products onAddItem={handleAddItem} onRemoveItem={handleRemoveItem} />
    </div>
  );
}

export default App;
