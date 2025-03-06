import React from "react";
import Header from "./Components/Header/Header";
import { Routes, Route } from "react-router-dom";
import PageNotFound from "./Pages/PageNotFound";
import Home from "./Pages/Home";
import Tour from "./Pages/Tour";
import Contact from "./Pages/Contact";
import BandNmae from "./Pages/BandNmae";

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tour" element={<Tour />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/band" element={<BandNmae />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
};

export default App;
