import React from "react";

import { AiOutlinePhone } from "react-icons/ai";
import { AiFillMail } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
const Footer = () => {
  return (
    <div className="info">
    
        <h3>
          <a href="mailto:Yadavritik467@gmail.com">
            <AiFillMail /> Yadavritik467@gmail.com
          </a>
        </h3>
        <br />
        <h3>
          <a href="tel:+6260380884">
            <AiOutlinePhone /> +91 6260 380 884
          </a>
        </h3>
        <br />
        <h3>
          <a href="">
            <GoLocation /> Raigarh , Chhattishagarh (INDIA) - 496001
          </a>
        </h3>
        <br />
     
    </div>
  );
};

export default Footer;
