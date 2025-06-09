import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";

const items = [
  {
    id: 1,
    title: "Project One",
    img: "https://plus.unsplash.com/premium_photo-1749200412765-8164987075aa?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1fHx8ZW58MHx8fHx8",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit dolorem enim vel ab, eaque minus officiis illum at deleniti, nihil ad. Dicta, impedit tempora vel mollitia adipisci accusamus laborum dolores.",
  },
  {
    id: 2,
    title: "Project Two",
    img: "https://images.unsplash.com/photo-1746091066530-4a7c0319df8b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMDd8fHxlbnwwfHx8fHw%3D",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit dolorem enim vel ab, eaque minus officiis illum at deleniti, nihil ad. Dicta, impedit tempora vel mollitia adipisci accusamus laborum dolores.",
  },
  {
    id: 3,
    title: "Project Three",
    img: "https://images.unsplash.com/photo-1749223062893-0c583c9b8806?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzOHx8fGVufDB8fHx8fA%3D%3D",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit dolorem enim vel ab, eaque minus officiis illum at deleniti, nihil ad. Dicta, impedit tempora vel mollitia adipisci accusamus laborum dolores.",
  },
  {
    id: 4,
    title: "Project Four",
    img: "https://images.unsplash.com/photo-1747672906209-a289d77252a6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0OHx8fGVufDB8fHx8fA%3D%3D",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit dolorem enim vel ab, eaque minus officiis illum at deleniti, nihil ad. Dicta, impedit tempora vel mollitia adipisci accusamus laborum dolores.",
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
            <button>See Demo</button>
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
        <h1>Feature Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
