import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import "./portfolio.scss";
import { useTranslation } from "react-i18next";

const t = (key) => {
  const translations = {
    "projects.fiorvo.title": "Fiorvo E-Commerce",
    "projects.fiorvo.desc":
      "A full-stack e-commerce platform built with React and Node.js",
    "projects.fiorvo.desc2":
      "Features include user authentication, product management, and payment integration",
    "projects.chatApp.title": "Real-Time Chat App",
    "projects.chatApp.desc": "A real-time messaging application with Socket.io",
    "projects.chatApp.desc2":
      "Supports group chats, file sharing, and message history",
    "portfolio.demo": "Live Demo",
    "portfolio.github": "Source Code",
  };
  return translations[key] || key;
};

const items = [
  {
    id: 1,
    title: "projects.fiorvo.title",
    desc: "projects.fiorvo.desc",
    desc2: "projects.fiorvo.desc2",
    img: "./p1-ecommerce.png",
    demo: "https://fiorvo-frontend.vercel.app/",
    github: "https://github.com/zlix1214/eCommerce?tab=readme-ov-file",
    tags: ["React", "TailwindCSS", "MongoDB", "Express"],
  },
  {
    id: 2,
    title: "projects.chatApp.title",
    desc: "projects.chatApp.desc",
    desc2: "projects.chatApp.desc2",
    img: "./p2-chat.png",
    demo: "https://realtimechatapp-acaa.onrender.com/login",
    github: "https://github.com/zlix1214/RealTimeChatApp",
    tags: [
      "React",
      "Tailwindcss",
      "Zustand",
      "Socket.io",
      "Express",
      "MongoDB",
    ],
  },
  {
    id: 3,
    title: "projects.coming.title",
    desc: "projects.coming.desc",
    desc2: "projects.coming.desc2",
    img: "./p-coming.png",
    demo: "",
    github: "",
    tags: [],
  },
];

const ProjectCard = ({ item, index }) => {
  const { t } = useTranslation();
  const cardRef = useRef();
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  const isEven = index % 2 === 0;

  return (
    <motion.div
      ref={cardRef}
      style={{ y, opacity }}
      className={`project-card ${isEven ? "even" : "odd"}`}
    >
      <div className="card-container">
        <div className="image-section">
          <div className="image-wrapper">
            <img src={item.img} alt={t(item.title)} />
            <div className="image-overlay">
              <div className="tags">
                {item.tags.map((tag, i) => (
                  <span key={i} className="tag">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="content-section">
          <motion.div
            className="project-info"
            initial={{ opacity: 0, x: isEven ? -30 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2>{t(item.title)}</h2>
            <p className="description primary">{t(item.desc)}</p>
            {item.desc2 && (
              <p className="description secondary">{t(item.desc2)}</p>
            )}

            <div className="action-buttons">
              <motion.a
                href={item.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {t("portfolio.demo")}
              </motion.a>

              <motion.a
                href={item.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {t("portfolio.github")}
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

const Portfolio = () => {
  const containerRef = useRef();
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const progressWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div className="portfolio" ref={containerRef}>
      <div className="portfolio-content">
        {items.map((item, index) => (
          <ProjectCard key={item.id} item={item} index={index} />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
