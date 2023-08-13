import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; 
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Main from "./components/main/Main";
import Faq from "./components/faq/Faq"; 
import Privacy from './components/privacy/Privacy';

const App = () => {
  return (
    <Router>
      <>
        <Header />
        <Routes>
          <Route path="/faq" element={<Faq />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/" element={<Main />} />
        </Routes>
        <Footer />
      </>
    </Router>
  );
};

export default App;
