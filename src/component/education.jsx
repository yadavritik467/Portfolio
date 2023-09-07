import React from "react";
import {motion} from "framer-motion"

import { FcGraduationCap } from "react-icons/fc";

const Education = () => {
  return (
    <>
      <section className="education container" id="education">
        <h1 className="heading">
          {" "}
          My <span>Education</span>
        </h1>
        <hr />
        <br />

        <div className="education-container">
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
        }} className="education-content">
           
              <div>
                <FcGraduationCap />
                <span>2023</span><br />
                
                <h3>Full Stack Web Developer</h3>
                
                <p>Here, I have been certified from</p>

                <p> " !! GEEKSFORGEEKS !!"</p>
                <p>as a "Full Stack Web Developer" . . . .</p>
                <br />
                <a
                  href="https://media.geeksforgeeks.org/courses/certificates/9bf56cd02c6af569483d7419e91e04f4.pdf"
                  className=" result"
                  target="blank"
                >
                  See My Certificate
                </a>
              </div><br />

              <div>
                <FcGraduationCap />
                <span>2021</span>
                <h3>Bachelor Of Science (Mathematics)</h3>
                <p>
                   From KG GOVT. ARTS AND SCIENCE COLLEGE
                   RAIGARH <br /> ( C. G. ) . . .  And have secured with 61.41 % . . .
                   
                </p>
                <br />
                <a href="https://drive.google.com/file/d/1GKBA07jw93Qa8UomJLcwt0v6DMb0rzUy/view?usp=drivesdk "  className=" result" target="_blank">
                  See My result
                </a>
                <br />
                
              </div><br />


              <div>
                <FcGraduationCap />
                <span>2018 & 2015</span>
                <h3>12th & 10th</h3>
                <p>
                  In my 12th standard , I have secured my marks with 72% in (Maths) Subject . . . <br />
                  And ,
                  In my 10th standard , I have secured my marks with 70% . . .
                </p>
                <br />
                <a href="https://drive.google.com/file/d/1GRvHI5-ht19ve3_dAVioSLXsQSppR-pj/view?usp=drivesdk" className=" result" target="_blank">
                  See My result
                </a>
                <br />
                
              </div><br />
            
          </motion.div>

          <div>
        
              <FcGraduationCap className="college" />
       
          </div>
        </div>
      </section>
    </>
  );
};

export default Education;
