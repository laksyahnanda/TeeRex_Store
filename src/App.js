import {  Route, Routes } from "react-router-dom";
import "./App.css";

import "./App.css";
import Cart from "./Components/Cart/Cart";
import Container from "./Components/Home/AllRoutes";
import Products from "./Components/Products/Products";
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import AllRoutes from './Components/Home/AllRoutes';


function App() {
  return (
    <div className="App">
  
        <Container>
          <Routes>
            <Route path="/" element={<Products />} />
            <Route path="/cart" element={<Cart/>} />
          </Routes>
        </Container>
   
    </div>
  );
}

export default App;