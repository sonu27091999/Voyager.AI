import Header from "./components/Layout/Header";
import Subheader from "./components/Layout/Subheader";
import Products from "./components/Products/Products";
import { Routes, Route } from 'react-router-dom'
import AuthIndex from "./components/Auth";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { checkIsLoggedIn } from "./actions/auth";

function App() {
  const dispatch=useDispatch();
 
  useEffect(() => {
    dispatch(checkIsLoggedIn(()=>{}));
  }, [])
  

  return (
    <div>
      <Header />
      <Subheader />
      <Routes>
        {/* {We no need to write exact beause it is and update react-router-dom version 6.3.0} */}
        <Route path="/" element={<Products />}>
          <Route path=":category" element={<Products />} />
        </Route>
        {['login', 'signup'].map((path,index) => <Route path={path} key={index} element={<AuthIndex path={path}/>} />)}
        <Route path="*" element={<h2>404 Not found</h2>}></Route>
      </Routes>
    </div>
  );
}

export default App;
