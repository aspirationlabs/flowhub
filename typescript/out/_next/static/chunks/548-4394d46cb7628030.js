'use strict';
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [548],
  {
    206: (e, t, n) => {
      n.d(t, { hO: () => s, sG: () => l });
      var r = n(5541),
        i = n(9832),
        a = n(5648),
        o = n(4929),
        l = [
          'a',
          'button',
          'div',
          'form',
          'h2',
          'h3',
          'img',
          'input',
          'label',
          'li',
          'nav',
          'ol',
          'p',
          'select',
          'span',
          'svg',
          'ul',
        ].reduce((e, t) => {
          let n = (0, a.TL)(`Primitive.${t}`),
            i = r.forwardRef((e, r) => {
              let { asChild: i, ...a } = e;
              return (
                'undefined' != typeof window && (window[Symbol.for('radix-ui')] = !0),
                (0, o.jsx)(i ? n : t, { ...a, ref: r })
              );
            });
          return ((i.displayName = `Primitive.${t}`), { ...e, [t]: i });
        }, {});
      function s(e, t) {
        e && i.flushSync(() => e.dispatchEvent(t));
      }
    },
    431: (e, t, n) => {
      n.d(t, { c: () => i });
      var r = n(5541);
      function i(e) {
        let t = r.useRef(e);
        return (
          r.useEffect(() => {
            t.current = e;
          }),
          r.useMemo(
            () =>
              (...e) =>
                t.current?.(...e),
            [],
          )
        );
      }
    },
    613: (e, t, n) => {
      function r(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
        return function (r) {
          if ((e?.(r), !1 === n || !r.defaultPrevented)) return t?.(r);
        };
      }
      (n.d(t, { mK: () => r }),
        'undefined' != typeof window && window.document && window.document.createElement);
    },
    1109: (e) => {
      var t = Object.prototype.hasOwnProperty,
        n = Object.prototype.toString,
        r = Object.defineProperty,
        i = Object.getOwnPropertyDescriptor,
        a = function (e) {
          return 'function' == typeof Array.isArray
            ? Array.isArray(e)
            : '[object Array]' === n.call(e);
        },
        o = function (e) {
          if (!e || '[object Object]' !== n.call(e)) return !1;
          var r,
            i = t.call(e, 'constructor'),
            a =
              e.constructor &&
              e.constructor.prototype &&
              t.call(e.constructor.prototype, 'isPrototypeOf');
          if (e.constructor && !i && !a) return !1;
          for (r in e);
          return void 0 === r || t.call(e, r);
        },
        l = function (e, t) {
          r && '__proto__' === t.name
            ? r(e, t.name, {
                enumerable: !0,
                configurable: !0,
                value: t.newValue,
                writable: !0,
              })
            : (e[t.name] = t.newValue);
        },
        s = function (e, n) {
          if ('__proto__' === n) {
            if (!t.call(e, n)) return;
            else if (i) return i(e, n).value;
          }
          return e[n];
        };
      e.exports = function e() {
        var t,
          n,
          r,
          i,
          u,
          c,
          d = arguments[0],
          f = 1,
          p = arguments.length,
          h = !1;
        for (
          'boolean' == typeof d && ((h = d), (d = arguments[1] || {}), (f = 2)),
            (null == d || ('object' != typeof d && 'function' != typeof d)) && (d = {});
          f < p;
          ++f
        )
          if (((t = arguments[f]), null != t))
            for (n in t)
              ((r = s(d, n)),
                d !== (i = s(t, n)) &&
                  (h && i && (o(i) || (u = a(i)))
                    ? (u
                        ? ((u = !1), (c = r && a(r) ? r : []))
                        : (c = r && o(r) ? r : {}),
                      l(d, { name: n, newValue: e(h, c, i) }))
                    : void 0 !== i && l(d, { name: n, newValue: i })));
        return d;
      };
    },
    1200: (e, t, n) => {
      n.d(t, { A: () => r });
      let r = (0, n(4552).A)('plug-zap', [
        [
          'path',
          {
            d: 'M6.3 20.3a2.4 2.4 0 0 0 3.4 0L12 18l-6-6-2.3 2.3a2.4 2.4 0 0 0 0 3.4Z',
            key: 'goz73y',
          },
        ],
        ['path', { d: 'm2 22 3-3', key: '19mgm9' }],
        ['path', { d: 'M7.5 13.5 10 11', key: '7xgeeb' }],
        ['path', { d: 'M10.5 16.5 13 14', key: '10btkg' }],
        ['path', { d: 'm18 3-4 4h6l-4 4', key: '16psg9' }],
      ]);
    },
    1977: (e, t, n) => {
      let r;
      n.d(t, {
        bm: () => tp,
        UC: () => tc,
        VY: () => tf,
        hJ: () => tu,
        ZL: () => ts,
        bL: () => to,
        hE: () => td,
        l9: () => tl,
      });
      var i,
        a,
        o,
        l,
        s,
        u,
        c,
        d,
        f = n(5541),
        p = n.t(f, 2),
        h = n(613),
        m = n(5528),
        g = n(4226),
        y = n(8987),
        v = p[' useId '.trim().toString()] || (() => void 0),
        x = 0;
      function b(e) {
        let [t, n] = f.useState(v());
        return (
          (0, y.N)(() => {
            e || n((e) => e ?? String(x++));
          }, [e]),
          e || (t ? `radix-${t}` : '')
        );
      }
      var k = p[' useInsertionEffect '.trim().toString()] || y.N;
      Symbol('RADIX:SYNC_STATE');
      var w = n(206),
        _ = n(431),
        S = n(4929),
        E = 'dismissableLayer.update',
        C = f.createContext({
          layers: new Set(),
          layersWithOutsidePointerEventsDisabled: new Set(),
          branches: new Set(),
        }),
        T = f.forwardRef((e, t) => {
          let {
              disableOutsidePointerEvents: n = !1,
              onEscapeKeyDown: r,
              onPointerDownOutside: i,
              onFocusOutside: a,
              onInteractOutside: o,
              onDismiss: l,
              ...s
            } = e,
            u = f.useContext(C),
            [d, p] = f.useState(null),
            g = d?.ownerDocument ?? globalThis?.document,
            [, y] = f.useState({}),
            v = (0, m.s)(t, (e) => p(e)),
            x = Array.from(u.layers),
            [b] = [...u.layersWithOutsidePointerEventsDisabled].slice(-1),
            k = x.indexOf(b),
            T = d ? x.indexOf(d) : -1,
            O = u.layersWithOutsidePointerEventsDisabled.size > 0,
            N = T >= k,
            R = (function (e, t = globalThis?.document) {
              let n = (0, _.c)(e),
                r = f.useRef(!1),
                i = f.useRef(() => {});
              return (
                f.useEffect(() => {
                  let e = (e) => {
                      if (e.target && !r.current) {
                        let r = function () {
                            P('dismissableLayer.pointerDownOutside', n, a, {
                              discrete: !0,
                            });
                          },
                          a = { originalEvent: e };
                        'touch' === e.pointerType
                          ? (t.removeEventListener('click', i.current),
                            (i.current = r),
                            t.addEventListener('click', i.current, { once: !0 }))
                          : r();
                      } else t.removeEventListener('click', i.current);
                      r.current = !1;
                    },
                    a = window.setTimeout(() => {
                      t.addEventListener('pointerdown', e);
                    }, 0);
                  return () => {
                    (window.clearTimeout(a),
                      t.removeEventListener('pointerdown', e),
                      t.removeEventListener('click', i.current));
                  };
                }, [t, n]),
                { onPointerDownCapture: () => (r.current = !0) }
              );
            })((e) => {
              let t = e.target,
                n = [...u.branches].some((e) => e.contains(t));
              N && !n && (i?.(e), o?.(e), e.defaultPrevented || l?.());
            }, g),
            I = (function (e, t = globalThis?.document) {
              let n = (0, _.c)(e),
                r = f.useRef(!1);
              return (
                f.useEffect(() => {
                  let e = (e) => {
                    e.target &&
                      !r.current &&
                      P(
                        'dismissableLayer.focusOutside',
                        n,
                        { originalEvent: e },
                        { discrete: !1 },
                      );
                  };
                  return (
                    t.addEventListener('focusin', e),
                    () => t.removeEventListener('focusin', e)
                  );
                }, [t, n]),
                {
                  onFocusCapture: () => (r.current = !0),
                  onBlurCapture: () => (r.current = !1),
                }
              );
            })((e) => {
              let t = e.target;
              ![...u.branches].some((e) => e.contains(t)) &&
                (a?.(e), o?.(e), e.defaultPrevented || l?.());
            }, g);
          return (
            !(function (e, t = globalThis?.document) {
              let n = (0, _.c)(e);
              f.useEffect(() => {
                let e = (e) => {
                  'Escape' === e.key && n(e);
                };
                return (
                  t.addEventListener('keydown', e, { capture: !0 }),
                  () => t.removeEventListener('keydown', e, { capture: !0 })
                );
              }, [n, t]);
            })((e) => {
              T === u.layers.size - 1 &&
                (r?.(e), !e.defaultPrevented && l && (e.preventDefault(), l()));
            }, g),
            f.useEffect(() => {
              if (d)
                return (
                  n &&
                    (0 === u.layersWithOutsidePointerEventsDisabled.size &&
                      ((c = g.body.style.pointerEvents),
                      (g.body.style.pointerEvents = 'none')),
                    u.layersWithOutsidePointerEventsDisabled.add(d)),
                  u.layers.add(d),
                  A(),
                  () => {
                    n &&
                      1 === u.layersWithOutsidePointerEventsDisabled.size &&
                      (g.body.style.pointerEvents = c);
                  }
                );
            }, [d, g, n, u]),
            f.useEffect(
              () => () => {
                d &&
                  (u.layers.delete(d),
                  u.layersWithOutsidePointerEventsDisabled.delete(d),
                  A());
              },
              [d, u],
            ),
            f.useEffect(() => {
              let e = () => y({});
              return (
                document.addEventListener(E, e),
                () => document.removeEventListener(E, e)
              );
            }, []),
            (0, S.jsx)(w.sG.div, {
              ...s,
              ref: v,
              style: { pointerEvents: O ? (N ? 'auto' : 'none') : void 0, ...e.style },
              onFocusCapture: (0, h.mK)(e.onFocusCapture, I.onFocusCapture),
              onBlurCapture: (0, h.mK)(e.onBlurCapture, I.onBlurCapture),
              onPointerDownCapture: (0, h.mK)(
                e.onPointerDownCapture,
                R.onPointerDownCapture,
              ),
            })
          );
        });
      function A() {
        let e = new CustomEvent(E);
        document.dispatchEvent(e);
      }
      function P(e, t, n, { discrete: r }) {
        let i = n.originalEvent.target,
          a = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: n });
        (t && i.addEventListener(e, t, { once: !0 }),
          r ? (0, w.hO)(i, a) : i.dispatchEvent(a));
      }
      ((T.displayName = 'DismissableLayer'),
        (f.forwardRef((e, t) => {
          let n = f.useContext(C),
            r = f.useRef(null),
            i = (0, m.s)(t, r);
          return (
            f.useEffect(() => {
              let e = r.current;
              if (e)
                return (
                  n.branches.add(e),
                  () => {
                    n.branches.delete(e);
                  }
                );
            }, [n.branches]),
            (0, S.jsx)(w.sG.div, { ...e, ref: i })
          );
        }).displayName = 'DismissableLayerBranch'));
      var O = 'focusScope.autoFocusOnMount',
        N = 'focusScope.autoFocusOnUnmount',
        R = { bubbles: !1, cancelable: !0 },
        I = f.forwardRef((e, t) => {
          let {
              loop: n = !1,
              trapped: r = !1,
              onMountAutoFocus: i,
              onUnmountAutoFocus: a,
              ...o
            } = e,
            [l, s] = f.useState(null),
            u = (0, _.c)(i),
            c = (0, _.c)(a),
            d = f.useRef(null),
            p = (0, m.s)(t, (e) => s(e)),
            h = f.useRef({
              paused: !1,
              pause() {
                this.paused = !0;
              },
              resume() {
                this.paused = !1;
              },
            }).current;
          (f.useEffect(() => {
            if (r) {
              let e = function (e) {
                  if (h.paused || !l) return;
                  let t = e.target;
                  l.contains(t) ? (d.current = t) : M(d.current, { select: !0 });
                },
                t = function (e) {
                  if (h.paused || !l) return;
                  let t = e.relatedTarget;
                  null !== t && (l.contains(t) || M(d.current, { select: !0 }));
                };
              (document.addEventListener('focusin', e),
                document.addEventListener('focusout', t));
              let n = new MutationObserver(function (e) {
                if (document.activeElement === document.body)
                  for (let t of e) t.removedNodes.length > 0 && M(l);
              });
              return (
                l && n.observe(l, { childList: !0, subtree: !0 }),
                () => {
                  (document.removeEventListener('focusin', e),
                    document.removeEventListener('focusout', t),
                    n.disconnect());
                }
              );
            }
          }, [r, l, h.paused]),
            f.useEffect(() => {
              if (l) {
                j.add(h);
                let e = document.activeElement;
                if (!l.contains(e)) {
                  let t = new CustomEvent(O, R);
                  (l.addEventListener(O, u),
                    l.dispatchEvent(t),
                    t.defaultPrevented ||
                      ((function (e, { select: t = !1 } = {}) {
                        let n = document.activeElement;
                        for (let r of e)
                          if ((M(r, { select: t }), document.activeElement !== n)) return;
                      })(
                        L(l).filter((e) => 'A' !== e.tagName),
                        { select: !0 },
                      ),
                      document.activeElement === e && M(l)));
                }
                return () => {
                  (l.removeEventListener(O, u),
                    setTimeout(() => {
                      let t = new CustomEvent(N, R);
                      (l.addEventListener(N, c),
                        l.dispatchEvent(t),
                        t.defaultPrevented || M(e ?? document.body, { select: !0 }),
                        l.removeEventListener(N, c),
                        j.remove(h));
                    }, 0));
                };
              }
            }, [l, u, c, h]));
          let g = f.useCallback(
            (e) => {
              if ((!n && !r) || h.paused) return;
              let t = 'Tab' === e.key && !e.altKey && !e.ctrlKey && !e.metaKey,
                i = document.activeElement;
              if (t && i) {
                var a;
                let t,
                  r = e.currentTarget,
                  [o, l] = [D((t = L((a = r))), a), D(t.reverse(), a)];
                o && l
                  ? e.shiftKey || i !== l
                    ? e.shiftKey &&
                      i === o &&
                      (e.preventDefault(), n && M(l, { select: !0 }))
                    : (e.preventDefault(), n && M(o, { select: !0 }))
                  : i === r && e.preventDefault();
              }
            },
            [n, r, h.paused],
          );
          return (0, S.jsx)(w.sG.div, { tabIndex: -1, ...o, ref: p, onKeyDown: g });
        });
      function L(e) {
        let t = [],
          n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
            acceptNode: (e) => {
              let t = 'INPUT' === e.tagName && 'hidden' === e.type;
              return e.disabled || e.hidden || t
                ? NodeFilter.FILTER_SKIP
                : e.tabIndex >= 0
                  ? NodeFilter.FILTER_ACCEPT
                  : NodeFilter.FILTER_SKIP;
            },
          });
        for (; n.nextNode(); ) t.push(n.currentNode);
        return t;
      }
      function D(e, t) {
        for (let n of e)
          if (
            !(function (e, { upTo: t }) {
              if ('hidden' === getComputedStyle(e).visibility) return !0;
              for (; e && (void 0 === t || e !== t); ) {
                if ('none' === getComputedStyle(e).display) return !0;
                e = e.parentElement;
              }
              return !1;
            })(n, { upTo: t })
          )
            return n;
      }
      function M(e, { select: t = !1 } = {}) {
        if (e && e.focus) {
          var n;
          let r = document.activeElement;
          (e.focus({ preventScroll: !0 }),
            e !== r &&
              (n = e) instanceof HTMLInputElement &&
              'select' in n &&
              t &&
              e.select());
        }
      }
      I.displayName = 'FocusScope';
      var j =
        ((r = []),
        {
          add(e) {
            let t = r[0];
            (e !== t && t?.pause(), (r = z(r, e)).unshift(e));
          },
          remove(e) {
            ((r = z(r, e)), r[0]?.resume());
          },
        });
      function z(e, t) {
        let n = [...e],
          r = n.indexOf(t);
        return (-1 !== r && n.splice(r, 1), n);
      }
      var F = n(9832),
        Z = f.forwardRef((e, t) => {
          let { container: n, ...r } = e,
            [i, a] = f.useState(!1);
          (0, y.N)(() => a(!0), []);
          let o = n || (i && globalThis?.document?.body);
          return o ? F.createPortal((0, S.jsx)(w.sG.div, { ...r, ref: t }), o) : null;
        });
      Z.displayName = 'Portal';
      var U = n(9149),
        B = 0;
      function $() {
        let e = document.createElement('span');
        return (
          e.setAttribute('data-radix-focus-guard', ''),
          (e.tabIndex = 0),
          (e.style.outline = 'none'),
          (e.style.opacity = '0'),
          (e.style.position = 'fixed'),
          (e.style.pointerEvents = 'none'),
          e
        );
      }
      var V = function () {
        return (V =
          Object.assign ||
          function (e) {
            for (var t, n = 1, r = arguments.length; n < r; n++)
              for (var i in (t = arguments[n]))
                Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
            return e;
          }).apply(this, arguments);
      };
      function H(e, t) {
        var n = {};
        for (var r in e)
          Object.prototype.hasOwnProperty.call(e, r) && 0 > t.indexOf(r) && (n[r] = e[r]);
        if (null != e && 'function' == typeof Object.getOwnPropertySymbols)
          for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++)
            0 > t.indexOf(r[i]) &&
              Object.prototype.propertyIsEnumerable.call(e, r[i]) &&
              (n[r[i]] = e[r[i]]);
        return n;
      }
      var W =
          ('function' == typeof SuppressedError && SuppressedError,
          'right-scroll-bar-position'),
        q = 'width-before-scroll-bar';
      function K(e, t) {
        return ('function' == typeof e ? e(t) : e && (e.current = t), e);
      }
      var Y = 'undefined' != typeof window ? f.useLayoutEffect : f.useEffect,
        X = new WeakMap(),
        G =
          (void 0 === i && (i = {}),
          ((void 0 === a &&
            (a = function (e) {
              return e;
            }),
          (o = []),
          (l = !1),
          (s = {
            read: function () {
              if (l)
                throw Error(
                  'Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.',
                );
              return o.length ? o[o.length - 1] : null;
            },
            useMedium: function (e) {
              var t = a(e, l);
              return (
                o.push(t),
                function () {
                  o = o.filter(function (e) {
                    return e !== t;
                  });
                }
              );
            },
            assignSyncMedium: function (e) {
              for (l = !0; o.length; ) {
                var t = o;
                ((o = []), t.forEach(e));
              }
              o = {
                push: function (t) {
                  return e(t);
                },
                filter: function () {
                  return o;
                },
              };
            },
            assignMedium: function (e) {
              l = !0;
              var t = [];
              if (o.length) {
                var n = o;
                ((o = []), n.forEach(e), (t = o));
              }
              var r = function () {
                  var n = t;
                  ((t = []), n.forEach(e));
                },
                i = function () {
                  return Promise.resolve().then(r);
                };
              (i(),
                (o = {
                  push: function (e) {
                    (t.push(e), i());
                  },
                  filter: function (e) {
                    return ((t = t.filter(e)), o);
                  },
                }));
            },
          })).options = V({ async: !0, ssr: !1 }, i)),
          s),
        J = function () {},
        Q = f.forwardRef(function (e, t) {
          var n,
            r,
            i,
            a,
            o = f.useRef(null),
            l = f.useState({
              onScrollCapture: J,
              onWheelCapture: J,
              onTouchMoveCapture: J,
            }),
            s = l[0],
            u = l[1],
            c = e.forwardProps,
            d = e.children,
            p = e.className,
            h = e.removeScrollBar,
            m = e.enabled,
            g = e.shards,
            y = e.sideCar,
            v = e.noRelative,
            x = e.noIsolation,
            b = e.inert,
            k = e.allowPinchZoom,
            w = e.as,
            _ = e.gapMode,
            S = H(e, [
              'forwardProps',
              'children',
              'className',
              'removeScrollBar',
              'enabled',
              'shards',
              'sideCar',
              'noRelative',
              'noIsolation',
              'inert',
              'allowPinchZoom',
              'as',
              'gapMode',
            ]),
            E =
              ((n = [o, t]),
              (r = function (e) {
                return n.forEach(function (t) {
                  return K(t, e);
                });
              }),
              ((i = (0, f.useState)(function () {
                return {
                  value: null,
                  callback: r,
                  facade: {
                    get current() {
                      return i.value;
                    },
                    set current(value) {
                      var e = i.value;
                      e !== value && ((i.value = value), i.callback(value, e));
                    },
                  },
                };
              })[0]).callback = r),
              (a = i.facade),
              Y(
                function () {
                  var e = X.get(a);
                  if (e) {
                    var t = new Set(e),
                      r = new Set(n),
                      i = a.current;
                    (t.forEach(function (e) {
                      r.has(e) || K(e, null);
                    }),
                      r.forEach(function (e) {
                        t.has(e) || K(e, i);
                      }));
                  }
                  X.set(a, n);
                },
                [n],
              ),
              a),
            C = V(V({}, S), s);
          return f.createElement(
            f.Fragment,
            null,
            m &&
              f.createElement(y, {
                sideCar: G,
                removeScrollBar: h,
                shards: g,
                noRelative: v,
                noIsolation: x,
                inert: b,
                setCallbacks: u,
                allowPinchZoom: !!k,
                lockRef: o,
                gapMode: _,
              }),
            c
              ? f.cloneElement(f.Children.only(d), V(V({}, C), { ref: E }))
              : f.createElement(
                  void 0 === w ? 'div' : w,
                  V({}, C, { className: p, ref: E }),
                  d,
                ),
          );
        });
      ((Q.defaultProps = { enabled: !0, removeScrollBar: !0, inert: !1 }),
        (Q.classNames = { fullWidth: q, zeroRight: W }));
      var ee = function (e) {
        var t = e.sideCar,
          n = H(e, ['sideCar']);
        if (!t)
          throw Error(
            'Sidecar: please provide `sideCar` property to import the right car',
          );
        var r = t.read();
        if (!r) throw Error('Sidecar medium not found');
        return f.createElement(r, V({}, n));
      };
      ee.isSideCarExport = !0;
      var et = function () {
          var e = 0,
            t = null;
          return {
            add: function (r) {
              if (
                0 == e &&
                (t = (function () {
                  if (!document) return null;
                  var e = document.createElement('style');
                  e.type = 'text/css';
                  var t = d || n.nc;
                  return (t && e.setAttribute('nonce', t), e);
                })())
              ) {
                var i, a;
                ((i = t).styleSheet
                  ? (i.styleSheet.cssText = r)
                  : i.appendChild(document.createTextNode(r)),
                  (a = t),
                  (document.head || document.getElementsByTagName('head')[0]).appendChild(
                    a,
                  ));
              }
              e++;
            },
            remove: function () {
              --e || !t || (t.parentNode && t.parentNode.removeChild(t), (t = null));
            },
          };
        },
        en = function () {
          var e = et();
          return function (t, n) {
            f.useEffect(
              function () {
                return (
                  e.add(t),
                  function () {
                    e.remove();
                  }
                );
              },
              [t && n],
            );
          };
        },
        er = function () {
          var e = en();
          return function (t) {
            return (e(t.styles, t.dynamic), null);
          };
        },
        ei = { left: 0, top: 0, right: 0, gap: 0 },
        ea = function (e) {
          return parseInt(e || '', 10) || 0;
        },
        eo = function (e) {
          var t = window.getComputedStyle(document.body),
            n = t['padding' === e ? 'paddingLeft' : 'marginLeft'],
            r = t['padding' === e ? 'paddingTop' : 'marginTop'],
            i = t['padding' === e ? 'paddingRight' : 'marginRight'];
          return [ea(n), ea(r), ea(i)];
        },
        el = function (e) {
          if ((void 0 === e && (e = 'margin'), 'undefined' == typeof window)) return ei;
          var t = eo(e),
            n = document.documentElement.clientWidth,
            r = window.innerWidth;
          return {
            left: t[0],
            top: t[1],
            right: t[2],
            gap: Math.max(0, r - n + t[2] - t[0]),
          };
        },
        es = er(),
        eu = 'data-scroll-locked',
        ec = function (e, t, n, r) {
          var i = e.left,
            a = e.top,
            o = e.right,
            l = e.gap;
          return (
            void 0 === n && (n = 'margin'),
            '\n  .'
              .concat('with-scroll-bars-hidden', ' {\n   overflow: hidden ')
              .concat(r, ';\n   padding-right: ')
              .concat(l, 'px ')
              .concat(r, ';\n  }\n  body[')
              .concat(eu, '] {\n    overflow: hidden ')
              .concat(r, ';\n    overscroll-behavior: contain;\n    ')
              .concat(
                [
                  t && 'position: relative '.concat(r, ';'),
                  'margin' === n &&
                    '\n    padding-left: '
                      .concat(i, 'px;\n    padding-top: ')
                      .concat(a, 'px;\n    padding-right: ')
                      .concat(
                        o,
                        'px;\n    margin-left:0;\n    margin-top:0;\n    margin-right: ',
                      )
                      .concat(l, 'px ')
                      .concat(r, ';\n    '),
                  'padding' === n && 'padding-right: '.concat(l, 'px ').concat(r, ';'),
                ]
                  .filter(Boolean)
                  .join(''),
                '\n  }\n  \n  .',
              )
              .concat(W, ' {\n    right: ')
              .concat(l, 'px ')
              .concat(r, ';\n  }\n  \n  .')
              .concat(q, ' {\n    margin-right: ')
              .concat(l, 'px ')
              .concat(r, ';\n  }\n  \n  .')
              .concat(W, ' .')
              .concat(W, ' {\n    right: 0 ')
              .concat(r, ';\n  }\n  \n  .')
              .concat(q, ' .')
              .concat(q, ' {\n    margin-right: 0 ')
              .concat(r, ';\n  }\n  \n  body[')
              .concat(eu, '] {\n    ')
              .concat('--removed-body-scroll-bar-size', ': ')
              .concat(l, 'px;\n  }\n')
          );
        },
        ed = function () {
          var e = parseInt(document.body.getAttribute(eu) || '0', 10);
          return isFinite(e) ? e : 0;
        },
        ef = function () {
          f.useEffect(function () {
            return (
              document.body.setAttribute(eu, (ed() + 1).toString()),
              function () {
                var e = ed() - 1;
                e <= 0
                  ? document.body.removeAttribute(eu)
                  : document.body.setAttribute(eu, e.toString());
              }
            );
          }, []);
        },
        ep = function (e) {
          var t = e.noRelative,
            n = e.noImportant,
            r = e.gapMode,
            i = void 0 === r ? 'margin' : r;
          ef();
          var a = f.useMemo(
            function () {
              return el(i);
            },
            [i],
          );
          return f.createElement(es, { styles: ec(a, !t, i, n ? '' : '!important') });
        },
        eh = !1;
      if ('undefined' != typeof window)
        try {
          var em = Object.defineProperty({}, 'passive', {
            get: function () {
              return ((eh = !0), !0);
            },
          });
          (window.addEventListener('test', em, em),
            window.removeEventListener('test', em, em));
        } catch (e) {
          eh = !1;
        }
      var eg = !!eh && { passive: !1 },
        ey = function (e, t) {
          if (!(e instanceof Element)) return !1;
          var n = window.getComputedStyle(e);
          return (
            'hidden' !== n[t] &&
            (n.overflowY !== n.overflowX ||
              'TEXTAREA' === e.tagName ||
              'visible' !== n[t])
          );
        },
        ev = function (e, t) {
          var n = t.ownerDocument,
            r = t;
          do {
            if (
              ('undefined' != typeof ShadowRoot &&
                r instanceof ShadowRoot &&
                (r = r.host),
              ex(e, r))
            ) {
              var i = eb(e, r);
              if (i[1] > i[2]) return !0;
            }
            r = r.parentNode;
          } while (r && r !== n.body);
          return !1;
        },
        ex = function (e, t) {
          return 'v' === e ? ey(t, 'overflowY') : ey(t, 'overflowX');
        },
        eb = function (e, t) {
          return 'v' === e
            ? [t.scrollTop, t.scrollHeight, t.clientHeight]
            : [t.scrollLeft, t.scrollWidth, t.clientWidth];
        },
        ek = function (e, t, n, r, i) {
          var a,
            o =
              ((a = window.getComputedStyle(t).direction),
              'h' === e && 'rtl' === a ? -1 : 1),
            l = o * r,
            s = n.target,
            u = t.contains(s),
            c = !1,
            d = l > 0,
            f = 0,
            p = 0;
          do {
            if (!s) break;
            var h = eb(e, s),
              m = h[0],
              g = h[1] - h[2] - o * m;
            (m || g) && ex(e, s) && ((f += g), (p += m));
            var y = s.parentNode;
            s = y && y.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? y.host : y;
          } while ((!u && s !== document.body) || (u && (t.contains(s) || t === s)));
          return (
            d && ((i && 1 > Math.abs(f)) || (!i && l > f))
              ? (c = !0)
              : !d && ((i && 1 > Math.abs(p)) || (!i && -l > p)) && (c = !0),
            c
          );
        },
        ew = function (e) {
          return 'changedTouches' in e
            ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY]
            : [0, 0];
        },
        e_ = function (e) {
          return [e.deltaX, e.deltaY];
        },
        eS = function (e) {
          return e && 'current' in e ? e.current : e;
        },
        eE = 0,
        eC = [];
      let eT =
        ((u = function (e) {
          var t = f.useRef([]),
            n = f.useRef([0, 0]),
            r = f.useRef(),
            i = f.useState(eE++)[0],
            a = f.useState(er)[0],
            o = f.useRef(e);
          (f.useEffect(
            function () {
              o.current = e;
            },
            [e],
          ),
            f.useEffect(
              function () {
                if (e.inert) {
                  document.body.classList.add('block-interactivity-'.concat(i));
                  var t = (function (e, t, n) {
                    if (n || 2 == arguments.length)
                      for (var r, i = 0, a = t.length; i < a; i++)
                        (!r && i in t) ||
                          (r || (r = Array.prototype.slice.call(t, 0, i)), (r[i] = t[i]));
                    return e.concat(r || Array.prototype.slice.call(t));
                  })([e.lockRef.current], (e.shards || []).map(eS), !0).filter(Boolean);
                  return (
                    t.forEach(function (e) {
                      return e.classList.add('allow-interactivity-'.concat(i));
                    }),
                    function () {
                      (document.body.classList.remove('block-interactivity-'.concat(i)),
                        t.forEach(function (e) {
                          return e.classList.remove('allow-interactivity-'.concat(i));
                        }));
                    }
                  );
                }
              },
              [e.inert, e.lockRef.current, e.shards],
            ));
          var l = f.useCallback(function (e, t) {
              if (
                ('touches' in e && 2 === e.touches.length) ||
                ('wheel' === e.type && e.ctrlKey)
              )
                return !o.current.allowPinchZoom;
              var i,
                a = ew(e),
                l = n.current,
                s = 'deltaX' in e ? e.deltaX : l[0] - a[0],
                u = 'deltaY' in e ? e.deltaY : l[1] - a[1],
                c = e.target,
                d = Math.abs(s) > Math.abs(u) ? 'h' : 'v';
              if ('touches' in e && 'h' === d && 'range' === c.type) return !1;
              var f = ev(d, c);
              if (!f) return !0;
              if ((f ? (i = d) : ((i = 'v' === d ? 'h' : 'v'), (f = ev(d, c))), !f))
                return !1;
              if (
                (!r.current && 'changedTouches' in e && (s || u) && (r.current = i), !i)
              )
                return !0;
              var p = r.current || i;
              return ek(p, t, e, 'h' === p ? s : u, !0);
            }, []),
            s = f.useCallback(function (e) {
              if (eC.length && eC[eC.length - 1] === a) {
                var n = 'deltaY' in e ? e_(e) : ew(e),
                  r = t.current.filter(function (t) {
                    var r;
                    return (
                      t.name === e.type &&
                      (t.target === e.target || e.target === t.shadowParent) &&
                      ((r = t.delta), r[0] === n[0] && r[1] === n[1])
                    );
                  })[0];
                if (r && r.should) {
                  e.cancelable && e.preventDefault();
                  return;
                }
                if (!r) {
                  var i = (o.current.shards || [])
                    .map(eS)
                    .filter(Boolean)
                    .filter(function (t) {
                      return t.contains(e.target);
                    });
                  (i.length > 0 ? l(e, i[0]) : !o.current.noIsolation) &&
                    e.cancelable &&
                    e.preventDefault();
                }
              }
            }, []),
            u = f.useCallback(function (e, n, r, i) {
              var a = {
                name: e,
                delta: n,
                target: r,
                should: i,
                shadowParent: (function (e) {
                  for (var t = null; null !== e; )
                    (e instanceof ShadowRoot && ((t = e.host), (e = e.host)),
                      (e = e.parentNode));
                  return t;
                })(r),
              };
              (t.current.push(a),
                setTimeout(function () {
                  t.current = t.current.filter(function (e) {
                    return e !== a;
                  });
                }, 1));
            }, []),
            c = f.useCallback(function (e) {
              ((n.current = ew(e)), (r.current = void 0));
            }, []),
            d = f.useCallback(function (t) {
              u(t.type, e_(t), t.target, l(t, e.lockRef.current));
            }, []),
            p = f.useCallback(function (t) {
              u(t.type, ew(t), t.target, l(t, e.lockRef.current));
            }, []);
          f.useEffect(function () {
            return (
              eC.push(a),
              e.setCallbacks({
                onScrollCapture: d,
                onWheelCapture: d,
                onTouchMoveCapture: p,
              }),
              document.addEventListener('wheel', s, eg),
              document.addEventListener('touchmove', s, eg),
              document.addEventListener('touchstart', c, eg),
              function () {
                ((eC = eC.filter(function (e) {
                  return e !== a;
                })),
                  document.removeEventListener('wheel', s, eg),
                  document.removeEventListener('touchmove', s, eg),
                  document.removeEventListener('touchstart', c, eg));
              }
            );
          }, []);
          var h = e.removeScrollBar,
            m = e.inert;
          return f.createElement(
            f.Fragment,
            null,
            m
              ? f.createElement(a, {
                  styles: '\n  .block-interactivity-'
                    .concat(i, ' {pointer-events: none;}\n  .allow-interactivity-')
                    .concat(i, ' {pointer-events: all;}\n'),
                })
              : null,
            h
              ? f.createElement(ep, { noRelative: e.noRelative, gapMode: e.gapMode })
              : null,
          );
        }),
        G.useMedium(u),
        ee);
      var eA = f.forwardRef(function (e, t) {
        return f.createElement(Q, V({}, e, { ref: t, sideCar: eT }));
      });
      eA.classNames = Q.classNames;
      var eP = new WeakMap(),
        eO = new WeakMap(),
        eN = {},
        eR = 0,
        eI = function (e) {
          return e && (e.host || eI(e.parentNode));
        },
        eL = function (e, t, n, r) {
          var i = (Array.isArray(e) ? e : [e])
            .map(function (e) {
              if (t.contains(e)) return e;
              var n = eI(e);
              return n && t.contains(n)
                ? n
                : (console.error(
                    'aria-hidden',
                    e,
                    'in not contained inside',
                    t,
                    '. Doing nothing',
                  ),
                  null);
            })
            .filter(function (e) {
              return !!e;
            });
          eN[n] || (eN[n] = new WeakMap());
          var a = eN[n],
            o = [],
            l = new Set(),
            s = new Set(i),
            u = function (e) {
              !e || l.has(e) || (l.add(e), u(e.parentNode));
            };
          i.forEach(u);
          var c = function (e) {
            !e ||
              s.has(e) ||
              Array.prototype.forEach.call(e.children, function (e) {
                if (l.has(e)) c(e);
                else
                  try {
                    var t = e.getAttribute(r),
                      i = null !== t && 'false' !== t,
                      s = (eP.get(e) || 0) + 1,
                      u = (a.get(e) || 0) + 1;
                    (eP.set(e, s),
                      a.set(e, u),
                      o.push(e),
                      1 === s && i && eO.set(e, !0),
                      1 === u && e.setAttribute(n, 'true'),
                      i || e.setAttribute(r, 'true'));
                  } catch (t) {
                    console.error('aria-hidden: cannot operate on ', e, t);
                  }
              });
          };
          return (
            c(t),
            l.clear(),
            eR++,
            function () {
              (o.forEach(function (e) {
                var t = eP.get(e) - 1,
                  i = a.get(e) - 1;
                (eP.set(e, t),
                  a.set(e, i),
                  t || (eO.has(e) || e.removeAttribute(r), eO.delete(e)),
                  i || e.removeAttribute(n));
              }),
                --eR ||
                  ((eP = new WeakMap()),
                  (eP = new WeakMap()),
                  (eO = new WeakMap()),
                  (eN = {})));
            }
          );
        },
        eD = function (e, t, n) {
          void 0 === n && (n = 'data-aria-hidden');
          var r = Array.from(Array.isArray(e) ? e : [e]),
            i =
              t ||
              ('undefined' == typeof document
                ? null
                : (Array.isArray(e) ? e[0] : e).ownerDocument.body);
          return i
            ? (r.push.apply(r, Array.from(i.querySelectorAll('[aria-live], script'))),
              eL(r, i, n, 'aria-hidden'))
            : function () {
                return null;
              };
        },
        eM = n(5648),
        ej = 'Dialog',
        [ez, eF] = (0, g.A)(ej),
        [eZ, eU] = ez(ej),
        eB = (e) => {
          let {
              __scopeDialog: t,
              children: n,
              open: r,
              defaultOpen: i,
              onOpenChange: a,
              modal: o = !0,
            } = e,
            l = f.useRef(null),
            s = f.useRef(null),
            [u, c] = (function ({
              prop: e,
              defaultProp: t,
              onChange: n = () => {},
              caller: r,
            }) {
              let [i, a, o] = (function ({ defaultProp: e, onChange: t }) {
                  let [n, r] = f.useState(e),
                    i = f.useRef(n),
                    a = f.useRef(t);
                  return (
                    k(() => {
                      a.current = t;
                    }, [t]),
                    f.useEffect(() => {
                      i.current !== n && (a.current?.(n), (i.current = n));
                    }, [n, i]),
                    [n, r, a]
                  );
                })({ defaultProp: t, onChange: n }),
                l = void 0 !== e,
                s = l ? e : i;
              {
                let t = f.useRef(void 0 !== e);
                f.useEffect(() => {
                  let e = t.current;
                  if (e !== l) {
                    let t = l ? 'controlled' : 'uncontrolled';
                    console.warn(
                      `${r} is changing from ${e ? 'controlled' : 'uncontrolled'} to ${t}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`,
                    );
                  }
                  t.current = l;
                }, [l, r]);
              }
              return [
                s,
                f.useCallback(
                  (t) => {
                    if (l) {
                      let n = 'function' == typeof t ? t(e) : t;
                      n !== e && o.current?.(n);
                    } else a(t);
                  },
                  [l, e, a, o],
                ),
              ];
            })({ prop: r, defaultProp: i ?? !1, onChange: a, caller: ej });
          return (0, S.jsx)(eZ, {
            scope: t,
            triggerRef: l,
            contentRef: s,
            contentId: b(),
            titleId: b(),
            descriptionId: b(),
            open: u,
            onOpenChange: c,
            onOpenToggle: f.useCallback(() => c((e) => !e), [c]),
            modal: o,
            children: n,
          });
        };
      eB.displayName = ej;
      var e$ = 'DialogTrigger',
        eV = f.forwardRef((e, t) => {
          let { __scopeDialog: n, ...r } = e,
            i = eU(e$, n),
            a = (0, m.s)(t, i.triggerRef);
          return (0, S.jsx)(w.sG.button, {
            type: 'button',
            'aria-haspopup': 'dialog',
            'aria-expanded': i.open,
            'aria-controls': i.contentId,
            'data-state': te(i.open),
            ...r,
            ref: a,
            onClick: (0, h.mK)(e.onClick, i.onOpenToggle),
          });
        });
      eV.displayName = e$;
      var eH = 'DialogPortal',
        [eW, eq] = ez(eH, { forceMount: void 0 }),
        eK = (e) => {
          let { __scopeDialog: t, forceMount: n, children: r, container: i } = e,
            a = eU(eH, t);
          return (0, S.jsx)(eW, {
            scope: t,
            forceMount: n,
            children: f.Children.map(r, (e) =>
              (0, S.jsx)(U.C, {
                present: n || a.open,
                children: (0, S.jsx)(Z, { asChild: !0, container: i, children: e }),
              }),
            ),
          });
        };
      eK.displayName = eH;
      var eY = 'DialogOverlay',
        eX = f.forwardRef((e, t) => {
          let n = eq(eY, e.__scopeDialog),
            { forceMount: r = n.forceMount, ...i } = e,
            a = eU(eY, e.__scopeDialog);
          return a.modal
            ? (0, S.jsx)(U.C, {
                present: r || a.open,
                children: (0, S.jsx)(eJ, { ...i, ref: t }),
              })
            : null;
        });
      eX.displayName = eY;
      var eG = (0, eM.TL)('DialogOverlay.RemoveScroll'),
        eJ = f.forwardRef((e, t) => {
          let { __scopeDialog: n, ...r } = e,
            i = eU(eY, n);
          return (0, S.jsx)(eA, {
            as: eG,
            allowPinchZoom: !0,
            shards: [i.contentRef],
            children: (0, S.jsx)(w.sG.div, {
              'data-state': te(i.open),
              ...r,
              ref: t,
              style: { pointerEvents: 'auto', ...r.style },
            }),
          });
        }),
        eQ = 'DialogContent',
        e0 = f.forwardRef((e, t) => {
          let n = eq(eQ, e.__scopeDialog),
            { forceMount: r = n.forceMount, ...i } = e,
            a = eU(eQ, e.__scopeDialog);
          return (0, S.jsx)(U.C, {
            present: r || a.open,
            children: a.modal
              ? (0, S.jsx)(e1, { ...i, ref: t })
              : (0, S.jsx)(e2, { ...i, ref: t }),
          });
        });
      e0.displayName = eQ;
      var e1 = f.forwardRef((e, t) => {
          let n = eU(eQ, e.__scopeDialog),
            r = f.useRef(null),
            i = (0, m.s)(t, n.contentRef, r);
          return (
            f.useEffect(() => {
              let e = r.current;
              if (e) return eD(e);
            }, []),
            (0, S.jsx)(e4, {
              ...e,
              ref: i,
              trapFocus: n.open,
              disableOutsidePointerEvents: !0,
              onCloseAutoFocus: (0, h.mK)(e.onCloseAutoFocus, (e) => {
                (e.preventDefault(), n.triggerRef.current?.focus());
              }),
              onPointerDownOutside: (0, h.mK)(e.onPointerDownOutside, (e) => {
                let t = e.detail.originalEvent,
                  n = 0 === t.button && !0 === t.ctrlKey;
                (2 === t.button || n) && e.preventDefault();
              }),
              onFocusOutside: (0, h.mK)(e.onFocusOutside, (e) => e.preventDefault()),
            })
          );
        }),
        e2 = f.forwardRef((e, t) => {
          let n = eU(eQ, e.__scopeDialog),
            r = f.useRef(!1),
            i = f.useRef(!1);
          return (0, S.jsx)(e4, {
            ...e,
            ref: t,
            trapFocus: !1,
            disableOutsidePointerEvents: !1,
            onCloseAutoFocus: (t) => {
              (e.onCloseAutoFocus?.(t),
                t.defaultPrevented ||
                  (r.current || n.triggerRef.current?.focus(), t.preventDefault()),
                (r.current = !1),
                (i.current = !1));
            },
            onInteractOutside: (t) => {
              (e.onInteractOutside?.(t),
                t.defaultPrevented ||
                  ((r.current = !0),
                  'pointerdown' === t.detail.originalEvent.type && (i.current = !0)));
              let a = t.target;
              (n.triggerRef.current?.contains(a) && t.preventDefault(),
                'focusin' === t.detail.originalEvent.type &&
                  i.current &&
                  t.preventDefault());
            },
          });
        }),
        e4 = f.forwardRef((e, t) => {
          let {
              __scopeDialog: n,
              trapFocus: r,
              onOpenAutoFocus: i,
              onCloseAutoFocus: a,
              ...o
            } = e,
            l = eU(eQ, n),
            s = f.useRef(null),
            u = (0, m.s)(t, s);
          return (
            f.useEffect(() => {
              let e = document.querySelectorAll('[data-radix-focus-guard]');
              return (
                document.body.insertAdjacentElement('afterbegin', e[0] ?? $()),
                document.body.insertAdjacentElement('beforeend', e[1] ?? $()),
                B++,
                () => {
                  (1 === B &&
                    document
                      .querySelectorAll('[data-radix-focus-guard]')
                      .forEach((e) => e.remove()),
                    B--);
                }
              );
            }, []),
            (0, S.jsxs)(S.Fragment, {
              children: [
                (0, S.jsx)(I, {
                  asChild: !0,
                  loop: !0,
                  trapped: r,
                  onMountAutoFocus: i,
                  onUnmountAutoFocus: a,
                  children: (0, S.jsx)(T, {
                    role: 'dialog',
                    id: l.contentId,
                    'aria-describedby': l.descriptionId,
                    'aria-labelledby': l.titleId,
                    'data-state': te(l.open),
                    ...o,
                    ref: u,
                    onDismiss: () => l.onOpenChange(!1),
                  }),
                }),
                (0, S.jsxs)(S.Fragment, {
                  children: [
                    (0, S.jsx)(ti, { titleId: l.titleId }),
                    (0, S.jsx)(ta, { contentRef: s, descriptionId: l.descriptionId }),
                  ],
                }),
              ],
            })
          );
        }),
        e9 = 'DialogTitle',
        e3 = f.forwardRef((e, t) => {
          let { __scopeDialog: n, ...r } = e,
            i = eU(e9, n);
          return (0, S.jsx)(w.sG.h2, { id: i.titleId, ...r, ref: t });
        });
      e3.displayName = e9;
      var e5 = 'DialogDescription',
        e6 = f.forwardRef((e, t) => {
          let { __scopeDialog: n, ...r } = e,
            i = eU(e5, n);
          return (0, S.jsx)(w.sG.p, { id: i.descriptionId, ...r, ref: t });
        });
      e6.displayName = e5;
      var e8 = 'DialogClose',
        e7 = f.forwardRef((e, t) => {
          let { __scopeDialog: n, ...r } = e,
            i = eU(e8, n);
          return (0, S.jsx)(w.sG.button, {
            type: 'button',
            ...r,
            ref: t,
            onClick: (0, h.mK)(e.onClick, () => i.onOpenChange(!1)),
          });
        });
      function te(e) {
        return e ? 'open' : 'closed';
      }
      e7.displayName = e8;
      var tt = 'DialogTitleWarning',
        [tn, tr] = (0, g.q)(tt, { contentName: eQ, titleName: e9, docsSlug: 'dialog' }),
        ti = ({ titleId: e }) => {
          let t = tr(tt),
            n = `\`${t.contentName}\` requires a \`${t.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${t.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${t.docsSlug}`;
          return (
            f.useEffect(() => {
              e && (document.getElementById(e) || console.error(n));
            }, [n, e]),
            null
          );
        },
        ta = ({ contentRef: e, descriptionId: t }) => {
          let n = tr('DialogDescriptionWarning'),
            r = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${n.contentName}}.`;
          return (
            f.useEffect(() => {
              let n = e.current?.getAttribute('aria-describedby');
              t && n && (document.getElementById(t) || console.warn(r));
            }, [r, e, t]),
            null
          );
        },
        to = eB,
        tl = eV,
        ts = eK,
        tu = eX,
        tc = e0,
        td = e3,
        tf = e6,
        tp = e7;
    },
    2527: (e, t, n) => {
      n.d(t, { A: () => r });
      let r = (0, n(4552).A)('moon', [
        [
          'path',
          {
            d: 'M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401',
            key: 'kfwtm',
          },
        ],
      ]);
    },
    3447: function (e, t, n) {
      var r = (
          (this && this.__importDefault) ||
          function (e) {
            return e && e.__esModule ? e : { default: e };
          }
        )(n(7327)),
        i = n(4763);
      function a(e, t) {
        var n = {};
        return (
          e &&
            'string' == typeof e &&
            (0, r.default)(e, function (e, r) {
              e && r && (n[(0, i.camelCase)(e, t)] = r);
            }),
          n
        );
      }
      ((a.default = a), (e.exports = a));
    },
    3707: (e, t, n) => {
      n.d(t, { A: () => r });
      let r = (0, n(4552).A)('settings', [
        [
          'path',
          {
            d: 'M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915',
            key: '1i5ecw',
          },
        ],
        ['circle', { cx: '12', cy: '12', r: '3', key: '1v7zrd' }],
      ]);
    },
    3760: (e, t, n) => {
      n.d(t, { A: () => r });
      let r = (0, n(4552).A)('loader-circle', [
        ['path', { d: 'M21 12a9 9 0 1 1-6.219-8.56', key: '13zald' }],
      ]);
    },
    4176: (e, t, n) => {
      n.d(t, { A: () => r });
      let r = (0, n(4552).A)('chevron-down', [
        ['path', { d: 'm6 9 6 6 6-6', key: 'qrunsl' }],
      ]);
    },
    4213: (e) => {
      var t = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//g,
        n = /\n/g,
        r = /^\s*/,
        i = /^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/,
        a = /^:\s*/,
        o = /^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/,
        l = /^[;\s]*/,
        s = /^\s+|\s+$/g;
      function u(e) {
        return e ? e.replace(s, '') : '';
      }
      e.exports = function (e, s) {
        if ('string' != typeof e) throw TypeError('First argument must be a string');
        if (!e) return [];
        s = s || {};
        var c = 1,
          d = 1;
        function f(e) {
          var t = e.match(n);
          t && (c += t.length);
          var r = e.lastIndexOf('\n');
          d = ~r ? e.length - r : d + e.length;
        }
        function p() {
          var e = { line: c, column: d };
          return function (t) {
            return ((t.position = new h(e)), g(r), t);
          };
        }
        function h(e) {
          ((this.start = e),
            (this.end = { line: c, column: d }),
            (this.source = s.source));
        }
        function m(t) {
          var n = Error(s.source + ':' + c + ':' + d + ': ' + t);
          if (
            ((n.reason = t),
            (n.filename = s.source),
            (n.line = c),
            (n.column = d),
            (n.source = e),
            s.silent)
          );
          else throw n;
        }
        function g(t) {
          var n = t.exec(e);
          if (n) {
            var r = n[0];
            return (f(r), (e = e.slice(r.length)), n);
          }
        }
        function y(e) {
          var t;
          for (e = e || []; (t = v()); ) !1 !== t && e.push(t);
          return e;
        }
        function v() {
          var t = p();
          if ('/' == e.charAt(0) && '*' == e.charAt(1)) {
            for (
              var n = 2;
              '' != e.charAt(n) && ('*' != e.charAt(n) || '/' != e.charAt(n + 1));

            )
              ++n;
            if (((n += 2), '' === e.charAt(n - 1))) return m('End of comment missing');
            var r = e.slice(2, n - 2);
            return (
              (d += 2),
              f(r),
              (e = e.slice(n)),
              (d += 2),
              t({ type: 'comment', comment: r })
            );
          }
        }
        ((h.prototype.content = e), g(r));
        var x,
          b = [];
        for (
          y(b);
          (x = (function () {
            var e = p(),
              n = g(i);
            if (n) {
              if ((v(), !g(a))) return m("property missing ':'");
              var r = g(o),
                s = e({
                  type: 'declaration',
                  property: u(n[0].replace(t, '')),
                  value: r ? u(r[0].replace(t, '')) : '',
                });
              return (g(l), s);
            }
          })());

        )
          !1 !== x && (b.push(x), y(b));
        return b;
      };
    },
    4226: (e, t, n) => {
      n.d(t, { A: () => o, q: () => a });
      var r = n(5541),
        i = n(4929);
      function a(e, t) {
        let n = r.createContext(t),
          a = (e) => {
            let { children: t, ...a } = e,
              o = r.useMemo(() => a, Object.values(a));
            return (0, i.jsx)(n.Provider, { value: o, children: t });
          };
        return (
          (a.displayName = e + 'Provider'),
          [
            a,
            function (i) {
              let a = r.useContext(n);
              if (a) return a;
              if (void 0 !== t) return t;
              throw Error(`\`${i}\` must be used within \`${e}\``);
            },
          ]
        );
      }
      function o(e, t = []) {
        let n = [],
          a = () => {
            let t = n.map((e) => r.createContext(e));
            return function (n) {
              let i = n?.[e] || t;
              return r.useMemo(() => ({ [`__scope${e}`]: { ...n, [e]: i } }), [n, i]);
            };
          };
        return (
          (a.scopeName = e),
          [
            function (t, a) {
              let o = r.createContext(a),
                l = n.length;
              n = [...n, a];
              let s = (t) => {
                let { scope: n, children: a, ...s } = t,
                  u = n?.[e]?.[l] || o,
                  c = r.useMemo(() => s, Object.values(s));
                return (0, i.jsx)(u.Provider, { value: c, children: a });
              };
              return (
                (s.displayName = t + 'Provider'),
                [
                  s,
                  function (n, i) {
                    let s = i?.[e]?.[l] || o,
                      u = r.useContext(s);
                    if (u) return u;
                    if (void 0 !== a) return a;
                    throw Error(`\`${n}\` must be used within \`${t}\``);
                  },
                ]
              );
            },
            (function (...e) {
              let t = e[0];
              if (1 === e.length) return t;
              let n = () => {
                let n = e.map((e) => ({ useScope: e(), scopeName: e.scopeName }));
                return function (e) {
                  let i = n.reduce((t, { useScope: n, scopeName: r }) => {
                    let i = n(e)[`__scope${r}`];
                    return { ...t, ...i };
                  }, {});
                  return r.useMemo(() => ({ [`__scope${t.scopeName}`]: i }), [i]);
                };
              };
              return ((n.scopeName = t.scopeName), n);
            })(a, ...t),
          ]
        );
      }
    },
    4552: (e, t, n) => {
      n.d(t, { A: () => s });
      var r = n(5541);
      let i = (e) => {
          let t = e.replace(/^([A-Z])|[\s-_]+(\w)/g, (e, t, n) =>
            n ? n.toUpperCase() : t.toLowerCase(),
          );
          return t.charAt(0).toUpperCase() + t.slice(1);
        },
        a = (...e) =>
          e
            .filter((e, t, n) => !!e && '' !== e.trim() && n.indexOf(e) === t)
            .join(' ')
            .trim();
      var o = {
        xmlns: 'http://www.w3.org/2000/svg',
        width: 24,
        height: 24,
        viewBox: '0 0 24 24',
        fill: 'none',
        stroke: 'currentColor',
        strokeWidth: 2,
        strokeLinecap: 'round',
        strokeLinejoin: 'round',
      };
      let l = (0, r.forwardRef)(
          (
            {
              color: e = 'currentColor',
              size: t = 24,
              strokeWidth: n = 2,
              absoluteStrokeWidth: i,
              className: l = '',
              children: s,
              iconNode: u,
              ...c
            },
            d,
          ) =>
            (0, r.createElement)(
              'svg',
              {
                ref: d,
                ...o,
                width: t,
                height: t,
                stroke: e,
                strokeWidth: i ? (24 * Number(n)) / Number(t) : n,
                className: a('lucide', l),
                ...(!s &&
                  !((e) => {
                    for (let t in e)
                      if (t.startsWith('aria-') || 'role' === t || 'title' === t)
                        return !0;
                  })(c) && { 'aria-hidden': 'true' }),
                ...c,
              },
              [
                ...u.map(([e, t]) => (0, r.createElement)(e, t)),
                ...(Array.isArray(s) ? s : [s]),
              ],
            ),
        ),
        s = (e, t) => {
          let n = (0, r.forwardRef)(({ className: n, ...o }, s) =>
            (0, r.createElement)(l, {
              ref: s,
              iconNode: t,
              className: a(
                `lucide-${i(e)
                  .replace(/([a-z0-9])([A-Z])/g, '$1-$2')
                  .toLowerCase()}`,
                `lucide-${e}`,
                n,
              ),
              ...o,
            }),
          );
          return ((n.displayName = i(e)), n);
        };
    },
    4684: (e, t, n) => {
      n.d(t, { b: () => g });
      var r = n(5541),
        i = n.t(r, 2);
      n(9832);
      var a = n(5528),
        o = n(4929),
        l = Symbol.for('react.lazy'),
        s = i[' use '.trim().toString()];
      function u(e) {
        var t;
        return (
          null != e &&
          'object' == typeof e &&
          '$$typeof' in e &&
          e.$$typeof === l &&
          '_payload' in e &&
          'object' == typeof (t = e._payload) &&
          null !== t &&
          'then' in t
        );
      }
      var c = Symbol('radix.slottable');
      function d(e) {
        return (
          r.isValidElement(e) &&
          'function' == typeof e.type &&
          '__radixId' in e.type &&
          e.type.__radixId === c
        );
      }
      var f = [
          'a',
          'button',
          'div',
          'form',
          'h2',
          'h3',
          'img',
          'input',
          'label',
          'li',
          'nav',
          'ol',
          'p',
          'select',
          'span',
          'svg',
          'ul',
        ].reduce((e, t) => {
          var n, i;
          let l,
            c,
            f,
            p =
              ((i = n = `Primitive.${t}`),
              ((l = r.forwardRef((e, t) => {
                let { children: n, ...i } = e;
                if (
                  (u(n) && 'function' == typeof s && (n = s(n._payload)),
                  r.isValidElement(n))
                ) {
                  var o;
                  let e,
                    l,
                    s =
                      ((o = n),
                      (l =
                        (e = Object.getOwnPropertyDescriptor(o.props, 'ref')?.get) &&
                        'isReactWarning' in e &&
                        e.isReactWarning)
                        ? o.ref
                        : (l =
                              (e = Object.getOwnPropertyDescriptor(o, 'ref')?.get) &&
                              'isReactWarning' in e &&
                              e.isReactWarning)
                          ? o.props.ref
                          : o.props.ref || o.ref),
                    u = (function (e, t) {
                      let n = { ...t };
                      for (let r in t) {
                        let i = e[r],
                          a = t[r];
                        /^on[A-Z]/.test(r)
                          ? i && a
                            ? (n[r] = (...e) => {
                                let t = a(...e);
                                return (i(...e), t);
                              })
                            : i && (n[r] = i)
                          : 'style' === r
                            ? (n[r] = { ...i, ...a })
                            : 'className' === r &&
                              (n[r] = [i, a].filter(Boolean).join(' '));
                      }
                      return { ...e, ...n };
                    })(i, n.props);
                  return (
                    n.type !== r.Fragment && (u.ref = t ? (0, a.t)(t, s) : s),
                    r.cloneElement(n, u)
                  );
                }
                return r.Children.count(n) > 1 ? r.Children.only(null) : null;
              })).displayName = `${i}.SlotClone`),
              (c = l),
              ((f = r.forwardRef((e, t) => {
                let { children: n, ...i } = e;
                u(n) && 'function' == typeof s && (n = s(n._payload));
                let a = r.Children.toArray(n),
                  l = a.find(d);
                if (l) {
                  let e = l.props.children,
                    n = a.map((t) =>
                      t !== l
                        ? t
                        : r.Children.count(e) > 1
                          ? r.Children.only(null)
                          : r.isValidElement(e)
                            ? e.props.children
                            : null,
                    );
                  return (0, o.jsx)(c, {
                    ...i,
                    ref: t,
                    children: r.isValidElement(e) ? r.cloneElement(e, void 0, n) : null,
                  });
                }
                return (0, o.jsx)(c, { ...i, ref: t, children: n });
              })).displayName = `${n}.Slot`),
              f),
            h = r.forwardRef((e, n) => {
              let { asChild: r, ...i } = e;
              return (
                'undefined' != typeof window && (window[Symbol.for('radix-ui')] = !0),
                (0, o.jsx)(r ? p : t, { ...i, ref: n })
              );
            });
          return ((h.displayName = `Primitive.${t}`), { ...e, [t]: h });
        }, {}),
        p = 'horizontal',
        h = ['horizontal', 'vertical'],
        m = r.forwardRef((e, t) => {
          var n;
          let { decorative: r, orientation: i = p, ...a } = e,
            l = ((n = i), h.includes(n)) ? i : p;
          return (0, o.jsx)(f.div, {
            'data-orientation': l,
            ...(r
              ? { role: 'none' }
              : { 'aria-orientation': 'vertical' === l ? l : void 0, role: 'separator' }),
            ...a,
            ref: t,
          });
        });
      m.displayName = 'Separator';
      var g = m;
    },
    4702: (e, t, n) => {
      n.d(t, { A: () => r });
      let r = (0, n(4552).A)('plug', [
        ['path', { d: 'M12 22v-5', key: '1ega77' }],
        ['path', { d: 'M9 8V2', key: '14iosj' }],
        ['path', { d: 'M15 8V2', key: '18g5xt' }],
        ['path', { d: 'M18 8v5a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4V8Z', key: 'osxo6l' }],
      ]);
    },
    4763: (e, t) => {
      (Object.defineProperty(t, '__esModule', { value: !0 }), (t.camelCase = void 0));
      var n = /^--[a-zA-Z0-9_-]+$/,
        r = /-([a-z])/g,
        i = /^[^-]+$/,
        a = /^-(webkit|moz|ms|o|khtml)-/,
        o = /^-(ms)-/,
        l = function (e, t) {
          return t.toUpperCase();
        },
        s = function (e, t) {
          return ''.concat(t, '-');
        };
      t.camelCase = function (e, t) {
        var u;
        return (void 0 === t && (t = {}), !(u = e) || i.test(u) || n.test(u))
          ? e
          : ((e = e.toLowerCase()),
            (e = t.reactCompat ? e.replace(o, s) : e.replace(a, s)).replace(r, l));
      };
    },
    5328: (e, t, n) => {
      var r, i, a, o, l, s, u;
      let c;
      (n.d(t, { YO: () => eR, Ie: () => eP, ai: () => eN, Ik: () => eI, Yj: () => eO }),
        ((l = r || (r = {})).assertEqual = (e) => {}),
        (l.assertIs = function (e) {}),
        (l.assertNever = function (e) {
          throw Error();
        }),
        (l.arrayToEnum = (e) => {
          let t = {};
          for (let n of e) t[n] = n;
          return t;
        }),
        (l.getValidEnumValues = (e) => {
          let t = l.objectKeys(e).filter((t) => 'number' != typeof e[e[t]]),
            n = {};
          for (let r of t) n[r] = e[r];
          return l.objectValues(n);
        }),
        (l.objectValues = (e) =>
          l.objectKeys(e).map(function (t) {
            return e[t];
          })),
        (l.objectKeys =
          'function' == typeof Object.keys
            ? (e) => Object.keys(e)
            : (e) => {
                let t = [];
                for (let n in e) Object.prototype.hasOwnProperty.call(e, n) && t.push(n);
                return t;
              }),
        (l.find = (e, t) => {
          for (let n of e) if (t(n)) return n;
        }),
        (l.isInteger =
          'function' == typeof Number.isInteger
            ? (e) => Number.isInteger(e)
            : (e) => 'number' == typeof e && Number.isFinite(e) && Math.floor(e) === e),
        (l.joinValues = function (e, t = ' | ') {
          return e.map((e) => ('string' == typeof e ? `'${e}'` : e)).join(t);
        }),
        (l.jsonStringifyReplacer = (e, t) => ('bigint' == typeof t ? t.toString() : t)),
        ((i || (i = {})).mergeShapes = (e, t) => ({ ...e, ...t })));
      let d = r.arrayToEnum([
          'string',
          'nan',
          'number',
          'integer',
          'float',
          'boolean',
          'date',
          'bigint',
          'symbol',
          'function',
          'undefined',
          'null',
          'array',
          'object',
          'unknown',
          'promise',
          'void',
          'never',
          'map',
          'set',
        ]),
        f = (e) => {
          switch (typeof e) {
            case 'undefined':
              return d.undefined;
            case 'string':
              return d.string;
            case 'number':
              return Number.isNaN(e) ? d.nan : d.number;
            case 'boolean':
              return d.boolean;
            case 'function':
              return d.function;
            case 'bigint':
              return d.bigint;
            case 'symbol':
              return d.symbol;
            case 'object':
              if (Array.isArray(e)) return d.array;
              if (null === e) return d.null;
              if (
                e.then &&
                'function' == typeof e.then &&
                e.catch &&
                'function' == typeof e.catch
              )
                return d.promise;
              if ('undefined' != typeof Map && e instanceof Map) return d.map;
              if ('undefined' != typeof Set && e instanceof Set) return d.set;
              if ('undefined' != typeof Date && e instanceof Date) return d.date;
              return d.object;
            default:
              return d.unknown;
          }
        },
        p = r.arrayToEnum([
          'invalid_type',
          'invalid_literal',
          'custom',
          'invalid_union',
          'invalid_union_discriminator',
          'invalid_enum_value',
          'unrecognized_keys',
          'invalid_arguments',
          'invalid_return_type',
          'invalid_date',
          'invalid_string',
          'too_small',
          'too_big',
          'invalid_intersection_types',
          'not_multiple_of',
          'not_finite',
        ]);
      class h extends Error {
        get errors() {
          return this.issues;
        }
        constructor(e) {
          (super(),
            (this.issues = []),
            (this.addIssue = (e) => {
              this.issues = [...this.issues, e];
            }),
            (this.addIssues = (e = []) => {
              this.issues = [...this.issues, ...e];
            }));
          const t = new.target.prototype;
          (Object.setPrototypeOf ? Object.setPrototypeOf(this, t) : (this.__proto__ = t),
            (this.name = 'ZodError'),
            (this.issues = e));
        }
        format(e) {
          let t =
              e ||
              function (e) {
                return e.message;
              },
            n = { _errors: [] },
            r = (e) => {
              for (let i of e.issues)
                if ('invalid_union' === i.code) i.unionErrors.map(r);
                else if ('invalid_return_type' === i.code) r(i.returnTypeError);
                else if ('invalid_arguments' === i.code) r(i.argumentsError);
                else if (0 === i.path.length) n._errors.push(t(i));
                else {
                  let e = n,
                    r = 0;
                  for (; r < i.path.length; ) {
                    let n = i.path[r];
                    (r === i.path.length - 1
                      ? ((e[n] = e[n] || { _errors: [] }), e[n]._errors.push(t(i)))
                      : (e[n] = e[n] || { _errors: [] }),
                      (e = e[n]),
                      r++);
                  }
                }
            };
          return (r(this), n);
        }
        static assert(e) {
          if (!(e instanceof h)) throw Error(`Not a ZodError: ${e}`);
        }
        toString() {
          return this.message;
        }
        get message() {
          return JSON.stringify(this.issues, r.jsonStringifyReplacer, 2);
        }
        get isEmpty() {
          return 0 === this.issues.length;
        }
        flatten(e = (e) => e.message) {
          let t = {},
            n = [];
          for (let r of this.issues)
            if (r.path.length > 0) {
              let n = r.path[0];
              ((t[n] = t[n] || []), t[n].push(e(r)));
            } else n.push(e(r));
          return { formErrors: n, fieldErrors: t };
        }
        get formErrors() {
          return this.flatten();
        }
      }
      h.create = (e) => new h(e);
      let m = (e, t) => {
        let n;
        switch (e.code) {
          case p.invalid_type:
            n =
              e.received === d.undefined
                ? 'Required'
                : `Expected ${e.expected}, received ${e.received}`;
            break;
          case p.invalid_literal:
            n = `Invalid literal value, expected ${JSON.stringify(e.expected, r.jsonStringifyReplacer)}`;
            break;
          case p.unrecognized_keys:
            n = `Unrecognized key(s) in object: ${r.joinValues(e.keys, ', ')}`;
            break;
          case p.invalid_union:
            n = 'Invalid input';
            break;
          case p.invalid_union_discriminator:
            n = `Invalid discriminator value. Expected ${r.joinValues(e.options)}`;
            break;
          case p.invalid_enum_value:
            n = `Invalid enum value. Expected ${r.joinValues(e.options)}, received '${e.received}'`;
            break;
          case p.invalid_arguments:
            n = 'Invalid function arguments';
            break;
          case p.invalid_return_type:
            n = 'Invalid function return type';
            break;
          case p.invalid_date:
            n = 'Invalid date';
            break;
          case p.invalid_string:
            'object' == typeof e.validation
              ? 'includes' in e.validation
                ? ((n = `Invalid input: must include "${e.validation.includes}"`),
                  'number' == typeof e.validation.position &&
                    (n = `${n} at one or more positions greater than or equal to ${e.validation.position}`))
                : 'startsWith' in e.validation
                  ? (n = `Invalid input: must start with "${e.validation.startsWith}"`)
                  : 'endsWith' in e.validation
                    ? (n = `Invalid input: must end with "${e.validation.endsWith}"`)
                    : r.assertNever(e.validation)
              : (n = 'regex' !== e.validation ? `Invalid ${e.validation}` : 'Invalid');
            break;
          case p.too_small:
            n =
              'array' === e.type
                ? `Array must contain ${e.exact ? 'exactly' : e.inclusive ? 'at least' : 'more than'} ${e.minimum} element(s)`
                : 'string' === e.type
                  ? `String must contain ${e.exact ? 'exactly' : e.inclusive ? 'at least' : 'over'} ${e.minimum} character(s)`
                  : 'number' === e.type || 'bigint' === e.type
                    ? `Number must be ${e.exact ? 'exactly equal to ' : e.inclusive ? 'greater than or equal to ' : 'greater than '}${e.minimum}`
                    : 'date' === e.type
                      ? `Date must be ${e.exact ? 'exactly equal to ' : e.inclusive ? 'greater than or equal to ' : 'greater than '}${new Date(Number(e.minimum))}`
                      : 'Invalid input';
            break;
          case p.too_big:
            n =
              'array' === e.type
                ? `Array must contain ${e.exact ? 'exactly' : e.inclusive ? 'at most' : 'less than'} ${e.maximum} element(s)`
                : 'string' === e.type
                  ? `String must contain ${e.exact ? 'exactly' : e.inclusive ? 'at most' : 'under'} ${e.maximum} character(s)`
                  : 'number' === e.type
                    ? `Number must be ${e.exact ? 'exactly' : e.inclusive ? 'less than or equal to' : 'less than'} ${e.maximum}`
                    : 'bigint' === e.type
                      ? `BigInt must be ${e.exact ? 'exactly' : e.inclusive ? 'less than or equal to' : 'less than'} ${e.maximum}`
                      : 'date' === e.type
                        ? `Date must be ${e.exact ? 'exactly' : e.inclusive ? 'smaller than or equal to' : 'smaller than'} ${new Date(Number(e.maximum))}`
                        : 'Invalid input';
            break;
          case p.custom:
            n = 'Invalid input';
            break;
          case p.invalid_intersection_types:
            n = 'Intersection results could not be merged';
            break;
          case p.not_multiple_of:
            n = `Number must be a multiple of ${e.multipleOf}`;
            break;
          case p.not_finite:
            n = 'Number must be finite';
            break;
          default:
            ((n = t.defaultError), r.assertNever(e));
        }
        return { message: n };
      };
      (((s = a || (a = {})).errToObj = (e) =>
        'string' == typeof e ? { message: e } : e || {}),
        (s.toString = (e) => ('string' == typeof e ? e : e?.message)));
      let g = (e) => {
        let { data: t, path: n, errorMaps: r, issueData: i } = e,
          a = [...n, ...(i.path || [])],
          o = { ...i, path: a };
        if (void 0 !== i.message) return { ...i, path: a, message: i.message };
        let l = '';
        for (let e of r
          .filter((e) => !!e)
          .slice()
          .reverse())
          l = e(o, { data: t, defaultError: l }).message;
        return { ...i, path: a, message: l };
      };
      function y(e, t) {
        let n = g({
          issueData: t,
          data: e.data,
          path: e.path,
          errorMaps: [e.common.contextualErrorMap, e.schemaErrorMap, m, void 0].filter(
            (e) => !!e,
          ),
        });
        e.common.issues.push(n);
      }
      class v {
        constructor() {
          this.value = 'valid';
        }
        dirty() {
          'valid' === this.value && (this.value = 'dirty');
        }
        abort() {
          'aborted' !== this.value && (this.value = 'aborted');
        }
        static mergeArray(e, t) {
          let n = [];
          for (let r of t) {
            if ('aborted' === r.status) return x;
            ('dirty' === r.status && e.dirty(), n.push(r.value));
          }
          return { status: e.value, value: n };
        }
        static async mergeObjectAsync(e, t) {
          let n = [];
          for (let e of t) {
            let t = await e.key,
              r = await e.value;
            n.push({ key: t, value: r });
          }
          return v.mergeObjectSync(e, n);
        }
        static mergeObjectSync(e, t) {
          let n = {};
          for (let r of t) {
            let { key: t, value: i } = r;
            if ('aborted' === t.status || 'aborted' === i.status) return x;
            ('dirty' === t.status && e.dirty(),
              'dirty' === i.status && e.dirty(),
              '__proto__' !== t.value &&
                (void 0 !== i.value || r.alwaysSet) &&
                (n[t.value] = i.value));
          }
          return { status: e.value, value: n };
        }
      }
      let x = Object.freeze({ status: 'aborted' }),
        b = (e) => ({ status: 'dirty', value: e }),
        k = (e) => ({ status: 'valid', value: e }),
        w = (e) => 'undefined' != typeof Promise && e instanceof Promise;
      class _ {
        constructor(e, t, n, r) {
          ((this._cachedPath = []),
            (this.parent = e),
            (this.data = t),
            (this._path = n),
            (this._key = r));
        }
        get path() {
          return (
            this._cachedPath.length ||
              (Array.isArray(this._key)
                ? this._cachedPath.push(...this._path, ...this._key)
                : this._cachedPath.push(...this._path, this._key)),
            this._cachedPath
          );
        }
      }
      let S = (e, t) => {
        if ('valid' === t.status) return { success: !0, data: t.value };
        if (!e.common.issues.length)
          throw Error('Validation failed but no issues detected.');
        return {
          success: !1,
          get error() {
            if (this._error) return this._error;
            let t = new h(e.common.issues);
            return ((this._error = t), this._error);
          },
        };
      };
      function E(e) {
        if (!e) return {};
        let { errorMap: t, invalid_type_error: n, required_error: r, description: i } = e;
        if (t && (n || r))
          throw Error(
            'Can\'t use "invalid_type_error" or "required_error" in conjunction with custom error map.',
          );
        return t
          ? { errorMap: t, description: i }
          : {
              errorMap: (t, i) => {
                let { message: a } = e;
                return 'invalid_enum_value' === t.code
                  ? { message: a ?? i.defaultError }
                  : void 0 === i.data
                    ? { message: a ?? r ?? i.defaultError }
                    : 'invalid_type' !== t.code
                      ? { message: i.defaultError }
                      : { message: a ?? n ?? i.defaultError };
              },
              description: i,
            };
      }
      class C {
        get description() {
          return this._def.description;
        }
        _getType(e) {
          return f(e.data);
        }
        _getOrReturnCtx(e, t) {
          return (
            t || {
              common: e.parent.common,
              data: e.data,
              parsedType: f(e.data),
              schemaErrorMap: this._def.errorMap,
              path: e.path,
              parent: e.parent,
            }
          );
        }
        _processInputParams(e) {
          return {
            status: new v(),
            ctx: {
              common: e.parent.common,
              data: e.data,
              parsedType: f(e.data),
              schemaErrorMap: this._def.errorMap,
              path: e.path,
              parent: e.parent,
            },
          };
        }
        _parseSync(e) {
          let t = this._parse(e);
          if (w(t)) throw Error('Synchronous parse encountered promise.');
          return t;
        }
        _parseAsync(e) {
          return Promise.resolve(this._parse(e));
        }
        parse(e, t) {
          let n = this.safeParse(e, t);
          if (n.success) return n.data;
          throw n.error;
        }
        safeParse(e, t) {
          let n = {
              common: {
                issues: [],
                async: t?.async ?? !1,
                contextualErrorMap: t?.errorMap,
              },
              path: t?.path || [],
              schemaErrorMap: this._def.errorMap,
              parent: null,
              data: e,
              parsedType: f(e),
            },
            r = this._parseSync({ data: e, path: n.path, parent: n });
          return S(n, r);
        }
        '~validate'(e) {
          let t = {
            common: { issues: [], async: !!this['~standard'].async },
            path: [],
            schemaErrorMap: this._def.errorMap,
            parent: null,
            data: e,
            parsedType: f(e),
          };
          if (!this['~standard'].async)
            try {
              let n = this._parseSync({ data: e, path: [], parent: t });
              return 'valid' === n.status
                ? { value: n.value }
                : { issues: t.common.issues };
            } catch (e) {
              (e?.message?.toLowerCase()?.includes('encountered') &&
                (this['~standard'].async = !0),
                (t.common = { issues: [], async: !0 }));
            }
          return this._parseAsync({ data: e, path: [], parent: t }).then((e) =>
            'valid' === e.status ? { value: e.value } : { issues: t.common.issues },
          );
        }
        async parseAsync(e, t) {
          let n = await this.safeParseAsync(e, t);
          if (n.success) return n.data;
          throw n.error;
        }
        async safeParseAsync(e, t) {
          let n = {
              common: { issues: [], contextualErrorMap: t?.errorMap, async: !0 },
              path: t?.path || [],
              schemaErrorMap: this._def.errorMap,
              parent: null,
              data: e,
              parsedType: f(e),
            },
            r = this._parse({ data: e, path: n.path, parent: n });
          return S(n, await (w(r) ? r : Promise.resolve(r)));
        }
        refine(e, t) {
          return this._refinement((n, r) => {
            let i = e(n),
              a = () =>
                r.addIssue({
                  code: p.custom,
                  ...('string' == typeof t || void 0 === t
                    ? { message: t }
                    : 'function' == typeof t
                      ? t(n)
                      : t),
                });
            return 'undefined' != typeof Promise && i instanceof Promise
              ? i.then((e) => !!e || (a(), !1))
              : !!i || (a(), !1);
          });
        }
        refinement(e, t) {
          return this._refinement(
            (n, r) => !!e(n) || (r.addIssue('function' == typeof t ? t(n, r) : t), !1),
          );
        }
        _refinement(e) {
          return new ex({
            schema: this,
            typeName: o.ZodEffects,
            effect: { type: 'refinement', refinement: e },
          });
        }
        superRefine(e) {
          return this._refinement(e);
        }
        constructor(e) {
          ((this.spa = this.safeParseAsync),
            (this._def = e),
            (this.parse = this.parse.bind(this)),
            (this.safeParse = this.safeParse.bind(this)),
            (this.parseAsync = this.parseAsync.bind(this)),
            (this.safeParseAsync = this.safeParseAsync.bind(this)),
            (this.spa = this.spa.bind(this)),
            (this.refine = this.refine.bind(this)),
            (this.refinement = this.refinement.bind(this)),
            (this.superRefine = this.superRefine.bind(this)),
            (this.optional = this.optional.bind(this)),
            (this.nullable = this.nullable.bind(this)),
            (this.nullish = this.nullish.bind(this)),
            (this.array = this.array.bind(this)),
            (this.promise = this.promise.bind(this)),
            (this.or = this.or.bind(this)),
            (this.and = this.and.bind(this)),
            (this.transform = this.transform.bind(this)),
            (this.brand = this.brand.bind(this)),
            (this.default = this.default.bind(this)),
            (this.catch = this.catch.bind(this)),
            (this.describe = this.describe.bind(this)),
            (this.pipe = this.pipe.bind(this)),
            (this.readonly = this.readonly.bind(this)),
            (this.isNullable = this.isNullable.bind(this)),
            (this.isOptional = this.isOptional.bind(this)),
            (this['~standard'] = {
              version: 1,
              vendor: 'zod',
              validate: (e) => this['~validate'](e),
            }));
        }
        optional() {
          return eb.create(this, this._def);
        }
        nullable() {
          return ek.create(this, this._def);
        }
        nullish() {
          return this.nullable().optional();
        }
        array() {
          return en.create(this);
        }
        promise() {
          return ev.create(this, this._def);
        }
        or(e) {
          return ei.create([this, e], this._def);
        }
        and(e) {
          return el.create(this, e, this._def);
        }
        transform(e) {
          return new ex({
            ...E(this._def),
            schema: this,
            typeName: o.ZodEffects,
            effect: { type: 'transform', transform: e },
          });
        }
        default(e) {
          return new ew({
            ...E(this._def),
            innerType: this,
            defaultValue: 'function' == typeof e ? e : () => e,
            typeName: o.ZodDefault,
          });
        }
        brand() {
          return new eE({ typeName: o.ZodBranded, type: this, ...E(this._def) });
        }
        catch(e) {
          return new e_({
            ...E(this._def),
            innerType: this,
            catchValue: 'function' == typeof e ? e : () => e,
            typeName: o.ZodCatch,
          });
        }
        describe(e) {
          return new this.constructor({ ...this._def, description: e });
        }
        pipe(e) {
          return eC.create(this, e);
        }
        readonly() {
          return eT.create(this);
        }
        isOptional() {
          return this.safeParse(void 0).success;
        }
        isNullable() {
          return this.safeParse(null).success;
        }
      }
      let T = /^c[^\s-]{8,}$/i,
        A = /^[0-9a-z]+$/,
        P = /^[0-9A-HJKMNP-TV-Z]{26}$/i,
        O =
          /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i,
        N = /^[a-z0-9_-]{21}$/i,
        R = /^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]*$/,
        I =
          /^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/,
        L =
          /^(?!\.)(?!.*\.\.)([A-Z0-9_'+\-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i,
        D =
          /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/,
        M =
          /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/(3[0-2]|[12]?[0-9])$/,
        j =
          /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))$/,
        z =
          /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/,
        F = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/,
        Z = /^([0-9a-zA-Z-_]{4})*(([0-9a-zA-Z-_]{2}(==)?)|([0-9a-zA-Z-_]{3}(=)?))?$/,
        U =
          '((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))',
        B = RegExp(`^${U}$`);
      function $(e) {
        let t = '[0-5]\\d';
        e.precision
          ? (t = `${t}\\.\\d{${e.precision}}`)
          : null == e.precision && (t = `${t}(\\.\\d+)?`);
        let n = e.precision ? '+' : '?';
        return `([01]\\d|2[0-3]):[0-5]\\d(:${t})${n}`;
      }
      class V extends C {
        _parse(e) {
          var t, n, i, a;
          let o;
          if (
            (this._def.coerce && (e.data = String(e.data)), this._getType(e) !== d.string)
          ) {
            let t = this._getOrReturnCtx(e);
            return (
              y(t, { code: p.invalid_type, expected: d.string, received: t.parsedType }),
              x
            );
          }
          let l = new v();
          for (let s of this._def.checks)
            if ('min' === s.kind)
              e.data.length < s.value &&
                (y((o = this._getOrReturnCtx(e, o)), {
                  code: p.too_small,
                  minimum: s.value,
                  type: 'string',
                  inclusive: !0,
                  exact: !1,
                  message: s.message,
                }),
                l.dirty());
            else if ('max' === s.kind)
              e.data.length > s.value &&
                (y((o = this._getOrReturnCtx(e, o)), {
                  code: p.too_big,
                  maximum: s.value,
                  type: 'string',
                  inclusive: !0,
                  exact: !1,
                  message: s.message,
                }),
                l.dirty());
            else if ('length' === s.kind) {
              let t = e.data.length > s.value,
                n = e.data.length < s.value;
              (t || n) &&
                ((o = this._getOrReturnCtx(e, o)),
                t
                  ? y(o, {
                      code: p.too_big,
                      maximum: s.value,
                      type: 'string',
                      inclusive: !0,
                      exact: !0,
                      message: s.message,
                    })
                  : n &&
                    y(o, {
                      code: p.too_small,
                      minimum: s.value,
                      type: 'string',
                      inclusive: !0,
                      exact: !0,
                      message: s.message,
                    }),
                l.dirty());
            } else if ('email' === s.kind)
              L.test(e.data) ||
                (y((o = this._getOrReturnCtx(e, o)), {
                  validation: 'email',
                  code: p.invalid_string,
                  message: s.message,
                }),
                l.dirty());
            else if ('emoji' === s.kind)
              (c ||
                (c = RegExp('^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$', 'u')),
                c.test(e.data) ||
                  (y((o = this._getOrReturnCtx(e, o)), {
                    validation: 'emoji',
                    code: p.invalid_string,
                    message: s.message,
                  }),
                  l.dirty()));
            else if ('uuid' === s.kind)
              O.test(e.data) ||
                (y((o = this._getOrReturnCtx(e, o)), {
                  validation: 'uuid',
                  code: p.invalid_string,
                  message: s.message,
                }),
                l.dirty());
            else if ('nanoid' === s.kind)
              N.test(e.data) ||
                (y((o = this._getOrReturnCtx(e, o)), {
                  validation: 'nanoid',
                  code: p.invalid_string,
                  message: s.message,
                }),
                l.dirty());
            else if ('cuid' === s.kind)
              T.test(e.data) ||
                (y((o = this._getOrReturnCtx(e, o)), {
                  validation: 'cuid',
                  code: p.invalid_string,
                  message: s.message,
                }),
                l.dirty());
            else if ('cuid2' === s.kind)
              A.test(e.data) ||
                (y((o = this._getOrReturnCtx(e, o)), {
                  validation: 'cuid2',
                  code: p.invalid_string,
                  message: s.message,
                }),
                l.dirty());
            else if ('ulid' === s.kind)
              P.test(e.data) ||
                (y((o = this._getOrReturnCtx(e, o)), {
                  validation: 'ulid',
                  code: p.invalid_string,
                  message: s.message,
                }),
                l.dirty());
            else if ('url' === s.kind)
              try {
                new URL(e.data);
              } catch {
                (y((o = this._getOrReturnCtx(e, o)), {
                  validation: 'url',
                  code: p.invalid_string,
                  message: s.message,
                }),
                  l.dirty());
              }
            else
              'regex' === s.kind
                ? ((s.regex.lastIndex = 0),
                  s.regex.test(e.data) ||
                    (y((o = this._getOrReturnCtx(e, o)), {
                      validation: 'regex',
                      code: p.invalid_string,
                      message: s.message,
                    }),
                    l.dirty()))
                : 'trim' === s.kind
                  ? (e.data = e.data.trim())
                  : 'includes' === s.kind
                    ? e.data.includes(s.value, s.position) ||
                      (y((o = this._getOrReturnCtx(e, o)), {
                        code: p.invalid_string,
                        validation: { includes: s.value, position: s.position },
                        message: s.message,
                      }),
                      l.dirty())
                    : 'toLowerCase' === s.kind
                      ? (e.data = e.data.toLowerCase())
                      : 'toUpperCase' === s.kind
                        ? (e.data = e.data.toUpperCase())
                        : 'startsWith' === s.kind
                          ? e.data.startsWith(s.value) ||
                            (y((o = this._getOrReturnCtx(e, o)), {
                              code: p.invalid_string,
                              validation: { startsWith: s.value },
                              message: s.message,
                            }),
                            l.dirty())
                          : 'endsWith' === s.kind
                            ? e.data.endsWith(s.value) ||
                              (y((o = this._getOrReturnCtx(e, o)), {
                                code: p.invalid_string,
                                validation: { endsWith: s.value },
                                message: s.message,
                              }),
                              l.dirty())
                            : 'datetime' === s.kind
                              ? (function (e) {
                                  let t = `${U}T${$(e)}`,
                                    n = [];
                                  return (
                                    n.push(e.local ? 'Z?' : 'Z'),
                                    e.offset && n.push('([+-]\\d{2}:?\\d{2})'),
                                    (t = `${t}(${n.join('|')})`),
                                    RegExp(`^${t}$`)
                                  );
                                })(s).test(e.data) ||
                                (y((o = this._getOrReturnCtx(e, o)), {
                                  code: p.invalid_string,
                                  validation: 'datetime',
                                  message: s.message,
                                }),
                                l.dirty())
                              : 'date' === s.kind
                                ? B.test(e.data) ||
                                  (y((o = this._getOrReturnCtx(e, o)), {
                                    code: p.invalid_string,
                                    validation: 'date',
                                    message: s.message,
                                  }),
                                  l.dirty())
                                : 'time' === s.kind
                                  ? RegExp(`^${$(s)}$`).test(e.data) ||
                                    (y((o = this._getOrReturnCtx(e, o)), {
                                      code: p.invalid_string,
                                      validation: 'time',
                                      message: s.message,
                                    }),
                                    l.dirty())
                                  : 'duration' === s.kind
                                    ? I.test(e.data) ||
                                      (y((o = this._getOrReturnCtx(e, o)), {
                                        validation: 'duration',
                                        code: p.invalid_string,
                                        message: s.message,
                                      }),
                                      l.dirty())
                                    : 'ip' === s.kind
                                      ? ((t = e.data),
                                        !(
                                          (('v4' === (n = s.version) || !n) &&
                                            D.test(t)) ||
                                          (('v6' === n || !n) && j.test(t))
                                        ) &&
                                          1 &&
                                          (y((o = this._getOrReturnCtx(e, o)), {
                                            validation: 'ip',
                                            code: p.invalid_string,
                                            message: s.message,
                                          }),
                                          l.dirty()))
                                      : 'jwt' === s.kind
                                        ? !(function (e, t) {
                                            if (!R.test(e)) return !1;
                                            try {
                                              let [n] = e.split('.');
                                              if (!n) return !1;
                                              let r = n
                                                  .replace(/-/g, '+')
                                                  .replace(/_/g, '/')
                                                  .padEnd(
                                                    n.length + ((4 - (n.length % 4)) % 4),
                                                    '=',
                                                  ),
                                                i = JSON.parse(atob(r));
                                              if (
                                                'object' != typeof i ||
                                                null === i ||
                                                ('typ' in i && i?.typ !== 'JWT') ||
                                                !i.alg ||
                                                (t && i.alg !== t)
                                              )
                                                return !1;
                                              return !0;
                                            } catch {
                                              return !1;
                                            }
                                          })(e.data, s.alg) &&
                                          (y((o = this._getOrReturnCtx(e, o)), {
                                            validation: 'jwt',
                                            code: p.invalid_string,
                                            message: s.message,
                                          }),
                                          l.dirty())
                                        : 'cidr' === s.kind
                                          ? ((i = e.data),
                                            !(
                                              (('v4' === (a = s.version) || !a) &&
                                                M.test(i)) ||
                                              (('v6' === a || !a) && z.test(i))
                                            ) &&
                                              1 &&
                                              (y((o = this._getOrReturnCtx(e, o)), {
                                                validation: 'cidr',
                                                code: p.invalid_string,
                                                message: s.message,
                                              }),
                                              l.dirty()))
                                          : 'base64' === s.kind
                                            ? F.test(e.data) ||
                                              (y((o = this._getOrReturnCtx(e, o)), {
                                                validation: 'base64',
                                                code: p.invalid_string,
                                                message: s.message,
                                              }),
                                              l.dirty())
                                            : 'base64url' === s.kind
                                              ? Z.test(e.data) ||
                                                (y((o = this._getOrReturnCtx(e, o)), {
                                                  validation: 'base64url',
                                                  code: p.invalid_string,
                                                  message: s.message,
                                                }),
                                                l.dirty())
                                              : r.assertNever(s);
          return { status: l.value, value: e.data };
        }
        _regex(e, t, n) {
          return this.refinement((t) => e.test(t), {
            validation: t,
            code: p.invalid_string,
            ...a.errToObj(n),
          });
        }
        _addCheck(e) {
          return new V({ ...this._def, checks: [...this._def.checks, e] });
        }
        email(e) {
          return this._addCheck({ kind: 'email', ...a.errToObj(e) });
        }
        url(e) {
          return this._addCheck({ kind: 'url', ...a.errToObj(e) });
        }
        emoji(e) {
          return this._addCheck({ kind: 'emoji', ...a.errToObj(e) });
        }
        uuid(e) {
          return this._addCheck({ kind: 'uuid', ...a.errToObj(e) });
        }
        nanoid(e) {
          return this._addCheck({ kind: 'nanoid', ...a.errToObj(e) });
        }
        cuid(e) {
          return this._addCheck({ kind: 'cuid', ...a.errToObj(e) });
        }
        cuid2(e) {
          return this._addCheck({ kind: 'cuid2', ...a.errToObj(e) });
        }
        ulid(e) {
          return this._addCheck({ kind: 'ulid', ...a.errToObj(e) });
        }
        base64(e) {
          return this._addCheck({ kind: 'base64', ...a.errToObj(e) });
        }
        base64url(e) {
          return this._addCheck({ kind: 'base64url', ...a.errToObj(e) });
        }
        jwt(e) {
          return this._addCheck({ kind: 'jwt', ...a.errToObj(e) });
        }
        ip(e) {
          return this._addCheck({ kind: 'ip', ...a.errToObj(e) });
        }
        cidr(e) {
          return this._addCheck({ kind: 'cidr', ...a.errToObj(e) });
        }
        datetime(e) {
          return 'string' == typeof e
            ? this._addCheck({
                kind: 'datetime',
                precision: null,
                offset: !1,
                local: !1,
                message: e,
              })
            : this._addCheck({
                kind: 'datetime',
                precision: void 0 === e?.precision ? null : e?.precision,
                offset: e?.offset ?? !1,
                local: e?.local ?? !1,
                ...a.errToObj(e?.message),
              });
        }
        date(e) {
          return this._addCheck({ kind: 'date', message: e });
        }
        time(e) {
          return 'string' == typeof e
            ? this._addCheck({ kind: 'time', precision: null, message: e })
            : this._addCheck({
                kind: 'time',
                precision: void 0 === e?.precision ? null : e?.precision,
                ...a.errToObj(e?.message),
              });
        }
        duration(e) {
          return this._addCheck({ kind: 'duration', ...a.errToObj(e) });
        }
        regex(e, t) {
          return this._addCheck({ kind: 'regex', regex: e, ...a.errToObj(t) });
        }
        includes(e, t) {
          return this._addCheck({
            kind: 'includes',
            value: e,
            position: t?.position,
            ...a.errToObj(t?.message),
          });
        }
        startsWith(e, t) {
          return this._addCheck({ kind: 'startsWith', value: e, ...a.errToObj(t) });
        }
        endsWith(e, t) {
          return this._addCheck({ kind: 'endsWith', value: e, ...a.errToObj(t) });
        }
        min(e, t) {
          return this._addCheck({ kind: 'min', value: e, ...a.errToObj(t) });
        }
        max(e, t) {
          return this._addCheck({ kind: 'max', value: e, ...a.errToObj(t) });
        }
        length(e, t) {
          return this._addCheck({ kind: 'length', value: e, ...a.errToObj(t) });
        }
        nonempty(e) {
          return this.min(1, a.errToObj(e));
        }
        trim() {
          return new V({ ...this._def, checks: [...this._def.checks, { kind: 'trim' }] });
        }
        toLowerCase() {
          return new V({
            ...this._def,
            checks: [...this._def.checks, { kind: 'toLowerCase' }],
          });
        }
        toUpperCase() {
          return new V({
            ...this._def,
            checks: [...this._def.checks, { kind: 'toUpperCase' }],
          });
        }
        get isDatetime() {
          return !!this._def.checks.find((e) => 'datetime' === e.kind);
        }
        get isDate() {
          return !!this._def.checks.find((e) => 'date' === e.kind);
        }
        get isTime() {
          return !!this._def.checks.find((e) => 'time' === e.kind);
        }
        get isDuration() {
          return !!this._def.checks.find((e) => 'duration' === e.kind);
        }
        get isEmail() {
          return !!this._def.checks.find((e) => 'email' === e.kind);
        }
        get isURL() {
          return !!this._def.checks.find((e) => 'url' === e.kind);
        }
        get isEmoji() {
          return !!this._def.checks.find((e) => 'emoji' === e.kind);
        }
        get isUUID() {
          return !!this._def.checks.find((e) => 'uuid' === e.kind);
        }
        get isNANOID() {
          return !!this._def.checks.find((e) => 'nanoid' === e.kind);
        }
        get isCUID() {
          return !!this._def.checks.find((e) => 'cuid' === e.kind);
        }
        get isCUID2() {
          return !!this._def.checks.find((e) => 'cuid2' === e.kind);
        }
        get isULID() {
          return !!this._def.checks.find((e) => 'ulid' === e.kind);
        }
        get isIP() {
          return !!this._def.checks.find((e) => 'ip' === e.kind);
        }
        get isCIDR() {
          return !!this._def.checks.find((e) => 'cidr' === e.kind);
        }
        get isBase64() {
          return !!this._def.checks.find((e) => 'base64' === e.kind);
        }
        get isBase64url() {
          return !!this._def.checks.find((e) => 'base64url' === e.kind);
        }
        get minLength() {
          let e = null;
          for (let t of this._def.checks)
            'min' === t.kind && (null === e || t.value > e) && (e = t.value);
          return e;
        }
        get maxLength() {
          let e = null;
          for (let t of this._def.checks)
            'max' === t.kind && (null === e || t.value < e) && (e = t.value);
          return e;
        }
      }
      V.create = (e) =>
        new V({ checks: [], typeName: o.ZodString, coerce: e?.coerce ?? !1, ...E(e) });
      class H extends C {
        constructor() {
          (super(...arguments),
            (this.min = this.gte),
            (this.max = this.lte),
            (this.step = this.multipleOf));
        }
        _parse(e) {
          let t;
          if (
            (this._def.coerce && (e.data = Number(e.data)), this._getType(e) !== d.number)
          ) {
            let t = this._getOrReturnCtx(e);
            return (
              y(t, { code: p.invalid_type, expected: d.number, received: t.parsedType }),
              x
            );
          }
          let n = new v();
          for (let i of this._def.checks)
            'int' === i.kind
              ? r.isInteger(e.data) ||
                (y((t = this._getOrReturnCtx(e, t)), {
                  code: p.invalid_type,
                  expected: 'integer',
                  received: 'float',
                  message: i.message,
                }),
                n.dirty())
              : 'min' === i.kind
                ? (i.inclusive ? e.data < i.value : e.data <= i.value) &&
                  (y((t = this._getOrReturnCtx(e, t)), {
                    code: p.too_small,
                    minimum: i.value,
                    type: 'number',
                    inclusive: i.inclusive,
                    exact: !1,
                    message: i.message,
                  }),
                  n.dirty())
                : 'max' === i.kind
                  ? (i.inclusive ? e.data > i.value : e.data >= i.value) &&
                    (y((t = this._getOrReturnCtx(e, t)), {
                      code: p.too_big,
                      maximum: i.value,
                      type: 'number',
                      inclusive: i.inclusive,
                      exact: !1,
                      message: i.message,
                    }),
                    n.dirty())
                  : 'multipleOf' === i.kind
                    ? 0 !==
                        (function (e, t) {
                          let n = (e.toString().split('.')[1] || '').length,
                            r = (t.toString().split('.')[1] || '').length,
                            i = n > r ? n : r;
                          return (
                            (Number.parseInt(e.toFixed(i).replace('.', '')) %
                              Number.parseInt(t.toFixed(i).replace('.', ''))) /
                            10 ** i
                          );
                        })(e.data, i.value) &&
                      (y((t = this._getOrReturnCtx(e, t)), {
                        code: p.not_multiple_of,
                        multipleOf: i.value,
                        message: i.message,
                      }),
                      n.dirty())
                    : 'finite' === i.kind
                      ? Number.isFinite(e.data) ||
                        (y((t = this._getOrReturnCtx(e, t)), {
                          code: p.not_finite,
                          message: i.message,
                        }),
                        n.dirty())
                      : r.assertNever(i);
          return { status: n.value, value: e.data };
        }
        gte(e, t) {
          return this.setLimit('min', e, !0, a.toString(t));
        }
        gt(e, t) {
          return this.setLimit('min', e, !1, a.toString(t));
        }
        lte(e, t) {
          return this.setLimit('max', e, !0, a.toString(t));
        }
        lt(e, t) {
          return this.setLimit('max', e, !1, a.toString(t));
        }
        setLimit(e, t, n, r) {
          return new H({
            ...this._def,
            checks: [
              ...this._def.checks,
              { kind: e, value: t, inclusive: n, message: a.toString(r) },
            ],
          });
        }
        _addCheck(e) {
          return new H({ ...this._def, checks: [...this._def.checks, e] });
        }
        int(e) {
          return this._addCheck({ kind: 'int', message: a.toString(e) });
        }
        positive(e) {
          return this._addCheck({
            kind: 'min',
            value: 0,
            inclusive: !1,
            message: a.toString(e),
          });
        }
        negative(e) {
          return this._addCheck({
            kind: 'max',
            value: 0,
            inclusive: !1,
            message: a.toString(e),
          });
        }
        nonpositive(e) {
          return this._addCheck({
            kind: 'max',
            value: 0,
            inclusive: !0,
            message: a.toString(e),
          });
        }
        nonnegative(e) {
          return this._addCheck({
            kind: 'min',
            value: 0,
            inclusive: !0,
            message: a.toString(e),
          });
        }
        multipleOf(e, t) {
          return this._addCheck({ kind: 'multipleOf', value: e, message: a.toString(t) });
        }
        finite(e) {
          return this._addCheck({ kind: 'finite', message: a.toString(e) });
        }
        safe(e) {
          return this._addCheck({
            kind: 'min',
            inclusive: !0,
            value: Number.MIN_SAFE_INTEGER,
            message: a.toString(e),
          })._addCheck({
            kind: 'max',
            inclusive: !0,
            value: Number.MAX_SAFE_INTEGER,
            message: a.toString(e),
          });
        }
        get minValue() {
          let e = null;
          for (let t of this._def.checks)
            'min' === t.kind && (null === e || t.value > e) && (e = t.value);
          return e;
        }
        get maxValue() {
          let e = null;
          for (let t of this._def.checks)
            'max' === t.kind && (null === e || t.value < e) && (e = t.value);
          return e;
        }
        get isInt() {
          return !!this._def.checks.find(
            (e) => 'int' === e.kind || ('multipleOf' === e.kind && r.isInteger(e.value)),
          );
        }
        get isFinite() {
          let e = null,
            t = null;
          for (let n of this._def.checks)
            if ('finite' === n.kind || 'int' === n.kind || 'multipleOf' === n.kind)
              return !0;
            else
              'min' === n.kind
                ? (null === t || n.value > t) && (t = n.value)
                : 'max' === n.kind && (null === e || n.value < e) && (e = n.value);
          return Number.isFinite(t) && Number.isFinite(e);
        }
      }
      H.create = (e) =>
        new H({ checks: [], typeName: o.ZodNumber, coerce: e?.coerce || !1, ...E(e) });
      class W extends C {
        constructor() {
          (super(...arguments), (this.min = this.gte), (this.max = this.lte));
        }
        _parse(e) {
          let t;
          if (this._def.coerce)
            try {
              e.data = BigInt(e.data);
            } catch {
              return this._getInvalidInput(e);
            }
          if (this._getType(e) !== d.bigint) return this._getInvalidInput(e);
          let n = new v();
          for (let i of this._def.checks)
            'min' === i.kind
              ? (i.inclusive ? e.data < i.value : e.data <= i.value) &&
                (y((t = this._getOrReturnCtx(e, t)), {
                  code: p.too_small,
                  type: 'bigint',
                  minimum: i.value,
                  inclusive: i.inclusive,
                  message: i.message,
                }),
                n.dirty())
              : 'max' === i.kind
                ? (i.inclusive ? e.data > i.value : e.data >= i.value) &&
                  (y((t = this._getOrReturnCtx(e, t)), {
                    code: p.too_big,
                    type: 'bigint',
                    maximum: i.value,
                    inclusive: i.inclusive,
                    message: i.message,
                  }),
                  n.dirty())
                : 'multipleOf' === i.kind
                  ? e.data % i.value !== BigInt(0) &&
                    (y((t = this._getOrReturnCtx(e, t)), {
                      code: p.not_multiple_of,
                      multipleOf: i.value,
                      message: i.message,
                    }),
                    n.dirty())
                  : r.assertNever(i);
          return { status: n.value, value: e.data };
        }
        _getInvalidInput(e) {
          let t = this._getOrReturnCtx(e);
          return (
            y(t, { code: p.invalid_type, expected: d.bigint, received: t.parsedType }),
            x
          );
        }
        gte(e, t) {
          return this.setLimit('min', e, !0, a.toString(t));
        }
        gt(e, t) {
          return this.setLimit('min', e, !1, a.toString(t));
        }
        lte(e, t) {
          return this.setLimit('max', e, !0, a.toString(t));
        }
        lt(e, t) {
          return this.setLimit('max', e, !1, a.toString(t));
        }
        setLimit(e, t, n, r) {
          return new W({
            ...this._def,
            checks: [
              ...this._def.checks,
              { kind: e, value: t, inclusive: n, message: a.toString(r) },
            ],
          });
        }
        _addCheck(e) {
          return new W({ ...this._def, checks: [...this._def.checks, e] });
        }
        positive(e) {
          return this._addCheck({
            kind: 'min',
            value: BigInt(0),
            inclusive: !1,
            message: a.toString(e),
          });
        }
        negative(e) {
          return this._addCheck({
            kind: 'max',
            value: BigInt(0),
            inclusive: !1,
            message: a.toString(e),
          });
        }
        nonpositive(e) {
          return this._addCheck({
            kind: 'max',
            value: BigInt(0),
            inclusive: !0,
            message: a.toString(e),
          });
        }
        nonnegative(e) {
          return this._addCheck({
            kind: 'min',
            value: BigInt(0),
            inclusive: !0,
            message: a.toString(e),
          });
        }
        multipleOf(e, t) {
          return this._addCheck({ kind: 'multipleOf', value: e, message: a.toString(t) });
        }
        get minValue() {
          let e = null;
          for (let t of this._def.checks)
            'min' === t.kind && (null === e || t.value > e) && (e = t.value);
          return e;
        }
        get maxValue() {
          let e = null;
          for (let t of this._def.checks)
            'max' === t.kind && (null === e || t.value < e) && (e = t.value);
          return e;
        }
      }
      W.create = (e) =>
        new W({ checks: [], typeName: o.ZodBigInt, coerce: e?.coerce ?? !1, ...E(e) });
      class q extends C {
        _parse(e) {
          if ((this._def.coerce && (e.data = !!e.data), this._getType(e) !== d.boolean)) {
            let t = this._getOrReturnCtx(e);
            return (
              y(t, { code: p.invalid_type, expected: d.boolean, received: t.parsedType }),
              x
            );
          }
          return k(e.data);
        }
      }
      q.create = (e) =>
        new q({ typeName: o.ZodBoolean, coerce: e?.coerce || !1, ...E(e) });
      class K extends C {
        _parse(e) {
          let t;
          if (
            (this._def.coerce && (e.data = new Date(e.data)), this._getType(e) !== d.date)
          ) {
            let t = this._getOrReturnCtx(e);
            return (
              y(t, { code: p.invalid_type, expected: d.date, received: t.parsedType }),
              x
            );
          }
          if (Number.isNaN(e.data.getTime()))
            return (y(this._getOrReturnCtx(e), { code: p.invalid_date }), x);
          let n = new v();
          for (let i of this._def.checks)
            'min' === i.kind
              ? e.data.getTime() < i.value &&
                (y((t = this._getOrReturnCtx(e, t)), {
                  code: p.too_small,
                  message: i.message,
                  inclusive: !0,
                  exact: !1,
                  minimum: i.value,
                  type: 'date',
                }),
                n.dirty())
              : 'max' === i.kind
                ? e.data.getTime() > i.value &&
                  (y((t = this._getOrReturnCtx(e, t)), {
                    code: p.too_big,
                    message: i.message,
                    inclusive: !0,
                    exact: !1,
                    maximum: i.value,
                    type: 'date',
                  }),
                  n.dirty())
                : r.assertNever(i);
          return { status: n.value, value: new Date(e.data.getTime()) };
        }
        _addCheck(e) {
          return new K({ ...this._def, checks: [...this._def.checks, e] });
        }
        min(e, t) {
          return this._addCheck({
            kind: 'min',
            value: e.getTime(),
            message: a.toString(t),
          });
        }
        max(e, t) {
          return this._addCheck({
            kind: 'max',
            value: e.getTime(),
            message: a.toString(t),
          });
        }
        get minDate() {
          let e = null;
          for (let t of this._def.checks)
            'min' === t.kind && (null === e || t.value > e) && (e = t.value);
          return null != e ? new Date(e) : null;
        }
        get maxDate() {
          let e = null;
          for (let t of this._def.checks)
            'max' === t.kind && (null === e || t.value < e) && (e = t.value);
          return null != e ? new Date(e) : null;
        }
      }
      K.create = (e) =>
        new K({ checks: [], coerce: e?.coerce || !1, typeName: o.ZodDate, ...E(e) });
      class Y extends C {
        _parse(e) {
          if (this._getType(e) !== d.symbol) {
            let t = this._getOrReturnCtx(e);
            return (
              y(t, { code: p.invalid_type, expected: d.symbol, received: t.parsedType }),
              x
            );
          }
          return k(e.data);
        }
      }
      Y.create = (e) => new Y({ typeName: o.ZodSymbol, ...E(e) });
      class X extends C {
        _parse(e) {
          if (this._getType(e) !== d.undefined) {
            let t = this._getOrReturnCtx(e);
            return (
              y(t, {
                code: p.invalid_type,
                expected: d.undefined,
                received: t.parsedType,
              }),
              x
            );
          }
          return k(e.data);
        }
      }
      X.create = (e) => new X({ typeName: o.ZodUndefined, ...E(e) });
      class G extends C {
        _parse(e) {
          if (this._getType(e) !== d.null) {
            let t = this._getOrReturnCtx(e);
            return (
              y(t, { code: p.invalid_type, expected: d.null, received: t.parsedType }),
              x
            );
          }
          return k(e.data);
        }
      }
      G.create = (e) => new G({ typeName: o.ZodNull, ...E(e) });
      class J extends C {
        constructor() {
          (super(...arguments), (this._any = !0));
        }
        _parse(e) {
          return k(e.data);
        }
      }
      J.create = (e) => new J({ typeName: o.ZodAny, ...E(e) });
      class Q extends C {
        constructor() {
          (super(...arguments), (this._unknown = !0));
        }
        _parse(e) {
          return k(e.data);
        }
      }
      Q.create = (e) => new Q({ typeName: o.ZodUnknown, ...E(e) });
      class ee extends C {
        _parse(e) {
          let t = this._getOrReturnCtx(e);
          return (
            y(t, { code: p.invalid_type, expected: d.never, received: t.parsedType }),
            x
          );
        }
      }
      ee.create = (e) => new ee({ typeName: o.ZodNever, ...E(e) });
      class et extends C {
        _parse(e) {
          if (this._getType(e) !== d.undefined) {
            let t = this._getOrReturnCtx(e);
            return (
              y(t, { code: p.invalid_type, expected: d.void, received: t.parsedType }),
              x
            );
          }
          return k(e.data);
        }
      }
      et.create = (e) => new et({ typeName: o.ZodVoid, ...E(e) });
      class en extends C {
        _parse(e) {
          let { ctx: t, status: n } = this._processInputParams(e),
            r = this._def;
          if (t.parsedType !== d.array)
            return (
              y(t, { code: p.invalid_type, expected: d.array, received: t.parsedType }),
              x
            );
          if (null !== r.exactLength) {
            let e = t.data.length > r.exactLength.value,
              i = t.data.length < r.exactLength.value;
            (e || i) &&
              (y(t, {
                code: e ? p.too_big : p.too_small,
                minimum: i ? r.exactLength.value : void 0,
                maximum: e ? r.exactLength.value : void 0,
                type: 'array',
                inclusive: !0,
                exact: !0,
                message: r.exactLength.message,
              }),
              n.dirty());
          }
          if (
            (null !== r.minLength &&
              t.data.length < r.minLength.value &&
              (y(t, {
                code: p.too_small,
                minimum: r.minLength.value,
                type: 'array',
                inclusive: !0,
                exact: !1,
                message: r.minLength.message,
              }),
              n.dirty()),
            null !== r.maxLength &&
              t.data.length > r.maxLength.value &&
              (y(t, {
                code: p.too_big,
                maximum: r.maxLength.value,
                type: 'array',
                inclusive: !0,
                exact: !1,
                message: r.maxLength.message,
              }),
              n.dirty()),
            t.common.async)
          )
            return Promise.all(
              [...t.data].map((e, n) => r.type._parseAsync(new _(t, e, t.path, n))),
            ).then((e) => v.mergeArray(n, e));
          let i = [...t.data].map((e, n) => r.type._parseSync(new _(t, e, t.path, n)));
          return v.mergeArray(n, i);
        }
        get element() {
          return this._def.type;
        }
        min(e, t) {
          return new en({
            ...this._def,
            minLength: { value: e, message: a.toString(t) },
          });
        }
        max(e, t) {
          return new en({
            ...this._def,
            maxLength: { value: e, message: a.toString(t) },
          });
        }
        length(e, t) {
          return new en({
            ...this._def,
            exactLength: { value: e, message: a.toString(t) },
          });
        }
        nonempty(e) {
          return this.min(1, e);
        }
      }
      en.create = (e, t) =>
        new en({
          type: e,
          minLength: null,
          maxLength: null,
          exactLength: null,
          typeName: o.ZodArray,
          ...E(t),
        });
      class er extends C {
        constructor() {
          (super(...arguments),
            (this._cached = null),
            (this.nonstrict = this.passthrough),
            (this.augment = this.extend));
        }
        _getCached() {
          if (null !== this._cached) return this._cached;
          let e = this._def.shape(),
            t = r.objectKeys(e);
          return ((this._cached = { shape: e, keys: t }), this._cached);
        }
        _parse(e) {
          if (this._getType(e) !== d.object) {
            let t = this._getOrReturnCtx(e);
            return (
              y(t, { code: p.invalid_type, expected: d.object, received: t.parsedType }),
              x
            );
          }
          let { status: t, ctx: n } = this._processInputParams(e),
            { shape: r, keys: i } = this._getCached(),
            a = [];
          if (!(this._def.catchall instanceof ee && 'strip' === this._def.unknownKeys))
            for (let e in n.data) i.includes(e) || a.push(e);
          let o = [];
          for (let e of i) {
            let t = r[e],
              i = n.data[e];
            o.push({
              key: { status: 'valid', value: e },
              value: t._parse(new _(n, i, n.path, e)),
              alwaysSet: e in n.data,
            });
          }
          if (this._def.catchall instanceof ee) {
            let e = this._def.unknownKeys;
            if ('passthrough' === e)
              for (let e of a)
                o.push({
                  key: { status: 'valid', value: e },
                  value: { status: 'valid', value: n.data[e] },
                });
            else if ('strict' === e)
              a.length > 0 && (y(n, { code: p.unrecognized_keys, keys: a }), t.dirty());
            else if ('strip' === e);
            else throw Error('Internal ZodObject error: invalid unknownKeys value.');
          } else {
            let e = this._def.catchall;
            for (let t of a) {
              let r = n.data[t];
              o.push({
                key: { status: 'valid', value: t },
                value: e._parse(new _(n, r, n.path, t)),
                alwaysSet: t in n.data,
              });
            }
          }
          return n.common.async
            ? Promise.resolve()
                .then(async () => {
                  let e = [];
                  for (let t of o) {
                    let n = await t.key,
                      r = await t.value;
                    e.push({ key: n, value: r, alwaysSet: t.alwaysSet });
                  }
                  return e;
                })
                .then((e) => v.mergeObjectSync(t, e))
            : v.mergeObjectSync(t, o);
        }
        get shape() {
          return this._def.shape();
        }
        strict(e) {
          return (
            a.errToObj,
            new er({
              ...this._def,
              unknownKeys: 'strict',
              ...(void 0 !== e
                ? {
                    errorMap: (t, n) => {
                      let r = this._def.errorMap?.(t, n).message ?? n.defaultError;
                      return 'unrecognized_keys' === t.code
                        ? { message: a.errToObj(e).message ?? r }
                        : { message: r };
                    },
                  }
                : {}),
            })
          );
        }
        strip() {
          return new er({ ...this._def, unknownKeys: 'strip' });
        }
        passthrough() {
          return new er({ ...this._def, unknownKeys: 'passthrough' });
        }
        extend(e) {
          return new er({ ...this._def, shape: () => ({ ...this._def.shape(), ...e }) });
        }
        merge(e) {
          return new er({
            unknownKeys: e._def.unknownKeys,
            catchall: e._def.catchall,
            shape: () => ({ ...this._def.shape(), ...e._def.shape() }),
            typeName: o.ZodObject,
          });
        }
        setKey(e, t) {
          return this.augment({ [e]: t });
        }
        catchall(e) {
          return new er({ ...this._def, catchall: e });
        }
        pick(e) {
          let t = {};
          for (let n of r.objectKeys(e)) e[n] && this.shape[n] && (t[n] = this.shape[n]);
          return new er({ ...this._def, shape: () => t });
        }
        omit(e) {
          let t = {};
          for (let n of r.objectKeys(this.shape)) e[n] || (t[n] = this.shape[n]);
          return new er({ ...this._def, shape: () => t });
        }
        deepPartial() {
          return (function e(t) {
            if (t instanceof er) {
              let n = {};
              for (let r in t.shape) {
                let i = t.shape[r];
                n[r] = eb.create(e(i));
              }
              return new er({ ...t._def, shape: () => n });
            }
            if (t instanceof en) return new en({ ...t._def, type: e(t.element) });
            if (t instanceof eb) return eb.create(e(t.unwrap()));
            if (t instanceof ek) return ek.create(e(t.unwrap()));
            if (t instanceof es) return es.create(t.items.map((t) => e(t)));
            else return t;
          })(this);
        }
        partial(e) {
          let t = {};
          for (let n of r.objectKeys(this.shape)) {
            let r = this.shape[n];
            e && !e[n] ? (t[n] = r) : (t[n] = r.optional());
          }
          return new er({ ...this._def, shape: () => t });
        }
        required(e) {
          let t = {};
          for (let n of r.objectKeys(this.shape))
            if (e && !e[n]) t[n] = this.shape[n];
            else {
              let e = this.shape[n];
              for (; e instanceof eb; ) e = e._def.innerType;
              t[n] = e;
            }
          return new er({ ...this._def, shape: () => t });
        }
        keyof() {
          return em(r.objectKeys(this.shape));
        }
      }
      ((er.create = (e, t) =>
        new er({
          shape: () => e,
          unknownKeys: 'strip',
          catchall: ee.create(),
          typeName: o.ZodObject,
          ...E(t),
        })),
        (er.strictCreate = (e, t) =>
          new er({
            shape: () => e,
            unknownKeys: 'strict',
            catchall: ee.create(),
            typeName: o.ZodObject,
            ...E(t),
          })),
        (er.lazycreate = (e, t) =>
          new er({
            shape: e,
            unknownKeys: 'strip',
            catchall: ee.create(),
            typeName: o.ZodObject,
            ...E(t),
          })));
      class ei extends C {
        _parse(e) {
          let { ctx: t } = this._processInputParams(e),
            n = this._def.options;
          if (t.common.async)
            return Promise.all(
              n.map(async (e) => {
                let n = { ...t, common: { ...t.common, issues: [] }, parent: null };
                return {
                  result: await e._parseAsync({ data: t.data, path: t.path, parent: n }),
                  ctx: n,
                };
              }),
            ).then(function (e) {
              for (let t of e) if ('valid' === t.result.status) return t.result;
              for (let n of e)
                if ('dirty' === n.result.status)
                  return (t.common.issues.push(...n.ctx.common.issues), n.result);
              let n = e.map((e) => new h(e.ctx.common.issues));
              return (y(t, { code: p.invalid_union, unionErrors: n }), x);
            });
          {
            let e,
              r = [];
            for (let i of n) {
              let n = { ...t, common: { ...t.common, issues: [] }, parent: null },
                a = i._parseSync({ data: t.data, path: t.path, parent: n });
              if ('valid' === a.status) return a;
              ('dirty' !== a.status || e || (e = { result: a, ctx: n }),
                n.common.issues.length && r.push(n.common.issues));
            }
            if (e) return (t.common.issues.push(...e.ctx.common.issues), e.result);
            let i = r.map((e) => new h(e));
            return (y(t, { code: p.invalid_union, unionErrors: i }), x);
          }
        }
        get options() {
          return this._def.options;
        }
      }
      ei.create = (e, t) => new ei({ options: e, typeName: o.ZodUnion, ...E(t) });
      let ea = (e) => {
        if (e instanceof ep) return ea(e.schema);
        if (e instanceof ex) return ea(e.innerType());
        if (e instanceof eh) return [e.value];
        if (e instanceof eg) return e.options;
        if (e instanceof ey) return r.objectValues(e.enum);
        else if (e instanceof ew) return ea(e._def.innerType);
        else if (e instanceof X) return [void 0];
        else if (e instanceof G) return [null];
        else if (e instanceof eb) return [void 0, ...ea(e.unwrap())];
        else if (e instanceof ek) return [null, ...ea(e.unwrap())];
        else if (e instanceof eE) return ea(e.unwrap());
        else if (e instanceof eT) return ea(e.unwrap());
        else if (e instanceof e_) return ea(e._def.innerType);
        else return [];
      };
      class eo extends C {
        _parse(e) {
          let { ctx: t } = this._processInputParams(e);
          if (t.parsedType !== d.object)
            return (
              y(t, { code: p.invalid_type, expected: d.object, received: t.parsedType }),
              x
            );
          let n = this.discriminator,
            r = t.data[n],
            i = this.optionsMap.get(r);
          return i
            ? t.common.async
              ? i._parseAsync({ data: t.data, path: t.path, parent: t })
              : i._parseSync({ data: t.data, path: t.path, parent: t })
            : (y(t, {
                code: p.invalid_union_discriminator,
                options: Array.from(this.optionsMap.keys()),
                path: [n],
              }),
              x);
        }
        get discriminator() {
          return this._def.discriminator;
        }
        get options() {
          return this._def.options;
        }
        get optionsMap() {
          return this._def.optionsMap;
        }
        static create(e, t, n) {
          let r = new Map();
          for (let n of t) {
            let t = ea(n.shape[e]);
            if (!t.length)
              throw Error(
                `A discriminator value for key \`${e}\` could not be extracted from all schema options`,
              );
            for (let i of t) {
              if (r.has(i))
                throw Error(
                  `Discriminator property ${String(e)} has duplicate value ${String(i)}`,
                );
              r.set(i, n);
            }
          }
          return new eo({
            typeName: o.ZodDiscriminatedUnion,
            discriminator: e,
            options: t,
            optionsMap: r,
            ...E(n),
          });
        }
      }
      class el extends C {
        _parse(e) {
          let { status: t, ctx: n } = this._processInputParams(e),
            i = (e, i) => {
              if ('aborted' === e.status || 'aborted' === i.status) return x;
              let a = (function e(t, n) {
                let i = f(t),
                  a = f(n);
                if (t === n) return { valid: !0, data: t };
                if (i === d.object && a === d.object) {
                  let i = r.objectKeys(n),
                    a = r.objectKeys(t).filter((e) => -1 !== i.indexOf(e)),
                    o = { ...t, ...n };
                  for (let r of a) {
                    let i = e(t[r], n[r]);
                    if (!i.valid) return { valid: !1 };
                    o[r] = i.data;
                  }
                  return { valid: !0, data: o };
                }
                if (i === d.array && a === d.array) {
                  if (t.length !== n.length) return { valid: !1 };
                  let r = [];
                  for (let i = 0; i < t.length; i++) {
                    let a = e(t[i], n[i]);
                    if (!a.valid) return { valid: !1 };
                    r.push(a.data);
                  }
                  return { valid: !0, data: r };
                }
                if (i === d.date && a === d.date && +t == +n)
                  return { valid: !0, data: t };
                return { valid: !1 };
              })(e.value, i.value);
              return a.valid
                ? (('dirty' === e.status || 'dirty' === i.status) && t.dirty(),
                  { status: t.value, value: a.data })
                : (y(n, { code: p.invalid_intersection_types }), x);
            };
          return n.common.async
            ? Promise.all([
                this._def.left._parseAsync({ data: n.data, path: n.path, parent: n }),
                this._def.right._parseAsync({ data: n.data, path: n.path, parent: n }),
              ]).then(([e, t]) => i(e, t))
            : i(
                this._def.left._parseSync({ data: n.data, path: n.path, parent: n }),
                this._def.right._parseSync({ data: n.data, path: n.path, parent: n }),
              );
        }
      }
      el.create = (e, t, n) =>
        new el({ left: e, right: t, typeName: o.ZodIntersection, ...E(n) });
      class es extends C {
        _parse(e) {
          let { status: t, ctx: n } = this._processInputParams(e);
          if (n.parsedType !== d.array)
            return (
              y(n, { code: p.invalid_type, expected: d.array, received: n.parsedType }),
              x
            );
          if (n.data.length < this._def.items.length)
            return (
              y(n, {
                code: p.too_small,
                minimum: this._def.items.length,
                inclusive: !0,
                exact: !1,
                type: 'array',
              }),
              x
            );
          !this._def.rest &&
            n.data.length > this._def.items.length &&
            (y(n, {
              code: p.too_big,
              maximum: this._def.items.length,
              inclusive: !0,
              exact: !1,
              type: 'array',
            }),
            t.dirty());
          let r = [...n.data]
            .map((e, t) => {
              let r = this._def.items[t] || this._def.rest;
              return r ? r._parse(new _(n, e, n.path, t)) : null;
            })
            .filter((e) => !!e);
          return n.common.async
            ? Promise.all(r).then((e) => v.mergeArray(t, e))
            : v.mergeArray(t, r);
        }
        get items() {
          return this._def.items;
        }
        rest(e) {
          return new es({ ...this._def, rest: e });
        }
      }
      es.create = (e, t) => {
        if (!Array.isArray(e))
          throw Error('You must pass an array of schemas to z.tuple([ ... ])');
        return new es({ items: e, typeName: o.ZodTuple, rest: null, ...E(t) });
      };
      class eu extends C {
        get keySchema() {
          return this._def.keyType;
        }
        get valueSchema() {
          return this._def.valueType;
        }
        _parse(e) {
          let { status: t, ctx: n } = this._processInputParams(e);
          if (n.parsedType !== d.object)
            return (
              y(n, { code: p.invalid_type, expected: d.object, received: n.parsedType }),
              x
            );
          let r = [],
            i = this._def.keyType,
            a = this._def.valueType;
          for (let e in n.data)
            r.push({
              key: i._parse(new _(n, e, n.path, e)),
              value: a._parse(new _(n, n.data[e], n.path, e)),
              alwaysSet: e in n.data,
            });
          return n.common.async ? v.mergeObjectAsync(t, r) : v.mergeObjectSync(t, r);
        }
        get element() {
          return this._def.valueType;
        }
        static create(e, t, n) {
          return new eu(
            t instanceof C
              ? { keyType: e, valueType: t, typeName: o.ZodRecord, ...E(n) }
              : { keyType: V.create(), valueType: e, typeName: o.ZodRecord, ...E(t) },
          );
        }
      }
      class ec extends C {
        get keySchema() {
          return this._def.keyType;
        }
        get valueSchema() {
          return this._def.valueType;
        }
        _parse(e) {
          let { status: t, ctx: n } = this._processInputParams(e);
          if (n.parsedType !== d.map)
            return (
              y(n, { code: p.invalid_type, expected: d.map, received: n.parsedType }),
              x
            );
          let r = this._def.keyType,
            i = this._def.valueType,
            a = [...n.data.entries()].map(([e, t], a) => ({
              key: r._parse(new _(n, e, n.path, [a, 'key'])),
              value: i._parse(new _(n, t, n.path, [a, 'value'])),
            }));
          if (n.common.async) {
            let e = new Map();
            return Promise.resolve().then(async () => {
              for (let n of a) {
                let r = await n.key,
                  i = await n.value;
                if ('aborted' === r.status || 'aborted' === i.status) return x;
                (('dirty' === r.status || 'dirty' === i.status) && t.dirty(),
                  e.set(r.value, i.value));
              }
              return { status: t.value, value: e };
            });
          }
          {
            let e = new Map();
            for (let n of a) {
              let r = n.key,
                i = n.value;
              if ('aborted' === r.status || 'aborted' === i.status) return x;
              (('dirty' === r.status || 'dirty' === i.status) && t.dirty(),
                e.set(r.value, i.value));
            }
            return { status: t.value, value: e };
          }
        }
      }
      ec.create = (e, t, n) =>
        new ec({ valueType: t, keyType: e, typeName: o.ZodMap, ...E(n) });
      class ed extends C {
        _parse(e) {
          let { status: t, ctx: n } = this._processInputParams(e);
          if (n.parsedType !== d.set)
            return (
              y(n, { code: p.invalid_type, expected: d.set, received: n.parsedType }),
              x
            );
          let r = this._def;
          (null !== r.minSize &&
            n.data.size < r.minSize.value &&
            (y(n, {
              code: p.too_small,
              minimum: r.minSize.value,
              type: 'set',
              inclusive: !0,
              exact: !1,
              message: r.minSize.message,
            }),
            t.dirty()),
            null !== r.maxSize &&
              n.data.size > r.maxSize.value &&
              (y(n, {
                code: p.too_big,
                maximum: r.maxSize.value,
                type: 'set',
                inclusive: !0,
                exact: !1,
                message: r.maxSize.message,
              }),
              t.dirty()));
          let i = this._def.valueType;
          function a(e) {
            let n = new Set();
            for (let r of e) {
              if ('aborted' === r.status) return x;
              ('dirty' === r.status && t.dirty(), n.add(r.value));
            }
            return { status: t.value, value: n };
          }
          let o = [...n.data.values()].map((e, t) => i._parse(new _(n, e, n.path, t)));
          return n.common.async ? Promise.all(o).then((e) => a(e)) : a(o);
        }
        min(e, t) {
          return new ed({ ...this._def, minSize: { value: e, message: a.toString(t) } });
        }
        max(e, t) {
          return new ed({ ...this._def, maxSize: { value: e, message: a.toString(t) } });
        }
        size(e, t) {
          return this.min(e, t).max(e, t);
        }
        nonempty(e) {
          return this.min(1, e);
        }
      }
      ed.create = (e, t) =>
        new ed({
          valueType: e,
          minSize: null,
          maxSize: null,
          typeName: o.ZodSet,
          ...E(t),
        });
      class ef extends C {
        constructor() {
          (super(...arguments), (this.validate = this.implement));
        }
        _parse(e) {
          let { ctx: t } = this._processInputParams(e);
          if (t.parsedType !== d.function)
            return (
              y(t, {
                code: p.invalid_type,
                expected: d.function,
                received: t.parsedType,
              }),
              x
            );
          function n(e, n) {
            return g({
              data: e,
              path: t.path,
              errorMaps: [t.common.contextualErrorMap, t.schemaErrorMap, m, m].filter(
                (e) => !!e,
              ),
              issueData: { code: p.invalid_arguments, argumentsError: n },
            });
          }
          function r(e, n) {
            return g({
              data: e,
              path: t.path,
              errorMaps: [t.common.contextualErrorMap, t.schemaErrorMap, m, m].filter(
                (e) => !!e,
              ),
              issueData: { code: p.invalid_return_type, returnTypeError: n },
            });
          }
          let i = { errorMap: t.common.contextualErrorMap },
            a = t.data;
          if (this._def.returns instanceof ev) {
            let e = this;
            return k(async function (...t) {
              let o = new h([]),
                l = await e._def.args.parseAsync(t, i).catch((e) => {
                  throw (o.addIssue(n(t, e)), o);
                }),
                s = await Reflect.apply(a, this, l);
              return await e._def.returns._def.type.parseAsync(s, i).catch((e) => {
                throw (o.addIssue(r(s, e)), o);
              });
            });
          }
          {
            let e = this;
            return k(function (...t) {
              let o = e._def.args.safeParse(t, i);
              if (!o.success) throw new h([n(t, o.error)]);
              let l = Reflect.apply(a, this, o.data),
                s = e._def.returns.safeParse(l, i);
              if (!s.success) throw new h([r(l, s.error)]);
              return s.data;
            });
          }
        }
        parameters() {
          return this._def.args;
        }
        returnType() {
          return this._def.returns;
        }
        args(...e) {
          return new ef({ ...this._def, args: es.create(e).rest(Q.create()) });
        }
        returns(e) {
          return new ef({ ...this._def, returns: e });
        }
        implement(e) {
          return this.parse(e);
        }
        strictImplement(e) {
          return this.parse(e);
        }
        static create(e, t, n) {
          return new ef({
            args: e || es.create([]).rest(Q.create()),
            returns: t || Q.create(),
            typeName: o.ZodFunction,
            ...E(n),
          });
        }
      }
      class ep extends C {
        get schema() {
          return this._def.getter();
        }
        _parse(e) {
          let { ctx: t } = this._processInputParams(e);
          return this._def.getter()._parse({ data: t.data, path: t.path, parent: t });
        }
      }
      ep.create = (e, t) => new ep({ getter: e, typeName: o.ZodLazy, ...E(t) });
      class eh extends C {
        _parse(e) {
          if (e.data !== this._def.value) {
            let t = this._getOrReturnCtx(e);
            return (
              y(t, {
                received: t.data,
                code: p.invalid_literal,
                expected: this._def.value,
              }),
              x
            );
          }
          return { status: 'valid', value: e.data };
        }
        get value() {
          return this._def.value;
        }
      }
      function em(e, t) {
        return new eg({ values: e, typeName: o.ZodEnum, ...E(t) });
      }
      eh.create = (e, t) => new eh({ value: e, typeName: o.ZodLiteral, ...E(t) });
      class eg extends C {
        _parse(e) {
          if ('string' != typeof e.data) {
            let t = this._getOrReturnCtx(e),
              n = this._def.values;
            return (
              y(t, {
                expected: r.joinValues(n),
                received: t.parsedType,
                code: p.invalid_type,
              }),
              x
            );
          }
          if (
            (this._cache || (this._cache = new Set(this._def.values)),
            !this._cache.has(e.data))
          ) {
            let t = this._getOrReturnCtx(e),
              n = this._def.values;
            return (
              y(t, { received: t.data, code: p.invalid_enum_value, options: n }),
              x
            );
          }
          return k(e.data);
        }
        get options() {
          return this._def.values;
        }
        get enum() {
          let e = {};
          for (let t of this._def.values) e[t] = t;
          return e;
        }
        get Values() {
          let e = {};
          for (let t of this._def.values) e[t] = t;
          return e;
        }
        get Enum() {
          let e = {};
          for (let t of this._def.values) e[t] = t;
          return e;
        }
        extract(e, t = this._def) {
          return eg.create(e, { ...this._def, ...t });
        }
        exclude(e, t = this._def) {
          return eg.create(
            this.options.filter((t) => !e.includes(t)),
            { ...this._def, ...t },
          );
        }
      }
      eg.create = em;
      class ey extends C {
        _parse(e) {
          let t = r.getValidEnumValues(this._def.values),
            n = this._getOrReturnCtx(e);
          if (n.parsedType !== d.string && n.parsedType !== d.number) {
            let e = r.objectValues(t);
            return (
              y(n, {
                expected: r.joinValues(e),
                received: n.parsedType,
                code: p.invalid_type,
              }),
              x
            );
          }
          if (
            (this._cache ||
              (this._cache = new Set(r.getValidEnumValues(this._def.values))),
            !this._cache.has(e.data))
          ) {
            let e = r.objectValues(t);
            return (
              y(n, { received: n.data, code: p.invalid_enum_value, options: e }),
              x
            );
          }
          return k(e.data);
        }
        get enum() {
          return this._def.values;
        }
      }
      ey.create = (e, t) => new ey({ values: e, typeName: o.ZodNativeEnum, ...E(t) });
      class ev extends C {
        unwrap() {
          return this._def.type;
        }
        _parse(e) {
          let { ctx: t } = this._processInputParams(e);
          return t.parsedType !== d.promise && !1 === t.common.async
            ? (y(t, {
                code: p.invalid_type,
                expected: d.promise,
                received: t.parsedType,
              }),
              x)
            : k(
                (t.parsedType === d.promise ? t.data : Promise.resolve(t.data)).then(
                  (e) =>
                    this._def.type.parseAsync(e, {
                      path: t.path,
                      errorMap: t.common.contextualErrorMap,
                    }),
                ),
              );
        }
      }
      ev.create = (e, t) => new ev({ type: e, typeName: o.ZodPromise, ...E(t) });
      class ex extends C {
        innerType() {
          return this._def.schema;
        }
        sourceType() {
          return this._def.schema._def.typeName === o.ZodEffects
            ? this._def.schema.sourceType()
            : this._def.schema;
        }
        _parse(e) {
          let { status: t, ctx: n } = this._processInputParams(e),
            i = this._def.effect || null,
            a = {
              addIssue: (e) => {
                (y(n, e), e.fatal ? t.abort() : t.dirty());
              },
              get path() {
                return n.path;
              },
            };
          if (((a.addIssue = a.addIssue.bind(a)), 'preprocess' === i.type)) {
            let e = i.transform(n.data, a);
            if (n.common.async)
              return Promise.resolve(e).then(async (e) => {
                if ('aborted' === t.value) return x;
                let r = await this._def.schema._parseAsync({
                  data: e,
                  path: n.path,
                  parent: n,
                });
                return 'aborted' === r.status
                  ? x
                  : 'dirty' === r.status || 'dirty' === t.value
                    ? b(r.value)
                    : r;
              });
            {
              if ('aborted' === t.value) return x;
              let r = this._def.schema._parseSync({ data: e, path: n.path, parent: n });
              return 'aborted' === r.status
                ? x
                : 'dirty' === r.status || 'dirty' === t.value
                  ? b(r.value)
                  : r;
            }
          }
          if ('refinement' === i.type) {
            let e = (e) => {
              let t = i.refinement(e, a);
              if (n.common.async) return Promise.resolve(t);
              if (t instanceof Promise)
                throw Error(
                  'Async refinement encountered during synchronous parse operation. Use .parseAsync instead.',
                );
              return e;
            };
            if (!1 !== n.common.async)
              return this._def.schema
                ._parseAsync({ data: n.data, path: n.path, parent: n })
                .then((n) =>
                  'aborted' === n.status
                    ? x
                    : ('dirty' === n.status && t.dirty(),
                      e(n.value).then(() => ({ status: t.value, value: n.value }))),
                );
            {
              let r = this._def.schema._parseSync({
                data: n.data,
                path: n.path,
                parent: n,
              });
              return 'aborted' === r.status
                ? x
                : ('dirty' === r.status && t.dirty(),
                  e(r.value),
                  { status: t.value, value: r.value });
            }
          }
          if ('transform' === i.type)
            if (!1 !== n.common.async)
              return this._def.schema
                ._parseAsync({ data: n.data, path: n.path, parent: n })
                .then((e) =>
                  'valid' !== e.status
                    ? x
                    : Promise.resolve(i.transform(e.value, a)).then((e) => ({
                        status: t.value,
                        value: e,
                      })),
                );
            else {
              let e = this._def.schema._parseSync({
                data: n.data,
                path: n.path,
                parent: n,
              });
              if ('valid' !== e.status) return x;
              let r = i.transform(e.value, a);
              if (r instanceof Promise)
                throw Error(
                  'Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.',
                );
              return { status: t.value, value: r };
            }
          r.assertNever(i);
        }
      }
      ((ex.create = (e, t, n) =>
        new ex({ schema: e, typeName: o.ZodEffects, effect: t, ...E(n) })),
        (ex.createWithPreprocess = (e, t, n) =>
          new ex({
            schema: t,
            effect: { type: 'preprocess', transform: e },
            typeName: o.ZodEffects,
            ...E(n),
          })));
      class eb extends C {
        _parse(e) {
          return this._getType(e) === d.undefined
            ? k(void 0)
            : this._def.innerType._parse(e);
        }
        unwrap() {
          return this._def.innerType;
        }
      }
      eb.create = (e, t) => new eb({ innerType: e, typeName: o.ZodOptional, ...E(t) });
      class ek extends C {
        _parse(e) {
          return this._getType(e) === d.null ? k(null) : this._def.innerType._parse(e);
        }
        unwrap() {
          return this._def.innerType;
        }
      }
      ek.create = (e, t) => new ek({ innerType: e, typeName: o.ZodNullable, ...E(t) });
      class ew extends C {
        _parse(e) {
          let { ctx: t } = this._processInputParams(e),
            n = t.data;
          return (
            t.parsedType === d.undefined && (n = this._def.defaultValue()),
            this._def.innerType._parse({ data: n, path: t.path, parent: t })
          );
        }
        removeDefault() {
          return this._def.innerType;
        }
      }
      ew.create = (e, t) =>
        new ew({
          innerType: e,
          typeName: o.ZodDefault,
          defaultValue: 'function' == typeof t.default ? t.default : () => t.default,
          ...E(t),
        });
      class e_ extends C {
        _parse(e) {
          let { ctx: t } = this._processInputParams(e),
            n = { ...t, common: { ...t.common, issues: [] } },
            r = this._def.innerType._parse({
              data: n.data,
              path: n.path,
              parent: { ...n },
            });
          return w(r)
            ? r.then((e) => ({
                status: 'valid',
                value:
                  'valid' === e.status
                    ? e.value
                    : this._def.catchValue({
                        get error() {
                          return new h(n.common.issues);
                        },
                        input: n.data,
                      }),
              }))
            : {
                status: 'valid',
                value:
                  'valid' === r.status
                    ? r.value
                    : this._def.catchValue({
                        get error() {
                          return new h(n.common.issues);
                        },
                        input: n.data,
                      }),
              };
        }
        removeCatch() {
          return this._def.innerType;
        }
      }
      e_.create = (e, t) =>
        new e_({
          innerType: e,
          typeName: o.ZodCatch,
          catchValue: 'function' == typeof t.catch ? t.catch : () => t.catch,
          ...E(t),
        });
      class eS extends C {
        _parse(e) {
          if (this._getType(e) !== d.nan) {
            let t = this._getOrReturnCtx(e);
            return (
              y(t, { code: p.invalid_type, expected: d.nan, received: t.parsedType }),
              x
            );
          }
          return { status: 'valid', value: e.data };
        }
      }
      ((eS.create = (e) => new eS({ typeName: o.ZodNaN, ...E(e) })), Symbol('zod_brand'));
      class eE extends C {
        _parse(e) {
          let { ctx: t } = this._processInputParams(e),
            n = t.data;
          return this._def.type._parse({ data: n, path: t.path, parent: t });
        }
        unwrap() {
          return this._def.type;
        }
      }
      class eC extends C {
        _parse(e) {
          let { status: t, ctx: n } = this._processInputParams(e);
          if (n.common.async)
            return (async () => {
              let e = await this._def.in._parseAsync({
                data: n.data,
                path: n.path,
                parent: n,
              });
              return 'aborted' === e.status
                ? x
                : 'dirty' === e.status
                  ? (t.dirty(), b(e.value))
                  : this._def.out._parseAsync({ data: e.value, path: n.path, parent: n });
            })();
          {
            let e = this._def.in._parseSync({ data: n.data, path: n.path, parent: n });
            return 'aborted' === e.status
              ? x
              : 'dirty' === e.status
                ? (t.dirty(), { status: 'dirty', value: e.value })
                : this._def.out._parseSync({ data: e.value, path: n.path, parent: n });
          }
        }
        static create(e, t) {
          return new eC({ in: e, out: t, typeName: o.ZodPipeline });
        }
      }
      class eT extends C {
        _parse(e) {
          let t = this._def.innerType._parse(e),
            n = (e) => ('valid' === e.status && (e.value = Object.freeze(e.value)), e);
          return w(t) ? t.then((e) => n(e)) : n(t);
        }
        unwrap() {
          return this._def.innerType;
        }
      }
      function eA(e, t) {
        let n = 'function' == typeof e ? e(t) : 'string' == typeof e ? { message: e } : e;
        return 'string' == typeof n ? { message: n } : n;
      }
      function eP(e, t = {}, n) {
        return e
          ? J.create().superRefine((r, i) => {
              let a = e(r);
              if (a instanceof Promise)
                return a.then((e) => {
                  if (!e) {
                    let e = eA(t, r),
                      a = e.fatal ?? n ?? !0;
                    i.addIssue({ code: 'custom', ...e, fatal: a });
                  }
                });
              if (!a) {
                let e = eA(t, r),
                  a = e.fatal ?? n ?? !0;
                i.addIssue({ code: 'custom', ...e, fatal: a });
              }
            })
          : J.create();
      }
      ((eT.create = (e, t) => new eT({ innerType: e, typeName: o.ZodReadonly, ...E(t) })),
        er.lazycreate,
        ((u = o || (o = {})).ZodString = 'ZodString'),
        (u.ZodNumber = 'ZodNumber'),
        (u.ZodNaN = 'ZodNaN'),
        (u.ZodBigInt = 'ZodBigInt'),
        (u.ZodBoolean = 'ZodBoolean'),
        (u.ZodDate = 'ZodDate'),
        (u.ZodSymbol = 'ZodSymbol'),
        (u.ZodUndefined = 'ZodUndefined'),
        (u.ZodNull = 'ZodNull'),
        (u.ZodAny = 'ZodAny'),
        (u.ZodUnknown = 'ZodUnknown'),
        (u.ZodNever = 'ZodNever'),
        (u.ZodVoid = 'ZodVoid'),
        (u.ZodArray = 'ZodArray'),
        (u.ZodObject = 'ZodObject'),
        (u.ZodUnion = 'ZodUnion'),
        (u.ZodDiscriminatedUnion = 'ZodDiscriminatedUnion'),
        (u.ZodIntersection = 'ZodIntersection'),
        (u.ZodTuple = 'ZodTuple'),
        (u.ZodRecord = 'ZodRecord'),
        (u.ZodMap = 'ZodMap'),
        (u.ZodSet = 'ZodSet'),
        (u.ZodFunction = 'ZodFunction'),
        (u.ZodLazy = 'ZodLazy'),
        (u.ZodLiteral = 'ZodLiteral'),
        (u.ZodEnum = 'ZodEnum'),
        (u.ZodEffects = 'ZodEffects'),
        (u.ZodNativeEnum = 'ZodNativeEnum'),
        (u.ZodOptional = 'ZodOptional'),
        (u.ZodNullable = 'ZodNullable'),
        (u.ZodDefault = 'ZodDefault'),
        (u.ZodCatch = 'ZodCatch'),
        (u.ZodPromise = 'ZodPromise'),
        (u.ZodBranded = 'ZodBranded'),
        (u.ZodPipeline = 'ZodPipeline'),
        (u.ZodReadonly = 'ZodReadonly'));
      let eO = V.create,
        eN = H.create;
      (eS.create,
        W.create,
        q.create,
        K.create,
        Y.create,
        X.create,
        G.create,
        J.create,
        Q.create,
        ee.create,
        et.create);
      let eR = en.create,
        eI = er.create;
      (er.strictCreate,
        ei.create,
        eo.create,
        el.create,
        es.create,
        eu.create,
        ec.create,
        ed.create,
        ef.create,
        ep.create,
        eh.create,
        eg.create,
        ey.create,
        ev.create,
        ex.create,
        eb.create,
        ek.create,
        ex.createWithPreprocess,
        eC.create);
    },
    5528: (e, t, n) => {
      n.d(t, { s: () => o, t: () => a });
      var r = n(5541);
      function i(e, t) {
        if ('function' == typeof e) return e(t);
        null != e && (e.current = t);
      }
      function a(...e) {
        return (t) => {
          let n = !1,
            r = e.map((e) => {
              let r = i(e, t);
              return (n || 'function' != typeof r || (n = !0), r);
            });
          if (n)
            return () => {
              for (let t = 0; t < r.length; t++) {
                let n = r[t];
                'function' == typeof n ? n() : i(e[t], null);
              }
            };
        };
      }
      function o(...e) {
        return r.useCallback(a(...e), e);
      }
    },
    5648: (e, t, n) => {
      n.d(t, { TL: () => o });
      var r = n(5541),
        i = n(5528),
        a = n(4929);
      function o(e) {
        var t;
        let n,
          o =
            ((t = e),
            ((n = r.forwardRef((e, t) => {
              let { children: n, ...a } = e;
              if (r.isValidElement(n)) {
                var o;
                let e,
                  l,
                  s =
                    ((o = n),
                    (l =
                      (e = Object.getOwnPropertyDescriptor(o.props, 'ref')?.get) &&
                      'isReactWarning' in e &&
                      e.isReactWarning)
                      ? o.ref
                      : (l =
                            (e = Object.getOwnPropertyDescriptor(o, 'ref')?.get) &&
                            'isReactWarning' in e &&
                            e.isReactWarning)
                        ? o.props.ref
                        : o.props.ref || o.ref),
                  u = (function (e, t) {
                    let n = { ...t };
                    for (let r in t) {
                      let i = e[r],
                        a = t[r];
                      /^on[A-Z]/.test(r)
                        ? i && a
                          ? (n[r] = (...e) => {
                              let t = a(...e);
                              return (i(...e), t);
                            })
                          : i && (n[r] = i)
                        : 'style' === r
                          ? (n[r] = { ...i, ...a })
                          : 'className' === r &&
                            (n[r] = [i, a].filter(Boolean).join(' '));
                    }
                    return { ...e, ...n };
                  })(a, n.props);
                return (
                  n.type !== r.Fragment && (u.ref = t ? (0, i.t)(t, s) : s),
                  r.cloneElement(n, u)
                );
              }
              return r.Children.count(n) > 1 ? r.Children.only(null) : null;
            })).displayName = `${t}.SlotClone`),
            n),
          l = r.forwardRef((e, t) => {
            let { children: n, ...i } = e,
              l = r.Children.toArray(n),
              u = l.find(s);
            if (u) {
              let e = u.props.children,
                n = l.map((t) =>
                  t !== u
                    ? t
                    : r.Children.count(e) > 1
                      ? r.Children.only(null)
                      : r.isValidElement(e)
                        ? e.props.children
                        : null,
                );
              return (0, a.jsx)(o, {
                ...i,
                ref: t,
                children: r.isValidElement(e) ? r.cloneElement(e, void 0, n) : null,
              });
            }
            return (0, a.jsx)(o, { ...i, ref: t, children: n });
          });
        return ((l.displayName = `${e}.Slot`), l);
      }
      var l = Symbol('radix.slottable');
      function s(e) {
        return (
          r.isValidElement(e) &&
          'function' == typeof e.type &&
          '__radixId' in e.type &&
          e.type.__radixId === l
        );
      }
    },
    6344: (e, t, n) => {
      n.d(t, { A: () => r });
      let r = (0, n(4552).A)('bot', [
        ['path', { d: 'M12 8V4H8', key: 'hb8ula' }],
        ['rect', { width: '16', height: '12', x: '4', y: '8', rx: '2', key: 'enze0r' }],
        ['path', { d: 'M2 14h2', key: 'vft8re' }],
        ['path', { d: 'M20 14h2', key: '4cs60a' }],
        ['path', { d: 'M15 13v2', key: '1xurst' }],
        ['path', { d: 'M9 13v2', key: 'rq6x2g' }],
      ]);
    },
    6356: (e, t, n) => {
      n.d(t, { A: () => r });
      let r = (0, n(4552).A)('sun', [
        ['circle', { cx: '12', cy: '12', r: '4', key: '4exip2' }],
        ['path', { d: 'M12 2v2', key: 'tus03m' }],
        ['path', { d: 'M12 20v2', key: '1lh1kg' }],
        ['path', { d: 'm4.93 4.93 1.41 1.41', key: '149t6j' }],
        ['path', { d: 'm17.66 17.66 1.41 1.41', key: 'ptbguv' }],
        ['path', { d: 'M2 12h2', key: '1t8f8n' }],
        ['path', { d: 'M20 12h2', key: '1q8mjw' }],
        ['path', { d: 'm6.34 17.66-1.41 1.41', key: '1m8zz5' }],
        ['path', { d: 'm19.07 4.93-1.41 1.41', key: '1shlcs' }],
      ]);
    },
    7327: function (e, t, n) {
      var r =
        (this && this.__importDefault) ||
        function (e) {
          return e && e.__esModule ? e : { default: e };
        };
      (Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = function (e, t) {
          let n = null;
          if (!e || 'string' != typeof e) return n;
          let r = (0, i.default)(e),
            a = 'function' == typeof t;
          return (
            r.forEach((e) => {
              if ('declaration' !== e.type) return;
              let { property: r, value: i } = e;
              a ? t(r, i, e) : i && ((n = n || {})[r] = i);
            }),
            n
          );
        }));
      let i = r(n(4213));
    },
    7796: (e, t, n) => {
      n.d(t, { OK: () => K, bL: () => W, VM: () => w, lr: () => I, LM: () => q });
      var r = n(5541),
        i = n(206),
        a = n(9149),
        o = n(4226),
        l = n(5528),
        s = n(431),
        u = n(4929),
        c = r.createContext(void 0),
        d = n(8987),
        f = n(613),
        p = 'ScrollArea',
        [h, m] = (0, o.A)(p),
        [g, y] = h(p),
        v = r.forwardRef((e, t) => {
          let n,
            {
              __scopeScrollArea: a,
              type: o = 'hover',
              dir: s,
              scrollHideDelay: d = 600,
              ...f
            } = e,
            [p, h] = r.useState(null),
            [m, y] = r.useState(null),
            [v, x] = r.useState(null),
            [b, k] = r.useState(null),
            [w, _] = r.useState(null),
            [S, E] = r.useState(0),
            [C, T] = r.useState(0),
            [A, P] = r.useState(!1),
            [O, N] = r.useState(!1),
            R = (0, l.s)(t, (e) => h(e)),
            I = ((n = r.useContext(c)), s || n || 'ltr');
          return (0, u.jsx)(g, {
            scope: a,
            type: o,
            dir: I,
            scrollHideDelay: d,
            scrollArea: p,
            viewport: m,
            onViewportChange: y,
            content: v,
            onContentChange: x,
            scrollbarX: b,
            onScrollbarXChange: k,
            scrollbarXEnabled: A,
            onScrollbarXEnabledChange: P,
            scrollbarY: w,
            onScrollbarYChange: _,
            scrollbarYEnabled: O,
            onScrollbarYEnabledChange: N,
            onCornerWidthChange: E,
            onCornerHeightChange: T,
            children: (0, u.jsx)(i.sG.div, {
              dir: I,
              ...f,
              ref: R,
              style: {
                position: 'relative',
                '--radix-scroll-area-corner-width': S + 'px',
                '--radix-scroll-area-corner-height': C + 'px',
                ...e.style,
              },
            }),
          });
        });
      v.displayName = p;
      var x = 'ScrollAreaViewport',
        b = r.forwardRef((e, t) => {
          let { __scopeScrollArea: n, children: a, nonce: o, ...s } = e,
            c = y(x, n),
            d = r.useRef(null),
            f = (0, l.s)(t, d, c.onViewportChange);
          return (0, u.jsxs)(u.Fragment, {
            children: [
              (0, u.jsx)('style', {
                dangerouslySetInnerHTML: {
                  __html:
                    '[data-radix-scroll-area-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-scroll-area-viewport]::-webkit-scrollbar{display:none}',
                },
                nonce: o,
              }),
              (0, u.jsx)(i.sG.div, {
                'data-radix-scroll-area-viewport': '',
                ...s,
                ref: f,
                style: {
                  overflowX: c.scrollbarXEnabled ? 'scroll' : 'hidden',
                  overflowY: c.scrollbarYEnabled ? 'scroll' : 'hidden',
                  ...e.style,
                },
                children: (0, u.jsx)('div', {
                  ref: c.onContentChange,
                  style: { minWidth: '100%', display: 'table' },
                  children: a,
                }),
              }),
            ],
          });
        });
      b.displayName = x;
      var k = 'ScrollAreaScrollbar',
        w = r.forwardRef((e, t) => {
          let { forceMount: n, ...i } = e,
            a = y(k, e.__scopeScrollArea),
            { onScrollbarXEnabledChange: o, onScrollbarYEnabledChange: l } = a,
            s = 'horizontal' === e.orientation;
          return (
            r.useEffect(
              () => (
                s ? o(!0) : l(!0),
                () => {
                  s ? o(!1) : l(!1);
                }
              ),
              [s, o, l],
            ),
            'hover' === a.type
              ? (0, u.jsx)(_, { ...i, ref: t, forceMount: n })
              : 'scroll' === a.type
                ? (0, u.jsx)(S, { ...i, ref: t, forceMount: n })
                : 'auto' === a.type
                  ? (0, u.jsx)(E, { ...i, ref: t, forceMount: n })
                  : 'always' === a.type
                    ? (0, u.jsx)(C, { ...i, ref: t })
                    : null
          );
        });
      w.displayName = k;
      var _ = r.forwardRef((e, t) => {
          let { forceMount: n, ...i } = e,
            o = y(k, e.__scopeScrollArea),
            [l, s] = r.useState(!1);
          return (
            r.useEffect(() => {
              let e = o.scrollArea,
                t = 0;
              if (e) {
                let n = () => {
                    (window.clearTimeout(t), s(!0));
                  },
                  r = () => {
                    t = window.setTimeout(() => s(!1), o.scrollHideDelay);
                  };
                return (
                  e.addEventListener('pointerenter', n),
                  e.addEventListener('pointerleave', r),
                  () => {
                    (window.clearTimeout(t),
                      e.removeEventListener('pointerenter', n),
                      e.removeEventListener('pointerleave', r));
                  }
                );
              }
            }, [o.scrollArea, o.scrollHideDelay]),
            (0, u.jsx)(a.C, {
              present: n || l,
              children: (0, u.jsx)(E, {
                'data-state': l ? 'visible' : 'hidden',
                ...i,
                ref: t,
              }),
            })
          );
        }),
        S = r.forwardRef((e, t) => {
          var n;
          let { forceMount: i, ...o } = e,
            l = y(k, e.__scopeScrollArea),
            s = 'horizontal' === e.orientation,
            c = V(() => p('SCROLL_END'), 100),
            [d, p] =
              ((n = {
                hidden: { SCROLL: 'scrolling' },
                scrolling: { SCROLL_END: 'idle', POINTER_ENTER: 'interacting' },
                interacting: { SCROLL: 'interacting', POINTER_LEAVE: 'idle' },
                idle: {
                  HIDE: 'hidden',
                  SCROLL: 'scrolling',
                  POINTER_ENTER: 'interacting',
                },
              }),
              r.useReducer((e, t) => n[e][t] ?? e, 'hidden'));
          return (
            r.useEffect(() => {
              if ('idle' === d) {
                let e = window.setTimeout(() => p('HIDE'), l.scrollHideDelay);
                return () => window.clearTimeout(e);
              }
            }, [d, l.scrollHideDelay, p]),
            r.useEffect(() => {
              let e = l.viewport,
                t = s ? 'scrollLeft' : 'scrollTop';
              if (e) {
                let n = e[t],
                  r = () => {
                    let r = e[t];
                    (n !== r && (p('SCROLL'), c()), (n = r));
                  };
                return (
                  e.addEventListener('scroll', r),
                  () => e.removeEventListener('scroll', r)
                );
              }
            }, [l.viewport, s, p, c]),
            (0, u.jsx)(a.C, {
              present: i || 'hidden' !== d,
              children: (0, u.jsx)(C, {
                'data-state': 'hidden' === d ? 'hidden' : 'visible',
                ...o,
                ref: t,
                onPointerEnter: (0, f.mK)(e.onPointerEnter, () => p('POINTER_ENTER')),
                onPointerLeave: (0, f.mK)(e.onPointerLeave, () => p('POINTER_LEAVE')),
              }),
            })
          );
        }),
        E = r.forwardRef((e, t) => {
          let n = y(k, e.__scopeScrollArea),
            { forceMount: i, ...o } = e,
            [l, s] = r.useState(!1),
            c = 'horizontal' === e.orientation,
            d = V(() => {
              if (n.viewport) {
                let e = n.viewport.offsetWidth < n.viewport.scrollWidth,
                  t = n.viewport.offsetHeight < n.viewport.scrollHeight;
                s(c ? e : t);
              }
            }, 10);
          return (
            H(n.viewport, d),
            H(n.content, d),
            (0, u.jsx)(a.C, {
              present: i || l,
              children: (0, u.jsx)(C, {
                'data-state': l ? 'visible' : 'hidden',
                ...o,
                ref: t,
              }),
            })
          );
        }),
        C = r.forwardRef((e, t) => {
          let { orientation: n = 'vertical', ...i } = e,
            a = y(k, e.__scopeScrollArea),
            o = r.useRef(null),
            l = r.useRef(0),
            [s, c] = r.useState({
              content: 0,
              viewport: 0,
              scrollbar: { size: 0, paddingStart: 0, paddingEnd: 0 },
            }),
            d = F(s.viewport, s.content),
            f = {
              ...i,
              sizes: s,
              onSizesChange: c,
              hasThumb: !!(d > 0 && d < 1),
              onThumbChange: (e) => (o.current = e),
              onThumbPointerUp: () => (l.current = 0),
              onThumbPointerDown: (e) => (l.current = e),
            };
          function p(e, t) {
            return (function (e, t, n, r = 'ltr') {
              let i = Z(n),
                a = t || i / 2,
                o = n.scrollbar.paddingStart + a,
                l = n.scrollbar.size - n.scrollbar.paddingEnd - (i - a),
                s = n.content - n.viewport;
              return B([o, l], 'ltr' === r ? [0, s] : [-1 * s, 0])(e);
            })(e, l.current, s, t);
          }
          return 'horizontal' === n
            ? (0, u.jsx)(T, {
                ...f,
                ref: t,
                onThumbPositionChange: () => {
                  if (a.viewport && o.current) {
                    let e = U(a.viewport.scrollLeft, s, a.dir);
                    o.current.style.transform = `translate3d(${e}px, 0, 0)`;
                  }
                },
                onWheelScroll: (e) => {
                  a.viewport && (a.viewport.scrollLeft = e);
                },
                onDragScroll: (e) => {
                  a.viewport && (a.viewport.scrollLeft = p(e, a.dir));
                },
              })
            : 'vertical' === n
              ? (0, u.jsx)(A, {
                  ...f,
                  ref: t,
                  onThumbPositionChange: () => {
                    if (a.viewport && o.current) {
                      let e = U(a.viewport.scrollTop, s);
                      o.current.style.transform = `translate3d(0, ${e}px, 0)`;
                    }
                  },
                  onWheelScroll: (e) => {
                    a.viewport && (a.viewport.scrollTop = e);
                  },
                  onDragScroll: (e) => {
                    a.viewport && (a.viewport.scrollTop = p(e));
                  },
                })
              : null;
        }),
        T = r.forwardRef((e, t) => {
          let { sizes: n, onSizesChange: i, ...a } = e,
            o = y(k, e.__scopeScrollArea),
            [s, c] = r.useState(),
            d = r.useRef(null),
            f = (0, l.s)(t, d, o.onScrollbarXChange);
          return (
            r.useEffect(() => {
              d.current && c(getComputedStyle(d.current));
            }, [d]),
            (0, u.jsx)(N, {
              'data-orientation': 'horizontal',
              ...a,
              ref: f,
              sizes: n,
              style: {
                bottom: 0,
                left: 'rtl' === o.dir ? 'var(--radix-scroll-area-corner-width)' : 0,
                right: 'ltr' === o.dir ? 'var(--radix-scroll-area-corner-width)' : 0,
                '--radix-scroll-area-thumb-width': Z(n) + 'px',
                ...e.style,
              },
              onThumbPointerDown: (t) => e.onThumbPointerDown(t.x),
              onDragScroll: (t) => e.onDragScroll(t.x),
              onWheelScroll: (t, n) => {
                if (o.viewport) {
                  var r, i;
                  let a = o.viewport.scrollLeft + t.deltaX;
                  (e.onWheelScroll(a),
                    (r = a),
                    (i = n),
                    r > 0 && r < i && t.preventDefault());
                }
              },
              onResize: () => {
                d.current &&
                  o.viewport &&
                  s &&
                  i({
                    content: o.viewport.scrollWidth,
                    viewport: o.viewport.offsetWidth,
                    scrollbar: {
                      size: d.current.clientWidth,
                      paddingStart: z(s.paddingLeft),
                      paddingEnd: z(s.paddingRight),
                    },
                  });
              },
            })
          );
        }),
        A = r.forwardRef((e, t) => {
          let { sizes: n, onSizesChange: i, ...a } = e,
            o = y(k, e.__scopeScrollArea),
            [s, c] = r.useState(),
            d = r.useRef(null),
            f = (0, l.s)(t, d, o.onScrollbarYChange);
          return (
            r.useEffect(() => {
              d.current && c(getComputedStyle(d.current));
            }, [d]),
            (0, u.jsx)(N, {
              'data-orientation': 'vertical',
              ...a,
              ref: f,
              sizes: n,
              style: {
                top: 0,
                right: 'ltr' === o.dir ? 0 : void 0,
                left: 'rtl' === o.dir ? 0 : void 0,
                bottom: 'var(--radix-scroll-area-corner-height)',
                '--radix-scroll-area-thumb-height': Z(n) + 'px',
                ...e.style,
              },
              onThumbPointerDown: (t) => e.onThumbPointerDown(t.y),
              onDragScroll: (t) => e.onDragScroll(t.y),
              onWheelScroll: (t, n) => {
                if (o.viewport) {
                  var r, i;
                  let a = o.viewport.scrollTop + t.deltaY;
                  (e.onWheelScroll(a),
                    (r = a),
                    (i = n),
                    r > 0 && r < i && t.preventDefault());
                }
              },
              onResize: () => {
                d.current &&
                  o.viewport &&
                  s &&
                  i({
                    content: o.viewport.scrollHeight,
                    viewport: o.viewport.offsetHeight,
                    scrollbar: {
                      size: d.current.clientHeight,
                      paddingStart: z(s.paddingTop),
                      paddingEnd: z(s.paddingBottom),
                    },
                  });
              },
            })
          );
        }),
        [P, O] = h(k),
        N = r.forwardRef((e, t) => {
          let {
              __scopeScrollArea: n,
              sizes: a,
              hasThumb: o,
              onThumbChange: c,
              onThumbPointerUp: d,
              onThumbPointerDown: p,
              onThumbPositionChange: h,
              onDragScroll: m,
              onWheelScroll: g,
              onResize: v,
              ...x
            } = e,
            b = y(k, n),
            [w, _] = r.useState(null),
            S = (0, l.s)(t, (e) => _(e)),
            E = r.useRef(null),
            C = r.useRef(''),
            T = b.viewport,
            A = a.content - a.viewport,
            O = (0, s.c)(g),
            N = (0, s.c)(h),
            R = V(v, 10);
          function I(e) {
            E.current &&
              m({ x: e.clientX - E.current.left, y: e.clientY - E.current.top });
          }
          return (
            r.useEffect(() => {
              let e = (e) => {
                let t = e.target;
                w?.contains(t) && O(e, A);
              };
              return (
                document.addEventListener('wheel', e, { passive: !1 }),
                () => document.removeEventListener('wheel', e, { passive: !1 })
              );
            }, [T, w, A, O]),
            r.useEffect(N, [a, N]),
            H(w, R),
            H(b.content, R),
            (0, u.jsx)(P, {
              scope: n,
              scrollbar: w,
              hasThumb: o,
              onThumbChange: (0, s.c)(c),
              onThumbPointerUp: (0, s.c)(d),
              onThumbPositionChange: N,
              onThumbPointerDown: (0, s.c)(p),
              children: (0, u.jsx)(i.sG.div, {
                ...x,
                ref: S,
                style: { position: 'absolute', ...x.style },
                onPointerDown: (0, f.mK)(e.onPointerDown, (e) => {
                  0 === e.button &&
                    (e.target.setPointerCapture(e.pointerId),
                    (E.current = w.getBoundingClientRect()),
                    (C.current = document.body.style.webkitUserSelect),
                    (document.body.style.webkitUserSelect = 'none'),
                    b.viewport && (b.viewport.style.scrollBehavior = 'auto'),
                    I(e));
                }),
                onPointerMove: (0, f.mK)(e.onPointerMove, I),
                onPointerUp: (0, f.mK)(e.onPointerUp, (e) => {
                  let t = e.target;
                  (t.hasPointerCapture(e.pointerId) &&
                    t.releasePointerCapture(e.pointerId),
                    (document.body.style.webkitUserSelect = C.current),
                    b.viewport && (b.viewport.style.scrollBehavior = ''),
                    (E.current = null));
                }),
              }),
            })
          );
        }),
        R = 'ScrollAreaThumb',
        I = r.forwardRef((e, t) => {
          let { forceMount: n, ...r } = e,
            i = O(R, e.__scopeScrollArea);
          return (0, u.jsx)(a.C, {
            present: n || i.hasThumb,
            children: (0, u.jsx)(L, { ref: t, ...r }),
          });
        }),
        L = r.forwardRef((e, t) => {
          let { __scopeScrollArea: n, style: a, ...o } = e,
            s = y(R, n),
            c = O(R, n),
            { onThumbPositionChange: d } = c,
            p = (0, l.s)(t, (e) => c.onThumbChange(e)),
            h = r.useRef(void 0),
            m = V(() => {
              h.current && (h.current(), (h.current = void 0));
            }, 100);
          return (
            r.useEffect(() => {
              let e = s.viewport;
              if (e) {
                let t = () => {
                  (m(), h.current || ((h.current = $(e, d)), d()));
                };
                return (
                  d(),
                  e.addEventListener('scroll', t),
                  () => e.removeEventListener('scroll', t)
                );
              }
            }, [s.viewport, m, d]),
            (0, u.jsx)(i.sG.div, {
              'data-state': c.hasThumb ? 'visible' : 'hidden',
              ...o,
              ref: p,
              style: {
                width: 'var(--radix-scroll-area-thumb-width)',
                height: 'var(--radix-scroll-area-thumb-height)',
                ...a,
              },
              onPointerDownCapture: (0, f.mK)(e.onPointerDownCapture, (e) => {
                let t = e.target.getBoundingClientRect(),
                  n = e.clientX - t.left,
                  r = e.clientY - t.top;
                c.onThumbPointerDown({ x: n, y: r });
              }),
              onPointerUp: (0, f.mK)(e.onPointerUp, c.onThumbPointerUp),
            })
          );
        });
      I.displayName = R;
      var D = 'ScrollAreaCorner',
        M = r.forwardRef((e, t) => {
          let n = y(D, e.__scopeScrollArea),
            r = !!(n.scrollbarX && n.scrollbarY);
          return 'scroll' !== n.type && r ? (0, u.jsx)(j, { ...e, ref: t }) : null;
        });
      M.displayName = D;
      var j = r.forwardRef((e, t) => {
        let { __scopeScrollArea: n, ...a } = e,
          o = y(D, n),
          [l, s] = r.useState(0),
          [c, d] = r.useState(0),
          f = !!(l && c);
        return (
          H(o.scrollbarX, () => {
            let e = o.scrollbarX?.offsetHeight || 0;
            (o.onCornerHeightChange(e), d(e));
          }),
          H(o.scrollbarY, () => {
            let e = o.scrollbarY?.offsetWidth || 0;
            (o.onCornerWidthChange(e), s(e));
          }),
          f
            ? (0, u.jsx)(i.sG.div, {
                ...a,
                ref: t,
                style: {
                  width: l,
                  height: c,
                  position: 'absolute',
                  right: 'ltr' === o.dir ? 0 : void 0,
                  left: 'rtl' === o.dir ? 0 : void 0,
                  bottom: 0,
                  ...e.style,
                },
              })
            : null
        );
      });
      function z(e) {
        return e ? parseInt(e, 10) : 0;
      }
      function F(e, t) {
        let n = e / t;
        return isNaN(n) ? 0 : n;
      }
      function Z(e) {
        let t = F(e.viewport, e.content),
          n = e.scrollbar.paddingStart + e.scrollbar.paddingEnd;
        return Math.max((e.scrollbar.size - n) * t, 18);
      }
      function U(e, t, n = 'ltr') {
        let r = Z(t),
          i = t.scrollbar.paddingStart + t.scrollbar.paddingEnd,
          a = t.scrollbar.size - i,
          o = t.content - t.viewport,
          l = (function (e, [t, n]) {
            return Math.min(n, Math.max(t, e));
          })(e, 'ltr' === n ? [0, o] : [-1 * o, 0]);
        return B([0, o], [0, a - r])(l);
      }
      function B(e, t) {
        return (n) => {
          if (e[0] === e[1] || t[0] === t[1]) return t[0];
          let r = (t[1] - t[0]) / (e[1] - e[0]);
          return t[0] + r * (n - e[0]);
        };
      }
      var $ = (e, t = () => {}) => {
        let n = { left: e.scrollLeft, top: e.scrollTop },
          r = 0;
        return (
          !(function i() {
            let a = { left: e.scrollLeft, top: e.scrollTop },
              o = n.left !== a.left,
              l = n.top !== a.top;
            ((o || l) && t(), (n = a), (r = window.requestAnimationFrame(i)));
          })(),
          () => window.cancelAnimationFrame(r)
        );
      };
      function V(e, t) {
        let n = (0, s.c)(e),
          i = r.useRef(0);
        return (
          r.useEffect(() => () => window.clearTimeout(i.current), []),
          r.useCallback(() => {
            (window.clearTimeout(i.current), (i.current = window.setTimeout(n, t)));
          }, [n, t])
        );
      }
      function H(e, t) {
        let n = (0, s.c)(t);
        (0, d.N)(() => {
          let t = 0;
          if (e) {
            let r = new ResizeObserver(() => {
              (cancelAnimationFrame(t), (t = window.requestAnimationFrame(n)));
            });
            return (
              r.observe(e),
              () => {
                (window.cancelAnimationFrame(t), r.unobserve(e));
              }
            );
          }
        }, [e, n]);
      }
      var W = v,
        q = b,
        K = M;
    },
    8987: (e, t, n) => {
      n.d(t, { N: () => i });
      var r = n(5541),
        i = globalThis?.document ? r.useLayoutEffect : () => {};
    },
    9149: (e, t, n) => {
      n.d(t, { C: () => o });
      var r = n(5541),
        i = n(5528),
        a = n(8987),
        o = (e) => {
          var t;
          let n,
            o,
            { present: s, children: u } = e,
            c = (function (e) {
              var t, n;
              let [i, o] = r.useState(),
                s = r.useRef(null),
                u = r.useRef(e),
                c = r.useRef('none'),
                [d, f] =
                  ((t = e ? 'mounted' : 'unmounted'),
                  (n = {
                    mounted: { UNMOUNT: 'unmounted', ANIMATION_OUT: 'unmountSuspended' },
                    unmountSuspended: { MOUNT: 'mounted', ANIMATION_END: 'unmounted' },
                    unmounted: { MOUNT: 'mounted' },
                  }),
                  r.useReducer((e, t) => n[e][t] ?? e, t));
              return (
                r.useEffect(() => {
                  let e = l(s.current);
                  c.current = 'mounted' === d ? e : 'none';
                }, [d]),
                (0, a.N)(() => {
                  let t = s.current,
                    n = u.current;
                  if (n !== e) {
                    let r = c.current,
                      i = l(t);
                    (e
                      ? f('MOUNT')
                      : 'none' === i || t?.display === 'none'
                        ? f('UNMOUNT')
                        : n && r !== i
                          ? f('ANIMATION_OUT')
                          : f('UNMOUNT'),
                      (u.current = e));
                  }
                }, [e, f]),
                (0, a.N)(() => {
                  if (i) {
                    let e,
                      t = i.ownerDocument.defaultView ?? window,
                      n = (n) => {
                        let r = l(s.current).includes(CSS.escape(n.animationName));
                        if (n.target === i && r && (f('ANIMATION_END'), !u.current)) {
                          let n = i.style.animationFillMode;
                          ((i.style.animationFillMode = 'forwards'),
                            (e = t.setTimeout(() => {
                              'forwards' === i.style.animationFillMode &&
                                (i.style.animationFillMode = n);
                            })));
                        }
                      },
                      r = (e) => {
                        e.target === i && (c.current = l(s.current));
                      };
                    return (
                      i.addEventListener('animationstart', r),
                      i.addEventListener('animationcancel', n),
                      i.addEventListener('animationend', n),
                      () => {
                        (t.clearTimeout(e),
                          i.removeEventListener('animationstart', r),
                          i.removeEventListener('animationcancel', n),
                          i.removeEventListener('animationend', n));
                      }
                    );
                  }
                  f('ANIMATION_END');
                }, [i, f]),
                {
                  isPresent: ['mounted', 'unmountSuspended'].includes(d),
                  ref: r.useCallback((e) => {
                    ((s.current = e ? getComputedStyle(e) : null), o(e));
                  }, []),
                }
              );
            })(s),
            d = 'function' == typeof u ? u({ present: c.isPresent }) : r.Children.only(u),
            f = (0, i.s)(
              c.ref,
              ((t = d),
              (o =
                (n = Object.getOwnPropertyDescriptor(t.props, 'ref')?.get) &&
                'isReactWarning' in n &&
                n.isReactWarning)
                ? t.ref
                : (o =
                      (n = Object.getOwnPropertyDescriptor(t, 'ref')?.get) &&
                      'isReactWarning' in n &&
                      n.isReactWarning)
                  ? t.props.ref
                  : t.props.ref || t.ref),
            );
          return 'function' == typeof u || c.isPresent
            ? r.cloneElement(d, { ref: f })
            : null;
        };
      function l(e) {
        return e?.animationName || 'none';
      }
      o.displayName = 'Presence';
    },
    9201: (e, t, n) => {
      n.d(t, { oz: () => nO });
      var r = {};
      (n.r(r),
        n.d(r, {
          boolean: () => g,
          booleanish: () => y,
          commaOrSpaceSeparated: () => w,
          commaSeparated: () => k,
          number: () => x,
          overloadedBoolean: () => v,
          spaceSeparated: () => b,
        }));
      var i = {};
      (n.r(i),
        n.d(i, {
          attentionMarkers: () => tT,
          contentInitial: () => tk,
          disable: () => tA,
          document: () => tb,
          flow: () => t_,
          flowInitial: () => tw,
          insideSpan: () => tC,
          string: () => tS,
          text: () => tE,
        }));
      let a = /^[$_\p{ID_Start}][$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,
        o = /^[$_\p{ID_Start}][-$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,
        l = {};
      function s(e, t) {
        return ((t || l).jsx ? o : a).test(e);
      }
      let u = /[ \t\n\f\r]/g;
      function c(e) {
        return '' === e.replace(u, '');
      }
      class d {
        constructor(e, t, n) {
          ((this.normal = t), (this.property = e), n && (this.space = n));
        }
      }
      function f(e, t) {
        let n = {},
          r = {};
        for (let t of e) (Object.assign(n, t.property), Object.assign(r, t.normal));
        return new d(n, r, t);
      }
      function p(e) {
        return e.toLowerCase();
      }
      ((d.prototype.normal = {}),
        (d.prototype.property = {}),
        (d.prototype.space = void 0));
      class h {
        constructor(e, t) {
          ((this.attribute = t), (this.property = e));
        }
      }
      ((h.prototype.attribute = ''),
        (h.prototype.booleanish = !1),
        (h.prototype.boolean = !1),
        (h.prototype.commaOrSpaceSeparated = !1),
        (h.prototype.commaSeparated = !1),
        (h.prototype.defined = !1),
        (h.prototype.mustUseProperty = !1),
        (h.prototype.number = !1),
        (h.prototype.overloadedBoolean = !1),
        (h.prototype.property = ''),
        (h.prototype.spaceSeparated = !1),
        (h.prototype.space = void 0));
      let m = 0,
        g = _(),
        y = _(),
        v = _(),
        x = _(),
        b = _(),
        k = _(),
        w = _();
      function _() {
        return 2 ** ++m;
      }
      let S = Object.keys(r);
      class E extends h {
        constructor(e, t, n, i) {
          let a = -1;
          if (
            (super(e, t),
            (function (e, t, n) {
              n && (e[t] = n);
            })(this, 'space', i),
            'number' == typeof n)
          )
            for (; ++a < S.length; ) {
              const e = S[a];
              !(function (e, t, n) {
                n && (e[t] = n);
              })(this, S[a], (n & r[e]) === r[e]);
            }
        }
      }
      function C(e) {
        let t = {},
          n = {};
        for (let [r, i] of Object.entries(e.properties)) {
          let a = new E(r, e.transform(e.attributes || {}, r), i, e.space);
          (e.mustUseProperty && e.mustUseProperty.includes(r) && (a.mustUseProperty = !0),
            (t[r] = a),
            (n[p(r)] = r),
            (n[p(a.attribute)] = r));
        }
        return new d(t, n, e.space);
      }
      E.prototype.defined = !0;
      let T = C({
        properties: {
          ariaActiveDescendant: null,
          ariaAtomic: y,
          ariaAutoComplete: null,
          ariaBusy: y,
          ariaChecked: y,
          ariaColCount: x,
          ariaColIndex: x,
          ariaColSpan: x,
          ariaControls: b,
          ariaCurrent: null,
          ariaDescribedBy: b,
          ariaDetails: null,
          ariaDisabled: y,
          ariaDropEffect: b,
          ariaErrorMessage: null,
          ariaExpanded: y,
          ariaFlowTo: b,
          ariaGrabbed: y,
          ariaHasPopup: null,
          ariaHidden: y,
          ariaInvalid: null,
          ariaKeyShortcuts: null,
          ariaLabel: null,
          ariaLabelledBy: b,
          ariaLevel: x,
          ariaLive: null,
          ariaModal: y,
          ariaMultiLine: y,
          ariaMultiSelectable: y,
          ariaOrientation: null,
          ariaOwns: b,
          ariaPlaceholder: null,
          ariaPosInSet: x,
          ariaPressed: y,
          ariaReadOnly: y,
          ariaRelevant: null,
          ariaRequired: y,
          ariaRoleDescription: b,
          ariaRowCount: x,
          ariaRowIndex: x,
          ariaRowSpan: x,
          ariaSelected: y,
          ariaSetSize: x,
          ariaSort: null,
          ariaValueMax: x,
          ariaValueMin: x,
          ariaValueNow: x,
          ariaValueText: null,
          role: null,
        },
        transform: (e, t) => ('role' === t ? t : 'aria-' + t.slice(4).toLowerCase()),
      });
      function A(e, t) {
        return t in e ? e[t] : t;
      }
      function P(e, t) {
        return A(e, t.toLowerCase());
      }
      let O = C({
          attributes: {
            acceptcharset: 'accept-charset',
            classname: 'class',
            htmlfor: 'for',
            httpequiv: 'http-equiv',
          },
          mustUseProperty: ['checked', 'multiple', 'muted', 'selected'],
          properties: {
            abbr: null,
            accept: k,
            acceptCharset: b,
            accessKey: b,
            action: null,
            allow: null,
            allowFullScreen: g,
            allowPaymentRequest: g,
            allowUserMedia: g,
            alt: null,
            as: null,
            async: g,
            autoCapitalize: null,
            autoComplete: b,
            autoFocus: g,
            autoPlay: g,
            blocking: b,
            capture: null,
            charSet: null,
            checked: g,
            cite: null,
            className: b,
            cols: x,
            colSpan: null,
            content: null,
            contentEditable: y,
            controls: g,
            controlsList: b,
            coords: x | k,
            crossOrigin: null,
            data: null,
            dateTime: null,
            decoding: null,
            default: g,
            defer: g,
            dir: null,
            dirName: null,
            disabled: g,
            download: v,
            draggable: y,
            encType: null,
            enterKeyHint: null,
            fetchPriority: null,
            form: null,
            formAction: null,
            formEncType: null,
            formMethod: null,
            formNoValidate: g,
            formTarget: null,
            headers: b,
            height: x,
            hidden: v,
            high: x,
            href: null,
            hrefLang: null,
            htmlFor: b,
            httpEquiv: b,
            id: null,
            imageSizes: null,
            imageSrcSet: null,
            inert: g,
            inputMode: null,
            integrity: null,
            is: null,
            isMap: g,
            itemId: null,
            itemProp: b,
            itemRef: b,
            itemScope: g,
            itemType: b,
            kind: null,
            label: null,
            lang: null,
            language: null,
            list: null,
            loading: null,
            loop: g,
            low: x,
            manifest: null,
            max: null,
            maxLength: x,
            media: null,
            method: null,
            min: null,
            minLength: x,
            multiple: g,
            muted: g,
            name: null,
            nonce: null,
            noModule: g,
            noValidate: g,
            onAbort: null,
            onAfterPrint: null,
            onAuxClick: null,
            onBeforeMatch: null,
            onBeforePrint: null,
            onBeforeToggle: null,
            onBeforeUnload: null,
            onBlur: null,
            onCancel: null,
            onCanPlay: null,
            onCanPlayThrough: null,
            onChange: null,
            onClick: null,
            onClose: null,
            onContextLost: null,
            onContextMenu: null,
            onContextRestored: null,
            onCopy: null,
            onCueChange: null,
            onCut: null,
            onDblClick: null,
            onDrag: null,
            onDragEnd: null,
            onDragEnter: null,
            onDragExit: null,
            onDragLeave: null,
            onDragOver: null,
            onDragStart: null,
            onDrop: null,
            onDurationChange: null,
            onEmptied: null,
            onEnded: null,
            onError: null,
            onFocus: null,
            onFormData: null,
            onHashChange: null,
            onInput: null,
            onInvalid: null,
            onKeyDown: null,
            onKeyPress: null,
            onKeyUp: null,
            onLanguageChange: null,
            onLoad: null,
            onLoadedData: null,
            onLoadedMetadata: null,
            onLoadEnd: null,
            onLoadStart: null,
            onMessage: null,
            onMessageError: null,
            onMouseDown: null,
            onMouseEnter: null,
            onMouseLeave: null,
            onMouseMove: null,
            onMouseOut: null,
            onMouseOver: null,
            onMouseUp: null,
            onOffline: null,
            onOnline: null,
            onPageHide: null,
            onPageShow: null,
            onPaste: null,
            onPause: null,
            onPlay: null,
            onPlaying: null,
            onPopState: null,
            onProgress: null,
            onRateChange: null,
            onRejectionHandled: null,
            onReset: null,
            onResize: null,
            onScroll: null,
            onScrollEnd: null,
            onSecurityPolicyViolation: null,
            onSeeked: null,
            onSeeking: null,
            onSelect: null,
            onSlotChange: null,
            onStalled: null,
            onStorage: null,
            onSubmit: null,
            onSuspend: null,
            onTimeUpdate: null,
            onToggle: null,
            onUnhandledRejection: null,
            onUnload: null,
            onVolumeChange: null,
            onWaiting: null,
            onWheel: null,
            open: g,
            optimum: x,
            pattern: null,
            ping: b,
            placeholder: null,
            playsInline: g,
            popover: null,
            popoverTarget: null,
            popoverTargetAction: null,
            poster: null,
            preload: null,
            readOnly: g,
            referrerPolicy: null,
            rel: b,
            required: g,
            reversed: g,
            rows: x,
            rowSpan: x,
            sandbox: b,
            scope: null,
            scoped: g,
            seamless: g,
            selected: g,
            shadowRootClonable: g,
            shadowRootDelegatesFocus: g,
            shadowRootMode: null,
            shape: null,
            size: x,
            sizes: null,
            slot: null,
            span: x,
            spellCheck: y,
            src: null,
            srcDoc: null,
            srcLang: null,
            srcSet: null,
            start: x,
            step: null,
            style: null,
            tabIndex: x,
            target: null,
            title: null,
            translate: null,
            type: null,
            typeMustMatch: g,
            useMap: null,
            value: y,
            width: x,
            wrap: null,
            writingSuggestions: null,
            align: null,
            aLink: null,
            archive: b,
            axis: null,
            background: null,
            bgColor: null,
            border: x,
            borderColor: null,
            bottomMargin: x,
            cellPadding: null,
            cellSpacing: null,
            char: null,
            charOff: null,
            classId: null,
            clear: null,
            code: null,
            codeBase: null,
            codeType: null,
            color: null,
            compact: g,
            declare: g,
            event: null,
            face: null,
            frame: null,
            frameBorder: null,
            hSpace: x,
            leftMargin: x,
            link: null,
            longDesc: null,
            lowSrc: null,
            marginHeight: x,
            marginWidth: x,
            noResize: g,
            noHref: g,
            noShade: g,
            noWrap: g,
            object: null,
            profile: null,
            prompt: null,
            rev: null,
            rightMargin: x,
            rules: null,
            scheme: null,
            scrolling: y,
            standby: null,
            summary: null,
            text: null,
            topMargin: x,
            valueType: null,
            version: null,
            vAlign: null,
            vLink: null,
            vSpace: x,
            allowTransparency: null,
            autoCorrect: null,
            autoSave: null,
            disablePictureInPicture: g,
            disableRemotePlayback: g,
            prefix: null,
            property: null,
            results: x,
            security: null,
            unselectable: null,
          },
          space: 'html',
          transform: P,
        }),
        N = C({
          attributes: {
            accentHeight: 'accent-height',
            alignmentBaseline: 'alignment-baseline',
            arabicForm: 'arabic-form',
            baselineShift: 'baseline-shift',
            capHeight: 'cap-height',
            className: 'class',
            clipPath: 'clip-path',
            clipRule: 'clip-rule',
            colorInterpolation: 'color-interpolation',
            colorInterpolationFilters: 'color-interpolation-filters',
            colorProfile: 'color-profile',
            colorRendering: 'color-rendering',
            crossOrigin: 'crossorigin',
            dataType: 'datatype',
            dominantBaseline: 'dominant-baseline',
            enableBackground: 'enable-background',
            fillOpacity: 'fill-opacity',
            fillRule: 'fill-rule',
            floodColor: 'flood-color',
            floodOpacity: 'flood-opacity',
            fontFamily: 'font-family',
            fontSize: 'font-size',
            fontSizeAdjust: 'font-size-adjust',
            fontStretch: 'font-stretch',
            fontStyle: 'font-style',
            fontVariant: 'font-variant',
            fontWeight: 'font-weight',
            glyphName: 'glyph-name',
            glyphOrientationHorizontal: 'glyph-orientation-horizontal',
            glyphOrientationVertical: 'glyph-orientation-vertical',
            hrefLang: 'hreflang',
            horizAdvX: 'horiz-adv-x',
            horizOriginX: 'horiz-origin-x',
            horizOriginY: 'horiz-origin-y',
            imageRendering: 'image-rendering',
            letterSpacing: 'letter-spacing',
            lightingColor: 'lighting-color',
            markerEnd: 'marker-end',
            markerMid: 'marker-mid',
            markerStart: 'marker-start',
            navDown: 'nav-down',
            navDownLeft: 'nav-down-left',
            navDownRight: 'nav-down-right',
            navLeft: 'nav-left',
            navNext: 'nav-next',
            navPrev: 'nav-prev',
            navRight: 'nav-right',
            navUp: 'nav-up',
            navUpLeft: 'nav-up-left',
            navUpRight: 'nav-up-right',
            onAbort: 'onabort',
            onActivate: 'onactivate',
            onAfterPrint: 'onafterprint',
            onBeforePrint: 'onbeforeprint',
            onBegin: 'onbegin',
            onCancel: 'oncancel',
            onCanPlay: 'oncanplay',
            onCanPlayThrough: 'oncanplaythrough',
            onChange: 'onchange',
            onClick: 'onclick',
            onClose: 'onclose',
            onCopy: 'oncopy',
            onCueChange: 'oncuechange',
            onCut: 'oncut',
            onDblClick: 'ondblclick',
            onDrag: 'ondrag',
            onDragEnd: 'ondragend',
            onDragEnter: 'ondragenter',
            onDragExit: 'ondragexit',
            onDragLeave: 'ondragleave',
            onDragOver: 'ondragover',
            onDragStart: 'ondragstart',
            onDrop: 'ondrop',
            onDurationChange: 'ondurationchange',
            onEmptied: 'onemptied',
            onEnd: 'onend',
            onEnded: 'onended',
            onError: 'onerror',
            onFocus: 'onfocus',
            onFocusIn: 'onfocusin',
            onFocusOut: 'onfocusout',
            onHashChange: 'onhashchange',
            onInput: 'oninput',
            onInvalid: 'oninvalid',
            onKeyDown: 'onkeydown',
            onKeyPress: 'onkeypress',
            onKeyUp: 'onkeyup',
            onLoad: 'onload',
            onLoadedData: 'onloadeddata',
            onLoadedMetadata: 'onloadedmetadata',
            onLoadStart: 'onloadstart',
            onMessage: 'onmessage',
            onMouseDown: 'onmousedown',
            onMouseEnter: 'onmouseenter',
            onMouseLeave: 'onmouseleave',
            onMouseMove: 'onmousemove',
            onMouseOut: 'onmouseout',
            onMouseOver: 'onmouseover',
            onMouseUp: 'onmouseup',
            onMouseWheel: 'onmousewheel',
            onOffline: 'onoffline',
            onOnline: 'ononline',
            onPageHide: 'onpagehide',
            onPageShow: 'onpageshow',
            onPaste: 'onpaste',
            onPause: 'onpause',
            onPlay: 'onplay',
            onPlaying: 'onplaying',
            onPopState: 'onpopstate',
            onProgress: 'onprogress',
            onRateChange: 'onratechange',
            onRepeat: 'onrepeat',
            onReset: 'onreset',
            onResize: 'onresize',
            onScroll: 'onscroll',
            onSeeked: 'onseeked',
            onSeeking: 'onseeking',
            onSelect: 'onselect',
            onShow: 'onshow',
            onStalled: 'onstalled',
            onStorage: 'onstorage',
            onSubmit: 'onsubmit',
            onSuspend: 'onsuspend',
            onTimeUpdate: 'ontimeupdate',
            onToggle: 'ontoggle',
            onUnload: 'onunload',
            onVolumeChange: 'onvolumechange',
            onWaiting: 'onwaiting',
            onZoom: 'onzoom',
            overlinePosition: 'overline-position',
            overlineThickness: 'overline-thickness',
            paintOrder: 'paint-order',
            panose1: 'panose-1',
            pointerEvents: 'pointer-events',
            referrerPolicy: 'referrerpolicy',
            renderingIntent: 'rendering-intent',
            shapeRendering: 'shape-rendering',
            stopColor: 'stop-color',
            stopOpacity: 'stop-opacity',
            strikethroughPosition: 'strikethrough-position',
            strikethroughThickness: 'strikethrough-thickness',
            strokeDashArray: 'stroke-dasharray',
            strokeDashOffset: 'stroke-dashoffset',
            strokeLineCap: 'stroke-linecap',
            strokeLineJoin: 'stroke-linejoin',
            strokeMiterLimit: 'stroke-miterlimit',
            strokeOpacity: 'stroke-opacity',
            strokeWidth: 'stroke-width',
            tabIndex: 'tabindex',
            textAnchor: 'text-anchor',
            textDecoration: 'text-decoration',
            textRendering: 'text-rendering',
            transformOrigin: 'transform-origin',
            typeOf: 'typeof',
            underlinePosition: 'underline-position',
            underlineThickness: 'underline-thickness',
            unicodeBidi: 'unicode-bidi',
            unicodeRange: 'unicode-range',
            unitsPerEm: 'units-per-em',
            vAlphabetic: 'v-alphabetic',
            vHanging: 'v-hanging',
            vIdeographic: 'v-ideographic',
            vMathematical: 'v-mathematical',
            vectorEffect: 'vector-effect',
            vertAdvY: 'vert-adv-y',
            vertOriginX: 'vert-origin-x',
            vertOriginY: 'vert-origin-y',
            wordSpacing: 'word-spacing',
            writingMode: 'writing-mode',
            xHeight: 'x-height',
            playbackOrder: 'playbackorder',
            timelineBegin: 'timelinebegin',
          },
          properties: {
            about: w,
            accentHeight: x,
            accumulate: null,
            additive: null,
            alignmentBaseline: null,
            alphabetic: x,
            amplitude: x,
            arabicForm: null,
            ascent: x,
            attributeName: null,
            attributeType: null,
            azimuth: x,
            bandwidth: null,
            baselineShift: null,
            baseFrequency: null,
            baseProfile: null,
            bbox: null,
            begin: null,
            bias: x,
            by: null,
            calcMode: null,
            capHeight: x,
            className: b,
            clip: null,
            clipPath: null,
            clipPathUnits: null,
            clipRule: null,
            color: null,
            colorInterpolation: null,
            colorInterpolationFilters: null,
            colorProfile: null,
            colorRendering: null,
            content: null,
            contentScriptType: null,
            contentStyleType: null,
            crossOrigin: null,
            cursor: null,
            cx: null,
            cy: null,
            d: null,
            dataType: null,
            defaultAction: null,
            descent: x,
            diffuseConstant: x,
            direction: null,
            display: null,
            dur: null,
            divisor: x,
            dominantBaseline: null,
            download: g,
            dx: null,
            dy: null,
            edgeMode: null,
            editable: null,
            elevation: x,
            enableBackground: null,
            end: null,
            event: null,
            exponent: x,
            externalResourcesRequired: null,
            fill: null,
            fillOpacity: x,
            fillRule: null,
            filter: null,
            filterRes: null,
            filterUnits: null,
            floodColor: null,
            floodOpacity: null,
            focusable: null,
            focusHighlight: null,
            fontFamily: null,
            fontSize: null,
            fontSizeAdjust: null,
            fontStretch: null,
            fontStyle: null,
            fontVariant: null,
            fontWeight: null,
            format: null,
            fr: null,
            from: null,
            fx: null,
            fy: null,
            g1: k,
            g2: k,
            glyphName: k,
            glyphOrientationHorizontal: null,
            glyphOrientationVertical: null,
            glyphRef: null,
            gradientTransform: null,
            gradientUnits: null,
            handler: null,
            hanging: x,
            hatchContentUnits: null,
            hatchUnits: null,
            height: null,
            href: null,
            hrefLang: null,
            horizAdvX: x,
            horizOriginX: x,
            horizOriginY: x,
            id: null,
            ideographic: x,
            imageRendering: null,
            initialVisibility: null,
            in: null,
            in2: null,
            intercept: x,
            k: x,
            k1: x,
            k2: x,
            k3: x,
            k4: x,
            kernelMatrix: w,
            kernelUnitLength: null,
            keyPoints: null,
            keySplines: null,
            keyTimes: null,
            kerning: null,
            lang: null,
            lengthAdjust: null,
            letterSpacing: null,
            lightingColor: null,
            limitingConeAngle: x,
            local: null,
            markerEnd: null,
            markerMid: null,
            markerStart: null,
            markerHeight: null,
            markerUnits: null,
            markerWidth: null,
            mask: null,
            maskContentUnits: null,
            maskUnits: null,
            mathematical: null,
            max: null,
            media: null,
            mediaCharacterEncoding: null,
            mediaContentEncodings: null,
            mediaSize: x,
            mediaTime: null,
            method: null,
            min: null,
            mode: null,
            name: null,
            navDown: null,
            navDownLeft: null,
            navDownRight: null,
            navLeft: null,
            navNext: null,
            navPrev: null,
            navRight: null,
            navUp: null,
            navUpLeft: null,
            navUpRight: null,
            numOctaves: null,
            observer: null,
            offset: null,
            onAbort: null,
            onActivate: null,
            onAfterPrint: null,
            onBeforePrint: null,
            onBegin: null,
            onCancel: null,
            onCanPlay: null,
            onCanPlayThrough: null,
            onChange: null,
            onClick: null,
            onClose: null,
            onCopy: null,
            onCueChange: null,
            onCut: null,
            onDblClick: null,
            onDrag: null,
            onDragEnd: null,
            onDragEnter: null,
            onDragExit: null,
            onDragLeave: null,
            onDragOver: null,
            onDragStart: null,
            onDrop: null,
            onDurationChange: null,
            onEmptied: null,
            onEnd: null,
            onEnded: null,
            onError: null,
            onFocus: null,
            onFocusIn: null,
            onFocusOut: null,
            onHashChange: null,
            onInput: null,
            onInvalid: null,
            onKeyDown: null,
            onKeyPress: null,
            onKeyUp: null,
            onLoad: null,
            onLoadedData: null,
            onLoadedMetadata: null,
            onLoadStart: null,
            onMessage: null,
            onMouseDown: null,
            onMouseEnter: null,
            onMouseLeave: null,
            onMouseMove: null,
            onMouseOut: null,
            onMouseOver: null,
            onMouseUp: null,
            onMouseWheel: null,
            onOffline: null,
            onOnline: null,
            onPageHide: null,
            onPageShow: null,
            onPaste: null,
            onPause: null,
            onPlay: null,
            onPlaying: null,
            onPopState: null,
            onProgress: null,
            onRateChange: null,
            onRepeat: null,
            onReset: null,
            onResize: null,
            onScroll: null,
            onSeeked: null,
            onSeeking: null,
            onSelect: null,
            onShow: null,
            onStalled: null,
            onStorage: null,
            onSubmit: null,
            onSuspend: null,
            onTimeUpdate: null,
            onToggle: null,
            onUnload: null,
            onVolumeChange: null,
            onWaiting: null,
            onZoom: null,
            opacity: null,
            operator: null,
            order: null,
            orient: null,
            orientation: null,
            origin: null,
            overflow: null,
            overlay: null,
            overlinePosition: x,
            overlineThickness: x,
            paintOrder: null,
            panose1: null,
            path: null,
            pathLength: x,
            patternContentUnits: null,
            patternTransform: null,
            patternUnits: null,
            phase: null,
            ping: b,
            pitch: null,
            playbackOrder: null,
            pointerEvents: null,
            points: null,
            pointsAtX: x,
            pointsAtY: x,
            pointsAtZ: x,
            preserveAlpha: null,
            preserveAspectRatio: null,
            primitiveUnits: null,
            propagate: null,
            property: w,
            r: null,
            radius: null,
            referrerPolicy: null,
            refX: null,
            refY: null,
            rel: w,
            rev: w,
            renderingIntent: null,
            repeatCount: null,
            repeatDur: null,
            requiredExtensions: w,
            requiredFeatures: w,
            requiredFonts: w,
            requiredFormats: w,
            resource: null,
            restart: null,
            result: null,
            rotate: null,
            rx: null,
            ry: null,
            scale: null,
            seed: null,
            shapeRendering: null,
            side: null,
            slope: null,
            snapshotTime: null,
            specularConstant: x,
            specularExponent: x,
            spreadMethod: null,
            spacing: null,
            startOffset: null,
            stdDeviation: null,
            stemh: null,
            stemv: null,
            stitchTiles: null,
            stopColor: null,
            stopOpacity: null,
            strikethroughPosition: x,
            strikethroughThickness: x,
            string: null,
            stroke: null,
            strokeDashArray: w,
            strokeDashOffset: null,
            strokeLineCap: null,
            strokeLineJoin: null,
            strokeMiterLimit: x,
            strokeOpacity: x,
            strokeWidth: null,
            style: null,
            surfaceScale: x,
            syncBehavior: null,
            syncBehaviorDefault: null,
            syncMaster: null,
            syncTolerance: null,
            syncToleranceDefault: null,
            systemLanguage: w,
            tabIndex: x,
            tableValues: null,
            target: null,
            targetX: x,
            targetY: x,
            textAnchor: null,
            textDecoration: null,
            textRendering: null,
            textLength: null,
            timelineBegin: null,
            title: null,
            transformBehavior: null,
            type: null,
            typeOf: w,
            to: null,
            transform: null,
            transformOrigin: null,
            u1: null,
            u2: null,
            underlinePosition: x,
            underlineThickness: x,
            unicode: null,
            unicodeBidi: null,
            unicodeRange: null,
            unitsPerEm: x,
            values: null,
            vAlphabetic: x,
            vMathematical: x,
            vectorEffect: null,
            vHanging: x,
            vIdeographic: x,
            version: null,
            vertAdvY: x,
            vertOriginX: x,
            vertOriginY: x,
            viewBox: null,
            viewTarget: null,
            visibility: null,
            width: null,
            widths: null,
            wordSpacing: null,
            writingMode: null,
            x: null,
            x1: null,
            x2: null,
            xChannelSelector: null,
            xHeight: x,
            y: null,
            y1: null,
            y2: null,
            yChannelSelector: null,
            z: null,
            zoomAndPan: null,
          },
          space: 'svg',
          transform: A,
        }),
        R = C({
          properties: {
            xLinkActuate: null,
            xLinkArcRole: null,
            xLinkHref: null,
            xLinkRole: null,
            xLinkShow: null,
            xLinkTitle: null,
            xLinkType: null,
          },
          space: 'xlink',
          transform: (e, t) => 'xlink:' + t.slice(5).toLowerCase(),
        }),
        I = C({
          attributes: { xmlnsxlink: 'xmlns:xlink' },
          properties: { xmlnsXLink: null, xmlns: null },
          space: 'xmlns',
          transform: P,
        }),
        L = C({
          properties: { xmlBase: null, xmlLang: null, xmlSpace: null },
          space: 'xml',
          transform: (e, t) => 'xml:' + t.slice(3).toLowerCase(),
        }),
        D = f([T, O, R, I, L], 'html'),
        M = f([T, N, R, I, L], 'svg'),
        j = /[A-Z]/g,
        z = /-[a-z]/g,
        F = /^data[-\w.:]+$/i;
      function Z(e) {
        return '-' + e.toLowerCase();
      }
      function U(e) {
        return e.charAt(1).toUpperCase();
      }
      let B = {
        classId: 'classID',
        dataType: 'datatype',
        itemId: 'itemID',
        strokeDashArray: 'strokeDasharray',
        strokeDashOffset: 'strokeDashoffset',
        strokeLineCap: 'strokeLinecap',
        strokeLineJoin: 'strokeLinejoin',
        strokeMiterLimit: 'strokeMiterlimit',
        typeOf: 'typeof',
        xLinkActuate: 'xlinkActuate',
        xLinkArcRole: 'xlinkArcrole',
        xLinkHref: 'xlinkHref',
        xLinkRole: 'xlinkRole',
        xLinkShow: 'xlinkShow',
        xLinkTitle: 'xlinkTitle',
        xLinkType: 'xlinkType',
        xmlnsXLink: 'xmlnsXlink',
      };
      var $ = n(3447);
      let V = W('end'),
        H = W('start');
      function W(e) {
        return function (t) {
          let n = (t && t.position && t.position[e]) || {};
          if (
            'number' == typeof n.line &&
            n.line > 0 &&
            'number' == typeof n.column &&
            n.column > 0
          )
            return {
              line: n.line,
              column: n.column,
              offset: 'number' == typeof n.offset && n.offset > -1 ? n.offset : void 0,
            };
        };
      }
      function q(e) {
        return e && 'object' == typeof e
          ? 'position' in e || 'type' in e
            ? Y(e.position)
            : 'start' in e || 'end' in e
              ? Y(e)
              : 'line' in e || 'column' in e
                ? K(e)
                : ''
          : '';
      }
      function K(e) {
        return X(e && e.line) + ':' + X(e && e.column);
      }
      function Y(e) {
        return K(e && e.start) + '-' + K(e && e.end);
      }
      function X(e) {
        return e && 'number' == typeof e ? e : 1;
      }
      class G extends Error {
        constructor(e, t, n) {
          (super(), 'string' == typeof t && ((n = t), (t = void 0)));
          let r = '',
            i = {},
            a = !1;
          if (
            (t &&
              (i =
                ('line' in t && 'column' in t) || ('start' in t && 'end' in t)
                  ? { place: t }
                  : 'type' in t
                    ? { ancestors: [t], place: t.position }
                    : { ...t }),
            'string' == typeof e
              ? (r = e)
              : !i.cause && e && ((a = !0), (r = e.message), (i.cause = e)),
            !i.ruleId && !i.source && 'string' == typeof n)
          ) {
            const e = n.indexOf(':');
            -1 === e
              ? (i.ruleId = n)
              : ((i.source = n.slice(0, e)), (i.ruleId = n.slice(e + 1)));
          }
          if (!i.place && i.ancestors && i.ancestors) {
            const e = i.ancestors[i.ancestors.length - 1];
            e && (i.place = e.position);
          }
          const o = i.place && 'start' in i.place ? i.place.start : i.place;
          ((this.ancestors = i.ancestors || void 0),
            (this.cause = i.cause || void 0),
            (this.column = o ? o.column : void 0),
            (this.fatal = void 0),
            (this.file = ''),
            (this.message = r),
            (this.line = o ? o.line : void 0),
            (this.name = q(i.place) || '1:1'),
            (this.place = i.place || void 0),
            (this.reason = this.message),
            (this.ruleId = i.ruleId || void 0),
            (this.source = i.source || void 0),
            (this.stack =
              a && i.cause && 'string' == typeof i.cause.stack ? i.cause.stack : ''),
            (this.actual = void 0),
            (this.expected = void 0),
            (this.note = void 0),
            (this.url = void 0));
        }
      }
      ((G.prototype.file = ''),
        (G.prototype.name = ''),
        (G.prototype.reason = ''),
        (G.prototype.message = ''),
        (G.prototype.stack = ''),
        (G.prototype.column = void 0),
        (G.prototype.line = void 0),
        (G.prototype.ancestors = void 0),
        (G.prototype.cause = void 0),
        (G.prototype.fatal = void 0),
        (G.prototype.place = void 0),
        (G.prototype.ruleId = void 0),
        (G.prototype.source = void 0));
      let J = {}.hasOwnProperty,
        Q = new Map(),
        ee = /[A-Z]/g,
        et = new Set(['table', 'tbody', 'thead', 'tfoot', 'tr']),
        en = new Set(['td', 'th']),
        er = 'https://github.com/syntax-tree/hast-util-to-jsx-runtime';
      function ei(e, t, n) {
        var r, i, a, o, l, s, u, d, f;
        let m, g, y, v, x, b, k, w, _, S, C;
        return 'element' === t.type
          ? ((r = e),
            (i = t),
            (a = n),
            (g = m = r.schema),
            'svg' === i.tagName.toLowerCase() && 'html' === m.space && (r.schema = M),
            r.ancestors.push(i),
            (y = es(r, i.tagName, !1)),
            (v = (function (e, t) {
              let n,
                r,
                i = {};
              for (r in t.properties)
                if ('children' !== r && J.call(t.properties, r)) {
                  let a = (function (e, t, n) {
                    let r = (function (e, t) {
                      let n = p(t),
                        r = t,
                        i = h;
                      if (n in e.normal) return e.property[e.normal[n]];
                      if (n.length > 4 && 'data' === n.slice(0, 4) && F.test(t)) {
                        if ('-' === t.charAt(4)) {
                          let e = t.slice(5).replace(z, U);
                          r = 'data' + e.charAt(0).toUpperCase() + e.slice(1);
                        } else {
                          let e = t.slice(4);
                          if (!z.test(e)) {
                            let n = e.replace(j, Z);
                            ('-' !== n.charAt(0) && (n = '-' + n), (t = 'data' + n));
                          }
                        }
                        i = E;
                      }
                      return new i(r, t);
                    })(e.schema, t);
                    if (!(null == n || ('number' == typeof n && Number.isNaN(n)))) {
                      var i;
                      let t;
                      if (
                        (Array.isArray(n) &&
                          (n = r.commaSeparated
                            ? ((t = {}),
                              ('' === (i = n)[i.length - 1] ? [...i, ''] : i)
                                .join(
                                  (t.padRight ? ' ' : '') +
                                    ',' +
                                    (!1 === t.padLeft ? '' : ' '),
                                )
                                .trim())
                            : n.join(' ').trim()),
                        'style' === r.property)
                      ) {
                        let t =
                          'object' == typeof n
                            ? n
                            : (function (e, t) {
                                try {
                                  return $(t, { reactCompat: !0 });
                                } catch (n) {
                                  if (e.ignoreInvalidStyle) return {};
                                  let t = new G('Cannot parse `style` attribute', {
                                    ancestors: e.ancestors,
                                    cause: n,
                                    ruleId: 'style',
                                    source: 'hast-util-to-jsx-runtime',
                                  });
                                  throw (
                                    (t.file = e.filePath || void 0),
                                    (t.url = er + '#cannot-parse-style-attribute'),
                                    t
                                  );
                                }
                              })(e, String(n));
                        return (
                          'css' === e.stylePropertyNameCase &&
                            (t = (function (e) {
                              let t,
                                n = {};
                              for (t in e)
                                J.call(e, t) &&
                                  (n[
                                    (function (e) {
                                      let t = e.replace(ee, ec);
                                      return (
                                        'ms-' === t.slice(0, 3) && (t = '-' + t),
                                        t
                                      );
                                    })(t)
                                  ] = e[t]);
                              return n;
                            })(t)),
                          ['style', t]
                        );
                      }
                      return [
                        'react' === e.elementAttributeNameCase && r.space
                          ? B[r.property] || r.property
                          : r.attribute,
                        n,
                      ];
                    }
                  })(e, r, t.properties[r]);
                  if (a) {
                    let [r, o] = a;
                    e.tableCellAlignToStyle &&
                    'align' === r &&
                    'string' == typeof o &&
                    en.has(t.tagName)
                      ? (n = o)
                      : (i[r] = o);
                  }
                }
              return (
                n &&
                  ((i.style || (i.style = {}))[
                    'css' === e.stylePropertyNameCase ? 'text-align' : 'textAlign'
                  ] = n),
                i
              );
            })(r, i)),
            (x = el(r, i)),
            et.has(i.tagName) &&
              (x = x.filter(function (e) {
                return (
                  'string' != typeof e ||
                  !('object' == typeof e ? 'text' === e.type && c(e.value) : c(e))
                );
              })),
            ea(r, v, y, i),
            eo(v, x),
            r.ancestors.pop(),
            (r.schema = m),
            r.create(i, y, v, a))
          : 'mdxFlowExpression' === t.type || 'mdxTextExpression' === t.type
            ? (function (e, t) {
                if (t.data && t.data.estree && e.evaluater) {
                  let n = t.data.estree.body[0];
                  return (n.type, e.evaluater.evaluateExpression(n.expression));
                }
                eu(e, t.position);
              })(e, t)
            : 'mdxJsxFlowElement' === t.type || 'mdxJsxTextElement' === t.type
              ? ((o = e),
                (l = t),
                (s = n),
                (k = b = o.schema),
                'svg' === l.name && 'html' === b.space && (o.schema = M),
                o.ancestors.push(l),
                (w = null === l.name ? o.Fragment : es(o, l.name, !0)),
                (_ = (function (e, t) {
                  let n = {};
                  for (let r of t.attributes)
                    if ('mdxJsxExpressionAttribute' === r.type)
                      if (r.data && r.data.estree && e.evaluater) {
                        let t = r.data.estree.body[0];
                        t.type;
                        let i = t.expression;
                        i.type;
                        let a = i.properties[0];
                        (a.type,
                          Object.assign(n, e.evaluater.evaluateExpression(a.argument)));
                      } else eu(e, t.position);
                    else {
                      let i,
                        a = r.name;
                      if (r.value && 'object' == typeof r.value)
                        if (r.value.data && r.value.data.estree && e.evaluater) {
                          let t = r.value.data.estree.body[0];
                          (t.type, (i = e.evaluater.evaluateExpression(t.expression)));
                        } else eu(e, t.position);
                      else i = null === r.value || r.value;
                      n[a] = i;
                    }
                  return n;
                })(o, l)),
                (S = el(o, l)),
                ea(o, _, w, l),
                eo(_, S),
                o.ancestors.pop(),
                (o.schema = b),
                o.create(l, w, _, s))
              : 'mdxjsEsm' === t.type
                ? (function (e, t) {
                    if (t.data && t.data.estree && e.evaluater)
                      return e.evaluater.evaluateProgram(t.data.estree);
                    eu(e, t.position);
                  })(e, t)
                : 'root' === t.type
                  ? ((u = e),
                    (d = t),
                    (f = n),
                    eo((C = {}), el(u, d)),
                    u.create(d, u.Fragment, C, f))
                  : 'text' === t.type
                    ? t.value
                    : void 0;
      }
      function ea(e, t, n, r) {
        'string' != typeof n && n !== e.Fragment && e.passNode && (t.node = r);
      }
      function eo(e, t) {
        if (t.length > 0) {
          let n = t.length > 1 ? t : t[0];
          n && (e.children = n);
        }
      }
      function el(e, t) {
        let n = [],
          r = -1,
          i = e.passKeys ? new Map() : Q;
        for (; ++r < t.children.length; ) {
          let a,
            o = t.children[r];
          if (e.passKeys) {
            let e =
              'element' === o.type
                ? o.tagName
                : 'mdxJsxFlowElement' === o.type || 'mdxJsxTextElement' === o.type
                  ? o.name
                  : void 0;
            if (e) {
              let t = i.get(e) || 0;
              ((a = e + '-' + t), i.set(e, t + 1));
            }
          }
          let l = ei(e, o, a);
          void 0 !== l && n.push(l);
        }
        return n;
      }
      function es(e, t, n) {
        let r;
        if (n)
          if (t.includes('.')) {
            let e,
              n = t.split('.'),
              i = -1;
            for (; ++i < n.length; ) {
              let t = s(n[i])
                ? { type: 'Identifier', name: n[i] }
                : { type: 'Literal', value: n[i] };
              e = e
                ? {
                    type: 'MemberExpression',
                    object: e,
                    property: t,
                    computed: !!(i && 'Literal' === t.type),
                    optional: !1,
                  }
                : t;
            }
            r = e;
          } else
            r =
              s(t) && !/^[a-z]/.test(t)
                ? { type: 'Identifier', name: t }
                : { type: 'Literal', value: t };
        else r = { type: 'Literal', value: t };
        if ('Literal' === r.type) {
          let t = r.value;
          return J.call(e.components, t) ? e.components[t] : t;
        }
        if (e.evaluater) return e.evaluater.evaluateExpression(r);
        eu(e);
      }
      function eu(e, t) {
        let n = new G('Cannot handle MDX estrees without `createEvaluater`', {
          ancestors: e.ancestors,
          place: t,
          ruleId: 'mdx-estree',
          source: 'hast-util-to-jsx-runtime',
        });
        throw (
          (n.file = e.filePath || void 0),
          (n.url = er + '#cannot-handle-mdx-estrees-without-createevaluater'),
          n
        );
      }
      function ec(e) {
        return '-' + e.toLowerCase();
      }
      let ed = {
        action: ['form'],
        cite: ['blockquote', 'del', 'ins', 'q'],
        data: ['object'],
        formAction: ['button', 'input'],
        href: ['a', 'area', 'base', 'link'],
        icon: ['menuitem'],
        itemId: null,
        manifest: ['html'],
        ping: ['a', 'area'],
        poster: ['video'],
        src: [
          'audio',
          'embed',
          'iframe',
          'img',
          'input',
          'script',
          'source',
          'track',
          'video',
        ],
      };
      var ef = n(4929);
      n(5541);
      let ep = {};
      function eh(e, t, n) {
        var r;
        if ((r = e) && 'object' == typeof r) {
          if ('value' in e) return 'html' !== e.type || n ? e.value : '';
          if (t && 'alt' in e && e.alt) return e.alt;
          if ('children' in e) return em(e.children, t, n);
        }
        return Array.isArray(e) ? em(e, t, n) : '';
      }
      function em(e, t, n) {
        let r = [],
          i = -1;
        for (; ++i < e.length; ) r[i] = eh(e[i], t, n);
        return r.join('');
      }
      function eg(e, t, n, r) {
        let i,
          a = e.length,
          o = 0;
        if (
          ((t = t < 0 ? (-t > a ? 0 : a + t) : t > a ? a : t),
          (n = n > 0 ? n : 0),
          r.length < 1e4)
        )
          ((i = Array.from(r)).unshift(t, n), e.splice(...i));
        else
          for (n && e.splice(t, n); o < r.length; )
            ((i = r.slice(o, o + 1e4)).unshift(t, 0),
              e.splice(...i),
              (o += 1e4),
              (t += 1e4));
      }
      function ey(e, t) {
        return e.length > 0 ? (eg(e, e.length, 0, t), e) : t;
      }
      class ev {
        constructor(e) {
          ((this.left = e ? [...e] : []), (this.right = []));
        }
        get(e) {
          if (e < 0 || e >= this.left.length + this.right.length)
            throw RangeError(
              'Cannot access index `' +
                e +
                '` in a splice buffer of size `' +
                (this.left.length + this.right.length) +
                '`',
            );
          return e < this.left.length
            ? this.left[e]
            : this.right[this.right.length - e + this.left.length - 1];
        }
        get length() {
          return this.left.length + this.right.length;
        }
        shift() {
          return (this.setCursor(0), this.right.pop());
        }
        slice(e, t) {
          let n = null == t ? 1 / 0 : t;
          return n < this.left.length
            ? this.left.slice(e, n)
            : e > this.left.length
              ? this.right
                  .slice(
                    this.right.length - n + this.left.length,
                    this.right.length - e + this.left.length,
                  )
                  .reverse()
              : this.left
                  .slice(e)
                  .concat(
                    this.right.slice(this.right.length - n + this.left.length).reverse(),
                  );
        }
        splice(e, t, n) {
          this.setCursor(Math.trunc(e));
          let r = this.right.splice(this.right.length - (t || 0), 1 / 0);
          return (n && ex(this.left, n), r.reverse());
        }
        pop() {
          return (this.setCursor(1 / 0), this.left.pop());
        }
        push(e) {
          (this.setCursor(1 / 0), this.left.push(e));
        }
        pushMany(e) {
          (this.setCursor(1 / 0), ex(this.left, e));
        }
        unshift(e) {
          (this.setCursor(0), this.right.push(e));
        }
        unshiftMany(e) {
          (this.setCursor(0), ex(this.right, e.reverse()));
        }
        setCursor(e) {
          if (
            e !== this.left.length &&
            (!(e > this.left.length) || 0 !== this.right.length) &&
            (!(e < 0) || 0 !== this.left.length)
          )
            if (e < this.left.length) {
              let t = this.left.splice(e, 1 / 0);
              ex(this.right, t.reverse());
            } else {
              let t = this.right.splice(this.left.length + this.right.length - e, 1 / 0);
              ex(this.left, t.reverse());
            }
        }
      }
      function ex(e, t) {
        let n = 0;
        if (t.length < 1e4) e.push(...t);
        else for (; n < t.length; ) (e.push(...t.slice(n, n + 1e4)), (n += 1e4));
      }
      function eb(e) {
        let t,
          n,
          r,
          i,
          a,
          o,
          l,
          s = {},
          u = -1,
          c = new ev(e);
        for (; ++u < c.length; ) {
          for (; u in s; ) u = s[u];
          if (
            ((t = c.get(u)),
            u &&
              'chunkFlow' === t[1].type &&
              'listItemPrefix' === c.get(u - 1)[1].type &&
              ((r = 0) < (o = t[1]._tokenizer.events).length &&
                'lineEndingBlank' === o[r][1].type &&
                (r += 2),
              r < o.length && 'content' === o[r][1].type))
          )
            for (; ++r < o.length && 'content' !== o[r][1].type; )
              'chunkText' === o[r][1].type &&
                ((o[r][1]._isInFirstContentOfListItem = !0), r++);
          if ('enter' === t[0])
            t[1].contentType &&
              (Object.assign(
                s,
                (function (e, t) {
                  let n,
                    r,
                    i = e.get(t)[1],
                    a = e.get(t)[2],
                    o = t - 1,
                    l = [],
                    s = i._tokenizer;
                  !s &&
                    ((s = a.parser[i.contentType](i.start)),
                    i._contentTypeTextTrailing && (s._contentTypeTextTrailing = !0));
                  let u = s.events,
                    c = [],
                    d = {},
                    f = -1,
                    p = i,
                    h = 0,
                    m = 0,
                    g = [0];
                  for (; p; ) {
                    for (; e.get(++o)[1] !== p; );
                    (l.push(o),
                      !p._tokenizer &&
                        ((n = a.sliceStream(p)),
                        p.next || n.push(null),
                        r && s.defineSkip(p.start),
                        p._isInFirstContentOfListItem &&
                          (s._gfmTasklistFirstContentOfListItem = !0),
                        s.write(n),
                        p._isInFirstContentOfListItem &&
                          (s._gfmTasklistFirstContentOfListItem = void 0)),
                      (r = p),
                      (p = p.next));
                  }
                  for (p = i; ++f < u.length; )
                    'exit' === u[f][0] &&
                      'enter' === u[f - 1][0] &&
                      u[f][1].type === u[f - 1][1].type &&
                      u[f][1].start.line !== u[f][1].end.line &&
                      ((m = f + 1),
                      g.push(m),
                      (p._tokenizer = void 0),
                      (p.previous = void 0),
                      (p = p.next));
                  for (
                    s.events = [],
                      p ? ((p._tokenizer = void 0), (p.previous = void 0)) : g.pop(),
                      f = g.length;
                    f--;

                  ) {
                    let t = u.slice(g[f], g[f + 1]),
                      n = l.pop();
                    (c.push([n, n + t.length - 1]), e.splice(n, 2, t));
                  }
                  for (c.reverse(), f = -1; ++f < c.length; )
                    ((d[h + c[f][0]] = h + c[f][1]), (h += c[f][1] - c[f][0] - 1));
                  return d;
                })(c, u),
              ),
              (u = s[u]),
              (l = !0));
          else if (t[1]._container) {
            for (r = u, n = void 0; r--; )
              if (
                'lineEnding' === (i = c.get(r))[1].type ||
                'lineEndingBlank' === i[1].type
              )
                'enter' === i[0] &&
                  (n && (c.get(n)[1].type = 'lineEndingBlank'),
                  (i[1].type = 'lineEnding'),
                  (n = r));
              else if ('linePrefix' === i[1].type || 'listItemIndent' === i[1].type);
              else break;
            n &&
              ((t[1].end = { ...c.get(n)[1].start }),
              (a = c.slice(n, u)).unshift(t),
              c.splice(n, u - n + 1, a));
          }
        }
        return (eg(e, 0, 1 / 0, c.slice(0)), !l);
      }
      let ek = {}.hasOwnProperty,
        ew = eL(/[A-Za-z]/),
        e_ = eL(/[\dA-Za-z]/),
        eS = eL(/[#-'*+\--9=?A-Z^-~]/);
      function eE(e) {
        return null !== e && (e < 32 || 127 === e);
      }
      let eC = eL(/\d/),
        eT = eL(/[\dA-Fa-f]/),
        eA = eL(/[!-/:-@[-`{-~]/);
      function eP(e) {
        return null !== e && e < -2;
      }
      function eO(e) {
        return null !== e && (e < 0 || 32 === e);
      }
      function eN(e) {
        return -2 === e || -1 === e || 32 === e;
      }
      let eR = eL(/\p{P}|\p{S}/u),
        eI = eL(/\s/);
      function eL(e) {
        return function (t) {
          return null !== t && t > -1 && e.test(String.fromCharCode(t));
        };
      }
      function eD(e, t, n, r) {
        let i = r ? r - 1 : 1 / 0,
          a = 0;
        return function (r) {
          return eN(r)
            ? (e.enter(n),
              (function r(o) {
                return eN(o) && a++ < i ? (e.consume(o), r) : (e.exit(n), t(o));
              })(r))
            : t(r);
        };
      }
      let eM = {
          tokenize: function (e) {
            let t,
              n = e.attempt(
                this.parser.constructs.contentInitial,
                function (t) {
                  return null === t
                    ? void e.consume(t)
                    : (e.enter('lineEnding'),
                      e.consume(t),
                      e.exit('lineEnding'),
                      eD(e, n, 'linePrefix'));
                },
                function (n) {
                  return (
                    e.enter('paragraph'),
                    (function n(r) {
                      let i = e.enter('chunkText', { contentType: 'text', previous: t });
                      return (
                        t && (t.next = i),
                        (t = i),
                        (function t(r) {
                          if (null === r) {
                            (e.exit('chunkText'), e.exit('paragraph'), e.consume(r));
                            return;
                          }
                          return eP(r)
                            ? (e.consume(r), e.exit('chunkText'), n)
                            : (e.consume(r), t);
                        })(r)
                      );
                    })(n)
                  );
                },
              );
            return n;
          },
        },
        ej = {
          tokenize: function (e) {
            let t,
              n,
              r,
              i = this,
              a = [],
              o = 0;
            return l;
            function l(t) {
              if (o < a.length) {
                let n = a[o];
                return ((i.containerState = n[1]), e.attempt(n[0].continuation, s, u)(t));
              }
              return u(t);
            }
            function s(e) {
              if ((o++, i.containerState._closeFlow)) {
                let n;
                ((i.containerState._closeFlow = void 0), t && y());
                let r = i.events.length,
                  a = r;
                for (; a--; )
                  if ('exit' === i.events[a][0] && 'chunkFlow' === i.events[a][1].type) {
                    n = i.events[a][1].end;
                    break;
                  }
                g(o);
                let l = r;
                for (; l < i.events.length; ) ((i.events[l][1].end = { ...n }), l++);
                return (
                  eg(i.events, a + 1, 0, i.events.slice(r)),
                  (i.events.length = l),
                  u(e)
                );
              }
              return l(e);
            }
            function u(n) {
              if (o === a.length) {
                if (!t) return f(n);
                if (t.currentConstruct && t.currentConstruct.concrete) return h(n);
                i.interrupt = !!(t.currentConstruct && !t._gfmTableDynamicInterruptHack);
              }
              return ((i.containerState = {}), e.check(ez, c, d)(n));
            }
            function c(e) {
              return (t && y(), g(o), f(e));
            }
            function d(e) {
              return (
                (i.parser.lazy[i.now().line] = o !== a.length),
                (r = i.now().offset),
                h(e)
              );
            }
            function f(t) {
              return ((i.containerState = {}), e.attempt(ez, p, h)(t));
            }
            function p(e) {
              return (o++, a.push([i.currentConstruct, i.containerState]), f(e));
            }
            function h(r) {
              if (null === r) {
                (t && y(), g(0), e.consume(r));
                return;
              }
              return (
                (t = t || i.parser.flow(i.now())),
                e.enter('chunkFlow', { _tokenizer: t, contentType: 'flow', previous: n }),
                (function t(n) {
                  if (null === n) {
                    (m(e.exit('chunkFlow'), !0), g(0), e.consume(n));
                    return;
                  }
                  return eP(n)
                    ? (e.consume(n),
                      m(e.exit('chunkFlow')),
                      (o = 0),
                      (i.interrupt = void 0),
                      l)
                    : (e.consume(n), t);
                })(r)
              );
            }
            function m(e, a) {
              let l = i.sliceStream(e);
              if (
                (a && l.push(null),
                (e.previous = n),
                n && (n.next = e),
                (n = e),
                t.defineSkip(e.start),
                t.write(l),
                i.parser.lazy[e.start.line])
              ) {
                let e,
                  n,
                  a = t.events.length;
                for (; a--; )
                  if (
                    t.events[a][1].start.offset < r &&
                    (!t.events[a][1].end || t.events[a][1].end.offset > r)
                  )
                    return;
                let l = i.events.length,
                  s = l;
                for (; s--; )
                  if ('exit' === i.events[s][0] && 'chunkFlow' === i.events[s][1].type) {
                    if (e) {
                      n = i.events[s][1].end;
                      break;
                    }
                    e = !0;
                  }
                for (g(o), a = l; a < i.events.length; )
                  ((i.events[a][1].end = { ...n }), a++);
                (eg(i.events, s + 1, 0, i.events.slice(l)), (i.events.length = a));
              }
            }
            function g(t) {
              let n = a.length;
              for (; n-- > t; ) {
                let t = a[n];
                ((i.containerState = t[1]), t[0].exit.call(i, e));
              }
              a.length = t;
            }
            function y() {
              (t.write([null]),
                (n = void 0),
                (t = void 0),
                (i.containerState._closeFlow = void 0));
            }
          },
        },
        ez = {
          tokenize: function (e, t, n) {
            return eD(
              e,
              e.attempt(this.parser.constructs.document, t, n),
              'linePrefix',
              this.parser.constructs.disable.null.includes('codeIndented') ? void 0 : 4,
            );
          },
        },
        eF = {
          partial: !0,
          tokenize: function (e, t, n) {
            return function (t) {
              return eN(t) ? eD(e, r, 'linePrefix')(t) : r(t);
            };
            function r(e) {
              return null === e || eP(e) ? t(e) : n(e);
            }
          },
        },
        eZ = {
          resolve: function (e) {
            return (eb(e), e);
          },
          tokenize: function (e, t) {
            let n;
            return function (t) {
              return (
                e.enter('content'),
                (n = e.enter('chunkContent', { contentType: 'content' })),
                r(t)
              );
            };
            function r(t) {
              return null === t ? i(t) : eP(t) ? e.check(eU, a, i)(t) : (e.consume(t), r);
            }
            function i(n) {
              return (e.exit('chunkContent'), e.exit('content'), t(n));
            }
            function a(t) {
              return (
                e.consume(t),
                e.exit('chunkContent'),
                (n.next = e.enter('chunkContent', {
                  contentType: 'content',
                  previous: n,
                })),
                (n = n.next),
                r
              );
            }
          },
        },
        eU = {
          partial: !0,
          tokenize: function (e, t, n) {
            let r = this;
            return function (t) {
              return (
                e.exit('chunkContent'),
                e.enter('lineEnding'),
                e.consume(t),
                e.exit('lineEnding'),
                eD(e, i, 'linePrefix')
              );
            };
            function i(i) {
              if (null === i || eP(i)) return n(i);
              let a = r.events[r.events.length - 1];
              return !r.parser.constructs.disable.null.includes('codeIndented') &&
                a &&
                'linePrefix' === a[1].type &&
                a[2].sliceSerialize(a[1], !0).length >= 4
                ? t(i)
                : e.interrupt(r.parser.constructs.flow, n, t)(i);
            }
          },
        },
        eB = {
          tokenize: function (e) {
            let t = this,
              n = e.attempt(
                eF,
                function (r) {
                  return null === r
                    ? void e.consume(r)
                    : (e.enter('lineEndingBlank'),
                      e.consume(r),
                      e.exit('lineEndingBlank'),
                      (t.currentConstruct = void 0),
                      n);
                },
                e.attempt(
                  this.parser.constructs.flowInitial,
                  r,
                  eD(
                    e,
                    e.attempt(this.parser.constructs.flow, r, e.attempt(eZ, r)),
                    'linePrefix',
                  ),
                ),
              );
            return n;
            function r(r) {
              return null === r
                ? void e.consume(r)
                : (e.enter('lineEnding'),
                  e.consume(r),
                  e.exit('lineEnding'),
                  (t.currentConstruct = void 0),
                  n);
            }
          },
        },
        e$ = { resolveAll: eq() },
        eV = eW('string'),
        eH = eW('text');
      function eW(e) {
        return {
          resolveAll: eq('text' === e ? eK : void 0),
          tokenize: function (t) {
            let n = this,
              r = this.parser.constructs[e],
              i = t.attempt(r, a, o);
            return a;
            function a(e) {
              return s(e) ? i(e) : o(e);
            }
            function o(e) {
              return null === e ? void t.consume(e) : (t.enter('data'), t.consume(e), l);
            }
            function l(e) {
              return s(e) ? (t.exit('data'), i(e)) : (t.consume(e), l);
            }
            function s(e) {
              if (null === e) return !0;
              let t = r[e],
                i = -1;
              if (t)
                for (; ++i < t.length; ) {
                  let e = t[i];
                  if (!e.previous || e.previous.call(n, n.previous)) return !0;
                }
              return !1;
            }
          },
        };
      }
      function eq(e) {
        return function (t, n) {
          let r,
            i = -1;
          for (; ++i <= t.length; )
            void 0 === r
              ? t[i] && 'data' === t[i][1].type && ((r = i), i++)
              : (t[i] && 'data' === t[i][1].type) ||
                (i !== r + 2 &&
                  ((t[r][1].end = t[i - 1][1].end),
                  t.splice(r + 2, i - r - 2),
                  (i = r + 2)),
                (r = void 0));
          return e ? e(t, n) : t;
        };
      }
      function eK(e, t) {
        let n = 0;
        for (; ++n <= e.length; )
          if (
            (n === e.length || 'lineEnding' === e[n][1].type) &&
            'data' === e[n - 1][1].type
          ) {
            let r,
              i = e[n - 1][1],
              a = t.sliceStream(i),
              o = a.length,
              l = -1,
              s = 0;
            for (; o--; ) {
              let e = a[o];
              if ('string' == typeof e) {
                for (l = e.length; 32 === e.charCodeAt(l - 1); ) (s++, l--);
                if (l) break;
                l = -1;
              } else if (-2 === e) ((r = !0), s++);
              else if (-1 === e);
              else {
                o++;
                break;
              }
            }
            if ((t._contentTypeTextTrailing && n === e.length && (s = 0), s)) {
              let a = {
                type: n === e.length || r || s < 2 ? 'lineSuffix' : 'hardBreakTrailing',
                start: {
                  _bufferIndex: o ? l : i.start._bufferIndex + l,
                  _index: i.start._index + o,
                  line: i.end.line,
                  column: i.end.column - s,
                  offset: i.end.offset - s,
                },
                end: { ...i.end },
              };
              ((i.end = { ...a.start }),
                i.start.offset === i.end.offset
                  ? Object.assign(i, a)
                  : (e.splice(n, 0, ['enter', a, t], ['exit', a, t]), (n += 2)));
            }
            n++;
          }
        return e;
      }
      let eY = {
          name: 'thematicBreak',
          tokenize: function (e, t, n) {
            let r,
              i = 0;
            return function (a) {
              var o;
              return (
                e.enter('thematicBreak'),
                (r = o = a),
                (function a(o) {
                  return o === r
                    ? (e.enter('thematicBreakSequence'),
                      (function t(n) {
                        return n === r
                          ? (e.consume(n), i++, t)
                          : (e.exit('thematicBreakSequence'),
                            eN(n) ? eD(e, a, 'whitespace')(n) : a(n));
                      })(o))
                    : i >= 3 && (null === o || eP(o))
                      ? (e.exit('thematicBreak'), t(o))
                      : n(o);
                })(o)
              );
            };
          },
        },
        eX = {
          continuation: {
            tokenize: function (e, t, n) {
              let r = this;
              return (
                (r.containerState._closeFlow = void 0),
                e.check(
                  eF,
                  function (n) {
                    return (
                      (r.containerState.furtherBlankLines =
                        r.containerState.furtherBlankLines ||
                        r.containerState.initialBlankLine),
                      eD(e, t, 'listItemIndent', r.containerState.size + 1)(n)
                    );
                  },
                  function (n) {
                    return r.containerState.furtherBlankLines || !eN(n)
                      ? ((r.containerState.furtherBlankLines = void 0),
                        (r.containerState.initialBlankLine = void 0),
                        i(n))
                      : ((r.containerState.furtherBlankLines = void 0),
                        (r.containerState.initialBlankLine = void 0),
                        e.attempt(eJ, t, i)(n));
                  },
                )
              );
              function i(i) {
                return (
                  (r.containerState._closeFlow = !0),
                  (r.interrupt = void 0),
                  eD(
                    e,
                    e.attempt(eX, t, n),
                    'linePrefix',
                    r.parser.constructs.disable.null.includes('codeIndented')
                      ? void 0
                      : 4,
                  )(i)
                );
              }
            },
          },
          exit: function (e) {
            e.exit(this.containerState.type);
          },
          name: 'list',
          tokenize: function (e, t, n) {
            let r = this,
              i = r.events[r.events.length - 1],
              a =
                i && 'linePrefix' === i[1].type
                  ? i[2].sliceSerialize(i[1], !0).length
                  : 0,
              o = 0;
            return function (t) {
              let i =
                r.containerState.type ||
                (42 === t || 43 === t || 45 === t ? 'listUnordered' : 'listOrdered');
              if (
                'listUnordered' === i
                  ? !r.containerState.marker || t === r.containerState.marker
                  : eC(t)
              ) {
                if (
                  (r.containerState.type ||
                    ((r.containerState.type = i), e.enter(i, { _container: !0 })),
                  'listUnordered' === i)
                )
                  return (
                    e.enter('listItemPrefix'),
                    42 === t || 45 === t ? e.check(eY, n, l)(t) : l(t)
                  );
                if (!r.interrupt || 49 === t)
                  return (
                    e.enter('listItemPrefix'),
                    e.enter('listItemValue'),
                    (function t(i) {
                      return eC(i) && ++o < 10
                        ? (e.consume(i), t)
                        : (!r.interrupt || o < 2) &&
                            (r.containerState.marker
                              ? i === r.containerState.marker
                              : 41 === i || 46 === i)
                          ? (e.exit('listItemValue'), l(i))
                          : n(i);
                    })(t)
                  );
              }
              return n(t);
            };
            function l(t) {
              return (
                e.enter('listItemMarker'),
                e.consume(t),
                e.exit('listItemMarker'),
                (r.containerState.marker = r.containerState.marker || t),
                e.check(eF, r.interrupt ? n : s, e.attempt(eG, c, u))
              );
            }
            function s(e) {
              return ((r.containerState.initialBlankLine = !0), a++, c(e));
            }
            function u(t) {
              return eN(t)
                ? (e.enter('listItemPrefixWhitespace'),
                  e.consume(t),
                  e.exit('listItemPrefixWhitespace'),
                  c)
                : n(t);
            }
            function c(n) {
              return (
                (r.containerState.size =
                  a + r.sliceSerialize(e.exit('listItemPrefix'), !0).length),
                t(n)
              );
            }
          },
        },
        eG = {
          partial: !0,
          tokenize: function (e, t, n) {
            let r = this;
            return eD(
              e,
              function (e) {
                let i = r.events[r.events.length - 1];
                return !eN(e) && i && 'listItemPrefixWhitespace' === i[1].type
                  ? t(e)
                  : n(e);
              },
              'listItemPrefixWhitespace',
              r.parser.constructs.disable.null.includes('codeIndented') ? void 0 : 5,
            );
          },
        },
        eJ = {
          partial: !0,
          tokenize: function (e, t, n) {
            let r = this;
            return eD(
              e,
              function (e) {
                let i = r.events[r.events.length - 1];
                return i &&
                  'listItemIndent' === i[1].type &&
                  i[2].sliceSerialize(i[1], !0).length === r.containerState.size
                  ? t(e)
                  : n(e);
              },
              'listItemIndent',
              r.containerState.size + 1,
            );
          },
        },
        eQ = {
          continuation: {
            tokenize: function (e, t, n) {
              let r = this;
              return function (t) {
                return eN(t)
                  ? eD(
                      e,
                      i,
                      'linePrefix',
                      r.parser.constructs.disable.null.includes('codeIndented')
                        ? void 0
                        : 4,
                    )(t)
                  : i(t);
              };
              function i(r) {
                return e.attempt(eQ, t, n)(r);
              }
            },
          },
          exit: function (e) {
            e.exit('blockQuote');
          },
          name: 'blockQuote',
          tokenize: function (e, t, n) {
            let r = this;
            return function (t) {
              if (62 === t) {
                let n = r.containerState;
                return (
                  n.open || (e.enter('blockQuote', { _container: !0 }), (n.open = !0)),
                  e.enter('blockQuotePrefix'),
                  e.enter('blockQuoteMarker'),
                  e.consume(t),
                  e.exit('blockQuoteMarker'),
                  i
                );
              }
              return n(t);
            };
            function i(n) {
              return eN(n)
                ? (e.enter('blockQuotePrefixWhitespace'),
                  e.consume(n),
                  e.exit('blockQuotePrefixWhitespace'),
                  e.exit('blockQuotePrefix'),
                  t)
                : (e.exit('blockQuotePrefix'), t(n));
            }
          },
        };
      function e0(e, t, n, r, i, a, o, l, s) {
        let u = s || 1 / 0,
          c = 0;
        return function (t) {
          return 60 === t
            ? (e.enter(r), e.enter(i), e.enter(a), e.consume(t), e.exit(a), d)
            : null === t || 32 === t || 41 === t || eE(t)
              ? n(t)
              : (e.enter(r),
                e.enter(o),
                e.enter(l),
                e.enter('chunkString', { contentType: 'string' }),
                h(t));
        };
        function d(n) {
          return 62 === n
            ? (e.enter(a), e.consume(n), e.exit(a), e.exit(i), e.exit(r), t)
            : (e.enter(l), e.enter('chunkString', { contentType: 'string' }), f(n));
        }
        function f(t) {
          return 62 === t
            ? (e.exit('chunkString'), e.exit(l), d(t))
            : null === t || 60 === t || eP(t)
              ? n(t)
              : (e.consume(t), 92 === t ? p : f);
        }
        function p(t) {
          return 60 === t || 62 === t || 92 === t ? (e.consume(t), f) : f(t);
        }
        function h(i) {
          return !c && (null === i || 41 === i || eO(i))
            ? (e.exit('chunkString'), e.exit(l), e.exit(o), e.exit(r), t(i))
            : c < u && 40 === i
              ? (e.consume(i), c++, h)
              : 41 === i
                ? (e.consume(i), c--, h)
                : null === i || 32 === i || 40 === i || eE(i)
                  ? n(i)
                  : (e.consume(i), 92 === i ? m : h);
        }
        function m(t) {
          return 40 === t || 41 === t || 92 === t ? (e.consume(t), h) : h(t);
        }
      }
      function e1(e, t, n, r, i, a) {
        let o,
          l = this,
          s = 0;
        return function (t) {
          return (e.enter(r), e.enter(i), e.consume(t), e.exit(i), e.enter(a), u);
        };
        function u(d) {
          return s > 999 ||
            null === d ||
            91 === d ||
            (93 === d && !o) ||
            (94 === d && !s && '_hiddenFootnoteSupport' in l.parser.constructs)
            ? n(d)
            : 93 === d
              ? (e.exit(a), e.enter(i), e.consume(d), e.exit(i), e.exit(r), t)
              : eP(d)
                ? (e.enter('lineEnding'), e.consume(d), e.exit('lineEnding'), u)
                : (e.enter('chunkString', { contentType: 'string' }), c(d));
        }
        function c(t) {
          return null === t || 91 === t || 93 === t || eP(t) || s++ > 999
            ? (e.exit('chunkString'), u(t))
            : (e.consume(t), o || (o = !eN(t)), 92 === t ? d : c);
        }
        function d(t) {
          return 91 === t || 92 === t || 93 === t ? (e.consume(t), s++, c) : c(t);
        }
      }
      function e2(e, t, n, r, i, a) {
        let o;
        return function (t) {
          return 34 === t || 39 === t || 40 === t
            ? (e.enter(r),
              e.enter(i),
              e.consume(t),
              e.exit(i),
              (o = 40 === t ? 41 : t),
              l)
            : n(t);
        };
        function l(n) {
          return n === o
            ? (e.enter(i), e.consume(n), e.exit(i), e.exit(r), t)
            : (e.enter(a), s(n));
        }
        function s(t) {
          return t === o
            ? (e.exit(a), l(o))
            : null === t
              ? n(t)
              : eP(t)
                ? (e.enter('lineEnding'),
                  e.consume(t),
                  e.exit('lineEnding'),
                  eD(e, s, 'linePrefix'))
                : (e.enter('chunkString', { contentType: 'string' }), u(t));
        }
        function u(t) {
          return t === o || null === t || eP(t)
            ? (e.exit('chunkString'), s(t))
            : (e.consume(t), 92 === t ? c : u);
        }
        function c(t) {
          return t === o || 92 === t ? (e.consume(t), u) : u(t);
        }
      }
      function e4(e, t) {
        let n;
        return function r(i) {
          return eP(i)
            ? (e.enter('lineEnding'), e.consume(i), e.exit('lineEnding'), (n = !0), r)
            : eN(i)
              ? eD(e, r, n ? 'linePrefix' : 'lineSuffix')(i)
              : t(i);
        };
      }
      function e9(e) {
        return e
          .replace(/[\t\n\r ]+/g, ' ')
          .replace(/^ | $/g, '')
          .toLowerCase()
          .toUpperCase();
      }
      let e3 = {
          partial: !0,
          tokenize: function (e, t, n) {
            return function (t) {
              return eO(t) ? e4(e, r)(t) : n(t);
            };
            function r(t) {
              return e2(
                e,
                i,
                n,
                'definitionTitle',
                'definitionTitleMarker',
                'definitionTitleString',
              )(t);
            }
            function i(t) {
              return eN(t) ? eD(e, a, 'whitespace')(t) : a(t);
            }
            function a(e) {
              return null === e || eP(e) ? t(e) : n(e);
            }
          },
        },
        e5 = {
          name: 'codeIndented',
          tokenize: function (e, t, n) {
            let r = this;
            return function (t) {
              return (e.enter('codeIndented'), eD(e, i, 'linePrefix', 5)(t));
            };
            function i(t) {
              let i = r.events[r.events.length - 1];
              return i &&
                'linePrefix' === i[1].type &&
                i[2].sliceSerialize(i[1], !0).length >= 4
                ? (function t(n) {
                    return null === n
                      ? a(n)
                      : eP(n)
                        ? e.attempt(e6, t, a)(n)
                        : (e.enter('codeFlowValue'),
                          (function n(r) {
                            return null === r || eP(r)
                              ? (e.exit('codeFlowValue'), t(r))
                              : (e.consume(r), n);
                          })(n));
                  })(t)
                : n(t);
            }
            function a(n) {
              return (e.exit('codeIndented'), t(n));
            }
          },
        },
        e6 = {
          partial: !0,
          tokenize: function (e, t, n) {
            let r = this;
            return i;
            function i(t) {
              return r.parser.lazy[r.now().line]
                ? n(t)
                : eP(t)
                  ? (e.enter('lineEnding'), e.consume(t), e.exit('lineEnding'), i)
                  : eD(e, a, 'linePrefix', 5)(t);
            }
            function a(e) {
              let a = r.events[r.events.length - 1];
              return a &&
                'linePrefix' === a[1].type &&
                a[2].sliceSerialize(a[1], !0).length >= 4
                ? t(e)
                : eP(e)
                  ? i(e)
                  : n(e);
            }
          },
        },
        e8 = {
          name: 'setextUnderline',
          resolveTo: function (e, t) {
            let n,
              r,
              i,
              a = e.length;
            for (; a--; )
              if ('enter' === e[a][0]) {
                if ('content' === e[a][1].type) {
                  n = a;
                  break;
                }
                'paragraph' === e[a][1].type && (r = a);
              } else
                ('content' === e[a][1].type && e.splice(a, 1),
                  i || 'definition' !== e[a][1].type || (i = a));
            let o = {
              type: 'setextHeading',
              start: { ...e[n][1].start },
              end: { ...e[e.length - 1][1].end },
            };
            return (
              (e[r][1].type = 'setextHeadingText'),
              i
                ? (e.splice(r, 0, ['enter', o, t]),
                  e.splice(i + 1, 0, ['exit', e[n][1], t]),
                  (e[n][1].end = { ...e[i][1].end }))
                : (e[n][1] = o),
              e.push(['exit', o, t]),
              e
            );
          },
          tokenize: function (e, t, n) {
            let r,
              i = this;
            return function (t) {
              var o;
              let l,
                s = i.events.length;
              for (; s--; )
                if (
                  'lineEnding' !== i.events[s][1].type &&
                  'linePrefix' !== i.events[s][1].type &&
                  'content' !== i.events[s][1].type
                ) {
                  l = 'paragraph' === i.events[s][1].type;
                  break;
                }
              return !i.parser.lazy[i.now().line] && (i.interrupt || l)
                ? (e.enter('setextHeadingLine'),
                  (r = t),
                  (o = t),
                  e.enter('setextHeadingLineSequence'),
                  (function t(n) {
                    return n === r
                      ? (e.consume(n), t)
                      : (e.exit('setextHeadingLineSequence'),
                        eN(n) ? eD(e, a, 'lineSuffix')(n) : a(n));
                  })(o))
                : n(t);
            };
            function a(r) {
              return null === r || eP(r) ? (e.exit('setextHeadingLine'), t(r)) : n(r);
            }
          },
        },
        e7 = [
          'address',
          'article',
          'aside',
          'base',
          'basefont',
          'blockquote',
          'body',
          'caption',
          'center',
          'col',
          'colgroup',
          'dd',
          'details',
          'dialog',
          'dir',
          'div',
          'dl',
          'dt',
          'fieldset',
          'figcaption',
          'figure',
          'footer',
          'form',
          'frame',
          'frameset',
          'h1',
          'h2',
          'h3',
          'h4',
          'h5',
          'h6',
          'head',
          'header',
          'hr',
          'html',
          'iframe',
          'legend',
          'li',
          'link',
          'main',
          'menu',
          'menuitem',
          'nav',
          'noframes',
          'ol',
          'optgroup',
          'option',
          'p',
          'param',
          'search',
          'section',
          'summary',
          'table',
          'tbody',
          'td',
          'tfoot',
          'th',
          'thead',
          'title',
          'tr',
          'track',
          'ul',
        ],
        te = ['pre', 'script', 'style', 'textarea'],
        tt = {
          partial: !0,
          tokenize: function (e, t, n) {
            return function (r) {
              return (
                e.enter('lineEnding'),
                e.consume(r),
                e.exit('lineEnding'),
                e.attempt(eF, t, n)
              );
            };
          },
        },
        tn = {
          partial: !0,
          tokenize: function (e, t, n) {
            let r = this;
            return function (t) {
              return eP(t)
                ? (e.enter('lineEnding'), e.consume(t), e.exit('lineEnding'), i)
                : n(t);
            };
            function i(e) {
              return r.parser.lazy[r.now().line] ? n(e) : t(e);
            }
          },
        },
        tr = {
          partial: !0,
          tokenize: function (e, t, n) {
            let r = this;
            return function (t) {
              return null === t
                ? n(t)
                : (e.enter('lineEnding'), e.consume(t), e.exit('lineEnding'), i);
            };
            function i(e) {
              return r.parser.lazy[r.now().line] ? n(e) : t(e);
            }
          },
        },
        ti = {
          concrete: !0,
          name: 'codeFenced',
          tokenize: function (e, t, n) {
            let r,
              i = this,
              a = {
                partial: !0,
                tokenize: function (e, t, n) {
                  let a = 0;
                  return function (t) {
                    return (e.enter('lineEnding'), e.consume(t), e.exit('lineEnding'), o);
                  };
                  function o(t) {
                    return (
                      e.enter('codeFencedFence'),
                      eN(t)
                        ? eD(
                            e,
                            s,
                            'linePrefix',
                            i.parser.constructs.disable.null.includes('codeIndented')
                              ? void 0
                              : 4,
                          )(t)
                        : s(t)
                    );
                  }
                  function s(t) {
                    return t === r
                      ? (e.enter('codeFencedFenceSequence'),
                        (function t(i) {
                          return i === r
                            ? (a++, e.consume(i), t)
                            : a >= l
                              ? (e.exit('codeFencedFenceSequence'),
                                eN(i) ? eD(e, u, 'whitespace')(i) : u(i))
                              : n(i);
                        })(t))
                      : n(t);
                  }
                  function u(r) {
                    return null === r || eP(r) ? (e.exit('codeFencedFence'), t(r)) : n(r);
                  }
                },
              },
              o = 0,
              l = 0;
            return function (t) {
              var a;
              let u;
              return (
                (a = t),
                (o =
                  (u = i.events[i.events.length - 1]) && 'linePrefix' === u[1].type
                    ? u[2].sliceSerialize(u[1], !0).length
                    : 0),
                (r = a),
                e.enter('codeFenced'),
                e.enter('codeFencedFence'),
                e.enter('codeFencedFenceSequence'),
                (function t(i) {
                  return i === r
                    ? (l++, e.consume(i), t)
                    : l < 3
                      ? n(i)
                      : (e.exit('codeFencedFenceSequence'),
                        eN(i) ? eD(e, s, 'whitespace')(i) : s(i));
                })(a)
              );
            };
            function s(a) {
              return null === a || eP(a)
                ? (e.exit('codeFencedFence'), i.interrupt ? t(a) : e.check(tr, c, h)(a))
                : (e.enter('codeFencedFenceInfo'),
                  e.enter('chunkString', { contentType: 'string' }),
                  (function t(i) {
                    return null === i || eP(i)
                      ? (e.exit('chunkString'), e.exit('codeFencedFenceInfo'), s(i))
                      : eN(i)
                        ? (e.exit('chunkString'),
                          e.exit('codeFencedFenceInfo'),
                          eD(e, u, 'whitespace')(i))
                        : 96 === i && i === r
                          ? n(i)
                          : (e.consume(i), t);
                  })(a));
            }
            function u(t) {
              return null === t || eP(t)
                ? s(t)
                : (e.enter('codeFencedFenceMeta'),
                  e.enter('chunkString', { contentType: 'string' }),
                  (function t(i) {
                    return null === i || eP(i)
                      ? (e.exit('chunkString'), e.exit('codeFencedFenceMeta'), s(i))
                      : 96 === i && i === r
                        ? n(i)
                        : (e.consume(i), t);
                  })(t));
            }
            function c(t) {
              return e.attempt(a, h, d)(t);
            }
            function d(t) {
              return (e.enter('lineEnding'), e.consume(t), e.exit('lineEnding'), f);
            }
            function f(t) {
              return o > 0 && eN(t) ? eD(e, p, 'linePrefix', o + 1)(t) : p(t);
            }
            function p(t) {
              return null === t || eP(t)
                ? e.check(tr, c, h)(t)
                : (e.enter('codeFlowValue'),
                  (function t(n) {
                    return null === n || eP(n)
                      ? (e.exit('codeFlowValue'), p(n))
                      : (e.consume(n), t);
                  })(t));
            }
            function h(n) {
              return (e.exit('codeFenced'), t(n));
            }
          },
        },
        ta = document.createElement('i');
      function to(e) {
        let t = '&' + e + ';';
        ta.innerHTML = t;
        let n = ta.textContent;
        return (59 !== n.charCodeAt(n.length - 1) || 'semi' === e) && n !== t && n;
      }
      let tl = {
          name: 'characterReference',
          tokenize: function (e, t, n) {
            let r,
              i,
              a = this,
              o = 0;
            return function (t) {
              return (
                e.enter('characterReference'),
                e.enter('characterReferenceMarker'),
                e.consume(t),
                e.exit('characterReferenceMarker'),
                l
              );
            };
            function l(t) {
              return 35 === t
                ? (e.enter('characterReferenceMarkerNumeric'),
                  e.consume(t),
                  e.exit('characterReferenceMarkerNumeric'),
                  s)
                : (e.enter('characterReferenceValue'), (r = 31), (i = e_), u(t));
            }
            function s(t) {
              return 88 === t || 120 === t
                ? (e.enter('characterReferenceMarkerHexadecimal'),
                  e.consume(t),
                  e.exit('characterReferenceMarkerHexadecimal'),
                  e.enter('characterReferenceValue'),
                  (r = 6),
                  (i = eT),
                  u)
                : (e.enter('characterReferenceValue'), (r = 7), (i = eC), u(t));
            }
            function u(l) {
              if (59 === l && o) {
                let r = e.exit('characterReferenceValue');
                return i !== e_ || to(a.sliceSerialize(r))
                  ? (e.enter('characterReferenceMarker'),
                    e.consume(l),
                    e.exit('characterReferenceMarker'),
                    e.exit('characterReference'),
                    t)
                  : n(l);
              }
              return i(l) && o++ < r ? (e.consume(l), u) : n(l);
            }
          },
        },
        ts = {
          name: 'characterEscape',
          tokenize: function (e, t, n) {
            return function (t) {
              return (
                e.enter('characterEscape'),
                e.enter('escapeMarker'),
                e.consume(t),
                e.exit('escapeMarker'),
                r
              );
            };
            function r(r) {
              return eA(r)
                ? (e.enter('characterEscapeValue'),
                  e.consume(r),
                  e.exit('characterEscapeValue'),
                  e.exit('characterEscape'),
                  t)
                : n(r);
            }
          },
        },
        tu = {
          name: 'lineEnding',
          tokenize: function (e, t) {
            return function (n) {
              return (
                e.enter('lineEnding'),
                e.consume(n),
                e.exit('lineEnding'),
                eD(e, t, 'linePrefix')
              );
            };
          },
        };
      function tc(e, t, n) {
        let r = [],
          i = -1;
        for (; ++i < e.length; ) {
          let a = e[i].resolveAll;
          a && !r.includes(a) && ((t = a(t, n)), r.push(a));
        }
        return t;
      }
      let td = {
          name: 'labelEnd',
          resolveAll: function (e) {
            let t = -1,
              n = [];
            for (; ++t < e.length; ) {
              let r = e[t][1];
              if (
                (n.push(e[t]),
                'labelImage' === r.type ||
                  'labelLink' === r.type ||
                  'labelEnd' === r.type)
              ) {
                let e = 'labelImage' === r.type ? 4 : 2;
                ((r.type = 'data'), (t += e));
              }
            }
            return (e.length !== n.length && eg(e, 0, e.length, n), e);
          },
          resolveTo: function (e, t) {
            let n,
              r,
              i,
              a,
              o = e.length,
              l = 0;
            for (; o--; )
              if (((n = e[o][1]), r)) {
                if ('link' === n.type || ('labelLink' === n.type && n._inactive)) break;
                'enter' === e[o][0] && 'labelLink' === n.type && (n._inactive = !0);
              } else if (i) {
                if (
                  'enter' === e[o][0] &&
                  ('labelImage' === n.type || 'labelLink' === n.type) &&
                  !n._balanced &&
                  ((r = o), 'labelLink' !== n.type)
                ) {
                  l = 2;
                  break;
                }
              } else 'labelEnd' === n.type && (i = o);
            let s = {
                type: 'labelLink' === e[r][1].type ? 'link' : 'image',
                start: { ...e[r][1].start },
                end: { ...e[e.length - 1][1].end },
              },
              u = { type: 'label', start: { ...e[r][1].start }, end: { ...e[i][1].end } },
              c = {
                type: 'labelText',
                start: { ...e[r + l + 2][1].end },
                end: { ...e[i - 2][1].start },
              };
            return (
              (a = ey(
                (a = [
                  ['enter', s, t],
                  ['enter', u, t],
                ]),
                e.slice(r + 1, r + l + 3),
              )),
              (a = ey(a, [['enter', c, t]])),
              (a = ey(
                a,
                tc(t.parser.constructs.insideSpan.null, e.slice(r + l + 4, i - 3), t),
              )),
              (a = ey(a, [['exit', c, t], e[i - 2], e[i - 1], ['exit', u, t]])),
              (a = ey(a, e.slice(i + 1))),
              (a = ey(a, [['exit', s, t]])),
              eg(e, r, e.length, a),
              e
            );
          },
          tokenize: function (e, t, n) {
            let r,
              i,
              a = this,
              o = a.events.length;
            for (; o--; )
              if (
                ('labelImage' === a.events[o][1].type ||
                  'labelLink' === a.events[o][1].type) &&
                !a.events[o][1]._balanced
              ) {
                r = a.events[o][1];
                break;
              }
            return function (t) {
              return r
                ? r._inactive
                  ? c(t)
                  : ((i = a.parser.defined.includes(
                      e9(a.sliceSerialize({ start: r.end, end: a.now() })),
                    )),
                    e.enter('labelEnd'),
                    e.enter('labelMarker'),
                    e.consume(t),
                    e.exit('labelMarker'),
                    e.exit('labelEnd'),
                    l)
                : n(t);
            };
            function l(t) {
              return 40 === t
                ? e.attempt(tf, u, i ? u : c)(t)
                : 91 === t
                  ? e.attempt(tp, u, i ? s : c)(t)
                  : i
                    ? u(t)
                    : c(t);
            }
            function s(t) {
              return e.attempt(th, u, c)(t);
            }
            function u(e) {
              return t(e);
            }
            function c(e) {
              return ((r._balanced = !0), n(e));
            }
          },
        },
        tf = {
          tokenize: function (e, t, n) {
            return function (t) {
              return (
                e.enter('resource'),
                e.enter('resourceMarker'),
                e.consume(t),
                e.exit('resourceMarker'),
                r
              );
            };
            function r(t) {
              return eO(t) ? e4(e, i)(t) : i(t);
            }
            function i(t) {
              return 41 === t
                ? u(t)
                : e0(
                    e,
                    a,
                    o,
                    'resourceDestination',
                    'resourceDestinationLiteral',
                    'resourceDestinationLiteralMarker',
                    'resourceDestinationRaw',
                    'resourceDestinationString',
                    32,
                  )(t);
            }
            function a(t) {
              return eO(t) ? e4(e, l)(t) : u(t);
            }
            function o(e) {
              return n(e);
            }
            function l(t) {
              return 34 === t || 39 === t || 40 === t
                ? e2(
                    e,
                    s,
                    n,
                    'resourceTitle',
                    'resourceTitleMarker',
                    'resourceTitleString',
                  )(t)
                : u(t);
            }
            function s(t) {
              return eO(t) ? e4(e, u)(t) : u(t);
            }
            function u(r) {
              return 41 === r
                ? (e.enter('resourceMarker'),
                  e.consume(r),
                  e.exit('resourceMarker'),
                  e.exit('resource'),
                  t)
                : n(r);
            }
          },
        },
        tp = {
          tokenize: function (e, t, n) {
            let r = this;
            return function (t) {
              return e1.call(
                r,
                e,
                i,
                a,
                'reference',
                'referenceMarker',
                'referenceString',
              )(t);
            };
            function i(e) {
              return r.parser.defined.includes(
                e9(r.sliceSerialize(r.events[r.events.length - 1][1]).slice(1, -1)),
              )
                ? t(e)
                : n(e);
            }
            function a(e) {
              return n(e);
            }
          },
        },
        th = {
          tokenize: function (e, t, n) {
            return function (t) {
              return (
                e.enter('reference'),
                e.enter('referenceMarker'),
                e.consume(t),
                e.exit('referenceMarker'),
                r
              );
            };
            function r(r) {
              return 93 === r
                ? (e.enter('referenceMarker'),
                  e.consume(r),
                  e.exit('referenceMarker'),
                  e.exit('reference'),
                  t)
                : n(r);
            }
          },
        },
        tm = {
          name: 'labelStartImage',
          resolveAll: td.resolveAll,
          tokenize: function (e, t, n) {
            let r = this;
            return function (t) {
              return (
                e.enter('labelImage'),
                e.enter('labelImageMarker'),
                e.consume(t),
                e.exit('labelImageMarker'),
                i
              );
            };
            function i(t) {
              return 91 === t
                ? (e.enter('labelMarker'),
                  e.consume(t),
                  e.exit('labelMarker'),
                  e.exit('labelImage'),
                  a)
                : n(t);
            }
            function a(e) {
              return 94 === e && '_hiddenFootnoteSupport' in r.parser.constructs
                ? n(e)
                : t(e);
            }
          },
        };
      function tg(e) {
        return null === e || eO(e) || eI(e) ? 1 : eR(e) ? 2 : void 0;
      }
      let ty = {
        name: 'attention',
        resolveAll: function (e, t) {
          let n,
            r,
            i,
            a,
            o,
            l,
            s,
            u,
            c = -1;
          for (; ++c < e.length; )
            if (
              'enter' === e[c][0] &&
              'attentionSequence' === e[c][1].type &&
              e[c][1]._close
            ) {
              for (n = c; n--; )
                if (
                  'exit' === e[n][0] &&
                  'attentionSequence' === e[n][1].type &&
                  e[n][1]._open &&
                  t.sliceSerialize(e[n][1]).charCodeAt(0) ===
                    t.sliceSerialize(e[c][1]).charCodeAt(0)
                ) {
                  if (
                    (e[n][1]._close || e[c][1]._open) &&
                    (e[c][1].end.offset - e[c][1].start.offset) % 3 &&
                    !(
                      (e[n][1].end.offset -
                        e[n][1].start.offset +
                        e[c][1].end.offset -
                        e[c][1].start.offset) %
                      3
                    )
                  )
                    continue;
                  l =
                    e[n][1].end.offset - e[n][1].start.offset > 1 &&
                    e[c][1].end.offset - e[c][1].start.offset > 1
                      ? 2
                      : 1;
                  let d = { ...e[n][1].end },
                    f = { ...e[c][1].start };
                  (tv(d, -l),
                    tv(f, l),
                    (a = {
                      type: l > 1 ? 'strongSequence' : 'emphasisSequence',
                      start: d,
                      end: { ...e[n][1].end },
                    }),
                    (o = {
                      type: l > 1 ? 'strongSequence' : 'emphasisSequence',
                      start: { ...e[c][1].start },
                      end: f,
                    }),
                    (i = {
                      type: l > 1 ? 'strongText' : 'emphasisText',
                      start: { ...e[n][1].end },
                      end: { ...e[c][1].start },
                    }),
                    (r = {
                      type: l > 1 ? 'strong' : 'emphasis',
                      start: { ...a.start },
                      end: { ...o.end },
                    }),
                    (e[n][1].end = { ...a.start }),
                    (e[c][1].start = { ...o.end }),
                    (s = []),
                    e[n][1].end.offset - e[n][1].start.offset &&
                      (s = ey(s, [
                        ['enter', e[n][1], t],
                        ['exit', e[n][1], t],
                      ])),
                    (s = ey(s, [
                      ['enter', r, t],
                      ['enter', a, t],
                      ['exit', a, t],
                      ['enter', i, t],
                    ])),
                    (s = ey(
                      s,
                      tc(t.parser.constructs.insideSpan.null, e.slice(n + 1, c), t),
                    )),
                    (s = ey(s, [
                      ['exit', i, t],
                      ['enter', o, t],
                      ['exit', o, t],
                      ['exit', r, t],
                    ])),
                    e[c][1].end.offset - e[c][1].start.offset
                      ? ((u = 2),
                        (s = ey(s, [
                          ['enter', e[c][1], t],
                          ['exit', e[c][1], t],
                        ])))
                      : (u = 0),
                    eg(e, n - 1, c - n + 3, s),
                    (c = n + s.length - u - 2));
                  break;
                }
            }
          for (c = -1; ++c < e.length; )
            'attentionSequence' === e[c][1].type && (e[c][1].type = 'data');
          return e;
        },
        tokenize: function (e, t) {
          let n,
            r = this.parser.constructs.attentionMarkers.null,
            i = this.previous,
            a = tg(i);
          return function (o) {
            return (
              (n = o),
              e.enter('attentionSequence'),
              (function o(l) {
                if (l === n) return (e.consume(l), o);
                let s = e.exit('attentionSequence'),
                  u = tg(l),
                  c = !u || (2 === u && a) || r.includes(l),
                  d = !a || (2 === a && u) || r.includes(i);
                return (
                  (s._open = !!(42 === n ? c : c && (a || !d))),
                  (s._close = !!(42 === n ? d : d && (u || !c))),
                  t(l)
                );
              })(o)
            );
          };
        },
      };
      function tv(e, t) {
        ((e.column += t), (e.offset += t), (e._bufferIndex += t));
      }
      let tx = {
          name: 'labelStartLink',
          resolveAll: td.resolveAll,
          tokenize: function (e, t, n) {
            let r = this;
            return function (t) {
              return (
                e.enter('labelLink'),
                e.enter('labelMarker'),
                e.consume(t),
                e.exit('labelMarker'),
                e.exit('labelLink'),
                i
              );
            };
            function i(e) {
              return 94 === e && '_hiddenFootnoteSupport' in r.parser.constructs
                ? n(e)
                : t(e);
            }
          },
        },
        tb = {
          42: eX,
          43: eX,
          45: eX,
          48: eX,
          49: eX,
          50: eX,
          51: eX,
          52: eX,
          53: eX,
          54: eX,
          55: eX,
          56: eX,
          57: eX,
          62: eQ,
        },
        tk = {
          91: {
            name: 'definition',
            tokenize: function (e, t, n) {
              let r,
                i = this;
              return function (t) {
                var r;
                return (
                  e.enter('definition'),
                  (r = t),
                  e1.call(
                    i,
                    e,
                    a,
                    n,
                    'definitionLabel',
                    'definitionLabelMarker',
                    'definitionLabelString',
                  )(r)
                );
              };
              function a(t) {
                return ((r = e9(
                  i.sliceSerialize(i.events[i.events.length - 1][1]).slice(1, -1),
                )),
                58 === t)
                  ? (e.enter('definitionMarker'),
                    e.consume(t),
                    e.exit('definitionMarker'),
                    o)
                  : n(t);
              }
              function o(t) {
                return eO(t) ? e4(e, l)(t) : l(t);
              }
              function l(t) {
                return e0(
                  e,
                  s,
                  n,
                  'definitionDestination',
                  'definitionDestinationLiteral',
                  'definitionDestinationLiteralMarker',
                  'definitionDestinationRaw',
                  'definitionDestinationString',
                )(t);
              }
              function s(t) {
                return e.attempt(e3, u, u)(t);
              }
              function u(t) {
                return eN(t) ? eD(e, c, 'whitespace')(t) : c(t);
              }
              function c(a) {
                return null === a || eP(a)
                  ? (e.exit('definition'), i.parser.defined.push(r), t(a))
                  : n(a);
              }
            },
          },
        },
        tw = { [-2]: e5, [-1]: e5, 32: e5 },
        t_ = {
          35: {
            name: 'headingAtx',
            resolve: function (e, t) {
              let n,
                r,
                i = e.length - 2,
                a = 3;
              return (
                'whitespace' === e[3][1].type && (a += 2),
                i - 2 > a && 'whitespace' === e[i][1].type && (i -= 2),
                'atxHeadingSequence' === e[i][1].type &&
                  (a === i - 1 || (i - 4 > a && 'whitespace' === e[i - 2][1].type)) &&
                  (i -= a + 1 === i ? 2 : 4),
                i > a &&
                  ((n = {
                    type: 'atxHeadingText',
                    start: e[a][1].start,
                    end: e[i][1].end,
                  }),
                  (r = {
                    type: 'chunkText',
                    start: e[a][1].start,
                    end: e[i][1].end,
                    contentType: 'text',
                  }),
                  eg(e, a, i - a + 1, [
                    ['enter', n, t],
                    ['enter', r, t],
                    ['exit', r, t],
                    ['exit', n, t],
                  ])),
                e
              );
            },
            tokenize: function (e, t, n) {
              let r = 0;
              return function (i) {
                var a;
                return (
                  e.enter('atxHeading'),
                  (a = i),
                  e.enter('atxHeadingSequence'),
                  (function i(a) {
                    return 35 === a && r++ < 6
                      ? (e.consume(a), i)
                      : null === a || eO(a)
                        ? (e.exit('atxHeadingSequence'),
                          (function n(r) {
                            return 35 === r
                              ? (e.enter('atxHeadingSequence'),
                                (function t(r) {
                                  return 35 === r
                                    ? (e.consume(r), t)
                                    : (e.exit('atxHeadingSequence'), n(r));
                                })(r))
                              : null === r || eP(r)
                                ? (e.exit('atxHeading'), t(r))
                                : eN(r)
                                  ? eD(e, n, 'whitespace')(r)
                                  : (e.enter('atxHeadingText'),
                                    (function t(r) {
                                      return null === r || 35 === r || eO(r)
                                        ? (e.exit('atxHeadingText'), n(r))
                                        : (e.consume(r), t);
                                    })(r));
                          })(a))
                        : n(a);
                  })(a)
                );
              };
            },
          },
          42: eY,
          45: [e8, eY],
          60: {
            concrete: !0,
            name: 'htmlFlow',
            resolveTo: function (e) {
              let t = e.length;
              for (; t-- && ('enter' !== e[t][0] || 'htmlFlow' !== e[t][1].type); );
              return (
                t > 1 &&
                  'linePrefix' === e[t - 2][1].type &&
                  ((e[t][1].start = e[t - 2][1].start),
                  (e[t + 1][1].start = e[t - 2][1].start),
                  e.splice(t - 2, 2)),
                e
              );
            },
            tokenize: function (e, t, n) {
              let r,
                i,
                a,
                o,
                l,
                s = this;
              return function (t) {
                var n;
                return (
                  (n = t),
                  e.enter('htmlFlow'),
                  e.enter('htmlFlowData'),
                  e.consume(n),
                  u
                );
              };
              function u(o) {
                return 33 === o
                  ? (e.consume(o), c)
                  : 47 === o
                    ? (e.consume(o), (i = !0), p)
                    : 63 === o
                      ? (e.consume(o), (r = 3), s.interrupt ? t : R)
                      : ew(o)
                        ? (e.consume(o), (a = String.fromCharCode(o)), h)
                        : n(o);
              }
              function c(i) {
                return 45 === i
                  ? (e.consume(i), (r = 2), d)
                  : 91 === i
                    ? (e.consume(i), (r = 5), (o = 0), f)
                    : ew(i)
                      ? (e.consume(i), (r = 4), s.interrupt ? t : R)
                      : n(i);
              }
              function d(r) {
                return 45 === r ? (e.consume(r), s.interrupt ? t : R) : n(r);
              }
              function f(r) {
                let i = 'CDATA[';
                return r === i.charCodeAt(o++)
                  ? (e.consume(r), o === i.length)
                    ? s.interrupt
                      ? t
                      : S
                    : f
                  : n(r);
              }
              function p(t) {
                return ew(t) ? (e.consume(t), (a = String.fromCharCode(t)), h) : n(t);
              }
              function h(o) {
                if (null === o || 47 === o || 62 === o || eO(o)) {
                  let l = 47 === o,
                    u = a.toLowerCase();
                  return !l && !i && te.includes(u)
                    ? ((r = 1), s.interrupt ? t(o) : S(o))
                    : e7.includes(a.toLowerCase())
                      ? ((r = 6), l)
                        ? (e.consume(o), m)
                        : s.interrupt
                          ? t(o)
                          : S(o)
                      : ((r = 7),
                        s.interrupt && !s.parser.lazy[s.now().line]
                          ? n(o)
                          : i
                            ? (function t(n) {
                                return eN(n) ? (e.consume(n), t) : w(n);
                              })(o)
                            : g(o));
                }
                return 45 === o || e_(o)
                  ? (e.consume(o), (a += String.fromCharCode(o)), h)
                  : n(o);
              }
              function m(r) {
                return 62 === r ? (e.consume(r), s.interrupt ? t : S) : n(r);
              }
              function g(t) {
                return 47 === t
                  ? (e.consume(t), w)
                  : 58 === t || 95 === t || ew(t)
                    ? (e.consume(t), y)
                    : eN(t)
                      ? (e.consume(t), g)
                      : w(t);
              }
              function y(t) {
                return 45 === t || 46 === t || 58 === t || 95 === t || e_(t)
                  ? (e.consume(t), y)
                  : v(t);
              }
              function v(t) {
                return 61 === t ? (e.consume(t), x) : eN(t) ? (e.consume(t), v) : g(t);
              }
              function x(t) {
                return null === t || 60 === t || 61 === t || 62 === t || 96 === t
                  ? n(t)
                  : 34 === t || 39 === t
                    ? (e.consume(t), (l = t), b)
                    : eN(t)
                      ? (e.consume(t), x)
                      : (function t(n) {
                          return null === n ||
                            34 === n ||
                            39 === n ||
                            47 === n ||
                            60 === n ||
                            61 === n ||
                            62 === n ||
                            96 === n ||
                            eO(n)
                            ? v(n)
                            : (e.consume(n), t);
                        })(t);
              }
              function b(t) {
                return t === l
                  ? (e.consume(t), (l = null), k)
                  : null === t || eP(t)
                    ? n(t)
                    : (e.consume(t), b);
              }
              function k(e) {
                return 47 === e || 62 === e || eN(e) ? g(e) : n(e);
              }
              function w(t) {
                return 62 === t ? (e.consume(t), _) : n(t);
              }
              function _(t) {
                return null === t || eP(t) ? S(t) : eN(t) ? (e.consume(t), _) : n(t);
              }
              function S(t) {
                return 45 === t && 2 === r
                  ? (e.consume(t), A)
                  : 60 === t && 1 === r
                    ? (e.consume(t), P)
                    : 62 === t && 4 === r
                      ? (e.consume(t), I)
                      : 63 === t && 3 === r
                        ? (e.consume(t), R)
                        : 93 === t && 5 === r
                          ? (e.consume(t), N)
                          : eP(t) && (6 === r || 7 === r)
                            ? (e.exit('htmlFlowData'), e.check(tt, L, E)(t))
                            : null === t || eP(t)
                              ? (e.exit('htmlFlowData'), E(t))
                              : (e.consume(t), S);
              }
              function E(t) {
                return e.check(tn, C, L)(t);
              }
              function C(t) {
                return (e.enter('lineEnding'), e.consume(t), e.exit('lineEnding'), T);
              }
              function T(t) {
                return null === t || eP(t) ? E(t) : (e.enter('htmlFlowData'), S(t));
              }
              function A(t) {
                return 45 === t ? (e.consume(t), R) : S(t);
              }
              function P(t) {
                return 47 === t ? (e.consume(t), (a = ''), O) : S(t);
              }
              function O(t) {
                if (62 === t) {
                  let n = a.toLowerCase();
                  return te.includes(n) ? (e.consume(t), I) : S(t);
                }
                return ew(t) && a.length < 8
                  ? (e.consume(t), (a += String.fromCharCode(t)), O)
                  : S(t);
              }
              function N(t) {
                return 93 === t ? (e.consume(t), R) : S(t);
              }
              function R(t) {
                return 62 === t
                  ? (e.consume(t), I)
                  : 45 === t && 2 === r
                    ? (e.consume(t), R)
                    : S(t);
              }
              function I(t) {
                return null === t || eP(t)
                  ? (e.exit('htmlFlowData'), L(t))
                  : (e.consume(t), I);
              }
              function L(n) {
                return (e.exit('htmlFlow'), t(n));
              }
            },
          },
          61: e8,
          95: eY,
          96: ti,
          126: ti,
        },
        tS = { 38: tl, 92: ts },
        tE = {
          [-5]: tu,
          [-4]: tu,
          [-3]: tu,
          33: tm,
          38: tl,
          42: ty,
          60: [
            {
              name: 'autolink',
              tokenize: function (e, t, n) {
                let r = 0;
                return function (t) {
                  return (
                    e.enter('autolink'),
                    e.enter('autolinkMarker'),
                    e.consume(t),
                    e.exit('autolinkMarker'),
                    e.enter('autolinkProtocol'),
                    i
                  );
                };
                function i(t) {
                  return ew(t) ? (e.consume(t), a) : 64 === t ? n(t) : l(t);
                }
                function a(t) {
                  return 43 === t || 45 === t || 46 === t || e_(t)
                    ? ((r = 1),
                      (function t(n) {
                        return 58 === n
                          ? (e.consume(n), (r = 0), o)
                          : (43 === n || 45 === n || 46 === n || e_(n)) && r++ < 32
                            ? (e.consume(n), t)
                            : ((r = 0), l(n));
                      })(t))
                    : l(t);
                }
                function o(r) {
                  return 62 === r
                    ? (e.exit('autolinkProtocol'),
                      e.enter('autolinkMarker'),
                      e.consume(r),
                      e.exit('autolinkMarker'),
                      e.exit('autolink'),
                      t)
                    : null === r || 32 === r || 60 === r || eE(r)
                      ? n(r)
                      : (e.consume(r), o);
                }
                function l(t) {
                  return 64 === t ? (e.consume(t), s) : eS(t) ? (e.consume(t), l) : n(t);
                }
                function s(i) {
                  return e_(i)
                    ? (function i(a) {
                        return 46 === a
                          ? (e.consume(a), (r = 0), s)
                          : 62 === a
                            ? ((e.exit('autolinkProtocol').type = 'autolinkEmail'),
                              e.enter('autolinkMarker'),
                              e.consume(a),
                              e.exit('autolinkMarker'),
                              e.exit('autolink'),
                              t)
                            : (function t(a) {
                                if ((45 === a || e_(a)) && r++ < 63) {
                                  let n = 45 === a ? t : i;
                                  return (e.consume(a), n);
                                }
                                return n(a);
                              })(a);
                      })(i)
                    : n(i);
                }
              },
            },
            {
              name: 'htmlText',
              tokenize: function (e, t, n) {
                let r,
                  i,
                  a,
                  o = this;
                return function (t) {
                  return (e.enter('htmlText'), e.enter('htmlTextData'), e.consume(t), l);
                };
                function l(t) {
                  return 33 === t
                    ? (e.consume(t), s)
                    : 47 === t
                      ? (e.consume(t), b)
                      : 63 === t
                        ? (e.consume(t), v)
                        : ew(t)
                          ? (e.consume(t), w)
                          : n(t);
                }
                function s(t) {
                  return 45 === t
                    ? (e.consume(t), u)
                    : 91 === t
                      ? (e.consume(t), (i = 0), p)
                      : ew(t)
                        ? (e.consume(t), y)
                        : n(t);
                }
                function u(t) {
                  return 45 === t ? (e.consume(t), f) : n(t);
                }
                function c(t) {
                  return null === t
                    ? n(t)
                    : 45 === t
                      ? (e.consume(t), d)
                      : eP(t)
                        ? ((a = c), O(t))
                        : (e.consume(t), c);
                }
                function d(t) {
                  return 45 === t ? (e.consume(t), f) : c(t);
                }
                function f(e) {
                  return 62 === e ? P(e) : 45 === e ? d(e) : c(e);
                }
                function p(t) {
                  let r = 'CDATA[';
                  return t === r.charCodeAt(i++)
                    ? (e.consume(t), i === r.length ? h : p)
                    : n(t);
                }
                function h(t) {
                  return null === t
                    ? n(t)
                    : 93 === t
                      ? (e.consume(t), m)
                      : eP(t)
                        ? ((a = h), O(t))
                        : (e.consume(t), h);
                }
                function m(t) {
                  return 93 === t ? (e.consume(t), g) : h(t);
                }
                function g(t) {
                  return 62 === t ? P(t) : 93 === t ? (e.consume(t), g) : h(t);
                }
                function y(t) {
                  return null === t || 62 === t
                    ? P(t)
                    : eP(t)
                      ? ((a = y), O(t))
                      : (e.consume(t), y);
                }
                function v(t) {
                  return null === t
                    ? n(t)
                    : 63 === t
                      ? (e.consume(t), x)
                      : eP(t)
                        ? ((a = v), O(t))
                        : (e.consume(t), v);
                }
                function x(e) {
                  return 62 === e ? P(e) : v(e);
                }
                function b(t) {
                  return ew(t) ? (e.consume(t), k) : n(t);
                }
                function k(t) {
                  return 45 === t || e_(t)
                    ? (e.consume(t), k)
                    : (function t(n) {
                        return eP(n) ? ((a = t), O(n)) : eN(n) ? (e.consume(n), t) : P(n);
                      })(t);
                }
                function w(t) {
                  return 45 === t || e_(t)
                    ? (e.consume(t), w)
                    : 47 === t || 62 === t || eO(t)
                      ? _(t)
                      : n(t);
                }
                function _(t) {
                  return 47 === t
                    ? (e.consume(t), P)
                    : 58 === t || 95 === t || ew(t)
                      ? (e.consume(t), S)
                      : eP(t)
                        ? ((a = _), O(t))
                        : eN(t)
                          ? (e.consume(t), _)
                          : P(t);
                }
                function S(t) {
                  return 45 === t || 46 === t || 58 === t || 95 === t || e_(t)
                    ? (e.consume(t), S)
                    : (function t(n) {
                        return 61 === n
                          ? (e.consume(n), E)
                          : eP(n)
                            ? ((a = t), O(n))
                            : eN(n)
                              ? (e.consume(n), t)
                              : _(n);
                      })(t);
                }
                function E(t) {
                  return null === t || 60 === t || 61 === t || 62 === t || 96 === t
                    ? n(t)
                    : 34 === t || 39 === t
                      ? (e.consume(t), (r = t), C)
                      : eP(t)
                        ? ((a = E), O(t))
                        : eN(t)
                          ? (e.consume(t), E)
                          : (e.consume(t), T);
                }
                function C(t) {
                  return t === r
                    ? (e.consume(t), (r = void 0), A)
                    : null === t
                      ? n(t)
                      : eP(t)
                        ? ((a = C), O(t))
                        : (e.consume(t), C);
                }
                function T(t) {
                  return null === t ||
                    34 === t ||
                    39 === t ||
                    60 === t ||
                    61 === t ||
                    96 === t
                    ? n(t)
                    : 47 === t || 62 === t || eO(t)
                      ? _(t)
                      : (e.consume(t), T);
                }
                function A(e) {
                  return 47 === e || 62 === e || eO(e) ? _(e) : n(e);
                }
                function P(r) {
                  return 62 === r
                    ? (e.consume(r), e.exit('htmlTextData'), e.exit('htmlText'), t)
                    : n(r);
                }
                function O(t) {
                  return (
                    e.exit('htmlTextData'),
                    e.enter('lineEnding'),
                    e.consume(t),
                    e.exit('lineEnding'),
                    N
                  );
                }
                function N(t) {
                  return eN(t)
                    ? eD(
                        e,
                        R,
                        'linePrefix',
                        o.parser.constructs.disable.null.includes('codeIndented')
                          ? void 0
                          : 4,
                      )(t)
                    : R(t);
                }
                function R(t) {
                  return (e.enter('htmlTextData'), a(t));
                }
              },
            },
          ],
          91: tx,
          92: [
            {
              name: 'hardBreakEscape',
              tokenize: function (e, t, n) {
                return function (t) {
                  return (e.enter('hardBreakEscape'), e.consume(t), r);
                };
                function r(r) {
                  return eP(r) ? (e.exit('hardBreakEscape'), t(r)) : n(r);
                }
              },
            },
            ts,
          ],
          93: td,
          95: ty,
          96: {
            name: 'codeText',
            previous: function (e) {
              return (
                96 !== e ||
                'characterEscape' === this.events[this.events.length - 1][1].type
              );
            },
            resolve: function (e) {
              let t,
                n,
                r = e.length - 4,
                i = 3;
              if (
                ('lineEnding' === e[3][1].type || 'space' === e[i][1].type) &&
                ('lineEnding' === e[r][1].type || 'space' === e[r][1].type)
              ) {
                for (t = i; ++t < r; )
                  if ('codeTextData' === e[t][1].type) {
                    ((e[i][1].type = 'codeTextPadding'),
                      (e[r][1].type = 'codeTextPadding'),
                      (i += 2),
                      (r -= 2));
                    break;
                  }
              }
              for (t = i - 1, r++; ++t <= r; )
                void 0 === n
                  ? t !== r && 'lineEnding' !== e[t][1].type && (n = t)
                  : (t === r || 'lineEnding' === e[t][1].type) &&
                    ((e[n][1].type = 'codeTextData'),
                    t !== n + 2 &&
                      ((e[n][1].end = e[t - 1][1].end),
                      e.splice(n + 2, t - n - 2),
                      (r -= t - n - 2),
                      (t = n + 2)),
                    (n = void 0));
              return e;
            },
            tokenize: function (e, t, n) {
              let r,
                i,
                a = 0;
              return function (t) {
                return (
                  e.enter('codeText'),
                  e.enter('codeTextSequence'),
                  (function t(n) {
                    return 96 === n
                      ? (e.consume(n), a++, t)
                      : (e.exit('codeTextSequence'), o(n));
                  })(t)
                );
              };
              function o(s) {
                return null === s
                  ? n(s)
                  : 32 === s
                    ? (e.enter('space'), e.consume(s), e.exit('space'), o)
                    : 96 === s
                      ? ((i = e.enter('codeTextSequence')),
                        (r = 0),
                        (function n(o) {
                          return 96 === o
                            ? (e.consume(o), r++, n)
                            : r === a
                              ? (e.exit('codeTextSequence'), e.exit('codeText'), t(o))
                              : ((i.type = 'codeTextData'), l(o));
                        })(s))
                      : eP(s)
                        ? (e.enter('lineEnding'), e.consume(s), e.exit('lineEnding'), o)
                        : (e.enter('codeTextData'), l(s));
              }
              function l(t) {
                return null === t || 32 === t || 96 === t || eP(t)
                  ? (e.exit('codeTextData'), o(t))
                  : (e.consume(t), l);
              }
            },
          },
        },
        tC = { null: [ty, e$] },
        tT = { null: [42, 95] },
        tA = { null: [] },
        tP = /[\0\t\n\r]/g;
      function tO(e, t) {
        let n = Number.parseInt(e, t);
        return n < 9 ||
          11 === n ||
          (n > 13 && n < 32) ||
          (n > 126 && n < 160) ||
          (n > 55295 && n < 57344) ||
          (n > 64975 && n < 65008) ||
          (65535 & n) == 65535 ||
          (65535 & n) == 65534 ||
          n > 1114111
          ? '�'
          : String.fromCodePoint(n);
      }
      let tN = /\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;
      function tR(e, t, n) {
        if (t) return t;
        if (35 === n.charCodeAt(0)) {
          let e = n.charCodeAt(1),
            t = 120 === e || 88 === e;
          return tO(n.slice(t ? 2 : 1), t ? 16 : 10);
        }
        return to(n) || e;
      }
      let tI = {}.hasOwnProperty;
      function tL(e) {
        return { line: e.line, column: e.column, offset: e.offset };
      }
      function tD(e, t) {
        if (e)
          throw Error(
            'Cannot close `' +
              e.type +
              '` (' +
              q({ start: e.start, end: e.end }) +
              '): a different token (`' +
              t.type +
              '`, ' +
              q({ start: t.start, end: t.end }) +
              ') is open',
          );
        throw Error(
          'Cannot close document, a token (`' +
            t.type +
            '`, ' +
            q({ start: t.start, end: t.end }) +
            ') is still open',
        );
      }
      function tM(e) {
        let t = this;
        t.parser = function (n) {
          var r, a;
          let o, l, s, u;
          return (
            'string' !=
              typeof (r = {
                ...t.data('settings'),
                ...e,
                extensions: t.data('micromarkExtensions') || [],
                mdastExtensions: t.data('fromMarkdownExtensions') || [],
              }) && ((a = r), (r = void 0)),
            (function (e) {
              let t = {
                transforms: [],
                canContainEols: [
                  'emphasis',
                  'fragment',
                  'heading',
                  'paragraph',
                  'strong',
                ],
                enter: {
                  autolink: r(y),
                  autolinkProtocol: u,
                  autolinkEmail: u,
                  atxHeading: r(h),
                  blockQuote: r(function () {
                    return { type: 'blockquote', children: [] };
                  }),
                  characterEscape: u,
                  characterReference: u,
                  codeFenced: r(p),
                  codeFencedFenceInfo: i,
                  codeFencedFenceMeta: i,
                  codeIndented: r(p, i),
                  codeText: r(function () {
                    return { type: 'inlineCode', value: '' };
                  }, i),
                  codeTextData: u,
                  data: u,
                  codeFlowValue: u,
                  definition: r(function () {
                    return {
                      type: 'definition',
                      identifier: '',
                      label: null,
                      title: null,
                      url: '',
                    };
                  }),
                  definitionDestinationString: i,
                  definitionLabelString: i,
                  definitionTitleString: i,
                  emphasis: r(function () {
                    return { type: 'emphasis', children: [] };
                  }),
                  hardBreakEscape: r(m),
                  hardBreakTrailing: r(m),
                  htmlFlow: r(g, i),
                  htmlFlowData: u,
                  htmlText: r(g, i),
                  htmlTextData: u,
                  image: r(function () {
                    return { type: 'image', title: null, url: '', alt: null };
                  }),
                  label: i,
                  link: r(y),
                  listItem: r(function (e) {
                    return {
                      type: 'listItem',
                      spread: e._spread,
                      checked: null,
                      children: [],
                    };
                  }),
                  listItemValue: function (e) {
                    this.data.expectingFirstListItemValue &&
                      ((this.stack[this.stack.length - 2].start = Number.parseInt(
                        this.sliceSerialize(e),
                        10,
                      )),
                      (this.data.expectingFirstListItemValue = void 0));
                  },
                  listOrdered: r(v, function () {
                    this.data.expectingFirstListItemValue = !0;
                  }),
                  listUnordered: r(v),
                  paragraph: r(function () {
                    return { type: 'paragraph', children: [] };
                  }),
                  reference: function () {
                    this.data.referenceType = 'collapsed';
                  },
                  referenceString: i,
                  resourceDestinationString: i,
                  resourceTitleString: i,
                  setextHeading: r(h),
                  strong: r(function () {
                    return { type: 'strong', children: [] };
                  }),
                  thematicBreak: r(function () {
                    return { type: 'thematicBreak' };
                  }),
                },
                exit: {
                  atxHeading: o(),
                  atxHeadingSequence: function (e) {
                    let t = this.stack[this.stack.length - 1];
                    t.depth || (t.depth = this.sliceSerialize(e).length);
                  },
                  autolink: o(),
                  autolinkEmail: function (e) {
                    (c.call(this, e),
                      (this.stack[this.stack.length - 1].url =
                        'mailto:' + this.sliceSerialize(e)));
                  },
                  autolinkProtocol: function (e) {
                    (c.call(this, e),
                      (this.stack[this.stack.length - 1].url = this.sliceSerialize(e)));
                  },
                  blockQuote: o(),
                  characterEscapeValue: c,
                  characterReferenceMarkerHexadecimal: f,
                  characterReferenceMarkerNumeric: f,
                  characterReferenceValue: function (e) {
                    let t,
                      n = this.sliceSerialize(e),
                      r = this.data.characterReferenceType;
                    r
                      ? ((t = tO(n, 'characterReferenceMarkerNumeric' === r ? 10 : 16)),
                        (this.data.characterReferenceType = void 0))
                      : (t = to(n));
                    let i = this.stack[this.stack.length - 1];
                    i.value += t;
                  },
                  characterReference: function (e) {
                    this.stack.pop().position.end = tL(e.end);
                  },
                  codeFenced: o(function () {
                    let e = this.resume();
                    ((this.stack[this.stack.length - 1].value = e.replace(
                      /^(\r?\n|\r)|(\r?\n|\r)$/g,
                      '',
                    )),
                      (this.data.flowCodeInside = void 0));
                  }),
                  codeFencedFence: function () {
                    this.data.flowCodeInside ||
                      (this.buffer(), (this.data.flowCodeInside = !0));
                  },
                  codeFencedFenceInfo: function () {
                    let e = this.resume();
                    this.stack[this.stack.length - 1].lang = e;
                  },
                  codeFencedFenceMeta: function () {
                    let e = this.resume();
                    this.stack[this.stack.length - 1].meta = e;
                  },
                  codeFlowValue: c,
                  codeIndented: o(function () {
                    let e = this.resume();
                    this.stack[this.stack.length - 1].value = e.replace(
                      /(\r?\n|\r)$/g,
                      '',
                    );
                  }),
                  codeText: o(function () {
                    let e = this.resume();
                    this.stack[this.stack.length - 1].value = e;
                  }),
                  codeTextData: c,
                  data: c,
                  definition: o(),
                  definitionDestinationString: function () {
                    let e = this.resume();
                    this.stack[this.stack.length - 1].url = e;
                  },
                  definitionLabelString: function (e) {
                    let t = this.resume(),
                      n = this.stack[this.stack.length - 1];
                    ((n.label = t),
                      (n.identifier = e9(this.sliceSerialize(e)).toLowerCase()));
                  },
                  definitionTitleString: function () {
                    let e = this.resume();
                    this.stack[this.stack.length - 1].title = e;
                  },
                  emphasis: o(),
                  hardBreakEscape: o(d),
                  hardBreakTrailing: o(d),
                  htmlFlow: o(function () {
                    let e = this.resume();
                    this.stack[this.stack.length - 1].value = e;
                  }),
                  htmlFlowData: c,
                  htmlText: o(function () {
                    let e = this.resume();
                    this.stack[this.stack.length - 1].value = e;
                  }),
                  htmlTextData: c,
                  image: o(function () {
                    let e = this.stack[this.stack.length - 1];
                    if (this.data.inReference) {
                      let t = this.data.referenceType || 'shortcut';
                      ((e.type += 'Reference'),
                        (e.referenceType = t),
                        delete e.url,
                        delete e.title);
                    } else (delete e.identifier, delete e.label);
                    this.data.referenceType = void 0;
                  }),
                  label: function () {
                    let e = this.stack[this.stack.length - 1],
                      t = this.resume(),
                      n = this.stack[this.stack.length - 1];
                    ((this.data.inReference = !0),
                      'link' === n.type ? (n.children = e.children) : (n.alt = t));
                  },
                  labelText: function (e) {
                    let t = this.sliceSerialize(e),
                      n = this.stack[this.stack.length - 2];
                    ((n.label = t.replace(tN, tR)), (n.identifier = e9(t).toLowerCase()));
                  },
                  lineEnding: function (e) {
                    let n = this.stack[this.stack.length - 1];
                    if (this.data.atHardBreak) {
                      ((n.children[n.children.length - 1].position.end = tL(e.end)),
                        (this.data.atHardBreak = void 0));
                      return;
                    }
                    !this.data.setextHeadingSlurpLineEnding &&
                      t.canContainEols.includes(n.type) &&
                      (u.call(this, e), c.call(this, e));
                  },
                  link: o(function () {
                    let e = this.stack[this.stack.length - 1];
                    if (this.data.inReference) {
                      let t = this.data.referenceType || 'shortcut';
                      ((e.type += 'Reference'),
                        (e.referenceType = t),
                        delete e.url,
                        delete e.title);
                    } else (delete e.identifier, delete e.label);
                    this.data.referenceType = void 0;
                  }),
                  listItem: o(),
                  listOrdered: o(),
                  listUnordered: o(),
                  paragraph: o(),
                  referenceString: function (e) {
                    let t = this.resume(),
                      n = this.stack[this.stack.length - 1];
                    ((n.label = t),
                      (n.identifier = e9(this.sliceSerialize(e)).toLowerCase()),
                      (this.data.referenceType = 'full'));
                  },
                  resourceDestinationString: function () {
                    let e = this.resume();
                    this.stack[this.stack.length - 1].url = e;
                  },
                  resourceTitleString: function () {
                    let e = this.resume();
                    this.stack[this.stack.length - 1].title = e;
                  },
                  resource: function () {
                    this.data.inReference = void 0;
                  },
                  setextHeading: o(function () {
                    this.data.setextHeadingSlurpLineEnding = void 0;
                  }),
                  setextHeadingLineSequence: function (e) {
                    this.stack[this.stack.length - 1].depth =
                      61 === this.sliceSerialize(e).codePointAt(0) ? 1 : 2;
                  },
                  setextHeadingText: function () {
                    this.data.setextHeadingSlurpLineEnding = !0;
                  },
                  strong: o(),
                  thematicBreak: o(),
                },
              };
              !(function e(t, n) {
                let r = -1;
                for (; ++r < n.length; ) {
                  let i = n[r];
                  Array.isArray(i)
                    ? e(t, i)
                    : (function (e, t) {
                        let n;
                        for (n in t)
                          if (tI.call(t, n))
                            switch (n) {
                              case 'canContainEols': {
                                let r = t[n];
                                r && e[n].push(...r);
                                break;
                              }
                              case 'transforms': {
                                let r = t[n];
                                r && e[n].push(...r);
                                break;
                              }
                              case 'enter':
                              case 'exit': {
                                let r = t[n];
                                r && Object.assign(e[n], r);
                              }
                            }
                      })(t, i);
                }
              })(t, (e || {}).mdastExtensions || []);
              let n = {};
              return function (e) {
                let r = { type: 'root', children: [] },
                  o = {
                    stack: [r],
                    tokenStack: [],
                    config: t,
                    enter: a,
                    exit: l,
                    buffer: i,
                    resume: s,
                    data: n,
                  },
                  u = [],
                  c = -1;
                for (; ++c < e.length; )
                  ('listOrdered' === e[c][1].type || 'listUnordered' === e[c][1].type) &&
                    ('enter' === e[c][0]
                      ? u.push(c)
                      : (c = (function (e, t, n) {
                          let r,
                            i,
                            a,
                            o,
                            l = t - 1,
                            s = -1,
                            u = !1;
                          for (; ++l <= n; ) {
                            let t = e[l];
                            switch (t[1].type) {
                              case 'listUnordered':
                              case 'listOrdered':
                              case 'blockQuote':
                                ('enter' === t[0] ? s++ : s--, (o = void 0));
                                break;
                              case 'lineEndingBlank':
                                'enter' === t[0] &&
                                  (!r || o || s || a || (a = l), (o = void 0));
                                break;
                              case 'linePrefix':
                              case 'listItemValue':
                              case 'listItemMarker':
                              case 'listItemPrefix':
                              case 'listItemPrefixWhitespace':
                                break;
                              default:
                                o = void 0;
                            }
                            if (
                              (!s &&
                                'enter' === t[0] &&
                                'listItemPrefix' === t[1].type) ||
                              (-1 === s &&
                                'exit' === t[0] &&
                                ('listUnordered' === t[1].type ||
                                  'listOrdered' === t[1].type))
                            ) {
                              if (r) {
                                let o = l;
                                for (i = void 0; o--; ) {
                                  let t = e[o];
                                  if (
                                    'lineEnding' === t[1].type ||
                                    'lineEndingBlank' === t[1].type
                                  ) {
                                    if ('exit' === t[0]) continue;
                                    (i && ((e[i][1].type = 'lineEndingBlank'), (u = !0)),
                                      (t[1].type = 'lineEnding'),
                                      (i = o));
                                  } else if (
                                    'linePrefix' === t[1].type ||
                                    'blockQuotePrefix' === t[1].type ||
                                    'blockQuotePrefixWhitespace' === t[1].type ||
                                    'blockQuoteMarker' === t[1].type ||
                                    'listItemIndent' === t[1].type
                                  );
                                  else break;
                                }
                                (a && (!i || a < i) && (r._spread = !0),
                                  (r.end = Object.assign(
                                    {},
                                    i ? e[i][1].start : t[1].end,
                                  )),
                                  e.splice(i || l, 0, ['exit', r, t[2]]),
                                  l++,
                                  n++);
                              }
                              if ('listItemPrefix' === t[1].type) {
                                let i = {
                                  type: 'listItem',
                                  _spread: !1,
                                  start: Object.assign({}, t[1].start),
                                  end: void 0,
                                };
                                ((r = i),
                                  e.splice(l, 0, ['enter', i, t[2]]),
                                  l++,
                                  n++,
                                  (a = void 0),
                                  (o = !0));
                              }
                            }
                          }
                          return ((e[t][1]._spread = u), n);
                        })(e, u.pop(), c)));
                for (c = -1; ++c < e.length; ) {
                  let n = t[e[c][0]];
                  tI.call(n, e[c][1].type) &&
                    n[e[c][1].type].call(
                      Object.assign({ sliceSerialize: e[c][2].sliceSerialize }, o),
                      e[c][1],
                    );
                }
                if (o.tokenStack.length > 0) {
                  let e = o.tokenStack[o.tokenStack.length - 1];
                  (e[1] || tD).call(o, void 0, e[0]);
                }
                for (
                  r.position = {
                    start: tL(
                      e.length > 0 ? e[0][1].start : { line: 1, column: 1, offset: 0 },
                    ),
                    end: tL(
                      e.length > 0
                        ? e[e.length - 2][1].end
                        : { line: 1, column: 1, offset: 0 },
                    ),
                  },
                    c = -1;
                  ++c < t.transforms.length;

                )
                  r = t.transforms[c](r) || r;
                return r;
              };
              function r(e, t) {
                return function (n) {
                  (a.call(this, e(n), n), t && t.call(this, n));
                };
              }
              function i() {
                this.stack.push({ type: 'fragment', children: [] });
              }
              function a(e, t, n) {
                (this.stack[this.stack.length - 1].children.push(e),
                  this.stack.push(e),
                  this.tokenStack.push([t, n || void 0]),
                  (e.position = { start: tL(t.start), end: void 0 }));
              }
              function o(e) {
                return function (t) {
                  (e && e.call(this, t), l.call(this, t));
                };
              }
              function l(e, t) {
                let n = this.stack.pop(),
                  r = this.tokenStack.pop();
                if (r)
                  r[0].type !== e.type &&
                    (t ? t.call(this, e, r[0]) : (r[1] || tD).call(this, e, r[0]));
                else
                  throw Error(
                    'Cannot close `' +
                      e.type +
                      '` (' +
                      q({ start: e.start, end: e.end }) +
                      '): it’s not open',
                  );
                n.position.end = tL(e.end);
              }
              function s() {
                var e;
                return (
                  (e = this.stack.pop()),
                  eh(
                    e,
                    'boolean' != typeof ep.includeImageAlt || ep.includeImageAlt,
                    'boolean' != typeof ep.includeHtml || ep.includeHtml,
                  )
                );
              }
              function u(e) {
                let t = this.stack[this.stack.length - 1].children,
                  n = t[t.length - 1];
                ((n && 'text' === n.type) ||
                  (((n = { type: 'text', value: '' }).position = {
                    start: tL(e.start),
                    end: void 0,
                  }),
                  t.push(n)),
                  this.stack.push(n));
              }
              function c(e) {
                let t = this.stack.pop();
                ((t.value += this.sliceSerialize(e)), (t.position.end = tL(e.end)));
              }
              function d() {
                this.data.atHardBreak = !0;
              }
              function f(e) {
                this.data.characterReferenceType = e.type;
              }
              function p() {
                return { type: 'code', lang: null, meta: null, value: '' };
              }
              function h() {
                return { type: 'heading', depth: 0, children: [] };
              }
              function m() {
                return { type: 'break' };
              }
              function g() {
                return { type: 'html', value: '' };
              }
              function y() {
                return { type: 'link', title: null, url: '', children: [] };
              }
              function v(e) {
                return {
                  type: 'list',
                  ordered: 'listOrdered' === e.type,
                  start: null,
                  spread: e._spread,
                  children: [],
                };
              }
            })(a)(
              (function (e) {
                for (; !eb(e); );
                return e;
              })(
                (function (e) {
                  let t = {
                    constructs: (function (e) {
                      let t = {},
                        n = -1;
                      for (; ++n < e.length; )
                        !(function (e, t) {
                          let n;
                          for (n in t) {
                            let r,
                              i = (ek.call(e, n) ? e[n] : void 0) || (e[n] = {}),
                              a = t[n];
                            if (a)
                              for (r in a) {
                                ek.call(i, r) || (i[r] = []);
                                let e = a[r];
                                !(function (e, t) {
                                  let n = -1,
                                    r = [];
                                  for (; ++n < t.length; )
                                    ('after' === t[n].add ? e : r).push(t[n]);
                                  eg(e, 0, 0, r);
                                })(i[r], Array.isArray(e) ? e : e ? [e] : []);
                              }
                          }
                        })(t, e[n]);
                      return t;
                    })([i, ...((e || {}).extensions || [])]),
                    content: n(eM),
                    defined: [],
                    document: n(ej),
                    flow: n(eB),
                    lazy: {},
                    string: n(eV),
                    text: n(eH),
                  };
                  return t;
                  function n(e) {
                    return function (n) {
                      return (function (e, t, n) {
                        let r = {
                            _bufferIndex: -1,
                            _index: 0,
                            line: (n && n.line) || 1,
                            column: (n && n.column) || 1,
                            offset: (n && n.offset) || 0,
                          },
                          i = {},
                          a = [],
                          o = [],
                          l = [],
                          s = {
                            attempt: h(function (e, t) {
                              m(e, t.from);
                            }),
                            check: h(p),
                            consume: function (e) {
                              (eP(e)
                                ? (r.line++,
                                  (r.column = 1),
                                  (r.offset += -3 === e ? 2 : 1),
                                  g())
                                : -1 !== e && (r.column++, r.offset++),
                                r._bufferIndex < 0
                                  ? r._index++
                                  : (r._bufferIndex++,
                                    r._bufferIndex === o[r._index].length &&
                                      ((r._bufferIndex = -1), r._index++)),
                                (u.previous = e));
                            },
                            enter: function (e, t) {
                              let n = t || {};
                              return (
                                (n.type = e),
                                (n.start = f()),
                                u.events.push(['enter', n, u]),
                                l.push(n),
                                n
                              );
                            },
                            exit: function (e) {
                              let t = l.pop();
                              return ((t.end = f()), u.events.push(['exit', t, u]), t);
                            },
                            interrupt: h(p, { interrupt: !0 }),
                          },
                          u = {
                            code: null,
                            containerState: {},
                            defineSkip: function (e) {
                              ((i[e.line] = e.column), g());
                            },
                            events: [],
                            now: f,
                            parser: e,
                            previous: null,
                            sliceSerialize: function (e, t) {
                              return (function (e, t) {
                                let n,
                                  r = -1,
                                  i = [];
                                for (; ++r < e.length; ) {
                                  let a,
                                    o = e[r];
                                  if ('string' == typeof o) a = o;
                                  else
                                    switch (o) {
                                      case -5:
                                        a = '\r';
                                        break;
                                      case -4:
                                        a = '\n';
                                        break;
                                      case -3:
                                        a = '\r\n';
                                        break;
                                      case -2:
                                        a = t ? ' ' : '	';
                                        break;
                                      case -1:
                                        if (!t && n) continue;
                                        a = ' ';
                                        break;
                                      default:
                                        a = String.fromCharCode(o);
                                    }
                                  ((n = -2 === o), i.push(a));
                                }
                                return i.join('');
                              })(d(e), t);
                            },
                            sliceStream: d,
                            write: function (e) {
                              return ((o = ey(o, e)),
                              (function () {
                                let e;
                                for (; r._index < o.length; ) {
                                  let n = o[r._index];
                                  if ('string' == typeof n)
                                    for (
                                      e = r._index,
                                        r._bufferIndex < 0 && (r._bufferIndex = 0);
                                      r._index === e && r._bufferIndex < n.length;

                                    ) {
                                      var t;
                                      ((t = n.charCodeAt(r._bufferIndex)), (c = c(t)));
                                    }
                                  else c = c(n);
                                }
                              })(),
                              null !== o[o.length - 1])
                                ? []
                                : (m(t, 0), (u.events = tc(a, u.events, u)), u.events);
                            },
                          },
                          c = t.tokenize.call(u, s);
                        return (t.resolveAll && a.push(t), u);
                        function d(e) {
                          return (function (e, t) {
                            let n,
                              r = t.start._index,
                              i = t.start._bufferIndex,
                              a = t.end._index,
                              o = t.end._bufferIndex;
                            if (r === a) n = [e[r].slice(i, o)];
                            else {
                              if (((n = e.slice(r, a)), i > -1)) {
                                let e = n[0];
                                'string' == typeof e ? (n[0] = e.slice(i)) : n.shift();
                              }
                              o > 0 && n.push(e[a].slice(0, o));
                            }
                            return n;
                          })(o, e);
                        }
                        function f() {
                          let {
                            _bufferIndex: e,
                            _index: t,
                            line: n,
                            column: i,
                            offset: a,
                          } = r;
                          return {
                            _bufferIndex: e,
                            _index: t,
                            line: n,
                            column: i,
                            offset: a,
                          };
                        }
                        function p(e, t) {
                          t.restore();
                        }
                        function h(e, t) {
                          return function (n, i, a) {
                            var o;
                            let c, d, p, h;
                            return Array.isArray(n)
                              ? m(n)
                              : 'tokenize' in n
                                ? m([n])
                                : ((o = n),
                                  function (e) {
                                    let t = null !== e && o[e],
                                      n = null !== e && o.null;
                                    return m([
                                      ...(Array.isArray(t) ? t : t ? [t] : []),
                                      ...(Array.isArray(n) ? n : n ? [n] : []),
                                    ])(e);
                                  });
                            function m(e) {
                              return ((c = e), (d = 0), 0 === e.length) ? a : y(e[d]);
                            }
                            function y(e) {
                              return function (n) {
                                let i, a, o, c, d;
                                return ((i = f()),
                                (a = u.previous),
                                (o = u.currentConstruct),
                                (c = u.events.length),
                                (d = Array.from(l)),
                                (h = {
                                  from: c,
                                  restore: function () {
                                    ((r = i),
                                      (u.previous = a),
                                      (u.currentConstruct = o),
                                      (u.events.length = c),
                                      (l = d),
                                      g());
                                  },
                                }),
                                (p = e),
                                e.partial || (u.currentConstruct = e),
                                e.name &&
                                  u.parser.constructs.disable.null.includes(e.name))
                                  ? x(n)
                                  : e.tokenize.call(
                                      t ? Object.assign(Object.create(u), t) : u,
                                      s,
                                      v,
                                      x,
                                    )(n);
                              };
                            }
                            function v(t) {
                              return (e(p, h), i);
                            }
                            function x(e) {
                              return (h.restore(), ++d < c.length) ? y(c[d]) : a;
                            }
                          };
                        }
                        function m(e, t) {
                          (e.resolveAll && !a.includes(e) && a.push(e),
                            e.resolve &&
                              eg(
                                u.events,
                                t,
                                u.events.length - t,
                                e.resolve(u.events.slice(t), u),
                              ),
                            e.resolveTo && (u.events = e.resolveTo(u.events, u)));
                        }
                        function g() {
                          r.line in i &&
                            r.column < 2 &&
                            ((r.column = i[r.line]), (r.offset += i[r.line] - 1));
                        }
                      })(t, e, n);
                    };
                  }
                })(a)
                  .document()
                  .write(
                    ((l = 1),
                    (s = ''),
                    (u = !0),
                    function (e, t, n) {
                      let r,
                        i,
                        a,
                        c,
                        d,
                        f = [];
                      for (
                        e =
                          s +
                          ('string' == typeof e
                            ? e.toString()
                            : new TextDecoder(t || void 0).decode(e)),
                          a = 0,
                          s = '',
                          u && (65279 === e.charCodeAt(0) && a++, (u = void 0));
                        a < e.length;

                      ) {
                        if (
                          ((tP.lastIndex = a),
                          (c =
                            (r = tP.exec(e)) && void 0 !== r.index ? r.index : e.length),
                          (d = e.charCodeAt(c)),
                          !r)
                        ) {
                          s = e.slice(a);
                          break;
                        }
                        if (10 === d && a === c && o) (f.push(-3), (o = void 0));
                        else
                          switch (
                            (o && (f.push(-5), (o = void 0)),
                            a < c && (f.push(e.slice(a, c)), (l += c - a)),
                            d)
                          ) {
                            case 0:
                              (f.push(65533), l++);
                              break;
                            case 9:
                              for (i = 4 * Math.ceil(l / 4), f.push(-2); l++ < i; )
                                f.push(-1);
                              break;
                            case 10:
                              (f.push(-4), (l = 1));
                              break;
                            default:
                              ((o = !0), (l = 1));
                          }
                        a = c + 1;
                      }
                      return (n && (o && f.push(-5), s && f.push(s), f.push(null)), f);
                    })(n, r, !0),
                  ),
              ),
            )
          );
        };
      }
      let tj = 'object' == typeof self ? self : globalThis,
        tz = (e) => {
          var t;
          let n, r;
          return ((t = new Map()),
          (n = (e, n) => (t.set(n, e), e)),
          (r = (i) => {
            if (t.has(i)) return t.get(i);
            let [a, o] = e[i];
            switch (a) {
              case 0:
              case -1:
                return n(o, i);
              case 1: {
                let e = n([], i);
                for (let t of o) e.push(r(t));
                return e;
              }
              case 2: {
                let e = n({}, i);
                for (let [t, n] of o) e[r(t)] = r(n);
                return e;
              }
              case 3:
                return n(new Date(o), i);
              case 4: {
                let { source: e, flags: t } = o;
                return n(new RegExp(e, t), i);
              }
              case 5: {
                let e = n(new Map(), i);
                for (let [t, n] of o) e.set(r(t), r(n));
                return e;
              }
              case 6: {
                let e = n(new Set(), i);
                for (let t of o) e.add(r(t));
                return e;
              }
              case 7: {
                let { name: e, message: t } = o;
                return n(new tj[e](t), i);
              }
              case 8:
                return n(BigInt(o), i);
              case 'BigInt':
                return n(Object(BigInt(o)), i);
              case 'ArrayBuffer':
                return n(new Uint8Array(o).buffer, o);
              case 'DataView': {
                let { buffer: e } = new Uint8Array(o);
                return n(new DataView(e), o);
              }
            }
            return n(new tj[a](o), i);
          }))(0);
        },
        { toString: tF } = {},
        { keys: tZ } = Object,
        tU = (e) => {
          let t = typeof e;
          if ('object' !== t || !e) return [0, t];
          let n = tF.call(e).slice(8, -1);
          switch (n) {
            case 'Array':
              return [1, ''];
            case 'Object':
              return [2, ''];
            case 'Date':
              return [3, ''];
            case 'RegExp':
              return [4, ''];
            case 'Map':
              return [5, ''];
            case 'Set':
              return [6, ''];
            case 'DataView':
              return [1, n];
          }
          return n.includes('Array') ? [1, n] : n.includes('Error') ? [7, n] : [2, n];
        },
        tB = ([e, t]) => 0 === e && ('function' === t || 'symbol' === t),
        t$ = (e, { json: t, lossy: n } = {}) => {
          var r, i, a;
          let o,
            l,
            s = [];
          return (
            ((r = !(t || n)),
            (i = !!t),
            (a = new Map()),
            (o = (e, t) => {
              let n = s.push(e) - 1;
              return (a.set(t, n), n);
            }),
            (l = (e) => {
              if (a.has(e)) return a.get(e);
              let [t, n] = tU(e);
              switch (t) {
                case 0: {
                  let i = e;
                  switch (n) {
                    case 'bigint':
                      ((t = 8), (i = e.toString()));
                      break;
                    case 'function':
                    case 'symbol':
                      if (r) throw TypeError('unable to serialize ' + n);
                      i = null;
                      break;
                    case 'undefined':
                      return o([-1], e);
                  }
                  return o([t, i], e);
                }
                case 1: {
                  if (n) {
                    let t = e;
                    return (
                      'DataView' === n
                        ? (t = new Uint8Array(e.buffer))
                        : 'ArrayBuffer' === n && (t = new Uint8Array(e)),
                      o([n, [...t]], e)
                    );
                  }
                  let r = [],
                    i = o([t, r], e);
                  for (let t of e) r.push(l(t));
                  return i;
                }
                case 2: {
                  if (n)
                    switch (n) {
                      case 'BigInt':
                        return o([n, e.toString()], e);
                      case 'Boolean':
                      case 'Number':
                      case 'String':
                        return o([n, e.valueOf()], e);
                    }
                  if (i && 'toJSON' in e) return l(e.toJSON());
                  let a = [],
                    s = o([t, a], e);
                  for (let t of tZ(e)) (r || !tB(tU(e[t]))) && a.push([l(t), l(e[t])]);
                  return s;
                }
                case 3:
                  return o([t, e.toISOString()], e);
                case 4: {
                  let { source: n, flags: r } = e;
                  return o([t, { source: n, flags: r }], e);
                }
                case 5: {
                  let n = [],
                    i = o([t, n], e);
                  for (let [t, i] of e)
                    (r || !(tB(tU(t)) || tB(tU(i)))) && n.push([l(t), l(i)]);
                  return i;
                }
                case 6: {
                  let n = [],
                    i = o([t, n], e);
                  for (let t of e) (r || !tB(tU(t))) && n.push(l(t));
                  return i;
                }
              }
              let { message: s } = e;
              return o([t, { name: n, message: s }], e);
            }))(e),
            s
          );
        },
        tV =
          'function' == typeof structuredClone
            ? (e, t) =>
                t && ('json' in t || 'lossy' in t) ? tz(t$(e, t)) : structuredClone(e)
            : (e, t) => tz(t$(e, t));
      function tH(e) {
        let t = [],
          n = -1,
          r = 0,
          i = 0;
        for (; ++n < e.length; ) {
          let a = e.charCodeAt(n),
            o = '';
          if (37 === a && e_(e.charCodeAt(n + 1)) && e_(e.charCodeAt(n + 2))) i = 2;
          else if (a < 128)
            /[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(a)) ||
              (o = String.fromCharCode(a));
          else if (a > 55295 && a < 57344) {
            let t = e.charCodeAt(n + 1);
            a < 56320 && t > 56319 && t < 57344
              ? ((o = String.fromCharCode(a, t)), (i = 1))
              : (o = '�');
          } else o = String.fromCharCode(a);
          (o && (t.push(e.slice(r, n), encodeURIComponent(o)), (r = n + i + 1), (o = '')),
            i && ((n += i), (i = 0)));
        }
        return t.join('') + e.slice(r);
      }
      function tW(e, t) {
        let n = [{ type: 'text', value: '↩' }];
        return (
          t > 1 &&
            n.push({
              type: 'element',
              tagName: 'sup',
              properties: {},
              children: [{ type: 'text', value: String(t) }],
            }),
          n
        );
      }
      function tq(e, t) {
        return 'Back to reference ' + (e + 1) + (t > 1 ? '-' + t : '');
      }
      let tK = function (e) {
        var t, n;
        if (null == e) return tX;
        if ('function' == typeof e) return tY(e);
        if ('object' == typeof e) {
          return Array.isArray(e)
            ? (function (e) {
                let t = [],
                  n = -1;
                for (; ++n < e.length; ) t[n] = tK(e[n]);
                return tY(function (...e) {
                  let n = -1;
                  for (; ++n < t.length; ) if (t[n].apply(this, e)) return !0;
                  return !1;
                });
              })(e)
            : ((t = e),
              tY(function (e) {
                let n;
                for (n in t) if (e[n] !== t[n]) return !1;
                return !0;
              }));
        }
        if ('string' == typeof e) {
          return (
            (n = e),
            tY(function (e) {
              return e && e.type === n;
            })
          );
        }
        throw Error('Expected function, string, or object as test');
      };
      function tY(e) {
        return function (t, n, r) {
          return !!(
            (function (e) {
              return null !== e && 'object' == typeof e && 'type' in e;
            })(t) && e.call(this, t, 'number' == typeof n ? n : void 0, r || void 0)
          );
        };
      }
      function tX() {
        return !0;
      }
      let tG = [];
      function tJ(e, t, n, r) {
        var i, a, o;
        let l, s, u, c, d, f;
        ('function' == typeof t && 'function' != typeof n
          ? ((s = void 0), (u = t), (l = n))
          : ((s = t), (u = n), (l = r)),
          (i = s),
          (a = function (e, t) {
            let n = t[t.length - 1],
              r = n ? n.children.indexOf(e) : void 0;
            return u(e, r, n);
          }),
          (o = l),
          'function' == typeof i && 'function' != typeof a ? ((o = a), (a = i)) : (c = i),
          (d = tK(c)),
          (f = o ? -1 : 1),
          (function e(t, n, r) {
            let l = t && 'object' == typeof t ? t : {};
            if ('string' == typeof l.type) {
              let e =
                'string' == typeof l.tagName
                  ? l.tagName
                  : 'string' == typeof l.name
                    ? l.name
                    : void 0;
              Object.defineProperty(s, 'name', {
                value: 'node (' + t.type + (e ? '<' + e + '>' : '') + ')',
              });
            }
            return s;
            function s() {
              var l;
              let s,
                u,
                c,
                p = tG;
              if (
                (!i || d(t, n, r[r.length - 1] || void 0)) &&
                !1 ===
                  (p = Array.isArray((l = a(t, r)))
                    ? l
                    : 'number' == typeof l
                      ? [!0, l]
                      : null == l
                        ? tG
                        : [l])[0]
              )
                return p;
              if ('children' in t && t.children && t.children && 'skip' !== p[0])
                for (
                  u = (o ? t.children.length : -1) + f, c = r.concat(t);
                  u > -1 && u < t.children.length;

                ) {
                  if (!1 === (s = e(t.children[u], u, c)())[0]) return s;
                  u = 'number' == typeof s[1] ? s[1] : u + f;
                }
              return p;
            }
          })(e, void 0, [])());
      }
      function tQ(e, t) {
        let n = t.referenceType,
          r = ']';
        if (
          ('collapsed' === n
            ? (r += '[]')
            : 'full' === n && (r += '[' + (t.label || t.identifier) + ']'),
          'imageReference' === t.type)
        )
          return [{ type: 'text', value: '![' + t.alt + r }];
        let i = e.all(t),
          a = i[0];
        a && 'text' === a.type
          ? (a.value = '[' + a.value)
          : i.unshift({ type: 'text', value: '[' });
        let o = i[i.length - 1];
        return (
          o && 'text' === o.type ? (o.value += r) : i.push({ type: 'text', value: r }),
          i
        );
      }
      function t0(e) {
        let t = e.spread;
        return null == t ? e.children.length > 1 : t;
      }
      function t1(e, t, n) {
        let r = 0,
          i = e.length;
        if (t) {
          let t = e.codePointAt(r);
          for (; 9 === t || 32 === t; ) (r++, (t = e.codePointAt(r)));
        }
        if (n) {
          let t = e.codePointAt(i - 1);
          for (; 9 === t || 32 === t; ) (i--, (t = e.codePointAt(i - 1)));
        }
        return i > r ? e.slice(r, i) : '';
      }
      let t2 = {
        blockquote: function (e, t) {
          let n = {
            type: 'element',
            tagName: 'blockquote',
            properties: {},
            children: e.wrap(e.all(t), !0),
          };
          return (e.patch(t, n), e.applyData(t, n));
        },
        break: function (e, t) {
          let n = { type: 'element', tagName: 'br', properties: {}, children: [] };
          return (e.patch(t, n), [e.applyData(t, n), { type: 'text', value: '\n' }]);
        },
        code: function (e, t) {
          let n = t.value ? t.value + '\n' : '',
            r = {};
          t.lang && (r.className = ['language-' + t.lang]);
          let i = {
            type: 'element',
            tagName: 'code',
            properties: r,
            children: [{ type: 'text', value: n }],
          };
          return (
            t.meta && (i.data = { meta: t.meta }),
            e.patch(t, i),
            (i = {
              type: 'element',
              tagName: 'pre',
              properties: {},
              children: [(i = e.applyData(t, i))],
            }),
            e.patch(t, i),
            i
          );
        },
        delete: function (e, t) {
          let n = { type: 'element', tagName: 'del', properties: {}, children: e.all(t) };
          return (e.patch(t, n), e.applyData(t, n));
        },
        emphasis: function (e, t) {
          let n = { type: 'element', tagName: 'em', properties: {}, children: e.all(t) };
          return (e.patch(t, n), e.applyData(t, n));
        },
        footnoteReference: function (e, t) {
          let n,
            r =
              'string' == typeof e.options.clobberPrefix
                ? e.options.clobberPrefix
                : 'user-content-',
            i = String(t.identifier).toUpperCase(),
            a = tH(i.toLowerCase()),
            o = e.footnoteOrder.indexOf(i),
            l = e.footnoteCounts.get(i);
          (void 0 === l
            ? ((l = 0), e.footnoteOrder.push(i), (n = e.footnoteOrder.length))
            : (n = o + 1),
            (l += 1),
            e.footnoteCounts.set(i, l));
          let s = {
            type: 'element',
            tagName: 'a',
            properties: {
              href: '#' + r + 'fn-' + a,
              id: r + 'fnref-' + a + (l > 1 ? '-' + l : ''),
              dataFootnoteRef: !0,
              ariaDescribedBy: ['footnote-label'],
            },
            children: [{ type: 'text', value: String(n) }],
          };
          e.patch(t, s);
          let u = { type: 'element', tagName: 'sup', properties: {}, children: [s] };
          return (e.patch(t, u), e.applyData(t, u));
        },
        heading: function (e, t) {
          let n = {
            type: 'element',
            tagName: 'h' + t.depth,
            properties: {},
            children: e.all(t),
          };
          return (e.patch(t, n), e.applyData(t, n));
        },
        html: function (e, t) {
          if (e.options.allowDangerousHtml) {
            let n = { type: 'raw', value: t.value };
            return (e.patch(t, n), e.applyData(t, n));
          }
        },
        imageReference: function (e, t) {
          let n = String(t.identifier).toUpperCase(),
            r = e.definitionById.get(n);
          if (!r) return tQ(e, t);
          let i = { src: tH(r.url || ''), alt: t.alt };
          null !== r.title && void 0 !== r.title && (i.title = r.title);
          let a = { type: 'element', tagName: 'img', properties: i, children: [] };
          return (e.patch(t, a), e.applyData(t, a));
        },
        image: function (e, t) {
          let n = { src: tH(t.url) };
          (null !== t.alt && void 0 !== t.alt && (n.alt = t.alt),
            null !== t.title && void 0 !== t.title && (n.title = t.title));
          let r = { type: 'element', tagName: 'img', properties: n, children: [] };
          return (e.patch(t, r), e.applyData(t, r));
        },
        inlineCode: function (e, t) {
          let n = { type: 'text', value: t.value.replace(/\r?\n|\r/g, ' ') };
          e.patch(t, n);
          let r = { type: 'element', tagName: 'code', properties: {}, children: [n] };
          return (e.patch(t, r), e.applyData(t, r));
        },
        linkReference: function (e, t) {
          let n = String(t.identifier).toUpperCase(),
            r = e.definitionById.get(n);
          if (!r) return tQ(e, t);
          let i = { href: tH(r.url || '') };
          null !== r.title && void 0 !== r.title && (i.title = r.title);
          let a = { type: 'element', tagName: 'a', properties: i, children: e.all(t) };
          return (e.patch(t, a), e.applyData(t, a));
        },
        link: function (e, t) {
          let n = { href: tH(t.url) };
          null !== t.title && void 0 !== t.title && (n.title = t.title);
          let r = { type: 'element', tagName: 'a', properties: n, children: e.all(t) };
          return (e.patch(t, r), e.applyData(t, r));
        },
        listItem: function (e, t, n) {
          let r = e.all(t),
            i = n
              ? (function (e) {
                  let t = !1;
                  if ('list' === e.type) {
                    t = e.spread || !1;
                    let n = e.children,
                      r = -1;
                    for (; !t && ++r < n.length; ) t = t0(n[r]);
                  }
                  return t;
                })(n)
              : t0(t),
            a = {},
            o = [];
          if ('boolean' == typeof t.checked) {
            let e,
              n = r[0];
            (n && 'element' === n.type && 'p' === n.tagName
              ? (e = n)
              : ((e = { type: 'element', tagName: 'p', properties: {}, children: [] }),
                r.unshift(e)),
              e.children.length > 0 && e.children.unshift({ type: 'text', value: ' ' }),
              e.children.unshift({
                type: 'element',
                tagName: 'input',
                properties: { type: 'checkbox', checked: t.checked, disabled: !0 },
                children: [],
              }),
              (a.className = ['task-list-item']));
          }
          let l = -1;
          for (; ++l < r.length; ) {
            let e = r[l];
            ((i || 0 !== l || 'element' !== e.type || 'p' !== e.tagName) &&
              o.push({ type: 'text', value: '\n' }),
              'element' !== e.type || 'p' !== e.tagName || i
                ? o.push(e)
                : o.push(...e.children));
          }
          let s = r[r.length - 1];
          s &&
            (i || 'element' !== s.type || 'p' !== s.tagName) &&
            o.push({ type: 'text', value: '\n' });
          let u = { type: 'element', tagName: 'li', properties: a, children: o };
          return (e.patch(t, u), e.applyData(t, u));
        },
        list: function (e, t) {
          let n = {},
            r = e.all(t),
            i = -1;
          for (
            'number' == typeof t.start && 1 !== t.start && (n.start = t.start);
            ++i < r.length;

          ) {
            let e = r[i];
            if (
              'element' === e.type &&
              'li' === e.tagName &&
              e.properties &&
              Array.isArray(e.properties.className) &&
              e.properties.className.includes('task-list-item')
            ) {
              n.className = ['contains-task-list'];
              break;
            }
          }
          let a = {
            type: 'element',
            tagName: t.ordered ? 'ol' : 'ul',
            properties: n,
            children: e.wrap(r, !0),
          };
          return (e.patch(t, a), e.applyData(t, a));
        },
        paragraph: function (e, t) {
          let n = { type: 'element', tagName: 'p', properties: {}, children: e.all(t) };
          return (e.patch(t, n), e.applyData(t, n));
        },
        root: function (e, t) {
          let n = { type: 'root', children: e.wrap(e.all(t)) };
          return (e.patch(t, n), e.applyData(t, n));
        },
        strong: function (e, t) {
          let n = {
            type: 'element',
            tagName: 'strong',
            properties: {},
            children: e.all(t),
          };
          return (e.patch(t, n), e.applyData(t, n));
        },
        table: function (e, t) {
          let n = e.all(t),
            r = n.shift(),
            i = [];
          if (r) {
            let n = {
              type: 'element',
              tagName: 'thead',
              properties: {},
              children: e.wrap([r], !0),
            };
            (e.patch(t.children[0], n), i.push(n));
          }
          if (n.length > 0) {
            let r = {
                type: 'element',
                tagName: 'tbody',
                properties: {},
                children: e.wrap(n, !0),
              },
              a = H(t.children[1]),
              o = V(t.children[t.children.length - 1]);
            (a && o && (r.position = { start: a, end: o }), i.push(r));
          }
          let a = {
            type: 'element',
            tagName: 'table',
            properties: {},
            children: e.wrap(i, !0),
          };
          return (e.patch(t, a), e.applyData(t, a));
        },
        tableCell: function (e, t) {
          let n = { type: 'element', tagName: 'td', properties: {}, children: e.all(t) };
          return (e.patch(t, n), e.applyData(t, n));
        },
        tableRow: function (e, t, n) {
          let r = n ? n.children : void 0,
            i = 0 === (r ? r.indexOf(t) : 1) ? 'th' : 'td',
            a = n && 'table' === n.type ? n.align : void 0,
            o = a ? a.length : t.children.length,
            l = -1,
            s = [];
          for (; ++l < o; ) {
            let n = t.children[l],
              r = {},
              o = a ? a[l] : void 0;
            o && (r.align = o);
            let u = { type: 'element', tagName: i, properties: r, children: [] };
            (n && ((u.children = e.all(n)), e.patch(n, u), (u = e.applyData(n, u))),
              s.push(u));
          }
          let u = {
            type: 'element',
            tagName: 'tr',
            properties: {},
            children: e.wrap(s, !0),
          };
          return (e.patch(t, u), e.applyData(t, u));
        },
        text: function (e, t) {
          let n = {
            type: 'text',
            value: (function (e) {
              let t = String(e),
                n = /\r?\n|\r/g,
                r = n.exec(t),
                i = 0,
                a = [];
              for (; r; )
                (a.push(t1(t.slice(i, r.index), i > 0, !0), r[0]),
                  (i = r.index + r[0].length),
                  (r = n.exec(t)));
              return (a.push(t1(t.slice(i), i > 0, !1)), a.join(''));
            })(String(t.value)),
          };
          return (e.patch(t, n), e.applyData(t, n));
        },
        thematicBreak: function (e, t) {
          let n = { type: 'element', tagName: 'hr', properties: {}, children: [] };
          return (e.patch(t, n), e.applyData(t, n));
        },
        toml: t4,
        yaml: t4,
        definition: t4,
        footnoteDefinition: t4,
      };
      function t4() {}
      let t9 = {}.hasOwnProperty,
        t3 = {};
      function t5(e, t) {
        e.position &&
          (t.position = (function (e) {
            let t = H(e),
              n = V(e);
            if (t && n) return { start: t, end: n };
          })(e));
      }
      function t6(e, t) {
        let n = t;
        if (e && e.data) {
          let t = e.data.hName,
            r = e.data.hChildren,
            i = e.data.hProperties;
          ('string' == typeof t &&
            ('element' === n.type
              ? (n.tagName = t)
              : (n = {
                  type: 'element',
                  tagName: t,
                  properties: {},
                  children: 'children' in n ? n.children : [n],
                })),
            'element' === n.type && i && Object.assign(n.properties, tV(i)),
            'children' in n && n.children && null != r && (n.children = r));
        }
        return n;
      }
      function t8(e, t) {
        let n = [],
          r = -1;
        for (t && n.push({ type: 'text', value: '\n' }); ++r < e.length; )
          (r && n.push({ type: 'text', value: '\n' }), n.push(e[r]));
        return (t && e.length > 0 && n.push({ type: 'text', value: '\n' }), n);
      }
      function t7(e) {
        let t = 0,
          n = e.charCodeAt(t);
        for (; 9 === n || 32 === n; ) (t++, (n = e.charCodeAt(t)));
        return e.slice(t);
      }
      function ne(e, t) {
        let n,
          r,
          i,
          a,
          o =
            ((n = t || t3),
            (r = new Map()),
            (i = new Map()),
            (a = {
              all: function (e) {
                let t = [];
                if ('children' in e) {
                  let n = e.children,
                    r = -1;
                  for (; ++r < n.length; ) {
                    let i = a.one(n[r], e);
                    if (i) {
                      if (
                        r &&
                        'break' === n[r - 1].type &&
                        (Array.isArray(i) || 'text' !== i.type || (i.value = t7(i.value)),
                        !Array.isArray(i) && 'element' === i.type)
                      ) {
                        let e = i.children[0];
                        e && 'text' === e.type && (e.value = t7(e.value));
                      }
                      Array.isArray(i) ? t.push(...i) : t.push(i);
                    }
                  }
                }
                return t;
              },
              applyData: t6,
              definitionById: r,
              footnoteById: i,
              footnoteCounts: new Map(),
              footnoteOrder: [],
              handlers: { ...t2, ...n.handlers },
              one: function (e, t) {
                let n = e.type,
                  r = a.handlers[n];
                if (t9.call(a.handlers, n) && r) return r(a, e, t);
                if (a.options.passThrough && a.options.passThrough.includes(n)) {
                  if ('children' in e) {
                    let { children: t, ...n } = e,
                      r = tV(n);
                    return ((r.children = a.all(e)), r);
                  }
                  return tV(e);
                }
                return (
                  a.options.unknownHandler ||
                  function (e, t) {
                    let n = t.data || {},
                      r =
                        'value' in t &&
                        !(t9.call(n, 'hProperties') || t9.call(n, 'hChildren'))
                          ? { type: 'text', value: t.value }
                          : {
                              type: 'element',
                              tagName: 'div',
                              properties: {},
                              children: e.all(t),
                            };
                    return (e.patch(t, r), e.applyData(t, r));
                  }
                )(a, e, t);
              },
              options: n,
              patch: t5,
              wrap: t8,
            }),
            tJ(e, function (e) {
              if ('definition' === e.type || 'footnoteDefinition' === e.type) {
                let t = 'definition' === e.type ? r : i,
                  n = String(e.identifier).toUpperCase();
                t.has(n) || t.set(n, e);
              }
            }),
            a),
          l = o.one(e, void 0),
          s = (function (e) {
            let t =
                'string' == typeof e.options.clobberPrefix
                  ? e.options.clobberPrefix
                  : 'user-content-',
              n = e.options.footnoteBackContent || tW,
              r = e.options.footnoteBackLabel || tq,
              i = e.options.footnoteLabel || 'Footnotes',
              a = e.options.footnoteLabelTagName || 'h2',
              o = e.options.footnoteLabelProperties || { className: ['sr-only'] },
              l = [],
              s = -1;
            for (; ++s < e.footnoteOrder.length; ) {
              let i = e.footnoteById.get(e.footnoteOrder[s]);
              if (!i) continue;
              let a = e.all(i),
                o = String(i.identifier).toUpperCase(),
                u = tH(o.toLowerCase()),
                c = 0,
                d = [],
                f = e.footnoteCounts.get(o);
              for (; void 0 !== f && ++c <= f; ) {
                d.length > 0 && d.push({ type: 'text', value: ' ' });
                let e = 'string' == typeof n ? n : n(s, c);
                ('string' == typeof e && (e = { type: 'text', value: e }),
                  d.push({
                    type: 'element',
                    tagName: 'a',
                    properties: {
                      href: '#' + t + 'fnref-' + u + (c > 1 ? '-' + c : ''),
                      dataFootnoteBackref: '',
                      ariaLabel: 'string' == typeof r ? r : r(s, c),
                      className: ['data-footnote-backref'],
                    },
                    children: Array.isArray(e) ? e : [e],
                  }));
              }
              let p = a[a.length - 1];
              if (p && 'element' === p.type && 'p' === p.tagName) {
                let e = p.children[p.children.length - 1];
                (e && 'text' === e.type
                  ? (e.value += ' ')
                  : p.children.push({ type: 'text', value: ' ' }),
                  p.children.push(...d));
              } else a.push(...d);
              let h = {
                type: 'element',
                tagName: 'li',
                properties: { id: t + 'fn-' + u },
                children: e.wrap(a, !0),
              };
              (e.patch(i, h), l.push(h));
            }
            if (0 !== l.length)
              return {
                type: 'element',
                tagName: 'section',
                properties: { dataFootnotes: !0, className: ['footnotes'] },
                children: [
                  {
                    type: 'element',
                    tagName: a,
                    properties: { ...tV(o), id: 'footnote-label' },
                    children: [{ type: 'text', value: i }],
                  },
                  { type: 'text', value: '\n' },
                  {
                    type: 'element',
                    tagName: 'ol',
                    properties: {},
                    children: e.wrap(l, !0),
                  },
                  { type: 'text', value: '\n' },
                ],
              };
          })(o),
          u = Array.isArray(l)
            ? { type: 'root', children: l }
            : l || { type: 'root', children: [] };
        return (s && u.children.push({ type: 'text', value: '\n' }, s), u);
      }
      function nt(e, t) {
        return e && 'run' in e
          ? async function (n, r) {
              let i = ne(n, { file: r, ...t });
              await e.run(i, r);
            }
          : function (n, r) {
              return ne(n, { file: r, ...(e || t) });
            };
      }
      function nn(e) {
        if (e) throw e;
      }
      var nr = n(1109);
      function ni(e) {
        if ('object' != typeof e || null === e) return !1;
        let t = Object.getPrototypeOf(e);
        return (
          (null === t || t === Object.prototype || null === Object.getPrototypeOf(t)) &&
          !(Symbol.toStringTag in e) &&
          !(Symbol.iterator in e)
        );
      }
      let na = function (e, t) {
          let n;
          if (void 0 !== t && 'string' != typeof t)
            throw TypeError('"ext" argument must be a string');
          nu(e);
          let r = 0,
            i = -1,
            a = e.length;
          if (void 0 === t || 0 === t.length || t.length > e.length) {
            for (; a--; )
              if (47 === e.codePointAt(a)) {
                if (n) {
                  r = a + 1;
                  break;
                }
              } else i < 0 && ((n = !0), (i = a + 1));
            return i < 0 ? '' : e.slice(r, i);
          }
          if (t === e) return '';
          let o = -1,
            l = t.length - 1;
          for (; a--; )
            if (47 === e.codePointAt(a)) {
              if (n) {
                r = a + 1;
                break;
              }
            } else
              (o < 0 && ((n = !0), (o = a + 1)),
                l > -1 &&
                  (e.codePointAt(a) === t.codePointAt(l--)
                    ? l < 0 && (i = a)
                    : ((l = -1), (i = o))));
          return (r === i ? (i = o) : i < 0 && (i = e.length), e.slice(r, i));
        },
        no = function (e) {
          let t;
          if ((nu(e), 0 === e.length)) return '.';
          let n = -1,
            r = e.length;
          for (; --r; )
            if (47 === e.codePointAt(r)) {
              if (t) {
                n = r;
                break;
              }
            } else t || (t = !0);
          return n < 0
            ? 47 === e.codePointAt(0)
              ? '/'
              : '.'
            : 1 === n && 47 === e.codePointAt(0)
              ? '//'
              : e.slice(0, n);
        },
        nl = function (e) {
          let t;
          nu(e);
          let n = e.length,
            r = -1,
            i = 0,
            a = -1,
            o = 0;
          for (; n--; ) {
            let l = e.codePointAt(n);
            if (47 === l) {
              if (t) {
                i = n + 1;
                break;
              }
              continue;
            }
            (r < 0 && ((t = !0), (r = n + 1)),
              46 === l ? (a < 0 ? (a = n) : 1 !== o && (o = 1)) : a > -1 && (o = -1));
          }
          return a < 0 || r < 0 || 0 === o || (1 === o && a === r - 1 && a === i + 1)
            ? ''
            : e.slice(a, r);
        },
        ns = function (...e) {
          var t;
          let n,
            r,
            i,
            a = -1;
          for (; ++a < e.length; )
            (nu(e[a]), e[a] && (i = void 0 === i ? e[a] : i + '/' + e[a]));
          return void 0 === i
            ? '.'
            : (nu((t = i)),
              (n = 47 === t.codePointAt(0)),
              0 !==
                (r = (function (e, t) {
                  let n,
                    r,
                    i = '',
                    a = 0,
                    o = -1,
                    l = 0,
                    s = -1;
                  for (; ++s <= e.length; ) {
                    if (s < e.length) n = e.codePointAt(s);
                    else if (47 === n) break;
                    else n = 47;
                    if (47 === n) {
                      if (o === s - 1 || 1 === l);
                      else if (o !== s - 1 && 2 === l) {
                        if (
                          i.length < 2 ||
                          2 !== a ||
                          46 !== i.codePointAt(i.length - 1) ||
                          46 !== i.codePointAt(i.length - 2)
                        ) {
                          if (i.length > 2) {
                            if ((r = i.lastIndexOf('/')) !== i.length - 1) {
                              (r < 0
                                ? ((i = ''), (a = 0))
                                : (a =
                                    (i = i.slice(0, r)).length - 1 - i.lastIndexOf('/')),
                                (o = s),
                                (l = 0));
                              continue;
                            }
                          } else if (i.length > 0) {
                            ((i = ''), (a = 0), (o = s), (l = 0));
                            continue;
                          }
                        }
                        t && ((i = i.length > 0 ? i + '/..' : '..'), (a = 2));
                      } else
                        (i.length > 0
                          ? (i += '/' + e.slice(o + 1, s))
                          : (i = e.slice(o + 1, s)),
                          (a = s - o - 1));
                      ((o = s), (l = 0));
                    } else 46 === n && l > -1 ? l++ : (l = -1);
                  }
                  return i;
                })(t, !n)).length ||
                n ||
                (r = '.'),
              r.length > 0 && 47 === t.codePointAt(t.length - 1) && (r += '/'),
              n ? '/' + r : r);
        };
      function nu(e) {
        if ('string' != typeof e)
          throw TypeError('Path must be a string. Received ' + JSON.stringify(e));
      }
      function nc(e) {
        return !!(
          null !== e &&
          'object' == typeof e &&
          'href' in e &&
          e.href &&
          'protocol' in e &&
          e.protocol &&
          void 0 === e.auth
        );
      }
      let nd = ['history', 'path', 'basename', 'stem', 'extname', 'dirname'];
      class nf {
        constructor(e) {
          let t, n;
          ((t = e
            ? nc(e)
              ? { path: e }
              : 'string' == typeof e ||
                  (function (e) {
                    return !!(
                      e &&
                      'object' == typeof e &&
                      'byteLength' in e &&
                      'byteOffset' in e
                    );
                  })(e)
                ? { value: e }
                : e
            : {}),
            (this.cwd = 'cwd' in t ? '' : '/'),
            (this.data = {}),
            (this.history = []),
            (this.messages = []),
            this.value,
            this.map,
            this.result,
            this.stored);
          let r = -1;
          for (; ++r < nd.length; ) {
            const e = nd[r];
            e in t &&
              void 0 !== t[e] &&
              null !== t[e] &&
              (this[e] = 'history' === e ? [...t[e]] : t[e]);
          }
          for (n in t) nd.includes(n) || (this[n] = t[n]);
        }
        get basename() {
          return 'string' == typeof this.path ? na(this.path) : void 0;
        }
        set basename(e) {
          (nh(e, 'basename'), np(e, 'basename'), (this.path = ns(this.dirname || '', e)));
        }
        get dirname() {
          return 'string' == typeof this.path ? no(this.path) : void 0;
        }
        set dirname(e) {
          (nm(this.basename, 'dirname'), (this.path = ns(e || '', this.basename)));
        }
        get extname() {
          return 'string' == typeof this.path ? nl(this.path) : void 0;
        }
        set extname(e) {
          if ((np(e, 'extname'), nm(this.dirname, 'extname'), e)) {
            if (46 !== e.codePointAt(0)) throw Error('`extname` must start with `.`');
            if (e.includes('.', 1)) throw Error('`extname` cannot contain multiple dots');
          }
          this.path = ns(this.dirname, this.stem + (e || ''));
        }
        get path() {
          return this.history[this.history.length - 1];
        }
        set path(e) {
          (nc(e) &&
            (e = (function (e) {
              if ('string' == typeof e) e = new URL(e);
              else if (!nc(e)) {
                let t = TypeError(
                  'The "path" argument must be of type string or an instance of URL. Received `' +
                    e +
                    '`',
                );
                throw ((t.code = 'ERR_INVALID_ARG_TYPE'), t);
              }
              if ('file:' !== e.protocol) {
                let e = TypeError('The URL must be of scheme file');
                throw ((e.code = 'ERR_INVALID_URL_SCHEME'), e);
              }
              return (function (e) {
                if ('' !== e.hostname) {
                  let e = TypeError(
                    'File URL host must be "localhost" or empty on darwin',
                  );
                  throw ((e.code = 'ERR_INVALID_FILE_URL_HOST'), e);
                }
                let t = e.pathname,
                  n = -1;
                for (; ++n < t.length; )
                  if (37 === t.codePointAt(n) && 50 === t.codePointAt(n + 1)) {
                    let e = t.codePointAt(n + 2);
                    if (70 === e || 102 === e) {
                      let e = TypeError(
                        'File URL path must not include encoded / characters',
                      );
                      throw ((e.code = 'ERR_INVALID_FILE_URL_PATH'), e);
                    }
                  }
                return decodeURIComponent(t);
              })(e);
            })(e)),
            nh(e, 'path'),
            this.path !== e && this.history.push(e));
        }
        get stem() {
          return 'string' == typeof this.path ? na(this.path, this.extname) : void 0;
        }
        set stem(e) {
          (nh(e, 'stem'),
            np(e, 'stem'),
            (this.path = ns(this.dirname || '', e + (this.extname || ''))));
        }
        fail(e, t, n) {
          let r = this.message(e, t, n);
          throw ((r.fatal = !0), r);
        }
        info(e, t, n) {
          let r = this.message(e, t, n);
          return ((r.fatal = void 0), r);
        }
        message(e, t, n) {
          let r = new G(e, t, n);
          return (
            this.path && ((r.name = this.path + ':' + r.name), (r.file = this.path)),
            (r.fatal = !1),
            this.messages.push(r),
            r
          );
        }
        toString(e) {
          return void 0 === this.value
            ? ''
            : 'string' == typeof this.value
              ? this.value
              : new TextDecoder(e || void 0).decode(this.value);
        }
      }
      function np(e, t) {
        if (e && e.includes('/'))
          throw Error('`' + t + '` cannot be a path: did not expect `/`');
      }
      function nh(e, t) {
        if (!e) throw Error('`' + t + '` cannot be empty');
      }
      function nm(e, t) {
        if (!e) throw Error('Setting `' + t + '` requires `path` to be set too');
      }
      let ng = function (e) {
          let t = this.constructor.prototype,
            n = t[e],
            r = function () {
              return n.apply(r, arguments);
            };
          return (Object.setPrototypeOf(r, t), r);
        },
        ny = {}.hasOwnProperty;
      class nv extends ng {
        constructor() {
          (super('copy'),
            (this.Compiler = void 0),
            (this.Parser = void 0),
            (this.attachers = []),
            (this.compiler = void 0),
            (this.freezeIndex = -1),
            (this.frozen = void 0),
            (this.namespace = {}),
            (this.parser = void 0),
            (this.transformers = (function () {
              let e = [],
                t = {
                  run: function (...t) {
                    let n = -1,
                      r = t.pop();
                    if ('function' != typeof r)
                      throw TypeError('Expected function as last argument, not ' + r);
                    !(function i(a, ...o) {
                      let l = e[++n],
                        s = -1;
                      if (a) return void r(a);
                      for (; ++s < t.length; )
                        (null === o[s] || void 0 === o[s]) && (o[s] = t[s]);
                      ((t = o),
                        l
                          ? (function (e, t) {
                              let n;
                              return function (...t) {
                                let a,
                                  o = e.length > t.length;
                                o && t.push(r);
                                try {
                                  a = e.apply(this, t);
                                } catch (e) {
                                  if (o && n) throw e;
                                  return r(e);
                                }
                                o ||
                                  (a && a.then && 'function' == typeof a.then
                                    ? a.then(i, r)
                                    : a instanceof Error
                                      ? r(a)
                                      : i(a));
                              };
                              function r(e, ...i) {
                                n || ((n = !0), t(e, ...i));
                              }
                              function i(e) {
                                r(null, e);
                              }
                            })(
                              l,
                              i,
                            )(...o)
                          : r(null, ...o));
                    })(null, ...t);
                  },
                  use: function (n) {
                    if ('function' != typeof n)
                      throw TypeError('Expected `middelware` to be a function, not ' + n);
                    return (e.push(n), t);
                  },
                };
              return t;
            })()));
        }
        copy() {
          let e = new nv(),
            t = -1;
          for (; ++t < this.attachers.length; ) {
            let n = this.attachers[t];
            e.use(...n);
          }
          return (e.data(nr(!0, {}, this.namespace)), e);
        }
        data(e, t) {
          return 'string' == typeof e
            ? 2 == arguments.length
              ? (nw('data', this.frozen), (this.namespace[e] = t), this)
              : (ny.call(this.namespace, e) && this.namespace[e]) || void 0
            : e
              ? (nw('data', this.frozen), (this.namespace = e), this)
              : this.namespace;
        }
        freeze() {
          if (this.frozen) return this;
          for (; ++this.freezeIndex < this.attachers.length; ) {
            let [e, ...t] = this.attachers[this.freezeIndex];
            if (!1 === t[0]) continue;
            !0 === t[0] && (t[0] = void 0);
            let n = e.call(this, ...t);
            'function' == typeof n && this.transformers.use(n);
          }
          return ((this.frozen = !0), (this.freezeIndex = 1 / 0), this);
        }
        parse(e) {
          this.freeze();
          let t = nE(e),
            n = this.parser || this.Parser;
          return (nb('parse', n), n(String(t), t));
        }
        process(e, t) {
          let n = this;
          return (
            this.freeze(),
            nb('process', this.parser || this.Parser),
            nk('process', this.compiler || this.Compiler),
            t ? r(void 0, t) : new Promise(r)
          );
          function r(r, i) {
            let a = nE(e),
              o = n.parse(a);
            function l(e, n) {
              e || !n ? i(e) : r ? r(n) : t(void 0, n);
            }
            n.run(o, a, function (e, t, r) {
              var i, a;
              if (e || !t || !r) return l(e);
              let o = n.stringify(t, r);
              ('string' == typeof (i = o) ||
              ((a = i) && 'object' == typeof a && 'byteLength' in a && 'byteOffset' in a)
                ? (r.value = o)
                : (r.result = o),
                l(e, r));
            });
          }
        }
        processSync(e) {
          let t,
            n = !1;
          return (
            this.freeze(),
            nb('processSync', this.parser || this.Parser),
            nk('processSync', this.compiler || this.Compiler),
            this.process(e, function (e, r) {
              ((n = !0), nn(e), (t = r));
            }),
            nS('processSync', 'process', n),
            t
          );
        }
        run(e, t, n) {
          (n_(e), this.freeze());
          let r = this.transformers;
          return (
            n || 'function' != typeof t || ((n = t), (t = void 0)),
            n ? i(void 0, n) : new Promise(i)
          );
          function i(i, a) {
            let o = nE(t);
            r.run(e, o, function (t, r, o) {
              let l = r || e;
              t ? a(t) : i ? i(l) : n(void 0, l, o);
            });
          }
        }
        runSync(e, t) {
          let n,
            r = !1;
          return (
            this.run(e, t, function (e, t) {
              (nn(e), (n = t), (r = !0));
            }),
            nS('runSync', 'run', r),
            n
          );
        }
        stringify(e, t) {
          this.freeze();
          let n = nE(t),
            r = this.compiler || this.Compiler;
          return (nk('stringify', r), n_(e), r(e, n));
        }
        use(e, ...t) {
          let n = this.attachers,
            r = this.namespace;
          if ((nw('use', this.frozen), null == e));
          else if ('function' == typeof e) o(e, t);
          else if ('object' == typeof e) Array.isArray(e) ? a(e) : i(e);
          else throw TypeError('Expected usable value, not `' + e + '`');
          return this;
          function i(e) {
            if (!('plugins' in e) && !('settings' in e))
              throw Error(
                'Expected usable value but received an empty preset, which is probably a mistake: presets typically come with `plugins` and sometimes with `settings`, but this has neither',
              );
            (a(e.plugins), e.settings && (r.settings = nr(!0, r.settings, e.settings)));
          }
          function a(e) {
            let t = -1;
            if (null == e);
            else if (Array.isArray(e))
              for (; ++t < e.length; )
                !(function (e) {
                  if ('function' == typeof e) o(e, []);
                  else if ('object' == typeof e)
                    if (Array.isArray(e)) {
                      let [t, ...n] = e;
                      o(t, n);
                    } else i(e);
                  else throw TypeError('Expected usable value, not `' + e + '`');
                })(e[t]);
            else throw TypeError('Expected a list of plugins, not `' + e + '`');
          }
          function o(e, t) {
            let r = -1,
              i = -1;
            for (; ++r < n.length; )
              if (n[r][0] === e) {
                i = r;
                break;
              }
            if (-1 === i) n.push([e, ...t]);
            else if (t.length > 0) {
              let [r, ...a] = t,
                o = n[i][1];
              (ni(o) && ni(r) && (r = nr(!0, o, r)), (n[i] = [e, r, ...a]));
            }
          }
        }
      }
      let nx = new nv().freeze();
      function nb(e, t) {
        if ('function' != typeof t)
          throw TypeError('Cannot `' + e + '` without `parser`');
      }
      function nk(e, t) {
        if ('function' != typeof t)
          throw TypeError('Cannot `' + e + '` without `compiler`');
      }
      function nw(e, t) {
        if (t)
          throw Error(
            'Cannot call `' +
              e +
              '` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`.',
          );
      }
      function n_(e) {
        if (!ni(e) || 'string' != typeof e.type)
          throw TypeError('Expected node, got `' + e + '`');
      }
      function nS(e, t, n) {
        if (!n) throw Error('`' + e + '` finished async. Use `' + t + '` instead');
      }
      function nE(e) {
        var t;
        return (t = e) && 'object' == typeof t && 'message' in t && 'messages' in t
          ? e
          : new nf(e);
      }
      let nC = [],
        nT = { allowDangerousHtml: !0 },
        nA = /^(https?|ircs?|mailto|xmpp)$/i,
        nP = [
          { from: 'astPlugins', id: 'remove-buggy-html-in-markdown-parser' },
          { from: 'allowDangerousHtml', id: 'remove-buggy-html-in-markdown-parser' },
          {
            from: 'allowNode',
            id: 'replace-allownode-allowedtypes-and-disallowedtypes',
            to: 'allowElement',
          },
          {
            from: 'allowedTypes',
            id: 'replace-allownode-allowedtypes-and-disallowedtypes',
            to: 'allowedElements',
          },
          { from: 'className', id: 'remove-classname' },
          {
            from: 'disallowedTypes',
            id: 'replace-allownode-allowedtypes-and-disallowedtypes',
            to: 'disallowedElements',
          },
          { from: 'escapeHtml', id: 'remove-buggy-html-in-markdown-parser' },
          { from: 'includeElementIndex', id: '#remove-includeelementindex' },
          {
            from: 'includeNodeIndex',
            id: 'change-includenodeindex-to-includeelementindex',
          },
          { from: 'linkTarget', id: 'remove-linktarget' },
          { from: 'plugins', id: 'change-plugins-to-remarkplugins', to: 'remarkPlugins' },
          { from: 'rawSourcePos', id: '#remove-rawsourcepos' },
          { from: 'renderers', id: 'change-renderers-to-components', to: 'components' },
          { from: 'source', id: 'change-source-to-children', to: 'children' },
          { from: 'sourcePos', id: '#remove-sourcepos' },
          { from: 'transformImageUri', id: '#add-urltransform', to: 'urlTransform' },
          { from: 'transformLinkUri', id: '#add-urltransform', to: 'urlTransform' },
        ];
      function nO(e) {
        var t;
        let n,
          r,
          i,
          a,
          o,
          l =
            ((n = (t = e).rehypePlugins || nC),
            (r = t.remarkPlugins || nC),
            (i = t.remarkRehypeOptions ? { ...t.remarkRehypeOptions, ...nT } : nT),
            nx().use(tM).use(r).use(nt, i).use(n)),
          s =
            ((a = e.children || ''),
            (o = new nf()),
            'string' == typeof a && (o.value = a),
            o);
        return (function (e, t) {
          let n = t.allowedElements,
            r = t.allowElement,
            i = t.components,
            a = t.disallowedElements,
            o = t.skipHtml,
            l = t.unwrapDisallowed,
            s = t.urlTransform || nN;
          for (let e of nP) Object.hasOwn(t, e.from) && (e.from, e.to && e.to, e.id);
          return (
            tJ(e, function (e, t, i) {
              if ('raw' === e.type && i && 'number' == typeof t)
                return (
                  o
                    ? i.children.splice(t, 1)
                    : (i.children[t] = { type: 'text', value: e.value }),
                  t
                );
              if ('element' === e.type) {
                let t;
                for (t in ed)
                  if (Object.hasOwn(ed, t) && Object.hasOwn(e.properties, t)) {
                    let n = e.properties[t],
                      r = ed[t];
                    (null === r || r.includes(e.tagName)) &&
                      (e.properties[t] = s(String(n || ''), t, e));
                  }
              }
              if ('element' === e.type) {
                let o = n ? !n.includes(e.tagName) : !!a && a.includes(e.tagName);
                if (
                  (!o && r && 'number' == typeof t && (o = !r(e, t, i)),
                  o && i && 'number' == typeof t)
                )
                  return (
                    l && e.children
                      ? i.children.splice(t, 1, ...e.children)
                      : i.children.splice(t, 1),
                    t
                  );
              }
            }),
            (function (e, t) {
              var n, r, i, a;
              let o;
              if (!t || void 0 === t.Fragment)
                throw TypeError('Expected `Fragment` in options');
              let l = t.filePath || void 0;
              if (t.development) {
                if ('function' != typeof t.jsxDEV)
                  throw TypeError(
                    'Expected `jsxDEV` in options when `development: true`',
                  );
                ((n = l),
                  (r = t.jsxDEV),
                  (o = function (e, t, i, a) {
                    let o = Array.isArray(i.children),
                      l = H(e);
                    return r(
                      t,
                      i,
                      a,
                      o,
                      {
                        columnNumber: l ? l.column - 1 : void 0,
                        fileName: n,
                        lineNumber: l ? l.line : void 0,
                      },
                      void 0,
                    );
                  }));
              } else {
                if ('function' != typeof t.jsx)
                  throw TypeError('Expected `jsx` in production options');
                if ('function' != typeof t.jsxs)
                  throw TypeError('Expected `jsxs` in production options');
                ((i = t.jsx),
                  (a = t.jsxs),
                  (o = function (e, t, n, r) {
                    let o = Array.isArray(n.children) ? a : i;
                    return r ? o(t, n, r) : o(t, n);
                  }));
              }
              let s = {
                  Fragment: t.Fragment,
                  ancestors: [],
                  components: t.components || {},
                  create: o,
                  elementAttributeNameCase: t.elementAttributeNameCase || 'react',
                  evaluater: t.createEvaluater ? t.createEvaluater() : void 0,
                  filePath: l,
                  ignoreInvalidStyle: t.ignoreInvalidStyle || !1,
                  passKeys: !1 !== t.passKeys,
                  passNode: t.passNode || !1,
                  schema: 'svg' === t.space ? M : D,
                  stylePropertyNameCase: t.stylePropertyNameCase || 'dom',
                  tableCellAlignToStyle: !1 !== t.tableCellAlignToStyle,
                },
                u = ei(s, e, void 0);
              return u && 'string' != typeof u
                ? u
                : s.create(e, s.Fragment, { children: u || void 0 }, void 0);
            })(e, {
              Fragment: ef.Fragment,
              components: i,
              ignoreInvalidStyle: !0,
              jsx: ef.jsx,
              jsxs: ef.jsxs,
              passKeys: !0,
              passNode: !0,
            })
          );
        })(l.runSync(l.parse(s), s), e);
      }
      function nN(e) {
        let t = e.indexOf(':'),
          n = e.indexOf('?'),
          r = e.indexOf('#'),
          i = e.indexOf('/');
        return -1 === t ||
          (-1 !== i && t > i) ||
          (-1 !== n && t > n) ||
          (-1 !== r && t > r) ||
          nA.test(e.slice(0, t))
          ? e
          : '';
      }
    },
    9554: (e, t, n) => {
      n.d(t, { A: () => r });
      let r = (0, n(4552).A)('x', [
        ['path', { d: 'M18 6 6 18', key: '1bl5f8' }],
        ['path', { d: 'm6 6 12 12', key: 'd8bk6v' }],
      ]);
    },
    9939: (e, t, n) => {
      n.d(t, { A: () => r });
      let r = (0, n(4552).A)('image', [
        [
          'rect',
          { width: '18', height: '18', x: '3', y: '3', rx: '2', ry: '2', key: '1m3agn' },
        ],
        ['circle', { cx: '9', cy: '9', r: '2', key: 'af1f0g' }],
        ['path', { d: 'm21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21', key: '1xmnt7' }],
      ]);
    },
  },
]);
