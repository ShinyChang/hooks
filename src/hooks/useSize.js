import { useEffect, useState } from 'react';

const useSize = ref => {
  const [size, setSize] = useState(() => {
    if (!ref.current) {
      return [0, 0];
    }
    const { width, height } = ref.current.getBoundingClientRect();
    return [width, height];
  });

  useEffect(() => {
    const resizeObserver = new ResizeObserver(entries => {
      const { width, height } = entries[0].contentRect;
      setSize([width, height]);
    });
    if (ref.current) {
      resizeObserver.observe(ref.current);
    }
    return () => {
      if (ref.current) {
        resizeObserver.unobserve(ref.current);
      }
    };
  }, [ref.current]);

  return size;
};

export default useSize;
