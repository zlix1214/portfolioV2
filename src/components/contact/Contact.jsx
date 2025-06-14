import "./contact.scss";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Banner from "../banner/Banner";
import { useTranslation } from "react-i18next";

const containerVariants = {
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

const textVariants = {
  initial: {
    x: -100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const itemVariants = {
  initial: {
    y: 50,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
  hover: {
    scale: 1.05,
    transition: {
      duration: 0.2,
    },
  },
};

const socialVariants = {
  initial: {
    scale: 0,
    opacity: 0,
  },
  animate: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.4,
      ease: "backOut",
    },
  },
  hover: {
    scale: 1.2,
    rotate: 5,
    transition: {
      duration: 0.2,
    },
  },
  tap: {
    scale: 0.9,
  },
};

const formVariants = {
  initial: {
    x: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut",
      staggerChildren: 0.1,
    },
  },
};

const inputVariants = {
  initial: {
    y: 30,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.4,
    },
  },
  focus: {
    scale: 1.02,
    transition: {
      duration: 0.2,
    },
  },
};

const buttonVariants = {
  initial: {
    scale: 0.8,
    opacity: 0,
  },
  animate: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "backOut",
    },
  },
  hover: {
    scale: 1.05,
    backgroundColor: "white",
    boxShadow: "0 10px 25px rgba(255, 107, 107, 0.3)",
    transition: {
      duration: 0.3,
    },
  },
  tap: {
    scale: 0.95,
  },
};

const titleVariants = {
  initial: {
    y: -50,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: "bounceOut",
    },
  },
};

const floatingVariants = {
  animate: {
    y: [-10, 10, -10],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

const Contact = () => {
  const ref = useRef();
  const formRef = useRef();
  const { t } = useTranslation();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const isInView = useInView(ref, { margin: "-100px" });

  const sendEmail = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.sendForm(
        "service_m28mrm6",
        "template_w7vzoha",
        formRef.current,
        {
          publicKey: "T6d7SBmBpCpsjIdZW",
        }
      );
      console.log("SUCCESS!");
      alert(t("contact.success"));
    } catch (error) {
      console.log("FAILED...", error.text);
      alert(t("contact.error"));
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.div
      ref={ref}
      className="contact"
      variants={containerVariants}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, margin: "-100px" }}
    >
      <motion.div variants={textVariants} className="textContainer">
        <motion.div variants={floatingVariants} animate="animate">
          <motion.h1 variants={titleVariants}>{t("contact.title")}</motion.h1>
        </motion.div>

        <motion.div variants={itemVariants} whileHover="hover" className="item">
          <h2>{t("contact.mail")}</h2>
          <motion.span
            whileHover={{ color: "#ff6b6b" }}
            transition={{ duration: 0.2 }}
          >
            rraefelix@gmail.com
          </motion.span>
        </motion.div>

        <motion.div variants={itemVariants} whileHover="hover" className="item">
          <h2>{t("contact.phone")}</h2>
          <motion.span
            whileHover={{ color: "#ff6b6b" }}
            transition={{ duration: 0.2 }}
          >
            +886 0963 061 131
          </motion.span>
        </motion.div>

        <motion.div className="social" variants={containerVariants}>
          <motion.a
            href="https://github.com/zlix1214"
            aria-label="GitHub"
            target="_blank"
            rel="noopener noreferrer"
            variants={socialVariants}
            whileHover="hover"
            whileTap="tap"
          >
            <FaGithub size={24} />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/%E7%A5%A5%E4%BD%91-%E9%84%AD-430778225/"
            aria-label="LinkedIn"
            target="_blank"
            rel="noopener noreferrer"
            variants={socialVariants}
            whileHover="hover"
            whileTap="tap"
          >
            <FaLinkedin size={24} />
          </motion.a>
        </motion.div>
      </motion.div>

      <div className="formContainer">
        <motion.form
          onSubmit={sendEmail}
          ref={formRef}
          variants={formVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <motion.input
            type="text"
            placeholder={t("contact.form.namePlaceholder")}
            name="name"
            required
            variants={inputVariants}
            whileFocus="focus"
          />
          <motion.input
            type="email"
            placeholder={t("contact.form.emailPlaceholder")}
            name="email"
            required
            variants={inputVariants}
            whileFocus="focus"
          />
          <motion.textarea
            placeholder={t("contact.form.messagePlaceholder")}
            rows={8}
            name="message"
            variants={inputVariants}
            whileFocus="focus"
          />
          <motion.button
            type="submit"
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
            disabled={isSubmitting}
          >
            <motion.span
              animate={isSubmitting ? { rotate: 360 } : {}}
              transition={
                isSubmitting
                  ? {
                      duration: 1,
                      repeat: Infinity,
                      ease: "linear",
                    }
                  : {}
              }
            >
              {isSubmitting ? t("contact.isSubmit") : t("contact.form.submit")}
            </motion.span>
          </motion.button>
        </motion.form>
      </div>
    </motion.div>
  );
};

export default Contact;
