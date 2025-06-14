import { motion } from "framer-motion";
import "./hero.scss";
import Banner from "../banner/Banner";
import { useTranslation } from "react-i18next";

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};

const silderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-220%",
    transition: {
      repeat: Infinity,
      duration: 20,
      repeatType: "mirror",
    },
  },
};

const Hero = () => {
  const { t } = useTranslation();

  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div
          className="textContainer"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h2 variants={textVariants}>{t("hero.title")}</motion.h2>
          <motion.div className="bannerContainer" variants={textVariants}>
            <h1 style={{ color: "yellow" }}>{`{ `}</h1>
            <Banner message={["intoWebDev", "openMind", "steadyLearner"]} />
            <h1 style={{ color: "yellow" }}>{` }`}</h1>
          </motion.div>
          {/* <motion.h1 variants={textVariants}>{`{ IntoWebDev }`}</motion.h1> */}
          <motion.div className="buttons" variants={textVariants}>
            <motion.button variants={textVariants}>
              <a href="#Portfolio">{t("hero.projectButton")}</a>
            </motion.button>
            <motion.button variants={textVariants}>
              <a href="#Contact">{t("hero.contactButton")}</a>
            </motion.button>
          </motion.div>
          <motion.img
            src="/scroll.png"
            alt=""
            variants={textVariants}
            animate="scrollButton"
          />
        </motion.div>
      </div>
      <motion.div
        className="slidingTextContainer"
        variants={silderVariants}
        initial="initial"
        animate="animate"
      >
        Patience.Consistent.Learning
      </motion.div>
      <div className="imageContainer">
        <img src="/felixProfile.png" alt="" />
      </div>
    </div>
  );
};

export default Hero;
