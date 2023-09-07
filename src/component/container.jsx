import React from "react";
import Home from "./home";
import Education from "./education";
import About from "./about";
import Services from "./services";
import Contact from "./contact";



const Container = () => {
  return (
    <div>
        <Home/>
      <Education/>
      <About/>
      <Services/>
      <Contact/>
    </div>
  );
};

export default Container;
