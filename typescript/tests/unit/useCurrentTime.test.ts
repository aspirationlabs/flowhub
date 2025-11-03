import { renderHook, act } from '@testing-library/react';
import { useCurrentTime } from '../../app/(dashboard)/hooks/useCurrentTime.js';

describe('useCurrentTime', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  it('should return current time', () => {
    const now = new Date('2024-10-04T14:30:00');
    jest.setSystemTime(now);

    const { result } = renderHook(() => useCurrentTime());

    expect(result.current.getTime()).toBe(now.getTime());
  });

  it('should update time every second', () => {
    const startTime = new Date('2024-10-04T14:30:00');
    jest.setSystemTime(startTime);

    const { result } = renderHook(() => useCurrentTime());

    expect(result.current.getTime()).toBe(startTime.getTime());

    act(() => {
      jest.advanceTimersByTime(1000);
    });

    const expectedTime = new Date('2024-10-04T14:30:01');
    expect(result.current.getTime()).toBe(expectedTime.getTime());

    act(() => {
      jest.advanceTimersByTime(1000);
    });

    const expectedTime2 = new Date('2024-10-04T14:30:02');
    expect(result.current.getTime()).toBe(expectedTime2.getTime());
  });

  it('should clean up interval on unmount', () => {
    const { unmount } = renderHook(() => useCurrentTime());

    const clearIntervalSpy = jest.spyOn(global, 'clearInterval');

    unmount();

    expect(clearIntervalSpy).toHaveBeenCalled();
  });
});
