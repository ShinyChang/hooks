import React, { useRef } from 'react';
import { useWakeLock } from '../src';

export default {
  title: 'useWakeLock',
  component: useWakeLock
};

export const Basic = () => {
  const ref = useRef(null);
  const [locked, setLock, isLockSupport] = useWakeLock(ref);
  const handleChange = e => setLock(e.target.checked);
  return (
    <div>
      {isLockSupport ? (
        <label>
          <input type="checkbox" checked={locked} onChange={handleChange} /> WakeLock
        </label>
      ) : (
        'Your browser does not support wake lock'
      )}
    </div>
  );
};
