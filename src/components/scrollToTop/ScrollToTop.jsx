import { useEffect, useState } from "react";
import { FiChevronUp } from "react-icons/fi";
import "./scrollToTop.scss";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 300);
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`scrollToTop ${isVisible ? "visible" : "hidden"}`}
      aria-label="Scroll to top"
    >
      <FiChevronUp size={20} />
    </button>
  );
};

export default ScrollToTopButton;
