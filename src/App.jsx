import Navbar from "./component/navbar";
import "./App.css";

import Footer from "./component/footer";
import { useState } from "react";
import NavbarPhone from "./component/navbarPhone";
import NoFound from "./component/noFound";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Container from "./component/container";

function App() {
  const [open, setOpen] = useState(false);
  console.log(open);
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar open={open} setOpen={setOpen} />
        <NavbarPhone open={open} setOpen={setOpen} />
        <Routes>
          <Route path="/" element={<Container />} />
          <Route path="*" element={<NoFound />} />
        </Routes>
       
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
