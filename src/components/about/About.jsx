import "./about.scss";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { RiReactjsLine, RiTailwindCssFill } from "react-icons/ri";
import { SiMongodb, SiExpress } from "react-icons/si";
import { FaNodeJs, FaFigma, FaGitAlt } from "react-icons/fa";

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

const skills = [
  { icon: RiReactjsLine, color: "#61DAFB", duration: 2.5, name: "React" },
  { icon: RiTailwindCssFill, color: "#38B2AC", duration: 3, name: "Tailwind" },
  { icon: SiMongodb, color: "#47A248", duration: 5, name: "MongoDB" },
  { icon: FaNodeJs, color: "#339933", duration: 2, name: "Node.js" },
  { icon: SiExpress, color: "#ffffff", duration: 6, name: "Express" },
  { icon: FaGitAlt, color: "#F05032", duration: 4, name: "Git" },
  { icon: FaFigma, color: "#F24E1E", duration: 2.5, name: "Figma" },
];

const experiences = [
  {
    period: "03.2025 – Present",
    company: "Allianz Life Insurance Company Ltd",
    title: "IT Helpdesk Assistant",
    description:
      "Provided technical support in a corporate environment, including remote troubleshooting, issue tracking, and assisting with tools like Citrix, Outlook, and Teams.",
  },
  {
    period: "",
    title: "Web Development (Self-Learning)",
    company: "Self-Directed",
    description:
      "Exploring modern web technologies through self-directed learning and projects, including full-stack development with React, Node.js, MongoDB, and related tools.",
  },
];

const About = () => {
  const { t } = useTranslation();

  return (
    <section className="about-section">
      <div className="about-content">
        {/*personal-block*/}
        <motion.div
          className="about-block personal-block"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
        >
          {/* photo */}
          <div className="photo-section">
            <div className="photo-wrapper">
              <img src="./about.png" alt="" />
              {/* sign stamp */}
              <motion.div
                className="signature-stamp"
                initial={{ opacity: 0, scale: 0, rotate: 0 }}
                whileInView={{ opacity: 1, scale: 1, rotate: -15 }}
                transition={{ duration: 0.8, delay: 0.5, ease: "backOut" }}
                viewport={{ once: true }}
              >
                <img src="./sign.png" alt="" />
              </motion.div>
            </div>
          </div>

          {/* introduction */}
          <div className="intro-section">
            <h3>{t("about.intro1")}</h3>
            <p>{t("about.intro2")}</p>
            <p>{t("about.intro3")}</p>
            <p>{t("about.intro4")}</p>
          </div>
        </motion.div>

        {/* exp  & skills */}
        <motion.div
          className="about-block professional-block"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
        >
          {/* exp */}
          <div className="experience-section">
            <h3>{t("about.exp")}</h3>
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
                  <div className="period">
                    <p>{t(`about.exp${index + 1}.period`)}</p>
                    <p>{t(`about.exp${index + 1}.company`)}</p>
                  </div>
                  <div className="exp-content">
                    <h4>{t(`about.exp${index + 1}.title`)}</h4>
                    <p>{t(`about.exp${index + 1}.description`)}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* skill */}
          <div className="skills-section">
            <h3>{t("about.skills")}</h3>
            <motion.div
              className="skills-icons"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            >
              {skills.map(({ icon: Icon, duration, name }, index) => (
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
