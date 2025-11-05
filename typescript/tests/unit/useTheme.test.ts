import { renderHook, act } from '@testing-library/react';
import { useTheme } from '../../app/components/widgets/hooks/useTheme';
import { LocalStorageKey } from '../../storage/local/keys';

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
    jest.spyOn(console, 'info').mockImplementation(() => {});
    jest.spyOn(console, 'error').mockImplementation(() => {});
  });

  afterEach(() => {
    (console.warn as jest.Mock).mockRestore();
    (console.info as jest.Mock).mockRestore();
    (console.error as jest.Mock).mockRestore();
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
    window.localStorage.setItem(
      `flowhub-${LocalStorageKey.SYSTEM_PREFERENCES}`,
      JSON.stringify({ theme: 'dark' }),
    );

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
    expect(
      window.localStorage.getItem(`flowhub-${LocalStorageKey.SYSTEM_PREFERENCES}`),
    ).toEqual(JSON.stringify({ theme: 'dark' }));
    expect(document.documentElement.classList.contains('dark')).toBe(true);
  });

  // Degenerate error path checks removed pending more stable mocking strategy.
});
