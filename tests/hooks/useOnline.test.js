import { renderHook, act } from '@testing-library/react-hooks';

import { useOnline } from '../../src';

jest.spyOn(navigator, 'onLine', 'get').mockReturnValue(false);

test('default online is navigator.onLine', () => {
  const { result } = renderHook(() => useOnline());
  expect(result.current).toBe(false);
});

test('change online when online/offline event fired', () => {
  const map = {};
  window.addEventListener = jest.fn((name, cb) => {
    map[name] = cb;
  });
  const { result } = renderHook(() => useOnline());

  act(() => {
    map['online']();
  });
  expect(result.current).toBe(true);

  act(() => {
    map['offline']();
  });
  expect(result.current).toBe(false);
});
