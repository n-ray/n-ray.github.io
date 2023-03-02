! function(e, t) { "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? exports["answer.js"] = t() : e["answer.js"] = t() }("undefined" != typeof self ? self : this, function() {
    return function(e) {
        function t(r) { if (n[r]) return n[r].exports; var i = n[r] = { i: r, l: !1, exports: {} }; return e[r].call(i.exports, i, i.exports, t), i.l = !0, i.exports } var n = {}; return t.m = e, t.c = n, t.d = function(e, n, r) { t.o(e, n) || Object.defineProperty(e, n, { configurable: !1, enumerable: !0, get: r }) }, t.n = function(e) { var n = e && e.__esModule ? function() { return e.default } : function() { return e }; return t.d(n, "a", n), n }, t.o = function(e, t) { return Object.prototype.hasOwnProperty.call(e, t) }, t.p = "", t(t.s = 13) }([function(e, t, n) { "use strict";

        function r(e) { return "[object Array]" === E.call(e) }

        function i(e) { return "[object ArrayBuffer]" === E.call(e) }

        function o(e) { return "undefined" != typeof FormData && e instanceof FormData }

        function s(e) { return "undefined" != typeof ArrayBuffer && ArrayBuffer.isView ? ArrayBuffer.isView(e) : e && e.buffer && e.buffer instanceof ArrayBuffer }

        function a(e) { return "string" == typeof e }

        function u(e) { return "number" == typeof e }

        function c(e) { return void 0 === e }

        function f(e) { return null !== e && "object" === (void 0 === e ? "undefined" : T(e)) }

        function l(e) { return "[object Date]" === E.call(e) }

        function h(e) { return "[object File]" === E.call(e) }

        function p(e) { return "[object Blob]" === E.call(e) }

        function d(e) { return "[object Function]" === E.call(e) }

        function g(e) { return f(e) && d(e.pipe) }

        function w(e) { return "undefined" != typeof URLSearchParams && e instanceof URLSearchParams }

        function y(e) { return e.replace(/^\s*/, "").replace(/\s*$/, "") }

        function m() { return ("undefined" == typeof navigator || "ReactNative" !== navigator.product && "NativeScript" !== navigator.product && "NS" !== navigator.product) && ("undefined" != typeof window && "undefined" != typeof document) }

        function v(e, t) { if (null !== e && void 0 !== e)
                if ("object" !== (void 0 === e ? "undefined" : T(e)) && (e = [e]), r(e))
                    for (var n = 0, i = e.length; n < i; n++) t.call(null, e[n], n, e);
                else
                    for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && t.call(null, e[o], o, e) }

        function b() {
            function e(e, n) { "object" === T(t[n]) && "object" === (void 0 === e ? "undefined" : T(e)) ? t[n] = b(t[n], e) : t[n] = e } for (var t = {}, n = 0, r = arguments.length; n < r; n++) v(arguments[n], e); return t }

        function A() {
            function e(e, n) { "object" === T(t[n]) && "object" === (void 0 === e ? "undefined" : T(e)) ? t[n] = A(t[n], e) : "object" === (void 0 === e ? "undefined" : T(e)) ? t[n] = A({}, e) : t[n] = e } for (var t = {}, n = 0, r = arguments.length; n < r; n++) v(arguments[n], e); return t }

        function x(e, t, n) { return v(t, function(t, r) { e[r] = n && "function" == typeof t ? S(t, n) : t }), e } var T = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) { return typeof e } : function(e) { return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e },
            S = n(2),
            C = n(15),
            E = Object.prototype.toString;
        e.exports = { isArray: r, isArrayBuffer: i, isBuffer: C, isFormData: o, isArrayBufferView: s, isString: a, isNumber: u, isObject: f, isUndefined: c, isDate: l, isFile: h, isBlob: p, isFunction: d, isStream: g, isURLSearchParams: w, isStandardBrowserEnv: m, forEach: v, merge: b, deepMerge: A, extend: x, trim: y } }, function(e, t, n) { e.exports = n(14) }, function(e, t, n) { "use strict";
        e.exports = function(e, t) { return function() { for (var n = new Array(arguments.length), r = 0; r < n.length; r++) n[r] = arguments[r]; return e.apply(t, n) } } }, function(e, t, n) { "use strict";

        function r(e) { return encodeURIComponent(e).replace(/%40/gi, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]") } var i = n(0);
        e.exports = function(e, t, n) { if (!t) return e; var o; if (n) o = n(t);
            else if (i.isURLSearchParams(t)) o = t.toString();
            else { var s = [];
                i.forEach(t, function(e, t) { null !== e && void 0 !== e && (i.isArray(e) ? t += "[]" : e = [e], i.forEach(e, function(e) { i.isDate(e) ? e = e.toISOString() : i.isObject(e) && (e = JSON.stringify(e)), s.push(r(t) + "=" + r(e)) })) }), o = s.join("&") } if (o) { var a = e.indexOf("#"); - 1 !== a && (e = e.slice(0, a)), e += (-1 === e.indexOf("?") ? "?" : "&") + o } return e } }, function(e, t, n) { "use strict";
        e.exports = function(e) { return !(!e || !e.__CANCEL__) } }, function(e, t, n) { "use strict";
        (function(t) {
            function r(e, t) {!i.isUndefined(e) && i.isUndefined(e["Content-Type"]) && (e["Content-Type"] = t) } var i = n(0),
                o = n(21),
                s = { "Content-Type": "application/x-www-form-urlencoded" },
                a = { adapter: function() { var e; return void 0 !== t && "[object process]" === Object.prototype.toString.call(t) ? e = n(6) : "undefined" != typeof XMLHttpRequest && (e = n(6)), e }(), transformRequest: [function(e, t) { return o(t, "Accept"), o(t, "Content-Type"), i.isFormData(e) || i.isArrayBuffer(e) || i.isBuffer(e) || i.isStream(e) || i.isFile(e) || i.isBlob(e) ? e : i.isArrayBufferView(e) ? e.buffer : i.isURLSearchParams(e) ? (r(t, "application/x-www-form-urlencoded;charset=utf-8"), e.toString()) : i.isObject(e) ? (r(t, "application/json;charset=utf-8"), JSON.stringify(e)) : e }], transformResponse: [function(e) { if ("string" == typeof e) try { e = JSON.parse(e) } catch (e) {}
                        return e }], timeout: 0, xsrfCookieName: "XSRF-TOKEN", xsrfHeaderName: "X-XSRF-TOKEN", maxContentLength: -1, validateStatus: function(e) { return e >= 200 && e < 300 } };
            a.headers = { common: { Accept: "application/json, text/plain, */*" } }, i.forEach(["delete", "get", "head"], function(e) { a.headers[e] = {} }), i.forEach(["post", "put", "patch"], function(e) { a.headers[e] = i.merge(s) }), e.exports = a }).call(t, n(20)) }, function(e, t, n) { "use strict"; var r = n(0),
            i = n(22),
            o = n(3),
            s = n(24),
            a = n(25),
            u = n(7);
        e.exports = function(e) { return new Promise(function(t, c) { var f = e.data,
                    l = e.headers;
                r.isFormData(f) && delete l["Content-Type"]; var h = new XMLHttpRequest; if (e.auth) { var p = e.auth.username || "",
                        d = e.auth.password || "";
                    l.Authorization = "Basic " + btoa(p + ":" + d) } if (h.open(e.method.toUpperCase(), o(e.url, e.params, e.paramsSerializer), !0), h.timeout = e.timeout, h.onreadystatechange = function() { if (h && 4 === h.readyState && (0 !== h.status || h.responseURL && 0 === h.responseURL.indexOf("file:"))) { var n = "getAllResponseHeaders" in h ? s(h.getAllResponseHeaders()) : null,
                                r = e.responseType && "text" !== e.responseType ? h.response : h.responseText,
                                o = { data: r, status: h.status, statusText: h.statusText, headers: n, config: e, request: h };
                            i(t, c, o), h = null } }, h.onabort = function() { h && (c(u("Request aborted", e, "ECONNABORTED", h)), h = null) }, h.onerror = function() { c(u("Network Error", e, null, h)), h = null }, h.ontimeout = function() { c(u("timeout of " + e.timeout + "ms exceeded", e, "ECONNABORTED", h)), h = null }, r.isStandardBrowserEnv()) { var g = n(26),
                        w = (e.withCredentials || a(e.url)) && e.xsrfCookieName ? g.read(e.xsrfCookieName) : void 0;
                    w && (l[e.xsrfHeaderName] = w) } if ("setRequestHeader" in h && r.forEach(l, function(e, t) { void 0 === f && "content-type" === t.toLowerCase() ? delete l[t] : h.setRequestHeader(t, e) }), e.withCredentials && (h.withCredentials = !0), e.responseType) try { h.responseType = e.responseType } catch (t) { if ("json" !== e.responseType) throw t }
                "function" == typeof e.onDownloadProgress && h.addEventListener("progress", e.onDownloadProgress), "function" == typeof e.onUploadProgress && h.upload && h.upload.addEventListener("progress", e.onUploadProgress), e.cancelToken && e.cancelToken.promise.then(function(e) { h && (h.abort(), c(e), h = null) }), void 0 === f && (f = null), h.send(f) }) } }, function(e, t, n) { "use strict"; var r = n(23);
        e.exports = function(e, t, n, i, o) { var s = new Error(e); return r(s, t, n, i, o) } }, function(e, t, n) { "use strict"; var r = n(0);
        e.exports = function(e, t) { t = t || {}; var n = {}; return r.forEach(["url", "method", "params", "data"], function(e) { void 0 !== t[e] && (n[e] = t[e]) }), r.forEach(["headers", "auth", "proxy"], function(i) { r.isObject(t[i]) ? n[i] = r.deepMerge(e[i], t[i]) : void 0 !== t[i] ? n[i] = t[i] : r.isObject(e[i]) ? n[i] = r.deepMerge(e[i]) : void 0 !== e[i] && (n[i] = e[i]) }), r.forEach(["baseURL", "transformRequest", "transformResponse", "paramsSerializer", "timeout", "withCredentials", "adapter", "responseType", "xsrfCookieName", "xsrfHeaderName", "onUploadProgress", "onDownloadProgress", "maxContentLength", "validateStatus", "maxRedirects", "httpAgent", "httpsAgent", "cancelToken", "socketPath"], function(r) { void 0 !== t[r] ? n[r] = t[r] : void 0 !== e[r] && (n[r] = e[r]) }), n } }, function(e, t, n) { "use strict";

        function r(e) { this.message = e }
        r.prototype.toString = function() { return "Cancel" + (this.message ? ": " + this.message : "") }, r.prototype.__CANCEL__ = !0, e.exports = r }, function(e, t, n) {! function() { var t = n(31),
                r = n(11).utf8,
                i = n(32),
                o = n(11).bin,
                s = function e(n, s) { n.constructor == String ? n = s && "binary" === s.encoding ? o.stringToBytes(n) : r.stringToBytes(n) : i(n) ? n = Array.prototype.slice.call(n, 0) : Array.isArray(n) || (n = n.toString()); for (var a = t.bytesToWords(n), u = 8 * n.length, c = 1732584193, f = -271733879, l = -1732584194, h = 271733878, p = 0; p < a.length; p++) a[p] = 16711935 & (a[p] << 8 | a[p] >>> 24) | 4278255360 & (a[p] << 24 | a[p] >>> 8);
                    a[u >>> 5] |= 128 << u % 32, a[14 + (u + 64 >>> 9 << 4)] = u; for (var d = e._ff, g = e._gg, w = e._hh, y = e._ii, p = 0; p < a.length; p += 16) { var m = c,
                            v = f,
                            b = l,
                            A = h;
                        c = d(c, f, l, h, a[p + 0], 7, -680876936), h = d(h, c, f, l, a[p + 1], 12, -389564586), l = d(l, h, c, f, a[p + 2], 17, 606105819), f = d(f, l, h, c, a[p + 3], 22, -1044525330), c = d(c, f, l, h, a[p + 4], 7, -176418897), h = d(h, c, f, l, a[p + 5], 12, 1200080426), l = d(l, h, c, f, a[p + 6], 17, -1473231341), f = d(f, l, h, c, a[p + 7], 22, -45705983), c = d(c, f, l, h, a[p + 8], 7, 1770035416), h = d(h, c, f, l, a[p + 9], 12, -1958414417), l = d(l, h, c, f, a[p + 10], 17, -42063), f = d(f, l, h, c, a[p + 11], 22, -1990404162), c = d(c, f, l, h, a[p + 12], 7, 1804603682), h = d(h, c, f, l, a[p + 13], 12, -40341101), l = d(l, h, c, f, a[p + 14], 17, -1502002290), f = d(f, l, h, c, a[p + 15], 22, 1236535329), c = g(c, f, l, h, a[p + 1], 5, -165796510), h = g(h, c, f, l, a[p + 6], 9, -1069501632), l = g(l, h, c, f, a[p + 11], 14, 643717713), f = g(f, l, h, c, a[p + 0], 20, -373897302), c = g(c, f, l, h, a[p + 5], 5, -701558691), h = g(h, c, f, l, a[p + 10], 9, 38016083), l = g(l, h, c, f, a[p + 15], 14, -660478335), f = g(f, l, h, c, a[p + 4], 20, -405537848), c = g(c, f, l, h, a[p + 9], 5, 568446438), h = g(h, c, f, l, a[p + 14], 9, -1019803690), l = g(l, h, c, f, a[p + 3], 14, -187363961), f = g(f, l, h, c, a[p + 8], 20, 1163531501), c = g(c, f, l, h, a[p + 13], 5, -1444681467), h = g(h, c, f, l, a[p + 2], 9, -51403784), l = g(l, h, c, f, a[p + 7], 14, 1735328473), f = g(f, l, h, c, a[p + 12], 20, -1926607734), c = w(c, f, l, h, a[p + 5], 4, -378558), h = w(h, c, f, l, a[p + 8], 11, -2022574463), l = w(l, h, c, f, a[p + 11], 16, 1839030562), f = w(f, l, h, c, a[p + 14], 23, -35309556), c = w(c, f, l, h, a[p + 1], 4, -1530992060), h = w(h, c, f, l, a[p + 4], 11, 1272893353), l = w(l, h, c, f, a[p + 7], 16, -155497632), f = w(f, l, h, c, a[p + 10], 23, -1094730640), c = w(c, f, l, h, a[p + 13], 4, 681279174), h = w(h, c, f, l, a[p + 0], 11, -358537222), l = w(l, h, c, f, a[p + 3], 16, -722521979), f = w(f, l, h, c, a[p + 6], 23, 76029189), c = w(c, f, l, h, a[p + 9], 4, -640364487), h = w(h, c, f, l, a[p + 12], 11, -421815835), l = w(l, h, c, f, a[p + 15], 16, 530742520), f = w(f, l, h, c, a[p + 2], 23, -995338651), c = y(c, f, l, h, a[p + 0], 6, -198630844), h = y(h, c, f, l, a[p + 7], 10, 1126891415), l = y(l, h, c, f, a[p + 14], 15, -1416354905), f = y(f, l, h, c, a[p + 5], 21, -57434055), c = y(c, f, l, h, a[p + 12], 6, 1700485571), h = y(h, c, f, l, a[p + 3], 10, -1894986606), l = y(l, h, c, f, a[p + 10], 15, -1051523), f = y(f, l, h, c, a[p + 1], 21, -2054922799), c = y(c, f, l, h, a[p + 8], 6, 1873313359), h = y(h, c, f, l, a[p + 15], 10, -30611744), l = y(l, h, c, f, a[p + 6], 15, -1560198380), f = y(f, l, h, c, a[p + 13], 21, 1309151649), c = y(c, f, l, h, a[p + 4], 6, -145523070), h = y(h, c, f, l, a[p + 11], 10, -1120210379), l = y(l, h, c, f, a[p + 2], 15, 718787259), f = y(f, l, h, c, a[p + 9], 21, -343485551), c = c + m >>> 0, f = f + v >>> 0, l = l + b >>> 0, h = h + A >>> 0 } return t.endian([c, f, l, h]) };
            s._ff = function(e, t, n, r, i, o, s) { var a = e + (t & n | ~t & r) + (i >>> 0) + s; return (a << o | a >>> 32 - o) + t }, s._gg = function(e, t, n, r, i, o, s) { var a = e + (t & r | n & ~r) + (i >>> 0) + s; return (a << o | a >>> 32 - o) + t }, s._hh = function(e, t, n, r, i, o, s) { var a = e + (t ^ n ^ r) + (i >>> 0) + s; return (a << o | a >>> 32 - o) + t }, s._ii = function(e, t, n, r, i, o, s) { var a = e + (n ^ (t | ~r)) + (i >>> 0) + s; return (a << o | a >>> 32 - o) + t }, s._blocksize = 16, s._digestsize = 16, e.exports = function(e, n) { if (void 0 === e || null === e) throw new Error("Illegal argument " + e); var r = t.wordsToBytes(s(e, n)); return n && n.asBytes ? r : n && n.asString ? o.bytesToString(r) : t.bytesToHex(r) } }() }, function(e, t) { var n = { utf8: { stringToBytes: function(e) { return n.bin.stringToBytes(unescape(encodeURIComponent(e))) }, bytesToString: function(e) { return decodeURIComponent(escape(n.bin.bytesToString(e))) } }, bin: { stringToBytes: function(e) { for (var t = [], n = 0; n < e.length; n++) t.push(255 & e.charCodeAt(n)); return t }, bytesToString: function(e) { for (var t = [], n = 0; n < e.length; n++) t.push(String.fromCharCode(e[n])); return t.join("") } } };
        e.exports = n }, function(e, t, n) { "use strict";

        function r(e) { try { return decodeURIComponent(e.replace(/\+/g, " ")) } catch (e) { return null } }

        function i(e) { for (var t, n = /([^=?&]+)=?([^&]*)/g, i = {}; t = n.exec(e);) { var o = r(t[1]),
                    s = r(t[2]);
                null === o || null === s || o in i || (i[o] = s) } return i }

        function o(e, t) { t = t || ""; var n, r, i = []; "string" != typeof t && (t = "?"); for (r in e)
                if (a.call(e, r)) { if (n = e[r], n || null !== n && n !== s && !isNaN(n) || (n = ""), r = encodeURIComponent(r), n = encodeURIComponent(n), null === r || null === n) continue;
                    i.push(r + "=" + n) }
            return i.length ? t + i.join("&") : "" } var s, a = Object.prototype.hasOwnProperty;
        t.stringify = o, t.parse = i }, function(e, t, n) { "use strict";

        function r(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }

        function i(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }

        function o(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }

        function s(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }

        function a(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }

        function u(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }

        function c(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }

        function f(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }

        function l(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }
        Object.defineProperty(t, "__esModule", { value: !0 }); var h = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) { return typeof e } : function(e) { return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e },
            p = function() {
                function e(e, t) { for (var n = 0; n < t.length; n++) { var r = t[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r) } } return function(t, n, r) { return n && e(t.prototype, n), r && e(t, r), t } }(),
            d = function() {
                function e(t) { var n = this; if (r(this, e), this.interface = !window.question || window.question.interface, this.interface) return console.log(t), t;
                    console.log(t); var i = 1 === t.isRight.length ? this.isRightFilter(t.isRight[0]) : t.isRight.map(function(e) { return n.isRightFilter(e) }); return { useranswer: 1 === t.userAnswerContent.length ? t.userAnswerContent[0].text : t.userAnswerContent.map(function(e) { return e.text }).toString(), answer: 1 === t.rightAnswerContent.length ? t.rightAnswerContent[0].text : t.rightAnswerContent.map(function(e) { return e.text }).toString(), times: t.times.toString(), id: t.id, isright: "object" === (void 0 === i ? "undefined" : h(i)) ? i.indexOf(2) > -1 ? 2 : 1 : i, type: t.type, rightnum: t.rightnum, wrongnum: t.wrongnum } } return p(e, [{ key: "isRightFilter", value: function(e) { var t = 2; return 0 === e || 2 === e ? t = 2 : 1 === e && (t = 1), t } }]), e }(),
            g = d,
            w = function e(t) { var n = this;
                i(this, e), this.userAnswer = t.userAnswer, this.rightAnswer = t.rightAnswer, this.label = t.label, this.source = t.source, this.answerArray = [], this.rightAnswer.forEach(function(e, t) { var r = [],
                        i = [],
                        o = [],
                        s = [],
                        a = 0,
                        u = 0,
                        c = n.userAnswer[e.id].length;
                    i = e.rightAnswer, 0 === n.label ? c > 0 ? (r = n.userAnswer[e.id].slice(0, 1), o = n.userAnswer[e.id].slice(n.userAnswer[e.id].length - 1, n.userAnswer[e.id].length)) : (r.push({ id: 0, text: "" }), o.push({ id: 0, text: "" })) : c > 0 ? (r = n.userAnswer[e.id].slice(c - 1, c), o = n.userAnswer[e.id].slice(c - 1, c)) : (r.push({ id: 0, text: "" }), o.push({ id: 0, text: "" })), JSON.stringify(i) === JSON.stringify(r) ? (s = [1], a = 1) : (s = [0], u = 1); var f = { id: e.id, userAnswerContent: r, rightAnswerContent: i, isRight: s, rightnum: a, wrongnum: u, type: n.rightAnswer[0].type, times: [c] };
                    n.answerArray.push(new g(f)), r = [], i = [], o = [] }), t.callback && t.callback(this.answerArray) },
            y = w,
            m = function() {
                function e(e, t) { for (var n = 0; n < t.length; n++) { var r = t[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r) } } return function(t, n, r) { return n && e(t.prototype, n), r && e(t, r), t } }(),
            v = function() {
                function e(t) { var n = this;
                    o(this, e), Array.prototype.noEmpty = function() { var e = []; return this.map(function(t, n) { "" !== t && void 0 != t && e.push(t) }), e }, this.userAnswer = t.userAnswer, this.rightAnswer = t.rightAnswer, this.label = t.label, this.source = t.source, this.answerArray = [], this.rightAnswer.forEach(function(e, r) { var i = [],
                            o = [],
                            s = [],
                            a = [],
                            u = 0,
                            c = 0,
                            f = n.userAnswer[e.id].length; if (o = e.rightAnswer.sort(function(e, t) { return e.id - t.id }), 0 === t.label) 0 === f ? (i.push({ id: 0, text: "" }), s.push({ id: 0, text: "" })) : (i = f <= o.length ? n.userAnswer[e.id] : n.userAnswer[e.id].slice(0, o.length), s = n.filterUserAnswer(n.userAnswer[e.id]).filterUserAnswer);
                        else { var l = n.filterUserAnswer(n.userAnswer[e.id]);
                            0 === f ? (s.push({ id: 0, text: "" }), s = [{ id: 0, text: "" }]) : (i = l.filterUserAnswer, s = l.filterUserAnswer) } if (i.length > o.length) c = o.length, a = [0];
                        else if (i.length === o.length) JSON.stringify(i.sort(function(e, t) { return e.id - t.id })) === JSON.stringify(o.sort(function(e, t) { return e.id - t.id })) ? (u = o.length, a = [1]) : (c = o.length, a = [0]);
                        else if (i.length < o.length) { var h = [];
                            i.forEach(function(e, t) { e.id <= o[o.length - 1].id && o[e.id].id === e.id && o[e.id].text === e.text ? h.push(1) : h.push(0) }), h.indexOf(0) > -1 ? (a = [0], c = o.length) : 0 === h.length ? (a = [0], c = o.length) : (a = [2], u = h.filter(function(e) { return 1 === e }).length, c = o.length - u) } var p = { id: e.id, userAnswerContent: [{ id: 0, text: i.map(function(e) { return e.text }).noEmpty().toString() }], rightAnswerContent: [{ id: 0, text: o.map(function(e) { return e.text }).toString() }], isRight: a, rightnum: u, wrongnum: c, type: n.rightAnswer[0].type, times: [f] };
                        n.answerArray.push(new g(p)) }), t.callback && t.callback(this.answerArray) } return m(e, [{ key: "filterUserAnswer", value: function(e) { var t = []; return e.forEach(function(e) { t[e.id] = e }), { filterUserAnswer: t.filter(function(e) { return "" !== e.text }).noEmpty() } } }]), e }(),
            b = v,
            A = function() {
                function e(e, t) { for (var n = 0; n < t.length; n++) { var r = t[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r) } } return function(t, n, r) { return n && e(t.prototype, n), r && e(t, r), t } }(),
            x = function() {
                function e(t) { var n = this;
                    s(this, e), this.userAnswer = t.userAnswer, this.rightAnswer = t.rightAnswer, this.source = t.source, this.answerArray = [], this.rightAnswer.forEach(function(e, t) { var r = [],
                            i = [],
                            o = [],
                            s = 0,
                            a = 0,
                            u = [];
                        i = e.rightAnswer.sort(function(e, t) { return e.id - t.id }), i.forEach(function(e, t) { r.push({ id: t, text: "" }), u.push(0) }), n.userAnswer[e.id].forEach(function(e) { r[e.id] = e, u[e.id]++ }), i.forEach(function(e, t) { n.regText(r[t].text) === e.text && r[t].id === e.id ? (s < i.length && s++, o.push(1)) : o.push(0) }), a = i.length - s; var c = { id: e.id, userAnswerContent: r, rightAnswerContent: i, isRight: o, rightnum: s, wrongnum: a, type: n.rightAnswer[0].type, times: u };
                        n.answerArray.push(new g(c)) }), t.callback && t.callback(this.answerArray) } return A(e, [{ key: "regText", value: function(e) { return e.replace(/^\s+|\s+$/g, "").replace(/\s+/g, " ").replace(/\$+/g, "") } }]), e }(),
            T = x,
            S = function e(t) { var n = this;
                a(this, e), this.rightAnswer = t.rightAnswer, this.userAnswer = t.userAnswer, this.answerArray = [], this.source = t.source, this.rightAnswer.forEach(function(e, t) { var r = { id: e.id, userAnswerContent: [{ id: 0, text: "" }], rightAnswerContent: [{ id: 0, text: "" }], isRight: [0 === n.userAnswer[e.id].length ? 0 : 1], rightnum: 0 === n.userAnswer[e.id].length ? 0 : 1, wrongnum: 0 === n.userAnswer[e.id].length ? 1 : 0, type: 0, times: [1] };
                    n.answerArray.push(new g(r)) }), t.callback && t.callback(this.answerArray) },
            C = S,
            E = function e(t) { u(this, e), receiveFromCourseware(t), console.log(t) },
            k = E,
            I = function e(t) { c(this, e), window.transmitToCourseware = function(e) { t(e) } },
            j = I,
            O = n(1),
            R = n.n(O),
            N = n(10),
            D = n.n(N),
            B = n(12),
            L = n.n(B),
            U = function() {
                function e(e, t) { for (var n = 0; n < t.length; n++) { var r = t[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r) } } return function(t, n, r) { return n && e(t.prototype, n), r && e(t, r), t } }(),
            q = function() {
                function e(t) { f(this, e), this.$time = null, this.$Appid = 1001836, this.$appkey = "1c22c1763330c926eef965e249ae4f44", this.errorArr = [], this.newArrProto = [], this.liveId = t.liveId, this.userId = t.userId } return U(e, [{ key: "init", value: function(e) { this.$time = (new Date).getTime(); var t = L.a.stringify({ content: JSON.stringify({ liveId: this.liveId, userId: this.userId, url: window.location.href, device: navigator.userAgent.toLowerCase(), data: e }), appid: this.$Appid, sign: D()(this.$Appid + "&" + this.$time + this.$appkey), clits: this.$time });
                        R.a.post("https://dj.xesimg.com/a.gif", t).then(function(e) { console.log("课件加载日志上报成功") }).catch(function(e) { console.log("课件加载日志上报失败") }) } }, { key: "collectLog", value: function() { window.addEventListener("unhandledrejection", function(e) { this.errorArr.unshift(this.dataAssembling({ msg: e.reason, type: "promiseERROR" })) }), window.onerror = function(e, t, n) { this.errorArr.unshift(this.dataAssembling({ msg: e, url: t, line: n, type: "runningERROR" })) }; var e = window.console.error;
                        window.console.error = function() { this.errorArr.unshift(this.dataAssembling({ msg: arguments[0], type: "consoleERROR" })), e && e.apply(window, arguments) } } }, { key: "submitDataLog", value: function(e) { this.$time = (new Date).getTime(); var t = L.a.stringify({ content: JSON.stringify({ liveId: this.liveId, userId: this.userId, url: window.location.href, device: navigator.userAgent.toLowerCase(), answerData: e }), appid: this.$Appid, sign: D()(this.$Appid + "&" + this.$time + this.$appkey), clits: this.$time });
                        R.a.post("https://dj.xesimg.com/b.gif", t).then(function(e) { console.log("答题数据日志上报成功") }).catch(function(e) { console.log("答题数据日志上报失败") }) } }, { key: "xlog", value: function(e) { this.$time = (new Date).getTime(); var t = L.a.stringify({ content: JSON.stringify({ liveId: this.liveId, userId: this.userId, url: window.location.href, device: navigator.userAgent.toLowerCase(), data: e }), appid: this.$Appid, sign: D()(this.$Appid + "&" + this.$time + this.$appkey), clits: this.$time });
                        R.a.post("https://dj.xesimg.com/b.gif", t).then(function(e) { console.log("日志上报成功") }).catch(function(e) { console.log("日志上报失败") }) } }]), e }();
        window.reportLog = q; var P = q,
            $ = n(33),
            _ = n.n($),
            F = function() {
                function e(e, t) { for (var n = 0; n < t.length; n++) { var r = t[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r) } } return function(t, n, r) { return n && e(t.prototype, n), r && e(t, r), t } }();
        console.log("%cAnswerJs-version:" + _.a.version, "color:deeppink;font-size:20px"); var J = function() {
            function e() { var t = this;
                l(this, e), this.label = 0, this.id = 0, this.type = 0, this.source = 0, this.totalQuestion = 1, this.currentTotalOption = 1, this.userAnswer = [], this.rightAnswer = [], this.answerArray = [], this.liveId = null, this.userId = null, new j(function(e) { if ("lookAnswerStatus" === e.type) { new k({ type: "doStatusComplete" }) } else if ("getAnswer" === e.type || "resubmitAnswer" === e.type) { t.submitAnswer(); var n = new P({ liveId: t.liveId, userId: t.userId }),
                            r = { type: "getAnswer", data: t.answerArray, info: "被强制收卷" };
                        t.liveId & t.userId && n.init(r) } else if ("answerResult" === e.type) try { window.store && (window.store.state.goldnum = e.data.goldnum) } catch (e) { console.log(e) } else if ("courseInfo" == e.type) { console.log(e.data, "场次id&学生id"), e.data.liveId ? t.liveId = e.data.liveId : t.liveId = null, e.data.userId ? t.userId = e.data.userId : t.userId = null; var i = new P({ liveId: t.liveId, userId: t.userId }),
                            o = { type: "loadComplete", info: "加载完成" };
                        t.liveId & t.userId && i.init(o) } }) } return F(e, [{ key: "loading", value: function() { var e = { type: "loadComplete" };!window.question || window.question.interface ? console.log("新接口") : (e = { type: "onload" }, console.log("旧接口")), new k(e) } }, { key: "log", value: function(e) { new P({ liveId: this.liveId, userId: this.userId }).xlog(e) } }, { key: "initLabel", value: function(e) { if ("Number" !== this.detectionDataType(e)) throw "label is not a number";
                    this.label = e, console.log(this.label, "answer.js") } }, { key: "detectionDataType", value: function(e) { var t = Object.prototype.toString.call(e); return t = t.replace("[object ", "").replace("]", "") } }, { key: "questionInfo", value: function(e) { if ("Number" !== this.detectionDataType(e.id)) throw "questionData.id is not number"; if ("Number" !== this.detectionDataType(e.totalQuestion)) throw "questionData.totalQuestion is not number"; if ("Number" !== this.detectionDataType(e.currentTotalOption)) throw "questionData.currentTotalOption is not number";
                    this.id = e.id, this.totalQuestion = e.totalQuestion, this.currentTotalOption = e.currentTotalOption; var t = { currentQuestion: this.id, currentTotalOption: this.currentTotalOption, totalQuestion: this.totalQuestion };
                    new k({ type: "questionStatus", data: t }) } }, { key: "initRightAnswer", value: function(e) { if ("Object" !== this.detectionDataType(e)) throw "rightAnswerData is not object"; if (!e.hasOwnProperty("id")) throw "rightAnswerData.id is undefined"; if ("Number" !== this.detectionDataType(e.id)) throw "rightAnswerData.id is not Number"; if (!e.hasOwnProperty("type")) throw "rightAnswerData.type is undefined"; if ("Number" !== this.detectionDataType(e.type)) throw "rightAnswerData.type is not Number"; if (!e.hasOwnProperty("rightAnswer")) throw "rightAnswerData is undefined"; if ("Array" !== this.detectionDataType(e.rightAnswer)) throw "rightAnswerData is not Array";
                    this.type = e.type, this.rightAnswer[e.id] = e, this.userAnswer[e.id] = [] } }, { key: "init", value: function(e) { if (!e) throw "userData is undefined"; if ("Object" !== this.detectionDataType(e)) throw "userData is not object"; if ("Number" !== this.detectionDataType(e.id)) throw "questionData.id is not number"; if ("String" !== this.detectionDataType(e.text)) throw "questionData.text is not string";
                    this.userAnswer[this.id].push(e) } }, { key: "dataPacking", value: function() { var e = this; switch (this.type) {
                        case 0:
                            0 === this.label || 1 === this.label ? new y({ userAnswer: this.userAnswer, rightAnswer: this.rightAnswer, label: this.label, source: this.source, callback: function(t) { e.answerArray = t } }) : 2 === this.label && new C({ userAnswer: this.userAnswer, rightAnswer: this.rightAnswer, source: this.source, callback: function(t) { e.answerArray = t } }); break;
                        case 1:
                            new b({ userAnswer: this.userAnswer, rightAnswer: this.rightAnswer, label: this.label, source: this.source, callback: function(t) { e.answerArray = t } }); break;
                        case 2:
                            new T({ userAnswer: this.userAnswer, rightAnswer: this.rightAnswer, source: this.source, callback: function(t) { e.answerArray = t } }) } } }, { key: "submitAnswer", value: function(e) { this.dataPacking(); var t = { type: "answer", data: this.answerArray };!1 === (!window.question || window.question.interface) && (t.type = "submitAnswer"), new k(t); try { PIXI.sound.stopAll(), app.stop() } catch (e) { console.log(e) } var n = new P({ liveId: this.liveId, userId: this.userId });
                    this.liveId & this.userId ? n.submitDataLog(this.answerArray) : console.log("开发环境不上报日志") } }]), e }();
        window.AnswerInfo = J;
        t.default = J }, function(e, t, n) { "use strict";

        function r(e) { var t = new s(e),
                n = o(s.prototype.request, t); return i.extend(n, s.prototype, t), i.extend(n, t), n } var i = n(0),
            o = n(2),
            s = n(16),
            a = n(8),
            u = n(5),
            c = r(u);
        c.Axios = s, c.create = function(e) { return r(a(c.defaults, e)) }, c.Cancel = n(9), c.CancelToken = n(29), c.isCancel = n(4), c.all = function(e) { return Promise.all(e) }, c.spread = n(30), e.exports = c, e.exports.default = c }, function(e, t) {
        /*!
         * Determine if an object is a Buffer
         *
         * @author   Feross Aboukhadijeh <https://feross.org>
         * @license  MIT
         */
        e.exports = function(e) { return null != e && null != e.constructor && "function" == typeof e.constructor.isBuffer && e.constructor.isBuffer(e) }
    }, function(e, t, n) { "use strict";

        function r(e) { this.defaults = e, this.interceptors = { request: new s, response: new s } } var i = n(0),
            o = n(3),
            s = n(17),
            a = n(18),
            u = n(8);
        r.prototype.request = function(e) { "string" == typeof e ? (e = arguments[1] || {}, e.url = arguments[0]) : e = e || {}, e = u(this.defaults, e), e.method = e.method ? e.method.toLowerCase() : "get"; var t = [a, void 0],
                n = Promise.resolve(e); for (this.interceptors.request.forEach(function(e) { t.unshift(e.fulfilled, e.rejected) }), this.interceptors.response.forEach(function(e) { t.push(e.fulfilled, e.rejected) }); t.length;) n = n.then(t.shift(), t.shift()); return n }, r.prototype.getUri = function(e) { return e = u(this.defaults, e), o(e.url, e.params, e.paramsSerializer).replace(/^\?/, "") }, i.forEach(["delete", "get", "head", "options"], function(e) { r.prototype[e] = function(t, n) { return this.request(i.merge(n || {}, { method: e, url: t })) } }), i.forEach(["post", "put", "patch"], function(e) { r.prototype[e] = function(t, n, r) { return this.request(i.merge(r || {}, { method: e, url: t, data: n })) } }), e.exports = r }, function(e, t, n) { "use strict";

        function r() { this.handlers = [] } var i = n(0);
        r.prototype.use = function(e, t) { return this.handlers.push({ fulfilled: e, rejected: t }), this.handlers.length - 1 }, r.prototype.eject = function(e) { this.handlers[e] && (this.handlers[e] = null) }, r.prototype.forEach = function(e) { i.forEach(this.handlers, function(t) { null !== t && e(t) }) }, e.exports = r }, function(e, t, n) { "use strict";

        function r(e) { e.cancelToken && e.cancelToken.throwIfRequested() } var i = n(0),
            o = n(19),
            s = n(4),
            a = n(5),
            u = n(27),
            c = n(28);
        e.exports = function(e) { return r(e), e.baseURL && !u(e.url) && (e.url = c(e.baseURL, e.url)), e.headers = e.headers || {}, e.data = o(e.data, e.headers, e.transformRequest), e.headers = i.merge(e.headers.common || {}, e.headers[e.method] || {}, e.headers || {}), i.forEach(["delete", "get", "head", "post", "put", "patch", "common"], function(t) { delete e.headers[t] }), (e.adapter || a.adapter)(e).then(function(t) { return r(e), t.data = o(t.data, t.headers, e.transformResponse), t }, function(t) { return s(t) || (r(e), t && t.response && (t.response.data = o(t.response.data, t.response.headers, e.transformResponse))), Promise.reject(t) }) } }, function(e, t, n) { "use strict"; var r = n(0);
        e.exports = function(e, t, n) { return r.forEach(n, function(n) { e = n(e, t) }), e } }, function(e, t) {
        function n() { throw new Error("setTimeout has not been defined") }

        function r() { throw new Error("clearTimeout has not been defined") }

        function i(e) { if (f === setTimeout) return setTimeout(e, 0); if ((f === n || !f) && setTimeout) return f = setTimeout, setTimeout(e, 0); try { return f(e, 0) } catch (t) { try { return f.call(null, e, 0) } catch (t) { return f.call(this, e, 0) } } }

        function o(e) { if (l === clearTimeout) return clearTimeout(e); if ((l === r || !l) && clearTimeout) return l = clearTimeout, clearTimeout(e); try { return l(e) } catch (t) { try { return l.call(null, e) } catch (t) { return l.call(this, e) } } }

        function s() { g && p && (g = !1, p.length ? d = p.concat(d) : w = -1, d.length && a()) }

        function a() { if (!g) { var e = i(s);
                g = !0; for (var t = d.length; t;) { for (p = d, d = []; ++w < t;) p && p[w].run();
                    w = -1, t = d.length }
                p = null, g = !1, o(e) } }

        function u(e, t) { this.fun = e, this.array = t }

        function c() {} var f, l, h = e.exports = {};! function() { try { f = "function" == typeof setTimeout ? setTimeout : n } catch (e) { f = n } try { l = "function" == typeof clearTimeout ? clearTimeout : r } catch (e) { l = r } }(); var p, d = [],
            g = !1,
            w = -1;
        h.nextTick = function(e) { var t = new Array(arguments.length - 1); if (arguments.length > 1)
                for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
            d.push(new u(e, t)), 1 !== d.length || g || i(a) }, u.prototype.run = function() { this.fun.apply(null, this.array) }, h.title = "browser", h.browser = !0, h.env = {}, h.argv = [], h.version = "", h.versions = {}, h.on = c, h.addListener = c, h.once = c, h.off = c, h.removeListener = c, h.removeAllListeners = c, h.emit = c, h.prependListener = c, h.prependOnceListener = c, h.listeners = function(e) { return [] }, h.binding = function(e) { throw new Error("process.binding is not supported") }, h.cwd = function() { return "/" }, h.chdir = function(e) { throw new Error("process.chdir is not supported") }, h.umask = function() { return 0 } }, function(e, t, n) { "use strict"; var r = n(0);
        e.exports = function(e, t) { r.forEach(e, function(n, r) { r !== t && r.toUpperCase() === t.toUpperCase() && (e[t] = n, delete e[r]) }) } }, function(e, t, n) { "use strict"; var r = n(7);
        e.exports = function(e, t, n) { var i = n.config.validateStatus;!i || i(n.status) ? e(n) : t(r("Request failed with status code " + n.status, n.config, null, n.request, n)) } }, function(e, t, n) { "use strict";
        e.exports = function(e, t, n, r, i) { return e.config = t, n && (e.code = n), e.request = r, e.response = i, e.isAxiosError = !0, e.toJSON = function() { return { message: this.message, name: this.name, description: this.description, number: this.number, fileName: this.fileName, lineNumber: this.lineNumber, columnNumber: this.columnNumber, stack: this.stack, config: this.config, code: this.code } }, e } }, function(e, t, n) { "use strict"; var r = n(0),
            i = ["age", "authorization", "content-length", "content-type", "etag", "expires", "from", "host", "if-modified-since", "if-unmodified-since", "last-modified", "location", "max-forwards", "proxy-authorization", "referer", "retry-after", "user-agent"];
        e.exports = function(e) { var t, n, o, s = {}; return e ? (r.forEach(e.split("\n"), function(e) { if (o = e.indexOf(":"), t = r.trim(e.substr(0, o)).toLowerCase(), n = r.trim(e.substr(o + 1)), t) { if (s[t] && i.indexOf(t) >= 0) return;
                    s[t] = "set-cookie" === t ? (s[t] ? s[t] : []).concat([n]) : s[t] ? s[t] + ", " + n : n } }), s) : s } }, function(e, t, n) { "use strict"; var r = n(0);
        e.exports = r.isStandardBrowserEnv() ? function() {
            function e(e) { var t = e; return n && (i.setAttribute("href", t), t = i.href), i.setAttribute("href", t), { href: i.href, protocol: i.protocol ? i.protocol.replace(/:$/, "") : "", host: i.host, search: i.search ? i.search.replace(/^\?/, "") : "", hash: i.hash ? i.hash.replace(/^#/, "") : "", hostname: i.hostname, port: i.port, pathname: "/" === i.pathname.charAt(0) ? i.pathname : "/" + i.pathname } } var t, n = /(msie|trident)/i.test(navigator.userAgent),
                i = document.createElement("a"); return t = e(window.location.href),
                function(n) { var i = r.isString(n) ? e(n) : n; return i.protocol === t.protocol && i.host === t.host } }() : function() { return function() { return !0 } }() }, function(e, t, n) { "use strict"; var r = n(0);
        e.exports = r.isStandardBrowserEnv() ? function() { return { write: function(e, t, n, i, o, s) { var a = [];
                    a.push(e + "=" + encodeURIComponent(t)), r.isNumber(n) && a.push("expires=" + new Date(n).toGMTString()), r.isString(i) && a.push("path=" + i), r.isString(o) && a.push("domain=" + o), !0 === s && a.push("secure"), document.cookie = a.join("; ") }, read: function(e) { var t = document.cookie.match(new RegExp("(^|;\\s*)(" + e + ")=([^;]*)")); return t ? decodeURIComponent(t[3]) : null }, remove: function(e) { this.write(e, "", Date.now() - 864e5) } } }() : function() { return { write: function() {}, read: function() { return null }, remove: function() {} } }() }, function(e, t, n) { "use strict";
        e.exports = function(e) { return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e) } }, function(e, t, n) { "use strict";
        e.exports = function(e, t) { return t ? e.replace(/\/+$/, "") + "/" + t.replace(/^\/+/, "") : e } }, function(e, t, n) { "use strict";

        function r(e) { if ("function" != typeof e) throw new TypeError("executor must be a function."); var t;
            this.promise = new Promise(function(e) { t = e }); var n = this;
            e(function(e) { n.reason || (n.reason = new i(e), t(n.reason)) }) } var i = n(9);
        r.prototype.throwIfRequested = function() { if (this.reason) throw this.reason }, r.source = function() { var e; return { token: new r(function(t) { e = t }), cancel: e } }, e.exports = r }, function(e, t, n) { "use strict";
        e.exports = function(e) { return function(t) { return e.apply(null, t) } } }, function(e, t) {! function() { var t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
                n = { rotl: function(e, t) { return e << t | e >>> 32 - t }, rotr: function(e, t) { return e << 32 - t | e >>> t }, endian: function(e) { if (e.constructor == Number) return 16711935 & n.rotl(e, 8) | 4278255360 & n.rotl(e, 24); for (var t = 0; t < e.length; t++) e[t] = n.endian(e[t]); return e }, randomBytes: function(e) { for (var t = []; e > 0; e--) t.push(Math.floor(256 * Math.random())); return t }, bytesToWords: function(e) { for (var t = [], n = 0, r = 0; n < e.length; n++, r += 8) t[r >>> 5] |= e[n] << 24 - r % 32; return t }, wordsToBytes: function(e) { for (var t = [], n = 0; n < 32 * e.length; n += 8) t.push(e[n >>> 5] >>> 24 - n % 32 & 255); return t }, bytesToHex: function(e) { for (var t = [], n = 0; n < e.length; n++) t.push((e[n] >>> 4).toString(16)), t.push((15 & e[n]).toString(16)); return t.join("") }, hexToBytes: function(e) { for (var t = [], n = 0; n < e.length; n += 2) t.push(parseInt(e.substr(n, 2), 16)); return t }, bytesToBase64: function(e) { for (var n = [], r = 0; r < e.length; r += 3)
                            for (var i = e[r] << 16 | e[r + 1] << 8 | e[r + 2], o = 0; o < 4; o++) 8 * r + 6 * o <= 8 * e.length ? n.push(t.charAt(i >>> 6 * (3 - o) & 63)) : n.push("="); return n.join("") }, base64ToBytes: function(e) { e = e.replace(/[^A-Z0-9+\/]/gi, ""); for (var n = [], r = 0, i = 0; r < e.length; i = ++r % 4) 0 != i && n.push((t.indexOf(e.charAt(r - 1)) & Math.pow(2, -2 * i + 8) - 1) << 2 * i | t.indexOf(e.charAt(r)) >>> 6 - 2 * i); return n } };
            e.exports = n }() }, function(e, t) {
        function n(e) { return !!e.constructor && "function" == typeof e.constructor.isBuffer && e.constructor.isBuffer(e) }

        function r(e) { return "function" == typeof e.readFloatLE && "function" == typeof e.slice && n(e.slice(0, 0)) }
        /*!
         * Determine if an object is a Buffer
         *
         * @author   Feross Aboukhadijeh <https://feross.org>
         * @license  MIT
         */
        e.exports = function(e) { return null != e && (n(e) || r(e) || !!e._isBuffer) }
    }, function(e, t) { e.exports = { name: "answer.js", version: "1.0.7", description: "", main: "index.js", scripts: { build: "webpack --env=lib" }, keywords: ["xes-template", "Answer", "browser"], author: "", license: "ISC", devDependencies: { "babel-core": "^6.21.0", "babel-loader": "^6.2.10", "babel-plugin-transform-decorators": "^6.24.1", "babel-preset-es2015": "^6.18.0", "babel-preset-stage-0": "^6.16.0", webpack: "^3.0.0" }, dependencies: { axios: "^0.19.0", md5: "^2.2.1", querystringify: "^2.1.1" } } }])
});