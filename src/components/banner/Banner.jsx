import React, { useState, useEffect } from "react";
import "./banner.scss";

const Banner = ({ message }) => {
  const toRotate = message;

  const period = 1800;
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(150 - Math.random() * 100);

  useEffect(() => {
    const ticker = setInterval(() => {
      const i = loopNum % toRotate.length;
      const fullText = toRotate[i];
      const updatedText = isDeleting
        ? fullText.substring(0, text.length - 1)
        : fullText.substring(0, text.length + 1);

      setText(updatedText);

      if (isDeleting) setDelta((prev) => prev / 1.8);
      if (!isDeleting && updatedText === fullText) {
        setIsDeleting(true);
        setDelta(period);
      } else if (isDeleting && updatedText === "") {
        setIsDeleting(false);
        setLoopNum((prev) => prev + 1);
        setDelta(300);
      }
    }, delta);

    return () => clearInterval(ticker);
  }, [text, delta, isDeleting, loopNum]);

  return (
    <div className="banner">
      <span className="txt-rotate">
        <span className="wrap">
          <h1>{text}</h1>
        </span>
      </span>
    </div>
  );
};

export default Banner;
