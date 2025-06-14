import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const variants = {
  open: {
    transition: {
      staggerChildren: 0.1,
    },
  },
  closed: {
    transition: {
      staggerChildern: 0.05,
      staggerDirection: -1,
    },
  },
};

const itemVariants = {
  open: {
    y: 0,
    opacity: 1,
  },
  closed: {
    y: 50,
    opacity: 0,
  },
};

const Links = () => {
  const { t } = useTranslation();
  const items = [
    { key: "homepage", anchor: "Homepage" },
    { key: "about", anchor: "About" },
    { key: "portfolio", anchor: "Portfolio" },
    { key: "contact", anchor: "Contact" },
  ];
  return (
    <motion.div className="links" variants={variants}>
      {items.map((item) => {
        return (
          <motion.a
            href={`#${item.anchor}`}
            key={item}
            variants={itemVariants}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {t(`nav.${item.key}`)}
          </motion.a>
        );
      })}
    </motion.div>
  );
};

export default Links;
