import React from "react";
import Typewriter from "typewriter-effect";
import {motion} from "framer-motion"

import { TypeAnimation } from "react-type-animation";

import img1 from "../component/IMG_20230307_024706.png";


import { AiFillInstagram } from "react-icons/ai";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
const Home = () => {
  return (
    <>
      <section className="home container" id="home">
        <svg 
        
        className="wave_1"
        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="blue"
            fill-opacity="1"
            d="M0,64L1440,256L1440,0L0,0Z"
          ></path>
        </svg>
        
        <svg
        
          className="wave"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          
          <path
            fill="blue"
            fill-opacity="1"
            d="M0,0L1440,224L1440,320L0,320Z"
          ></path>
        
        </svg>

        <div className="home-content">
          
            <motion.div
            initial={{
              y: "-100%",
              opacity: 0,
            }}
            whileInView={{
              y: 0,
              opacity: 1,
            }}
            transition={{
              delay: 0.1,
            }}
             className="home-img">
              <img src={img1} alt="" />
            </motion.div>
          
        
            <motion.div 
            initial={{
              x: "-100%",
              opacity: 0,
            }}
            whileInView={{
              x: 0,
              opacity: 1,
            }}
            transition={{
              delay: 0.1,
            }} className="home-text">
              <div className="home-text-a">
                <h3>Namastey,</h3>
                <h2 style={{ color: "black" }}>
                  <Typewriter
                    onInit={(typewriter) => {
                      typewriter

                        .typeString("< >_I'm_RITIK_YADAV_< / >")

                        .start();
                    }}
                  />
                </h2>
                <br />

                <TypeAnimation
                  sequence={[
                    " < > MERN Stack Developer < / > ", // Types 'One'
                    2000, // Waits 1s
                    " < > Full Stack web Developer  < / > ",
                    1000,
                    

                    () => {
                      console.log("Sequence completed"); // Place optional callbacks anywhere in the array
                    },
                  ]}
                  wrapper="span"
                  cursor={true}
                  repeat={Infinity}
                  style={{ fontSize: "1.2em", display: "inline-block" }}
                />

                <p>
                  Looking for a website ???? <br />
                  then you have come in right place !! <br />
                  Choosing me for designing your website such as <br /> E -
                  COMMERCE , BUSINESS , SCHOOL / COLLEGE ADDMISSION , PORTFOLIO
                  etc . . . <br />
                  will be your good choice . . . <br /> with the best of my
                  knowledge, <br /> I can provide you the best website . . . .
                  <br />
                </p>
              </div>

              <div className="social">
                <motion.a
                initial={{
          y: "-100%",
          opacity: 0,
        }}
        whileInView={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          delay: 0.3,
        }} href="https://instagram.com/ritik_yadav_23?igshid=ZDdkNTZiNTM= ">
                  {" "}
                  <AiFillInstagram
                    style={{ color: "white", fontSize: "30px" }}
                  />
                </motion.a>
                <motion.a
                initial={{
          y: "-100%",
          opacity: 0,
        }}
        whileInView={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          delay: 0.4,
        }} href="https://wa.me/6260380884">
                  <AiOutlineWhatsApp
                    style={{ color: "white", fontSize: "30px" }}
                  />
                </motion.a>
                <motion.a
                initial={{
          y: "-100%",
          opacity: 0,
        }}
        whileInView={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          delay: 0.5,
        }} href="https://www.linkedin.com/in/ritik-yadav-736133263">
                  <AiFillLinkedin
                    style={{ color: "white", fontSize: "30px" }}
                  />
                </motion.a>
              </div>
            </motion.div>
          
        </div>
      </section>
    </>
  );
};

export default Home;
