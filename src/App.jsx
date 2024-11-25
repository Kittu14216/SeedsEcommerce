// src/App.js
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./HomePage";

import Layout from "./Layout";
import NotFound from "./Components/NotFoundPage/NotFoundpage";
import Products from "./Components/Products/Products";
import ProductDetails from "./Components/ProductDetails/ProductDetails";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/products/:slug" element={<Products />} />
          <Route path="/product-details/:slug" element={<ProductDetails />} />
          <Route path="*" element={<NotFound />} />
        </Route>
        {/* <Route path="/products/:slug" element={<Products />} />
        <Route path="/product-details/:slug" element={<ProductDetails />} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
