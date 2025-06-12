import "./navbar.scss";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import "../../i18/i18n";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "../languageSwitcher/LanguageSwitcher";

import Sidebar from "../sidebar/Sidebar";
const Navbar = () => {
  const { t } = useTranslation();
  return (
    <div className="navbar">
      {/* side bar */}
      <Sidebar />
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <img src="/felixLogo.png" alt="" />
        </motion.span>
        <div className="social">
          <LanguageSwitcher />
          <a
            href="https://github.com/zlix1214"
            aria-label="GitHub"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/%E7%A5%A5%E4%BD%91-%E9%84%AD-430778225/"
            aria-label="LinkedIn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin size={24} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
