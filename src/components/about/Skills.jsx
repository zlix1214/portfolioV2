import { RiReactjsLine, RiTailwindCssFill } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { SiMongodb, SiExpress } from "react-icons/si";
import { FaNodeJs, FaFigma, FaGitAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import "./skills.scss";
import Star from "../3dmodels/Star";

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
  { icon: RiReactjsLine, color: "cyan", duration: 2.5 },
  { icon: RiTailwindCssFill, color: "cyan", duration: 3 },
  { icon: SiMongodb, color: "green", duration: 5 },
  { icon: FaNodeJs, color: "green", duration: 2 },
  { icon: SiExpress, color: "", duration: 6 },
  { icon: FaGitAlt, color: "red", duration: 4 },
  { icon: FaFigma, color: "", duration: 2.5 },
];

const Skills = () => {
  return (
    <div className="skills">
      <motion.div
        animate={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 100 }}
        transition={{ duration: 1.5 }}
        className="icons"
      >
        {skills.map(({ icon: Icon, color, duration }, i) => (
          <motion.div
            key={i}
            variants={iconVariants(duration)}
            initial="initial"
            animate="animate"
            className="icon"
          >
            <Icon
              style={{
                fontSize: "3rem",
                color: color || "inherit",
              }}
            />
          </motion.div>
        ))}
      </motion.div>
      {/* <Star /> */}
    </div>
  );
};

export default Skills;
