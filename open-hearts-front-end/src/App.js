import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Families from "./components/Families";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Donations from "./components/Donations";
import Error404 from "./components/Error404";
import FamilyDetails1 from "./components/FamilyDetails1";
import AddFamily from "./components/AddFamily";
import Editfamily from "./components/EditFamily";
import "./App.css";
import "./index.css";
import "./families.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/families" element={<Families />} />
          <Route path="/donations" element={<Donations />} />
          <Route path="/families/new" element={<AddFamily />} />
          <Route path="/families/:id" element={<FamilyDetails1 />} />
          <Route path="/families/:id/edit" element={<Editfamily />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
