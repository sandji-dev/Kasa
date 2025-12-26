import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";

import Home from "./pages/Home/Home.jsx";
import Logement from "./pages/Logement/Logement.jsx";
import About from "./pages/About/About.jsx";
import Error404 from "./pages/Error404/Error404.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <Header />

      <main className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/logement/:id" element={<Logement />} />
        
          <Route path="/Error" element={<Error404 />} />
        </Routes>
      </main>

      <Footer />
    </BrowserRouter>
  );
}
