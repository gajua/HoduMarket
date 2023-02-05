import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../Home/Home";
import NotFound from "../404/NotFound";
import Login from "../Login/Login";
import Payment from "../Payment/Payment";
import ProductDetail from "../ProductDetail/ProductDetail";
import ShoppingCart from "../ShoppingCart/ShoppingCart";
import Signup from "../Signup/Signup";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/shoppingcart" element={<ShoppingCart />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/pruduct/:product_id" element={<ProductDetail />} />
          <Route path="/*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
