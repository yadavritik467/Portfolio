import React from "react";
import {motion} from "framer-motion"

import { AiOutlineDownload } from "react-icons/ai";
const About = () => {
  return (
    <>
      <section className="about " id="about">
        <h2 className="heading">
          Ab<span>out</span>
        </h2>
        <hr />
        <br />
        <div className="about-container">
          <div className="about-data">
            <motion.div initial={{
          x: "-100%",
          opacity: 0,
        }}
        whileInView={{
          x: 0,
          opacity: 1,
        }}
        transition={{
          delay: 0.1,
        }}>
             
                <h3>
                  <span>Name </span>
                </h3>
                <h3>
                  <span>DOB </span>
                </h3>
                <h3>
                  <span>Qualification </span>
                </h3>
                <h3>
                  <span>Post </span>
                </h3>
                <h3>
                  <span>Language </span>
                </h3>
                <div>
                  <a
                    href="https://drive.google.com/file/d/1mIaUF51zPkiZ91HBOpxwy3lENsgswvzn/view?usp=share_link" target="_blank"
                    style={{
                      color: "black",
                      borderBottom: "1px solid black",
                    }}
                  >
                    Download CV
                    <AiOutlineDownload style={{ fontSize: "20px" }} />
                  </a>
                </div>
              
            </motion.div>
            <motion.div initial={{
          x: "-100%",
          opacity: 0,
        }}
        whileInView={{
          x: 0,
          opacity: 1,
        }}
        transition={{
          delay: 0.1,
        }}>
              
                <h3>
                  <span style={{ color: "white" }}>: Ritik Yadav</span>
                </h3>
                <h3>
                  <span style={{ color: "white" }}>: 23 / 12 / 1999</span>
                </h3>
                <h3>
                  <span style={{ color: "white" }}>: B.SC. (Mathematics)</span>{" "}
                </h3>
                <h3>
                  <span style={{ color: "white" }}>
                    : Full Stack Web Developer
                  </span>{" "}
                </h3>
                <h3>
                  <span style={{ color: "white" }}>: English / Hindi</span>{" "}
                </h3>
            
            </motion.div>

            {/* <iframe src="" width="140" height="10" frameborder="0" style="color: white;"> sdasd</iframe>  */}
          </div>

      
            <div className="skills">
              <h2 style={{fontWeight:'bolder'}} >My Skills :</h2>
              <br />
              <div className="item">
                <div className="item-text">
                  <span>HTML5</span>
                  <motion.span initial={{
          y: "-100%",
          opacity: 0,
        }}
        whileInView={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          delay: 0.1,
        }} className="w-90">80%</motion.span>
                </div>
                <div className="progress">
                  <div className="progress-bar" id="w-80"></div>
                </div>
              </div>

              <div className="item">
                <div className="item-text">
                  <span>CSS</span>
                  <motion.span initial={{
          y: "-100%",
          opacity: 0,
        }}
        whileInView={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          delay: 0.2,
        }} className="w-70">70%</motion.span>
                </div>
                <div className="progress">
                  <div className="progress-bar" id="w-70"></div>
                </div>
              </div>

              <div className="item">
                <div className="item-text">
                  <span>JAVASCRIPT</span>
                  <motion.span initial={{
          y: "-100%",
          opacity: 0,
        }}
        whileInView={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          delay: 0.3,
        }} className="w-62">62%</motion.span>
                </div>
                <div className="progress">
                  <div className="progress-bar" id="w-62"></div>
                </div>
              </div>

              <div className="item">
                <div className="item-text">
                  <span>NODE JS</span>
                  <motion.span initial={{
          y: "-100%",
          opacity: 0,
        }}
        whileInView={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          delay: 0.4,
        }} className="w-65">65%</motion.span>
                </div>
                <div className="progress">
                  <div className="progress-bar" id="w-65"></div>
                </div>
              </div>

              <div className="item">
                <div className="item-text">
                  <span>REACT JS</span>
                  <motion.span initial={{
          y: "-100%",
          opacity: 0,
        }}
        whileInView={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          delay: 0.5,
        }} className="w-62">62%</motion.span>
                </div>
                <div className="progress">
                  <div className="progress-bar" id="w-62"></div>
                </div>
              </div>

              <div className="item">
                <div className="item-text">
                  <span>MONGO DB</span>
                  <motion.span initial={{
          y: "-100%",
          opacity: 0,
        }}
        whileInView={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          delay: 0.6,
        }} className="w-68">68%</motion.span>
                </div>
                <div className="progress">
                  <div className="progress-bar" id="w-68"></div>
                </div>
              </div>

              <div className="item">
                <div className="item-text">
                  <span>BOOTSTRAP</span>
                  <motion.span initial={{
          y: "-100%",
          opacity: 0,
        }}
        whileInView={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          delay: 0.7,
        }} className="w-75">75%</motion.span>
                </div>
                <div className="progress">
                  <div className="progress-bar" id="w-75"></div>
                </div>
              </div>
            </div>
       
        </div>
      </section>
    </>
  );
};

export default About;
