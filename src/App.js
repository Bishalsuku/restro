import React from "react";

import Footer from "./components/Footer.component";
import Header from "./components/Header.component";
import Menu from "./components/Menu.component";
import Home from "./page/Home.page";
import Contact from "./page/Contact.page";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
};

export default App;
