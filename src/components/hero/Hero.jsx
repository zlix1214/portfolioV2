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

  // 平滑滾動到指定區域的函數
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });
    } else {
      // 如果找不到元素，嘗試使用傳統方法
      const fallbackElement = document.querySelector(`#${sectionId}`);
      if (fallbackElement) {
        fallbackElement.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      } else {
        // 最後手段：直接跳轉
        window.location.hash = `#${sectionId}`;
      }
    }
  };

  // 按鈕點擊處理函數
  const handleProjectClick = (e) => {
    e.preventDefault();
    scrollToSection("Portfolio");
  };

  const handleContactClick = (e) => {
    e.preventDefault();
    scrollToSection("Contact");
  };

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

          <motion.div className="buttons" variants={textVariants}>
            {/* 方案 1: 使用 button + onClick (推薦) */}
            <motion.button
              variants={textVariants}
              onClick={handleProjectClick}
              type="button"
              // 確保動畫不會干擾點擊
              style={{ pointerEvents: "auto" }}
              whileTap={{ scale: 0.95 }} // 添加點擊反馈
            >
              {t("hero.projectButton")}
            </motion.button>

            <motion.button
              variants={textVariants}
              onClick={handleContactClick}
              type="button"
              style={{ pointerEvents: "auto" }}
              whileTap={{ scale: 0.95 }}
            >
              {t("hero.contactButton")}
            </motion.button>

            {/* 方案 2: 如果你偏好使用 a 標籤，可以用這個替代上面的 button */}
            {/* 
            <motion.a 
              href="#Portfolio"
              variants={textVariants}
              onClick={handleProjectClick}
              className="hero-button"
              style={{ pointerEvents: 'auto' }}
              whileTap={{ scale: 0.95 }}
            >
              {t("hero.projectButton")}
            </motion.a>
            
            <motion.a 
              href="#Contact"
              variants={textVariants}
              onClick={handleContactClick}
              className="hero-button"
              style={{ pointerEvents: 'auto' }}
              whileTap={{ scale: 0.95 }}
            >
              {t("hero.contactButton")}
            </motion.a>
            */}
          </motion.div>

          <motion.img
            src="/scroll.png"
            alt="Scroll indicator"
            variants={textVariants}
            animate="scrollButton"
            style={{ pointerEvents: "none" }} // 確保不會干擾其他元素的點擊
          />
        </motion.div>
      </div>

      <motion.div
        className="slidingTextContainer"
        variants={silderVariants}
        initial="initial"
        animate="animate"
        style={{ pointerEvents: "none" }} // 滑動文字不應該可點擊
      >
        Patience.Consistent.Learning
      </motion.div>

      <div className="imageContainer">
        <img src="/felixProfile.png" alt="Felix Profile" />
      </div>
    </div>
  );
};

export default Hero;
