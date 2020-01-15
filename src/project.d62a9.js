require = function o(a, c, r) {
    function l(e, t) {
        if (!c[e]) {
            if (!a[e]) {
                var i = "function" == typeof require && require;
                if (!t && i)
                    return i(e, !0);
                if (u)
                    return u(e, !0);
                var n = new Error("Cannot find module '" + e + "'");
                throw n.code = "MODULE_NOT_FOUND",
                n
            }
            var s = c[e] = {
                exports: {}
            };
            a[e][0].call(s.exports, function(t) {
                return l(a[e][1][t] || t)
            }, s, s.exports, o, a, c, r)
        }
        return c[e].exports
    }
    for (var u = "function" == typeof require && require, t = 0; t < r.length; t++)
        l(r[t]);
    return l
}({
    Cards: [function(t, e, i) {
        "use strict";
        cc._RF.push(e, "897f6gW3CdEfLyU3nAKX8CV", "Cards");
        t("../UI/GameView");
        cc.Class({
            extends: cc.Component,
            properties: {},
            onLoad: function() {
                cc.director.getCollisionManager().enabled = !0
            },
            onCollisionEnter: function(t, e) {
                gameViewScript.CollisionEnter(t, e)
            },
            onCollisionStay: function(t, e) {
                gameViewScript.CollisionStay(t, e)
            },
            onCollisionExit: function(t, e) {
                gameViewScript.CollisionExit(t, e)
            },
            start: function() {}
        }),
        cc._RF.pop()
    }
    , {
        "../UI/GameView": "GameView"
    }],
    1: [function(t, e, i) {
        "function" == typeof Object.create ? e.exports = function(t, e) {
            t.super_ = e,
            t.prototype = Object.create(e.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            })
        }
        : e.exports = function(t, e) {
            t.super_ = e;
            var i = function() {};
            i.prototype = e.prototype,
            t.prototype = new i,
            t.prototype.constructor = t
        }
    }
    , {}],
    2: [function(t, e, i) {
        var n, s, o = e.exports = {};
        function a() {
            throw new Error("setTimeout has not been defined")
        }
        function c() {
            throw new Error("clearTimeout has not been defined")
        }
        function r(e) {
            if (n === setTimeout)
                return setTimeout(e, 0);
            if ((n === a || !n) && setTimeout)
                return n = setTimeout,
                setTimeout(e, 0);
            try {
                return n(e, 0)
            } catch (t) {
                try {
                    return n.call(null, e, 0)
                } catch (t) {
                    return n.call(this, e, 0)
                }
            }
        }
        (function() {
            try {
                n = "function" == typeof setTimeout ? setTimeout : a
            } catch (t) {
                n = a
            }
            try {
                s = "function" == typeof clearTimeout ? clearTimeout : c
            } catch (t) {
                s = c
            }
        }
        )();
        var l, u = [], d = !1, h = -1;
        function p() {
            d && l && (d = !1,
            l.length ? u = l.concat(u) : h = -1,
            u.length && f())
        }
        function f() {
            if (!d) {
                var t = r(p);
                d = !0;
                for (var e = u.length; e; ) {
                    for (l = u,
                    u = []; ++h < e; )
                        l && l[h].run();
                    h = -1,
                    e = u.length
                }
                l = null,
                d = !1,
                function(e) {
                    if (s === clearTimeout)
                        return clearTimeout(e);
                    if ((s === c || !s) && clearTimeout)
                        return s = clearTimeout,
                        clearTimeout(e);
                    try {
                        s(e)
                    } catch (t) {
                        try {
                            return s.call(null, e)
                        } catch (t) {
                            return s.call(this, e)
                        }
                    }
                }(t)
            }
        }
        function g(t, e) {
            this.fun = t,
            this.array = e
        }
        function v() {}
        o.nextTick = function(t) {
            var e = new Array(arguments.length - 1);
            if (1 < arguments.length)
                for (var i = 1; i < arguments.length; i++)
                    e[i - 1] = arguments[i];
            u.push(new g(t,e)),
            1 !== u.length || d || r(f)
        }
        ,
        g.prototype.run = function() {
            this.fun.apply(null, this.array)
        }
        ,
        o.title = "browser",
        o.browser = !0,
        o.env = {},
        o.argv = [],
        o.version = "",
        o.versions = {},
        o.on = v,
        o.addListener = v,
        o.once = v,
        o.off = v,
        o.removeListener = v,
        o.removeAllListeners = v,
        o.emit = v,
        o.prependListener = v,
        o.prependOnceListener = v,
        o.listeners = function(t) {
            return []
        }
        ,
        o.binding = function(t) {
            throw new Error("process.binding is not supported")
        }
        ,
        o.cwd = function() {
            return "/"
        }
        ,
        o.chdir = function(t) {
            throw new Error("process.chdir is not supported")
        }
        ,
        o.umask = function() {
            return 0
        }
    }
    , {}],
    3: [function(t, e, i) {
        e.exports = function(t) {
            return t && "object" == typeof t && "function" == typeof t.copy && "function" == typeof t.fill && "function" == typeof t.readUInt8
        }
    }
    , {}],
    4: [function(h, t, M) {
        (function(n, s) {
            var c = /%[sdj%]/g;
            M.format = function(t) {
                if (!b(t)) {
                    for (var e = [], i = 0; i < arguments.length; i++)
                        e.push(r(arguments[i]));
                    return e.join(" ")
                }
                i = 1;
                for (var n = arguments, s = n.length, o = String(t).replace(c, function(t) {
                    if ("%%" === t)
                        return "%";
                    if (s <= i)
                        return t;
                    switch (t) {
                    case "%s":
                        return String(n[i++]);
                    case "%d":
                        return Number(n[i++]);
                    case "%j":
                        try {
                            return JSON.stringify(n[i++])
                        } catch (t) {
                            return "[Circular]"
                        }
                    default:
                        return t
                    }
                }), a = n[i]; i < s; a = n[++i])
                    y(a) || !u(a) ? o += " " + a : o += " " + r(a);
                return o
            }
            ,
            M.deprecate = function(t, e) {
                if (w(s.process))
                    return function() {
                        return M.deprecate(t, e).apply(this, arguments)
                    }
                    ;
                if (!0 === n.noDeprecation)
                    return t;
                var i = !1;
                return function() {
                    if (!i) {
                        if (n.throwDeprecation)
                            throw new Error(e);
                        n.traceDeprecation ? console.trace(e) : console.error(e),
                        i = !0
                    }
                    return t.apply(this, arguments)
                }
            }
            ;
            var t, o = {};
            function r(t, e) {
                var i = {
                    seen: [],
                    stylize: l
                };
                return 3 <= arguments.length && (i.depth = arguments[2]),
                4 <= arguments.length && (i.colors = arguments[3]),
                m(e) ? i.showHidden = e : e && M._extend(i, e),
                w(i.showHidden) && (i.showHidden = !1),
                w(i.depth) && (i.depth = 2),
                w(i.colors) && (i.colors = !1),
                w(i.customInspect) && (i.customInspect = !0),
                i.colors && (i.stylize = a),
                p(i, t, i.depth)
            }
            function a(t, e) {
                var i = r.styles[e];
                return i ? "[" + r.colors[i][0] + "m" + t + "[" + r.colors[i][1] + "m" : t
            }
            function l(t, e) {
                return t
            }
            function p(e, i, n) {
                if (e.customInspect && i && k(i.inspect) && i.inspect !== M.inspect && (!i.constructor || i.constructor.prototype !== i)) {
                    var t = i.inspect(n, e);
                    return b(t) || (t = p(e, t, n)),
                    t
                }
                var s = function(t, e) {
                    if (w(e))
                        return t.stylize("undefined", "undefined");
                    if (b(e)) {
                        var i = "'" + JSON.stringify(e).replace(/^"|"$/g, "").replace(/'/g, "\\'").replace(/\\"/g, '"') + "'";
                        return t.stylize(i, "string")
                    }
                    if (S(e))
                        return t.stylize("" + e, "number");
                    if (m(e))
                        return t.stylize("" + e, "boolean");
                    if (y(e))
                        return t.stylize("null", "null")
                }(e, i);
                if (s)
                    return s;
                var o, a = Object.keys(i), c = (o = {},
                a.forEach(function(t, e) {
                    o[t] = !0
                }),
                o);
                if (e.showHidden && (a = Object.getOwnPropertyNames(i)),
                I(i) && (0 <= a.indexOf("message") || 0 <= a.indexOf("description")))
                    return f(i);
                if (0 === a.length) {
                    if (k(i)) {
                        var r = i.name ? ": " + i.name : "";
                        return e.stylize("[Function" + r + "]", "special")
                    }
                    if (C(i))
                        return e.stylize(RegExp.prototype.toString.call(i), "regexp");
                    if (L(i))
                        return e.stylize(Date.prototype.toString.call(i), "date");
                    if (I(i))
                        return f(i)
                }
                var l, u = "", d = !1, h = ["{", "}"];
                (v(i) && (d = !0,
                h = ["[", "]"]),
                k(i)) && (u = " [Function" + (i.name ? ": " + i.name : "") + "]");
                return C(i) && (u = " " + RegExp.prototype.toString.call(i)),
                L(i) && (u = " " + Date.prototype.toUTCString.call(i)),
                I(i) && (u = " " + f(i)),
                0 !== a.length || d && 0 != i.length ? n < 0 ? C(i) ? e.stylize(RegExp.prototype.toString.call(i), "regexp") : e.stylize("[Object]", "special") : (e.seen.push(i),
                l = d ? function(e, i, n, s, t) {
                    for (var o = [], a = 0, c = i.length; a < c; ++a)
                        x(i, String(a)) ? o.push(g(e, i, n, s, String(a), !0)) : o.push("");
                    return t.forEach(function(t) {
                        t.match(/^\d+$/) || o.push(g(e, i, n, s, t, !0))
                    }),
                    o
                }(e, i, n, c, a) : a.map(function(t) {
                    return g(e, i, n, c, t, d)
                }),
                e.seen.pop(),
                function(t, e, i) {
                    if (60 < t.reduce(function(t, e) {
                        return 0,
                        0 <= e.indexOf("\n") && 0,
                        t + e.replace(/\u001b\[\d\d?m/g, "").length + 1
                    }, 0))
                        return i[0] + ("" === e ? "" : e + "\n ") + " " + t.join(",\n  ") + " " + i[1];
                    return i[0] + e + " " + t.join(", ") + " " + i[1]
                }(l, u, h)) : h[0] + u + h[1]
            }
            function f(t) {
                return "[" + Error.prototype.toString.call(t) + "]"
            }
            function g(t, e, i, n, s, o) {
                var a, c, r;
                if ((r = Object.getOwnPropertyDescriptor(e, s) || {
                    value: e[s]
                }).get ? c = r.set ? t.stylize("[Getter/Setter]", "special") : t.stylize("[Getter]", "special") : r.set && (c = t.stylize("[Setter]", "special")),
                x(n, s) || (a = "[" + s + "]"),
                c || (t.seen.indexOf(r.value) < 0 ? -1 < (c = y(i) ? p(t, r.value, null) : p(t, r.value, i - 1)).indexOf("\n") && (c = o ? c.split("\n").map(function(t) {
                    return "  " + t
                }).join("\n").substr(2) : "\n" + c.split("\n").map(function(t) {
                    return "   " + t
                }).join("\n")) : c = t.stylize("[Circular]", "special")),
                w(a)) {
                    if (o && s.match(/^\d+$/))
                        return c;
                    (a = JSON.stringify("" + s)).match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/) ? (a = a.substr(1, a.length - 2),
                    a = t.stylize(a, "name")) : (a = a.replace(/'/g, "\\'").replace(/\\"/g, '"').replace(/(^"|"$)/g, "'"),
                    a = t.stylize(a, "string"))
                }
                return a + ": " + c
            }
            function v(t) {
                return Array.isArray(t)
            }
            function m(t) {
                return "boolean" == typeof t
            }
            function y(t) {
                return null === t
            }
            function S(t) {
                return "number" == typeof t
            }
            function b(t) {
                return "string" == typeof t
            }
            function w(t) {
                return void 0 === t
            }
            function C(t) {
                return u(t) && "[object RegExp]" === e(t)
            }
            function u(t) {
                return "object" == typeof t && null !== t
            }
            function L(t) {
                return u(t) && "[object Date]" === e(t)
            }
            function I(t) {
                return u(t) && ("[object Error]" === e(t) || t instanceof Error)
            }
            function k(t) {
                return "function" == typeof t
            }
            function e(t) {
                return Object.prototype.toString.call(t)
            }
            function i(t) {
                return t < 10 ? "0" + t.toString(10) : t.toString(10)
            }
            M.debuglog = function(e) {
                if (w(t) && (t = n.env.NODE_DEBUG || ""),
                e = e.toUpperCase(),
                !o[e])
                    if (new RegExp("\\b" + e + "\\b","i").test(t)) {
                        var i = n.pid;
                        o[e] = function() {
                            var t = M.format.apply(M, arguments);
                            console.error("%s %d: %s", e, i, t)
                        }
                    } else
                        o[e] = function() {}
                        ;
                return o[e]
            }
            ,
            (M.inspect = r).colors = {
                bold: [1, 22],
                italic: [3, 23],
                underline: [4, 24],
                inverse: [7, 27],
                white: [37, 39],
                grey: [90, 39],
                black: [30, 39],
                blue: [34, 39],
                cyan: [36, 39],
                green: [32, 39],
                magenta: [35, 39],
                red: [31, 39],
                yellow: [33, 39]
            },
            r.styles = {
                special: "cyan",
                number: "yellow",
                boolean: "yellow",
                undefined: "grey",
                null: "bold",
                string: "green",
                date: "magenta",
                regexp: "red"
            },
            M.isArray = v,
            M.isBoolean = m,
            M.isNull = y,
            M.isNullOrUndefined = function(t) {
                return null == t
            }
            ,
            M.isNumber = S,
            M.isString = b,
            M.isSymbol = function(t) {
                return "symbol" == typeof t
            }
            ,
            M.isUndefined = w,
            M.isRegExp = C,
            M.isObject = u,
            M.isDate = L,
            M.isError = I,
            M.isFunction = k,
            M.isPrimitive = function(t) {
                return null === t || "boolean" == typeof t || "number" == typeof t || "string" == typeof t || "symbol" == typeof t || void 0 === t
            }
            ,
            M.isBuffer = h("./support/isBuffer");
            var d = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
            function x(t, e) {
                return Object.prototype.hasOwnProperty.call(t, e)
            }
            M.log = function() {
                var t, e;
                console.log("%s - %s", (t = new Date,
                e = [i(t.getHours()), i(t.getMinutes()), i(t.getSeconds())].join(":"),
                [t.getDate(), d[t.getMonth()], e].join(" ")), M.format.apply(M, arguments))
            }
            ,
            M.inherits = h("inherits"),
            M._extend = function(t, e) {
                if (!e || !u(e))
                    return t;
                for (var i = Object.keys(e), n = i.length; n--; )
                    t[i[n]] = e[i[n]];
                return t
            }
        }
        ).call(this, h("_process"), "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
    }
    , {
        "./support/isBuffer": 3,
        _process: 2,
        inherits: 1
    }],
    DataManager: [function(t, e, i) {
        "use strict";
        cc._RF.push(e, "dde7ap+97dFdY84mYSxAiF3", "DataManager"),
        cc.Class({
            extends: cc.Component,
            properties: {
                cofDataMap: {
                    default: {},
                    visible: !1
                },
                statusList: {
                    default: {},
                    visible: !1
                },
                bufList: {
                    default: {},
                    visible: !1
                },
                actionList: {
                    default: {},
                    visible: !1
                },
                actionCbList: {
                    default: {},
                    visible: !1
                },
                firstRemote: {
                    default: {},
                    visible: !1
                }
            },
            onLoad: function() {
                window.dataManager = this
            },
            start: function() {},
            setStore: function(t, e, i) {
                var n = JSON.stringify(e);
                cc.sys.localStorage.setItem(t, n),
                null != i && i();
                var s = {};
                s[t] = n,
                SDK().setItem(s)
            },
            getStore: function(t, i, e) {
                if (null != this.firstRemote[t] && null != this.firstRemote[t] || (e = !0,
                this.firstRemote[t] = !0),
                e)
                    SDK().getItem(t, function(t) {
                        "null" == t && null == t && (t = 0);
                        var e = JSON.parse(t);
                        null != i && i(e)
                    }
                    .bind(this), 1);
                else {
                    var n = cc.sys.localStorage.getItem(t);
                    n = JSON.parse(n),
                    null != i && i(n)
                }
            }
        }),
        cc._RF.pop()
    }
    , {}],
    EffectManager: [function(t, e, i) {
        "use strict";
        cc._RF.push(e, "f4801m4RlxJo4dLOkit7h5e", "EffectManager"),
        cc.Class({
            extends: cc.Component,
            properties: {
                idxList: {
                    default: {},
                    visible: !1
                },
                effectView: {
                    default: null,
                    type: cc.Node,
                    visible: !1
                },
                effectList: {
                    default: [],
                    type: [cc.Node],
                    visible: !1
                },
                giftList: {
                    default: [],
                    type: [cc.Node],
                    visible: !1
                },
                particleList: {
                    default: [],
                    type: [cc.Node],
                    visible: !1
                },
                prefabList: {
                    default: [],
                    type: [cc.Node],
                    visible: !1
                },
                picList: {
                    default: [],
                    type: [cc.SpriteFrame],
                    visible: !1
                },
                eventList: {
                    default: null,
                    visible: !1
                },
                fontType: {
                    default: null,
                    type: cc.Font
                },
                touchParticle: {
                    default: null,
                    type: cc.ParticleSystem,
                    visible: !1
                },
                isToucing: {
                    default: !1,
                    visible: !1
                }
            },
            onLoad: function() {
                window.effectManager = this,
                cc.loader.loadRes("fnt/Normal", function(t, e) {
                    null == t ? this.fontType = e : (console.warn(action.name),
                    console.warn(t))
                }
                .bind(this))
            },
            start: function() {
                null == this.effectView && (this.effectView = new cc.Node("EffectView"),
                this.effectView.width = cc.winSize.width,
                this.effectView.height = cc.winSize.height,
                this.effectView.parent = cc.director.getScene().getChildByName("Canvas"),
                this.effectView.setSiblingIndex(this.effectView.parent.childrenCount),
                this.effectView.zIndex = 10001,
                this.effectView.position = cc.v2(0, 0)),
                resManager.loadPrefab("Boom", function(t) {
                    this.particleList[0] = t
                }
                .bind(this)),
                resManager.loadPrefab("CutCrash", function(t) {
                    this.particleList[1] = t
                }
                .bind(this)),
                resManager.loadPrefab("LevelUp", function(t) {
                    this.particleList[2] = t
                }
                .bind(this))
            },
            flyReward: function(e, i, n, s, o) {
                var a = 5 < arguments.length && void 0 !== arguments[5] && arguments[5];
                if (null == this.picList[i])
                    0 == i && resManager.loadSprite("UIView.X3Show", function(t) {
                        this.picList[i] = t,
                        this.flyReward(e, i, n, s, o, a)
                    }
                    .bind(this));
                else {
                    var t = cc.v2(0, 0);
                    null != s && (t = s.parent.convertToWorldSpaceAR(s.position),
                    t = this.effectView.convertToNodeSpaceAR(t));
                    var c = cc.v2(0, 500);
                    null != n && (c = n.parent.convertToWorldSpaceAR(n.position),
                    c = this.effectView.convertToNodeSpaceAR(c));
                    for (var r = 0; r < e; r++) {
                        var l = this.effectList.pop();
                        null == l && (l = new cc.Node(r)).addComponent(cc.Sprite),
                        l.getComponent(cc.Sprite).spriteFrame = this.picList[i],
                        l.active = !1,
                        l.parent = this.effectView,
                        l.position = t,
                        l.active = !0,
                        a && (l.x = l.x + 50 * Math.random() * (Math.random() < .5 ? -1 : 1),
                        l.y = l.y + 50 * Math.random() * (Math.random() < .5 ? -1 : 1)),
                        this.flyAnim(l, c, o, r)
                    }
                }
            },
            flyText: function(t, e) {
                var i = (new cc.Node).addComponent(cc.Label);
                i.node.addComponent(cc.LabelOutline).width = 2,
                i.string = t,
                i.node.color = cc.color(255, 210, 35, 255),
                i.fontSize = 30,
                i.lineHeight = 40,
                i.font = this.fontType,
                i.node.parent = this.effectView;
                var n = e.parent.convertToWorldSpaceAR(e.position);
                n = this.effectView.convertToNodeSpaceAR(n),
                i.node.position = n,
                i.node.runAction(cc.spawn(cc.fadeOut(.5, 0).easing(cc.easeIn(2)), cc.moveBy(.5, cc.p(0, 100)))),
                this.scheduleOnce(function() {
                    null != i.node && i.node.destroy()
                }
                .bind(this), .5)
            },
            flyAnim: function(t, e, i, n) {
                t.active = !0,
                t.scale = 0,
                this.scheduleOnce(function() {
                    t.runAction(cc.spawn(cc.moveTo(1, cc.v2(e.x, e.y)), cc.sequence(cc.scaleTo(.5, 1.1), cc.scaleTo(.5, 0), cc.callFunc(function() {
                        null != i && i(),
                        this.effectList.push(t)
                    }
                    .bind(this), this))))
                }
                .bind(this), .05 * n)
            },
            shake: function(t) {
                t.runAction(cc.repeatForever(cc.sequence(cc.rotateTo(.1, 5).easing(cc.easeIn(2)), cc.rotateTo(.2, -5).easing(cc.easeIn(2)), cc.rotateTo(.2, 5).easing(cc.easeIn(2)), cc.rotateTo(.1, 0).easing(cc.easeIn(2)), cc.delayTime(.5))))
            },
            scaleUpAndDowm: function(t) {
                t.runAction(cc.repeatForever(cc.sequence(cc.scaleTo(.3, 1.1).easing(cc.easeIn(2)), cc.scaleTo(.6, .9).easing(cc.easeIn(2)), cc.scaleTo(.6, 1.1).easing(cc.easeIn(2)), cc.scaleTo(.6, .9).easing(cc.easeIn(2)))))
            },
            particleShow: function(e, i) {
                if (null == this.particleList[i])
                    0 == i && resManager.loadPrefab("Boom", function(t) {
                        this.particleList[i] = t,
                        this.particleShow(e, i)
                    }
                    .bind(this));
                else {
                    var t = cc.instantiate(this.particleList[i]);
                    t.parent = this.effectView;
                    var n = viewManager.getUIPosition(e, this.effectView);
                    t.position = n,
                    t.active = !0
                }
            },
            flyGift: function(e, i) {
                if (null == this.giftList[e])
                    resManager.loadPrefab("FlyGift" + e, function(t) {
                        this.giftList[e] = cc.instantiate(t),
                        this.giftList[e].parent = this.effectView,
                        this.flyGift(e, i)
                    }
                    .bind(this));
                else {
                    var t = cc.instantiate(this.giftList[e]);
                    t.parent = this.effectView,
                    t.x = -.8 * cc.winSize.width,
                    t.y = Math.random() * cc.winSize.height * .35 * (Math.random() < .5 ? -1 : 1),
                    t.off("click"),
                    t.on("click", function() {
                        null != i && (i({
                            parent: t.parent,
                            position: t.position
                        }),
                        t.stopAllActions(),
                        t.destroy())
                    }
                    .bind(this), this),
                    t.active = !0,
                    t.runAction(cc.sequence(cc.moveTo(10, cc.v2(.6 * cc.winSize.width, t.y)), cc.callFunc(function() {
                        t.destroy()
                    }
                    .bind(this), this)))
                }
            }
        }),
        cc._RF.pop()
    }
    , {}],
    GameApplication: [function(e, t, i) {
        "use strict";
        cc._RF.push(t, "f08152UaoRPB64U7d0m5V+q", "GameApplication"),
        cc.Class({
            extends: cc.Component,
            properties: {
                viewManager: {
                    default: null,
                    visible: !1
                },
                resManager: {
                    default: null,
                    visible: !1
                },
                soundManager: {
                    default: null,
                    visible: !1
                },
                effectManager: {
                    default: null,
                    visible: !1
                },
                dataManager: {
                    default: null,
                    visible: !1
                },
                player: {
                    default: null,
                    visible: !1
                },
                _playTimes: {
                    default: 0,
                    type: cc.Integer,
                    visible: !1
                },
                playTimes: {
                    get: function() {
                        return this._playTimes
                    },
                    set: function(t) {
                        this._playTimes = t,
                        SDK().plusPlayTimes()
                    },
                    visible: !1
                },
                unitCof: {
                    default: null,
                    visible: !1
                }
            },
            onDestroy: function() {},
            onLoad: function() {
                cc.director.setDisplayStats(!1),
                this.unitCof = [0, "K", "M", "B", "T"],
                SDK().init(function() {}),
                (window.gameApplication = this).resManager = this.node.addComponent("ResManager"),
                this.soundManager = this.node.addComponent("SoundManager"),
                this.viewManager = this.node.addComponent("ViewManager"),
                this.effectManager = this.node.addComponent("EffectManager"),
                this.dataManager = this.node.addComponent("DataManager"),
                cc.game.on(cc.game.EVENT_HIDE, function() {
                    cc.audioEngine.pauseAll()
                }),
                cc.game.on(cc.game.EVENT_SHOW, function() {
                    cc.audioEngine.resumeAll()
                })
            },
            start: function() {
                SDK().getItem("curLang", function(t) {
                    null == t && (t = 0),
                    this.setLanguage(window.nameArr[t])
                }
                .bind(this)),
                viewManager.showView("GameView", !0, !0),
                viewManager.showView("MainView", !1, !1)
            },
            setLanguage: function(t) {
                e("LanguageData").init(t)
            },
            onGiftBtnClick: function(e, t) {
               /* SDK().showInterstitialAd(function(t) {
                    t ? e(!0) : console.log("没有观看成功")
                }
                .bind(this), t)*/
				//修改
				SDK().showVideoAd(function(t1) {
					 t1 ? (e && e(!0)) : console.log("没有观看成功")
                }
                .bind(this), t)
            },
            onVideoBtnClick: function(e, i) {
                SDK().fbEvent("clicwatchBtn", 1),
                SDK().showVideoAd(function(t) {
                    if (t)
                        null != e && e(!0);
                    else {
                        console.log("没有观看成功");
                        i <= 3 ? this.videoTurnShare(e, 0) : this.fbFail(1),
                        null != e && e(!1)
                    }
                }
                .bind(this), i)
            },
            checkDailyCount: function(i, n, s) {
                var t = new Date
                  , o = t.getMonth()
                  , a = t.getDate();
                SDK().getItem(o + "_" + a + "_" + i, function(t) {
                    if (null == t && (t = 0),
                    t = parseInt(t),
                    n) {
                        t += 1;
                        var e = {};
                        e[o + "_" + a + "_" + i] = t,
                        SDK().setItem(e)
                    }
                    null != s && s(t)
                })
            },
            onShareBtnClick: function(e, t) {
                SDK().share(0, function(t) {
                    t ? null != e && e(!0) : this.fbFail(2)
                }
                .bind(this), t),
                SDK().getItem("bestScore", function(t) {
                    null != t && null != t || (t = 0)
                }
                .bind(this))
            },
            fbFail: function(e) {
                viewManager.popView("FbFail", !0, function(t) {
                    1 == e ? (t.getChildByName("Bg").getChildByName("VideoText").active = !0,
                    t.getChildByName("Bg").getChildByName("ShareText").active = !1) : (t.getChildByName("Bg").getChildByName("VideoText").active = !1,
                    t.getChildByName("Bg").getChildByName("ShareText").active = !0),
                    t.active = !0
                }
                .bind(this))
            },
            videoTurnShare: function(i) {
                viewManager.popView("VideoTurnShare", !0, function(t) {
                    var e = cc.find("Bg/Ok", t);
                    e.off("click"),
                    e.on("click", function(t) {
                        this.onShareBtnClick(function(t) {
                            t && (i(!0),
                            viewManager.popView("VideoTurnShare", !1))
                        }
                        .bind(this), 1)
                    }, this)
                }
                .bind(this))
            },
            warnTips: function(e, i) {
                viewManager.popView("WarnView", !0, function(t) {
                    cc.find("Bg/Text", t).getComponent("LocalizedLabel").dataID = e,
                    cc.find("Bg/Close", t).on("click", function(t) {
                        null != i && (i(),
                        i = null)
                    }, this)
                }
                .bind(this))
            },
            popClick: function(t, e) {
                SDK().switchGameAsync(e)
            },
            getCurTime: function() {
                var t = (new Date).getTime() / 1e3;
                return parseFloat(t)
            },
            countTime: function(t) {
                var e = t / 60
                  , i = 0;
                60 <= e && (i = Math.floor(e / 60),
                e %= 60);
                var n = e < 10 ? "0" + Math.floor(e) : "" + Math.floor(e)
                  , s = t % 60 < 10 ? "0" + Math.floor(t % 60) : "" + Math.floor(t % 60);
                return t <= 0 && (s = n = "00"),
                [0 < i ? i + ":" + n + ":" + s : n + ":" + s, i, n, s]
            },
            countUnit: function(t) {
                for (var e = 0; 1e4 <= t; )
                    t *= .001,
                    e += 1;
                var i = t;
                return 0 < e && (i = i.toFixed(1)),
                [i, e, "$" + i + gameApplication.unitCof[e], i + gameApplication.unitCof[e]]
            },
            update: function(t) {}
        }),
        cc._RF.pop()
    }
    , {
        LanguageData: "LanguageData"
    }],
    GameOver: [function(t, e, i) {
        "use strict";
        cc._RF.push(e, "5cf8cJ0j6FEKKbuFPp7zSWQ", "GameOver"),
        cc.Class({
            extends: cc.Component,
            properties: {
                curScoreText: {
                    default: null,
                    visible: !1
                },
                bestScoreText: {
                    default: null,
                    visible: !1
                },
                restartBtn: {
                    default: null,
                    visible: !1
                },
                shareChallengeBtn: {
                    default: null,
                    visible: !1
                },
                backBtn: {
                    default: null,
                    visible: !1
                }
            },
            onLoad: function() {
                this.curScoreText = cc.find("Bg/CurText", this.node).getComponent(cc.Label),
                this.bestScoreText = cc.find("Bg/BestScore", this.node).getComponent(cc.Label),
                this.restartBtn = cc.find("Bg/Restart", this.node),
                this.shareChallengeBtn = cc.find("Bg/Challenge", this.node),
                this.backBtn = cc.find("Bg/Back", this.node),
                this.restartBtn.on("click", function(t) {
                    this.menuClick(null, "restart")
                }
                .bind(this), this),
                this.shareChallengeBtn.on("click", function(t) {
                    this.menuClick(null, "share")
                }
                .bind(this), this),
                this.backBtn.on("click", function(t) {
                    this.menuClick(null, "back")
                }
                .bind(this), this)
            },
            onEnable: function() {
                SDK().fbEvent("showjiesuanUISuccess", 1),
                this.bestScoreText.string = gameViewScript.bestScore,
                this.curScoreText.string = gameViewScript.curScore,
                this.scheduleOnce(function() {
                    gameApplication.onGiftBtnClick(null, 1)
                }
                .bind(this), 1)
            },
            menuClick: function(t, e) {
                soundManager.playSound("btnClick"),
                "restart" == e ? (viewManager.popView("GameOver", !1, function() {}
                .bind(this)),
                cc.sys.localStorage.setItem("gameData", "0"),
                gameViewScript.isGuide = !0,
                gameViewScript.gameStart()) : "share" == e ? (SDK().fbEvent("clickchallengeBtn", 1),
                gameApplication.onShareBtnClick(null, 2)) : "back" == e && (viewManager.showView("MainView", !0, !1),
                viewManager.showView("GameView", !1, !0),
                viewManager.popView("GameOver", !1),
                cc.sys.localStorage.setItem("gameData", "0"),
                gameViewScript.isGuide = !0)
            },
            update: function(t) {}
        }),
        cc._RF.pop()
    }
    , {}],
    GameView: [function(t, e, i) {
        "use strict";
        cc._RF.push(e, "59812sXL4JJ1rH67ajcbmvt", "GameView");
        var a, c = 50, r = [3e3, 4e3, 5e3, 6e3, 7e3], l = [new cc.Color(0,160,233,255), new cc.Color(234,104,162,255), new cc.Color(255,99,51,255), new cc.Color(255,71,71,255), new cc.Color(126,107,90,255), new cc.Color(246,179,127,255), new cc.Color(0,153,68,255)];
        cc.Class({
            extends: cc.Component,
            properties: {
                cardSlotList: {
                    default: [],
                    visible: !1
                },
                cardDataList: {
                    default: [],
                    visible: !1
                },
                cardUIList: {
                    default: [],
                    visible: !1
                },
                cardPoolList: {
                    default: [],
                    visible: !1
                },
                cardPoolCards: {
                    default: [],
                    visible: !1
                },
                cardPrefab: {
                    default: null,
                    type: cc.Prefab
                },
                curScore: {
                    default: 0,
                    visible: !1
                },
                bestScore: {
                    default: 0,
                    visible: !1
                },
                bestScoreText: {
                    default: null,
                    visible: !1
                },
                curScoreText: {
                    default: null,
                    visible: !1
                },
                proline: {
                    default: null,
                    visible: !1
                },
                collisioning: {
                    default: null,
                    visible: !1
                },
                onDisCard: {
                    default: !1,
                    visible: !1
                },
                discardBtn: {
                    default: null,
                    visible: !1
                },
                discardCount: {
                    default: 0,
                    visible: !1
                },
                discardCountText: {
                    default: null,
                    visible: !1
                },
                onCuting: {
                    default: !1,
                    visible: !1
                },
                cutCount: {
                    default: 0,
                    visible: !1
                },
                cutCountText: {
                    default: null,
                    visible: !1
                },
                cutTip: {
                    default: null,
                    visible: !1
                },
                changeCount: {
                    default: 0,
                    visible: !1
                },
                changeCountText: {
                    default: null,
                    visible: !1
                },
                overUI: {
                    default: {},
                    visible: !1
                },
                score3: {
                    default: null,
                    visible: !1
                },
                scoreTime: {
                    default: 0,
                    visible: !1
                },
                isGetTime: {
                    default: 0,
                    visible: !1
                },
                isGuide: {
                    default: !1,
                    visible: !1
                },
                friends: {
                    default: [],
                    visible: !1
                },
                overIdx: {
                    default: -1,
                    visible: !1
                },
                isFirstShare: {
                    default: !1,
                    visible: !1
                },
                adSpriteList: {
                    default: [],
                    type: [cc.Node]
                },
                lightList: {
                    default: [],
                    type: [cc.Node]
                },
                levelPro: {
                    default: null,
                    visible: !1
                },
                levelTextList: {
                    default: [],
                    visible: !1
                },
                levelNum: {
                    default: [],
                    visible: !1
                },
                levelColorNode: {
                    default: [],
                    visible: !1
                },
                isOver: {
                    default: !1,
                    visible: !1
                },
                clearIdx: {
                    default: 0,
                    visible: !1
                },
                curSkinIdx: {
                    default: 0,
                    visible: !1
                },
                skinsSprite: {
                    default: null,
                    visible: !1
                },
                skinsNew: {
                    default: [],
                    visible: !1
                },
                skinsData: {
                    default: [],
                    visible: !1
                },
                overPlayer: {
                    default: 0,
                    visible: !1
                }
            },
            proLoadSprite: function() {
                for (var t = 2, e = 0; e < 11; e += 1)
                    resManager.loadSpriteAsync("GameSp.card" + t, null),
                    t *= 2
            },
            loadCardSprite: function(t, e) {
                var i = this.curSkinIdx;
                "X" != t && 0 != t || (i = "N"),
                resManager.loadSprite("GameSp." + i + "-card" + t, function(t) {
                    e.spriteFrame = t
                }
                .bind(this))
            },
            destroyCard: function(e, t) {
                this.scheduleOnce(function() {
                    var t = {};
                    t.parent = e.parent,
                    t.position = e.position,
                    effectManager.particleShow(t, 1),
                    e.destroy()
                }
                .bind(this), .15 * (7 - t))
            },
            clearData: function() {
                for (var t = 0; t < 4; t += 1) {
                    if (this.cardSlotList[t].getComponent(cc.BoxCollider).tag = 2,
                    this.cardDataList[t] = [],
                    null != this.cardUIList[t] && null != this.cardUIList[t]) {
                        if (0 < this.cardUIList[t].length)
                            for (var e = 0; e < this.cardUIList[t].length; e += 1)
                                this.destroyCard(this.cardUIList[t][e], e);
                        this.cardUIList[t] = []
                    }
                    t < 2 && null != this.cardPoolCards[t] && (this.cardPoolCards[t].destroy(),
                    this.cardPoolCards[t] = null)
                }
            },
            loadSkin: function(t) {
                cc.sys.localStorage.setItem("skinidx", t),
                this.curSkinIdx = t;
                for (var e = 0; e < 4; e += 1) {
                    if (null != this.cardUIList[e] && null != this.cardUIList[e] && 0 < this.cardUIList[e].length)
                        for (var i = 0; i < this.cardUIList[e].length; i += 1)
                            this.loadCardSprite(this.cardDataList[e][i], this.cardUIList[e][i].sprite);
                    e < 2 && null != this.cardPoolCards[e] && this.loadCardSprite(this.cardPoolCards[e].num, this.cardPoolCards[e].sprite)
                }
            },
            initUI: function() {
                this.proLoadSprite();
                for (var t = 0; t < 4; t += 1)
                    this.cardSlotList[t] = cc.find("Gaming/CardSlot/Slot" + t, this.node),
                    t < 2 && (this.cardPoolList[t] = cc.find("Gaming/CardPool/Pool" + t, this.node));
                this.discardBtn = cc.find("UIView/Bottom/Discard", this.node),
                this.discardCountText = cc.find("UIView/Bottom/Discard/Num", this.node).getComponent(cc.Label),
                this.cutCountText = cc.find("UIView/Bottom/Cut/Num", this.node).getComponent(cc.Label),
                this.changeCountText = cc.find("UIView/Bottom/ChangeCard/Num", this.node).getComponent(cc.Label),
                this.cutTip = cc.find("Gaming/Middle/CutTip", this.node),
                this.score3 = cc.find("UIView/Top/X3Show", this.node).getComponent(cc.Sprite),
                this.bestScoreText = cc.find("UIView/Top/BestScore/Num", this.node).getComponent(cc.Label),
                this.curScoreText = cc.find("UIView/Top/CurScore", this.node).getComponent(cc.Label),
                this.overUI.main = cc.find("UIView/Top/OverPlayer", this.node),
                this.overUI.head = cc.find("UIView/Top/OverPlayer/Border/Head", this.node).getComponent(cc.Sprite),
                this.overUI.score = cc.find("UIView/Top/OverPlayer/Score", this.node).getComponent(cc.Label),
                this.proline = cc.find("Gaming/CardPool/Proline", this.node),
                this.levelPro = cc.find("UIView/Top/Level/LevelPro", this.node).getComponent(cc.ProgressBar),
                this.levelPro.totalLength = this.levelPro.node.width,
                this.levelPro.progress = 0,
                this.levelTextList[0] = cc.find("UIView/Top/Level/CurLevel/Num", this.node).getComponent(cc.Label),
                this.levelTextList[1] = cc.find("UIView/Top/Level/NextLevel/Num", this.node).getComponent(cc.Label),
                this.levelColorNode[0] = cc.find("UIView/Top/Level/CurLevel", this.node),
                this.levelColorNode[1] = cc.find("UIView/Top/Level/NextLevel", this.node),
                this.levelColorNode[2] = cc.find("UIView/Top/Level/LevelPro/bar", this.node);
                var e = this.cardSlotList[0].parent.getComponent(cc.Layout)
                  , i = (e.node.width - 4 * this.cardSlotList[0].width) / 5;
                e.paddingLeft = i,
                e.paddingRight = i,
                e.spacingX = i,
                this.skinsSprite = cc.find("UIView/Top/Skins/NewSprite", this.node),
                this.curSkinIdx = cc.sys.localStorage.getItem("skinidx"),
                null == this.curSkinIdx || null == this.curSkinIdx ? this.curSkinIdx = "N" : this.curSkinIdx = Number.parseInt(this.curSkinIdx),
                c = (cc.winSize.height - 690) / 7,
                SDK().getFriendRank(2, function(t) {
                    this.friends = t,
                    this.checkOverPlayer()
                }
                .bind(this))
            },
            initData: function() {
                var t = cc.sys.localStorage.getItem("gameData");
                if (null != (t = JSON.parse(t)) && "0" != t) {
                    this.cardDataList = t.cardData;
                    for (var e = 0; e < 4; e += 1) {
                        this.cardUIList[e] = [];
                        for (var i = 0; i < this.cardDataList[e].length; i += 1) {
                            "X" == this.cardDataList[e][i] && (this.cardDataList[e][i] = 64),
                            (s = this.produceCard(this.cardDataList[e][i])).mask.active = !1,
                            s.parent = this.cardSlotList[e],
                            s.position = cc.v2(0, 0 - i * c - 10),
                            this.cardUIList[e][i] = s,
                            i == this.cardDataList[e].length - 1 ? s.getComponent(cc.BoxCollider).tag = 2 : s.getComponent(cc.BoxCollider).tag = 1,
                            0 == i ? (this.cardSlotList[e].getComponent(cc.BoxCollider).tag = 1,
                            s.pro = this.cardSlotList[e]) : s.pro = this.cardUIList[e][i - 1],
                            s.active = !0,
                            this.ridContorlAction(s)
                        }
                    }
                    var n = t.pool;
                    for (e = 0; e < n.length; e += 1) {
                        var s;
                        (s = this.produceCard(n[e])).mask.active = !1,
                        (this.cardPoolCards[e] = s).parent = this.cardPoolList[e],
                        0 == e ? s.scale = .8 : (s.scale = 1,
                        s.isReady = !0),
                        this.bindContorlAction(s),
                        s.position = cc.v2(0, 0),
                        s.active = !0
                    }
                    this.discardCount = t.discard,
                    this.discardCountText.string = this.discardCount,
                    this.curScore = t.curScore,
                    this.curScoreText.string = gameApplication.countUnit(this.curScore)[3]
                } else {
                    for (e = 0; e < 4; e += 1)
                        this.cardDataList[e] = [],
                        this.cardUIList[e] = [];
                    this.poolCard(function() {
                        this.poolCard()
                    }
                    .bind(this)),
                    this.discardCount = 2,
                    this.discardCountText.string = this.discardCount,
                    this.curScore = 0,
                    this.curScoreText.string = gameApplication.countUnit(this.curScore)[3],
                    this.scoreTime = 0,
                    this.setItem("LevelScore", 0)
                }
                this.getItem("Level", function(t) {
                    null != t.Level ? this.levelNum[0] = t.Level : this.levelNum[0] = 0 == t ? 1 : t,
                    this.getItem("LevelScore", function(t) {
                        null != t.LevelScore ? this.levelNum[1] = t.LevelScore : this.levelNum[1] = t,
                        this.levelTextList[0].string = this.levelNum[0],
                        this.levelTextList[1].string = this.levelNum[0] + 1;
                        var e = 0;
                        e = this.levelNum[0] < 25 ? this.levelNum[0] * r[Number.parseInt(this.levelNum[0] / 5)] : 175e3;
                        var i = this.levelNum[1] / e;
                        this.levelPro.progress = i;
                        var n = Math.floor(Math.random() * l.length)
                          , s = this.getRandom(n, 1, 7);
                        a = s[0],
                        this.levelColorNode[0].color = l[n],
                        this.levelColorNode[2].color = l[n],
                        this.levelColorNode[1].color = l[s[0]],
                        this.setPros(this.levelNum[0])
                    }
                    .bind(this))
                }
                .bind(this));
                var o = {};
                o.lv = this.levelNum[0],
                SDK().setRankScore(2, this.curScore, JSON.stringify(o))
            },
            setPros: function(t) {
                for (var e = 0; e < 13; e += 1)
                    if (null != this.skinsData[e]) {
                        var i = !1;
                        this.skinsData[e].pros < this.skinsData[e].need && (i = !0),
                        this.skinsData[e].pros = Number.parseInt(t),
                        i && this.skinsData[e].pros >= this.skinsData[e].need && (this.skinsSprite.active = !0,
                        this.lightList[2].active = !0)
                    }
                dataManager.setStore("Skins", this.skinsData)
            },
            dealSkins: function() {
                dataManager.getStore("SkinsFirst", function(t) {
                    if (3 != t) {
                        dataManager.setStore("SkinsFirst", 3),
                        dataManager.setStore("SkinNew", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
                        var e = [{
                            need: 5,
                            pros: 0
                        }, {
                            need: 10,
                            pros: 0
                        }, {
                            need: 15,
                            pros: 0
                        }, {
                            need: 20,
                            pros: 0
                        }, {
                            need: 25,
                            pros: 0
                        }, {
                            need: 30,
                            pros: 0
                        }, {
                            need: 35,
                            pros: 0
                        }, {
                            need: 40,
                            pros: 0
                        }, {
                            need: 45,
                            pros: 0
                        }, {
                            need: 50,
                            pros: 0
                        }, {
                            need: 55,
                            pros: 0
                        }, {
                            need: 60,
                            pros: 0
                        }, {
                            need: 65,
                            pros: 0
                        }];
                        this.skinsData = e,
                        dataManager.setStore("Skins", e)
                    } else
                        dataManager.getStore("Skins", function(t) {
                            this.skinsData = t
                        }
                        .bind(this)),
                        dataManager.getStore("SkinNew", function(t) {
                            0 == t && (t = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                            dataManager.setStore("SkinNew", t)),
                            this.skinsNew = t
                        }
                        .bind(this))
                }
                .bind(this))
            },
            initGuide: function() {
                this.isGuide = !0;
                var t = {
                    cardData: [[2], [4, 2], [16, 8, 4, 2], [8, 4, 2]],
                    pool: [2, 2],
                    discard: 2,
                    curScore: 0
                }
                  , e = JSON.stringify(t);
                cc.sys.localStorage.setItem("gameData", e)
            },
            onLoad: function() {
				this.autoAdapteScreen();
                (window.gameViewScript = this).cardDataList = [],
                this.dealSkins(),
                this.initUI(),
                SDK().getItem("isFirst", function(t) {
                    3 != t || "3" != t ? (this.initGuide(),
                    this.setProp(1, 1),
                    this.setProp(1, 0),
                    SDK().setItem({
                        isFirst: 3
                    })) : (SDK().getItem("cut", function(t) {
                        null != t && null != t || (t = 0),
                        this.setProp(t, 1)
                    }
                    .bind(this)),
                    SDK().getItem("change", function(t) {
                        null != t && null != t || (t = 0),
                        this.setProp(t, 0)
                    }
                    .bind(this)),
                    SDK().getItem("bestScore", function(t) {
                        null != t && null != t || (t = 0),
                        this.bestScore = t,
                        this.bestScoreText.string = gameApplication.countUnit(this.bestScore)[3]
                    }
                    .bind(this))),
                    soundManager.loadBg(),
                    this.gameStart()
                }
                .bind(this));
				
				var changeCard = cc.find("UIView/Bottom/ChangeCard", this.node);
				var cut = cc.find("UIView/Bottom/Cut", this.node);

				//埋点 检测激励
				this.TimeCheckAd = setInterval(function(){
					//changeCard.active = 0;
				    //cut.active = 0;
				}, 500);
				this.skinsNew = cc.sys.localStorage.getItem("SkinNew");
				this.skinsNew = JSON.parse(this.skinsNew);
				cc.game.on(cc.game.EVENT_HIDE, function() {
					//cc.sys.localStorage.setItem("LevelScore", );
					cc.sys.localStorage.setItem("change", this.changeCount);
                    cc.sys.localStorage.setItem("cut", this.cutCount);
					cc.sys.localStorage.setItem("bestScore", this.bestScore);
					cc.sys.localStorage.setItem("Skins", JSON.stringify(this.skinsData));
					cc.sys.localStorage.setItem("SkinNew", JSON.stringify(this.skinsNew));	

					var t = {};
					t.cardData = this.cardDataList,
					t.pool = [this.cardPoolCards[0].num, this.cardPoolCards[1].num],
					t.discard = this.discardCount,
					t.curScore = this.curScore,
					t.scoreTime = this.scoreTime;
					var e = JSON.stringify(t);
					cc.sys.localStorage.setItem("gameData", e);
                }.bind(this));
            },
			onDestroy:function(){
				clearInterval(this.TimeCheckAd);
			},
			autoAdapteScreen:function(){
				// 适配解决方案
				let _canvas = cc.Canvas.instance;
			// 设计分辨率比
				let _rateR = _canvas.designResolution.height/_canvas.designResolution.width;
			// 显示分辨率比
				let _rateV = cc.winSize.height/cc.winSize.width;
				console.log("winSize: rateR: "+_rateR+" rateV: "+_rateV);
				if (_rateV > _rateR)
				{
					_canvas.fitHeight = false;
					_canvas.fitWidth = true;
					console.log("winSize: fitWidth");
				}
				else
				{
					_canvas.fitHeight = true;
					_canvas.fitWidth = false;
					console.log("winSize: fitHeight");
				}
			},
            onEnable: function() {
                this.schedule(this.updataVal, 1)
            },
            onDisable: function() {
                this.unschedule(this.updataVal)
            },
            updataVal: function() {
                0 < this.changeCount ? (this.changeCountText.node.active = !0,
                this.adSpriteList[0].active = !1) : (this.changeCountText.node.active = !1,
                this.adSpriteList[0].active = !0),
                0 < this.cutCount ? (this.cutCountText.node.active = !0,
                this.adSpriteList[1].active = !1) : (this.cutCountText.node.active = !1,
                this.adSpriteList[1].active = !0),
                0 < this.discardCount ? (this.discardCountText.node.active = !0,
                this.adSpriteList[2].active = !1) : (this.discardCountText.node.active = !1,
                this.adSpriteList[2].active = !0)
            },
            start: function() {
                SDK().getItem("Short", function(t) {
                    100 != t && SDK().canCreateShortcutAsync(function(t) {
                        t && SDK().setItem({
                            Short: 100
                        })
                    }
                    .bind(this))
                }
                .bind(this))
            },
            gameStart: function() {
                if (this.clearData(),
                this.initData(),
                this.checkOver(),
                this.isGuide) {
                    this.isGuide = !1;
                    var t = cc.find("Guide", this.node)
                      , e = cc.find("Guide/Hand", this.node);
                    t.active = !0;
                    var i = viewManager.getUIPosition(this.cardPoolList[1], e.parent)
                      , n = viewManager.getUIPosition(this.cardSlotList[2], e.parent);
                    n.y = n.y - 4 * c,
                    e.runAction(cc.repeatForever(cc.sequence(cc.callFunc(function() {
                        e.position = i
                    }
                    .bind(this), this), cc.moveTo(2, n).easing(cc.easeIn(1)))))
                }
                this.isOver = !1
            },
            bindContorlAction: function(e) {
                e.on("touchstart", function(t) {
                    e.isReady && (e.isMoving = !0)
                }
                .bind(this), this),
                e.on("touchmove", function(t) {
                    e.isMoving && this.cardMoving(e, t)
                }
                .bind(this), this),
                e.on("touchend", function(t) {
                    e.isMoving && (this.moveOver(e, t),
                    e.isMoving = !1)
                }
                .bind(this), this),
                e.on("touchcancel", function(t) {
                    e.isMoving && (this.moveOver(e, t),
                    e.isMoving = !1)
                }
                .bind(this), this)
            },
            ridContorlAction: function(t) {
                t.off("touchstart"),
                t.off("touchmove"),
                t.off("touchend"),
                t.off("touchcancel"),
                t.on("touchstart", function() {
                    this.cutOff(t)
                }
                .bind(this), this)
            },
            produceCard: function(t) {
                var e = cc.instantiate(this.cardPrefab);
                e.mask = cc.find("Mask", e);
                var i = e.getComponent(cc.Sprite);
                e.sprite = i,
                e.num = t;
                var n = cc.find("Cut", e);
                return n.on("touchstart", function() {
                    this.cutOff(e)
                }
                .bind(this), this),
                e.cutButton = n,
                this.loadCardSprite(t, i),
                e
            },
            poolCard: function(i) {
                var t = Math.random()
                  , e = 0;
                if (t <= .09 ? e = 2 : t <= .27 ? e = 4 : t <= .45 ? e = 8 : t <= .63 ? e = 16 : t <= .81 ? e = 32 : t <= .99 ? e = 64 : t <= 1 && (e = "X"),
                0 != e) {
                    var n = 0;
                    if (null != this.cardPoolCards[0] && null != this.cardPoolCards[0]) {
                        var s = this.cardPoolCards[0];
                        s.isReady = !1;
                        var o = viewManager.getUIPosition(s, this.cardPoolList[1]);
                        s.parent = this.cardPoolList[1],
                        s.position = o,
                        s.runAction(cc.sequence(cc.spawn(cc.moveTo(.3, cc.v2(0, 0)), cc.scaleTo(.3, 1)), cc.callFunc(function() {
                            (this.cardPoolCards[1] = s).isReady = !0
                        }
                        .bind(this), this)))
                    } else
                        null != this.cardPoolCards[1] && null == this.cardPoolCards[0] || (n = 1);
                    var a = this.produceCard(e);
                    a.parent = this.cardPoolList[n],
                    a.scale = .8,
                    1 == n && (a.scale = 1),
                    a.x = -140,
                    a.y = 0,
                    a.active = !0,
                    a.runAction(cc.sequence(cc.scaleTo(.3, 0, 1), cc.callFunc(function() {
                        a.mask.active = !1
                    }
                    .bind(this), this), cc.scaleTo(.3, a.scale))),
                    a.runAction(cc.sequence(cc.moveTo(.3, cc.v2(0, 0)), cc.callFunc(function() {
                        if (this.cardPoolCards[n] = a,
                        this.bindContorlAction(a),
                        1 == n)
                            a.isReady = !0;
                        else {
                            var t = {};
                            t.cardData = this.cardDataList,
                            t.pool = [this.cardPoolCards[0].num, this.cardPoolCards[1].num],
                            t.discard = this.discardCount,
                            t.curScore = this.curScore,
                            t.scoreTime = this.scoreTime;
                            var e = JSON.stringify(t);
                            cc.sys.localStorage.setItem("gameData", e)
                        }
                        null != i && i(a)
                    }
                    .bind(this), this)))
                }
            },
            cardMoving: function(t, e) {
                this.onCuting = !1,
                this.cutTip.active = !1,
                this.cutShow(!1);
                var i = e.touch._point
                  , n = t.parent.convertToNodeSpaceAR(i);
                0 < n.y && (n.y = n.y + .5 * n.y),
                t.position = n
            },
            moveOver: function(t, e) {
                if (t.isMoving)
                    if (null == this.collisioning || this.collisioning.merging)
                        this.onDisCard && 0 < this.discardCount ? this.discardCard(t) : t.position = cc.v2(0, 0);
                    else {
                        cc.find("Guide", this.node).active = !1,
                        soundManager.playSound("PutCard");
                        var i = this.cardSlotList.indexOf(this.collisioning);
                        if (0 <= i)
                            t.parent = this.collisioning,
                            t.position = cc.v2(0, -10),
                            t.pro = this.collisioning,
                            this.collisioning.getComponent(cc.BoxCollider).tag = 1,
                            t.getComponent(cc.BoxCollider).tag = 2,
                            t.runAction(cc.sequence(cc.scaleTo(.1, t.scale - .1), cc.scaleTo(.1, 1))),
                            this.cardUIList[i].push(t),
                            this.cardDataList[i].push(t.num);
                        else {
                            if (i = this.cardSlotList.indexOf(this.collisioning.parent),
                            8 == this.cardUIList[i].length && this.collisioning.num != t.num && "X" != t.num)
                                return void (t.position = cc.v2(0, 0));
                            t.parent = this.collisioning.parent,
                            t.position = cc.v2(this.collisioning.x, this.collisioning.y - c),
                            t.pro = this.collisioning,
                            this.collisioning.getComponent(cc.BoxCollider).tag = 1,
                            t.getComponent(cc.BoxCollider).tag = 2,
                            t.runAction(cc.sequence(cc.scaleTo(.1, t.scale - .1), cc.scaleTo(.1, 1))),
                            this.cardUIList[i].push(t),
                            this.cardDataList[i].push(t.num),
                            null == t.pro.num && "X" == t.num && (this.cardDataList[i][this.cardDataList.length - 1] = 64)
                        }
                        this.ridContorlAction(t),
                        this.collisioning = null,
                        this.proline.active = !1,
                        this.mergeCard(t, 0),
                        this.poolCard()
                    }
                this.scheduleOnce(function() {
                    this.checkOver()
                }
                .bind(this), 1)
            },
            mergeCard: function(n, s) {
                if (null != n.pro.num)
                    if (n.num == n.pro.num || "X" == n.num)
                        n.merging = !0,
                        this.scheduleOnce(function() {
                            var i = this.cardSlotList.indexOf(n.parent)
                              , e = this.cardUIList[i].indexOf(n);
                            this.cardUIList[i].splice(e - 1, 2),
                            this.cardDataList[i].splice(e - 1, 2),
                            n.runAction(cc.sequence(cc.moveTo(.2, n.pro.position), cc.scaleTo(.1, .8), cc.callFunc(function() {
                                soundManager.playSound("merge" + s),
                                "X" == n.num ? n.num = 2 * n.pro.num : n.num = 2 * n.num,
                                this.loadCardSprite(n.num, n.getComponent(cc.Sprite));
                                var t = n.pro.pro;
                                if (this.cardSlotList.indexOf(n.pro) < 0 && n.pro.destroy(),
                                n.pro = t,
                                2048 == n.num) {
                                    var e = {};
                                    e.parent = this.cardSlotList[i],
                                    e.position = n.position,
                                    effectManager.particleShow(e, 0),
                                    soundManager.playSound("2048Sound")
                                }
                            }
                            .bind(this), this), cc.scaleTo(.1, 1), cc.callFunc(function() {
                                0 < s && this.flyCombo(n, s),
                                s += 1,
                                2048 != n.num ? (this.cardUIList[i].splice(e - 1, 0, n),
                                this.cardDataList[i].splice(e - 1, 0, n.num),
                                this.cardUIList[i].indexOf(n) != this.cardDataList[i].length - 1 ? n.getComponent(cc.BoxCollider).tag = 1 : n.getComponent(cc.BoxCollider).tag = 2,
                                n.merging = !1,
                                this.mergeCard(n, s)) : (this.discardCount = this.discardCount + 2,
                                this.discardCountText.string = this.discardCount,
                                n.pro.getComponent(cc.BoxCollider).tag = 2,
                                n.destroy());
                                var t = n.num * s;
                                this.setScore(t)
                            }
                            .bind(this), this)))
                        }
                        .bind(this), .2);
                    else {
                        var t = this.cardSlotList.indexOf(n.parent)
                          , e = this.cardUIList[t].indexOf(n);
                        e < this.cardUIList[t].length - 1 && this.mergeCard(this.cardUIList[t][e + 1], s),
                        SDK().getItem("Short", function(t) {
                            100 != t && SDK().canCreateShortcutAsync(function(t) {
                                t && SDK().setItem({
                                    Short: 100
                                })
                            }
                            .bind(this))
                        }
                        .bind(this))
                    }
                else
                    "X" == n.num && (n.num = 64,
                    this.loadCardSprite(n.num, n.getComponent(cc.Sprite)))
            },
            discardCard: function(t) {
                if (this.onDisCard || !t.isMoving) {
                    this.discardCount = this.discardCount - 1,
                    this.discardCountText.string = this.discardCount;
                    var e = viewManager.getUIPosition(this.discardBtn, t.parent);
                    soundManager.playSound("Discard"),
                    t.runAction(cc.spawn(cc.sequence(cc.scaleTo(.4, 0), cc.callFunc(function() {
                        t.destroy(),
                        this.poolCard(),
                        this.onDisCard = !1
                    }
                    .bind(this), this)), cc.moveTo(.3, e)))
                }
            },
            cutOff: function(o) {
                this.onCuting && (this.cutShow(!1),
                this.lightList[1].active = !1,
                this.cutTip.active = !1,
                this.onCuting = !1,
                this.setProp(-1, 1),
                soundManager.playSound("Discard"),
                o.runAction(cc.sequence(cc.scaleTo(.15, .6, 1.5), cc.scaleTo(.15, 1.2, .8), cc.scaleTo(.1, 0), cc.callFunc(function() {
                    var t = {};
                    t.parent = o.parent,
                    t.position = o.position,
                    effectManager.particleShow(t, 1)
                }
                .bind(this), this))),
                this.scheduleOnce(function() {
                    for (var t = this.cardSlotList.indexOf(o.parent), e = !1, i = -1, n = 0; n < this.cardDataList[t].length; n += 1)
                        e && (this.cardUIList[t][n - 1] = this.cardUIList[t][n],
                        this.cardDataList[t][n - 1] = this.cardDataList[t][n],
                        this.cardUIList[t][n - 1].runAction(cc.moveBy(.2, cc.p(0, c)))),
                        o == this.cardUIList[t][n] && (e = !0,
                        n + 1 < this.cardDataList[t].length && (i = n,
                        this.cardUIList[t][n + 1].pro = o.pro));
                    var s = this.cardUIList[t].pop();
                    this.cardDataList[t].pop(),
                    s == o && (o.pro.getComponent(cc.BoxCollider).tag = 2),
                    o.destroy(),
                    -1 != i && this.mergeCard(this.cardUIList[t][i], 0)
                }
                .bind(this), .7))
            },
            boomCard: function() {
                soundManager.playSound("Boom"),
                this.isOver = !1;
                for (var t = 0; t < 4; t += 1) {
                    var e = null
                      , i = 0;
                    3 < this.cardUIList[t].length ? (e = this.cardUIList[t][this.cardUIList[t].length - 4],
                    i = this.cardUIList[t].length - 3) : e = this.cardSlotList[t],
                    e.getComponent(cc.BoxCollider).tag = 2;
                    for (var n = this.cardUIList[t].length - 1; i <= n; n -= 1) {
                        var s = this.cardUIList[t].pop()
                          , o = {};
                        o.parent = this.cardSlotList[t],
                        o.position = s.position,
                        effectManager.particleShow(o, 0),
                        s.destroy(),
                        this.cardDataList[t].pop()
                    }
                }
            },
            scoreCard: function() {
                soundManager.playSound("ScoreCard"),
                this.scoreTime < 0 && (this.scoreTime = 0),
                this.scoreTime = this.scoreTime + 20,
                effectManager.flyReward(1, 0, this.score3.node, null, function() {
                    this.score3.node.active = !0
                }
                .bind(this))
            },
            showOver: function() {
                this.scheduleOnce(function() {
                    viewManager.popView("GameOver", !0)
                }
                .bind(this), 1.2)
            },
            checkOver: function() {
                if (!this.isOver) {
                    for (var t = 0, e = 0; e < 4; e += 1)
                        8 <= this.cardDataList[e].length && (t += 1),
                        null != this.cardPoolCards[1] && ("X" != this.cardPoolCards[1].num && this.cardPoolCards[1].num != this.cardDataList[e][7] || (t -= 1));
                    4 <= t && (this.isOver = !0,
                    soundManager.playSound("Fail"),
                    viewManager.popView("ReviveView", !0, function() {}
                    .bind(this)))
                }
            },
            checkRewardCard: function(t) {
                if (!(0 < this.isGetTime) && 8 <= this.cardDataList[t].length) {
                    var a = Math.random();
                    viewManager.popView("UseCardView", !0, function(t) {
                        this.isGetTime = 120;
                        var e = cc.find("Bg/Card", t).getComponent(cc.Sprite)
                          , i = cc.find("Bg/Use", t)
                          , n = cc.find("Bg/Desc", t).getComponent("LocalizedLabel")
                          , s = cc.find("Bg/Close", t);
                        s.off("click"),
                        s.on("click", function() {
                            e.node.active = !1,
                            n.node.active = !0,
                            i.off("click"),
                            viewManager.popView("UseCardView", !1)
                        }
                        .bind(this), this);
                        var o = null;
                        .5 <= a ? (o = function() {
                            this.isFirstShare = !1,
                            viewManager.popView("UseCardView", !1, function() {
                                this.scheduleOnce(function() {
                                    gameViewScript.boomCard()
                                }
                                .bind(this), .5)
                            }
                            .bind(this))
                        }
                        .bind(this),
                        n.dataID = "lang.boomCardDesc",
                        resManager.loadSprite("UIView.boomCard", function(t) {
                            e.spriteFrame = t,
                            e.node.active = !0
                        }
                        .bind(this))) : (o = function() {
                            this.isFirstShare = !1,
                            gameViewScript.scoreCard(),
                            viewManager.popView("UseCardView", !1)
                        }
                        .bind(this),
                        n.dataID = "lang.X3CardDesc",
                        resManager.loadSprite("UIView.x3Card", function(t) {
                            e.spriteFrame = t,
                            e.node.active = !0
                        }
                        .bind(this))),
                        n.node.active = !0,
                        i.off("click"),
                        this.isFirstShare ? i.on("click", function() {
                            o(),
                            gameApplication.onShareBtnClick(function(t) {}
                            .bind(this))
                        }
                        .bind(this), this) : i.on("click", function() {
                            gameApplication.onVideoBtnClick(function(t) {
                                t && o()
                            }
                            .bind(this), 0)
                        }
                        .bind(this), this)
                    }
                    .bind(this))
                }
            },
            cutShow: function(t) {
                for (var e = 0; e < 4; e += 1)
                    if (null != this.cardUIList[e] && null != this.cardUIList[e] && 0 < this.cardUIList[e].length)
                        for (var i = 0; i < this.cardUIList[e].length; i += 1)
                            this.cardUIList[e][i].cutButton.active = t
            },
            CollisionEnter: function(t, e) {
                2 == t.tag && 0 == e.tag && e.node.isMoving && !t.node.merging && (this.collisioning = t.node,
                this.proline.active = !0,
                this.proline.position = viewManager.getUIPosition(this.collisioning, this.proline.parent)),
                3 == t.tag && (this.onDisCard = !0)
            },
            CollisionStay: function(t, e) {
                t.node,
                this.collisioning
            },
            CollisionExit: function(t, e) {
                t.node == this.collisioning && (this.collisioning = null,
                this.proline.active = !1),
                3 == t.tag && (this.onDisCard = !1)
            },
            menuClick: function(t, e) {
                if (this.isFirstShare = !1,
                soundManager.playSound("btnClick"),
                "change" == e){
					SDK().fbEvent("clickwannengpaiBtn", 1);
					if(0 < this.changeCount){
						(this.setProp(-1, 0),
						this.lightList[0].active = !1,
						this.cardPoolCards[1].num = "X",
						this.cardPoolCards[1].runAction(cc.sequence(cc.scaleTo(.1, 0, 1), cc.callFunc(function() {
							this.loadCardSprite("X", this.cardPoolCards[1].getComponent(cc.Sprite))
						}
						.bind(this), this), cc.scaleTo(.1, 1))))
					}else if(this.isFirstShare){
						(this.isFirstShare = !1,
						this.setProp(1, 0),
						gameApplication.onShareBtnClick(function(t) {}
						.bind(this))) 
					}else{
						gameApplication.onVideoBtnClick(function(t) {
                        t && (this.setProp(1, 0),
                        this.lightList[0].active = !0)
						}.bind(this), 0);
					}
				}
                else if ("cut" == e) {
                    if (this.onCuting)
                        return;
                    SDK().fbEvent("clickjiandaoBtn", 1),
                    0 < this.cutCount && !this.onCuting ? (this.onCuting = !0,
                    this.cutTip.active = !0,
                    this.cutShow(!0)) : this.isFirstShare ? (this.isFirstShare = !1,
                    this.setProp(1, 1),
                    gameApplication.onShareBtnClick(function(t) {}
                    .bind(this))) : gameApplication.onVideoBtnClick(function(t) {
                        t && (this.setProp(1, 1),
                        this.lightList[1].active = !0)
                    }
                    .bind(this), 1)
                } else if ("discard" == e) {
                    if (SDK().fbEvent("clickdeleteBtn", 1),
                    0 < this.discardCount)
                        return void this.discardCard(this.cardPoolCards[1]);
                    this.isFirstShare ? (this.isFirstShare = !1,
                    this.discardCount = this.discardCount + 1,
                    this.discardCountText.string = this.discardCount,
                    gameApplication.onShareBtnClick(function(t) {}
                    .bind(this))) : gameApplication.onVideoBtnClick(function(t) {
                        t && (this.discardCount = this.discardCount + 1,
                        this.discardCountText.string = this.discardCount)
                    }
                    .bind(this), 2)
                } else if ("pause" == e)
                    viewManager.popView("PauseView", !0);
                else if ("closeGuide" == e) {
                    cc.find("Guide", this.node).active = !1
                } else
                    "clear" == e ? (this.clearIdx = this.clearIdx + 1,
                    this.clearIdx % 5 == 0 && (SDK().setItem({
                        isFirst: 100
                    }),
                    cc.sys.localStorage.setItem("gameData", "0"))) : "Skins" == e && (viewManager.popView("SkinView", !0),
                    this.skinsSprite.active = !1,
                    this.lightList[2].active = !1)
            },
            setProp: function(t, e) {
                0 == e ? (this.changeCount = this.changeCount + t,
                this.changeCountText.string = this.changeCount,
                SDK().setItem({
                    change: this.changeCount
                })) : 1 == e && (this.cutCount = this.cutCount + t,
                this.cutCountText.string = this.cutCount,
                SDK().setItem({
                    cut: this.cutCount
                })),
                this.isFirstShare
            },
            setScore: function(t) {
                if (0 < this.scoreTime && (t *= 3),
                0 < this.levelNum.length) {
                    this.levelNum[1] = this.levelNum[1] + t;
                    var e = 0;
                    if (e = this.levelNum[0] < 25 ? this.levelNum[0] * r[Number.parseInt(this.levelNum[0] / 5)] : 175e3,
                    this.levelNum[1] > e) {
                        this.levelNum[1] = this.levelNum[1] - e,
                        this.levelNum[0] = this.levelNum[0] + 1,
                        this.setItem("Level", this.levelNum[0]),
                        this.levelColorNode[0].color = this.levelColorNode[1].color,
                        this.levelColorNode[2].color = this.levelColorNode[1].color;
                        var i = this.getRandom(a, 2, 7);
                        this.levelColorNode[1].color = l[i[1]],
                        a = i[1],
                        this.setPros(this.levelNum[0]),
                        this.checkOverPlayer(),
                        -1 < this.overPlayer ? viewManager.popView("OverPlayerView", !0, function(t) {
                            t.getComponent("OverPlayerView").overPlayer(this.overPlayer)
                        }
                        .bind(this)) : viewManager.popView("PassView", !0),
                        SDK().fbEvent("Level" + this.levelNum[0], 1)
                    }
                    this.levelTextList[0].string = this.levelNum[0],
                    this.levelTextList[1].string = this.levelNum[0] + 1,
                    this.setItem("LevelScore", this.levelNum[1]);
                    var n = 0;
                    n = this.levelNum[0] < 25 ? this.levelNum[0] * r[Number.parseInt(this.levelNum[0] / 5)] : 175e3;
                    var s = this.levelNum[1] / n;
                    this.levelPro.progress = s
                }
                if (this.curScore = this.curScore + t,
                this.curScoreText.string = gameApplication.countUnit(this.curScore)[3],
                this.curScore > this.bestScore) {
                    this.bestScore = this.curScore,
                    this.bestScoreText.string = gameApplication.countUnit(this.bestScore)[3],
                    SDK().setItem({
                        bestScore: this.curScore
                    });
                    var o = {};
                    o.lv = this.levelNum[0],
                    SDK().setRankScore(2, this.curScore, JSON.stringify(o))
                }
            },
            checkOverPlayer: function() {
                if (this.overPlayer != this.overIdx) {
                    if ((this.overPlayer = -1) != this.overIdx) {
                        var i = JSON.parse(this.friends[this.overIdx].ext).lv;
                        this.levelNum[0] > i && (this.overPlayer = this.overIdx)
                    }
                } else
                    this.overPlayer = -1;
                for (var t = this.friends.length - 1; 0 <= t; t -= 1) {
                    if ((i = JSON.parse(this.friends[t].ext).lv) >= this.levelNum[0] && (this.overIdx != t && this.friends[t].id != SDK().MyPlayer.id && (this.overIdx = t,
                    this.overUI.main.active = !0,
                    this.overUI.score.node.active = !1,
                    cc.loader.load(this.friends[t].headUrl, function(t, e) {
                        this.overUI.head.node.runAction(cc.sequence(cc.fadeOut(.5), cc.callFunc(function() {
                            this.overUI.head.spriteFrame = new cc.SpriteFrame(e),
                            this.overUI.score.string = "Lv " + i,
                            this.overUI.score.node.active = !0
                        }
                        .bind(this), this), cc.fadeIn(.5)))
                    }
                    .bind(this))),
                    this.friends[t].id != SDK().MyPlayer.id))
                        break;
                    -1 == t && (this.overUI.main.active = !1)
                }
            },
            getItem: function(e, i) {
                dataManager.getStore(e, function(t) {
                    null != t && null != t || (dataManager.setStore(e, 1),
                    t = 1),
                    null != i && i(t)
                }
                .bind(this))
            },
            setItem: function(t, e) {
                dataManager.setStore(t, e)
            },
            flyCombo: function(t, e) {
                e += 1,
                0 < this.scoreTime && (e *= 3),
                effectManager.flyText("X " + e, t)
            },
            getRandom: function(t, e, i) {
                for (var n = [], s = 0; s < i; s += 1)
                    n[s] = s;
                if (t < i) {
                    var o = n[t];
                    n[t] = n[n.length - 1],
                    n[n.length - 1] = o,
                    n = n.slice(0, n.length - 1)
                }
                var a = []
                  , c = 0;
                for (s = 0; s < e; s += 1) {
                    var r = Math.floor(Math.random() * n.length);
                    o = n[r];
                    n[r] = n[n.length - 1],
                    n[n.length - 1] = o,
                    n = n.slice(0, n.length - 1),
                    a[c] = o,
                    c += 1
                }
                return a
            },
            update: function(t) {
                0 < this.scoreTime ? (this.scoreTime = this.scoreTime - t,
                this.score3.fillRange = this.scoreTime / 20) : this.score3.node.active = !1,
                0 < this.isGetTime && (this.isGetTime = this.isGetTime - t)
            }
        }),
        cc._RF.pop()
    }
    , {}],
    LanguageData: [function(t, e, i) {
        "use strict";
        cc._RF.push(e, "61de062n4dJ7ZM9/Xdumozn", "LanguageData");
        var n = t("polyglot.min")
          , s = null;
        function o(t) {
            return window.i18n.languages[t]
        }
        function a(t) {
            t && (s ? s.replace(t) : s = new n({
                phrases: t,
                allowMissing: !0
            }))
        }
        window.i18n || (window.i18n = {
            languages: {},
            curLang: ""
        }),
        e.exports = {
            init: function(t) {
                if (t !== window.i18n.curLang) {
                    var e = o(t) || {};
                    window.i18n.curLang = t,
                    a(e),
                    this.inst = s
                }
            },
            t: function(t, e) {
                if (s)
                    return s.t(t, e)
            },
            inst: s,
            updateSceneRenderers: function() {
                for (var t = cc.director.getScene().children, e = [], i = 0; i < t.length; ++i) {
                    var n = t[i].getComponentsInChildren("LocalizedLabel");
                    Array.prototype.push.apply(e, n)
                }
                for (var s = 0; s < e.length; ++s) {
                    e[s].updateLabel()
                }
                for (var o = [], a = 0; a < t.length; ++a) {
                    var c = t[a].getComponentsInChildren("LocalizedSprite");
                    Array.prototype.push.apply(o, c)
                }
                for (var r = 0; r < o.length; ++r) {
                    o[r].updateSprite(window.i18n.curLang)
                }
            }
        },
        cc._RF.pop()
    }
    , {
        "polyglot.min": "polyglot.min"
    }],
    Language: [function(t, e, i) {
        "use strict";
        cc._RF.push(e, "8830fztlatKM58S+2qVlmki", "Language"),
        window.i18n || (window.i18n = {}),
        window.i18n.languages || (window.i18n.languages = {}),
        window.i18n.languages.en = {
            lang: {
                passTitel: "Nice!",
                overPassTitel: "Excellent!",
                worldText: "世界",
                friendText: "好友",
                addText: "添加好友",
                skinTitel: "皮肤",
                skin0: "LV 5 ",
                skin1: "LV 10",
                skin2: "LV 15",
                skin3: "LV 20",
                skin4: "LV 25",
                skin5: "LV 30",
                skin6: "LV 35",
                skin7: "LV 40",
                skin8: "LV 45",
                skin9: "LV 50",
                skin10: "LV 55",
                skin11: "LV 60",
                skin12: "LV 65",
                overLenth: "不能放这里!",
                cutTip: "点击任意卡牌剪切掉!",
                tips: "提示",
                usePropTitel: "礼物",
                videoFail: "获取视频失败!",
                shareFail: "分享失败!",
                videoTurnShare: "获取视频失败但是你可以通过分享获得奖励.",
                failTitel: "失败",
                okayText: "确定",
                beginText: "开始",
                overPlayer: "Next over",
                scoreText: "分数",
                rankTitel: "排名",
                pauseTitel: "暂停",
                musicOffText: "声音 关",
                musicOnText: "声音 开",
                descriptionText: "提示",
                restartText: "准备",
                continueText: "继续",
                backText: "主界面 >>",
                getChange: "您获得一张万能卡道具!",
                getCut: "您获得一个剪切道具!",
                shareOrVideo: "免费",
                noThankText: "不,谢谢 ",
                boomCardDesc: "清除每列最后三张卡！",
                X3CardDesc: "您在20秒内获得的分数翻3倍.",
                challengeText: "挑战",
                descriptionTitel: "提示",
                LuckyCard: "使用一张万能卡.",
                DiscardTool: "剪切掉一张不要的卡.",
                CutTool: "删掉当前要放的卡.",
                back: "返回 >>",
                guide: "Drag the cards!\nMerge the same number as more as you can!\nGood luck to you!",
                timeText: "游戏 结束",
                shareReviveText: "分享继续游戏",
                videoReviveText: "看广告继续游戏",
                jumpText: "跳过 >>"
            }
        },
        window.i18n.languages.zh = {
            lang: {}
        },
        window.i18n.languages.es = {
            lang: {}
        },
        window.i18n.languages.in = {
            lang: {}
        },
        window.i18n.languages.pt = {
            lang: {}
        },
        cc._RF.pop()
    }
    , {}],
    LoadLanguage: [function(t, e, i) {
        "use strict";
        cc._RF.push(e, "34293WOrRBK/o/Y7g1Pej5+", "LoadLanguage"),
        cc.Class({
            extends: cc.Component,
            properties: {},
            start: function() {
                cc.director.loadScene("main")
            }
        }),
        cc._RF.pop()
    }
    , {}],
    LocalizedLabel: [function(t, e, i) {
        "use strict";
        cc._RF.push(e, "744dcs4DCdNprNhG0xwq6FK", "LocalizedLabel");
        var n = t("LanguageData");
        cc.Class({
            extends: cc.Component,
            editor: {
                executeInEditMode: !0,
                menu: "i18n/LocalizedLabel"
            },
            properties: {
                dataID: {
                    get: function() {
                        return this._dataID
                    },
                    set: function(t) {
                        this._dataID !== t && (this._dataID = t,
                        this.updateLabel())
                    }
                },
                _dataID: ""
            },
            onLoad: function() {
                n.inst || n.init(),
                this.fetchRender()
            },
            fetchRender: function() {
                var t = this.getComponent(cc.Label);
                if (t)
                    return this.label = t,
                    void this.updateLabel()
            },
            updateLabel: function() {
                this.label ? n.t(this.dataID) && (this.label.string = n.t(this.dataID)) : cc.error("Failed to update localized label, label component is invalid!")
            }
        }),
        cc._RF.pop()
    }
    , {
        LanguageData: "LanguageData"
    }],
    LocalizedSprite: [function(t, e, i) {
        "use strict";
        cc._RF.push(e, "f34ac2GGiVOBbG6XlfvgYP4", "LocalizedSprite");
        var n = t("SpriteFrameSet");
        cc.Class({
            extends: cc.Component,
            editor: {
                executeInEditMode: !0,
                inspector: "packages://i18n/inspector/localized-sprite.js",
                menu: "i18n/LocalizedSprite"
            },
            properties: {
                spriteFrameSet: {
                    default: [],
                    type: n
                }
            },
            onLoad: function() {
                this.fetchRender()
            },
            fetchRender: function() {
                var t = this.getComponent(cc.Sprite);
                if (t)
                    return this.sprite = t,
                    void this.updateSprite(window.i18n.curLang)
            },
            getSpriteFrameByLang: function(t) {
                for (var e = 0; e < this.spriteFrameSet.length; ++e)
                    if (this.spriteFrameSet[e].language === t)
                        return this.spriteFrameSet[e].spriteFrame
            },
            updateSprite: function(t) {
                if (this.sprite) {
                    var e = this.getSpriteFrameByLang(t);
                    !e && this.spriteFrameSet[0] && (e = this.spriteFrameSet[0].spriteFrame),
                    this.sprite.spriteFrame = e
                } else
                    cc.error("Failed to update localized sprite, sprite component is invalid!")
            }
        }),
        cc._RF.pop()
    }
    , {
        SpriteFrameSet: "SpriteFrameSet"
    }],
    MainView: [function(t, e, i) {
        "use strict";
        cc._RF.push(e, "5a326YqAwhD+IfA3lH1oKVk", "MainView"),
        cc.Class({
            extends: cc.Component,
            properties: {},
            onLoad: function() {
                window.mainScript = this
            },
            start: function() {},
            menuClick: function(t, e) {
                soundManager.playSound("btnClick"),
                "rank" == e ? (SDK().fbEvent("clickpaihangbangBtn", 1),
                viewManager.popView("RankView", !0, function(t) {}
                .bind(this))) : "share" == e ? (SDK().fbEvent("clickshareBtn", 1),
                gameApplication.onShareBtnClick(null, 3)) : "begin" == e && (SDK().fbEvent("clickplayBtn", 1),
                viewManager.showView("GameView", !0, !0),
                viewManager.showView("MainView", !1, !1, null, function() {
                    gameViewScript.gameStart()
                }
                .bind(this)))
            },
            update: function(t) {}
        }),
        cc._RF.pop()
    }
    , {}],
    OneSkinView: [function(t, e, i) {
        "use strict";
        cc._RF.push(e, "14abdBgrp9Cjpk7lxNBVLYC", "OneSkinView"),
        cc.Class({
            extends: cc.Component,
            properties: {
                skinImage: {
                    default: null,
                    visible: !1
                },
                desc: {
                    default: null,
                    visible: !1
                },
                prosLabel: {
                    default: null,
                    visible: !1
                },
                prosBar: {
                    default: null,
                    visible: !1
                }
            },
            onLoad: function() {
                this.skinImage = cc.find("Bg/Main/Skin/SkinImage", this.node).getComponent(cc.Sprite),
                this.desc = cc.find("Bg/Main/Desc", this.node).getComponent("LocalizedLabel"),
                this.prosLabel = cc.find("Bg/Main/Num", this.node).getComponent(cc.Label),
                this.prosBar = cc.find("Bg/Main/Pros", this.node).getComponent(cc.ProgressBar)
            },
            start: function() {},
            onEnable: function() {
                this.skinImage.node.active = !1,
                this.desc.node.active = !1,
                this.prosLabel.node.active = !1,
                this.prosBar.node.active = !1,
                this.showSkins(skinView.curSkinIdx)
            },
            showSkins: function(t) {
                var e = skinView.skinsData[t];
                resManager.loadSprite("GameSp." + t + "-card16", function(t) {
                    this.skinImage.spriteFrame = t,
                    this.skinImage.node.active = !0
                }
                .bind(this)),
                this.desc.dataID = "lang.skin" + t,
                this.prosLabel.string = e.pros + "/" + e.need;
                var i = e.pros / e.need;
                this.prosBar.progress = i,
                this.desc.node.active = !0,
                this.prosLabel.node.active = !0,
                this.prosBar.node.active = !0
            },
            update: function(t) {}
        }),
        cc._RF.pop()
    }
    , {}],
    OverPlayerView: [function(t, e, i) {
        "use strict";
        cc._RF.push(e, "d2099228RdFAIa2Ey9Yr1EA", "OverPlayerView"),
        cc.Class({
            extends: cc.Component,
            properties: {
                myHead: {
                    default: null,
                    visible: !1
                },
                overHead: {
                    default: null,
                    visible: !1
                },
                okayBtn: {
                    default: null,
                    visible: !1
                }
            },
            onLoad: function() {
                this.myHead = cc.find("Bg/MyHead/Sprite", this.node).getComponent(cc.Sprite),
                this.overHead = cc.find("Bg/OverHead/Sprite", this.node).getComponent(cc.Sprite),
                this.okayBtn = cc.find("Bg/Continue", this.node),
                this.myHead.spriteFrame = SDK().MyPlayer.head
            },
            onEnable: function() {
                var t = {};
                t.parent = gameViewScript.levelPro.node.parent,
                t.position = gameViewScript.levelPro.node.position,
                effectManager.particleShow(t, 2)
            },
            onDisable: function() {
                this.okayBtn.off("click")
            },
            overPlayer: function(i) {
                cc.loader.load(gameViewScript.friends[i].headUrl, function(t, e) {
                    this.overHead.spriteFrame = new cc.SpriteFrame(e),
                    this.okayBtn.on("click", function() {
                        soundManager.playSound("btnClick"),
                        SDK().playWith(gameViewScript.friends[i].id, null, function(t) {
                            gameApplication.onGiftBtnClick(null, 0)
                        }
                        .bind(this)),
                        viewManager.popView("OverPlayerView", !1)
                    }
                    .bind(this))
                }
                .bind(this))
            },
            update: function(t) {}
        }),
        cc._RF.pop()
    }
    , {}],
    PageViewTouch: [function(t, e, i) {
        "use strict";
        cc._RF.push(e, "e9009lLZKRPsJY++KlOeqeY", "PageViewTouch"),
        cc.Class({
            extends: cc.Component,
            properties: {
                target: {
                    default: null,
                    type: cc.PageView
                }
            },
            onLoad: function() {
                this.node.on(cc.Node.EventType.TOUCH_START, this.target.__proto__._onTouchBegan, this.target.__proto__, !0),
                this.node.on(cc.Node.EventType.TOUCH_MOVE, this.target.__proto__._onTouchMoved, this.target.__proto__, !0),
                this.node.on(cc.Node.EventType.TOUCH_END, this.target.__proto__._onTouchEnded, this.target.__proto__, !0),
                this.node.on(cc.Node.EventType.TOUCH_CANCEL, this.target.__proto__._onTouchCancelled, this.target.__proto__, !0)
            }
        }),
        cc._RF.pop()
    }
    , {}],
    PassView: [function(t, e, i) {
        "use strict";
        cc._RF.push(e, "ad16bx+gdFCb5x1OIKVCJzB", "PassView"),
        cc.Class({
            extends: cc.Component,
            properties: {
                curLvText: {
                    default: null,
                    visible: !1
                },
                okayBtn: {
                    default: null,
                    visible: !1
                }
            },
            onLoad: function() {
                this.curLvText = cc.find("Bg/Star/Sprite/Level", this.node).getComponent(cc.Label),
                this.okayBtn = cc.find("Bg/Okay", this.node),
                this.okayBtn.on("click", function(t) {
                    this.menuClick(null, "Okay")
                }
                .bind(this), this)
            },
            onEnable: function() {
                var t = {};
                t.parent = gameViewScript.levelPro.node.parent,
                t.position = gameViewScript.levelPro.node.position,
                effectManager.particleShow(t, 2),
                this.curLvText.string = "LV " + gameViewScript.levelNum[0]
            },
            menuClick: function(t, e) {
                soundManager.playSound("btnClick"),
                "Okay" == e && (viewManager.popView("PassView", !1),
                gameApplication.onGiftBtnClick(null, 0),
                gameViewScript.levelNum[0] % 5 == 0 && viewManager.popView("SkinView", !0))
            },
            update: function(t) {}
        }),
        cc._RF.pop()
    }
    , {}],
    PauseView: [function(t, e, i) {
        "use strict";
        cc._RF.push(e, "28e62XD7b5L1oVX4rMxOMJX", "PauseView"),
        cc.Class({
            extends: cc.Component,
            properties: {},
            onLoad: function() {
                (window.pauseViewScript = this).musicSprite = cc.find("Bg/Btns/Music/Sprite", this.node).getComponent(cc.Sprite)
            },
            start: function() {},
            onEnable: function() {
                soundManager.isOpen ? resManager.loadSprite("UIView.musicOnSprite", function(t) {
                    this.musicSprite.spriteFrame = t
                }
                .bind(this)) : resManager.loadSprite("UIView.musicOffSprite", function(t) {
                    this.musicSprite.spriteFrame = t
                }
                .bind(this))
            },
            menuClick: function(t, e) {
                soundManager.playSound("btnClick"),
                "description" == e ? viewManager.popView("DescriptionView", !0) : "restart" == e ? (cc.sys.localStorage.setItem("gameData", "0"),
                gameViewScript.isGuide = !0,
                gameViewScript.gameStart(),
                viewManager.popView("PauseView", !1)) : "music" == e ? soundManager.isOpen ? (soundManager.setIsOpen(!1),
                soundManager.setBgOpen(!1),
                resManager.loadSprite("UIView.musicOffSprite", function(t) {
                    this.musicSprite.spriteFrame = t
                }
                .bind(this))) : (soundManager.setIsOpen(!0),
                soundManager.setBgOpen(!0),
                resManager.loadSprite("UIView.musicOnSprite", function(t) {
                    this.musicSprite.spriteFrame = t
                }
                .bind(this))) : "back" == e && (viewManager.popView("PauseView", !1),
                viewManager.showView("GameView", !1, !0),
                viewManager.showView("MainView", !0, !1))
            }
        }),
        cc._RF.pop()
    }
    , {}],
    Player: [function(t, e, i) {
        "use strict";
        cc._RF.push(e, "347170Jv2RDiqwz6eCgWEMV", "Player");
        var n = t("util");
        cc.Class({
            extends: cc.Component,
            properties: {
                itemArrayList: {
                    default: {},
                    visible: !1
                },
                dataList: {
                    default: {},
                    visible: !1
                },
                pName: {
                    default: "",
                    visible: !1
                },
                pSex: {
                    default: 0,
                    type: cc.Integer,
                    visible: !1
                },
                pAge: {
                    default: 0,
                    type: cc.Integer,
                    visible: !1
                },
                pAvatar: {
                    default: "",
                    visible: !1
                },
                pId: {
                    default: 0,
                    type: cc.Integer,
                    visible: !1
                },
                worldId: {
                    default: 0,
                    type: cc.Integer,
                    visible: !1
                },
                fbPlayer: {
                    default: null,
                    visible: !1
                },
                playerCof: {
                    default: null,
                    visible: !1
                },
                config: {
                    default: null,
                    visible: !1
                },
                playerInitData: {
                    default: null,
                    visible: !1
                },
                initData: {
                    default: null,
                    visible: !1
                },
                fristInitPros: {
                    default: 0,
                    visible: !1
                },
                InitPros: {
                    default: 0,
                    visible: !1
                },
                isLoadRes: {
                    default: !1,
                    visible: !1
                }
            },
            onLoad: function() {
                window.player = this
            },
            setData: function(t, e, i) {
                var n = t;
                null != e && null != e && (this.dataList[n] = e,
                dataManager.setData(n, e, function() {
                    null != i && i()
                }
                .bind(this)))
            },
            getData: function(t, e) {
                var i = t;
                return null == this.dataList[i] ? dataManager.getData(i, function(t) {
                    this.dataList[i] = t,
                    null != e && e()
                }
                .bind(this)) : null != e && e(),
                this.dataList[i]
            },
            getID: function() {
                var t = this.pId;
                return null == t ? (console.warn("get pId fail,val is null"),
                0) : t
            },
            setID: function(t) {
                (0,
                n.isString)(t) ? this.pId = SDK().MyPlayer.id : console.warn("set pID fail,val is not Number")
            },
            substrName: function(t, e) {
                if (t.replace(/[\u4e00-\u9fa5]/g, "**").length <= e)
                    return t;
                for (var i = 0, n = "", s = 0; s < t.length && (/[\u4e00-\u9fa5]/.test(t[s]) ? i += 2 : i += 1,
                !(e < i)); s++)
                    n += t[s];
                return n + " ..."
            }
        }),
        cc._RF.pop()
    }
    , {
        util: 4
    }],
    RankView: [function(t, e, i) {
        "use strict";
        cc._RF.push(e, "04fa0UaF89AfJ9fdL6pdcUD", "RankView"),
        cc.Class({
            extends: cc.Component,
            properties: {
                content: {
                    default: null,
                    type: cc.Node
                },
                headSpriteList: {
                    default: {},
                    visible: !1
                },
                btns: {
                    default: [],
                    type: [cc.Toggle]
                },
                worldPlayer: {
                    default: [],
                    visible: !1
                },
                friendPlayer: {
                    default: [],
                    visible: !1
                },
                uiPlayer: {
                    default: [],
                    visible: !1
                },
                player: {
                    default: null,
                    type: cc.Node
                },
                selfHead: {
                    default: null,
                    type: cc.Sprite
                },
                selfLevel: {
                    default: null,
                    type: cc.Label
                },
                selfNo: {
                    default: null,
                    type: cc.Label
                },
                selfName: {
                    default: null,
                    type: cc.Label
                },
                selfScore: {
                    default: null,
                    type: cc.Label
                }
            },
            onLoad: function() {},
            onEnable: function() {
                this.LoadRank()
            },
            menuClick: function(t, e) {
                soundManager.playSound("btnClick"),
                "friend" == e ? (null != this.btns[0] && (this.btns[0].isChecked = !1),
                null != this.friendPlayer && 0 < this.friendPlayer.length ? this.getRank(this.friendPlayer, 2) : SDK().getFriendRank(2, function(t) {
                    this.friendPlayer = t,
                    this.getRank(t, 2)
                }
                .bind(this))) : "world" == e ? (null != this.btns[1] && (this.btns[1].isChecked = !1),
                null != this.worldPlayer && 0 < this.worldPlayer.length ? this.getRank(this.worldPlayer, 1) : SDK().getWorldRank(2, 50, 0, function(t) {
                    this.getRank(t, 1),
                    this.worldPlayer = t
                }
                .bind(this))) : "share" == e && gameApplication.onShareBtnClick(null, 4)
            },
            LoadRank: function() {
                SDK().getWorldRank(2, 50, 0, function(t) {
                    this.worldPlayer = t,
                    null != this.btns[0] && this.btns[0].isChecked && this.menuClick(null, "world")
                }
                .bind(this)),
                SDK().getFriendRank(2, function(t) {
                    this.friendPlayer = t,
                    null == this.btns[1] ? this.menuClick(null, "friend") : this.btns[1].isChecked && this.menuClick(null, "friend")
                }
                .bind(this))
            },
            getRank: function(t, e) {
                for (var i = !1, n = t, s = 0; s < n.length; s += 1)
                    this.LoadRankData(s, n[s], e) && (i = !0);
                var o = n.length;
                if (i || 1 != e) {
                    if (o < this.uiPlayer.length)
                        for (s = n.length; s < this.uiPlayer.length; s += 1)
                            this.uiPlayer[s].playerBar.active = !1
                } else
                    SDK().getRankScore(2, function(t) {
                        if (null == t && null == t || (this.LoadRankData(o - 1, t),
                        o += 1),
                        o < this.uiPlayer.length)
                            for (var e = n.length; e < this.uiPlayer.length; e += 1)
                                this.uiPlayer[e].playerBar.active = !1
                    }
                    .bind(this))
            },
            LoadRankData: function(t, e, i) {
                var n, s, o, a, c, r, l, u, d, h = !1;
                (t >= this.uiPlayer.length ? (s = (n = cc.instantiate(this.player)).getChildByName("Bg").getComponent(cc.Sprite),
                o = n.getChildByName("No").getComponent(cc.Label),
                a = n.getChildByName("Money").getChildByName("Val").getComponent(cc.Label),
                n.getChildByName("Head").getComponent(cc.Sprite),
                c = n.getChildByName("Head").getChildByName("Level").getComponent(cc.Label),
                r = n.getChildByName("Sprite").getComponent(cc.Sprite),
                l = n.getChildByName("Name").getComponent(cc.Label),
                u = n.getChildByName("Play"),
                this.uiPlayer[t] = {},
                this.uiPlayer[t].playerBar = n,
                this.uiPlayer[t].mainBg = s,
                this.uiPlayer[t].No = o,
                this.uiPlayer[t].Score = a,
                this.uiPlayer[t].Head = r,
                this.uiPlayer[t].Level = c,
                this.uiPlayer[t].Name = l,
                this.uiPlayer[t].Play = u) : (n = this.uiPlayer[t].playerBar,
                s = this.uiPlayer[t].mainBg,
                o = this.uiPlayer[t].No,
                a = this.uiPlayer[t].Score,
                this.uiPlayer[t].Mask,
                c = this.uiPlayer[t].Level,
                r = this.uiPlayer[t].Head,
                l = this.uiPlayer[t].Name,
                u = this.uiPlayer[t].Play),
                1 == i ? u.active = !1 : 2 == i && (u.active = !0),
                o.node.active = !0,
                a.node.active = !0,
                r.node.active = !0,
                l.node.active = !0,
                null != (d = JSON.parse(e.ext).lv) && "undefined" != d || (d = 1),
                c.string = "Lv:" + d,
                parseInt(e.no),
                n.parent = this.content,
                e.id == SDK().MyPlayer.id && (h = !0,
                u.active = !1),
                u.tag = e.id,
                u.off("click"),
                u.on("click", function(t) {
                    SDK().playWith(t.target.tag, null, function(t) {
                        t && console.log("Share to " + e.id)
                    }
                    .bind(this))
                }
                .bind(this), this),
                o.string = e.no,
                a.string = e.score,
                l.string = e.name,
                this.LoadSprite(e.headUrl, r, this.headSpriteList[e.id]),
                e.id == SDK().getSelfInfo().id) && (null != this.selfNo && (this.LoadSprite(e.headUrl, this.selfHead, this.headSpriteList[e.id]),
                this.selfNo.string = e.no,
                this.selfScore.string = e.score,
                this.selfName.string = e.name,
                this.selfName.node.parent.active = !0,
                null != (d = JSON.parse(e.ext).lv) && "undefined" != d || (d = 1),
                this.selfLevel.string = "Lv:" + d));
                return n.active = !0,
                h
            },
            LoadSprite: function(t, i, n) {
                null == n ? cc.loader.load(t, function(t, e) {
                    n = new cc.SpriteFrame(e),
                    i.spriteFrame = n,
                    i.node.parent.active = !0
                }) : (i.spriteFrame = n,
                i.node.parent.active = !0)
            }
        }),
        cc._RF.pop()
    }
    , {}],
    ResManager: [function(t, e, i) {
        "use strict";
        cc._RF.push(e, "0dc172Q1IlKMJpC2xp+VTAp", "ResManager"),
        cc.Class({
            extends: cc.Component,
            properties: {
                actionList: {
                    default: [],
                    visible: !1
                },
                resSaver: {
                    default: {},
                    visible: !1
                },
                isFree: {
                    default: [],
                    visible: !1
                }
            },
            onLoad: function() {
                this.isFree = [!0, !0, !0, !0, !0],
                window.resManager = this
            },
            loadSprite: function(t, e) {
                this.pushAction(1, t, e)
            },
            loadConfig: function(t, e) {
                this.pushAction(2, t, e)
            },
            loadPrefab: function(t, e) {
                this.pushAction(3, t, e)
            },
            loadClip: function(t, e) {
                this.pushAction(4, t, e)
            },
            loadBone: function(t, e) {
                this.pushAction(5, t, e)
            },
            pushAction: function(t, e, i) {
                if (null == this.resSaver[e]) {
                    var n = {};
                    n.type = t,
                    n.name = e,
                    n.cb = i,
                    this.actionList.push(n),
                    this.isFree[t] && this.dealAction()
                } else
                    null != i && i(this.resSaver[e])
            },
            dealAction: function() {
                var i = this.actionList.shift();
                if (null != i) {
                    var e = i.cb;
                    if (i.cb = function(t) {
                        null != e && e(t),
                        this.dealAction()
                    }
                    .bind(this),
                    this.isFree[i.type] = !1,
                    "" == i.name || null == i.name)
                        return console.log("action.name is empty"),
                        void this.dealAction();
                    switch (i.type) {
                    case 1:
                        var t = i.name.split(".")
                          , n = t[0]
                          , s = t[1];
                        cc.loader.loadRes("texture2d/" + n, cc.SpriteAtlas, function(t, e) {
                            null == t ? (this.resSaver[i.name] = e.getSpriteFrame(s),
                            null != i.cb && i.cb(this.resSaver[i.name])) : (console.warn(i.name),
                            console.warn(t),
                            null != i.cb && i.cb(null)),
                            this.isFree[i.type] = !0
                        }
                        .bind(this));
                        break;
                    case 2:
                        cc.loader.loadRes("conf/" + i.name, function(t, e) {
                            e = e,
                            null == t ? (this.resSaver[i.name] = e,
                            null != i.cb && i.cb(e)) : (console.warn(i.name),
                            console.warn(t),
                            null != i.cb && i.cb(null)),
                            this.isFree[i.type] = !0
                        }
                        .bind(this));
                        break;
                    case 3:
                        cc.loader.loadRes("prefab/" + i.name, function(t, e) {
                            null == t ? (this.resSaver[i.name] = e,
                            null != i.cb && i.cb(e)) : (console.warn(i.name),
                            console.warn(t),
                            null != i.cb && i.cb(null)),
                            this.isFree[i.type] = !0
                        }
                        .bind(this));
                        break;
                    case 4:
                        cc.loader.loadRes("sound/" + i.name, cc.AudioClip, function(t, e) {
                            null == t ? (this.resSaver[i.name] = e,
                            null != i.cb && i.cb(e)) : (console.warn(i.name),
                            console.warn(t),
                            null != i.cb && i.cb(null)),
                            this.isFree[i.type] = !0
                        }
                        .bind(this));
                        break;
                    case 5:
                        cc.loader.loadResDir("bone/" + i.name, function(t, e) {
                            null == t ? (this.resSaver[i.name] = e,
                            null != i.cb && i.cb(e)) : (console.warn(i.name),
                            console.warn(t),
                            null != i.cb && i.cb(null)),
                            this.isFree[i.type] = !0
                        }
                        .bind(this))
                    }
                } else
                    this.isFree = [!0, !0, !0, !0, !0]
            },
            loadSoundAsync: function(i, n) {
                cc.loader.loadRes("sound/" + i, cc.AudioClip, function(t, e) {
                    null == t ? (this.resSaver[i] = e,
                    null != n && n(e)) : (console.warn(i),
                    console.warn(t),
                    null != n && n(null))
                }
                .bind(this))
            },
            loadSpriteAsync: function(i, n) {
                var t = i.split(".")
                  , e = t[0]
                  , s = t[1];
                cc.loader.loadRes("texture2d/" + e, cc.SpriteAtlas, function(t, e) {
                    null == t ? (this.resSaver[i] = e.getSpriteFrame(s),
                    null != n && n(this.resSaver[i])) : (console.warn(i),
                    console.warn(t),
                    null != n && n(null))
                }
                .bind(this))
            }
        }),
        cc._RF.pop()
    }
    , {}],
    ReviveView: [function(t, e, i) {
        "use strict";
        cc._RF.push(e, "6d95cU9V4xIxKEoZhrGR20z", "ReviveView"),
        cc.Class({
            extends: cc.Component,
            properties: {
                timeText: {
                    default: null,
                    visible: !1
                },
                timeVal: {
                    default: 0,
                    visible: !1
                },
                shareBtn: {
                    default: null,
                    visible: !1
                },
                videoBtn: {
                    default: null,
                    visible: !1
                },
                jumpBtn: {
                    default: null,
                    visible: !1
                }
            },
            onLoad: function() {
                this.timeText = cc.find("Bg/Time/Num", this.node).getComponent(cc.Label),
                this.shareBtn = cc.find("Bg/Share", this.node),
                this.videoBtn = cc.find("Bg/Video", this.node),
                this.jumpBtn = cc.find("Bg/Jump", this.node),
                this.shareBtn.on("click", function(t) {
                    this.menuClick(null, "share")
                }
                .bind(this), this),
                this.videoBtn.on("click", function(t) {
                    this.menuClick(null, "video")
                }
                .bind(this), this),
                this.jumpBtn.on("click", function(t) {
                    this.menuClick(null, "jump")
                }
                .bind(this), this)
            },
            onEnable: function() {
                this.timeVal = 10,
                this.timeText.string = " " + this.timeVal,
                this.schedule(this.countGameTime, 1, 10),
                this.jumpBtn.active = !1
            },
            onDisable: function() {
                this.unschedule(this.countGameTime)
            },
            countGameTime: function() {
                this.timeVal = this.timeVal - 1,
                this.timeText.string = " " + this.timeVal,
                7 == this.timeVal && (this.jumpBtn.active = !0),
                0 == this.timeVal && this.menuClick(null, "jump")
            },
            menuClick: function(t, e) {
                soundManager.playSound("btnClick"),
                "share" == e ? (SDK().fbEvent("clickshareBtn", 1),
                gameApplication.onShareBtnClick(function(t) {
                    t && (gameViewScript.boomCard(),
                    viewManager.popView("ReviveView", !1))
                }
                .bind(this))) : "video" == e ? (SDK().fbEvent("clickreliveBtn", 1),
                gameApplication.onVideoBtnClick(function(t) {
                    t && (gameViewScript.boomCard(),
                    viewManager.popView("ReviveView", !1))
                }
                .bind(this), 3)) : "jump" == e && (SDK().fbEvent("clickskipBtn", 1),
                viewManager.popView("ReviveView", !1),
                gameViewScript.clearData(),
                gameViewScript.showOver())
            },
            update: function(t) {}
        }),
        cc._RF.pop()
    }
    , {}],
    SDKUtils: [function(t, e, i) {
        "use strict";
        cc._RF.push(e, "d14deOZzBVA6bqNWaGWZ5SG", "SDKUtils");
        var n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        }
        : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        }
          , s = {};
        Math.sqrt(3);
        s.prefixInteger = function(t, e) {
            return (Array(e).join("0") + t).slice(-e)
        }
        ,
        s.offsetToAxial = function(t) {
            return t.x = t.x - Math.floor(t.y / 2),
            t
        }
        ,
        s.axialToScreen = function(t, e) {
            var i = e * t.y + .5 * e - t.y * lineWidth
              , n = e * t.x + .5 * e - t.x * lineWidth;
            return cc.v2(n, i)
        }
        ,
        s.screenToAxial = function(t, e) {
            var i = cc.v2(0, 0)
              , n = Math.abs(Math.round((t.y - .5 * e) / e))
              , s = Math.abs(Math.round((t.x - .5 * e) / e));
            return i.x = Math.floor((t.x + s * lineWidth) / e),
            i.y = Math.floor((t.y + n * lineWidth) / e),
            i
        }
        ,
        s.calculateCubicZ = function(t) {
            return -t.x - t.y
        }
        ,
        s.axialToOffset = function(t) {
            return t
        }
        ,
        s.getNeighbors = function(t) {
            var e = cc.v2(0, 0)
              , i = [];
            return e.x = t.x + 1,
            e.y = t.y,
            i.push(cc.v2(e.x, e.y)),
            e.x = t.x - 1,
            e.y = t.y,
            i.push(cc.v2(e.x, e.y)),
            e.x = t.x,
            e.y = t.y - 1,
            i.push(cc.v2(e.x, e.y)),
            e.x = t.x,
            e.y = t.y + 1,
            i.push(cc.v2(e.x, e.y)),
            i
        }
        ,
        s.getNeighborsOBJ = function(t) {
            var e = cc.v2(0, 0)
              , i = {};
            return e.x = t.x + 1,
            e.y = t.y,
            i.r = cc.v2(e.x, e.y),
            e.x = t.x - 1,
            e.y = t.y,
            i.l = cc.v2(e.x, e.y),
            e.x = t.x,
            e.y = t.y - 1,
            i.b = cc.v2(e.x, e.y),
            e.x = t.x,
            e.y = t.y + 1,
            i.t = cc.v2(e.x, e.y),
            i
        }
        ,
        s.isNeighbors = function(t, e) {
            for (var i = this.getNeighbors(t), n = !1, s = 0; s < i.length; s++)
                i[s].equals(e) && (n = !0);
            return n
        }
        ,
        s.cloneObj = function(t) {
            var e = t && t.constructor === Array ? [] : {};
            for (var i in t)
                if (t.hasOwnProperty(i)) {
                    if (!t[i]) {
                        e[i] = t[i];
                        continue
                    }
                    e[i] = "object" === n(t[i]) ? s.cloneObj(t[i]) : t[i]
                }
            return e
        }
        ,
        s.GetRandomNum = function(t, e) {
            switch (arguments.length) {
            case 1:
                return parseInt(Math.random() * t + 1, 10);
            case 2:
                return parseInt(Math.random() * (e - t + 1) + t, 10);
            default:
                return 0
            }
        }
        ,
        s.inArray = function(t, e) {
            for (var i = e.length; i--; )
                if (parseInt(e[i]) === parseInt(t))
                    return !0;
            return !1
        }
        ,
        e.exports = s,
        cc._RF.pop()
    }
    , {}],
    SettingView: [function(t, e, i) {
        "use strict";
        cc._RF.push(e, "64507eJPGxKyIteLWqvXb01", "SettingView"),
        cc.Class({
            extends: cc.Component,
            properties: {
                selectView: {
                    default: null,
                    type: cc.ScrollView
                },
                curLang: {
                    default: null,
                    type: cc.Label
                },
                curSprite: {
                    default: null,
                    type: cc.Sprite
                },
                selectContent: {
                    default: null,
                    type: cc.Node
                },
                selectItem: {
                    default: null,
                    type: cc.Node
                },
                musicToggle: {
                    default: [],
                    type: [cc.Toggle]
                }
            },
            onLoad: function() {
                this.initToggle()
            },
            onEnable: function() {
                soundManager.isBgOpen ? this.musicToggle[0].isChecked = !0 : this.musicToggle[0].isChecked = !1,
                soundManager.isOpen ? this.musicToggle[1].isChecked = !0 : this.musicToggle[1].isChecked = !1
            },
            initToggle: function() {
                SDK().getItem("curLang", function(t) {
                    null == t && (t = 0);
                    for (var e = 0; e < window.langArr.length; e += 1) {
                        var i = cc.instantiate(this.selectItem);
                        i.idx = e,
                        i.parent = this.selectContent,
                        i.toggle = i.getComponent(cc.Toggle),
                        e != t ? i.toggle.isChecked = !1 : (i.toggle.isChecked = !0,
                        this.curLang.string = window.langArr[e],
                        resManager.loadSprite("UISetting.lang" + e, function(t) {
                            this.curSprite.spriteFrame = t
                        }
                        .bind(this))),
                        cc.find("Name", i).getComponent(cc.Label).string = window.langArr[e],
                        this.setSprite(i, e),
                        i.on("toggle", this.languageSelect, this),
                        i.active = !0,
                        console.log()
                    }
                }
                .bind(this))
            },
            setSprite: function(t, e) {
                var i = cc.find("Sprite", t).getComponent(cc.Sprite);
                resManager.loadSprite("UISetting.lang" + e, function(t) {
                    i.spriteFrame = t
                }
                .bind(this))
            },
            languageSelect: function(t) {
                var e = t.target;
                e.toggle.isChecked && (this.curLang.string = window.langArr[e.idx],
                resManager.loadSprite("UISetting.lang" + e.idx, function(t) {
                    this.curSprite.spriteFrame = t
                }
                .bind(this)),
                SDK().setItem({
                    curLang: e.idx
                }, function() {
                    cc.director.loadScene("loadLanguage")
                }
                .bind(this)))
            },
            menuClick: function(t, e) {
                if (gameApplication.soundManager.playSound("btnClick"),
                "music" == e)
                    this.musicToggle[0].isChecked ? soundManager.setBgOpen(!0) : soundManager.setBgOpen(!1);
                else if ("sound" == e)
                    this.musicToggle[1].isChecked ? soundManager.setIsOpen(!0) : soundManager.setIsOpen(!1);
                else if ("select" == e) {
                    Math.abs(this.selectView.node.height - 400) < .01 ? viewManager.lerpAction(400, -400, .3, function(t) {
                        this.selectView.node.height = t.x,
                        Math.abs(this.selectView.node.height - 0) < 1 && (this.selectView.node.height = 0)
                    }
                    .bind(this)) : Math.abs(this.selectView.node.height - 0) < .01 && viewManager.lerpAction(0, 400, .3, function(t) {
                        this.selectView.node.height = t.x,
                        Math.abs(this.selectView.node.height - 400) < 1 && (this.selectView.node.height = 400)
                    }
                    .bind(this))
                }
            },
            start: function() {}
        }),
        cc._RF.pop()
    }
    , {}],
    SkinView: [function(t, e, i) {
        "use strict";
        cc._RF.push(e, "89cbcXseJBL5KWysUHvV8If", "SkinView"),
        cc.Class({
            extends: cc.Component,
            properties: {
                SkinsContent: {
                    default: null,
                    visible: !1
                },
                SkinItem: {
                    default: null,
                    visible: !1
                },
                unlockNum: {
                    default: null,
                    visible: !1
                },
                curSkinIdx: {
                    default: 0,
                    visible: !1
                },
                skinCount: {
                    default: 0,
                    visible: !1
                },
                skinsData: {
                    default: [],
                    visible: !1
                },
                skinsList: {
                    default: [],
                    visible: !1
                },
                select: {
                    default: null,
                    visible: !1
                },
                skinsNew: {
                    default: [],
                    visible: !1
                }
            },
            onLoad: function() {
                (window.skinView = this).SkinsContent = cc.find("Bg/Main/Skins/view/content", this.node).getComponent(cc.Layout),
                this.SkinItem = cc.find("Bg/Main/Skins/view/content/SkinItem", this.node),
                this.SkinsContent.spacingX = .5 * (this.SkinsContent.node.width - 390),
                this.unlockNum = cc.find("Bg/Main/Unlock/Num", this.node).getComponent(cc.Label),
                this.skinsData = gameViewScript.skinsData,
                this.skinsNew = gameViewScript.skinsNew
            },
            start: function() {
                cc.find("Bg/Main/Titel", this.node).active = !0
            },
            onEnable: function() {
                this.skinCount = 0,
                this.unlockNum.string = this.skinCount + "/" + this.skinsData.length,
                this.scheduleOnce(function() {
                    null != this.skinsData && null != this.skinsData && this.showSkins()
                }
                .bind(this), .5)
            },
            onDisable: function() {},
            showSkins: function() {
                for (var t = 0; t < this.skinsData.length; t += 1)
                    this.loadSkinItem(t)
            },
            loadSkinItem: function(e) {
                var i = this.skinsList[e];
                null == i && ((i = {}).main = cc.instantiate(this.SkinItem),
                i.pros = cc.find("Pros", i.main).getComponent("LocalizedLabel"),
                i.pros.dataID = "lang.skin" + e,
                i.skinImage = cc.find("SkinImage", i.main).getComponent(cc.Sprite),
                i.select = cc.find("Select", i.main),
                i.lockSprite = cc.find("LockSprite", i.main),
                i.newSprite = cc.find("NewSprite", i.main),
                resManager.loadSprite("GameSp." + e + "-card16", function(t) {
                    i.skinImage.spriteFrame = t
                }
                .bind(this)),
                i.main.parent = this.SkinsContent.node,
                (this.skinsList[e] = i).main.on("click", function(t) {
                    soundManager.playSound("btnClick"),
                    gameViewScript.levelNum[0] >= this.skinsData[e].need && ("N" != gameViewScript.curSkinIdx && (this.skinsList[gameViewScript.curSkinIdx].select.active = !1),
                    this.curSkinIdx = e,
                    i.select.active = !0,
                    gameViewScript.loadSkin(e),
                    this.skinsNew[e] = 1,
                    i.newSprite.active = !1,
                    dataManager.setStore("SkinNew", this.skinsNew))
                }
                .bind(this))),
                gameViewScript.curSkinIdx == e ? i.select.active = !0 : i.select.active = !1,
                1 <= gameViewScript.levelNum[0] / this.skinsData[e].need ? (i.lockSprite.active = !1,
                i.skinImage.node.active = !0,
                this.skinCount = 1 + this.skinCount,
                this.unlockNum.string = this.skinCount + "/" + this.skinsData.length,
                i.pros.node.active = !1,
                0 == this.skinsNew[e] ? i.newSprite.active = !0 : i.newSprite.active = !1) : (i.lockSprite.active = !0,
                i.skinImage.node.active = !1,
                i.pros.node.active = !0,
                i.newSprite.active = !1),
                i.main.active = !0
            },
            update: function(t) {}
        }),
        cc._RF.pop()
    }
    , {}],
    SoundManager: [function(t, e, i) {
        "use strict";
        cc._RF.push(e, "2e203tup99JJ5nSDvFuy7AM", "SoundManager");
        var n = ["Boom", "Discard", "Fail", "GetScore", "Over", "PutCard", "ScoreCard", "btnClick", "closePop", "pop"];
        cc.Class({
            extends: cc.Component,
            properties: {
                isOpen: {
                    default: !0,
                    visible: !1
                },
                isBgOpen: {
                    default: !0,
                    visible: !1
                },
                isVoiceOpen: {
                    default: !0,
                    visible: !1
                },
                audio: {
                    default: null,
                    tpye: cc.AudioClip
                }
            },
            onLoad: function() {
                window.soundManager = this
            },
            start: function() {
                this.preLoad()
            },
            preLoad: function() {
                for (var t = 0; t < n.length; t += 1)
                    resManager.loadSoundAsync(n[t], null)
            },
            loadBg: function() {
                resManager.loadClip("Bg", function(t) {
                    null != t ? (this.audio = t,
                    this.bg = cc.audioEngine.play(this.audio, !0, .2)) : console.log(soundtype + " soundClip not exist!")
                }
                .bind(this))
            },
            playSound: function(e) {
                this.isOpen && (null != resManager ? resManager.loadSoundAsync(e, function(t) {
                    null != t ? cc.audioEngine.play(t, !1, 1) : console.log(e + " soundClip not exist!")
                }
                .bind(this)) : console.log("resManeger not exist!(资源管理器不存在！)"))
            },
            playBg: function() {
                this.isBgOpen ? this.bg = cc.audioEngine.play(this.audio, !1, 1) : cc.audioEngine.stop(this.bg)
            },
            setBgOpen: function(t) {
                if (this.isBgOpen = t,
                this.isBgOpen)
                    try {
                        null != str && HiboGameJs.mute(0)
                    } catch (t) {}
                else
                    try {
                        null != str && HiboGameJs.mute(1)
                    } catch (t) {}
                this.playBg()
            },
            setIsOpen: function(t) {
                if (this.isOpen = t,
                this.isOpen)
                    try {
                        null != str && HiboGameJs.mute(0)
                    } catch (t) {}
                else
                    try {
                        null != str && HiboGameJs.mute(1)
                    } catch (t) {}
            },
            setVoiceIsOpen: function(t) {
                if (this.isVoiceOpen = t)
                    try {
                        null != str && HiboGameJs.enableMic(0)
                    } catch (t) {}
                else
                    try {
                        null != str && HiboGameJs.enableMic(1)
                    } catch (t) {}
            }
        }),
        cc._RF.pop()
    }
    , {}],
    SpriteAnimation: [function(t, e, i) {
        "use strict";
        cc._RF.push(e, "2d7c3U6Dp1OyJSvStQhSQ7o", "SpriteAnimation"),
        cc.Class({
            extends: cc.Component,
            properties: {
                isPlay: !1,
                loop: !0,
                sprite: {
                    default: null,
                    type: cc.Sprite
                },
                shadow: {
                    default: null,
                    type: cc.Sprite
                },
                itemId: {
                    default: null,
                    visible: !1
                },
                animCount: {
                    default: 0,
                    type: cc.Integer,
                    visible: !1
                },
                sprites: {
                    default: [],
                    type: [cc.SpriteFrame],
                    visible: !1
                },
                spritesArray: {
                    default: [],
                    visible: !1
                },
                fps: {
                    default: 5,
                    type: cc.Integer,
                    visible: !1
                },
                delta: {
                    default: 0,
                    type: cc.Integer,
                    visible: !1
                },
                index: {
                    default: 0,
                    type: cc.Integer,
                    visible: !1
                },
                wait: {
                    default: 0,
                    type: cc.Integer,
                    visible: !1
                },
                waitDelta: {
                    default: 0,
                    type: cc.Integer,
                    visible: !1
                },
                gameAtlas: {
                    default: null,
                    type: cc.SpriteAtlas
                },
                isInited: {
                    default: !1,
                    visible: !1
                },
                isRotat: {
                    default: !0,
                    visible: !1
                },
                oPoint: {
                    default: cc.v2(0, 0),
                    visible: !1
                },
                callback: {
                    default: null,
                    visible: !1
                }
            },
            playSprites: function(t, e, i, n, s, o, a, c, r) {
                var l = this;
                if (this.animCount = 8,
                this.fps = s,
                this.wait = 0,
                this.waitDelta = 0,
                this.scale = null == c ? 1 : c,
                null == i && (i = 0),
                this.isReset = o,
                this.loop = null == a || a,
                this.isRotat = !1,
                this.isInited && this.itemId == t && null != l.spritesArray[t][n])
                    l.sprites = l.spritesArray[t][n],
                    this.play(r);
                else {
                    this.itemId = t,
                    l.spritesArray[t] = [],
                    l.spritesArray[t][n] = [],
                    l.sprites = l.spritesArray[t][n];
                    for (var u = i; u < i + e; u += 1) {
                        var d = this.gameAtlas.getSpriteFrame(this.itemId + u);
                        l.spritesArray[t][n].push(d)
                    }
                    l.isInited = !0,
                    null != l.sprites.length && 0 < l.sprites.length && l.play(r)
                }
            },
            playSpriteByIdx: function(t, e, i) {
                this.sprite.spriteFrame = this.gameAtlas.getSpriteFrame(t + e),
                this.isPlay = !1
            },
            playSpriteByName: function(t, e, i) {
                this.sprite.spriteFrame = this.gameAtlas.getSpriteFrame(t + e),
                this.isPlay = !1
            },
            play: function(t) {
                this.index = 0,
                this.isPlay = !0,
                this.node.scale = this.scale,
                this.node.opacity = 255,
                null != this.shadow && (this.shadow.node.active = !0),
                null != t && (this.callback = t)
            },
            reSet: function() {
                this.index = 0,
                null != this.sprite && (this.sprite.spriteFrame = this.sprites[this.index]),
                this.isPlay = !1,
                this.node.opacity = 255,
                this.node.setRotation(0),
                null != this.shadow && (this.shadow.node.active = !1,
                this.shadow.node.setRotation(0)),
                null != this.callback && this.callback()
            },
            update: function(t) {
                if (null != this.shadow) {
                    var e = this.shadow.node.position
                      , i = cc.v2(this.node.position.x + 10, this.node.position.y - 10);
                    e != i && (this.shadow.node.position = i)
                }
                if (0 < this.wait && this.waitDelta < this.wait)
                    this.waitDelta += t;
                else if (this.isPlay && 0 < this.fps && 0 < this.sprites.length) {
                    this.delta += t;
                    var n = 1 / this.fps;
                    n < this.delta && (this.delta = 0 < n ? this.delta - n : 0,
                    this.sprite.spriteFrame = this.sprites[this.index],
                    null != this.shadow && (this.shadow.spriteFrame = this.sprites[this.index]),
                    this.index + 1 == this.sprites.length && (this.waitDelta = 0,
                    this.loop || (this.isPlay = !1),
                    this.isReset && this.reSet()),
                    this.index = this.index + 1 >= this.sprites.length ? 0 : this.index + 1)
                }
            }
        }),
        cc._RF.pop()
    }
    , {}],
    SpriteFrameSet: [function(t, e, i) {
        "use strict";
        cc._RF.push(e, "97019Q80jpE2Yfz4zbuCZBq", "SpriteFrameSet");
        var n = cc.Class({
            name: "SpriteFrameSet",
            properties: {
                language: "",
                spriteFrame: cc.SpriteFrame
            }
        });
        e.exports = n,
        cc._RF.pop()
    }
    , {}],
    Utils: [function(t, e, i) {
        "use strict";
        cc._RF.push(e, "3e427LrtQhKv7l/kjbf8v9+", "Utils");
        var n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        }
        : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        }
          , s = {}
          , u = Math.sqrt(3);
        s.offsetToAxial = function(t) {
            return t.x = t.x - Math.floor(t.y / 2),
            t
        }
        ,
        s.axialToScreen = function(t, e) {
            var i = e * t.y + .5 * e - t.y * lineWidth
              , n = e * t.x + .5 * e - t.x * lineWidth;
            return cc.v2(n, i)
        }
        ,
        s.screenToAxial = function(t, e) {
            var i = cc.v2(0, 0);
            i.y = t.x / (1.5 * e),
            i.x = (t.y - t.x / u) / (u * e);
            var n = this.calculateCubicZ(i)
              , s = Math.round(i.x)
              , o = Math.round(i.y)
              , a = Math.round(n);
            if (s + o + a == 0)
                t.x = s,
                t.y = o;
            else {
                var c = Math.abs(i.x - s)
                  , r = Math.abs(i.y - o)
                  , l = Math.abs(n - a);
                r < c && l < c ? (t.x = -o - a,
                t.y = o) : c < r && l < r ? (t.x = s,
                t.y = -s - a) : c < l && r < l && (t.x = s,
                t.y = o)
            }
            return t
        }
        ,
        s.calculateCubicZ = function(t) {
            return -t.x - t.y
        }
        ,
        s.axialToOffset = function(t) {
            return t.x = t.x + Math.floor(t.y / 2),
            t
        }
        ,
        s.getNeighbors = function(t) {
            var e = cc.v2(0, 0)
              , i = [];
            return e.x = t.x + 1,
            e.y = t.y,
            i.push(cc.v2(e.x, e.y)),
            e.x = t.x - 1,
            e.y = t.y,
            i.push(cc.v2(e.x, e.y)),
            e.x = t.x,
            e.y = t.y - 1,
            i.push(cc.v2(e.x, e.y)),
            e.x = t.x,
            e.y = t.y + 1,
            i.push(cc.v2(e.x, e.y)),
            i
        }
        ,
        s.getNeighborsOBJ = function(t) {
            var e = cc.v2(0, 0)
              , i = {};
            return e.x = t.x + 1,
            e.y = t.y,
            i.r = cc.v2(e.x, e.y),
            e.x = t.x - 1,
            e.y = t.y,
            i.l = cc.v2(e.x, e.y),
            e.x = t.x,
            e.y = t.y - 1,
            i.b = cc.v2(e.x, e.y),
            e.x = t.x,
            e.y = t.y + 1,
            i.t = cc.v2(e.x, e.y),
            i
        }
        ,
        s.isNeighbors = function(t, e) {
            for (var i = this.getNeighbors(t), n = !1, s = 0; s < i.length; s++)
                i[s].equals(e) && (n = !0);
            return n
        }
        ,
        s.cloneObj = function(t) {
            var e = t && t.constructor === Array ? [] : {};
            for (var i in t)
                if (t.hasOwnProperty(i)) {
                    if (!t[i]) {
                        e[i] = t[i];
                        continue
                    }
                    e[i] = "object" === n(t[i]) ? s.cloneObj(t[i]) : t[i]
                }
            return e
        }
        ,
        s.GetRandomNum = function(t, e) {
            switch (arguments.length) {
            case 1:
                return parseInt(Math.random() * t + 1, 10);
            case 2:
                return parseInt(Math.random() * (e - t + 1) + t, 10);
            default:
                return 0
            }
        }
        ,
        s.inArray = function(t, e) {
            for (var i = e.length; i--; )
                if (parseInt(e[i]) === parseInt(t))
                    return !0;
            return !1
        }
        ,
        e.exports = s,
        cc._RF.pop()
    }
    , {}],
    ViewManager: [function(t, e, i) {
        "use strict";
        cc._RF.push(e, "bdc085+axJNRJ+ly2Kx9a/o", "ViewManager"),
        cc.Class({
            extends: cc.Component,
            properties: {
                idxList: {
                    default: {},
                    visible: !1
                },
                viewList: {
                    default: [],
                    type: [cc.Node],
                    visible: !1
                },
                popSaver: {
                    default: {},
                    visible: !1
                },
                curPopList: {
                    default: [],
                    type: [cc.Node],
                    visible: !1
                },
                curDir: {
                    default: 0,
                    visible: !1
                }
            },
            judgeDir: function(t) {
                Math.random();
                null != t ? (2,
                this.curDir = t ? 2 : 4) : this.curDir = 1
            },
            showView: function(e, i, n) {
                var s = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null
                  , o = 4 < arguments.length && void 0 !== arguments[4] ? arguments[4] : null
                  , a = 5 < arguments.length && void 0 !== arguments[5] ? arguments[5] : 0;
                null == s ? this.judgeDir(n) : this.curDir = s;
                var t = this.idxList[e];
                if (null == t) {
                    var c = cc.find("Canvas");
                    if (null == (r = cc.find(e, c)))
                        return void resManager.loadPrefab(e, function(t) {
                            null != (r = cc.instantiate(t)) && (r.parent = c,
                            this.showView(e, i, n, s, o, a))
                        }
                        .bind(this));
                    if (r.width = cc.winSize.width,
                    r.height = cc.winSize.height,
                    null == r)
                        return void console.log(e + " is not found");
                    t = this.viewList.length,
                    this.idxList[e] = t,
                    (this.viewList[t] = r).width = cc.winSize.width,
                    r.height = cc.winSize.height
                }
                for (var r = this.viewList[t], l = 0; l < this.viewList.length; l += 1)
                    r != this.viewList[l] && this.viewList[l].active && i && (this.viewList[l].stopAllActions(),
                    this.showAnim(this.viewList[l], !1, 0, null));
                return this.showAnim(r, i, a, o),
                r
            },
            showAnim: function(t, e, i, n) {
                (e && 0 == t.active || !e && 1 == t.active) && (t.stopAllActions(),
                e && t.setSiblingIndex(t.parent.childrenCount),
                this.showType(2, t, e, i, n))
            },
            showType: function(t, e, i, n, s) {
                var o = null;
                switch (t) {
                case 0:
                    i ? (e.opacity = 0,
                    e.active = !0,
                    o = cc.sequence(cc.fadeIn(.5).easing(cc.easeSineIn(2)), cc.delayTime(n), cc.callFunc(function() {
                        null != s && s(e),
                        this.noBtnMask(!1, e)
                    }
                    .bind(this), this))) : (this.noBtnMask(!0, e),
                    o = cc.sequence(cc.fadeOut(.5).easing(cc.easeSineIn(2)), cc.callFunc(function() {
                        e.active = !1,
                        null != s && s(e)
                    }
                    .bind(this))));
                    break;
                case 1:
                    i ? (e.scale = 0,
                    e.active = !0,
                    o = cc.sequence(cc.scaleTo(.5, 1).easing(cc.easeBounceOut(2)), cc.delayTime(n), cc.callFunc(function() {
                        null != s && s(),
                        this.noBtnMask(!1, e)
                    }
                    .bind(this), this))) : (this.noBtnMask(!0, e),
                    o = cc.sequence(cc.scaleTo(.5, 0).easing(cc.easeSineIn(2)), cc.callFunc(function() {
                        e.active = !1,
                        null != s && s()
                    }
                    .bind(this))));
                    break;
                case 2:
                    var a;
                    1 == this.curDir ? a = cc.v2(cc.winSize.width, 0) : 2 == this.curDir ? a = cc.v2(0, cc.winSize.height) : 3 == this.curDir ? a = cc.v2(-cc.winSize.width, 0) : 4 == this.curDir && (a = cc.v2(0, -cc.winSize.height)),
                    i ? (e.active = !0,
                    e.setPosition(a.x, a.y),
                    o = cc.sequence(cc.moveTo(.5, cc.v2(0, 0)).easing(cc.easeSineIn(2)), cc.delayTime(n), cc.callFunc(function() {
                        null != s && s(),
                        this.noBtnMask(!1, e)
                    }
                    .bind(this), this))) : (this.noBtnMask(!0, e),
                    o = cc.sequence(cc.moveTo(.5, cc.v2(-a.x, -a.y)).easing(cc.easeSineIn(2)), cc.callFunc(function() {
                        e.active = !1,
                        null != s && s()
                    }
                    .bind(this))))
                }
                null != o && (e.stopAllActions(),
                this.scheduleOnce(function() {
                    e.runAction(o)
                }
                .bind(this), .1))
            },
            initPopView: function() {
                resManager.loadConfig("ResourceList", function(t) {
                    var e = t.popViewList;
                    this.closeCount = 0,
                    this.loadAction(e, e.length, 0)
                }
                .bind(this))
            },
            loadAction: function(e, i, n) {
                this.popView(e[n], !0, function() {
                    var t = n;
                    (n += 1) < i && this.loadAction(e, i, n),
                    this.popAnim(this.popSaver[e[t]], !1, function() {
                        this.closeCount = this.closeCount + 1,
                        this.node.emit("loadPop", {
                            pro: this.closeCount / i
                        })
                    }
                    .bind(this), !0)
                }
                .bind(this))
            },
            closePop: function(t) {
                this.popView(t, !1, null)
            },
            popView: function(t, e, i) {
                var n = this.popSaver[t];
                if (1 != n)
                    if (null == n) {
                        var s = cc.find("Canvas")
                          , o = cc.find(t, s);
                        null == o ? (this.popSaver[t] = 1,
                        resManager.loadPrefab(t, function(t) {
                            (n = cc.instantiate(t)).width = cc.winSize.width,
                            n.height = cc.winSize.height,
                            this.savePop(n, e, i)
                        }
                        .bind(this))) : this.savePop(o, e, i)
                    } else
                        this.popAnim(n, e, i)
            },
            savePop: function(e, t, i) {
                if (null != e) {
                    var n = cc.find("Bg/Close", e);
                    n.off("click"),
                    n.on("click", function(t) {
                        this.closePop(e.name),
                        soundManager.playSound("btnClick")
                    }, this);
                    var s = cc.find("Canvas");
                    e.parent = s,
                    this.popSaver[e.name] = e,
                    this.popAnim(e, t, i, !0)
                }
            },
            popAnim: function(n, t, e) {
                var i = cc.find("Bg", n)
                  , s = i.getComponent(cc.Widget);
                null != s && s.updateAlignment();
                if (t) {
                    i.scale = 0,
                    n.x = 0,
                    n.active = !0,
                    soundManager.playSound("pop"),
                    n.setSiblingIndex(n.parent.childrenCount),
                    i.runAction(cc.sequence(cc.scaleTo(.5, 1).easing(cc.easeElasticOut(3)), cc.callFunc(function() {
                        null != e && e(n)
                    }
                    .bind(this), this)));
                    var o = this.curPopList.pop();
                    if (null != o && null != o) {
                        var a = this.popSaver[o];
                        o != n.name && (a.active = !1,
                        this.curPopList.push(o))
                    }
                    this.curPopList.push(n.name)
                } else {
                    soundManager.playSound("closePop"),
                    i.runAction(cc.sequence(cc.scaleTo(.3, 0).easing(cc.easeBackIn(3)), cc.callFunc(function() {
                        n.active = !1,
                        null != e && e(n)
                    }
                    .bind(this), this)));
                    var c = this.curPopList.findIndex(function(t, e, i) {
                        return t == n.name
                    });
                    0 <= c && this.curPopList.splice(c, 1);
                    var r = this.curPopList.pop();
                    if (null != r && null != r) {
                        var l = this.popSaver[r];
                        r != n.name && (l.active = !0,
                        this.curPopList.push(r))
                    }
                }
            },
            noBtnMask: function(t, e) {
                var i = cc.find("noBtn", e);
                null == i && ((i = new cc.Node("noBtn")).addComponent(cc.BlockInputEvents),
                i.width = cc.winSize.width,
                i.height = cc.winSize.height),
                i.active = t
            },
            closePopView: function(t, e) {
                this.popView(t, !1, e)
            },
            removeView: function(t) {
                var e = this.viewList[this.idxList[t]];
                this.idxList[t] = null;
                for (var i = 0; i < this.viewList.length; i += 1)
                    e == this.viewList[i] && (this.viewList[i] = null)
            },
            getUIPosition: function(t, e) {
                var i = t.parent.convertToWorldSpaceAR(t.position);
                return e.convertToNodeSpaceAR(i)
            },
            lerpAction: function(t, e, i, n, s) {
                null == this.agent && (this.agent = {}),
                null == this.agent[s] && (this.agent[s] = new cc.Node("agent"),
                this.agent[s].x = 0),
                this.agent[s].stopAllActions();
                var o = this.agent[s];
                null != t && (o.x = t);
                var a = i / .02
                  , c = e / a;
                o.runAction(cc.repeat(cc.sequence(cc.callFunc(function() {
                    n(o)
                }
                .bind(this), this), cc.moveBy(.02, cc.v2(c, 0))), a + 1))
            },
            stopLerpAction: function(t) {
                null != this.agent[t] && this.agent[t].stopAllActions()
            },
            stopAllLerpActions: function() {
                for (var t in this.agent)
                    null != this.agent[t] && this.agent[t].stopAllActions()
            },
            onLoad: function() {
                window.viewManager = this
            }
        }),
        cc._RF.pop()
    }
    , {}],
    facebook: [function(t, e, i) {
        "use strict";
        cc._RF.push(e, "6542a5UC9RCqLxrtQE6lpYc", "facebook");
        var n, s = "AD_LOADING", o = "AD_LOAD_SUCCESS", a = "AD_COMPLETE", c = ["2200690683581481_2200692466914636", "2200690683581481_2200692603581289", "2200690683581481_2200692736914609", "2200690683581481_2200692873581262", "2200690683581481_2200692870247929"], r = ["2200690683581481_2200694403581109", "2200690683581481_2200694600247756"], l = "Friends", u = "world", d = {}, h = function() {
            this.cb = null,
            this.videoAd = [],
            this.videoAdState = [],
            this.InterstitialAd = [],
            this.InterstitialAdState = [],
            this.playTimes = 0,
            this.MyPlayer = {},
            this.sdk_ad = null
        };
        h.prototype.init = function(t) {
            if ("undefined" != typeof FBInstant) {
                for (var e = this.playTimes = 0; e < c.length; e += 1)
                    this.loadVideoAd(e);
                for (e = 0; e < r.length; e += 1)
                    this.loadInterstitialAd(e);
                d.name = FBInstant.player.getName(),
                cc.loader.load(FBInstant.player.getPhoto(), function(t, e) {
                    d.head = new cc.SpriteFrame(e)
                }),
                d.id = FBInstant.player.getID(),
                this.MyPlayer = d;
                this.getLocale();
                FBInstant.player.canSubscribeBotAsync().then(function(t) {
                    return console.log(t)
                }),
                null != t && t()
            } else
                null != t && t()
        }
        ,
        h.prototype.sePros = function(t) {
            "undefined" != typeof FBInstant && FBInstant.setLoadingProgress(t)
        }
        ,
        h.prototype.fbEvent = function(t, e) {
            "undefined" != typeof FBInstant && FBInstant.logEvent(t, e)
        }
        ,
        h.prototype.getItem = function(e, i, t) {
            var n;
            "undefined" == typeof FBInstant ? (void 0 !== (n = null != t ? cc.sys.localStorage.getItem(e) : JSON.parse(cc.sys.localStorage.getItem(e))) && null != n && "null" != n || (n = "guideStep" == e ? -1 : 0),
            i(n, e)) : FBInstant.player.getDataAsync(["" + e]).then(function(t) {
                n = void 0 === t[e] ? "guideStep" == e ? -1 : 0 : t[e],
                i(n, e)
            })
        }
        ,
        h.prototype.setItem = function(t, e) {
            if ("undefined" == typeof FBInstant) {
                for (var i in t)
                    cc.sys.localStorage.setItem(i, t[i]);
                null != e && e()
            } else
                FBInstant.player.setDataAsync(t).then(function() {
                    null != e && e()
                })
        }
        ,
        h.prototype.getLocale = function() {
            if ("undefined" != typeof FBInstant)
                return FBInstant.getLocale()
        }
        ,
        h.prototype.getGameId = function() {
            return "2200690683581481"
        }
        ,
        h.prototype.getName = function() {
            return "undefined" == typeof FBInstant ? "undefined" : FBInstant.player.getName()
        }
        ,
        h.prototype.canCreateShortcutAsync = function(e) {
            "undefined" != typeof FBInstant && FBInstant.canCreateShortcutAsync().then(function(t) {
                t ? FBInstant.createShortcutAsync().then(function() {
                    null != e && e(!0)
                }).catch(function() {
                    null != e && e(!1)
                }) : null != e && e(!1)
            })
        }
        ,
        h.prototype.switchGameAsync = function(t) {
            if ("undefined" == typeof FBInstant)
                return !1;
            FBInstant.switchGameAsync(t).catch(function(t) {})
        }
        ,
        h.prototype.getCatalogAsync = function(e) {
            "undefined" != typeof FBInstant ? FBInstant.payments.getCatalogAsync().then(function(t) {
                console.log(t),
                e(t)
            }).catch(function(t) {
                console.log(t),
                e([])
            }) : null != e && e([])
        }
        ,
        h.prototype.purchaseAsync = function(t, e, i) {
            t = "" + t,
            "undefined" != typeof FBInstant ? FBInstant.payments.purchaseAsync({
                productID: t,
                developerPayload: t
            }).then(function(t) {
                i(t)
            }).catch(function(t) {
                console.log(t),
                i(!1, null)
            }) : null != i && i(!0, {})
        }
        ,
        h.prototype.getPurchasesAsync = function(e) {
            "undefined" != typeof FBInstant ? FBInstant.payments.getPurchasesAsync().then(function(t) {
                e(t)
            }).catch(function(t) {
                e([])
            }) : null != e && e(!1, null)
        }
        ,
        h.prototype.consumePurchaseAsync = function(t, e) {
            "undefined" != typeof FBInstant ? FBInstant.payments.consumePurchaseAsync(t).then(function() {
                e(!0)
            }).catch(function(t) {
                e(!1)
            }) : null != e && e(!0, {})
        }
        ,
        h.prototype.playWith = function(t, e, i) {
            if ("undefined" != typeof FBInstant) {
                var n = this;
                FBInstant.context.createAsync(t).then(function() {
                    n.doShare(e, 5),
                    i(null != i)
                }).catch(i(!1))
            } else
                null != i && i(!0)
        }
        ,
        h.prototype.share = function(t, e, i) {
            if ("undefined" != typeof FBInstant) {
                var n = this;
                FBInstant.context.chooseAsync().then(function() {
                    n.doShare(t, i),
                    null != e && e(!0)
                }).catch(function(t) {
                    null != t.code && "SAME_CONTEXT" == t.code && null != e && e(!1)
                })
            } else
                null != e && e(!0)
        }
        ,
        h.prototype.doShare = function(t, e) {
            var a = this.getName() + "Let's play together?";
            0 == e ? a = "I already surpassed you!" : 1 == e ? a = "I'm one step away from success. I need your help!" : 2 == e ? a = FBInstant.player.getName() + " doesn't think you can win at 2048 Solitaire Can you prove them wrong?" : 3 == e ? a = "The most enjoyable 2048 game ever. Come play with me now!" : 4 == e ? a = FBInstant.player.getName() + " just overtook you! Do you think you can beat him? Challenge him now!" : 5 == e && (a = "Dare to accept my challenge?");
            var i = "texture2d/share" + Math.floor(2.99 * Math.random());
            cc.loader.loadRes(i, cc.Texture2D, function(t, e) {
                var i = document.createElement("canvas")
                  , n = i.getContext("2d");
                i.width = 600,
                i.height = 420;
                var s = e.getHtmlElementObj();
                n.drawImage(s, 0, 0);
                var o = i.toDataURL("image/png");
                FBInstant.updateAsync({
                    action: "CUSTOM",
                    cta: "Play",
                    image: o,
                    text: {
                        default: a,
                        localizations: {}
                    },
                    template: "play_turn",
                    data: {
                        myReplayData: "..."
                    },
                    strategy: "IMMEDIATE",
                    notification: "NO_PUSH"
                }).then(function() {})
            }
            .bind(this))
        }
        ,
        h.prototype.shareBestScore3Times = function(n) {
            SDK().getItem("share_times", function(t) {
                var e = Math.floor(Date.now() / 1e3);
                if (null == t || t <= 0 || t - e < 0) {
                    var i = {};
                    i.share_times = e + 180,
                    SDK().setItem(i, function() {
                        SDK().shareBestScore(n)
                    })
                }
            })
        }
        ,
        h.prototype.shareBestScore = function(t, e) {
            null != t && "" != t || (t = "all"),
            this.getItem(t, function(t) {
                SDK().share(t, function(t) {
                    e && e(t)
                })
            }
            .bind(this))
        }
        ,
        h.prototype.plusPlayTimes = function() {
            this.playTimes++,
            this.showInterstitialAd(function(t) {
                console.log("播放Done")
            }, 0)
        }
        ,
        h.prototype.openVideoAd = function() {
            return !0
        }
        ,
        h.prototype.openinterstitialAd = function() {
            return !0
        }
        ,
        h.prototype.getInterstitialCount = function() {
            return 2
        }
        ,
        h.prototype.isPlayOpAD = function() {
            return 10 * Math.random() <= 0
        }
        ,
        h.prototype.loadInterstitialAd = function(e) {
            "undefined" != typeof FBInstant && this.openinterstitialAd() && FBInstant.getInterstitialAdAsync(r[e]).then(function(t) {
                return this.InterstitialAd[e] = t,
                this.InterstitialAdState[e] = s,
                this.InterstitialAd[e].loadAsync()
            }
            .bind(this)).catch(function(t) {}
            .bind(this)).then(function() {
                this.InterstitialAdState[e] = o
            }
            .bind(this))
        }
        ,
        h.prototype.showInterstitialAd = function(e, i) {
            if (null != this.InterstitialAd[i]) {
                if ("undefined" == typeof FBInstant)
                    return void (e && e(!1));
                this.InterstitialAd[i].showAsync().then(function() {
                    this.InterstitialAdState[i] = a,
                    e && e(!0),
                    this.loadInterstitialAd(i)
                }
                .bind(this)).catch(function(t) {
                    this.InterstitialAdState[i] = a,
                    e && e(!1)
                }
                .bind(this))
            } else
                e && e(!1),
                this.loadInterstitialAd(i)
        }
        ,
        h.prototype.loadVideoAd = function(e) {
            "undefined" != typeof FBInstant && FBInstant.getRewardedVideoAsync(c[e]).then(function(t) {
                return this.videoAd[e] = t,
                this.videoAdState[e] = s,
                this.videoAd[e].loadAsync()
            }
            .bind(this)).then(function() {
                this.videoAdState[e] = o
            }
            .bind(this)).catch(function(t) {
                this.videoAdState[e] = s
            }
            .bind(this))
        }
        ,
        h.prototype.hasVideoAd = function() {
            return "undefined" != typeof FBInstant && 0 < this.videoAd.length
        }
        ,
        h.prototype.showVideoAd = function(e, i) {
			//埋点 激励回调。 完整激励 e&&e(1); 失败：e&&e(0);
			console.log("root video");
			e && e(1);
           /* "undefined" != typeof FBInstant ? null != this.videoAd[i] ? (console.log("show video ad start"),
            this.videoAd[i].showAsync().then(function() {
                this.videoAdState[i] = a,
                e && e(!0),
                this.loadVideoAd(i)
            }
            .bind(this)).catch(function(t) {
                this.videoAdState[i] = a,
                e && e(!1),
                this.loadVideoAd(i)
            }
            .bind(this))) : (console.log("show video ad Stop"),
            e && e(!1),
            this.loadVideoAd(i)) : e && e(!0)*/
        }
        ,
        h.prototype.getSelfInfo = function() {
            if ("undefined" == typeof FBInstant) {
                Math.random();
                return {
                    id: 1
                }
            }
            return d
        }
        ,
        h.prototype.setRankScore = function(t, e, i, n) {
			//埋点 上报分数
			console.log("score:" + e);
			
            if ("undefined" == typeof FBInstant)
                console.log("set rank fail");
            else {
                var s, o = FBInstant.context.getID();
                if (null != o && (o = "." + o),
                1 == t) {
                    if (s = l,
                    null == o)
                        return void (o = "")
                } else {
                    if (2 != t)
                        return null != n && n("wrong type"),
                        void console.log("wrong type");
                    s = u,
                    o = ""
                }
                FBInstant.getLeaderboardAsync(s + o).then(function(t) {
                    return t.setScoreAsync(e, i)
                }).then(function() {
                    return console.log("Score saved")
                }).catch(function(t) {
                    return console.error(t)
                })
            }
        }
        ,
        h.prototype.getRankScore = function(t, i) {
            if ("undefined" == typeof FBInstant)
                console.log("get self rank fail");
            else {
                var e, n = FBInstant.context.getID();
                if (null != n && (n = "." + n),
                1 == t) {
                    if (e = l,
                    null == n)
                        return void (n = "")
                } else {
                    if (2 != t)
                        return null != i && i("wrong type"),
                        void console.log("wrong type");
                    e = u,
                    n = ""
                }
                FBInstant.getLeaderboardAsync(e + n).then(function(t) {
                    return t.getPlayerEntryAsync()
                }).then(function(t) {
                    var e;
                    null != t && ((e = {}).id = t.getPlayer().getID(),
                    e.no = t.getRank(),
                    e.name = t.getPlayer().getName(),
                    e.score = t.getScore(),
                    e.headUrl = t.getPlayer().getPhoto()),
                    i(e)
                }).catch(function(t) {
                    return console.error(t)
                })
            }
        }
        ,
        h.prototype.getPercent = function(e) {
            "undefined" == typeof FBInstant ? (console.log("get rank fail"),
            null != e && e()) : FBInstant.getLeaderboardAsync("World").then(function(t) {
                return t.getEntryCountAsync()
            }).then(function(t) {
                null != e && e(t)
            })
        }
        ,
        h.prototype.getWorldRank = function(t, e, i, n) {
            if ("undefined" == typeof FBInstant)
                console.log("get rank fail");
            else {
                var s, o = FBInstant.context.getID();
                if (null != o && (o = "." + o),
                1 == t) {
                    if (s = l,
                    null == o)
                        return o = "",
                        void (null != n && n([]))
                } else {
                    if (2 != t)
                        return null != n && n("wrong type"),
                        void console.log("wrong type");
                    s = u,
                    o = ""
                }
                var a = [];
                FBInstant.getLeaderboardAsync(s + o).then(function(t) {
                    return t.getEntriesAsync(e, i)
                }).then(function(t) {
                    for (var e = 0; e < t.length; e++)
                        a[e] = {},
                        a[e].id = t[e].getPlayer().getID(),
                        a[e].no = t[e].getRank(),
                        a[e].name = t[e].getPlayer().getName(),
                        a[e].score = t[e].getScore(),
                        a[e].headUrl = t[e].getPlayer().getPhoto(),
                        a[e].ext = t[e].getExtraData();
                    null != n && n(a)
                }).catch(function(t) {
                    return console.error(t)
                })
            }
        }
        ,
        h.prototype.getFriendRank = function(t, i) {
            if ("undefined" == typeof FBInstant)
                console.log("getFriendsInfo fail"),
                null != i && i({});
            else {
                var e, n = FBInstant.context.getID();
                if (null != n && (n = "." + n),
                1 == t) {
                    if (e = l,
                    null == n)
                        return console.log(FBInstant.context.getType()),
                        n = "",
                        void (null != i && i([]))
                } else {
                    if (2 != t)
                        return null != i && i("wrong type"),
                        void console.log("wrong type");
                    e = u,
                    n = ""
                }
                var s = [];
                FBInstant.getLeaderboardAsync(e + n).then(function(t) {
                    return t.getConnectedPlayerEntriesAsync()
                }).then(function(t) {
                    for (var e = 0; e < t.length; e += 1)
                        s[e] = {},
                        s[e].id = t[e].getPlayer().getID(),
                        s[e].name = t[e].getPlayer().getName(),
                        s[e].headUrl = t[e].getPlayer().getPhoto(),
                        s[e].no = t[e].getRank(),
                        s[e].score = t[e].getScore(),
                        s[e].ext = t[e].getExtraData();
                    null != i && i(s)
                })
            }
        }
        ,
        h.prototype.postRankToMessage = function(t, e) {
            if ("undefined" == typeof FBInstant)
                console.log("post rank fail");
            else {
                var i, n = FBInstant.context.getID();
                if (null != n && (n = "." + n),
                1 == t) {
                    if (i = l,
                    null == n)
                        return void (n = "")
                } else {
                    if (2 != t)
                        return null != e && e("wrong type"),
                        void console.log("wrong type");
                    i = u,
                    n = ""
                }
                FBInstant.updateAsync({
                    action: "LEADERBOARD",
                    name: i + n
                }).then(function() {
                    return console.log("Update Posted")
                }).catch(function(t) {
                    return console.error(t)
                })
            }
        }
        ,
        h.prototype.getTime = function(e) {
            FBInstant.getLeaderboardAsync("time").then(function(t) {
                return t.setScoreAsync(9001).then(function(t) {
                    console.log(t.getTimestamp()),
                    null != e && e(t.getTimestamp())
                })
            })
        }
        ,
        e.exports = function() {
            return n || (n = new h),
            n
        }
        ,
        cc._RF.pop()
    }
    , {}],
    globals: [function(t, e, i) {
        "use strict";
        cc._RF.push(e, "f774aa2KJxEp68y3WRvT7GZ", "globals"),
        window.SDK = t("../SDK/facebook"),
        window.playTimesAD = 2,
        window.isDebug = !1,
        window.lineWidth = 6,
        window.plusHelp = 5,
        window.openAllLevel = !1,
        window.langArr = ["English"],
        window.nameArr = ["en", "pt", "es", "in", "zh"],
        cc._RF.pop()
    }
    , {
        "../SDK/facebook": "facebook"
    }],
    "polyglot.min": [function(t, e, i) {
        "use strict";
        cc._RF.push(e, "e26fd9yy65A4q3/JkpVnFYg", "polyglot.min");
        var n, s, o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        }
        : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        }
        ;
        n = void 0,
        s = function(e) {
            function t(t) {
                t = t || {},
                this.phrases = {},
                this.extend(t.phrases || {}),
                this.currentLocale = t.locale || "en",
                this.allowMissing = !!t.allowMissing,
                this.warn = t.warn || i
            }
            function s(t, e, i) {
                var n, s, o, a, c, r, l;
                return null != i && t ? (o = (s = t.split(u))[(a = e,
                c = i,
                d[(r = a,
                l = function(t) {
                    var e, i, n, s = {};
                    for (e in t)
                        if (t.hasOwnProperty(e))
                            for (n in i = t[e])
                                s[i[n]] = e;
                    return s
                }(h),
                l[r] || l.en)](c))] || s[0],
                n = o.replace(/^\s+|\s+$/g, "")) : n = t,
                n
            }
            function i(t) {
                e.console && e.console.warn && e.console.warn("WARNING: " + t)
            }
            t.VERSION = "0.4.3",
            t.prototype.locale = function(t) {
                return t && (this.currentLocale = t),
                this.currentLocale
            }
            ,
            t.prototype.extend = function(t, e) {
                var i;
                for (var n in t)
                    t.hasOwnProperty(n) && (i = t[n],
                    e && (n = e + "." + n),
                    "object" == (void 0 === i ? "undefined" : o(i)) ? this.extend(i, n) : this.phrases[n] = i)
            }
            ,
            t.prototype.clear = function() {
                this.phrases = {}
            }
            ,
            t.prototype.replace = function(t) {
                this.clear(),
                this.extend(t)
            }
            ,
            t.prototype.t = function(t, e) {
                var i, n;
                return "number" == typeof (e = null == e ? {} : e) && (e = {
                    smart_count: e
                }),
                "string" == typeof this.phrases[t] ? i = this.phrases[t] : "string" == typeof e._ ? i = e._ : this.allowMissing ? i = t : (this.warn('Missing translation for key: "' + t + '"'),
                n = t),
                "string" == typeof i && (e = function(t) {
                    var e = {};
                    for (var i in t)
                        e[i] = t[i];
                    return e
                }(e),
                n = function(t, e) {
                    for (var i in e)
                        "_" !== i && e.hasOwnProperty(i) && (t = t.replace(new RegExp("%\\{" + i + "\\}","g"), e[i]));
                    return t
                }(n = s(i, this.currentLocale, e.smart_count), e)),
                n
            }
            ,
            t.prototype.has = function(t) {
                return t in this.phrases
            }
            ;
            var u = "||||"
              , d = {
                chinese: function(t) {
                    return 0
                },
                german: function(t) {
                    return 1 !== t ? 1 : 0
                },
                french: function(t) {
                    return 1 < t ? 1 : 0
                },
                russian: function(t) {
                    return t % 10 == 1 && t % 100 != 11 ? 0 : 2 <= t % 10 && t % 10 <= 4 && (t % 100 < 10 || 20 <= t % 100) ? 1 : 2
                },
                czech: function(t) {
                    return 1 === t ? 0 : 2 <= t && t <= 4 ? 1 : 2
                },
                polish: function(t) {
                    return 1 === t ? 0 : 2 <= t % 10 && t % 10 <= 4 && (t % 100 < 10 || 20 <= t % 100) ? 1 : 2
                },
                icelandic: function(t) {
                    return t % 10 != 1 || t % 100 == 11 ? 1 : 0
                }
            }
              , h = {
                chinese: ["fa", "id", "ja", "ko", "lo", "ms", "th", "tr", "zh"],
                german: ["da", "de", "en", "es", "fi", "el", "he", "hu", "it", "nl", "no", "pt", "sv"],
                french: ["fr", "tl", "pt-br"],
                russian: ["hr", "ru"],
                czech: ["cs"],
                polish: ["pl"],
                icelandic: ["is"]
            };
            return t
        }
        ,
        "function" == typeof define && define.amd ? define([], function() {
            return s(n)
        }) : "object" == (void 0 === i ? "undefined" : o(i)) ? e.exports = s(n) : n.Polyglot = s(n),
        cc._RF.pop()
    }
    , {}]
}, {}, ["globals", "DataManager", "GameApplication", "PageViewTouch", "Player", "ResManager", "SoundManager", "facebook", "SDKUtils", "Cards", "EffectManager", "LoadLanguage", "SpriteAnimation", "ViewManager", "GameOver", "GameView", "MainView", "OneSkinView", "OverPlayerView", "PassView", "PauseView", "RankView", "ReviveView", "SettingView", "SkinView", "Utils", "Language", "LanguageData", "LocalizedLabel", "LocalizedSprite", "SpriteFrameSet", "polyglot.min"]);
