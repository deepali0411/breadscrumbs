import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/home/Home";
import ProductDetail from "./pages/productDetail/ProductDetail";
import Products from "./pages/products/Products";
import "./App.css";
import BreadScrumb from "./components/breadScrumb/BreadScrumb";

function App() {

  return (
    <div className="App">
      {/* breadscrumbs */}
      <BrowserRouter>
      <BreadScrumb /> 
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductDetail />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
