import { useEffect, useState } from 'react';

const usePageVisible = () => {
  const [visible, setVisible] = useState(!document.hidden);
  useEffect(() => {
    const handleVisibleChagne = () => {
      setVisible(!document.hidden);
    };
    document.addEventListener('visibilitychange', handleVisibleChagne);
    return () => {
      document.removeEventListener('visibilitychange', handleVisibleChagne);
    };
  });
  return visible;
};

export default usePageVisible;
