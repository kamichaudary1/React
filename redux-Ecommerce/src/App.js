import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Products from "./components/Products";
import ProductDetail from "./components/ProductDetail";
import Cart from "./components/Cart";
import CheckOut from "./components/CheckOut";

function App() {

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route index element={<Products />} ></Route>
        <Route path="/ProductDetail/:id" element={<ProductDetail />}></Route>
        <Route path="/Cart" element={<Cart/ >}></Route>
        <Route path="/CheckOut" element={<CheckOut />}></Route>
      </Routes>      
    </BrowserRouter>
    
  );
}

export default App;
