import '@testing-library/jest-dom';

jest.mock('react-markdown', () => ({
  __esModule: true,
  default: ({ children }: { children: string }) => children,
}));

beforeAll(() => {
  global.fetch = jest.fn(() =>
    Promise.resolve({
      text: () => Promise.resolve('# Setup Instructions'),
    }),
  ) as unknown as typeof fetch;
});

const storageMock: Record<string, unknown> = {};

global.chrome = {
  storage: {
    sync: {
      get: jest.fn((keys, callback) => {
        if (typeof keys === 'string') {
          callback({ [keys]: storageMock[keys] });
        } else if (Array.isArray(keys)) {
          const result: Record<string, unknown> = {};
          keys.forEach((key) => {
            result[key] = storageMock[key];
          });
          callback(result);
        } else {
          callback(storageMock);
        }
      }),
      set: jest.fn((items, callback) => {
        Object.assign(storageMock, items);
        if (callback) callback();
      }),
    },
  },
  runtime: {
    lastError: undefined,
  },
} as unknown as typeof chrome;

global.matchMedia = jest.fn((query: string) => ({
  matches: query === '(prefers-color-scheme: dark)' ? false : true,
  media: query,
  onchange: null,
  addListener: jest.fn(),
  removeListener: jest.fn(),
  addEventListener: jest.fn(),
  removeEventListener: jest.fn(),
  dispatchEvent: jest.fn(),
}));

beforeEach(() => {
  Object.keys(storageMock).forEach((key) => delete storageMock[key]);
  (global.chrome.storage.sync.get as jest.Mock).mockClear();
  (global.chrome.storage.sync.set as jest.Mock).mockClear();
  window.localStorage.clear();
  document.documentElement.className = '';
  (global.fetch as jest.Mock).mockClear();
});
