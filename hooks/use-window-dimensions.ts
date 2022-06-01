import { useState, useEffect } from 'react';

export default function useWindowSize() {
  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  const [windowSize, setWindowSize] = useState({
    width: Number,
    height: Number
  });

  useEffect(() => {
      function handleResize() {
        setWindowSize({
          // @ts-ignore
          width: window.innerWidth,
          // @ts-ignore
          height: window.innerHeight,
        });
      }
    
      window.addEventListener("resize", handleResize);
     
      handleResize();
    
      return () => window.removeEventListener("resize", handleResize);
  }, []);
  return windowSize;
}
