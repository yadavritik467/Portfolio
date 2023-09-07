import React from "react";
import { motion  } from "framer-motion";

import { AiOutlineLink } from "react-icons/ai";

const Services = () => {
  return (
    <>
      <section className="service container" id="service">
        <h1 className="heading">
          {" "}
          SER<span>VICES</span>
        </h1>
        <hr />
        <div className="service-text">
         
            <p > The Services I provide are making website Such as  <br />
            E - Commerce, Portfolio , Food-store , Gym-Website <br /> etc  . . . </p>
      
        </div>
        <div className="project">
        
            <h1 className="heading">
              <span>My </span> Projects{" "}
            </h1>
            <br />

            <div className="pro-box-a">
              <div   className="pro">
                <img src="https://imgs.search.brave.com/Mth7eZ8JhNVr61HhAHrvYIRG36WY2ljj3YsDV5Gu0jQ/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by9z/dXBlcm1hcmtldC1j/YXJ0XzUzODc2LTY1/NjE1LmpwZz9zaXpl/PTYyNiZleHQ9anBn" alt="food_store" />
                <p> This website is full stack "Food Store App" <br />
                 by using "MERN Stack" with phone responsive and user authentication. <br />
                 Also i have provided Admin pannel in this website <br /> where admin can create product and  access its customer details except their password. <br />

                 For storing data i have used "MongoDB"
                  
                 
                 
                </p>
                <a href="https://food-front-sandy.vercel.app/">
                  <AiOutlineLink /> Food-Store
                </a>
              </div>

              <div   className="pro">
                <img src="https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="e-commerce" />
                <p> This website is full stack "E-commerce App" <br />
                 by using "MERN Stack" with phone responsive and user authentication. <br />
                 Also i have provided Admin pannel in this website <br /> where admin can create product and  access its customer details except their password. <br />
                 also provided features such as search function,price-filter function, add to cart, buy/cancle order, online/cod order payment. . . <br />
                 For storing data i have used "MongoDB"
                  
                 
                 
                </p>
                <a href="https://priyansh-ecommerce-front.vercel.app/" target="_blank">
                  <AiOutlineLink /> Ecommerce App
                </a>
              </div>
              {/* <div   className="pro">
                <img src="https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="e-commerce" />
                <p> This website is full stack "E-commerce App" <br />
                 by using "MERN Stack" with phone responsive and user authentication. <br />
                 Also i have provided Admin pannel in this website <br /> where admin can create product and  access its customer details except their password. <br />
                 also provided features such as search function,price-filter function, add to cart, buy/cancle order, online/cod order payment. . . <br />
                 For storing data i have used "MongoDB"
                  
                 
                 
                </p>
                <a href="https://priyansh-ecommerce-front.vercel.app/" target="_blank">
                  <AiOutlineLink /> Ecommerce App
                </a>
              </div> */}
            </div>
       
        </div>
      </section>
    </>
  );
};

export default Services;
