import { useState, useRef, useCallback } from 'react';

const useWakeLock = () => {
  const isSupport = 'wakeLock' in navigator && 'request' in navigator.wakeLock;

  const wakeLockRef = useRef(null);
  const [locked, setLocked] = useState(false);

  const setWakeLock = useCallback(
    flag => {
      if (!isSupport) return;
      if (!flag && wakeLockRef.current) {
        wakeLockRef.current.release();
        wakeLockRef.current = null;
        setLocked(false);
      }
      if (flag) {
        navigator.wakeLock.request('screen').then(wakeLock => {
          wakeLockRef.current = wakeLock;
          setLocked(true);
        });
      }
    },
    [isSupport, wakeLockRef.current, setLocked]
  );

  return [locked, setWakeLock, isSupport];
};

export default useWakeLock;
