import React, { useRef } from 'react';
import { useSize } from '../src';

export default {
  title: 'useSize',
  component: useSize
};

export const Basic = () => {
  const ref = useRef(null);
  const size = useSize(ref);
  const noop = () => {};
  return (
    <div>
      <textarea style={{ resize: 'both', overflow: 'auto' }} ref={ref} value={size} onChange={noop} />
    </div>
  );
};
