import { renderHook, act } from '@testing-library/react';
import { useTheme } from '../../app/components/widgets/hooks/useTheme';
import { SYSTEM_PREFERENCES_KEY } from '../../app/components/providers/systemPreferences';

describe('useTheme', () => {
  beforeEach(() => {
    window.localStorage.clear();
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

    jest.spyOn(console, 'warn').mockImplementation(() => {});
  });

  afterEach(() => {
    (console.warn as jest.Mock).mockRestore();
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
    window.localStorage.setItem(SYSTEM_PREFERENCES_KEY, JSON.stringify({ theme: 'dark' }));

    const { result } = renderHook(() => useTheme());

    await act(async () => {
      await new Promise((resolve) => setTimeout(resolve, 10));
    });

    expect(result.current.theme).toBe('dark');
  });

  it('should toggle theme and persist to storage', async () => {
    const { result } = renderHook(() => useTheme());

    await act(async () => {
      await new Promise((resolve) => setTimeout(resolve, 10));
    });

    expect(result.current.theme).toBe('light');
    expect(document.documentElement.classList.contains('dark')).toBe(false);

    await act(async () => {
      result.current.toggleTheme();
      await new Promise((resolve) => setTimeout(resolve, 10));
    });

    expect(result.current.theme).toBe('dark');
    expect(window.localStorage.getItem(SYSTEM_PREFERENCES_KEY)).toEqual(JSON.stringify({ theme: 'dark' }));
    expect(document.documentElement.classList.contains('dark')).toBe(true);
  });

  it('should handle storage errors gracefully', async () => {
    jest.spyOn(Storage.prototype, 'getItem').mockImplementation(() => {
      throw new Error('Storage error');
    });

    const { result } = renderHook(() => useTheme());

    await act(async () => {
      await new Promise((resolve) => setTimeout(resolve, 10));
    });

    expect(result.current.theme).toBe('light');
    expect(console.warn).toHaveBeenCalledWith(
      'Failed to read system preferences from storage, falling back to defaults.',
      expect.any(Error),
    );

    (Storage.prototype.getItem as jest.Mock).mockRestore();
  });
});
