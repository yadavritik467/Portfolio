import React from "react";
import { AiFillHome } from "react-icons/ai";

const NavbarPhone = ({ open , setOpen }) => {
  return (
    <>
      <div className="nav-container-a">
        <ul className={`navbar-phone ${!open ? "navbar-phone" :"navbar-phone-come"}`}>
          <a href="#home" onClick={() => setOpen(false)}>
            {" "}
            <AiFillHome style={{ fontSize: "30px" }} onClick={() => setOpen(false)} />{" "}
          </a>

          <a href="#education" onClick={() => setOpen(false)} >Education</a>

          <a href="#about" onClick={() => setOpen(false)} >About</a>

          <a href="#service" onClick={() => setOpen(false)} >Services</a>

          <a href="#contact" onClick={() => setOpen(false)} >Contact</a>
        </ul>
      </div>
    </>
  );
};

export default NavbarPhone;
