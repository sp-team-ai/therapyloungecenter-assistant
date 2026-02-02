!(function (t) {
    "function" == typeof define && define.amd ? define(t) : t();
})(function () {
    "use strict";
    var t = Object.defineProperty,
        i = (i, n, r) => {
            var a, s, o;
            return (a = i), (s = "symbol" != typeof n ? n + "" : n), (o = r), s in a ? t(a, s, { enumerable: !0, configurable: !0, writable: !0, value: o }) : (a[s] = o), r;
        },
        n = "u" > typeof globalThis ? globalThis : "u" > typeof window ? window : "u" > typeof global ? global : "u" > typeof self ? self : {},
        r = {};
    function a(t, i) {
        if (null == t) return {};
        var n,
            r,
            a = (function (t, i) {
                if (null == t) return {};
                var n,
                    r,
                    a = {},
                    s = Object.keys(t);
                for (r = 0; r < s.length; r++) (n = s[r]), i.indexOf(n) >= 0 || (a[n] = t[n]);
                return a;
            })(t, i);
        if (Object.getOwnPropertySymbols) {
            var s = Object.getOwnPropertySymbols(t);
            for (r = 0; r < s.length; r++) (n = s[r]), i.indexOf(n) >= 0 || (Object.prototype.propertyIsEnumerable.call(t, n) && (a[n] = t[n]));
        }
        return a;
    }
    function s(t, i) {
        if (!(t instanceof i)) throw TypeError("Cannot call a class as a function");
    }
    function o(t) {
        return (o =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (t) {
                      return typeof t;
                  }
                : function (t) {
                      return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                  })(t);
    }
    function c(t) {
        var i = (function (t, i) {
            if ("object" !== o(t) || null === t) return t;
            var n = t[Symbol.toPrimitive];
            if (void 0 !== n) {
                var r = n.call(t, "string");
                if ("object" !== o(r)) return r;
                throw TypeError("@@toPrimitive must return a primitive value.");
            }
            return String(t);
        })(t);
        return "symbol" === o(i) ? i : String(i);
    }
    function l(t, i) {
        for (var n = 0; n < i.length; n++) {
            var r = i[n];
            (r.enumerable = r.enumerable || !1), (r.configurable = !0), "value" in r && (r.writable = !0), Object.defineProperty(t, c(r.key), r);
        }
    }
    function u(t, i, n) {
        return i && l(t.prototype, i), n && l(t, n), Object.defineProperty(t, "prototype", { writable: !1 }), t;
    }
    function d(t) {
        if (void 0 === t) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
        return t;
    }
    function h(t, i) {
        return (h = Object.setPrototypeOf
            ? Object.setPrototypeOf.bind()
            : function (t, i) {
                  return (t.__proto__ = i), t;
              })(t, i);
    }
    function p(t, i) {
        if ("function" != typeof i && null !== i) throw TypeError("Super expression must either be null or a function");
        (t.prototype = Object.create(i && i.prototype, { constructor: { value: t, writable: !0, configurable: !0 } })), Object.defineProperty(t, "prototype", { writable: !1 }), i && h(t, i);
    }
    function f(t, i) {
        if (i && ("object" === o(i) || "function" == typeof i)) return i;
        if (void 0 !== i) throw TypeError("Derived constructors may only return object or undefined");
        return d(t);
    }
    function g(t) {
        return (g = Object.setPrototypeOf
            ? Object.getPrototypeOf.bind()
            : function (t) {
                  return t.__proto__ || Object.getPrototypeOf(t);
              })(t);
    }
    function v(t, i, n) {
        return (i = c(i)) in t ? Object.defineProperty(t, i, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (t[i] = n), t;
    }
    function m(t, i, n, r, a, s, o) {
        try {
            var c = t[s](o),
                l = c.value;
        } catch (u) {
            return void n(u);
        }
        c.done ? i(l) : Promise.resolve(l).then(r, a);
    }
    function y(t) {
        return function () {
            var i = this,
                n = arguments;
            return new Promise(function (r, a) {
                var s = t.apply(i, n);
                function o(t) {
                    m(s, r, a, o, c, "next", t);
                }
                function c(t) {
                    m(s, r, a, o, c, "throw", t);
                }
                o(void 0);
            });
        };
    }
    function b(t, i) {
        (null == i || i > t.length) && (i = t.length);
        for (var n = 0, r = Array(i); n < i; n++) r[n] = t[n];
        return r;
    }
    function $(t, i) {
        return (
            (function (t) {
                if (Array.isArray(t)) return t;
            })(t) ||
            (function (t, i) {
                var n = null == t ? null : ("u" > typeof Symbol && t[Symbol.iterator]) || t["@@iterator"];
                if (null != n) {
                    var r,
                        a,
                        s,
                        o,
                        c = [],
                        l = !0,
                        u = !1;
                    try {
                        if (((s = (n = n.call(t)).next), 0 === i)) {
                            if (Object(n) !== n) return;
                            l = !1;
                        } else for (; !(l = (r = s.call(n)).done) && (c.push(r.value), c.length !== i); l = !0);
                    } catch (d) {
                        (u = !0), (a = d);
                    } finally {
                        try {
                            if (!l && null != n.return && ((o = n.return()), Object(o) !== o)) return;
                        } finally {
                            if (u) throw a;
                        }
                    }
                    return c;
                }
            })(t, i) ||
            (function (t, i) {
                if (t) {
                    if ("string" == typeof t) return b(t, i);
                    var n = Object.prototype.toString.call(t).slice(8, -1);
                    return "Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? b(t, i) : void 0;
                }
            })(t, i) ||
            (function () {
                throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
            })()
        );
    }
    var k,
        S = {},
        w = {
            get exports() {
                return S;
            },
            set exports(e) {
                S = e;
            },
        },
        T = "object" == typeof Reflect ? Reflect : null,
        C =
            T && "function" == typeof T.apply
                ? T.apply
                : function (t, i, n) {
                      return Function.prototype.apply.call(t, i, n);
                  };
    k =
        T && "function" == typeof T.ownKeys
            ? T.ownKeys
            : Object.getOwnPropertySymbols
            ? function (t) {
                  return Object.getOwnPropertyNames(t).concat(Object.getOwnPropertySymbols(t));
              }
            : function (t) {
                  return Object.getOwnPropertyNames(t);
              };
    var E =
        Number.isNaN ||
        function (t) {
            return t != t;
        };
    function M() {
        M.init.call(this);
    }
    (w.exports = M),
        (S.once = function (t, i) {
            return new Promise(function (n, r) {
                var a, s;
                function o(n) {
                    t.removeListener(i, c), r(n);
                }
                function c() {
                    "function" == typeof t.removeListener && t.removeListener("error", o), n([].slice.call(arguments));
                }
                R(t, i, c, { once: !0 }), "error" !== i && ((s = o), "function" == typeof (a = t).on && R(a, "error", s, { once: !0 }));
            });
        }),
        (M.EventEmitter = M),
        (M.prototype._events = void 0),
        (M.prototype._eventsCount = 0),
        (M.prototype._maxListeners = void 0);
    var A = 10;
    function L(t) {
        if ("function" != typeof t) throw TypeError('The "listener" argument must be of type Function. Received type ' + typeof t);
    }
    function _(t) {
        return void 0 === t._maxListeners ? M.defaultMaxListeners : t._maxListeners;
    }
    function x(t, i, n, r) {
        var a, s, o, c;
        if (
            (L(n),
            void 0 === (s = t._events) ? ((s = t._events = Object.create(null)), (t._eventsCount = 0)) : (void 0 !== s.newListener && (t.emit("newListener", i, n.listener ? n.listener : n), (s = t._events)), (o = s[i])),
            void 0 === o)
        )
            (o = s[i] = n), ++t._eventsCount;
        else if (("function" == typeof o ? (o = s[i] = r ? [n, o] : [o, n]) : r ? o.unshift(n) : o.push(n), (a = _(t)) > 0 && o.length > a && !o.warned)) {
            o.warned = !0;
            var l = Error("Possible EventEmitter memory leak detected. " + o.length + " " + String(i) + " listeners added. Use emitter.setMaxListeners() to increase limit");
            (l.name = "MaxListenersExceededWarning"), (l.emitter = t), (l.type = i), (l.count = o.length), (c = l), console && console.warn && console.warn(c);
        }
        return t;
    }
    function I() {
        if (!this.fired) return this.target.removeListener(this.type, this.wrapFn), (this.fired = !0), 0 === arguments.length ? this.listener.call(this.target) : this.listener.apply(this.target, arguments);
    }
    function P(t, i, n) {
        var r = { fired: !1, wrapFn: void 0, target: t, type: i, listener: n },
            a = I.bind(r);
        return (a.listener = n), (r.wrapFn = a), a;
    }
    function D(t, i, n) {
        var r = t._events;
        if (void 0 === r) return [];
        var a = r[i];
        return void 0 === a
            ? []
            : "function" == typeof a
            ? n
                ? [a.listener || a]
                : [a]
            : n
            ? (function (t) {
                  for (var i = Array(t.length), n = 0; n < i.length; ++n) i[n] = t[n].listener || t[n];
                  return i;
              })(a)
            : N(a, a.length);
    }
    function O(t) {
        var i = this._events;
        if (void 0 !== i) {
            var n = i[t];
            if ("function" == typeof n) return 1;
            if (void 0 !== n) return n.length;
        }
        return 0;
    }
    function N(t, i) {
        for (var n = Array(i), r = 0; r < i; ++r) n[r] = t[r];
        return n;
    }
    function R(t, i, n, r) {
        if ("function" == typeof t.on) r.once ? t.once(i, n) : t.on(i, n);
        else {
            if ("function" != typeof t.addEventListener) throw TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof t);
            t.addEventListener(i, function a(s) {
                r.once && t.removeEventListener(i, a), n(s);
            });
        }
    }
    Object.defineProperty(M, "defaultMaxListeners", {
        enumerable: !0,
        get: function () {
            return A;
        },
        set: function (t) {
            if ("number" != typeof t || t < 0 || E(t)) throw RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + t + ".");
            A = t;
        },
    }),
        (M.init = function () {
            (void 0 !== this._events && this._events !== Object.getPrototypeOf(this)._events) || ((this._events = Object.create(null)), (this._eventsCount = 0)), (this._maxListeners = this._maxListeners || void 0);
        }),
        (M.prototype.setMaxListeners = function (t) {
            if ("number" != typeof t || t < 0 || E(t)) throw RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + t + ".");
            return (this._maxListeners = t), this;
        }),
        (M.prototype.getMaxListeners = function () {
            return _(this);
        }),
        (M.prototype.emit = function (t) {
            for (var i = [], n = 1; n < arguments.length; n++) i.push(arguments[n]);
            var r = "error" === t,
                a = this._events;
            if (void 0 !== a) r = r && void 0 === a.error;
            else if (!r) return !1;
            if (r) {
                if ((i.length > 0 && (s = i[0]), s instanceof Error)) throw s;
                var s,
                    o = Error("Unhandled error." + (s ? " (" + s.message + ")" : ""));
                throw ((o.context = s), o);
            }
            var c = a[t];
            if (void 0 === c) return !1;
            if ("function" == typeof c) C(c, this, i);
            else {
                var l = c.length,
                    u = N(c, l);
                for (n = 0; n < l; ++n) C(u[n], this, i);
            }
            return !0;
        }),
        (M.prototype.addListener = function (t, i) {
            return x(this, t, i, !1);
        }),
        (M.prototype.on = M.prototype.addListener),
        (M.prototype.prependListener = function (t, i) {
            return x(this, t, i, !0);
        }),
        (M.prototype.once = function (t, i) {
            return L(i), this.on(t, P(this, t, i)), this;
        }),
        (M.prototype.prependOnceListener = function (t, i) {
            return L(i), this.prependListener(t, P(this, t, i)), this;
        }),
        (M.prototype.removeListener = function (t, i) {
            var n, r, a, s, o;
            if ((L(i), void 0 === (r = this._events) || void 0 === (n = r[t]))) return this;
            if (n === i || n.listener === i) 0 == --this._eventsCount ? (this._events = Object.create(null)) : (delete r[t], r.removeListener && this.emit("removeListener", t, n.listener || i));
            else if ("function" != typeof n) {
                for (a = -1, s = n.length - 1; s >= 0; s--)
                    if (n[s] === i || n[s].listener === i) {
                        (o = n[s].listener), (a = s);
                        break;
                    }
                if (a < 0) return this;
                0 === a
                    ? n.shift()
                    : (function (t, i) {
                          for (; i + 1 < t.length; i++) t[i] = t[i + 1];
                          t.pop();
                      })(n, a),
                    1 === n.length && (r[t] = n[0]),
                    void 0 !== r.removeListener && this.emit("removeListener", t, o || i);
            }
            return this;
        }),
        (M.prototype.off = M.prototype.removeListener),
        (M.prototype.removeAllListeners = function (t) {
            var i, n, r;
            if (void 0 === (n = this._events)) return this;
            if (void 0 === n.removeListener)
                return 0 === arguments.length ? ((this._events = Object.create(null)), (this._eventsCount = 0)) : void 0 !== n[t] && (0 == --this._eventsCount ? (this._events = Object.create(null)) : delete n[t]), this;
            if (0 === arguments.length) {
                var a,
                    s = Object.keys(n);
                for (r = 0; r < s.length; ++r) "removeListener" !== (a = s[r]) && this.removeAllListeners(a);
                return this.removeAllListeners("removeListener"), (this._events = Object.create(null)), (this._eventsCount = 0), this;
            }
            if ("function" == typeof (i = n[t])) this.removeListener(t, i);
            else if (void 0 !== i) for (r = i.length - 1; r >= 0; r--) this.removeListener(t, i[r]);
            return this;
        }),
        (M.prototype.listeners = function (t) {
            return D(this, t, !0);
        }),
        (M.prototype.rawListeners = function (t) {
            return D(this, t, !1);
        }),
        (M.listenerCount = function (t, i) {
            return "function" == typeof t.listenerCount ? t.listenerCount(i) : O.call(t, i);
        }),
        (M.prototype.listenerCount = O),
        (M.prototype.eventNames = function () {
            return this._eventsCount > 0 ? k(this._events) : [];
        });
    var F = Object.prototype.hasOwnProperty;
    function j(t, i, n) {
        for (n of t.keys()) if (V(n, i)) return n;
    }
    function V(t, i) {
        var n, r, a;
        if (t === i) return !0;
        if (t && i && (n = t.constructor) === i.constructor) {
            if (n === Date) return t.getTime() === i.getTime();
            if (n === RegExp) return t.toString() === i.toString();
            if (n === Array) {
                if ((r = t.length) === i.length) for (; r-- && V(t[r], i[r]); );
                return -1 === r;
            }
            if (n === Set) {
                if (t.size !== i.size) return !1;
                for (r of t) if (((a = r) && "object" == typeof a && !(a = j(i, a))) || !i.has(a)) return !1;
                return !0;
            }
            if (n === Map) {
                if (t.size !== i.size) return !1;
                for (r of t) if (((a = r[0]) && "object" == typeof a && !(a = j(i, a))) || !V(r[1], i.get(a))) return !1;
                return !0;
            }
            if (n === ArrayBuffer) (t = new Uint8Array(t)), (i = new Uint8Array(i));
            else if (n === DataView) {
                if ((r = t.byteLength) === i.byteLength) for (; r-- && t.getInt8(r) === i.getInt8(r); );
                return -1 === r;
            }
            if (ArrayBuffer.isView(t)) {
                if ((r = t.byteLength) === i.byteLength) for (; r-- && t[r] === i[r]; );
                return -1 === r;
            }
            if (!n || "object" == typeof t) {
                for (n in ((r = 0), t)) if ((F.call(t, n) && ++r && !F.call(i, n)) || !(n in i) || !V(t[n], i[n])) return !1;
                return Object.keys(i).length === r;
            }
        }
        return t != t && i != i;
    }
    let U = {
            "Amazon Silk": "amazon_silk",
            "Android Browser": "android",
            Bada: "bada",
            BlackBerry: "blackberry",
            Chrome: "chrome",
            Chromium: "chromium",
            Electron: "electron",
            Epiphany: "epiphany",
            Firefox: "firefox",
            Focus: "focus",
            Generic: "generic",
            "Google Search": "google_search",
            Googlebot: "googlebot",
            "Internet Explorer": "ie",
            "K-Meleon": "k_meleon",
            Maxthon: "maxthon",
            "Microsoft Edge": "edge",
            "MZ Browser": "mz",
            "NAVER Whale Browser": "naver",
            Opera: "opera",
            "Opera Coast": "opera_coast",
            PhantomJS: "phantomjs",
            Puffin: "puffin",
            QupZilla: "qupzilla",
            QQ: "qq",
            QQLite: "qqlite",
            Safari: "safari",
            Sailfish: "sailfish",
            "Samsung Internet for Android": "samsung_internet",
            SeaMonkey: "seamonkey",
            Sleipnir: "sleipnir",
            Swing: "swing",
            Tizen: "tizen",
            "UC Browser": "uc",
            Vivaldi: "vivaldi",
            "WebOS Browser": "webos",
            WeChat: "wechat",
            "Yandex Browser": "yandex",
            Roku: "roku",
        },
        B = {
            amazon_silk: "Amazon Silk",
            android: "Android Browser",
            bada: "Bada",
            blackberry: "BlackBerry",
            chrome: "Chrome",
            chromium: "Chromium",
            electron: "Electron",
            epiphany: "Epiphany",
            firefox: "Firefox",
            focus: "Focus",
            generic: "Generic",
            googlebot: "Googlebot",
            google_search: "Google Search",
            ie: "Internet Explorer",
            k_meleon: "K-Meleon",
            maxthon: "Maxthon",
            edge: "Microsoft Edge",
            mz: "MZ Browser",
            naver: "NAVER Whale Browser",
            opera: "Opera",
            opera_coast: "Opera Coast",
            phantomjs: "PhantomJS",
            puffin: "Puffin",
            qupzilla: "QupZilla",
            qq: "QQ Browser",
            qqlite: "QQ Browser Lite",
            safari: "Safari",
            sailfish: "Sailfish",
            samsung_internet: "Samsung Internet for Android",
            seamonkey: "SeaMonkey",
            sleipnir: "Sleipnir",
            swing: "Swing",
            tizen: "Tizen",
            uc: "UC Browser",
            vivaldi: "Vivaldi",
            webos: "WebOS Browser",
            wechat: "WeChat",
            yandex: "Yandex Browser",
        },
        q = { tablet: "tablet", mobile: "mobile", desktop: "desktop", tv: "tv" },
        Y = {
            WindowsPhone: "Windows Phone",
            Windows: "Windows",
            MacOS: "macOS",
            iOS: "iOS",
            Android: "Android",
            WebOS: "WebOS",
            BlackBerry: "BlackBerry",
            Bada: "Bada",
            Tizen: "Tizen",
            Linux: "Linux",
            ChromeOS: "Chrome OS",
            PlayStation4: "PlayStation 4",
            Roku: "Roku",
        },
        z = { EdgeHTML: "EdgeHTML", Blink: "Blink", Trident: "Trident", Presto: "Presto", Gecko: "Gecko", WebKit: "WebKit" };
    class G {
        static getFirstMatch(t, i) {
            let n = i.match(t);
            return (n && n.length > 0 && n[1]) || "";
        }
        static getSecondMatch(t, i) {
            let n = i.match(t);
            return (n && n.length > 1 && n[2]) || "";
        }
        static matchAndReturnConst(t, i, n) {
            if (t.test(i)) return n;
        }
        static getWindowsVersionName(t) {
            switch (t) {
                case "NT":
                    return "NT";
                case "XP":
                case "NT 5.1":
                    return "XP";
                case "NT 5.0":
                    return "2000";
                case "NT 5.2":
                    return "2003";
                case "NT 6.0":
                    return "Vista";
                case "NT 6.1":
                    return "7";
                case "NT 6.2":
                    return "8";
                case "NT 6.3":
                    return "8.1";
                case "NT 10.0":
                    return "10";
                default:
                    return;
            }
        }
        static getMacOSVersionName(t) {
            let i = t
                .split(".")
                .splice(0, 2)
                .map((t) => parseInt(t, 10) || 0);
            if ((i.push(0), 10 === i[0]))
                switch (i[1]) {
                    case 5:
                        return "Leopard";
                    case 6:
                        return "Snow Leopard";
                    case 7:
                        return "Lion";
                    case 8:
                        return "Mountain Lion";
                    case 9:
                        return "Mavericks";
                    case 10:
                        return "Yosemite";
                    case 11:
                        return "El Capitan";
                    case 12:
                        return "Sierra";
                    case 13:
                        return "High Sierra";
                    case 14:
                        return "Mojave";
                    case 15:
                        return "Catalina";
                    default:
                        return;
                }
        }
        static getAndroidVersionName(t) {
            let i = t
                .split(".")
                .splice(0, 2)
                .map((t) => parseInt(t, 10) || 0);
            if ((i.push(0), !(1 === i[0] && i[1] < 5)))
                return 1 === i[0] && i[1] < 6
                    ? "Cupcake"
                    : 1 === i[0] && i[1] >= 6
                    ? "Donut"
                    : 2 === i[0] && i[1] < 2
                    ? "Eclair"
                    : 2 === i[0] && 2 === i[1]
                    ? "Froyo"
                    : 2 === i[0] && i[1] > 2
                    ? "Gingerbread"
                    : 3 === i[0]
                    ? "Honeycomb"
                    : 4 === i[0] && i[1] < 1
                    ? "Ice Cream Sandwich"
                    : 4 === i[0] && i[1] < 4
                    ? "Jelly Bean"
                    : 4 === i[0] && i[1] >= 4
                    ? "KitKat"
                    : 5 === i[0]
                    ? "Lollipop"
                    : 6 === i[0]
                    ? "Marshmallow"
                    : 7 === i[0]
                    ? "Nougat"
                    : 8 === i[0]
                    ? "Oreo"
                    : 9 === i[0]
                    ? "Pie"
                    : void 0;
        }
        static getVersionPrecision(t) {
            return t.split(".").length;
        }
        static compareVersions(t, i, n = !1) {
            let r = G.getVersionPrecision(t),
                a = G.getVersionPrecision(i),
                s = Math.max(r, a),
                o = 0,
                c = G.map([t, i], (t) => {
                    let i = s - G.getVersionPrecision(t),
                        n = t + Array(i + 1).join(".0");
                    return G.map(n.split("."), (t) => Array(20 - t.length).join("0") + t).reverse();
                });
            for (n && (o = s - Math.min(r, a)), s -= 1; s >= o; ) {
                if (c[0][s] > c[1][s]) return 1;
                if (c[0][s] === c[1][s]) {
                    if (s === o) return 0;
                    s -= 1;
                } else if (c[0][s] < c[1][s]) return -1;
            }
        }
        static map(t, i) {
            let n = [],
                r;
            if (Array.prototype.map) return Array.prototype.map.call(t, i);
            for (r = 0; r < t.length; r += 1) n.push(i(t[r]));
            return n;
        }
        static find(t, i) {
            let n, r;
            if (Array.prototype.find) return Array.prototype.find.call(t, i);
            for (n = 0, r = t.length; n < r; n += 1) {
                let a = t[n];
                if (i(a, n)) return a;
            }
        }
        static assign(t, ...i) {
            let n = t,
                r,
                a;
            if (Object.assign) return Object.assign(t, ...i);
            for (r = 0, a = i.length; r < a; r += 1) {
                let s = i[r];
                "object" == typeof s &&
                    null !== s &&
                    Object.keys(s).forEach((t) => {
                        n[t] = s[t];
                    });
            }
            return t;
        }
        static getBrowserAlias(t) {
            return U[t];
        }
        static getBrowserTypeByAlias(t) {
            return B[t] || "";
        }
    }
    let W = /version\/(\d+(\.?_?\d+)+)/i,
        J = [
            {
                test: [/googlebot/i],
                describe(t) {
                    let i = { name: "Googlebot" },
                        n = G.getFirstMatch(/googlebot\/(\d+(\.\d+))/i, t) || G.getFirstMatch(W, t);
                    return n && (i.version = n), i;
                },
            },
            {
                test: [/opera/i],
                describe(t) {
                    let i = { name: "Opera" },
                        n = G.getFirstMatch(W, t) || G.getFirstMatch(/(?:opera)[\s/](\d+(\.?_?\d+)+)/i, t);
                    return n && (i.version = n), i;
                },
            },
            {
                test: [/opr\/|opios/i],
                describe(t) {
                    let i = { name: "Opera" },
                        n = G.getFirstMatch(/(?:opr|opios)[\s/](\S+)/i, t) || G.getFirstMatch(W, t);
                    return n && (i.version = n), i;
                },
            },
            {
                test: [/SamsungBrowser/i],
                describe(t) {
                    let i = { name: "Samsung Internet for Android" },
                        n = G.getFirstMatch(W, t) || G.getFirstMatch(/(?:SamsungBrowser)[\s/](\d+(\.?_?\d+)+)/i, t);
                    return n && (i.version = n), i;
                },
            },
            {
                test: [/Whale/i],
                describe(t) {
                    let i = { name: "NAVER Whale Browser" },
                        n = G.getFirstMatch(W, t) || G.getFirstMatch(/(?:whale)[\s/](\d+(?:\.\d+)+)/i, t);
                    return n && (i.version = n), i;
                },
            },
            {
                test: [/MZBrowser/i],
                describe(t) {
                    let i = { name: "MZ Browser" },
                        n = G.getFirstMatch(/(?:MZBrowser)[\s/](\d+(?:\.\d+)+)/i, t) || G.getFirstMatch(W, t);
                    return n && (i.version = n), i;
                },
            },
            {
                test: [/focus/i],
                describe(t) {
                    let i = { name: "Focus" },
                        n = G.getFirstMatch(/(?:focus)[\s/](\d+(?:\.\d+)+)/i, t) || G.getFirstMatch(W, t);
                    return n && (i.version = n), i;
                },
            },
            {
                test: [/swing/i],
                describe(t) {
                    let i = { name: "Swing" },
                        n = G.getFirstMatch(/(?:swing)[\s/](\d+(?:\.\d+)+)/i, t) || G.getFirstMatch(W, t);
                    return n && (i.version = n), i;
                },
            },
            {
                test: [/coast/i],
                describe(t) {
                    let i = { name: "Opera Coast" },
                        n = G.getFirstMatch(W, t) || G.getFirstMatch(/(?:coast)[\s/](\d+(\.?_?\d+)+)/i, t);
                    return n && (i.version = n), i;
                },
            },
            {
                test: [/opt\/\d+(?:.?_?\d+)+/i],
                describe(t) {
                    let i = { name: "Opera Touch" },
                        n = G.getFirstMatch(/(?:opt)[\s/](\d+(\.?_?\d+)+)/i, t) || G.getFirstMatch(W, t);
                    return n && (i.version = n), i;
                },
            },
            {
                test: [/yabrowser/i],
                describe(t) {
                    let i = { name: "Yandex Browser" },
                        n = G.getFirstMatch(/(?:yabrowser)[\s/](\d+(\.?_?\d+)+)/i, t) || G.getFirstMatch(W, t);
                    return n && (i.version = n), i;
                },
            },
            {
                test: [/ucbrowser/i],
                describe(t) {
                    let i = { name: "UC Browser" },
                        n = G.getFirstMatch(W, t) || G.getFirstMatch(/(?:ucbrowser)[\s/](\d+(\.?_?\d+)+)/i, t);
                    return n && (i.version = n), i;
                },
            },
            {
                test: [/Maxthon|mxios/i],
                describe(t) {
                    let i = { name: "Maxthon" },
                        n = G.getFirstMatch(W, t) || G.getFirstMatch(/(?:Maxthon|mxios)[\s/](\d+(\.?_?\d+)+)/i, t);
                    return n && (i.version = n), i;
                },
            },
            {
                test: [/epiphany/i],
                describe(t) {
                    let i = { name: "Epiphany" },
                        n = G.getFirstMatch(W, t) || G.getFirstMatch(/(?:epiphany)[\s/](\d+(\.?_?\d+)+)/i, t);
                    return n && (i.version = n), i;
                },
            },
            {
                test: [/puffin/i],
                describe(t) {
                    let i = { name: "Puffin" },
                        n = G.getFirstMatch(W, t) || G.getFirstMatch(/(?:puffin)[\s/](\d+(\.?_?\d+)+)/i, t);
                    return n && (i.version = n), i;
                },
            },
            {
                test: [/sleipnir/i],
                describe(t) {
                    let i = { name: "Sleipnir" },
                        n = G.getFirstMatch(W, t) || G.getFirstMatch(/(?:sleipnir)[\s/](\d+(\.?_?\d+)+)/i, t);
                    return n && (i.version = n), i;
                },
            },
            {
                test: [/k-meleon/i],
                describe(t) {
                    let i = { name: "K-Meleon" },
                        n = G.getFirstMatch(W, t) || G.getFirstMatch(/(?:k-meleon)[\s/](\d+(\.?_?\d+)+)/i, t);
                    return n && (i.version = n), i;
                },
            },
            {
                test: [/micromessenger/i],
                describe(t) {
                    let i = { name: "WeChat" },
                        n = G.getFirstMatch(/(?:micromessenger)[\s/](\d+(\.?_?\d+)+)/i, t) || G.getFirstMatch(W, t);
                    return n && (i.version = n), i;
                },
            },
            {
                test: [/qqbrowser/i],
                describe(t) {
                    let i = { name: /qqbrowserlite/i.test(t) ? "QQ Browser Lite" : "QQ Browser" },
                        n = G.getFirstMatch(/(?:qqbrowserlite|qqbrowser)[/](\d+(\.?_?\d+)+)/i, t) || G.getFirstMatch(W, t);
                    return n && (i.version = n), i;
                },
            },
            {
                test: [/msie|trident/i],
                describe(t) {
                    let i = { name: "Internet Explorer" },
                        n = G.getFirstMatch(/(?:msie |rv:)(\d+(\.?_?\d+)+)/i, t);
                    return n && (i.version = n), i;
                },
            },
            {
                test: [/\sedg\//i],
                describe(t) {
                    let i = { name: "Microsoft Edge" },
                        n = G.getFirstMatch(/\sedg\/(\d+(\.?_?\d+)+)/i, t);
                    return n && (i.version = n), i;
                },
            },
            {
                test: [/edg([ea]|ios)/i],
                describe(t) {
                    let i = { name: "Microsoft Edge" },
                        n = G.getSecondMatch(/edg([ea]|ios)\/(\d+(\.?_?\d+)+)/i, t);
                    return n && (i.version = n), i;
                },
            },
            {
                test: [/vivaldi/i],
                describe(t) {
                    let i = { name: "Vivaldi" },
                        n = G.getFirstMatch(/vivaldi\/(\d+(\.?_?\d+)+)/i, t);
                    return n && (i.version = n), i;
                },
            },
            {
                test: [/seamonkey/i],
                describe(t) {
                    let i = { name: "SeaMonkey" },
                        n = G.getFirstMatch(/seamonkey\/(\d+(\.?_?\d+)+)/i, t);
                    return n && (i.version = n), i;
                },
            },
            {
                test: [/sailfish/i],
                describe(t) {
                    let i = { name: "Sailfish" },
                        n = G.getFirstMatch(/sailfish\s?browser\/(\d+(\.\d+)?)/i, t);
                    return n && (i.version = n), i;
                },
            },
            {
                test: [/silk/i],
                describe(t) {
                    let i = { name: "Amazon Silk" },
                        n = G.getFirstMatch(/silk\/(\d+(\.?_?\d+)+)/i, t);
                    return n && (i.version = n), i;
                },
            },
            {
                test: [/phantom/i],
                describe(t) {
                    let i = { name: "PhantomJS" },
                        n = G.getFirstMatch(/phantomjs\/(\d+(\.?_?\d+)+)/i, t);
                    return n && (i.version = n), i;
                },
            },
            {
                test: [/slimerjs/i],
                describe(t) {
                    let i = { name: "SlimerJS" },
                        n = G.getFirstMatch(/slimerjs\/(\d+(\.?_?\d+)+)/i, t);
                    return n && (i.version = n), i;
                },
            },
            {
                test: [/blackberry|\bbb\d+/i, /rim\stablet/i],
                describe(t) {
                    let i = { name: "BlackBerry" },
                        n = G.getFirstMatch(W, t) || G.getFirstMatch(/blackberry[\d]+\/(\d+(\.?_?\d+)+)/i, t);
                    return n && (i.version = n), i;
                },
            },
            {
                test: [/(web|hpw)[o0]s/i],
                describe(t) {
                    let i = { name: "WebOS Browser" },
                        n = G.getFirstMatch(W, t) || G.getFirstMatch(/w(?:eb)?[o0]sbrowser\/(\d+(\.?_?\d+)+)/i, t);
                    return n && (i.version = n), i;
                },
            },
            {
                test: [/bada/i],
                describe(t) {
                    let i = { name: "Bada" },
                        n = G.getFirstMatch(/dolfin\/(\d+(\.?_?\d+)+)/i, t);
                    return n && (i.version = n), i;
                },
            },
            {
                test: [/tizen/i],
                describe(t) {
                    let i = { name: "Tizen" },
                        n = G.getFirstMatch(/(?:tizen\s?)?browser\/(\d+(\.?_?\d+)+)/i, t) || G.getFirstMatch(W, t);
                    return n && (i.version = n), i;
                },
            },
            {
                test: [/qupzilla/i],
                describe(t) {
                    let i = { name: "QupZilla" },
                        n = G.getFirstMatch(/(?:qupzilla)[\s/](\d+(\.?_?\d+)+)/i, t) || G.getFirstMatch(W, t);
                    return n && (i.version = n), i;
                },
            },
            {
                test: [/firefox|iceweasel|fxios/i],
                describe(t) {
                    let i = { name: "Firefox" },
                        n = G.getFirstMatch(/(?:firefox|iceweasel|fxios)[\s/](\d+(\.?_?\d+)+)/i, t);
                    return n && (i.version = n), i;
                },
            },
            {
                test: [/electron/i],
                describe(t) {
                    let i = { name: "Electron" },
                        n = G.getFirstMatch(/(?:electron)\/(\d+(\.?_?\d+)+)/i, t);
                    return n && (i.version = n), i;
                },
            },
            {
                test: [/MiuiBrowser/i],
                describe(t) {
                    let i = { name: "Miui" },
                        n = G.getFirstMatch(/(?:MiuiBrowser)[\s/](\d+(\.?_?\d+)+)/i, t);
                    return n && (i.version = n), i;
                },
            },
            {
                test: [/chromium/i],
                describe(t) {
                    let i = { name: "Chromium" },
                        n = G.getFirstMatch(/(?:chromium)[\s/](\d+(\.?_?\d+)+)/i, t) || G.getFirstMatch(W, t);
                    return n && (i.version = n), i;
                },
            },
            {
                test: [/chrome|crios|crmo/i],
                describe(t) {
                    let i = { name: "Chrome" },
                        n = G.getFirstMatch(/(?:chrome|crios|crmo)\/(\d+(\.?_?\d+)+)/i, t);
                    return n && (i.version = n), i;
                },
            },
            {
                test: [/GSA/i],
                describe(t) {
                    let i = { name: "Google Search" },
                        n = G.getFirstMatch(/(?:GSA)\/(\d+(\.?_?\d+)+)/i, t);
                    return n && (i.version = n), i;
                },
            },
            {
                test(t) {
                    let i = !t.test(/like android/i),
                        n = t.test(/android/i);
                    return i && n;
                },
                describe(t) {
                    let i = { name: "Android Browser" },
                        n = G.getFirstMatch(W, t);
                    return n && (i.version = n), i;
                },
            },
            {
                test: [/playstation 4/i],
                describe(t) {
                    let i = { name: "PlayStation 4" },
                        n = G.getFirstMatch(W, t);
                    return n && (i.version = n), i;
                },
            },
            {
                test: [/safari|applewebkit/i],
                describe(t) {
                    let i = { name: "Safari" },
                        n = G.getFirstMatch(W, t);
                    return n && (i.version = n), i;
                },
            },
            {
                test: [/.*/i],
                describe(t) {
                    let i = -1 !== t.search("\\(") ? /^(.*)\/(.*)[ \t]\((.*)/ : /^(.*)\/(.*) /;
                    return { name: G.getFirstMatch(i, t), version: G.getSecondMatch(i, t) };
                },
            },
        ];
    var H = [
            {
                test: [/Roku\/DVP/],
                describe(t) {
                    let i = G.getFirstMatch(/Roku\/DVP-(\d+\.\d+)/i, t);
                    return { name: Y.Roku, version: i };
                },
            },
            {
                test: [/windows phone/i],
                describe(t) {
                    let i = G.getFirstMatch(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i, t);
                    return { name: Y.WindowsPhone, version: i };
                },
            },
            {
                test: [/windows /i],
                describe(t) {
                    let i = G.getFirstMatch(/Windows ((NT|XP)( \d\d?.\d)?)/i, t),
                        n = G.getWindowsVersionName(i);
                    return { name: Y.Windows, version: i, versionName: n };
                },
            },
            {
                test: [/Macintosh(.*?) FxiOS(.*?)\//],
                describe(t) {
                    let i = { name: Y.iOS },
                        n = G.getSecondMatch(/(Version\/)(\d[\d.]+)/, t);
                    return n && (i.version = n), i;
                },
            },
            {
                test: [/macintosh/i],
                describe(t) {
                    let i = G.getFirstMatch(/mac os x (\d+(\.?_?\d+)+)/i, t).replace(/[_\s]/g, "."),
                        n = G.getMacOSVersionName(i),
                        r = { name: Y.MacOS, version: i };
                    return n && (r.versionName = n), r;
                },
            },
            {
                test: [/(ipod|iphone|ipad)/i],
                describe(t) {
                    let i = G.getFirstMatch(/os (\d+([_\s]\d+)*) like mac os x/i, t).replace(/[_\s]/g, ".");
                    return { name: Y.iOS, version: i };
                },
            },
            {
                test(t) {
                    let i = !t.test(/like android/i),
                        n = t.test(/android/i);
                    return i && n;
                },
                describe(t) {
                    let i = G.getFirstMatch(/android[\s/-](\d+(\.\d+)*)/i, t),
                        n = G.getAndroidVersionName(i),
                        r = { name: Y.Android, version: i };
                    return n && (r.versionName = n), r;
                },
            },
            {
                test: [/(web|hpw)[o0]s/i],
                describe(t) {
                    let i = G.getFirstMatch(/(?:web|hpw)[o0]s\/(\d+(\.\d+)*)/i, t),
                        n = { name: Y.WebOS };
                    return i && i.length && (n.version = i), n;
                },
            },
            {
                test: [/blackberry|\bbb\d+/i, /rim\stablet/i],
                describe(t) {
                    let i = G.getFirstMatch(/rim\stablet\sos\s(\d+(\.\d+)*)/i, t) || G.getFirstMatch(/blackberry\d+\/(\d+([_\s]\d+)*)/i, t) || G.getFirstMatch(/\bbb(\d+)/i, t);
                    return { name: Y.BlackBerry, version: i };
                },
            },
            {
                test: [/bada/i],
                describe(t) {
                    let i = G.getFirstMatch(/bada\/(\d+(\.\d+)*)/i, t);
                    return { name: Y.Bada, version: i };
                },
            },
            {
                test: [/tizen/i],
                describe(t) {
                    let i = G.getFirstMatch(/tizen[/\s](\d+(\.\d+)*)/i, t);
                    return { name: Y.Tizen, version: i };
                },
            },
            { test: [/linux/i], describe: () => ({ name: Y.Linux }) },
            { test: [/CrOS/], describe: () => ({ name: Y.ChromeOS }) },
            {
                test: [/PlayStation 4/],
                describe(t) {
                    let i = G.getFirstMatch(/PlayStation 4[/\s](\d+(\.\d+)*)/i, t);
                    return { name: Y.PlayStation4, version: i };
                },
            },
        ],
        K = [
            { test: [/googlebot/i], describe: () => ({ type: "bot", vendor: "Google" }) },
            {
                test: [/huawei/i],
                describe(t) {
                    let i = G.getFirstMatch(/(can-l01)/i, t) && "Nova",
                        n = { type: q.mobile, vendor: "Huawei" };
                    return i && (n.model = i), n;
                },
            },
            { test: [/nexus\s*(?:7|8|9|10).*/i], describe: () => ({ type: q.tablet, vendor: "Nexus" }) },
            { test: [/ipad/i], describe: () => ({ type: q.tablet, vendor: "Apple", model: "iPad" }) },
            { test: [/Macintosh(.*?) FxiOS(.*?)\//], describe: () => ({ type: q.tablet, vendor: "Apple", model: "iPad" }) },
            { test: [/kftt build/i], describe: () => ({ type: q.tablet, vendor: "Amazon", model: "Kindle Fire HD 7" }) },
            { test: [/silk/i], describe: () => ({ type: q.tablet, vendor: "Amazon" }) },
            { test: [/tablet(?! pc)/i], describe: () => ({ type: q.tablet }) },
            {
                test(t) {
                    let i = t.test(/ipod|iphone/i),
                        n = t.test(/like (ipod|iphone)/i);
                    return i && !n;
                },
                describe(t) {
                    let i = G.getFirstMatch(/(ipod|iphone)/i, t);
                    return { type: q.mobile, vendor: "Apple", model: i };
                },
            },
            { test: [/nexus\s*[0-6].*/i, /galaxy nexus/i], describe: () => ({ type: q.mobile, vendor: "Nexus" }) },
            { test: [/[^-]mobi/i], describe: () => ({ type: q.mobile }) },
            { test: (t) => "blackberry" === t.getBrowserName(!0), describe: () => ({ type: q.mobile, vendor: "BlackBerry" }) },
            { test: (t) => "bada" === t.getBrowserName(!0), describe: () => ({ type: q.mobile }) },
            { test: (t) => "windows phone" === t.getBrowserName(), describe: () => ({ type: q.mobile, vendor: "Microsoft" }) },
            {
                test(t) {
                    let i = Number(String(t.getOSVersion()).split(".")[0]);
                    return "android" === t.getOSName(!0) && i >= 3;
                },
                describe: () => ({ type: q.tablet }),
            },
            { test: (t) => "android" === t.getOSName(!0), describe: () => ({ type: q.mobile }) },
            { test: (t) => "macos" === t.getOSName(!0), describe: () => ({ type: q.desktop, vendor: "Apple" }) },
            { test: (t) => "windows" === t.getOSName(!0), describe: () => ({ type: q.desktop }) },
            { test: (t) => "linux" === t.getOSName(!0), describe: () => ({ type: q.desktop }) },
            { test: (t) => "playstation 4" === t.getOSName(!0), describe: () => ({ type: q.tv }) },
            { test: (t) => "roku" === t.getOSName(!0), describe: () => ({ type: q.tv }) },
        ],
        Q = [
            {
                test: (t) => "microsoft edge" === t.getBrowserName(!0),
                describe(t) {
                    if (/\sedg\//i.test(t)) return { name: z.Blink };
                    let i = G.getFirstMatch(/edge\/(\d+(\.?_?\d+)+)/i, t);
                    return { name: z.EdgeHTML, version: i };
                },
            },
            {
                test: [/trident/i],
                describe(t) {
                    let i = { name: z.Trident },
                        n = G.getFirstMatch(/trident\/(\d+(\.?_?\d+)+)/i, t);
                    return n && (i.version = n), i;
                },
            },
            {
                test: (t) => t.test(/presto/i),
                describe(t) {
                    let i = { name: z.Presto },
                        n = G.getFirstMatch(/presto\/(\d+(\.?_?\d+)+)/i, t);
                    return n && (i.version = n), i;
                },
            },
            {
                test(t) {
                    let i = t.test(/gecko/i),
                        n = t.test(/like gecko/i);
                    return i && !n;
                },
                describe(t) {
                    let i = { name: z.Gecko },
                        n = G.getFirstMatch(/gecko\/(\d+(\.?_?\d+)+)/i, t);
                    return n && (i.version = n), i;
                },
            },
            { test: [/(apple)?webkit\/537\.36/i], describe: () => ({ name: z.Blink }) },
            {
                test: [/(apple)?webkit/i],
                describe(t) {
                    let i = { name: z.WebKit },
                        n = G.getFirstMatch(/webkit\/(\d+(\.?_?\d+)+)/i, t);
                    return n && (i.version = n), i;
                },
            },
        ];
    class X {
        constructor(t, i = !1) {
            if (null == t || "" === t) throw Error("UserAgent parameter can't be empty");
            (this._ua = t), (this.parsedResult = {}), !0 !== i && this.parse();
        }
        getUA() {
            return this._ua;
        }
        test(t) {
            return t.test(this._ua);
        }
        parseBrowser() {
            this.parsedResult.browser = {};
            let t = G.find(J, (t) => {
                if ("function" == typeof t.test) return t.test(this);
                if (t.test instanceof Array) return t.test.some((t) => this.test(t));
                throw Error("Browser's test function is not valid");
            });
            return t && (this.parsedResult.browser = t.describe(this.getUA())), this.parsedResult.browser;
        }
        getBrowser() {
            return this.parsedResult.browser ? this.parsedResult.browser : this.parseBrowser();
        }
        getBrowserName(t) {
            return t ? String(this.getBrowser().name).toLowerCase() || "" : this.getBrowser().name || "";
        }
        getBrowserVersion() {
            return this.getBrowser().version;
        }
        getOS() {
            return this.parsedResult.os ? this.parsedResult.os : this.parseOS();
        }
        parseOS() {
            this.parsedResult.os = {};
            let t = G.find(H, (t) => {
                if ("function" == typeof t.test) return t.test(this);
                if (t.test instanceof Array) return t.test.some((t) => this.test(t));
                throw Error("Browser's test function is not valid");
            });
            return t && (this.parsedResult.os = t.describe(this.getUA())), this.parsedResult.os;
        }
        getOSName(t) {
            let { name: i } = this.getOS();
            return t ? String(i).toLowerCase() || "" : i || "";
        }
        getOSVersion() {
            return this.getOS().version;
        }
        getPlatform() {
            return this.parsedResult.platform ? this.parsedResult.platform : this.parsePlatform();
        }
        getPlatformType(t = !1) {
            let { type: i } = this.getPlatform();
            return t ? String(i).toLowerCase() || "" : i || "";
        }
        parsePlatform() {
            this.parsedResult.platform = {};
            let t = G.find(K, (t) => {
                if ("function" == typeof t.test) return t.test(this);
                if (t.test instanceof Array) return t.test.some((t) => this.test(t));
                throw Error("Browser's test function is not valid");
            });
            return t && (this.parsedResult.platform = t.describe(this.getUA())), this.parsedResult.platform;
        }
        getEngine() {
            return this.parsedResult.engine ? this.parsedResult.engine : this.parseEngine();
        }
        getEngineName(t) {
            return t ? String(this.getEngine().name).toLowerCase() || "" : this.getEngine().name || "";
        }
        parseEngine() {
            this.parsedResult.engine = {};
            let t = G.find(Q, (t) => {
                if ("function" == typeof t.test) return t.test(this);
                if (t.test instanceof Array) return t.test.some((t) => this.test(t));
                throw Error("Browser's test function is not valid");
            });
            return t && (this.parsedResult.engine = t.describe(this.getUA())), this.parsedResult.engine;
        }
        parse() {
            return this.parseBrowser(), this.parseOS(), this.parsePlatform(), this.parseEngine(), this;
        }
        getResult() {
            return G.assign({}, this.parsedResult);
        }
        satisfies(t) {
            let i = {},
                n = 0,
                r = {},
                a = 0;
            if (
                (Object.keys(t).forEach((s) => {
                    let o = t[s];
                    "string" == typeof o ? ((r[s] = o), (a += 1)) : "object" == typeof o && ((i[s] = o), (n += 1));
                }),
                n > 0)
            ) {
                let s = Object.keys(i),
                    o = G.find(s, (t) => this.isOS(t));
                if (o) {
                    let c = this.satisfies(i[o]);
                    if (void 0 !== c) return c;
                }
                let l = G.find(s, (t) => this.isPlatform(t));
                if (l) {
                    let u = this.satisfies(i[l]);
                    if (void 0 !== u) return u;
                }
            }
            if (a > 0) {
                let d = Object.keys(r),
                    h = G.find(d, (t) => this.isBrowser(t, !0));
                if (void 0 !== h) return this.compareVersion(r[h]);
            }
        }
        isBrowser(t, i = !1) {
            let n = this.getBrowserName().toLowerCase(),
                r = t.toLowerCase(),
                a = G.getBrowserTypeByAlias(r);
            return i && a && (r = a.toLowerCase()), r === n;
        }
        compareVersion(t) {
            let i = [0],
                n = t,
                r = !1,
                a = this.getBrowserVersion();
            if ("string" == typeof a)
                return (
                    ">" === t[0] || "<" === t[0]
                        ? ((n = t.substr(1)), "=" === t[1] ? ((r = !0), (n = t.substr(2))) : (i = []), ">" === t[0] ? i.push(1) : i.push(-1))
                        : "=" === t[0]
                        ? (n = t.substr(1))
                        : "~" === t[0] && ((r = !0), (n = t.substr(1))),
                    i.indexOf(G.compareVersions(a, n, r)) > -1
                );
        }
        isOS(t) {
            return this.getOSName(!0) === String(t).toLowerCase();
        }
        isPlatform(t) {
            return this.getPlatformType(!0) === String(t).toLowerCase();
        }
        isEngine(t) {
            return this.getEngineName(!0) === String(t).toLowerCase();
        }
        is(t, i = !1) {
            return this.isBrowser(t, i) || this.isOS(t) || this.isPlatform(t);
        }
        some(t = []) {
            return t.some((t) => this.is(t));
        }
    }
    /*!
     * Bowser - a browser detector
     * https://github.com/lancedikson/bowser
     * MIT License | (c) Dustin Diaz 2012-2015
     * MIT License | (c) Denis Demchenko 2015-2019
     */ class Z {
        static getParser(t, i = !1) {
            if ("string" != typeof t) throw Error("UserAgent should be a string");
            return new X(t, i);
        }
        static parse(t) {
            return new X(t).getResult();
        }
        static get BROWSER_MAP() {
            return B;
        }
        static get ENGINE_MAP() {
            return z;
        }
        static get OS_MAP() {
            return Y;
        }
        static get PLATFORMS_MAP() {
            return q;
        }
    }
    function ee() {
        return Date.now() + Math.random().toString();
    }
    function et() {
        throw Error("Method must be implemented in subclass");
    }
    function ei(t, i) {
        return null != i && i.proxyUrl ? i.proxyUrl + ("/" === i.proxyUrl.slice(-1) ? "" : "/") + t.substring(8) : t;
    }
    function en(t) {
        return null != t && t.callObjectBundleUrlOverride ? t.callObjectBundleUrlOverride : ei("https://c.daily.co/call-machine/versioned/".concat("0.66.0", "/static/call-machine-object-bundle.js"), t);
    }
    function er(t) {
        try {
            new URL(t);
        } catch {
            return !1;
        }
        return !0;
    }
    let ea = Object.prototype.toString;
    function es(t) {
        switch (ea.call(t)) {
            case "[object Error]":
            case "[object Exception]":
            case "[object DOMException]":
                return !0;
            default:
                return eg(t, Error);
        }
    }
    function eo(t, i) {
        return ea.call(t) === `[object ${i}]`;
    }
    function ec(t) {
        return eo(t, "ErrorEvent");
    }
    function el(t) {
        return eo(t, "DOMError");
    }
    function eu(t) {
        return eo(t, "String");
    }
    function ed(t) {
        return null === t || ("object" != typeof t && "function" != typeof t);
    }
    function eh(t) {
        return eo(t, "Object");
    }
    function ep(t) {
        return "u" > typeof Event && eg(t, Event);
    }
    function ef(t) {
        return !(!t || !t.then || "function" != typeof t.then);
    }
    function eg(t, i) {
        try {
            return t instanceof i;
        } catch {
            return !1;
        }
    }
    function ev(t, i = 0) {
        return "string" != typeof t || 0 === i || t.length <= i ? t : `${t.slice(0, i)}...`;
    }
    function em(t, i) {
        if (!Array.isArray(t)) return "";
        let n = [];
        for (let r = 0; r < t.length; r++) {
            let a = t[r];
            try {
                n.push(String(a));
            } catch {
                n.push("[value cannot be serialized]");
            }
        }
        return n.join(i);
    }
    function ey(t, i = [], n = !1) {
        return i.some((i) =>
            (function (t, i, n = !1) {
                return !!eu(t) && (eo(i, "RegExp") ? i.test(t) : !!eu(i) && (n ? t === i : t.includes(i)));
            })(t, i, n)
        );
    }
    function e8(t, i) {
        (t.mechanism = t.mechanism || { type: "generic", handled: !0 }), (t.mechanism = { ...t.mechanism, is_exception_group: !0, exception_id: i });
    }
    function eb(t, i, n, r) {
        (t.mechanism = t.mechanism || { type: "generic", handled: !0 }), (t.mechanism = { ...t.mechanism, type: "chained", source: i, exception_id: n, parent_id: r });
    }
    function e$(t) {
        return t && t.Math == Math ? t : void 0;
    }
    let ek =
        ("object" == typeof globalThis && e$(globalThis)) ||
        ("object" == typeof window && e$(window)) ||
        ("object" == typeof self && e$(self)) ||
        ("object" == typeof global && e$(global)) ||
        (function () {
            return this;
        })() ||
        {};
    function eS() {
        return ek;
    }
    function ew(t, i, n) {
        let r = n || ek,
            a = (r.__SENTRY__ = r.__SENTRY__ || {});
        return a[t] || (a[t] = i());
    }
    let eT = ek;
    function eC(t, i = {}) {
        try {
            let n = t,
                r = [],
                a = 0,
                s = 0,
                o,
                c = Array.isArray(i) ? i : i.keyAttrs,
                l = (!Array.isArray(i) && i.maxStringLength) || 80;
            for (; n && a++ < 5 && ((o = eE(n, c)), !("html" === o || (a > 1 && s + 3 * r.length + o.length >= l))); ) r.push(o), (s += o.length), (n = n.parentNode);
            return r.reverse().join(" > ");
        } catch {
            return "<unknown>";
        }
    }
    function eE(t, i) {
        let n = t,
            r = [],
            a,
            s,
            o,
            c,
            l;
        if (!n || !n.tagName) return "";
        r.push(n.tagName.toLowerCase());
        let u = i && i.length ? i.filter((t) => n.getAttribute(t)).map((t) => [t, n.getAttribute(t)]) : null;
        if (u && u.length)
            u.forEach((t) => {
                r.push(`[${t[0]}="${t[1]}"]`);
            });
        else if ((n.id && r.push(`#${n.id}`), (a = n.className) && eu(a))) for (s = a.split(/\s+/), l = 0; l < s.length; l++) r.push(`.${s[l]}`);
        let d = ["aria-label", "type", "name", "title", "alt"];
        for (l = 0; l < d.length; l++) (o = d[l]), (c = n.getAttribute(o)) && r.push(`[${o}="${c}"]`);
        return r.join("");
    }
    let eM = ["debug", "info", "warn", "error", "log", "assert", "trace"];
    function eA(t) {
        if (!("console" in ek)) return t();
        let i = ek.console,
            n = {};
        eM.forEach((t) => {
            let r = i[t] && i[t].__sentry_original__;
            t in i && r && ((n[t] = i[t]), (i[t] = r));
        });
        try {
            return t();
        } finally {
            Object.keys(n).forEach((t) => {
                i[t] = n[t];
            });
        }
    }
    function eL() {
        let t = !1,
            i = {
                enable() {
                    t = !0;
                },
                disable() {
                    t = !1;
                },
            };
        return (
            typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__
                ? eM.forEach((n) => {
                      i[n] = (...i) => {
                          t &&
                              eA(() => {
                                  ek.console[n](`Sentry Logger [${n}]:`, ...i);
                              });
                      };
                  })
                : eM.forEach((t) => {
                      i[t] = () => {};
                  }),
            i
        );
    }
    let e_;
    e_ = typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__ ? ew("logger", eL) : eL();
    let ex = /^(?:(\w+):)\/\/(?:(\w+)(?::(\w+)?)?@)([\w.-]+)(?::(\d+))?\/(.+)/;
    function eI(t, i = !1) {
        let { host: n, path: r, pass: a, port: s, projectId: o, protocol: c, publicKey: l } = t;
        return `${c}://${l}${i && a ? `:${a}` : ""}@${n}${s ? `:${s}` : ""}/${r && `${r}/`}${o}`;
    }
    function eP(t) {
        return { protocol: t.protocol, publicKey: t.publicKey || "", pass: t.pass || "", host: t.host, port: t.port || "", path: t.path || "", projectId: t.projectId };
    }
    class eD extends Error {
        constructor(t, i = "warn") {
            super(t), (this.message = t), (this.name = new.target.prototype.constructor.name), Object.setPrototypeOf(this, new.target.prototype), (this.logLevel = i);
        }
    }
    function eO(t, i, n) {
        if (!(i in t)) return;
        let r = t[i],
            a = n(r);
        if ("function" == typeof a)
            try {
                eR(a, r);
            } catch {}
        t[i] = a;
    }
    function eN(t, i, n) {
        Object.defineProperty(t, i, { value: n, writable: !0, configurable: !0 });
    }
    function eR(t, i) {
        let n = i.prototype || {};
        (t.prototype = i.prototype = n), eN(t, "__sentry_original__", i);
    }
    function eF(t) {
        return t.__sentry_original__;
    }
    function ej(t) {
        if (es(t)) return { message: t.message, name: t.name, stack: t.stack, ...eU(t) };
        if (ep(t)) {
            let i = { type: t.type, target: eV(t.target), currentTarget: eV(t.currentTarget), ...eU(t) };
            return "u" > typeof CustomEvent && eg(t, CustomEvent) && (i.detail = t.detail), i;
        }
        return t;
    }
    function eV(t) {
        try {
            return "u" > typeof Element && eg(t, Element) ? eC(t) : Object.prototype.toString.call(t);
        } catch {
            return "<unknown>";
        }
    }
    function eU(t) {
        if ("object" == typeof t && null !== t) {
            let i = {};
            for (let n in t) Object.prototype.hasOwnProperty.call(t, n) && (i[n] = t[n]);
            return i;
        }
        return {};
    }
    function eB(t) {
        return (function t(i, n) {
            if (eh(i)) {
                let r = n.get(i);
                if (void 0 !== r) return r;
                let a = {};
                for (let s of (n.set(i, a), Object.keys(i))) void 0 !== i[s] && (a[s] = t(i[s], n));
                return a;
            }
            if (Array.isArray(i)) {
                let o = n.get(i);
                if (void 0 !== o) return o;
                let c = [];
                return (
                    n.set(i, c),
                    i.forEach((i) => {
                        c.push(t(i, n));
                    }),
                    c
                );
            }
            return i;
        })(t, new Map());
    }
    let e0 = "<anonymous>";
    function e9(t) {
        try {
            return (t && "function" == typeof t && t.name) || e0;
        } catch {
            return e0;
        }
    }
    let eq = ek;
    function eY(t) {
        return t && /^function fetch\(\)\s+\{\s+\[native code\]\s+\}$/.test(t.toString());
    }
    let e3 = ek,
        e2 = ek,
        ez = "__sentry_xhr_v2__",
        eG = {},
        e1 = {};
    function eW(t, i) {
        (eG[t] = eG[t] || []),
            eG[t].push(i),
            (function t(i) {
                if (!e1[i])
                    switch (((e1[i] = !0), i)) {
                        case "console":
                            "console" in e2 &&
                                eM.forEach(function (t) {
                                    t in e2.console &&
                                        eO(e2.console, t, function (i) {
                                            return function (...n) {
                                                eJ("console", { args: n, level: t }), i && i.apply(e2.console, n);
                                            };
                                        });
                                });
                            break;
                        case "dom":
                            !(function () {
                                if (!("document" in e2)) return;
                                let t = eJ.bind(null, "dom"),
                                    i = eQ(t, !0);
                                e2.document.addEventListener("click", i, !1),
                                    e2.document.addEventListener("keypress", i, !1),
                                    ["EventTarget", "Node"].forEach((i) => {
                                        let n = e2[i] && e2[i].prototype;
                                        n &&
                                            n.hasOwnProperty &&
                                            n.hasOwnProperty("addEventListener") &&
                                            (eO(n, "addEventListener", function (i) {
                                                return function (n, r, a) {
                                                    if ("click" === n || "keypress" == n)
                                                        try {
                                                            let s = this,
                                                                o = (s.__sentry_instrumentation_handlers__ = s.__sentry_instrumentation_handlers__ || {}),
                                                                c = (o[n] = o[n] || { refCount: 0 });
                                                            if (!c.handler) {
                                                                let l = eQ(t);
                                                                (c.handler = l), i.call(this, n, l, a);
                                                            }
                                                            c.refCount++;
                                                        } catch {}
                                                    return i.call(this, n, r, a);
                                                };
                                            }),
                                            eO(n, "removeEventListener", function (t) {
                                                return function (i, n, r) {
                                                    if ("click" === i || "keypress" == i)
                                                        try {
                                                            let a = this.__sentry_instrumentation_handlers__ || {},
                                                                s = a[i];
                                                            s &&
                                                                (s.refCount--,
                                                                s.refCount <= 0 && (t.call(this, i, s.handler, r), (s.handler = void 0), delete a[i]),
                                                                0 === Object.keys(a).length && delete this.__sentry_instrumentation_handlers__);
                                                        } catch {}
                                                    return t.call(this, i, n, r);
                                                };
                                            }));
                                    });
                            })();
                            break;
                        case "xhr":
                            !(function () {
                                if (!("XMLHttpRequest" in e2)) return;
                                let t = XMLHttpRequest.prototype;
                                eO(t, "open", function (t) {
                                    return function (...i) {
                                        let n = i[1],
                                            r = (this[ez] = { method: eu(i[0]) ? i[0].toUpperCase() : i[0], url: i[1], request_headers: {} });
                                        eu(n) && "POST" === r.method && n.match(/sentry_key/) && (this.__sentry_own_request__ = !0);
                                        let a = () => {
                                            let t = this[ez];
                                            if (t && 4 === this.readyState) {
                                                try {
                                                    t.status_code = this.status;
                                                } catch {}
                                                eJ("xhr", { args: i, endTimestamp: Date.now(), startTimestamp: Date.now(), xhr: this });
                                            }
                                        };
                                        return (
                                            "onreadystatechange" in this && "function" == typeof this.onreadystatechange
                                                ? eO(this, "onreadystatechange", function (t) {
                                                      return function (...i) {
                                                          return a(), t.apply(this, i);
                                                      };
                                                  })
                                                : this.addEventListener("readystatechange", a),
                                            eO(this, "setRequestHeader", function (t) {
                                                return function (...i) {
                                                    let [n, r] = i,
                                                        a = this[ez];
                                                    return a && (a.request_headers[n.toLowerCase()] = r), t.apply(this, i);
                                                };
                                            }),
                                            t.apply(this, i)
                                        );
                                    };
                                }),
                                    eO(t, "send", function (t) {
                                        return function (...i) {
                                            let n = this[ez];
                                            return n && void 0 !== i[0] && (n.body = i[0]), eJ("xhr", { args: i, startTimestamp: Date.now(), xhr: this }), t.apply(this, i);
                                        };
                                    });
                            })();
                            break;
                        case "fetch":
                            (function () {
                                if (
                                    !(function () {
                                        if (!("fetch" in eq)) return !1;
                                        try {
                                            return new Headers(), new Request("http://www.example.com"), new Response(), !0;
                                        } catch {
                                            return !1;
                                        }
                                    })()
                                )
                                    return !1;
                                if (eY(eq.fetch)) return !0;
                                let t = !1,
                                    i = eq.document;
                                if (i && "function" == typeof i.createElement)
                                    try {
                                        let n = i.createElement("iframe");
                                        (n.hidden = !0), i.head.appendChild(n), n.contentWindow && n.contentWindow.fetch && (t = eY(n.contentWindow.fetch)), i.head.removeChild(n);
                                    } catch (r) {
                                        (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && e_.warn("Could not create sandbox iframe for pure fetch check, bailing to window.fetch: ", r);
                                    }
                                return t;
                            })() &&
                                eO(e2, "fetch", function (t) {
                                    return function (...i) {
                                        let { method: n, url: r } = (function (t) {
                                                if (0 === t.length) return { method: "GET", url: "" };
                                                if (2 === t.length) {
                                                    let [i, n] = t;
                                                    return { url: eH(i), method: e4(n, "method") ? String(n.method).toUpperCase() : "GET" };
                                                }
                                                let r = t[0];
                                                return { url: eH(r), method: e4(r, "method") ? String(r.method).toUpperCase() : "GET" };
                                            })(i),
                                            a = { args: i, fetchData: { method: n, url: r }, startTimestamp: Date.now() };
                                        return (
                                            eJ("fetch", { ...a }),
                                            t.apply(e2, i).then(
                                                (t) => (eJ("fetch", { ...a, endTimestamp: Date.now(), response: t }), t),
                                                (t) => {
                                                    throw (eJ("fetch", { ...a, endTimestamp: Date.now(), error: t }), t);
                                                }
                                            )
                                        );
                                    };
                                });
                            break;
                        case "history":
                            !(function () {
                                let t, i, n;
                                if (((i = (t = e3.chrome) && t.app && t.app.runtime), (n = "history" in e3 && !!e3.history.pushState && !!e3.history.replaceState), i || !n)) return;
                                let r = e2.onpopstate;
                                function a(t) {
                                    return function (...i) {
                                        let n = i.length > 2 ? i[2] : void 0;
                                        if (n) {
                                            let r = eK,
                                                a = String(n);
                                            (eK = a), eJ("history", { from: r, to: a });
                                        }
                                        return t.apply(this, i);
                                    };
                                }
                                (e2.onpopstate = function (...t) {
                                    let i = e2.location.href,
                                        n = eK;
                                    if (((eK = i), eJ("history", { from: n, to: i }), r))
                                        try {
                                            return r.apply(this, t);
                                        } catch {}
                                }),
                                    eO(e2.history, "pushState", a),
                                    eO(e2.history, "replaceState", a);
                            })();
                            break;
                        case "error":
                            (e5 = e2.onerror),
                                (e2.onerror = function (t, i, n, r, a) {
                                    return eJ("error", { column: r, error: a, line: n, msg: t, url: i }), !(!e5 || e5.__SENTRY_LOADER__) && e5.apply(this, arguments);
                                }),
                                (e2.onerror.__SENTRY_INSTRUMENTED__ = !0);
                            break;
                        case "unhandledrejection":
                            (eX = e2.onunhandledrejection),
                                (e2.onunhandledrejection = function (t) {
                                    return eJ("unhandledrejection", t), !(eX && !eX.__SENTRY_LOADER__) || eX.apply(this, arguments);
                                }),
                                (e2.onunhandledrejection.__SENTRY_INSTRUMENTED__ = !0);
                            break;
                        default:
                            return void ((typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && e_.warn("unknown instrumentation type:", i));
                    }
            })(t);
    }
    function eJ(t, i) {
        if (t && eG[t])
            for (let n of eG[t] || [])
                try {
                    n(i);
                } catch (r) {
                    (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) &&
                        e_.error(
                            `Error while triggering instrumentation handler.
  Type: ${t}
  Name: ${e9(n)}
  Error:`,
                            r
                        );
                }
    }
    function e4(t, i) {
        return !!t && "object" == typeof t && !!t[i];
    }
    function eH(t) {
        return "string" == typeof t ? t : t ? (e4(t, "url") ? t.url : t.toString ? t.toString() : "") : "";
    }
    let eK, e6, e7;
    function eQ(t, i = !1) {
        return (n) => {
            if (
                !n ||
                e7 === n ||
                (function (t) {
                    if ("keypress" !== t.type) return !1;
                    try {
                        let i = t.target;
                        if (!i || !i.tagName) return !0;
                        if ("INPUT" === i.tagName || "TEXTAREA" === i.tagName || i.isContentEditable) return !1;
                    } catch {}
                    return !0;
                })(n)
            )
                return;
            let r = "keypress" === n.type ? "input" : n.type;
            (void 0 === e6 ||
                (function (t, i) {
                    if (!t || t.type !== i.type) return !0;
                    try {
                        if (t.target !== i.target) return !0;
                    } catch {}
                    return !1;
                })(e7, n)) &&
                (t({ event: n, name: r, global: i }), (e7 = n)),
                clearTimeout(e6),
                (e6 = e2.setTimeout(() => {
                    e6 = void 0;
                }, 1e3));
        };
    }
    let e5 = null,
        eX = null;
    function eZ() {
        let t = ek,
            i = t.crypto || t.msCrypto;
        if (i && i.randomUUID) return i.randomUUID().replace(/-/g, "");
        let n = i && i.getRandomValues ? () => i.getRandomValues(new Uint8Array(1))[0] : () => 16 * Math.random();
        return "10000000100040008000100000000000".replace(/[018]/g, (t) => (t ^ ((15 & n()) >> (t / 4))).toString(16));
    }
    function te(t) {
        return t.exception && t.exception.values ? t.exception.values[0] : void 0;
    }
    function tt(t) {
        let { message: i, event_id: n } = t;
        if (i) return i;
        let r = te(t);
        return r ? (r.type && r.value ? `${r.type}: ${r.value}` : r.type || r.value || n || "<unknown>") : n || "<unknown>";
    }
    function ti(t, i, n) {
        let r = (t.exception = t.exception || {}),
            a = (r.values = r.values || []),
            s = (a[0] = a[0] || {});
        s.value || (s.value = i || ""), s.type || (s.type = n || "Error");
    }
    function tn(t, i) {
        let n = te(t);
        if (!n) return;
        let r = n.mechanism;
        if (((n.mechanism = { type: "generic", handled: !0, ...r, ...i }), i && "data" in i)) {
            let a = { ...(r && r.data), ...i.data };
            n.mechanism.data = a;
        }
    }
    function tr(t) {
        if (t && t.__sentry_captured__) return !0;
        try {
            eN(t, "__sentry_captured__", !0);
        } catch {}
        return !1;
    }
    function ta(t, i = 100, n = 1 / 0) {
        try {
            let r, a;
            return (function t(
                i,
                n,
                s = 1 / 0,
                o = 1 / 0,
                c = ((a = (r = "function" == typeof WeakSet) ? new WeakSet() : []),
                [
                    function (t) {
                        if (r) return !!a.has(t) || (a.add(t), !1);
                        for (let i = 0; i < a.length; i++) if (a[i] === t) return !0;
                        return a.push(t), !1;
                    },
                    function (t) {
                        if (r) a.delete(t);
                        else
                            for (let i = 0; i < a.length; i++)
                                if (a[i] === t) {
                                    a.splice(i, 1);
                                    break;
                                }
                    },
                ])
            ) {
                var l;
                let [u, d] = c;
                if (null == n || (["number", "boolean", "string"].includes(typeof n) && ("number" != typeof (l = n) || l == l))) return n;
                let h = (function (t, i) {
                    var n, r;
                    try {
                        if ("domain" === t && i && "object" == typeof i && i._events) return "[Domain]";
                        if ("domainEmitter" === t) return "[DomainEmitter]";
                        if ("u" > typeof global && i === global) return "[Global]";
                        if ("u" > typeof window && i === window) return "[Window]";
                        if ("u" > typeof document && i === document) return "[Document]";
                        if (eh((n = i)) && "nativeEvent" in n && "preventDefault" in n && "stopPropagation" in n) return "[SyntheticEvent]";
                        if ("number" == typeof i && i != i) return "[NaN]";
                        if ("function" == typeof i) return `[Function: ${e9(i)}]`;
                        if ("symbol" == typeof i) return `[${String(i)}]`;
                        if ("bigint" == typeof i) return `[BigInt: ${String(i)}]`;
                        let a,
                            s = ((r = i), (a = Object.getPrototypeOf(r)) ? a.constructor.name : "null prototype");
                        return /^HTML(\w*)Element$/.test(s) ? `[HTMLElement: ${s}]` : `[object ${s}]`;
                    } catch (o) {
                        return `**non-serializable** (${o})`;
                    }
                })("", n);
                if (!h.startsWith("[object ")) return h;
                if (n.__sentry_skip_normalization__) return n;
                let p = "number" == typeof n.__sentry_override_normalization_depth__ ? n.__sentry_override_normalization_depth__ : s;
                if (0 === p) return h.replace("object ", "");
                if (u(n)) return "[Circular ~]";
                let f = n;
                if (f && "function" == typeof f.toJSON)
                    try {
                        return t("", f.toJSON(), p - 1, o, c);
                    } catch {}
                let g = Array.isArray(n) ? [] : {},
                    v = 0,
                    m = ej(n);
                for (let y in m) {
                    if (!Object.prototype.hasOwnProperty.call(m, y)) continue;
                    if (v >= o) {
                        g[y] = "[MaxProperties ~]";
                        break;
                    }
                    let b = m[y];
                    (g[y] = t(y, b, p - 1, o, c)), v++;
                }
                return d(n), g;
            })("", t, i, n);
        } catch (s) {
            return { ERROR: `**non-serializable** (${s})` };
        }
    }
    function ts(t) {
        return new tc((i) => {
            i(t);
        });
    }
    function to(t) {
        return new tc((i, n) => {
            n(t);
        });
    }
    ((r_ = rL || (rL = {}))[(r_.PENDING = 0)] = "PENDING"), (r_[(r_.RESOLVED = 1)] = "RESOLVED"), (r_[(r_.REJECTED = 2)] = "REJECTED");
    class tc {
        __init() {
            this._state = rL.PENDING;
        }
        __init2() {
            this._handlers = [];
        }
        constructor(t) {
            tc.prototype.__init.call(this), tc.prototype.__init2.call(this), tc.prototype.__init3.call(this), tc.prototype.__init4.call(this), tc.prototype.__init5.call(this), tc.prototype.__init6.call(this);
            try {
                t(this._resolve, this._reject);
            } catch (i) {
                this._reject(i);
            }
        }
        then(t, i) {
            return new tc((n, r) => {
                this._handlers.push([
                    !1,
                    (i) => {
                        if (t)
                            try {
                                n(t(i));
                            } catch (a) {
                                r(a);
                            }
                        else n(i);
                    },
                    (t) => {
                        if (i)
                            try {
                                n(i(t));
                            } catch (a) {
                                r(a);
                            }
                        else r(t);
                    },
                ]),
                    this._executeHandlers();
            });
        }
        catch(t) {
            return this.then((t) => t, t);
        }
        finally(t) {
            return new tc((i, n) => {
                let r, a;
                return this.then(
                    (i) => {
                        (a = !1), (r = i), t && t();
                    },
                    (i) => {
                        (a = !0), (r = i), t && t();
                    }
                ).then(() => {
                    a ? n(r) : i(r);
                });
            });
        }
        __init3() {
            this._resolve = (t) => {
                this._setResult(rL.RESOLVED, t);
            };
        }
        __init4() {
            this._reject = (t) => {
                this._setResult(rL.REJECTED, t);
            };
        }
        __init5() {
            this._setResult = (t, i) => {
                this._state === rL.PENDING && (ef(i) ? i.then(this._resolve, this._reject) : ((this._state = t), (this._value = i), this._executeHandlers()));
            };
        }
        __init6() {
            this._executeHandlers = () => {
                if (this._state === rL.PENDING) return;
                let t = this._handlers.slice();
                (this._handlers = []),
                    t.forEach((t) => {
                        t[0] || (this._state === rL.RESOLVED && t[1](this._value), this._state === rL.REJECTED && t[2](this._value), (t[0] = !0));
                    });
            };
        }
    }
    function tl(t) {
        if (!t) return {};
        let i = t.match(/^(([^:/?#]+):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?$/);
        if (!i) return {};
        let n = i[6] || "",
            r = i[8] || "";
        return { host: i[4], path: i[5], protocol: i[2], search: n, hash: r, relative: i[5] + n + r };
    }
    let tu = ["fatal", "error", "warning", "log", "info", "debug"],
        td = ek,
        th = { nowSeconds: () => Date.now() / 1e3 },
        tp =
            ("u" > typeof __SENTRY_BROWSER_BUNDLE__ && __SENTRY_BROWSER_BUNDLE__) || "[object process]" !== Object.prototype.toString.call("u" > typeof process ? process : 0)
                ? (function () {
                      let { performance: t } = td;
                      if (t && t.now) return { now: () => t.now(), timeOrigin: Date.now() - t.now() };
                  })()
                : (function () {
                      var t;
                      try {
                          return (t = module).require("perf_hooks").performance;
                      } catch {
                          return;
                      }
                  })(),
        tf = void 0 === tp ? th : { nowSeconds: () => (tp.timeOrigin + tp.now()) / 1e3 },
        tg = th.nowSeconds.bind(th),
        tv = tf.nowSeconds.bind(tf);
    function tm(t, i = []) {
        return [t, i];
    }
    function ty(t, i) {
        let [n, r] = t;
        return [n, [...r, i]];
    }
    function t8(t, i) {
        let n = t[1];
        for (let r of n) if (i(r, r[0].type)) return !0;
        return !1;
    }
    function tb(t, i) {
        return (i || new TextEncoder()).encode(t);
    }
    function t$(t, i) {
        let n = "string" == typeof t.data ? tb(t.data, i) : t.data;
        return [eB({ type: "attachment", length: n.length, filename: t.filename, content_type: t.contentType, attachment_type: t.attachmentType }), n];
    }
    (() => {
        let { performance: t } = td;
        if (!t || !t.now) return;
        let i = t.now(),
            n = Date.now(),
            r = t.timeOrigin ? Math.abs(t.timeOrigin + i - n) : 36e5,
            a = t.timing && t.timing.navigationStart,
            s = "number" == typeof a ? Math.abs(a + i - n) : 36e5;
        (r < 36e5 || s < 36e5) && r <= s && t.timeOrigin;
    })();
    let tk = {
        session: "session",
        sessions: "session",
        attachment: "attachment",
        transaction: "transaction",
        event: "error",
        client_report: "internal",
        user_report: "default",
        profile: "profile",
        replay_event: "replay",
        replay_recording: "replay",
        check_in: "monitor",
    };
    function tS(t) {
        return tk[t];
    }
    function tw(t) {
        if (!t || !t.sdk) return;
        let { name: i, version: n } = t.sdk;
        return { name: i, version: n };
    }
    let tT = "production";
    function tC(t, i = {}) {
        if (
            (i.user && (!t.ipAddress && i.user.ip_address && (t.ipAddress = i.user.ip_address), t.did || i.did || (t.did = i.user.id || i.user.email || i.user.username)),
            (t.timestamp = i.timestamp || tv()),
            i.ignoreDuration && (t.ignoreDuration = i.ignoreDuration),
            i.sid && (t.sid = 32 === i.sid.length ? i.sid : eZ()),
            void 0 !== i.init && (t.init = i.init),
            !t.did && i.did && (t.did = `${i.did}`),
            "number" == typeof i.started && (t.started = i.started),
            t.ignoreDuration)
        )
            t.duration = void 0;
        else if ("number" == typeof i.duration) t.duration = i.duration;
        else {
            let n = t.timestamp - t.started;
            t.duration = n >= 0 ? n : 0;
        }
        i.release && (t.release = i.release),
            i.environment && (t.environment = i.environment),
            !t.ipAddress && i.ipAddress && (t.ipAddress = i.ipAddress),
            !t.userAgent && i.userAgent && (t.userAgent = i.userAgent),
            "number" == typeof i.errors && (t.errors = i.errors),
            i.status && (t.status = i.status);
    }
    class tE {
        constructor() {
            (this._notifyingListeners = !1),
                (this._scopeListeners = []),
                (this._eventProcessors = []),
                (this._breadcrumbs = []),
                (this._attachments = []),
                (this._user = {}),
                (this._tags = {}),
                (this._extra = {}),
                (this._contexts = {}),
                (this._sdkProcessingMetadata = {}),
                (this._propagationContext = tL());
        }
        static clone(t) {
            let i = new tE();
            return (
                t &&
                    ((i._breadcrumbs = [...t._breadcrumbs]),
                    (i._tags = { ...t._tags }),
                    (i._extra = { ...t._extra }),
                    (i._contexts = { ...t._contexts }),
                    (i._user = t._user),
                    (i._level = t._level),
                    (i._span = t._span),
                    (i._session = t._session),
                    (i._transactionName = t._transactionName),
                    (i._fingerprint = t._fingerprint),
                    (i._eventProcessors = [...t._eventProcessors]),
                    (i._requestSession = t._requestSession),
                    (i._attachments = [...t._attachments]),
                    (i._sdkProcessingMetadata = { ...t._sdkProcessingMetadata }),
                    (i._propagationContext = { ...t._propagationContext })),
                i
            );
        }
        addScopeListener(t) {
            this._scopeListeners.push(t);
        }
        addEventProcessor(t) {
            return this._eventProcessors.push(t), this;
        }
        setUser(t) {
            return (this._user = t || {}), this._session && tC(this._session, { user: t }), this._notifyScopeListeners(), this;
        }
        getUser() {
            return this._user;
        }
        getRequestSession() {
            return this._requestSession;
        }
        setRequestSession(t) {
            return (this._requestSession = t), this;
        }
        setTags(t) {
            return (this._tags = { ...this._tags, ...t }), this._notifyScopeListeners(), this;
        }
        setTag(t, i) {
            return (this._tags = { ...this._tags, [t]: i }), this._notifyScopeListeners(), this;
        }
        setExtras(t) {
            return (this._extra = { ...this._extra, ...t }), this._notifyScopeListeners(), this;
        }
        setExtra(t, i) {
            return (this._extra = { ...this._extra, [t]: i }), this._notifyScopeListeners(), this;
        }
        setFingerprint(t) {
            return (this._fingerprint = t), this._notifyScopeListeners(), this;
        }
        setLevel(t) {
            return (this._level = t), this._notifyScopeListeners(), this;
        }
        setTransactionName(t) {
            return (this._transactionName = t), this._notifyScopeListeners(), this;
        }
        setContext(t, i) {
            return null === i ? delete this._contexts[t] : (this._contexts[t] = i), this._notifyScopeListeners(), this;
        }
        setSpan(t) {
            return (this._span = t), this._notifyScopeListeners(), this;
        }
        getSpan() {
            return this._span;
        }
        getTransaction() {
            let t = this.getSpan();
            return t && t.transaction;
        }
        setSession(t) {
            return t ? (this._session = t) : delete this._session, this._notifyScopeListeners(), this;
        }
        getSession() {
            return this._session;
        }
        update(t) {
            if (!t) return this;
            if ("function" == typeof t) {
                let i = t(this);
                return i instanceof tE ? i : this;
            }
            return (
                t instanceof tE
                    ? ((this._tags = { ...this._tags, ...t._tags }),
                      (this._extra = { ...this._extra, ...t._extra }),
                      (this._contexts = { ...this._contexts, ...t._contexts }),
                      t._user && Object.keys(t._user).length && (this._user = t._user),
                      t._level && (this._level = t._level),
                      t._fingerprint && (this._fingerprint = t._fingerprint),
                      t._requestSession && (this._requestSession = t._requestSession),
                      t._propagationContext && (this._propagationContext = t._propagationContext))
                    : eh(t) &&
                      ((this._tags = { ...this._tags, ...t.tags }),
                      (this._extra = { ...this._extra, ...t.extra }),
                      (this._contexts = { ...this._contexts, ...t.contexts }),
                      t.user && (this._user = t.user),
                      t.level && (this._level = t.level),
                      t.fingerprint && (this._fingerprint = t.fingerprint),
                      t.requestSession && (this._requestSession = t.requestSession),
                      t.propagationContext && (this._propagationContext = t.propagationContext)),
                this
            );
        }
        clear() {
            return (
                (this._breadcrumbs = []),
                (this._tags = {}),
                (this._extra = {}),
                (this._user = {}),
                (this._contexts = {}),
                (this._level = void 0),
                (this._transactionName = void 0),
                (this._fingerprint = void 0),
                (this._requestSession = void 0),
                (this._span = void 0),
                (this._session = void 0),
                this._notifyScopeListeners(),
                (this._attachments = []),
                (this._propagationContext = tL()),
                this
            );
        }
        addBreadcrumb(t, i) {
            let n = "number" == typeof i ? i : 100;
            if (n <= 0) return this;
            let r = { timestamp: tg(), ...t };
            return (this._breadcrumbs = [...this._breadcrumbs, r].slice(-n)), this._notifyScopeListeners(), this;
        }
        getLastBreadcrumb() {
            return this._breadcrumbs[this._breadcrumbs.length - 1];
        }
        clearBreadcrumbs() {
            return (this._breadcrumbs = []), this._notifyScopeListeners(), this;
        }
        addAttachment(t) {
            return this._attachments.push(t), this;
        }
        getAttachments() {
            return this._attachments;
        }
        clearAttachments() {
            return (this._attachments = []), this;
        }
        applyToEvent(t, i = {}) {
            if (
                (this._extra && Object.keys(this._extra).length && (t.extra = { ...this._extra, ...t.extra }),
                this._tags && Object.keys(this._tags).length && (t.tags = { ...this._tags, ...t.tags }),
                this._user && Object.keys(this._user).length && (t.user = { ...this._user, ...t.user }),
                this._contexts && Object.keys(this._contexts).length && (t.contexts = { ...this._contexts, ...t.contexts }),
                this._level && (t.level = this._level),
                this._transactionName && (t.transaction = this._transactionName),
                this._span)
            ) {
                t.contexts = { trace: this._span.getTraceContext(), ...t.contexts };
                let n = this._span.transaction;
                if (n) {
                    t.sdkProcessingMetadata = { dynamicSamplingContext: n.getDynamicSamplingContext(), ...t.sdkProcessingMetadata };
                    let r = n.name;
                    r && (t.tags = { transaction: r, ...t.tags });
                }
            }
            return (
                this._applyFingerprint(t),
                (t.breadcrumbs = [...(t.breadcrumbs || []), ...this._breadcrumbs]),
                (t.breadcrumbs = t.breadcrumbs.length > 0 ? t.breadcrumbs : void 0),
                (t.sdkProcessingMetadata = { ...t.sdkProcessingMetadata, ...this._sdkProcessingMetadata, propagationContext: this._propagationContext }),
                this._notifyEventProcessors([...tM(), ...this._eventProcessors], t, i)
            );
        }
        setSDKProcessingMetadata(t) {
            return (this._sdkProcessingMetadata = { ...this._sdkProcessingMetadata, ...t }), this;
        }
        setPropagationContext(t) {
            return (this._propagationContext = t), this;
        }
        getPropagationContext() {
            return this._propagationContext;
        }
        _notifyEventProcessors(t, i, n, r = 0) {
            return new tc((a, s) => {
                let o = t[r];
                if (null === i || "function" != typeof o) a(i);
                else {
                    let c = o({ ...i }, n);
                    (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && o.id && null === c && e_.log(`Event processor "${o.id}" dropped event`),
                        ef(c)
                            ? c.then((i) => this._notifyEventProcessors(t, i, n, r + 1).then(a)).then(null, s)
                            : this._notifyEventProcessors(t, c, n, r + 1)
                                  .then(a)
                                  .then(null, s);
                }
            });
        }
        _notifyScopeListeners() {
            this._notifyingListeners ||
                ((this._notifyingListeners = !0),
                this._scopeListeners.forEach((t) => {
                    t(this);
                }),
                (this._notifyingListeners = !1));
        }
        _applyFingerprint(t) {
            var i;
            (t.fingerprint = t.fingerprint ? (Array.isArray((i = t.fingerprint)) ? i : [i]) : []),
                this._fingerprint && (t.fingerprint = t.fingerprint.concat(this._fingerprint)),
                t.fingerprint && !t.fingerprint.length && delete t.fingerprint;
        }
    }
    function tM() {
        return ew("globalEventProcessors", () => []);
    }
    function tA(t) {
        tM().push(t);
    }
    function tL() {
        return { traceId: eZ(), spanId: eZ().substring(16), sampled: !1 };
    }
    class t_ {
        constructor(t, i = new tE(), n = 4) {
            (this._version = n), (this._stack = [{ scope: i }]), t && this.bindClient(t);
        }
        isOlderThan(t) {
            return this._version < t;
        }
        bindClient(t) {
            (this.getStackTop().client = t), t && t.setupIntegrations && t.setupIntegrations();
        }
        pushScope() {
            let t = tE.clone(this.getScope());
            return this.getStack().push({ client: this.getClient(), scope: t }), t;
        }
        popScope() {
            return !(this.getStack().length <= 1 || !this.getStack().pop());
        }
        withScope(t) {
            let i = this.pushScope();
            try {
                t(i);
            } finally {
                this.popScope();
            }
        }
        getClient() {
            return this.getStackTop().client;
        }
        getScope() {
            return this.getStackTop().scope;
        }
        getStack() {
            return this._stack;
        }
        getStackTop() {
            return this._stack[this._stack.length - 1];
        }
        captureException(t, i) {
            let n = (this._lastEventId = i && i.event_id ? i.event_id : eZ()),
                r = Error("Sentry syntheticException");
            return (
                this._withClient((a, s) => {
                    a.captureException(t, { originalException: t, syntheticException: r, ...i, event_id: n }, s);
                }),
                n
            );
        }
        captureMessage(t, i, n) {
            let r = (this._lastEventId = n && n.event_id ? n.event_id : eZ()),
                a = Error(t);
            return (
                this._withClient((s, o) => {
                    s.captureMessage(t, i, { originalException: t, syntheticException: a, ...n, event_id: r }, o);
                }),
                r
            );
        }
        captureEvent(t, i) {
            let n = i && i.event_id ? i.event_id : eZ();
            return (
                t.type || (this._lastEventId = n),
                this._withClient((r, a) => {
                    r.captureEvent(t, { ...i, event_id: n }, a);
                }),
                n
            );
        }
        lastEventId() {
            return this._lastEventId;
        }
        addBreadcrumb(t, i) {
            let { scope: n, client: r } = this.getStackTop();
            if (!r) return;
            let { beforeBreadcrumb: a = null, maxBreadcrumbs: s = 100 } = (r.getOptions && r.getOptions()) || {};
            if (s <= 0) return;
            let o = { timestamp: tg(), ...t },
                c = a ? eA(() => a(o, i)) : o;
            null !== c && (r.emit && r.emit("beforeAddBreadcrumb", c, i), n.addBreadcrumb(c, s));
        }
        setUser(t) {
            this.getScope().setUser(t);
        }
        setTags(t) {
            this.getScope().setTags(t);
        }
        setExtras(t) {
            this.getScope().setExtras(t);
        }
        setTag(t, i) {
            this.getScope().setTag(t, i);
        }
        setExtra(t, i) {
            this.getScope().setExtra(t, i);
        }
        setContext(t, i) {
            this.getScope().setContext(t, i);
        }
        configureScope(t) {
            let { scope: i, client: n } = this.getStackTop();
            n && t(i);
        }
        run(t) {
            let i = tI(this);
            try {
                t(this);
            } finally {
                tI(i);
            }
        }
        getIntegration(t) {
            let i = this.getClient();
            if (!i) return null;
            try {
                return i.getIntegration(t);
            } catch {
                return (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && e_.warn(`Cannot retrieve integration ${t.id} from the current Hub`), null;
            }
        }
        startTransaction(t, i) {
            let n = this._callExtensionMethod("startTransaction", t, i);
            return (
                ("u" > typeof __SENTRY_DEBUG__ && !__SENTRY_DEBUG__) ||
                    n ||
                    console.warn("Tracing extension 'startTransaction' has not been added. Call 'addTracingExtensions' before calling 'init':\nSentry.addTracingExtensions();\nSentry.init({...});\n"),
                n
            );
        }
        traceHeaders() {
            return this._callExtensionMethod("traceHeaders");
        }
        captureSession(t = !1) {
            if (t) return this.endSession();
            this._sendSessionUpdate();
        }
        endSession() {
            var t;
            let i = this.getStackTop().scope,
                n = i.getSession(),
                r;
            n && ((r = {}), "ok" === (t = n).status && (r = { status: "exited" }), tC(t, r)), this._sendSessionUpdate(), i.setSession();
        }
        startSession(t) {
            var i;
            let n,
                r,
                { scope: a, client: s } = this.getStackTop(),
                { release: o, environment: c = tT } = (s && s.getOptions()) || {},
                { userAgent: l } = ek.navigator || {},
                u =
                    ((i = { release: o, environment: c, user: a.getUser(), ...(l && { userAgent: l }), ...t }),
                    (n = tv()),
                    (r = {
                        sid: eZ(),
                        init: !0,
                        timestamp: n,
                        started: n,
                        duration: 0,
                        status: "ok",
                        errors: 0,
                        ignoreDuration: !1,
                        toJSON() {
                            var t;
                            return eB({
                                sid: `${(t = r).sid}`,
                                init: t.init,
                                started: new Date(1e3 * t.started).toISOString(),
                                timestamp: new Date(1e3 * t.timestamp).toISOString(),
                                status: t.status,
                                errors: t.errors,
                                did: "number" == typeof t.did || "string" == typeof t.did ? `${t.did}` : void 0,
                                duration: t.duration,
                                attrs: { release: t.release, environment: t.environment, ip_address: t.ipAddress, user_agent: t.userAgent },
                            });
                        },
                    }),
                    i && tC(r, i),
                    r),
                d = a.getSession && a.getSession();
            return d && "ok" === d.status && tC(d, { status: "exited" }), this.endSession(), a.setSession(u), u;
        }
        shouldSendDefaultPii() {
            let t = this.getClient(),
                i = t && t.getOptions();
            return !(!i || !i.sendDefaultPii);
        }
        _sendSessionUpdate() {
            let { scope: t, client: i } = this.getStackTop(),
                n = t.getSession();
            n && i && i.captureSession && i.captureSession(n);
        }
        _withClient(t) {
            let { scope: i, client: n } = this.getStackTop();
            n && t(n, i);
        }
        _callExtensionMethod(t, ...i) {
            let n = tx().__SENTRY__;
            if (n && n.extensions && "function" == typeof n.extensions[t]) return n.extensions[t].apply(this, i);
            (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && e_.warn(`Extension method ${t} couldn't be found, doing nothing.`);
        }
    }
    function tx() {
        return (ek.__SENTRY__ = ek.__SENTRY__ || { extensions: {}, hub: void 0 }), ek;
    }
    function tI(t) {
        let i = tx(),
            n = tD(i);
        return tO(i, t), n;
    }
    function tP() {
        let t = tx();
        if (t.__SENTRY__ && t.__SENTRY__.acs) {
            let i = t.__SENTRY__.acs.getCurrentHub();
            if (i) return i;
        }
        return (function (t = tx()) {
            var i;
            return ((i = t) && i.__SENTRY__ && i.__SENTRY__.hub && !tD(t).isOlderThan(4)) || tO(t, new t_()), tD(t);
        })(t);
    }
    function tD(t) {
        return ew("hub", () => new t_(), t);
    }
    function tO(t, i) {
        return !!t && (((t.__SENTRY__ = t.__SENTRY__ || {}).hub = i), !0);
    }
    let tN = [];
    function tR(t, i) {
        (i[t.name] = t), -1 === tN.indexOf(t.name) && (t.setupOnce(tA, tP), tN.push(t.name), (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && e_.log(`Integration installed: ${t.name}`));
    }
    let tF = new WeakMap(),
        tj = "Not capturing exception because it's already been captured.";
    class tV {
        __init() {
            this._integrations = {};
        }
        __init2() {
            this._integrationsInitialized = !1;
        }
        __init3() {
            this._numProcessing = 0;
        }
        __init4() {
            this._outcomes = {};
        }
        __init5() {
            this._hooks = {};
        }
        constructor(t) {
            if (
                (tV.prototype.__init.call(this),
                tV.prototype.__init2.call(this),
                tV.prototype.__init3.call(this),
                tV.prototype.__init4.call(this),
                tV.prototype.__init5.call(this),
                (this._options = t),
                t.dsn
                    ? (this._dsn = (function (t) {
                          let i =
                              "string" == typeof t
                                  ? (function (t) {
                                        let i = ex.exec(t);
                                        if (!i) return void console.error(`Invalid Sentry Dsn: ${t}`);
                                        let [n, r, a = "", s, o = "", c] = i.slice(1),
                                            l = "",
                                            u = c,
                                            d = u.split("/");
                                        if ((d.length > 1 && ((l = d.slice(0, -1).join("/")), (u = d.pop())), u)) {
                                            let h = u.match(/^\d+/);
                                            h && (u = h[0]);
                                        }
                                        return eP({ host: s, pass: a, path: l, projectId: u, port: o, protocol: n, publicKey: r });
                                    })(t)
                                  : eP(t);
                          if (
                              i &&
                              (function (t) {
                                  var i;
                                  if ("u" > typeof __SENTRY_DEBUG__ && !__SENTRY_DEBUG__) return !0;
                                  let { port: n, projectId: r, protocol: a } = t;
                                  return !(
                                      ["protocol", "publicKey", "host", "projectId"].find((i) => !t[i] && (e_.error(`Invalid Sentry Dsn: ${i} missing`), !0)) ||
                                      (r.match(/^\d+$/)
                                          ? "http" === (i = a) || "https" === i
                                              ? n && isNaN(parseInt(n, 10)) && (e_.error(`Invalid Sentry Dsn: Invalid port ${n}`), 1)
                                              : (e_.error(`Invalid Sentry Dsn: Invalid protocol ${a}`), 1)
                                          : (e_.error(`Invalid Sentry Dsn: Invalid projectId ${r}`), 1))
                                  );
                              })(i)
                          )
                              return i;
                      })(t.dsn))
                    : (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && e_.warn("No DSN provided, client will not do anything."),
                this._dsn)
            ) {
                let i = (function (t, i = {}) {
                    var n, r, a, s, o;
                    let c = "string" == typeof i ? i : i.tunnel,
                        l = "string" != typeof i && i._metadata ? i._metadata.sdk : void 0,
                        u;
                    return (
                        c ||
                        `${((n = t), `${(u = (o = n).protocol ? `${o.protocol}:` : "")}//${o.host}${o.port ? `:${o.port}` : ""}${o.path ? `/${o.path}` : ""}/api/${n.projectId}/envelope/`)}?${
                            ((r = t),
                            (a = l),
                            Object.keys((s = { sentry_key: r.publicKey, sentry_version: "7", ...(a && { sentry_client: `${a.name}/${a.version}` }) }))
                                .map((t) => `${encodeURIComponent(t)}=${encodeURIComponent(s[t])}`)
                                .join("&"))
                        }`
                    );
                })(this._dsn, t);
                this._transport = t.transport({ recordDroppedEvent: this.recordDroppedEvent.bind(this), ...t.transportOptions, url: i });
            }
        }
        captureException(t, i, n) {
            if (tr(t)) return void ((typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && e_.log(tj));
            let r = i && i.event_id;
            return (
                this._process(
                    this.eventFromException(t, i)
                        .then((t) => this._captureEvent(t, i, n))
                        .then((t) => {
                            r = t;
                        })
                ),
                r
            );
        }
        captureMessage(t, i, n, r) {
            let a = n && n.event_id,
                s = ed(t) ? this.eventFromMessage(String(t), i, n) : this.eventFromException(t, n);
            return (
                this._process(
                    s
                        .then((t) => this._captureEvent(t, n, r))
                        .then((t) => {
                            a = t;
                        })
                ),
                a
            );
        }
        captureEvent(t, i, n) {
            if (i && i.originalException && tr(i.originalException)) return void ((typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && e_.log(tj));
            let r = i && i.event_id;
            return (
                this._process(
                    this._captureEvent(t, i, n).then((t) => {
                        r = t;
                    })
                ),
                r
            );
        }
        captureSession(t) {
            this._isEnabled()
                ? "string" != typeof t.release
                    ? (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && e_.warn("Discarded session because of missing or non-string release")
                    : (this.sendSession(t), tC(t, { init: !1 }))
                : (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && e_.warn("SDK not enabled, will not capture session.");
        }
        getDsn() {
            return this._dsn;
        }
        getOptions() {
            return this._options;
        }
        getSdkMetadata() {
            return this._options._metadata;
        }
        getTransport() {
            return this._transport;
        }
        flush(t) {
            let i = this._transport;
            return i ? this._isClientDoneProcessing(t).then((n) => i.flush(t).then((t) => n && t)) : ts(!0);
        }
        close(t) {
            return this.flush(t).then((t) => ((this.getOptions().enabled = !1), t));
        }
        setupIntegrations() {
            var t;
            let i;
            this._isEnabled() &&
                !this._integrationsInitialized &&
                ((this._integrations =
                    ((t = this._options.integrations),
                    (i = {}),
                    t.forEach((t) => {
                        t && tR(t, i);
                    }),
                    i)),
                (this._integrationsInitialized = !0));
        }
        getIntegrationById(t) {
            return this._integrations[t];
        }
        getIntegration(t) {
            try {
                return this._integrations[t.id] || null;
            } catch {
                return (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && e_.warn(`Cannot retrieve integration ${t.id} from the current Client`), null;
            }
        }
        addIntegration(t) {
            tR(t, this._integrations);
        }
        sendEvent(t, i = {}) {
            if (this._dsn) {
                var n, r, a, s, o, c, l, u, d, h;
                let p,
                    f,
                    g,
                    v,
                    m =
                        ((n = t),
                        (r = this._dsn),
                        (a = this._options._metadata),
                        (s = this._options.tunnel),
                        (p = tw(a)),
                        (f = n.type && "replay_event" !== n.type ? n.type : "event"),
                        (o = n),
                        (c = a && a.sdk) &&
                            ((o.sdk = o.sdk || {}),
                            (o.sdk.name = o.sdk.name || c.name),
                            (o.sdk.version = o.sdk.version || c.version),
                            (o.sdk.integrations = [...(o.sdk.integrations || []), ...(c.integrations || [])]),
                            (o.sdk.packages = [...(o.sdk.packages || []), ...(c.packages || [])])),
                        (v =
                            ((l = n),
                            (u = p),
                            (d = s),
                            (h = r),
                            (g = l.sdkProcessingMetadata && l.sdkProcessingMetadata.dynamicSamplingContext),
                            { event_id: l.event_id, sent_at: new Date().toISOString(), ...(u && { sdk: u }), ...(!!d && { dsn: eI(h) }), ...(g && { trace: eB({ ...g }) }) })),
                        delete n.sdkProcessingMetadata,
                        tm(v, [[{ type: f }, n]]));
                for (let y of i.attachments || []) m = ty(m, t$(y, this._options.transportOptions && this._options.transportOptions.textEncoder));
                let b = this._sendEnvelope(m);
                b && b.then((i) => this.emit("afterSendEvent", t, i), null);
            }
        }
        sendSession(t) {
            if (this._dsn) {
                var i, n, r, a;
                let s,
                    o =
                        ((i = t),
                        (n = this._dsn),
                        (r = this._options._metadata),
                        (a = this._options.tunnel),
                        (s = tw(r)),
                        tm({ sent_at: new Date().toISOString(), ...(s && { sdk: s }), ...(!!a && { dsn: eI(n) }) }, ["aggregates" in i ? [{ type: "sessions" }, i] : [{ type: "session" }, i.toJSON()]]));
                this._sendEnvelope(o);
            }
        }
        recordDroppedEvent(t, i, n) {
            if (this._options.sendClientReports) {
                let r = `${t}:${i}`;
                (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && e_.log(`Adding outcome: "${r}"`), (this._outcomes[r] = this._outcomes[r] + 1 || 1);
            }
        }
        on(t, i) {
            this._hooks[t] || (this._hooks[t] = []), this._hooks[t].push(i);
        }
        emit(t, ...i) {
            this._hooks[t] && this._hooks[t].forEach((t) => t(...i));
        }
        _updateSessionFromEvent(t, i) {
            let n = !1,
                r = !1,
                a = i.exception && i.exception.values;
            if (a)
                for (let s of ((r = !0), a)) {
                    let o = s.mechanism;
                    if (o && !1 === o.handled) {
                        n = !0;
                        break;
                    }
                }
            let c = "ok" === t.status;
            ((c && 0 === t.errors) || (c && n)) && (tC(t, { ...(n && { status: "crashed" }), errors: t.errors || Number(r || n) }), this.captureSession(t));
        }
        _isClientDoneProcessing(t) {
            return new tc((i) => {
                let n = 0,
                    r = setInterval(() => {
                        0 == this._numProcessing ? (clearInterval(r), i(!0)) : ((n += 1), t && n >= t && (clearInterval(r), i(!1)));
                    }, 1);
            });
        }
        _isEnabled() {
            return !1 !== this.getOptions().enabled && void 0 !== this._dsn;
        }
        _prepareEvent(t, i, n) {
            let r = this.getOptions(),
                a = Object.keys(this._integrations);
            return (
                !i.integrations && a.length > 0 && (i.integrations = a),
                (function (t, i, n, r) {
                    var a, s;
                    let { normalizeDepth: o = 3, normalizeMaxBreadth: c = 1e3 } = t,
                        l = { ...i, event_id: i.event_id || n.event_id || eZ(), timestamp: i.timestamp || tg() },
                        u = n.integrations || t.integrations.map((t) => t.name);
                    (function (t, i) {
                        let { environment: n, release: r, dist: a, maxValueLength: s = 250 } = i;
                        "environment" in t || (t.environment = "environment" in i ? n : tT),
                            void 0 === t.release && void 0 !== r && (t.release = r),
                            void 0 === t.dist && void 0 !== a && (t.dist = a),
                            t.message && (t.message = ev(t.message, s));
                        let o = t.exception && t.exception.values && t.exception.values[0];
                        o && o.value && (o.value = ev(o.value, s));
                        let c = t.request;
                        c && c.url && (c.url = ev(c.url, s));
                    })(l, t),
                        (a = l),
                        (s = u).length > 0 && ((a.sdk = a.sdk || {}), (a.sdk.integrations = [...(a.sdk.integrations || []), ...s])),
                        void 0 === i.type &&
                            (function (t, i) {
                                let n = ek._sentryDebugIds;
                                if (!n) return;
                                let r,
                                    a = tF.get(i);
                                a ? (r = a) : ((r = new Map()), tF.set(i, r));
                                let s = Object.keys(n).reduce((t, a) => {
                                    let s,
                                        o = r.get(a);
                                    o ? (s = o) : ((s = i(a)), r.set(a, s));
                                    for (let c = s.length - 1; c >= 0; c--) {
                                        let l = s[c];
                                        if (l.filename) {
                                            t[l.filename] = n[a];
                                            break;
                                        }
                                    }
                                    return t;
                                }, {});
                                try {
                                    t.exception.values.forEach((t) => {
                                        t.stacktrace.frames.forEach((t) => {
                                            t.filename && (t.debug_id = s[t.filename]);
                                        });
                                    });
                                } catch {}
                            })(l, t.stackParser);
                    let d = r;
                    n.captureContext && (d = tE.clone(d).update(n.captureContext));
                    let h = ts(l);
                    if (d) {
                        if (d.getAttachments) {
                            let p = [...(n.attachments || []), ...d.getAttachments()];
                            p.length && (n.attachments = p);
                        }
                        h = d.applyToEvent(l, n);
                    }
                    return h.then(
                        (t) => (
                            t &&
                                (function (t) {
                                    let i = {};
                                    try {
                                        t.exception.values.forEach((t) => {
                                            t.stacktrace.frames.forEach((t) => {
                                                t.debug_id && (t.abs_path ? (i[t.abs_path] = t.debug_id) : t.filename && (i[t.filename] = t.debug_id), delete t.debug_id);
                                            });
                                        });
                                    } catch {}
                                    if (0 === Object.keys(i).length) return;
                                    (t.debug_meta = t.debug_meta || {}), (t.debug_meta.images = t.debug_meta.images || []);
                                    let n = t.debug_meta.images;
                                    Object.keys(i).forEach((t) => {
                                        n.push({ type: "sourcemap", code_file: t, debug_id: i[t] });
                                    });
                                })(t),
                            "number" == typeof o && o > 0
                                ? (function (t, i, n) {
                                      if (!t) return null;
                                      let r = {
                                          ...t,
                                          ...(t.breadcrumbs && { breadcrumbs: t.breadcrumbs.map((t) => ({ ...t, ...(t.data && { data: ta(t.data, i, n) }) })) }),
                                          ...(t.user && { user: ta(t.user, i, n) }),
                                          ...(t.contexts && { contexts: ta(t.contexts, i, n) }),
                                          ...(t.extra && { extra: ta(t.extra, i, n) }),
                                      };
                                      return (
                                          t.contexts && t.contexts.trace && r.contexts && ((r.contexts.trace = t.contexts.trace), t.contexts.trace.data && (r.contexts.trace.data = ta(t.contexts.trace.data, i, n))),
                                          t.spans && (r.spans = t.spans.map((t) => (t.data && (t.data = ta(t.data, i, n)), t))),
                                          r
                                      );
                                  })(t, o, c)
                                : t
                        )
                    );
                })(r, t, i, n).then((t) => {
                    if (null === t) return t;
                    let { propagationContext: i } = t.sdkProcessingMetadata || {};
                    if ((!t.contexts || !t.contexts.trace) && i) {
                        let { traceId: r, spanId: a, parentSpanId: s, dsc: o } = i;
                        t.contexts = { trace: { trace_id: r, span_id: a, parent_span_id: s }, ...t.contexts };
                        let c =
                            o ||
                            (function (t, i, n) {
                                let r = i.getOptions(),
                                    { publicKey: a } = i.getDsn() || {},
                                    { segment: s } = (n && n.getUser()) || {},
                                    o = eB({ environment: r.environment || tT, release: r.release, user_segment: s, public_key: a, trace_id: t });
                                return i.emit && i.emit("createDsc", o), o;
                            })(r, this, n);
                        t.sdkProcessingMetadata = { dynamicSamplingContext: c, ...t.sdkProcessingMetadata };
                    }
                    return t;
                })
            );
        }
        _captureEvent(t, i = {}, n) {
            return this._processEvent(t, i, n).then(
                (t) => t.event_id,
                (t) => {
                    if (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) {
                        let i = t;
                        "log" === i.logLevel ? e_.log(i.message) : e_.warn(i);
                    }
                }
            );
        }
        _processEvent(t, i, n) {
            let r = this.getOptions(),
                { sampleRate: a } = r;
            if (!this._isEnabled()) return to(new eD("SDK not enabled, will not capture event.", "log"));
            let s = tB(t),
                o = tU(t),
                c = t.type || "error",
                l = `before send for type \`${c}\``;
            if (o && "number" == typeof a && Math.random() > a) return this.recordDroppedEvent("sample_rate", "error", t), to(new eD(`Discarding event because it's not included in the random sample (sampling rate = ${a})`, "log"));
            let u = "replay_event" === c ? "replay" : c;
            return this._prepareEvent(t, i, n)
                .then((n) => {
                    if (null === n) throw (this.recordDroppedEvent("event_processor", u, t), new eD("An event processor returned `null`, will not send event.", "log"));
                    return i.data && !0 === i.data.__sentry__
                        ? n
                        : (function (t, i) {
                              let n = `${i} must return \`null\` or a valid event.`;
                              if (ef(t))
                                  return t.then(
                                      (t) => {
                                          if (!eh(t) && null !== t) throw new eD(n);
                                          return t;
                                      },
                                      (t) => {
                                          throw new eD(`${i} rejected with ${t}`);
                                      }
                                  );
                              if (!eh(t) && null !== t) throw new eD(n);
                              return t;
                          })(
                              (function (t, i, n) {
                                  let { beforeSend: r, beforeSendTransaction: a } = t;
                                  return tU(i) && r ? r(i, n) : tB(i) && a ? a(i, n) : i;
                              })(r, n, i),
                              l
                          );
                })
                .then((r) => {
                    if (null === r) throw (this.recordDroppedEvent("before_send", u, t), new eD(`${l} returned \`null\`, will not send event.`, "log"));
                    let a = n && n.getSession();
                    !s && a && this._updateSessionFromEvent(a, r);
                    let o = r.transaction_info;
                    return s && o && r.transaction !== t.transaction && (r.transaction_info = { ...o, source: "custom" }), this.sendEvent(r, i), r;
                })
                .then(null, (t) => {
                    throw t instanceof eD
                        ? t
                        : (this.captureException(t, { data: { __sentry__: !0 }, originalException: t }),
                          new eD(`Event processing pipeline threw an error, original event will not be sent. Details have been sent as a new event.
  Reason: ${t}`));
                });
        }
        _process(t) {
            this._numProcessing++,
                t.then(
                    (t) => (this._numProcessing--, t),
                    (t) => (this._numProcessing--, t)
                );
        }
        _sendEnvelope(t) {
            if (this._transport && this._dsn)
                return (
                    this.emit("beforeEnvelope", t),
                    this._transport.send(t).then(null, (t) => {
                        (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && e_.error("Error while sending event:", t);
                    })
                );
            (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && e_.error("Transport disabled");
        }
        _clearOutcomes() {
            let t = this._outcomes;
            return (
                (this._outcomes = {}),
                Object.keys(t).map((i) => {
                    let [n, r] = i.split(":");
                    return { reason: n, category: r, quantity: t[i] };
                })
            );
        }
    }
    function tU(t) {
        return void 0 === t.type;
    }
    function tB(t) {
        return "transaction" === t.type;
    }
    function t0(t, i) {
        if ("event" === i || "transaction" === i) return Array.isArray(t) ? t[1] : void 0;
    }
    let t9 = "7.60.1",
        tq;
    class tY {
        constructor() {
            tY.prototype.__init.call(this);
        }
        static __initStatic() {
            this.id = "FunctionToString";
        }
        __init() {
            this.name = tY.id;
        }
        setupOnce() {
            tq = Function.prototype.toString;
            try {
                Function.prototype.toString = function (...t) {
                    let i = eF(this) || this;
                    return tq.apply(i, t);
                };
            } catch {}
        }
    }
    tY.__initStatic();
    let t3 = [/^Script error\.?$/, /^Javascript error: Script error\.? on line 0$/],
        t2 = [/^.*healthcheck.*$/, /^.*healthy.*$/, /^.*live.*$/, /^.*ready.*$/, /^.*heartbeat.*$/, /^.*\/health$/, /^.*\/healthz$/];
    class tz {
        static __initStatic() {
            this.id = "InboundFilters";
        }
        __init() {
            this.name = tz.id;
        }
        constructor(t = {}) {
            (this._options = t), tz.prototype.__init.call(this);
        }
        setupOnce(t, i) {
            let n = (t) => {
                var n, r, a, s;
                let o = i();
                if (o) {
                    let c = o.getIntegration(tz);
                    if (c) {
                        let l = o.getClient(),
                            u = l ? l.getOptions() : {},
                            d = (function (t = {}, i = {}) {
                                return {
                                    allowUrls: [...(t.allowUrls || []), ...(i.allowUrls || [])],
                                    denyUrls: [...(t.denyUrls || []), ...(i.denyUrls || [])],
                                    ignoreErrors: [...(t.ignoreErrors || []), ...(i.ignoreErrors || []), ...(t.disableErrorDefaults ? [] : t3)],
                                    ignoreTransactions: [...(t.ignoreTransactions || []), ...(i.ignoreTransactions || []), ...(t.disableTransactionDefaults ? [] : t2)],
                                    ignoreInternal: void 0 === t.ignoreInternal || t.ignoreInternal,
                                };
                            })(c._options, u);
                        return (
                            (n = t),
                            (
                                (r = d).ignoreInternal &&
                                (function (t) {
                                    try {
                                        return "SentryError" === t.exception.values[0].type;
                                    } catch {}
                                    return !1;
                                })(n)
                                    ? ((typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) &&
                                          e_.warn(`Event dropped due to being internal Sentry Error.
  Event: ${tt(n)}`),
                                      1)
                                    : ((a = n),
                                      (s = r.ignoreErrors),
                                      !a.type &&
                                      s &&
                                      s.length &&
                                      (function (t) {
                                          if (t.message) return [t.message];
                                          if (t.exception) {
                                              let { values: i } = t.exception;
                                              try {
                                                  let { type: n = "", value: r = "" } = (i && i[i.length - 1]) || {};
                                                  return [`${r}`, `${n}: ${r}`];
                                              } catch {
                                                  return (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && e_.error(`Cannot extract message for event ${tt(t)}`), [];
                                              }
                                          }
                                          return [];
                                      })(a).some((t) => ey(t, s))
                                          ? ((typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) &&
                                                e_.warn(`Event dropped due to being matched by \`ignoreErrors\` option.
  Event: ${tt(n)}`),
                                            1)
                                          : !(function (t, i) {
                                                if ("transaction" !== t.type || !i || !i.length) return !1;
                                                let n = t.transaction;
                                                return !!n && ey(n, i);
                                            })(n, r.ignoreTransactions)
                                          ? !(function (t, i) {
                                                if (!i || !i.length) return !1;
                                                let n = tG(t);
                                                return !!n && ey(n, i);
                                            })(n, r.denyUrls)
                                              ? !(function (t, i) {
                                                    if (!i || !i.length) return !0;
                                                    let n = tG(t);
                                                    return !n || ey(n, i);
                                                })(n, r.allowUrls) &&
                                                ((typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) &&
                                                    e_.warn(`Event dropped due to not being matched by \`allowUrls\` option.
  Event: ${tt(n)}.
  Url: ${tG(n)}`),
                                                1)
                                              : ((typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) &&
                                                    e_.warn(`Event dropped due to being matched by \`denyUrls\` option.
  Event: ${tt(n)}.
  Url: ${tG(n)}`),
                                                1)
                                          : ((typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) &&
                                                e_.warn(`Event dropped due to being matched by \`ignoreTransactions\` option.
  Event: ${tt(n)}`),
                                            1))
                            )
                                ? null
                                : t
                        );
                    }
                }
                return t;
            };
            (n.id = this.name), t(n);
        }
    }
    function tG(t) {
        try {
            let i;
            try {
                i = t.exception.values[0].stacktrace.frames;
            } catch {}
            return i
                ? (function (t = []) {
                      for (let i = t.length - 1; i >= 0; i--) {
                          let n = t[i];
                          if (n && "<anonymous>" !== n.filename && "[native code]" !== n.filename) return n.filename || null;
                      }
                      return null;
                  })(i)
                : null;
        } catch {
            return (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && e_.error(`Cannot extract url for event ${tt(t)}`), null;
        }
    }
    tz.__initStatic();
    var t1 = Object.freeze({ __proto__: null, FunctionToString: tY, InboundFilters: tz });
    let tW = ek,
        tJ = 0;
    function t4() {
        return tJ > 0;
    }
    function tH(t, i = {}, n) {
        if ("function" != typeof t) return t;
        try {
            let r = t.__sentry_wrapped__;
            if (r) return r;
            if (eF(t)) return t;
        } catch {
            return t;
        }
        let a = function () {
            var r;
            let a = Array.prototype.slice.call(arguments);
            try {
                n && "function" == typeof n && n.apply(this, arguments);
                let s = a.map((t) => tH(t, i));
                return t.apply(this, s);
            } catch (o) {
                throw (
                    (tJ++,
                    setTimeout(() => {
                        tJ--;
                    }),
                    (r = (t) => {
                        var n;
                        t.addEventProcessor((t) => (i.mechanism && (ti(t, void 0, void 0), tn(t, i.mechanism)), (t.extra = { ...t.extra, arguments: a }), t)), (n = o), tP().captureException(n, { captureContext: void 0 });
                    }),
                    tP().withScope(r),
                    o)
                );
            }
        };
        try {
            for (let s in t) Object.prototype.hasOwnProperty.call(t, s) && (a[s] = t[s]);
        } catch {}
        eR(a, t), eN(t, "__sentry_wrapped__", a);
        try {
            Object.getOwnPropertyDescriptor(a, "name").configurable && Object.defineProperty(a, "name", { get: () => t.name });
        } catch {}
        return a;
    }
    function tK(t, i) {
        var n;
        let r,
            a = t7(t, i),
            s = { type: i && i.name, value: (r = (n = i) && n.message) ? (r.error && "string" == typeof r.error.message ? r.error.message : r) : "No error message" };
        return a.length && (s.stacktrace = { frames: a }), void 0 === s.type && "" === s.value && (s.value = "Unrecoverable error caught"), s;
    }
    function t6(t, i) {
        return { exception: { values: [tK(t, i)] } };
    }
    function t7(t, i) {
        let n = i.stacktrace || i.stack || "",
            r = (function (t) {
                if (t) {
                    if ("number" == typeof t.framesToPop) return t.framesToPop;
                    if (tQ.test(t.message)) return 1;
                }
                return 0;
            })(i);
        try {
            return t(n, r);
        } catch {}
        return [];
    }
    let tQ = /Minified React error #\d+;/i;
    function t5(t, i, n, r, a) {
        let s;
        if (ec(i) && i.error) return t6(t, i.error);
        if (el(i) || eo(i, "DOMException")) {
            let o = i;
            if ("stack" in i) s = t6(t, i);
            else {
                let c = o.name || (el(o) ? "DOMError" : "DOMException"),
                    l = o.message ? `${c}: ${o.message}` : c;
                ti((s = tX(t, l, n, r)), l);
            }
            return "code" in o && (s.tags = { ...s.tags, "DOMException.code": `${o.code}` }), s;
        }
        return es(i)
            ? t6(t, i)
            : eh(i) || ep(i)
            ? ((s = (function (t, i, n, r) {
                  let a = tP().getClient(),
                      s = a && a.getOptions().normalizeDepth,
                      o = {
                          exception: {
                              values: [
                                  {
                                      type: ep(i) ? i.constructor.name : r ? "UnhandledRejection" : "Error",
                                      value: (function t(i, { isUnhandledRejection: n }) {
                                          let r = (function (t, i = 40) {
                                                  let n = Object.keys(ej(t));
                                                  if ((n.sort(), !n.length)) return "[object has no keys]";
                                                  if (n[0].length >= i) return ev(n[0], i);
                                                  for (let r = n.length; r > 0; r--) {
                                                      let a = n.slice(0, r).join(", ");
                                                      if (!(a.length > i)) return r === n.length ? a : ev(a, i);
                                                  }
                                                  return "";
                                              })(i),
                                              a = n ? "promise rejection" : "exception";
                                          return ec(i)
                                              ? `Event \`ErrorEvent\` captured as ${a} with message \`${i.message}\``
                                              : ep(i)
                                              ? `Event \`${(function (t) {
                                                    try {
                                                        let i = Object.getPrototypeOf(t);
                                                        return i ? i.constructor.name : void 0;
                                                    } catch {}
                                                })(i)}\` (type=${i.type}) captured as ${a}`
                                              : `Object captured as ${a} with keys: ${r}`;
                                      })(i, { isUnhandledRejection: r }),
                                  },
                              ],
                          },
                          extra: {
                              __serialized__: (function t(i, n = 3, r = 102400) {
                                  var a, s;
                                  let o = ta(i, n);
                                  return (a = JSON.stringify((s = o))), ~-encodeURI(a).split(/%..|./).length > r ? t(i, n - 1, r) : o;
                              })(i, s),
                          },
                      };
                  if (n) {
                      let c = t7(t, n);
                      c.length && (o.exception.values[0].stacktrace = { frames: c });
                  }
                  return o;
              })(t, i, n, a)),
              tn(s, { synthetic: !0 }),
              s)
            : (ti((s = tX(t, i, n, r)), `${i}`, void 0), tn(s, { synthetic: !0 }), s);
    }
    function tX(t, i, n, r) {
        let a = { message: i };
        if (r && n) {
            let s = t7(t, n);
            s.length && (a.exception = { values: [{ value: i, stacktrace: { frames: s } }] });
        }
        return a;
    }
    let tZ = "Breadcrumbs";
    class ie {
        static __initStatic() {
            this.id = tZ;
        }
        __init() {
            this.name = ie.id;
        }
        constructor(t) {
            ie.prototype.__init.call(this), (this.options = { console: !0, dom: !0, fetch: !0, history: !0, sentry: !0, xhr: !0, ...t });
        }
        setupOnce() {
            var t;
            this.options.console && eW("console", it),
                this.options.dom &&
                    eW(
                        "dom",
                        ((t = this.options.dom),
                        function (i) {
                            var n;
                            let r,
                                a = "object" == typeof t ? t.serializeAttribute : void 0,
                                s = "object" == typeof t && "number" == typeof t.maxStringLength ? t.maxStringLength : void 0;
                            s && s > 1024 && ((typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && e_.warn(`\`dom.maxStringLength\` cannot exceed 1024, but a value of ${s} was configured. Sentry will use 1024 instead.`), (s = 1024)),
                                "string" == typeof a && (a = [a]);
                            try {
                                let o = i.event;
                                r = (n = o) && n.target ? eC(o.target, { keyAttrs: a, maxStringLength: s }) : eC(o, { keyAttrs: a, maxStringLength: s });
                            } catch {
                                r = "<unknown>";
                            }
                            0 !== r.length && tP().addBreadcrumb({ category: `ui.${i.name}`, message: r }, { event: i.event, name: i.name, global: i.global });
                        })
                    ),
                this.options.xhr && eW("xhr", ii),
                this.options.fetch && eW("fetch", ir),
                this.options.history && eW("history", ia);
        }
        addSentryBreadcrumb(t) {
            this.options.sentry && tP().addBreadcrumb({ category: "sentry." + ("transaction" === t.type ? "transaction" : "event"), event_id: t.event_id, level: t.level, message: tt(t) }, { event: t });
        }
    }
    function it(t) {
        var i;
        for (let n = 0; n < t.args.length; n++)
            if ("ref=Ref<" === t.args[n]) {
                t.args[n + 1] = "viewRef";
                break;
            }
        let r = { category: "console", data: { arguments: t.args, logger: "console" }, level: "warn" === (i = t.level) ? "warning" : tu.includes(i) ? i : "log", message: em(t.args, " ") };
        if ("assert" === t.level) {
            if (!1 !== t.args[0]) return;
            (r.message = `Assertion failed: ${em(t.args.slice(1), " ") || "console.assert"}`), (r.data.arguments = t.args.slice(1));
        }
        tP().addBreadcrumb(r, { input: t.args, level: t.level });
    }
    function ii(t) {
        let { startTimestamp: i, endTimestamp: n } = t,
            r = t.xhr[ez];
        if (!i || !n || !r) return;
        let { method: a, url: s, status_code: o, body: c } = r,
            l = { xhr: t.xhr, input: c, startTimestamp: i, endTimestamp: n };
        tP().addBreadcrumb({ category: "xhr", data: { method: a, url: s, status_code: o }, type: "http" }, l);
    }
    function ir(t) {
        let { startTimestamp: i, endTimestamp: n } = t;
        if (n && (!t.fetchData.url.match(/sentry_key/) || "POST" !== t.fetchData.method)) {
            if (t.error) {
                let r = t.fetchData,
                    a = { data: t.error, input: t.args, startTimestamp: i, endTimestamp: n };
                tP().addBreadcrumb({ category: "fetch", data: r, level: "error", type: "http" }, a);
            } else {
                let s = { ...t.fetchData, status_code: t.response && t.response.status },
                    o = { input: t.args, response: t.response, startTimestamp: i, endTimestamp: n };
                tP().addBreadcrumb({ category: "fetch", data: s, type: "http" }, o);
            }
        }
    }
    function ia(t) {
        let i = t.from,
            n = t.to,
            r = tl(tW.location.href),
            a = tl(i),
            s = tl(n);
        a.path || (a = r), r.protocol === s.protocol && r.host === s.host && (n = s.relative), r.protocol === a.protocol && r.host === a.host && (i = a.relative), tP().addBreadcrumb({ category: "navigation", data: { from: i, to: n } });
    }
    ie.__initStatic();
    class is extends tV {
        constructor(t) {
            let i = tW.SENTRY_SDK_SOURCE || "npm";
            (t._metadata = t._metadata || {}),
                (t._metadata.sdk = t._metadata.sdk || { name: "sentry.javascript.browser", packages: [{ name: `${i}:@sentry/browser`, version: t9 }], version: t9 }),
                super(t),
                t.sendClientReports &&
                    tW.document &&
                    tW.document.addEventListener("visibilitychange", () => {
                        "hidden" === tW.document.visibilityState && this._flushOutcomes();
                    });
        }
        eventFromException(t, i) {
            var n, r, a, s;
            let o;
            return (
                (n = this._options.stackParser),
                (r = t),
                (a = i),
                (s = this._options.attachStacktrace),
                (o = t5(n, r, (a && a.syntheticException) || void 0, s)),
                tn(o),
                (o.level = "error"),
                a && a.event_id && (o.event_id = a.event_id),
                ts(o)
            );
        }
        eventFromMessage(t, i = "info", n) {
            return (function (t, i, n = "info", r, a) {
                let s = tX(t, i, (r && r.syntheticException) || void 0, a);
                return (s.level = n), r && r.event_id && (s.event_id = r.event_id), ts(s);
            })(this._options.stackParser, t, i, n, this._options.attachStacktrace);
        }
        sendEvent(t, i) {
            let n = this.getIntegrationById(tZ);
            n && n.addSentryBreadcrumb && n.addSentryBreadcrumb(t), super.sendEvent(t, i);
        }
        captureUserFeedback(t) {
            if (!this._isEnabled()) return void ((typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && e_.warn("SDK not enabled, will not capture user feedback."));
            let i = (function (t, { metadata: i, tunnel: n, dsn: r }) {
                var a;
                return tm({ event_id: t.event_id, sent_at: new Date().toISOString(), ...(i && i.sdk && { sdk: { name: i.sdk.name, version: i.sdk.version } }), ...(!!n && !!r && { dsn: eI(r) }) }, [[{ type: "user_report" }, (a = t)]]);
            })(t, { metadata: this.getSdkMetadata(), dsn: this.getDsn(), tunnel: this.getOptions().tunnel });
            this._sendEnvelope(i);
        }
        _prepareEvent(t, i, n) {
            return (t.platform = t.platform || "javascript"), super._prepareEvent(t, i, n);
        }
        _flushOutcomes() {
            var t, i;
            let n = this._clearOutcomes();
            if (0 === n.length) return void ((typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && e_.log("No outcomes to send"));
            if (!this._dsn) return void ((typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && e_.log("No dsn provided, will not send outcomes"));
            (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && e_.log("Sending outcomes:", n);
            let r = ((t = n), tm((i = this._options.tunnel && eI(this._dsn)) ? { dsn: i } : {}, [[{ type: "client_report" }, { timestamp: tg(), discarded_events: t }]]));
            this._sendEnvelope(r);
        }
    }
    let io;
    function ic(
        t,
        i = (function () {
            if (io) return io;
            if (eY(tW.fetch)) return (io = tW.fetch.bind(tW));
            let t = tW.document,
                i = tW.fetch;
            if (t && "function" == typeof t.createElement)
                try {
                    let n = t.createElement("iframe");
                    (n.hidden = !0), t.head.appendChild(n);
                    let r = n.contentWindow;
                    r && r.fetch && (i = r.fetch), t.head.removeChild(n);
                } catch (a) {
                    (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && e_.warn("Could not create sandbox iframe for pure fetch check, bailing to window.fetch: ", a);
                }
            return (io = i.bind(tW));
        })()
    ) {
        let n = 0,
            r = 0;
        return (function t(
            i,
            n,
            r = (function (t) {
                let i = [];
                function n(t) {
                    return i.splice(i.indexOf(t), 1)[0];
                }
                return {
                    $: i,
                    add: function (r) {
                        if (!(void 0 === t || i.length < t)) return to(new eD("Not adding Promise because buffer limit was reached."));
                        let a = r();
                        return -1 === i.indexOf(a) && i.push(a), a.then(() => n(a)).then(null, () => n(a).then(null, () => {})), a;
                    },
                    drain: function (t) {
                        return new tc((n, r) => {
                            let a = i.length;
                            if (!a) return n(!0);
                            let s = setTimeout(() => {
                                t && t > 0 && n(!1);
                            }, t);
                            i.forEach((t) => {
                                ts(t).then(() => {
                                    --a || (clearTimeout(s), n(!0));
                                }, r);
                            });
                        });
                    },
                };
            })(i.bufferSize || 30)
        ) {
            let a = {};
            function s(t) {
                let s = [];
                if (
                    (t8(t, (t, n) => {
                        var r;
                        let o = tk[(r = n)];
                        if (
                            (function (t, i, n = Date.now()) {
                                var r;
                                return ((r = t)[i] || r.all || 0) > n;
                            })(a, o)
                        ) {
                            let c = t0(t, n);
                            i.recordDroppedEvent("ratelimit_backoff", o, c);
                        } else s.push(t);
                    }),
                    0 === s.length)
                )
                    return ts();
                let o = tm(t[0], s),
                    c = (t) => {
                        t8(o, (n, r) => {
                            var a;
                            let s = t0(n, r);
                            i.recordDroppedEvent(t, tk[(a = r)], s);
                        });
                    };
                return r
                    .add(() =>
                        n({
                            body: (function t(i, n) {
                                let [r, a] = i,
                                    s = JSON.stringify(r);
                                function o(t) {
                                    "string" == typeof s ? (s = "string" == typeof t ? s + t : [tb(s, n), t]) : s.push("string" == typeof t ? tb(t, n) : t);
                                }
                                for (let c of a) {
                                    let [l, u] = c;
                                    if (
                                        (o(`
  ${JSON.stringify(l)}
  `),
                                        "string" == typeof u || u instanceof Uint8Array)
                                    )
                                        o(u);
                                    else {
                                        let d;
                                        try {
                                            d = JSON.stringify(u);
                                        } catch {
                                            d = JSON.stringify(ta(u));
                                        }
                                        o(d);
                                    }
                                }
                                return "string" == typeof s
                                    ? s
                                    : (function (t) {
                                          let i = t.reduce((t, i) => t + i.length, 0),
                                              n = new Uint8Array(i),
                                              r = 0;
                                          for (let a of t) n.set(a, r), (r += a.length);
                                          return n;
                                      })(s);
                            })(o, i.textEncoder),
                        }).then(
                            (t) => (
                                void 0 !== t.statusCode && (t.statusCode < 200 || t.statusCode >= 300) && (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && e_.warn(`Sentry responded with status code ${t.statusCode} to sent event.`),
                                (a = (function (t, { statusCode: i, headers: n }, r = Date.now()) {
                                    let a = { ...t },
                                        s = n && n["x-sentry-rate-limits"],
                                        o = n && n["retry-after"];
                                    if (s)
                                        for (let c of s.trim().split(",")) {
                                            let [l, u] = c.split(":", 2),
                                                d = parseInt(l, 10),
                                                h = 1e3 * (isNaN(d) ? 60 : d);
                                            if (u) for (let p of u.split(";")) a[p] = r + h;
                                            else a.all = r + h;
                                        }
                                    else
                                        o
                                            ? (a.all =
                                                  r +
                                                  (function (t, i = Date.now()) {
                                                      let n = parseInt(`${t}`, 10);
                                                      if (!isNaN(n)) return 1e3 * n;
                                                      let r = Date.parse(`${t}`);
                                                      return isNaN(r) ? 6e4 : r - i;
                                                  })(o, r))
                                            : 429 === i && (a.all = r + 6e4);
                                    return a;
                                })(a, t)),
                                t
                            ),
                            (t) => {
                                throw (c("network_error"), t);
                            }
                        )
                    )
                    .then(
                        (t) => t,
                        (t) => {
                            if (t instanceof eD) return (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && e_.error("Skipped sending event because buffer is full."), c("queue_overflow"), ts();
                            throw t;
                        }
                    );
            }
            return (s.__sentry__baseTransport__ = !0), { send: s, flush: (t) => r.drain(t) };
        })(t, function (a) {
            let s = a.body.length;
            (n += s), r++;
            let o = { body: a.body, method: "POST", referrerPolicy: "origin", headers: t.headers, keepalive: n <= 6e4 && r < 15, ...t.fetchOptions };
            try {
                return i(t.url, o).then((t) => ((n -= s), r--, { statusCode: t.status, headers: { "x-sentry-rate-limits": t.headers.get("X-Sentry-Rate-Limits"), "retry-after": t.headers.get("Retry-After") } }));
            } catch (c) {
                return (io = void 0), (n -= s), r--, to(c);
            }
        });
    }
    class il {
        static __initStatic() {
            this.id = "GlobalHandlers";
        }
        __init() {
            this.name = il.id;
        }
        __init2() {
            this._installFunc = { onerror: iu, onunhandledrejection: id };
        }
        constructor(t) {
            il.prototype.__init.call(this), il.prototype.__init2.call(this), (this._options = { onerror: !0, onunhandledrejection: !0, ...t });
        }
        setupOnce() {
            var t;
            Error.stackTraceLimit = 50;
            let i = this._options;
            for (let n in i) {
                let r = this._installFunc[n];
                r && i[n] && ((t = n), (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && e_.log(`Global Handler attached: ${t}`), r(), (this._installFunc[n] = void 0));
            }
        }
    }
    function iu() {
        eW("error", (t) => {
            var i, n, r, a;
            let [s, o, c] = ig();
            if (!s.getIntegration(il)) return;
            let { msg: l, url: u, line: d, column: h, error: p } = t;
            if (t4() || (p && p.__sentry_own_request__)) return;
            let f,
                g,
                v,
                m =
                    void 0 === p && eu(l)
                        ? ((i = l),
                          (n = u),
                          (r = d),
                          (a = h),
                          (f = ec(i) ? i.message : i),
                          (g = "Error"),
                          (v = f.match(/^(?:[Uu]ncaught (?:exception: )?)?(?:((?:Eval|Internal|Range|Reference|Syntax|Type|URI|)Error): )?(.*)$/i)) && ((g = v[1]), (f = v[2])),
                          ih({ exception: { values: [{ type: g, value: f }] } }, n, r, a))
                        : ih(t5(o, p || l, void 0, c, !1), u, d, h);
            (m.level = "error"), ip(s, p, m, "onerror");
        });
    }
    function id() {
        eW("unhandledrejection", (t) => {
            let [i, n, r] = ig();
            if (!i.getIntegration(il)) return;
            let a = t;
            try {
                "reason" in t ? (a = t.reason) : "detail" in t && "reason" in t.detail && (a = t.detail.reason);
            } catch {}
            if (t4() || (a && a.__sentry_own_request__)) return !0;
            let s = ed(a) ? { exception: { values: [{ type: "UnhandledRejection", value: `Non-Error promise rejection captured with value: ${String(a)}` }] } } : t5(n, a, void 0, r, !0);
            (s.level = "error"), ip(i, a, s, "onunhandledrejection");
        });
    }
    function ih(t, i, n, r) {
        let a = (t.exception = t.exception || {}),
            s = (a.values = a.values || []),
            o = (s[0] = s[0] || {}),
            c = (o.stacktrace = o.stacktrace || {}),
            l = (c.frames = c.frames || []),
            u = isNaN(parseInt(r, 10)) ? void 0 : r,
            d = isNaN(parseInt(n, 10)) ? void 0 : n,
            h =
                eu(i) && i.length > 0
                    ? i
                    : (function () {
                          try {
                              return eT.document.location.href;
                          } catch {
                              return "";
                          }
                      })();
        return 0 === l.length && l.push({ colno: u, filename: h, function: "?", in_app: !0, lineno: d }), t;
    }
    function ip(t, i, n, r) {
        tn(n, { handled: !1, type: r }), t.captureEvent(n, { originalException: i });
    }
    function ig() {
        let t = tP(),
            i = t.getClient(),
            n = (i && i.getOptions()) || { stackParser: () => [], attachStacktrace: !1 };
        return [t, n.stackParser, n.attachStacktrace];
    }
    il.__initStatic();
    let iv = [
        "EventTarget",
        "Window",
        "Node",
        "ApplicationCache",
        "AudioTrackList",
        "ChannelMergerNode",
        "CryptoOperation",
        "EventSource",
        "FileReader",
        "HTMLUnknownElement",
        "IDBDatabase",
        "IDBRequest",
        "IDBTransaction",
        "KeyOperation",
        "MediaController",
        "MessagePort",
        "ModalWindow",
        "Notification",
        "SVGElementInstance",
        "Screen",
        "TextTrack",
        "TextTrackCue",
        "TextTrackList",
        "WebSocket",
        "WebSocketWorker",
        "Worker",
        "XMLHttpRequest",
        "XMLHttpRequestEventTarget",
        "XMLHttpRequestUpload",
    ];
    class im {
        static __initStatic() {
            this.id = "TryCatch";
        }
        __init() {
            this.name = im.id;
        }
        constructor(t) {
            im.prototype.__init.call(this), (this._options = { XMLHttpRequest: !0, eventTarget: !0, requestAnimationFrame: !0, setInterval: !0, setTimeout: !0, ...t });
        }
        setupOnce() {
            this._options.setTimeout && eO(tW, "setTimeout", iy),
                this._options.setInterval && eO(tW, "setInterval", iy),
                this._options.requestAnimationFrame && eO(tW, "requestAnimationFrame", i8),
                this._options.XMLHttpRequest && "XMLHttpRequest" in tW && eO(XMLHttpRequest.prototype, "send", ib);
            let t = this._options.eventTarget;
            t && (Array.isArray(t) ? t : iv).forEach(i$);
        }
    }
    function iy(t) {
        return function (...i) {
            let n = i[0];
            return (i[0] = tH(n, { mechanism: { data: { function: e9(t) }, handled: !0, type: "instrument" } })), t.apply(this, i);
        };
    }
    function i8(t) {
        return function (i) {
            return t.apply(this, [tH(i, { mechanism: { data: { function: "requestAnimationFrame", handler: e9(t) }, handled: !0, type: "instrument" } })]);
        };
    }
    function ib(t) {
        return function (...i) {
            let n = this;
            return (
                ["onload", "onerror", "onprogress", "onreadystatechange"].forEach((t) => {
                    t in n &&
                        "function" == typeof n[t] &&
                        eO(n, t, function (i) {
                            let n = { mechanism: { data: { function: t, handler: e9(i) }, handled: !0, type: "instrument" } },
                                r = eF(i);
                            return r && (n.mechanism.data.handler = e9(r)), tH(i, n);
                        });
                }),
                t.apply(this, i)
            );
        };
    }
    function i$(t) {
        let i = tW,
            n = i[t] && i[t].prototype;
        n &&
            n.hasOwnProperty &&
            n.hasOwnProperty("addEventListener") &&
            (eO(n, "addEventListener", function (i) {
                return function (n, r, a) {
                    try {
                        "function" == typeof r.handleEvent && (r.handleEvent = tH(r.handleEvent, { mechanism: { data: { function: "handleEvent", handler: e9(r), target: t }, handled: !0, type: "instrument" } }));
                    } catch {}
                    return i.apply(this, [n, tH(r, { mechanism: { data: { function: "addEventListener", handler: e9(r), target: t }, handled: !0, type: "instrument" } }), a]);
                };
            }),
            eO(n, "removeEventListener", function (t) {
                return function (i, n, r) {
                    let a = n;
                    try {
                        let s = a && a.__sentry_wrapped__;
                        s && t.call(this, i, s, r);
                    } catch {}
                    return t.call(this, i, a, r);
                };
            }));
    }
    im.__initStatic();
    class ik {
        static __initStatic() {
            this.id = "LinkedErrors";
        }
        __init() {
            this.name = ik.id;
        }
        constructor(t = {}) {
            ik.prototype.__init.call(this), (this._key = t.key || "cause"), (this._limit = t.limit || 5);
        }
        setupOnce(t, i) {
            t((t, n) => {
                let r = i(),
                    a = r.getClient(),
                    s = r.getIntegration(ik);
                if (!a || !s) return t;
                let o = a.getOptions();
                return (
                    (function t(i, n, r = 250, a, s, o, c) {
                        var l, u;
                        if (!(o.exception && o.exception.values && c && eg(c.originalException, Error))) return;
                        let d = o.exception.values.length > 0 ? o.exception.values[o.exception.values.length - 1] : void 0;
                        d &&
                            (o.exception.values =
                                ((l = (function t(i, n, r, a, s, o, c, l) {
                                    if (o.length >= r + 1) return o;
                                    let u = [...o];
                                    if (eg(a[s], Error)) {
                                        e8(c, l);
                                        let d = i(n, a[s]),
                                            h = u.length;
                                        eb(d, s, h, l), (u = t(i, n, r, a[s], s, [d, ...u], d, h));
                                    }
                                    return (
                                        Array.isArray(a.errors) &&
                                            a.errors.forEach((a, o) => {
                                                if (eg(a, Error)) {
                                                    e8(c, l);
                                                    let d = i(n, a),
                                                        h = u.length;
                                                    eb(d, `errors[${o}]`, h, l), (u = t(i, n, r, a, s, [d, ...u], d, h));
                                                }
                                            }),
                                        u
                                    );
                                })(i, n, s, c.originalException, a, o.exception.values, d, 0)),
                                (u = r),
                                l.map((t) => (t.value && (t.value = ev(t.value, u)), t))));
                    })(tK, o.stackParser, o.maxValueLength, s._key, s._limit, t, n),
                    t
                );
            });
        }
    }
    ik.__initStatic();
    class iS {
        constructor() {
            iS.prototype.__init.call(this);
        }
        static __initStatic() {
            this.id = "HttpContext";
        }
        __init() {
            this.name = iS.id;
        }
        setupOnce() {
            tA((t) => {
                if (tP().getIntegration(iS)) {
                    if (!tW.navigator && !tW.location && !tW.document) return t;
                    let i = (t.request && t.request.url) || (tW.location && tW.location.href),
                        { referrer: n } = tW.document || {},
                        { userAgent: r } = tW.navigator || {},
                        a = { ...(t.request && t.request.headers), ...(n && { Referer: n }), ...(r && { "User-Agent": r }) },
                        s = { ...t.request, ...(i && { url: i }), headers: a };
                    return { ...t, request: s };
                }
                return t;
            });
        }
    }
    iS.__initStatic();
    class iw {
        constructor() {
            iw.prototype.__init.call(this);
        }
        static __initStatic() {
            this.id = "Dedupe";
        }
        __init() {
            this.name = iw.id;
        }
        setupOnce(t, i) {
            let n = (t) => {
                var n, r, a, s, o, c;
                if (t.type) return t;
                let l = i().getIntegration(iw);
                if (l) {
                    try {
                        let u, d, h, p;
                        if (
                            ((n = t),
                            (r = l._previousEvent) &&
                                ((a = n),
                                (s = r),
                                (u = a.message),
                                (d = s.message),
                                !((!u && !d) || (u && !d) || (!u && d) || u !== d || !iC(a, s) || !iT(a, s)) || ((o = n), (c = r), (h = iE(c)), (p = iE(o)), h && p && h.type === p.type && h.value === p.value && iC(o, c) && iT(o, c))))
                        )
                            return (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && e_.warn("Event dropped due to being a duplicate of previously captured event."), null;
                    } catch {}
                    return (l._previousEvent = t);
                }
                return t;
            };
            (n.id = this.name), t(n);
        }
    }
    function iT(t, i) {
        let n = iM(t),
            r = iM(i);
        if (!n && !r) return !0;
        if ((n && !r) || (!n && r) || r.length !== n.length) return !1;
        for (let a = 0; a < r.length; a++) {
            let s = r[a],
                o = n[a];
            if (s.filename !== o.filename || s.lineno !== o.lineno || s.colno !== o.colno || s.function !== o.function) return !1;
        }
        return !0;
    }
    function iC(t, i) {
        let n = t.fingerprint,
            r = i.fingerprint;
        if (!n && !r) return !0;
        if ((n && !r) || (!n && r)) return !1;
        try {
            return n.join("") === r.join("");
        } catch {
            return !1;
        }
    }
    function iE(t) {
        return t.exception && t.exception.values && t.exception.values[0];
    }
    function iM(t) {
        let i = t.exception;
        if (i)
            try {
                return i.values[0].stacktrace.frames;
            } catch {
                return;
            }
    }
    iw.__initStatic();
    var iA = Object.freeze({ __proto__: null, Breadcrumbs: ie, Dedupe: iw, GlobalHandlers: il, HttpContext: iS, LinkedErrors: ik, TryCatch: im });
    let iL = {};
    tW.Sentry && tW.Sentry.Integrations && (iL = tW.Sentry.Integrations);
    let i_ = { ...iL, ...t1, ...iA };
    var ix = "loading",
        iI = "loaded",
        iP = "joining-meeting",
        iD = "joined-meeting",
        iO = "left-meeting",
        iN = "error",
        iR = "unknown",
        iF = "full",
        ij = "base",
        iV = "iframe-ready-for-launch-config",
        iU = "iframe-launch-config",
        iB = "theme-updated",
        i0 = "loading",
        i9 = "load-attempt-failed",
        iq = "loaded",
        iY = "started-camera",
        i3 = "camera-error",
        i2 = "joining-meeting",
        iz = "joined-meeting",
        iG = "left-meeting",
        i1 = "available-devices-updated",
        iW = "participant-joined",
        iJ = "participant-updated",
        i4 = "participant-left",
        iH = "participant-counts-updated",
        iK = "access-state-updated",
        i6 = "meeting-session-summary-updated",
        i7 = "meeting-session-state-updated",
        iQ = "waiting-participant-added",
        i5 = "waiting-participant-updated",
        iX = "waiting-participant-removed",
        iZ = "track-started",
        ne = "track-stopped",
        nt = "transcription-started",
        ni = "transcription-stopped",
        nn = "transcription-error",
        nr = "recording-started",
        na = "recording-stopped",
        ns = "recording-stats",
        no = "recording-error",
        nc = "recording-upload-completed",
        nl = "recording-data",
        nu = "app-message",
        nd = "transcription-message",
        nh = "remote-media-player-started",
        np = "remote-media-player-updated",
        nf = "remote-media-player-stopped",
        ng = "local-screen-share-started",
        nv = "local-screen-share-stopped",
        nm = "local-screen-share-canceled",
        ny = "active-speaker-change",
        n8 = "active-speaker-mode-change",
        nb = "network-quality-change",
        n$ = "network-connection",
        nk = "cpu-load-change",
        nS = "face-counts-updated",
        nw = "fullscreen",
        nT = "exited-fullscreen",
        nC = "live-streaming-started",
        nE = "live-streaming-updated",
        nM = "live-streaming-stopped",
        nA = "live-streaming-error",
        nL = "lang-updated",
        n_ = "receive-settings-updated",
        nx = "input-settings-updated",
        nI = "nonfatal-error",
        nP = "error",
        nD = "iframe-call-message",
        nO = "local-screen-start",
        nN = "daily-method-update-live-streaming-endpoints",
        nR = "transmit-log",
        nF = "daily-custom-track",
        nj = { NONE: "none", BGBLUR: "background-blur", BGIMAGE: "background-image", FACE_DETECTION: "face-detection" },
        nV = { NONE: "none", NOISE_CANCELLATION: "noise-cancellation" },
        nU = { PLAY: "play", PAUSE: "pause" },
        nB = ["jpg", "png", "jpeg"];
    function n0() {
        return !n9() && "u" > typeof window && window.navigator && window.navigator.userAgent ? window.navigator.userAgent : "";
    }
    function n9() {
        return "u" > typeof navigator && navigator.product && "ReactNative" === navigator.product;
    }
    function nq() {
        return navigator && navigator.mediaDevices && navigator.mediaDevices.getUserMedia;
    }
    function nY() {
        if (n9() || !document) return !1;
        var t = document.createElement("iframe");
        return !!t.requestFullscreen || !!t.webkitRequestFullscreen;
    }
    var n3 = (function () {
        try {
            var t = document.createElement("canvas"),
                i = null != t.getContext("webgl2");
            return t.remove(), i;
        } catch {
            return !1;
        }
    })();
    function n2() {
        var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        return (
            !n9() &&
            !!n3 &&
            (t
                ? !nW() && ["Chrome", "Firefox"].includes(nJ())
                : (function () {
                      if (nW()) return !1;
                      var t = nJ();
                      if ("Safari" === t) {
                          var i = n6();
                          if (i.major < 15 || (15 === i.major && i.minor < 4)) return !1;
                      }
                      return "Chrome" === t ? nH().major >= 77 : "Firefox" === t ? n7().major >= 97 : ["Chrome", "Firefox", "Safari"].includes(t);
                  })())
        );
    }
    var nz = ["Chrome", "Firefox"];
    function nG() {
        return !n9() && !nW() && "u" > typeof AudioWorkletNode && nz.includes(nJ());
    }
    function n1() {
        return (
            nq() &&
            !(function () {
                var t,
                    i = nJ();
                if (!n0()) return !0;
                switch (i) {
                    case "Chrome":
                        return (t = nH()).major && t.major > 0 && t.major < 75;
                    case "Firefox":
                        return (t = n7()).major < 91;
                    case "Safari":
                        return (t = n6()).major < 13 || (13 === t.major && t.minor < 1);
                    default:
                        return !0;
                }
            })()
        );
    }
    function nW() {
        var t,
            i,
            n = n0(),
            r = n.match(/Mac/) && (!n9() && "u" > typeof window && null !== (t = window) && void 0 !== t && null !== (i = t.navigator) && void 0 !== i && i.maxTouchPoints ? window.navigator.maxTouchPoints : 0) >= 5;
        return !!(n.match(/Mobi/) || n.match(/Android/) || r) || !!n0().match(/DailyAnd\//) || void 0;
    }
    function nJ() {
        if ("u" > typeof window) {
            var t = n0();
            return nK()
                ? "Safari"
                : t.indexOf("Edge") > -1
                ? "Edge"
                : t.match(/Chrome\//)
                ? "Chrome"
                : t.indexOf("Safari") > -1
                ? "Safari"
                : t.indexOf("Firefox") > -1
                ? "Firefox"
                : t.indexOf("MSIE") > -1 || t.indexOf(".NET") > -1
                ? "IE"
                : "Unknown Browser";
        }
    }
    function n4() {
        switch (nJ()) {
            case "Chrome":
                return nH();
            case "Safari":
                return n6();
            case "Firefox":
                return n7();
            case "Edge":
                return (function () {
                    var t = 0,
                        i = 0;
                    if ("u" > typeof window) {
                        var n = n0().match(/Edge\/(\d+).(\d+)/);
                        if (n)
                            try {
                                (t = parseInt(n[1])), (i = parseInt(n[2]));
                            } catch {}
                    }
                    return { major: t, minor: i };
                })();
        }
    }
    function nH() {
        var t = 0,
            i = 0,
            n = 0,
            r = 0,
            a = !1;
        if ("u" > typeof window) {
            var s = n0(),
                o = s.match(/Chrome\/(\d+).(\d+).(\d+).(\d+)/);
            if (o)
                try {
                    (t = parseInt(o[1])), (i = parseInt(o[2])), (n = parseInt(o[3])), (r = parseInt(o[4])), (a = s.indexOf("OPR/") > -1);
                } catch {}
        }
        return { major: t, minor: i, build: n, patch: r, opera: a };
    }
    function nK() {
        return !!n0().match(/iPad|iPhone|iPod/i) && nq();
    }
    function n6() {
        var t = 0,
            i = 0,
            n = 0;
        if ("u" > typeof window) {
            var r = n0().match(/Version\/(\d+).(\d+)(.(\d+))?/);
            if (r)
                try {
                    (t = parseInt(r[1])), (i = parseInt(r[2])), (n = parseInt(r[4]));
                } catch {}
            else nK() && ((t = 14), (i = 0), (n = 3));
        }
        return { major: t, minor: i, point: n };
    }
    function n7() {
        var t = 0,
            i = 0;
        if ("u" > typeof window) {
            var n = n0().match(/Firefox\/(\d+).(\d+)/);
            if (n)
                try {
                    (t = parseInt(n[1])), (i = parseInt(n[2]));
                } catch {}
        }
        return { major: t, minor: i };
    }
    var nQ = (function () {
        function t() {
            s(this, t);
        }
        return (
            u(t, [
                {
                    key: "addListenerForMessagesFromCallMachine",
                    value: function (t, i, n) {
                        et();
                    },
                },
                {
                    key: "addListenerForMessagesFromDailyJs",
                    value: function (t, i, n) {
                        et();
                    },
                },
                {
                    key: "sendMessageToCallMachine",
                    value: function (t, i, n, r) {
                        et();
                    },
                },
                {
                    key: "sendMessageToDailyJs",
                    value: function (t, i) {
                        et();
                    },
                },
                {
                    key: "removeListener",
                    value: function (t) {
                        et();
                    },
                },
            ]),
            t
        );
    })();
    function n5(t, i) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(t);
            i &&
                (r = r.filter(function (i) {
                    return Object.getOwnPropertyDescriptor(t, i).enumerable;
                })),
                n.push.apply(n, r);
        }
        return n;
    }
    function nX(t) {
        for (var i = 1; i < arguments.length; i++) {
            var n = null != arguments[i] ? arguments[i] : {};
            i % 2
                ? n5(Object(n), !0).forEach(function (i) {
                      v(t, i, n[i]);
                  })
                : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
                : n5(Object(n)).forEach(function (i) {
                      Object.defineProperty(t, i, Object.getOwnPropertyDescriptor(n, i));
                  });
        }
        return t;
    }
    var nZ = (function (t) {
            p(a, nQ);
            var i,
                n,
                r =
                    ((i = a),
                    (n = (function () {
                        if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
                        if ("function" == typeof Proxy) return !0;
                        try {
                            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
                        } catch {
                            return !1;
                        }
                    })()),
                    function () {
                        var t,
                            r = g(i);
                        if (n) {
                            var a = g(this).constructor;
                            t = Reflect.construct(r, arguments, a);
                        } else t = r.apply(this, arguments);
                        return f(this, t);
                    });
            function a() {
                var t;
                return s(this, a), ((t = r.call(this))._wrappedListeners = {}), (t._messageCallbacks = {}), t;
            }
            return (
                u(a, [
                    {
                        key: "addListenerForMessagesFromCallMachine",
                        value: function (t, i, n) {
                            var r = this,
                                a = function (a) {
                                    if (a.data && "iframe-call-message" === a.data.what && (!a.data.callFrameId || a.data.callFrameId === i) && (!a.data.from || "module" !== a.data.from)) {
                                        var s = nX({}, a.data);
                                        if ((delete s.from, s.callbackStamp && r._messageCallbacks[s.callbackStamp])) {
                                            var o = s.callbackStamp;
                                            r._messageCallbacks[o].call(n, s), delete r._messageCallbacks[o];
                                        }
                                        delete s.what, delete s.callbackStamp, t.call(n, s);
                                    }
                                };
                            (this._wrappedListeners[t] = a), window.addEventListener("message", a);
                        },
                    },
                    {
                        key: "addListenerForMessagesFromDailyJs",
                        value: function (t, i, n) {
                            var r = function (r) {
                                if (!(!r.data || r.data.what !== nD || !r.data.action || (r.data.from && "module" !== r.data.from) || (r.data.callFrameId && i && r.data.callFrameId !== i))) {
                                    var a = r.data;
                                    t.call(n, a);
                                }
                            };
                            (this._wrappedListeners[t] = r), window.addEventListener("message", r);
                        },
                    },
                    {
                        key: "sendMessageToCallMachine",
                        value: function (t, i, n, r) {
                            if (!r) throw Error("undefined callFrameId. Are you trying to use a DailyCall instance previously destroyed?");
                            var a = nX({}, t);
                            if (((a.what = nD), (a.from = "module"), (a.callFrameId = r), i)) {
                                var s = ee();
                                (this._messageCallbacks[s] = i), (a.callbackStamp = s);
                            }
                            var o = n ? n.contentWindow : window,
                                c = this._callMachineTargetOrigin(n);
                            c && o.postMessage(a, c);
                        },
                    },
                    {
                        key: "sendMessageToDailyJs",
                        value: function (t, i) {
                            (t.what = nD), (t.callFrameId = i), (t.from = "embedded"), window.postMessage(t, this._targetOriginFromWindowLocation());
                        },
                    },
                    {
                        key: "removeListener",
                        value: function (t) {
                            var i = this._wrappedListeners[t];
                            i && (window.removeEventListener("message", i), delete this._wrappedListeners[t]);
                        },
                    },
                    {
                        key: "forwardPackagedMessageToCallMachine",
                        value: function (t, i, n) {
                            var r = nX({}, t);
                            r.callFrameId = n;
                            var a = i ? i.contentWindow : window,
                                s = this._callMachineTargetOrigin(i);
                            s && a.postMessage(r, s);
                        },
                    },
                    {
                        key: "addListenerForPackagedMessagesFromCallMachine",
                        value: function (t, i) {
                            var n = function (n) {
                                !n.data || "iframe-call-message" !== n.data.what || (n.data.callFrameId && n.data.callFrameId !== i) || (n.data.from && "module" === n.data.from) || t(n.data);
                            };
                            return (this._wrappedListeners[t] = n), window.addEventListener("message", n), t;
                        },
                    },
                    {
                        key: "removeListenerForPackagedMessagesFromCallMachine",
                        value: function (t) {
                            var i = this._wrappedListeners[t];
                            i && (window.removeEventListener("message", i), delete this._wrappedListeners[t]);
                        },
                    },
                    {
                        key: "_callMachineTargetOrigin",
                        value: function (t) {
                            return t ? (t.src ? new URL(t.src).origin : void 0) : this._targetOriginFromWindowLocation();
                        },
                    },
                    {
                        key: "_targetOriginFromWindowLocation",
                        value: function () {
                            return "file:" === window.location.protocol ? "*" : window.location.origin;
                        },
                    },
                ]),
                a
            );
        })(),
        re = (function (t) {
            p(a, nQ);
            var i,
                n,
                r =
                    ((i = a),
                    (n = (function () {
                        if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
                        if ("function" == typeof Proxy) return !0;
                        try {
                            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
                        } catch {
                            return !1;
                        }
                    })()),
                    function () {
                        var t,
                            r = g(i);
                        if (n) {
                            var a = g(this).constructor;
                            t = Reflect.construct(r, arguments, a);
                        } else t = r.apply(this, arguments);
                        return f(this, t);
                    });
            function a() {
                var t;
                return (
                    s(this, a),
                    (t = r.call(this)),
                    (global.callMachineToDailyJsEmitter = global.callMachineToDailyJsEmitter || new S.EventEmitter()),
                    (global.dailyJsToCallMachineEmitter = global.dailyJsToCallMachineEmitter || new S.EventEmitter()),
                    (t._wrappedListeners = {}),
                    (t._messageCallbacks = {}),
                    t
                );
            }
            return (
                u(a, [
                    {
                        key: "addListenerForMessagesFromCallMachine",
                        value: function (t, i, n) {
                            this._addListener(t, global.callMachineToDailyJsEmitter, n, "received call machine message");
                        },
                    },
                    {
                        key: "addListenerForMessagesFromDailyJs",
                        value: function (t, i, n) {
                            this._addListener(t, global.dailyJsToCallMachineEmitter, n, "received daily-js message");
                        },
                    },
                    {
                        key: "sendMessageToCallMachine",
                        value: function (t, i) {
                            this._sendMessage(t, global.dailyJsToCallMachineEmitter, "sending message to call machine", i);
                        },
                    },
                    {
                        key: "sendMessageToDailyJs",
                        value: function (t) {
                            this._sendMessage(t, global.callMachineToDailyJsEmitter, "sending message to daily-js");
                        },
                    },
                    {
                        key: "removeListener",
                        value: function (t) {
                            var i = this._wrappedListeners[t];
                            i && (global.callMachineToDailyJsEmitter.removeListener("message", i), global.dailyJsToCallMachineEmitter.removeListener("message", i), delete this._wrappedListeners[t]);
                        },
                    },
                    {
                        key: "_addListener",
                        value: function (t, i, n, r) {
                            var a = this,
                                s = function (i) {
                                    if (i.callbackStamp && a._messageCallbacks[i.callbackStamp]) {
                                        var r = i.callbackStamp;
                                        a._messageCallbacks[r].call(n, i), delete a._messageCallbacks[r];
                                    }
                                    t.call(n, i);
                                };
                            (this._wrappedListeners[t] = s), i.addListener("message", s);
                        },
                    },
                    {
                        key: "_sendMessage",
                        value: function (t, i, n, r) {
                            if (r) {
                                var a = ee();
                                (this._messageCallbacks[a] = r), (t.callbackStamp = a);
                            }
                            i.emit("message", t);
                        },
                    },
                ]),
                a
            );
        })(),
        rt = "replace",
        ri = "shallow-merge",
        rn = [rt, ri],
        rr = (function () {
            function t() {
                var i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    n = i.data,
                    r = i.mergeStrategy,
                    a = void 0 === r ? rt : r;
                s(this, t), t._validateMergeStrategy(a), t._validateData(n, a), (this.mergeStrategy = a), (this.data = n);
            }
            return (
                u(
                    t,
                    [
                        {
                            key: "isNoOp",
                            value: function () {
                                return t.isNoOpUpdate(this.data, this.mergeStrategy);
                            },
                        },
                    ],
                    [
                        {
                            key: "isNoOpUpdate",
                            value: function (t, i) {
                                return 0 === Object.keys(t).length && i === ri;
                            },
                        },
                        {
                            key: "_validateMergeStrategy",
                            value: function (t) {
                                if (!rn.includes(t)) throw Error("Unrecognized mergeStrategy provided. Options are: [".concat(rn, "]"));
                            },
                        },
                        {
                            key: "_validateData",
                            value: function (t, i) {
                                if (
                                    !(function (t) {
                                        if (null == t || "object" !== o(t)) return !1;
                                        var i = Object.getPrototypeOf(t);
                                        return null == i || i === Object.prototype;
                                    })(t)
                                )
                                    throw Error("Meeting session data must be a plain (map-like) object");
                                try {
                                    if (((n = JSON.stringify(t)), i === rt)) {
                                        var n,
                                            r = JSON.parse(n);
                                        V(r, t) || console.warn("The meeting session data provided will be modified when serialized.", r, t);
                                    } else if (i === ri) {
                                        for (var a in t)
                                            if (Object.hasOwnProperty.call(t, a) && void 0 !== t[a]) {
                                                var s = JSON.parse(JSON.stringify(t[a]));
                                                V(t[a], s) || console.warn("At least one key in the meeting session data provided will be modified when serialized.", s, t[a]);
                                            }
                                    }
                                } catch (c) {
                                    throw Error("Meeting session data must be serializable to JSON: ".concat(c));
                                }
                                if (n.length > 102400) throw Error("Meeting session data is too large (".concat(n.length, " characters). Maximum size suppported is ").concat(102400, "."));
                            },
                        },
                    ]
                ),
                t
            );
        })();
    function ra(t, i, n) {
        return (ra = !(function () {
            if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
            } catch {
                return !1;
            }
        })()
            ? function (t, i, n) {
                  var r = [null];
                  r.push.apply(r, i);
                  var a = new (Function.bind.apply(t, r))();
                  return n && h(a, n.prototype), a;
              }
            : Reflect.construct.bind()).apply(null, arguments);
    }
    function rs(t) {
        var i = "function" == typeof Map ? new Map() : void 0;
        return (rs = function (t) {
            var n;
            if (null === t || ((n = t), -1 === Function.toString.call(n).indexOf("[native code]"))) return t;
            if ("function" != typeof t) throw TypeError("Super expression must either be null or a function");
            if (void 0 !== i) {
                if (i.has(t)) return i.get(t);
                i.set(t, r);
            }
            function r() {
                return ra(t, arguments, g(this).constructor);
            }
            return (r.prototype = Object.create(t.prototype, { constructor: { value: r, enumerable: !1, writable: !0, configurable: !0 } })), h(r, t);
        })(t);
    }
    function ro(t) {
        var i,
            n = null === (i = window._daily) || void 0 === i ? void 0 : i.pendings;
        if (n) {
            var r = n.indexOf(t);
            -1 !== r && n.splice(r, 1);
        }
    }
    var rc = (function () {
            function t(i) {
                s(this, t), (this._currentLoad = null), (this._callFrameId = i);
            }
            return (
                u(t, [
                    {
                        key: "load",
                        value: function () {
                            var t,
                                i = this,
                                n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                r = arguments.length > 1 ? arguments[1] : void 0,
                                a = arguments.length > 2 ? arguments[2] : void 0;
                            if (this.loaded) return window._daily.instances[this._callFrameId].callMachine.reset(), void r(!0);
                            (t = this._callFrameId),
                                window._daily.pendings.push(t),
                                this._currentLoad && this._currentLoad.cancel(),
                                (this._currentLoad = new rl(
                                    n,
                                    function () {
                                        r(!1);
                                    },
                                    function (t, n) {
                                        n || ro(i._callFrameId), a(t, n);
                                    }
                                )),
                                this._currentLoad.start();
                        },
                    },
                    {
                        key: "cancel",
                        value: function () {
                            this._currentLoad && this._currentLoad.cancel(), ro(this._callFrameId);
                        },
                    },
                    {
                        key: "loaded",
                        get: function () {
                            return this._currentLoad && this._currentLoad.succeeded;
                        },
                    },
                ]),
                t
            );
        })(),
        rl = (function () {
            function t() {
                var i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    n = arguments.length > 1 ? arguments[1] : void 0,
                    r = arguments.length > 2 ? arguments[2] : void 0;
                s(this, t), (this._attemptsRemaining = 3), (this._currentAttempt = null), (this._dailyConfig = i), (this._successCallback = n), (this._failureCallback = r);
            }
            return (
                u(t, [
                    {
                        key: "start",
                        value: function () {
                            var t = this;
                            this._currentAttempt ||
                                ((this._currentAttempt = new rd(this._dailyConfig, this._successCallback, function i(n) {
                                    t._currentAttempt.cancelled ||
                                        (t._attemptsRemaining--,
                                        t._failureCallback(n, t._attemptsRemaining > 0),
                                        t._attemptsRemaining <= 0 ||
                                            setTimeout(function () {
                                                t._currentAttempt.cancelled || ((t._currentAttempt = new rd(t._dailyConfig, t._successCallback, i)), t._currentAttempt.start());
                                            }, 3e3));
                                })),
                                this._currentAttempt.start());
                        },
                    },
                    {
                        key: "cancel",
                        value: function () {
                            this._currentAttempt && this._currentAttempt.cancel();
                        },
                    },
                    {
                        key: "cancelled",
                        get: function () {
                            return this._currentAttempt && this._currentAttempt.cancelled;
                        },
                    },
                    {
                        key: "succeeded",
                        get: function () {
                            return this._currentAttempt && this._currentAttempt.succeeded;
                        },
                    },
                ]),
                t
            );
        })(),
        ru = (function (t) {
            p(a, rs(Error));
            var i,
                n,
                r =
                    ((i = a),
                    (n = (function () {
                        if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
                        if ("function" == typeof Proxy) return !0;
                        try {
                            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
                        } catch {
                            return !1;
                        }
                    })()),
                    function () {
                        var t,
                            r = g(i);
                        if (n) {
                            var a = g(this).constructor;
                            t = Reflect.construct(r, arguments, a);
                        } else t = r.apply(this, arguments);
                        return f(this, t);
                    });
            function a() {
                return s(this, a), r.apply(this, arguments);
            }
            return u(a);
        })(),
        rd = (function () {
            var t;
            function i(t, n, r) {
                s(this, i), (this._loadAttemptImpl = n9() || !t.avoidEval ? new rh(t, n, r) : new rp(t, n, r));
            }
            return (
                u(i, [
                    {
                        key: "start",
                        value:
                            ((t = y(function* () {
                                return this._loadAttemptImpl.start();
                            })),
                            function () {
                                return t.apply(this, arguments);
                            }),
                    },
                    {
                        key: "cancel",
                        value: function () {
                            this._loadAttemptImpl.cancel();
                        },
                    },
                    {
                        key: "cancelled",
                        get: function () {
                            return this._loadAttemptImpl.cancelled;
                        },
                    },
                    {
                        key: "succeeded",
                        get: function () {
                            return this._loadAttemptImpl.succeeded;
                        },
                    },
                ]),
                i
            );
        })(),
        rh = (function () {
            var t, i, n, r;
            function a(t, i, n) {
                s(this, a),
                    (this.cancelled = !1),
                    (this.succeeded = !1),
                    (this._networkTimedOut = !1),
                    (this._networkTimeout = null),
                    (this._iosCache = "u" > typeof iOSCallObjectBundleCache && iOSCallObjectBundleCache),
                    (this._refetchHeaders = null),
                    (this._dailyConfig = t),
                    (this._successCallback = i),
                    (this._failureCallback = n);
            }
            return (
                u(a, [
                    {
                        key: "start",
                        value:
                            ((r = y(function* () {
                                var t = en(this._dailyConfig);
                                (yield this._tryLoadFromIOSCache(t)) || this._loadFromNetwork(t);
                            })),
                            function () {
                                return r.apply(this, arguments);
                            }),
                    },
                    {
                        key: "cancel",
                        value: function () {
                            clearTimeout(this._networkTimeout), (this.cancelled = !0);
                        },
                    },
                    {
                        key: "_tryLoadFromIOSCache",
                        value:
                            ((n = y(function* (t) {
                                if (!this._iosCache) return !1;
                                try {
                                    var i = yield this._iosCache.get(t);
                                    return !!this.cancelled || (!!i && (i.code ? (Function('"use strict";' + i.code)(), (this.succeeded = !0), this._successCallback(), !0) : ((this._refetchHeaders = i.refetchHeaders), !1)));
                                } catch {
                                    return !1;
                                }
                            })),
                            function (t) {
                                return n.apply(this, arguments);
                            }),
                    },
                    {
                        key: "_loadFromNetwork",
                        value:
                            ((i = y(function* (t) {
                                var i = this;
                                this._networkTimeout = setTimeout(function () {
                                    (i._networkTimedOut = !0), i._failureCallback({ msg: "Timed out (>".concat(2e4, " ms) when loading call object bundle ").concat(t), type: "timeout" });
                                }, 2e4);
                                try {
                                    var n = yield fetch(t, this._refetchHeaders ? { headers: this._refetchHeaders } : {});
                                    if ((clearTimeout(this._networkTimeout), this.cancelled || this._networkTimedOut)) throw new ru();
                                    var r = yield this._getBundleCodeFromResponse(t, n);
                                    if (this.cancelled) throw new ru();
                                    Function('"use strict";' + r)(), this._iosCache && this._iosCache.set(t, r, n.headers), (this.succeeded = !0), this._successCallback();
                                } catch (a) {
                                    if ((clearTimeout(this._networkTimeout), a instanceof ru || this.cancelled || this._networkTimedOut)) return;
                                    this._failureCallback({ msg: "Failed to load call object bundle ".concat(t, ": ").concat(a), type: a.message });
                                }
                            })),
                            function (t) {
                                return i.apply(this, arguments);
                            }),
                    },
                    {
                        key: "_getBundleCodeFromResponse",
                        value:
                            ((t = y(function* (t, i) {
                                if (i.ok) return yield i.text();
                                if (this._iosCache && 304 === i.status) return (yield this._iosCache.renew(t, i.headers)).code;
                                throw Error("Received ".concat(i.status, " response"));
                            })),
                            function (i, n) {
                                return t.apply(this, arguments);
                            }),
                    },
                ]),
                a
            );
        })(),
        rp = (function () {
            function t(i, n, r) {
                s(this, t),
                    (this.cancelled = !1),
                    (this.succeeded = !1),
                    (this._dailyConfig = i),
                    (this._successCallback = n),
                    (this._failureCallback = r),
                    (this._attemptId = ee()),
                    (this._networkTimeout = null),
                    (this._scriptElement = null);
            }
            return (
                u(t, [
                    {
                        key: "start",
                        value: function () {
                            window._dailyCallMachineLoadWaitlist || (window._dailyCallMachineLoadWaitlist = new Set());
                            var t = en(this._dailyConfig);
                            "object" === (typeof document > "u" ? "undefined" : o(document)) ? this._startLoading(t) : this._failureCallback({ msg: "Call object bundle must be loaded in a DOM/web context", type: "missing context" });
                        },
                    },
                    {
                        key: "cancel",
                        value: function () {
                            this._stopLoading(), (this.cancelled = !0);
                        },
                    },
                    {
                        key: "_startLoading",
                        value: function (t) {
                            var i = this;
                            this._signUpForCallMachineLoadWaitlist(),
                                (this._networkTimeout = setTimeout(function () {
                                    i._stopLoading(), i._failureCallback({ msg: "Timed out (>".concat(2e4, " ms) when loading call object bundle ").concat(t), type: "timeout" });
                                }, 2e4));
                            var n = document.getElementsByTagName("head")[0],
                                r = document.createElement("script");
                            (this._scriptElement = r),
                                (r.onload = function () {
                                    i._stopLoading(), (i.succeeded = !0), i._successCallback();
                                }),
                                (r.onerror = function (t) {
                                    i._stopLoading(), i._failureCallback({ msg: "Failed to load call object bundle ".concat(t.target.src), type: t.message });
                                }),
                                (r.src = t),
                                n.appendChild(r);
                        },
                    },
                    {
                        key: "_stopLoading",
                        value: function () {
                            this._withdrawFromCallMachineLoadWaitlist(), clearTimeout(this._networkTimeout), this._scriptElement && ((this._scriptElement.onload = null), (this._scriptElement.onerror = null));
                        },
                    },
                    {
                        key: "_signUpForCallMachineLoadWaitlist",
                        value: function () {
                            window._dailyCallMachineLoadWaitlist.add(this._attemptId);
                        },
                    },
                    {
                        key: "_withdrawFromCallMachineLoadWaitlist",
                        value: function () {
                            window._dailyCallMachineLoadWaitlist.delete(this._attemptId);
                        },
                    },
                ]),
                t
            );
        })(),
        rf = function (t, i, n) {
            return !0 === rv(t.local, i, n);
        },
        rg = function (t, i, n, r) {
            var a = rm(t, i, n, r);
            return a && a.pendingTrack;
        },
        rv = function (t, i, n) {
            if (!t) return !1;
            var r = function (t) {
                    switch (t) {
                        case "avatar":
                            return !0;
                        case "staged":
                            return t;
                        default:
                            return !!t;
                    }
                },
                a = t.public.subscribedTracks;
            return a && a[i]
                ? r(-1 === ["cam-audio", "cam-video", "screen-video", "screen-audio", "rmpAudio", "rmpVideo"].indexOf(n) && a[i].custom ? ([!0, "staged"].includes(a[i].custom) ? a[i].custom : a[i].custom[n]) : a[i][n])
                : !a || r(a.ALL);
        },
        rm = function (t, i, n, r) {
            var a = Object.values(t.streams || {})
                .filter(function (t) {
                    return t.participantId === i && t.type === n && t.pendingTrack && t.pendingTrack.kind === r;
                })
                .sort(function (t, i) {
                    return new Date(i.starttime) - new Date(t.starttime);
                });
            return a && a[0];
        },
        ry = function (t, i) {
            var n = t.local.public.customTracks;
            if (n && n[i]) return n[i].track;
        };
    function r8(t, i) {
        for (var n = i.getState(), r = 0, a = ["cam", "screen"]; r < a.length; r++)
            for (var s = a[r], o = 0, c = ["video", "audio"]; o < c.length; o++) {
                var l = c[o],
                    u = "cam" === s ? l : "screen".concat(l.charAt(0).toUpperCase() + l.slice(1)),
                    d = t.tracks[u];
                if (d) {
                    var h,
                        p,
                        f,
                        g = t.local
                            ? ((h = n), (p = s), (f = l), h.local.streams && h.local.streams[p] && h.local.streams[p].stream && h.local.streams[p].stream["get".concat("video" === f ? "Video" : "Audio", "Tracks")]()[0])
                            : rg(n, t.session_id, s, l);
                    "playable" === d.state && (d.track = g), (d.persistentTrack = g);
                }
            }
    }
    function rb(t, i) {
        try {
            var n = i.getState();
            for (var r in t.tracks)
                if (!r$(r)) {
                    var a = t.tracks[r].kind;
                    if (a) {
                        var s = t.tracks[r];
                        if (s) {
                            var o = t.local ? ry(n, r) : rg(n, t.session_id, r, a);
                            "playable" === s.state && (t.tracks[r].track = o), (s.persistentTrack = o);
                        }
                    } else console.error("unknown type for custom track");
                }
        } catch (c) {
            console.error(c);
        }
    }
    function r$(t) {
        return ["video", "audio", "screenVideo", "screenAudio"].includes(t);
    }
    function rk(t, i, n) {
        var r = n.getState();
        if (t.local) {
            if (t.audio)
                try {
                    (t.audioTrack = r.local.streams.cam.stream.getAudioTracks()[0]), t.audioTrack || (t.audio = !1);
                } catch {}
            if (t.video)
                try {
                    (t.videoTrack = r.local.streams.cam.stream.getVideoTracks()[0]), t.videoTrack || (t.video = !1);
                } catch {}
            if (t.screen)
                try {
                    (t.screenVideoTrack = r.local.streams.screen.stream.getVideoTracks()[0]), (t.screenAudioTrack = r.local.streams.screen.stream.getAudioTracks()[0]), t.screenVideoTrack || t.screenAudioTrack || (t.screen = !1);
                } catch {}
        } else {
            var a = !0;
            try {
                var s = r.participants[t.session_id];
                s && s.public && s.public.rtcType && "peer-to-peer" === s.public.rtcType.impl && s.private && !["connected", "completed"].includes(s.private.peeringState) && (a = !1);
            } catch (o) {
                console.error(o);
            }
            if (!a) return (t.audio = !1), (t.audioTrack = !1), (t.video = !1), (t.videoTrack = !1), (t.screen = !1), void (t.screenTrack = !1);
            try {
                if ((r.streams, t.audio && rf(r, t.session_id, "cam-audio"))) {
                    var c = rg(r, t.session_id, "cam", "audio");
                    c && (i && i.audioTrack && i.audioTrack.id === c.id ? (t.audioTrack = c) : c.muted || (t.audioTrack = c)), t.audioTrack || (t.audio = !1);
                }
                if (t.video && rf(r, t.session_id, "cam-video")) {
                    var l = rg(r, t.session_id, "cam", "video");
                    l && (i && i.videoTrack && i.videoTrack.id === l.id ? (t.videoTrack = l) : l.muted || (t.videoTrack = l)), t.videoTrack || (t.video = !1);
                }
                if (t.screen && rf(r, t.session_id, "screen-audio")) {
                    var u = rg(r, t.session_id, "screen", "audio");
                    u && (i && i.screenAudioTrack && i.screenAudioTrack.id === u.id ? (t.screenAudioTrack = u) : u.muted || (t.screenAudioTrack = u));
                }
                if (t.screen && rf(r, t.session_id, "screen-video")) {
                    var d = rg(r, t.session_id, "screen", "video");
                    d && (i && i.screenVideoTrack && i.screenVideoTrack.id === d.id ? (t.screenVideoTrack = d) : d.muted || (t.screenVideoTrack = d));
                }
                t.screenVideoTrack || t.screenAudioTrack || (t.screen = !1);
            } catch (h) {
                console.error("unexpected error matching up tracks", h);
            }
        }
    }
    function rS(t, i) {
        (null == i || i > t.length) && (i = t.length);
        for (var n = 0, r = Array(i); n < i; n++) r[n] = t[n];
        return r;
    }
    var rw = new Map(),
        rT = null;
    function rC(t, i) {
        (null == i || i > t.length) && (i = t.length);
        for (var n = 0, r = Array(i); n < i; n++) r[n] = t[n];
        return r;
    }
    var rE = new Map(),
        rM = null;
    function rA() {
        return n9() || void 0 !== navigator.mediaDevices.ondevicechange;
    }
    var rL,
        r_,
        rx,
        rI = new Set(),
        rP = ["videoTrack"],
        rD = ["result"],
        rO = ["preserveIframe"];
    function rN(t, i) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(t);
            i &&
                (r = r.filter(function (i) {
                    return Object.getOwnPropertyDescriptor(t, i).enumerable;
                })),
                n.push.apply(n, r);
        }
        return n;
    }
    function rR(t) {
        for (var i = 1; i < arguments.length; i++) {
            var n = null != arguments[i] ? arguments[i] : {};
            i % 2
                ? rN(Object(n), !0).forEach(function (i) {
                      v(t, i, n[i]);
                  })
                : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
                : rN(Object(n)).forEach(function (i) {
                      Object.defineProperty(t, i, Object.getOwnPropertyDescriptor(n, i));
                  });
        }
        return t;
    }
    function rF(t, i) {
        var n = ("u" > typeof Symbol && t[Symbol.iterator]) || t["@@iterator"];
        if (!n) {
            if (
                Array.isArray(t) ||
                (n = (function (t, i) {
                    if (t) {
                        if ("string" == typeof t) return rj(t, i);
                        var n = Object.prototype.toString.call(t).slice(8, -1);
                        if (("Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n)) return Array.from(t);
                        if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return rj(t, i);
                    }
                })(t)) ||
                (i && t && "number" == typeof t.length)
            ) {
                n && (t = n);
                var r = 0,
                    a = function () {};
                return {
                    s: a,
                    n: function () {
                        return r >= t.length ? { done: !0 } : { done: !1, value: t[r++] };
                    },
                    e: function (t) {
                        throw t;
                    },
                    f: a,
                };
            }
            throw TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }
        var s,
            o = !0,
            c = !1;
        return {
            s: function () {
                n = n.call(t);
            },
            n: function () {
                var t = n.next();
                return (o = t.done), t;
            },
            e: function (t) {
                (c = !0), (s = t);
            },
            f: function () {
                try {
                    o || null == n.return || n.return();
                } finally {
                    if (c) throw s;
                }
            },
        };
    }
    function rj(t, i) {
        (null == i || i > t.length) && (i = t.length);
        for (var n = 0, r = Array(i); n < i; n++) r[n] = t[n];
        return r;
    }
    var rV,
        rU = "video",
        rB = n9() ? { data: {} } : { data: {}, topology: "none" },
        r0 = { present: 0, hidden: 0 },
        r9 = { maxBitrate: { min: 1e5, max: 25e5 }, maxFramerate: { min: 1, max: 30 }, scaleResolutionDownBy: { min: 1, max: 8 } },
        rq = Object.keys(r9),
        rY = ["state", "volume", "simulcastEncodings"],
        r3 = { androidInCallNotification: { title: "string", subtitle: "string", iconName: "string", disableForCustomOverride: "boolean" }, disableAutoDeviceManagement: { audio: "boolean", video: "boolean" } },
        r2 = { id: { iconPath: "string", iconPathDarkMode: "string", label: "string", tooltip: "string" } },
        rz = {
            id: {
                allow: "string",
                controlledBy: "'*' | 'owners' | string[]",
                csp: "string",
                iconURL: "string",
                label: "string",
                loading: "'eager' | 'lazy'",
                location: "'main' | 'sidebar'",
                name: "string",
                referrerPolicy: "string",
                sandbox: "string",
                src: "string",
                srcdoc: "string",
                shared: "string[] | 'owners' | boolean",
            },
        },
        rG = {
            customIntegrations: { validate: ac, help: as() },
            customTrayButtons: { validate: ao, help: "customTrayButtons should be a dictionary of the type ".concat(JSON.stringify(r2)) },
            url: {
                validate: function (t) {
                    return "string" == typeof t;
                },
                help: "url should be a string",
            },
            baseUrl: {
                validate: function (t) {
                    return "string" == typeof t;
                },
                help: "baseUrl should be a string",
            },
            token: {
                validate: function (t) {
                    return "string" == typeof t;
                },
                help: "token should be a string",
                queryString: "t",
            },
            dailyConfig: {
                validate: function (t, i) {
                    try {
                        return i.validateDailyConfig(t), !0;
                    } catch (n) {
                        console.error("Failed to validate dailyConfig", n);
                    }
                    return !1;
                },
                help: "Unsupported dailyConfig. Check error logs for detailed info.",
            },
            reactNativeConfig: {
                validate: function (t) {
                    return (function t(i, n) {
                        if (void 0 === n) return !1;
                        switch (o(n)) {
                            case "string":
                                return o(i) === n;
                            case "object":
                                if ("object" !== o(i)) return !1;
                                for (var r in i) if (!t(i[r], n[r])) return !1;
                                return !0;
                            default:
                                return !1;
                        }
                    })(t, r3);
                },
                help: "reactNativeConfig should look like ".concat(JSON.stringify(r3), ", all fields optional"),
            },
            lang: {
                validate: function (t) {
                    return ["de", "en-us", "en", "es", "fi", "fr", "it", "jp", "ka", "nl", "no", "pl", "pt", "pt-BR", "ru", "sv", "tr", "user"].includes(t);
                },
                help: "language not supported. Options are: de, en-us, en, es, fi, fr, it, jp, ka, nl, no, pl, pt, pt-BR, ru, sv, tr, user",
            },
            userName: !0,
            userData: {
                validate: function (t) {
                    try {
                        return ae(t), !0;
                    } catch (i) {
                        return console.error(i), !1;
                    }
                },
                help: "invalid userData type provided",
            },
            startVideoOff: !0,
            startAudioOff: !0,
            activeSpeakerMode: !0,
            showLeaveButton: !0,
            showLocalVideo: !0,
            showParticipantsBar: !0,
            showFullscreenButton: !0,
            showUserNameChangeUI: !0,
            iframeStyle: !0,
            customLayout: !0,
            cssFile: !0,
            cssText: !0,
            bodyClass: !0,
            videoSource: {
                validate: function (t, i) {
                    return t instanceof MediaStreamTrack && (i._sharedTracks.videoDeviceId = t), (i._preloadCache.videoDeviceId = t), !0;
                },
            },
            audioSource: {
                validate: function (t, i) {
                    return t instanceof MediaStreamTrack && (i._sharedTracks.audioDeviceId = t), (i._preloadCache.audioDeviceId = t), !0;
                },
            },
            subscribeToTracksAutomatically: {
                validate: function (t, i) {
                    return (i._preloadCache.subscribeToTracksAutomatically = t), !0;
                },
            },
            theme: {
                validate: function (t) {
                    var i = ["accent", "accentText", "background", "backgroundAccent", "baseText", "border", "mainAreaBg", "mainAreaBgAccent", "mainAreaText", "supportiveText"],
                        n = function (t) {
                            for (var n = 0, r = Object.keys(t); n < r.length; n++) {
                                var a = r[n];
                                if (!i.includes(a)) return console.error('unsupported color "'.concat(a, '". Valid colors: ').concat(i.join(", "))), !1;
                                if (!t[a].match(/^#[0-9a-f]{6}|#[0-9a-f]{3}$/i)) return console.error("".concat(a, ' theme color should be provided in valid hex color format. Received: "').concat(t[a], '"')), !1;
                            }
                            return !0;
                        };
                    return "object" === o(t) && (("light" in t && "dark" in t) || "colors" in t)
                        ? "light" in t && "dark" in t
                            ? "colors" in t.light
                                ? "colors" in t.dark
                                    ? n(t.light.colors) && n(t.dark.colors)
                                    : (console.error('Dark theme is missing "colors" property.', t), !1)
                                : (console.error('Light theme is missing "colors" property.', t), !1)
                            : n(t.colors)
                        : (console.error('Theme must contain either both "light" and "dark" properties, or "colors".', t), !1);
                },
                help: "unsupported theme configuration. Check error logs for detailed info.",
            },
            layoutConfig: {
                validate: function (t) {
                    if ("grid" in t) {
                        var i = t.grid;
                        if ("maxTilesPerPage" in i) {
                            if (!Number.isInteger(i.maxTilesPerPage)) return console.error("grid.maxTilesPerPage should be an integer. You passed ".concat(i.maxTilesPerPage, ".")), !1;
                            if (i.maxTilesPerPage > 49)
                                return console.error("grid.maxTilesPerPage can't be larger than 49 without sacrificing browser performance. Please contact us at https://www.daily.co/contact to talk about your use case."), !1;
                        }
                        if ("minTilesPerPage" in i) {
                            if (!Number.isInteger(i.minTilesPerPage)) return console.error("grid.minTilesPerPage should be an integer. You passed ".concat(i.minTilesPerPage, ".")), !1;
                            if (i.minTilesPerPage < 1) return console.error("grid.minTilesPerPage can't be lower than 1."), !1;
                            if ("maxTilesPerPage" in i && i.minTilesPerPage > i.maxTilesPerPage) return console.error("grid.minTilesPerPage can't be higher than grid.maxTilesPerPage."), !1;
                        }
                    }
                    return !0;
                },
                help: "unsupported layoutConfig. Check error logs for detailed info.",
            },
            receiveSettings: {
                validate: function (t) {
                    return at(t, { allowAllParticipantsKey: !1 });
                },
                help: aa({ allowAllParticipantsKey: !1 }),
            },
            sendSettings: {
                validate: function (t, i) {
                    return (
                        !!(function (t, i) {
                            try {
                                return i.validateUpdateSendSettings(t), !0;
                            } catch (n) {
                                return console.error("Failed to validate send settings", n), !1;
                            }
                        })(t, i) && ((i._preloadCache.sendSettings = t), !0)
                    );
                },
                help: "Invalid sendSettings provided. Check error logs for detailed info.",
            },
            inputSettings: {
                validate: function (t, i) {
                    var n;
                    return (
                        !!ai(t) &&
                        (i._preloadCache.inputSettings || (i._preloadCache.inputSettings = {}),
                        an(t, null === (n = i.properties) || void 0 === n ? void 0 : n.dailyConfig),
                        t.audio && (i._preloadCache.inputSettings.audio = t.audio),
                        t.video && (i._preloadCache.inputSettings.video = t.video),
                        !0)
                    );
                },
                help: ar(),
            },
            layout: {
                validate: function (t) {
                    return "custom-v1" === t || "browser" === t || "none" === t;
                },
                help: 'layout may only be set to "custom-v1"',
                queryString: "layout",
            },
            emb: { queryString: "emb" },
            embHref: { queryString: "embHref" },
            dailyJsVersion: { queryString: "dailyJsVersion" },
            proxy: { queryString: "proxy" },
            strictMode: !0,
        },
        r1 = {
            styles: {
                validate: function (t) {
                    for (var i in t) if ("cam" !== i && "screen" !== i) return !1;
                    if (t.cam) {
                        for (var n in t.cam) if ("div" !== n && "video" !== n) return !1;
                    }
                    if (t.screen) {
                        for (var r in t.screen) if ("div" !== r && "video" !== r) return !1;
                    }
                    return !0;
                },
                help: "styles format should be a subset of: { cam: {div: {}, video: {}}, screen: {div: {}, video: {}} }",
            },
            setSubscribedTracks: {
                validate: function (t, i) {
                    if (i._preloadCache.subscribeToTracksAutomatically) return !1;
                    var n = [!0, !1, "staged"];
                    if (n.includes(t) || (!n9() && "avatar" === t)) return !0;
                    var r = ["audio", "video", "screenAudio", "screenVideo", "rmpAudio", "rmpVideo"];
                    return (function t(i) {
                        var a = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                        for (var s in i)
                            if ("custom" === s) {
                                if (!n.includes(i[s]) && !t(i[s], !0)) return !1;
                            } else {
                                var o = !a && !r.includes(s),
                                    c = !n.includes(i[s]);
                                if (o || c) return !1;
                            }
                        return !0;
                    })(t);
                },
                help:
                    "setSubscribedTracks cannot be used when setSubscribeToTracksAutomatically is enabled, and should be of the form: " +
                    "true".concat(n9() ? "" : " | 'avatar'", " | false | 'staged' | { [audio: true|false|'staged'], [video: true|false|'staged'], [screenAudio: true|false|'staged'], [screenVideo: true|false|'staged'] }"),
            },
            setAudio: !0,
            setVideo: !0,
            setScreenShare: {
                validate: function (t) {
                    return !1 === t;
                },
                help: "setScreenShare must be false, as it's only meant for stopping remote participants' screen shares",
            },
            eject: !0,
            updatePermissions: {
                validate: function (t) {
                    for (var i = 0, n = Object.entries(t); i < n.length; i++) {
                        var r = $(n[i], 2),
                            a = r[0],
                            s = r[1];
                        switch (a) {
                            case "hasPresence":
                                if ("boolean" != typeof s) return !1;
                                break;
                            case "canSend":
                                if (s instanceof Set || s instanceof Array) {
                                    var o,
                                        c = ["video", "audio", "screenVideo", "screenAudio", "customVideo", "customAudio"],
                                        l = rF(s);
                                    try {
                                        for (l.s(); !(o = l.n()).done; ) {
                                            var u = o.value;
                                            if (!c.includes(u)) return !1;
                                        }
                                    } catch (d) {
                                        l.e(d);
                                    } finally {
                                        l.f();
                                    }
                                } else if ("boolean" != typeof s) return !1;
                                s instanceof Array && (t.canSend = new Set(s));
                                break;
                            case "canAdmin":
                                if (s instanceof Set || s instanceof Array) {
                                    var h,
                                        p = ["participants", "streaming", "transcription"],
                                        f = rF(s);
                                    try {
                                        for (f.s(); !(h = f.n()).done; ) {
                                            var g = h.value;
                                            if (!p.includes(g)) return !1;
                                        }
                                    } catch (v) {
                                        f.e(v);
                                    } finally {
                                        f.f();
                                    }
                                } else if ("boolean" != typeof s) return !1;
                                s instanceof Array && (t.canAdmin = new Set(s));
                                break;
                            default:
                                return !1;
                        }
                    }
                    return !0;
                },
                help:
                    "updatePermissions can take hasPresence, canSend, and canAdmin permissions. hasPresence must be a boolean. canSend can be a boolean or an Array or Set of media types (video, audio, screenVideo, screenAudio, customVideo, customAudio). canAdmin can be a boolean or an Array or Set of admin types (participants, streaming, transcription).",
            },
        };
    Promise.any ||
        (Promise.any =
            ((rV = y(function* (t) {
                return new Promise(function (i, n) {
                    var r = [];
                    t.forEach(function (a) {
                        return Promise.resolve(a)
                            .then(function (t) {
                                i(t);
                            })
                            .catch(function (i) {
                                r.push(i), r.length === t.length && n(r);
                            });
                    });
                });
            })),
            function (t) {
                return rV.apply(this, arguments);
            }));
    var rW = (function (t) {
        p(er, S);
        var i,
            n,
            r,
            c,
            l,
            h,
            m,
            b,
            k,
            w,
            T,
            C,
            E,
            M,
            A,
            L,
            _,
            x,
            I,
            P,
            D,
            O,
            N,
            R,
            F,
            j,
            U,
            B,
            q,
            Y,
            z,
            G,
            W,
            J,
            H,
            K,
            Q,
            X,
            et =
                ((i = er),
                (n = (function () {
                    if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
                    } catch {
                        return !1;
                    }
                })()),
                function () {
                    var t,
                        r = g(i);
                    if (n) {
                        var a = g(this).constructor;
                        t = Reflect.construct(r, arguments, a);
                    } else t = r.apply(this, arguments);
                    return f(this, t);
                });
        function er(t) {
            var i,
                n,
                r,
                a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            if (
                (s(this, er),
                v(d((i = et.call(this))), "startListeningForDeviceChanges", function () {
                    var t, n, r;
                    (t = i.handleDeviceChange),
                        rA()
                            ? ((n = t),
                              rw.has(n) ||
                                  (rw.set(n, {}),
                                  navigator.mediaDevices
                                      .enumerateDevices()
                                      .then(function (t) {
                                          var i;
                                          rw.has(n) &&
                                              ((rw.get(n).lastDevicesString = JSON.stringify(t)),
                                              rT ||
                                                  ((i = y(function* () {
                                                      var t,
                                                          i = yield navigator.mediaDevices.enumerateDevices(),
                                                          n = (function (t, i) {
                                                              var n = ("u" > typeof Symbol && t[Symbol.iterator]) || t["@@iterator"];
                                                              if (!n) {
                                                                  if (
                                                                      Array.isArray(t) ||
                                                                      (n = (function (t, i) {
                                                                          if (t) {
                                                                              if ("string" == typeof t) return rS(t, i);
                                                                              var n = Object.prototype.toString.call(t).slice(8, -1);
                                                                              if (("Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n)) return Array.from(t);
                                                                              if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return rS(t, i);
                                                                          }
                                                                      })(t))
                                                                  ) {
                                                                      n && (t = n);
                                                                      var r = 0,
                                                                          a = function () {};
                                                                      return {
                                                                          s: a,
                                                                          n: function () {
                                                                              return r >= t.length ? { done: !0 } : { done: !1, value: t[r++] };
                                                                          },
                                                                          e: function (t) {
                                                                              throw t;
                                                                          },
                                                                          f: a,
                                                                      };
                                                                  }
                                                                  throw TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                                                              }
                                                              var s,
                                                                  o = !0,
                                                                  c = !1;
                                                              return {
                                                                  s: function () {
                                                                      n = n.call(t);
                                                                  },
                                                                  n: function () {
                                                                      var t = n.next();
                                                                      return (o = t.done), t;
                                                                  },
                                                                  e: function (t) {
                                                                      (c = !0), (s = t);
                                                                  },
                                                                  f: function () {
                                                                      try {
                                                                          o || null == n.return || n.return();
                                                                      } finally {
                                                                          if (c) throw s;
                                                                      }
                                                                  },
                                                              };
                                                          })(rw.keys());
                                                      try {
                                                          for (n.s(); !(t = n.n()).done; ) {
                                                              var r = t.value,
                                                                  a = JSON.stringify(i);
                                                              a !== rw.get(r).lastDevicesString && ((rw.get(r).lastDevicesString = a), r(i));
                                                          }
                                                      } catch (s) {
                                                          n.e(s);
                                                      } finally {
                                                          n.f();
                                                      }
                                                  })),
                                                  (rT = function () {
                                                      return i.apply(this, arguments);
                                                  }),
                                                  navigator.mediaDevices.addEventListener("devicechange", rT)));
                                      })
                                      .catch(function () {})))
                            : ((r = t),
                              rE.has(r) ||
                                  (rE.set(r, {}),
                                  navigator.mediaDevices.enumerateDevices().then(function (t) {
                                      rE.has(r) &&
                                          ((rE.get(r).lastDevicesString = JSON.stringify(t)),
                                          rM ||
                                              (rM = setInterval(
                                                  y(function* () {
                                                      var t,
                                                          i = yield navigator.mediaDevices.enumerateDevices(),
                                                          n = (function (t, i) {
                                                              var n = ("u" > typeof Symbol && t[Symbol.iterator]) || t["@@iterator"];
                                                              if (!n) {
                                                                  if (
                                                                      Array.isArray(t) ||
                                                                      (n = (function (t, i) {
                                                                          if (t) {
                                                                              if ("string" == typeof t) return rC(t, i);
                                                                              var n = Object.prototype.toString.call(t).slice(8, -1);
                                                                              if (("Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n)) return Array.from(t);
                                                                              if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return rC(t, i);
                                                                          }
                                                                      })(t))
                                                                  ) {
                                                                      n && (t = n);
                                                                      var r = 0,
                                                                          a = function () {};
                                                                      return {
                                                                          s: a,
                                                                          n: function () {
                                                                              return r >= t.length ? { done: !0 } : { done: !1, value: t[r++] };
                                                                          },
                                                                          e: function (t) {
                                                                              throw t;
                                                                          },
                                                                          f: a,
                                                                      };
                                                                  }
                                                                  throw TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                                                              }
                                                              var s,
                                                                  o = !0,
                                                                  c = !1;
                                                              return {
                                                                  s: function () {
                                                                      n = n.call(t);
                                                                  },
                                                                  n: function () {
                                                                      var t = n.next();
                                                                      return (o = t.done), t;
                                                                  },
                                                                  e: function (t) {
                                                                      (c = !0), (s = t);
                                                                  },
                                                                  f: function () {
                                                                      try {
                                                                          o || null == n.return || n.return();
                                                                      } finally {
                                                                          if (c) throw s;
                                                                      }
                                                                  },
                                                              };
                                                          })(rE.keys());
                                                      try {
                                                          for (n.s(); !(t = n.n()).done; ) {
                                                              var r = t.value,
                                                                  a = JSON.stringify(i);
                                                              a !== rE.get(r).lastDevicesString && ((rE.get(r).lastDevicesString = a), r(i));
                                                          }
                                                      } catch (s) {
                                                          n.e(s);
                                                      } finally {
                                                          n.f();
                                                      }
                                                  }),
                                                  3e3
                                              )));
                                  })));
                }),
                v(d(i), "stopListeningForDeviceChanges", function () {
                    var t, n, r;
                    (t = i.handleDeviceChange),
                        rA()
                            ? ((n = t), rw.has(n) && (rw.delete(n), 0 === rw.size && rT && (navigator.mediaDevices.removeEventListener("devicechange", rT), (rT = null))))
                            : ((r = t), rE.has(r) && (rE.delete(r), 0 === rE.size && rM && (clearInterval(rM), (rM = null))));
                }),
                v(d(i), "handleDeviceChange", function (t) {
                    (t = t.map(function (t) {
                        return JSON.parse(JSON.stringify(t));
                    })),
                        i.emit(i1, { action: i1, availableDevices: t });
                }),
                v(
                    d(i),
                    "handleNativeAppStateChange",
                    ((r = y(function* (t) {
                        if ("destroyed" === t) return console.warn("App has been destroyed before leaving the meeting. Cleaning up all the resources!"), void (yield i.destroy());
                        i.disableReactNativeAutoDeviceManagement("video") ||
                            ("active" === t
                                ? i.camUnmutedBeforeLosingNativeActiveState && i.setLocalVideo(!0)
                                : ((i.camUnmutedBeforeLosingNativeActiveState = i.localVideo()), i.camUnmutedBeforeLosingNativeActiveState && i.setLocalVideo(!1)));
                    })),
                    function (t) {
                        return r.apply(this, arguments);
                    })
                ),
                v(d(i), "handleNativeAudioFocusChange", function (t) {
                    i.disableReactNativeAutoDeviceManagement("audio") ||
                        ((i._hasNativeAudioFocus = t),
                        i.toggleParticipantAudioBasedOnNativeAudioFocus(),
                        i._hasNativeAudioFocus ? i.micUnmutedBeforeLosingNativeAudioFocus && i.setLocalAudio(!0) : ((i.micUnmutedBeforeLosingNativeAudioFocus = i.localAudio()), i.setLocalAudio(!1)));
                }),
                v(d(i), "handleNativeSystemScreenCaptureStop", function () {
                    i.stopScreenShare();
                }),
                (i.strictMode = void 0 === a.strictMode || a.strictMode),
                rx)
            ) {
                if ((i._logDuplicateInstanceAttempt(), i.strictMode)) throw Error("Duplicate DailyIframe instances are not allowed");
            } else rx = n = d(i);
            if (
                (window._daily || (window._daily = { pendings: [], instances: {} }),
                (i._callFrameId = ee()),
                (window._daily.instances[i._callFrameId] = {}),
                (i._sharedTracks = {}),
                (window._daily.instances[i._callFrameId].tracks = i._sharedTracks),
                (a.dailyJsVersion = er.version()),
                (i._iframe = t),
                (i._callObjectMode = "none" === a.layout && !i._iframe),
                (i._preloadCache = {
                    subscribeToTracksAutomatically: !0,
                    audioDeviceId: null,
                    videoDeviceId: null,
                    outputDeviceId: null,
                    inputSettings: null,
                    sendSettings: null,
                    videoTrackForNetworkConnectivityTest: null,
                    videoTrackForConnectionQualityTest: null,
                }),
                void 0 !== a.showLocalVideo ? (i._callObjectMode ? console.error("showLocalVideo is not available in call object mode") : (i._showLocalVideo = !!a.showLocalVideo)) : (i._showLocalVideo = !0),
                void 0 !== a.showParticipantsBar ? (i._callObjectMode ? console.error("showParticipantsBar is not available in call object mode") : (i._showParticipantsBar = !!a.showParticipantsBar)) : (i._showParticipantsBar = !0),
                void 0 !== a.customIntegrations ? (i._callObjectMode ? console.error("customIntegrations is not available in call object mode") : (i._customIntegrations = a.customIntegrations)) : (i._customIntegrations = {}),
                void 0 !== a.customTrayButtons ? (i._callObjectMode ? console.error("customTrayButtons is not available in call object mode") : (i._customTrayButtons = a.customTrayButtons)) : (i._customTrayButtons = {}),
                void 0 !== a.activeSpeakerMode ? (i._callObjectMode ? console.error("activeSpeakerMode is not available in call object mode") : (i._activeSpeakerMode = !!a.activeSpeakerMode)) : (i._activeSpeakerMode = !1),
                a.receiveSettings ? (i._callObjectMode ? (i._receiveSettings = a.receiveSettings) : console.error("receiveSettings is only available in call object mode")) : (i._receiveSettings = {}),
                i.validateProperties(a),
                (i.properties = rR({}, a)),
                i._preloadCache.inputSettings || (i._preloadCache.inputSettings = {}),
                a.inputSettings && a.inputSettings.audio && (i._preloadCache.inputSettings.audio = a.inputSettings.audio),
                a.inputSettings && a.inputSettings.video && (i._preloadCache.inputSettings.video = a.inputSettings.video),
                (i._callObjectLoader = i._callObjectMode ? new rc(i._callFrameId) : null),
                (i._callState = "new"),
                (i._isPreparingToJoin = !1),
                (i._accessState = { access: iR }),
                (i._meetingSessionSummary = {}),
                (i._finalSummaryOfPrevSession = {}),
                (i._meetingSessionState = ad(rB, i._callObjectMode)),
                (i._nativeInCallAudioMode = rU),
                (i._participants = {}),
                (i._isScreenSharing = !1),
                (i._participantCounts = r0),
                (i._rmpPlayerState = {}),
                (i._waitingParticipants = {}),
                (i._network = { threshold: "good", quality: 100 }),
                (i._activeSpeaker = {}),
                (i._localAudioLevel = 0),
                (i._remoteParticipantsAudioLevel = {}),
                (i._messageChannel = n9() ? new re() : new nZ()),
                i._iframe &&
                    (i._iframe.requestFullscreen
                        ? i._iframe.addEventListener("fullscreenchange", function () {
                              document.fullscreenElement === i._iframe ? (i.emit(nw, { action: nw }), i.sendMessageToCallMachine({ action: nw })) : (i.emit(nT, { action: nT }), i.sendMessageToCallMachine({ action: nT }));
                          })
                        : i._iframe.webkitRequestFullscreen &&
                          i._iframe.addEventListener("webkitfullscreenchange", function () {
                              document.webkitFullscreenElement === i._iframe ? (i.emit(nw, { action: nw }), i.sendMessageToCallMachine({ action: nw })) : (i.emit(nT, { action: nT }), i.sendMessageToCallMachine({ action: nT }));
                          })),
                n9())
            ) {
                var o = i.nativeUtils();
                (o.addAudioFocusChangeListener && o.removeAudioFocusChangeListener && o.addAppStateChangeListener && o.removeAppStateChangeListener && o.addSystemScreenCaptureStopListener && o.removeSystemScreenCaptureStopListener) ||
                    console.warn("expected (add|remove)(AudioFocusChange|AppActiveStateChange|SystemScreenCaptureStop)Listener to be available in React Native"),
                    (i._hasNativeAudioFocus = !0),
                    o.addAudioFocusChangeListener(i.handleNativeAudioFocusChange),
                    o.addAppStateChangeListener(i.handleNativeAppStateChange),
                    o.addSystemScreenCaptureStopListener(i.handleNativeSystemScreenCaptureStop);
            }
            return i._callObjectMode && i.startListeningForDeviceChanges(), i._messageChannel.addListenerForMessagesFromCallMachine(i.handleMessageFromCallMachine, i._callFrameId, d(i)), i;
        }
        return (
            u(
                er,
                [
                    {
                        key: "destroy",
                        value:
                            ((X = y(function* () {
                                try {
                                    yield this.leave();
                                } catch {}
                                var t,
                                    i,
                                    n = this._iframe;
                                if (n) {
                                    var r = n.parentElement;
                                    r && r.removeChild(n);
                                }
                                if ((this._messageChannel.removeListener(this.handleMessageFromCallMachine), n9())) {
                                    var a = this.nativeUtils();
                                    a.removeAudioFocusChangeListener(this.handleNativeAudioFocusChange),
                                        a.removeAppStateChangeListener(this.handleNativeAppStateChange),
                                        a.removeSystemScreenCaptureStopListener(this.handleNativeSystemScreenCaptureStop);
                                }
                                this._callObjectMode && this.stopListeningForDeviceChanges(), this.resetMeetingDependentVars(), (this._destroyed = !0);
                                try {
                                    this.emit("call-instance-destroyed", { action: "call-instance-destroyed" });
                                } catch {
                                    console.log("could not emit call-instance-destroyed");
                                }
                                (rx = void 0),
                                    !(null === (t = window) || void 0 === t || null === (i = t._daily) || void 0 === i) && i.instances && delete window._daily.instances[this._callFrameId],
                                    this.strictMode && (this._callFrameId = void 0);
                            })),
                            function () {
                                return X.apply(this, arguments);
                            }),
                    },
                    {
                        key: "isDestroyed",
                        value: function () {
                            return !!this._destroyed;
                        },
                    },
                    {
                        key: "loadCss",
                        value: function (t) {
                            var i = t.bodyClass,
                                n = t.cssFile,
                                r = t.cssText;
                            return rX(), this.sendMessageToCallMachine({ action: "load-css", cssFile: this.absoluteUrl(n), bodyClass: i, cssText: r }), this;
                        },
                    },
                    {
                        key: "iframe",
                        value: function () {
                            return rX(), this._iframe;
                        },
                    },
                    {
                        key: "meetingState",
                        value: function () {
                            return this._callState;
                        },
                    },
                    {
                        key: "accessState",
                        value: function () {
                            return rQ(this._callObjectMode, "accessState()"), this._accessState;
                        },
                    },
                    {
                        key: "participants",
                        value: function () {
                            return this._participants;
                        },
                    },
                    {
                        key: "participantCounts",
                        value: function () {
                            return this._participantCounts;
                        },
                    },
                    {
                        key: "waitingParticipants",
                        value: function () {
                            return rQ(this._callObjectMode, "waitingParticipants()"), this._waitingParticipants;
                        },
                    },
                    {
                        key: "validateParticipantProperties",
                        value: function (t, i) {
                            for (var n in i) {
                                if (!r1[n]) throw Error("unrecognized updateParticipant property ".concat(n));
                                if (r1[n].validate && !r1[n].validate(i[n], this, this._participants[t])) throw Error(r1[n].help);
                            }
                        },
                    },
                    {
                        key: "updateParticipant",
                        value: function (t, i) {
                            return (
                                this._participants.local && this._participants.local.session_id === t && (t = "local"),
                                t && i && (this.validateParticipantProperties(t, i), this.sendMessageToCallMachine({ action: "update-participant", id: t, properties: i })),
                                this
                            );
                        },
                    },
                    {
                        key: "updateParticipants",
                        value: function (t) {
                            var i = this._participants.local && this._participants.local.session_id;
                            for (var n in t) n === i && (n = "local"), n && t[n] && this.validateParticipantProperties(n, t[n]);
                            return this.sendMessageToCallMachine({ action: "update-participants", participants: t }), this;
                        },
                    },
                    {
                        key: "updateWaitingParticipant",
                        value:
                            ((Q = y(function* () {
                                var t = this,
                                    i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                                    n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                                if ((rQ(this._callObjectMode, "updateWaitingParticipant()"), r4(this._callState, "updateWaitingParticipant()"), "string" != typeof i || "object" !== o(n)))
                                    throw Error("updateWaitingParticipant() must take an id string and a updates object");
                                return new Promise(function (r, a) {
                                    t.sendMessageToCallMachine({ action: "daily-method-update-waiting-participant", id: i, updates: n }, function (t) {
                                        t.error && a(t.error), t.id || a(Error("unknown error in updateWaitingParticipant()")), r({ id: t.id });
                                    });
                                });
                            })),
                            function () {
                                return Q.apply(this, arguments);
                            }),
                    },
                    {
                        key: "updateWaitingParticipants",
                        value:
                            ((K = y(function* () {
                                var t = this,
                                    i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                                if ((rQ(this._callObjectMode, "updateWaitingParticipants()"), r4(this._callState, "updateWaitingParticipants()"), "object" !== o(i)))
                                    throw Error("updateWaitingParticipants() must take a mapping between ids and update objects");
                                return new Promise(function (n, r) {
                                    t.sendMessageToCallMachine({ action: "daily-method-update-waiting-participants", updatesById: i }, function (t) {
                                        t.error && r(t.error), t.ids || r(Error("unknown error in updateWaitingParticipants()")), n({ ids: t.ids });
                                    });
                                });
                            })),
                            function () {
                                return K.apply(this, arguments);
                            }),
                    },
                    {
                        key: "requestAccess",
                        value:
                            ((H = y(function* () {
                                var t = this,
                                    i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                    n = i.access,
                                    r = void 0 === n ? { level: iF } : n,
                                    a = i.name,
                                    s = void 0 === a ? "" : a;
                                return (
                                    rQ(this._callObjectMode, "requestAccess()"),
                                    r4(this._callState, "requestAccess()"),
                                    new Promise(function (i, n) {
                                        t.sendMessageToCallMachine({ action: "daily-method-request-access", access: r, name: s }, function (t) {
                                            t.error && n(t.error), t.access || n(Error("unknown error in requestAccess()")), i({ access: t.access, granted: t.granted });
                                        });
                                    })
                                );
                            })),
                            function () {
                                return H.apply(this, arguments);
                            }),
                    },
                    {
                        key: "localAudio",
                        value: function () {
                            return this._participants.local ? !["blocked", "off"].includes(this._participants.local.tracks.audio.state) : null;
                        },
                    },
                    {
                        key: "localVideo",
                        value: function () {
                            return this._participants.local ? !["blocked", "off"].includes(this._participants.local.tracks.video.state) : null;
                        },
                    },
                    {
                        key: "setLocalAudio",
                        value: function (t) {
                            var i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                            return (
                                "forceDiscardTrack" in i &&
                                    (n9()
                                        ? (console.warn("forceDiscardTrack option not supported in React Native; ignoring"), (i = {}))
                                        : t && (console.warn("forceDiscardTrack option only supported when calling setLocalAudio(false); ignoring"), (i = {}))),
                                this.sendMessageToCallMachine({ action: "local-audio", state: t, options: i }),
                                this
                            );
                        },
                    },
                    {
                        key: "localScreenAudio",
                        value: function () {
                            return this._participants.local ? !["blocked", "off"].includes(this._participants.local.tracks.screenAudio.state) : null;
                        },
                    },
                    {
                        key: "localScreenVideo",
                        value: function () {
                            return this._participants.local ? !["blocked", "off"].includes(this._participants.local.tracks.screenVideo.state) : null;
                        },
                    },
                    {
                        key: "updateScreenShare",
                        value: function (t) {
                            if (this._isScreenSharing) return this.sendMessageToCallMachine({ action: "local-screen-update", options: t }), this;
                            console.warn("There is no screen share in progress. Try calling startScreenShare first.");
                        },
                    },
                    {
                        key: "setLocalVideo",
                        value: function (t) {
                            return this.sendMessageToCallMachine({ action: "local-video", state: t }), this;
                        },
                    },
                    {
                        key: "getReceiveSettings",
                        value:
                            ((J = y(function* (t) {
                                var i = this,
                                    n = (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}).showInheritedValues,
                                    r = void 0 !== n && n;
                                if ((rQ(this._callObjectMode, "getReceiveSettings()"), !this._callMachineInitialized)) return this._receiveSettings;
                                switch (o(t)) {
                                    case "string":
                                        return new Promise(function (n) {
                                            i.sendMessageToCallMachine({ action: "get-single-participant-receive-settings", id: t, showInheritedValues: r }, function (t) {
                                                n(t.receiveSettings);
                                            });
                                        });
                                    case "undefined":
                                        return this._receiveSettings;
                                    default:
                                        throw Error('first argument to getReceiveSettings() must be a participant id (or "base"), or there should be no arguments');
                                }
                            })),
                            function (t) {
                                return J.apply(this, arguments);
                            }),
                    },
                    {
                        key: "updateReceiveSettings",
                        value:
                            ((W = y(function* (t) {
                                var i = this;
                                if ((rQ(this._callObjectMode, "updateReceiveSettings()"), !at(t, { allowAllParticipantsKey: !0 }))) throw Error(aa({ allowAllParticipantsKey: !0 }));
                                return (
                                    r4(this._callState, "updateReceiveSettings()", "To specify receive settings earlier, use the receiveSettings config property."),
                                    new Promise(function (n) {
                                        i.sendMessageToCallMachine({ action: "update-receive-settings", receiveSettings: t }, function (t) {
                                            n({ receiveSettings: t.receiveSettings });
                                        });
                                    })
                                );
                            })),
                            function (t) {
                                return W.apply(this, arguments);
                            }),
                    },
                    {
                        key: "_prepInputSettingsToPresentToUser",
                        value: function (t) {
                            var i, n, r, a, s, o, c, l;
                            if (t) {
                                var u = {},
                                    d =
                                        "none" === (null === (i = t.audio) || void 0 === i || null === (n = i.processor) || void 0 === n ? void 0 : n.type) &&
                                        (null === (r = t.audio) || void 0 === r || null === (a = r.processor) || void 0 === a ? void 0 : a._isDefaultWhenNone);
                                if (t.audio && !d) {
                                    var h = rR({}, t.audio.processor);
                                    delete h._isDefaultWhenNone, (u.audio = rR(rR({}, t.audio), {}, { processor: h }));
                                }
                                var p =
                                    "none" === (null === (s = t.video) || void 0 === s || null === (o = s.processor) || void 0 === o ? void 0 : o.type) &&
                                    (null === (c = t.video) || void 0 === c || null === (l = c.processor) || void 0 === l ? void 0 : l._isDefaultWhenNone);
                                if (t.video && !p) {
                                    var f = rR({}, t.video.processor);
                                    delete f._isDefaultWhenNone, (u.video = rR(rR({}, t.video), {}, { processor: f }));
                                }
                                return u;
                            }
                        },
                    },
                    {
                        key: "getInputSettings",
                        value: function () {
                            var t = this;
                            return (
                                rX(),
                                new Promise(function (i) {
                                    i(t._getInputSettings());
                                })
                            );
                        },
                    },
                    {
                        key: "_getInputSettings",
                        value: function () {
                            var t,
                                i,
                                n,
                                r,
                                a,
                                s,
                                o,
                                c,
                                l = { processor: { type: "none", _isDefaultWhenNone: !0 } };
                            this._inputSettings
                                ? ((t = (null === (n = this._inputSettings) || void 0 === n ? void 0 : n.video) || l), (i = (null === (r = this._inputSettings) || void 0 === r ? void 0 : r.audio) || l))
                                : ((t = (null === (a = this._preloadCache) || void 0 === a || null === (s = a.inputSettings) || void 0 === s ? void 0 : s.video) || l),
                                  (i = (null === (o = this._preloadCache) || void 0 === o || null === (c = o.inputSettings) || void 0 === c ? void 0 : c.audio) || l));
                            var u = { audio: i, video: t };
                            return this._prepInputSettingsToPresentToUser(u);
                        },
                    },
                    {
                        key: "updateInputSettings",
                        value:
                            ((G = y(function* (t) {
                                var i = this;
                                return (
                                    rX(),
                                    ai(t)
                                        ? (t &&
                                              (this._preloadCache.inputSettings || (this._preloadCache.inputSettings = {}),
                                              an(t, this.properties.dailyConfig),
                                              t.audio && (this._preloadCache.inputSettings.audio = t.audio),
                                              t.video && (this._preloadCache.inputSettings.video = t.video)),
                                          t.video || t.audio
                                              ? this._callObjectMode && !this._callMachineInitialized
                                                  ? this._getInputSettings()
                                                  : new Promise(function (n, r) {
                                                        i.sendMessageToCallMachine({ action: "update-input-settings", inputSettings: t }, function (t) {
                                                            t.error ? r(t.error) : n({ inputSettings: i._prepInputSettingsToPresentToUser(t.inputSettings) });
                                                        });
                                                    })
                                              : this._getInputSettings())
                                        : (console.error(ar()), Promise.reject(ar()))
                                );
                            })),
                            function (t) {
                                return G.apply(this, arguments);
                            }),
                    },
                    {
                        key: "setBandwidth",
                        value: function (t) {
                            var i = t.kbs,
                                n = t.trackConstraints;
                            if ((rX(), this._callMachineInitialized)) return this.sendMessageToCallMachine({ action: "set-bandwidth", kbs: i, trackConstraints: n }), this;
                        },
                    },
                    {
                        key: "getDailyLang",
                        value: function () {
                            var t = this;
                            if ((rX(), this._callMachineInitialized))
                                return new Promise(function (i) {
                                    t.sendMessageToCallMachine({ action: "get-daily-lang" }, function (t) {
                                        delete t.action, delete t.callbackStamp, i(t);
                                    });
                                });
                        },
                    },
                    {
                        key: "setDailyLang",
                        value: function (t) {
                            return rX(), this.sendMessageToCallMachine({ action: "set-daily-lang", lang: t }), this;
                        },
                    },
                    {
                        key: "setProxyUrl",
                        value: function (t) {
                            return this.sendMessageToCallMachine({ action: "set-proxy-url", proxyUrl: t }), this;
                        },
                    },
                    {
                        key: "setIceConfig",
                        value: function (t) {
                            return this.sendMessageToCallMachine({ action: "set-ice-config", iceConfig: t }), this;
                        },
                    },
                    {
                        key: "meetingSessionSummary",
                        value: function () {
                            return [iO, iN].includes(this._callState) ? this._finalSummaryOfPrevSession : this._meetingSessionSummary;
                        },
                    },
                    {
                        key: "getMeetingSession",
                        value:
                            ((z = y(function* () {
                                var t = this;
                                return (
                                    console.warn("getMeetingSession() is deprecated: use meetingSessionSummary(), which will return immediately"),
                                    r4(this._callState, "getMeetingSession()"),
                                    new Promise(function (i) {
                                        t.sendMessageToCallMachine({ action: "get-meeting-session" }, function (t) {
                                            delete t.action, delete t.callbackStamp, delete t.callFrameId, i(t);
                                        });
                                    })
                                );
                            })),
                            function () {
                                return z.apply(this, arguments);
                            }),
                    },
                    {
                        key: "meetingSessionState",
                        value: function () {
                            return r4(this._callState, "meetingSessionState"), this._meetingSessionState;
                        },
                    },
                    {
                        key: "setMeetingSessionData",
                        value: function (t) {
                            var i,
                                n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "replace";
                            rQ(this._callObjectMode, "setMeetingSessionData()"), r4(this._callState, "setMeetingSessionData");
                            try {
                                new rr({ data: (i = t), mergeStrategy: n });
                            } catch (r) {
                                throw (console.error(r), r);
                            }
                            try {
                                this.sendMessageToCallMachine({ action: "set-session-data", data: t, mergeStrategy: n });
                            } catch (a) {
                                throw Error("Error setting meeting session data: ".concat(a));
                            }
                        },
                    },
                    {
                        key: "setUserName",
                        value: function (t, i) {
                            var n = this;
                            return (
                                (this.properties.userName = t),
                                new Promise(function (r) {
                                    n.sendMessageToCallMachine({ action: "set-user-name", name: t ?? "", thisMeetingOnly: n9() || (!!i && !!i.thisMeetingOnly) }, function (t) {
                                        delete t.action, delete t.callbackStamp, r(t);
                                    });
                                })
                            );
                        },
                    },
                    {
                        key: "setUserData",
                        value:
                            ((Y = y(function* (t) {
                                var i = this;
                                try {
                                    ae(t);
                                } catch (n) {
                                    throw (console.error(n), n);
                                }
                                if (((this.properties.userData = t), this._callMachineInitialized))
                                    return new Promise(function (n) {
                                        try {
                                            i.sendMessageToCallMachine({ action: "set-user-data", userData: t }, function (t) {
                                                delete t.action, delete t.callbackStamp, delete t.callFrameId, n(t);
                                            });
                                        } catch (r) {
                                            throw Error("Error setting user data: ".concat(r));
                                        }
                                    });
                            })),
                            function (t) {
                                return Y.apply(this, arguments);
                            }),
                    },
                    {
                        key: "validateAudioLevelInterval",
                        value: function (t) {
                            if (t && (t < 100 || "number" != typeof t)) throw Error("The interval must be a number greater than or equal to 100 milliseconds.");
                        },
                    },
                    {
                        key: "startLocalAudioLevelObserver",
                        value: function (t) {
                            var i = this;
                            if (typeof AudioWorkletNode > "u" && !n9()) throw Error("startLocalAudioLevelObserver() is not supported on this browser");
                            if ((this.validateAudioLevelInterval(t), this._callMachineInitialized))
                                return new Promise(function (n, r) {
                                    i.sendMessageToCallMachine({ action: "start-local-audio-level-observer", interval: t }, function (t) {
                                        t.error ? r({ error: t.error }) : n();
                                    });
                                });
                            this._preloadCache.localAudioLevelObserver = { enabled: !0, interval: t };
                        },
                    },
                    {
                        key: "stopLocalAudioLevelObserver",
                        value: function () {
                            (this._preloadCache.localAudioLevelObserver = null), (this._localAudioLevel = 0), this.sendMessageToCallMachine({ action: "stop-local-audio-level-observer" });
                        },
                    },
                    {
                        key: "startRemoteParticipantsAudioLevelObserver",
                        value: function (t) {
                            var i = this;
                            if ((this.validateAudioLevelInterval(t), this._callMachineInitialized))
                                return new Promise(function (n, r) {
                                    i.sendMessageToCallMachine({ action: "start-remote-participants-audio-level-observer", interval: t }, function (t) {
                                        t.error ? r({ error: t.error }) : n();
                                    });
                                });
                            this._preloadCache.remoteParticipantsAudioLevelObserver = { enabled: !0, interval: t };
                        },
                    },
                    {
                        key: "stopRemoteParticipantsAudioLevelObserver",
                        value: function () {
                            (this._preloadCache.remoteParticipantsAudioLevelObserver = null), (this._remoteParticipantsAudioLevel = {}), this.sendMessageToCallMachine({ action: "stop-remote-participants-audio-level-observer" });
                        },
                    },
                    {
                        key: "startCamera",
                        value:
                            ((q = y(function* () {
                                var t = this,
                                    i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                                if (
                                    (rQ(this._callObjectMode, "startCamera()"),
                                    rK(this._callState, this._isPreparingToJoin, "startCamera()", "Did you mean to use setLocalAudio() and/or setLocalVideo() instead?"),
                                    r7(this._testCallInProgress, "startCamera()"),
                                    this.needsLoad())
                                )
                                    try {
                                        yield this.load(i);
                                    } catch (n) {
                                        return Promise.reject(n);
                                    }
                                else {
                                    if (this._didPreAuth) {
                                        if (i.url && i.url !== this.properties.url) return console.error("url in startCamera() is different than the one used in preAuth()"), Promise.reject();
                                        if (i.token && i.token !== this.properties.token) return console.error("token in startCamera() is different than the one used in preAuth()"), Promise.reject();
                                    }
                                    this.validateProperties(i), (this.properties = rR(rR({}, this.properties), i));
                                }
                                return new Promise(function (i) {
                                    t.sendMessageToCallMachine({ action: "start-camera", properties: rJ(t.properties, t._callFrameId), preloadCache: rJ(t._preloadCache, t._callFrameId) }, function (t) {
                                        delete t.action, delete t.callbackStamp, i(t);
                                    });
                                });
                            })),
                            function () {
                                return q.apply(this, arguments);
                            }),
                    },
                    {
                        key: "validateCustomTrack",
                        value: function (t, i, n) {
                            if (n && n.length > 50) throw Error("Custom track `trackName` must not be more than 50 characters");
                            if (i && "music" !== i && "speech" !== i && !(i instanceof Object)) throw Error("Custom track `mode` must be either `music` | `speech` | `DailyMicAudioModeSettings` or `undefined`");
                            if (n && ["cam-audio", "cam-video", "screen-video", "screen-audio", "rmpAudio", "rmpVideo", "customVideoDefaults"].includes(n))
                                throw Error("Custom track `trackName` must not match a track name already used by daily: cam-audio, cam-video, customVideoDefaults, screen-video, screen-audio, rmpAudio, rmpVideo");
                            if (!(t instanceof MediaStreamTrack)) throw Error("Custom tracks provided must be instances of MediaStreamTrack");
                        },
                    },
                    {
                        key: "startCustomTrack",
                        value: function () {
                            var t = this,
                                i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : { track: track, mode: mode, trackName: trackName };
                            return (
                                rX(),
                                r4(this._callState, "startCustomTrack()"),
                                this.validateCustomTrack(i.track, i.mode, i.trackName),
                                new Promise(function (n, r) {
                                    (t._sharedTracks.customTrack = i.track),
                                        (i.track = nF),
                                        t.sendMessageToCallMachine({ action: "start-custom-track", properties: i }, function (t) {
                                            t.error ? r({ error: t.error }) : n(t.mediaTag);
                                        });
                                })
                            );
                        },
                    },
                    {
                        key: "stopCustomTrack",
                        value: function (t) {
                            var i = this;
                            return (
                                rX(),
                                r4(this._callState, "stopCustomTrack()"),
                                new Promise(function (n) {
                                    i.sendMessageToCallMachine({ action: "stop-custom-track", mediaTag: t }, function (t) {
                                        n(t.mediaTag);
                                    });
                                })
                            );
                        },
                    },
                    {
                        key: "setCamera",
                        value: function (t) {
                            var i = this;
                            return (
                                rZ(),
                                r6(this._callMachineInitialized, "setCamera()"),
                                new Promise(function (n) {
                                    i.sendMessageToCallMachine({ action: "set-camera", cameraDeviceId: t }, function (t) {
                                        n({ device: t.device });
                                    });
                                })
                            );
                        },
                    },
                    {
                        key: "setAudioDevice",
                        value:
                            ((B = y(function* (t) {
                                return rZ(), this.nativeUtils().setAudioDevice(t), { deviceId: yield this.nativeUtils().getAudioDevice() };
                            })),
                            function (t) {
                                return B.apply(this, arguments);
                            }),
                    },
                    {
                        key: "cycleCamera",
                        value: function () {
                            var t = this,
                                i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                            return new Promise(function (n) {
                                t.sendMessageToCallMachine({ action: "cycle-camera", properties: i }, function (t) {
                                    n({ device: t.device });
                                });
                            });
                        },
                    },
                    {
                        key: "cycleMic",
                        value: function () {
                            var t = this;
                            return (
                                rX(),
                                new Promise(function (i) {
                                    t.sendMessageToCallMachine({ action: "cycle-mic" }, function (t) {
                                        i({ device: t.device });
                                    });
                                })
                            );
                        },
                    },
                    {
                        key: "getCameraFacingMode",
                        value: function () {
                            var t = this;
                            return (
                                rZ(),
                                new Promise(function (i) {
                                    t.sendMessageToCallMachine({ action: "get-camera-facing-mode" }, function (t) {
                                        i(t.facingMode);
                                    });
                                })
                            );
                        },
                    },
                    {
                        key: "setInputDevicesAsync",
                        value:
                            ((U = y(function* (t) {
                                var i = this,
                                    n = t.audioDeviceId,
                                    r = t.videoDeviceId,
                                    a = t.audioSource,
                                    s = t.videoSource;
                                return (
                                    rX(),
                                    void 0 !== a && (n = a),
                                    void 0 !== s && (r = s),
                                    n && ((this._preloadCache.audioDeviceId = n), (this._sharedTracks.audioDeviceId = n)),
                                    r && ((this._preloadCache.videoDeviceId = r), (this._sharedTracks.videoDeviceId = r)),
                                    this._callObjectMode && this.needsLoad()
                                        ? { camera: { deviceId: this._preloadCache.videoDeviceId }, mic: { deviceId: this._preloadCache.audioDeviceId }, speaker: { deviceId: this._preloadCache.outputDeviceId } }
                                        : (n instanceof MediaStreamTrack && (n = nF),
                                          r instanceof MediaStreamTrack && (r = nF),
                                          new Promise(function (t) {
                                              i.sendMessageToCallMachine({ action: "set-input-devices", audioDeviceId: n, videoDeviceId: r }, function (n) {
                                                  delete n.action,
                                                      delete n.callbackStamp,
                                                      n.returnPreloadCache
                                                          ? t({ camera: { deviceId: i._preloadCache.videoDeviceId }, mic: { deviceId: i._preloadCache.audioDeviceId }, speaker: { deviceId: i._preloadCache.outputDeviceId } })
                                                          : t(n);
                                              });
                                          }))
                                );
                            })),
                            function (t) {
                                return U.apply(this, arguments);
                            }),
                    },
                    {
                        key: "setOutputDeviceAsync",
                        value:
                            ((j = y(function* (t) {
                                var i = this,
                                    n = t.outputDeviceId;
                                return (
                                    rX(),
                                    n && (this._preloadCache.outputDeviceId = n),
                                    this._callObjectMode && this.needsLoad()
                                        ? { camera: { deviceId: this._preloadCache.videoDeviceId }, mic: { deviceId: this._preloadCache.audioDeviceId }, speaker: { deviceId: this._preloadCache.outputDeviceId } }
                                        : new Promise(function (t) {
                                              i.sendMessageToCallMachine({ action: "set-output-device", outputDeviceId: n }, function (n) {
                                                  delete n.action,
                                                      delete n.callbackStamp,
                                                      n.returnPreloadCache
                                                          ? t({ camera: { deviceId: i._preloadCache.videoDeviceId }, mic: { deviceId: i._preloadCache.audioDeviceId }, speaker: { deviceId: i._preloadCache.outputDeviceId } })
                                                          : t(n);
                                              });
                                          })
                                );
                            })),
                            function (t) {
                                return j.apply(this, arguments);
                            }),
                    },
                    {
                        key: "getInputDevices",
                        value:
                            ((F = y(function* () {
                                var t = this;
                                return this._callObjectMode && this.needsLoad()
                                    ? { camera: { deviceId: this._preloadCache.videoDeviceId }, mic: { deviceId: this._preloadCache.audioDeviceId }, speaker: { deviceId: this._preloadCache.outputDeviceId } }
                                    : new Promise(function (i) {
                                          t.sendMessageToCallMachine({ action: "get-input-devices" }, function (n) {
                                              delete n.action,
                                                  delete n.callbackStamp,
                                                  n.returnPreloadCache
                                                      ? i({ camera: { deviceId: t._preloadCache.videoDeviceId }, mic: { deviceId: t._preloadCache.audioDeviceId }, speaker: { deviceId: t._preloadCache.outputDeviceId } })
                                                      : i(n);
                                          });
                                      });
                            })),
                            function () {
                                return F.apply(this, arguments);
                            }),
                    },
                    {
                        key: "nativeInCallAudioMode",
                        value: function () {
                            return rZ(), this._nativeInCallAudioMode;
                        },
                    },
                    {
                        key: "setNativeInCallAudioMode",
                        value: function (t) {
                            if ((rZ(), [rU, "voice"].includes(t))) {
                                if (t !== this._nativeInCallAudioMode)
                                    return (
                                        (this._nativeInCallAudioMode = t),
                                        !this.disableReactNativeAutoDeviceManagement("audio") && rH(this._callState, this._isPreparingToJoin) && this.nativeUtils().setAudioMode(this._nativeInCallAudioMode),
                                        this
                                    );
                            } else console.error("invalid in-call audio mode specified: ", t);
                        },
                    },
                    {
                        key: "preAuth",
                        value:
                            ((R = y(function* () {
                                var t = this,
                                    i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                                if ((rQ(this._callObjectMode, "preAuth()"), rK(this._callState, this._isPreparingToJoin, "preAuth()"), r7(this._testCallInProgress, "preAuth()"), this.needsLoad() && (yield this.load(i)), !i.url))
                                    throw Error("preAuth() requires at least a url to be provided");
                                return (
                                    this.validateProperties(i),
                                    (this.properties = rR(rR({}, this.properties), i)),
                                    new Promise(function (i, n) {
                                        t.sendMessageToCallMachine({ action: "daily-method-preauth", properties: rJ(t.properties, t._callFrameId), preloadCache: rJ(t._preloadCache, t._callFrameId) }, function (r) {
                                            return r.error ? n(r.error) : r.access ? ((t._didPreAuth = !0), void i({ access: r.access })) : n(Error("unknown error in preAuth()"));
                                        });
                                    })
                                );
                            })),
                            function () {
                                return R.apply(this, arguments);
                            }),
                    },
                    {
                        key: "load",
                        value:
                            ((N = y(function* (t) {
                                var i = this;
                                if (this.needsLoad()) {
                                    if (this._destroyed && (this._logUseAfterDestroy(), this.strictMode)) throw Error("Use after destroy");
                                    if ((t && (this.validateProperties(t), (this.properties = rR(rR({}, this.properties), t))), !this._callObjectMode && !this.properties.url))
                                        throw Error("can't load iframe meeting because url property isn't set");
                                    this._updateCallState(ix);
                                    try {
                                        this.emit(i0, { action: i0 });
                                    } catch (n) {
                                        console.log("could not emit 'loading'", n);
                                    }
                                    return this._callObjectMode
                                        ? new Promise(function (t, n) {
                                              i._callObjectLoader.cancel();
                                              var r = Date.now();
                                              i._callObjectLoader.load(
                                                  i.properties.dailyConfig,
                                                  function (n) {
                                                      (i._bundleLoadTime = n ? "no-op" : Date.now() - r), i._updateCallState(iI), n && i.emit(iq, { action: iq }), t();
                                                  },
                                                  function (t, r) {
                                                      if ((i.emit(i9, { action: i9, error: t }), !r)) {
                                                          i._updateCallState(iN), i.resetMeetingDependentVars();
                                                          var a = {
                                                              action: nP,
                                                              errorMsg: t.msg,
                                                              error: { type: "connection-error", msg: "Failed to load call object bundle.", details: { on: "load", sourceError: t, bundleUrl: en(i.properties.dailyConfig) } },
                                                          };
                                                          i._maybeSendToSentry(a), i.emit(nP, a), n(t.msg);
                                                      }
                                                  }
                                              );
                                          })
                                        : ((this._iframe.src = ei(this.assembleMeetingUrl(), this.properties.dailyConfig)),
                                          new Promise(function (t, n) {
                                              i._loadedCallback = function (r) {
                                                  i._callState !== iN ? (i._updateCallState(iI), (i.properties.cssFile || i.properties.cssText) && i.loadCss(i.properties), t()) : n(r);
                                              };
                                          }));
                                }
                            })),
                            function (t) {
                                return N.apply(this, arguments);
                            }),
                    },
                    {
                        key: "join",
                        value:
                            ((O = y(function* () {
                                var t = this,
                                    i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                                r7(this._testCallInProgress, "join()");
                                var n = !1;
                                if (this.needsLoad()) {
                                    this.updateIsPreparingToJoin(!0);
                                    try {
                                        yield this.load(i);
                                    } catch (r) {
                                        return this.updateIsPreparingToJoin(!1), Promise.reject(r);
                                    }
                                } else {
                                    if (((n = !(!this.properties.cssFile && !this.properties.cssText)), this._didPreAuth)) {
                                        if (i.url && i.url !== this.properties.url) return console.error("url in join() is different than the one used in preAuth()"), this.updateIsPreparingToJoin(!1), Promise.reject();
                                        if (i.token && i.token !== this.properties.token) return console.error("token in join() is different than the one used in preAuth()"), this.updateIsPreparingToJoin(!1), Promise.reject();
                                    }
                                    if (i.url && !this._callObjectMode && i.url && i.url !== this.properties.url)
                                        return console.error("url in join() is different than the one used in load() (".concat(this.properties.url, " -> ").concat(i.url, ")")), this.updateIsPreparingToJoin(!1), Promise.reject();
                                    this.validateProperties(i), (this.properties = rR(rR({}, this.properties), i));
                                }
                                if (
                                    (void 0 !== i.showLocalVideo && (this._callObjectMode ? console.error("showLocalVideo is not available in callObject mode") : (this._showLocalVideo = !!i.showLocalVideo)),
                                    void 0 !== i.showParticipantsBar && (this._callObjectMode ? console.error("showParticipantsBar is not available in callObject mode") : (this._showParticipantsBar = !!i.showParticipantsBar)),
                                    this._callState === iD || this._callState === iP)
                                )
                                    return console.warn("already joined meeting, call leave() before joining again"), void this.updateIsPreparingToJoin(!1);
                                this._updateCallState(iP, !1);
                                try {
                                    this.emit(i2, { action: i2 });
                                } catch (a) {
                                    console.log("could not emit 'joining-meeting'", a);
                                }
                                return (
                                    this._preloadCache.inputSettings || (this._preloadCache.inputSettings = {}),
                                    i.inputSettings && i.inputSettings.audio && (this._preloadCache.inputSettings.audio = i.inputSettings.audio),
                                    i.inputSettings && i.inputSettings.video && (this._preloadCache.inputSettings.video = i.inputSettings.video),
                                    this.sendMessageToCallMachine({ action: "join-meeting", properties: rJ(this.properties, this._callFrameId), preloadCache: rJ(this._preloadCache, this._callFrameId) }),
                                    new Promise(function (i, r) {
                                        t._joinedCallback = function (a, s) {
                                            if (t._callState !== iN) {
                                                if ((t._updateCallState(iD), a))
                                                    for (var o in a) {
                                                        if (t._callObjectMode) {
                                                            var c = t._callMachine().store;
                                                            r8(a[o], c), rb(a[o], c), rk(a[o], t._participants[o], c);
                                                        }
                                                        (t._participants[o] = rR({}, a[o])), t.toggleParticipantAudioBasedOnNativeAudioFocus();
                                                    }
                                                n && t.loadCss(t.properties), i(a);
                                            } else r(s);
                                        };
                                    })
                                );
                            })),
                            function () {
                                return O.apply(this, arguments);
                            }),
                    },
                    {
                        key: "leave",
                        value:
                            ((D = y(function* () {
                                var t = this;
                                return (
                                    r7(this._testCallInProgress, "leave()"),
                                    new Promise(function (i) {
                                        if (t._callState === iO || t._callState === iN) i();
                                        else if (t._callObjectLoader && !t._callObjectLoader.loaded) {
                                            t._callObjectLoader.cancel(), t._updateCallState(iO), t.resetMeetingDependentVars();
                                            try {
                                                t.emit(iO, { action: iO });
                                            } catch (n) {
                                                console.log("could not emit 'left-meeting'", n);
                                            }
                                            i();
                                        } else (t._resolveLeave = i), t.sendMessageToCallMachine({ action: "leave-meeting" });
                                    })
                                );
                            })),
                            function () {
                                return D.apply(this, arguments);
                            }),
                    },
                    {
                        key: "startScreenShare",
                        value:
                            ((P = y(function* () {
                                var t = this,
                                    i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                                if (
                                    (r6(this._callMachineInitialized, "startScreenShare()"),
                                    i.screenVideoSendSettings && this._validateVideoSendSettings("screenVideo", i.screenVideoSendSettings),
                                    i.mediaStream && ((this._sharedTracks.screenMediaStream = i.mediaStream), (i.mediaStream = nF)),
                                    "u" > typeof DailyNativeUtils && void 0 !== DailyNativeUtils.isIOS && DailyNativeUtils.isIOS)
                                ) {
                                    var n = this.nativeUtils();
                                    if (yield n.isScreenBeingCaptured()) return void this.emit(nI, { action: nI, type: "screen-share-error", errorMsg: "Could not start the screen sharing. The screen is already been captured!" });
                                    n.setSystemScreenCaptureStartCallback(function () {
                                        n.setSystemScreenCaptureStartCallback(null), t.sendMessageToCallMachine({ action: nO, captureOptions: i });
                                    }),
                                        n.presentSystemScreenCapturePrompt();
                                } else this.sendMessageToCallMachine({ action: nO, captureOptions: i });
                            })),
                            function () {
                                return P.apply(this, arguments);
                            }),
                    },
                    {
                        key: "stopScreenShare",
                        value: function () {
                            r6(this._callMachineInitialized, "stopScreenShare()"), this.sendMessageToCallMachine({ action: "local-screen-stop" });
                        },
                    },
                    {
                        key: "startRecording",
                        value: function () {
                            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                            this.sendMessageToCallMachine(rR({ action: "local-recording-start" }, t));
                        },
                    },
                    {
                        key: "updateRecording",
                        value: function (t) {
                            var i = t.layout,
                                n = t.instanceId;
                            this.sendMessageToCallMachine({ action: "daily-method-update-recording", layout: void 0 === i ? { preset: "default" } : i, instanceId: n });
                        },
                    },
                    {
                        key: "stopRecording",
                        value: function () {
                            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                            this.sendMessageToCallMachine(rR({ action: "local-recording-stop" }, t));
                        },
                    },
                    {
                        key: "startLiveStreaming",
                        value: function () {
                            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                            this.sendMessageToCallMachine(rR({ action: "daily-method-start-live-streaming" }, t));
                        },
                    },
                    {
                        key: "updateLiveStreaming",
                        value: function (t) {
                            var i = t.layout,
                                n = t.instanceId;
                            this.sendMessageToCallMachine({ action: "daily-method-update-live-streaming", layout: void 0 === i ? { preset: "default" } : i, instanceId: n });
                        },
                    },
                    {
                        key: "addLiveStreamingEndpoints",
                        value: function (t) {
                            var i = t.endpoints,
                                n = t.instanceId;
                            this.sendMessageToCallMachine({ action: nN, endpointsOp: "add-endpoints", endpoints: i, instanceId: n });
                        },
                    },
                    {
                        key: "removeLiveStreamingEndpoints",
                        value: function (t) {
                            var i = t.endpoints,
                                n = t.instanceId;
                            this.sendMessageToCallMachine({ action: nN, endpointsOp: "remove-endpoints", endpoints: i, instanceId: n });
                        },
                    },
                    {
                        key: "stopLiveStreaming",
                        value: function () {
                            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                            this.sendMessageToCallMachine(rR({ action: "daily-method-stop-live-streaming" }, t));
                        },
                    },
                    {
                        key: "validateDailyConfig",
                        value: function (t) {
                            t.camSimulcastEncodings &&
                                (console.warn("camSimulcastEncodings is deprecated. Use sendSettings, found in DailyCallOptions, to provide camera simulcast settings."), this.validateSimulcastEncodings(t.camSimulcastEncodings)),
                                t.screenSimulcastEncodings && console.warn("screenSimulcastEncodings is deprecated. Use sendSettings, found in DailyCallOptions, to provide screen simulcast settings."),
                                n0().match(/Linux; Android/) && t.noAutoDefaultDeviceChange && console.warn("noAutoDefaultDeviceChange is not supported on Android, and will be ignored.");
                        },
                    },
                    {
                        key: "validateSimulcastEncodings",
                        value: function (t) {
                            var i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                                n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                            if (t) {
                                if (!(t instanceof Array)) throw Error("encodings must be an Array");
                                if (!au(t.length, 1, 3)) throw Error("encodings must be an Array with between 1 to ".concat(3, " layers"));
                                for (var r = 0; r < t.length; r++) {
                                    var a = t[r];
                                    for (var s in (this._validateEncodingLayerHasValidProperties(a), a))
                                        if (rq.includes(s)) {
                                            if ("number" != typeof a[s]) throw Error("".concat(s, " must be a number"));
                                            if (i) {
                                                var o = i[s],
                                                    c = o.min,
                                                    l = o.max;
                                                if (!au(a[s], c, l)) throw Error("".concat(s, " value not in range. valid range: ").concat(c, " to ").concat(l));
                                            }
                                        } else if (!["active", "scalabilityMode"].includes(s)) throw Error("Invalid key ".concat(s, ", valid keys are:") + Object.values(rq));
                                    if (n && !a.hasOwnProperty("maxBitrate")) throw Error("maxBitrate is not specified");
                                }
                            }
                        },
                    },
                    {
                        key: "startRemoteMediaPlayer",
                        value:
                            ((I = y(function* (t) {
                                var i = this,
                                    n = t.url,
                                    r = t.settings,
                                    a = void 0 === r ? { state: nU.PLAY } : r;
                                try {
                                    (function (t) {
                                        if ("string" != typeof t) throw Error('url parameter must be "string" type');
                                    })(n),
                                        al(a),
                                        (function (t) {
                                            for (var i in t) if (!rY.includes(i)) throw Error("Invalid key ".concat(i, ", valid keys are: ").concat(rY));
                                            t.simulcastEncodings && this.validateSimulcastEncodings(t.simulcastEncodings, r9, !0);
                                        })(a);
                                } catch (s) {
                                    throw (
                                        (console.error("invalid argument Error: ".concat(s)),
                                        console.error('startRemoteMediaPlayer arguments must be of the form:\n  { url: "playback url",\n  settings?:\n  {state: "play"|"pause", simulcastEncodings?: [{}] } }'),
                                        s)
                                    );
                                }
                                return new Promise(function (t, r) {
                                    i.sendMessageToCallMachine({ action: "daily-method-start-remote-media-player", url: n, settings: a }, function (i) {
                                        i.error ? r({ error: i.error, errorMsg: i.errorMsg }) : t({ session_id: i.session_id, remoteMediaPlayerState: { state: i.state, settings: i.settings } });
                                    });
                                });
                            })),
                            function (t) {
                                return I.apply(this, arguments);
                            }),
                    },
                    {
                        key: "stopRemoteMediaPlayer",
                        value:
                            ((x = y(function* (t) {
                                var i = this;
                                if ("string" != typeof t) throw Error(" remotePlayerID must be of type string");
                                return new Promise(function (n, r) {
                                    i.sendMessageToCallMachine({ action: "daily-method-stop-remote-media-player", session_id: t }, function (t) {
                                        t.error ? r({ error: t.error, errorMsg: t.errorMsg }) : n();
                                    });
                                });
                            })),
                            function (t) {
                                return x.apply(this, arguments);
                            }),
                    },
                    {
                        key: "updateRemoteMediaPlayer",
                        value:
                            ((_ = y(function* (t) {
                                var i = this,
                                    n = t.session_id,
                                    r = t.settings;
                                try {
                                    al(r);
                                } catch (a) {
                                    throw (
                                        (console.error("invalid argument Error: ".concat(a)),
                                        console.error('updateRemoteMediaPlayer arguments must be of the form:\n  session_id: "participant session",\n  { settings?: {state: "play"|"pause"} }'),
                                        a)
                                    );
                                }
                                return new Promise(function (t, a) {
                                    i.sendMessageToCallMachine({ action: "daily-method-update-remote-media-player", session_id: n, settings: r }, function (i) {
                                        i.error ? a({ error: i.error, errorMsg: i.errorMsg }) : t({ session_id: i.session_id, remoteMediaPlayerState: { state: i.state, settings: i.settings } });
                                    });
                                });
                            })),
                            function (t) {
                                return _.apply(this, arguments);
                            }),
                    },
                    {
                        key: "startTranscription",
                        value: function (t) {
                            this.sendMessageToCallMachine(rR({ action: "daily-method-start-transcription" }, t));
                        },
                    },
                    {
                        key: "stopTranscription",
                        value: function () {
                            this.sendMessageToCallMachine({ action: "daily-method-stop-transcription" });
                        },
                    },
                    {
                        key: "startDialOut",
                        value:
                            ((L = y(function* (t) {
                                var i = this;
                                r4(this._callState, "startDialOut()");
                                var n = function (t) {
                                    if (t) {
                                        if (!Array.isArray(t)) throw Error("Error starting dial out: audio codec must be an array");
                                        if (t.length <= 0) throw Error("Error starting dial out: audio codec array specified but empty");
                                        t.forEach(function (t) {
                                            if ("string" != typeof t) throw Error("Error starting dial out: audio codec must be a string");
                                            if ("OPUS" !== t && "PCMU" !== t && "PCMA" !== t && "G722" !== t) throw Error("Error starting dial out: audio codec must be one of OPUS, PCMU, PCMA, G722");
                                        });
                                    }
                                };
                                if (!t.sipUri && !t.phoneNumber) throw Error("Error starting dial out: either a sip uri or phone number must be provided");
                                if (t.sipUri && t.phoneNumber) throw Error("Error starting dial out: only one of sip uri or phone number must be provided");
                                if (t.sipUri) {
                                    if ("string" != typeof t.sipUri) throw Error("Error starting dial out: sipUri must be a string");
                                    if (!t.sipUri.startsWith("sip:")) throw Error("Error starting dial out: Invalid SIP URI, must start with 'sip:'");
                                    if (t.video && "boolean" != typeof t.video) throw Error("Error starting dial out: video must be a boolean value");
                                    !(function (t) {
                                        if (t && (n(t.audio), t.video)) {
                                            if (!Array.isArray(t.video)) throw Error("Error starting dial out: video codec must be an array");
                                            if (t.video.length <= 0) throw Error("Error starting dial out: video codec array specified but empty");
                                            t.video.forEach(function (t) {
                                                if ("string" != typeof t) throw Error("Error starting dial out: video codec must be a string");
                                                if ("H264" !== t && "VP8" !== t) throw Error("Error starting dial out: video codec must be H264 or VP8");
                                            });
                                        }
                                    })(t.codecs);
                                }
                                if (t.phoneNumber) {
                                    if ("string" != typeof t.phoneNumber) throw Error("Error starting dial out: phoneNumber must be a string");
                                    if (!/^\+\d{1,}$/.test(t.phoneNumber)) throw Error("Error starting dial out: Invalid phone number, must be valid phone number as per E.164");
                                    t.codecs && n(t.codecs.audio);
                                }
                                if (t.callerId) {
                                    if ("string" != typeof t.callerId) throw Error("Error starting dial out: callerId must be a string");
                                    if (t.sipUri) throw Error("Error starting dial out: callerId not allowed with sipUri");
                                }
                                if (t.displayName) {
                                    if ("string" != typeof t.displayName) throw Error("Error starting dial out: displayName must be a string");
                                    if (t.displayName.length >= 200) throw Error("Error starting dial out: displayName length must be less than 200");
                                }
                                return new Promise(function (n, r) {
                                    i.sendMessageToCallMachine(rR({ action: "dialout-start" }, t), function (t) {
                                        t.error ? r(t.error) : n(t);
                                    });
                                });
                            })),
                            function (t) {
                                return L.apply(this, arguments);
                            }),
                    },
                    {
                        key: "stopDialOut",
                        value: function (t) {
                            var i = this;
                            return (
                                r4(this._callState, "stopDialOut()"),
                                new Promise(function (n, r) {
                                    i.sendMessageToCallMachine(rR({ action: "dialout-stop" }, t), function (t) {
                                        t.error ? r(t.error) : n(t);
                                    });
                                })
                            );
                        },
                    },
                    {
                        key: "sendDTMF",
                        value:
                            ((A = y(function* (t) {
                                var i = this;
                                return (
                                    r4(this._callState, "sendDTMF()"),
                                    (function (t) {
                                        var i = t.sessionId,
                                            n = t.tones;
                                        if (!i || !n) throw Error("sessionId and tones are mandatory parameter");
                                        if ("string" != typeof i || "string" != typeof n) throw Error("sessionId and tones should be of string type");
                                        if (n.length > 20) throw Error("tones string must be upto 20 characters");
                                        var r = n.match(/[^0-9A-D*#]/g);
                                        if (r && r[0]) throw Error("".concat(r[0], " is not valid DTMF tone"));
                                    })(t),
                                    new Promise(function (n, r) {
                                        i.sendMessageToCallMachine(rR({ action: "send-dtmf" }, t), function (t) {
                                            t.error ? r(t.error) : n(t);
                                        });
                                    })
                                );
                            })),
                            function (t) {
                                return A.apply(this, arguments);
                            }),
                    },
                    {
                        key: "getNetworkStats",
                        value: function () {
                            var t = this;
                            return this._callState !== iD
                                ? { stats: { latest: {} } }
                                : new Promise(function (i) {
                                      t.sendMessageToCallMachine({ action: "get-calc-stats" }, function (n) {
                                          i(rR({ stats: n.stats }, t._network));
                                      });
                                  });
                        },
                    },
                    {
                        key: "testWebsocketConnectivity",
                        value:
                            ((M = y(function* () {
                                var t = this;
                                if ((r7(this._testCallInProgress, "testWebsocketConnectivity()"), this.needsLoad()))
                                    try {
                                        yield this.load();
                                    } catch (i) {
                                        return Promise.reject(i);
                                    }
                                return new Promise(function (i, n) {
                                    t.sendMessageToCallMachine({ action: "test-websocket-connectivity" }, function (t) {
                                        t.error ? n(t.error) : i(t.results);
                                    });
                                });
                            })),
                            function () {
                                return M.apply(this, arguments);
                            }),
                    },
                    {
                        key: "abortTestWebsocketConnectivity",
                        value: function () {
                            this.sendMessageToCallMachine({ action: "abort-test-websocket-connectivity" });
                        },
                    },
                    {
                        key: "_validateVideoTrackForNetworkTests",
                        value: function (t) {
                            var i, n, r, a;
                            return t
                                ? t instanceof MediaStreamTrack
                                    ? ((i = t),
                                      (a = (n = { isLocalScreenVideo: !1 }).isLocalScreenVideo),
                                      (!!i && "live" === i.readyState && ((r = i), (!!a && "Chrome" === nJ()) || !r.muted || !!rI.has(r.id))) || (console.error("Video track is not playable. This test needs a live video track."), !1))
                                    : (console.error("Video track needs to be of type `MediaStreamTrack`."), !1)
                                : (console.error("Missing video track. You must provide a video track in order to run this test."), !1);
                        },
                    },
                    {
                        key: "testCallQuality",
                        value:
                            ((E = y(function* (t) {
                                var i = this;
                                if (
                                    ((function (t) {
                                        var i = arguments.length > 2 ? arguments[2] : void 0;
                                        if (t) {
                                            var n = "".concat(
                                                arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "This daily-js method",
                                                " can not be called after preAuth(), startCamera(), or join() and call state has been initialized."
                                            );
                                            throw (i && (n += " ".concat(i)), console.error(n), Error(n));
                                        }
                                    })(this._callMachineInitialized, "testCallQuality()"),
                                    t.videoTrack && !this._validateVideoTrackForNetworkTests(t.videoTrack))
                                )
                                    throw Error("Video track error");
                                var n = this._testCallAlreadyInProgress,
                                    r = function (t) {
                                        n || (i._testCallInProgress = t);
                                    };
                                r(!0);
                                var s = t.videoTrack,
                                    o = a(t, rP);
                                if (((this._sharedTracks.videoTrackForConnectionQualityTest = s), this.needsLoad()))
                                    try {
                                        var c = this._callState;
                                        yield this.load(), (this._callState = c);
                                    } catch (l) {
                                        return r(!1), Promise.reject(l);
                                    }
                                return new Promise(function (t) {
                                    i.sendMessageToCallMachine(rR(rR({ action: "test-call-quality" }, o), {}, { dailyJsVersion: i.properties.dailyJsVersion }), function (n) {
                                        var s = n.results,
                                            o = s.result,
                                            c = a(s, rD);
                                        if ("failed" === o) {
                                            var l,
                                                u = rR({}, c);
                                            null !== (l = c.error) && void 0 !== l && l.details
                                                ? ((c.error.details = JSON.parse(c.error.details)), (u.error = rR(rR({}, u.error), {}, { details: rR({}, u.error.details) })), (u.error.details.duringTest = "testCallQuality"))
                                                : ((u.error = u.error ? rR({}, u.error) : {}), (u.error.details = { duringTest: "testCallQuality" })),
                                                i._maybeSendToSentry(u);
                                        }
                                        r(!1), t(rR({ result: o }, c));
                                    });
                                });
                            })),
                            function (t) {
                                return E.apply(this, arguments);
                            }),
                    },
                    {
                        key: "stopTestCallQuality",
                        value: function () {
                            this.sendMessageToCallMachine({ action: "stop-test-call-quality" });
                        },
                    },
                    {
                        key: "testConnectionQuality",
                        value:
                            ((C = y(function* (t) {
                                console.warn("testConnectionQuality() is deprecated: use testPeerToPeerCallQuality() instead");
                                var i = yield this.testPeerToPeerCallQuality(t),
                                    n = { result: i.result, secondsElapsed: i.secondsElapsed };
                                return i.data && (n.data = { maxRTT: i.data.maxRoundTripTime, packetLoss: i.data.avgRecvPacketLoss }), n;
                            })),
                            function (t) {
                                return C.apply(this, arguments);
                            }),
                    },
                    {
                        key: "testPeerToPeerCallQuality",
                        value:
                            ((T = y(function* (t) {
                                var i = this;
                                if ((r7(this._testCallInProgress, "testConnectionQuality()"), this.needsLoad()))
                                    try {
                                        yield this.load();
                                    } catch (n) {
                                        return Promise.reject(n);
                                    }
                                var r = t.videoTrack,
                                    a = t.duration;
                                if (!this._validateVideoTrackForNetworkTests(r)) throw Error("Video track error");
                                return (
                                    (this._sharedTracks.videoTrackForConnectionQualityTest = r),
                                    new Promise(function (t, n) {
                                        i.sendMessageToCallMachine({ action: "test-p2p-call-quality", duration: a }, function (i) {
                                            i.error ? n(i.error) : t(i.results);
                                        });
                                    })
                                );
                            })),
                            function (t) {
                                return T.apply(this, arguments);
                            }),
                    },
                    {
                        key: "stopTestConnectionQuality",
                        value: function () {
                            console.warn("stopTestConnectionQuality() is deprecated: use stopTestPeerToPeerCallQuality() instead"), this.stopTestPeerToPeerCallQuality();
                        },
                    },
                    {
                        key: "stopTestPeerToPeerCallQuality",
                        value: function () {
                            this.sendMessageToCallMachine({ action: "stop-test-p2p-call-quality" });
                        },
                    },
                    {
                        key: "testNetworkConnectivity",
                        value:
                            ((w = y(function* (t) {
                                var i = this;
                                if ((r7(this._testCallInProgress, "testNetworkConnectivity()"), this.needsLoad()))
                                    try {
                                        yield this.load();
                                    } catch (n) {
                                        return Promise.reject(n);
                                    }
                                if (!this._validateVideoTrackForNetworkTests(t)) throw Error("Video track error");
                                return (
                                    (this._sharedTracks.videoTrackForNetworkConnectivityTest = t),
                                    new Promise(function (t, n) {
                                        i.sendMessageToCallMachine({ action: "test-network-connectivity" }, function (i) {
                                            i.error ? n(i.error) : t(i.results);
                                        });
                                    })
                                );
                            })),
                            function (t) {
                                return w.apply(this, arguments);
                            }),
                    },
                    {
                        key: "abortTestNetworkConnectivity",
                        value: function () {
                            this.sendMessageToCallMachine({ action: "abort-test-network-connectivity" });
                        },
                    },
                    {
                        key: "getCpuLoadStats",
                        value: function () {
                            var t = this;
                            return new Promise(function (i, n) {
                                t._callState === iD
                                    ? t.sendMessageToCallMachine({ action: "get-cpu-load-stats" }, function (t) {
                                          i(t.cpuStats);
                                      })
                                    : i({ cpuLoadState: void 0, cpuLoadStateReason: void 0, stats: {} });
                            });
                        },
                    },
                    {
                        key: "_validateEncodingLayerHasValidProperties",
                        value: function (t) {
                            var i;
                            if (!((null === (i = Object.keys(t)) || void 0 === i ? void 0 : i.length) > 0)) throw Error("Empty encoding is not allowed. At least one of these valid keys should be specified:" + Object.values(rq));
                        },
                    },
                    {
                        key: "_validateVideoSendSettings",
                        value: function (t, i) {
                            var n =
                                    "screenVideo" === t
                                        ? ["default-screen-video", "detail-optimized", "motion-optimized", "motion-and-detail-balanced"]
                                        : ["default-video", "bandwidth-optimized", "bandwidth-and-quality-balanced", "quality-optimized", "adaptive-2-layers", "adaptive-3-layers"],
                                r = "Video send settings should be either an object or one of the supported presets: ".concat(n.join());
                            if ("string" == typeof i) {
                                if (!n.includes(i)) throw Error(r);
                            } else {
                                if ("object" !== o(i)) throw Error(r);
                                if (!i.maxQuality && !i.encodings && void 0 === i.allowAdaptiveLayers) throw Error("Video send settings must contain at least maxQuality, allowAdaptiveLayers or encodings attribute");
                                if (i.maxQuality && -1 === ["low", "medium", "high"].indexOf(i.maxQuality)) throw Error("maxQuality must be either low, medium or high");
                                if (i.encodings) {
                                    var a = !1;
                                    switch (Object.keys(i.encodings).length) {
                                        case 1:
                                            a = !i.encodings.low;
                                            break;
                                        case 2:
                                            a = !i.encodings.low || !i.encodings.medium;
                                            break;
                                        case 3:
                                            a = !i.encodings.low || !i.encodings.medium || !i.encodings.high;
                                            break;
                                        default:
                                            a = !0;
                                    }
                                    if (a) throw Error("Encodings must be defined as: low, low and medium, or low, medium and high.");
                                    i.encodings.low && this._validateEncodingLayerHasValidProperties(i.encodings.low),
                                        i.encodings.medium && this._validateEncodingLayerHasValidProperties(i.encodings.medium),
                                        i.encodings.high && this._validateEncodingLayerHasValidProperties(i.encodings.high);
                                }
                            }
                        },
                    },
                    {
                        key: "validateUpdateSendSettings",
                        value: function (t) {
                            var i = this;
                            if (!t || 0 === Object.keys(t).length) throw Error("Send settings must contain at least information for one track!");
                            Object.entries(t).forEach(function (t) {
                                var n = $(t, 2),
                                    r = n[0],
                                    a = n[1];
                                i._validateVideoSendSettings(r, a);
                            });
                        },
                    },
                    {
                        key: "updateSendSettings",
                        value: function (t) {
                            var i = this;
                            return (
                                this.validateUpdateSendSettings(t),
                                this.needsLoad()
                                    ? ((this._preloadCache.sendSettings = t), { sendSettings: this._preloadCache.sendSettings })
                                    : new Promise(function (n, r) {
                                          i.sendMessageToCallMachine({ action: "update-send-settings", sendSettings: t }, function (t) {
                                              t.error ? r(t.error) : n(t.sendSettings);
                                          });
                                      })
                            );
                        },
                    },
                    {
                        key: "getSendSettings",
                        value: function () {
                            return this._sendSettings || this._preloadCache.sendSettings;
                        },
                    },
                    {
                        key: "getLocalAudioLevel",
                        value: function () {
                            return this._localAudioLevel;
                        },
                    },
                    {
                        key: "getRemoteParticipantsAudioLevel",
                        value: function () {
                            return this._remoteParticipantsAudioLevel;
                        },
                    },
                    {
                        key: "getActiveSpeaker",
                        value: function () {
                            return rX(), this._activeSpeaker;
                        },
                    },
                    {
                        key: "setActiveSpeakerMode",
                        value: function (t) {
                            return rX(), this.sendMessageToCallMachine({ action: "set-active-speaker-mode", enabled: t }), this;
                        },
                    },
                    {
                        key: "activeSpeakerMode",
                        value: function () {
                            return rX(), this._activeSpeakerMode;
                        },
                    },
                    {
                        key: "subscribeToTracksAutomatically",
                        value: function () {
                            return this._preloadCache.subscribeToTracksAutomatically;
                        },
                    },
                    {
                        key: "setSubscribeToTracksAutomatically",
                        value: function (t) {
                            return (
                                r4(this._callState, "setSubscribeToTracksAutomatically()", "Use the subscribeToTracksAutomatically configuration property."),
                                (this._preloadCache.subscribeToTracksAutomatically = t),
                                this.sendMessageToCallMachine({ action: "daily-method-subscribe-to-tracks-automatically", enabled: t }),
                                this
                            );
                        },
                    },
                    {
                        key: "enumerateDevices",
                        value:
                            ((k = y(function* () {
                                var t = this;
                                if (this._callObjectMode) {
                                    var i = yield navigator.mediaDevices.enumerateDevices();
                                    return (
                                        "Firefox" === nJ() &&
                                            n4().major > 115 &&
                                            n4().major < 123 &&
                                            (i = i.filter(function (t) {
                                                return "audiooutput" !== t.kind;
                                            })),
                                        {
                                            devices: i.map(function (t) {
                                                var i = JSON.parse(JSON.stringify(t));
                                                if (!n9() && "videoinput" === t.kind && t.getCapabilities) {
                                                    var n,
                                                        r = t.getCapabilities();
                                                    i.facing = (null == r || null === (n = r.facingMode) || void 0 === n ? void 0 : n.length) >= 1 ? r.facingMode[0] : void 0;
                                                }
                                                return i;
                                            }),
                                        }
                                    );
                                }
                                return new Promise(function (i) {
                                    t.sendMessageToCallMachine({ action: "enumerate-devices" }, function (t) {
                                        i({ devices: t.devices });
                                    });
                                });
                            })),
                            function () {
                                return k.apply(this, arguments);
                            }),
                    },
                    {
                        key: "sendAppMessage",
                        value: function (t) {
                            var i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "*";
                            if ((r4(this._callState, "sendAppMessage()"), JSON.stringify(t).length > 4096)) throw Error("Message data too large. Max size is 4096");
                            return this.sendMessageToCallMachine({ action: "app-msg", data: t, to: i }), this;
                        },
                    },
                    {
                        key: "addFakeParticipant",
                        value: function (t) {
                            return rX(), r4(this._callState, "addFakeParticipant()"), this.sendMessageToCallMachine(rR({ action: "add-fake-participant" }, t)), this;
                        },
                    },
                    {
                        key: "setShowNamesMode",
                        value: function (t) {
                            return (
                                r5(this._callObjectMode, "setShowNamesMode()"),
                                rX(),
                                t && "always" !== t && "never" !== t ? (console.error('setShowNamesMode argument should be "always", "never", or false'), this) : (this.sendMessageToCallMachine({ action: "set-show-names", mode: t }), this)
                            );
                        },
                    },
                    {
                        key: "setShowLocalVideo",
                        value: function () {
                            var t = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
                            return (
                                r5(this._callObjectMode, "setShowLocalVideo()"),
                                rX(),
                                r4(this._callState, "setShowLocalVideo()"),
                                "boolean" != typeof t ? (console.error("setShowLocalVideo only accepts a boolean value"), this) : (this.sendMessageToCallMachine({ action: "set-show-local-video", show: t }), (this._showLocalVideo = t), this)
                            );
                        },
                    },
                    {
                        key: "showLocalVideo",
                        value: function () {
                            return r5(this._callObjectMode, "showLocalVideo()"), rX(), this._showLocalVideo;
                        },
                    },
                    {
                        key: "setShowParticipantsBar",
                        value: function () {
                            var t = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
                            return (
                                r5(this._callObjectMode, "setShowParticipantsBar()"),
                                rX(),
                                r4(this._callState, "setShowParticipantsBar()"),
                                "boolean" != typeof t
                                    ? (console.error("setShowParticipantsBar only accepts a boolean value"), this)
                                    : (this.sendMessageToCallMachine({ action: "set-show-participants-bar", show: t }), (this._showParticipantsBar = t), this)
                            );
                        },
                    },
                    {
                        key: "showParticipantsBar",
                        value: function () {
                            return r5(this._callObjectMode, "showParticipantsBar()"), rX(), this._showParticipantsBar;
                        },
                    },
                    {
                        key: "customIntegrations",
                        value: function () {
                            return rX(), r5(this._callObjectMode, "customIntegrations()"), this._customIntegrations;
                        },
                    },
                    {
                        key: "setCustomIntegrations",
                        value: function (t) {
                            return (
                                rX(),
                                r5(this._callObjectMode, "setCustomIntegrations()"),
                                r4(this._callState, "setCustomIntegrations()"),
                                ac(t) && (this.sendMessageToCallMachine({ action: "set-custom-integrations", integrations: t }), (this._customIntegrations = t)),
                                this
                            );
                        },
                    },
                    {
                        key: "startCustomIntegrations",
                        value: function (t) {
                            var i = this;
                            if (
                                (rX(),
                                r5(this._callObjectMode, "startCustomIntegrations()"),
                                r4(this._callState, "startCustomIntegrations()"),
                                (Array.isArray(t) &&
                                    t.some(function (t) {
                                        return "string" != typeof t;
                                    })) ||
                                    (!Array.isArray(t) && "string" != typeof t))
                            )
                                return console.error("startCustomIntegrations() only accepts string | string[]"), this;
                            var n = "string" == typeof t ? [t] : t,
                                r = n.filter(function (t) {
                                    return !(t in i._customIntegrations);
                                });
                            return r.length ? (console.error("Can't find custom integration(s): \"".concat(r.join(", "), '"')), this) : (this.sendMessageToCallMachine({ action: "start-custom-integrations", ids: n }), this);
                        },
                    },
                    {
                        key: "stopCustomIntegrations",
                        value: function (t) {
                            var i = this;
                            if (
                                (rX(),
                                r5(this._callObjectMode, "stopCustomIntegrations()"),
                                r4(this._callState, "stopCustomIntegrations()"),
                                (Array.isArray(t) &&
                                    t.some(function (t) {
                                        return "string" != typeof t;
                                    })) ||
                                    (!Array.isArray(t) && "string" != typeof t))
                            )
                                return console.error("stopCustomIntegrations() only accepts string | string[]"), this;
                            var n = "string" == typeof t ? [t] : t,
                                r = n.filter(function (t) {
                                    return !(t in i._customIntegrations);
                                });
                            return r.length ? (console.error("Can't find custom integration(s): \"".concat(r.join(", "), '"')), this) : (this.sendMessageToCallMachine({ action: "stop-custom-integrations", ids: n }), this);
                        },
                    },
                    {
                        key: "customTrayButtons",
                        value: function () {
                            return r5(this._callObjectMode, "customTrayButtons()"), rX(), this._customTrayButtons;
                        },
                    },
                    {
                        key: "updateCustomTrayButtons",
                        value: function (t) {
                            return (
                                r5(this._callObjectMode, "updateCustomTrayButtons()"),
                                rX(),
                                r4(this._callState, "updateCustomTrayButtons()"),
                                ao(t)
                                    ? (this.sendMessageToCallMachine({ action: "update-custom-tray-buttons", btns: t }), (this._customTrayButtons = t), this)
                                    : (console.error("updateCustomTrayButtons only accepts a dictionary of the type ".concat(JSON.stringify(r2))), this)
                            );
                        },
                    },
                    {
                        key: "theme",
                        value: function () {
                            return r5(this._callObjectMode, "theme()"), this.properties.theme;
                        },
                    },
                    {
                        key: "setTheme",
                        value: function (t) {
                            var i = this;
                            return (
                                r5(this._callObjectMode, "setTheme()"),
                                new Promise(function (n, r) {
                                    try {
                                        i.validateProperties({ theme: t }), (i.properties.theme = rR({}, t)), i.sendMessageToCallMachine({ action: "set-theme", theme: i.properties.theme });
                                        try {
                                            i.emit(iB, { action: iB, theme: i.properties.theme });
                                        } catch (a) {
                                            console.log("could not emit 'theme-updated'", a);
                                        }
                                        n(i.properties.theme);
                                    } catch (s) {
                                        r(s);
                                    }
                                })
                            );
                        },
                    },
                    {
                        key: "requestFullscreen",
                        value:
                            ((b = y(function* () {
                                if ((rX(), this._iframe && !document.fullscreenElement && nY()))
                                    try {
                                        (yield this._iframe.requestFullscreen) ? this._iframe.requestFullscreen() : this._iframe.webkitRequestFullscreen();
                                    } catch (t) {
                                        console.log("could not make video call fullscreen", t);
                                    }
                            })),
                            function () {
                                return b.apply(this, arguments);
                            }),
                    },
                    {
                        key: "exitFullscreen",
                        value: function () {
                            rX(), document.fullscreenElement ? document.exitFullscreen() : document.webkitFullscreenElement && document.webkitExitFullscreen();
                        },
                    },
                    {
                        key: "getSidebarView",
                        value:
                            ((m = y(function* () {
                                var t = this;
                                return this._callObjectMode
                                    ? (console.error("getSidebarView is not available in callObject mode"), Promise.resolve(null))
                                    : new Promise(function (i) {
                                          t.sendMessageToCallMachine({ action: "get-sidebar-view" }, function (t) {
                                              i(t.view);
                                          });
                                      });
                            })),
                            function () {
                                return m.apply(this, arguments);
                            }),
                    },
                    {
                        key: "setSidebarView",
                        value: function (t) {
                            return this._callObjectMode ? (console.error("setSidebarView is not available in callObject mode"), this) : (this.sendMessageToCallMachine({ action: "set-sidebar-view", view: t }), this);
                        },
                    },
                    {
                        key: "room",
                        value:
                            ((h = y(function* () {
                                var t = this,
                                    i = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).includeRoomConfigDefaults,
                                    n = void 0 === i || i;
                                return this._accessState.access === iR || this.needsLoad()
                                    ? this.properties.url
                                        ? { roomUrlPendingJoin: this.properties.url }
                                        : null
                                    : new Promise(function (i) {
                                          t.sendMessageToCallMachine({ action: "lib-room-info", includeRoomConfigDefaults: n }, function (t) {
                                              delete t.action, delete t.callbackStamp, i(t);
                                          });
                                      });
                            })),
                            function () {
                                return h.apply(this, arguments);
                            }),
                    },
                    {
                        key: "geo",
                        value:
                            ((l = y(function* () {
                                try {
                                    return { current: (yield (yield fetch("https://gs.daily.co/_ks_/x-swsl/:")).json()).geo };
                                } catch (t) {
                                    return console.error("geo lookup failed", t), { current: "" };
                                }
                            })),
                            function () {
                                return l.apply(this, arguments);
                            }),
                    },
                    {
                        key: "setNetworkTopology",
                        value:
                            ((c = y(function* (t) {
                                var i = this;
                                return (
                                    rX(),
                                    r4(this._callState, "setNetworkTopology()"),
                                    new Promise(function (n, r) {
                                        i.sendMessageToCallMachine({ action: "set-network-topology", opts: t }, function (t) {
                                            t.error ? r({ error: t.error }) : n({ workerId: t.workerId });
                                        });
                                    })
                                );
                            })),
                            function (t) {
                                return c.apply(this, arguments);
                            }),
                    },
                    {
                        key: "getNetworkTopology",
                        value:
                            ((r = y(function* () {
                                var t = this;
                                return new Promise(function (i, n) {
                                    t.needsLoad() && i({ topology: "none" }),
                                        t.sendMessageToCallMachine({ action: "get-network-topology" }, function (t) {
                                            t.error ? n({ error: t.error }) : i({ topology: t.topology });
                                        });
                                });
                            })),
                            function () {
                                return r.apply(this, arguments);
                            }),
                    },
                    {
                        key: "setPlayNewParticipantSound",
                        value: function (t) {
                            if ((rX(), "number" != typeof t && !0 !== t && !1 !== t)) throw Error("argument to setShouldPlayNewParticipantSound should be true, false, or a number, but is ".concat(t));
                            this.sendMessageToCallMachine({ action: "daily-method-set-play-ding", arg: t });
                        },
                    },
                    {
                        key: "on",
                        value: function (t, i) {
                            return S.prototype.on.call(this, t, i);
                        },
                    },
                    {
                        key: "once",
                        value: function (t, i) {
                            return S.prototype.once.call(this, t, i);
                        },
                    },
                    {
                        key: "off",
                        value: function (t, i) {
                            return S.prototype.off.call(this, t, i);
                        },
                    },
                    {
                        key: "validateProperties",
                        value: function (t) {
                            for (var i in t) {
                                if (!rG[i]) throw Error("unrecognized property '".concat(i, "'"));
                                if (rG[i].validate && !rG[i].validate(t[i], this)) throw Error("property '".concat(i, "': ").concat(rG[i].help));
                            }
                        },
                    },
                    {
                        key: "assembleMeetingUrl",
                        value: function () {
                            var t,
                                i,
                                n = rR(
                                    rR({}, this.properties),
                                    {},
                                    {
                                        emb: this._callFrameId,
                                        embHref: encodeURIComponent(window.location.href),
                                        proxy: null !== (t = this.properties.dailyConfig) && void 0 !== t && t.proxyUrl ? encodeURIComponent(null === (i = this.properties.dailyConfig) || void 0 === i ? void 0 : i.proxyUrl) : void 0,
                                    }
                                ),
                                r = n.url.match(/\?/) ? "&" : "?";
                            return (
                                n.url +
                                r +
                                Object.keys(rG)
                                    .filter(function (t) {
                                        return rG[t].queryString && void 0 !== n[t];
                                    })
                                    .map(function (t) {
                                        return "".concat(rG[t].queryString, "=").concat(n[t]);
                                    })
                                    .join("&")
                            );
                        },
                    },
                    {
                        key: "needsLoad",
                        value: function () {
                            return ["new", ix, iO, iN].includes(this._callState);
                        },
                    },
                    {
                        key: "sendMessageToCallMachine",
                        value: function (t, i) {
                            if (this._destroyed && (this._logUseAfterDestroy(), this.strictMode)) throw Error("Use after destroy");
                            this._messageChannel.sendMessageToCallMachine(t, i, this._iframe, this._callFrameId);
                        },
                    },
                    {
                        key: "forwardPackagedMessageToCallMachine",
                        value: function (t) {
                            this._messageChannel.forwardPackagedMessageToCallMachine(t, this._iframe, this._callFrameId);
                        },
                    },
                    {
                        key: "addListenerForPackagedMessagesFromCallMachine",
                        value: function (t) {
                            return this._messageChannel.addListenerForPackagedMessagesFromCallMachine(t, this._callFrameId);
                        },
                    },
                    {
                        key: "removeListenerForPackagedMessagesFromCallMachine",
                        value: function (t) {
                            this._messageChannel.removeListenerForPackagedMessagesFromCallMachine(t);
                        },
                    },
                    {
                        key: "handleMessageFromCallMachine",
                        value: function (t) {
                            switch (t.action) {
                                case iV:
                                    this.sendMessageToCallMachine(rR({ action: iU }, this.properties));
                                    break;
                                case "call-machine-initialized":
                                    this._callMachineInitialized = !0;
                                    var i = {
                                        action: nR,
                                        level: "log",
                                        code: 1011,
                                        stats: { event: "bundle load", time: "no-op" === this._bundleLoadTime ? 0 : this._bundleLoadTime, preLoaded: "no-op" === this._bundleLoadTime, url: en(this.properties.dailyConfig) },
                                    };
                                    this.sendMessageToCallMachine(i), this._delayDuplicateInstanceLog && this._logDuplicateInstanceAttempt();
                                    break;
                                case iq:
                                    this._loadedCallback && (this._loadedCallback(), (this._loadedCallback = null));
                                    try {
                                        this.emit(t.action, t);
                                    } catch (n) {
                                        console.log("could not emit", t, n);
                                    }
                                    break;
                                case iz:
                                    this._joinedCallback && (this._joinedCallback(t.participants), (this._joinedCallback = null));
                                    try {
                                        this.emit(t.action, t);
                                    } catch (r) {
                                        console.log("could not emit", t, r);
                                    }
                                    break;
                                case iW:
                                case iJ:
                                    if (this._callState === iO) return;
                                    if (t.participant && t.participant.session_id) {
                                        var s = t.participant.local ? "local" : t.participant.session_id;
                                        if (this._callObjectMode) {
                                            var o = this._callMachine().store;
                                            r8(t.participant, o), rb(t.participant, o), rk(t.participant, this._participants[s], o);
                                        }
                                        try {
                                            this.maybeParticipantTracksStopped(this._participants[s], t.participant),
                                                this.maybeParticipantTracksStarted(this._participants[s], t.participant),
                                                this.maybeEventRecordingStopped(this._participants[s], t.participant),
                                                this.maybeEventRecordingStarted(this._participants[s], t.participant);
                                        } catch (c) {
                                            console.error("track events error", c);
                                        }
                                        if (!this.compareEqualForParticipantUpdateEvent(t.participant, this._participants[s])) {
                                            (this._participants[s] = rR({}, t.participant)), this.toggleParticipantAudioBasedOnNativeAudioFocus();
                                            try {
                                                this.emit(t.action, t);
                                            } catch (l) {
                                                console.log("could not emit", t, l);
                                            }
                                        }
                                    }
                                    break;
                                case i4:
                                    if (t.participant && t.participant.session_id) {
                                        var u = this._participants[t.participant.session_id];
                                        u && this.maybeParticipantTracksStopped(u, null), delete this._participants[t.participant.session_id];
                                        try {
                                            this.emit(t.action, t);
                                        } catch (d) {
                                            console.log("could not emit", t, d);
                                        }
                                    }
                                    break;
                                case iH:
                                    if (!V(this._participantCounts, t.participantCounts)) {
                                        this._participantCounts = t.participantCounts;
                                        try {
                                            this.emit(t.action, t);
                                        } catch (h) {
                                            console.log("could not emit", t, h);
                                        }
                                    }
                                    break;
                                case iK:
                                    var p = { access: t.access };
                                    if ((t.awaitingAccess && (p.awaitingAccess = t.awaitingAccess), !V(this._accessState, p))) {
                                        this._accessState = p;
                                        try {
                                            this.emit(t.action, t);
                                        } catch (f) {
                                            console.log("could not emit", t, f);
                                        }
                                    }
                                    break;
                                case i6:
                                    if (t.meetingSession) {
                                        this._meetingSessionSummary = t.meetingSession;
                                        try {
                                            delete t.callFrameId, this.emit(t.action, t);
                                            var g = rR(rR({}, t), {}, { action: "meeting-session-updated" });
                                            this.emit(g.action, g);
                                        } catch (v) {
                                            console.log("could not emit", t, v);
                                        }
                                    }
                                    break;
                                case nP:
                                    this._iframe && !t.preserveIframe && (this._iframe.src = ""),
                                        this._updateCallState(iN),
                                        this.resetMeetingDependentVars(),
                                        this._loadedCallback && (this._loadedCallback(t.errorMsg), (this._loadedCallback = null)),
                                        t.preserveIframe;
                                    var m,
                                        y = a(t, rO);
                                    null != y && null !== (m = y.error) && void 0 !== m && m.details && (y.error.details = JSON.parse(y.error.details)),
                                        this._maybeSendToSentry(t),
                                        this._joinedCallback && (this._joinedCallback(null, y), (this._joinedCallback = null));
                                    try {
                                        this.emit(t.action, y);
                                    } catch (b) {
                                        console.log("could not emit", t, b);
                                    }
                                    break;
                                case iG:
                                    this._callState !== iN && this._updateCallState(iO), this.resetMeetingDependentVars(), this._resolveLeave && (this._resolveLeave(), (this._resolveLeave = null));
                                    try {
                                        this.emit(t.action, t);
                                    } catch ($) {
                                        console.log("could not emit", t, $);
                                    }
                                    break;
                                case "selected-devices-updated":
                                    if (t.devices)
                                        try {
                                            this.emit(t.action, t);
                                        } catch (k) {
                                            console.log("could not emit", t, k);
                                        }
                                    break;
                                case nb:
                                    var S = t.threshold,
                                        w = t.quality;
                                    if (S !== this._network.threshold || w !== this._network.quality) {
                                        (this._network.quality = w), (this._network.threshold = S);
                                        try {
                                            this.emit(t.action, t);
                                        } catch (T) {
                                            console.log("could not emit", t, T);
                                        }
                                    }
                                    break;
                                case nk:
                                    if (t && t.cpuLoadState)
                                        try {
                                            this.emit(t.action, t);
                                        } catch (C) {
                                            console.log("could not emit", t, C);
                                        }
                                    break;
                                case nS:
                                    if (t && void 0 !== t.faceCounts)
                                        try {
                                            this.emit(t.action, t);
                                        } catch (E) {
                                            console.log("could not emit", t, E);
                                        }
                                    break;
                                case ny:
                                    var M = t.activeSpeaker;
                                    if (this._activeSpeaker.peerId !== M.peerId) {
                                        this._activeSpeaker.peerId = M.peerId;
                                        try {
                                            this.emit(t.action, { action: t.action, activeSpeaker: this._activeSpeaker });
                                        } catch (A) {
                                            console.log("could not emit", t, A);
                                        }
                                    }
                                    break;
                                case "show-local-video-changed":
                                    if (this._callObjectMode) return;
                                    var L = t.show;
                                    this._showLocalVideo = L;
                                    try {
                                        this.emit(t.action, { action: t.action, show: L });
                                    } catch (_) {
                                        console.log("could not emit", t, _);
                                    }
                                    break;
                                case n8:
                                    var x = t.enabled;
                                    if (this._activeSpeakerMode !== x) {
                                        this._activeSpeakerMode = x;
                                        try {
                                            this.emit(t.action, { action: t.action, enabled: this._activeSpeakerMode });
                                        } catch (I) {
                                            console.log("could not emit", t, I);
                                        }
                                    }
                                    break;
                                case iQ:
                                case i5:
                                case iX:
                                    this._waitingParticipants = t.allWaitingParticipants;
                                    try {
                                        this.emit(t.action, { action: t.action, participant: t.participant });
                                    } catch (P) {
                                        console.log("could not emit", t, P);
                                    }
                                    break;
                                case n_:
                                    if (!V(this._receiveSettings, t.receiveSettings)) {
                                        this._receiveSettings = t.receiveSettings;
                                        try {
                                            this.emit(t.action, { action: t.action, receiveSettings: t.receiveSettings });
                                        } catch (D) {
                                            console.log("could not emit", t, D);
                                        }
                                    }
                                    break;
                                case nx:
                                    if (!V(this._inputSettings, t.inputSettings)) {
                                        var O = this._getInputSettings();
                                        if (((this._inputSettings = t.inputSettings), (this._preloadCache.inputSettings = {}), !V(O, this._getInputSettings())))
                                            try {
                                                this.emit(t.action, { action: t.action, inputSettings: this._getInputSettings() });
                                            } catch (N) {
                                                console.log("could not emit", t, N);
                                            }
                                    }
                                    break;
                                case "send-settings-updated":
                                    if (!V(this._sendSettings, t.sendSettings)) {
                                        (this._sendSettings = t.sendSettings), (this._preloadCache.sendSettings = null);
                                        try {
                                            this.emit(t.action, { action: t.action, sendSettings: t.sendSettings });
                                        } catch (R) {
                                            console.log("could not emit", t, R);
                                        }
                                    }
                                    break;
                                case "local-audio-level":
                                    (this._localAudioLevel = t.audioLevel), (this._preloadCache.localAudioLevelObserver = null), this.emitDailyJSEvent(t);
                                    break;
                                case "remote-participants-audio-level":
                                    (this._remoteParticipantsAudioLevel = t.participantsAudioLevel), (this._preloadCache.remoteParticipantsAudioLevelObserver = null), this.emitDailyJSEvent(t);
                                    break;
                                case nh:
                                    var F = t.session_id;
                                    (this._rmpPlayerState[F] = t.playerState), this.emitDailyJSEvent(t);
                                    break;
                                case nf:
                                    delete this._rmpPlayerState[t.session_id], this.emitDailyJSEvent(t);
                                    break;
                                case np:
                                    var j = t.session_id,
                                        U = this._rmpPlayerState[j];
                                    (U && this.compareEqualForRMPUpdateEvent(U, t.remoteMediaPlayerState)) || ((this._rmpPlayerState[j] = t.remoteMediaPlayerState), this.emitDailyJSEvent(t));
                                    break;
                                case "custom-button-click":
                                case "sidebar-view-changed":
                                    this.emitDailyJSEvent(t);
                                    break;
                                case i7:
                                    var B = this._meetingSessionState.topology !== (t.meetingSessionState && t.meetingSessionState.topology);
                                    (this._meetingSessionState = ad(t.meetingSessionState, this._callObjectMode)), (this._callObjectMode || B) && this.emitDailyJSEvent(t);
                                    break;
                                case ng:
                                    (this._isScreenSharing = !0), this.emitDailyJSEvent(t);
                                    break;
                                case nv:
                                case nm:
                                    (this._isScreenSharing = !1), this.emitDailyJSEvent(t);
                                    break;
                                case nr:
                                case na:
                                case ns:
                                case no:
                                case nc:
                                case nt:
                                case ni:
                                case nn:
                                case iY:
                                case i3:
                                case nu:
                                case nd:
                                case n$:
                                case nl:
                                case nC:
                                case nE:
                                case nM:
                                case nA:
                                case nI:
                                case nL:
                                case "dialin-ready":
                                case "dialin-connected":
                                case "dialin-error":
                                case "dialin-stopped":
                                case "dialin-warning":
                                case "dialout-connected":
                                case "dialout-error":
                                case "dialout-stopped":
                                case "dialout-warning":
                                    try {
                                        this.emit(t.action, t);
                                    } catch (q) {
                                        console.log("could not emit", t, q);
                                    }
                                    break;
                                case "request-fullscreen":
                                    this.requestFullscreen();
                                    break;
                                case "request-exit-fullscreen":
                                    this.exitFullscreen();
                            }
                        },
                    },
                    {
                        key: "maybeEventRecordingStopped",
                        value: function (t, i) {
                            var n = "record";
                            if (t && !i.local && !1 === i[n] && t[n] !== i[n])
                                try {
                                    this.emit(na, { action: na });
                                } catch (r) {
                                    console.log("could not emit", r);
                                }
                        },
                    },
                    {
                        key: "maybeEventRecordingStarted",
                        value: function (t, i) {
                            var n = "record";
                            if (t && !i.local && !0 === i[n] && t[n] !== i[n])
                                try {
                                    this.emit(nr, { action: nr });
                                } catch (r) {
                                    console.log("could not emit", r);
                                }
                        },
                    },
                    {
                        key: "maybeEventTrackStopped",
                        value: function (t, i, n, r) {
                            if (t && ("ended" === t.readyState || !i || t.id !== i.id))
                                try {
                                    this.emit(ne, { action: ne, track: t, participant: n, type: r });
                                } catch (a) {
                                    console.log("maybeEventTrackStopped: could not emit", a);
                                }
                        },
                    },
                    {
                        key: "maybeEventTrackStarted",
                        value: function (t, i, n, r) {
                            if (i && (!t || "ended" === t.readyState || i.id !== t.id))
                                try {
                                    this.emit(iZ, { action: iZ, track: i, participant: n, type: r });
                                } catch (a) {
                                    console.log("maybeEventTrackStarted: could not emit", a);
                                }
                        },
                    },
                    {
                        key: "maybeParticipantTracksStopped",
                        value: function (t, i) {
                            if (t) for (var n in t.tracks) this.maybeEventTrackStopped(t.tracks[n].track, i && i.tracks[n] ? i.tracks[n].track : null, i, n);
                        },
                    },
                    {
                        key: "maybeParticipantTracksStarted",
                        value: function (t, i) {
                            if (i) for (var n in i.tracks) this.maybeEventTrackStarted(t && t.tracks[n] ? t.tracks[n].track : null, i.tracks[n].track, i, n);
                        },
                    },
                    {
                        key: "compareEqualForRMPUpdateEvent",
                        value: function (t, i) {
                            var n, r;
                            return t.state === i.state && (null === (n = t.settings) || void 0 === n ? void 0 : n.volume) === (null === (r = i.settings) || void 0 === r ? void 0 : r.volume);
                        },
                    },
                    {
                        key: "emitDailyJSEvent",
                        value: function (t) {
                            try {
                                this.emit(t.action, t);
                            } catch (i) {
                                console.log("could not emit", t, i);
                            }
                        },
                    },
                    {
                        key: "compareEqualForParticipantUpdateEvent",
                        value: function (t, i) {
                            return !(
                                !V(t, i) ||
                                (t.videoTrack && i.videoTrack && (t.videoTrack.id !== i.videoTrack.id || t.videoTrack.muted !== i.videoTrack.muted || t.videoTrack.enabled !== i.videoTrack.enabled)) ||
                                (t.audioTrack && i.audioTrack && (t.audioTrack.id !== i.audioTrack.id || t.audioTrack.muted !== i.audioTrack.muted || t.audioTrack.enabled !== i.audioTrack.enabled))
                            );
                        },
                    },
                    {
                        key: "nativeUtils",
                        value: function () {
                            return n9() ? (typeof DailyNativeUtils > "u" ? (console.warn("in React Native, DailyNativeUtils is expected to be available"), null) : DailyNativeUtils) : null;
                        },
                    },
                    {
                        key: "updateIsPreparingToJoin",
                        value: function (t) {
                            this._updateCallState(this._callState, t);
                        },
                    },
                    {
                        key: "_updateCallState",
                        value: function (t) {
                            var i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this._isPreparingToJoin;
                            if (t !== this._callState || i !== this._isPreparingToJoin) {
                                var n = this._callState,
                                    r = this._isPreparingToJoin;
                                (this._callState = t), (this._isPreparingToJoin = i);
                                var a = rH(n, r),
                                    s = rH(this._callState, this._isPreparingToJoin);
                                a !== s && (this.updateKeepDeviceAwake(s), this.updateDeviceAudioMode(s), this.updateShowAndroidOngoingMeetingNotification(s), this.updateNoOpRecordingEnsuringBackgroundContinuity(s));
                            }
                        },
                    },
                    {
                        key: "resetMeetingDependentVars",
                        value: function () {
                            (this._participants = {}),
                                (this._participantCounts = r0),
                                (this._waitingParticipants = {}),
                                (this._activeSpeaker = {}),
                                (this._activeSpeakerMode = !1),
                                (this._didPreAuth = !1),
                                (this._accessState = { access: iR }),
                                (this._finalSummaryOfPrevSession = this._meetingSessionSummary),
                                (this._meetingSessionSummary = {}),
                                (this._meetingSessionState = ad(rB, this._callObjectMode)),
                                (this._isScreenSharing = !1),
                                (this._receiveSettings = {}),
                                (this._inputSettings = void 0),
                                (this._sendSettings = {}),
                                (this._localAudioLevel = 0),
                                (this._remoteParticipantsAudioLevel = {}),
                                (this._callMachineInitialized = !1),
                                (this._bundleLoadTime = void 0),
                                this._preloadCache;
                        },
                    },
                    {
                        key: "updateKeepDeviceAwake",
                        value: function (t) {
                            n9() && this.nativeUtils().setKeepDeviceAwake(t, this._callFrameId);
                        },
                    },
                    {
                        key: "updateDeviceAudioMode",
                        value: function (t) {
                            if (n9() && !this.disableReactNativeAutoDeviceManagement("audio")) {
                                var i = t ? this._nativeInCallAudioMode : "idle";
                                this.nativeUtils().setAudioMode(i);
                            }
                        },
                    },
                    {
                        key: "updateShowAndroidOngoingMeetingNotification",
                        value: function (t) {
                            if (n9() && this.nativeUtils().setShowOngoingMeetingNotification) {
                                var i, n, r, a;
                                if (this.properties.reactNativeConfig && this.properties.reactNativeConfig.androidInCallNotification) {
                                    var s = this.properties.reactNativeConfig.androidInCallNotification;
                                    (i = s.title), (n = s.subtitle), (r = s.iconName), (a = s.disableForCustomOverride);
                                }
                                a && (t = !1), this.nativeUtils().setShowOngoingMeetingNotification(t, i, n, r, this._callFrameId);
                            }
                        },
                    },
                    {
                        key: "updateNoOpRecordingEnsuringBackgroundContinuity",
                        value: function (t) {
                            n9() && this.nativeUtils().enableNoOpRecordingEnsuringBackgroundContinuity && this.nativeUtils().enableNoOpRecordingEnsuringBackgroundContinuity(t);
                        },
                    },
                    {
                        key: "toggleParticipantAudioBasedOnNativeAudioFocus",
                        value: function () {
                            var t, i;
                            if (n9()) {
                                var n = null === (t = this._callMachine()) || void 0 === t || null === (i = t.store) || void 0 === i ? void 0 : i.getState();
                                for (var r in null == n ? void 0 : n.streams) {
                                    var a = n.streams[r];
                                    a && a.pendingTrack && "audio" === a.pendingTrack.kind && (a.pendingTrack.enabled = this._hasNativeAudioFocus);
                                }
                            }
                        },
                    },
                    {
                        key: "disableReactNativeAutoDeviceManagement",
                        value: function (t) {
                            return this.properties.reactNativeConfig && this.properties.reactNativeConfig.disableAutoDeviceManagement && this.properties.reactNativeConfig.disableAutoDeviceManagement[t];
                        },
                    },
                    {
                        key: "absoluteUrl",
                        value: function (t) {
                            if (void 0 !== t) {
                                var i = document.createElement("a");
                                return (i.href = t), i.href;
                            }
                        },
                    },
                    {
                        key: "sayHello",
                        value: function () {
                            var t = "hello, world.";
                            return console.log(t), t;
                        },
                    },
                    {
                        key: "_logCallQualityTestResults",
                        value: function (t) {
                            this._callMachineInitialized ? this.sendMessageToCallMachine({ action: nR, level: "info", code: 1012, results: t }) : console.warn("_logCallQualityTestResults() must be called after daily initialization");
                        },
                    },
                    {
                        key: "_logUseAfterDestroy",
                        value: function () {
                            if (this.needsLoad()) {
                                if (rx && !rx.needsLoad()) {
                                    var t = { action: nR, level: "error", code: this.strictMode ? 9995 : 9997 };
                                    rx.sendMessageToCallMachine(t);
                                } else
                                    this.strictMode ||
                                        console.error(
                                            "You are are attempting to use a call instance that was previously destroyed, which is unsupported. Please remove `strictMode: false` from your constructor properties to enable strict mode to track down and fix this unsupported usage."
                                        );
                            } else {
                                var i = { action: nR, level: "error", code: this.strictMode ? 9995 : 9997 };
                                this._messageChannel.sendMessageToCallMachine(i, null, this._iframe, this._callFrameId);
                            }
                        },
                    },
                    {
                        key: "_logDuplicateInstanceAttempt",
                        value: function () {
                            var t = rx._callMachineInitialized ? rx : this._callMachineInitialized ? this : void 0;
                            t
                                ? (t.sendMessageToCallMachine({ action: nR, level: "warn", code: this.strictMode ? 9990 : 9992 }), (this._delayDuplicateInstanceLog = !1))
                                : ((this._delayDuplicateInstanceLog = !0), (rx._delayDuplicateInstanceLog = !0));
                        },
                    },
                    {
                        key: "_maybeSendToSentry",
                        value: function (t) {
                            var i, n, r, a, s, o;
                            if (null === (i = t.error) || void 0 === i || !i.type || ["connection-error", "end-of-life", "no-room"].includes(t.error.type)) {
                                var c = null !== (n = this.properties) && void 0 !== n && n.url ? new URL(this.properties.url) : void 0,
                                    l = "production";
                                c && c.host.includes(".staging.daily") && (l = "staging");
                                var u,
                                    d,
                                    h,
                                    p,
                                    f,
                                    g = new is({
                                        dsn: "https://f10f1c81e5d44a4098416c0867a8b740@o77906.ingest.sentry.io/168844",
                                        transport: ic,
                                        integrations: [new i_.GlobalHandlers({ onunhandledrejection: !1 }), new i_.HttpContext()],
                                        environment: l,
                                    }),
                                    v = new t_(g, void 0, er.version());
                                if ((this.session_id && v.setExtra("sessionId", this.session_id), this.properties)) {
                                    var m = rR({}, this.properties);
                                    (m.userName = m.userName ? "[Filtered]" : void 0), (m.userData = m.userData ? "[Filtered]" : void 0), (m.token = m.token ? "[Filtered]" : void 0), v.setExtra("properties", m);
                                }
                                if (c) {
                                    var y = c.searchParams.get("domain");
                                    if (!y) {
                                        var b = c.host.match(/(.*?)\./);
                                        y = (b && b[1]) || "";
                                    }
                                    y && v.setTag("domain", y);
                                }
                                t.error &&
                                    (v.setTag("fatalErrorType", t.error.type),
                                    v.setExtra("errorDetails", t.error.details),
                                    !(null === (u = t.error.details) || void 0 === u) && u.uri && v.setTag("serverAddress", t.error.details.uri),
                                    !(null === (d = t.error.details) || void 0 === d) && d.workerGroup && v.setTag("workerGroup", t.error.details.workerGroup),
                                    !(null === (h = t.error.details) || void 0 === h) && h.geoGroup && v.setTag("geoGroup", t.error.details.geoGroup),
                                    !(null === (p = t.error.details) || void 0 === p) && p.on && v.setTag("connectionAttempt", t.error.details.on),
                                    null !== (f = t.error.details) && void 0 !== f && f.bundleUrl && (v.setTag("bundleUrl", t.error.details.bundleUrl), v.setTag("bundleError", t.error.details.sourceError.type))),
                                    v.setTags({
                                        callMode: this._callObjectMode
                                            ? n9()
                                                ? "reactNative"
                                                : null !== (r = this.properties) && void 0 !== r && null !== (a = r.dailyConfig) && void 0 !== a && null !== (s = a.callMode) && void 0 !== s && s.includes("prebuilt")
                                                ? this.properties.dailyConfig.callMode
                                                : "custom"
                                            : "prebuilt-frame",
                                        version: er.version(),
                                    });
                                var $ = (null === (o = t.error) || void 0 === o ? void 0 : o.msg) || t.errorMsg;
                                v.run(function (t) {
                                    t.captureException(Error($));
                                });
                            }
                        },
                    },
                    {
                        key: "_callMachine",
                        value: function () {
                            var t, i, n;
                            return null === (t = window._daily) || void 0 === t || null === (i = t.instances) || void 0 === i || null === (n = i[this._callFrameId]) || void 0 === n ? void 0 : n.callMachine;
                        },
                    },
                ],
                [
                    {
                        key: "supportedBrowser",
                        value: function () {
                            if (n9()) return { supported: !0, mobile: !0, name: "React Native", version: null, supportsScreenShare: !0, supportsSfu: !0, supportsVideoProcessing: !1, supportsAudioProcessing: !1 };
                            var t = Z.getParser(n0());
                            return {
                                supported: !!n1(),
                                mobile: "mobile" === t.getPlatformType(),
                                name: t.getBrowserName(),
                                version: t.getBrowserVersion(),
                                supportsFullscreen: !!nY(),
                                supportsScreenShare: !!(
                                    navigator &&
                                    navigator.mediaDevices &&
                                    navigator.mediaDevices.getDisplayMedia &&
                                    ((function (t, i) {
                                        if (!t || !i) return !0;
                                        switch (t) {
                                            case "Chrome":
                                                return i.major >= 75;
                                            case "Safari":
                                                return RTCRtpTransceiver.prototype.hasOwnProperty("currentDirection") && !(13 === i.major && 0 === i.minor && 0 === i.point);
                                            case "Firefox":
                                                return i.major >= 67;
                                        }
                                        return !0;
                                    })(nJ(), n4()) ||
                                        n9())
                                ),
                                supportsSfu: !!n1(),
                                supportsVideoProcessing: n2(),
                                supportsAudioProcessing: nG(),
                            };
                        },
                    },
                    {
                        key: "version",
                        value: function () {
                            return "0.66.0";
                        },
                    },
                    {
                        key: "createCallObject",
                        value: function () {
                            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                            return (t.layout = "none"), new er(null, t);
                        },
                    },
                    {
                        key: "wrap",
                        value: function (t) {
                            var i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                            if ((rX(), !t || !t.contentWindow || "string" != typeof t.src)) throw Error("DailyIframe::Wrap needs an iframe-like first argument");
                            return i.layout || (i.customLayout ? (i.layout = "custom-v1") : (i.layout = "browser")), new er(t, i);
                        },
                    },
                    {
                        key: "createFrame",
                        value: function (t, i) {
                            rX(), t && i ? ((n = t), (r = i)) : t && t.append ? ((n = t), (r = {})) : ((n = document.body), (r = t || {}));
                            var n,
                                r,
                                a = r.iframeStyle;
                            a ||
                                (a =
                                    n === document.body
                                        ? { position: "fixed", border: "1px solid black", backgroundColor: "white", width: "375px", height: "450px", right: "1em", bottom: "1em" }
                                        : { border: 0, width: "100%", height: "100%" });
                            var s = document.createElement("iframe");
                            window.navigator && window.navigator.userAgent.match(/Chrome\/61\./) ? (s.allow = "microphone, camera") : (s.allow = "microphone; camera; autoplay; display-capture; screen-wake-lock"),
                                (s.style.visibility = "hidden"),
                                n.appendChild(s),
                                (s.style.visibility = null),
                                Object.keys(a).forEach(function (t) {
                                    return (s.style[t] = a[t]);
                                }),
                                r.layout || (r.customLayout ? (r.layout = "custom-v1") : (r.layout = "browser"));
                            try {
                                return new er(s, r);
                            } catch (o) {
                                throw (n.removeChild(s), o);
                            }
                        },
                    },
                    {
                        key: "createTransparentFrame",
                        value: function () {
                            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                            rX();
                            var i = document.createElement("iframe");
                            return (
                                (i.allow = "microphone; camera; autoplay"),
                                (i.style.cssText = "\n      position: fixed;\n      top: 0;\n      left: 0;\n      width: 100%;\n      height: 100%;\n      border: 0;\n      pointer-events: none;\n    "),
                                document.body.appendChild(i),
                                t.layout || (t.layout = "custom-v1"),
                                er.wrap(i, t)
                            );
                        },
                    },
                    {
                        key: "getCallInstance",
                        value: function () {
                            return rx;
                        },
                    },
                ]
            ),
            er
        );
    })();
    function rJ(t, i) {
        var n = {};
        for (var r in t)
            if (t[r] instanceof MediaStreamTrack) n[r] = nF;
            else if ("dailyConfig" === r) {
                if (t[r].modifyLocalSdpHook) {
                    var a = window._daily.instances[i].customCallbacks || {};
                    (a.modifyLocalSdpHook = t[r].modifyLocalSdpHook), (window._daily.instances[i].customCallbacks = a), delete t[r].modifyLocalSdpHook;
                }
                if (t[r].modifyRemoteSdpHook) {
                    var s = window._daily.instances[i].customCallbacks || {};
                    (s.modifyRemoteSdpHook = t[r].modifyRemoteSdpHook), (window._daily.instances[i].customCallbacks = s), delete t[r].modifyRemoteSdpHook;
                }
                n[r] = t[r];
            } else n[r] = t[r];
        return n;
    }
    function r4(t) {
        var i = arguments.length > 2 ? arguments[2] : void 0;
        if (t !== iD) {
            var n = "".concat(arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "This daily-js method", " only supported after join.");
            throw (i && (n += " ".concat(i)), console.error(n), Error(n));
        }
    }
    function rH(t, i) {
        return [iP, iD].includes(t) || i;
    }
    function rK(t, i) {
        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "This daily-js method",
            r = arguments.length > 3 ? arguments[3] : void 0;
        if (rH(t, i)) {
            var a = "".concat(n, " not supported after joining a meeting.");
            throw (r && (a += " ".concat(r)), console.error(a), Error(a));
        }
    }
    function r6(t) {
        var i = arguments.length > 2 ? arguments[2] : void 0;
        if (!t) {
            var n = "".concat(arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "This daily-js method", " requires preAuth(), startCamera(), or join() to initialize call state.");
            throw (i && (n += " ".concat(i)), console.error(n), Error(n));
        }
    }
    function r7(t) {
        if (t) {
            var i = "A pre-call quality test is in progress. Please try ".concat(
                arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "This daily-js method",
                " again once testing has completed. Use stopTestCallQuality() to end it early."
            );
            throw (console.error(i), Error(i));
        }
    }
    function rQ(t) {
        if (!t) {
            var i = "".concat(arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "This daily-js method", " is only supported on custom callObject instances");
            throw (console.error(i), Error(i));
        }
    }
    function r5(t) {
        if (t) {
            var i = "".concat(arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "This daily-js method", " is only supported as part of Daily's Prebuilt");
            throw (console.error(i), Error(i));
        }
    }
    function rX() {
        if (n9()) throw Error("This daily-js method is not currently supported in React Native");
    }
    function rZ() {
        if (!n9()) throw Error("This daily-js method is only supported in React Native");
    }
    function ae(t) {
        var i;
        if (void 0 === t) return !0;
        if ("string" == typeof t) i = t;
        else
            try {
                (i = JSON.stringify(t)), V(JSON.parse(i), t) || console.warn("The userData provided will be modified when serialized.");
            } catch (n) {
                throw Error("userData must be serializable to JSON: ".concat(n));
            }
        if (i.length > 4096) throw Error("userData is too large (".concat(i.length, " characters). Maximum size suppported is ").concat(4096, "."));
        return !0;
    }
    function at(t, i) {
        for (
            var n,
                r,
                a = i.allowAllParticipantsKey,
                s = function (t) {
                    return !!(void 0 === t.layer || (Number.isInteger(t.layer) && t.layer >= 0) || "inherit" === t.layer);
                },
                o = 0,
                c = Object.entries(t);
            o < c.length;
            o++
        ) {
            var l,
                u = $(c[o], 2),
                d = u[0],
                h = u[1];
            if (((n = d), (r = void 0), (r = ["local"]), a || r.push("*"), !n || r.includes(n) || !(l = h) || (l.video && !s(l.video)) || (l.screenVideo && !s(l.screenVideo)))) return !1;
        }
        return !0;
    }
    function ai(t) {
        var i, n, r, a, s, c;
        return !(
            "object" !== o(t) ||
            (t.video &&
                ("object" !== o(t.video) ||
                    ((i = t.video.processor),
                    (r = ["type", "config"]),
                    !i ||
                        "object" !== o(i) ||
                        "string" != typeof (n = i.type) ||
                        (!Object.values(nj).includes(n) && (console.error("inputSettings video processor type invalid"), 1)) ||
                        (i.config &&
                            ("object" !== o(i.config) ||
                                !(function (t, i) {
                                    var n = Object.keys(i);
                                    if (0 === n.length) return !0;
                                    var r,
                                        a,
                                        s,
                                        o = "invalid object in inputSettings -> video -> processor -> config";
                                    switch (t) {
                                        case nj.BGBLUR:
                                            return n.length > 1 || "strength" !== n[0]
                                                ? (console.error(o), !1)
                                                : !("number" != typeof i.strength || i.strength <= 0 || i.strength > 1 || isNaN(i.strength)) || (console.error("".concat(o, "; expected: {0 < strength <= 1}, got: ").concat(i.strength)), !1);
                                        case nj.BGIMAGE:
                                            return !(
                                                void 0 !== i.source &&
                                                !("default" === (r = i).source
                                                    ? ((r.type = "default"), 1)
                                                    : r.source instanceof ArrayBuffer ||
                                                      (er(r.source)
                                                          ? ((r.type = "url"),
                                                            (function (t) {
                                                                var i = new URL(t),
                                                                    n = i.pathname;
                                                                if ("data:" === i.protocol)
                                                                    try {
                                                                        var r = n.substring(n.indexOf(":") + 1, n.indexOf(";")).split("/")[1];
                                                                        return nB.includes(r);
                                                                    } catch (a) {
                                                                        return console.error("failed to deduce blob content type", a), !1;
                                                                    }
                                                                var s = n.split(".").at(-1).toLowerCase().trim();
                                                                return nB.includes(s);
                                                            })(r.source) || (console.error("invalid image type; supported types: [".concat(nB.join(", "), "]")), 0))
                                                          : isNaN((s = Number((a = r.source)))) || !Number.isInteger(s) || s <= 0 || s > 10
                                                          ? (console.error("invalid image selection; must be an int, > 0, <= ".concat(10)), 0)
                                                          : ((r.type = "daily-preselect"), 1)))
                                            );
                                        default:
                                            return !0;
                                    }
                                })(i.type, i.config))) ||
                        (Object.keys(i)
                            .filter(function (t) {
                                return !r.includes(t);
                            })
                            .forEach(function (t) {
                                console.warn("invalid key inputSettings -> video -> processor : ".concat(t)), delete i[t];
                            }),
                        0)))) ||
            (t.audio &&
                ("object" !== o(t.audio) ||
                    ((s = t.audio.processor),
                    (c = ["type"]),
                    !s ||
                        "object" !== o(s) ||
                        (Object.keys(s)
                            .filter(function (t) {
                                return !c.includes(t);
                            })
                            .forEach(function (t) {
                                console.warn("invalid key inputSettings -> audio -> processor : ".concat(t)), delete s[t];
                            }),
                        "string" != typeof (a = s.type) || (!Object.values(nV).includes(a) && (console.error("inputSettings audio processor type invalid"), 1))))))
        );
    }
    function an(t, i) {
        var n,
            r = [];
        t.video && !n2(null !== (n = null == i ? void 0 : i.useLegacyVideoProcessor) && void 0 !== n && n) && (delete t.video, r.push("video")),
            t.audio && !nG() && (delete t.audio, r.push("audio")),
            r.length > 0 && console.error("Ignoring settings for browser- or platform-unsupported input processor(s): ".concat(r.join(", ")));
    }
    function ar() {
        var t = Object.values(nj).join(" | "),
            i = Object.values(nV).join(" | ");
        return "inputSettings must be of the form: { video?: { processor: { type: [ ".concat(t, " ], config?: {} } }, audio?: { processor: {type: [ ").concat(i, " ] } } }");
    }
    function aa(t) {
        var i = t.allowAllParticipantsKey;
        return (
            "receiveSettings must be of the form { [<remote participant id> | ".concat(ij).concat(i ? ' | "'.concat("*", '"') : "", "]: ") +
            '{ [video: [{ layer: [<non-negative integer> | "inherit"] } | "inherit"]], [screenVideo: [{ layer: [<non-negative integer> | "inherit"] } | "inherit"]] }}}'
        );
    }
    function as() {
        return "customIntegrations should be an object of type ".concat(JSON.stringify(rz), ".");
    }
    function ao(t) {
        if ((t && "object" !== o(t)) || Array.isArray(t)) return console.error("customTrayButtons should be an Object of the type ".concat(JSON.stringify(r2), ".")), !1;
        if (t)
            for (var i = 0, n = Object.entries(t); i < n.length; i++)
                for (var r = $(n[i], 1)[0], a = 0, s = Object.entries(t[r]); a < s.length; a++) {
                    var c = $(s[a], 2),
                        l = c[0],
                        u = c[1];
                    if (("iconPath" === l && !er(u)) || ("iconPathDarkMode" === l && !er(u))) return console.error("customTrayButton ".concat(l, " should be a url.")), !1;
                    var d = r2.id[l];
                    if (!d) return console.error("customTrayButton does not support key ".concat(l)), !1;
                    if (o(u) !== d) return console.error("customTrayButton ".concat(l, " should be a ").concat(d, ".")), !1;
                }
        return !0;
    }
    function ac(t) {
        if (!t || (t && "object" !== o(t)) || Array.isArray(t)) return console.error(as()), !1;
        for (
            var i = function (t) {
                    return "".concat(t, " should be ").concat(rz.id[t]);
                },
                n = function (t, i) {
                    return console.error("customIntegration ".concat(t, ": ").concat(i));
                },
                r = 0,
                a = Object.entries(t);
            r < a.length;
            r++
        ) {
            var s = $(a[r], 1)[0];
            if (!("label" in t[s])) return n(s, "label is required"), !1;
            if (!("location" in t[s])) return n(s, "location is required"), !1;
            if (!("src" in t[s]) && !("srcdoc" in t[s])) return n(s, "src or srcdoc is required"), !1;
            for (var c = 0, l = Object.entries(t[s]); c < l.length; c++) {
                var u = $(l[c], 2),
                    d = u[0],
                    h = u[1];
                switch (d) {
                    case "allow":
                    case "csp":
                    case "name":
                    case "referrerPolicy":
                    case "sandbox":
                        if ("string" != typeof h) return n(s, i(d)), !1;
                        break;
                    case "iconURL":
                        if (!er(h)) return n(s, "".concat(d, " should be a url")), !1;
                        break;
                    case "src":
                        if ("srcdoc" in t[s]) return n(s, "cannot have both src and srcdoc"), !1;
                        if (!er(h)) return n(s, 'src "'.concat(h, '" is not a valid URL')), !1;
                        break;
                    case "srcdoc":
                        if ("src" in t[s]) return n(s, "cannot have both src and srcdoc"), !1;
                        if ("string" != typeof h) return n(s, i(d)), !1;
                        break;
                    case "location":
                        if (!["main", "sidebar"].includes(h)) return n(s, i(d)), !1;
                        break;
                    case "controlledBy":
                        if (
                            "*" !== h &&
                            "owners" !== h &&
                            (!Array.isArray(h) ||
                                h.some(function (t) {
                                    return "string" != typeof t;
                                }))
                        )
                            return n(s, i(d)), !1;
                        break;
                    case "shared":
                        if (
                            (!Array.isArray(h) ||
                                h.some(function (t) {
                                    return "string" != typeof t;
                                })) &&
                            "owners" !== h &&
                            "boolean" != typeof h
                        )
                            return n(s, i(d)), !1;
                        break;
                    default:
                        if (!rz.id[d]) return console.error("customIntegration does not support key ".concat(d)), !1;
                }
            }
        }
        return !0;
    }
    function al(t) {
        if ("object" !== o(t)) throw Error('RemoteMediaPlayerSettings: must be "object" type');
        if (t.state && !Object.values(nU).includes(t.state)) throw Error("Invalid value for RemoteMediaPlayerSettings.state, valid values are: " + JSON.stringify(nU));
        if (t.volume) {
            if ("number" != typeof t.volume) throw Error('RemoteMediaPlayerSettings.volume: must be "number" type');
            if (t.volume < 0 || t.volume > 2) throw Error("RemoteMediaPlayerSettings.volume: must be between 0.0 - 2.0");
        }
    }
    function au(t, i, n) {
        return !("number" != typeof t || t < i || t > n);
    }
    function ad(t, i) {
        return t && !i && delete t.data, t;
    }
    let ah = (function (t) {
        if (t.__esModule) return t;
        var i = t.default;
        if ("function" == typeof i) {
            var n = function t() {
                return this instanceof t ? Reflect.construct(i, arguments, this.constructor) : i.apply(this, arguments);
            };
            n.prototype = i.prototype;
        } else n = {};
        return (
            Object.defineProperty(n, "__esModule", { value: !0 }),
            Object.keys(t).forEach(function (i) {
                var r = Object.getOwnPropertyDescriptor(t, i);
                Object.defineProperty(
                    n,
                    i,
                    r.get
                        ? r
                        : {
                              enumerable: !0,
                              get: function () {
                                  return t[i];
                              },
                          }
                );
            }),
            n
        );
    })(
        Object.freeze(
            Object.defineProperty(
                {
                    __proto__: null,
                    DAILY_ACCESS_LEVEL_FULL: iF,
                    DAILY_ACCESS_LEVEL_LOBBY: "lobby",
                    DAILY_ACCESS_LEVEL_NONE: "none",
                    DAILY_ACCESS_UNKNOWN: iR,
                    DAILY_CAMERA_ERROR_CAM_AND_MIC_IN_USE: "cam-mic-in-use",
                    DAILY_CAMERA_ERROR_CAM_IN_USE: "cam-in-use",
                    DAILY_CAMERA_ERROR_CONSTRAINTS: "constraints",
                    DAILY_CAMERA_ERROR_MIC_IN_USE: "mic-in-use",
                    DAILY_CAMERA_ERROR_NOT_FOUND: "not-found",
                    DAILY_CAMERA_ERROR_PERMISSIONS: "permissions",
                    DAILY_CAMERA_ERROR_UNDEF_MEDIADEVICES: "undefined-mediadevices",
                    DAILY_CAMERA_ERROR_UNKNOWN: "unknown",
                    DAILY_EVENT_ACCESS_STATE_UPDATED: iK,
                    DAILY_EVENT_ACTIVE_SPEAKER_CHANGE: ny,
                    DAILY_EVENT_ACTIVE_SPEAKER_MODE_CHANGE: n8,
                    DAILY_EVENT_APP_MSG: nu,
                    DAILY_EVENT_CAMERA_ERROR: i3,
                    DAILY_EVENT_CPU_LOAD_CHANGE: nk,
                    DAILY_EVENT_ERROR: nP,
                    DAILY_EVENT_EXIT_FULLSCREEN: nT,
                    DAILY_EVENT_FACE_COUNTS_UPDATED: nS,
                    DAILY_EVENT_FULLSCREEN: nw,
                    DAILY_EVENT_IFRAME_LAUNCH_CONFIG: iU,
                    DAILY_EVENT_IFRAME_READY_FOR_LAUNCH_CONFIG: iV,
                    DAILY_EVENT_INPUT_SETTINGS_UPDATED: nx,
                    DAILY_EVENT_JOINED_MEETING: iz,
                    DAILY_EVENT_JOINING_MEETING: i2,
                    DAILY_EVENT_LANG_UPDATED: nL,
                    DAILY_EVENT_LEFT_MEETING: iG,
                    DAILY_EVENT_LIVE_STREAMING_ERROR: nA,
                    DAILY_EVENT_LIVE_STREAMING_STARTED: nC,
                    DAILY_EVENT_LIVE_STREAMING_STOPPED: nM,
                    DAILY_EVENT_LIVE_STREAMING_UPDATED: nE,
                    DAILY_EVENT_LOADED: iq,
                    DAILY_EVENT_LOADING: i0,
                    DAILY_EVENT_LOAD_ATTEMPT_FAILED: i9,
                    DAILY_EVENT_LOCAL_SCREEN_SHARE_CANCELED: nm,
                    DAILY_EVENT_LOCAL_SCREEN_SHARE_STARTED: ng,
                    DAILY_EVENT_LOCAL_SCREEN_SHARE_STOPPED: nv,
                    DAILY_EVENT_MEETING_SESSION_DATA_ERROR: "meeting-session-data-error",
                    DAILY_EVENT_MEETING_SESSION_STATE_UPDATED: i7,
                    DAILY_EVENT_MEETING_SESSION_SUMMARY_UPDATED: i6,
                    DAILY_EVENT_NETWORK_CONNECTION: n$,
                    DAILY_EVENT_NETWORK_QUALITY_CHANGE: nb,
                    DAILY_EVENT_NONFATAL_ERROR: nI,
                    DAILY_EVENT_PARTICIPANT_COUNTS_UPDATED: iH,
                    DAILY_EVENT_PARTICIPANT_JOINED: iW,
                    DAILY_EVENT_PARTICIPANT_LEFT: i4,
                    DAILY_EVENT_PARTICIPANT_UPDATED: iJ,
                    DAILY_EVENT_RECEIVE_SETTINGS_UPDATED: n_,
                    DAILY_EVENT_RECORDING_DATA: nl,
                    DAILY_EVENT_RECORDING_ERROR: no,
                    DAILY_EVENT_RECORDING_STARTED: nr,
                    DAILY_EVENT_RECORDING_STATS: ns,
                    DAILY_EVENT_RECORDING_STOPPED: na,
                    DAILY_EVENT_RECORDING_UPLOAD_COMPLETED: nc,
                    DAILY_EVENT_REMOTE_MEDIA_PLAYER_STARTED: nh,
                    DAILY_EVENT_REMOTE_MEDIA_PLAYER_STOPPED: nf,
                    DAILY_EVENT_REMOTE_MEDIA_PLAYER_UPDATED: np,
                    DAILY_EVENT_STARTED_CAMERA: iY,
                    DAILY_EVENT_THEME_UPDATED: iB,
                    DAILY_EVENT_TRACK_STARTED: iZ,
                    DAILY_EVENT_TRACK_STOPPED: ne,
                    DAILY_EVENT_TRANSCRIPTION_ERROR: nn,
                    DAILY_EVENT_TRANSCRIPTION_MSG: nd,
                    DAILY_EVENT_TRANSCRIPTION_STARTED: nt,
                    DAILY_EVENT_TRANSCRIPTION_STOPPED: ni,
                    DAILY_EVENT_WAITING_PARTICIPANT_ADDED: iQ,
                    DAILY_EVENT_WAITING_PARTICIPANT_REMOVED: iX,
                    DAILY_EVENT_WAITING_PARTICIPANT_UPDATED: i5,
                    DAILY_FATAL_ERROR_CONNECTION: "connection-error",
                    DAILY_FATAL_ERROR_EJECTED: "ejected",
                    DAILY_FATAL_ERROR_EOL: "end-of-life",
                    DAILY_FATAL_ERROR_EXP_ROOM: "exp-room",
                    DAILY_FATAL_ERROR_EXP_TOKEN: "exp-token",
                    DAILY_FATAL_ERROR_MEETING_FULL: "meeting-full",
                    DAILY_FATAL_ERROR_NBF_ROOM: "nbf-room",
                    DAILY_FATAL_ERROR_NBF_TOKEN: "nbf-token",
                    DAILY_FATAL_ERROR_NOT_ALLOWED: "not-allowed",
                    DAILY_FATAL_ERROR_NO_ROOM: "no-room",
                    DAILY_RECEIVE_SETTINGS_ALL_PARTICIPANTS_KEY: "*",
                    DAILY_RECEIVE_SETTINGS_BASE_KEY: ij,
                    DAILY_STATE_ERROR: iN,
                    DAILY_STATE_JOINED: iD,
                    DAILY_STATE_JOINING: iP,
                    DAILY_STATE_LEFT: iO,
                    DAILY_STATE_NEW: "new",
                    DAILY_TRACK_STATE_BLOCKED: "blocked",
                    DAILY_TRACK_STATE_INTERRUPTED: "interrupted",
                    DAILY_TRACK_STATE_LOADING: "loading",
                    DAILY_TRACK_STATE_OFF: "off",
                    DAILY_TRACK_STATE_PLAYABLE: "playable",
                    DAILY_TRACK_STATE_SENDABLE: "sendable",
                    default: rW,
                },
                Symbol.toStringTag,
                { value: "Module" }
            )
        )
    );
    var ap,
        af = { exports: {} },
        ag = "object" == typeof Reflect ? Reflect : null,
        av =
            ag && "function" == typeof ag.apply
                ? ag.apply
                : function (t, i, n) {
                      return Function.prototype.apply.call(t, i, n);
                  };
    ap =
        ag && "function" == typeof ag.ownKeys
            ? ag.ownKeys
            : Object.getOwnPropertySymbols
            ? function (t) {
                  return Object.getOwnPropertyNames(t).concat(Object.getOwnPropertySymbols(t));
              }
            : function (t) {
                  return Object.getOwnPropertyNames(t);
              };
    var am =
        Number.isNaN ||
        function (t) {
            return t != t;
        };
    function ay() {
        ay.init.call(this);
    }
    (af.exports = ay),
        (af.exports.once = function (t, i) {
            return new Promise(function (n, r) {
                var a, s, o;
                function c(n) {
                    t.removeListener(i, l), r(n);
                }
                function l() {
                    "function" == typeof t.removeListener && t.removeListener("error", c), n([].slice.call(arguments));
                }
                aM(t, i, l, { once: !0 }), "error" !== i && ((a = t), (s = c), (o = { once: !0 }), "function" == typeof a.on && aM(a, "error", s, o));
            });
        }),
        (ay.EventEmitter = ay),
        (ay.prototype._events = void 0),
        (ay.prototype._eventsCount = 0),
        (ay.prototype._maxListeners = void 0);
    var a8 = 10;
    function ab(t) {
        if ("function" != typeof t) throw TypeError('The "listener" argument must be of type Function. Received type ' + typeof t);
    }
    function a$(t) {
        return void 0 === t._maxListeners ? ay.defaultMaxListeners : t._maxListeners;
    }
    function ak(t, i, n, r) {
        var a, s, o;
        if (
            (ab(n),
            void 0 === (s = t._events) ? ((s = t._events = Object.create(null)), (t._eventsCount = 0)) : (void 0 !== s.newListener && (t.emit("newListener", i, n.listener ? n.listener : n), (s = t._events)), (o = s[i])),
            void 0 === o)
        )
            (o = s[i] = n), ++t._eventsCount;
        else if (("function" == typeof o ? (o = s[i] = r ? [n, o] : [o, n]) : r ? o.unshift(n) : o.push(n), (a = a$(t)) > 0 && o.length > a && !o.warned)) {
            o.warned = !0;
            var c,
                l = Error("Possible EventEmitter memory leak detected. " + o.length + " " + String(i) + " listeners added. Use emitter.setMaxListeners() to increase limit");
            (l.name = "MaxListenersExceededWarning"), (l.emitter = t), (l.type = i), (l.count = o.length), (c = l), console && console.warn && console.warn(c);
        }
        return t;
    }
    function aS() {
        if (!this.fired) return this.target.removeListener(this.type, this.wrapFn), (this.fired = !0), 0 === arguments.length ? this.listener.call(this.target) : this.listener.apply(this.target, arguments);
    }
    function aw(t, i, n) {
        var r = { fired: !1, wrapFn: void 0, target: t, type: i, listener: n },
            a = aS.bind(r);
        return (a.listener = n), (r.wrapFn = a), a;
    }
    function aT(t, i, n) {
        var r = t._events;
        if (void 0 === r) return [];
        var a = r[i];
        return void 0 === a
            ? []
            : "function" == typeof a
            ? n
                ? [a.listener || a]
                : [a]
            : n
            ? (function (t) {
                  for (var i = Array(t.length), n = 0; n < i.length; ++n) i[n] = t[n].listener || t[n];
                  return i;
              })(a)
            : aE(a, a.length);
    }
    function aC(t) {
        var i = this._events;
        if (void 0 !== i) {
            var n = i[t];
            if ("function" == typeof n) return 1;
            if (void 0 !== n) return n.length;
        }
        return 0;
    }
    function aE(t, i) {
        for (var n = Array(i), r = 0; r < i; ++r) n[r] = t[r];
        return n;
    }
    function aM(t, i, n, r) {
        if ("function" == typeof t.on) r.once ? t.once(i, n) : t.on(i, n);
        else {
            if ("function" != typeof t.addEventListener) throw TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof t);
            t.addEventListener(i, function a(s) {
                r.once && t.removeEventListener(i, a), n(s);
            });
        }
    }
    Object.defineProperty(ay, "defaultMaxListeners", {
        enumerable: !0,
        get: function () {
            return a8;
        },
        set: function (t) {
            if ("number" != typeof t || t < 0 || am(t)) throw RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + t + ".");
            a8 = t;
        },
    }),
        (ay.init = function () {
            (void 0 === this._events || this._events === Object.getPrototypeOf(this)._events) && ((this._events = Object.create(null)), (this._eventsCount = 0)), (this._maxListeners = this._maxListeners || void 0);
        }),
        (ay.prototype.setMaxListeners = function (t) {
            if ("number" != typeof t || t < 0 || am(t)) throw RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + t + ".");
            return (this._maxListeners = t), this;
        }),
        (ay.prototype.getMaxListeners = function () {
            return a$(this);
        }),
        (ay.prototype.emit = function (t) {
            for (var i = [], n = 1; n < arguments.length; n++) i.push(arguments[n]);
            var r = "error" === t,
                a = this._events;
            if (void 0 !== a) r = r && void 0 === a.error;
            else if (!r) return !1;
            if (r) {
                if ((i.length > 0 && (s = i[0]), s instanceof Error)) throw s;
                var s,
                    o = Error("Unhandled error." + (s ? " (" + s.message + ")" : ""));
                throw ((o.context = s), o);
            }
            var c = a[t];
            if (void 0 === c) return !1;
            if ("function" == typeof c) av(c, this, i);
            else {
                var l = c.length,
                    u = aE(c, l);
                for (n = 0; n < l; ++n) av(u[n], this, i);
            }
            return !0;
        }),
        (ay.prototype.addListener = function (t, i) {
            return ak(this, t, i, !1);
        }),
        (ay.prototype.on = ay.prototype.addListener),
        (ay.prototype.prependListener = function (t, i) {
            return ak(this, t, i, !0);
        }),
        (ay.prototype.once = function (t, i) {
            return ab(i), this.on(t, aw(this, t, i)), this;
        }),
        (ay.prototype.prependOnceListener = function (t, i) {
            return ab(i), this.prependListener(t, aw(this, t, i)), this;
        }),
        (ay.prototype.removeListener = function (t, i) {
            var n, r, a, s, o;
            if ((ab(i), void 0 === (r = this._events) || void 0 === (n = r[t]))) return this;
            if (n === i || n.listener === i) 0 == --this._eventsCount ? (this._events = Object.create(null)) : (delete r[t], r.removeListener && this.emit("removeListener", t, n.listener || i));
            else if ("function" != typeof n) {
                for (a = -1, s = n.length - 1; s >= 0; s--)
                    if (n[s] === i || n[s].listener === i) {
                        (o = n[s].listener), (a = s);
                        break;
                    }
                if (a < 0) return this;
                0 === a
                    ? n.shift()
                    : (function (t, i) {
                          for (; i + 1 < t.length; i++) t[i] = t[i + 1];
                          t.pop();
                      })(n, a),
                    1 === n.length && (r[t] = n[0]),
                    void 0 !== r.removeListener && this.emit("removeListener", t, o || i);
            }
            return this;
        }),
        (ay.prototype.off = ay.prototype.removeListener),
        (ay.prototype.removeAllListeners = function (t) {
            var i, n, r;
            if (void 0 === (n = this._events)) return this;
            if (void 0 === n.removeListener)
                return 0 === arguments.length ? ((this._events = Object.create(null)), (this._eventsCount = 0)) : void 0 !== n[t] && (0 == --this._eventsCount ? (this._events = Object.create(null)) : delete n[t]), this;
            if (0 === arguments.length) {
                var a,
                    s = Object.keys(n);
                for (r = 0; r < s.length; ++r) "removeListener" !== (a = s[r]) && this.removeAllListeners(a);
                return this.removeAllListeners("removeListener"), (this._events = Object.create(null)), (this._eventsCount = 0), this;
            }
            if ("function" == typeof (i = n[t])) this.removeListener(t, i);
            else if (void 0 !== i) for (r = i.length - 1; r >= 0; r--) this.removeListener(t, i[r]);
            return this;
        }),
        (ay.prototype.listeners = function (t) {
            return aT(this, t, !0);
        }),
        (ay.prototype.rawListeners = function (t) {
            return aT(this, t, !1);
        }),
        (ay.listenerCount = function (t, i) {
            return "function" == typeof t.listenerCount ? t.listenerCount(i) : aC.call(t, i);
        }),
        (ay.prototype.listenerCount = aC),
        (ay.prototype.eventNames = function () {
            return this._eventsCount > 0 ? ap(this._events) : [];
        });
    var aA,
        aL,
        a_ = af.exports,
        ax = {},
        aI = {};
    Object.defineProperty(aI, "__esModule", { value: !0 }),
        (aI.Api = aI.HttpClient = aI.ContentType = void 0),
        ((aL = aA || (aI.ContentType = aA = {})).Json = "application/json"),
        (aL.FormData = "multipart/form-data"),
        (aL.UrlEncoded = "application/x-www-form-urlencoded"),
        (aL.Text = "text/plain");
    class aP {
        constructor(t = {}) {
            i(this, "baseUrl", "https://api.vapi.ai"),
                i(this, "securityData", null),
                i(this, "securityWorker"),
                i(this, "abortControllers", new Map()),
                i(this, "customFetch", (...t) => fetch(...t)),
                i(this, "baseApiParams", { credentials: "same-origin", headers: {}, redirect: "follow", referrerPolicy: "no-referrer" }),
                i(this, "setSecurityData", (t) => {
                    this.securityData = t;
                }),
                i(this, "contentFormatters", {
                    [aA.Json]: (t) => (null === t || ("object" != typeof t && "string" != typeof t) ? t : JSON.stringify(t)),
                    [aA.Text]: (t) => (null !== t && "string" != typeof t ? JSON.stringify(t) : t),
                    [aA.FormData]: (t) =>
                        Object.keys(t || {}).reduce((i, n) => {
                            let r = t[n];
                            return i.append(n, r instanceof Blob ? r : "object" == typeof r && null !== r ? JSON.stringify(r) : `${r}`), i;
                        }, new FormData()),
                    [aA.UrlEncoded]: (t) => this.toQueryString(t),
                }),
                i(this, "createAbortSignal", (t) => {
                    if (this.abortControllers.has(t)) {
                        let i = this.abortControllers.get(t);
                        return i ? i.signal : void 0;
                    }
                    let n = new AbortController();
                    return this.abortControllers.set(t, n), n.signal;
                }),
                i(this, "abortRequest", (t) => {
                    let i = this.abortControllers.get(t);
                    i && (i.abort(), this.abortControllers.delete(t));
                }),
                i(this, "request", async ({ body: t, secure: i, path: n, type: r, query: a, format: s, baseUrl: o, cancelToken: c, ...l }) => {
                    let u = (("boolean" == typeof i ? i : this.baseApiParams.secure) && this.securityWorker && (await this.securityWorker(this.securityData))) || {},
                        d = this.mergeRequestParams(l, u),
                        h = a && this.toQueryString(a),
                        p = this.contentFormatters[r || aA.Json],
                        f = s || d.format;
                    return this.customFetch(`${o || this.baseUrl || ""}${n}${h ? `?${h}` : ""}`, {
                        ...d,
                        headers: { ...(d.headers || {}), ...(r && r !== aA.FormData ? { "Content-Type": r } : {}) },
                        signal: (c ? this.createAbortSignal(c) : d.signal) || null,
                        body: typeof t > "u" || null === t ? null : p(t),
                    }).then(async (t) => {
                        let i = t;
                        (i.data = null), (i.error = null);
                        let n = f
                            ? await t[f]()
                                  .then((t) => (i.ok ? (i.data = t) : (i.error = t), i))
                                  .catch((t) => ((i.error = t), i))
                            : i;
                        if ((c && this.abortControllers.delete(c), !t.ok)) throw n;
                        return n;
                    });
                }),
                Object.assign(this, t);
        }
        encodeQueryParam(t, i) {
            return `${encodeURIComponent(t)}=${encodeURIComponent("number" == typeof i ? i : `${i}`)}`;
        }
        addQueryParam(t, i) {
            return this.encodeQueryParam(i, t[i]);
        }
        addArrayQueryParam(t, i) {
            return t[i].map((t) => this.encodeQueryParam(i, t)).join("&");
        }
        toQueryString(t) {
            let i = t || {};
            return Object.keys(i)
                .filter((t) => "u" > typeof i[t])
                .map((t) => (Array.isArray(i[t]) ? this.addArrayQueryParam(i, t) : this.addQueryParam(i, t)))
                .join("&");
        }
        addQueryParams(t) {
            let i = this.toQueryString(t);
            return i ? `?${i}` : "";
        }
        mergeRequestParams(t, i) {
            return { ...this.baseApiParams, ...t, ...(i || {}), headers: { ...(this.baseApiParams.headers || {}), ...(t.headers || {}), ...((i && i.headers) || {}) } };
        }
    }
    (aI.HttpClient = aP),
        (aI.Api = class extends aP {
            constructor() {
                super(...arguments),
                    i(this, "assistant", {
                        assistantControllerCreate: (t, i = {}) => this.request({ path: "/assistant", method: "POST", body: t, secure: !0, type: aA.Json, format: "json", ...i }),
                        assistantControllerFindAll: (t, i = {}) => this.request({ path: "/assistant", method: "GET", query: t, secure: !0, format: "json", ...i }),
                        assistantControllerFindOne: (t, i = {}) => this.request({ path: `/assistant/${t}`, method: "GET", secure: !0, format: "json", ...i }),
                        assistantControllerUpdate: (t, i, n = {}) => this.request({ path: `/assistant/${t}`, method: "PATCH", body: i, secure: !0, type: aA.Json, format: "json", ...n }),
                        assistantControllerReplace: (t, i, n = {}) => this.request({ path: `/assistant/${t}`, method: "PUT", body: i, secure: !0, type: aA.Json, format: "json", ...n }),
                        assistantControllerRemove: (t, i = {}) => this.request({ path: `/assistant/${t}`, method: "DELETE", secure: !0, format: "json", ...i }),
                    }),
                    i(this, "call", {
                        callControllerFindAll: (t, i = {}) => this.request({ path: "/call", method: "GET", query: t, secure: !0, format: "json", ...i }),
                        callControllerFindOne: (t, i = {}) => this.request({ path: `/call/${t}`, method: "GET", secure: !0, format: "json", ...i }),
                        callControllerDeleteCallData: (t, i = {}) => this.request({ path: `/call/${t}`, method: "DELETE", secure: !0, format: "json", ...i }),
                        callControllerUpdate: (t, i, n = {}) => this.request({ path: `/call/${t}`, method: "PATCH", body: i, secure: !0, type: aA.Json, format: "json", ...n }),
                        callControllerCreatePhoneCall: (t, i = {}) => this.request({ path: "/call/phone", method: "POST", body: t, secure: !0, type: aA.Json, format: "json", ...i }),
                        callControllerCreateWebCall: (t, i = {}) => this.request({ path: "/call/web", method: "POST", body: t, secure: !0, type: aA.Json, format: "json", ...i }),
                    }),
                    i(this, "credential", {
                        credentialControllerCreate: (t, i = {}) => this.request({ path: "/credential", method: "POST", body: t, secure: !0, type: aA.Json, format: "json", ...i }),
                        credentialControllerFindAll: (t, i = {}) => this.request({ path: "/credential", method: "GET", query: t, secure: !0, format: "json", ...i }),
                        credentialControllerFindOne: (t, i = {}) => this.request({ path: `/credential/${t}`, method: "GET", secure: !0, format: "json", ...i }),
                        credentialControllerUpdate: (t, i, n = {}) => this.request({ path: `/credential/${t}`, method: "PUT", body: i, secure: !0, type: aA.Json, format: "json", ...n }),
                        credentialControllerRemove: (t, i = {}) => this.request({ path: `/credential/${t}`, method: "DELETE", secure: !0, format: "json", ...i }),
                    }),
                    i(this, "phoneNumber", {
                        phoneNumberControllerBuy: (t, i = {}) => this.request({ path: "/phone-number/buy", method: "POST", body: t, secure: !0, type: aA.Json, format: "json", ...i }),
                        phoneNumberControllerImportTwilio: (t, i = {}) => this.request({ path: "/phone-number/import/twilio", method: "POST", body: t, secure: !0, type: aA.Json, format: "json", ...i }),
                        phoneNumberControllerImportVonage: (t, i = {}) => this.request({ path: "/phone-number/import/vonage", method: "POST", body: t, secure: !0, type: aA.Json, format: "json", ...i }),
                        phoneNumberControllerFindAll: (t, i = {}) => this.request({ path: "/phone-number", method: "GET", query: t, secure: !0, format: "json", ...i }),
                        phoneNumberControllerFindOne: (t, i = {}) => this.request({ path: `/phone-number/${t}`, method: "GET", secure: !0, format: "json", ...i }),
                        phoneNumberControllerUpdate: (t, i, n = {}) => this.request({ path: `/phone-number/${t}`, method: "PATCH", body: i, secure: !0, type: aA.Json, format: "json", ...n }),
                        phoneNumberControllerRemove: (t, i = {}) => this.request({ path: `/phone-number/${t}`, method: "DELETE", secure: !0, format: "json", ...i }),
                    }),
                    i(this, "metrics", { metricsControllerFindAll: (t, i = {}) => this.request({ path: "/metrics", method: "GET", query: t, secure: !0, format: "json", ...i }) }),
                    i(this, "log", { loggingControllerGetLogs: (t, i = {}) => this.request({ path: "/log", method: "GET", query: t, secure: !0, format: "json", ...i }) }),
                    i(this, "tool", {
                        toolControllerCreate: (t, i = {}) => this.request({ path: "/tool", method: "POST", body: t, secure: !0, type: aA.Json, format: "json", ...i }),
                        toolControllerFindAll: (t, i = {}) => this.request({ path: "/tool", method: "GET", query: t, secure: !0, format: "json", ...i }),
                        toolControllerFindOne: (t, i = {}) => this.request({ path: `/tool/${t}`, method: "GET", secure: !0, format: "json", ...i }),
                        toolControllerUpdate: (t, i, n = {}) => this.request({ path: `/tool/${t}`, method: "PATCH", body: i, secure: !0, type: aA.Json, format: "json", ...n }),
                        toolControllerRemove: (t, i = {}) => this.request({ path: `/tool/${t}`, method: "DELETE", secure: !0, format: "json", ...i }),
                    }),
                    i(this, "file", {
                        fileControllerCreate: (t, i = {}) => this.request({ path: "/file/upload", method: "POST", body: t, secure: !0, type: aA.FormData, format: "json", ...i }),
                        fileControllerFindAll: (t = {}) => this.request({ path: "/file", method: "GET", secure: !0, format: "json", ...t }),
                        fileControllerFindOne: (t, i = {}) => this.request({ path: `/file/${t}`, method: "GET", secure: !0, format: "json", ...i }),
                        fileControllerRemove: (t, i = {}) => this.request({ path: `/file/${t}`, method: "DELETE", secure: !0, format: "json", ...i }),
                    });
            }
        }),
        Object.defineProperty(ax, "__esModule", { value: !0 }),
        (ax.client = void 0);
    let aD = new aI.Api({
        baseUrl: "https://api.vapi.ai",
        baseApiParams: { secure: !0 },
        async securityWorker(t) {
            if (t) return { headers: { Authorization: `Bearer ${t}` } };
        },
    });
    ax.client = aD;
    var aO =
        (n && n.__importDefault) ||
        function (t) {
            return t && t.__esModule ? t : { default: t };
        };
    Object.defineProperty(r, "__esModule", { value: !0 });
    let aN = aO(ah),
        aR = aO(a_),
        aF = ax;
    async function aj(t, i) {
        let n = document.createElement("audio");
        return (
            (n.dataset.participantId = i),
            document.body.appendChild(n),
            await (async function (t, i) {
                (t.muted = !1), (t.autoplay = !0), null != i && ((t.srcObject = new MediaStream([i])), await t.play());
            })(n, t),
            n
        );
    }
    class aV extends aR.default {
        on(t, i) {
            return super.on(t, i), this;
        }
        once(t, i) {
            return super.once(t, i), this;
        }
        emit(t, ...i) {
            return super.emit(t, ...i);
        }
        removeListener(t, i) {
            return super.removeListener(t, i), this;
        }
        removeAllListeners(t) {
            return super.removeAllListeners(t), this;
        }
    }
    var aU = (r.default = class extends aV {
        constructor(t, n) {
            super(), i(this, "started", !1), i(this, "call", null), i(this, "speakingTimeout", null), (aF.client.baseUrl = n ?? "https://api.vapi.ai"), aF.client.setSecurityData(t);
        }
        cleanup() {
            var t;
            (this.started = !1), null == (t = this.call) || t.destroy(), (this.call = null), (this.speakingTimeout = null);
        }
        async start(t, i, n) {
            var r, a;
            if (!t && !n) throw Error("Assistant or Squad must be provided.");
            if (this.started) return null;
            this.started = !0;
            try {
                let s = (
                    await aF.client.call.callControllerCreateWebCall({
                        assistant: "string" == typeof t ? void 0 : t,
                        assistantId: "string" == typeof t ? t : void 0,
                        assistantOverrides: i,
                        squad: "string" == typeof n ? void 0 : n,
                        squadId: "string" == typeof n ? n : void 0,
                    })
                ).data;
                this.call && this.cleanup();
                let o = (null == (r = null == s ? void 0 : s.artifactPlan) ? void 0 : r.videoRecordingEnabled) ?? !1;
                if (
                    ((this.call = aN.default.createCallObject({ audioSource: !0, videoSource: o })),
                    null == (a = this.call.iframe()) || a.style.setProperty("display", "none"),
                    this.call.on("left-meeting", () => {
                        var t;
                        this.emit("call-end"), o && (null == (t = this.call) || t.stopRecording()), this.cleanup();
                    }),
                    this.call.on("participant-left", (t) => {
                        var i;
                        let n;
                        t && ((i = t.participant.session_id), (n = document.querySelector(`audio[data-participant-id="${i}"]`)), null == n || n.remove());
                    }),
                    this.call.on("error", (t) => {
                        var i;
                        this.emit("error", t), o && (null == (i = this.call) || i.stopRecording());
                    }),
                    this.call.on("camera-error", (t) => {
                        this.emit("error", t);
                    }),
                    this.call.on("track-started", async (t) => {
                        var i, n, r;
                        t &&
                            t.participant &&
                            (null == (i = t.participant) || !i.local) &&
                            "audio" === t.track.kind &&
                            (await aj(t.track, t.participant.session_id), "Vapi Speaker" === (null == (n = null == t ? void 0 : t.participant) ? void 0 : n.user_name) && (null == (r = this.call) || r.sendAppMessage("playable")));
                    }),
                    this.call.on("participant-joined", (t) => {
                        var i, n, r;
                        t && this.call && ((i = t), (n = this.call), (r = o), i.participant.local || n.updateParticipant(i.participant.session_id, { setSubscribedTracks: { audio: !0, video: r } }));
                    }),
                    await this.call.join({ url: s.webCallUrl, subscribeToTracksAutomatically: !1 }),
                    o)
                ) {
                    let c = new Date().getTime();
                    this.call.startRecording({ width: 1280, height: 720, backgroundColor: "#FF1F2D3D", layout: { preset: "default" } }),
                        this.call.on("recording-started", () => {
                            this.send({ type: "control", control: "say-first-message", videoRecordingStartDelaySeconds: (new Date().getTime() - c) / 1e3 });
                        });
                }
                return (
                    this.call.startRemoteParticipantsAudioLevelObserver(100),
                    this.call.on("remote-participants-audio-level", (t) => {
                        t && this.handleRemoteParticipantsAudioLevel(t);
                    }),
                    this.call.on("app-message", (t) => this.onAppMessage(t)),
                    this.call.on("nonfatal-error", (t) => {
                        var i;
                        "audio-processor-error" === (null == t ? void 0 : t.type) &&
                            (null == (i = this.call) ||
                                i.updateInputSettings({ audio: { processor: { type: "none" } } }).then(() => {
                                    var t;
                                    null == (t = this.call) || t.setLocalAudio(!0);
                                }));
                    }),
                    this.call.updateInputSettings({ audio: { processor: { type: "noise-cancellation" } } }),
                    s
                );
            } catch (l) {
                return console.error(l), this.emit("error", l), this.cleanup(), null;
            }
        }
        onAppMessage(t) {
            if (t)
                try {
                    if ("listening" === t.data) return this.emit("call-start");
                    try {
                        let i = JSON.parse(t.data);
                        this.emit("message", i);
                    } catch (n) {
                        console.log("Error parsing message data: ", n);
                    }
                } catch (r) {
                    console.error(r);
                }
        }
        handleRemoteParticipantsAudioLevel(t) {
            let i = Object.values(t.participantsAudioLevel).reduce((t, i) => t + i, 0);
            this.emit("volume-level", Math.min(1, i / 0.15)),
                i > 0.01 &&
                    (this.speakingTimeout ? (clearTimeout(this.speakingTimeout), (this.speakingTimeout = null)) : this.emit("speech-start"),
                    (this.speakingTimeout = setTimeout(() => {
                        this.emit("speech-end"), (this.speakingTimeout = null);
                    }, 1e3)));
        }
        stop() {
            var t;
            (this.started = !1), null == (t = this.call) || t.destroy(), (this.call = null);
        }
        send(t) {
            var i;
            null == (i = this.call) || i.sendAppMessage(JSON.stringify(t));
        }
        setMuted(t) {
            try {
                if (!this.call) throw Error("Call object is not available.");
                this.call.setLocalAudio(!t);
            } catch (i) {
                throw i;
            }
        }
        isMuted() {
            try {
                return !!this.call && !1 === this.call.localAudio();
            } catch (t) {
                throw t;
            }
        }
        say(t, i) {
            this.send({ type: "say", message: t, endCallAfterSpoken: i });
        }
        setInputDevicesAsync(t) {
            var i;
            null == (i = this.call) || i.setInputDevicesAsync(t);
        }
        setOutputDeviceAsync(t) {
            var i;
            null == (i = this.call) || i.setOutputDeviceAsync(t);
        }
    });
    let aB = ({ position: t = "bottom", offset: i = "40px", width: n = "50px", height: r = "50px", idle: a, loading: s, active: o }, c = "vapi-support-btn") => {
        (({ idle: t, loading: i, active: n, width: r, height: a, position: s, offset: o }) => {
            let c = parseInt(r) / 2,
                l = parseInt(a) / 2,
                u = {
                    "bottom-right": `bottom: ${o}; right: ${o};`,
                    "bottom-left": `bottom: ${o}; left: ${o};`,
                    "top-right": `top: ${o}; right: ${o};`,
                    "top-left": `top: ${o}; left: ${o};`,
                    bottom: `bottom: ${o}; left: 50%; margin-left: -${c}px;`,
                    right: `top: 50%; right: ${o}; margin-top: -${l}px;`,
                    left: `top: 50%; left: ${o}; margin-top: -${l}px;`,
                    top: `top: ${o}; left: 50%; margin-left: -${c}px;`,
                },
                d = document.createElement("style");
            d.innerText = `
                  @keyframes bounce {
                      30% {
                          transform: translateY(0%);
                      }
  
                      40% {
                          transform: translateY(-5%);
                      }
  
                      50% {
                          transform: translateY(-10%);
                      }
  
                      60% {
                          transform: translateY(-5%);
                      }
  
                      70% {
                          transform: translateY(0%);
                      }
                  }
  
                  @keyframes spin {
                      0% {
                          transform: rotate(0deg);
                      }
  
                      100% {
                          transform: rotate(360deg);
                      }
                  }
  
                  .vapi-btn {
                      border-radius: 50%;
                      min-width: ${r};
                      height: ${a};
                      color: white;
                      border: none;
                      transition: all 0.3s ease-in-out;
                      display: flex;
                      flex-direction: column;
                      justify-content: center;
                      text-align: center;
                      align-items: center;
                      position: fixed;
                      padding: 0;
                      cursor: context-menu;
                    //   animation: bounce 2s ease-in-out infinite;
                      z-index: 9999;
                      ${u[s]}
                  }
  
                  .vapi-btn-round {
                      border-radius: 30px;
                      color: black;
                      background: white;
                      display: flex;
                      flex-direction: row;
                      justify-content: flex-start;
                      align-items: center;
                      padding: 5px 10px;
                      border: 0.1px solid rgba(0, 0, 0, 0.3);
                      font-family: sans-serif;
                  }
  
                  .vapi-btn-round #vapi-container button img {
                      animation: spin 1s linear infinite;
                  }
  
  
                  .vapi-btn-connect {
                      color: black;
                      background: white;
                      display: flex;
                      flex-direction: row;
                      justify-content: center;
                      align-items: center;
                      padding: 10px 10px;
                      border-radius: 50%;
                      border: 0.1px solid rgba(0, 0, 0, 0.3);
                      font-family: sans-serif;
                  }
  
                  .vapi-btn-pill {
                      border-radius: 20px;
                      color: black;
                      background: white;
                      justify-content: flex-start;
                      // padding: 0px 5px;
                  }
  
                  .vapi-btn:hover {
                      animation: none;
                      transform: translateY(-5px);
                  }
  
                  #vapi-icon-container {
                      // padding: 5px;
                      // margin: 5px;
                      border-radius: 5px;
                  }
  
                  #vapi-title-container {
                      padding: 5px 10px;
                  }
  
                  #vapi-title {
                      font-size: 1.1em;
                  }
  
                  #vapi-subtitle {
                      font-size: 0.9em;
                  }
  
                  .vapi-btn-is-loading>#vapi-icon-container>img {
                      animation: spin 1s linear infinite;
                  }
  
                  .vapi-btn-is-active {
                      background: "#f2f2f2";
                      box-shadow: 1px 1px 10px rgb(97, 97, 97) !important;
                      height: 267px;
                  }
  
                  .vapi-btn-pill.vapi-btn-is-active {
                      background: #fff;
                  }
  
                  .vapi-btn-pill.vapi-btn-is-active>#vapi-icon-container {
                      background: #fff;
                      width: 260px;
                  }
  
                  .vapi-avatar {
                      width: 40px;
                      height: 40px;
                      border-radius: 50%;
                      object-fit: cover;
                  }
  
                  .vapi-call-btn {
                      border: none;
                      background: transparent;
                      cursor: pointer;
                      display: flex;
                      flex-direction: row;
                      align-items: center;
                      justify-content: center;
                      gap: 4px;
                      padding: 10px;
                      width: 150px;
                      height: 40px;
                      color: #fff;
                      border-radius: 50px;
                      background-color: rgb(0, 0, 0);
                      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
                      transition: background 0.3s ease;
                  }
  
                  .vapi-call-btn:hover {
                      background-color: rgb(206, 206, 206);
                      color: #000;
                  }
  
                  .vapi-call-btn:hover #vapi-subtitle {
                      color: black;
                      font-weight: bold;
                  }
  
                  .vapi-icon {
                      width: 20px;
                      height: 20px;
                      content: url("https://i.imghippo.com/files/gf3941lE.png");
                  }
  
                  .vapi-call-btn:hover .vapi-icon {
                      content: url("https://i.imghippo.com/files/On1255WA.png");
                  }
  
                  .vapi-call-icon {
                      width: 24px;
                      height: 24px;
                      color: #333;
                  }
  
                  #vapi-subtitle {
                      font-size: 12px;
                      text-align: center;
                      color: #fff;
                  }
  
                  .vapi-btn-is-idle {
                      background: "#f2f2f2";
                      box-shadow: 1px 1px 10px rgb(97, 97, 97);
                      height: 267px;
                      animation: bounce 2s ease-in-out infinite;
                  }
  
                  .vapi-btn-pill.vapi-btn-is-idle {
                      background: white;
                  }
  
                  .vapi-btn-pill.vapi-btn-is-idle>#vapi-icon-container {
                      background: ${t.color};
                  }
  
                  .vapi-btn-is-loading {
                      background: ${i.color};
                      box-shadow: 1px 1px 80px 20px ${i.color};
                      height: 60px;
                  }
  
                  .vapi-btn-pill.vapi-btn-is-loading {
                      background: white;
                  }
  
                  .vapi-btn-pill.vapi-btn-is-loading>#vapi-icon-container {
                      background: ${i.color};
                  }
  
                  .vapi-btn-is-speaking {
                      /* Add speaking styles if different from active/loading/idle */
                  }
  
                  @font-face {
                      font-family: 'LucideIcons';
                      src: url(https://unpkg.com/lucide-static@latest/font/Lucide.ttf) format('truetype');
                  }
                  `;
            for (let h = 0; h <= 10; h++)
                d.innerText += `
                .vapi-btn-volume-${h} {
                box-shadow: 1px 1px ${5 + 2 * h}px ${2 * h}px ${n.color}, inset 0px 0px 10px 0px rgba(0,0,0,0.1);
                }
                @media (max-width: 1600px) {
                    #vapi-icon-container {
                        width:185px !important;
                    }

                    #vapi-support-btn{
                        height: 195px !important;
                    }

                    #vapi-support-btn.vapi-btn-is-loading {
                        height: 60px !important;
                    }
                        
                    #vapi-icon-container #name-container{
                        width: 100px !important;
                        padding: 4px 0px !important;
                    }
                        
                    #vapi-icon-container img{
                        width: 100% !important;
                        height: 165px !important;
                    }

                    #vapi-icon-container #call-icon img{
                        width: 20px !important;
                        height: 20px !important;
                    }

                    #vapi-icon-container #call-icon{
                        width: 40px !important;
                        height: 40px !important;
                    }
                }

      `;
            document.head.appendChild(d);
        })({ idle: a, loading: s, active: o, width: n, height: r, position: t, offset: i });
        let l = document.createElement("button");
        return (l.id = c), (l.className = "vapi-btn vapi-btn-round vapi-btn-is-idle"), (l.onclick = () => {}), l;
    };
    window.vapiSDK = {
        run({ apiKey: t = "", assistant: i, assistantOverrides: n, squad: r, config: a = {}, ...s }) {
            let o = (function t(i, n) {
                let r = { ...i };
                return (
                    Object.keys(n).forEach((a) => {
                        "object" != typeof n[a] || null === n[a] || Array.isArray(n[a]) ? (r[a] = n[a]) : (r[a] = t(i[a] || {}, n[a]));
                    }),
                    r
                );
            })(
                {
                    position: "bottom",
                    offset: "40px",
                    width: "50px",
                    height: "50px",
                    idle: { color: "#FFFFFF", type: "round", title: "Have a quick question?", subtitle: "Voice Chat", icon: "https://unpkg.com/lucide-static@0.321.0/icons/phone.svg" },
                    loading: { color: "#FFFFFF", type: "connect", title: "Connecting...", subtitle: "Please wait", icon: "https://unpkg.com/lucide-static@0.321.0/icons/loader-2.svg" },
                    active: { color: "#fff", type: "pill", title: "Call is in progress...", subtitle: "End call.", icon: "https://unpkg.com/lucide-static@0.321.0/icons/phone-off.svg" },
                },
                a
            );
            if (t && (i || r)) {
                var c, l, u, d, h, p, f;
                let g = new aU(t),
                    v = aB(o),
                    m =
                        ((c = o),
                        (t, i) => {
                            let n = c[i];
                            if (n) {
                                if (((t.innerHTML = ""), (t.title = n.title ?? ""), (t.className = `vapi-btn vapi-btn-is-${i}`), "connect" === n.type)) {
                                    t.classList.add("vapi-btn-round");
                                    let r = document.createElement("div");
                                    (r.id = "vapi-container"),
                                        (r.style.display = "flex"),
                                        (r.style.alignItems = "center"),
                                        (r.style.justifyContent = "space-between"),
                                        (r.style.padding = "5px 0px 5px 8px"),
                                        (r.style.borderRadius = "30px"),
                                        (r.style.width = "fit-content"),
                                        (r.style.fontFamily = "Arial, sans-serif"),
                                        (r.style.color = "#333"),
                                        (r.style.fontSize = "14px"),
                                        (r.style.boxShadow = "0px 2px 4px rgba(0, 0, 0, 0.1)");
                                    let a = document.createElement("div");
                                    (a.style.display = "flex"), (a.style.flexDirection = "column"), (a.style.alignItems = "flex-start"), (a.style.marginRight = "10px");
                                    let s = document.createElement("div");
                                    (s.textContent = "Connecting.."), Object.assign(s.style, { fontSize: "16px", color: "#555", fontWeight: "bold" });
                                    let o = document.createElement("div");
                                    (o.innerHTML = "Please wait</span>"), (o.style.fontSize = "14px");
                                    let l = document.createElement("button");
                                    (l.style.display = "flex"),
                                        (l.style.justifyContent = "center"),
                                        (l.style.alignItems = "center"),
                                        (l.style.background = "#FF7F41"),
                                        (l.style.border = "none"),
                                        (l.style.borderRadius = "50%"),
                                        (l.style.width = "40px"),
                                        (l.style.height = "40px"),
                                        (l.style.cursor = "pointer"),
                                        (l.style.boxShadow = "0px 2px 4px rgba(0, 0, 0, 0.2)");
                                    let u = document.createElement("img");
                                    (u.src = "https://unpkg.com/lucide-static@0.321.0/icons/loader-2.svg"),
                                        (u.style.width = "18px"),
                                        (u.style.height = "18px"),
                                        l.appendChild(u),
                                        a.appendChild(s),
                                        a.appendChild(o),
                                        r.appendChild(a),
                                        r.appendChild(l),
                                        t.appendChild(r);
                                } else if ("round" === n.type) {
                                    t.classList.add("vapi-btn-pill");
                                    let d = document.createElement("div");
                                    (d.id = "vapi-icon-container"),
                                        Object.assign(d.style, { width: "251px", fontFamily: "Arial, sans-serif", color: "#fff", borderRadius: "20px", overflow: "hidden", background: "white", position: "relative" });
                                    let h = document.createElement("div");
                                    Object.assign(h.style, { background: "linear-gradient(135deg, #b053e2, #745bd8)", position: "relative" });
                                    let p = document.createElement("img");
                                    (p.src =
                                        "https://drive.google.com/thumbnail?id=15ERHAf-9n0oTZ8d562CcW1BcNzffkuQQ&sz=s800"),
                                        (p.alt = "Agent GIF"),
                                        Object.assign(p.style, { width: "100%", height: "235px", display: "block", objectFit: "cover" }),
                                        h.appendChild(p);
                                    let f = document.createElement("div");
                                    (f.id = "name-container"),
                                    (f.textContent = "Clara"),
                                        Object.assign(f.style, {
                                            position: "absolute",
                                            bottom: "40px",
                                            left: "50%",
                                            width: "150px",
                                            transform: "translateX(-50%)",
                                            padding: "8px 20px",
                                            borderRadius: "16px",
                                            background: "rgba(162, 142, 165, 0.44)",
                                            fontSize: "14px",
                                            fontWeight: "bold",
                                            color: "#f8f8f8",
                                        }),
                                        h.appendChild(f);
                                    let g = document.createElement("div");
                                    Object.assign(g.style, { height: "40px", backgroundColor: "#fff" }), d.appendChild(h), d.appendChild(g);
                                    let v = document.createElement("div");
                                    (v.id = "call-icon"),
                                    Object.assign(v.style, {
                                        width: "48px",
                                        height: "48px",
                                        backgroundColor: "rgb(65, 206, 84)",
                                        borderRadius: "50%",
                                        position: "absolute",
                                        left: "50%",
                                        bottom: "12px",
                                        transform: "translateX(-50%)",
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        boxShadow: "0 0 12px 6px rgba(124, 124, 124, 0.4)",
                                        cursor: "pointer",
                                        zIndex: "5",
                                    });
                                    v.addEventListener("mouseenter", () => {
                                        v.style.backgroundColor = "rgb(55, 186, 74)";
                                    });
                                    
                                    v.addEventListener("mouseleave", () => {
                                        v.style.backgroundColor = "rgb(65, 206, 84)";
                                    });
                                    v.style.transition = "background-color 0.2s ease";
                                    let m = document.createElement("img");
                                    (m.src = "https://i.imghippo.com/files/Dau4401hE.png"), (m.alt = "End Call"), Object.assign(m.style, { width: "25px", height: "25px" }), v.appendChild(m), d.appendChild(v), t.appendChild(d);
                                } else {
                                    t.classList.add("vapi-btn-pill");
                                    let y = document.createElement("div");
                                    (y.id = "vapi-icon-container"),
                                        Object.assign(y.style, { width: "251px", fontFamily: "Arial, sans-serif", color: "#fff", borderRadius: "20px", overflow: "hidden", background: "white", position: "relative" });
                                    let b = document.createElement("div");
                                    Object.assign(b.style, { background: "linear-gradient(135deg, #b053e2, #745bd8)", position: "relative" });
                                    let $ = document.createElement("img");
                                    ($.src =
                                        "https://drive.google.com/thumbnail?id=15ERHAf-9n0oTZ8d562CcW1BcNzffkuQQ&sz=s800"),
                                        ($.alt = "Agent GIF"),
                                        Object.assign($.style, { width: "100%", height: "235px", display: "block", objectFit: "cover" }),
                                        b.appendChild($);
                                    let k = document.createElement("div");
                                    (k.textContent = "00:01"), Object.assign(k.style, { position: "absolute", top: "8px", left: "12px", fontSize: "14px", fontWeight: "bold", color: "#fff", zIndex: "2" }), b.appendChild(k);
                                    let S = 1;
                                    setInterval(() => {
                                        S++;
                                        let t = String(Math.floor(S / 60)).padStart(2, "0"),
                                            i = String(S % 60).padStart(2, "0");
                                        k.textContent = `${t}:${i}`;
                                    }, 1e3);
                                    let w = document.createElement("div");
                                    (w.id = "name-container"),
                                    (w.textContent = "Clara"),
                                        Object.assign(w.style, {
                                            position: "absolute",
                                            bottom: "40px",
                                            left: "50%",
                                            width: "150px",
                                            transform: "translateX(-50%)",
                                            padding: "8px 20px",
                                            borderRadius: "16px",
                                            background: "rgba(165, 165, 165, 0.42)",
                                            fontSize: "14px",
                                            fontWeight: "bold",
                                            color: "#fff",
                                        }),
                                        b.appendChild(w);
                                    let T = document.createElement("div");
                                    Object.assign(T.style, { height: "40px", backgroundColor: "#fff" }), y.appendChild(b), y.appendChild(T);
                                    let C = document.createElement("div");
                                    (C.id = "call-icon"),
                                    Object.assign(C.style, {
                                        width: "48px",
                                        height: "48px",
                                        backgroundColor: "rgb(253, 95, 74)",
                                        borderRadius: "50%",
                                        position: "absolute",
                                        left: "50%",
                                        bottom: "12px",
                                        transform: "translateX(-50%)",
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        boxShadow: "0 0 12px 6px rgba(253, 95, 74, 0.4)",
                                        cursor: "pointer",
                                        zIndex: "5",
                                    });
                                    C.addEventListener("mouseenter", () => {
                                        C.style.backgroundColor = "rgb(233, 75, 54)"; // slightly darker for hover
                                    });
                                    
                                    C.addEventListener("mouseleave", () => {
                                        C.style.backgroundColor = "rgb(253, 95, 74)"; // original base color
                                    });
                                    C.style.transition = "background-color 0.2s ease";

                                    let E = document.createElement("img");
                                    (E.src = "https://i.imghippo.com/files/ca2892Nik.png"), (E.alt = "End Call"), Object.assign(E.style, { width: "32px", height: "32px" }), C.appendChild(E), y.appendChild(C), t.appendChild(y);
                                }
                            } else console.warn(`No config found for type: ${i}`);
                        }),
                    y;
                return (
                    document.body.appendChild(v),
                    m(v, "idle"),
                    (l = g),
                    (u = v),
                    (d = i),
                    (h = n),
                    (p = r),
                    (f = m),
                    (y = !1),
                    l.on("call-start", () => {
                        f(u, "active");
                    }),
                    l.on("call-end", () => {
                        f(u, "idle");
                    }),
                    l.on("speech-start", () => {
                        u.classList.add("vapi-btn-is-speaking");
                    }),
                    l.on("speech-end", () => {
                        u.classList.remove("vapi-btn-is-speaking");
                    }),
                    u.addEventListener("click", () => {
                        f(u, "loading"), y ? (l.stop(), (y = !1)) : (d || h ? l.start(d, h) : (console.log("squad ,", p, d, h), l.start(void 0, void 0, p)), (y = !0));
                    }),
                    l.on("volume-level", (t) => {
                        for (let i = 0; i <= 10; i++) u.classList.remove(`vapi-btn-volume-${i}`);
                        u.classList.add(`vapi-btn-volume-${Math.floor(10 * t)}`);
                    }),
                    (window.vapiSDK.vapi = g),
                    g
                );
            }
            return console.error("API Key and Assistant Configurations are required. are required"), null;
        },
    };
});
