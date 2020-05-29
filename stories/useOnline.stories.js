import { useOnline } from '../src';

export default {
  title: 'useOnline',
  component: useOnline
};

export const Basic = () => {
  const online = useOnline();
  return `Online: ${online}`;
};
