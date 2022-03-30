import React from "react"
import Header from "./components/Header"
import Hero from "./components/Hero"
import About from "./components/About"
import WhyUs from "./components/WhyUs"
import Products from "./components/Products"
import Partners from "./components/Partners"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import './styles/App.css';


function App() {
  return (
    <>
    <Header/>
    <Hero/>
    <About/>
    <WhyUs/>
    <Products/>
    <Partners/>
    <Contact/>
    <Footer/>
    </>
  );
}

export default App;
