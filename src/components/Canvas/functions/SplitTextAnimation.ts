// @ts-nocheck
"use strict";
function r(t, e) {
  return Object.getOwnPropertyNames(Object(t)).reduce((n, r) => {
    let i = Object.getOwnPropertyDescriptor(Object(t), r),
      s = Object.getOwnPropertyDescriptor(Object(e), r);
    return Object.defineProperty(n, r, s || i);
  }, {});
}
function i(t) {
  return "string" == typeof t;
}
function s(t) {
  return Array.isArray(t);
}
function o(t = {}) {
  let e;
  let n = r(t);
  return (
    void 0 !== n.types ? (e = n.types) : void 0 !== n.split && (e = n.split),
    void 0 !== e &&
    (n.types = (i(e) || s(e) ? String(e) : "")
      .split(",")
      .map((t) => String(t).trim())
      .filter((t) => /((line)|(word)|(char))/i.test(t))),
    (n.absolute || n.position) &&
    (n.absolute = n.absolute || /absolute/.test(t.position)),
      n
  );
}
function a(t) {
  let e = i(t) || s(t) ? String(t) : "";
  return {
    none: !e,
    lines: /line/i.test(e),
    words: /word/i.test(e),
    chars: /char/i.test(e),
  };
}
function l(t) {
  return null !== t && "object" == typeof t;
}
function p(t) {
  return l(t) && /^(1|3|11)$/.test(t.nodeType);
}
function c(t) {
  var e;
  return s(t)
    ? t
    : null == t
      ? []
      : l(t) && "number" == typeof (e = t.length) && e > -1 && e % 1 == 0
        ? Array.prototype.slice.call(t)
        : [t];
}
function u(t) {
  let e = t;
  return (
    i(t) &&
    (e = /^(#[a-z]\w+)$/.test(t.trim())
      ? document.getElementById(t.trim().slice(1))
      : document.querySelectorAll(t)),
      c(e).reduce((t, e) => [...t, ...c(e).filter(p)], [])
  );
}
function Z() {
  return L;
}
(() => {
  function t(...t) {
    let e = t.length;
    for (let n = 0; n < e; n++) {
      let r = t[n];
      1 === r.nodeType || 11 === r.nodeType
        ? this.appendChild(r)
        : this.appendChild(document.createTextNode(String(r)));
    }
  }
  function e(...t) {
    for (; this.lastChild; ) this.removeChild(this.lastChild);
    t.length && this.append(...t);
  }
  function n(...t) {
    let e = this.parentNode,
      n = t.length;
    if (e)
      for (n || e.removeChild(this); n--; ) {
        let r = t[n];
        "object" != typeof r
          ? (r = this.ownerDocument.createTextNode(r))
          : r.parentNode && r.parentNode.removeChild(r),
          n ? e.insertBefore(this.previousSibling, r) : e.replaceChild(r, this);
      }
  }
  "undefined" == typeof Element ||
  (Element.prototype.append ||
  ((Element.prototype.append = t), (DocumentFragment.prototype.append = t)),
  Element.prototype.replaceChildren ||
  ((Element.prototype.replaceChildren = e),
    (DocumentFragment.prototype.replaceChildren = e)),
  Element.prototype.replaceWith ||
  ((Element.prototype.replaceWith = n),
    (DocumentFragment.prototype.replaceWith = n)));
})();
let { entries: f, keys: h, values: d } = Object,
  g = "_splittype",
  m = {},
  y = 0;
function x(t, e, n) {
  if (!l(t)) return console.warn("[data.set] owner is not an object"), null;
  let r = t[g] || (t[g] = ++y),
    i = m[r] || (m[r] = {});
  return (
    void 0 === n
      ? e &&
      Object.getPrototypeOf(e) === Object.prototype &&
      (m[r] = {
        ...i,
        ...e,
      })
      : void 0 !== e && (i[e] = n),
      n
  );
}
function v(t, e) {
  let n = l(t) ? t[g] : null,
    r = (n && m[n]) || {};
  return void 0 === e ? r : r[e];
}
function w(t) {
  let e = t && t[g];
  e && (delete t[e], delete m[e]);
}
let b = "\ud800-\udfff",
  O = "\\u0300-\\u036f\\ufe20-\\ufe23",
  C = "\\u20d0-\\u20f0",
  P = "\\ufe0e\\ufe0f",
  M = `[${b}]`,
  _ = `[${O}${C}]`,
  F = "\ud83c[\udffb-\udfff]",
  S = `(?:${_}|${F})`,
  E = `[^${b}]`,
  A = "(?:\ud83c[\udde6-\uddff]){2}",
  $ = "[\ud800-\udbff][\udc00-\udfff]",
  N = "\\u200d",
  T = `${S}?`,
  W = `[${P}]?`,
  B = "(?:" + N + "(?:" + [E, A, $].join("|") + ")" + W + T + ")*",
  Y = `(?:${[`${E}${_}?`, _, A, $, M].join("|")}
)`,
  k = RegExp(`${F}(?=${F})|${Y}${W + T + B}`, "g"),
  // eslint-disable-next-line no-misleading-character-class
  X = RegExp(`[${[N, b, O, C, P].join("")}]`);
function D(t, e) {
  let n = document.createElement(t);
  return (
    e &&
    Object.keys(e).forEach((t) => {
      let r = e[t],
        s = i(r) ? r.trim() : r;
      null !== s &&
      "" !== s &&
      ("children" === t ? n.append(...c(s)) : n.setAttribute(t, s));
    }),
      n
  );
}
var j = {
  splitClass: "",
  lineClass: "line",
  wordClass: "word",
  charClass: "char",
  types: ["lines", "words", "chars"],
  absolute: !1,
  tagName: "div",
};
let z = () => document.createDocumentFragment(),
  I = r(j, {});
export default class L {
  lines: any[];
  static get data() {
    return m;
  }
  static get defaults() {
    return I;
  }
  static set defaults(t) {
    I = r(I, o(t));
  }
  static setDefaults(t) {
    return (I = r(I, o(t))), j;
  }
  static revert(t) {
    u(t).forEach((t) => {
      let { isSplit: e, html: n, cssWidth: r, cssHeight: i } = v(t);
      e &&
      ((t.innerHTML = n),
        (t.style.width = r || ""),
        (t.style.height = i || ""),
        w(t));
    });
  }
  static create(t, e) {
    return new L(t, e);
  }
  constructor(t, e) {
    (this.isSplit = !1),
      (this.settings = r(I, o(e))),
      (this.elements = u(t)),
      this.split();
  }
  split(t) {
    this.revert(),
      this.elements.forEach((t) => {
        x(t, "html", t.innerHTML);
      }),
      (this.lines = []),
      (this.words = []),
      (this.chars = []);
    let e = [window.pageXOffset, window.pageYOffset];
    void 0 !== t && (this.settings = r(this.settings, o(t)));
    let n = a(this.settings.types);
    n.none ||
    (this.elements.forEach((t) => {
      x(t, "isRoot", !0);
      let { words: e, chars: n } = (function t(e, n) {
        let s = e.nodeType,
          o = {
            words: [],
            chars: [],
          };
        if (!/(1|3|11)/.test(s)) return o;
        if (3 === s && /\S/.test(e.nodeValue))
          return (function (t, e) {
            e = r(j, e);
            let n = a(e.types),
              s = e.tagName,
              o = t.nodeValue,
              l = document.createDocumentFragment(),
              p = [],
              c = [];
            return (
              /^\s/.test(o) && l.append(" "),
                (p = (function (t, e = " ") {
                  let n = t ? String(t) : "";
                  return n.trim().replace(/\s+/g, " ").split(e);
                })(o).reduce((t, r, o, a) => {
                  let p, u;
                  return (
                    n.chars &&
                    (u = (function (t, e = "") {
                      var n, r, s;
                      return (t = null == (n = t) ? "" : String(n)) &&
                      i(t) &&
                      !e &&
                      ((r = t), X.test(r))
                        ? ((s = t),
                          X.test(s) ? s.match(k) || [] : s.split(""))
                        : t.split(e);
                    })(r).map((t) => {
                      let n = D(s, {
                        class: `${e.splitClass} ${e.charClass}`,
                        style: "display: inline-block;",
                        children: t,
                      });
                      return x(n, "isChar", !0), (c = [...c, n]), n;
                    })),
                      n.words || n.lines
                        ? (x(
                          (p = D(s, {
                            class: `${e.wordClass} ${e.splitClass}`,
                            style: `display: inline-block; ${
                              n.words && e.absolute ? "position: relative;" : ""
                            }`,
                            children: n.chars ? u : r,
                          })),
                          {
                            isWord: !0,
                            isWordStart: !0,
                            isWordEnd: !0,
                          }
                        ),
                          l.appendChild(p))
                        : u.forEach((t) => {
                          l.appendChild(t);
                        }),
                    o < a.length - 1 && l.append(" "),
                      n.words ? t.concat(p) : t
                  );
                }, [])),
              /\s$/.test(o) && l.append(" "),
                t.replaceWith(l),
                {
                  words: p,
                  chars: c,
                }
            );
          })(e, n);
        let l = c(e.childNodes);
        if (l.length && (x(e, "isSplit", !0), !v(e).isRoot)) {
          (e.style.display = "inline-block"), (e.style.position = "relative");
          let p = e.nextSibling,
            u = e.previousSibling,
            f = e.textContent || "",
            h = p ? p.textContent : " ",
            d = u ? u.textContent : " ";
          x(e, {
            isWordEnd: /\s$/.test(f) || /^\s/.test(h),
            isWordStart: /^\s/.test(f) || /\s$/.test(d),
          });
        }
        return l.reduce((e, r) => {
          let { words: i, chars: s } = t(r, n);
          return {
            words: [...e.words, ...i],
            chars: [...e.chars, ...s],
          };
        }, o);
      })(t, this.settings);
      (this.words = [...this.words, ...e]),
        (this.chars = [...this.chars, ...n]);
    }),
      this.elements.forEach((t) => {
        if (n.lines || this.settings.absolute) {
          let r = (function (t, e, n) {
            let r, i, s;
            let o = a(e.types),
              l = e.tagName,
              p = t.getElementsByTagName("*"),
              u = [],
              f = [],
              h = null,
              d = [],
              g = t.parentElement,
              m = t.nextElementSibling,
              y = z(),
              b = window.getComputedStyle(t),
              O = b.textAlign,
              C = parseFloat(b.fontSize),
              P = 0.2 * C;
            return (
              e.absolute &&
              ((s = {
                left: t.offsetLeft,
                top: t.offsetTop,
                width: t.offsetWidth,
              }),
                (i = t.offsetWidth),
                (r = t.offsetHeight),
                x(t, {
                  cssWidth: t.style.width,
                  cssHeight: t.style.height,
                })),
                c(p).forEach((r) => {
                  let i = r.parentElement === t,
                    {
                      width: s,
                      height: a,
                      top: l,
                      left: p,
                    } = (function (t, e, n, r) {
                      if (!n.absolute)
                        return {
                          top: e ? t.offsetTop : null,
                        };
                      let i = t.offsetParent,
                        [s, o] = r,
                        a = 0,
                        l = 0;
                      if (i && i !== document.body) {
                        let p = i.getBoundingClientRect();
                        (a = p.x + s), (l = p.y + o);
                      }
                      let {
                          width: c,
                          height: u,
                          x: f,
                          y: h,
                        } = t.getBoundingClientRect(),
                        d = h + o - l,
                        g = f + s - a;
                      return {
                        width: c,
                        height: u,
                        top: d,
                        left: g,
                      };
                    })(r, i, e, n);
                  !/^br$/i.test(r.nodeName) &&
                  (o.lines &&
                  i &&
                  ((null === h || l - h >= P) && ((h = l), u.push((f = []))),
                    f.push(r)),
                  e.absolute &&
                  x(r, {
                    top: l,
                    left: p,
                    width: s,
                    height: a,
                  }));
                }),
              g && g.removeChild(t),
              o.lines &&
              ((d = u.map((t) => {
                let n = D(l, {
                  class: `${e.splitClass} ${e.lineClass}`,
                  style: `display: block; text-align: ${O}; width: 100%;`,
                });
                x(n, "isLine", !0);
                let r = {
                  height: 0,
                  top: 1e4,
                };
                return (
                  y.appendChild(n),
                    t.forEach((t, e, i) => {
                      let { isWordEnd: s, top: o, height: a } = v(t),
                        l = i[e + 1];
                      (r.height = Math.max(r.height, a)),
                        (r.top = Math.min(r.top, o)),
                        n.appendChild(t),
                      s && v(l).isWordStart && n.append(" ");
                    }),
                  e.absolute &&
                  x(n, {
                    height: r.height,
                    top: r.top,
                  }),
                    n
                );
              })),
              o.words ||
              (function t(e) {
                v(e).isWord
                  ? (w(e), e.replaceWith(...e.childNodes))
                  : c(e.children).forEach((e) => t(e));
              })(y),
                t.replaceChildren(y)),
              e.absolute &&
              ((t.style.width = `${t.style.width || i}px`),
                (t.style.height = `${r}px`),
                c(p).forEach((t) => {
                  let {
                      isLine: e,
                      top: n,
                      left: r,
                      width: i,
                      height: o,
                    } = v(t),
                    a = v(t.parentElement),
                    l = !e && a.isLine;
                  (t.style.top = `${l ? n - a.top : n}px`),
                    (t.style.left = e
                      ? `${s.left}px`
                      : `${r - (l ? s.left : 0)}px`),
                    (t.style.height = `${o}px`),
                    (t.style.width = e ? `${s.width}px` : `${i}px`),
                    (t.style.position = "absolute");
                })),
              g && (m ? g.insertBefore(t, m) : g.appendChild(t)),
                d
            );
          })(t, this.settings, e);
          this.lines = [...this.lines, ...r];
        }
      }),
      (this.isSplit = !0),
      window.scrollTo(e[0], e[1]),
      f(m).forEach(([t, { isRoot: e, isSplit: n }]) => {
        (e && n) || ((m[t] = null), delete m[t]);
      }));
  }
  revert() {
    this.isSplit &&
    ((this.lines = null),
      (this.words = null),
      (this.chars = null),
      (this.isSplit = !1)),
      L.revert(this.elements);
  }
}
