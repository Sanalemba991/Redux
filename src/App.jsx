import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Correct import for v6

import Header from "./containers/Header"; // Your Header component
import ProductDetails from "./containers/ProductDetails"; // Your ProductDetails component
import "./App.css"; // Your styles

function App() {
  return (
  <>

    <Router>
      <Routes>
        <Route path="/" element={<Header/>} /> {/* Main page with list of products */}
        <Route path="/product/:productId" element={<ProductDetails />} /> {/* Product details page */}
      </Routes>
    </Router>
    </>
  );
}

export default App;
