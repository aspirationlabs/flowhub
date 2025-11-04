import {
  loadSystemPreferences,
  saveSystemPreferences,
  SYSTEM_PREFERENCES_KEY,
} from '../../app/components/providers/systemPreferences';

describe('systemPreferences', () => {
  beforeEach(() => {
    window.localStorage.clear();
    jest.spyOn(console, 'warn').mockImplementation(() => {});
    jest.spyOn(console, 'info').mockImplementation(() => {});
    jest.spyOn(console, 'error').mockImplementation(() => {});
  });

  afterEach(() => {
    (console.warn as jest.Mock).mockRestore();
    (console.info as jest.Mock).mockRestore();
    (console.error as jest.Mock).mockRestore();
  });

  it('returns default preferences when none are stored', () => {
    const preferences = loadSystemPreferences();

    expect(preferences).toEqual({ theme: 'light' });
    expect(console.info).toHaveBeenCalledWith(
      'No stored system preferences found; using defaults.',
      { fallback: { theme: 'light' } },
    );
  });

  it('loads stored preferences', () => {
    window.localStorage.setItem(SYSTEM_PREFERENCES_KEY, JSON.stringify({ theme: 'dark' }));

    const preferences = loadSystemPreferences();

    expect(preferences).toEqual({ theme: 'dark' });
  });

  it('logs a warning and returns defaults when storage contains invalid data', () => {
    window.localStorage.setItem(SYSTEM_PREFERENCES_KEY, 'not json');

    const preferences = loadSystemPreferences();

    expect(console.warn).toHaveBeenCalledWith(
      'Failed to parse system preferences, falling back to defaults.',
      {
        error: expect.any(SyntaxError),
        storedValue: 'not json',
      },
    );
    expect(preferences).toEqual({ theme: 'light' });
  });

  it('logs a warning and returns defaults when storage throws on read', () => {
    const getItemSpy = jest.spyOn(Storage.prototype, 'getItem').mockImplementation(() => {
      throw new Error('read error');
    });

    const preferences = loadSystemPreferences();

    expect(console.warn).toHaveBeenCalledWith(
      'Failed to read system preferences from storage, falling back to defaults.',
      expect.any(Error),
    );
    expect(preferences).toEqual({ theme: 'light' });

    getItemSpy.mockRestore();
  });

  it('persists updates and returns merged preferences', () => {
    const updated = saveSystemPreferences({ theme: 'dark' });

    expect(updated).toEqual({ theme: 'dark' });
    expect(window.localStorage.getItem(SYSTEM_PREFERENCES_KEY)).toEqual(JSON.stringify({ theme: 'dark' }));
    expect(console.error).not.toHaveBeenCalled();
  });

  it('throws when storage rejects writes', () => {
    const setItemSpy = jest.spyOn(Storage.prototype, 'setItem').mockImplementation(() => {
      throw new Error('write error');
    });

    expect(() => saveSystemPreferences({ theme: 'dark' })).toThrow('Failed to persist system preferences.');
    expect(console.error).toHaveBeenCalledWith('Failed to persist system preferences.', {
      error: expect.any(Error),
      payload: { theme: 'dark' },
    });

    setItemSpy.mockRestore();
  });

  it('throws when serialisation fails', () => {
    const stringifySpy = jest.spyOn(JSON, 'stringify').mockImplementation(() => {
      throw new Error('serialise');
    });

    expect(() => saveSystemPreferences({ theme: 'dark' })).toThrow('Failed to persist system preferences.');
    expect(console.error).toHaveBeenCalledWith('Failed to persist system preferences.', {
      error: expect.any(Error),
      payload: { theme: 'dark' },
    });

    stringifySpy.mockRestore();
  });
});
