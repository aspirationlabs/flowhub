(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [974],
  {
    674: (e, t, s) => {
      'use strict';
      s.d(t, { Dashboard: () => eV });
      var a,
        r = s(4929),
        n = s(5541),
        o = s(2527),
        i = s(6356);
      function l(...e) {
        return e.filter(Boolean).join(' ');
      }
      let c = {
          default: 'bg-primary text-primary-foreground hover:bg-primary/90 shadow-sm',
          outline: 'border border-input bg-background text-foreground hover:bg-muted',
          ghost: 'hover:bg-muted hover:text-foreground',
        },
        d = { sm: 'h-9 px-3', default: 'h-10 px-4 py-2', lg: 'h-11 px-8 text-base' },
        u = n.forwardRef(
          ({ className: e, variant: t = 'default', size: s = 'default', ...a }, n) =>
            (0, r.jsx)('button', {
              ref: n,
              className: l(
                'inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 ring-offset-background',
                c[t],
                d[s],
                e,
              ),
              ...a,
            }),
        );
      u.displayName = 'Button';
      let m = n.forwardRef(
        (
          { icon: e, onClick: t, 'aria-label': s, className: a, badge: n, disabled: o },
          i,
        ) =>
          (0, r.jsxs)('div', {
            className: 'relative inline-flex',
            children: [
              (0, r.jsx)(u, {
                ref: i,
                variant: 'ghost',
                size: 'sm',
                onClick: t,
                'aria-label': s,
                disabled: o,
                className: l(
                  'bg-transparent hover:bg-card/80 backdrop-blur transition-colors',
                  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
                  'disabled:pointer-events-none disabled:opacity-50',
                  a,
                ),
                children: (0, r.jsx)(e, { className: 'h-4 w-4' }),
              }),
              n &&
                (0, r.jsx)('div', {
                  className: 'absolute -top-1 -right-1 pointer-events-none',
                  children: n,
                }),
            ],
          }),
      );
      function f({ theme: e, onToggle: t, isReady: s = !1 }) {
        if (!s) return null;
        let a = 'dark' === e,
          n = a ? o.A : i.A;
        return (0, r.jsx)(m, {
          icon: n,
          onClick: t,
          'aria-label': a ? 'Switch to light mode' : 'Switch to dark mode',
        });
      }
      m.displayName = 'OverlayIconButton';
      let h = {
          default: 'bg-card text-card-foreground shadow-none backdrop-blur',
          glass: 'bg-transparent text-slate-900 dark:text-white shadow-none border-none',
        },
        p = n.forwardRef(({ className: e, variant: t = 'default', ...s }, a) =>
          (0, r.jsx)('div', { ref: a, className: l('rounded-xl', h[t], e), ...s }),
        );
      p.displayName = 'Card';
      let x = n.forwardRef(({ className: e, ...t }, s) =>
        (0, r.jsx)('div', {
          ref: s,
          className: l('flex flex-col space-y-1.5 p-6', e),
          ...t,
        }),
      );
      x.displayName = 'CardHeader';
      let g = n.forwardRef(({ className: e, ...t }, s) =>
        (0, r.jsx)('h3', {
          ref: s,
          className: l('text-lg font-semibold leading-none tracking-tight', e),
          ...t,
        }),
      );
      ((g.displayName = 'CardTitle'),
        (n.forwardRef(({ className: e, ...t }, s) =>
          (0, r.jsx)('p', { ref: s, className: l('text-sm', e), ...t }),
        ).displayName = 'CardDescription'));
      let y = n.forwardRef(({ className: e, ...t }, s) =>
        (0, r.jsx)('div', { ref: s, className: l('p-6 pt-0', e), ...t }),
      );
      function w() {
        let [e, t] = (0, n.useState)(new Date());
        return (
          (0, n.useEffect)(() => {
            t(new Date());
            let e = setInterval(() => {
              t(new Date());
            }, 1e3);
            return () => clearInterval(e);
          }, []),
          e
        );
      }
      function b() {
        let e = w(),
          t = new Intl.DateTimeFormat('en-US', {
            hour: 'numeric',
            minute: '2-digit',
            hour12: !0,
          })
            .formatToParts(e)
            .filter(
              ({ type: e, value: t }) =>
                'dayPeriod' !== e && ('literal' !== e || '' !== t.trim()),
            )
            .map(({ value: e }) => e)
            .join('');
        return (0, r.jsx)(p, {
          variant: 'glass',
          className: 'inline-flex items-center justify-center px-6 py-4',
          'data-testid': 'time-widget',
          children: (0, r.jsx)('span', {
            className: 'text-9xl font-medium tracking-tight drop-shadow-lg sm:text-9xl',
            children: t,
          }),
        });
      }
      function j() {
        var e;
        let t,
          s,
          a =
            ((e = w()),
            (t = new Intl.DateTimeFormat('en-US', {
              weekday: 'short',
              month: 'short',
              day: 'numeric',
              year: 'numeric',
            }).formatToParts(e)),
            (s = (e) => t.find((t) => t.type === e)?.value ?? ''),
            `${s('weekday')} ${s('month')} ${s('day')} ${s('year')}`
              .replace(/\s+/g, ' ')
              .trim());
        return (0, r.jsx)(p, {
          variant: 'glass',
          className: 'inline-flex items-center justify-center px-6 py-3',
          'data-testid': 'date-widget',
          children: (0, r.jsx)('span', {
            className:
              'text-3xl font-light text-slate-900 drop-shadow sm:text-4xl dark:text-white',
            children: a,
          }),
        });
      }
      ((y.displayName = 'CardContent'),
        (n.forwardRef(({ className: e, ...t }, s) =>
          (0, r.jsx)('div', {
            ref: s,
            className: l('flex items-center p-6 pt-0', e),
            ...t,
          }),
        ).displayName = 'CardFooter'));
      var v = s(9939);
      function N({ background: e }) {
        if (!e || !e.sourceUrl) return null;
        let t = `View source: ${e.description || 'background image'}`;
        return (0, r.jsx)('div', {
          className: 'fixed left-6 bottom-6 z-10',
          children: (0, r.jsx)(m, {
            icon: v.A,
            onClick: () => {
              let t = `${e.sourceUrl}?utm_source=flowhub&utm_medium=referral`;
              window.open(t, '_blank', 'noopener,noreferrer');
            },
            'aria-label': t,
          }),
        });
      }
      var S = s(5328);
      function k(e, t) {
        return (
          (e.code = t.code),
          (e.key = t.key),
          (e.storedValue = t.storedValue ?? null),
          'cause' in t &&
            void 0 !== t.cause &&
            ((e.cause = t.cause), (e.cause = t.cause)),
          e
        );
      }
      let C = new Map();
      function E(e) {
        let t = (function () {
            let e = globalThis.chrome,
              t = e?.storage?.local,
              s = window.localStorage;
            return s
              ? {
                  kind: 'localStorage',
                  getItem: async (e) => {
                    let t = s.getItem(e);
                    if (null === t) return null;
                    try {
                      return JSON.parse(t);
                    } catch (s) {
                      throw k(Error('Failed to parse stored value.'), {
                        code: 'LOCAL_STORAGE_PARSE_ERROR',
                        key: e,
                        storedValue: t,
                        cause: s,
                      });
                    }
                  },
                  setItem: async (e, t) => {
                    try {
                      s.setItem(e, JSON.stringify(t));
                    } catch (t) {
                      throw k(Error('Failed to serialise stored value.'), {
                        code: 'LOCAL_STORAGE_SERIALIZE_ERROR',
                        key: e,
                        cause: t,
                      });
                    }
                  },
                  removeItem: async (e) => {
                    s.removeItem(e);
                  },
                }
              : t
                ? {
                    kind: 'chromeStorage',
                    getItem: async (e) => {
                      let s = await new Promise((s) => {
                        t.get([e], (e) => {
                          s(e ?? {});
                        });
                      });
                      return s?.[e] ?? null;
                    },
                    setItem: async (e, s) => {
                      await new Promise((a) => {
                        t.set({ [e]: s }, () => a());
                      });
                    },
                    removeItem: async (e) => {
                      await new Promise((s) => {
                        t.remove([e], () => s());
                      });
                    },
                  }
                : {
                    kind: 'memory',
                    getItem: async (e) => (C.has(e) ? C.get(e) : null),
                    setItem: async (e, t) => {
                      C.set(e, t);
                    },
                    removeItem: async (e) => {
                      C.delete(e);
                    },
                  };
          })(),
          s = `flowhub-${e}`;
        return {
          get: async (e) => {
            let a = await t.getItem(s),
              r = e.safeParse(a);
            return r.success ? r.data : null;
          },
          set: async (e) => {
            await t.setItem(s, e);
          },
          remove: async () => {
            await t.removeItem(s);
          },
        };
      }
      var I =
        (((a = {}).SYSTEM_PREFERENCES = 'system-preferences'),
        (a.CLAUDE_CODE_DAILY_RESPONSE = 'claudecode-daily-response'),
        a);
      let R = { theme: 'light' },
        A = S.Ik({ theme: S.Ie((e) => 'light' === e || 'dark' === e) });
      function D(e) {
        return { ...R, ...e };
      }
      async function T() {
        let e = E(I.SYSTEM_PREFERENCES);
        try {
          return (await e.get(A.partial())) ?? null;
        } catch (t) {
          if (t && 'object' == typeof t && 'LOCAL_STORAGE_PARSE_ERROR' === t.code) {
            console.warn(
              'Failed to parse system preferences, falling back to defaults.',
              { error: t.cause ?? t, storedValue: t.storedValue },
            );
            try {
              await e.remove();
            } catch (e) {
              console.warn('Failed to clear invalid system preferences entry.', e);
            }
          } else
            console.warn(
              'Failed to read system preferences from storage, falling back to defaults.',
              t,
            );
          return null;
        }
      }
      async function O() {
        let e = await T();
        if (!e) {
          let e = D({
            theme: (function () {
              try {
                return window.matchMedia('(prefers-color-scheme: dark)').matches
                  ? 'dark'
                  : 'light';
              } catch (e) {
                return (
                  console.warn('Unable to read system color scheme preference.', e),
                  R.theme
                );
              }
            })(),
          });
          return (
            console.info('No stored system preferences found; using defaults.', {
              fallback: e,
            }),
            e
          );
        }
        return D(e);
      }
      async function F(e) {
        let t = D({ ...(await O()), ...e }),
          s = E(I.SYSTEM_PREFERENCES);
        try {
          return (await s.set(t), t);
        } catch (e) {
          throw (
            console.error('Failed to persist system preferences.', {
              error:
                e && 'object' == typeof e && 'LOCAL_STORAGE_SERIALIZE_ERROR' === e.code
                  ? (e.cause ?? e)
                  : e,
              payload: t,
            }),
            Error('Failed to persist system preferences.')
          );
        }
      }
      let _ = 'flowhub-background-preferences',
        M = {
          currentIndex: 0,
          lastRotationTime: Date.now(),
          rotationIntervalMinutes: 30,
          enabled: !0,
        },
        P = null;
      function U() {
        try {
          let e = '__localStorage_test__';
          return (
            window.localStorage.setItem(e, e),
            window.localStorage.removeItem(e),
            !0
          );
        } catch {
          return !1;
        }
      }
      function $() {
        if (!U()) return P || { ...M };
        try {
          let e = window.localStorage.getItem(_);
          if (!e) return { ...M };
          let t = JSON.parse(e);
          return {
            currentIndex: t.currentIndex ?? M.currentIndex,
            lastRotationTime: t.lastRotationTime ?? M.lastRotationTime,
            rotationIntervalMinutes:
              t.rotationIntervalMinutes ?? M.rotationIntervalMinutes,
            enabled: t.enabled ?? M.enabled,
          };
        } catch (e) {
          return (
            console.warn('Failed to load background preferences:', e),
            P || { ...M }
          );
        }
      }
      let L = [1080, 1440, 1920, 2560];
      function z(e, t, s) {
        let a,
          r = ((a = Math.max(t, s)), L.find((e) => e >= a) || L[L.length - 1]);
        return `${e}?auto=format&fit=crop&w=${r}&h=${r}&q=85`;
      }
      var Y = s(3707),
        J = s(1977),
        V = s(9554);
      let q = J.bL,
        H = J.ZL,
        K = n.forwardRef(({ className: e, ...t }, s) =>
          (0, r.jsx)(J.hJ, {
            className: l(
              'fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
              e,
            ),
            ...t,
            ref: s,
          }),
        );
      K.displayName = J.hJ.displayName;
      let W = {
          top: 'inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top',
          bottom:
            'inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom',
          left: 'inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm md:max-w-md',
          right:
            'inset-y-0 right-0 h-full w-3/4 border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm md:max-w-md',
        },
        B = n.forwardRef(({ side: e = 'right', className: t, children: s, ...a }, n) =>
          (0, r.jsxs)(H, {
            children: [
              (0, r.jsx)(K, {}),
              (0, r.jsxs)(J.UC, {
                ref: n,
                className: l(
                  'fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-500',
                  W[e],
                  t,
                ),
                ...a,
                children: [
                  s,
                  (0, r.jsxs)(J.bm, {
                    className:
                      'absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary',
                    children: [
                      (0, r.jsx)(V.A, { className: 'h-4 w-4' }),
                      (0, r.jsx)('span', { className: 'sr-only', children: 'Close' }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        );
      B.displayName = J.UC.displayName;
      let G = ({ className: e, ...t }) =>
        (0, r.jsx)('div', {
          className: l('flex flex-col space-y-2 text-center sm:text-left', e),
          ...t,
        });
      G.displayName = 'SheetHeader';
      let Z = n.forwardRef(({ className: e, ...t }, s) =>
        (0, r.jsx)(J.hE, {
          ref: s,
          className: l('text-lg font-semibold text-foreground', e),
          ...t,
        }),
      );
      Z.displayName = J.hE.displayName;
      var Q = s(7796);
      let X = n.forwardRef(({ className: e, children: t, ...s }, a) =>
        (0, r.jsxs)(Q.bL, {
          ref: a,
          className: l('relative overflow-hidden', e),
          ...s,
          children: [
            (0, r.jsx)(Q.LM, {
              className: 'h-full w-full rounded-[inherit]',
              children: t,
            }),
            (0, r.jsx)(ee, {}),
            (0, r.jsx)(Q.OK, {}),
          ],
        }),
      );
      X.displayName = Q.bL.displayName;
      let ee = n.forwardRef(({ className: e, orientation: t = 'vertical', ...s }, a) =>
        (0, r.jsx)(Q.VM, {
          ref: a,
          orientation: t,
          className: l(
            'flex touch-none select-none transition-colors',
            'vertical' === t && 'h-full w-2.5 border-l border-l-transparent p-[1px]',
            'horizontal' === t && 'h-2.5 flex-col border-t border-t-transparent p-[1px]',
            e,
          ),
          ...s,
          children: (0, r.jsx)(Q.lr, {
            className: 'relative flex-1 rounded-full bg-border',
          }),
        }),
      );
      ee.displayName = Q.VM.displayName;
      var et = s(4684);
      let es = n.forwardRef(
        ({ className: e, orientation: t = 'horizontal', decorative: s = !0, ...a }, n) =>
          (0, r.jsx)(et.b, {
            ref: n,
            decorative: s,
            orientation: t,
            className: l(
              'shrink-0 bg-border',
              'horizontal' === t ? 'h-[1px] w-full' : 'h-full w-[1px]',
              e,
            ),
            ...a,
          }),
      );
      es.displayName = et.b.displayName;
      let ea = 'flowhub-user-connections';
      function er() {
        try {
          let e = localStorage.getItem(ea);
          if (!e) return { connections: {}, lastUpdated: Date.now() };
          return JSON.parse(e);
        } catch (e) {
          return (
            console.error('Failed to parse user connections from localStorage:', e),
            { connections: {}, lastUpdated: Date.now() }
          );
        }
      }
      function en(e) {
        try {
          localStorage.setItem(ea, JSON.stringify(e));
        } catch (e) {
          console.error('Failed to save user connections to localStorage:', e);
        }
      }
      function eo(e) {
        let t = er();
        ((t.connections[e.id] = e), (t.lastUpdated = Date.now()), en(t));
      }
      class ei {
        subscribe(e) {
          return (
            this.listeners.add(e),
            () => {
              this.listeners.delete(e);
            }
          );
        }
        notify() {
          ((this.cachedSnapshot = null), this.listeners.forEach((e) => e()));
        }
        getSnapshot() {
          return (
            null === this.cachedSnapshot && (this.cachedSnapshot = er().connections),
            this.cachedSnapshot
          );
        }
        connect(e, t) {
          let s = this.getSnapshot()[e];
          (eo({
            id: e,
            status: 'connected',
            connectedAt: Date.now(),
            apiKey: t,
            lastSyncedAt: s?.lastSyncedAt,
            syncStatus: s?.syncStatus,
            syncError: s?.syncError,
          }),
            this.notify());
        }
        disconnect(e) {
          let t;
          ((t = er()),
            delete t.connections[e],
            (t.lastUpdated = Date.now()),
            en(t),
            this.notify());
        }
        updateSyncStatus(e, t, s) {
          let a = this.getSnapshot()[e];
          a && (eo({ ...a, syncStatus: t, syncError: s }), this.notify());
        }
        updateLastSyncedAt(e, t) {
          let s = this.getSnapshot()[e];
          s && (eo({ ...s, lastSyncedAt: t }), this.notify());
        }
        constructor() {
          ((this.listeners = new Set()), (this.cachedSnapshot = null));
        }
      }
      let el = new ei(),
        ec = [
          {
            id: 'example',
            displayName: 'Example',
            description: 'Example connector for demonstration purposes',
            setupInstructions: 'instructions/example.md',
            icon: s(6344).A,
            requiresApiKey: !1,
            metrics: [],
            facets: [],
          },
          {
            id: 'claudecode',
            displayName: 'Claude Code',
            description:
              'Uses ccusage local MCP server to pull Claude Code usage on the local machine',
            setupInstructions: 'instructions/claudecode.md',
            iconUrl: 'https://ccusage.com/logo.svg',
            requiresApiKey: !1,
            metrics: ['cost', 'count'],
            facets: ['local-only'],
            syncPeriodMs: 6e5,
          },
        ];
      class ed {
        constructor(e, t, s, a) {
          ((this.connectorStates = e),
            (this.allConnectors = t),
            (this.connectFn = s),
            (this.disconnectFn = a));
        }
        isConnectorConnected(e) {
          return this.connectorStates[e]?.status === 'connected';
        }
        getAllConnectors() {
          return this.allConnectors.sort((e, t) => e.id.localeCompare(t.id));
        }
        getConnectorStates() {
          return this.connectorStates;
        }
        connect(e, t) {
          this.connectFn(e, t);
        }
        disconnect(e) {
          this.disconnectFn(e);
        }
      }
      let eu = {},
        em = () => eu;
      function ef() {
        let e = (0, n.useMemo)(() => el.subscribe.bind(el), []),
          t = (0, n.useMemo)(() => el.getSnapshot.bind(el), []),
          s = (0, n.useSyncExternalStore)(e, t, em),
          a = (0, n.useMemo)(() => ec, []),
          r = (0, n.useMemo)(
            () => (e, t) => {
              el.connect(e, t);
            },
            [],
          ),
          o = (0, n.useMemo)(
            () => (e) => {
              el.disconnect(e);
            },
            [],
          );
        return (0, n.useMemo)(() => new ed(s, a, r, o), [s, a, r, o]);
      }
      let eh = {
        default:
          'border-transparent bg-primary text-primary-foreground hover:bg-primary/80',
        secondary:
          'border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80',
        destructive:
          'border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80',
        outline: 'text-foreground',
      };
      function ep({ className: e, variant: t = 'default', ...s }) {
        return (0, r.jsx)('div', {
          className: l(
            'inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2',
            eh[t],
            e,
          ),
          ...s,
        });
      }
      var ex = s(1200),
        eg = s(4702),
        ey = s(9201);
      let ew = J.bL;
      J.l9;
      let eb = J.ZL;
      J.bm;
      let ej = n.forwardRef(({ className: e, ...t }, s) =>
        (0, r.jsx)(J.hJ, {
          ref: s,
          className: l(
            'fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
            e,
          ),
          ...t,
        }),
      );
      ej.displayName = J.hJ.displayName;
      let ev = n.forwardRef(({ className: e, children: t, ...s }, a) =>
        (0, r.jsxs)(eb, {
          children: [
            (0, r.jsx)(ej, {}),
            (0, r.jsxs)(J.UC, {
              ref: a,
              className: l(
                'fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg',
                e,
              ),
              ...s,
              children: [
                t,
                (0, r.jsxs)(J.bm, {
                  className:
                    'absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground',
                  children: [
                    (0, r.jsx)(V.A, { className: 'h-4 w-4' }),
                    (0, r.jsx)('span', { className: 'sr-only', children: 'Close' }),
                  ],
                }),
              ],
            }),
          ],
        }),
      );
      ev.displayName = J.UC.displayName;
      let eN = ({ className: e, ...t }) =>
        (0, r.jsx)('div', {
          className: l('flex flex-col space-y-1.5 text-center sm:text-left', e),
          ...t,
        });
      eN.displayName = 'DialogHeader';
      let eS = ({ className: e, ...t }) =>
        (0, r.jsx)('div', {
          className: l(
            'flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2',
            e,
          ),
          ...t,
        });
      eS.displayName = 'DialogFooter';
      let ek = n.forwardRef(({ className: e, ...t }, s) =>
        (0, r.jsx)(J.hE, {
          ref: s,
          className: l('text-lg font-semibold leading-none tracking-tight', e),
          ...t,
        }),
      );
      ek.displayName = J.hE.displayName;
      let eC = n.forwardRef(({ className: e, ...t }, s) =>
        (0, r.jsx)(J.VY, {
          ref: s,
          className: l('text-sm text-muted-foreground', e),
          ...t,
        }),
      );
      eC.displayName = J.VY.displayName;
      var eE = s(3760);
      let eI = n.forwardRef(({ className: e, children: t, ...s }, a) =>
        (0, r.jsx)('span', {
          ref: a,
          className: l(
            'absolute -m-px h-px w-px overflow-hidden whitespace-nowrap border-0 p-0',
            e,
          ),
          ...s,
          children: t,
        }),
      );
      function eR({
        connector: e,
        isOpen: t,
        onClose: s,
        onConnect: a,
        onDisconnect: o,
        isConnected: i = !1,
      }) {
        let [l, c] = (0, n.useState)(''),
          [d, m] = (0, n.useState)(''),
          [f, h] = (0, n.useState)(!0);
        return (
          (0, n.useEffect)(() => {
            async function s() {
              try {
                var t;
                h(!0);
                let s = (t = e.setupInstructions).startsWith('/') ? t : `/${t}`;
                if (!s) return void m('No setup instructions provided.');
                let a = await fetch(s);
                if (!a.ok) throw Error(`Received ${a.status} from ${s}`);
                let r = await a.text();
                m(r);
              } catch (e) {
                (console.error('Failed to load instructions:', e),
                  m('Failed to load setup instructions.'));
              } finally {
                h(!1);
              }
            }
            t && !i ? s() : (c(''), m(''));
          }, [e.setupInstructions, t, i]),
          (0, r.jsx)(ew, {
            open: t,
            onOpenChange: s,
            children: (0, r.jsx)(ev, {
              className: i ? 'sm:max-w-sm p-0' : 'max-h-[85vh] p-0 sm:max-w-2xl',
              children: i
                ? (0, r.jsxs)('div', {
                    className: 'grid grid-rows-[auto,1fr,auto]',
                    children: [
                      (0, r.jsx)(eN, {
                        className: 'px-6 pt-6 pb-4',
                        children: (0, r.jsxs)(ek, {
                          children: ['Disconnect ', e.displayName],
                        }),
                      }),
                      (0, r.jsx)('div', { className: 'px-6 pb-2' }),
                      (0, r.jsxs)(eS, {
                        className: 'border-t bg-background px-6 py-3',
                        children: [
                          (0, r.jsx)(u, {
                            variant: 'outline',
                            onClick: s,
                            children: 'Cancel',
                          }),
                          (0, r.jsx)(u, {
                            variant: 'default',
                            onClick: () => {
                              o?.();
                            },
                            children: 'Disconnect',
                          }),
                        ],
                      }),
                    ],
                  })
                : (0, r.jsxs)('div', {
                    className:
                      'grid h-full max-h-[85vh] grid-rows-[auto,1fr,auto] overflow-hidden',
                    children: [
                      (0, r.jsxs)(eI, {
                        children: [
                          (0, r.jsxs)(ek, { children: ['Configure ', e.displayName] }),
                          (0, r.jsxs)(eC, {
                            children: [
                              'Follow the instructions below to set up ',
                              e.displayName,
                              '.',
                            ],
                          }),
                        ],
                      }),
                      (0, r.jsx)('div', {
                        className: 'min-h-0 overflow-y-auto px-6 pb-6 pt-6',
                        children: (0, r.jsxs)('div', {
                          className: 'space-y-4',
                          children: [
                            (0, r.jsx)('div', {
                              className:
                                'space-y-2 prose prose-sm max-w-none dark:prose-invert',
                              children: f
                                ? (0, r.jsx)('div', {
                                    className: 'flex items-center justify-center',
                                    children: (0, r.jsx)(eE.A, {
                                      className: 'h-4 w-4 animate-spin',
                                    }),
                                  })
                                : (0, r.jsx)(ey.oz, { children: d }),
                            }),
                            e.requiresApiKey &&
                              (0, r.jsxs)('div', {
                                className: 'space-y-2',
                                children: [
                                  (0, r.jsxs)('label', {
                                    htmlFor: 'api-key',
                                    className:
                                      'text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70',
                                    children: [e.displayName, ' Admin API Key'],
                                  }),
                                  (0, r.jsx)('input', {
                                    id: 'api-key',
                                    type: 'password',
                                    placeholder: 'sk-ant-...',
                                    value: l,
                                    onChange: (e) => c(e.target.value),
                                    className:
                                      'flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
                                  }),
                                ],
                              }),
                          ],
                        }),
                      }),
                      (0, r.jsx)(eS, {
                        className: 'border-t bg-background px-6 py-4',
                        children: (0, r.jsx)(u, {
                          onClick: () => {
                            (!e.requiresApiKey || l) && a(l || void 0);
                          },
                          disabled: e.requiresApiKey && !l,
                          children: 'Connect',
                        }),
                      }),
                    ],
                  }),
            }),
          })
        );
      }
      function eA({ connector: e, isConnected: t, onConnect: s, onDisconnect: a }) {
        let [o, i] = (0, n.useState)(!1),
          l = e.icon;
        return (0, r.jsxs)(r.Fragment, {
          children: [
            (0, r.jsxs)('div', {
              className:
                'flex items-center justify-between p-4 rounded-lg border bg-card hover:bg-accent/50 transition-colors',
              children: [
                (0, r.jsxs)('div', {
                  className: 'flex items-center gap-3 flex-1',
                  children: [
                    (0, r.jsx)('div', {
                      className:
                        'flex h-10 w-10 items-center justify-center rounded-lg bg-muted/80',
                      children: e.iconUrl
                        ? (0, r.jsx)('img', {
                            src: e.iconUrl,
                            alt: e.displayName,
                            className: 'h-6 w-6',
                          })
                        : l
                          ? (0, r.jsx)(l, { className: 'h-6 w-6 text-foreground' })
                          : null,
                    }),
                    (0, r.jsxs)('div', {
                      className: 'flex-1',
                      children: [
                        (0, r.jsxs)('div', {
                          className: 'flex items-center gap-2',
                          children: [
                            (0, r.jsx)('h3', {
                              className: 'font-medium text-sm',
                              children: e.displayName,
                            }),
                            t &&
                              (0, r.jsx)(ep, {
                                variant: 'secondary',
                                className:
                                  'text-xs bg-green-900/30 text-green-700 dark:text-green-400 border-green-900/50',
                                children: 'Connected',
                              }),
                          ],
                        }),
                        (0, r.jsx)('p', {
                          className: 'text-xs text-muted-foreground mt-0.5',
                          children: e.description,
                        }),
                      ],
                    }),
                  ],
                }),
                t
                  ? (0, r.jsxs)(u, {
                      variant: 'ghost',
                      size: 'sm',
                      onClick: () => {
                        i(!0);
                      },
                      className: 'h-10 w-10 p-0',
                      'aria-label': `Disconnect ${e.displayName}`,
                      'aria-haspopup': 'dialog',
                      children: [
                        (0, r.jsx)(ex.A, { className: 'h-5 w-5' }),
                        (0, r.jsx)('span', {
                          className: 'sr-only',
                          children: 'Disconnect',
                        }),
                      ],
                    })
                  : (0, r.jsxs)(u, {
                      variant: 'ghost',
                      size: 'sm',
                      onClick: () => {
                        i(!0);
                      },
                      className: 'h-10 w-10 p-0',
                      'aria-label': `Connect ${e.displayName}`,
                      'aria-haspopup': 'dialog',
                      children: [
                        (0, r.jsx)(eg.A, { className: 'h-5 w-5' }),
                        (0, r.jsx)('span', { className: 'sr-only', children: 'Connect' }),
                      ],
                    }),
              ],
            }),
            (0, r.jsx)(eR, {
              connector: e,
              isOpen: o,
              onClose: () => i(!1),
              onConnect: (e) => {
                (s(e), i(!1));
              },
              onDisconnect: () => {
                (a(), i(!1));
              },
              isConnected: t,
            }),
          ],
        });
      }
      function eD({ isOpen: e, onClose: t }) {
        let s = ef();
        return (0, r.jsx)(q, {
          open: e,
          onOpenChange: t,
          children: (0, r.jsxs)(B, {
            side: 'right',
            className: 'w-[90vw] sm:w-[540px] md:w-[600px] sm:max-w-[40vw]',
            children: [
              (0, r.jsx)(G, { children: (0, r.jsx)(Z, { children: 'Connectors' }) }),
              (0, r.jsx)(es, { className: 'my-4' }),
              (0, r.jsx)(X, {
                className: 'h-[calc(100vh-8rem)] pr-4',
                children: (0, r.jsx)('div', {
                  className: 'space-y-2',
                  children: s
                    .getAllConnectors()
                    .map((e) =>
                      (0, r.jsx)(
                        eA,
                        {
                          connector: e,
                          isConnected: s.isConnectorConnected(e.id),
                          onConnect: (t) => s.connect(e.id, t),
                          onDisconnect: () => s.disconnect(e.id),
                        },
                        e.id,
                      ),
                    ),
                }),
              }),
            ],
          }),
        });
      }
      function eT() {
        let [e, t] = (0, n.useState)(!1);
        return (0, r.jsxs)(r.Fragment, {
          children: [
            (0, r.jsx)(m, {
              icon: Y.A,
              onClick: () => t(!0),
              'aria-label': 'Connector Settings',
            }),
            (0, r.jsx)(eD, { isOpen: e, onClose: () => t(!1) }),
          ],
        });
      }
      function eO({ children: e }) {
        return (0, r.jsx)(r.Fragment, { children: e });
      }
      function eF() {
        return (0, r.jsxs)(p, {
          className: 'bg-card/30 backdrop-blur-md border-card/50 text-foreground',
          children: [
            (0, r.jsx)(x, { children: (0, r.jsx)(g, { children: 'Example Connector' }) }),
            (0, r.jsx)(y, {
              children: (0, r.jsx)('div', {
                className: 'flex items-center justify-center py-12',
                children: (0, r.jsx)('p', {
                  className: 'text-2xl font-medium text-foreground',
                  children: 'Hello, world!',
                }),
              }),
            }),
          ],
        });
      }
      eI.displayName = 'VisuallyHidden';
      class e_ {
        constructor(e = '/api/mcp') {
          ((this.requestId = 0), (this.initialized = !1), (this.baseUrl = e));
        }
        async initialize() {
          this.initialized ||
            (await this.sendRequest('initialize', {
              protocolVersion: '2024-11-05',
              capabilities: {},
              clientInfo: { name: 'flowhub-claudecode', version: '1.0.0' },
            }),
            (this.initialized = !0));
        }
        async getDailyUsage(e, t) {
          await this.initialize();
          let s = (
            await this.sendRequest('tools/call', {
              name: 'daily',
              arguments: { since: e, until: t, mode: 'auto' },
            })
          ).result;
          if (!s) throw Error('MCP response missing result payload');
          if (s.isError) throw Error(s.content[0]?.text || 'Unknown error from MCP tool');
          let a = s.content?.[0];
          if (!a || 'text' !== a.type || 'string' != typeof a.text)
            throw Error('Unexpected response format from MCP');
          try {
            return JSON.parse(a.text);
          } catch (t) {
            let e = t instanceof Error ? t.message : 'Unknown parser error';
            throw Error(`Failed to parse MCP response as JSON: ${e}`);
          }
        }
        async sendRequest(e, t) {
          let s = { jsonrpc: '2.0', id: ++this.requestId, method: e, params: t },
            a = await fetch(this.baseUrl, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json, text/event-stream',
              },
              body: JSON.stringify(s),
            });
          if (!a.ok) throw Error(`HTTP ${a.status}: ${a.statusText}`);
          let r = a.headers.get('Content-Type');
          if (r?.includes('text/event-stream')) return this.parseSSEResponse(a);
          if (r?.includes('application/json')) {
            let e = await a.json();
            if (e.error) throw Error(`MCP Error ${e.error.code}: ${e.error.message}`);
            return e;
          }
          throw Error(`Unexpected content type: ${r}`);
        }
        async parseSSEResponse(e) {
          for (let t of (await e.text()).split('\n'))
            if (!(!t.trim() || t.startsWith(':')) && t.startsWith('data: ')) {
              let e = t.slice(6);
              if (!e.startsWith('{')) continue;
              try {
                let t = JSON.parse(e);
                if (t.error) throw Error(`MCP Error ${t.error.code}: ${t.error.message}`);
                return t;
              } catch (t) {
                console.error('Failed to parse SSE data:', e, t);
              }
            }
          throw Error('No valid response found in SSE stream');
        }
      }
      let eM = S.Ik({
          modelName: S.Yj(),
          inputTokens: S.ai(),
          outputTokens: S.ai(),
          cacheCreationTokens: S.ai(),
          cacheReadTokens: S.ai(),
          cost: S.ai(),
        }),
        eP = S.Ik({
          date: S.Yj(),
          inputTokens: S.ai(),
          outputTokens: S.ai(),
          cacheCreationTokens: S.ai(),
          cacheReadTokens: S.ai(),
          totalTokens: S.ai(),
          totalCost: S.ai(),
          modelsUsed: S.YO(S.Yj()),
          modelBreakdowns: S.YO(eM),
        }),
        eU = S.Ik({
          inputTokens: S.ai(),
          outputTokens: S.ai(),
          cacheCreationTokens: S.ai(),
          cacheReadTokens: S.ai(),
          totalCost: S.ai(),
          totalTokens: S.ai(),
        }),
        e$ = S.Ik({ daily: S.YO(eP), totals: eU });
      function eL() {
        let [e, t] = (0, n.useState)(null),
          [s, a] = (0, n.useState)(!1),
          [o, i] = (0, n.useState)(null);
        (0, n.useEffect)(() => {
          c();
        }, []);
        let l = async (e) => {
            let t = new e_(),
              s = await t.getDailyUsage(e.since, e.until);
            return { data: e$.parse(s), syncedAt: new Date().toISOString() };
          },
          c = async () => {
            let e = ec.find((e) => 'claudecode' === e.id);
            if (!e?.syncPeriodMs)
              return void i('claudecode connector missing syncPeriodMs');
            let s = S.Ik({ lastSyncedAt: S.Yj(), data: e$ }),
              r = E(I.CLAUDE_CODE_DAILY_RESPONSE),
              n = await r.get(s);
            if (
              (() => {
                if (!n) return !0;
                let t = new Date(n.lastSyncedAt).getTime();
                return Date.now() - t > e.syncPeriodMs;
              })()
            ) {
              (a(!0), i(null));
              try {
                let e, s, a;
                el.updateSyncStatus('claudecode', 'syncing');
                let n =
                    ((e = new Date()),
                    (s = new Date()).setDate(s.getDate() - 30),
                    {
                      since: (a = (e) => {
                        let t = e.getFullYear(),
                          s = String(e.getMonth() + 1).padStart(2, '0'),
                          a = String(e.getDate()).padStart(2, '0');
                        return `${t}${s}${a}`;
                      })(s),
                      until: a(e),
                    }),
                  { data: o, syncedAt: i } = await l(n);
                (await r.set({ lastSyncedAt: i, data: o }),
                  t(i),
                  el.updateSyncStatus('claudecode', 'idle'),
                  el.updateLastSyncedAt('claudecode', i));
              } catch (e) {
                (i(e.message), el.updateSyncStatus('claudecode', 'error', e.message));
              } finally {
                a(!1);
              }
            } else n && t(n.lastSyncedAt);
          };
        return (0, r.jsxs)(p, {
          className: 'bg-card/30 border-card/50 backdrop-blur-md text-foreground',
          children: [
            (0, r.jsx)(x, { children: (0, r.jsx)(g, { children: 'Claude Code Usage' }) }),
            (0, r.jsxs)(y, {
              className: 'text-foreground',
              children: [
                s &&
                  (0, r.jsxs)('div', {
                    className: 'flex items-center gap-2',
                    children: [
                      (0, r.jsx)(eE.A, {
                        className: 'h-4 w-4 animate-spin text-foreground',
                      }),
                      (0, r.jsx)('span', {
                        className: 'text-sm font-medium',
                        children: 'Syncing Claude Code usage...',
                      }),
                    ],
                  }),
                o &&
                  (0, r.jsxs)('div', {
                    className: 'space-y-2 text-sm text-foreground',
                    children: [
                      (0, r.jsxs)('div', {
                        className: 'text-red-400 font-medium',
                        children: ['Error: ', o],
                      }),
                      (0, r.jsx)(u, {
                        onClick: c,
                        size: 'sm',
                        variant: 'outline',
                        className: 'text-foreground',
                        children: 'Retry',
                      }),
                    ],
                  }),
                !s &&
                  !o &&
                  (0, r.jsxs)('div', {
                    className: 'text-sm font-medium text-foreground',
                    children: [
                      'Data last synced at',
                      ' ',
                      e ? new Date(e).toLocaleString() : 'Never',
                    ],
                  }),
              ],
            }),
          ],
        });
      }
      function ez() {
        let e = ef(),
          t = e.getAllConnectors().filter((t) => e.isConnectorConnected(t.id));
        return 0 === t.length
          ? null
          : (0, r.jsx)('div', {
              className: 'w-full px-6 sm:px-8',
              children: (0, r.jsx)('div', {
                className: 'mx-auto max-w-2xl',
                children: (0, r.jsx)('div', {
                  className: 'space-y-6',
                  children: t.map((e) =>
                    (0, r.jsxs)(
                      'div',
                      {
                        children: [
                          'claudecode' === e.id && (0, r.jsx)(eL, {}),
                          'example' === e.id && (0, r.jsx)(eF, {}),
                        ],
                      },
                      e.id,
                    ),
                  ),
                }),
              }),
            });
      }
      var eY = s(4176);
      function eJ() {
        let {
            theme: e,
            toggleTheme: t,
            isReady: s,
          } = (function () {
            let [e, t] = (0, n.useState)('light'),
              [s, a] = (0, n.useState)(!1);
            ((0, n.useEffect)(() => {
              (async () => {
                (t((await O()).theme), a(!0));
              })();
            }, []),
              (0, n.useEffect)(() => {
                'undefined' == typeof document ||
                  document.documentElement.classList.toggle('dark', 'dark' === e);
              }, [e]));
            let r = (0, n.useCallback)(async () => {
              let s = 'light' === e ? 'dark' : 'light';
              t(s);
              try {
                await F({ theme: s });
              } catch (s) {
                throw (
                  console.error('Failed to save theme preference.', { error: s }),
                  t(e),
                  s
                );
              }
            }, [e]);
            return { theme: e, toggleTheme: r, isReady: s };
          })(),
          { currentBackground: a, backgroundUrl: o } = (function () {
            let [e, t] = (0, n.useState)([]),
              [s, a] = (0, n.useState)(null),
              [r, o] = (0, n.useState)(!0),
              [i, l] = (0, n.useState)(null),
              [c, d] = (0, n.useState)({ width: 1920, height: 1080 });
            ((0, n.useEffect)(() => {
              d({ width: window.innerWidth, height: window.innerHeight });
              let e = () => {
                d({ width: window.innerWidth, height: window.innerHeight });
              };
              return (
                window.addEventListener('resize', e),
                () => window.removeEventListener('resize', e)
              );
            }, []),
              (0, n.useEffect)(() => {
                !(async function () {
                  try {
                    let e = await fetch('/backgrounds.json');
                    if (!e.ok) throw Error(`Failed to load backgrounds: ${e.statusText}`);
                    let s = await e.json();
                    if (!Array.isArray(s) || 0 === s.length)
                      throw Error('No backgrounds available');
                    t(s);
                  } catch (t) {
                    let e = t instanceof Error ? t.message : 'Failed to load backgrounds';
                    (console.error('Error loading backgrounds:', e), l(e));
                  } finally {
                    o(!1);
                  }
                })();
              }, []),
              (0, n.useEffect)(() => {
                a($());
              }, []));
            let u = (0, n.useCallback)(
                (e) =>
                  !!e.enabled &&
                  Date.now() - e.lastRotationTime >= 60 * e.rotationIntervalMinutes * 1e3,
                [],
              ),
              m = (0, n.useCallback)(() => {
                if (!s || 0 === e.length) return;
                let t = (s.currentIndex + 1) % e.length,
                  r = { ...s, currentIndex: t, lastRotationTime: Date.now() };
                (a(r),
                  (function (e) {
                    if (((P = { ...e }), !U()))
                      return console.warn(
                        'localStorage not available, background preferences will not persist',
                      );
                    try {
                      window.localStorage.setItem(_, JSON.stringify(e));
                    } catch (e) {
                      console.warn('Failed to save background preferences:', e);
                    }
                  })(r));
                let n = e[(t + 1) % e.length];
                if (n) {
                  let e = z(n.hotlink, c.width, c.height);
                  new Image().src = e;
                }
              }, [s, e, c]);
            ((0, n.useEffect)(() => {
              if (!s || 0 === e.length) return;
              u(s) && m();
              let t = setInterval(() => {
                u($()) && m();
              }, 6e4);
              return () => clearInterval(t);
            }, [s, e, u, m]),
              (0, n.useEffect)(() => {
                if (0 === e.length || !s || !e[s.currentIndex]) return;
                let t = (s.currentIndex + 1) % e.length,
                  a = e[t];
                if (a) {
                  let e = z(a.hotlink, c.width, c.height);
                  new Image().src = e;
                }
              }, [e, s, c]));
            let f = (e.length > 0 && s && e[s.currentIndex]) || null,
              h = f && !r ? z(f.hotlink, c.width, c.height) : null;
            return {
              currentBackground: f,
              isLoading: r,
              error: i,
              backgroundUrl: h,
              rotateNow: m,
            };
          })(),
          i = ef(),
          l = (0, n.useRef)(null),
          [c, d] = (0, n.useState)(!1),
          m = Object.values(i.getConnectorStates()).filter(
            (e) => 'connected' === e.status,
          ).length;
        (0, n.useEffect)(() => {
          d(m > 0);
        }, [m]);
        let h = o
          ? {
              backgroundImage: `url("${o}")`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              backgroundAttachment: 'fixed',
            }
          : void 0;
        return (0, r.jsxs)(r.Fragment, {
          children: [
            (0, r.jsxs)('div', {
              className:
                'relative flex min-h-screen w-full flex-col bg-background overflow-hidden',
              style: h,
              children: [
                (0, r.jsxs)('div', {
                  className: 'fixed top-4 right-4 flex items-center gap-2 z-10',
                  children: [
                    (0, r.jsx)(eT, {}),
                    (0, r.jsx)(f, { theme: e, onToggle: t, isReady: s }),
                  ],
                }),
                (0, r.jsx)(N, { background: a }),
                (0, r.jsx)('div', {
                  className: 'absolute inset-0 flex items-center justify-center px-6',
                  children: (0, r.jsxs)('div', {
                    className: 'flex flex-col items-center gap-4',
                    children: [(0, r.jsx)(b, {}), (0, r.jsx)(j, {})],
                  }),
                }),
                c &&
                  (0, r.jsx)('div', {
                    className: 'absolute bottom-16 left-0 right-0 flex justify-center',
                    children: (0, r.jsxs)(u, {
                      variant: 'ghost',
                      size: 'sm',
                      onClick: () => {
                        let e = window.matchMedia(
                          '(prefers-reduced-motion: reduce)',
                        ).matches;
                        l.current?.scrollIntoView({
                          behavior: e ? 'auto' : 'smooth',
                          block: 'start',
                        });
                      },
                      className: 'hover:text-foreground',
                      children: [
                        'Details',
                        (0, r.jsx)(eY.A, { className: 'ml-2 h-4 w-4' }),
                      ],
                    }),
                  }),
              ],
            }),
            c &&
              (0, r.jsx)('div', {
                ref: l,
                className:
                  'relative flex min-h-screen w-full flex-col items-center bg-background pt-24 pb-16',
                style: h,
                children: (0, r.jsx)(ez, {}),
              }),
          ],
        });
      }
      function eV() {
        return (0, r.jsx)(eO, { children: (0, r.jsx)(eJ, {}) });
      }
    },
    7094: (e, t, s) => {
      Promise.resolve().then(s.bind(s, 674));
    },
  },
  (e) => {
    (e.O(0, [548, 958, 638, 358], () => e((e.s = 7094))), (_N_E = e.O()));
  },
]);
