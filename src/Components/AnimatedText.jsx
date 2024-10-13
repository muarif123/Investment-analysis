// FadeUpAnimation.js
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const AnimatedText = ({ children,duration=1 }) => {
  const elementRef = useRef(null);

  useEffect(() => {
    // Animate the element when it mounts
    gsap.fromTo(
      elementRef.current,
      { opacity: 0, y: 50 }, // starting properties
      { opacity: 1, y: 0, duration } // use the duration prop
    );
  }, [duration]);

  return <div ref={elementRef}>{children}</div>;
};

export default AnimatedText;
