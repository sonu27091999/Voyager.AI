import Header from "./components/Layout/Header";
import Subheader from "./components/Layout/Subheader";
import Products from "./components/Products/Products";
import { useState } from "react";

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [eventQueue, setEventQueue] = useState({
    id: "",
    type: ""
  })
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

  //type ===-1, decrease
  // type ===1 , increase
  const handleEventQueue = (id, type) => {
    setEventQueue({ id, type });
    // console.log('hello event' ,id ,type);
  }
  return (
    <div>
      <Header count={cartItems.length} items={cartItems} onHandleEventQueue={handleEventQueue} />
      <Subheader />
      <Products onAddItem={handleAddItem} onRemoveItem={handleRemoveItem} eventState={eventQueue}/>
    </div>
  );
}

export default App;
