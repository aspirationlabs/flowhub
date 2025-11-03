import { renderHook, act } from '@testing-library/react';
import { useTheme } from '../../app/(dashboard)/hooks/useTheme.js';

describe('useTheme', () => {
  beforeEach(() => {
    global.matchMedia = jest.fn(() => ({
      matches: false,
      media: '(prefers-color-scheme: light)',
      onchange: null,
      addListener: jest.fn(),
      removeListener: jest.fn(),
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn(),
    })) as unknown as typeof matchMedia;
  });

  it('should default to light theme when no stored preference exists', async () => {
    const { result } = renderHook(() => useTheme());

    await act(async () => {
      await new Promise((resolve) => setTimeout(resolve, 10));
    });

    expect(result.current.theme).toBe('light');
  });

  it('should use system preference when no stored preference exists', async () => {
    global.matchMedia = jest.fn(() => ({
      matches: true,
      media: '(prefers-color-scheme: dark)',
      onchange: null,
      addListener: jest.fn(),
      removeListener: jest.fn(),
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn(),
    })) as unknown as typeof matchMedia;

    const { result } = renderHook(() => useTheme());

    await act(async () => {
      await new Promise((resolve) => setTimeout(resolve, 10));
    });

    expect(result.current.theme).toBe('dark');
  });

  it('should load stored theme preference', async () => {
    (chrome.storage.sync.get as jest.Mock).mockImplementation((keys, callback) => {
      callback({ theme: 'dark' });
    });

    const { result } = renderHook(() => useTheme());

    await act(async () => {
      await new Promise((resolve) => setTimeout(resolve, 10));
    });

    expect(result.current.theme).toBe('dark');
  });

  it('should toggle theme and persist to storage', async () => {
    (chrome.storage.sync.get as jest.Mock).mockImplementation((keys, callback) => {
      if (typeof keys === 'string') {
        callback({ [keys]: undefined });
      } else {
        callback({});
      }
    });

    const { result } = renderHook(() => useTheme());

    await act(async () => {
      await new Promise((resolve) => setTimeout(resolve, 10));
    });

    expect(result.current.theme).toBe('light');

    await act(async () => {
      result.current.toggleTheme();
      await new Promise((resolve) => setTimeout(resolve, 10));
    });

    expect(result.current.theme).toBe('dark');
    expect(chrome.storage.sync.set).toHaveBeenCalledWith({ theme: 'dark' }, expect.any(Function));
  });

  it('should handle storage errors gracefully', async () => {
    const consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation();

    (chrome.storage.sync.get as jest.Mock).mockImplementation(() => {
      throw new Error('Storage error');
    });

    const { result } = renderHook(() => useTheme());

    await act(async () => {
      await new Promise((resolve) => setTimeout(resolve, 10));
    });

    expect(result.current.theme).toBe('light');
    expect(consoleErrorSpy).toHaveBeenCalledWith('Error accessing chrome.storage:', expect.any(Error));

    consoleErrorSpy.mockRestore();
  });
});
