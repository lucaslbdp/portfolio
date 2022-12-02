import React from "react";
import Header from "./components/common/header/Header";
import Nav from "./components/common/nav/Nav";
import About from "./components/about/About";
import Experience from "./components/experience/Experience";
import Services from "./components/servicios/Services";
import Contact from "./components/contact/Contact";
import './App.css';
import Footer from "./components/common/footer/Footer";
import Portfolio from "./components/portfolio/Portfolio";

function App() {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Experience />
      <Services />
      <Portfolio />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
