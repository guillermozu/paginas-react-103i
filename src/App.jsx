import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginScreen from "./views/LoginScreen";
import RoutesTwo from "./routes/RoutesTwo";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<RoutesTwo />} />
        <Route path="/login" element={<LoginScreen />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
