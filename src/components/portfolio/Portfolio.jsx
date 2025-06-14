import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import { useTranslation } from "react-i18next";

const items = [
  {
    id: 1,
    title: "projects.fiorvo.title",
    desc: "projects.fiorvo.desc",
    desc2: "projects.fiorvo.desc2",
    img: "./p1-ecommerce.png",
    demo: "https://fiorvo-frontend.vercel.app/",
    github: "https://github.com/zlix1214/eCommerce?tab=readme-ov-file",
  },
  {
    id: 2,
    title: "projects.chatApp.title",
    desc: "projects.chatApp.desc",
    desc2: "projects.chatApp.desc2",
    img: "./p2-chat.png",
    demo: "https://realtimechatapp-acaa.onrender.com/login",
    github: "https://github.com/zlix1214/RealTimeChatApp",
  },
];

const Single = ({ item }) => {
  const { t } = useTranslation();

  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-250, 250]);

  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{t(item.title)}</h2>
            <p>{t(item.desc)}</p>
            {item.desc2 && <p>{t(item.desc2)}</p>}
            <div className="buttons">
              <a href={item.demo} target="_blank" rel="noopener noreferrer">
                {t("portfolio.demo")}
              </a>
              <a href={item.github} target="_blank" rel="noopener noreferrer">
                {t("portfolio.github")}
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
