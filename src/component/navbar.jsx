import React from "react";
import { AiFillHome } from "react-icons/ai";
import { GrMenu } from "react-icons/gr";
import { RxCross2 } from "react-icons/rx";
const Navbar = ({ open, setOpen }) => {
  return (
    <>
      <header>
        <div
          className="nav-container"
          style={{ backgroundColor: "#111", boxShadow: "0px 0px 5px  #111" }}
        >
          <ul className="navbar">
            <li>
              <a href="#home" className="nav-link">
                {" "}
                <AiFillHome style={{ fontSize: "30px" }} />{" "}
              </a>
            </li>
            <li>
              <a
                href="#education"
                className="nav-link"
                style={{ marginLeft: "auto" }}
                onClick={() => setOpen(false)}
              >
                Education
              </a>
            </li>
            <li>
              <a href="#about" className="nav-link">
                About
              </a>
            </li>
            <li>
              <a href="#service" className="nav-link">
                Services
              </a>
            </li>

            <li>
              <a href="#contact" className="nav-link">
                Contact
              </a>
            </li>
          </ul>

          <div>
            { !open ? (
              <button className="menu-icon" onClick={() => setOpen(true)}>
                <GrMenu /> 
              </button>
            ) : (
              <button className="menu-icon" onClick={() => setOpen(false)}>
                 <RxCross2 />
              </button>
            )}

           
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
