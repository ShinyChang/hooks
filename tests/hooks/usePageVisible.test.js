import { renderHook, act } from '@testing-library/react-hooks';

import { usePageVisible } from '../../src';

jest.spyOn(document, 'hidden', 'get').mockReturnValue(false);

test('default visible is !document.hidden', () => {
  const { result } = renderHook(() => usePageVisible());
  expect(result.current).toBe(true);
});

test('get !document.hidden as visible when visibilitychange event fired', () => {
  const map = {};
  document.addEventListener = jest.fn((name, cb) => {
    map[name] = cb;
  });
  const { result } = renderHook(() => usePageVisible());

  act(() => {
    map['visibilitychange']();
  });
  expect(result.current).toBe(true);
});
