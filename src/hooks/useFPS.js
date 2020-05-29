import { useEffect, useState } from 'react';

const useFPS = (maxDisplayFrameRate = 60) => {
  const [fps, setFPS] = useState(0);
  useEffect(() => {
    let mounted = true;
    let count = 0;
    let animationFrameId;
    let lastTime = performance.now();
    const frame = () => {
      const now = performance.now();
      if (lastTime + 1000 <= now) {
        if (mounted && count !== fps) {
          setFPS(Math.min(count, maxDisplayFrameRate));
        }
        lastTime = now;
        count = 0;
      }
      count++;
      animationFrameId = window.requestAnimationFrame(frame);
    };
    frame();
    return () => {
      mounted = false;
      window.cancelAnimationFrame(animationFrameId);
    };
  });
  return fps;
};

export default useFPS;
