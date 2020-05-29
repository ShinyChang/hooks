import { useFPS } from '../src';

export default {
  title: 'useFPS',
  component: useFPS
};

export const Basic = () => {
  const fps = useFPS();
  return `FPS: ${fps}`;
};
