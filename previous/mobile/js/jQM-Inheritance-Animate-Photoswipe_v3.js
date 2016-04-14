(function (a, c) {
    function d(b) {
        return e.isWindow(b) ? b : b.nodeType === 9 ? b.defaultView || b.parentWindow : !1
    }
    function f(b) {
        if (!la[b]) {
            var j = p.body,
                c = e("<" + b + ">").appendTo(j),
                a = c.css("display");
            c.remove();
            if (a === "none" || a === "") {
                O || (O = p.createElement("iframe"), O.frameBorder = O.width = O.height = 0);
                j.appendChild(O);
                if (!W || !O.createElement) W = (O.contentWindow || O.contentDocument).document, W.write((p.compatMode === "CSS1Compat" ? "<!doctype html>" : "") + "<html><body>"), W.close();
                c = W.createElement(b);
                W.body.appendChild(c);
                a = e.css(c, "display");
                j.removeChild(O)
            }
            la[b] = a
        }
        return la[b]
    }
    function g(b, j) {
        var c = {};
        e.each(va.concat.apply([], va.slice(0, j)), function () {
            c[this] = b
        });
        return c
    }
    function h() {
        fa = c
    }
    function i() {
        setTimeout(h, 0);
        return fa = e.now()
    }
    function o() {
        try {
            return new a.XMLHttpRequest
        } catch (b) {}
    }
    function l(b, j, c, a) {
        if (e.isArray(j)) e.each(j, function (j, d) {
            c || Ra.test(b) ? a(b, d) : l(b + "[" + (typeof d == "object" || e.isArray(d) ? j : "") + "]", d, c, a)
        });
        else if (!c && j != null && typeof j == "object") for (var d in j) l(b + "[" + d + "]", j[d], c, a);
        else a(b, j)
    }
    function q(b, j, e, a, d, f) {
        d = d || j.dataTypes[0];
        f = f || {};
        f[d] = !0;
        for (var d = b[d], g = 0, h = d ? d.length : 0, k = b === ma, i; g < h && (k || !i); g++) i = d[g](j, e, a), typeof i == "string" && (!k || f[i] ? i = c : (j.dataTypes.unshift(i), i = q(b, j, e, a, i, f)));
        (k || !i) && !f["*"] && (i = q(b, j, e, a, "*", f));
        return i
    }
    function s(b) {
        return function (j, c) {
            typeof j != "string" && (c = j, j = "*");
            if (e.isFunction(c)) for (var a = j.toLowerCase().split(wa), d = 0, f = a.length, g, h, k; d < f; d++) g = a[d], k = /^\+/.test(g), k && (g = g.substr(1) || "*"), h = b[g] = b[g] || [], h[k ? "unshift" : "push"](c)
        }
    }

    function n(b, j, c) {
        var a = j === "width" ? b.offsetWidth : b.offsetHeight,
            d = j === "width" ? Sa : Ta;
        if (a > 0) return c !== "border" && e.each(d, function () {
            c || (a -= parseFloat(e.css(b, "padding" + this)) || 0);
            c === "margin" ? a += parseFloat(e.css(b, c + this)) || 0 : a -= parseFloat(e.css(b, "border" + this + "Width")) || 0
        }), a + "px";
        a = X(b, j, j);
        if (a < 0 || a == null) a = b.style[j] || 0;
        a = parseFloat(a) || 0;
        c && e.each(d, function () {
            a += parseFloat(e.css(b, "padding" + this)) || 0;
            c !== "padding" && (a += parseFloat(e.css(b, "border" + this + "Width")) || 0);
            c === "margin" && (a += parseFloat(e.css(b, c + this)) || 0)
        });
        return a + "px"
    }
    function m(b, j) {
        j.src ? e.ajax({
            url: j.src,
            async: !1,
            dataType: "script"
        }) : e.globalEval((j.text || j.textContent || j.innerHTML || "").replace(Ua, "/*$0*/"));
        j.parentNode && j.parentNode.removeChild(j)
    }
    function x(b) {
        e.nodeName(b, "input") ? r(b) : "getElementsByTagName" in b && e.grep(b.getElementsByTagName("input"), r)
    }
    function r(b) {
        if (b.type === "checkbox" || b.type === "radio") b.defaultChecked = b.checked
    }
    function t(b) {
        return "getElementsByTagName" in b ? b.getElementsByTagName("*") : "querySelectorAll" in b ? b.querySelectorAll("*") : []
    }
    function u(b, j) {
        var c;
        if (j.nodeType === 1) {
            j.clearAttributes && j.clearAttributes();
            j.mergeAttributes && j.mergeAttributes(b);
            c = j.nodeName.toLowerCase();
            if (c === "object") j.outerHTML = b.outerHTML;
            else if (c !== "input" || b.type !== "checkbox" && b.type !== "radio") if (c === "option") j.selected = b.defaultSelected;
            else {
                if (c === "input" || c === "textarea") j.defaultValue = b.defaultValue
            } else b.checked && (j.defaultChecked = j.checked = b.checked), j.value !== b.value && (j.value = b.value);
            j.removeAttribute(e.expando)
        }
    }

    function w(b, j) {
        if (j.nodeType === 1 && e.hasData(b)) {
            var c = e.expando,
                a = e.data(b),
                d = e.data(j, a);
            if (a = a[c]) {
                var f = a.events,
                    d = d[c] = e.extend({}, a);
                if (f) {
                    delete d.handle;
                    d.events = {};
                    for (var g in f) {
                        c = 0;
                        for (a = f[g].length; c < a; c++) e.event.add(j, g + (f[g][c].namespace ? "." : "") + f[g][c].namespace, f[g][c], f[g][c].data)
                    }
                }
            }
        }
    }
    function J(b, j, c) {
        j = j || 0;
        if (e.isFunction(j)) return e.grep(b, function (b, e) {
            return !!j.call(b, e, b) === c
        });
        if (j.nodeType) return e.grep(b, function (b) {
            return b === j === c
        });
        if (typeof j == "string") {
            var a = e.grep(b, function (b) {
                return b.nodeType === 1
            });
            if (Va.test(j)) return e.filter(j, a, !c);
            j = e.filter(j, a)
        }
        return e.grep(b, function (b) {
            return e.inArray(b, j) >= 0 === c
        })
    }
    function A(b, j) {
        return (b && b !== "*" ? b + "." : "") + j.replace(Wa, "`").replace(Xa, "&")
    }
    function D(b) {
        var j, c, a, d, f, g, h, k, i, m, p, n = [];
        d = [];
        h = e._data(this, "events");
        if (!(b.liveFired === this || !h || !h.live || b.target.disabled || b.button && b.type === "click")) {
            b.namespace && (p = RegExp("(^|\\.)" + b.namespace.split(".").join("\\.(?:.*\\.)?") + "(\\.|$)"));
            b.liveFired = this;
            var l = h.live.slice(0);
            for (h = 0; h < l.length; h++) f = l[h], f.origType.replace(na, "") === b.type ? d.push(f.selector) : l.splice(h--, 1);
            d = e(b.target).closest(d, b.currentTarget);
            for (k = 0, i = d.length; k < i; k++) {
                m = d[k];
                for (h = 0; h < l.length; h++) if (f = l[h], m.selector === f.selector && (!p || p.test(f.namespace)) && !m.elem.disabled) {
                    g = m.elem;
                    a = null;
                    if (f.preType === "mouseenter" || f.preType === "mouseleave") b.type = f.preType, a = e(b.relatedTarget).closest(f.selector)[0], a && e.contains(g, a) && (a = g);
                    (!a || a !== g) && n.push({
                        elem: g,
                        handleObj: f,
                        level: m.level
                    })
                }
            }
            for (k = 0, i = n.length; k < i; k++) {
                d = n[k];
                if (c && d.level > c) break;
                b.currentTarget = d.elem;
                b.data = d.handleObj.data;
                b.handleObj = d.handleObj;
                f = d.handleObj.origHandler.apply(d.elem, arguments);
                if (f === !1 || b.isPropagationStopped()) if (c = d.level, f === !1 && (j = !1), b.isImmediatePropagationStopped()) break
            }
            return j
        }
    }
    function z(b, j, a) {
        var d = e.extend({}, a[0]);
        d.type = b;
        d.originalEvent = {};
        d.liveFired = c;
        e.event.handle.call(j, d);
        d.isDefaultPrevented() && a[0].preventDefault()
    }
    function C() {
        return !0
    }
    function B() {
        return !1
    }
    function K(b, j, a) {
        var d = j + "defer",
            f = j + "queue",
            g = j + "mark",
            h = e.data(b, d, c, !0);
        h && (a === "queue" || !e.data(b, f, c, !0)) && (a === "mark" || !e.data(b, g, c, !0)) && setTimeout(function () {
            !e.data(b, f, c, !0) && !e.data(b, g, c, !0) && (e.removeData(b, d, !0), h.resolve())
        }, 0)
    }
    function F(b) {
        for (var j in b) if (j !== "toJSON") return !1;
        return !0
    }
    function k(b, j, a) {
        if (a === c && b.nodeType === 1) if (a = "data-" + j.replace(ca, "$1-$2").toLowerCase(), a = b.getAttribute(a), typeof a == "string") {
            try {
                a = a === "true" ? !0 : a === "false" ? !1 : a === "null" ? null : e.isNaN(a) ? y.test(a) ? e.parseJSON(a) : a : parseFloat(a)
            } catch (d) {}
            e.data(b, j, a)
        } else a = c;
        return a
    }
    var p = a.document,
        I = a.navigator,
        H = a.location,
        e = function () {
            function b() {
                if (!j.isReady) {
                    try {
                        p.documentElement.doScroll("left")
                    } catch (e) {
                        setTimeout(b, 1);
                        return
                    }
                    j.ready()
                }
            }
            var j = function (b, e) {
                    return new j.fn.init(b, e, f)
                },
                e = a.jQuery,
                d = a.$,
                f, g = /^(?:[^<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,
                h = /\S/,
                k = /^\s+/,
                i = /\s+$/,
                m = /\d/,
                n = /^<(\w+)\s*\/?>(?:<\/\1>)?$/,
                l = /^[\],:{}\s]*$/,
                o = /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,
                q = /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
                r = /(?:^|:|,)(?:\s*\[)+/g,
                z = /(webkit)[ \/]([\w.]+)/,
                M = /(opera)(?:.*version)?[ \/]([\w.]+)/,
                s = /(msie) ([\w.]+)/,
                H = /(mozilla)(?:.*? rv:([\w.]+))?/,
                da = /-([a-z])/ig,
                Ya = function (b, j) {
                    return j.toUpperCase()
                },
                Za = I.userAgent,
                ha, ia, Y, x = Object.prototype.toString,
                oa = Object.prototype.hasOwnProperty,
                u = Array.prototype.push,
                y = Array.prototype.slice,
                t = String.prototype.trim,
                w = Array.prototype.indexOf,
                C = {};
            j.fn = j.prototype = {
                constructor: j,
                init: function (b, e, a) {
                    var d, v, E;
                    if (!b) return this;
                    if (b.nodeType) return this.context = this[0] = b, this.length = 1, this;
                    if (b === "body" && !e && p.body) return this.context = p, this[0] = p.body, this.selector = b, this.length = 1, this;
                    if (typeof b == "string") {
                        b.charAt(0) !== "<" || b.charAt(b.length - 1) !== ">" || b.length < 3 ? d = g.exec(b) : d = [null, b, null];
                        if (d && (d[1] || !e)) {
                            if (d[1]) return e = e instanceof j ? e[0] : e, E = e ? e.ownerDocument || e : p, v = n.exec(b), v ? j.isPlainObject(e) ? (b = [p.createElement(v[1])], j.fn.attr.call(b, e, !0)) : b = [E.createElement(v[1])] : (v = j.buildFragment([d[1]], [E]), b = (v.cacheable ? j.clone(v.fragment) : v.fragment).childNodes), j.merge(this, b);
                            if ((e = p.getElementById(d[2])) && e.parentNode) {
                                if (e.id !== d[2]) return a.find(b);
                                this.length = 1;
                                this[0] = e
                            }
                            this.context = p;
                            this.selector = b;
                            return this
                        }
                        return !e || e.jquery ? (e || a).find(b) : this.constructor(e).find(b)
                    }
                    if (j.isFunction(b)) return a.ready(b);
                    b.selector !== c && (this.selector = b.selector, this.context = b.context);
                    return j.makeArray(b, this)
                },
                selector: "",
                jquery: "1.6.2",
                length: 0,
                size: function () {
                    return this.length
                },
                toArray: function () {
                    return y.call(this, 0)
                },
                get: function (b) {
                    return b == null ? this.toArray() : b < 0 ? this[this.length + b] : this[b]
                },
                pushStack: function (b, e, a) {
                    var c = this.constructor();
                    j.isArray(b) ? u.apply(c, b) : j.merge(c, b);
                    c.prevObject = this;
                    c.context = this.context;
                    e === "find" ? c.selector = this.selector + (this.selector ? " " : "") + a : e && (c.selector = this.selector + "." + e + "(" + a + ")");
                    return c
                },
                each: function (b, e) {
                    return j.each(this, b, e)
                },
                ready: function (b) {
                    j.bindReady();
                    ia.done(b);
                    return this
                },
                eq: function (b) {
                    return b === -1 ? this.slice(b) : this.slice(b, +b + 1)
                },
                first: function () {
                    return this.eq(0)
                },
                last: function () {
                    return this.eq(-1)
                },
                slice: function () {
                    return this.pushStack(y.apply(this, arguments), "slice", y.call(arguments).join(","))
                },
                map: function (b) {
                    return this.pushStack(j.map(this, function (j, e) {
                        return b.call(j, e, j)
                    }))
                },
                end: function () {
                    return this.prevObject || this.constructor(null)
                },
                push: u,
                sort: [].sort,
                splice: [].splice
            };
            j.fn.init.prototype = j.fn;
            j.extend = j.fn.extend = function () {
                var b, e, a, d, v, E, f = arguments[0] || {},
                    g = 1,
                    ga = arguments.length,
                    da = !1;
                for (typeof f == "boolean" && (da = f, f = arguments[1] || {}, g = 2), typeof f != "object" && !j.isFunction(f) && (f = {}), ga === g && (f = this, --g); g < ga; g++) if ((b = arguments[g]) != null) for (e in b) a = f[e], d = b[e], f !== d && (da && d && (j.isPlainObject(d) || (v = j.isArray(d))) ? (v ? (v = !1, E = a && j.isArray(a) ? a : []) : E = a && j.isPlainObject(a) ? a : {}, f[e] = j.extend(da, E, d)) : d !== c && (f[e] = d));
                return f
            };
            j.extend({
                noConflict: function (b) {
                    a.$ === j && (a.$ = d);
                    b && a.jQuery === j && (a.jQuery = e);
                    return j
                },
                isReady: !1,
                readyWait: 1,
                holdReady: function (b) {
                    b ? j.readyWait++ : j.ready(!0)
                },
                ready: function (b) {
                    if (b === !0 && !--j.readyWait || b !== !0 && !j.isReady) {
                        if (!p.body) return setTimeout(j.ready, 1);
                        j.isReady = !0;
                        b !== !0 && --j.readyWait > 0 || (ia.resolveWith(p, [j]), j.fn.trigger && j(p).trigger("ready").unbind("ready"))
                    }
                },
                bindReady: function () {
                    if (!ia) {
                        ia = j._Deferred();
                        if (p.readyState === "complete") return setTimeout(j.ready, 1);
                        if (p.addEventListener) p.addEventListener("DOMContentLoaded", Y, !1), a.addEventListener("load", j.ready, !1);
                        else if (p.attachEvent) {
                            p.attachEvent("onreadystatechange", Y);
                            a.attachEvent("onload", j.ready);
                            var e = !1;
                            try {
                                e = a.frameElement == null
                            } catch (c) {}
                            p.documentElement.doScroll && e && b()
                        }
                    }
                },
                isFunction: function (b) {
                    return j.type(b) === "function"
                },
                isArray: Array.isArray ||
                function (b) {
                    return j.type(b) === "array"
                },
                isWindow: function (b) {
                    return b && typeof b == "object" && "setInterval" in b
                },
                isNaN: function (b) {
                    return b == null || !m.test(b) || isNaN(b)
                },
                type: function (b) {
                    return b == null ? String(b) : C[x.call(b)] || "object"
                },
                isPlainObject: function (b) {
                    if (!b || j.type(b) !== "object" || b.nodeType || j.isWindow(b)) return !1;
                    if (b.constructor && !oa.call(b, "constructor") && !oa.call(b.constructor.prototype, "isPrototypeOf")) return !1;
                    for (var e in b);
                    return e === c || oa.call(b, e)
                },
                isEmptyObject: function (b) {
                    for (var j in b) return !1;
                    return !0
                },
                error: function (b) {
                    throw b;
                },
                parseJSON: function (b) {
                    if (typeof b != "string" || !b) return null;
                    b = j.trim(b);
                    if (a.JSON && a.JSON.parse) return a.JSON.parse(b);
                    if (l.test(b.replace(o, "@").replace(q, "]").replace(r, ""))) return (new Function("return " + b))();
                    j.error("Invalid JSON: " + b)
                },
                parseXML: function (b, e, c) {
                    a.DOMParser ? (c = new DOMParser, e = c.parseFromString(b, "text/xml")) : (e = new ActiveXObject("Microsoft.XMLDOM"), e.async = "false", e.loadXML(b));
                    c = e.documentElement;
                    (!c || !c.nodeName || c.nodeName === "parsererror") && j.error("Invalid XML: " + b);
                    return e
                },
                noop: function () {},
                globalEval: function (b) {
                    b && h.test(b) && (a.execScript ||
                    function (b) {
                        a.eval.call(a, b)
                    })(b)
                },
                camelCase: function (b) {
                    return b.replace(da, Ya)
                },
                nodeName: function (b, j) {
                    return b.nodeName && b.nodeName.toUpperCase() === j.toUpperCase()
                },
                each: function (b, e, a) {
                    var d, v = 0,
                        f = b.length,
                        E = f === c || j.isFunction(b);
                    if (a) if (E) for (d in b) {
                        if (e.apply(b[d], a) === !1) break
                    } else for (; v < f;) {
                        if (e.apply(b[v++], a) === !1) break
                    } else if (E) for (d in b) {
                        if (e.call(b[d], d, b[d]) === !1) break
                    } else for (; v < f;) if (e.call(b[v], v, b[v++]) === !1) break;
                    return b
                },
                trim: t ?
                function (b) {
                    return b == null ? "" : t.call(b)
                } : function (b) {
                    return b == null ? "" : (b + "").replace(k, "").replace(i, "")
                },
                makeArray: function (b, e) {
                    var a = e || [];
                    if (b != null) {
                        var c = j.type(b);
                        b.length == null || c === "string" || c === "function" || c === "regexp" || j.isWindow(b) ? u.call(a, b) : j.merge(a, b)
                    }
                    return a
                },
                inArray: function (b, j) {
                    if (w) return w.call(j, b);
                    for (var e = 0, a = j.length; e < a; e++) if (j[e] === b) return e;
                    return -1
                },
                merge: function (b, j) {
                    var e = b.length,
                        a = 0;
                    if (typeof j.length == "number") for (var d = j.length; a < d; a++) b[e++] = j[a];
                    else for (; j[a] !== c;) b[e++] = j[a++];
                    b.length = e;
                    return b
                },
                grep: function (b, j, e) {
                    for (var a = [], c, e = !! e, d = 0, v = b.length; d < v; d++) c = !! j(b[d], d), e !== c && a.push(b[d]);
                    return a
                },
                map: function (b, e, a) {
                    var d, v, f = [],
                        E = 0,
                        g = b.length;
                    if (b instanceof j || g !== c && typeof g == "number" && (g > 0 && b[0] && b[g - 1] || g === 0 || j.isArray(b))) for (; E < g; E++) d = e(b[E], E, a), d != null && (f[f.length] = d);
                    else for (v in b) d = e(b[v], v, a), d != null && (f[f.length] = d);
                    return f.concat.apply([], f)
                },
                guid: 1,
                proxy: function (b, e) {
                    if (typeof e == "string") {
                        var a = b[e];
                        e = b;
                        b = a
                    }
                    if (!j.isFunction(b)) return c;
                    var d = y.call(arguments, 2),
                        a = function () {
                            return b.apply(e, d.concat(y.call(arguments)))
                        };
                    a.guid = b.guid = b.guid || a.guid || j.guid++;
                    return a
                },
                access: function (b, e, a, d, v, f) {
                    var E = b.length;
                    if (typeof e == "object") {
                        for (var g in e) j.access(b, g, e[g], d, v, a);
                        return b
                    }
                    if (a !== c) {
                        d = !f && d && j.isFunction(a);
                        for (g = 0; g < E; g++) v(b[g], e, d ? a.call(b[g], g, v(b[g], e)) : a, f);
                        return b
                    }
                    return E ? v(b[0], e) : c
                },
                now: function () {
                    return (new Date).getTime()
                },
                uaMatch: function (b) {
                    b = b.toLowerCase();
                    b = z.exec(b) || M.exec(b) || s.exec(b) || b.indexOf("compatible") < 0 && H.exec(b) || [];
                    return {
                        browser: b[1] || "",
                        version: b[2] || "0"
                    }
                },
                sub: function () {
                    function b(e, j) {
                        return new b.fn.init(e, j)
                    }
                    j.extend(!0, b, this);
                    b.superclass = this;
                    b.fn = b.prototype = this();
                    b.fn.constructor = b;
                    b.sub = this.sub;
                    b.fn.init = function (a, c) {
                        c && c instanceof j && !(c instanceof b) && (c = b(c));
                        return j.fn.init.call(this, a, c, e)
                    };
                    b.fn.init.prototype = b.fn;
                    var e = b(p);
                    return b
                },
                browser: {}
            });
            j.each("Boolean Number String Function Array Date RegExp Object".split(" "), function (b, e) {
                C["[object " + e + "]"] = e.toLowerCase()
            });
            ha = j.uaMatch(Za);
            ha.browser && (j.browser[ha.browser] = !0, j.browser.version = ha.version);
            j.browser.webkit && (j.browser.safari = !0);
            h.test("\u00a0") && (k = /^[\s\xA0]+/, i = /[\s\xA0]+$/);
            f = j(p);
            p.addEventListener ? Y = function () {
                p.removeEventListener("DOMContentLoaded", Y, !1);
                j.ready()
            } : p.attachEvent && (Y = function () {
                p.readyState === "complete" && (p.detachEvent("onreadystatechange", Y), j.ready())
            });
            return j
        }(),
        L = "done fail isResolved isRejected promise then always pipe".split(" "),
        M = [].slice;
    e.extend({
        _Deferred: function () {
            var b = [],
                j, a, c, d = {
                    done: function () {
                        if (!c) {
                            var a = arguments,
                                v, f, g, h, k;
                            j && (k = j, j = 0);
                            for (v = 0, f = a.length; v < f; v++) g = a[v], h = e.type(g), h === "array" ? d.done.apply(d, g) : h === "function" && b.push(g);
                            k && d.resolveWith(k[0], k[1])
                        }
                        return this
                    },
                    resolveWith: function (e, d) {
                        if (!c && !j && !a) {
                            d = d || [];
                            a = 1;
                            try {
                                for (; b[0];) b.shift().apply(e, d)
                            } finally {
                                j = [e, d], a = 0
                            }
                        }
                        return this
                    },
                    resolve: function () {
                        d.resolveWith(this, arguments);
                        return this
                    },
                    isResolved: function () {
                        return !!a || !! j
                    },
                    cancel: function () {
                        c = 1;
                        b = [];
                        return this
                    }
                };
            return d
        },
        Deferred: function (b) {
            var j = e._Deferred(),
                a = e._Deferred(),
                c;
            e.extend(j, {
                then: function (b, e) {
                    j.done(b).fail(e);
                    return this
                },
                always: function () {
                    return j.done.apply(j, arguments).fail.apply(this, arguments)
                },
                fail: a.done,
                rejectWith: a.resolveWith,
                reject: a.resolve,
                isRejected: a.isResolved,
                pipe: function (b, a) {
                    return e.Deferred(function (c) {
                        e.each({
                            done: [b, "resolve"],
                            fail: [a, "reject"]
                        }, function (b, a) {
                            var d = a[0],
                                v = a[1],
                                f;
                            e.isFunction(d) ? j[b](function () {
                                f = d.apply(this, arguments);
                                f && e.isFunction(f.promise) ? f.promise().then(c.resolve, c.reject) : c[v](f)
                            }) : j[b](c[v])
                        })
                    }).promise()
                },
                promise: function (b) {
                    if (b == null) {
                        if (c) return c;
                        c = b = {}
                    }
                    for (var e = L.length; e--;) b[L[e]] = j[L[e]];
                    return b
                }
            });
            j.done(a.cancel).fail(j.cancel);
            delete j.cancel;
            b && b.call(j, j);
            return j
        },
        when: function (b) {
            function j(b) {
                return function (e) {
                    a[b] = arguments.length > 1 ? M.call(arguments, 0) : e;
                    --f || g.resolveWith(g, M.call(a, 0))
                }
            }
            var a = arguments,
                c = 0,
                d = a.length,
                f = d,
                g = d <= 1 && b && e.isFunction(b.promise) ? b : e.Deferred();
            if (d > 1) {
                for (; c < d; c++) a[c] && e.isFunction(a[c].promise) ? a[c].promise().then(j(c), g.reject) : --f;
                f || g.resolveWith(g, a)
            } else g !== b && g.resolveWith(g, d ? [b] : []);
            return g.promise()
        }
    });
    e.support = function () {
        var b = p.createElement("div"),
            j = p.documentElement,
            a, c, d, f, g, h, k, i, m, n, l, o, q, r, z;
        b.setAttribute("className", "t");
        b.innerHTML = "   <link/><table></table><a href='/a' style='top:1px;float:left;opacity:.55;'>a</a><input type='checkbox'/>";
        a = b.getElementsByTagName("*");
        c = b.getElementsByTagName("a")[0];
        if (!a || !a.length || !c) return {};
        d = p.createElement("select");
        f = d.appendChild(p.createElement("option"));
        g = b.getElementsByTagName("input")[0];
        k = {
            leadingWhitespace: b.firstChild.nodeType === 3,
            tbody: !b.getElementsByTagName("tbody").length,
            htmlSerialize: !! b.getElementsByTagName("link").length,
            style: /top/.test(c.getAttribute("style")),
            hrefNormalized: c.getAttribute("href") === "/a",
            opacity: /^0.55$/.test(c.style.opacity),
            cssFloat: !! c.style.cssFloat,
            checkOn: g.value === "on",
            optSelected: f.selected,
            getSetAttribute: b.className !== "t",
            submitBubbles: !0,
            changeBubbles: !0,
            focusinBubbles: !1,
            deleteExpando: !0,
            noCloneEvent: !0,
            inlineBlockNeedsLayout: !1,
            shrinkWrapBlocks: !1,
            reliableMarginRight: !0
        };
        g.checked = !0;
        k.noCloneChecked = g.cloneNode(!0).checked;
        d.disabled = !0;
        k.optDisabled = !f.disabled;
        try {
            delete b.test
        } catch (M) {
            k.deleteExpando = !1
        }!b.addEventListener && b.attachEvent && b.fireEvent && (b.attachEvent("onclick", function () {
            k.noCloneEvent = !1
        }), b.cloneNode(!0).fireEvent("onclick"));
        g = p.createElement("input");
        g.value = "t";
        g.setAttribute("type", "radio");
        k.radioValue = g.value === "t";
        g.setAttribute("checked", "checked");
        b.appendChild(g);
        i = p.createDocumentFragment();
        i.appendChild(b.firstChild);
        k.checkClone = i.cloneNode(!0).cloneNode(!0).lastChild.checked;
        b.innerHTML = "";
        b.style.width = b.style.paddingLeft = "1px";
        m = p.getElementsByTagName("body")[0];
        a = p.createElement(m ? "div" : "body");
        l = {
            visibility: "hidden",
            width: 0,
            height: 0,
            border: 0,
            margin: 0
        };
        m && e.extend(l, {
            position: "absolute",
            left: -1E3,
            top: -1E3
        });
        for (r in l) a.style[r] = l[r];
        a.appendChild(b);
        n = m || j;
        n.insertBefore(a, n.firstChild);
        k.appendChecked = g.checked;
        k.boxModel = b.offsetWidth === 2;
        "zoom" in b.style && (b.style.display = "inline", b.style.zoom = 1, k.inlineBlockNeedsLayout = b.offsetWidth === 2, b.style.display = "", b.innerHTML = "<div style='width:4px;'></div>", k.shrinkWrapBlocks = b.offsetWidth !== 2);
        b.innerHTML = "<table><tr><td style='padding:0;border:0;display:none'></td><td>t</td></tr></table>";
        o = b.getElementsByTagName("td");
        z = o[0].offsetHeight === 0;
        o[0].style.display = "";
        o[1].style.display = "none";
        k.reliableHiddenOffsets = z && o[0].offsetHeight === 0;
        b.innerHTML = "";
        p.defaultView && p.defaultView.getComputedStyle && (h = p.createElement("div"), h.style.width = "0", h.style.marginRight = "0", b.appendChild(h), k.reliableMarginRight = (parseInt((p.defaultView.getComputedStyle(h, null) || {
            marginRight: 0
        }).marginRight, 10) || 0) === 0);
        a.innerHTML = "";
        n.removeChild(a);
        if (b.attachEvent) for (r in {
            submit: 1,
            change: 1,
            focusin: 1
        }) q = "on" + r, z = q in b, z || (b.setAttribute(q, "return;"), z = typeof b[q] == "function"), k[r + "Bubbles"] = z;
        a = i = d = f = m = h = b = g = null;
        return k
    }();
    e.boxModel = e.support.boxModel;
    var y = /^(?:\{.*\}|\[.*\])$/,
        ca = /([a-z])([A-Z])/g;
    e.extend({
        cache: {},
        uuid: 0,
        expando: "jQuery" + (e.fn.jquery + Math.random()).replace(/\D/g, ""),
        noData: {
            embed: !0,
            object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",
            applet: !0
        },
        hasData: function (b) {
            b = b.nodeType ? e.cache[b[e.expando]] : b[e.expando];
            return !!b && !F(b)
        },
        data: function (b, j, a, d) {
            if (e.acceptData(b)) {
                var f = e.expando,
                    g = typeof j == "string",
                    h, k = b.nodeType,
                    i = k ? e.cache : b,
                    m = k ? b[e.expando] : b[e.expando] && e.expando;
                if (m && (!d || !m || i[m][f]) || !(g && a === c)) {
                    m || (k ? b[e.expando] = m = ++e.uuid : m = e.expando);
                    i[m] || (i[m] = {}, k || (i[m].toJSON = e.noop));
                    if (typeof j == "object" || typeof j == "function") d ? i[m][f] = e.extend(i[m][f], j) : i[m] = e.extend(i[m], j);
                    h = i[m];
                    d && (h[f] || (h[f] = {}), h = h[f]);
                    a !== c && (h[e.camelCase(j)] = a);
                    return j === "events" && !h[j] ? h[f] && h[f].events : g ? h[e.camelCase(j)] || h[j] : h
                }
            }
        },
        removeData: function (b, j, c) {
            if (e.acceptData(b)) {
                var d = e.expando,
                    f = b.nodeType,
                    g = f ? e.cache : b,
                    h = f ? b[e.expando] : e.expando;
                if (g[h]) {
                    if (j) {
                        var k = c ? g[h][d] : g[h];
                        if (k && (delete k[j], !F(k))) return
                    }
                    if (c && (delete g[h][d], !F(g[h]))) return;
                    j = g[h][d];
                    e.support.deleteExpando || g != a ? delete g[h] : g[h] = null;
                    j ? (g[h] = {}, f || (g[h].toJSON = e.noop), g[h][d] = j) : f && (e.support.deleteExpando ? delete b[e.expando] : b.removeAttribute ? b.removeAttribute(e.expando) : b[e.expando] = null)
                }
            }
        },
        _data: function (b, j, a) {
            return e.data(b, j, a, !0)
        },
        acceptData: function (b) {
            if (b.nodeName) {
                var j = e.noData[b.nodeName.toLowerCase()];
                if (j) return j !== !0 && b.getAttribute("classid") === j
            }
            return !0
        }
    });
    e.fn.extend({
        data: function (b, j) {
            var a = null;
            if (typeof b == "undefined") {
                if (this.length && (a = e.data(this[0]), this[0].nodeType === 1)) for (var d = this[0].attributes, f, g = 0, h = d.length; g < h; g++) f = d[g].name, f.indexOf("data-") === 0 && (f = e.camelCase(f.substring(5)), k(this[0], f, a[f]));
                return a
            }
            if (typeof b == "object") return this.each(function () {
                e.data(this, b)
            });
            var i = b.split(".");
            i[1] = i[1] ? "." + i[1] : "";
            return j === c ? (a = this.triggerHandler("getData" + i[1] + "!", [i[0]]), a === c && this.length && (a = e.data(this[0], b), a = k(this[0], b, a)), a === c && i[1] ? this.data(i[0]) : a) : this.each(function () {
                var a = e(this),
                    c = [i[0], j];
                a.triggerHandler("setData" + i[1] + "!", c);
                e.data(this, b, j);
                a.triggerHandler("changeData" + i[1] + "!", c)
            })
        },
        removeData: function (b) {
            return this.each(function () {
                e.removeData(this, b)
            })
        }
    });
    e.extend({
        _mark: function (b, a) {
            b && (a = (a || "fx") + "mark", e.data(b, a, (e.data(b, a, c, !0) || 0) + 1, !0))
        },
        _unmark: function (b, a, d) {
            b !== !0 && (d = a, a = b, b = !1);
            if (a) {
                var d = d || "fx",
                    f = d + "mark";
                (b = b ? 0 : (e.data(a, f, c, !0) || 1) - 1) ? e.data(a, f, b, !0) : (e.removeData(a, f, !0), K(a, d, "mark"))
            }
        },
        queue: function (b, a, d) {
            if (b) {
                var a = (a || "fx") + "queue",
                    f = e.data(b, a, c, !0);
                d && (!f || e.isArray(d) ? f = e.data(b, a, e.makeArray(d), !0) : f.push(d));
                return f || []
            }
        },
        dequeue: function (b, a) {
            var a = a || "fx",
                c = e.queue(b, a),
                d = c.shift();
            d === "inprogress" && (d = c.shift());
            d && (a === "fx" && c.unshift("inprogress"), d.call(b, function () {
                e.dequeue(b, a)
            }));
            c.length || (e.removeData(b, a + "queue", !0), K(b, a, "queue"))
        }
    });
    e.fn.extend({
        queue: function (b, a) {
            typeof b != "string" && (a = b, b = "fx");
            return a === c ? e.queue(this[0], b) : this.each(function () {
                var c = e.queue(this, b, a);
                b === "fx" && c[0] !== "inprogress" && e.dequeue(this, b)
            })
        },
        dequeue: function (b) {
            return this.each(function () {
                e.dequeue(this, b)
            })
        },
        delay: function (b, a) {
            b = e.fx ? e.fx.speeds[b] || b : b;
            a = a || "fx";
            return this.queue(a, function () {
                var c = this;
                setTimeout(function () {
                    e.dequeue(c, a)
                }, b)
            })
        },
        clearQueue: function (b) {
            return this.queue(b || "fx", [])
        },
        promise: function (b) {
            function a() {
                --h || d.resolveWith(f, [f])
            }
            typeof b != "string" && (b = c);
            b = b || "fx";
            var d = e.Deferred(),
                f = this,
                g = f.length,
                h = 1,
                k = b + "defer",
                i = b + "queue";
            b += "mark";
            for (var m; g--;) if (m = e.data(f[g], k, c, !0) || (e.data(f[g], i, c, !0) || e.data(f[g], b, c, !0)) && e.data(f[g], k, e._Deferred(), !0)) h++, m.done(a);
            a();
            return d.promise()
        }
    });
    var P = /[\n\t\r]/g,
        S = /\s+/,
        pa = /\r/g,
        $a = /^(?:button|input)$/i,
        ab = /^(?:button|input|object|select|textarea)$/i,
        Q = /^a(?:rea)?$/i,
        xa = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,
        bb = /\:|^on/,
        T, ya;
    e.fn.extend({
        attr: function (b, a) {
            return e.access(this, b, a, !0, e.attr)
        },
        removeAttr: function (b) {
            return this.each(function () {
                e.removeAttr(this, b)
            })
        },
        prop: function (b, a) {
            return e.access(this, b, a, !0, e.prop)
        },
        removeProp: function (b) {
            b = e.propFix[b] || b;
            return this.each(function () {
                try {
                    this[b] = c, delete this[b]
                } catch (a) {}
            })
        },
        addClass: function (b) {
            var a, c, d, f, g, h, k;
            if (e.isFunction(b)) return this.each(function (a) {
                e(this).addClass(b.call(this, a, this.className))
            });
            if (b && typeof b == "string") {
                a = b.split(S);
                for (c = 0, d = this.length; c < d; c++) if (f = this[c], f.nodeType === 1) if (!f.className && a.length === 1) f.className = b;
                else {
                    g = " " + f.className + " ";
                    for (h = 0, k = a.length; h < k; h++)~g.indexOf(" " + a[h] + " ") || (g += a[h] + " ");
                    f.className = e.trim(g)
                }
            }
            return this
        },
        removeClass: function (b) {
            var a, d, f, g, h, k, i;
            if (e.isFunction(b)) return this.each(function (a) {
                e(this).removeClass(b.call(this, a, this.className))
            });
            if (b && typeof b == "string" || b === c) {
                a = (b || "").split(S);
                for (d = 0, f = this.length; d < f; d++) if (g = this[d], g.nodeType === 1 && g.className) if (b) {
                    h = (" " + g.className + " ").replace(P, " ");
                    for (k = 0, i = a.length; k < i; k++) h = h.replace(" " + a[k] + " ", " ");
                    g.className = e.trim(h)
                } else g.className = ""
            }
            return this
        },
        toggleClass: function (b, a) {
            var c = typeof b,
                d = typeof a == "boolean";
            return e.isFunction(b) ? this.each(function (c) {
                e(this).toggleClass(b.call(this, c, this.className, a), a)
            }) : this.each(function () {
                if (c === "string") for (var f, g = 0, h = e(this), k = a, i = b.split(S); f = i[g++];) k = d ? k : !h.hasClass(f), h[k ? "addClass" : "removeClass"](f);
                else if (c === "undefined" || c === "boolean") this.className && e._data(this, "__className__", this.className), this.className = this.className || b === !1 ? "" : e._data(this, "__className__") || ""
            })
        },
        hasClass: function (b) {
            for (var b = " " + b + " ", a = 0, e = this.length; a < e; a++) if ((" " + this[a].className + " ").replace(P, " ").indexOf(b) > -1) return !0;
            return !1
        },
        val: function (b) {
            var a, d, f = this[0];
            if (!arguments.length) {
                if (f) {
                    if ((a = e.valHooks[f.nodeName.toLowerCase()] || e.valHooks[f.type]) && "get" in a && (d = a.get(f, "value")) !== c) return d;
                    d = f.value;
                    return typeof d == "string" ? d.replace(pa, "") : d == null ? "" : d
                }
                return c
            }
            var g = e.isFunction(b);
            return this.each(function (d) {
                var f = e(this),
                    v;
                if (this.nodeType === 1 && (g ? v = b.call(this, d, f.val()) : v = b, v == null ? v = "" : typeof v == "number" ? v += "" : e.isArray(v) && (v = e.map(v, function (b) {
                    return b == null ? "" : b + ""
                })), a = e.valHooks[this.nodeName.toLowerCase()] || e.valHooks[this.type], !a || !("set" in a) || a.set(this, v, "value") === c)) this.value = v
            })
        }
    });
    e.extend({
        valHooks: {
            option: {
                get: function (b) {
                    var a = b.attributes.value;
                    return !a || a.specified ? b.value : b.text
                }
            },
            select: {
                get: function (b) {
                    var a, c = b.selectedIndex,
                        d = [],
                        f = b.options,
                        b = b.type === "select-one";
                    if (c < 0) return null;
                    for (var g = b ? c : 0, h = b ? c + 1 : f.length; g < h; g++) if (a = f[g], a.selected && (e.support.optDisabled ? !a.disabled : a.getAttribute("disabled") === null) && (!a.parentNode.disabled || !e.nodeName(a.parentNode, "optgroup"))) {
                        a = e(a).val();
                        if (b) return a;
                        d.push(a)
                    }
                    return b && !d.length && f.length ? e(f[c]).val() : d
                },
                set: function (b, a) {
                    var c = e.makeArray(a);
                    e(b).find("option").each(function () {
                        this.selected = e.inArray(e(this).val(), c) >= 0
                    });
                    c.length || (b.selectedIndex = -1);
                    return c
                }
            }
        },
        attrFn: {
            val: !0,
            css: !0,
            html: !0,
            text: !0,
            data: !0,
            width: !0,
            height: !0,
            offset: !0
        },
        attrFix: {
            tabindex: "tabIndex"
        },
        attr: function (b, a, d, f) {
            var g = b.nodeType;
            if (!b || g === 3 || g === 8 || g === 2) return c;
            if (f && a in e.attrFn) return e(b)[a](d);
            if (!("getAttribute" in b)) return e.prop(b, a, d);
            var h, k;
            (f = g !== 1 || !e.isXMLDoc(b)) && (a = e.attrFix[a] || a, k = e.attrHooks[a], k || (xa.test(a) ? k = ya : T && a !== "className" && (e.nodeName(b, "form") || bb.test(a)) && (k = T)));
            if (d !== c) {
                if (d === null) return e.removeAttr(b, a), c;
                if (k && "set" in k && f && (h = k.set(b, d, a)) !== c) return h;
                b.setAttribute(a, "" + d);
                return d
            }
            if (k && "get" in k && f && (h = k.get(b, a)) !== null) return h;
            h = b.getAttribute(a);
            return h === null ? c : h
        },
        removeAttr: function (b, a) {
            var c;
            b.nodeType === 1 && (a = e.attrFix[a] || a, e.support.getSetAttribute ? b.removeAttribute(a) : (e.attr(b, a, ""), b.removeAttributeNode(b.getAttributeNode(a))), xa.test(a) && (c = e.propFix[a] || a) in b && (b[c] = !1))
        },
        attrHooks: {
            type: {
                set: function (b, a) {
                    if ($a.test(b.nodeName) && b.parentNode) e.error("type property can't be changed");
                    else if (!e.support.radioValue && a === "radio" && e.nodeName(b, "input")) {
                        var c = b.value;
                        b.setAttribute("type", a);
                        c && (b.value = c);
                        return a
                    }
                }
            },
            tabIndex: {
                get: function (b) {
                    var a = b.getAttributeNode("tabIndex");
                    return a && a.specified ? parseInt(a.value, 10) : ab.test(b.nodeName) || Q.test(b.nodeName) && b.href ? 0 : c
                }
            },
            value: {
                get: function (b, a) {
                    return T && e.nodeName(b, "button") ? T.get(b, a) : a in b ? b.value : null
                },
                set: function (b, a, c) {
                    if (T && e.nodeName(b, "button")) return T.set(b, a, c);
                    b.value = a
                }
            }
        },
        propFix: {
            tabindex: "tabIndex",
            readonly: "readOnly",
            "for": "htmlFor",
            "class": "className",
            maxlength: "maxLength",
            cellspacing: "cellSpacing",
            cellpadding: "cellPadding",
            rowspan: "rowSpan",
            colspan: "colSpan",
            usemap: "useMap",
            frameborder: "frameBorder",
            contenteditable: "contentEditable"
        },
        prop: function (b, a, d) {
            var f = b.nodeType;
            if (!b || f === 3 || f === 8 || f === 2) return c;
            var g, h;
            (f !== 1 || !e.isXMLDoc(b)) && (a = e.propFix[a] || a, h = e.propHooks[a]);
            return d !== c ? h && "set" in h && (g = h.set(b, d, a)) !== c ? g : b[a] = d : h && "get" in h && (g = h.get(b, a)) !== c ? g : b[a]
        },
        propHooks: {}
    });
    ya = {
        get: function (b, a) {
            return e.prop(b, a) ? a.toLowerCase() : c
        },
        set: function (b, a, c) {
            var d;
            a === !1 ? e.removeAttr(b, c) : (d = e.propFix[c] || c, d in b && (b[d] = !0), b.setAttribute(c, c.toLowerCase()));
            return c
        }
    };
    e.support.getSetAttribute || (e.attrFix = e.propFix, T = e.attrHooks.name = e.attrHooks.title = e.valHooks.button = {
        get: function (b, a) {
            var e;
            return (e = b.getAttributeNode(a)) && e.nodeValue !== "" ? e.nodeValue : c
        },
        set: function (b, a, e) {
            if (b = b.getAttributeNode(e)) return b.nodeValue = a
        }
    }, e.each(["width", "height"], function (b, a) {
        e.attrHooks[a] = e.extend(e.attrHooks[a], {
            set: function (b, e) {
                if (e === "") return b.setAttribute(a, "auto"), e
            }
        })
    }));
    e.support.hrefNormalized || e.each(["href", "src", "width", "height"], function (b, a) {
        e.attrHooks[a] = e.extend(e.attrHooks[a], {
            get: function (b) {
                b = b.getAttribute(a, 2);
                return b === null ? c : b
            }
        })
    });
    e.support.style || (e.attrHooks.style = {
        get: function (b) {
            return b.style.cssText.toLowerCase() || c
        },
        set: function (b, a) {
            return b.style.cssText = "" + a
        }
    });
    e.support.optSelected || (e.propHooks.selected = e.extend(e.propHooks.selected, {
        get: function () {}
    }));
    e.support.checkOn || e.each(["radio", "checkbox"], function () {
        e.valHooks[this] = {
            get: function (b) {
                return b.getAttribute("value") === null ? "on" : b.value
            }
        }
    });
    e.each(["radio", "checkbox"], function () {
        e.valHooks[this] = e.extend(e.valHooks[this], {
            set: function (b, a) {
                if (e.isArray(a)) return b.checked = e.inArray(e(b).val(), a) >= 0
            }
        })
    });
    var na = /\.(.*)$/,
        qa = /^(?:textarea|input|select)$/i,
        Wa = /\./g,
        Xa = / /g,
        cb = /[^\w\s.|`]/g,
        db = function (b) {
            return b.replace(cb, "\\$&")
        };
    e.event = {
        add: function (b, a, d, f) {
            if (b.nodeType !== 3 && b.nodeType !== 8) {
                if (d === !1) d = B;
                else if (!d) return;
                var g, h;
                d.handler && (g = d, d = g.handler);
                d.guid || (d.guid = e.guid++);
                var k = e._data(b);
                if (k) {
                    var i = k.events,
                        m = k.handle;
                    i || (k.events = i = {});
                    m || (k.handle = m = function (b) {
                        return typeof e != "undefined" && (!b || e.event.triggered !== b.type) ? e.event.handle.apply(m.elem, arguments) : c
                    });
                    m.elem = b;
                    a = a.split(" ");
                    for (var p = 0, n; k = a[p++];) {
                        h = g ? e.extend({}, g) : {
                            handler: d,
                            data: f
                        };
                        k.indexOf(".") > -1 ? (n = k.split("."), k = n.shift(), h.namespace = n.slice(0).sort().join(".")) : (n = [], h.namespace = "");
                        h.type = k;
                        h.guid || (h.guid = d.guid);
                        var l = i[k],
                            o = e.event.special[k] || {};
                        if (!l && (l = i[k] = [], !o.setup || o.setup.call(b, f, n, m) === !1)) b.addEventListener ? b.addEventListener(k, m, !1) : b.attachEvent && b.attachEvent("on" + k, m);
                        o.add && (o.add.call(b, h), h.handler.guid || (h.handler.guid = d.guid));
                        l.push(h);
                        e.event.global[k] = !0
                    }
                    b = null
                }
            }
        },
        global: {},
        remove: function (b, a, d, f) {
            if (b.nodeType !== 3 && b.nodeType !== 8) {
                d === !1 && (d = B);
                var g, h, k = 0,
                    i, m, n, p, l, o, q = e.hasData(b) && e._data(b),
                    r = q && q.events;
                if (q && r) if (a && a.type && (d = a.handler, a = a.type), !a || typeof a == "string" && a.charAt(0) === ".") for (g in a = a || "", r) e.event.remove(b, g + a);
                else {
                    for (a = a.split(" "); g = a[k++];) if (p = g, i = g.indexOf(".") < 0, m = [], i || (m = g.split("."), g = m.shift(), n = RegExp("(^|\\.)" + e.map(m.slice(0).sort(), db).join("\\.(?:.*\\.)?") + "(\\.|$)")), l = r[g], l) if (d) {
                        p = e.event.special[g] || {};
                        for (h = f || 0; h < l.length; h++) if (o = l[h], d.guid === o.guid) {
                            if (i || n.test(o.namespace)) f == null && l.splice(h--, 1), p.remove && p.remove.call(b, o);
                            if (f != null) break
                        }
                        if (l.length === 0 || f != null && l.length === 1)(!p.teardown || p.teardown.call(b, m) === !1) && e.removeEvent(b, g, q.handle), delete r[g]
                    } else for (h = 0; h < l.length; h++) if (o = l[h], i || n.test(o.namespace)) e.event.remove(b, p, o.handler, h), l.splice(h--, 1);
                    if (e.isEmptyObject(r)) a = q.handle, a && (a.elem = null), delete q.events, delete q.handle, e.isEmptyObject(q) && e.removeData(b, c, !0)
                }
            }
        },
        customEvent: {
            getData: !0,
            setData: !0,
            changeData: !0
        },
        trigger: function (b, d, f, g) {
            var h = b.type || b,
                k = [],
                i;
            h.indexOf("!") >= 0 && (h = h.slice(0, -1), i = !0);
            h.indexOf(".") >= 0 && (k = h.split("."), h = k.shift(), k.sort());
            if (f && !e.event.customEvent[h] || e.event.global[h]) {
                b = typeof b == "object" ? b[e.expando] ? b : new e.Event(h, b) : new e.Event(h);
                b.type = h;
                b.exclusive = i;
                b.namespace = k.join(".");
                b.namespace_re = RegExp("(^|\\.)" + k.join("\\.(?:.*\\.)?") + "(\\.|$)");
                if (g || !f) b.preventDefault(), b.stopPropagation();
                if (f) {
                    if (!(f.nodeType === 3 || f.nodeType === 8)) {
                        b.result = c;
                        b.target = f;
                        d = d != null ? e.makeArray(d) : [];
                        d.unshift(b);
                        k = f;
                        g = h.indexOf(":") < 0 ? "on" + h : "";
                        do i = e._data(k, "handle"), b.currentTarget = k, i && i.apply(k, d), g && e.acceptData(k) && k[g] && k[g].apply(k, d) === !1 && (b.result = !1, b.preventDefault()), k = k.parentNode || k.ownerDocument || k === b.target.ownerDocument && a;
                        while (k && !b.isPropagationStopped());
                        if (!b.isDefaultPrevented()) {
                            var m, k = e.event.special[h] || {};
                            if ((!k._default || k._default.call(f.ownerDocument, b) === !1) && (h !== "click" || !e.nodeName(f, "a")) && e.acceptData(f)) {
                                try {
                                    g && f[h] && (m = f[g], m && (f[g] = null), e.event.triggered = h, f[h]())
                                } catch (p) {}
                                m && (f[g] = m);
                                e.event.triggered = c
                            }
                        }
                        return b.result
                    }
                } else e.each(e.cache, function () {
                    var a = this[e.expando];
                    a && a.events && a.events[h] && e.event.trigger(b, d, a.handle.elem)
                })
            }
        },
        handle: function (b) {
            var b = e.event.fix(b || a.event),
                d = ((e._data(this, "events") || {})[b.type] || []).slice(0),
                f = !b.exclusive && !b.namespace,
                g = Array.prototype.slice.call(arguments, 0);
            g[0] = b;
            b.currentTarget = this;
            for (var h = 0, k = d.length; h < k; h++) {
                var i = d[h];
                if (f || b.namespace_re.test(i.namespace)) if (b.handler = i.handler, b.data = i.data, b.handleObj = i, i = i.handler.apply(this, g), i !== c && (b.result = i, i === !1 && (b.preventDefault(), b.stopPropagation())), b.isImmediatePropagationStopped()) break
            }
            return b.result
        },
        props: "altKey attrChange attrName bubbles button cancelable charCode clientX clientY ctrlKey currentTarget data detail eventPhase fromElement handler keyCode layerX layerY metaKey newValue offsetX offsetY pageX pageY prevValue relatedNode relatedTarget screenX screenY shiftKey srcElement target toElement view wheelDelta which".split(" "),
        fix: function (b) {
            if (b[e.expando]) return b;
            for (var a = b, b = e.Event(a), d = this.props.length, f; d;) f = this.props[--d], b[f] = a[f];
            b.target || (b.target = b.srcElement || p);
            b.target.nodeType === 3 && (b.target = b.target.parentNode);
            !b.relatedTarget && b.fromElement && (b.relatedTarget = b.fromElement === b.target ? b.toElement : b.fromElement);
            if (b.pageX == null && b.clientX != null) d = b.target.ownerDocument || p, a = d.documentElement, d = d.body, b.pageX = b.clientX + (a && a.scrollLeft || d && d.scrollLeft || 0) - (a && a.clientLeft || d && d.clientLeft || 0), b.pageY = b.clientY + (a && a.scrollTop || d && d.scrollTop || 0) - (a && a.clientTop || d && d.clientTop || 0);
            b.which == null && (b.charCode != null || b.keyCode != null) && (b.which = b.charCode != null ? b.charCode : b.keyCode);
            !b.metaKey && b.ctrlKey && (b.metaKey = b.ctrlKey);
            !b.which && b.button !== c && (b.which = b.button & 1 ? 1 : b.button & 2 ? 3 : b.button & 4 ? 2 : 0);
            return b
        },
        guid: 1E8,
        proxy: e.proxy,
        special: {
            ready: {
                setup: e.bindReady,
                teardown: e.noop
            },
            live: {
                add: function (b) {
                    e.event.add(this, A(b.origType, b.selector), e.extend({}, b, {
                        handler: D,
                        guid: b.handler.guid
                    }))
                },
                remove: function (b) {
                    e.event.remove(this, A(b.origType, b.selector), b)
                }
            },
            beforeunload: {
                setup: function (b, a, c) {
                    e.isWindow(this) && (this.onbeforeunload = c)
                },
                teardown: function (b, a) {
                    this.onbeforeunload === a && (this.onbeforeunload = null)
                }
            }
        }
    };
    e.removeEvent = p.removeEventListener ?
    function (b, a, e) {
        b.removeEventListener && b.removeEventListener(a, e, !1)
    } : function (b, a, e) {
        b.detachEvent && b.detachEvent("on" + a, e)
    };
    e.Event = function (b, a) {
        if (!this.preventDefault) return new e.Event(b, a);
        b && b.type ? (this.originalEvent = b, this.type = b.type, this.isDefaultPrevented = b.defaultPrevented || b.returnValue === !1 || b.getPreventDefault && b.getPreventDefault() ? C : B) : this.type = b;
        a && e.extend(this, a);
        this.timeStamp = e.now();
        this[e.expando] = !0
    };
    e.Event.prototype = {
        preventDefault: function () {
            this.isDefaultPrevented = C;
            var b = this.originalEvent;
            !b || (b.preventDefault ? b.preventDefault() : b.returnValue = !1)
        },
        stopPropagation: function () {
            this.isPropagationStopped = C;
            var b = this.originalEvent;
            !b || (b.stopPropagation && b.stopPropagation(), b.cancelBubble = !0)
        },
        stopImmediatePropagation: function () {
            this.isImmediatePropagationStopped = C;
            this.stopPropagation()
        },
        isDefaultPrevented: B,
        isPropagationStopped: B,
        isImmediatePropagationStopped: B
    };
    var za = function (b) {
            var a = b.relatedTarget,
                c = !1,
                d = b.type;
            b.type = b.data;
            a !== this && (a && (c = e.contains(this, a)), c || (e.event.handle.apply(this, arguments), b.type = d))
        },
        Aa = function (b) {
            b.type = b.data;
            e.event.handle.apply(this, arguments)
        };
    e.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout"
    }, function (b, a) {
        e.event.special[b] = {
            setup: function (c) {
                e.event.add(this, a, c && c.selector ? Aa : za, b)
            },
            teardown: function (b) {
                e.event.remove(this, a, b && b.selector ? Aa : za)
            }
        }
    });
    e.support.submitBubbles || (e.event.special.submit = {
        setup: function () {
            if (e.nodeName(this, "form")) return !1;
            else e.event.add(this, "click.specialSubmit", function (b) {
                var a = b.target,
                    c = a.type;
                (c === "submit" || c === "image") && e(a).closest("form").length && z("submit", this, arguments)
            }), e.event.add(this, "keypress.specialSubmit", function (b) {
                var a = b.target,
                    c = a.type;
                (c === "text" || c === "password") && e(a).closest("form").length && b.keyCode === 13 && z("submit", this, arguments)
            })
        },
        teardown: function () {
            e.event.remove(this, ".specialSubmit")
        }
    });
    if (!e.support.changeBubbles) {
        var ea, Ba = function (b) {
                var a = b.type,
                    c = b.value;
                a === "radio" || a === "checkbox" ? c = b.checked : a === "select-multiple" ? c = b.selectedIndex > -1 ? e.map(b.options, function (b) {
                    return b.selected
                }).join("-") : "" : e.nodeName(b, "select") && (c = b.selectedIndex);
                return c
            },
            ja = function (b, a) {
                var d = b.target,
                    f, g;
                if (qa.test(d.nodeName) && !d.readOnly && (f = e._data(d, "_change_data"), g = Ba(d), (b.type !== "focusout" || d.type !== "radio") && e._data(d, "_change_data", g), !(f === c || g === f))) if (f != null || g) b.type = "change", b.liveFired = c, e.event.trigger(b, a, d)
            };
        e.event.special.change = {
            filters: {
                focusout: ja,
                beforedeactivate: ja,
                click: function (b) {
                    var a = b.target,
                        c = e.nodeName(a, "input") ? a.type : "";
                    (c === "radio" || c === "checkbox" || e.nodeName(a, "select")) && ja.call(this, b)
                },
                keydown: function (b) {
                    var a = b.target,
                        c = e.nodeName(a, "input") ? a.type : "";
                    (b.keyCode === 13 && !e.nodeName(a, "textarea") || b.keyCode === 32 && (c === "checkbox" || c === "radio") || c === "select-multiple") && ja.call(this, b)
                },
                beforeactivate: function (b) {
                    b = b.target;
                    e._data(b, "_change_data", Ba(b))
                }
            },
            setup: function () {
                if (this.type === "file") return !1;
                for (var b in ea) e.event.add(this, b + ".specialChange", ea[b]);
                return qa.test(this.nodeName)
            },
            teardown: function () {
                e.event.remove(this, ".specialChange");
                return qa.test(this.nodeName)
            }
        };
        ea = e.event.special.change.filters;
        ea.focus = ea.beforeactivate
    }
    e.support.focusinBubbles || e.each({
        focus: "focusin",
        blur: "focusout"
    }, function (b, a) {
        function c(b) {
            var d = e.event.fix(b);
            d.type = a;
            d.originalEvent = {};
            e.event.trigger(d, null, d.target);
            d.isDefaultPrevented() && b.preventDefault()
        }
        var d = 0;
        e.event.special[a] = {
            setup: function () {
                d++ === 0 && p.addEventListener(b, c, !0)
            },
            teardown: function () {
                --d === 0 && p.removeEventListener(b, c, !0)
            }
        }
    });
    e.each(["bind", "one"], function (b, a) {
        e.fn[a] = function (b, d, f) {
            var g;
            if (typeof b == "object") {
                for (var h in b) this[a](h, d, b[h], f);
                return this
            }
            if (arguments.length === 2 || d === !1) f = d, d = c;
            a === "one" ? (g = function (b) {
                e(this).unbind(b, g);
                return f.apply(this, arguments)
            }, g.guid = f.guid || e.guid++) : g = f;
            if (b === "unload" && a !== "one") this.one(b, d, f);
            else {
                h = 0;
                for (var k = this.length; h < k; h++) e.event.add(this[h], b, g, d)
            }
            return this
        }
    });
    e.fn.extend({
        unbind: function (b, a) {
            if (typeof b == "object" && !b.preventDefault) for (var c in b) this.unbind(c, b[c]);
            else {
                c = 0;
                for (var d = this.length; c < d; c++) e.event.remove(this[c], b, a)
            }
            return this
        },
        delegate: function (b, a, c, e) {
            return this.live(a, c, e, b)
        },
        undelegate: function (b, a, c) {
            return arguments.length === 0 ? this.unbind("live") : this.die(a, null, c, b)
        },
        trigger: function (b, a) {
            return this.each(function () {
                e.event.trigger(b, a, this)
            })
        },
        triggerHandler: function (b, a) {
            if (this[0]) return e.event.trigger(b, a, this[0], !0)
        },
        toggle: function (b) {
            var a = arguments,
                c = b.guid || e.guid++,
                d = 0,
                f = function (c) {
                    var f = (e.data(this, "lastToggle" + b.guid) || 0) % d;
                    e.data(this, "lastToggle" + b.guid, f + 1);
                    c.preventDefault();
                    return a[f].apply(this, arguments) || !1
                };
            for (f.guid = c; d < a.length;) a[d++].guid = c;
            return this.click(f)
        },
        hover: function (b, a) {
            return this.mouseenter(b).mouseleave(a || b)
        }
    });
    var ra = {
        focus: "focusin",
        blur: "focusout",
        mouseenter: "mouseover",
        mouseleave: "mouseout"
    };
    e.each(["live", "die"], function (b, a) {
        e.fn[a] = function (b, d, f, g) {
            var h = 0,
                k, i, m, p = g || this.selector,
                n = g ? this : e(this.context);
            if (typeof b == "object" && !b.preventDefault) {
                for (m in b) n[a](m, d, b[m], p);
                return this
            }
            if (a === "die" && !b && g && g.charAt(0) === ".") return n.unbind(g), this;
            if (d === !1 || e.isFunction(d)) f = d || B, d = c;
            for (b = (b || "").split(" ");
            (g = b[h++]) != null;) if (k = na.exec(g), i = "", k && (i = k[0], g = g.replace(na, "")), g === "hover") b.push("mouseenter" + i, "mouseleave" + i);
            else if (m = g, ra[g] ? (b.push(ra[g] + i), g += i) : g = (ra[g] || g) + i, a === "live") {
                i = 0;
                for (var l = n.length; i < l; i++) e.event.add(n[i], "live." + A(g, p), {
                    data: d,
                    selector: p,
                    handler: f,
                    origType: g,
                    origHandler: f,
                    preType: m
                })
            } else n.unbind("live." + A(g, p), f);
            return this
        }
    });
    e.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error".split(" "), function (b, a) {
        e.fn[a] = function (b, c) {
            c == null && (c = b, b = null);
            return arguments.length > 0 ? this.bind(a, b, c) : this.trigger(a)
        };
        e.attrFn && (e.attrFn[a] = !0)
    });
    (function () {
        function b(b, a, c, e, d, f) {
            for (var d = 0, j = e.length; d < j; d++) {
                var g = e[d];
                if (g) {
                    for (var h = !1, g = g[b]; g;) {
                        if (g.sizcache === c) {
                            h = e[g.sizset];
                            break
                        }
                        if (g.nodeType === 1) if (f || (g.sizcache = c, g.sizset = d), typeof a != "string") {
                            if (g === a) {
                                h = !0;
                                break
                            }
                        } else if (n.filter(a, [g]).length > 0) {
                            h = g;
                            break
                        }
                        g = g[b]
                    }
                    e[d] = h
                }
            }
        }
        function a(b, c, e, d, f, j) {
            for (var f = 0, g = d.length; f < g; f++) {
                var h = d[f];
                if (h) {
                    for (var k = !1, h = h[b]; h;) {
                        if (h.sizcache === e) {
                            k = d[h.sizset];
                            break
                        }
                        h.nodeType === 1 && !j && (h.sizcache = e, h.sizset = f);
                        if (h.nodeName.toLowerCase() === c) {
                            k = h;
                            break
                        }
                        h = h[b]
                    }
                    d[f] = k
                }
            }
        }
        var d = /((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,
            f = 0,
            g = Object.prototype.toString,
            h = !1,
            k = !0,
            i = /\\/g,
            m = /\W/;
        [0, 0].sort(function () {
            k = !1;
            return 0
        });
        var n = function (b, a, c, e) {
                c = c || [];
                a = a || p;
                var f = a;
                if (a.nodeType !== 1 && a.nodeType !== 9) return [];
                if (!b || typeof b != "string") return c;
                var j, h, k, E, i, m, ba, q = !0,
                    r = n.isXML(a),
                    G = [],
                    M = b;
                do if (d.exec(""), j = d.exec(M), j && (M = j[3], G.push(j[1]), j[2])) {
                    E = j[3];
                    break
                }
                while (j);
                if (G.length > 1 && o.exec(b)) if (G.length === 2 && l.relative[G[0]]) h = x(G[0] + G[1], a);
                else for (h = l.relative[G[0]] ? [a] : n(G.shift(), a); G.length;) b = G.shift(), l.relative[b] && (b += G.shift()), h = x(b, h);
                else if (!e && G.length > 1 && a.nodeType === 9 && !r && l.match.ID.test(G[0]) && !l.match.ID.test(G[G.length - 1]) && (i = n.find(G.shift(), a, r), a = i.expr ? n.filter(i.expr, i.set)[0] : i.set[0]), a) for (i = e ? {
                    expr: G.pop(),
                    set: z(e)
                } : n.find(G.pop(), G.length === 1 && (G[0] === "~" || G[0] === "+") && a.parentNode ? a.parentNode : a, r), h = i.expr ? n.filter(i.expr, i.set) : i.set, G.length > 0 ? k = z(h) : q = !1; G.length;) m = G.pop(), ba = m, l.relative[m] ? ba = G.pop() : m = "", ba == null && (ba = a), l.relative[m](k, ba, r);
                else k = [];
                k || (k = h);
                k || n.error(m || b);
                if (g.call(k) === "[object Array]") if (q) if (a && a.nodeType === 1) for (b = 0; k[b] != null; b++) k[b] && (k[b] === !0 || k[b].nodeType === 1 && n.contains(a, k[b])) && c.push(h[b]);
                else for (b = 0; k[b] != null; b++) k[b] && k[b].nodeType === 1 && c.push(h[b]);
                else c.push.apply(c, k);
                else z(k, c);
                E && (n(E, f, c, e), n.uniqueSort(c));
                return c
            };
        n.uniqueSort = function (b) {
            if (s && (h = k, b.sort(s), h)) for (var a = 1; a < b.length; a++) b[a] === b[a - 1] && b.splice(a--, 1);
            return b
        };
        n.matches = function (b, a) {
            return n(b, null, null, a)
        };
        n.matchesSelector = function (b, a) {
            return n(a, null, null, [b]).length > 0
        };
        n.find = function (b, a, c) {
            var e;
            if (!b) return [];
            for (var d = 0, f = l.order.length; d < f; d++) {
                var j, g = l.order[d];
                if (j = l.leftMatch[g].exec(b)) {
                    var h = j[1];
                    j.splice(1, 1);
                    if (h.substr(h.length - 1) !== "\\" && (j[1] = (j[1] || "").replace(i, ""), e = l.find[g](j, a, c), e != null)) {
                        b = b.replace(l.match[g], "");
                        break
                    }
                }
            }
            e || (e = typeof a.getElementsByTagName != "undefined" ? a.getElementsByTagName("*") : []);
            return {
                set: e,
                expr: b
            }
        };
        n.filter = function (b, a, e, d) {
            for (var f, j, g = b, h = [], k = a, E = a && a[0] && n.isXML(a[0]); b && a.length;) {
                for (var v in l.filter) if ((f = l.leftMatch[v].exec(b)) != null && f[2]) {
                    var i, m, ga = l.filter[v];
                    m = f[1];
                    j = !1;
                    f.splice(1, 1);
                    if (m.substr(m.length - 1) !== "\\") {
                        k === h && (h = []);
                        if (l.preFilter[v]) if (f = l.preFilter[v](f, k, e, h, d, E)) {
                            if (f === !0) continue
                        } else j = i = !0;
                        if (f) for (var p = 0;
                        (m = k[p]) != null; p++) if (m) {
                            i = ga(m, f, p, k);
                            var o = d ^ !! i;
                            e && i != null ? o ? j = !0 : k[p] = !1 : o && (h.push(m), j = !0)
                        }
                        if (i !== c) {
                            e || (k = h);
                            b = b.replace(l.match[v], "");
                            if (!j) return [];
                            break
                        }
                    }
                }
                if (b === g) if (j == null) n.error(b);
                else break;
                g = b
            }
            return k
        };
        n.error = function (b) {
            throw "Syntax error, unrecognized expression: " + b;
        };
        var l = n.selectors = {
            order: ["ID", "NAME", "TAG"],
            match: {
                ID: /#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,
                CLASS: /\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,
                NAME: /\[name=['"]*((?:[\w\u00c0-\uFFFF\-]|\\.)+)['"]*\]/,
                ATTR: /\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(?:(['"])(.*?)\3|(#?(?:[\w\u00c0-\uFFFF\-]|\\.)*)|)|)\s*\]/,
                TAG: /^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/,
                CHILD: /:(only|nth|last|first)-child(?:\(\s*(even|odd|(?:[+\-]?\d+|(?:[+\-]?\d*)?n\s*(?:[+\-]\s*\d+)?))\s*\))?/,
                POS: /:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/,
                PSEUDO: /:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/
            },
            leftMatch: {},
            attrMap: {
                "class": "className",
                "for": "htmlFor"
            },
            attrHandle: {
                href: function (b) {
                    return b.getAttribute("href")
                },
                type: function (b) {
                    return b.getAttribute("type")
                }
            },
            relative: {
                "+": function (b, a) {
                    var c = typeof a == "string",
                        e = c && !m.test(a),
                        c = c && !e;
                    e && (a = a.toLowerCase());
                    for (var e = 0, d = b.length, f; e < d; e++) if (f = b[e]) {
                        for (;
                        (f = f.previousSibling) && f.nodeType !== 1;);
                        b[e] = c || f && f.nodeName.toLowerCase() === a ? f || !1 : f === a
                    }
                    c && n.filter(a, b, !0)
                },
                ">": function (b, a) {
                    var c, e = typeof a == "string",
                        d = 0,
                        f = b.length;
                    if (e && !m.test(a)) for (a = a.toLowerCase(); d < f; d++) {
                        if (c = b[d]) c = c.parentNode, b[d] = c.nodeName.toLowerCase() === a ? c : !1
                    } else {
                        for (; d < f; d++) c = b[d], c && (b[d] = e ? c.parentNode : c.parentNode === a);
                        e && n.filter(a, b, !0)
                    }
                },
                "": function (c, e, d) {
                    var g, h = f++,
                        k = b;
                    typeof e == "string" && !m.test(e) && (e = e.toLowerCase(), g = e, k = a);
                    k("parentNode", e, h, c, g, d)
                },
                "~": function (c, e, d) {
                    var g, h = f++,
                        k = b;
                    typeof e == "string" && !m.test(e) && (e = e.toLowerCase(), g = e, k = a);
                    k("previousSibling", e, h, c, g, d)
                }
            },
            find: {
                ID: function (b, a, c) {
                    if (typeof a.getElementById != "undefined" && !c) return (b = a.getElementById(b[1])) && b.parentNode ? [b] : []
                },
                NAME: function (b, a) {
                    if (typeof a.getElementsByName != "undefined") {
                        for (var c = [], e = a.getElementsByName(b[1]), d = 0, f = e.length; d < f; d++) e[d].getAttribute("name") === b[1] && c.push(e[d]);
                        return c.length === 0 ? null : c
                    }
                },
                TAG: function (b, a) {
                    if (typeof a.getElementsByTagName != "undefined") return a.getElementsByTagName(b[1])
                }
            },
            preFilter: {
                CLASS: function (b, a, c, e, d, f) {
                    b = " " + b[1].replace(i, "") + " ";
                    if (f) return b;
                    for (var f = 0, j;
                    (j = a[f]) != null; f++) j && (d ^ (j.className && (" " + j.className + " ").replace(/[\t\n\r]/g, " ").indexOf(b) >= 0) ? c || e.push(j) : c && (a[f] = !1));
                    return !1
                },
                ID: function (b) {
                    return b[1].replace(i, "")
                },
                TAG: function (b) {
                    return b[1].replace(i, "").toLowerCase()
                },
                CHILD: function (b) {
                    if (b[1] === "nth") {
                        b[2] || n.error(b[0]);
                        b[2] = b[2].replace(/^\+|\s*/g, "");
                        var a = /(-?)(\d*)(?:n([+\-]?\d*))?/.exec(b[2] === "even" && "2n" || b[2] === "odd" && "2n+1" || !/\D/.test(b[2]) && "0n+" + b[2] || b[2]);
                        b[2] = a[1] + (a[2] || 1) - 0;
                        b[3] = a[3] - 0
                    } else b[2] && n.error(b[0]);
                    b[0] = f++;
                    return b
                },
                ATTR: function (b, a, c, e, d, f) {
                    a = b[1] = b[1].replace(i, "");
                    !f && l.attrMap[a] && (b[1] = l.attrMap[a]);
                    b[4] = (b[4] || b[5] || "").replace(i, "");
                    b[2] === "~=" && (b[4] = " " + b[4] + " ");
                    return b
                },
                PSEUDO: function (b, a, c, e, f) {
                    if (b[1] === "not") if ((d.exec(b[3]) || "").length > 1 || /^\w/.test(b[3])) b[3] = n(b[3], null, null, a);
                    else return b = n.filter(b[3], a, c, 1 ^ f), c || e.push.apply(e, b), !1;
                    else if (l.match.POS.test(b[0]) || l.match.CHILD.test(b[0])) return !0;
                    return b
                },
                POS: function (b) {
                    b.unshift(!0);
                    return b
                }
            },
            filters: {
                enabled: function (b) {
                    return b.disabled === !1 && b.type !== "hidden"
                },
                disabled: function (b) {
                    return b.disabled === !0
                },
                checked: function (b) {
                    return b.checked === !0
                },
                selected: function (b) {
                    return b.selected === !0
                },
                parent: function (b) {
                    return !!b.firstChild
                },
                empty: function (b) {
                    return !b.firstChild
                },
                has: function (b, a, c) {
                    return !!n(c[3], b).length
                },
                header: function (b) {
                    return /h\d/i.test(b.nodeName)
                },
                text: function (b) {
                    var a = b.getAttribute("type"),
                        c = b.type;
                    return b.nodeName.toLowerCase() === "input" && "text" === c && (a === c || a === null)
                },
                radio: function (b) {
                    return b.nodeName.toLowerCase() === "input" && "radio" === b.type
                },
                checkbox: function (b) {
                    return b.nodeName.toLowerCase() === "input" && "checkbox" === b.type
                },
                file: function (b) {
                    return b.nodeName.toLowerCase() === "input" && "file" === b.type
                },
                password: function (b) {
                    return b.nodeName.toLowerCase() === "input" && "password" === b.type
                },
                submit: function (b) {
                    var a = b.nodeName.toLowerCase();
                    return (a === "input" || a === "button") && "submit" === b.type
                },
                image: function (b) {
                    return b.nodeName.toLowerCase() === "input" && "image" === b.type
                },
                reset: function (b) {
                    var a = b.nodeName.toLowerCase();
                    return (a === "input" || a === "button") && "reset" === b.type
                },
                button: function (b) {
                    var a = b.nodeName.toLowerCase();
                    return a === "input" && "button" === b.type || a === "button"
                },
                input: function (b) {
                    return /input|select|textarea|button/i.test(b.nodeName)
                },
                focus: function (b) {
                    return b === b.ownerDocument.activeElement
                }
            },
            setFilters: {
                first: function (b, a) {
                    return a === 0
                },
                last: function (b, a, c, e) {
                    return a === e.length - 1
                },
                even: function (b, a) {
                    return a % 2 === 0
                },
                odd: function (b, a) {
                    return a % 2 === 1
                },
                lt: function (b, a, c) {
                    return a < c[3] - 0
                },
                gt: function (b, a, c) {
                    return a > c[3] - 0
                },
                nth: function (b, a, c) {
                    return c[3] - 0 === a
                },
                eq: function (b, a, c) {
                    return c[3] - 0 === a
                }
            },
            filter: {
                PSEUDO: function (b, a, c, e) {
                    var d = a[1],
                        f = l.filters[d];
                    if (f) return f(b, c, a, e);
                    if (d === "contains") return (b.textContent || b.innerText || n.getText([b]) || "").indexOf(a[3]) >= 0;
                    if (d === "not") {
                        a = a[3];
                        c = 0;
                        for (e = a.length; c < e; c++) if (a[c] === b) return !1;
                        return !0
                    }
                    n.error(d)
                },
                CHILD: function (b, a) {
                    var c = a[1],
                        e = b;
                    switch (c) {
                    case "only":
                    case "first":
                        for (; e = e.previousSibling;) if (e.nodeType === 1) return !1;
                        if (c === "first") return !0;
                        e = b;
                    case "last":
                        for (; e = e.nextSibling;) if (e.nodeType === 1) return !1;
                        return !0;
                    case "nth":
                        var c = a[2],
                            d = a[3];
                        if (c === 1 && d === 0) return !0;
                        var f = a[0],
                            j = b.parentNode;
                        if (j && (j.sizcache !== f || !b.nodeIndex)) {
                            for (var g = 0, e = j.firstChild; e; e = e.nextSibling) e.nodeType === 1 && (e.nodeIndex = ++g);
                            j.sizcache = f
                        }
                        e = b.nodeIndex - d;
                        return c === 0 ? e === 0 : e % c === 0 && e / c >= 0
                    }
                },
                ID: function (b, a) {
                    return b.nodeType === 1 && b.getAttribute("id") === a
                },
                TAG: function (b, a) {
                    return a === "*" && b.nodeType === 1 || b.nodeName.toLowerCase() === a
                },
                CLASS: function (b, a) {
                    return (" " + (b.className || b.getAttribute("class")) + " ").indexOf(a) > -1
                },
                ATTR: function (b, a) {
                    var c = a[1],
                        c = l.attrHandle[c] ? l.attrHandle[c](b) : b[c] != null ? b[c] : b.getAttribute(c),
                        e = c + "",
                        d = a[2],
                        f = a[4];
                    return c == null ? d === "!=" : d === "=" ? e === f : d === "*=" ? e.indexOf(f) >= 0 : d === "~=" ? (" " + e + " ").indexOf(f) >= 0 : f ? d === "!=" ? e !== f : d === "^=" ? e.indexOf(f) === 0 : d === "$=" ? e.substr(e.length - f.length) === f : d === "|=" ? e === f || e.substr(0, f.length + 1) === f + "-" : !1 : e && c !== !1
                },
                POS: function (b, a, c, e) {
                    var d = l.setFilters[a[2]];
                    if (d) return d(b, c, a, e)
                }
            }
        },
            o = l.match.POS,
            q = function (b, a) {
                return "\\" + (a - 0 + 1)
            },
            r;
        for (r in l.match) l.match[r] = RegExp(l.match[r].source + /(?![^\[]*\])(?![^\(]*\))/.source), l.leftMatch[r] = RegExp(/(^(?:.|\r|\n)*?)/.source + l.match[r].source.replace(/\\(\d+)/g, q));
        var z = function (b, a) {
                b = Array.prototype.slice.call(b, 0);
                return a ? (a.push.apply(a, b), a) : b
            };
        try {
            Array.prototype.slice.call(p.documentElement.childNodes, 0)
        } catch (M) {
            z = function (b, a) {
                var c = 0,
                    e = a || [];
                if (g.call(b) === "[object Array]") Array.prototype.push.apply(e, b);
                else if (typeof b.length == "number") for (var d = b.length; c < d; c++) e.push(b[c]);
                else for (; b[c]; c++) e.push(b[c]);
                return e
            }
        }
        var s, H;
        p.documentElement.compareDocumentPosition ? s = function (b, a) {
            return b === a ? (h = !0, 0) : !b.compareDocumentPosition || !a.compareDocumentPosition ? b.compareDocumentPosition ? -1 : 1 : b.compareDocumentPosition(a) & 4 ? -1 : 1
        } : (s = function (b, a) {
            if (b === a) return h = !0, 0;
            if (b.sourceIndex && a.sourceIndex) return b.sourceIndex - a.sourceIndex;
            var c, e, d = [],
                f = [];
            c = b.parentNode;
            e = a.parentNode;
            var j = c;
            if (c === e) return H(b, a);
            if (!c) return -1;
            if (!e) return 1;
            for (; j;) d.unshift(j), j = j.parentNode;
            for (j = e; j;) f.unshift(j), j = j.parentNode;
            c = d.length;
            e = f.length;
            for (j = 0; j < c && j < e; j++) if (d[j] !== f[j]) return H(d[j], f[j]);
            return j === c ? H(b, f[j], -1) : H(d[j], a, 1)
        }, H = function (b, a, c) {
            if (b === a) return c;
            for (b = b.nextSibling; b;) {
                if (b === a) return -1;
                b = b.nextSibling
            }
            return 1
        });
        n.getText = function (b) {
            for (var a = "", c, e = 0; b[e]; e++) c = b[e], c.nodeType === 3 || c.nodeType === 4 ? a += c.nodeValue : c.nodeType !== 8 && (a += n.getText(c.childNodes));
            return a
        };
        (function () {
            var b = p.createElement("div"),
                a = "script" + (new Date).getTime(),
                e = p.documentElement;
            b.innerHTML = "<a name='" + a + "'/>";
            e.insertBefore(b, e.firstChild);
            p.getElementById(a) && (l.find.ID = function (b, a, e) {
                if (typeof a.getElementById != "undefined" && !e) return (a = a.getElementById(b[1])) ? a.id === b[1] || typeof a.getAttributeNode != "undefined" && a.getAttributeNode("id").nodeValue === b[1] ? [a] : c : []
            }, l.filter.ID = function (b, a) {
                var c = typeof b.getAttributeNode != "undefined" && b.getAttributeNode("id");
                return b.nodeType === 1 && c && c.nodeValue === a
            });
            e.removeChild(b);
            e = b = null
        })();
        (function () {
            var b = p.createElement("div");
            b.appendChild(p.createComment(""));
            b.getElementsByTagName("*").length > 0 && (l.find.TAG = function (b, a) {
                var c = a.getElementsByTagName(b[1]);
                if (b[1] === "*") {
                    for (var e = [], d = 0; c[d]; d++) c[d].nodeType === 1 && e.push(c[d]);
                    c = e
                }
                return c
            });
            b.innerHTML = "<a href='#'></a>";
            b.firstChild && typeof b.firstChild.getAttribute != "undefined" && b.firstChild.getAttribute("href") !== "#" && (l.attrHandle.href = function (b) {
                return b.getAttribute("href", 2)
            });
            b = null
        })();
        p.querySelectorAll &&
        function () {
            var b = n,
                a = p.createElement("div");
            a.innerHTML = "<p class='TEST'></p>";
            if (!a.querySelectorAll || a.querySelectorAll(".TEST").length !== 0) {
                n = function (a, c, e, d) {
                    c = c || p;
                    if (!d && !n.isXML(c)) {
                        var f = /^(\w+$)|^\.([\w\-]+$)|^#([\w\-]+$)/.exec(a);
                        if (f && (c.nodeType === 1 || c.nodeType === 9)) {
                            if (f[1]) return z(c.getElementsByTagName(a), e);
                            if (f[2] && l.find.CLASS && c.getElementsByClassName) return z(c.getElementsByClassName(f[2]), e)
                        }
                        if (c.nodeType === 9) {
                            if (a === "body" && c.body) return z([c.body], e);
                            if (f && f[3]) {
                                var j = c.getElementById(f[3]);
                                if (!j || !j.parentNode) return z([], e);
                                if (j.id === f[3]) return z([j], e)
                            }
                            try {
                                return z(c.querySelectorAll(a), e)
                            } catch (g) {}
                        } else if (c.nodeType === 1 && c.nodeName.toLowerCase() !== "object") {
                            var f = c,
                                h = (j = c.getAttribute("id")) || "__sizzle__",
                                k = c.parentNode,
                                E = /^\s*[+~]/.test(a);
                            j ? h = h.replace(/'/g, "\\$&") : c.setAttribute("id", h);
                            E && k && (c = c.parentNode);
                            try {
                                if (!E || k) return z(c.querySelectorAll("[id='" + h + "'] " + a), e)
                            } catch (v) {} finally {
                                j || f.removeAttribute("id")
                            }
                        }
                    }
                    return b(a, c, e, d)
                };
                for (var c in b) n[c] = b[c];
                a = null
            }
        }();
        (function () {
            var b = p.documentElement,
                a = b.matchesSelector || b.mozMatchesSelector || b.webkitMatchesSelector || b.msMatchesSelector;
            if (a) {
                var c = !a.call(p.createElement("div"), "div"),
                    e = !1;
                try {
                    a.call(p.documentElement, "[test!='']:sizzle")
                } catch (d) {
                    e = !0
                }
                n.matchesSelector = function (b, d) {
                    d = d.replace(/\=\s*([^'"\]]*)\s*\]/g, "='$1']");
                    if (!n.isXML(b)) try {
                        if (e || !l.match.PSEUDO.test(d) && !/!=/.test(d)) {
                            var f = a.call(b, d);
                            if (f || !c || b.document && b.document.nodeType !== 11) return f
                        }
                    } catch (j) {}
                    return n(d, null, null, [b]).length > 0
                }
            }
        })();
        (function () {
            var b = p.createElement("div");
            b.innerHTML = "<div class='test e'></div><div class='test'></div>";
            if (b.getElementsByClassName && b.getElementsByClassName("e").length !== 0 && (b.lastChild.className = "e", b.getElementsByClassName("e").length !== 1)) l.order.splice(1, 0, "CLASS"), l.find.CLASS = function (b, a, c) {
                if (typeof a.getElementsByClassName != "undefined" && !c) return a.getElementsByClassName(b[1])
            }, b = null
        })();
        p.documentElement.contains ? n.contains = function (b, a) {
            return b !== a && (b.contains ? b.contains(a) : !0)
        } : p.documentElement.compareDocumentPosition ? n.contains = function (b, a) {
            return !!(b.compareDocumentPosition(a) & 16)
        } : n.contains = function () {
            return !1
        };
        n.isXML = function (b) {
            return (b = (b ? b.ownerDocument || b : 0).documentElement) ? b.nodeName !== "HTML" : !1
        };
        var x = function (b, a) {
                for (var c, e = [], d = "", f = a.nodeType ? [a] : a; c = l.match.PSEUDO.exec(b);) d += c[0], b = b.replace(l.match.PSEUDO, "");
                b = l.relative[b] ? b + "*" : b;
                c = 0;
                for (var j = f.length; c < j; c++) n(b, f[c], e);
                return n.filter(d, e)
            };
        e.find = n;
        e.expr = n.selectors;
        e.expr[":"] = e.expr.filters;
        e.unique = n.uniqueSort;
        e.text = n.getText;
        e.isXMLDoc = n.isXML;
        e.contains = n.contains
    })();
    var eb = /Until$/,
        fb = /^(?:parents|prevUntil|prevAll)/,
        gb = /,/,
        Va = /^.[^:#\[\.,]*$/,
        hb = Array.prototype.slice,
        Ca = e.expr.match.POS,
        ib = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    e.fn.extend({
        find: function (b) {
            var a = this,
                c, d;
            if (typeof b != "string") return e(b).filter(function () {
                for (c = 0, d = a.length; c < d; c++) if (e.contains(a[c], this)) return !0
            });
            var f = this.pushStack("", "find", b),
                g, h, k;
            for (c = 0, d = this.length; c < d; c++) if (g = f.length, e.find(b, this[c], f), c > 0) for (h = g; h < f.length; h++) for (k = 0; k < g; k++) if (f[k] === f[h]) {
                f.splice(h--, 1);
                break
            }
            return f
        },
        has: function (b) {
            var a = e(b);
            return this.filter(function () {
                for (var b = 0, c = a.length; b < c; b++) if (e.contains(this, a[b])) return !0
            })
        },
        not: function (b) {
            return this.pushStack(J(this, b, !1), "not", b)
        },
        filter: function (b) {
            return this.pushStack(J(this, b, !0), "filter", b)
        },
        is: function (b) {
            return !!b && (typeof b == "string" ? e.filter(b, this).length > 0 : this.filter(b).length > 0)
        },
        closest: function (b, a) {
            var c = [],
                d, f, g = this[0];
            if (e.isArray(b)) {
                var h, k, i = {},
                    m = 1;
                if (g && b.length) {
                    for (d = 0, f = b.length; d < f; d++) k = b[d], i[k] || (i[k] = Ca.test(k) ? e(k, a || this.context) : k);
                    for (; g && g.ownerDocument && g !== a;) {
                        for (k in i) h = i[k], (h.jquery ? h.index(g) > -1 : e(g).is(h)) && c.push({
                            selector: k,
                            elem: g,
                            level: m
                        });
                        g = g.parentNode;
                        m++
                    }
                }
                return c
            }
            h = Ca.test(b) || typeof b != "string" ? e(b, a || this.context) : 0;
            for (d = 0, f = this.length; d < f; d++) for (g = this[d]; g;) {
                if (h ? h.index(g) > -1 : e.find.matchesSelector(g, b)) {
                    c.push(g);
                    break
                }
                g = g.parentNode;
                if (!g || !g.ownerDocument || g === a || g.nodeType === 11) break
            }
            c = c.length > 1 ? e.unique(c) : c;
            return this.pushStack(c, "closest", b)
        },
        index: function (b) {
            return !b || typeof b == "string" ? e.inArray(this[0], b ? e(b) : this.parent().children()) : e.inArray(b.jquery ? b[0] : b, this)
        },
        add: function (b, a) {
            var c = typeof b == "string" ? e(b, a) : e.makeArray(b && b.nodeType ? [b] : b),
                d = e.merge(this.get(), c);
            return this.pushStack(!c[0] || !c[0].parentNode || c[0].parentNode.nodeType === 11 || !d[0] || !d[0].parentNode || d[0].parentNode.nodeType === 11 ? d : e.unique(d))
        },
        andSelf: function () {
            return this.add(this.prevObject)
        }
    });
    e.each({
        parent: function (b) {
            return (b = b.parentNode) && b.nodeType !== 11 ? b : null
        },
        parents: function (b) {
            return e.dir(b, "parentNode")
        },
        parentsUntil: function (b, a, c) {
            return e.dir(b, "parentNode", c)
        },
        next: function (b) {
            return e.nth(b, 2, "nextSibling")
        },
        prev: function (b) {
            return e.nth(b, 2, "previousSibling")
        },
        nextAll: function (b) {
            return e.dir(b, "nextSibling")
        },
        prevAll: function (b) {
            return e.dir(b, "previousSibling")
        },
        nextUntil: function (b, a, c) {
            return e.dir(b, "nextSibling", c)
        },
        prevUntil: function (b, a, c) {
            return e.dir(b, "previousSibling", c)
        },
        siblings: function (b) {
            return e.sibling(b.parentNode.firstChild, b)
        },
        children: function (b) {
            return e.sibling(b.firstChild)
        },
        contents: function (b) {
            return e.nodeName(b, "iframe") ? b.contentDocument || b.contentWindow.document : e.makeArray(b.childNodes)
        }
    }, function (b, a) {
        e.fn[b] = function (c, d) {
            var f = e.map(this, a, c),
                g = hb.call(arguments);
            eb.test(b) || (d = c);
            d && typeof d == "string" && (f = e.filter(d, f));
            f = this.length > 1 && !ib[b] ? e.unique(f) : f;
            (this.length > 1 || gb.test(d)) && fb.test(b) && (f = f.reverse());
            return this.pushStack(f, b, g.join(","))
        }
    });
    e.extend({
        filter: function (b, a, c) {
            c && (b = ":not(" + b + ")");
            return a.length === 1 ? e.find.matchesSelector(a[0], b) ? [a[0]] : [] : e.find.matches(b, a)
        },
        dir: function (b, a, d) {
            for (var f = [], b = b[a]; b && b.nodeType !== 9 && (d === c || b.nodeType !== 1 || !e(b).is(d));) b.nodeType === 1 && f.push(b), b = b[a];
            return f
        },
        nth: function (b, a, c) {
            for (var a = a || 1, e = 0; b; b = b[c]) if (b.nodeType === 1 && ++e === a) break;
            return b
        },
        sibling: function (b, a) {
            for (var c = []; b; b = b.nextSibling) b.nodeType === 1 && b !== a && c.push(b);
            return c
        }
    });
    var jb = / jQuery\d+="(?:\d+|null)"/g,
        sa = /^\s+/,
        Da = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/ig,
        Ea = /<([\w:]+)/,
        kb = /<tbody/i,
        lb = /<|&#?\w+;/,
        Fa = /<(?:script|object|embed|option|style)/i,
        Ga = /checked\s*(?:[^=]|=\s*.checked.)/i,
        mb = /\/(java|ecma)script/i,
        Ua = /^\s*<!(?:\[CDATA\[|\-\-)/,
        N = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            legend: [1, "<fieldset>", "</fieldset>"],
            thead: [1, "<table>", "</table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
            area: [1, "<map>", "</map>"],
            _default: [0, "", ""]
        };
    N.optgroup = N.option;
    N.tbody = N.tfoot = N.colgroup = N.caption = N.thead;
    N.th = N.td;
    e.support.htmlSerialize || (N._default = [1, "div<div>", "</div>"]);
    e.fn.extend({
        text: function (b) {
            return e.isFunction(b) ? this.each(function (a) {
                var c = e(this);
                c.text(b.call(this, a, c.text()))
            }) : typeof b != "object" && b !== c ? this.empty().append((this[0] && this[0].ownerDocument || p).createTextNode(b)) : e.text(this)
        },
        wrapAll: function (b) {
            if (e.isFunction(b)) return this.each(function (a) {
                e(this).wrapAll(b.call(this, a))
            });
            if (this[0]) {
                var a = e(b, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && a.insertBefore(this[0]);
                a.map(function () {
                    for (var b = this; b.firstChild && b.firstChild.nodeType === 1;) b = b.firstChild;
                    return b
                }).append(this)
            }
            return this
        },
        wrapInner: function (b) {
            return e.isFunction(b) ? this.each(function (a) {
                e(this).wrapInner(b.call(this, a))
            }) : this.each(function () {
                var a = e(this),
                    c = a.contents();
                c.length ? c.wrapAll(b) : a.append(b)
            })
        },
        wrap: function (b) {
            return this.each(function () {
                e(this).wrapAll(b)
            })
        },
        unwrap: function () {
            return this.parent().each(function () {
                e.nodeName(this, "body") || e(this).replaceWith(this.childNodes)
            }).end()
        },
        append: function () {
            return this.domManip(arguments, !0, function (b) {
                this.nodeType === 1 && this.appendChild(b)
            })
        },
        prepend: function () {
            return this.domManip(arguments, !0, function (b) {
                this.nodeType === 1 && this.insertBefore(b, this.firstChild)
            })
        },
        before: function () {
            if (this[0] && this[0].parentNode) return this.domManip(arguments, !1, function (b) {
                this.parentNode.insertBefore(b, this)
            });
            if (arguments.length) {
                var b = e(arguments[0]);
                b.push.apply(b, this.toArray());
                return this.pushStack(b, "before", arguments)
            }
        },
        after: function () {
            if (this[0] && this[0].parentNode) return this.domManip(arguments, !1, function (b) {
                this.parentNode.insertBefore(b, this.nextSibling)
            });
            if (arguments.length) {
                var b = this.pushStack(this, "after", arguments);
                b.push.apply(b, e(arguments[0]).toArray());
                return b
            }
        },
        remove: function (b, a) {
            for (var c = 0, d;
            (d = this[c]) != null; c++) if (!b || e.filter(b, [d]).length)!a && d.nodeType === 1 && (e.cleanData(d.getElementsByTagName("*")), e.cleanData([d])), d.parentNode && d.parentNode.removeChild(d);
            return this
        },
        empty: function () {
            for (var b = 0, a;
            (a = this[b]) != null; b++) for (a.nodeType === 1 && e.cleanData(a.getElementsByTagName("*")); a.firstChild;) a.removeChild(a.firstChild);
            return this
        },
        clone: function (b, a) {
            b = b == null ? !1 : b;
            a = a == null ? b : a;
            return this.map(function () {
                return e.clone(this, b, a)
            })
        },
        html: function (b) {
            if (b === c) return this[0] && this[0].nodeType === 1 ? this[0].innerHTML.replace(jb, "") : null;
            if (typeof b == "string" && !Fa.test(b) && (e.support.leadingWhitespace || !sa.test(b)) && !N[(Ea.exec(b) || ["", ""])[1].toLowerCase()]) {
                b = b.replace(Da, "<$1></$2>");
                try {
                    for (var a = 0, d = this.length; a < d; a++) this[a].nodeType === 1 && (e.cleanData(this[a].getElementsByTagName("*")), this[a].innerHTML = b)
                } catch (f) {
                    this.empty().append(b)
                }
            } else e.isFunction(b) ? this.each(function (a) {
                var c = e(this);
                c.html(b.call(this, a, c.html()))
            }) : this.empty().append(b);
            return this
        },
        replaceWith: function (b) {
            if (this[0] && this[0].parentNode) {
                if (e.isFunction(b)) return this.each(function (a) {
                    var c = e(this),
                        d = c.html();
                    c.replaceWith(b.call(this, a, d))
                });
                typeof b != "string" && (b = e(b).detach());
                return this.each(function () {
                    var a = this.nextSibling,
                        c = this.parentNode;
                    e(this).remove();
                    a ? e(a).before(b) : e(c).append(b)
                })
            }
            return this.length ? this.pushStack(e(e.isFunction(b) ? b() : b), "replaceWith", b) : this
        },
        detach: function (b) {
            return this.remove(b, !0)
        },
        domManip: function (b, a, d) {
            var f, g, h, k, i = b[0],
                n = [];
            if (!e.support.checkClone && arguments.length === 3 && typeof i == "string" && Ga.test(i)) return this.each(function () {
                e(this).domManip(b, a, d, !0)
            });
            if (e.isFunction(i)) return this.each(function (f) {
                var g = e(this);
                b[0] = i.call(this, f, a ? g.html() : c);
                g.domManip(b, a, d)
            });
            if (this[0]) {
                k = i && i.parentNode;
                e.support.parentNode && k && k.nodeType === 11 && k.childNodes.length === this.length ? f = {
                    fragment: k
                } : f = e.buildFragment(b, this, n);
                h = f.fragment;
                h.childNodes.length === 1 ? g = h = h.firstChild : g = h.firstChild;
                if (g) {
                    a = a && e.nodeName(g, "tr");
                    g = 0;
                    k = this.length;
                    for (var l = k - 1; g < k; g++) d.call(a ? e.nodeName(this[g], "table") ? this[g].getElementsByTagName("tbody")[0] || this[g].appendChild(this[g].ownerDocument.createElement("tbody")) : this[g] : this[g], f.cacheable || k > 1 && g < l ? e.clone(h, !0, !0) : h)
                }
                n.length && e.each(n, m)
            }
            return this
        }
    });
    e.buildFragment = function (b, a, c) {
        var d, f, g, h;
        a && a[0] && (h = a[0].ownerDocument || a[0]);
        h.createDocumentFragment || (h = p);
        b.length === 1 && typeof b[0] == "string" && b[0].length < 512 && h === p && b[0].charAt(0) === "<" && !Fa.test(b[0]) && (e.support.checkClone || !Ga.test(b[0])) && (f = !0, g = e.fragments[b[0]], g && g !== 1 && (d = g));
        d || (d = h.createDocumentFragment(), e.clean(b, h, d, c));
        f && (e.fragments[b[0]] = g ? d : 1);
        return {
            fragment: d,
            cacheable: f
        }
    };
    e.fragments = {};
    e.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function (b, a) {
        e.fn[b] = function (c) {
            var d = [],
                c = e(c),
                f = this.length === 1 && this[0].parentNode;
            if (f && f.nodeType === 11 && f.childNodes.length === 1 && c.length === 1) return c[a](this[0]), this;
            for (var f = 0, g = c.length; f < g; f++) {
                var h = (f > 0 ? this.clone(!0) : this).get();
                e(c[f])[a](h);
                d = d.concat(h)
            }
            return this.pushStack(d, b, c.selector)
        }
    });
    e.extend({
        clone: function (b, a, c) {
            var d = b.cloneNode(!0),
                f, g, h;
            if ((!e.support.noCloneEvent || !e.support.noCloneChecked) && (b.nodeType === 1 || b.nodeType === 11) && !e.isXMLDoc(b)) {
                u(b, d);
                f = t(b);
                g = t(d);
                for (h = 0; f[h]; ++h) u(f[h], g[h])
            }
            if (a && (w(b, d), c)) {
                f = t(b);
                g = t(d);
                for (h = 0; f[h]; ++h) w(f[h], g[h])
            }
            return d
        },
        clean: function (b, a, c, d) {
            a = a || p;
            typeof a.createElement == "undefined" && (a = a.ownerDocument || a[0] && a[0].ownerDocument || p);
            for (var f = [], g, h = 0, k;
            (k = b[h]) != null; h++) if (typeof k == "number" && (k += ""), k) {
                if (typeof k == "string") if (lb.test(k)) {
                    k = k.replace(Da, "<$1></$2>");
                    g = (Ea.exec(k) || ["", ""])[1].toLowerCase();
                    var i = N[g] || N._default,
                        m = i[0],
                        n = a.createElement("div");
                    for (n.innerHTML = i[1] + k + i[2]; m--;) n = n.lastChild;
                    if (!e.support.tbody) {
                        m = kb.test(k);
                        i = g === "table" && !m ? n.firstChild && n.firstChild.childNodes : i[1] === "<table>" && !m ? n.childNodes : [];
                        for (g = i.length - 1; g >= 0; --g) e.nodeName(i[g], "tbody") && !i[g].childNodes.length && i[g].parentNode.removeChild(i[g])
                    }!e.support.leadingWhitespace && sa.test(k) && n.insertBefore(a.createTextNode(sa.exec(k)[0]), n.firstChild);
                    k = n.childNodes
                } else k = a.createTextNode(k);
                var l;
                if (!e.support.appendChecked) if (k[0] && typeof (l = k.length) == "number") for (g = 0; g < l; g++) x(k[g]);
                else x(k);
                k.nodeType ? f.push(k) : f = e.merge(f, k)
            }
            if (c) {
                b = function (b) {
                    return !b.type || mb.test(b.type)
                };
                for (h = 0; f[h]; h++) d && e.nodeName(f[h], "script") && (!f[h].type || f[h].type.toLowerCase() === "text/javascript") ? d.push(f[h].parentNode ? f[h].parentNode.removeChild(f[h]) : f[h]) : (f[h].nodeType === 1 && (a = e.grep(f[h].getElementsByTagName("script"), b), f.splice.apply(f, [h + 1, 0].concat(a))), c.appendChild(f[h]))
            }
            return f
        },
        cleanData: function (b) {
            for (var a, c, d = e.cache, f = e.expando, g = e.event.special, h = e.support.deleteExpando, k = 0, i;
            (i = b[k]) != null; k++) if (!i.nodeName || !e.noData[i.nodeName.toLowerCase()]) if (c = i[e.expando]) {
                if ((a = d[c] && d[c][f]) && a.events) {
                    for (var m in a.events) g[m] ? e.event.remove(i, m) : e.removeEvent(i, m, a.handle);
                    a.handle && (a.handle.elem = null)
                }
                h ? delete i[e.expando] : i.removeAttribute && i.removeAttribute(e.expando);
                delete d[c]
            }
        }
    });
    var Ha = /alpha\([^)]*\)/i,
        nb = /opacity=([^)]*)/,
        ob = /([A-Z]|^ms)/g,
        Ia = /^-?\d+(?:px)?$/i,
        pb = /^-?\d/,
        qb = /^[+\-]=/,
        rb = /[^+\-\.\de]+/g,
        sb = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        Sa = ["Left", "Right"],
        Ta = ["Top", "Bottom"],
        X, Ja, Ka;
    e.fn.css = function (b, a) {
        return arguments.length === 2 && a === c ? this : e.access(this, b, a, !0, function (b, a, d) {
            return d !== c ? e.style(b, a, d) : e.css(b, a)
        })
    };
    e.extend({
        cssHooks: {
            opacity: {
                get: function (b, a) {
                    if (a) {
                        var c = X(b, "opacity", "opacity");
                        return c === "" ? "1" : c
                    }
                    return b.style.opacity
                }
            }
        },
        cssNumber: {
            fillOpacity: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": e.support.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function (b, a, d, f) {
            if (b && b.nodeType !== 3 && b.nodeType !== 8 && b.style) {
                var g, h = e.camelCase(a),
                    k = b.style,
                    i = e.cssHooks[h],
                    a = e.cssProps[h] || h;
                if (d === c) return i && "get" in i && (g = i.get(b, !1, f)) !== c ? g : k[a];
                f = typeof d;
                if (!(f === "number" && isNaN(d) || d == null)) if (f === "string" && qb.test(d) && (d = +d.replace(rb, "") + parseFloat(e.css(b, a)), f = "number"), f === "number" && !e.cssNumber[h] && (d += "px"), !i || !("set" in i) || (d = i.set(b, d)) !== c) try {
                    k[a] = d
                } catch (m) {}
            }
        },
        css: function (b, a, d) {
            var f, g;
            a = e.camelCase(a);
            g = e.cssHooks[a];
            a = e.cssProps[a] || a;
            a === "cssFloat" && (a = "float");
            if (g && "get" in g && (f = g.get(b, !0, d)) !== c) return f;
            if (X) return X(b, a)
        },
        swap: function (b, a, c) {
            var e = {},
                d;
            for (d in a) e[d] = b.style[d], b.style[d] = a[d];
            c.call(b);
            for (d in a) b.style[d] = e[d]
        }
    });
    e.curCSS = e.css;
    e.each(["height", "width"], function (b, a) {
        e.cssHooks[a] = {
            get: function (b, c, d) {
                var f;
                if (c) {
                    if (b.offsetWidth !== 0) return n(b, a, d);
                    e.swap(b, sb, function () {
                        f = n(b, a, d)
                    });
                    return f
                }
            },
            set: function (b, a) {
                if (!Ia.test(a)) return a;
                a = parseFloat(a);
                if (a >= 0) return a + "px"
            }
        }
    });
    e.support.opacity || (e.cssHooks.opacity = {
        get: function (b, a) {
            return nb.test((a && b.currentStyle ? b.currentStyle.filter : b.style.filter) || "") ? parseFloat(RegExp.$1) / 100 + "" : a ? "1" : ""
        },
        set: function (b, a) {
            var c = b.style,
                d = b.currentStyle;
            c.zoom = 1;
            var f = e.isNaN(a) ? "" : "alpha(opacity=" + a * 100 + ")",
                d = d && d.filter || c.filter || "";
            c.filter = Ha.test(d) ? d.replace(Ha, f) : d + " " + f
        }
    });
    e(function () {
        e.support.reliableMarginRight || (e.cssHooks.marginRight = {
            get: function (b, a) {
                var c;
                e.swap(b, {
                    display: "inline-block"
                }, function () {
                    a ? c = X(b, "margin-right", "marginRight") : c = b.style.marginRight
                });
                return c
            }
        })
    });
    p.defaultView && p.defaultView.getComputedStyle && (Ja = function (b, a) {
        var d, f, a = a.replace(ob, "-$1").toLowerCase();
        if (!(f = b.ownerDocument.defaultView)) return c;
        if (f = f.getComputedStyle(b, null)) d = f.getPropertyValue(a), d === "" && !e.contains(b.ownerDocument.documentElement, b) && (d = e.style(b, a));
        return d
    });
    p.documentElement.currentStyle && (Ka = function (b, a) {
        var c, e = b.currentStyle && b.currentStyle[a],
            d = b.runtimeStyle && b.runtimeStyle[a],
            f = b.style;
        !Ia.test(e) && pb.test(e) && (c = f.left, d && (b.runtimeStyle.left = b.currentStyle.left), f.left = a === "fontSize" ? "1em" : e || 0, e = f.pixelLeft + "px", f.left = c, d && (b.runtimeStyle.left = d));
        return e === "" ? "auto" : e
    });
    X = Ja || Ka;
    e.expr && e.expr.filters && (e.expr.filters.hidden = function (b) {
        var a = b.offsetHeight;
        return b.offsetWidth === 0 && a === 0 || !e.support.reliableHiddenOffsets && (b.style.display || e.css(b, "display")) === "none"
    }, e.expr.filters.visible = function (b) {
        return !e.expr.filters.hidden(b)
    });
    var tb = /%20/g,
        Ra = /\[\]$/,
        La = /\r?\n/g,
        ub = /#.*$/,
        vb = /^(.*?):[ \t]*([^\r\n]*)\r?$/mg,
        wb = /^(?:color|date|datetime|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,
        xb = /^(?:GET|HEAD)$/,
        yb = /^\/\//,
        Ma = /\?/,
        zb = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
        Ab = /^(?:select|textarea)/i,
        wa = /\s+/,
        Bb = /([?&])_=[^&]*/,
        Na = /^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+))?)?/,
        Oa = e.fn.load,
        ma = {},
        Pa = {},
        U, V;
    try {
        U = H.href
    } catch (Hb) {
        U = p.createElement("a"), U.href = "", U = U.href
    }
    V = Na.exec(U.toLowerCase()) || [];
    e.fn.extend({
        load: function (b, a, d) {
            if (typeof b != "string" && Oa) return Oa.apply(this, arguments);
            if (!this.length) return this;
            var f = b.indexOf(" ");
            if (f >= 0) var g = b.slice(f, b.length),
                b = b.slice(0, f);
            f = "GET";
            a && (e.isFunction(a) ? (d = a, a = c) : typeof a == "object" && (a = e.param(a, e.ajaxSettings.traditional), f = "POST"));
            var h = this;
            e.ajax({
                url: b,
                type: f,
                dataType: "html",
                data: a,
                complete: function (b, a, c) {
                    c = b.responseText;
                    b.isResolved() && (b.done(function (b) {
                        c = b
                    }), h.html(g ? e("<div>").append(c.replace(zb, "")).find(g) : c));
                    d && h.each(d, [c, a, b])
                }
            });
            return this
        },
        serialize: function () {
            return e.param(this.serializeArray())
        },
        serializeArray: function () {
            return this.map(function () {
                return this.elements ? e.makeArray(this.elements) : this
            }).filter(function () {
                return this.name && !this.disabled && (this.checked || Ab.test(this.nodeName) || wb.test(this.type))
            }).map(function (b, a) {
                var c = e(this).val();
                return c == null ? null : e.isArray(c) ? e.map(c, function (b) {
                    return {
                        name: a.name,
                        value: b.replace(La, "\r\n")
                    }
                }) : {
                    name: a.name,
                    value: c.replace(La, "\r\n")
                }
            }).get()
        }
    });
    e.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "), function (b, a) {
        e.fn[a] = function (b) {
            return this.bind(a, b)
        }
    });
    e.each(["get", "post"], function (b, a) {
        e[a] = function (b, d, f, g) {
            e.isFunction(d) && (g = g || f, f = d, d = c);
            return e.ajax({
                type: a,
                url: b,
                data: d,
                success: f,
                dataType: g
            })
        }
    });
    e.extend({
        getScript: function (b, a) {
            return e.get(b, c, a, "script")
        },
        getJSON: function (b, a, c) {
            return e.get(b, a, c, "json")
        },
        ajaxSetup: function (b, a) {
            a ? e.extend(!0, b, e.ajaxSettings, a) : (a = b, b = e.extend(!0, e.ajaxSettings, a));
            for (var c in {
                context: 1,
                url: 1
            }) c in a ? b[c] = a[c] : c in e.ajaxSettings && (b[c] = e.ajaxSettings[c]);
            return b
        },
        ajaxSettings: {
            url: U,
            isLocal: /^(?:about|app|app\-storage|.+\-extension|file|widget):$/.test(V[1]),
            global: !0,
            type: "GET",
            contentType: "application/x-www-form-urlencoded",
            processData: !0,
            async: !0,
            accepts: {
                xml: "application/xml, text/xml",
                html: "text/html",
                text: "text/plain",
                json: "application/json, text/javascript",
                "*": "*/*"
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText"
            },
            converters: {
                "* text": a.String,
                "text html": !0,
                "text json": e.parseJSON,
                "text xml": e.parseXML
            }
        },
        ajaxPrefilter: s(ma),
        ajaxTransport: s(Pa),
        ajax: function (b, a) {
            function d(b, a, j, l) {
                if (H !== 2) {
                    H = 2;
                    M && clearTimeout(M);
                    z = c;
                    o = l || "";
                    y.readyState = b ? 4 : 0;
                    var p, v, q;
                    if (j) {
                        var l = f,
                            r = y,
                            s = l.contents,
                            I = l.dataTypes,
                            u = l.responseFields,
                            t, w, C, B;
                        for (w in u) w in j && (r[u[w]] = j[w]);
                        for (; I[0] === "*";) I.shift(), t === c && (t = l.mimeType || r.getResponseHeader("content-type"));
                        if (t) for (w in s) if (s[w] && s[w].test(t)) {
                            I.unshift(w);
                            break
                        }
                        if (I[0] in j) C = I[0];
                        else {
                            for (w in j) {
                                if (!I[0] || l.converters[w + " " + I[0]]) {
                                    C = w;
                                    break
                                }
                                B || (B = w)
                            }
                            C = C || B
                        }
                        C ? (C !== I[0] && I.unshift(C), j = j[C]) : j = void 0
                    } else j = c;
                    if (b >= 200 && b < 300 || b === 304) {
                        if (f.ifModified) {
                            if (t = y.getResponseHeader("Last-Modified")) e.lastModified[n] = t;
                            if (t = y.getResponseHeader("Etag")) e.etag[n] = t
                        }
                        if (b === 304) a = "notmodified", p = !0;
                        else try {
                            t = f;
                            t.dataFilter && (j = t.dataFilter(j, t.dataType));
                            var ca = t.dataTypes;
                            w = {};
                            var P, L, J = ca.length,
                                K, F = ca[0],
                                A, S, D, R, Q;
                            for (P = 1; P < J; P++) {
                                if (P === 1) for (L in t.converters) typeof L == "string" && (w[L.toLowerCase()] = t.converters[L]);
                                A = F;
                                F = ca[P];
                                if (F === "*") F = A;
                                else if (A !== "*" && A !== F) {
                                    S = A + " " + F;
                                    D = w[S] || w["* " + F];
                                    if (!D) for (R in Q = c, w) if (K = R.split(" "), K[0] === A || K[0] === "*") if (Q = w[K[1] + " " + F]) {
                                        R = w[R];
                                        R === !0 ? D = Q : Q === !0 && (D = R);
                                        break
                                    }!D && !Q && e.error("No conversion from " + S.replace(" ", " to "));
                                    D !== !0 && (j = D ? D(j) : Q(R(j)))
                                }
                            }
                            v = j;
                            a = "success";
                            p = !0
                        } catch (pa) {
                            a = "parsererror", q = pa
                        }
                    } else if (q = a, !a || b) a = "error", b < 0 && (b = 0);
                    y.status = b;
                    y.statusText = a;
                    p ? k.resolveWith(g, [v, a, y]) : k.rejectWith(g, [y, a, q]);
                    y.statusCode(m);
                    m = c;
                    x && h.trigger("ajax" + (p ? "Success" : "Error"), [y, f, p ? v : q]);
                    i.resolveWith(g, [y, a]);
                    x && (h.trigger("ajaxComplete", [y, f]), --e.active || e.event.trigger("ajaxStop"))
                }
            }
            typeof b == "object" && (a = b, b = c);
            a = a || {};
            var f = e.ajaxSetup({}, a),
                g = f.context || f,
                h = g !== f && (g.nodeType || g instanceof e) ? e(g) : e.event,
                k = e.Deferred(),
                i = e._Deferred(),
                m = f.statusCode || {},
                n, l = {},
                p = {},
                o, r, z, M, s, H = 0,
                x, I, y = {
                    readyState: 0,
                    setRequestHeader: function (b, a) {
                        if (!H) {
                            var c = b.toLowerCase();
                            b = p[c] = p[c] || b;
                            l[b] = a
                        }
                        return this
                    },
                    getAllResponseHeaders: function () {
                        return H === 2 ? o : null
                    },
                    getResponseHeader: function (b) {
                        var a;
                        if (H === 2) {
                            if (!r) for (r = {}; a = vb.exec(o);) r[a[1].toLowerCase()] = a[2];
                            a = r[b.toLowerCase()]
                        }
                        return a === c ? null : a
                    },
                    overrideMimeType: function (b) {
                        H || (f.mimeType = b);
                        return this
                    },
                    abort: function (b) {
                        b = b || "abort";
                        z && z.abort(b);
                        d(0, b);
                        return this
                    }
                };
            k.promise(y);
            y.success = y.done;
            y.error = y.fail;
            y.complete = i.done;
            y.statusCode = function (b) {
                if (b) {
                    var a;
                    if (H < 2) for (a in b) m[a] = [m[a], b[a]];
                    else a = b[y.status], y.then(a, a)
                }
                return this
            };
            f.url = ((b || f.url) + "").replace(ub, "").replace(yb, V[1] + "//");
            f.dataTypes = e.trim(f.dataType || "*").toLowerCase().split(wa);
            f.crossDomain == null && (s = Na.exec(f.url.toLowerCase()), f.crossDomain = !(!s || s[1] == V[1] && s[2] == V[2] && (s[3] || (s[1] === "http:" ? 80 : 443)) == (V[3] || (V[1] === "http:" ? 80 : 443))));
            f.data && f.processData && typeof f.data != "string" && (f.data = e.param(f.data, f.traditional));
            q(ma, f, a, y);
            if (H === 2) return !1;
            x = f.global;
            f.type = f.type.toUpperCase();
            f.hasContent = !xb.test(f.type);
            x && e.active++ === 0 && e.event.trigger("ajaxStart");
            if (!f.hasContent && (f.data && (f.url += (Ma.test(f.url) ? "&" : "?") + f.data), n = f.url, f.cache === !1)) {
                s = e.now();
                var u = f.url.replace(Bb, "$1_=" + s);
                f.url = u + (u === f.url ? (Ma.test(f.url) ? "&" : "?") + "_=" + s : "")
            }(f.data && f.hasContent && f.contentType !== !1 || a.contentType) && y.setRequestHeader("Content-Type", f.contentType);
            f.ifModified && (n = n || f.url, e.lastModified[n] && y.setRequestHeader("If-Modified-Since", e.lastModified[n]), e.etag[n] && y.setRequestHeader("If-None-Match", e.etag[n]));
            y.setRequestHeader("Accept", f.dataTypes[0] && f.accepts[f.dataTypes[0]] ? f.accepts[f.dataTypes[0]] + (f.dataTypes[0] !== "*" ? ", */*; q=0.01" : "") : f.accepts["*"]);
            for (I in f.headers) y.setRequestHeader(I, f.headers[I]);
            if (f.beforeSend && (f.beforeSend.call(g, y, f) === !1 || H === 2)) return y.abort(), !1;
            for (I in {
                success: 1,
                error: 1,
                complete: 1
            }) y[I](f[I]);
            if (z = q(Pa, f, a, y)) {
                y.readyState = 1;
                x && h.trigger("ajaxSend", [y, f]);
                f.async && f.timeout > 0 && (M = setTimeout(function () {
                    y.abort("timeout")
                }, f.timeout));
                try {
                    H = 1, z.send(l, d)
                } catch (t) {
                    status < 2 ? d(-1, t) : e.error(t)
                }
            } else d(-1, "No Transport");
            return y
        },
        param: function (b, a) {
            var d = [],
                f = function (b, a) {
                    a = e.isFunction(a) ? a() : a;
                    d[d.length] = encodeURIComponent(b) + "=" + encodeURIComponent(a)
                };
            a === c && (a = e.ajaxSettings.traditional);
            if (e.isArray(b) || b.jquery && !e.isPlainObject(b)) e.each(b, function () {
                f(this.name, this.value)
            });
            else for (var g in b) l(g, b[g], a, f);
            return d.join("&").replace(tb, "+")
        }
    });
    e.extend({
        active: 0,
        lastModified: {},
        etag: {}
    });
    var Cb = e.now(),
        ka = /(\=)\?(&|$)|\?\?/i;
    e.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function () {
            return e.expando + "_" + Cb++
        }
    });
    e.ajaxPrefilter("json jsonp", function (b, c, d) {
        c = b.contentType === "application/x-www-form-urlencoded" && typeof b.data == "string";
        if (b.dataTypes[0] === "jsonp" || b.jsonp !== !1 && (ka.test(b.url) || c && ka.test(b.data))) {
            var f, g = b.jsonpCallback = e.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback,
                h = a[g],
                k = b.url,
                i = b.data,
                m = "$1" + g + "$2";
            b.jsonp !== !1 && (k = k.replace(ka, m), b.url === k && (c && (i = i.replace(ka, m)), b.data === i && (k += (/\?/.test(k) ? "&" : "?") + b.jsonp + "=" + g)));
            b.url = k;
            b.data = i;
            a[g] = function (b) {
                f = [b]
            };
            d.always(function () {
                a[g] = h;
                f && e.isFunction(h) && a[g](f[0])
            });
            b.converters["script json"] = function () {
                f || e.error(g + " was not called");
                return f[0]
            };
            b.dataTypes[0] = "json";
            return "script"
        }
    });
    e.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /javascript|ecmascript/
        },
        converters: {
            "text script": function (b) {
                e.globalEval(b);
                return b
            }
        }
    });
    e.ajaxPrefilter("script", function (b) {
        b.cache === c && (b.cache = !1);
        b.crossDomain && (b.type = "GET", b.global = !1)
    });
    e.ajaxTransport("script", function (b) {
        if (b.crossDomain) {
            var a, e = p.head || p.getElementsByTagName("head")[0] || p.documentElement;
            return {
                send: function (d, f) {
                    a = p.createElement("script");
                    a.async = "async";
                    b.scriptCharset && (a.charset = b.scriptCharset);
                    a.src = b.url;
                    a.onload = a.onreadystatechange = function (b, d) {
                        if (d || !a.readyState || /loaded|complete/.test(a.readyState)) a.onload = a.onreadystatechange = null, e && a.parentNode && e.removeChild(a), a = c, d || f(200, "success")
                    };
                    e.insertBefore(a, e.firstChild)
                },
                abort: function () {
                    a && a.onload(0, 1)
                }
            }
        }
    });
    var ta = a.ActiveXObject ?
    function () {
        for (var b in Z) Z[b](0, 1)
    } : !1, Db = 0, Z;
    e.ajaxSettings.xhr = a.ActiveXObject ?
    function () {
        var b;
        if (!(b = !this.isLocal && o())) a: {
            try {
                b = new a.ActiveXObject("Microsoft.XMLHTTP");
                break a
            } catch (c) {}
            b = void 0
        }
        return b
    } : o;
    (function (b) {
        e.extend(e.support, {
            ajax: !! b,
            cors: !! b && "withCredentials" in b
        })
    })(e.ajaxSettings.xhr());
    e.support.ajax && e.ajaxTransport(function (b) {
        if (!b.crossDomain || e.support.cors) {
            var d;
            return {
                send: function (f, g) {
                    var h = b.xhr(),
                        k, i;
                    b.username ? h.open(b.type, b.url, b.async, b.username, b.password) : h.open(b.type, b.url, b.async);
                    if (b.xhrFields) for (i in b.xhrFields) h[i] = b.xhrFields[i];
                    b.mimeType && h.overrideMimeType && h.overrideMimeType(b.mimeType);
                    !b.crossDomain && !f["X-Requested-With"] && (f["X-Requested-With"] = "XMLHttpRequest");
                    try {
                        for (i in f) h.setRequestHeader(i, f[i])
                    } catch (m) {}
                    h.send(b.hasContent && b.data || null);
                    d = function (a, f) {
                        var i, m, n, l, p;
                        try {
                            if (d && (f || h.readyState === 4)) if (d = c, k && (h.onreadystatechange = e.noop, ta && delete Z[k]), f) h.readyState !== 4 && h.abort();
                            else {
                                i = h.status;
                                n = h.getAllResponseHeaders();
                                l = {};
                                p = h.responseXML;
                                p && p.documentElement && (l.xml = p);
                                l.text = h.responseText;
                                try {
                                    m = h.statusText
                                } catch (o) {
                                    m = ""
                                }!i && b.isLocal && !b.crossDomain ? i = l.text ? 200 : 404 : i === 1223 && (i = 204)
                            }
                        } catch (q) {
                            f || g(-1, q)
                        }
                        l && g(i, m, l, n)
                    };
                    !b.async || h.readyState === 4 ? d() : (k = ++Db, ta && (Z || (Z = {}, e(a).unload(ta)), Z[k] = d), h.onreadystatechange = d)
                },
                abort: function () {
                    d && d(0, 1)
                }
            }
        }
    });
    var la = {},
        O, W, Eb = /^(?:toggle|show|hide)$/,
        Fb = /^([+\-]=)?([\d+.\-]+)([a-z%]*)$/i,
        aa, va = [
            ["height", "marginTop", "marginBottom", "paddingTop", "paddingBottom"],
            ["width", "marginLeft", "marginRight", "paddingLeft", "paddingRight"],
            ["opacity"]
        ],
        fa, ua = a.webkitRequestAnimationFrame || a.mozRequestAnimationFrame || a.oRequestAnimationFrame;
    e.fn.extend({
        show: function (b, a, c) {
            var d, h;
            if (b || b === 0) return this.animate(g("show", 3), b, a, c);
            b = 0;
            for (a = this.length; b < a; b++) d = this[b], d.style && (h = d.style.display, !e._data(d, "olddisplay") && h === "none" && (h = d.style.display = ""), h === "" && e.css(d, "display") === "none" && e._data(d, "olddisplay", f(d.nodeName)));
            for (b = 0; b < a; b++) if (d = this[b], d.style && (h = d.style.display, h === "" || h === "none")) d.style.display = e._data(d, "olddisplay") || "";
            return this
        },
        hide: function (b, a, c) {
            if (b || b === 0) return this.animate(g("hide", 3), b, a, c);
            b = 0;
            for (a = this.length; b < a; b++) this[b].style && (c = e.css(this[b], "display"), c !== "none" && !e._data(this[b], "olddisplay") && e._data(this[b], "olddisplay", c));
            for (b = 0; b < a; b++) this[b].style && (this[b].style.display = "none");
            return this
        },
        _toggle: e.fn.toggle,
        toggle: function (b, a, c) {
            var d = typeof b == "boolean";
            e.isFunction(b) && e.isFunction(a) ? this._toggle.apply(this, arguments) : b == null || d ? this.each(function () {
                var a = d ? b : e(this).is(":hidden");
                e(this)[a ? "show" : "hide"]()
            }) : this.animate(g("toggle", 3), b, a, c);
            return this
        },
        fadeTo: function (b, a, c, e) {
            return this.filter(":hidden").css("opacity", 0).show().end().animate({
                opacity: a
            }, b, c, e)
        },
        animate: function (b, a, c, d) {
            var g = e.speed(a, c, d);
            if (e.isEmptyObject(b)) return this.each(g.complete, [!1]);
            b = e.extend({}, b);
            return this[g.queue === !1 ? "each" : "queue"](function () {
                var v;
                g.queue === !1 && e._mark(this);
                var a = e.extend({}, g),
                    c = this.nodeType === 1,
                    d = c && e(this).is(":hidden"),
                    h, k, j, i, m, n, l, p, o;
                a.animatedProperties = {};
                for (j in b) {
                    h = e.camelCase(j);
                    j !== h && (b[h] = b[j], delete b[j]);
                    k = b[h];
                    e.isArray(k) ? (a.animatedProperties[h] = k[1], v = b[h] = k[0], k = v) : a.animatedProperties[h] = a.specialEasing && a.specialEasing[h] || a.easing || "swing";
                    if (k === "hide" && d || k === "show" && !d) return a.complete.call(this);
                    c && (h === "height" || h === "width") && (a.overflow = [this.style.overflow, this.style.overflowX, this.style.overflowY], e.css(this, "display") === "inline" && e.css(this, "float") === "none" && (e.support.inlineBlockNeedsLayout ? (i = f(this.nodeName), i === "inline" ? this.style.display = "inline-block" : (this.style.display = "inline", this.style.zoom = 1)) : this.style.display = "inline-block"))
                }
                a.overflow != null && (this.style.overflow = "hidden");
                for (j in b) m = new e.fx(this, a, j), k = b[j], Eb.test(k) ? m[k === "toggle" ? d ? "show" : "hide" : k]() : (n = Fb.exec(k), l = m.cur(), n ? (p = parseFloat(n[2]), o = n[3] || (e.cssNumber[j] ? "" : "px"), o !== "px" && (e.style(this, j, (p || 1) + o), l *= (p || 1) / m.cur(), e.style(this, j, l + o)), n[1] && (p = (n[1] === "-=" ? -1 : 1) * p + l), m.custom(l, p, o)) : m.custom(l, k, ""));
                return !0
            })
        },
        stop: function (b, a) {
            b && this.queue([]);
            this.each(function () {
                var b = e.timers,
                    c = b.length;
                for (a || e._unmark(!0, this); c--;) b[c].elem === this && (a && b[c](!0), b.splice(c, 1))
            });
            a || this.dequeue();
            return this
        }
    });
    e.each({
        slideDown: g("show", 1),
        slideUp: g("hide", 1),
        slideToggle: g("toggle", 1),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function (b, a) {
        e.fn[b] = function (b, c, e) {
            return this.animate(a, b, c, e)
        }
    });
    e.extend({
        speed: function (b, a, c) {
            var d = b && typeof b == "object" ? e.extend({}, b) : {
                complete: c || !c && a || e.isFunction(b) && b,
                duration: b,
                easing: c && a || a && !e.isFunction(a) && a
            };
            d.duration = e.fx.off ? 0 : typeof d.duration == "number" ? d.duration : d.duration in e.fx.speeds ? e.fx.speeds[d.duration] : e.fx.speeds._default;
            d.old = d.complete;
            d.complete = function (b) {
                e.isFunction(d.old) && d.old.call(this);
                d.queue !== !1 ? e.dequeue(this) : b !== !1 && e._unmark(this)
            };
            return d
        },
        easing: {
            linear: function (b, a, c, d) {
                return c + d * b
            },
            swing: function (b, a, c, d) {
                return (-Math.cos(b * Math.PI) / 2 + 0.5) * d + c
            }
        },
        timers: [],
        fx: function (b, a, c) {
            this.options = a;
            this.elem = b;
            this.prop = c;
            a.orig = a.orig || {}
        }
    });
    e.fx.prototype = {
        update: function () {
            this.options.step && this.options.step.call(this.elem, this.now, this);
            (e.fx.step[this.prop] || e.fx.step._default)(this)
        },
        cur: function () {
            if (this.elem[this.prop] != null && (!this.elem.style || this.elem.style[this.prop] == null)) return this.elem[this.prop];
            var b, a = e.css(this.elem, this.prop);
            return isNaN(b = parseFloat(a)) ? !a || a === "auto" ? 0 : a : b
        },
        custom: function (b, a, c) {
            function d(b) {
                return f.step(b)
            }
            var f = this,
                g = e.fx,
                h;
            this.startTime = fa || i();
            this.start = b;
            this.end = a;
            this.unit = c || this.unit || (e.cssNumber[this.prop] ? "" : "px");
            this.now = this.start;
            this.pos = this.state = 0;
            d.elem = this.elem;
            d() && e.timers.push(d) && !aa && (ua ? (aa = !0, h = function () {
                aa && (ua(h), g.tick())
            }, ua(h)) : aa = setInterval(g.tick, g.interval))
        },
        show: function () {
            this.options.orig[this.prop] = e.style(this.elem, this.prop);
            this.options.show = !0;
            this.custom(this.prop === "width" || this.prop === "height" ? 1 : 0, this.cur());
            e(this.elem).show()
        },
        hide: function () {
            this.options.orig[this.prop] = e.style(this.elem, this.prop);
            this.options.hide = !0;
            this.custom(this.cur(), 0)
        },
        step: function (b) {
            var a = fa || i(),
                c = !0,
                d = this.elem,
                f = this.options,
                g, h;
            if (b || a >= f.duration + this.startTime) {
                this.now = this.end;
                this.pos = this.state = 1;
                this.update();
                f.animatedProperties[this.prop] = !0;
                for (g in f.animatedProperties) f.animatedProperties[g] !== !0 && (c = !1);
                if (c) {
                    f.overflow != null && !e.support.shrinkWrapBlocks && e.each(["", "X", "Y"], function (b, a) {
                        d.style["overflow" + a] = f.overflow[b]
                    });
                    f.hide && e(d).hide();
                    if (f.hide || f.show) for (var k in f.animatedProperties) e.style(d, k, f.orig[k]);
                    f.complete.call(d)
                }
                return !1
            }
            f.duration == Infinity ? this.now = a : (h = a - this.startTime, this.state = h / f.duration, this.pos = e.easing[f.animatedProperties[this.prop]](this.state, h, 0, 1, f.duration), this.now = this.start + (this.end - this.start) * this.pos);
            this.update();
            return !0
        }
    };
    e.extend(e.fx, {
        tick: function () {
            for (var b = e.timers, a = 0; a < b.length; ++a) b[a]() || b.splice(a--, 1);
            b.length || e.fx.stop()
        },
        interval: 13,
        stop: function () {
            clearInterval(aa);
            aa = null
        },
        speeds: {
            slow: 600,
            fast: 200,
            _default: 400
        },
        step: {
            opacity: function (b) {
                e.style(b.elem, "opacity", b.now)
            },
            _default: function (b) {
                b.elem.style && b.elem.style[b.prop] != null ? b.elem.style[b.prop] = (b.prop === "width" || b.prop === "height" ? Math.max(0, b.now) : b.now) + b.unit : b.elem[b.prop] = b.now
            }
        }
    });
    e.expr && e.expr.filters && (e.expr.filters.animated = function (b) {
        return e.grep(e.timers, function (a) {
            return b === a.elem
        }).length
    });
    var Gb = /^t(?:able|d|h)$/i,
        Qa = /^(?:body|html)$/i;
    "getBoundingClientRect" in p.documentElement ? e.fn.offset = function (b) {
        var a = this[0],
            c;
        if (b) return this.each(function (a) {
            e.offset.setOffset(this, b, a)
        });
        if (!a || !a.ownerDocument) return null;
        if (a === a.ownerDocument.body) return e.offset.bodyOffset(a);
        try {
            c = a.getBoundingClientRect()
        } catch (f) {}
        var g = a.ownerDocument,
            h = g.documentElement;
        if (!c || !e.contains(h, a)) return c ? {
            top: c.top,
            left: c.left
        } : {
            top: 0,
            left: 0
        };
        a = g.body;
        g = d(g);
        return {
            top: c.top + (g.pageYOffset || e.support.boxModel && h.scrollTop || a.scrollTop) - (h.clientTop || a.clientTop || 0),
            left: c.left + (g.pageXOffset || e.support.boxModel && h.scrollLeft || a.scrollLeft) - (h.clientLeft || a.clientLeft || 0)
        }
    } : e.fn.offset = function (b) {
        var a = this[0];
        if (b) return this.each(function (a) {
            e.offset.setOffset(this, b, a)
        });
        if (!a || !a.ownerDocument) return null;
        if (a === a.ownerDocument.body) return e.offset.bodyOffset(a);
        e.offset.initialize();
        for (var c, d = a.offsetParent, f = a.ownerDocument, g = f.documentElement, h = f.body, k = (f = f.defaultView) ? f.getComputedStyle(a, null) : a.currentStyle, i = a.offsetTop, m = a.offsetLeft;
        (a = a.parentNode) && a !== h && a !== g;) {
            if (e.offset.supportsFixedPosition && k.position === "fixed") break;
            c = f ? f.getComputedStyle(a, null) : a.currentStyle;
            i -= a.scrollTop;
            m -= a.scrollLeft;
            a === d && (i += a.offsetTop, m += a.offsetLeft, e.offset.doesNotAddBorder && (!e.offset.doesAddBorderForTableAndCells || !Gb.test(a.nodeName)) && (i += parseFloat(c.borderTopWidth) || 0, m += parseFloat(c.borderLeftWidth) || 0), d = a.offsetParent);
            e.offset.subtractsBorderForOverflowNotVisible && c.overflow !== "visible" && (i += parseFloat(c.borderTopWidth) || 0, m += parseFloat(c.borderLeftWidth) || 0);
            k = c
        }
        if (k.position === "relative" || k.position === "static") i += h.offsetTop, m += h.offsetLeft;
        e.offset.supportsFixedPosition && k.position === "fixed" && (i += Math.max(g.scrollTop, h.scrollTop), m += Math.max(g.scrollLeft, h.scrollLeft));
        return {
            top: i,
            left: m
        }
    };
    e.offset = {
        initialize: function () {
            var b = p.body,
                a = p.createElement("div"),
                c, d, f, g = parseFloat(e.css(b, "marginTop")) || 0;
            e.extend(a.style, {
                position: "absolute",
                top: 0,
                left: 0,
                margin: 0,
                border: 0,
                width: "1px",
                height: "1px",
                visibility: "hidden"
            });
            a.innerHTML = "<div style='position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;'><div></div></div><table style='position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;' cellpadding='0' cellspacing='0'><tr><td></td></tr></table>";
            b.insertBefore(a, b.firstChild);
            c = a.firstChild;
            d = c.firstChild;
            f = c.nextSibling.firstChild.firstChild;
            this.doesNotAddBorder = d.offsetTop !== 5;
            this.doesAddBorderForTableAndCells = f.offsetTop === 5;
            d.style.position = "fixed";
            d.style.top = "20px";
            this.supportsFixedPosition = d.offsetTop === 20 || d.offsetTop === 15;
            d.style.position = d.style.top = "";
            c.style.overflow = "hidden";
            c.style.position = "relative";
            this.subtractsBorderForOverflowNotVisible = d.offsetTop === -5;
            this.doesNotIncludeMarginInBodyOffset = b.offsetTop !== g;
            b.removeChild(a);
            e.offset.initialize = e.noop
        },
        bodyOffset: function (b) {
            var a = b.offsetTop,
                c = b.offsetLeft;
            e.offset.initialize();
            e.offset.doesNotIncludeMarginInBodyOffset && (a += parseFloat(e.css(b, "marginTop")) || 0, c += parseFloat(e.css(b, "marginLeft")) || 0);
            return {
                top: a,
                left: c
            }
        },
        setOffset: function (b, a, c) {
            var d = e.css(b, "position");
            d === "static" && (b.style.position = "relative");
            var f = e(b),
                g = f.offset(),
                h = e.css(b, "top"),
                k = e.css(b, "left"),
                i = {},
                m = {},
                n, l;
            (d === "absolute" || d === "fixed") && e.inArray("auto", [h, k]) > -1 ? (m = f.position(), n = m.top, l = m.left) : (n = parseFloat(h) || 0, l = parseFloat(k) || 0);
            e.isFunction(a) && (a = a.call(b, c, g));
            a.top != null && (i.top = a.top - g.top + n);
            a.left != null && (i.left = a.left - g.left + l);
            "using" in a ? a.using.call(b, i) : f.css(i)
        }
    };
    e.fn.extend({
        position: function () {
            if (!this[0]) return null;
            var b = this[0],
                a = this.offsetParent(),
                c = this.offset(),
                d = Qa.test(a[0].nodeName) ? {
                    top: 0,
                    left: 0
                } : a.offset();
            c.top -= parseFloat(e.css(b, "marginTop")) || 0;
            c.left -= parseFloat(e.css(b, "marginLeft")) || 0;
            d.top += parseFloat(e.css(a[0], "borderTopWidth")) || 0;
            d.left += parseFloat(e.css(a[0], "borderLeftWidth")) || 0;
            return {
                top: c.top - d.top,
                left: c.left - d.left
            }
        },
        offsetParent: function () {
            return this.map(function () {
                for (var b = this.offsetParent || p.body; b && !Qa.test(b.nodeName) && e.css(b, "position") === "static";) b = b.offsetParent;
                return b
            })
        }
    });
    e.each(["Left", "Top"], function (b, a) {
        var f = "scroll" + a;
        e.fn[f] = function (a) {
            var g, h;
            if (a === c) {
                g = this[0];
                return !g ? null : (h = d(g)) ? "pageXOffset" in h ? h[b ? "pageYOffset" : "pageXOffset"] : e.support.boxModel && h.document.documentElement[f] || h.document.body[f] : g[f]
            }
            return this.each(function () {
                h = d(this);
                h ? h.scrollTo(b ? e(h).scrollLeft() : a, b ? a : e(h).scrollTop()) : this[f] = a
            })
        }
    });
    e.each(["Height", "Width"], function (b, a) {
        var d = a.toLowerCase();
        e.fn["inner" + a] = function () {
            var b = this[0];
            return b && b.style ? parseFloat(e.css(b, d, "padding")) : null
        };
        e.fn["outer" + a] = function (b) {
            var a = this[0];
            return a && a.style ? parseFloat(e.css(a, d, b ? "margin" : "border")) : null
        };
        e.fn[d] = function (b) {
            var f = this[0];
            if (!f) return b == null ? null : this;
            if (e.isFunction(b)) return this.each(function (a) {
                var c = e(this);
                c[d](b.call(this, a, c[d]()))
            });
            if (e.isWindow(f)) {
                var g = f.document.documentElement["client" + a];
                return f.document.compatMode === "CSS1Compat" && g || f.document.body["client" + a] || g
            }
            if (f.nodeType === 9) return Math.max(f.documentElement["client" + a], f.body["scroll" + a], f.documentElement["scroll" + a], f.body["offset" + a], f.documentElement["offset" + a]);
            return b === c ? (f = e.css(f, d), g = parseFloat(f), e.isNaN(g) ? f : g) : this.css(d, typeof b == "string" ? b : b + "px")
        }
    });
    a.jQuery = a.$ = e
})(window);
(function () {
    var a = !1,
        c = /xyz/.test(function () {}) ? /\b_super\b/ : /.*/;
    this.SimpleClass = function () {};
    SimpleClass.extend = function (d) {
        function f() {
            !a && this.init && this.init.apply(this, arguments)
        }
        var g = this.prototype;
        a = !0;
        var h = new this;
        a = !1;
        for (var i in d) h[i] = typeof d[i] == "function" && typeof g[i] == "function" && c.test(d[i]) ?
        function (a, c) {
            return function () {
                var d = this._super;
                this._super = g[a];
                var f = c.apply(this, arguments);
                this._super = d;
                return f
            }
        }(i, d[i]) : d[i];
        f.prototype = h;
        f.constructor = f;
        f.extend = arguments.callee;
        return f
    }
})();
(function (a, c, d) {
    function f(a, c, d) {
        var f = jQuery.inArray(a, s) > -1;
        (a == "width" || a == "height") && c === parseFloat(d.css(a)) && (f = !1);
        return f
    }
    function g(a) {
        return parseFloat(a.replace(/px/i, ""))
    }
    function h(a) {
        for (var c in a) return !1;
        return !0
    }
    function i(a) {
        for (var c in a) if ((c == "width" || c == "height") && (a[c] == "show" || a[c] == "hide" || a[c] == "toggle")) return !0;
        return !1
    }
    function o(a, c, d, f, g, h, i, n) {
        a = typeof a == "undefined" ? {} : a;
        a.secondary = typeof a.secondary == "undefined" ? {} : a.secondary;
        for (var l = m.length - 1; l >= 0; l--) typeof a[m[l] + "transition-property"] == "undefined" && (a[m[l] + "transition-property"] = ""), a[m[l] + "transition-property"] += ", " + (h === !0 && i === !0 ? m[l] + "transform" : c), a[m[l] + "transition-duration"] = d + "ms", a[m[l] + "transition-timing-function"] = f, a.secondary[h === !0 && i === !0 ? m[l] + "transform" : c] = h === !0 && i === !0 ? n === !0 && D ? "translate3d(" + a.meta.left + "px," + a.meta.top + "px,0)" : "translate(" + a.meta.left + "px," + a.meta.top + "px)" : g;
        return a
    }
    function l(a, c, d, f, i, k, m, l) {
        var q = a.data(w) ? h(a.data(w)) ? jQuery.extend(!0, {}, u) : a.data(w) : jQuery.extend(!0, {}, u),
            e = i,
            r = jQuery.inArray(c, n) > -1;
        if (r) {
            var s = q.meta,
                y = g(a.css(c)) || 0,
                x = c + "_o";
            e = r ? i - y : i;
            s[c] = e;
            s[x] = a.css(c) == "auto" ? 0 + e : y + e || 0;
            q.meta = s;
            m && e === 0 && (e = 0 - s[x], s[c] = e, s[x] = 0)
        }
        return a.data(w, o(q, c, d, f, e, k, m, l))
    }
    function q(a, c, d, f) {
        var h = r.exec(c),
            k = a.css(d) === "auto" ? 0 : a.css(d),
            k = typeof k == "string" ? g(k) : k;
        typeof c == "string" && g(c);
        var f = f === !0 ? 0 : k,
            i = a.is(":hidden"),
            m = a.translation();
        d == "left" && (f = parseInt(k, 10) + m.x);
        d == "top" && (f = parseInt(k, 10) + m.y);
        !h && c == "show" ? (f = 1, i && a.css({
            display: "block",
            opacity: 0
        })) : !h && c == "hide" && (f = 0);
        return h ? (a = parseFloat(h[2]), h[1] && (a = (h[1] === "-=" ? -1 : 1) * a + parseInt(f, 10)), a) : f
    }
    var s = "top,right,bottom,left,opacity,height,width".split(","),
        n = ["top", "right", "bottom", "left"],
        m = ["", "-webkit-", "-moz-", "-o-"],
        x = ["avoidTransforms", "useTranslate3d", "leaveTransforms"],
        r = /^([+-]=)?([\d+-.]+)(.*)$/,
        t = /([A-Z])/g,
        u = {
            secondary: {},
            meta: {
                top: 0,
                right: 0,
                bottom: 0,
                left: 0
            }
        },
        w = "jQe",
        a = (document.body || document.documentElement).style,
        J = a.WebkitTransition !== void 0 ? "webkitTransitionEnd" : a.OTransition !== void 0 ? "oTransitionEnd" : "transitionend",
        A = a.WebkitTransition !== void 0 || a.MozTransition !== void 0 || a.OTransition !== void 0 || a.transition !== void 0,
        D = "WebKitCSSMatrix" in window && "m11" in new WebKitCSSMatrix;
    jQuery.fn.translation = function () {
        if (!this[0]) return null;
        for (var a = window.getComputedStyle(this[0], null), c = {
            x: 0,
            y: 0
        }, d = m.length - 1; d >= 0; d--) {
            var f = a.getPropertyValue(m[d] + "transform");
            if (f && /matrix/i.test(f)) {
                a = f.replace(/^matrix\(/i, "").split(/, |\)$/g);
                c = {
                    x: parseInt(a[4], 10),
                    y: parseInt(a[5], 10)
                };
                break
            }
        }
        return c
    };
    jQuery.fn.animate = function (a, d, g, o) {
        var a = a || {},
            r = typeof a.bottom == "undefined" && typeof a.right == "undefined",
            k = jQuery.speed(d, g, o),
            p = this,
            s = 0,
            H = function () {
                s--;
                s === 0 && typeof k.complete == "function" && k.complete.apply(p[0], arguments)
            };
        return !A || h(a) || i(a) || k.duration <= 0 || jQuery.fn.animate.defaults.avoidTransforms === !0 && a.avoidTransforms !== !1 ? c.apply(this, arguments) : this[k.queue === !0 ? "queue" : "each"](function () {
            var d = jQuery(this),
                g = jQuery.extend({}, k),
                i = function () {
                    for (var c = {}, f = m.length - 1; f >= 0; f--) c[m[f] + "transition-property"] = "none", c[m[f] + "transition-duration"] = "", c[m[f] + "transition-timing-function"] = "";
                    d.unbind(J);
                    if (!a.leaveTransforms == !0) {
                        for (var g = d.data(w) || {}, h = {}, f = m.length - 1; f >= 0; f--) h[m[f] + "transform"] = "";
                        if (r && typeof g.meta != "undefined") for (var f = 0, k; k = n[f]; ++f) h[k] = g.meta[k + "_o"] + "px";
                        d.css(c).css(h)
                    }
                    a.opacity === "hide" && d.css("display", "none");
                    d.data(w, null);
                    H.call(d)
                },
                p = {
                    bounce: "cubic-bezier(0.0, 0.35, .5, 1.3)",
                    linear: "linear",
                    swing: "ease-in-out",
                    easeInQuad: "cubic-bezier(0.550, 0.085, 0.680, 0.530)",
                    easeInCubic: "cubic-bezier(0.550, 0.055, 0.675, 0.190)",
                    easeInQuart: "cubic-bezier(0.895, 0.030, 0.685, 0.220)",
                    easeInQuint: "cubic-bezier(0.755, 0.050, 0.855, 0.060)",
                    easeInSine: "cubic-bezier(0.470, 0.000, 0.745, 0.715)",
                    easeInExpo: "cubic-bezier(0.950, 0.050, 0.795, 0.035)",
                    easeInCirc: "cubic-bezier(0.600, 0.040, 0.980, 0.335)",
                    easeOutQuad: "cubic-bezier(0.250, 0.460, 0.450, 0.940)",
                    easeOutCubic: "cubic-bezier(0.215, 0.610, 0.355, 1.000)",
                    easeOutQuart: "cubic-bezier(0.165, 0.840, 0.440, 1.000)",
                    easeOutQuint: "cubic-bezier(0.230, 1.000, 0.320, 1.000)",
                    easeOutSine: "cubic-bezier(0.390, 0.575, 0.565, 1.000)",
                    easeOutExpo: "cubic-bezier(0.190, 1.000, 0.220, 1.000)",
                    easeOutCirc: "cubic-bezier(0.075, 0.820, 0.165, 1.000)",
                    easeInOutQuad: "cubic-bezier(0.455, 0.030, 0.515, 0.955)",
                    easeInOutCubic: "cubic-bezier(0.645, 0.045, 0.355, 1.000)",
                    easeInOutQuart: "cubic-bezier(0.770, 0.000, 0.175, 1.000)",
                    easeInOutQuint: "cubic-bezier(0.860, 0.000, 0.070, 1.000)",
                    easeInOutSine: "cubic-bezier(0.445, 0.050, 0.550, 0.950)",
                    easeInOutExpo: "cubic-bezier(1.000, 0.000, 0.000, 1.000)",
                    easeInOutCirc: "cubic-bezier(0.785, 0.135, 0.150, 0.860)"
                },
                o = {},
                p = p[g.easing || "swing"] ? p[g.easing || "swing"] : g.easing || "swing",
                t;
            for (t in a) if (jQuery.inArray(t, x) === -1) {
                var u = jQuery.inArray(t, n) > -1,
                    A = q(d, a[t], t, u && a.avoidTransforms !== !0);
                a.avoidTransforms !== !0 && f(t, A, d) ? l(d, t, g.duration, p, u && a.avoidTransforms === !0 ? A + "px" : A, u && a.avoidTransforms !== !0, r, a.useTranslate3d === !0) : o[t] = a[t]
            }
            t = d.data(w) || {};
            for (p = m.length - 1; p >= 0; p--) typeof t[m[p] + "transition-property"] != "undefined" && (t[m[p] + "transition-property"] = t[m[p] + "transition-property"].substr(2));
            d.data(w, t).unbind(J);
            if (!h(d.data(w)) && !h(d.data(w).secondary)) {
                s++;
                d.css(d.data(w));
                var C = d.data(w).secondary;
                setTimeout(function () {
                    d.bind(J, i).css(C)
                })
            } else g.queue = !1;
            h(o) || (s++, c.apply(d, [o,
            {
                duration: g.duration,
                easing: jQuery.easing[g.easing] ? g.easing : jQuery.easing.swing ? "swing" : "linear",
                complete: H,
                queue: g.queue
            }]));
            return !0
        })
    };
    jQuery.fn.animate.defaults = {};
    jQuery.fn.stop = function (a, c, f) {
        if (!A) return d.apply(this, [a, c]);
        a && this.queue([]);
        for (var g = {}, i = m.length - 1; i >= 0; i--) g[m[i] + "transition-property"] = "none", g[m[i] + "transition-duration"] = "", g[m[i] + "transition-timing-function"] = "";
        this.each(function () {
            var k = jQuery(this),
                i = window.getComputedStyle(this, null),
                n = {},
                l;
            if (!h(k.data(w)) && !h(k.data(w).secondary)) {
                l = k.data(w);
                if (c) {
                    if (n = l.secondary, !f && typeof l.meta.left_o !== void 0 || typeof l.meta.top_o !== void 0) {
                        n.left = typeof l.meta.left_o !== void 0 ? l.meta.left_o : "auto";
                        n.top = typeof l.meta.top_o !== void 0 ? l.meta.top_o : "auto";
                        for (l = m.length - 1; l >= 0; l--) n[m[l] + "transform"] = ""
                    }
                } else for (var e in k.data(w).secondary) if (e = e.replace(t, "-$1").toLowerCase(), n[e] = i.getPropertyValue(e), !f && /matrix/i.test(n[e])) {
                    l = n[e].replace(/^matrix\(/i, "").split(/, |\)$/g);
                    n.left = parseFloat(l[4]) + parseFloat(k.css("left")) + "px" || "auto";
                    n.top = parseFloat(l[5]) + parseFloat(k.css("top")) + "px" || "auto";
                    for (l = m.length - 1; l >= 0; l--) n[m[l] + "transform"] = ""
                }
                k.unbind(J).css(g).css(n).data(w, null)
            } else d.apply(k, [a, c])
        });
        return this
    }
})(jQuery, jQuery.fn.animate, jQuery.fn.stop);
(function () {
    if (!Function.prototype.bind) Function.prototype.bind = function (a) {
        var d = [].slice,
            f = d.call(arguments, 1),
            g = this,
            h = function () {},
            i = function () {
                return g.apply(this instanceof h ? this : a || {}, f.concat(d.call(arguments)))
            };
        h.prototype = g.prototype;
        i.prototype = new h;
        return i
    };
    if (typeof Code === "undefined") Code = {}, Code.PhotoSwipe = {};
    Code.PhotoSwipe.Util = {
        browser: {
            version: (navigator.userAgent.match(/.+(?:rv|it|ra|ie)[\/: ]([\d.]+)/) || [])[1],
            webkit: /webkit/i.test(navigator.userAgent),
            opera: /opera/i.test(navigator.userAgent),
            msie: /msie/i.test(navigator.userAgent) && !/opera/.test(navigator.userAgent),
            chrome: /Chrome/i.test(navigator.userAgent),
            mozilla: /mozilla/i.test(navigator.userAgent) && !/(compatible|webkit)/.test(navigator.userAgent),
            mobileSafari: /mobile.*safari/i.test(navigator.userAgent),
            is3dSupported: !1,
            isAndroid: /android/i.test(navigator.userAgent),
            isBlackberry: /blackberry/i.test(navigator.userAgent),
            isiOS: /like Mac OS/i.test(navigator.userAgent),
            isCSSTransformSupported: !1,
            touchSupported: !1,
            gestureSupported: !1,
            _eventTagNames: {
                select: "input",
                change: "input",
                submit: "form",
                reset: "form",
                error: "img",
                load: "img",
                abort: "img"
            },
            isEventSupported: function (a) {
                var d = document.createElement(this._eventTagNames[a] || "div"),
                    a = "on" + a,
                    f = a in d;
                f || (d.setAttribute(a, "return;"), f = typeof d[a] == "function");
                return f
            }
        },
        setElementData: function (a, d, f) {
            if (this.isNothing(a.UtilData)) a.UtilData = {};
            a.UtilData[d] = f
        },
        getElementData: function (a, d, f) {
            typeof f === "undefined" && (f = null);
            return this.isNothing(a.UtilData) ? f : this.isNothing(a.UtilData[d]) ? f : a.UtilData[d]
        },
        removeElementData: function (a, d) {
            delete a.UtilData[d]
        },
        coalesce: function () {
            var a;
            for (a = 0; a < arguments.length; a++) if (!this.isNothing(arguments[a])) return arguments[a];
            return null
        },
        registerNamespace: function () {
            var a = arguments,
                d = null,
                f, g;
            for (f = 0; f < a.length; ++f) {
                var h = a[f].split(".");
                g = h[0];
                eval("if (typeof " + g + ' == "undefined"){' + g + " = {};} obj = " + g + ";");
                for (g = 1; g < h.length; ++g) d[h[g]] = d[h[g]] || {}, d = d[h[g]]
            }
        },
        extend: function (a, d, f) {
            this.isNothing(f) && (f = !0);
            if (a && d && this.isObject(d)) for (var g in d) f ? a[g] = d[g] : typeof a[g] == "undefined" && (a[g] = d[g])
        },
        swapArrayElements: function (a, d, f) {
            var g = a[d];
            a[d] = a[f];
            a[f] = g
        },
        isObject: function (a) {
            return typeof a == "object"
        },
        isNothing: function (a) {
            return typeof a === "undefined" || a === null ? !0 : !1
        },
        isFunction: function (a) {
            return typeof a == "function"
        },
        isArray: function (a) {
            return a && Code.PhotoSwipe.Util.isFunction(a.pop)
        },
        isNumber: function (a) {
            return typeof a == "number"
        },
        isString: function (a) {
            return typeof a == "string"
        },
        trim: function (a) {
            return a.replace(/^\s\s*/, "").replace(/\s\s*$/, "")
        }
    };
    var a = document.createElement("div");
    if (Code.PhotoSwipe.Util.browser.webkit && !Code.PhotoSwipe.Util.browser.chrome) Code.PhotoSwipe.Util.browser.is3dSupported = !Code.PhotoSwipe.Util.isNothing(a.style.WebkitPerspective);
    Code.PhotoSwipe.Util.browser.isCSSTransformSupported = !Code.PhotoSwipe.Util.isNothing(a.style.WebkitTransform) || !Code.PhotoSwipe.Util.isNothing(a.style.MozTransform) || !Code.PhotoSwipe.Util.isNothing(a.style.msTransform) || !Code.PhotoSwipe.Util.isNothing(a.style.transformProperty);
    Code.PhotoSwipe.Util.browser.touchSupported = Code.PhotoSwipe.Util.browser.isEventSupported("touchstart");
    Code.PhotoSwipe.Util.browser.gestureSupported = Code.PhotoSwipe.Util.browser.isEventSupported("gesturestart")
})(window);
(function (a, c) {
    c.extend(c, {
        DOM: {
            resetTranslate: function (a) {
                c.browser.webkit ? c.browser.is3dSupported ? $(a).css({
                    webkitTransform: "translate3d(0px, 0px, 0px)"
                }) : $(a).css({
                    webkitTransform: "translate(0px, 0px)"
                }) : $(a).css({
                    webkitTransform: "translate(0px, 0px)",
                    MozTransform: "translate(0px, 0px)",
                    transform: "translate(0px, 0px)"
                })
            },
            createElement: function (a, c, g) {
                a = $("<" + a + "></" + a + ">");
                a.attr(c);
                a.append(g);
                return a[0]
            },
            appendChild: function (a, c) {
                $(c).append(a)
            },
            appendText: function (a, c) {
                $(c).text(a)
            },
            appendToBody: function (a) {
                $("body").append(a)
            },
            removeChild: function (a) {
                $(a).empty().remove()
            },
            removeChildren: function (a) {
                $(a).empty()
            },
            hasAttribute: function (a, f) {
                return c.isNothing($(a).attr(f))
            },
            getAttribute: function (a, c) {
                return $(a).attr(c)
            },
            setAttribute: function (a, c, g) {
                $(a).attr(c, g)
            },
            removeAttribute: function (a, c) {
                $(a).removeAttr(c)
            },
            addClass: function (a, c) {
                $(a).addClass(c)
            },
            removeClass: function (a, c) {
                $(a).removeClass(c)
            },
            hasClass: function (a, c) {
                $(a).hasClass(c)
            },
            setStyle: function (a, f, g) {
                c.isObject(f) ? $(a).css(f) : $(a).css(f, g)
            },
            getStyle: function (a, c) {
                return $(a).css(c)
            },
            hide: function (a) {
                $(a).hide()
            },
            show: function (a) {
                $(a).show()
            },
            width: function (a, f) {
                c.isNothing(f) || $(a).width(f);
                return $(a).width()
            },
            outerWidth: function (a) {
                return $(a).outerWidth()
            },
            height: function (a, f) {
                c.isNothing(f) || $(a).height(f);
                return $(a).height()
            },
            outerHeight: function (a) {
                return $(a).outerHeight()
            },
            documentWidth: function () {
                return $(document.documentElement).width()
            },
            documentHeight: function () {
                return $(document.documentElement).height()
            },
            documentOuterWidth: function () {
                return c.DOM.width(document.documentElement)
            },
            documentOuterHeight: function () {
                return c.DOM.outerHeight(document.documentElement)
            },
            bodyWidth: function () {
                return $(document.body).width()
            },
            bodyHeight: function () {
                return $(document.body).height()
            },
            bodyOuterWidth: function () {
                return c.DOM.outerWidth(document.body)
            },
            bodyOuterHeight: function () {
                return c.DOM.outerHeight(document.body)
            },
            windowWidth: function () {
                return !a.innerWidth ? $(a).width() : a.innerWidth
            },
            windowHeight: function () {
                return !a.innerHeight ? $(a).height() : a.innerHeight
            },
            windowScrollLeft: function () {
                return !a.pageXOffset ? $(a).scrollLeft() : a.pageXOffset
            },
            windowScrollTop: function () {
                return !a.pageYOffset ? $(a).scrollTop() : a.pageYOffset
            }
        }
    })
})(window, Code.PhotoSwipe.Util);
(function (a, c) {
    c.extend(c, {
        Events: {
            add: function (a, c, g) {
                $(a).bind(c, g)
            },
            remove: function (a, c, g) {
                $(a).unbind(c, g)
            },
            fire: function (a, c) {
                var g, h = Array.prototype.slice.call(arguments).splice(2);
                g = typeof c == "string" ? {
                    type: c
                } : c;
                $(a).trigger(jQuery.Event(g.type, g), h)
            },
            getMousePosition: function (a) {
                return {
                    x: a.pageX,
                    y: a.pageY
                }
            },
            getTouchEvent: function (a) {
                return a.originalEvent
            },
            domReady: function (a) {
                $(document).ready(a)
            }
        }
    })
})(window, Code.PhotoSwipe.Util);
(function (a, c) {
    c.extend(c, {
        Animation: {
            stopFade: function (a) {
                $(a).stop(!0, !0)
            },
            fadeIn: function (a, f, g, h) {
                f = c.coalesce(f, 1);
                g = c.coalesce(g, 500);
                $(a).fadeTo(g, f, h)
            },
            fadeOut: function (a, f, g) {
                c.isNothing(f) && (f = 500);
                $(a).fadeTo(f, 0, g)
            },
            slideBy: function (a, f, g, h, i) {
                c.isNothing(h) && (h = 500);
                f = jQuery.fn.translation ? {
                    left: "+=" + f + "px",
                    top: "+=" + g + "px",
                    useTranslate3d: c.browser.is3dSupported
                } : {
                    left: "+=" + f + "px",
                    top: "+=" + g + "px"
                };
                $(a).animate(f, h, i)
            }
        }
    })
})(window, Code.PhotoSwipe.Util);
(function (a, c) {
    Code.PhotoSwipe.ElementClass = SimpleClass.extend({
        el: null,
        settings: null,
        isHidden: null,
        fadeInHandler: null,
        fadeOutHandler: null,
        init: function (a) {
            this.settings = {
                opacity: 1,
                fadeInSpeed: 250,
                fadeOutSpeed: 500
            };
            c.extend(this.settings, a);
            this.fadeInHandler = this.postFadeIn.bind(this);
            this.fadeOutHandler = this.postFadeOut.bind(this);
            this.isHidden = !0
        },
        resetPosition: function () {},
        show: function () {
            this.stopFade();
            c.DOM.setStyle(this.el, "opacity", this.settings.opacity);
            c.DOM.show(this.el);
            this.postShow()
        },
        postShow: function () {
            this.isHidden = !1;
            this.addEventHandlers();
            c.Events.fire(this, Code.PhotoSwipe.ElementClass.EventTypes.onShow)
        },
        fadeIn: function () {
            c.DOM.setStyle(this.el, "opacity", 0);
            this.fadeInFromCurrentOpacity()
        },
        fadeInFromCurrentOpacity: function () {
            this.stopFade();
            this.isHidden = !1;
            c.DOM.show(this.el);
            c.Animation.fadeIn(this.el, this.settings.opacity, this.settings.fadeInSpeed, this.fadeInHandler)
        },
        postFadeIn: function () {
            this.isHidden || (this.addEventHandlers(), c.Events.fire(this, Code.PhotoSwipe.ElementClass.EventTypes.onFadeIn))
        },
        hide: function () {
            this.stopFade();
            c.DOM.hide(this.el);
            this.postHide()
        },
        postHide: function () {
            this.isHidden = !0;
            this.removeEventHandlers();
            c.Events.fire(this, Code.PhotoSwipe.ElementClass.EventTypes.onHide)
        },
        fadeOut: function () {
            this.stopFade();
            this.isHidden = !0;
            c.Animation.fadeOut(this.el, this.settings.fadeOutSpeed, this.fadeOutHandler)
        },
        postFadeOut: function () {
            this.isHidden && (c.DOM.hide(this.el), this.removeEventHandlers(), c.Events.fire(this, Code.PhotoSwipe.ElementClass.EventTypes.onFadeOut))
        },
        stopFade: function () {
            c.Animation.stopFade(this.el)
        },
        addEventHandlers: function () {},
        removeEventHandlers: function () {}
    });
    Code.PhotoSwipe.ElementClass.EventTypes = {
        onShow: "PhotoSwipeElementClassOnShow",
        onHide: "PhotoSwipeElementClassOnHide",
        onClick: "PhotoSwipeElementClassOnClick",
        onFadeIn: "PhotoSwipeElementClassOnFadeIn",
        onFadeOut: "PhotoSwipeElementClassOnFadeOut"
    }
})(window, Code.PhotoSwipe.Util);
(function (a, c) {
    Code.PhotoSwipe.FullSizeImageClass = SimpleClass.extend({
        el: null,
        index: null,
        naturalWidth: null,
        naturalHeight: null,
        src: null,
        caption: null,
        metaData: null,
        scaleMethod: null,
        isLandscape: null,
        isLoading: null,
        hasLoaded: null,
        loadEventHandler: null,
        init: function (a, f, g, h, i) {
            this.index = a;
            this.naturalHeight = this.naturalWidth = 0;
            this.src = g;
            this.caption = h;
            this.metaData = c.coalesce(i, {});
            this.hasLoaded = this.isLoading = this.isLandscape = !1;
            this.scaleMethod = f;
            this.loadEventHandler = this.onLoad.bind(this)
        },
        load: function () {
            this.isLoading = !0;
            this.el = new Image;
            c.DOM.addClass(this.el, "ps-full-size-image");
            this.el.onload = this.loadEventHandler;
            this.el.src = this.src
        },
        onLoad: function () {
            this.naturalWidth = c.coalesce(this.el.naturalWidth, this.el.width);
            this.naturalHeight = c.coalesce(this.el.naturalHeight, this.el.height);
            this.isLandscape = this.naturalWidth > this.naturalHeight;
            this.isLoading = !1;
            this.hasLoaded = !0;
            c.Events.fire(this, Code.PhotoSwipe.FullSizeImageClass.EventTypes.onLoad)
        }
    });
    Code.PhotoSwipe.FullSizeImageClass.EventTypes = {
        onLoad: "PhotoSwipeFullSizeImageClassOnLoader"
    }
})(window, Code.PhotoSwipe.Util);
(function (a, c) {
    Code.PhotoSwipe.DocumentOverlayClass = Code.PhotoSwipe.ElementClass.extend({
        init: function (a) {
            this.settings = {
                zIndex: 1E3
            };
            c.extend(this.settings, a);
            this._super(a);
            this.el = c.DOM.createElement("div", {
                "class": Code.PhotoSwipe.DocumentOverlayClass.CssClasses.documentOverlay
            }, "");
            c.DOM.setStyle(this.el, {
                left: 0,
                position: "absolute",
                zIndex: this.settings.zIndex,
                top: 0
            });
            c.DOM.hide(this.el);
            c.DOM.appendToBody(this.el)
        },
        resetPosition: function () {
            c.DOM.width(this.el, c.DOM.bodyOuterWidth());
            var a = c.DOM.bodyOuterHeight();
            if (c.DOM.windowHeight > a) a = c.DOM.windowHeight;
            c.DOM.height(this.el, a)
        }
    });
    Code.PhotoSwipe.DocumentOverlayClass.CssClasses = {
        documentOverlay: "ps-document-overlay"
    }
})(window, Code.PhotoSwipe.Util);
(function (a, c) {
    Code.PhotoSwipe.ViewportClass = Code.PhotoSwipe.ElementClass.extend({
        touchStartPoint: null,
        touchStartTime: null,
        touchStartHandler: null,
        touchMoveHandler: null,
        touchEndHandler: null,
        gestureStartHandler: null,
        gestureChangeHandler: null,
        gestureEndHandler: null,
        isGesture: null,
        mouseDownHandler: null,
        mouseMoveHandler: null,
        mouseUpHandler: null,
        doubleClickTimeout: null,
        init: function (a) {
            this.settings = {
                swipeThreshold: 500,
                swipeTimeThreshold: 250,
                zIndex: 1E3,
                doubleClickSpeed: 300
            };
            c.extend(this.settings, a);
            this._super(this.settings);
            this.touchStartPoint = {
                x: 0,
                y: 0
            };
            if (c.browser.touchSupported) this.touchStartHandler = this.onTouchStart.bind(this), this.touchMoveHandler = this.onTouchMove.bind(this), this.touchEndHandler = this.onTouchEnd.bind(this);
            if (c.browser.gestureSupported) this.gestureStartHandler = this.onGestureStart.bind(this), this.gestureChangeHandler = this.onGestureChange.bind(this), this.gestureEndHandler = this.onGestureEnd.bind(this);
            this.mouseDownHandler = this.onMouseDown.bind(this);
            this.mouseMoveHandler = this.onMouseMove.bind(this);
            this.mouseUpHandler = this.onMouseUp.bind(this);
            this.el = c.DOM.createElement("div", {
                "class": Code.PhotoSwipe.ViewportClass.CssClasses.viewport,
                "data-role": "dialog"
            }, "");
            c.DOM.setStyle(this.el, {
                position: "absolute",
                left: 0,
                zIndex: this.settings.zIndex,
                overflow: "hidden"
            });
            c.DOM.hide(this.el);
            c.DOM.appendToBody(this.el)
        },
        resetPosition: function () {
            c.DOM.setStyle(this.el, {
                top: c.DOM.windowScrollTop() + "px"
            });
            c.DOM.width(this.el, c.DOM.bodyOuterWidth());
            c.DOM.height(this.el, c.DOM.windowHeight())
        },
        addEventHandlers: function () {
            c.browser.touchSupported && (c.Events.add(this.el, "touchstart", this.touchStartHandler), c.Events.add(this.el, "touchmove", this.touchMoveHandler), c.Events.add(this.el, "touchend", this.touchEndHandler));
            c.browser.gestureSupported && (c.Events.add(this.el, "gesturestart", this.gestureStartHandler), c.Events.add(this.el, "gesturechange", this.gestureChangeHandler), c.Events.add(this.el, "gestureend", this.gestureEndHandler));
            c.Events.add(this.el, "mousedown", this.mouseDownHandler);
            c.Events.add(this.el, "mouseup", this.mouseUpHandler)
        },
        removeEventHandlers: function () {
            c.browser.touchSupported && (c.Events.remove(this.el, "touchstart", this.touchStartHandler), c.Events.remove(this.el, "touchmove", this.touchMoveHandler), c.Events.remove(this.el, "touchend", this.touchEndHandler));
            c.browser.gestureSupported && (c.Events.remove(this.el, "gesturestart", this.gestureStartHandler), c.Events.remove(this.el, "gesturechange", this.gestureChangeHandler), c.Events.remove(this.el, "gestureend", this.gestureEndHandler));
            c.Events.remove(this.el, "mousedown", this.mouseDownHandler);
            c.Events.remove(this.el, "mouseup", this.mouseUpHandler)
        },
        getTouchPoint: function (a) {
            return {
                x: a[0].pageX,
                y: a[0].pageY
            }
        },
        onGestureStart: function (a) {
            a.preventDefault();
            a = c.Events.getTouchEvent(a);
            c.Events.fire(this, {
                type: Code.PhotoSwipe.ViewportClass.EventTypes.onTouch,
                target: this,
                action: Code.PhotoSwipe.ViewportClass.Actions.gestureStart,
                scale: a.scale,
                rotation: a.rotation
            })
        },
        onGestureChange: function (a) {
            a.preventDefault();
            a = c.Events.getTouchEvent(a);
            c.Events.fire(this, {
                type: Code.PhotoSwipe.ViewportClass.EventTypes.onTouch,
                target: this,
                action: Code.PhotoSwipe.ViewportClass.Actions.gestureChange,
                scale: a.scale,
                rotation: a.rotation
            })
        },
        onGestureEnd: function (a) {
            a.preventDefault();
            a = c.Events.getTouchEvent(a);
            c.Events.fire(this, {
                type: Code.PhotoSwipe.ViewportClass.EventTypes.onTouch,
                target: this,
                action: Code.PhotoSwipe.ViewportClass.Actions.gestureEnd,
                scale: a.scale,
                rotation: a.rotation
            })
        },
        onTouchStart: function (a) {
            a.preventDefault();
            a = c.Events.getTouchEvent(a).touches;
            a.length > 1 ? this.isGesture = !0 : (c.Events.fire(this, {
                type: Code.PhotoSwipe.ViewportClass.EventTypes.onTouch,
                target: this,
                action: Code.PhotoSwipe.ViewportClass.Actions.touchStart,
                point: this.getTouchPoint(a)
            }), this.touchStartTime = new Date, this.isGesture = !1, this.touchStartPoint = this.getTouchPoint(a))
        },
        onTouchMove: function (a) {
            a.preventDefault();
            if (!this.isGesture) a = c.Events.getTouchEvent(a).touches, c.Events.fire(this, {
                type: Code.PhotoSwipe.ViewportClass.EventTypes.onTouch,
                target: this,
                action: Code.PhotoSwipe.ViewportClass.Actions.touchMove,
                point: this.getTouchPoint(a)
            })
        },
        onTouchEnd: function (a) {
            a.preventDefault();
            this.isGesture || (a = c.Events.getTouchEvent(a), a = this.getTouchPoint(!c.isNothing(a.changedTouches) ? a.changedTouches : a.touches), c.Events.fire(this, {
                type: Code.PhotoSwipe.ViewportClass.EventTypes.onTouch,
                target: this,
                action: Code.PhotoSwipe.ViewportClass.Actions.touchEnd,
                point: a
            }), this.fireTouchEvent(this.touchStartPoint, a))
        },
        onMouseDown: function (a) {
            a.preventDefault();
            c.Events.add(this.el, "mousemove", this.mouseMoveHandler);
            c.Events.fire(this, {
                type: Code.PhotoSwipe.ViewportClass.EventTypes.onTouch,
                target: this,
                action: Code.PhotoSwipe.ViewportClass.Actions.touchStart,
                point: c.Events.getMousePosition(a)
            });
            this.touchStartTime = new Date;
            this.isGesture = !1;
            this.touchStartPoint = c.Events.getMousePosition(a)
        },
        onMouseMove: function (a) {
            a.preventDefault();
            c.Events.fire(this, {
                type: Code.PhotoSwipe.ViewportClass.EventTypes.onTouch,
                target: this,
                action: Code.PhotoSwipe.ViewportClass.Actions.touchMove,
                point: c.Events.getMousePosition(a)
            })
        },
        onMouseUp: function (a) {
            a.preventDefault();
            c.Events.remove(this.el, "mousemove", this.mouseMoveHandler);
            this.fireTouchEvent(this.touchStartPoint, c.Events.getMousePosition(a))
        },
        fireTouchEvent: function (d, f) {
            var g;
            g = f.x - d.x;
            if (Math.abs(g) >= this.settings.swipeThreshold) {
                if (new Date - this.touchStartTime > this.settings.swipeTimeThreshold) return;
                g = g < 0 ? Code.PhotoSwipe.ViewportClass.Actions.swipeLeft : Code.PhotoSwipe.ViewportClass.Actions.swipeRight
            } else if (c.isNothing(this.doubleClickTimeout)) {
                var h = this;
                this.doubleClickTimeout = a.setTimeout(function () {
                    h.doubleClickTimeout = null;
                    c.Events.fire(h, {
                        type: Code.PhotoSwipe.ViewportClass.EventTypes.onTouch,
                        target: h,
                        action: Code.PhotoSwipe.ViewportClass.Actions.click,
                        point: f
                    })
                }, this.settings.doubleClickSpeed);
                return
            } else a.clearTimeout(this.doubleClickTimeout), this.doubleClickTimeout = null, g = Code.PhotoSwipe.ViewportClass.Actions.doubleClick;
            c.isNothing(g) || c.Events.fire(this, {
                type: Code.PhotoSwipe.ViewportClass.EventTypes.onTouch,
                target: this,
                action: g,
                point: f
            })
        }
    });
    Code.PhotoSwipe.ViewportClass.CssClasses = {
        viewport: "ps-viewport"
    };
    Code.PhotoSwipe.ViewportClass.Actions = {
        click: "click",
        doubleClick: "doubleClick",
        swipeLeft: "swipeLeft",
        swipeRight: "swipeRight",
        touchStart: "touchStart",
        touchMove: "touchMove",
        touchEnd: "touchEnd",
        gestureStart: "gestureStart",
        gestureChange: "gestureChange",
        gestureEnd: "gestureEnd"
    };
    Code.PhotoSwipe.ViewportClass.EventTypes = {
        onTouch: "PhotoSwipeViewportClassOnTouch"
    }
})(window, Code.PhotoSwipe.Util);
(function (a, c, d) {
    Code.PhotoSwipe.SliderItemClass = SimpleClass.extend({
        el: null,
        imageContainerEl: null,
        imageEl: null,
        parentEl: null,
        fullSizeImage: null,
        fullSizeImageLoadEventHandler: null,
        savedImageWidth: null,
        savedImageHeight: null,
        init: function (a) {
            this.parentEl = a;
            this.fullSizeImageLoadEventHandler = this.onFullSizeImageLoad.bind(this);
            this.el = c.DOM.createElement("div", {
                "class": Code.PhotoSwipe.SliderItemClass.CssClasses.item + " " + Code.PhotoSwipe.SliderItemClass.CssClasses.loading
            }, "");
            c.DOM.setStyle(this.el, {
                position: "absolute",
                overflow: "hidden",
                top: 0
            });
            c.DOM.resetTranslate(this.el);
            c.DOM.appendChild(this.el, this.parentEl);
            this.imageContainerEl = c.DOM.createElement("div");
            c.DOM.setStyle(this.imageContainerEl, {
                position: "absolute",
                overflow: "hidden",
                top: 0,
                left: 0
            });
            c.DOM.appendChild(this.imageContainerEl, this.el);
            this.imageEl = new Image;
            c.DOM.setStyle(this.imageEl, {
                display: "block",
                position: "absolute",
                margin: 0,
                padding: 0
            });
            c.DOM.hide(this.imageEl);
            c.DOM.appendChild(this.imageEl, this.imageContainerEl)
        },
        resetPosition: function (a, d, h) {
            c.DOM.width(this.el, a);
            c.DOM.height(this.el, d);
            c.DOM.setStyle(this.el, "left", h + "px");
            c.DOM.width(this.imageContainerEl, a);
            c.DOM.height(this.imageContainerEl, d);
            this.resetImagePosition()
        },
        resetImagePosition: function () {
            if (!c.isNothing(this.fullSizeImage)) {
                c.DOM.getAttribute(this.imageEl, "src");
                var a, d, h, i;
                i = c.DOM.width(this.el);
                var o = c.DOM.height(this.el);
                this.fullSizeImage.scaleMethod === "fitNoUpscale" ? (d = this.fullSizeImage.naturalWidth, h = this.fullSizeImage.naturalHeight, d > i && (a = i / d, d = Math.round(d * a), h = Math.round(h * a)), h > o && (a = o / h, h = Math.round(h * a), d = Math.round(d * a))) : (a = this.fullSizeImage.isLandscape ? i / this.fullSizeImage.naturalWidth : o / this.fullSizeImage.naturalHeight, d = Math.round(this.fullSizeImage.naturalWidth * a), h = Math.round(this.fullSizeImage.naturalHeight * a), this.fullSizeImage.scaleMethod === "zoom" ? (a = 1, h < o ? a = o / h : d < i && (a = i / d), a !== 1 && (d = Math.round(d * a), h = Math.round(h * a))) : this.fullSizeImage.scaleMethod === "fit" && (a = 1, d > i ? a = i / d : h > o && (a = o / h), a !== 1 && (d = Math.round(d * a), h = Math.round(h * a))));
                a = (o - h) / 2 + "px";
                i = (i - d) / 2 + "px";
                c.DOM.width(this.imageEl, d);
                c.DOM.height(this.imageEl, h);
                c.DOM.setStyle(this.imageEl, {
                    top: a,
                    left: i
                });
                c.DOM.show(this.imageEl);
                this.savedImageWidth = d;
                this.savedImageHeight = h
            }
        },
        setFullSizeImage: function (a) {
            this.fullSizeImage = a;
            c.DOM.removeClass(this.el, Code.PhotoSwipe.SliderItemClass.CssClasses.loading);
            c.DOM.removeClass(this.el, Code.PhotoSwipe.SliderItemClass.CssClasses.imageError);
            c.isNothing(this.fullSizeImage) ? (this.fullSizeImage = null, c.DOM.addClass(this.el, Code.PhotoSwipe.SliderItemClass.CssClasses.imageError), this.hideImage()) : this.fullSizeImage.hasLoaded ? (c.DOM.setAttribute(this.imageEl, "src", this.fullSizeImage.src), this.resetImagePosition(), c.Events.fire(this, Code.PhotoSwipe.SliderItemClass.EventTypes.onFullSizeImageDisplay)) : (c.DOM.addClass(this.el, Code.PhotoSwipe.SliderItemClass.CssClasses.loading), this.hideImage(), this.fullSizeImage.isLoading || (c.Events.add(this.fullSizeImage, d.EventTypes.onLoad, this.fullSizeImageLoadEventHandler), this.fullSizeImage.load()))
        },
        onFullSizeImageLoad: function (a) {
            c.Events.remove(a.target, d.EventTypes.onLoad, this.fullSizeImageLoadEventHandler);
            c.isNothing(this.fullSizeImage) || a.target.index !== this.fullSizeImage.index ? c.Events.fire(this, {
                type: Code.PhotoSwipe.SliderItemClass.EventTypes.onFullSizeImageLoadAnomaly,
                target: this,
                fullSizeImage: a.target
            }) : this.setFullSizeImage(a.target)
        },
        hideImage: function () {
            c.DOM.removeAttribute(this.imageEl, "src");
            c.DOM.hide(this.imageEl)
        }
    });
    Code.PhotoSwipe.SliderItemClass.CssClasses = {
        item: "ps-slider-item",
        loading: "ps-slider-item-loading",
        imageError: "ps-slider-item-image-error"
    };
    Code.PhotoSwipe.SliderItemClass.EventTypes = {
        onFullSizeImageDisplay: "PhotoSwipeSliderItemClassOnFullSizeImageDisplay",
        onFullSizeImageLoadAnomaly: "PhotoSwipeSliderItemClassOnFullSizeImageLoadAnomaly"
    }
})(window, Code.PhotoSwipe.Util, Code.PhotoSwipe.FullSizeImageClass);
(function (a, c, d) {
    Code.PhotoSwipe.SliderClass = Code.PhotoSwipe.ElementClass.extend({
        parentEl: null,
        parentElWidth: null,
        parentElHeight: null,
        items: null,
        scaleEl: null,
        lastScaleValue: null,
        previousItem: null,
        currentItem: null,
        nextItem: null,
        hasBounced: null,
        lastShowAction: null,
        bounceSlideBy: null,
        showNextEndEventHandler: null,
        showPreviousEndEventHandler: null,
        bounceStepOneEventHandler: null,
        bounceStepTwoEventHandler: null,
        sliderFullSizeImageLoadAnomalyEventHandler: null,
        init: function (a, g) {
            this.settings = {
                slideSpeed: 250
            };
            c.extend(this.settings, a);
            this._super(this.settings);
            this.parentEl = g;
            this.hasBounced = !1;
            this.showNextEndEventHandler = this.onShowNextEnd.bind(this);
            this.showPreviousEndEventHandler = this.onShowPreviousEnd.bind(this);
            this.bounceStepOneEventHandler = this.onBounceStepOne.bind(this);
            this.bounceStepTwoEventHandler = this.onBounceStepTwo.bind(this);
            this.sliderFullSizeImageLoadAnomalyEventHandler = this.onSliderFullSizeImageLoadAnomaly.bind(this);
            this.el = c.DOM.createElement("div", {
                "class": Code.PhotoSwipe.SliderClass.CssClasses.slider
            }, "");
            c.DOM.setStyle(this.el, {
                position: "absolute",
                top: 0
            });
            c.DOM.hide(this.el);
            c.DOM.appendChild(this.el, g);
            this.items = [];
            this.items.push(new d(this.el));
            this.items.push(new d(this.el));
            this.items.push(new d(this.el));
            this.previousItem = this.items[0];
            this.currentItem = this.items[1];
            this.nextItem = this.items[2]
        },
        addEventHandlers: function () {
            for (var a = 0; a < this.items.length; a++) c.Events.add(this.items[a], d.EventTypes.onFullSizeImageLoadAnomaly, this.sliderFullSizeImageLoadAnomalyEventHandler)
        },
        removeEventHandlers: function () {
            for (var a = 0; a < this.items.length; a++) c.Events.remove(this.items[a], d.EventTypes.onFullSizeImageLoadAnomaly, this.sliderFullSizeImageLoadAnomalyEventHandler)
        },
        resetPosition: function () {
            c.DOM.show(this.currentItem.imageContainerEl);
            this.parentElWidth = c.DOM.width(this.parentEl);
            this.parentElHeight = c.DOM.height(this.parentEl);
            c.DOM.width(this.el, this.parentElWidth * 3);
            c.DOM.height(this.el, this.parentElHeight);
            this.previousItem.resetPosition(this.parentElWidth, this.parentElHeight, 0);
            this.currentItem.resetPosition(this.parentElWidth, this.parentElHeight, this.parentElWidth);
            this.nextItem.resetPosition(this.parentElWidth, this.parentElHeight, this.parentElWidth * 2);
            this.center()
        },
        center: function () {
            c.DOM.resetTranslate(this.el);
            c.DOM.setStyle(this.el, {
                left: this.parentElWidth * -1 + "px"
            })
        },
        setCurrentFullSizeImage: function (a) {
            this.currentItem.setFullSizeImage(a);
            this.dispatchDisplayCurrentFullSizeImage()
        },
        setPreviousAndNextFullSizeImages: function (a, c) {
            this.nextItem.setFullSizeImage(c);
            this.previousItem.setFullSizeImage(a)
        },
        showNext: function () {
            this.lastShowAction = Code.PhotoSwipe.SliderClass.ShowActionTypes.next;
            this.hasBounced = !1;
            c.isNothing(this.nextItem.fullSizeImage) ? this.bounce() : c.Animation.slideBy(this.el, this.parentElWidth * -1, 0, this.settings.slideSpeed, this.showNextEndEventHandler)
        },
        showPrevious: function () {
            this.lastShowAction = Code.PhotoSwipe.SliderClass.ShowActionTypes.previous;
            this.hasBounced = !1;
            c.isNothing(this.previousItem.fullSizeImage) ? this.bounce() : c.Animation.slideBy(this.el, this.parentElWidth, 0, this.settings.slideSpeed, this.showPreviousEndEventHandler)
        },
        bounce: function () {
            c.DOM.show(this.currentItem.imageContainerEl);
            this.hasBounced = !0;
            c.browser.chrome ? this.dispatchDisplayCurrentFullSizeImage() : (this.bounceSlideBy = this.parentElWidth / 2, c.Animation.slideBy(this.el, this.lastShowAction === Code.PhotoSwipe.SliderClass.ShowActionTypes.previous ? this.bounceSlideBy : this.bounceSlideBy * -1, 0, this.settings.slideSpeed, this.bounceStepOneEventHandler))
        },
        onBounceStepOne: function () {
            var d = this;
            a.setTimeout(function () {
                c.Animation.slideBy(d.el, d.lastShowAction === Code.PhotoSwipe.SliderClass.ShowActionTypes.previous ? d.bounceSlideBy * -1 : d.bounceSlideBy, 0, d.settings.slideSpeed, d.bounceStepTwoEventHandler)
            }, 25)
        },
        onBounceStepTwo: function () {
            this.dispatchDisplayCurrentFullSizeImage()
        },
        onShowNextEnd: function () {
            c.DOM.show(this.currentItem.imageContainerEl);
            c.swapArrayElements(this.items, 1, 2);
            this.currentItem = this.items[1];
            this.nextItem = this.items[2];
            var a = this.parentElWidth;
            c.DOM.setStyle(this.currentItem.el, "left", a + "px");
            c.DOM.setStyle(this.nextItem.el, "left", a * 2 + "px");
            this.center();
            this.dispatchDisplayCurrentFullSizeImage()
        },
        onShowPreviousEnd: function () {
            c.DOM.show(this.currentItem.imageContainerEl);
            c.swapArrayElements(this.items, 1, 0);
            this.currentItem = this.items[1];
            this.previousItem = this.items[0];
            c.DOM.setStyle(this.currentItem.el, "left", this.parentElWidth + "px");
            c.DOM.setStyle(this.previousItem.el, "left", "0px");
            this.center();
            this.dispatchDisplayCurrentFullSizeImage()
        },
        onSliderFullSizeImageLoadAnomaly: function (a) {
            a = a.fullSizeImage;
            !c.isNothing(this.currentItem.fullSizeImage) && this.currentItem.fullSizeImage.index === a.index ? (this.currentItem.setFullSizeImage(a), this.dispatchDisplayCurrentFullSizeImage()) : !c.isNothing(this.nextItem.fullSizeImage) && this.nextItem.fullSizeImage.index === a.index ? this.nextItem.setFullSizeImage(a) : c.isNothing(this.previousItem.fullSizeImage) || this.previousItem.fullSizeImage.index === a.index && this.previousItem.setFullSizeImage(a)
        },
        dispatchDisplayCurrentFullSizeImage: function () {
            c.Events.fire(this, {
                type: Code.PhotoSwipe.SliderClass.EventTypes.onDisplayCurrentFullSizeImage,
                target: this,
                fullSizeImage: this.currentItem.fullSizeImage
            })
        }
    });
    Code.PhotoSwipe.SliderClass.CssClasses = {
        slider: "ps-slider"
    };
    Code.PhotoSwipe.SliderClass.ShowActionTypes = {
        next: "next",
        previous: "previous"
    };
    Code.PhotoSwipe.SliderClass.EventTypes = {
        onDisplayCurrentFullSizeImage: "PhotoSwipeSliderClassOnDisplayCurrentFullSizeImage"
    }
})(window, Code.PhotoSwipe.Util, Code.PhotoSwipe.SliderItemClass);
(function (a, c) {
    Code.PhotoSwipe.CaptionClass = Code.PhotoSwipe.ElementClass.extend({
        contentEl: null,
        touchMoveHandler: null,
        captionValue: null,
        init: function (a) {
            this.settings = {
                position: "top",
                zIndex: 1E3
            };
            c.extend(this.settings, a);
            this._super(this.settings);
            this.captionValue = "";
            this.touchMoveHandler = this.onTouchMove.bind(this);
            a = Code.PhotoSwipe.CaptionClass.CssClasses.caption;
            this.settings.position === "bottom" && (a = a + " " + Code.PhotoSwipe.CaptionClass.CssClasses.bottom);
            this.el = c.DOM.createElement("div", {
                "class": a
            }, "");
            c.DOM.setStyle(this.el, {
                left: 0,
                position: "absolute",
                overflow: "hidden",
                zIndex: this.settings.zIndex,
                opacity: 0
            });
            c.DOM.hide(this.el);
            c.DOM.appendToBody(this.el);
            this.contentEl = c.DOM.createElement("div", {
                "class": Code.PhotoSwipe.CaptionClass.CssClasses.content
            }, "");
            c.DOM.appendChild(this.contentEl, this.el)
        },
        addEventHandlers: function () {
            c.browser.touchSupported && c.Events.add(this.el, "touchmove", this.touchMoveHandler)
        },
        removeEventHandlers: function () {
            c.browser.touchSupported && c.Events.remove(this.el, "touchmove", this.touchMoveHandler)
        },
        onTouchMove: function (a) {
            a.preventDefault()
        },
        resetPosition: function () {
            var a;
            a = this.settings.position === "bottom" ? c.DOM.windowHeight() - c.DOM.outerHeight(this.el) + c.DOM.windowScrollTop() : c.DOM.windowScrollTop();
            c.DOM.setStyle(this.el, "top", a + "px");
            c.DOM.width(this.el, c.DOM.bodyOuterWidth())
        },
        setCaptionValue: function (a) {
            c.DOM.removeChildren(this.contentEl);
            a = c.coalesce(a, "\u00a0");
            c.isObject(a) ? c.DOM.appendChild(a, this.contentEl) : (a === "" && (a = "\u00a0"), c.DOM.appendText(a, this.contentEl));
            this.captionValue = a === "\u00a0" ? "" : a
        }
    });
    Code.PhotoSwipe.CaptionClass.CssClasses = {
        caption: "ps-caption",
        bottom: "ps-caption-bottom",
        content: "ps-caption-content"
    }
})(window, Code.PhotoSwipe.Util);
(function (a, c) {
    Code.PhotoSwipe.ToolbarClass = Code.PhotoSwipe.ElementClass.extend({
        closeEl: null,
        previousEl: null,
        nextEl: null,
        playEl: null,
        clickHandler: null,
        touchStartHandler: null,
        touchMoveHandler: null,
        touched: null,
        isNextActive: null,
        isPreviousActive: null,
        init: function (a) {
            this.settings = {
                position: "bottom",
                hideClose: !1,
                zIndex: 1E3
            };
            c.extend(this.settings, a);
            this._super(this.settings);
            this.isPreviousActive = this.isNextActive = !0;
            this.touched = !1;
            this.clickHandler = this.onClick.bind(this);
            if (c.browser.touchSupported) this.touchMoveHandler = this.onTouchMove.bind(this), this.touchStartHandler = this.onTouchStart.bind(this);
            a = Code.PhotoSwipe.ToolbarClass.CssClasses.caption;
            this.settings.position === "top" && (a = a + " " + Code.PhotoSwipe.ToolbarClass.CssClasses.top);
            this.el = c.DOM.createElement("div", {
                "class": a
            }, "");
            c.DOM.setStyle(this.el, {
                left: 0,
                position: "absolute",
                overflow: "hidden",
                zIndex: this.settings.zIndex,
                display: "table",
                opacity: 0
            });
            c.DOM.hide(this.el);
            c.DOM.appendToBody(this.el);
            this.closeEl = c.DOM.createElement("div", {
                "class": Code.PhotoSwipe.ToolbarClass.CssClasses.close
            }, '<div class="' + Code.PhotoSwipe.ToolbarClass.CssClasses.content + '"></div>');
            this.settings.hideClose && c.DOM.hide(this.closeEl);
            c.DOM.appendChild(this.closeEl, this.el);
            this.playEl = c.DOM.createElement("div", {
                "class": Code.PhotoSwipe.ToolbarClass.CssClasses.play
            }, '<div class="' + Code.PhotoSwipe.ToolbarClass.CssClasses.content + '"></div>');
            c.DOM.appendChild(this.playEl, this.el);
            this.previousEl = c.DOM.createElement("div", {
                "class": Code.PhotoSwipe.ToolbarClass.CssClasses.previous
            }, '<div class="' + Code.PhotoSwipe.ToolbarClass.CssClasses.content + '"></div>');
            c.DOM.appendChild(this.previousEl, this.el);
            this.nextEl = c.DOM.createElement("div", {
                "class": Code.PhotoSwipe.ToolbarClass.CssClasses.next
            }, '<div class="' + Code.PhotoSwipe.ToolbarClass.CssClasses.content + '"></div>');
            c.DOM.appendChild(this.nextEl, this.el)
        },
        postFadeIn: function () {
            this.isHidden || (c.DOM.setStyle(this.el, {
                display: "table"
            }), this._super(this.settings))
        },
        addEventHandlers: function () {
            c.browser.touchSupported && (c.browser.isBlackberry || c.Events.add(this.el, "touchstart", this.touchStartHandler), c.Events.add(this.el, "touchmove", this.touchMoveHandler));
            c.Events.add(this.el, "click", this.clickHandler)
        },
        removeEventHandlers: function () {
            c.browser.touchSupported && (c.browser.isBlackberry || c.Events.remove(this.el, "touchstart", this.touchStartHandler), c.Events.remove(this.el, "touchmove", this.touchMoveHandler));
            c.Events.remove(this.el, "click", this.clickHandler)
        },
        onTouchStart: function (a) {
            a.preventDefault();
            this.touched = !0;
            this.handleClick(a)
        },
        onTouchMove: function (a) {
            a.preventDefault()
        },
        onClick: function (a) {
            this.touched || this.handleClick(a)
        },
        handleClick: function (a) {
            var f;
            switch (a.target.parentNode) {
            case this.previousEl:
                if (this.isPreviousActive) f = Code.PhotoSwipe.ToolbarClass.Actions.previous;
                break;
            case this.nextEl:
                if (this.isNextActive) f = Code.PhotoSwipe.ToolbarClass.Actions.next;
                break;
            case this.playEl:
                f = Code.PhotoSwipe.ToolbarClass.Actions.play;
                break;
            case this.closeEl:
                f = Code.PhotoSwipe.ToolbarClass.Actions.close
            }
            c.isNothing(f) || c.Events.fire(this, {
                type: Code.PhotoSwipe.ToolbarClass.EventTypes.onClick,
                target: this,
                action: f
            })
        },
        resetPosition: function () {
            var a;
            a = this.settings.position === "bottom" ? c.DOM.windowHeight() - c.DOM.outerHeight(this.el) + c.DOM.windowScrollTop() : c.DOM.windowScrollTop();
            c.DOM.setStyle(this.el, "top", a + "px");
            c.DOM.width(this.el, c.DOM.bodyOuterWidth())
        },
        setNextState: function (a) {
            a ? (c.DOM.addClass(this.nextEl, Code.PhotoSwipe.ToolbarClass.CssClasses.nextDisabled), this.isNextActive = !1) : (c.DOM.removeClass(this.nextEl, Code.PhotoSwipe.ToolbarClass.CssClasses.nextDisabled), this.isNextActive = !0)
        },
        setPreviousState: function (a) {
            a ? (c.DOM.addClass(this.previousEl, Code.PhotoSwipe.ToolbarClass.CssClasses.previousDisabled), this.isPreviousActive = !1) : (c.DOM.removeClass(this.previousEl, Code.PhotoSwipe.ToolbarClass.CssClasses.previousDisabled), this.isPreviousActive = !0)
        }
    });
    Code.PhotoSwipe.ToolbarClass.CssClasses = {
        caption: "ps-toolbar",
        top: "ps-toolbar-top",
        close: "ps-toolbar-close",
        previous: "ps-toolbar-previous",
        previousDisabled: "ps-toolbar-previous-disabled",
        next: "ps-toolbar-next",
        nextDisabled: "ps-toolbar-next-disabled",
        play: "ps-toolbar-play",
        content: "ps-toolbar-content"
    };
    Code.PhotoSwipe.ToolbarClass.Actions = {
        close: "close",
        previous: "previous",
        next: "next",
        play: "play"
    };
    Code.PhotoSwipe.ToolbarClass.EventTypes = {
        onClick: "PhotoSwipeToolbarClassOnClick"
    }
})(window, Code.PhotoSwipe.Util);
(function (a, c, d, f) {
    Code.PhotoSwipe.CaptionToolbarClass = SimpleClass.extend({
        toolbar: null,
        caption: null,
        isHidden: null,
        hasAddedEventHandlers: null,
        toolbarClickEventHandler: null,
        init: function (a) {
            this.settings = {
                opacity: 0.8,
                fadeInSpeed: 250,
                fadeOutSpeed: 500,
                autoHideDelay: 5E3,
                flipPosition: !1,
                showEmptyCaptions: !0,
                hideClose: !1,
                zIndex: 1E3
            };
            c.extend(this.settings, a);
            this.isHidden = !0;
            this.hasAddedEventHandlers = !1;
            this.toolbarClickEventHandler = this.onToolbarClick.bind(this);
            this.caption = new d({
                fadeInSpeed: this.settings.fadeInSpeed,
                fadeOutSpeed: this.settings.fadeOutSpeed,
                opacity: this.settings.opacity,
                position: this.settings.flipPosition ? "bottom" : "top",
                zIndex: this.settings.zIndex
            });
            this.toolbar = new f({
                fadeInSpeed: this.settings.fadeInSpeed,
                fadeOutSpeed: this.settings.fadeOutSpeed,
                opacity: this.settings.opacity,
                position: this.settings.flipPosition ? "top" : "bottom",
                hideClose: this.settings.hideClose,
                zIndex: this.settings.zIndex + 1
            })
        },
        resetPosition: function () {
            this.caption.resetPosition();
            this.toolbar.resetPosition()
        },
        addEventHandlers: function () {
            if (!this.hasAddedEventHandlers) c.Events.add(this.toolbar, f.EventTypes.onClick, this.toolbarClickEventHandler), this.hasAddedEventHandlers = !0
        },
        removeEventHandlers: function () {
            c.Events.remove(this.toolbar, f.EventTypes.onClick, this.toolbarClickEventHandler);
            this.hasAddedEventHandlers = !1
        },
        fadeIn: function () {
            this.stopAutoHideTimeout();
            this.stopFade();
            this.isHidden ? (this.isHidden = !1, this.fadeInCaption(), this.toolbar.fadeIn(), a.setTimeout(this.onFadeIn.bind(this), this.settings.fadeInSpeed)) : (this.caption.isHidden && this.fadeInCaption(), this.resetAutoHideTimeout())
        },
        showCaption: function () {
            this.caption.captionValue === "" ? this.settings.showEmptyCaptions && this.caption.show() : this.caption.show()
        },
        fadeInCaption: function () {
            this.caption.captionValue === "" ? this.settings.showEmptyCaptions && this.caption.fadeIn() : this.caption.fadeIn()
        },
        onFadeIn: function () {
            this.addEventHandlers();
            this.resetAutoHideTimeout();
            c.Events.fire(this, {
                type: Code.PhotoSwipe.CaptionToolbarClass.EventTypes.onShow,
                target: this
            })
        },
        fadeOut: function () {
            this.stopAutoHideTimeout();
            this.stopFade();
            this.isHidden = !0;
            this.caption.fadeOut();
            this.toolbar.fadeOut();
            a.setTimeout(this.onFadeOut.bind(this), this.settings.fadeOutSpeed)
        },
        onFadeOut: function () {
            c.Events.fire(this, {
                type: Code.PhotoSwipe.CaptionToolbarClass.EventTypes.onHide,
                target: this
            })
        },
        stopFade: function () {
            this.caption.stopFade();
            this.toolbar.stopFade()
        },
        hide: function () {
            this.stopAutoHideTimeout();
            this.stopFade();
            this.isHidden = !0;
            this.removeEventHandlers();
            this.caption.hide();
            this.toolbar.hide();
            c.Events.fire(this, {
                type: Code.PhotoSwipe.CaptionToolbarClass.EventTypes.onHide,
                target: this
            })
        },
        setCaptionValue: function (a) {
            this.caption.setCaptionValue(a);
            this.caption.captionValue === "" && !this.settings.showEmptyCaptions && this.caption.fadeOut()
        },
        resetAutoHideTimeout: function () {
            if (!this.isHidden && (this.stopAutoHideTimeout(), this.settings.autoHideDelay > 0)) this.autoHideTimeout = a.setTimeout(this.fadeOut.bind(this), this.settings.autoHideDelay)
        },
        stopAutoHideTimeout: function () {
            c.isNothing(this.autoHideTimeout) || a.clearTimeout(this.autoHideTimeout)
        },
        onToolbarClick: function (a) {
            c.Events.fire(this, {
                type: Code.PhotoSwipe.ToolbarClass.EventTypes.onClick,
                target: this,
                action: a.action
            })
        },
        setNextState: function (a) {
            this.toolbar.setNextState(a)
        },
        setPreviousState: function (a) {
            this.toolbar.setPreviousState(a)
        }
    });
    Code.PhotoSwipe.CaptionToolbarClass.EventTypes = {
        onShow: "PhotoSwipeCaptionToolbarClassOnShow",
        onHide: "PhotoSwipeCaptionToolbarClassOnHide"
    }
})(window, Code.PhotoSwipe.Util, Code.PhotoSwipe.CaptionClass, Code.PhotoSwipe.ToolbarClass);
(function (a, c) {
    Code.PhotoSwipe.ZoomPanRotateClass = Code.PhotoSwipe.ElementClass.extend({
        containerEl: null,
        imageEl: null,
        parentEl: null,
        transformSettings: null,
        panStartingPoint: null,
        init: function (a, f, g) {
            this.settings = {
                maxZoom: 5,
                minZoom: 0.5,
                adjustPanToZoom: !0
            };
            c.extend(this.settings, a);
            this._super(a);
            this.parentEl = f;
            this.imageEl = g.cloneNode(!1);
            this.transformSettings = {
                startingScale: 1,
                scale: 1,
                startingRotation: 0,
                rotation: 0,
                startingTranslateX: 0,
                startingTranslateY: 0,
                translateX: 0,
                translateY: 0
            };
            this.el = c.DOM.createElement("div", {
                "class": Code.PhotoSwipe.ZoomPanRotateClass.CssClasses.documentOverlay
            }, "");
            c.DOM.setStyle(this.el, {
                left: 0,
                top: 0,
                position: "absolute",
                zIndex: 1
            });
            c.DOM.width(this.el, c.DOM.bodyOuterWidth());
            c.DOM.height(this.el, c.DOM.windowHeight());
            this.containerEl = c.DOM.createElement("div");
            c.DOM.setStyle(this.containerEl, {
                left: 0,
                top: 0,
                position: "absolute"
            });
            c.DOM.width(this.containerEl, c.DOM.bodyWidth());
            c.DOM.height(this.containerEl, c.DOM.windowHeight());
            c.DOM.appendChild(this.imageEl, this.containerEl);
            c.DOM.appendChild(this.containerEl, this.el);
            c.DOM.appendChild(this.el, this.parentEl);
            c.browser.isiOS && (c.DOM.resetTranslate(this.containerEl), c.DOM.resetTranslate(this.imageEl))
        },
        setStartingTranslateFromCurrentTranform: function () {
            var d = c.coalesce(this.containerEl.style.webkitTransform, this.containerEl.style.MozTransform, this.containerEl.style.transform);
            if (!c.isNothing(d) && (d = d.match(/translate\((.*?)\)/), !c.isNothing(d))) d = d[1].split(", "), this.transformSettings.startingTranslateX = a.parseInt(d[0], 10), this.transformSettings.startingTranslateY = a.parseInt(d[1], 10)
        },
        getScale: function (a) {
            a *= this.transformSettings.startingScale;
            if (this.settings.minZoom !== 0 && a < this.settings.minZoom) a = this.settings.minZoom;
            else if (this.settings.maxZoom !== 0 && a > this.settings.maxZoom) a = this.settings.maxZoom;
            return a
        },
        setStartingScaleAndRotation: function (a, c) {
            this.transformSettings.startingScale = this.getScale(a);
            this.transformSettings.startingRotation = (this.transformSettings.startingRotation + c) % 360
        },
        zoomRotate: function (a, c) {
            this.transformSettings.scale = this.getScale(a);
            this.transformSettings.rotation = this.transformSettings.startingRotation + c;
            this.applyTransform()
        },
        panStart: function (a) {
            this.setStartingTranslateFromCurrentTranform();
            this.panStartingPoint = {
                x: a.x,
                y: a.y
            }
        },
        pan: function (a) {
            var c = a.x - this.panStartingPoint.x,
                a = a.y - this.panStartingPoint.y,
                a = a / this.transformSettings.scale ? a / this.transformSettings.scale : a;
            this.transformSettings.translateX = this.transformSettings.startingTranslateX + (this.settings.adjustPanToZoom ? c / this.transformSettings.scale : c);
            this.transformSettings.translateY = this.transformSettings.startingTranslateY + a;
            this.applyTransform()
        },
        zoomAndPanToPoint: function (a, f) {
            this.panStart({
                x: c.DOM.bodyWidth() / 2,
                y: c.DOM.windowHeight() / 2
            });
            var g = f.x - this.panStartingPoint.x,
                h = f.y - this.panStartingPoint.y,
                h = h / this.transformSettings.scale ? h / this.transformSettings.scale : h;
            this.transformSettings.translateX = (this.transformSettings.startingTranslateX + (this.settings.adjustPanToZoom ? g / this.transformSettings.scale : g)) * -1;
            this.transformSettings.translateY = (this.transformSettings.startingTranslateY + h) * -1;
            this.setStartingScaleAndRotation(a, 0);
            this.transformSettings.scale = this.transformSettings.startingScale;
            this.transformSettings.rotation = 0;
            this.applyTransform()
        },
        applyTransform: function () {
            var d = "scale(" + this.transformSettings.scale + ") rotate(" + this.transformSettings.rotation % 360 + "deg) translate(" + a.parseInt(this.transformSettings.translateX, 10) + "px, " + a.parseInt(this.transformSettings.translateY, 10) + "px)";
            c.DOM.setStyle(this.containerEl, {
                webkitTransform: d,
                MozTransform: d,
                msTransform: d,
                transform: d
            })
        },
        removeFromDOM: function () {
            c.DOM.removeChild(this.el, this.parentEl)
        }
    });
    Code.PhotoSwipe.ZoomPanRotateClass.CssClasses = {
        documentOverlay: "ps-zoom-pan-rotate"
    }
})(window, Code.PhotoSwipe.Util);
(function (a, c, d, f, g, h, i, o, l, q, s) {
    o = SimpleClass.extend({
        fullSizeImages: null,
        documentOverlay: null,
        viewport: null,
        slider: null,
        captionAndToolbar: null,
        zoomPanRotate: null,
        settings: null,
        currentIndex: null,
        isBusy: null,
        isActive: null,
        currentHistoryHashValue: null,
        isBackEventSupported: null,
        slideshowTimeout: null,
        isSlideshowActive: null,
        lastShowPrevTrigger: null,
        backButtonClicked: null,
        viewportFadeInEventHandler: null,
        windowOrientationChangeEventHandler: null,
        windowScrollEventHandler: null,
        windowHashChangeHandler: null,
        keyDownEventHandler: null,
        viewportTouchEventHandler: null,
        viewportFadeOutEventHandler: null,
        sliderDisplayCurrentFullSizeImageEventHandler: null,
        toolbarClickEventHandler: null,
        captionAndToolbarShowEventHandler: null,
        captionAndToolbarHideEventHandler: null,
        orientationEventName: null,
        init: function () {
            this.currentIndex = 0;
            this.backButtonClicked = this.isSlideshowActive = this.isActive = this.isBusy = !1;
            this.settings = {
                getImageSource: Code.PhotoSwipe.GetImageSource,
                getImageCaption: Code.PhotoSwipe.GetImageCaption,
                getImageMetaData: Code.PhotoSwipe.GetImageMetaData,
                fadeInSpeed: 250,
                fadeOutSpeed: 500,
                slideSpeed: 250,
                swipeThreshold: 50,
                swipeTimeThreshold: 250,
                loop: !0,
                slideshowDelay: 3E3,
                imageScaleMethod: "fitNoUpscale",
                preventHide: !1,
                zIndex: 1E3,
                backButtonHideEnabled: !0,
                jQueryMobile: !c.isNothing(a.jQuery) && !c.isNothing(a.jQuery.mobile),
                jQueryMobileDialogHash: "&ui-state=dialog",
                allowUserZoom: !0,
                allowRotationOnUserZoom: !0,
                maxUserZoom: 5,
                minUserZoom: 0.5,
                adjustUserPanToZoom: !0,
                doubleClickSpeed: 300,
                doubleClickZoom: 2.5,
                captionAndToolbarHide: !1,
                captionAndToolbarHideOnSwipe: !0,
                captionAndToolbarFlipPosition: !1,
                captionAndToolbarAutoHideDelay: 5E3,
                captionAndToolbarOpacity: 0.8,
                captionAndToolbarShowEmptyCaptions: !0
            };
            if (c.browser.isAndroid && navigator.userAgent.indexOf("2.1")) this.isBackEventSupported = !0;
            if (!this.isBackEventSupported) this.isBackEventSupported = "onhashchange" in a;
            if (this.settings.preventHide) this.settings.backButtonHideEnabled = !1;
            this.viewportFadeInEventHandler = this.onViewportFadeIn.bind(this);
            this.windowOrientationChangeEventHandler = this.onWindowOrientationChange.bind(this);
            this.windowScrollEventHandler = this.onWindowScroll.bind(this);
            this.windowHashChangeHandler = this.onWindowHashChange.bind(this);
            this.keyDownEventHandler = this.onKeyDown.bind(this);
            this.viewportTouchEventHandler = this.onViewportTouch.bind(this);
            this.viewportFadeOutEventHandler = this.onViewportFadeOut.bind(this);
            this.sliderDisplayCurrentFullSizeImageEventHandler = this.onSliderDisplayCurrentFullSizeImage.bind(this);
            this.toolbarClickEventHandler = this.onToolbarClick.bind(this);
            this.captionAndToolbarShowEventHandler = this.onCaptionAndToolbarShow.bind(this);
            this.captionAndToolbarHideEventHandler = this.onCaptionAndToolbarHide.bind(this)
        },
        setOptions: function (a) {
            c.extend(this.settings, a);
            if (this.settings.preventHide) this.settings.backButtonHideEnabled = !1
        },
        setImages: function (a) {
            if (!c.isArray) throw "thumbEls is not an array";
            this.currentIndex = 0;
            this.fullSizeImages = [];
            for (var d = 0; d < a.length; d++) {
                var f = a[d];
                this.fullSizeImages.push(new g(d, this.settings.imageScaleMethod, this.settings.getImageSource(f), this.settings.getImageCaption(f), this.settings.getImageMetaData(f)))
            }
        },
        show: function (f) {
            if (!this.isBusy && !this.isActive) {
                if (!c.isNumber(f)) throw "startingIndex must be a number";
                if (c.isNothing(this.fullSizeImages)) throw "need to set images before showing the gallery";
                this.backButtonClicked = !1;
                this.isBusy = this.isActive = !0;
                this.lastShowPrevTrigger = Code.PhotoSwipe.ShowPrevTriggers.show;
                c.DOM.addClass(document.body, Code.PhotoSwipe.CssClasses.activeBody);
                f = a.parseInt(f);
                if (f < 0 || f >= this.fullSizeImages.length) f = 0;
                this.currentIndex = f;
                c.isNothing(this.documentOverlay) ? this.build() : this.resetPosition();
                c.Events.add(this.viewport, d.EventTypes.onFadeIn, this.viewportFadeInEventHandler);
                c.Events.fire(this, {
                    type: Code.PhotoSwipe.EventTypes.onBeforeShow,
                    target: this
                });
                this.viewport.fadeIn()
            }
        },
        build: function () {
            this.documentOverlay = new f({
                fadeInSpeed: this.settings.fadeInSpeed,
                fadeOutSpeed: this.settings.fadeOutSpeed,
                zIndex: this.settings.zIndex
            });
            this.viewport = new h({
                fadeInSpeed: this.settings.fadeInSpeed,
                fadeOutSpeed: this.settings.fadeOutSpeed,
                swipeThreshold: this.settings.swipeThreshold,
                swipeTimeThreshold: this.settings.swipeTimeThreshold,
                zIndex: this.settings.zIndex + 1,
                doubleClickSpeed: this.settings.doubleClickSpeed
            });
            this.slider = new i({
                fadeInSpeed: this.settings.fadeInSpeed,
                fadeOutSpeed: this.settings.fadeOutSpeed,
                slideSpeed: this.settings.slideSpeed
            }, this.viewport.el);
            this.captionAndToolbar = new q({
                opacity: this.settings.captionAndToolbarOpacity,
                fadeInSpeed: this.settings.fadeInSpeed,
                fadeOutSpeed: this.settings.fadeOutSpeed,
                autoHideDelay: this.settings.captionAndToolbarAutoHideDelay,
                flipPosition: this.settings.captionAndToolbarFlipPosition,
                showEmptyCaptions: this.settings.captionAndToolbarShowEmptyCaptions,
                hideClose: this.settings.preventHide,
                zIndex: this.settings.zIndex + 3
            });
            this.resetPosition()
        },
        addEventHandler: function (a, d) {
            c.Events.add(this, a, d)
        },
        addEventHandlers: function () {
            this.orientationEventName = c.browser.isAndroid ? "resize" : "onorientationchange" in a ? "orientationchange" : "resize";
            c.Events.add(a, this.orientationEventName, this.windowOrientationChangeEventHandler);
            c.Events.add(a, "scroll", this.windowScrollEventHandler);
            if (this.isBackEventSupported && this.settings.backButtonHideEnabled) this.settings.jQueryMobile ? a.location.hash = this.settings.jQueryMobileDialogHash : (this.currentHistoryHashValue = "PhotoSwipe" + (new Date).getTime().toString(), a.location.hash = this.currentHistoryHashValue), c.Events.add(a, "hashchange", this.windowHashChangeHandler);
            c.Events.add(document, "keydown", this.keyDownEventHandler);
            c.Events.add(this.viewport, h.EventTypes.onTouch, this.viewportTouchEventHandler);
            c.Events.add(this.slider, i.EventTypes.onDisplayCurrentFullSizeImage, this.sliderDisplayCurrentFullSizeImageEventHandler);
            c.Events.add(this.captionAndToolbar, l.EventTypes.onClick, this.toolbarClickEventHandler);
            c.Events.add(this.captionAndToolbar, q.EventTypes.onShow, this.captionAndToolbarShowEventHandler);
            c.Events.add(this.captionAndToolbar, q.EventTypes.onHide, this.captionAndToolbarHideEventHandler)
        },
        removeEventHandlers: function () {
            c.Events.remove(a, this.orientationEventName, this.windowOrientationChangeEventHandler);
            c.Events.remove(a, "scroll", this.windowScrollEventHandler);
            this.isBackEventSupported && this.settings.backButtonHideEnabled && c.Events.remove(a, "hashchange", this.windowHashChangeHandler);
            c.Events.remove(document, "keydown", this.keyDownEventHandler);
            c.Events.remove(this.viewport, h.EventTypes.onTouch, this.viewportTouchEventHandler);
            c.Events.remove(this.slider, i.EventTypes.onDisplayCurrentFullSizeImage, this.sliderDisplayCurrentFullSizeImageEventHandler);
            c.Events.remove(this.captionAndToolbar, l.EventTypes.onClick, this.toolbarClickEventHandler);
            c.Events.remove(this.captionAndToolbar, q.EventTypes.onShow, this.captionAndToolbarShowEventHandler);
            c.Events.remove(this.captionAndToolbar, q.EventTypes.onHide, this.captionAndToolbarHideEventHandler)
        },
        onViewportFadeIn: function () {
            c.Events.remove(this.viewport, d.EventTypes.onFadeIn, this.viewportFadeInEventHandler);
            this.documentOverlay.show();
            this.slider.fadeIn();
            this.addEventHandlers();
            this.slider.setCurrentFullSizeImage(this.fullSizeImages[this.currentIndex]);
            this.isBusy = !1;
            c.Events.fire(this, {
                type: Code.PhotoSwipe.EventTypes.onShow,
                target: this
            })
        },
        setSliderPreviousAndNextFullSizeImages: function () {
            var a, c = null,
                d = null;
            this.fullSizeImages.length > 1 && (a = this.fullSizeImages.length - 1, this.currentIndex === a ? (this.settings.loop && (d = this.fullSizeImages[0]), c = this.fullSizeImages[this.currentIndex - 1]) : this.currentIndex === 0 ? (d = this.fullSizeImages[this.currentIndex + 1], this.settings.loop && (c = this.fullSizeImages[a])) : (d = this.fullSizeImages[this.currentIndex + 1], c = this.fullSizeImages[this.currentIndex - 1]));
            this.slider.setPreviousAndNextFullSizeImages(c, d)
        },
        onKeyDown: function (a) {
            this.stopSlideshow();
            a.keyCode === 37 ? (a.preventDefault(), this.lastShowPrevTrigger = Code.PhotoSwipe.ShowPrevTriggers.keyboard, this.showPrevious()) : a.keyCode === 39 ? (a.preventDefault(), this.lastShowPrevTrigger = Code.PhotoSwipe.ShowPrevTriggers.keyboard, this.showNext()) : a.keyCode === 38 || a.keyCode === 40 ? a.preventDefault() : a.keyCode === 27 ? (a.preventDefault(), this.hide()) : a.keyCode === 32 && (this.settings.hideToolbar ? this.hide() : this.toggleCaptionAndToolbar(), a.preventDefault())
        },
        onWindowOrientationChange: function () {
            this.resetPosition()
        },
        onWindowScroll: function () {
            this.resetPosition()
        },
        onWindowHashChange: function () {
            if (a.location.hash !== "#" + (this.settings.jQueryMobile ? this.settings.jQueryMobileDialogHash : this.currentHistoryHashValue)) this.backButtonClicked = !0, this.hide()
        },
        resetPosition: function () {
            this.removeZoomPanRotate();
            this.viewport.resetPosition();
            this.slider.resetPosition();
            this.documentOverlay.resetPosition();
            this.captionAndToolbar.resetPosition();
            c.Events.fire(this, {
                type: Code.PhotoSwipe.EventTypes.onResetPosition,
                target: this
            })
        },
        canUserZoom: function () {
            return !c.browser.isCSSTransformSupported ? !1 : !this.settings.allowUserZoom ? !1 : this.isBusy ? !1 : c.isNothing(this.slider.currentItem.fullSizeImage) ? !1 : !this.slider.currentItem.fullSizeImage.hasLoaded ? !1 : !0
        },
        isZoomActive: function () {
            return !c.isNothing(this.zoomPanRotate)
        },
        onViewportTouch: function (d) {
            switch (d.action) {
            case h.Actions.gestureStart:
                this.createZoomPanRotate();
                break;
            case h.Actions.gestureChange:
                this.isZoomActive() && this.zoomPanRotate.zoomRotate(d.scale, this.settings.allowRotationOnUserZoom ? d.rotation : 0);
                break;
            case h.Actions.gestureEnd:
                this.isZoomActive() && this.zoomPanRotate.setStartingScaleAndRotation(d.scale, this.settings.allowRotationOnUserZoom ? d.rotation : 0);
                break;
            case h.Actions.touchStart:
                this.stopSlideshow();
                this.isZoomActive() && this.zoomPanRotate.panStart(d.point);
                break;
            case h.Actions.touchMove:
                this.isZoomActive() && this.zoomPanRotate.pan(d.point);
                break;
            case h.Actions.click:
                this.stopSlideshow();
                this.settings.hideToolbar ? this.hide() : this.toggleCaptionAndToolbar();
                c.Events.fire(this, {
                    type: Code.PhotoSwipe.EventTypes.onViewportClick,
                    target: this
                });
                break;
            case h.Actions.doubleClick:
                if (this.isZoomActive()) {
                    var f = this;
                    a.setTimeout(function () {
                        f.removeZoomPanRotate()
                    })
                } else {
                    d.point.x -= c.DOM.windowScrollLeft();
                    d.point.y -= c.DOM.windowScrollTop();
                    var g = a.parseInt(c.DOM.getStyle(this.slider.currentItem.imageEl, "top"), 10),
                        i = a.parseInt(c.DOM.getStyle(this.slider.currentItem.imageEl, "left"), 10),
                        l = i + c.DOM.width(this.slider.currentItem.imageEl),
                        o = g + c.DOM.height(this.slider.currentItem.imageEl);
                    if (d.point.x < i) d.point.x = i;
                    else if (d.point.x > l) d.point.x = l;
                    if (d.point.y < g) d.point.y = g;
                    else if (d.point.y > o) d.point.y = o;
                    this.createZoomPanRotate();
                    this.zoomPanRotate.zoomAndPanToPoint(this.settings.doubleClickZoom, d.point)
                }
                break;
            case h.Actions.swipeLeft:
                this.stopSlideshow();
                this.lastShowPrevTrigger = Code.PhotoSwipe.ShowPrevTriggers.swipe;
                this.showNext();
                break;
            case h.Actions.swipeRight:
                this.stopSlideshow(), this.lastShowPrevTrigger = Code.PhotoSwipe.ShowPrevTriggers.swipe, this.showPrevious()
            }
        },
        onViewportFadeOut: function () {
            c.Events.remove(this.viewport, d.EventTypes.onFadeOut, this.viewportFadeOutEventHandler);
            this.isActive = this.isBusy = !1;
            c.Events.fire(this, {
                type: Code.PhotoSwipe.EventTypes.onHide,
                target: this
            });
            this.goBackInHistory()
        },
        hide: function () {
            if (!this.isBusy && !this.settings.preventHide && this.isActive) this.isBusy = !0, this.removeZoomPanRotate(), this.removeEventHandlers(), this.documentOverlay.hide(), this.captionAndToolbar.hide(), this.slider.hide(), c.DOM.removeClass(document.body, Code.PhotoSwipe.CssClasses.activeBody), c.Events.add(this.viewport, d.EventTypes.onFadeOut, this.viewportFadeOutEventHandler), c.Events.fire(this, {
                type: Code.PhotoSwipe.EventTypes.onBeforeHide,
                target: this
            }), this.viewport.fadeOut()
        },
        hideImmediately: function () {
            if (this.isActive) c.Events.fire(this, {
                type: Code.PhotoSwipe.EventTypes.onBeforeHide,
                target: this
            }), this.removeZoomPanRotate(), this.removeEventHandlers(), this.documentOverlay.hide(), this.captionAndToolbar.hide(), this.slider.hide(), this.viewport.hide(), c.DOM.removeClass(document.body, Code.PhotoSwipe.CssClasses.activeBody), this.isActive = this.isBusy = !1, c.Events.fire(this, {
                type: Code.PhotoSwipe.EventTypes.onHide,
                target: this
            }), this.goBackInHistory()
        },
        goBackInHistory: function () {
            this.isBackEventSupported && this.settings.backButtonHideEnabled && (this.backButtonClicked || a.history.back())
        },
        showNext: function () {
            if (!this.isBusy) this.isBusy = !0, this.cleanUpZoomPanRotateForNextPrevious(), this.setCaptionAndToolbarOnShowPreviousNext(), this.slider.showNext(), c.Events.fire(this, {
                type: Code.PhotoSwipe.EventTypes.onShowNext,
                target: this
            })
        },
        showPrevious: function () {
            if (!this.isBusy) this.isBusy = !0, this.cleanUpZoomPanRotateForNextPrevious(), this.setCaptionAndToolbarOnShowPreviousNext(), this.wasUserZoomActive && c.DOM.hide(this.slider.currentItem.imageEl), this.slider.showPrevious(), c.Events.fire(this, {
                type: Code.PhotoSwipe.EventTypes.onShowPrevious,
                target: this
            })
        },
        cleanUpZoomPanRotateForNextPrevious: function () {
            c.isNothing(this.zoomPanRotate) || (this.settings.loop ? c.DOM.hide(this.slider.currentItem.imageEl) : this.currentIndex > 0 && this.currentIndex < this.fullSizeImages.length - 2 && c.DOM.hide(this.slider.currentItem.imageEl));
            this.removeZoomPanRotate()
        },
        setCaptionAndToolbarOnShowPreviousNext: function () {
            if (!this.settings.captionAndToolbarHide) {
                var a = !1;
                switch (this.lastShowPrevTrigger) {
                case Code.PhotoSwipe.ShowPrevTriggers.toolbar:
                    a = !0;
                    break;
                case Code.PhotoSwipe.ShowPrevTriggers.slideshow:
                    a = !1;
                    break;
                default:
                    a = !this.settings.captionAndToolbarHideOnSwipe
                }
                a ? this.captionAndToolbar.resetAutoHideTimeout() : this.fadeOutCaptionAndToolbar()
            }
        },
        onSliderDisplayCurrentFullSizeImage: function (a) {
            this.currentIndex = a.fullSizeImage.index;
            if (!this.settings.captionAndToolbarHide) {
                this.settings.loop ? (this.captionAndToolbar.setNextState(!1), this.captionAndToolbar.setPreviousState(!1)) : (this.currentIndex >= this.fullSizeImages.length - 1 ? this.captionAndToolbar.setNextState(!0) : this.captionAndToolbar.setNextState(!1), this.currentIndex < 1 ? this.captionAndToolbar.setPreviousState(!0) : this.captionAndToolbar.setPreviousState(!1));
                this.captionAndToolbar.setCaptionValue(this.fullSizeImages[this.currentIndex].caption);
                switch (this.lastShowPrevTrigger) {
                case Code.PhotoSwipe.ShowPrevTriggers.toolbar:
                    a = !0;
                    break;
                case Code.PhotoSwipe.ShowPrevTriggers.show:
                    a = !0;
                    break;
                case Code.PhotoSwipe.ShowPrevTriggers.slideshow:
                    a = !1;
                    break;
                default:
                    a = !this.settings.captionAndToolbarHideOnSwipe
                }
                a && (c.Events.fire(this, {
                    type: Code.PhotoSwipe.EventTypes.onBeforeCaptionAndToolbarShow,
                    target: this
                }), this.captionAndToolbar.fadeIn());
                c.Events.fire(this, {
                    type: Code.PhotoSwipe.EventTypes.onDisplayImage,
                    target: this,
                    image: this.fullSizeImages[this.currentIndex]
                })
            }
            this.lastShowPrevTrigger = "";
            this.setSliderPreviousAndNextFullSizeImages();
            this.isSlideshowActive && this.fireSlideshowTimeout();
            this.isBusy = !1
        },
        toggleCaptionAndToolbar: function () {
            this.settings.captionAndToolbarHide ? this.captionAndToolbar.hide() : this.captionAndToolbar.isHidden ? (c.Events.fire(this, {
                type: Code.PhotoSwipe.EventTypes.onBeforeCaptionAndToolbarShow,
                target: this
            }), this.captionAndToolbar.fadeIn()) : (c.Events.fire(this, {
                type: Code.PhotoSwipe.EventTypes.onBeforeCaptionAndToolbarHide,
                target: this
            }), this.captionAndToolbar.fadeOut())
        },
        fadeOutCaptionAndToolbar: function () {
            !this.settings.captionAndToolbarHide && !this.captionAndToolbar.isHidden && (c.Events.fire(this, {
                type: Code.PhotoSwipe.EventTypes.onBeforeCaptionAndToolbarHide,
                target: this
            }), this.captionAndToolbar.fadeOut())
        },
        onToolbarClick: function (a) {
            this.stopSlideshow();
            switch (a.action) {
            case l.Actions.previous:
                this.lastShowPrevTrigger = Code.PhotoSwipe.ShowPrevTriggers.toolbar;
                this.showPrevious();
                break;
            case l.Actions.next:
                this.lastShowPrevTrigger = Code.PhotoSwipe.ShowPrevTriggers.toolbar;
                this.showNext();
                break;
            case l.Actions.play:
                this.startSlideshow();
                break;
            default:
                this.hide()
            }
        },
        startSlideshow: function () {
            if (!this.isBusy) c.isNothing(this.slideshowTimeout) || a.clearTimeout(this.slideshowTimeout), this.removeZoomPanRotate(), this.isSlideshowActive = !0, this.fadeOutCaptionAndToolbar(), this.fireSlideshowTimeout(), c.Events.fire(this, {
                type: Code.PhotoSwipe.EventTypes.onSlideshowStart,
                target: this
            })
        },
        stopSlideshow: function () {
            c.isNothing(this.slideshowTimeout) || a.clearTimeout(this.slideshowTimeout);
            this.isSlideshowActive = !1;
            c.Events.fire(this, {
                type: Code.PhotoSwipe.EventTypes.onSlideshowStop,
                target: this
            })
        },
        fireSlideshowTimeout: function () {
            var c = !1;
            this.settings.loop ? this.fullSizeImages.length > 1 && (c = !0) : this.currentIndex < this.fullSizeImages.length - 1 && (c = !0);
            if (c) this.lastShowPrevTrigger = Code.PhotoSwipe.ShowPrevTriggers.slideshow, this.slideshowTimeout = a.setTimeout(this.showNext.bind(this), this.settings.slideshowDelay)
        },
        createZoomPanRotate: function () {
            if (this.canUserZoom()) {
                this.stopSlideshow();
                if (!this.isZoomActive()) this.zoomPanRotate = new s({
                    maxZoom: this.settings.maxUserZoom,
                    minZoom: this.settings.minUserZoom,
                    adjustPanToZoom: this.settings.adjustUserPanToZoom
                }, this.viewport.el, this.slider.currentItem.imageEl);
                this.fadeOutCaptionAndToolbar()
            }
        },
        removeZoomPanRotate: function () {
            if (!c.isNothing(this.zoomPanRotate)) this.zoomPanRotate.removeFromDOM(), this.zoomPanRotate = null
        },
        onCaptionAndToolbarShow: function () {
            c.Events.fire(this, {
                type: Code.PhotoSwipe.EventTypes.onCaptionAndToolbarShow,
                target: this
            })
        },
        onCaptionAndToolbarHide: function () {
            c.Events.fire(this, {
                type: Code.PhotoSwipe.EventTypes.onCaptionAndToolbarHide,
                target: this
            })
        }
    });
    Code.PhotoSwipe.CssClasses = {
        activeBody: "ps-active"
    };
    Code.PhotoSwipe.ShowPrevTriggers = {
        show: "show",
        toolbar: "toobar",
        swipe: "swipe",
        keyboard: "keyboard",
        slideshow: "slideshow"
    };
    Code.PhotoSwipe.EventTypes = {
        onBeforeShow: "PhotoSwipeOnBeforeShow",
        onShow: "PhotoSwipeOnShow",
        onBeforeHide: "PhotoSwipeOnBeforeHide",
        onHide: "PhotoSwipeOnHide",
        onShowNext: "PhotoSwipeOnShowNext",
        onShowPrevious: "PhotoSwipeOnShowPrevious",
        onDisplayImage: "PhotoSwipeOnDisplayImage",
        onResetPosition: "PhotoSwipeOnResetPosition",
        onSlideshowStart: "PhotoSwipeOnSlideshowStart",
        onSlideshowStop: "PhotoSwipeOnSlideshowStop",
        onBeforeCaptionAndToolbarShow: "PhotoSwipeOnBeforeCaptionAndToolbarShow",
        onCaptionAndToolbarShow: "PhotoSwipeOnCaptionAndToolbarShow",
        onBeforeCaptionAndToolbarHide: "PhotoSwipeOnBeforeCaptionAndToolbarHide",
        onCaptionAndToolbarHide: "PhotoSwipeOnCaptionAndToolbarHide",
        onViewportClick: "PhotoSwipeOnViewportClick"
    };
    Code.PhotoSwipe.GetImageSource = function (a) {
        return a.href
    };
    Code.PhotoSwipe.GetImageCaption = function (a) {
        if (a.nodeName === "IMG") return c.DOM.getAttribute(a, "alt");
        var d, f;
        for (d = 0; d < a.childNodes.length; d++) if (f = a.childNodes[d], a.childNodes[d].nodeName === "IMG") return c.DOM.getAttribute(f, "alt")
    };
    Code.PhotoSwipe.GetImageMetaData = function () {
        return {}
    };
    Code.PhotoSwipe.Current = new o;
    Code.photoSwipe = function (a, d, f) {
        var g = !0;
        if (!c.isNothing(a)) {
            if (c.isNothing(d)) d = document.documentElement, g = !1;
            c.isString(d) && (d = document.documentElement.querySelector(d));
            if (c.isNothing(d)) throw "Unable to find container element";
            c.isString(a) && (a = d.querySelectorAll(a));
            if (!c.isNothing(a)) {
                var h = function (a) {
                        a.preventDefault();
                        i(a.currentTarget)
                    },
                    i = function (c) {
                        var d;
                        for (d = 0; d < a.length; d++) if (a[d] === c) break;
                        Code.PhotoSwipe.Current.show(d)
                    };
                Code.PhotoSwipe.Current.setOptions(f);
                Code.PhotoSwipe.Current.setImages(a);
                if (g) d.addEventListener("click", function (d) {
                    if (d.target !== d.currentTarget) {
                        d.preventDefault();
                        var f = function (a, d, g) {
                                return c.isNothing(a) || c.isNothing(d) || c.isNothing(g) ? null : a.nodeName === d ? a : a === g ? null : f(a.parentNode, d, g)
                            },
                            d = f(d.target, a[0].nodeName, d.currentTarget);
                        c.isNothing(d) || i(d)
                    }
                }, !1);
                else for (d = 0; d < a.length; d++) a[d].addEventListener("click", h, !1);
                return a
            }
        }
    };
    if (!c.isNothing(a.jQuery)) a.jQuery.fn.photoSwipe = function (a) {
        var c = this;
        Code.PhotoSwipe.Current.setOptions(a);
        Code.PhotoSwipe.Current.setImages(c);
        $(c).die("click.photoswipe");
        $(c).live("click.photoswipe", function (a) {
            a.preventDefault();
            a = $(c).index($(a.currentTarget));
            Code.PhotoSwipe.Current.show(a)
        })
    }
})(window, Code.PhotoSwipe.Util, Code.PhotoSwipe.ElementClass, Code.PhotoSwipe.DocumentOverlayClass, Code.PhotoSwipe.FullSizeImageClass, Code.PhotoSwipe.ViewportClass, Code.PhotoSwipe.SliderClass, Code.PhotoSwipe.CaptionClass, Code.PhotoSwipe.ToolbarClass, Code.PhotoSwipe.CaptionToolbarClass, Code.PhotoSwipe.ZoomPanRotateClass);
$(document).bind("mobileinit", function () {
    $.mobile.defaultPageTransition = "none";
    $.mobile.useFastClick = !1
});
$(document).ready(function () {
    $("#myform")[0].reset();
    document.contactform.browser_check.value = "true";
    $("#mysubmit").click(function () {
        var a = $("#myform").serialize();
        $.ajax({
            type: "POST",
            url: "../contact.html",
            data: a,
            success: function (a) {
                $(".formbutton .ui-btn-text").html(a);
                a === "Mail sent!" ? ($(".ffc").html("Thanks"), $(".sndline").html("I will get back to you asap."), $(".formbutton .ui-btn").attr("data-theme", "f").removeClass("ui-btn-up-e").removeClass("ui-btn-up-b").addClass("ui-btn-up-f"), $(".formbutton .ui-btn-hidden").attr("data-theme", "f"), $("#myform")[0].reset()) : ($(".ffc").html("Oops!"), $(".sndline").html("Something is wrong."), a === "Message is required" ? $("#msg").focus() : $("#email").focus(), $(".formbutton .ui-btn").attr("data-theme", "e").removeClass("ui-btn-up-b").removeClass("ui-btn-up-f").addClass("ui-btn-up-e"), $(".formbutton .ui-btn-hidden").attr("data-theme", "e"))
            }
        });
        return !1
    });
    $("div.gallery-page").live("pageshow", function (a) {
        $("div.gallery a", a.target).photoSwipe();
        Code.PhotoSwipe.Current.setOptions({
            imageScaleMethod: "fitNoUpscale",
            allowRotationOnUserZoom: !1,
            jQueryMobile: !0,
            captionAndToolbarShowEmptyCaptions: !1
        });
        return !0
    })
});
(function (a, c) {
    if (a.cleanData) {
        var d = a.cleanData;
        a.cleanData = function (c) {
            for (var f = 0, i;
            (i = c[f]) != null; f++) a(i).triggerHandler("remove");
            d(c)
        }
    } else {
        var f = a.fn.remove;
        a.fn.remove = function (c, d) {
            return this.each(function () {
                d || (!c || a.filter(c, [this]).length) && a("*", this).add([this]).each(function () {
                    a(this).triggerHandler("remove")
                });
                return f.call(a(this), c, d)
            })
        }
    }
    a.widget = function (c, d, f) {
        var o = c.split(".")[0],
            l, c = c.split(".")[1];
        l = o + "-" + c;
        if (!f) f = d, d = a.Widget;
        a.expr[":"][l] = function (d) {
            return !!a.data(d, c)
        };
        a[o] = a[o] || {};
        a[o][c] = function (a, c) {
            arguments.length && this._createWidget(a, c)
        };
        d = new d;
        d.options = a.extend(!0, {}, d.options);
        a[o][c].prototype = a.extend(!0, d, {
            namespace: o,
            widgetName: c,
            widgetEventPrefix: a[o][c].prototype.widgetEventPrefix || c,
            widgetBaseClass: l
        }, f);
        a.widget.bridge(c, a[o][c])
    };
    a.widget.bridge = function (d, f) {
        a.fn[d] = function (i) {
            var o = typeof i === "string",
                l = Array.prototype.slice.call(arguments, 1),
                q = this,
                i = !o && l.length ? a.extend.apply(null, [!0, i].concat(l)) : i;
            if (o && i.charAt(0) === "_") return q;
            o ? this.each(function () {
                var f = a.data(this, d);
                if (!f) throw "cannot call methods on " + d + " prior to initialization; attempted to call method '" + i + "'";
                if (!a.isFunction(f[i])) throw "no such method '" + i + "' for " + d + " widget instance";
                var h = f[i].apply(f, l);
                if (h !== f && h !== c) return q = h, !1
            }) : this.each(function () {
                var c = a.data(this, d);
                c ? c.option(i || {})._init() : a.data(this, d, new f(i, this))
            });
            return q
        }
    };
    a.Widget = function (a, c) {
        arguments.length && this._createWidget(a, c)
    };
    a.Widget.prototype = {
        widgetName: "widget",
        widgetEventPrefix: "",
        options: {
            disabled: !1
        },
        _createWidget: function (c, d) {
            a.data(d, this.widgetName, this);
            this.element = a(d);
            this.options = a.extend(!0, {}, this.options, this._getCreateOptions(), c);
            var f = this;
            this.element.bind("remove." + this.widgetName, function () {
                f.destroy()
            });
            this._create();
            this._trigger("create");
            this._init()
        },
        _getCreateOptions: function () {
            var c = {};
            a.metadata && (c = a.metadata.get(element)[this.widgetName]);
            return c
        },
        _create: function () {},
        _init: function () {},
        destroy: function () {
            this.element.unbind("." + this.widgetName).removeData(this.widgetName);
            this.widget().unbind("." + this.widgetName).removeAttr("aria-disabled").removeClass(this.widgetBaseClass + "-disabled ui-state-disabled")
        },
        widget: function () {
            return this.element
        },
        option: function (d, f) {
            var i = d;
            if (arguments.length === 0) return a.extend({}, this.options);
            if (typeof d === "string") {
                if (f === c) return this.options[d];
                i = {};
                i[d] = f
            }
            this._setOptions(i);
            return this
        },
        _setOptions: function (c) {
            var d = this;
            a.each(c, function (a, c) {
                d._setOption(a, c)
            });
            return this
        },
        _setOption: function (a, c) {
            this.options[a] = c;
            a === "disabled" && this.widget()[c ? "addClass" : "removeClass"](this.widgetBaseClass + "-disabled ui-state-disabled").attr("aria-disabled", c);
            return this
        },
        enable: function () {
            return this._setOption("disabled", !1)
        },
        disable: function () {
            return this._setOption("disabled", !0)
        },
        _trigger: function (c, d, f) {
            var o = this.options[c],
                d = a.Event(d);
            d.type = (c === this.widgetEventPrefix ? c : this.widgetEventPrefix + c).toLowerCase();
            f = f || {};
            if (d.originalEvent) for (var c = a.event.props.length, l; c;) l = a.event.props[--c], d[l] = d.originalEvent[l];
            this.element.trigger(d, f);
            return !(a.isFunction(o) && o.call(this.element[0], d, f) === !1 || d.isDefaultPrevented())
        }
    }
})(jQuery);
(function (a, c) {
    a.widget("mobile.widget", {
        _getCreateOptions: function () {
            var d = this.element,
                f = {};
            a.each(this.options, function (a) {
                var h = d.jqmData(a.replace(/[A-Z]/g, function (a) {
                    return "-" + a.toLowerCase()
                }));
                h !== c && (f[a] = h)
            });
            return f
        }
    })
})(jQuery);
(function (a) {
    function c() {
        var c = d.width(),
            i = [],
            o = [],
            l;
        f.removeClass("min-width-" + g.join("px min-width-") + "px max-width-" + g.join("px max-width-") + "px");
        a.each(g, function (a, d) {
            c >= d && i.push("min-width-" + d + "px");
            c <= d && o.push("max-width-" + d + "px")
        });
        i.length && (l = i.join(" "));
        o.length && (l += " " + o.join(" "));
        f.addClass(l)
    }
    var d = a(window),
        f = a("html"),
        g = [320, 480, 768, 1024];
    a.mobile.media = function () {
        var c = {},
            d = a("<div id='jquery-mediatest'>"),
            g = a("<body>").append(d);
        return function (a) {
            if (!(a in c)) {
                var q = document.createElement("style"),
                    s = "@media " + a + " { #jquery-mediatest { position:absolute; } }";
                q.type = "text/css";
                q.styleSheet ? q.styleSheet.cssText = s : q.appendChild(document.createTextNode(s));
                f.prepend(g).prepend(q);
                c[a] = d.css("position") === "absolute";
                g.add(q).remove()
            }
            return c[a]
        }
    }();
    a.mobile.addResolutionBreakpoints = function (d) {
        a.type(d) === "array" ? g = g.concat(d) : g.push(d);
        g.sort(function (a, c) {
            return a - c
        });
        c()
    };
    a(document).bind("mobileinit.htmlclass", function () {
        d.bind("orientationchange.htmlclass throttledResize.htmlclass", function (a) {
            a.orientation && f.removeClass("portrait landscape").addClass(a.orientation);
            c()
        })
    });
    a(function () {
        d.trigger("orientationchange.htmlclass")
    })
})(jQuery);
(function (a, c) {
    function d(a) {
        var d = a.charAt(0).toUpperCase() + a.substr(1),
            a = (a + " " + h.join(d + " ") + d).split(" "),
            f;
        for (f in a) if (g[f] !== c) return !0
    }
    var f = a("<body>").prependTo("html"),
        g = f[0].style,
        h = ["webkit", "moz", "o"],
        i = "palmGetResource" in window,
        o = window.blackberry;
    a.mobile.browser = {};
    a.mobile.browser.ie = function () {
        for (var a = 3, c = document.createElement("div"), d = c.all || []; c.innerHTML = "<\!--[if gt IE " + ++a + "]><br><![endif]--\>", d[0];);
        return a > 4 ? a : !a
    }();
    a.extend(a.support, {
        orientation: "orientation" in window,
        touch: "ontouchend" in document,
        cssTransitions: "WebKitTransitionEvent" in window,
        pushState: !! history.pushState,
        mediaquery: a.mobile.media("only all"),
        cssPseudoElement: !! d("content"),
        boxShadow: !! d("boxShadow") && !o,
        scrollTop: ("pageXOffset" in window || "scrollTop" in document.documentElement || "scrollTop" in f[0]) && !i,
        dynamicBaseTag: function () {
            var c = location.protocol + "//" + location.host + location.pathname + "ui-dir/",
                d = a("head base"),
                g = null,
                h = "";
            d.length ? h = d.attr("href") : d = g = a("<base>", {
                href: c
            }).appendTo("head");
            var i = a("<a href='testurl'></a>").prependTo(f)[0].href;
            d[0].href = h ? h : location.pathname;
            g && g.remove();
            return i.indexOf(c) === 0
        }(),
        eventCapture: "addEventListener" in document
    });
    f.remove();
    a.support.boxShadow || a("html").addClass("ui-mobile-nosupport-boxshadow")
})(jQuery);
(function (a, c, d, f) {
    function g(a) {
        for (; a && typeof a.originalEvent !== "undefined";) a = a.originalEvent;
        return a
    }
    function h(c) {
        for (var d = {}; c;) {
            var e = a.data(c, u),
                f;
            for (f in e) if (e[f]) d[f] = d.hasVirtualBinding = !0;
            c = c.parentNode
        }
        return d
    }
    function i() {
        D && (clearTimeout(D), D = 0);
        D = setTimeout(function () {
            e = D = 0;
            K.length = 0;
            F = !1;
            k = !0
        }, a.vmouse.resetTimerDuration)
    }
    function o(c, d, e) {
        var h = !1,
            k;
        if (!(k = e && e[c])) {
            if (e = !e) a: {
                for (e = d.target; e;) {
                    if ((k = a.data(e, u)) && (!c || k[c])) break a;
                    e = e.parentNode
                }
                e = null
            }
            k = e
        }
        if (k) {
            h = d;
            e = h.type;
            h = a.Event(h);
            h.type = c;
            var i = h.originalEvent,
                m = a.event.props;
            if (i) for (c = m.length; c;) k = m[--c], h[k] = i[k];
            if (e.search(/^touch/) !== -1 && (c = g(i), e = c.touches, c = c.changedTouches, e = e && e.length ? e[0] : c && c.length ? c[0] : f)) {
                c = 0;
                for (i = J.length; c < i; c++) k = J[c], h[k] = e[k]
            }
            a(d.target).trigger(h);
            h = h.isDefaultPrevented()
        }
        return h
    }
    function l(c) {
        var d = a.data(c.target, w);
        !F && (!e || e !== d) && o("v" + c.type, c)
    }
    function q(c) {
        var d = g(c).touches;
        if (d && d.length === 1) {
            var f = c.target,
                d = h(f);
            if (d.hasVirtualBinding) e = H++, a.data(f, w, e), D && (clearTimeout(D), D = 0), B = k = !1, f = g(c).touches[0], z = f.pageX, C = f.pageY, o("vmouseover", c, d), o("vmousedown", c, d)
        }
    }
    function s(a) {
        k || (B || o("vmousecancel", a, h(a.target)), B = !0, i())
    }
    function n(c) {
        if (!k) {
            var d = g(c).touches[0],
                e = B,
                f = a.vmouse.moveDistanceThreshold;
            B = B || Math.abs(d.pageX - z) > f || Math.abs(d.pageY - C) > f;
            d = h(c.target);
            B && !e && o("vmousecancel", c, d);
            o("vmousemove", c, d);
            i()
        }
    }
    function m(a) {
        if (!k) {
            k = !0;
            var c = h(a.target);
            o("vmouseup", a, c);
            if (!B && o("vclick", a, c)) {
                var d = g(a).changedTouches[0];
                K.push({
                    touchID: e,
                    x: d.clientX,
                    y: d.clientY
                });
                F = !0
            }
            o("vmouseout", a, c);
            B = !1;
            i()
        }
    }
    function x(c) {
        var c = a.data(c, u),
            d;
        if (c) for (d in c) if (c[d]) return !0;
        return !1
    }
    function r() {}
    function t(c) {
        var d = c.substr(1);
        return {
            setup: function () {
                x(this) || a.data(this, u, {});
                a.data(this, u)[c] = !0;
                A[c] = (A[c] || 0) + 1;
                A[c] === 1 && I.bind(d, l);
                a(this).bind(d, r);
                if (p) A.touchstart = (A.touchstart || 0) + 1, A.touchstart === 1 && I.bind("touchstart", q).bind("touchend", m).bind("touchmove", n).bind("scroll", s)
            },
            teardown: function () {
                --A[c];
                A[c] || I.unbind(d, l);
                p && (--A.touchstart, A.touchstart || I.unbind("touchstart", q).unbind("touchmove", n).unbind("touchend", m).unbind("scroll", s));
                var e = a(this),
                    f = a.data(this, u);
                f && (f[c] = !1);
                e.unbind(d, r);
                x(this) || e.removeData(u)
            }
        }
    }
    var u = "virtualMouseBindings",
        w = "virtualTouchID",
        c = "vmouseover vmousedown vmousemove vmouseup vclick vmouseout vmousecancel".split(" "),
        J = "clientX clientY pageX pageY screenX screenY".split(" "),
        A = {},
        D = 0,
        z = 0,
        C = 0,
        B = !1,
        K = [],
        F = !1,
        k = !1,
        p = a.support.eventCapture,
        I = a(d),
        H = 1,
        e = 0;
    a.vmouse = {
        moveDistanceThreshold: 10,
        clickDistanceThreshold: 10,
        resetTimerDuration: 1500
    };
    for (var L = 0; L < c.length; L++) a.event.special[c[L]] = t(c[L]);
    p && d.addEventListener("click", function (c) {
        var d = K.length,
            e = c.target;
        if (d) for (var f = c.clientX, g = c.clientY, h = a.vmouse.clickDistanceThreshold, k = e; k;) {
            for (var i = 0; i < d; i++) {
                var m = K[i];
                if (k === e && Math.abs(m.x - f) < h && Math.abs(m.y - g) < h || a.data(k, w) === m.touchID) {
                    c.preventDefault();
                    c.stopPropagation();
                    return
                }
            }
            k = k.parentNode
        }
    }, !0)
})(jQuery, window, document);
(function (a, c) {
    function d(c, d, f) {
        var g = f.type;
        f.type = d;
        a.event.handle.call(c, f);
        f.type = g
    }
    a.each("touchstart touchmove touchend orientationchange throttledresize tap taphold swipe swipeleft swiperight scrollstart scrollstop".split(" "), function (c, d) {
        a.fn[d] = function (a) {
            return a ? this.bind(d, a) : this.trigger(d)
        };
        a.attrFn[d] = !0
    });
    var f = a.support.touch,
        g = f ? "touchstart" : "mousedown",
        h = f ? "touchend" : "mouseup",
        i = f ? "touchmove" : "mousemove";
    a.event.special.scrollstart = {
        enabled: !0,
        setup: function () {
            function c(a, h) {
                g = h;
                d(f, g ? "scrollstart" : "scrollstop", a)
            }
            var f = this,
                g, h;
            a(f).bind("touchmove scroll", function (d) {
                a.event.special.scrollstart.enabled && (g || c(d, !0), clearTimeout(h), h = setTimeout(function () {
                    c(d, !1)
                }, 50))
            })
        }
    };
    a.event.special.tap = {
        setup: function () {
            var c = this,
                f = a(c);
            f.bind("vmousedown", function (a) {
                function g() {
                    i = !1;
                    clearTimeout(r);
                    f.unbind("vclick", h).unbind("vmousecancel", g)
                }
                function h(a) {
                    g();
                    x == a.target && d(c, "tap", a)
                }
                if (a.which && a.which !== 1) return !1;
                var i = !0,
                    x = a.target,
                    r;
                f.bind("vmousecancel", g).bind("vclick", h);
                r = setTimeout(function () {
                    i && d(c, "taphold", a)
                }, 750)
            })
        }
    };
    a.event.special.swipe = {
        setup: function () {
            var d = a(this);
            d.bind(g, function (f) {
                function g(a) {
                    if (n) {
                        var c = a.originalEvent.touches ? a.originalEvent.touches[0] : a;
                        m = {
                            time: (new Date).getTime(),
                            coords: [c.pageX, c.pageY]
                        };
                        Math.abs(n.coords[0] - m.coords[0]) > 10 && a.preventDefault()
                    }
                }
                var s = f.originalEvent.touches ? f.originalEvent.touches[0] : f,
                    n = {
                        time: (new Date).getTime(),
                        coords: [s.pageX, s.pageY],
                        origin: a(f.target)
                    },
                    m;
                d.bind(i, g).one(h, function () {
                    d.unbind(i, g);
                    n && m && m.time - n.time < 1E3 && Math.abs(n.coords[0] - m.coords[0]) > 30 && Math.abs(n.coords[1] - m.coords[1]) < 75 && n.origin.trigger("swipe").trigger(n.coords[0] > m.coords[0] ? "swipeleft" : "swiperight");
                    n = m = c
                })
            })
        }
    };
    (function (a) {
        function c() {
            var a = f();
            a !== g && (g = a, d.trigger("orientationchange"))
        }
        var d = a(window),
            f, g;
        a.event.special.orientationchange = {
            setup: function () {
                if (a.support.orientation) return !1;
                g = f();
                d.bind("throttledresize", c)
            },
            teardown: function () {
                if (a.support.orientation) return !1;
                d.unbind("throttledresize", c)
            },
            add: function (a) {
                var c = a.handler;
                a.handler = function (a) {
                    a.orientation = f();
                    return c.apply(this, arguments)
                }
            }
        };
        a.event.special.orientationchange.orientation = f = function () {
            var a = document.documentElement;
            return a && a.clientWidth / a.clientHeight < 1.1 ? "portrait" : "landscape"
        }
    })(jQuery);
    (function () {
        a.event.special.throttledresize = {
            setup: function () {
                a(this).bind("resize", c)
            },
            teardown: function () {
                a(this).unbind("resize", c)
            }
        };
        var c = function () {
                g = (new Date).getTime();
                h = g - d;
                h >= 250 ? (d = g, a(this).trigger("throttledresize")) : (f && clearTimeout(f), f = setTimeout(c, 250 - h))
            },
            d = 0,
            f, g, h
    })();
    a.each({
        scrollstop: "scrollstart",
        taphold: "tap",
        swipeleft: "swipe",
        swiperight: "swipe"
    }, function (c, d) {
        a.event.special[c] = {
            setup: function () {
                a(this).bind(d, a.noop)
            }
        }
    })
})(jQuery);
(function (a, c, d) {
    function f(a) {
        a = a || location.href;
        return "#" + a.replace(/^[^#]*#?(.*)$/, "$1")
    }
    var g = "hashchange",
        h = document,
        i, o = a.event.special,
        l = h.documentMode,
        q = "on" + g in c && (l === d || l > 7);
    a.fn[g] = function (a) {
        return a ? this.bind(g, a) : this.trigger(g)
    };
    a.fn[g].delay = 50;
    o[g] = a.extend(o[g], {
        setup: function () {
            if (q) return !1;
            a(i.start)
        },
        teardown: function () {
            if (q) return !1;
            a(i.stop)
        }
    });
    i = function () {
        function i() {
            var d = f(),
                h = u(o);
            if (d !== o) t(o = d, h), a(c).trigger(g);
            else if (h !== o) location.href = location.href.replace(/#.*/, "") + h;
            m = setTimeout(i, a.fn[g].delay)
        }
        var l = {},
            m, o = f(),
            r = function (a) {
                return a
            },
            t = r,
            u = r;
        l.start = function () {
            m || i()
        };
        l.stop = function () {
            m && clearTimeout(m);
            m = d
        };
        a.browser.msie && !q &&
        function () {
            var c, d;
            l.start = function () {
                if (!c) d = (d = a.fn[g].src) && d + f(), c = a('<iframe tabindex="-1" title="empty"/>').hide().one("load", function () {
                    d || t(f());
                    i()
                }).attr("src", d || "javascript:0").insertAfter("body")[0].contentWindow, h.onpropertychange = function () {
                    try {
                        if (event.propertyName === "title") c.document.title = h.title
                    } catch (a) {}
                }
            };
            l.stop = r;
            u = function () {
                return f(c.location.href)
            };
            t = function (d, f) {
                var i = c.document,
                    m = a.fn[g].domain;
                if (d !== f) i.title = h.title, i.open(), m && i.write('<script>document.domain="' + m + '"<\/script>'), i.close(), c.location.hash = d
            }
        }();
        return l
    }()
})(jQuery, this);
(function (a) {
    a.widget("mobile.page", a.mobile.widget, {
        options: {
            backBtnText: "Back",
            addBackBtn: !1,
            backBtnTheme: null,
            degradeInputs: {
                color: !1,
                date: !1,
                datetime: !1,
                "datetime-local": !1,
                email: !1,
                month: !1,
                number: !1,
                range: "number",
                search: !0,
                tel: !1,
                time: !1,
                url: !1,
                week: !1
            },
            keepNative: null
        },
        _create: function () {
            var c = this.element,
                d = this.options;
            this.keepNative = ":jqmData(role='none'), :jqmData(role='nojs')" + (d.keepNative ? ", " + d.keepNative : "");
            this._trigger("beforeCreate") !== !1 && (c.find(":jqmData(role='page'), :jqmData(role='content')").andSelf().each(function () {
                a(this).addClass("ui-" + a(this).jqmData("role"))
            }), c.find(":jqmData(role='nojs')").addClass("ui-nojs"), c.find(":jqmData(role)").andSelf().each(function () {
                var f = a(this),
                    g = f.jqmData("role"),
                    h = f.jqmData("theme");
                if (g === "header" || g === "footer") {
                    f.addClass("ui-bar-" + (h || f.parent(":jqmData(role='page')").jqmData("theme") || "a"));
                    f.attr("role", g === "header" ? "banner" : "contentinfo");
                    var h = f.children("a"),
                        i = h.hasClass("ui-btn-left"),
                        o = h.hasClass("ui-btn-right");
                    if (!i) i = h.eq(0).not(".ui-btn-right").addClass("ui-btn-left").length;
                    o || h.eq(1).addClass("ui-btn-right");
                    d.addBackBtn && g === "header" && a(".ui-page").length > 1 && c.jqmData("url") !== a.mobile.path.stripHash(location.hash) && !i && f.jqmData("backbtn") !== !1 && (h = a("<a href='#' class='ui-btn-left' data-" + a.mobile.ns + "rel='back' data-" + a.mobile.ns + "icon='arrow-l'>" + d.backBtnText + "</a>").prependTo(f), d.backBtnTheme && h.attr("data-" + a.mobile.ns + "theme", d.backBtnTheme));
                    f.children("h1, h2, h3, h4, h5, h6").addClass("ui-title").attr({
                        tabindex: "0",
                        role: "heading",
                        "aria-level": "1"
                    })
                } else g === "content" ? (h && f.addClass("ui-body-" + h), f.attr("role", "main")) : g === "page" && f.addClass("ui-body-" + (h || "c"));
                switch (g) {
                case "header":
                case "footer":
                case "page":
                case "content":
                    f.addClass("ui-" + g);
                    break;
                case "collapsible":
                case "fieldcontain":
                case "navbar":
                case "listview":
                case "dialog":
                    f[g]()
                }
            }), this._enhanceControls(), c.find(":jqmData(role='button'), .ui-bar > a, .ui-header > a, .ui-footer > a").not(".ui-btn").not(this.keepNative).buttonMarkup(), c.find(":jqmData(role='controlgroup')").controlgroup(), c.find("a:not(.ui-btn):not(.ui-link-inherit)").not(this.keepNative).addClass("ui-link"), c.fixHeaderFooter())
        },
        _typeAttributeRegex: /\s+type=["']?\w+['"]?/,
        _enhanceControls: function () {
            var c = this.options,
                d = this;
            this.element.find("input").not(this.keepNative).each(function () {
                var f = this.getAttribute("type"),
                    g = c.degradeInputs[f] || "text";
                c.degradeInputs[f] && a(this).replaceWith(a("<div>").html(a(this).clone()).html().replace(d._typeAttributeRegex, ' type="' + g + '" data-' + a.mobile.ns + 'type="' + f + '" '))
            });
            var f = this.element.find("input, textarea, select, button"),
                g = f.not(this.keepNative),
                f = f.filter("input[type=text]");
            f.length && typeof f[0].autocorrect !== "undefined" && f.each(function () {
                this.setAttribute("autocorrect", "off");
                this.setAttribute("autocomplete", "off")
            });
            g.filter("[type='radio'], [type='checkbox']").checkboxradio();
            g.filter("button, [type='button'], [type='submit'], [type='reset'], [type='image']").button();
            g.filter("input, textarea").not("[type='radio'], [type='checkbox'], [type='button'], [type='submit'], [type='reset'], [type='image'], [type='hidden']").textinput();
            g.filter("input, select").filter(":jqmData(role='slider'), :jqmData(type='range')").slider();
            g.filter("select:not(:jqmData(role='slider'))").selectmenu()
        }
    })
})(jQuery);
(function (a, c) {
    a.extend(a.mobile, {
        ns: "",
        subPageUrlKey: "ui-page",
        nonHistorySelectors: "dialog",
        activePageClass: "ui-page-active",
        activeBtnClass: "ui-btn-active",
        ajaxEnabled: !0,
        useFastClick: !0,
        hashListeningEnabled: !0,
        defaultPageTransition: "slide",
        minScrollBack: screen.height / 2,
        defaultDialogTransition: "pop",
        loadingMessage: "loading",
        pageLoadErrorMessage: "Error Loading Page",
        gradeA: function () {
            return a.support.mediaquery || a.mobile.browser.ie && a.mobile.browser.ie >= 7
        },
        keyCode: {
            ALT: 18,
            BACKSPACE: 8,
            CAPS_LOCK: 20,
            COMMA: 188,
            COMMAND: 91,
            COMMAND_LEFT: 91,
            COMMAND_RIGHT: 93,
            CONTROL: 17,
            DELETE: 46,
            DOWN: 40,
            END: 35,
            ENTER: 13,
            ESCAPE: 27,
            HOME: 36,
            INSERT: 45,
            LEFT: 37,
            MENU: 93,
            NUMPAD_ADD: 107,
            NUMPAD_DECIMAL: 110,
            NUMPAD_DIVIDE: 111,
            NUMPAD_ENTER: 108,
            NUMPAD_MULTIPLY: 106,
            NUMPAD_SUBTRACT: 109,
            PAGE_DOWN: 34,
            PAGE_UP: 33,
            PERIOD: 190,
            RIGHT: 39,
            SHIFT: 16,
            SPACE: 32,
            TAB: 9,
            UP: 38,
            WINDOWS: 91
        },
        silentScroll: function (d) {
            if (a.type(d) !== "number") d = a.mobile.defaultHomeScroll;
            a.event.special.scrollstart.enabled = !1;
            setTimeout(function () {
                c.scrollTo(0, d);
                a(document).trigger("silentscroll", {
                    x: 0,
                    y: d
                })
            }, 20);
            setTimeout(function () {
                a.event.special.scrollstart.enabled = !0
            }, 150)
        },
        normalizeRegex: /-([a-z])/g,
        nsNormalize: function (c) {
            if (c) return a.camelCase(a.mobile.ns + c)
        }
    });
    a.fn.jqmData = function (c, d) {
        return this.data(c ? a.mobile.nsNormalize(c) : c, d)
    };
    a.jqmData = function (c, d, h) {
        return a.data(c, a.mobile.nsNormalize(d), h)
    };
    a.fn.jqmRemoveData = function (c) {
        return this.removeData(a.mobile.nsNormalize(c))
    };
    a.jqmRemoveData = function (c, d) {
        return a.removeData(c, a.mobile.nsNormalize(d))
    };
    a.jqmHasData = function (c, d) {
        return a.hasData(c, a.mobile.nsNormalize(d))
    };
    var d = a.find;
    a.find = function (c, g, h, i) {
        c = c.replace(/:jqmData\(([^)]*)\)/g, "[data-" + (a.mobile.ns || "") + "$1]");
        return d.call(this, c, g, h, i)
    };
    a.extend(a.find, d);
    a.find.matches = function (c, d) {
        return a.find(c, null, null, d)
    };
    a.find.matchesSelector = function (c, d) {
        return a.find(d, null, null, [c]).length > 0
    }
})(jQuery, this);
(function (a, c) {
    function d(a) {
        var c = a.jqmData("lastClicked");
        c && c.length ? c.focus() : (c = a.find(".ui-title:eq(0)"), c.length ? c.focus() : a.find(w).eq(0).focus())
    }
    function f(c) {
        t && (!t.closest(".ui-page-active").length || c) && t.removeClass(a.mobile.activeBtnClass);
        t = null
    }
    function g() {
        A = !1;
        J.length > 0 && a.mobile.changePage.apply(null, J.pop())
    }
    function h(c, f, g, h) {
        var e = a.support.scrollTop ? n.scrollTop() : !0,
            m = c.data("lastScroll") || a.mobile.defaultHomeScroll,
            l = i();
        e && window.scrollTo(0, a.mobile.defaultHomeScroll);
        m < a.mobile.minScrollBack && (m = 0);
        f && (f.height(l + e).jqmData("lastScroll", e).jqmData("lastClicked", t), f.data("page")._trigger("beforehide", null, {
            nextPage: c
        }));
        c.height(l + m).data("page")._trigger("beforeshow", null, {
            prevPage: f || a("")
        });
        a.mobile.hidePageLoadingMsg();
        g = (a.mobile.transitionHandlers[g || "none"] || a.mobile.defaultTransitionHandler)(g, h, c, f);
        g.done(function () {
            c.height("");
            m ? (a.mobile.silentScroll(m), a(document).one("silentscroll", function () {
                d(c)
            })) : d(c);
            f && f.height("").data("page")._trigger("hide", null, {
                nextPage: c
            });
            c.data("page")._trigger("show", null, {
                prevPage: f || a("")
            })
        });
        return g
    }
    function i() {
        var c = jQuery.event.special.orientationchange.orientation() === "portrait",
            d = c ? screen.availHeight : screen.availWidth,
            c = Math.max(c ? 480 : 320, a(window).height());
        return Math.min(d, c)
    }
    function o() {
        a("." + a.mobile.activePageClass).css("min-height", i())
    }
    function l(c, d) {
        d && c.attr("data-" + a.mobile.ns + "role", d);
        c.page()
    }
    function q(a) {
        for (; a;) {
            if (a.nodeName.toLowerCase() == "a") break;
            a = a.parentNode
        }
        return a
    }
    function s(c) {
        var c = a(c).closest(".ui-page").jqmData("url"),
            d = B.hrefNoHash;
        if (!c || !r.isPath(c)) c = d;
        return r.makeUrlAbsolute(c, d)
    }
    var n = a(window),
        m = a("html"),
        x = a("head"),
        r = {
            urlParseRE: /^(((([^:\/#\?]+:)?(?:\/\/((?:(([^:@\/#\?]+)(?:\:([^:@\/#\?]+))?)@)?(([^:\/#\?]+)(?:\:([0-9]+))?))?)?)?((\/?(?:[^\/\?#]+\/+)*)([^\?#]*)))?(\?[^#]+)?)(#.*)?/,
            parseUrl: function (a) {
                if (typeof a === "object") return a;
                var a = r.urlParseRE.exec(a),
                    c;
                a && (c = {
                    href: a[0] || "",
                    hrefNoHash: a[1] || "",
                    hrefNoSearch: a[2] || "",
                    domain: a[3] || "",
                    protocol: a[4] || "",
                    authority: a[5] || "",
                    username: a[7] || "",
                    password: a[8] || "",
                    host: a[9] || "",
                    hostname: a[10] || "",
                    port: a[11] || "",
                    pathname: a[12] || "",
                    directory: a[13] || "",
                    filename: a[14] || "",
                    search: a[15] || "",
                    hash: a[16] || ""
                });
                return c || {}
            },
            makePathAbsolute: function (a, c) {
                if (a && a.charAt(0) === "/") return a;
                for (var a = a || "", d = (c = c ? c.replace(/^\/|\/?[^\/]*$/g, "") : "") ? c.split("/") : [], f = a.split("/"), e = 0; e < f.length; e++) {
                    var g = f[e];
                    switch (g) {
                    case ".":
                        break;
                    case "..":
                        d.length && d.pop();
                        break;
                    default:
                        d.push(g)
                    }
                }
                return "/" + d.join("/")
            },
            isSameDomain: function (a, c) {
                return r.parseUrl(a).domain === r.parseUrl(c).domain
            },
            isRelativeUrl: function (a) {
                return r.parseUrl(a).protocol === ""
            },
            isAbsoluteUrl: function (a) {
                return r.parseUrl(a).protocol !== ""
            },
            makeUrlAbsolute: function (a, c) {
                if (!r.isRelativeUrl(a)) return a;
                var d = r.parseUrl(a),
                    f = r.parseUrl(c),
                    e = d.protocol || f.protocol,
                    g = d.authority || f.authority,
                    h = d.pathname !== "",
                    i = r.makePathAbsolute(d.pathname || f.filename, f.pathname);
                return e + "//" + g + i + (d.search || !h && f.search || "") + d.hash
            },
            addSearchParams: function (c, d) {
                var f = r.parseUrl(c),
                    g = typeof d === "object" ? a.param(d) : d,
                    e = f.search || "?";
                return f.hrefNoSearch + e + (e.charAt(e.length - 1) !== "?" ? "&" : "") + g + (f.hash || "")
            },
            convertUrlToDataUrl: function (a) {
                var c = r.parseUrl(a);
                if (r.isEmbeddedPage(c)) return c.hash.replace(/^#/, "");
                else if (r.isSameDomain(c, B)) return c.hrefNoHash.replace(B.domain, "");
                return a
            },
            get: function (a) {
                if (a === c) a = location.hash;
                return r.stripHash(a).replace(/[^\/]*\.[^\/*]+$/, "")
            },
            getFilePath: function (c) {
                var d = "&" + a.mobile.subPageUrlKey;
                return c && c.split(d)[0].split(D)[0]
            },
            set: function (a) {
                location.hash = a
            },
            isPath: function (a) {
                return /\//.test(a)
            },
            clean: function (a) {
                return a.replace(B.domain, "")
            },
            stripHash: function (a) {
                return a.replace(/^#/, "")
            },
            cleanHash: function (a) {
                return r.stripHash(a.replace(/\?.*$/, "").replace(D, ""))
            },
            isExternal: function (a) {
                a = r.parseUrl(a);
                return a.protocol && a.domain !== C.domain ? !0 : !1
            },
            hasProtocol: function (a) {
                return /^(:?\w+:)/.test(a)
            },
            isEmbeddedPage: function (a) {
                a = r.parseUrl(a);
                return a.protocol !== "" ? a.hash && (a.hrefNoHash === C.hrefNoHash || K && a.hrefNoHash === B.hrefNoHash) : /^#/.test(a.href)
            }
        },
        t = null,
        u = {
            stack: [],
            activeIndex: 0,
            getActive: function () {
                return u.stack[u.activeIndex]
            },
            getPrev: function () {
                return u.stack[u.activeIndex - 1]
            },
            getNext: function () {
                return u.stack[u.activeIndex + 1]
            },
            addNew: function (a, c, d, f) {
                u.getNext() && u.clearForward();
                u.stack.push({
                    url: a,
                    transition: c,
                    title: d,
                    page: f
                });
                u.activeIndex = u.stack.length - 1
            },
            clearForward: function () {
                u.stack = u.stack.slice(0, u.activeIndex + 1)
            },
            directHashChange: function (d) {
                var f, g, h;
                a.each(u.stack, function (a, c) {
                    d.currentUrl === c.url && (f = a < u.activeIndex, g = !f, h = a)
                });
                this.activeIndex = h !== c ? h : this.activeIndex;
                f ? d.isBack() : g && d.isForward()
            },
            ignoreNextHashChange: !1
        },
        w = "[tabindex],a,button:visible,select:visible,input",
        J = [],
        A = !1,
        D = "&ui-state=dialog",
        z = x.children("base"),
        C = r.parseUrl(location.href),
        B = z.length ? r.parseUrl(r.makeUrlAbsolute(z.attr("href"), C.href)) : C,
        K = C.hrefNoHash !== B.hrefNoHash,
        F = a.support.dynamicBaseTag ? {
            element: z.length ? z : a("<base>", {
                href: B.hrefNoHash
            }).prependTo(x),
            set: function (a) {
                F.element.attr("href", r.makeUrlAbsolute(a, B))
            },
            reset: function () {
                F.element.attr("href", B.hrefNoHash)
            }
        } : c;
    a.fn.animationComplete = function (c) {
        return a.support.cssTransitions ? a(this).one("webkitAnimationEnd", c) : (setTimeout(c, 0), a(this))
    };
    a.mobile.updateHash = r.set;
    a.mobile.path = r;
    a.mobile.base = F;
    a.mobile.urlstack = u.stack;
    a.mobile.urlHistory = u;
    a.mobile.noneTransitionHandler = function (c, d, f, g) {
        g && g.removeClass(a.mobile.activePageClass);
        f.addClass(a.mobile.activePageClass);
        return a.Deferred().resolve(c, d, f, g).promise()
    };
    a.mobile.defaultTransitionHandler = a.mobile.noneTransitionHandler;
    a.mobile.transitionHandlers = {
        none: a.mobile.defaultTransitionHandler
    };
    a.mobile.allowCrossDomainPages = !1;
    a.mobile.getDocumentUrl = function (c) {
        return c ? a.extend({}, C) : C.href
    };
    a.mobile.getDocumentBase = function (c) {
        return c ? a.extend({}, B) : B.href
    };
    a.mobile.loadPage = function (d, f) {
        var g = a.Deferred(),
            h = a.extend({}, a.mobile.loadPage.defaults, f),
            e = null,
            i = null,
            m = r.makeUrlAbsolute(d, B.hrefNoHash);
        if (h.data && h.type === "get") m = r.addSearchParams(m, h.data), h.data = c;
        var o = r.getFilePath(m),
            q = r.convertUrlToDataUrl(m);
        h.pageContainer = h.pageContainer || a.mobile.pageContainer;
        e = h.pageContainer.children(":jqmData(url='" + q + "')");
        F && F.reset();
        if (e.length) {
            if (!h.reloadPage) return l(e, h.role), g.resolve(m, f, e), g.promise();
            i = e
        }
        h.showLoadMsg && a.mobile.showPageLoadingMsg();
        a.ajax({
            url: o,
            type: h.type,
            data: h.data,
            dataType: "html",
            success: function (c) {
                var n = a("<div></div>"),
                    t = c.match(/<title[^>]*>([^<]*)/) && RegExp.$1,
                    u = RegExp("\\bdata-" + a.mobile.ns + "url=[\"']?([^\"'>]*)[\"']?");
                RegExp(".*(<[^>]+\\bdata-" + a.mobile.ns + "role=[\"']?page[\"']?[^>]*>).*").test(c) && RegExp.$1 && u.test(RegExp.$1) && RegExp.$1 && (d = o = r.getFilePath(RegExp.$1));
                F && F.set(o);
                n.get(0).innerHTML = c;
                e = n.find(":jqmData(role='page'), :jqmData(role='dialog')").first();
                t && !e.jqmData("title") && e.jqmData("title", t);
                if (!a.support.dynamicBaseTag) {
                    var s = r.get(o);
                    e.find("[src], link[href], a[rel='external'], :jqmData(ajax='false'), a[target]").each(function () {
                        var c = a(this).is("[href]") ? "href" : a(this).is("[src]") ? "src" : "action",
                            d = a(this).attr(c),
                            d = d.replace(location.protocol + "//" + location.host + location.pathname, "");
                        /^(\w+:|#|\/)/.test(d) || a(this).attr(c, s + d)
                    })
                }
                e.attr("data-" + a.mobile.ns + "url", r.convertUrlToDataUrl(o)).appendTo(h.pageContainer);
                l(e, h.role);
                m.indexOf("&" + a.mobile.subPageUrlKey) > -1 && (e = h.pageContainer.children(":jqmData(url='" + q + "')"));
                h.showLoadMsg && a.mobile.hidePageLoadingMsg();
                g.resolve(m, f, e, i)
            },
            error: function () {
                F && F.set(r.get());
                h.showLoadMsg && (a.mobile.hidePageLoadingMsg(), a("<div class='ui-loader ui-overlay-shadow ui-body-e ui-corner-all'><h1>" + a.mobile.pageLoadErrorMessage + "</h1></div>").css({
                    display: "block",
                    opacity: 0.96,
                    top: n.scrollTop() + 100
                }).appendTo(h.pageContainer).delay(800).fadeOut(400, function () {
                    a(this).remove()
                }));
                g.reject(m, f)
            }
        });
        return g.promise()
    };
    a.mobile.loadPage.defaults = {
        type: "get",
        data: c,
        reloadPage: !1,
        role: c,
        showLoadMsg: !0,
        pageContainer: c
    };
    a.mobile.changePage = function (d, i) {
        if (typeof i !== "object") {
            var n = null;
            if (typeof d === "object" && d.url && d.type) n = {
                type: d.type,
                data: d.data,
                forcePageLoad: !0
            }, d = d.url;
            var o = arguments.length;
            if (o > 1) {
                var e = ["transition", "reverse", "changeHash", "fromHashChange"],
                    q;
                for (q = 1; q < o; q++) {
                    var t = arguments[q];
                    typeof t !== "undefined" && (n = n || {}, n[e[q - 1]] = t)
                }
            }
            if (n) return a.mobile.changePage(d, n)
        }
        if (A) J.unshift(arguments);
        else {
            A = !0;
            var s = a.extend({}, a.mobile.changePage.defaults, i);
            s.pageContainer = s.pageContainer || a.mobile.pageContainer;
            if (typeof d == "string") a.mobile.loadPage(d, s).done(function (c, d, e, f) {
                A = !1;
                d.duplicateCachedPage = f;
                a.mobile.changePage(e, d)
            }).fail(function () {
                A = !1;
                f(!0);
                g();
                s.pageContainer.trigger("changepagefailed")
            });
            else {
                var x = s.pageContainer,
                    n = a.mobile.activePage,
                    o = d.jqmData("url");
                r.getFilePath(o);
                e = u.getActive();
                q = u.activeIndex === 0;
                var w = 0,
                    t = document.title,
                    z = s.role === "dialog" || d.jqmData("role") === "dialog";
                x.trigger("beforechangepage");
                if (n && n[0] === d[0]) A = !1, x.trigger("changepage");
                else {
                    l(d, s.role);
                    s.fromHashChange && u.directHashChange({
                        currentUrl: o,
                        isBack: function () {
                            w = -1
                        },
                        isForward: function () {
                            w = 1
                        }
                    });
                    a(document.activeElement || "").add("input:focus, textarea:focus, select:focus").blur();
                    z && e && (o = e.url + D);
                    if (s.changeHash !== !1 && o) u.ignoreNextHashChange = !0, r.set(o);
                    (z = d.jqmData("title") || d.children(":jqmData(role='header')").find(".ui-title").text()) && t == document.title && (t = z);
                    w || u.addNew(o, s.transition, t, d);
                    document.title = u.getActive().title;
                    a.mobile.activePage = d;
                    s.transition = s.transition || (w && !q ? e.transition : c) || (s.role === "dialog" ? a.mobile.defaultDialogTransition : a.mobile.defaultPageTransition);
                    s.reverse = s.reverse || w < 0;
                    h(d, n, s.transition, s.reverse).done(function () {
                        f();
                        s.duplicateCachedPage && s.duplicateCachedPage.remove();
                        m.removeClass("ui-mobile-rendering");
                        g();
                        x.trigger("changepage")
                    })
                }
            }
        }
    };
    a.mobile.changePage.defaults = {
        transition: c,
        reverse: !1,
        changeHash: !0,
        fromHashChange: !1,
        role: c,
        duplicateCachedPage: c,
        pageContainer: c
    };
    a("form").live("submit", function (c) {
        var d = a(this);
        if (a.mobile.ajaxEnabled && !d.is(":jqmData(ajax='false')")) {
            var f = d.attr("method"),
                g = r.makeUrlAbsolute(d.attr("action"), s(d)),
                e = d.attr("target");
            !r.isExternal(g) && !e && (a.mobile.changePage(g, {
                type: f.length && f.toLowerCase() || "get",
                data: d.serialize(),
                transition: d.jqmData("transition"),
                direction: d.jqmData("direction"),
                reloadPage: !0
            }), c.preventDefault())
        }
    });
    a(document).bind("vclick", function (c) {
        if ((c = q(c.target)) && r.parseUrl(c.getAttribute("href") || "#").hash !== "#") a(c).closest(".ui-btn").not(".ui-disabled").addClass(a.mobile.activeBtnClass), a("." + a.mobile.activePageClass + " .ui-btn").not(c).blur()
    });
    a(document).bind(a.mobile.useFastClick ? "vclick click" : "click", function (d) {
        var g = q(d.target);
        if (g) {
            var h = a(g),
                i = function () {
                    window.setTimeout(function () {
                        f(!0)
                    }, 200)
                };
            if (h.is(":jqmData(rel='back')")) return window.history.back(), !1;
            if (a.mobile.ajaxEnabled) {
                var e = s(h),
                    g = r.makeUrlAbsolute(h.attr("href") || "#", e);
                if (g.search("#") != -1) if (g = g.replace(/[^#]*#/, "")) g = r.isPath(g) ? r.makeUrlAbsolute(g, e) : r.makeUrlAbsolute("#" + g, C.hrefNoHash);
                else {
                    d.preventDefault();
                    return
                }
                var e = h.is("[rel='external']") || h.is(":jqmData(ajax='false')") || h.is("[target]"),
                    m = a.mobile.allowCrossDomainPages && C.protocol === "file:" && g.search(/^https?:/) != -1,
                    e = e || r.isExternal(g) && !m;
                t = h.closest(".ui-btn");
                e ? i() : (i = h.jqmData("transition"), e = (e = h.jqmData("direction")) && e === "reverse" || h.jqmData("back"), h = h.attr("data-" + a.mobile.ns + "rel") || c, a.mobile.changePage(g, {
                    transition: i,
                    reverse: e,
                    role: h
                }), d.preventDefault())
            } else i()
        }
    });
    n.bind("hashchange", function () {
        var d = r.stripHash(location.hash),
            f = a.mobile.urlHistory.stack.length === 0 ? "none" : c;
        if (!a.mobile.hashListeningEnabled || u.ignoreNextHashChange) u.ignoreNextHashChange = !1;
        else {
            if (u.stack.length > 1 && d.indexOf(D) > -1) if (a.mobile.activePage.is(".ui-dialog")) {
                var g = function () {
                        d = a.mobile.urlHistory.getActive().page
                    };
                u.directHashChange({
                    currentUrl: d,
                    isBack: g,
                    isForward: g
                })
            } else {
                u.directHashChange({
                    currentUrl: d,
                    isBack: function () {
                        window.history.back()
                    },
                    isForward: function () {
                        window.history.forward()
                    }
                });
                return
            }
            d ? (d = typeof d === "string" && !r.isPath(d) ? "#" + d : d, a.mobile.changePage(d, {
                transition: f,
                changeHash: !1,
                fromHashChange: !0
            })) : a.mobile.changePage(a.mobile.firstPage, {
                transition: f,
                changeHash: !1,
                fromHashChange: !0
            })
        }
    });
    a(document).bind("pageshow", o);
    a(window).bind("throttledresize", o)
})(jQuery);
(function (a) {
    function c(c, f, g, h) {
        var i = new a.Deferred,
            o = f ? " reverse" : "",
            l = "ui-mobile-viewport-transitioning viewport-" + c;
        g.animationComplete(function () {
            g.add(h).removeClass("out in reverse " + c);
            h && h.removeClass(a.mobile.activePageClass);
            g.parent().removeClass(l);
            i.resolve(c, f, g, h)
        });
        g.parent().addClass(l);
        h && h.addClass(c + " out" + o);
        g.addClass(a.mobile.activePageClass + " " + c + " in" + o);
        return i.promise()
    }
    a.mobile.css3TransitionHandler = c;
    if (a.mobile.defaultTransitionHandler === a.mobile.noneTransitionHandler) a.mobile.defaultTransitionHandler = c
})(jQuery, this);
(function (a, c) {
    a.fn.fixHeaderFooter = function () {
        return !a.support.scrollTop ? this : this.each(function () {
            var c = a(this);
            c.jqmData("fullscreen") && c.addClass("ui-page-fullscreen");
            c.find(".ui-header:jqmData(position='fixed')").addClass("ui-header-fixed ui-fixed-inline fade");
            c.find(".ui-footer:jqmData(position='fixed')").addClass("ui-footer-fixed ui-fixed-inline fade")
        })
    };
    a.fixedToolbars = function () {
        function d() {
            !i && h == "overlay" && (o || a.fixedToolbars.hide(!0), a.fixedToolbars.startShowTimer())
        }
        function f(a) {
            var c = 0;
            if (a) for (var d = a.offsetParent, f = document.body, c = a.offsetTop; a && a != f;) {
                c += a.scrollTop || 0;
                if (a == d) c += d.offsetTop, d = a.offsetParent;
                a = a.parentNode
            }
            return c
        }
        function g(c) {
            var d = a(window).scrollTop(),
                g = f(c[0]),
                h = c.css("top") == "auto" ? 0 : parseFloat(c.css("top")),
                i = window.innerHeight,
                l = c.outerHeight(),
                n = c.parents(".ui-page:not(.ui-page-fullscreen)").length;
            return c.is(".ui-header-fixed") ? (h = d - g + h, h < g && (h = 0), c.css("top", n ? h : d)) : c.css("top", n ? d + i - l - (g - h) : d + i - l)
        }
        if (a.support.scrollTop) {
            var h = "inline",
                i = !1,
                o, l, q = null,
                s = !1,
                n = !0;
            a(function () {
                a(document).bind("vmousedown", function () {
                    n && (q = h)
                }).bind("vclick", function (c) {
                    n && !a(c.target).closest("a,input,textarea,select,button,label,.ui-header-fixed,.ui-footer-fixed").length && !s && (a.fixedToolbars.toggle(q), q = null)
                }).bind("silentscroll", d);
                (a(document).scrollTop() == 0 ? a(window) : a(document)).bind("scrollstart", function () {
                    s = !0;
                    q == null && (q = h);
                    var c = q == "overlay";
                    if (i = c || !! o) a.fixedToolbars.clearShowTimer(), c && a.fixedToolbars.hide(!0)
                }).bind("scrollstop", function (c) {
                    a(c.target).closest("a,input,textarea,select,button,label,.ui-header-fixed,.ui-footer-fixed").length || (s = !1, i && (i = !1, a.fixedToolbars.startShowTimer()), q = null)
                });
                a(window).bind("resize", d)
            });
            a(".ui-page").live("pagebeforeshow", function (c, d) {
                var f = a(c.target).find(":jqmData(role='footer')"),
                    h = f.data("id"),
                    i = d.prevPage,
                    i = i && i.find(":jqmData(role='footer')"),
                    i = i.length && i.jqmData("id") === h;
                h && i && (l = f, g(l.removeClass("fade in out").appendTo(a.mobile.pageContainer)))
            });
            a(".ui-page").live("pageshow", function () {
                var c = a(this);
                l && l.length && setTimeout(function () {
                    g(l.appendTo(c).addClass("fade"));
                    l = null
                }, 500);
                a.fixedToolbars.show(!0, this)
            });
            a(".ui-collapsible-contain").live("collapse expand", d);
            return {
                show: function (c, d) {
                    a.fixedToolbars.clearShowTimer();
                    h = "overlay";
                    return (d ? a(d) : a.mobile.activePage ? a.mobile.activePage : a(".ui-page-active")).children(".ui-header-fixed:first, .ui-footer-fixed:not(.ui-footer-duplicate):last").each(function () {
                        var d = a(this),
                            h = a(window).scrollTop(),
                            i = f(d[0]),
                            l = window.innerHeight,
                            n = d.outerHeight(),
                            h = d.is(".ui-header-fixed") && h <= i + n || d.is(".ui-footer-fixed") && i <= h + l;
                        d.addClass("ui-fixed-overlay").removeClass("ui-fixed-inline");
                        !h && !c && d.animationComplete(function () {
                            d.removeClass("in")
                        }).addClass("in");
                        g(d)
                    })
                },
                hide: function (c) {
                    h = "inline";
                    return (a.mobile.activePage ? a.mobile.activePage : a(".ui-page-active")).children(".ui-header-fixed:first, .ui-footer-fixed:not(.ui-footer-duplicate):last").each(function () {
                        var d = a(this),
                            f = d.css("top"),
                            f = f == "auto" ? 0 : parseFloat(f);
                        d.addClass("ui-fixed-inline").removeClass("ui-fixed-overlay");
                        if (f < 0 || d.is(".ui-header-fixed") && f != 0) c ? d.css("top", 0) : d.css("top") !== "auto" && parseFloat(d.css("top")) !== 0 && d.animationComplete(function () {
                            d.removeClass("out reverse");
                            d.css("top", 0)
                        }).addClass("out reverse")
                    })
                },
                startShowTimer: function () {
                    a.fixedToolbars.clearShowTimer();
                    var d = a.makeArray(arguments);
                    o = setTimeout(function () {
                        o = c;
                        a.fixedToolbars.show.apply(null, d)
                    }, 100)
                },
                clearShowTimer: function () {
                    o && clearTimeout(o);
                    o = c
                },
                toggle: function (c) {
                    c && (h = c);
                    return h == "overlay" ? a.fixedToolbars.hide() : a.fixedToolbars.show()
                },
                setTouchToggleEnabled: function (a) {
                    n = a
                }
            }
        }
    }()
})(jQuery);
(function (a, c) {
    a.widget("mobile.checkboxradio", a.mobile.widget, {
        options: {
            theme: null
        },
        _create: function () {
            var d = this,
                f = this.element,
                g = f.closest("form,fieldset,:jqmData(role='page')").find("label").filter('[for="' + f[0].id + '"]'),
                h = f.attr("type"),
                i = "ui-icon-" + h + "-off";
            if (!(h != "checkbox" && h != "radio")) {
                a.extend(this, {
                    label: g,
                    inputtype: h,
                    checkedicon: "ui-icon-" + h + "-on",
                    uncheckedicon: i
                });
                if (!this.options.theme) this.options.theme = this.element.jqmData("theme");
                g.buttonMarkup({
                    theme: this.options.theme,
                    icon: this.element.parents(":jqmData(type='horizontal')").length ? c : i,
                    shadow: !1
                });
                f.add(g).wrapAll("<div class='ui-" + h + "'></div>");
                g.bind({
                    vmouseover: function () {
                        if (a(this).parent().is(".ui-disabled")) return !1
                    },
                    vclick: function (a) {
                        if (f.is(":disabled")) a.preventDefault();
                        else return d._cacheVals(), f.prop("checked", h === "radio" && !0 || !f.prop("checked")), d._getInputSet().not(f).prop("checked", !1), d._updateAll(), !1
                    }
                });
                f.bind({
                    vmousedown: function () {
                        this._cacheVals()
                    },
                    vclick: function () {
                        a(this).is(":checked") ? (a(this).prop("checked", !0), d._getInputSet().not(a(this)).prop("checked", !1)) : a(this).prop("checked", !1);
                        d._updateAll()
                    },
                    focus: function () {
                        g.addClass("ui-focus")
                    },
                    blur: function () {
                        g.removeClass("ui-focus")
                    }
                });
                this.refresh()
            }
        },
        _cacheVals: function () {
            this._getInputSet().each(function () {
                a(this).jqmData("cacheVal", a(this).is(":checked"))
            })
        },
        _getInputSet: function () {
            return this.element.closest("form,fieldset,:jqmData(role='page')").find("input[name='" + this.element.attr("name") + "'][type='" + this.inputtype + "']")
        },
        _updateAll: function () {
            var c = this;
            this._getInputSet().each(function () {
                (a(this).is(":checked") || c.inputtype === "checkbox") && a(this).trigger("change")
            }).checkboxradio("refresh")
        },
        refresh: function () {
            var c = this.element,
                f = this.label,
                g = f.find(".ui-icon");
            a(c[0]).prop("checked") ? (f.addClass(a.mobile.activeBtnClass), g.addClass(this.checkedicon).removeClass(this.uncheckedicon)) : (f.removeClass(a.mobile.activeBtnClass), g.removeClass(this.checkedicon).addClass(this.uncheckedicon));
            c.is(":disabled") ? this.disable() : this.enable()
        },
        disable: function () {
            this.element.prop("disabled", !0).parent().addClass("ui-disabled")
        },
        enable: function () {
            this.element.prop("disabled", !1).parent().removeClass("ui-disabled")
        }
    })
})(jQuery);
(function (a) {
    a.widget("mobile.textinput", a.mobile.widget, {
        options: {
            theme: null
        },
        _create: function () {
            var c, d = this.element,
                f = this.options,
                g = f.theme;
            g || (g = this.element.closest("[class*='ui-bar-'],[class*='ui-body-']"), c = (g = g.length && /ui-(bar|body)-([a-z])/.exec(g.attr("class"))) && g[2] || "c", g = c);
            g = " ui-body-" + g;
            a('label[for="' + d.attr("id") + '"]').addClass("ui-input-text");
            d.addClass("ui-input-text ui-body-" + f.theme);
            var h = d;
            if (d.is("[type='search'],:jqmData(type='search')")) {
                var h = d.wrap('<div class="ui-input-search ui-shadow-inset ui-btn-corner-all ui-btn-shadow ui-icon-searchfield' + g + '"></div>').parent(),
                    i = a('<a href="#" class="ui-input-clear" title="clear text">clear text</a>').tap(function (a) {
                        d.val("").focus();
                        d.trigger("change");
                        i.addClass("ui-input-clear-hidden");
                        a.preventDefault()
                    }).appendTo(h).buttonMarkup({
                        icon: "delete",
                        iconpos: "notext",
                        corners: !0,
                        shadow: !0
                    }),
                    f = function () {
                        d.val() == "" ? i.addClass("ui-input-clear-hidden") : i.removeClass("ui-input-clear-hidden")
                    };
                f();
                d.keyup(f);
                d.focus(f)
            } else d.addClass("ui-corner-all ui-shadow-inset" + g);
            d.focus(function () {
                h.addClass("ui-focus")
            }).blur(function () {
                h.removeClass("ui-focus")
            });
            if (d.is("textarea")) {
                var o = function () {
                        var a = d[0].scrollHeight;
                        d[0].clientHeight < a && d.css({
                            height: a + 15
                        })
                    },
                    l;
                d.keyup(function () {
                    clearTimeout(l);
                    l = setTimeout(o, 100)
                })
            }
        },
        disable: function () {
            (this.element.attr("disabled", !0).is("[type='search'],:jqmData(type='search')") ? this.element.parent() : this.element).addClass("ui-disabled")
        },
        enable: function () {
            (this.element.attr("disabled", !1).is("[type='search'],:jqmData(type='search')") ? this.element.parent() : this.element).removeClass("ui-disabled")
        }
    })
})(jQuery);
(function (a) {
    a.widget("mobile.selectmenu", a.mobile.widget, {
        options: {
            theme: null,
            disabled: !1,
            icon: "arrow-d",
            iconpos: "right",
            inline: null,
            corners: !0,
            shadow: !0,
            iconshadow: !0,
            menuPageTheme: "b",
            overlayTheme: "a",
            hidePlaceholderMenuItems: !0,
            closeText: "Close",
            nativeMenu: !0
        },
        _create: function () {
            var c = this,
                d = this.options,
                f = this.element.wrap("<div class='ui-select'>"),
                g = f.attr("id"),
                h = a('label[for="' + g + '"]').addClass("ui-select"),
                i = f[0].selectedIndex == -1 ? 0 : f[0].selectedIndex,
                o = (c.options.nativeMenu ? a("<div/>") : a("<a>", {
                    href: "#",
                    role: "button",
                    id: s,
                    "aria-haspopup": "true",
                    "aria-owns": n
                })).text(a(f[0].options.item(i)).text()).insertBefore(f).buttonMarkup({
                    theme: d.theme,
                    icon: d.icon,
                    iconpos: d.iconpos,
                    inline: d.inline,
                    corners: d.corners,
                    shadow: d.shadow,
                    iconshadow: d.iconshadow
                }),
                l = c.isMultiple = f[0].multiple;
            d.nativeMenu && window.opera && window.opera.version && f.addClass("ui-select-nativeonly");
            if (!d.nativeMenu) {
                var q = f.find("option"),
                    s = g + "-button",
                    n = g + "-menu",
                    m = f.closest(".ui-page"),
                    i = /ui-btn-up-([a-z])/.exec(o.attr("class"))[1],
                    x = a("<div data-" + a.mobile.ns + "role='dialog' data-" + a.mobile.ns + "theme='" + d.menuPageTheme + "'><div data-" + a.mobile.ns + "role='header'><div class='ui-title'>" + h.text() + "</div></div><div data-" + a.mobile.ns + "role='content'></div></div>").appendTo(a.mobile.pageContainer).page(),
                    r = x.find(".ui-content");
                x.find(".ui-header a");
                var t = a("<div>", {
                    "class": "ui-selectmenu-screen ui-screen-hidden"
                }).appendTo(m),
                    u = a("<div>", {
                        "class": "ui-selectmenu ui-selectmenu-hidden ui-overlay-shadow ui-corner-all pop ui-body-" + d.overlayTheme
                    }).insertAfter(t),
                    w = a("<ul>", {
                        "class": "ui-selectmenu-list",
                        id: n,
                        role: "listbox",
                        "aria-labelledby": s
                    }).attr("data-" + a.mobile.ns + "theme", i).appendTo(u),
                    J = a("<div>", {
                        "class": "ui-header ui-bar-" + i
                    }).prependTo(u),
                    A = a("<h1>", {
                        "class": "ui-title"
                    }).appendTo(J),
                    D = a("<a>", {
                        text: d.closeText,
                        href: "#",
                        "class": "ui-btn-left"
                    }).attr("data-" + a.mobile.ns + "iconpos", "notext").attr("data-" + a.mobile.ns + "icon", "delete").appendTo(J).buttonMarkup()
            }
            if (l) c.buttonCount = a("<span>").addClass("ui-li-count ui-btn-up-c ui-btn-corner-all").hide().appendTo(o);
            d.disabled && this.disable();
            f.change(function () {
                c.refresh()
            });
            a.extend(c, {
                select: f,
                optionElems: q,
                selectID: g,
                label: h,
                buttonId: s,
                menuId: n,
                thisPage: m,
                button: o,
                menuPage: x,
                menuPageContent: r,
                screen: t,
                listbox: u,
                list: w,
                menuType: void 0,
                header: J,
                headerClose: D,
                headerTitle: A,
                placeholder: ""
            });
            d.nativeMenu ? f.appendTo(o).bind("vmousedown", function () {
                o.addClass(a.mobile.activeBtnClass)
            }).bind("focus vmouseover", function () {
                o.trigger("vmouseover")
            }).bind("vmousemove", function () {
                o.removeClass(a.mobile.activeBtnClass)
            }).bind("change blur vmouseout", function () {
                o.trigger("vmouseout").removeClass(a.mobile.activeBtnClass)
            }) : (c.refresh(), f.attr("tabindex", "-1").focus(function () {
                a(this).blur();
                o.focus()
            }), o.bind("vclick keydown", function (d) {
                if (d.type == "vclick" || d.keyCode && (d.keyCode === a.mobile.keyCode.ENTER || d.keyCode === a.mobile.keyCode.SPACE)) c.open(), d.preventDefault()
            }), w.attr("role", "listbox").delegate(".ui-li>a", "focusin", function () {
                a(this).attr("tabindex", "0")
            }).delegate(".ui-li>a", "focusout", function () {
                a(this).attr("tabindex", "-1")
            }).delegate("li:not(.ui-disabled, .ui-li-divider)", "vclick", function (d) {
                var g = f[0].selectedIndex,
                    h = w.find("li:not(.ui-li-divider)").index(this),
                    i = c.optionElems.eq(h)[0];
                i.selected = l ? !i.selected : !0;
                l && a(this).find(".ui-icon").toggleClass("ui-icon-checkbox-on", i.selected).toggleClass("ui-icon-checkbox-off", !i.selected);
                (l || g !== h) && f.trigger("change");
                l || c.close();
                d.preventDefault()
            }).keydown(function (c) {
                var d = a(c.target),
                    f = d.closest("li");
                switch (c.keyCode) {
                case 38:
                    return c = f.prev(), c.length && (d.blur().attr("tabindex", "-1"), c.find("a").first().focus()), !1;
                case 40:
                    return c = f.next(), c.length && (d.blur().attr("tabindex", "-1"), c.find("a").first().focus()), !1;
                case 13:
                case 32:
                    return d.trigger("vclick"), !1
                }
            }), t.bind("vclick", function () {
                c.close()
            }), c.headerClose.click(function () {
                if (c.menuType == "overlay") return c.close(), !1
            }))
        },
        _buildList: function () {
            var c = this,
                d = this.options,
                f = this.placeholder,
                g = [],
                h = [],
                i = c.isMultiple ? "checkbox-off" : "false";
            c.list.empty().filter(".ui-listview").listview("destroy");
            c.select.find("option").each(function () {
                var o = a(this),
                    l = o.parent(),
                    q = o.text(),
                    s = "<a href='#'>" + q + "</a>",
                    n = [],
                    m = [];
                l.is("optgroup") && (l = l.attr("label"), a.inArray(l, g) === -1 && (h.push("<li data-" + a.mobile.ns + "role='list-divider'>" + l + "</li>"), g.push(l)));
                if (!this.getAttribute("value") || q.length == 0 || o.jqmData("placeholder")) d.hidePlaceholderMenuItems && n.push("ui-selectmenu-placeholder"), f = c.placeholder = q;
                this.disabled && (n.push("ui-disabled"), m.push("aria-disabled='true'"));
                h.push("<li data-" + a.mobile.ns + "icon='" + i + "' class='" + n.join(" ") + "' " + m.join(" ") + ">" + s + "</li>")
            });
            c.list.html(h.join(" "));
            c.list.find("li").attr({
                role: "option",
                tabindex: "-1"
            }).first().attr("tabindex", "0");
            this.isMultiple || this.headerClose.hide();
            !this.isMultiple && !f.length ? this.header.hide() : this.headerTitle.text(this.placeholder);
            c.list.listview()
        },
        refresh: function (c) {
            var d = this,
                f = this.element,
                g = this.isMultiple,
                h = this.optionElems = f.find("option"),
                i = h.filter(":selected"),
                o = i.map(function () {
                    return h.index(this)
                }).get();
            !d.options.nativeMenu && (c || f[0].options.length != d.list.find("li").length) && d._buildList();
            d.button.find(".ui-btn-text").text(function () {
                return !g ? i.text() : i.length ? i.map(function () {
                    return a(this).text()
                }).get().join(", ") : d.placeholder
            });
            g && d.buttonCount[i.length > 1 ? "show" : "hide"]().text(i.length);
            d.options.nativeMenu || d.list.find("li:not(.ui-li-divider)").removeClass(a.mobile.activeBtnClass).attr("aria-selected", !1).each(function (c) {
                a.inArray(c, o) > -1 && (c = a(this).addClass(a.mobile.activeBtnClass), c.find("a").attr("aria-selected", !0), g && c.find(".ui-icon").removeClass("ui-icon-checkbox-off").addClass("ui-icon-checkbox-on"))
            })
        },
        open: function () {
            function c() {
                d.list.find(".ui-btn-active").focus()
            }
            if (!this.options.disabled && !this.options.nativeMenu) {
                var d = this,
                    f = d.list.parent().outerHeight(),
                    g = d.list.parent().outerWidth(),
                    h = a(window).scrollTop(),
                    i = d.button.offset().top,
                    o = window.innerHeight,
                    l = window.innerWidth;
                d.button.addClass(a.mobile.activeBtnClass);
                setTimeout(function () {
                    d.button.removeClass(a.mobile.activeBtnClass)
                }, 300);
                if (f > o - 80 || !a.support.scrollTop) {
                    if (h == 0 && i > o) d.thisPage.one("pagehide", function () {
                        a(this).jqmData("lastScroll", i)
                    });
                    d.menuPage.one("pageshow", function () {
                        a(window).one("silentscroll", function () {
                            c()
                        })
                    });
                    d.menuType = "page";
                    d.menuPageContent.append(d.list);
                    a.mobile.changePage(d.menuPage, {
                        transition: "pop"
                    })
                } else {
                    d.menuType = "overlay";
                    d.screen.height(a(document).height()).removeClass("ui-screen-hidden");
                    var q = i - h,
                        s = h + o - i,
                        n = f / 2,
                        m = parseFloat(d.list.parent().css("max-width")),
                        f = q > f / 2 && s > f / 2 ? i + d.button.outerHeight() / 2 - n : q > s ? h + o - f - 30 : h + 30;
                    g < m ? m = (l - g) / 2 : (m = d.button.offset().left + d.button.outerWidth() / 2 - g / 2, m < 30 ? m = 30 : m + g > l && (m = l - g - 30));
                    d.listbox.append(d.list).removeClass("ui-selectmenu-hidden").css({
                        top: f,
                        left: m
                    }).addClass("in");
                    c()
                }
                setTimeout(function () {
                    d.isOpen = !0
                }, 400)
            }
        },
        close: function () {
            function a() {
                setTimeout(function () {
                    d.button.focus()
                }, 40);
                d.listbox.removeAttr("style").append(d.list)
            }
            if (!this.options.disabled && this.isOpen && !this.options.nativeMenu) {
                var d = this;
                d.menuType == "page" ? (d.menuPage.one("pagehide", a), window.history.back()) : (d.screen.addClass("ui-screen-hidden"), d.listbox.addClass("ui-selectmenu-hidden").removeAttr("style").removeClass("in"), a());
                this.isOpen = !1
            }
        },
        disable: function () {
            this.element.attr("disabled", !0);
            this.button.addClass("ui-disabled").attr("aria-disabled", !0);
            return this._setOption("disabled", !0)
        },
        enable: function () {
            this.element.attr("disabled", !1);
            this.button.removeClass("ui-disabled").attr("aria-disabled", !1);
            return this._setOption("disabled", !1)
        }
    })
})(jQuery);
(function (a) {
    function c(c) {
        for (; c;) {
            var d = a(c);
            if (d.hasClass("ui-btn") && !d.hasClass("ui-disabled")) break;
            c = c.parentNode
        }
        return c
    }
    a.fn.buttonMarkup = function (c) {
        return this.each(function () {
            var g = a(this),
                h = a.extend({}, a.fn.buttonMarkup.defaults, g.jqmData(), c),
                i, o = "ui-btn-inner",
                l;
            d && d();
            if (!h.theme) i = g.closest("[class*='ui-bar-'],[class*='ui-body-']"), h.theme = i.length ? /ui-(bar|body)-([a-z])/.exec(i.attr("class"))[2] : "c";
            i = "ui-btn ui-btn-up-" + h.theme;
            h.inline && (i += " ui-btn-inline");
            if (h.icon) h.icon = "ui-icon-" + h.icon, h.iconpos = h.iconpos || "left", l = "ui-icon " + h.icon, h.shadow && (l += " ui-icon-shadow");
            h.iconpos && (i += " ui-btn-icon-" + h.iconpos, h.iconpos == "notext" && !g.attr("title") && g.attr("title", g.text()));
            h.corners && (i += " ui-btn-corner-all", o += " ui-btn-corner-all");
            h.shadow && (i += " ui-shadow");
            g.attr("data-" + a.mobile.ns + "theme", h.theme).addClass(i);
            h = ("<D class='" + o + "'><D class='ui-btn-text'></D>" + (h.icon ? "<span class='" + l + "'></span>" : "") + "</D>").replace(/D/g, h.wrapperEls);
            g.wrapInner(h)
        })
    };
    a.fn.buttonMarkup.defaults = {
        corners: !0,
        shadow: !0,
        iconshadow: !0,
        wrapperEls: "span"
    };
    var d = function () {
            a(document).bind({
                vmousedown: function (d) {
                    if (d = c(d.target)) {
                        var d = a(d),
                            g = d.attr("data-" + a.mobile.ns + "theme");
                        d.removeClass("ui-btn-up-" + g).addClass("ui-btn-down-" + g)
                    }
                },
                "vmousecancel vmouseup": function (d) {
                    if (d = c(d.target)) {
                        var d = a(d),
                            g = d.attr("data-" + a.mobile.ns + "theme");
                        d.removeClass("ui-btn-down-" + g).addClass("ui-btn-up-" + g)
                    }
                },
                "vmouseover focus": function (d) {
                    if (d = c(d.target)) {
                        var d = a(d),
                            g = d.attr("data-" + a.mobile.ns + "theme");
                        d.removeClass("ui-btn-up-" + g).addClass("ui-btn-hover-" + g)
                    }
                },
                "vmouseout blur": function (d) {
                    if (d = c(d.target)) {
                        var d = a(d),
                            g = d.attr("data-" + a.mobile.ns + "theme");
                        d.removeClass("ui-btn-hover-" + g).addClass("ui-btn-up-" + g)
                    }
                }
            });
            d = null
        }
})(jQuery);
(function (a) {
    a.widget("mobile.button", a.mobile.widget, {
        options: {
            theme: null,
            icon: null,
            iconpos: null,
            inline: null,
            corners: !0,
            shadow: !0,
            iconshadow: !0
        },
        _create: function () {
            var c = this.element,
                d = this.options;
            this.button = a("<div></div>").text(c.text() || c.val()).buttonMarkup({
                theme: d.theme,
                icon: d.icon,
                iconpos: d.iconpos,
                inline: d.inline,
                corners: d.corners,
                shadow: d.shadow,
                iconshadow: d.iconshadow
            }).insertBefore(c).append(c.addClass("ui-btn-hidden"));
            d = c.attr("type");
            d !== "button" && d !== "reset" && c.bind("vclick", function () {
                var d = a("<input>", {
                    type: "hidden",
                    name: c.attr("name"),
                    value: c.attr("value")
                }).insertBefore(c);
                a(document).submit(function () {
                    d.remove()
                })
            });
            this.refresh()
        },
        enable: function () {
            this.element.attr("disabled", !1);
            this.button.removeClass("ui-disabled").attr("aria-disabled", !1);
            return this._setOption("disabled", !1)
        },
        disable: function () {
            this.element.attr("disabled", !0);
            this.button.addClass("ui-disabled").attr("aria-disabled", !0);
            return this._setOption("disabled", !0)
        },
        refresh: function () {
            this.element.attr("disabled") ? this.disable() : this.enable()
        }
    })
})(jQuery);
(function (a) {
    a.widget("mobile.slider", a.mobile.widget, {
        options: {
            theme: null,
            trackTheme: null,
            disabled: !1
        },
        _create: function () {
            var c = this,
                d = this.element,
                f = d.parents("[class*=ui-bar-],[class*=ui-body-]").eq(0),
                f = f.length ? f.attr("class").match(/ui-(bar|body)-([a-z])/)[2] : "c",
                g = this.options.theme ? this.options.theme : f,
                h = this.options.trackTheme ? this.options.trackTheme : f,
                i = d[0].nodeName.toLowerCase(),
                f = i == "select" ? "ui-slider-switch" : "",
                o = d.attr("id"),
                l = o + "-label",
                o = a('[for="' + o + '"]').attr("id", l),
                q = function () {
                    return i == "input" ? parseFloat(d.val()) : d[0].selectedIndex
                },
                s = i == "input" ? parseFloat(d.attr("min")) : 0,
                n = i == "input" ? parseFloat(d.attr("max")) : d.find("option").length - 1,
                m = window.parseFloat(d.attr("step") || 1),
                x = a('<div class="ui-slider ' + f + " ui-btn-down-" + h + ' ui-btn-corner-all" role="application"></div>'),
                r = a('<a href="#" class="ui-slider-handle"></a>').appendTo(x).buttonMarkup({
                    corners: !0,
                    theme: g,
                    shadow: !0
                }).attr({
                    role: "slider",
                    "aria-valuemin": s,
                    "aria-valuemax": n,
                    "aria-valuenow": q(),
                    "aria-valuetext": q(),
                    title: q(),
                    "aria-labelledby": l
                });
            a.extend(this, {
                slider: x,
                handle: r,
                dragging: !1,
                beforeStart: null
            });
            i == "select" && (x.wrapInner('<div class="ui-slider-inneroffset"></div>'), d.find("option"), d.find("option").each(function (c) {
                var d = c == 0 ? "b" : "a",
                    f = c == 0 ? "right" : "left",
                    c = c == 0 ? " ui-btn-down-" + h : " ui-btn-active";
                a('<div class="ui-slider-labelbg ui-slider-labelbg-' + d + c + " ui-btn-corner-" + f + '"></div>').prependTo(x);
                a('<span class="ui-slider-label ui-slider-label-' + d + c + " ui-btn-corner-" + f + '" role="img">' + a(this).text() + "</span>").prependTo(r)
            }));
            o.addClass("ui-slider");
            d.addClass(i == "input" ? "ui-slider-input" : "ui-slider-switch").change(function () {
                c.refresh(q(), !0)
            }).keyup(function () {
                c.refresh(q(), !0, !0)
            }).blur(function () {
                c.refresh(q(), !0)
            });
            a(document).bind("vmousemove", function (a) {
                if (c.dragging) return c.refresh(a), !1
            });
            x.bind("vmousedown", function (a) {
                c.dragging = !0;
                if (i === "select") c.beforeStart = d[0].selectedIndex;
                c.refresh(a);
                return !1
            });
            x.add(document).bind("vmouseup", function () {
                if (c.dragging) {
                    c.dragging = !1;
                    if (i === "select") {
                        c.beforeStart === d[0].selectedIndex && c.refresh(c.beforeStart === 0 ? 1 : 0);
                        var a = q(),
                            a = Math.round(a / (n - s) * 100);
                        r.addClass("ui-slider-handle-snapping").css("left", a + "%").animationComplete(function () {
                            r.removeClass("ui-slider-handle-snapping")
                        })
                    }
                    return !1
                }
            });
            x.insertAfter(d);
            this.handle.bind("vmousedown", function () {
                a(this).focus()
            }).bind("vclick", !1);
            this.handle.bind("keydown", function (d) {
                var f = q();
                if (!c.options.disabled) {
                    switch (d.keyCode) {
                    case a.mobile.keyCode.HOME:
                    case a.mobile.keyCode.END:
                    case a.mobile.keyCode.PAGE_UP:
                    case a.mobile.keyCode.PAGE_DOWN:
                    case a.mobile.keyCode.UP:
                    case a.mobile.keyCode.RIGHT:
                    case a.mobile.keyCode.DOWN:
                    case a.mobile.keyCode.LEFT:
                        if (d.preventDefault(), !c._keySliding) c._keySliding = !0, a(this).addClass("ui-state-active")
                    }
                    switch (d.keyCode) {
                    case a.mobile.keyCode.HOME:
                        c.refresh(s);
                        break;
                    case a.mobile.keyCode.END:
                        c.refresh(n);
                        break;
                    case a.mobile.keyCode.PAGE_UP:
                    case a.mobile.keyCode.UP:
                    case a.mobile.keyCode.RIGHT:
                        c.refresh(f + m);
                        break;
                    case a.mobile.keyCode.PAGE_DOWN:
                    case a.mobile.keyCode.DOWN:
                    case a.mobile.keyCode.LEFT:
                        c.refresh(f - m)
                    }
                }
            }).keyup(function () {
                if (c._keySliding) c._keySliding = !1, a(this).removeClass("ui-state-active")
            });
            this.refresh()
        },
        refresh: function (a, d, f) {
            if (!this.options.disabled) {
                var g = this.element,
                    h = g[0].nodeName.toLowerCase(),
                    i = h === "input" ? parseFloat(g.attr("min")) : 0,
                    o = h === "input" ? parseFloat(g.attr("max")) : g.find("option").length - 1;
                if (typeof a === "object") {
                    if (!this.dragging || a.pageX < this.slider.offset().left - 8 || a.pageX > this.slider.offset().left + this.slider.width() + 8) return;
                    a = Math.round((a.pageX - this.slider.offset().left) / this.slider.width() * 100)
                } else a == null && (a = h === "input" ? parseFloat(g.val()) : g[0].selectedIndex), a = (parseFloat(a) - i) / (o - i) * 100;
                if (!isNaN(a)) {
                    a < 0 && (a = 0);
                    a > 100 && (a = 100);
                    var l = Math.round(a / 100 * (o - i)) + i;
                    l < i && (l = i);
                    l > o && (l = o);
                    this.handle.css("left", a + "%");
                    this.handle.attr({
                        "aria-valuenow": h === "input" ? l : g.find("option").eq(l).attr("value"),
                        "aria-valuetext": h === "input" ? l : g.find("option").eq(l).text(),
                        title: l
                    });
                    h === "select" && (l === 0 ? this.slider.addClass("ui-slider-switch-a").removeClass("ui-slider-switch-b") : this.slider.addClass("ui-slider-switch-b").removeClass("ui-slider-switch-a"));
                    if (!f) h === "input" ? g.val(l) : g[0].selectedIndex = l, d || g.trigger("change")
                }
            }
        },
        enable: function () {
            this.element.attr("disabled", !1);
            this.slider.removeClass("ui-disabled").attr("aria-disabled", !1);
            return this._setOption("disabled", !1)
        },
        disable: function () {
            this.element.attr("disabled", !0);
            this.slider.addClass("ui-disabled").attr("aria-disabled", !0);
            return this._setOption("disabled", !0)
        }
    })
})(jQuery);
(function (a) {
    a.widget("mobile.collapsible", a.mobile.widget, {
        options: {
            expandCueText: " click to expand contents",
            collapseCueText: " click to collapse contents",
            collapsed: !1,
            heading: ">:header,>legend",
            theme: null,
            iconTheme: "d"
        },
        _create: function () {
            var c = this.element,
                d = this.options,
                f = c.addClass("ui-collapsible-contain"),
                g = c.find(d.heading).eq(0),
                h = f.wrapInner('<div class="ui-collapsible-content"></div>').find(".ui-collapsible-content"),
                c = c.closest(":jqmData(role='collapsible-set')").addClass("ui-collapsible-set");
            g.is("legend") && (g = a('<div role="heading">' + g.html() + "</div>").insertBefore(g), g.next().remove());
            g.insertBefore(h).addClass("ui-collapsible-heading").append('<span class="ui-collapsible-heading-status"></span>').wrapInner('<a href="#" class="ui-collapsible-heading-toggle"></a>').find("a:eq(0)").buttonMarkup({
                shadow: !c.length,
                corners: !1,
                iconPos: "left",
                icon: "plus",
                theme: d.theme
            }).find(".ui-icon").removeAttr("class").buttonMarkup({
                shadow: !0,
                corners: !0,
                iconPos: "notext",
                icon: "plus",
                theme: d.iconTheme
            });
            c.length ? f.jqmData("collapsible-last") && g.find("a:eq(0), .ui-btn-inner").addClass("ui-corner-bottom") : g.find("a:eq(0)").addClass("ui-corner-all").find(".ui-btn-inner").addClass("ui-corner-all");
            f.bind("collapse", function (c) {
                !c.isDefaultPrevented() && a(c.target).closest(".ui-collapsible-contain").is(f) && (c.preventDefault(), g.addClass("ui-collapsible-heading-collapsed").find(".ui-collapsible-heading-status").text(d.expandCueText).end().find(".ui-icon").removeClass("ui-icon-minus").addClass("ui-icon-plus"), h.addClass("ui-collapsible-content-collapsed").attr("aria-hidden", !0), f.jqmData("collapsible-last") && g.find("a:eq(0), .ui-btn-inner").addClass("ui-corner-bottom"))
            }).bind("expand", function (a) {
                a.isDefaultPrevented() || (a.preventDefault(), g.removeClass("ui-collapsible-heading-collapsed").find(".ui-collapsible-heading-status").text(d.collapseCueText), g.find(".ui-icon").removeClass("ui-icon-plus").addClass("ui-icon-minus"), h.removeClass("ui-collapsible-content-collapsed").attr("aria-hidden", !1), f.jqmData("collapsible-last") && g.find("a:eq(0), .ui-btn-inner").removeClass("ui-corner-bottom"))
            }).trigger(d.collapsed ? "collapse" : "expand");
            c.length && !c.jqmData("collapsiblebound") && (c.jqmData("collapsiblebound", !0).bind("expand", function (c) {
                a(c.target).closest(".ui-collapsible-contain").siblings(".ui-collapsible-contain").trigger("collapse")
            }), c = c.find(":jqmData(role='collapsible'):first"), c.first().find("a:eq(0)").addClass("ui-corner-top").find(".ui-btn-inner").addClass("ui-corner-top"), c.last().jqmData("collapsible-last", !0));
            g.bind("vclick", function (a) {
                g.is(".ui-collapsible-heading-collapsed") ? f.trigger("expand") : f.trigger("collapse");
                a.preventDefault()
            })
        }
    })
})(jQuery);
(function (a) {
    a.fn.controlgroup = function (c) {
        return this.each(function () {
            function d(a) {
                a.removeClass("ui-btn-corner-all ui-shadow").eq(0).addClass(h[0]).end().filter(":last").addClass(h[1]).addClass("ui-controlgroup-last")
            }
            var f = a.extend({
                direction: a(this).jqmData("type") || "vertical",
                shadow: !1
            }, c),
                g = a(this).find(">legend"),
                h = f.direction == "horizontal" ? ["ui-corner-left", "ui-corner-right"] : ["ui-corner-top", "ui-corner-bottom"];
            a(this).find("input:eq(0)").attr("type");
            g.length && (a(this).wrapInner('<div class="ui-controlgroup-controls"></div>'), a('<div role="heading" class="ui-controlgroup-label">' + g.html() + "</div>").insertBefore(a(this).children(0)), g.remove());
            a(this).addClass("ui-corner-all ui-controlgroup ui-controlgroup-" + f.direction);
            d(a(this).find(".ui-btn"));
            d(a(this).find(".ui-btn-inner"));
            f.shadow && a(this).addClass("ui-shadow")
        })
    }
})(jQuery);
(function (a) {
    a.fn.fieldcontain = function () {
        return this.addClass("ui-field-contain ui-body ui-br")
    }
})(jQuery);
(function (a) {
    var c = {};
    a.widget("mobile.listview", a.mobile.widget, {
        options: {
            theme: "c",
            countTheme: "c",
            headerTheme: "b",
            dividerTheme: "b",
            splitIcon: "arrow-r",
            splitTheme: "b",
            inset: !1
        },
        _create: function () {
            var a = this;
            a.element.addClass(function (c, g) {
                return g + " ui-listview " + (a.options.inset ? " ui-listview-inset ui-corner-all ui-shadow " : "")
            });
            a.refresh()
        },
        _itemApply: function (c, f) {
            f.find(".ui-li-count").addClass("ui-btn-up-" + (c.jqmData("counttheme") || this.options.countTheme) + " ui-btn-corner-all").end().find("h1, h2, h3, h4, h5, h6").addClass("ui-li-heading").end().find("p, dl").addClass("ui-li-desc").end().find(">img:eq(0), .ui-link-inherit>img:eq(0)").addClass("ui-li-thumb").each(function () {
                f.addClass(a(this).is(".ui-li-icon") ? "ui-li-has-icon" : "ui-li-has-thumb")
            }).end().find(".ui-li-aside").each(function () {
                var c = a(this);
                c.prependTo(c.parent())
            })
        },
        _removeCorners: function (a) {
            a.add(a.find(".ui-btn-inner, .ui-li-link-alt, .ui-li-thumb")).removeClass("ui-corner-top ui-corner-bottom ui-corner-br ui-corner-bl ui-corner-tr ui-corner-tl")
        },
        refresh: function (c) {
            this._createSubPages();
            var f = this.options,
                g = this.element,
                h = g.jqmData("dividertheme") || f.dividerTheme,
                i = g.jqmData("splittheme"),
                o = g.jqmData("spliticon"),
                l = g.children("li"),
                q = a.support.cssPseudoElement || !a.nodeName(g[0], "ol") ? 0 : 1;
            q && g.find(".ui-li-dec").remove();
            for (var s = 0, n = l.length; s < n; s++) {
                var m = l.eq(s),
                    x = "ui-li";
                if (c || !m.hasClass("ui-li")) {
                    var r = m.jqmData("theme") || f.theme,
                        t = m.children("a");
                    if (t.length) {
                        var u = m.jqmData("icon");
                        m.buttonMarkup({
                            wrapperEls: "div",
                            shadow: !1,
                            corners: !1,
                            iconpos: "right",
                            icon: t.length > 1 || u === !1 ? !1 : u || "arrow-r",
                            theme: r
                        });
                        t.first().addClass("ui-link-inherit");
                        t.length > 1 && (x += " ui-li-has-alt", t = t.last(), u = i || t.jqmData("theme") || f.splitTheme, t.appendTo(m).attr("title", t.text()).addClass("ui-li-link-alt").empty().buttonMarkup({
                            shadow: !1,
                            corners: !1,
                            theme: r,
                            icon: !1,
                            iconpos: !1
                        }).find(".ui-btn-inner").append(a("<span />").buttonMarkup({
                            shadow: !0,
                            corners: !0,
                            theme: u,
                            iconpos: "notext",
                            icon: o || t.jqmData("icon") || f.splitIcon
                        })))
                    } else m.jqmData("role") === "list-divider" ? (x += " ui-li-divider ui-btn ui-bar-" + h, m.attr("role", "heading"), q && (q = 1)) : x += " ui-li-static ui-body-" + r
                }
                f.inset && (s === 0 && (x += " ui-corner-top", m.add(m.find(".ui-btn-inner")).find(".ui-li-link-alt").addClass("ui-corner-tr").end().find(".ui-li-thumb").addClass("ui-corner-tl"), m.next().next().length && this._removeCorners(m.next())), s === l.length - 1 && (x += " ui-corner-bottom", m.add(m.find(".ui-btn-inner")).find(".ui-li-link-alt").addClass("ui-corner-br").end().find(".ui-li-thumb").addClass("ui-corner-bl"), m.prev().prev().length && this._removeCorners(m.prev())));
                q && x.indexOf("ui-li-divider") < 0 && (m.is(".ui-li-static:first") ? m : m.find(".ui-link-inherit")).addClass("ui-li-jsnumbering").prepend("<span class='ui-li-dec'>" + q+++". </span>");
                m.add(m.children(".ui-btn-inner")).addClass(x);
                c || this._itemApply(g, m)
            }
        },
        _idStringEscape: function (a) {
            return a.replace(/[^a-zA-Z0-9]/g, "-")
        },
        _createSubPages: function () {
            var d = this.element,
                f = d.closest(".ui-page"),
                g = f.jqmData("url"),
                h = g || f[0][a.expando],
                i = d.attr("id"),
                o = this.options,
                l = "data-" + a.mobile.ns,
                q = f.find(":jqmData(role='footer')").jqmData("id");
            typeof c[h] === "undefined" && (c[h] = -1);
            i = i || ++c[h];
            a(d.find("li>ul, li>ol").toArray().reverse()).each(function (c) {
                var f = a(this),
                    h = f.attr("id") || i + "-" + c,
                    c = f.parent(),
                    x = a(f.prevAll().toArray().reverse()),
                    x = x.length ? x : a("<span>" + a.trim(c.contents()[0].nodeValue) + "</span>"),
                    r = x.first().text(),
                    h = (g || "") + "&" + a.mobile.subPageUrlKey + "=" + h;
                theme = f.jqmData("theme") || o.theme;
                countTheme = f.jqmData("counttheme") || d.jqmData("counttheme") || o.countTheme;
                newPage = f.detach().wrap("<div " + l + "role='page' " + l + "url='" + h + "' " + l + "theme='" + theme + "' " + l + "count-theme='" + countTheme + "'><div " + l + "role='content'></div></div>").parent().before("<div " + l + "role='header' " + l + "theme='" + o.headerTheme + "'><div class='ui-title'>" + r + "</div></div>").after(q ? a("<div " + l + "role='footer' " + l + "id='" + q + "'>") : "").parent().appendTo(a.mobile.pageContainer);
                newPage.page();
                f = c.find("a:first");
                f.length || (f = a("<a />").html(x || r).prependTo(c.empty()));
                f.attr("href", "#" + h)
            }).listview()
        }
    })
})(jQuery);
(function (a) {
    a.mobile.listview.prototype.options.filter = !1;
    a.mobile.listview.prototype.options.filterPlaceholder = "Filter items...";
    a.mobile.listview.prototype.options.filterTheme = "c";
    a(":jqmData(role='listview')").live("listviewcreate", function () {
        var c = a(this),
            d = c.data("listview");
        if (d.options.filter) {
            var f = a("<form>", {
                "class": "ui-listview-filter ui-bar-" + d.options.filterTheme,
                role: "search"
            });
            a("<input>", {
                placeholder: d.options.filterPlaceholder
            }).attr("data-" + a.mobile.ns + "type", "search").jqmData("lastval", "").bind("keyup change", function () {
                var d = this.value.toLowerCase(),
                    f = null,
                    f = a(this).jqmData("lastval") + "";
                a(this).jqmData("lastval", d);
                change = d.replace(RegExp("^" + f), "");
                f = d.length < f.length || change.length != d.length - f.length ? c.children() : c.children(":not(.ui-screen-hidden)");
                if (d) {
                    for (var i, o = !1, l = "", q = f.length - 1; q >= 0; q--) i = a(f[q]), l = i.jqmData("filtertext") || i.text(), i.is("li:jqmData(role=list-divider)") ? (i.toggleClass("ui-filter-hidequeue", !o), o = !1) : l.toLowerCase().indexOf(d) === -1 ? i.toggleClass("ui-filter-hidequeue", !0) : o = !0;
                    f.filter(":not(.ui-filter-hidequeue)").toggleClass("ui-screen-hidden", !1);
                    f.filter(".ui-filter-hidequeue").toggleClass("ui-screen-hidden", !0).toggleClass("ui-filter-hidequeue", !1)
                } else f.toggleClass("ui-screen-hidden", !1)
            }).appendTo(f).textinput();
            a(this).jqmData("inset") && f.addClass("ui-listview-filter-inset");
            f.insertBefore(c)
        }
    })
})(jQuery);
(function (a) {
    a.widget("mobile.dialog", a.mobile.widget, {
        options: {
            closeBtnText: "Close"
        },
        _create: function () {
            var c = this.element;
            c.attr("role", "dialog").addClass("ui-page ui-dialog ui-body-a").find(":jqmData(role=header)").addClass("ui-corner-top ui-overlay-shadow").prepend("<a href='#' data-" + a.mobile.ns + "icon='delete' data-" + a.mobile.ns + "rel='back' data-" + a.mobile.ns + "iconpos='notext'>" + this.options.closeBtnText + "</a>").end().find('.ui-content:not([class*="ui-body-"])').addClass("ui-body-c").end().find(".ui-content,:jqmData(role='footer')").last().addClass("ui-corner-bottom ui-overlay-shadow");
            c.bind("vclick submit", function (c) {
                c = a(c.target).closest(c.type === "vclick" ? "a" : "form");
                if (c.length && !c.jqmData("transition")) {
                    var f = a.mobile.urlHistory.getActive() || {};
                    c.attr("data-" + a.mobile.ns + "transition", f.transition || a.mobile.defaultDialogTransition).attr("data-" + a.mobile.ns + "direction", "reverse")
                }
            }).bind("pagehide", function () {
                a(this).find("." + a.mobile.activeBtnClass).removeClass(a.mobile.activeBtnClass)
            })
        },
        close: function () {
            window.history.back()
        }
    })
})(jQuery);
(function (a, c) {
    a.widget("mobile.navbar", a.mobile.widget, {
        options: {
            iconpos: "top",
            grid: null
        },
        _create: function () {
            var d = this.element,
                f = d.find("a"),
                g = f.filter(":jqmData(icon)").length ? this.options.iconpos : c;
            d.addClass("ui-navbar").attr("role", "navigation").find("ul").grid({
                grid: this.options.grid
            });
            g || d.addClass("ui-navbar-noicons");
            f.buttonMarkup({
                corners: !1,
                shadow: !1,
                iconpos: g
            });
            d.delegate("a", "vclick", function () {
                f.not(".ui-state-persist").removeClass(a.mobile.activeBtnClass);
                a(this).addClass(a.mobile.activeBtnClass)
            })
        }
    })
})(jQuery);
(function (a) {
    a.fn.grid = function (c) {
        return this.each(function () {
            var d = a.extend({
                grid: null
            }, c),
                f = a(this).children(),
                g = {
                    solo: 1,
                    a: 2,
                    b: 3,
                    c: 4,
                    d: 5
                },
                d = d.grid;
            if (!d) if (f.length <= 5) for (var h in g) g[h] == f.length && (d = h);
            else d = "a";
            g = g[d];
            a(this).addClass("ui-grid-" + d);
            f.filter(":nth-child(" + g + "n+1)").addClass("ui-block-a");
            g > 1 && f.filter(":nth-child(" + g + "n+2)").addClass("ui-block-b");
            g > 2 && f.filter(":nth-child(3n+3)").addClass("ui-block-c");
            g > 3 && f.filter(":nth-child(4n+4)").addClass("ui-block-d");
            g > 4 && f.filter(":nth-child(5n+5)").addClass("ui-block-e")
        })
    }
})(jQuery);
(function (a, c, d) {
    var f = a("html");
    a("head");
    var g = a(c);
    a(c.document).trigger("mobileinit");
    if (a.mobile.gradeA()) {
        if (c.blackberry && !c.WebKitPoint || c.operamini && Object.prototype.toString.call(c.operamini) === "[object OperaMini]") a.mobile.ajaxEnabled = !1;
        f.addClass("ui-mobile ui-mobile-rendering");
        var h = a.mobile.loadingMessage ? a("<div class='ui-loader ui-body-a ui-corner-all'><span class='ui-icon ui-icon-loading spin'></span><h1>" + a.mobile.loadingMessage + "</h1></div>") : d;
        a.extend(a.mobile, {
            showPageLoadingMsg: function () {
                if (a.mobile.loadingMessage) {
                    var d = a("." + a.mobile.activeBtnClass).first();
                    h.appendTo(a.mobile.pageContainer).css({
                        top: a.support.scrollTop && a(c).scrollTop() + a(c).height() / 2 || d.length && d.offset().top || 100
                    })
                }
                f.addClass("ui-loading")
            },
            hidePageLoadingMsg: function () {
                f.removeClass("ui-loading")
            },
            pageLoading: function (c) {
                c ? a.mobile.hidePageLoadingMsg() : a.mobile.showPageLoadingMsg()
            },
            initializePage: function () {
                var c = a(":jqmData(role='page')");
                c.add(":jqmData(role='dialog')").each(function () {
                    var c = a(this);
                    c.jqmData("url") || c.attr("data-" + a.mobile.ns + "url", c.attr("id"))
                });
                a.mobile.firstPage = c.first();
                a.mobile.pageContainer = c.first().parent().addClass("ui-mobile-viewport");
                a.mobile.showPageLoadingMsg();
                !a.mobile.hashListeningEnabled || !a.mobile.path.stripHash(location.hash) ? a.mobile.changePage(a.mobile.firstPage, {
                    transition: "none",
                    reverse: !0,
                    changeHash: !1,
                    fromHashChange: !0
                }) : g.trigger("hashchange", [!0])
            }
        });
        a(function () {
            c.scrollTo(0, 1);
            a.mobile.defaultHomeScroll = !a.support.scrollTop || a(c).scrollTop() === 1 ? 0 : 1;
            a(a.mobile.initializePage);
            g.load(a.mobile.silentScroll)
        })
    }
})(jQuery, this);