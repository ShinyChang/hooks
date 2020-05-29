import { renderHook, act } from '@testing-library/react-hooks';

import { useFPS } from '../../src';

jest.useFakeTimers();

beforeEach(() => {
  jest.spyOn(window, 'requestAnimationFrame').mockImplementation(cb => setTimeout(cb, 1));
});

afterEach(() => {
  window.requestAnimationFrame.mockRestore();
});

test('default fps is 0', () => {
  const { result } = renderHook(() => useFPS());
  expect(result.current).toBe(0);
});

test('Update fps according to the frame rate', () => {
  const { result } = renderHook(() => useFPS());
  act(() => {
    jest.advanceTimersByTime(60);
    const dateNowSpy = jest.spyOn(performance, 'now').mockImplementation(() => Date.now() + 1000);
    jest.advanceTimersByTime(1);
    dateNowSpy.mockRestore();
  });
  expect(result.current).toBe(60);
});

test('Update fps and not over max display frame rate', () => {
  const { result } = renderHook(() => useFPS(30));
  act(() => {
    jest.advanceTimersByTime(60);
    const dateNowSpy = jest.spyOn(performance, 'now').mockImplementation(() => Date.now() + 1000);
    jest.advanceTimersByTime(1);
    dateNowSpy.mockRestore();
  });
  expect(result.current).toBe(30);
});
