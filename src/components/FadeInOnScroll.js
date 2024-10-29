import React, { useEffect, useRef, useState } from "react";
import "./FadeInOnScroll.css";

const FadeInOnScroll = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const currentRef = ref.current;
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

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
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
