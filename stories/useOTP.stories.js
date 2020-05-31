import React, { useRef } from 'react';
import { useOTP } from '../src';

export default {
  title: 'useOTP',
  component: useOTP
};

export const Basic = () => {
  const ref = useRef();
  const code = useOTP(ref);
  return (
    <div>
      <input type="text" ref={ref} value={code} />
    </div>
  );
};
