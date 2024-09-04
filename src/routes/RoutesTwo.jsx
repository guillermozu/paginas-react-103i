import React from "react";
import { Routes, Route } from "react-router-dom";
import AdminScreen from "../views/AdminScreen";
import ProtectedRoutes from "./ProtectedRoutes";
import HomeScreen from "../views/HomeScreen";
import AboutScreen from "../views/AboutScreen";
import ErrorScreen from "../views/ErrorScreen";
import MenuApp from "../components/MenuApp";
import ProductScreen from "../views/ProductScreen";
const RoutesTwo = () => {
  return (
    <>
      <MenuApp />
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/about" element={<AboutScreen />} />
        <Route path="/product/:id" element={<ProductScreen />} />
        <Route
          path="/admin"
          element={
            <ProtectedRoutes>
              <AdminScreen />
            </ProtectedRoutes>
          }
        />
        <Route path="*" element={<ErrorScreen />} />
      </Routes>
    </>
  );
};

export default RoutesTwo;
