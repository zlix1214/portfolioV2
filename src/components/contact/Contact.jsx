import "./contact.scss";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Banner from "../banner/Banner";
import { useTranslation } from "react-i18next"; // 加入這行

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
  const { t } = useTranslation(); // 加入這行

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
          alert(t("contact.success")); // 可選：加入成功訊息
        },
        (error) => {
          console.log("FAILED...", error.text);
          alert(t("contact.error")); // 可選：加入錯誤訊息
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
        <Banner />
        <motion.div variants={variants} className="item">
          <h2>{t("contact.mail")}</h2>
          <span>rraefelix@gmail.com</span>
        </motion.div>

        <div variants={variants} className="item">
          <h2>{t("contact.phone")}</h2>
          <span>+886 0963 061 131</span>
        </div>
        <div className="social">
          <a
            href="https://github.com/zlix1214"
            aria-label="GitHub"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/%E7%A5%A5%E4%BD%91-%E9%84%AD-430778225/"
            aria-label="LinkedIn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin size={24} />
          </a>
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
          transition={{ delay: 3.5, duration: 0.5 }}
        >
          <input
            type="text"
            placeholder={t("contact.form.namePlaceholder")}
            name="name"
            required
          />
          <input
            type="email"
            placeholder={t("contact.form.emailPlaceholder")}
            name="email"
            required
          />
          <textarea
            placeholder={t("contact.form.messagePlaceholder")}
            rows={8}
            name="message"
          />
          <button type="submit">{t("contact.form.submit")}</button>
        </motion.form>
      </div>
    </motion.div>
  );
};

export default Contact;
