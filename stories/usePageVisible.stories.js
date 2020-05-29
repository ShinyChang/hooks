import React, { useEffect } from 'react';
import { action } from '@storybook/addon-actions';

import { usePageVisible } from '../src';

export default {
  title: 'usePageVisible',
  component: usePageVisible
};

export const Basic = () => {
  const visible = usePageVisible();
  useEffect(() => {
    action('Page Visibility')(visible);
  }, [visible]);
  return <div>Visible: {visible.toString()}</div>;
};
