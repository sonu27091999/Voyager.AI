import Header from "./components/Layout/Header";
import Subheader from "./components/Layout/Subheader";
import Products from "./components/Products/Products";
import { Routes, Route } from 'react-router-dom'
import AuthIndex from "./components/Auth";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { checkIsLoggedIn } from "./actions/auth";

function App() {
  const dispatch = useDispatch();
  const authState = useSelector(state => state.auth);
  useEffect(() => {
    dispatch(checkIsLoggedIn(() => { }));
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
        {
          !authState.idToken &&
          ['login', 'signup'].map((path, index) => <Route path={path} key={index} element={<AuthIndex path={path} />} />)
        }
        <Route to="/" from="/login" />
        <Route to="/" from="/signup" />
        <Route
          path="/404"
          element={
            <main style={{ padding: "1rem" }}>
              <p>There's nothing here!</p>
            </main>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
