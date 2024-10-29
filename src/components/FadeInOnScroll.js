import React, { useEffect, useRef, useState } from "react";
import "./FadeInOnScroll.css";

const FadeInOnScroll = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      },
      { threshold: 0.1 } // Adjust the threshold as needed
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`${isVisible ? "fade-in" : "fade-out"} ${
        !isVisible ? "hidden" : ""
      }`}
    >
      {children}
    </div>
  );
};

export default FadeInOnScroll;
