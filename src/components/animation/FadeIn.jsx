import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

const FadeIn= ({ children, className = '', delay = 0 }) => {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });
  const [hasBeenVisible, setHasBeenVisible] = useState(false);

  useEffect(() => {
    if (inView) {
      const timeout = setTimeout(() => setHasBeenVisible(true), delay);
      return () => clearTimeout(timeout);
    }
  }, [inView, delay]);

  return (
    <div
      ref={ref}
      className={`
        transition-opacity duration-1500 ease-out
        ${hasBeenVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
        ${className}
      `}
    >
      {children}
    </div>
  );
};

export default FadeIn;