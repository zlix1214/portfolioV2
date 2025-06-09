import "./contact.scss";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const variants = {
  initial: {
    y: 500,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1,
    },
  },
};

const Contact = () => {
  const ref = useRef();
  const formRef = useRef();

  const isInView = useInView(ref, { margin: "-100px" });

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_m28mrm6", "template_w7vzoha", formRef.current, {
        publicKey: "T6d7SBmBpCpsjIdZW",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <motion.div
      className="contact"
      variants={variants}
      initial="initial"
      whileInView="animate"
    >
      <motion.div variants={variants} className="textContainer">
        <motion.h1 variants={variants}>Let's work together</motion.h1>
        <motion.div variants={variants} className="item">
          <h2>Mail</h2>
          <span>hello@email.com</span>
        </motion.div>
        <div variants={variants} className="item">
          <h2>Address</h2>
          <span>hello street New York</span>
        </div>
        <div variants={variants} className="item">
          <h2>Phone</h2>
          <span>+1 234 5678</span>
        </div>
      </motion.div>
      <div className="formContainer">
        <motion.div
          className="airplaneSvg"
          initial={{ opacity: 1 }}
          whileInView={{ opacity: 0 }}
          transition={{ delay: 3, duration: 1 }}
          ref={ref}
        >
          {/* <svg
            xmlns:sketch="http://www.bohemiancoding.com/sketch/ns"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            version="1.1"
            id="Layer_1"
            viewBox="0 0 64 38"
            enable-background="new 0 0 64 38"
            xml:space="preserve"
          >
            <title>Paper-plane</title>
            <desc>Created with Sketch.</desc>
            <g id="Page-1" sketch:type="MSPage">
              <g
                id="Paper-plane"
                transform="translate(1.000000, 2.000000)"
                sketch:type="MSLayerGroup"
              >
                <motion.path
                  id="Shape"
                  sketch:type="MSShapeGroup"
                  fill="none"
                  stroke-width="2"
                  stroke-linejoin="round"
                  initial={{ pathLength: 0 }}
                  animate={isInView && { pathLength: 1 }}
                  transition={{ duration: 3 }}
                  d="M27,22.2    l-4.8,10.012l8.391-7.115L22.2,32.212V20.4L61.375,1.125L22.2,20.4l-21-1.9c-0.9-0.3-1.4-1.3-1.1-2.3L60.8,0    c0.9,0.3,1.4,1.3,1.1,2.3L43.8,32.8c-0.3,0.9-1.3,1.4-2.3,1.1L27,22.2L61.375,1.125L27,22.2z"
                />
              </g>
            </g>
          </svg> */}
          <svg id="Layer_1" viewBox="0 0 64 38">
            <motion.path
              id="Shape"
              sketch:type="MSShapeGroup"
              fill="none"
              stroke-width="2"
              stroke-linejoin="round"
              initial={{ pathLength: 0 }}
              animate={isInView && { pathLength: 1 }}
              transition={{ duration: 3 }}
              d="M27,22.2    l-4.8,10.012l8.391-7.115L22.2,32.212V20.4L61.375,1.125L22.2,20.4l-21-1.9c-0.9-0.3-1.4-1.3-1.1-2.3L60.8,0    c0.9,0.3,1.4,1.3,1.1,2.3L43.8,32.8c-0.3,0.9-1.3,1.4-2.3,1.1L27,22.2L61.375,1.125L27,22.2z"
            />
          </svg>
        </motion.div>
        <motion.form
          onSubmit={sendEmail}
          ref={formRef}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 4, duration: 1 }}
        >
          <input type="text" placeholder="Name" name="name" required />
          <input type="email" placeholder="Email" name="email" required />
          <textarea placeholder="Message" rows={8} name="message" />
          <button type="submit">Submit</button>
        </motion.form>
      </div>
    </motion.div>
  );
};

export default Contact;
