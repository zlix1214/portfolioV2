import { motion } from "framer-motion";
import { RiReactjsLine, RiTailwindCssFill } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { SiMongodb, SiExpress } from "react-icons/si";
import { FaNodeJs, FaFigma, FaGitAlt } from "react-icons/fa";
import "./about.scss";

// icon 動畫 variants
const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

// 技能陣列
const skills = [
  { icon: RiReactjsLine, color: "#61DAFB", duration: 2.5, name: "React" },
  { icon: RiTailwindCssFill, color: "#38B2AC", duration: 3, name: "Tailwind" },
  { icon: SiMongodb, color: "#47A248", duration: 5, name: "MongoDB" },
  { icon: FaNodeJs, color: "#339933", duration: 2, name: "Node.js" },
  { icon: SiExpress, color: "#ffffff", duration: 6, name: "Express" },
  { icon: FaGitAlt, color: "#F05032", duration: 4, name: "Git" },
  { icon: FaFigma, color: "#F24E1E", duration: 2.5, name: "Figma" },
];

// 經歷資料
const experiences = [
  {
    period: "03.2025 – Present",
    title: "IT Helpdesk Assistant",
    description:
      "Provided technical support in a corporate environment, including remote troubleshooting, issue tracking, and assisting with tools like Citrix, Outlook, and Teams.",
  },
  {
    period: "Since Early 2025",
    title: "Web Development (Self-Learning)",
    description:
      "Exploring modern web technologies through self-directed learning and projects, including full-stack development with React, Node.js, MongoDB, and related tools.",
  },
];

const About = () => {
  return (
    <section className="about-section">
      <div className="about-content">
        {/* 第一區塊：個人介紹 */}
        <motion.div
          className="about-block personal-block"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
        >
          {/* 照片區 */}
          <div className="photo-section">
            <div className="photo-wrapper">
              <img src="./about.png" alt="關於我" />
              {/* 簽名印章 */}
              <motion.div
                className="signature-stamp"
                initial={{ opacity: 0, scale: 0, rotate: 0 }}
                whileInView={{ opacity: 1, scale: 1, rotate: -15 }}
                transition={{ duration: 0.8, delay: 0.5, ease: "backOut" }}
                viewport={{ once: true }}
              >
                <img src="./sign.png" alt="簽名" />
              </motion.div>
            </div>
          </div>

          {/* 自我介紹區 */}
          <div className="intro-section">
            <h3>
              Hi, I'm Felix, a senior in Information Management at Tamkang
              University.
            </h3>
            <p>
              I enjoy web development, movies, music, drawing, and dancing. I
              had no programming experience before college, but writing my first
              C loop sparked my passion for coding. While exploring different
              fields, I discovered a strong interest in front-end development
              during my capstone project.
            </p>
            <p>
              Since then, I've been self-learning and improving my skills.
              Though new to this field, my enthusiasm drives me to overcome
              challenges and pursue a career in web development.
            </p>
          </div>
        </motion.div>

        {/* 第二區塊：經歷與技能 */}
        <motion.div
          className="about-block professional-block"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
        >
          {/* 經歷區 */}
          <div className="experience-section">
            <h3>Experience</h3>
            <div className="experience-list">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  className="experience-item"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="period">{exp.period}</div>
                  <div className="exp-content">
                    <h4>{exp.title}</h4>
                    <p>{exp.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* 技能區 */}
          <div className="skills-section">
            <h3>Skills</h3>
            <motion.div
              className="skills-icons"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            >
              {skills.map(({ icon: Icon, color, duration, name }, index) => (
                <motion.div
                  key={index}
                  className="skill-item"
                  variants={iconVariants(duration)}
                  initial="initial"
                  animate="animate"
                  whileHover={{ scale: 1.1 }}
                >
                  <Icon style={{ fontSize: "2rem" }} />
                  <span className="skill-name">{name}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
