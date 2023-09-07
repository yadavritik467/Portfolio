import React from "react";
import { useForm, ValidationError } from "@formspree/react";

import { AiOutlinePhone } from "react-icons/ai";
import { AiOutlineSend } from "react-icons/ai";
const Contact = () => {
  const [state, handleSubmit] = useForm("mjvdlgyd");
  if (state.succeeded) {
    alert( " Message has been sent !!!");
    // return <p style={{textAlign:"center", color:"black", backgroundColor:"gray", fontWeight:"bolder"}}> Message sent successfully !</p>;
  }
  return (
    <>
      <section className="contact container" id="contact">
        <h1 className="heading">
          {" "}
          <span>Contact</span> Me
        </h1>

        <hr />
        <br />
        <br />

        <div className="row">
         
            <form
              onSubmit={handleSubmit}
              action="https://formspree.io/f/mjvdlgyd"
              method="POST"
              className="form"
            >
              <input
                type="text"
                placeholder="Name"
                name="name"
                className="box"
                id="name"
                required
              />

              <ValidationError
                prefix="Name"
                field="name"
                errors={state.errors}
              />
              <br />

              <input
                type="email"
                placeholder="Email"
                name="email"
                className="box"
                id="email"
                required
              />
              <br />
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
              />

              <input
                type="number"
                placeholder="Phone"
                name="Phone "
                className="box"
                id="phone"
                required
              />
              <br />
              <ValidationError
                prefix="Number"
                field="number"
                errors={state.errors}
              />

              <textarea
                required
                id="textarea"
                cols="50"
                rows="10"
                className="box message"
                name="message"
                placeholder="Tell me, what type of website you want ??"
                style={{ height: "136px", width: "325" }}
              ></textarea>
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
              />

              <br />
              <button
                type="submit"
                className="btn"
                id="btn"
                disabled={state.submitting}
              >
                {" "}
                Send <AiOutlineSend />
              </button>
            </form>
      

     
            <AiOutlinePhone className="college-a" />
          
        </div>
      </section>
    </>
  );
};

export default Contact;
