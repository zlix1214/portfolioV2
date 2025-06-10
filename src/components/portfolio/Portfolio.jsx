import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";

const items = [
  {
    id: 1,
    title: "Fiorvo - fashion eCommerce",
    img: "./p1-ecommerce.png",
    demo: "https://fiorvo-frontend.vercel.app/",
    github: "https://github.com/zlix1214/eCommerce?tab=readme-ov-file",
    desc: "Fiorvo is a fashion e-commerce site built with the MERN stack, featuring a customer storefront and an admin dashboard for managing products, orders, and shipping.",
    desc2: "",
  },
  {
    id: 2,
    title: "Real-time Chat App",
    img: "./p2-chat.png",
    demo: "https://realtimechatapp-acaa.onrender.com/login",
    github: "https://github.com/zlix1214/RealTimeChatApp",
    desc: "A real-time chat app built with the MERN stack and Socket.IO, featuring multi-theme support and seamless live messaging between users.",
    desc2:
      "⚠️ Note: This app is deployed on Render's free plan, so the server may take around 30 seconds to wake up on the first login due to server cold start. Please be patient during this initial loading time.",
  },
];

const Single = ({ item }) => {
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
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            {item.desc2 && <p>{item.desc2}</p>}
            <div className="buttons">
              <a href={item.demo} target="_blank" rel="noopener noreferrer">
                See Demo
              </a>
              <a href={item.github} target="_blank" rel="noopener noreferrer">
                Github repo
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
