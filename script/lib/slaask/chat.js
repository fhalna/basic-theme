(function () {
    "use strict";
    function e(e) {
        return e = String(e), e.charAt(0).toUpperCase() + e.slice(1)
    }

    function t(e, t, a) {
        var o = {
            6.4: "10",
            6.3: "8.1",
            6.2: "8",
            6.1: "Server 2008 R2 / 7",
            "6.0": "Server 2008 / Vista",
            5.2: "Server 2003 / XP 64-bit",
            5.1: "XP",
            5.01: "2000 SP1",
            "5.0": "2000",
            "4.0": "NT",
            "4.90": "ME"
        };
        return t && a && /^Win/i.test(e) && (o = o[/[\d.]+$/.exec(e)]) && (e = "Windows " + o), e = String(e), t && a && (e = e.replace(RegExp(t, "i"), a)), e = i(e.replace(/ ce$/i, " CE").replace(/\bhpw/i, "web").replace(/\bMacintosh\b/, "Mac OS").replace(/_PowerPC\b/i, " OS").replace(/\b(OS X) [^ \d]+/i, "$1").replace(/\bMac (OS X)\b/, "$1").replace(/\/(\d)/, " $1").replace(/_/g, ".").replace(/(?: BePC|[ .]*fc[ \d.]+)$/i, "").replace(/\bx86\.64\b/gi, "x86_64").replace(/\b(Windows Phone) OS\b/, "$1").split(" on ")[0])
    }

    function a(e, t) {
        var a = -1, i = e ? e.length : 0;
        if ("number" == typeof i && i > -1 && m >= i)for (; ++a < i;)t(e[a], a, e); else o(e, t)
    }

    function i(t) {
        return t = c(t), /^(?:webOS|i(?:OS|P))/.test(t) ? t : e(t)
    }

    function o(e, t) {
        for (var a in e)w.call(e, a) && t(e[a], a, e)
    }

    function n(t) {
        return null == t ? e(t) : v.call(t).slice(8, -1)
    }

    function s(e, t) {
        var a = null != e ? typeof e[t] : "number";
        return !/^(?:boolean|number|string|undefined)$/.test(a) && ("object" == a ? !!e[t] : !0)
    }

    function r(e) {
        return String(e).replace(/([ -])(?!$)/g, "$1?")
    }

    function l(e, t) {
        var i = null;
        return a(e, function (a, o) {
            i = t(i, a, o, e)
        }), i
    }

    function c(e) {
        return String(e).replace(/^ +| +$/g, "")
    }

    function p(e) {
        function a(t) {
            return l(t, function (t, a) {
                return t || RegExp("\\b" + (a.pattern || r(a)) + "\\b", "i").exec(e) && (a.label || a)
            })
        }

        function u(t) {
            return l(t, function (t, a, i) {
                return t || (a[V] || a[/^[a-z]+(?: +[a-z]+\b)*/i.exec(V)] || RegExp("\\b" + r(i) + "(?:\\b|\\w*\\d)", "i").exec(e)) && i
            })
        }

        function g(t) {
            return l(t, function (t, a) {
                return t || RegExp("\\b" + (a.pattern || r(a)) + "\\b", "i").exec(e) && (a.label || a)
            })
        }

        function h(a) {
            return l(a, function (a, i) {
                var o = i.pattern || r(i);
                return !a && (a = RegExp("\\b" + o + "(?:/[\\d.]+|[ \\w.]*)", "i").exec(e)) && (a = t(a, o, i.label || i)), a
            })
        }

        function b(t) {
            return l(t, function (t, a) {
                var o = a.pattern || r(a);
                return !t && (t = RegExp("\\b" + o + " *\\d+[.\\w_]*", "i").exec(e) || RegExp("\\b" + o + "(?:; *(?:[a-z]+[_-])?[a-z]+\\d+|[^ ();-]*)", "i").exec(e)) && ((t = String(a.label && !RegExp(o, "i").test(a.label) ? a.label : t).split("/"))[1] && !/[\d.]+/.test(t[0]) && (t[0] += " " + t[1]), a = a.label || a, t = i(t[0].replace(RegExp(o, "i"), a).replace(RegExp("; *(?:" + a + "[_-])?", "i"), " ").replace(RegExp("(" + a + ")[-_.]?(\\w)", "i"), "$1 $2"))), t
            })
        }

        function m(t) {
            return l(t, function (t, a) {
                return t || (RegExp(a + "(?:-[\\d.]+/|(?: for [\\w-]+)?[ /-])([\\d.]+[^ ();/_-]*)", "i").exec(e) || 0)[1] || null
            })
        }

        function y() {
            return this.description || ""
        }

        var w = d, x = e && "object" == typeof e && "String" != n(e);
        x && (w = e, e = null);
        var S = w.navigator || {}, E = S.userAgent || "";
        e || (e = E);
        var A, I, C = x || k == _, M = x ? !!S.likeChrome : /\bChrome\b/.test(e) && !/internal|\n/i.test(v.toString()), B = "Object", T = x ? B : "ScriptBridgingProxyObject", O = x ? B : "Environment", P = x && w.java ? "JavaPackage" : n(w.java), j = x ? B : "RuntimeObject", R = /\bJava/.test(P) && w.java, L = R && n(w.environment) == O, W = R ? "a" : "α", z = R ? "b" : "β", F = w.document || {}, N = w.operamini || w.opera, $ = f.test($ = x && N ? N["[[Class]]"] : n(N)) ? $ : N = null, U = e, G = [], X = null, q = e == E, D = q && N && "function" == typeof N.version && N.version(), H = a(["Trident", {
            label: "WebKit",
            pattern: "AppleWebKit"
        }, "iCab", "Presto", "NetFront", "Tasman", "KHTML", "Gecko"]), K = g(["Adobe AIR", "Arora", "Avant Browser", "Breach", "Camino", "Epiphany", "Fennec", "Flock", "Galeon", "GreenBrowser", "iCab", "Iceweasel", {
            label: "SRWare Iron",
            pattern: "Iron"
        }, "K-Meleon", "Konqueror", "Lunascape", "Maxthon", "Midori", "Nook Browser", "PhantomJS", "Raven", "Rekonq", "RockMelt", "SeaMonkey", {
            label: "Silk",
            pattern: "(?:Cloud9|Silk-Accelerated)"
        }, "Sleipnir", "SlimBrowser", "Sunrise", "Swiftfox", "WebPositive", "Opera Mini", {
            label: "Opera Mini",
            pattern: "OPiOS"
        }, "Opera", {label: "Opera", pattern: "OPR"}, "Chrome", {
            label: "Chrome Mobile",
            pattern: "(?:CriOS|CrMo)"
        }, {label: "Firefox", pattern: "(?:Firefox|Minefield)"}, {label: "IE", pattern: "IEMobile"}, {
            label: "IE",
            pattern: "MSIE"
        }, "Safari"]), V = b([{label: "BlackBerry", pattern: "BB10"}, "BlackBerry", {
            label: "Galaxy S",
            pattern: "GT-I9000"
        }, {label: "Galaxy S2", pattern: "GT-I9100"}, {label: "Galaxy S3", pattern: "GT-I9300"}, {
            label: "Galaxy S4",
            pattern: "GT-I9500"
        }, "Google TV", "Lumia", "iPad", "iPod", "iPhone", "Kindle", {
            label: "Kindle Fire",
            pattern: "(?:Cloud9|Silk-Accelerated)"
        }, "Nook", "PlayBook", "PlayStation 4", "PlayStation 3", "PlayStation Vita", "TouchPad", "Transformer", {
            label: "Wii U",
            pattern: "WiiU"
        }, "Wii", "Xbox One", {label: "Xbox 360", pattern: "Xbox"}, "Xoom"]), J = u({
            Apple: {
                iPad: 1,
                iPhone: 1,
                iPod: 1
            },
            Amazon: {Kindle: 1, "Kindle Fire": 1},
            Asus: {Transformer: 1},
            "Barnes & Noble": {Nook: 1},
            BlackBerry: {PlayBook: 1},
            Google: {"Google TV": 1},
            HP: {TouchPad: 1},
            HTC: {},
            LG: {},
            Microsoft: {Xbox: 1, "Xbox One": 1},
            Motorola: {Xoom: 1},
            Nintendo: {"Wii U": 1, Wii: 1},
            Nokia: {Lumia: 1},
            Samsung: {"Galaxy S": 1, "Galaxy S2": 1, "Galaxy S3": 1, "Galaxy S4": 1},
            Sony: {"PlayStation 4": 1, "PlayStation 3": 1, "PlayStation Vita": 1}
        }), Z = h(["Windows Phone ", "Android", "CentOS", "Debian", "Fedora", "FreeBSD", "Gentoo", "Haiku", "Kubuntu", "Linux Mint", "Red Hat", "SuSE", "Ubuntu", "Xubuntu", "Cygwin", "Symbian OS", "hpwOS", "webOS ", "webOS", "Tablet OS", "Linux", "Mac OS X", "Macintosh", "Mac", "Windows 98;", "Windows "]);
        if (H && (H = [H]), J && !V && (V = b([J])), (A = /\bGoogle TV\b/.exec(V)) && (V = A[0]), /\bSimulator\b/i.test(e) && (V = (V ? V + " " : "") + "Simulator"), "Opera Mini" == K && /\bOPiOS\b/.test(e) && G.push("running in Turbo/Uncompressed mode"), /^iP/.test(V) ? (K || (K = "Safari"), Z = "iOS" + ((A = / OS ([\d_]+)/i.exec(e)) ? " " + A[1].replace(/_/g, ".") : "")) : "Konqueror" != K || /buntu/i.test(Z) ? J && "Google" != J && (/Chrome/.test(K) && !/\bMobile Safari\b/i.test(e) || /\bVita\b/.test(V)) ? (K = "Android Browser", Z = /\bAndroid\b/.test(Z) ? Z : "Android") : (!K || (A = !/\bMinefield\b|\(Android;/i.test(e) && /\b(?:Firefox|Safari)\b/.exec(K))) && (K && !V && /[\/,]|^[^(]+?\)/.test(e.slice(e.indexOf(A + "/") + 8)) && (K = null), (A = V || J || Z) && (V || J || /\b(?:Android|Symbian OS|Tablet OS|webOS)\b/.test(Z)) && (K = /[a-z]+(?: Hat)?/i.exec(/\bAndroid\b/.test(Z) ? Z : A) + " Browser")) : Z = "Kubuntu", (A = /\((Mobile|Tablet).*?Firefox\b/i.exec(e)) && A[1] && (Z = "Firefox OS", V || (V = A[1])), D || (D = m(["(?:Cloud9|CriOS|CrMo|IEMobile|Iron|Opera ?Mini|OPiOS|OPR|Raven|Silk(?!/[\\d.]+$))", "Version", r(K), "(?:Firefox|Minefield|NetFront)"])), "iCab" == H && parseFloat(D) > 3 ? H = ["WebKit"] : "Trident" != H && (A = /\bOpera\b/.test(K) && (/\bOPR\b/.test(e) ? "Blink" : "Presto") || /\b(?:Midori|Nook|Safari)\b/i.test(e) && "WebKit" || !H && /\bMSIE\b/i.test(e) && ("Mac OS" == Z ? "Tasman" : "Trident")) ? H = [A] : /\bPlayStation\b(?! Vita\b)/i.test(K) && "WebKit" == H && (H = ["NetFront"]), "IE" == K && (A = (/; *(?:XBLWP|ZuneWP)(\d+)/i.exec(e) || 0)[1]) ? (K += " Mobile", Z = "Windows Phone " + (/\+$/.test(A) ? A : A + ".x"), G.unshift("desktop mode")) : /\bWPDesktop\b/i.test(e) ? (K = "IE Mobile", Z = "Windows Phone 8+", G.unshift("desktop mode"), D || (D = (/\brv:([\d.]+)/.exec(e) || 0)[1])) : "IE" != K && "Trident" == H && (A = /\brv:([\d.]+)/.exec(e)) ? (/\bWPDesktop\b/i.test(e) || (K && G.push("identifying as " + K + (D ? " " + D : "")), K = "IE"), D = A[1]) : "Chrome" != K && "IE" == K || !(A = /\bEdge\/([\d.]+)/.exec(e)) || (K = "IE", D = A[1], H = ["Trident"], G.unshift("platform preview")), q) {
            if (s(w, "global"))if (R && (A = R.lang.System, U = A.getProperty("os.arch"), Z = Z || A.getProperty("os.name") + " " + A.getProperty("os.version")), C && s(w, "system") && (A = [w.system])[0]) {
                Z || (Z = A[0].os || null);
                try {
                    A[1] = w.require("ringo/engine").version, D = A[1].join("."), K = "RingoJS"
                } catch (Q) {
                    A[0].global.system == w.system && (K = "Narwhal")
                }
            } else"object" == typeof w.process && (A = w.process) ? (K = "Node.js", U = A.arch, Z = A.platform, D = /[\d.]+/.exec(A.version)[0]) : L && (K = "Rhino"); else n(A = w.runtime) == T ? (K = "Adobe AIR", Z = A.flash.system.Capabilities.os) : n(A = w.phantom) == j ? (K = "PhantomJS", D = (A = A.version || null) && A.major + "." + A.minor + "." + A.patch) : "number" == typeof F.documentMode && (A = /\bTrident\/(\d+)/i.exec(e)) && (D = [D, F.documentMode], (A = +A[1] + 4) != D[1] && (G.push("IE " + D[1] + " mode"), H && (H[1] = ""), D[1] = A), D = "IE" == K ? String(D[1].toFixed(1)) : D[0]);
            Z = Z && i(Z)
        }
        D && (A = /(?:[ab]|dp|pre|[ab]\d+pre)(?:\d+\+?)?$/i.exec(D) || /(?:alpha|beta)(?: ?\d)?/i.exec(e + ";" + (q && S.appMinorVersion)) || /\bMinefield\b/i.test(e) && "a") && (X = /b/i.test(A) ? "beta" : "alpha", D = D.replace(RegExp(A + "\\+?$"), "") + ("beta" == X ? z : W) + (/\d+\+?/.exec(A) || "")), "Fennec" == K || "Firefox" == K && /\b(?:Android|Firefox OS)\b/.test(Z) ? K = "Firefox Mobile" : "Maxthon" == K && D ? D = D.replace(/\.[\d.]+/, ".x") : "Silk" == K ? (/\bMobi/i.test(e) || (Z = "Android", G.unshift("desktop mode")), /Accelerated *= *true/i.test(e) && G.unshift("accelerated")) : /\bXbox\b/i.test(V) ? (Z = null, "Xbox 360" == V && /\bIEMobile\b/.test(e) && G.unshift("mobile mode")) : !/^(?:Chrome|IE|Opera)$/.test(K) && (!K || V || /Browser|Mobi/.test(K)) || "Windows CE" != Z && !/Mobi/i.test(e) ? "IE" == K && q && null === w.external ? G.unshift("platform preview") : (/\bBlackBerry\b/.test(V) || /\bBB10\b/.test(e)) && (A = (RegExp(V.replace(/ +/g, " *") + "/([.\\d]+)", "i").exec(e) || 0)[1] || D) ? (A = [A, /BB10/.test(e)], Z = (A[1] ? (V = null, J = "BlackBerry") : "Device Software") + " " + A[0], D = null) : this != o && "Wii" != V && (q && N || /Opera/.test(K) && /\b(?:MSIE|Firefox)\b/i.test(e) || "Firefox" == K && /\bOS X (?:\d+\.){2,}/.test(Z) || "IE" == K && (Z && !/^Win/.test(Z) && D > 5.5 || /\bWindows XP\b/.test(Z) && D > 8 || 8 == D && !/\bTrident\b/.test(e))) && !f.test(A = p.call(o, e.replace(f, "") + ";")) && A.name && (A = "ing as " + A.name + ((A = A.version) ? " " + A : ""), f.test(K) ? (/\bIE\b/.test(A) && "Mac OS" == Z && (Z = null), A = "identify" + A) : (A = "mask" + A, K = $ ? i($.replace(/([a-z])([A-Z])/g, "$1 $2")) : "Opera", /\bIE\b/.test(A) && (Z = null), q || (D = null)), H = ["Presto"], G.push(A)) : K += " Mobile", (A = (/\bAppleWebKit\/([\d.]+\+?)/i.exec(e) || 0)[1]) && (A = [parseFloat(A.replace(/\.(\d)$/, ".0$1")), A], "Safari" == K && "+" == A[1].slice(-1) ? (K = "WebKit Nightly", X = "alpha", D = A[1].slice(0, -1)) : (D == A[1] || D == (A[2] = (/\bSafari\/([\d.]+\+?)/i.exec(e) || 0)[1])) && (D = null), A[1] = (/\bChrome\/([\d.]+)/i.exec(e) || 0)[1], 537.36 == A[0] && 537.36 == A[2] && parseFloat(A[1]) >= 28 && "IE" != K && (H = ["Blink"]), q && (M || A[1]) ? (H && (H[1] = "like Chrome"), A = A[1] || (A = A[0], 530 > A ? 1 : 532 > A ? 2 : 532.05 > A ? 3 : 533 > A ? 4 : 534.03 > A ? 5 : 534.07 > A ? 6 : 534.1 > A ? 7 : 534.13 > A ? 8 : 534.16 > A ? 9 : 534.24 > A ? 10 : 534.3 > A ? 11 : 535.01 > A ? 12 : 535.02 > A ? "13+" : 535.07 > A ? 15 : 535.11 > A ? 16 : 535.19 > A ? 17 : 536.05 > A ? 18 : 536.1 > A ? 19 : 537.01 > A ? 20 : 537.11 > A ? "21+" : 537.13 > A ? 23 : 537.18 > A ? 24 : 537.24 > A ? 25 : 537.36 > A ? 26 : "Blink" != H ? "27" : "28")) : (H && (H[1] = "like Safari"), A = A[0], A = 400 > A ? 1 : 500 > A ? 2 : 526 > A ? 3 : 533 > A ? 4 : 534 > A ? "4+" : 535 > A ? 5 : 537 > A ? 6 : 538 > A ? 7 : 601 > A ? 8 : "8"), H && (H[1] += " " + (A += "number" == typeof A ? ".x" : /[.+]/.test(A) ? "" : "+")), "Safari" == K && (!D || parseInt(D) > 45) && (D = A)), "Opera" == K && (A = /\bzbov|zvav$/.exec(Z)) ? (K += " ", G.unshift("desktop mode"), "zvav" == A ? (K += "Mini", D = null) : K += "Mobile", Z = Z.replace(RegExp(" *" + A + "$"), "")) : "Safari" == K && /\bChrome\b/.exec(H && H[1]) && (G.unshift("desktop mode"), K = "Chrome Mobile", D = null, /\bOS X\b/.test(Z) ? (J = "Apple", Z = "iOS 4.3+") : Z = null), D && 0 == D.indexOf(A = /[\d.]+$/.exec(Z)) && e.indexOf("/" + A + "-") > -1 && (Z = c(Z.replace(A, ""))), H && !/\b(?:Avant|Nook)\b/.test(K) && (/Browser|Lunascape|Maxthon/.test(K) || /^(?:Adobe|Arora|Breach|Midori|Opera|Phantom|Rekonq|Rock|Sleipnir|Web)/.test(K) && H[1]) && (A = H[H.length - 1]) && G.push(A), G.length && (G = ["(" + G.join("; ") + ")"]), J && V && V.indexOf(J) < 0 && G.push("on " + J), V && G.push((/^on /.test(G[G.length - 1]) ? "" : "on ") + V), Z && (A = / ([\d.+]+)$/.exec(Z), I = A && "/" == Z.charAt(Z.length - A[0].length - 1), Z = {
            architecture: 32,
            family: A && !I ? Z.replace(A[0], "") : Z,
            version: A ? A[1] : null,
            toString: function () {
                var e = this.version;
                return this.family + (e && !I ? " " + e : "") + (64 == this.architecture ? " 64-bit" : "")
            }
        }), (A = /\b(?:AMD|IA|Win|WOW|x86_|x)64\b/i.exec(U)) && !/\bi686\b/i.test(U) && (Z && (Z.architecture = 64, Z.family = Z.family.replace(RegExp(" *" + A), "")), K && (/\bWOW64\b/i.test(e) || q && /\w(?:86|32)$/.test(S.cpuClass || S.platform) && !/\bWin64; x64\b/i.test(e)) && G.unshift("32-bit")), e || (e = null);
        var Y = {};
        return Y.description = e, Y.layout = H && H[0], Y.manufacturer = J, Y.name = K, Y.prerelease = X, Y.product = V, Y.ua = e, Y.version = K && D, Y.os = Z || {
            architecture: null,
            family: null,
            version: null,
            toString: function () {
                return "null"
            }
        }, Y.parse = p, Y.toString = y, Y.version && G.unshift(D), Y.name && G.unshift(K), Z && K && (Z != String(Z).split(" ")[0] || Z != K.split(" ")[0] && !V) && G.push(V ? "(" + Z + ")" : "on " + Z), G.length && (Y.description = G.join(" ")), Y
    }

    var u = {
        "function": !0,
        object: !0
    }, d = u[typeof window] && window || this, _ = d, g = u[typeof exports] && exports, h = u[typeof module] && module && !module.nodeType && module, b = g && h && "object" == typeof global && global;
    !b || b.global !== b && b.window !== b && b.self !== b || (d = b);
    var m = Math.pow(2, 53) - 1, f = /\bOpera/, k = this, y = Object.prototype, w = y.hasOwnProperty, v = y.toString;
    "function" == typeof define && "object" == typeof define.amd && define.amd ? define(function () {
        return p()
    }) : g && h ? o(p(), function (e, t) {
        g[t] = e
    }) : d.platform = p()
}).call(this);
var DEFAULT_ATTRIBUTES, DEFAULT_CLASSES, DEFAULT_PARSER, TEST_REGEX, getList, _list;
DEFAULT_ATTRIBUTES = {
    title: function (e, t, a) {
        return null != a ? "" + a + " (" + t + ")" : t
    }, alt: function (e) {
        return e
    }
}, DEFAULT_CLASSES = "emoji", DEFAULT_PARSER = function (e, t, a, i) {
    var o, n, s, r;
    n = '<img class="' + a + '" src="' + t + "/" + encodeURIComponent(e[1]) + '.png" ', r = i.attributes;
    for (o in r)s = r[o], n += "" + o + '="' + s.apply(i, e) + '" ';
    return n + "/>"
}, TEST_REGEX = /\:([a-z0-9_+-]+)(?:\[((?:[^\]]|\][^:])*\]?)\])?\:/g, _list = void 0, getList = function (e) {
    return _list = e || _list || ["+1", "-1", "100", "1234", "8ball", "a", "ab", "abc", "abcd", "accept", "aerial_tramway", "airplane", "alarm_clock", "alien", "ambulance", "anchor", "angel", "anger", "angry", "anguished", "ant", "apple", "aquarius", "aries", "arrow_backward", "arrow_double_down", "arrow_double_up", "arrow_down", "arrow_down_small", "arrow_forward", "arrow_heading_down", "arrow_heading_up", "arrow_left", "arrow_lower_left", "arrow_lower_right", "arrow_right", "arrow_right_hook", "arrow_up", "arrow_up_down", "arrow_up_small", "arrow_upper_left", "arrow_upper_right", "arrows_clockwise", "arrows_counterclockwise", "art", "articulated_lorry", "astonished", "atm", "b", "baby", "baby_bottle", "baby_chick", "baby_symbol", "baggage_claim", "balloon", "ballot_box_with_check", "bamboo", "banana", "bangbang", "bank", "bar_chart", "barber", "baseball", "basketball", "bath", "bathtub", "battery", "bear", "bee", "beer", "beers", "beetle", "beginner", "bell", "bento", "bicyclist", "bike", "bikini", "bird", "birthday", "black_circle", "black_joker", "black_nib", "black_square", "black_square_button", "blossom", "blowfish", "blue_book", "blue_car", "blue_heart", "blush", "boar", "boat", "bomb", "book", "bookmark", "bookmark_tabs", "books", "boom", "boot", "bouquet", "bow", "bowling", "bowtie", "boy", "bread", "bride_with_veil", "bridge_at_night", "briefcase", "broken_heart", "bug", "bulb", "bullettrain_front", "bullettrain_side", "bus", "busstop", "bust_in_silhouette", "busts_in_silhouette", "cactus", "cake", "calendar", "calling", "camel", "camera", "cancer", "candy", "capital_abcd", "capricorn", "car", "card_index", "carousel_horse", "cat", "cat2", "cd", "chart", "chart_with_downwards_trend", "chart_with_upwards_trend", "checkered_flag", "cherries", "cherry_blossom", "chestnut", "chicken", "children_crossing", "chocolate_bar", "christmas_tree", "church", "cinema", "circus_tent", "city_sunrise", "city_sunset", "cl", "clap", "clapper", "clipboard", "clock1", "clock10", "clock1030", "clock11", "clock1130", "clock12", "clock1230", "clock130", "clock2", "clock230", "clock3", "clock330", "clock4", "clock430", "clock5", "clock530", "clock6", "clock630", "clock7", "clock730", "clock8", "clock830", "clock9", "clock930", "closed_book", "closed_lock_with_key", "closed_umbrella", "cloud", "clubs", "cn", "cocktail", "coffee", "cold_sweat", "collision", "computer", "confetti_ball", "confounded", "confused", "congratulations", "construction", "construction_worker", "convenience_store", "cookie", "cool", "cop", "copyright", "corn", "couple", "couple_with_heart", "couplekiss", "cow", "cow2", "credit_card", "crocodile", "crossed_flags", "crown", "cry", "crying_cat_face", "crystal_ball", "cupid", "curly_loop", "currency_exchange", "curry", "custard", "customs", "cyclone", "dancer", "dancers", "dango", "dart", "dash", "date", "de", "deciduous_tree", "department_store", "diamond_shape_with_a_dot_inside", "diamonds", "disappointed", "disappointed_relieved", "dizzy", "dizzy_face", "do_not_litter", "dog", "dog2", "dollar", "dolls", "dolphin", "donut", "door", "doughnut", "dragon", "dragon_face", "dress", "dromedary_camel", "droplet", "dvd", "e-mail", "ear", "ear_of_rice", "earth_africa", "earth_americas", "earth_asia", "egg", "eggplant", "eight", "eight_pointed_black_star", "eight_spoked_asterisk", "electric_plug", "elephant", "email", "end", "envelope", "es", "euro", "european_castle", "european_post_office", "evergreen_tree", "exclamation", "expressionless", "eyeglasses", "eyes", "facepunch", "factory", "fallen_leaf", "family", "fast_forward", "fax", "fearful", "feelsgood", "feet", "ferris_wheel", "file_folder", "finnadie", "fire", "fire_engine", "fireworks", "first_quarter_moon", "first_quarter_moon_with_face", "fish", "fish_cake", "fishing_pole_and_fish", "fist", "five", "flags", "flashlight", "floppy_disk", "flower_playing_cards", "flushed", "foggy", "football", "fork_and_knife", "fountain", "four", "four_leaf_clover", "fr", "free", "fried_shrimp", "fries", "frog", "frowning", "fu", "fuelpump", "full_moon", "full_moon_with_face", "game_die", "gb", "gem", "gemini", "ghost", "gift", "gift_heart", "girl", "globe_with_meridians", "goat", "goberserk", "godmode", "golf", "grapes", "green_apple", "green_book", "green_heart", "grey_exclamation", "grey_question", "grimacing", "grin", "grinning", "guardsman", "guitar", "gun", "haircut", "hamburger", "hammer", "hamster", "hand", "handbag", "hankey", "hash", "hatched_chick", "hatching_chick", "headphones", "hear_no_evil", "heart", "heart_decoration", "heart_eyes", "heart_eyes_cat", "heartbeat", "heartpulse", "hearts", "heavy_check_mark", "heavy_division_sign", "heavy_dollar_sign", "heavy_exclamation_mark", "heavy_minus_sign", "heavy_multiplication_x", "heavy_plus_sign", "helicopter", "herb", "hibiscus", "high_brightness", "high_heel", "hocho", "honey_pot", "honeybee", "horse", "horse_racing", "hospital", "hotel", "hotsprings", "hourglass", "hourglass_flowing_sand", "house", "house_with_garden", "hurtrealbad", "hushed", "ice_cream", "icecream", "id", "ideograph_advantage", "imp", "inbox_tray", "incoming_envelope", "information_desk_person", "information_source", "innocent", "interrobang", "iphone", "it", "izakaya_lantern", "jack_o_lantern", "japan", "japanese_castle", "japanese_goblin", "japanese_ogre", "jeans", "joy", "joy_cat", "jp", "key", "keycap_ten", "kimono", "kiss", "kissing", "kissing_cat", "kissing_closed_eyes", "kissing_face", "kissing_heart", "kissing_smiling_eyes", "koala", "koko", "kr", "large_blue_circle", "large_blue_diamond", "large_orange_diamond", "last_quarter_moon", "last_quarter_moon_with_face", "laughing", "leaves", "ledger", "left_luggage", "left_right_arrow", "leftwards_arrow_with_hook", "lemon", "leo", "leopard", "libra", "light_rail", "link", "lips", "lipstick", "lock", "lock_with_ink_pen", "lollipop", "loop", "loudspeaker", "love_hotel", "love_letter", "low_brightness", "m", "mag", "mag_right", "mahjong", "mailbox", "mailbox_closed", "mailbox_with_mail", "mailbox_with_no_mail", "man", "man_with_gua_pi_mao", "man_with_turban", "mans_shoe", "maple_leaf", "mask", "massage", "meat_on_bone", "mega", "melon", "memo", "mens", "metal", "metro", "microphone", "microscope", "milky_way", "minibus", "minidisc", "mobile_phone_off", "money_with_wings", "moneybag", "monkey", "monkey_face", "monorail", "moon", "mortar_board", "mount_fuji", "mountain_bicyclist", "mountain_cableway", "mountain_railway", "mouse", "mouse2", "movie_camera", "moyai", "muscle", "mushroom", "musical_keyboard", "musical_note", "musical_score", "mute", "nail_care", "name_badge", "neckbeard", "necktie", "negative_squared_cross_mark", "neutral_face", "new", "new_moon", "new_moon_with_face", "newspaper", "ng", "nine", "no_bell", "no_bicycles", "no_entry", "no_entry_sign", "no_good", "no_mobile_phones", "no_mouth", "no_pedestrians", "no_smoking", "non-potable_water", "nose", "notebook", "notebook_with_decorative_cover", "notes", "nut_and_bolt", "o", "o2", "ocean", "octocat", "octopus", "oden", "office", "ok", "ok_hand", "ok_woman", "older_man", "older_woman", "on", "oncoming_automobile", "oncoming_bus", "oncoming_police_car", "oncoming_taxi", "one", "open_file_folder", "open_hands", "open_mouth", "ophiuchus", "orange_book", "outbox_tray", "ox", "page_facing_up", "page_with_curl", "pager", "palm_tree", "panda_face", "paperclip", "parking", "part_alternation_mark", "partly_sunny", "passport_control", "paw_prints", "peach", "pear", "pencil", "pencil2", "penguin", "pensive", "performing_arts", "persevere", "person_frowning", "person_with_blond_hair", "person_with_pouting_face", "phone", "pig", "pig2", "pig_nose", "pill", "pineapple", "pisces", "pizza", "plus1", "point_down", "point_left", "point_right", "point_up", "point_up_2", "police_car", "poodle", "poop", "post_office", "postal_horn", "postbox", "potable_water", "pouch", "poultry_leg", "pound", "pouting_cat", "pray", "princess", "punch", "purple_heart", "purse", "pushpin", "put_litter_in_its_place", "question", "rabbit", "rabbit2", "racehorse", "radio", "radio_button", "rage", "rage1", "rage2", "rage3", "rage4", "railway_car", "rainbow", "raised_hand", "raised_hands", "raising_hand", "ram", "ramen", "rat", "recycle", "red_car", "red_circle", "registered", "relaxed", "relieved", "repeat", "repeat_one", "restroom", "revolving_hearts", "rewind", "ribbon", "rice", "rice_ball", "rice_cracker", "rice_scene", "ring", "rocket", "roller_coaster", "rooster", "rose", "rotating_light", "round_pushpin", "rowboat", "ru", "rugby_football", "runner", "running", "running_shirt_with_sash", "sa", "sagittarius", "sailboat", "sake", "sandal", "santa", "satellite", "satisfied", "saxophone", "school", "school_satchel", "scissors", "scorpius", "scream", "scream_cat", "scroll", "seat", "secret", "see_no_evil", "seedling", "seven", "shaved_ice", "sheep", "shell", "ship", "shipit", "shirt", "shit", "shoe", "shower", "signal_strength", "six", "six_pointed_star", "ski", "skull", "sleeping", "sleepy", "slot_machine", "small_blue_diamond", "small_orange_diamond", "small_red_triangle", "small_red_triangle_down", "smile", "smile_cat", "simple_smile", "smiley", "smiley_cat", "smiling_imp", "smirk", "smirk_cat", "smoking", "snail", "snake", "snowboarder", "snowflake", "snowman", "sob", "soccer", "soon", "sos", "sound", "space_invader", "spades", "spaghetti", "sparkler", "sparkles", "sparkling_heart", "speak_no_evil", "speaker", "speech_balloon", "speedboat", "squirrel", "star", "star2", "stars", "station", "statue_of_liberty", "steam_locomotive", "stew", "straight_ruler", "strawberry", "stuck_out_tongue", "stuck_out_tongue_closed_eyes", "stuck_out_tongue_winking_eye", "sun_with_face", "sunflower", "sunglasses", "sunny", "sunrise", "sunrise_over_mountains", "surfer", "sushi", "suspect", "suspension_railway", "sweat", "sweat_drops", "sweat_smile", "sweet_potato", "swimmer", "symbols", "syringe", "tada", "tanabata_tree", "tangerine", "taurus", "taxi", "tea", "telephone", "telephone_receiver", "telescope", "tennis", "tent", "thought_balloon", "three", "thumbsdown", "thumbsup", "ticket", "tiger", "tiger2", "tired_face", "tm", "toilet", "tokyo_tower", "tomato", "tongue", "top", "tophat", "tractor", "traffic_light", "train", "train2", "tram", "triangular_flag_on_post", "triangular_ruler", "trident", "triumph", "trolleybus", "trollface", "trophy", "tropical_drink", "tropical_fish", "truck", "trumpet", "tshirt", "tulip", "turtle", "tv", "twisted_rightwards_arrows", "two", "two_hearts", "two_men_holding_hands", "two_women_holding_hands", "u5272", "u5408", "u55b6", "u6307", "u6708", "u6709", "u6e80", "u7121", "u7533", "u7981", "u7a7a", "uk", "umbrella", "unamused", "underage", "unlock", "up", "us", "v", "vertical_traffic_light", "vhs", "vibration_mode", "video_camera", "video_game", "violin", "virgo", "volcano", "vs", "walking", "waning_crescent_moon", "waning_gibbous_moon", "warning", "watch", "water_buffalo", "watermelon", "wave", "wavy_dash", "waxing_crescent_moon", "waxing_gibbous_moon", "wc", "weary", "wedding", "whale", "whale2", "wheelchair", "white_check_mark", "white_circle", "white_flower", "white_large_square", "white_square_button", "wind_chime", "wine_glass", "wink", "wolf", "woman", "womans_clothes", "womans_hat", "womens", "worried", "wrench", "x", "yellow_heart", "yen", "yum", "zap", "zero", "zzz"]
}, function (e, t) {
    return "object" == typeof exports ? module.exports = t() : "function" == typeof define && define.amd ? define("emoji-parser", function () {
        return e.emojiParser = t()
    }) : e.emojiParser = t()
}(this, function () {
    var e;
    return e = function (e, t, a) {
        var i, o;
        return null == a && (a = {}), o = getList(a.list), "function" == typeof a ? a = {parser: a} : (null == a.attributes && (a.attributes = DEFAULT_ATTRIBUTES), null == a.parser && (a.parser = DEFAULT_PARSER)), i = null != a.classes ? a.classes : DEFAULT_CLASSES, e.replace(TEST_REGEX, function (e, n, s) {
            return -1 === o.indexOf(n) ? e : a.parser([e, n, s], t, i, a)
        })
    }, e.list = getList, e
});
!function (e) {
    function t() {
        return "Markdown.mk_block( " + uneval(this.toString()) + ", " + uneval(this.trailing) + ", " + uneval(this.lineNumber) + " )"
    }

    function r() {
        var e = require("util");
        return "Markdown.mk_block( " + e.inspect(this.toString()) + ", " + e.inspect(this.trailing) + ", " + e.inspect(this.lineNumber) + " )"
    }

    function n(e) {
        for (var t = 0, r = -1; -1 !== (r = e.indexOf("\n", r + 1));)t++;
        return t
    }

    function i(e, t) {
        function r(e) {
            this.len_after = e, this.name = "close_" + t
        }

        var n = e + "_state", i = "strong" == e ? "em_state" : "strong_state";
        return function (l, s) {
            if (this[n][0] == t)return this[n].shift(), [l.length, new r(l.length - t.length)];
            var a = this[i].slice(), c = this[n].slice();
            this[n].unshift(t);
            var o = this.processInline(l.substr(t.length)), h = o[o.length - 1];
            this[n].shift();
            if (h instanceof r) {
                o.pop();
                var u = l.length - h.len_after;
                return [u, [e].concat(o)]
            }
            return this[i] = a, this[n] = c, [t.length, t]
        }
    }

    function l(e) {
        for (var t = e.split(""), r = [""], n = !1; t.length;) {
            var i = t.shift();
            switch (i) {
                case" ":
                    n ? r[r.length - 1] += i : r.push("");
                    break;
                case"'":
                case'"':
                    n = !n;
                    break;
                case"\\":
                    i = t.shift();
                default:
                    r[r.length - 1] += i
            }
        }
        return r
    }

    function s(e) {
        return d(e) && e.length > 1 && "object" == typeof e[1] && !d(e[1]) ? e[1] : void 0
    }

    function c(e) {
        return e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;")
    }

    function o(e) {
        if ("string" == typeof e)return c(e);
        var t = e.shift(), r = {}, n = [];
        for (!e.length || "object" != typeof e[0] || e[0]instanceof Array || (r = e.shift()); e.length;)n.push(o(e.shift()));
        var i = "";
        for (var l in r)i += " " + l + '="' + c(r[l]) + '"';
        return "img" == t || "br" == t || "hr" == t ? "<" + t + i + "/>" : "<" + t + i + ">" + n.join("") + "</" + t + ">"
    }

    function h(e, t, r) {
        var n;
        r = r || {};
        var i = e.slice(0);
        "function" == typeof r.preprocessTreeNode && (i = r.preprocessTreeNode(i, t));
        var l = s(i);
        if (l) {
            i[1] = {};
            for (n in l)i[1][n] = l[n];
            l = i[1]
        }
        if ("string" == typeof i)return i;
        switch (i[0]) {
            case"header":
                i[0] = "h" + i[1].level, delete i[1].level;
                break;
            case"bulletlist":
                i[0] = "ul";
                break;
            case"numberlist":
                i[0] = "ol";
                break;
            case"listitem":
                i[0] = "li";
                break;
            case"para":
                i[0] = "p";
                break;
            case"markdown":
                i[0] = "html", l && delete l.references;
                break;
            case"code_block":
                i[0] = "pre", n = l ? 2 : 1;
                var a = ["code"];
                a.push.apply(a, i.splice(n, i.length - n)), i[n] = a;
                break;
            case"inlinecode":
                i[0] = "code";
                break;
            case"img":
                i[1].src = i[1].href, delete i[1].href;
                break;
            case"linebreak":
                i[0] = "br";
                break;
            case"link":
                i[0] = "a";
                break;
            case"link_ref":
                i[0] = "a";
                var c = t[l.ref];
                if (!c)return l.original;
                delete l.ref, l.href = c.href, c.title && (l.title = c.title), delete l.original;
                break;
            case"img_ref":
                i[0] = "img";
                var c = t[l.ref];
                if (!c)return l.original;
                delete l.ref, l.src = c.href, c.title && (l.title = c.title), delete l.original
        }
        if (n = 1, l) {
            for (var o in i[1]) {
                n = 2;
                break
            }
            1 === n && i.splice(n, 1)
        }
        for (; n < i.length; ++n)i[n] = h(i[n], t, r);
        return i
    }

    function u(e) {
        for (var t = s(e) ? 2 : 1; t < e.length;)"string" == typeof e[t] ? t + 1 < e.length && "string" == typeof e[t + 1] ? e[t] += e.splice(t + 1, 1)[0] : ++t : (u(e[t]), ++t)
    }

    var f = e.Markdown = function (e) {
        switch (typeof e) {
            case"undefined":
                this.dialect = f.dialects.Gruber;
                break;
            case"object":
                this.dialect = e;
                break;
            default:
                if (!(e in f.dialects))throw new Error("Unknown Markdown dialect '" + String(e) + "'");
                this.dialect = f.dialects[e]
        }
        this.em_state = [], this.strong_state = [], this.debug_indent = ""
    };
    e.parse = function (e, t) {
        var r = new f(t);
        return r.toTree(e)
    }, e.toHTML = function (t, r, n) {
        var i = e.toHTMLTree(t, r, n);
        return e.renderJsonML(i)
    }, e.toHTMLTree = function (e, t, r) {
        "string" == typeof e && (e = this.parse(e, t));
        var n = s(e), i = {};
        n && n.references && (i = n.references);
        var l = h(e, i, r);
        return u(l), l
    };
    var g = f.mk_block = function (e, n, i) {
        1 == arguments.length && (n = "\n\n");
        var l = new String(e);
        return l.trailing = n, l.inspect = r, l.toSource = t, void 0 != i && (l.lineNumber = i), l
    };
    f.prototype.split_blocks = function (e, t) {
        e = e.replace(/(\r\n|\n|\r)/g, "\n");
        var r, i = /([\s\S]+?)($|\n#|\n(?:\s*\n|$)+)/g, l = [], s = 1;
        for (null != (r = /^(\s*\n)/.exec(e)) && (s += n(r[0]), i.lastIndex = r[0].length); null !== (r = i.exec(e));)"\n#" == r[2] && (r[2] = "\n", i.lastIndex--), l.push(g(r[1], r[2], s)), s += n(r[0]);
        return l
    }, f.prototype.processBlock = function (e, t) {
        var r = this.dialect.block, n = r.__order__;
        if ("__call__"in r)return r.__call__.call(this, e, t);
        for (var i = 0; i < n.length; i++) {
            var l = r[n[i]].call(this, e, t);
            if (l)return (!d(l) || l.length > 0 && !d(l[0])) && this.debug(n[i], "didn't return a proper array"), l
        }
        return []
    }, f.prototype.processInline = function (e) {
        return this.dialect.inline.__call__.call(this, String(e))
    }, f.prototype.toTree = function (e, t) {
        var r = e instanceof Array ? e : this.split_blocks(e), n = this.tree;
        try {
            for (this.tree = t || this.tree || ["markdown"]; r.length;) {
                var i = this.processBlock(r.shift(), r);
                i.length && this.tree.push.apply(this.tree, i)
            }
            return this.tree
        } finally {
            t && (this.tree = n)
        }
    }, f.prototype.debug = function () {
        var e = Array.prototype.slice.call(arguments);
        e.unshift(this.debug_indent), "undefined" != typeof print && print.apply(print, e), "undefined" != typeof console && "undefined" != typeof console.log && console.log.apply(null, e)
    }, f.prototype.loop_re_over_block = function (e, t, r) {
        for (var n, i = t.valueOf(); i.length && null != (n = e.exec(i));)i = i.substr(n[0].length), r.call(this, n);
        return i
    }, f.dialects = {}, f.dialects.Gruber = {
        block: {
            atxHeader: function (e, t) {
                var r = e.match(/^(#{1,6})\s*(.*?)\s*#*\s*(?:\n|$)/);
                if (r) {
                    var n = ["header", {level: r[1].length}];
                    return Array.prototype.push.apply(n, this.processInline(r[2])), r[0].length < e.length && t.unshift(g(e.substr(r[0].length), e.trailing, e.lineNumber + 2)), [n]
                }
            }, setextHeader: function (e, t) {
                var r = e.match(/^(.*)\n([-=])\2\2+(?:\n|$)/);
                if (r) {
                    var n = "=" === r[2] ? 1 : 2, i = ["header", {level: n}, r[1]];
                    return r[0].length < e.length && t.unshift(g(e.substr(r[0].length), e.trailing, e.lineNumber + 2)), [i]
                }
            }, code: function (e, t) {
                var r = [], n = /^(?: {0,3}\t| {4})(.*)\n?/;
                if (e.match(n)) {
                    e:for (; ;) {
                        var i = this.loop_re_over_block(n, e.valueOf(), function (e) {
                            r.push(e[1])
                        });
                        if (i.length) {
                            t.unshift(g(i, e.trailing));
                            break e
                        }
                        if (!t.length)break e;
                        if (!t[0].match(n))break e;
                        r.push(e.trailing.replace(/[^\n]/g, "").substring(2)), e = t.shift()
                    }
                    return [["code_block", r.join("\n")]]
                }
            }, horizRule: function (e, t) {
                var r = e.match(/^(?:([\s\S]*?)\n)?[ \t]*([-_*])(?:[ \t]*\2){2,}[ \t]*(?:\n([\s\S]*))?$/);
                if (r) {
                    var n = [["hr"]];
                    return r[1] && n.unshift.apply(n, this.processBlock(r[1], [])), r[3] && t.unshift(g(r[3])), n
                }
            }, lists: function () {
                function e(e) {
                    return new RegExp("(?:^(" + c + "{0," + e + "} {0,3})(" + l + ")\\s+)|(^" + c + "{0," + (e - 1) + "}[ ]{0,4})")
                }

                function t(e) {
                    return e.replace(/ {0,3}\t/g, "    ")
                }

                function r(e, t, r, n) {
                    if (t)return void e.push(["para"].concat(r));
                    var i = e[e.length - 1]instanceof Array && "para" == e[e.length - 1][0] ? e[e.length - 1] : e;
                    n && e.length > 1 && r.unshift(n);
                    for (var l = 0; l < r.length; l++) {
                        var s = r[l], a = "string" == typeof s;
                        a && i.length > 1 && "string" == typeof i[i.length - 1] ? i[i.length - 1] += s : i.push(s)
                    }
                }

                function n(e, t) {
                    for (var r = new RegExp("^(" + c + "{" + e + "}.*?\\n?)*$"), n = new RegExp("^" + c + "{" + e + "}", "gm"), i = []; t.length > 0 && r.exec(t[0]);) {
                        var l = t.shift(), s = l.replace(n, "");
                        i.push(g(s, l.trailing, l.lineNumber))
                    }
                    return i
                }

                function i(e, t, r) {
                    var n = e.list, i = n[n.length - 1];
                    if (!(i[1]instanceof Array && "para" == i[1][0]))if (t + 1 == r.length)i.push(["para"].concat(i.splice(1, i.length - 1))); else {
                        var l = i.pop();
                        i.push(["para"].concat(i.splice(1, i.length - 1)), l)
                    }
                }

                var l = "[*+-]|\\d+\\.", s = /[*+-]/, a = new RegExp("^( {0,3})(" + l + ")[   ]+"), c = "(?: {0,3}\\t| {4})";
                return function (l, c) {
                    function o(e) {
                        var t = s.exec(e[2]) ? ["bulletlist"] : ["numberlist"];
                        return p.push({list: t, indent: e[1]}), t
                    }

                    var h = l.match(a);
                    if (h) {
                        for (var u, f, p = [], g = o(h), d = !1, _ = [p[0].list]; ;) {
                            for (var b = l.split(/(?=\n)/), k = "", m = 0; m < b.length; m++) {
                                var y = "", w = b[m].replace(/^\n/, function (e) {
                                    return y = e, ""
                                }), $ = e(p.length);
                                if (h = w.match($), void 0 !== h[1]) {
                                    k.length && (r(u, d, this.processInline(k), y), d = !1, k = ""), h[1] = t(h[1]);
                                    var M = Math.floor(h[1].length / 4) + 1;
                                    if (M > p.length)g = o(h), u.push(g), u = g[1] = ["listitem"]; else {
                                        var x = !1;
                                        for (f = 0; f < p.length; f++)if (p[f].indent == h[1]) {
                                            g = p[f].list, p.splice(f + 1, p.length - (f + 1)), x = !0;
                                            break
                                        }
                                        x || (M++, M <= p.length ? (p.splice(M, p.length - M), g = p[M - 1].list) : (g = o(h), u.push(g))), u = ["listitem"], g.push(u)
                                    }
                                    y = ""
                                }
                                w.length > h[0].length && (k += y + w.substr(h[0].length))
                            }
                            k.length && (r(u, d, this.processInline(k), y), d = !1, k = "");
                            var S = n(p.length, c);
                            S.length > 0 && (v(p, i, this), u.push.apply(u, this.toTree(S, [])));
                            var A = c[0] && c[0].valueOf() || "";
                            if (!A.match(a) && !A.match(/^ /))break;
                            l = c.shift();
                            var I = this.dialect.block.horizRule(l, c);
                            if (I) {
                                _.push.apply(_, I);
                                break
                            }
                            v(p, i, this), d = !0
                        }
                        return _
                    }
                }
            }(), blockquote: function (e, t) {
                if (e.match(/^>/m)) {
                    var r = [];
                    if (">" != e[0]) {
                        for (var n = e.split(/\n/), i = [], l = e.lineNumber; n.length && ">" != n[0][0];)i.push(n.shift()), l++;
                        var a = g(i.join("\n"), "\n", e.lineNumber);
                        r.push.apply(r, this.processBlock(a, [])), e = g(n.join("\n"), e.trailing, l)
                    }
                    for (; t.length && ">" == t[0][0];) {
                        var c = t.shift();
                        e = g(e + e.trailing + c, c.trailing, e.lineNumber)
                    }
                    var o = e.replace(/^> ?/gm, ""), h = (this.tree, this.toTree(o, ["blockquote"])), u = s(h);
                    return u && u.references && (delete u.references, _(u) && h.splice(1, 1)), r.push(h), r
                }
            }, referenceDefn: function (e, t) {
                var r = /^\s*\[(.*?)\]:\s*(\S+)(?:\s+(?:(['"])(.*?)\3|\((.*?)\)))?\n?/;
                if (e.match(r)) {
                    s(this.tree) || this.tree.splice(1, 0, {});
                    var n = s(this.tree);
                    void 0 === n.references && (n.references = {});
                    var i = this.loop_re_over_block(r, e, function (e) {
                        e[2] && "<" == e[2][0] && ">" == e[2][e[2].length - 1] && (e[2] = e[2].substring(1, e[2].length - 1));
                        var t = n.references[e[1].toLowerCase()] = {href: e[2]};
                        void 0 !== e[4] ? t.title = e[4] : void 0 !== e[5] && (t.title = e[5])
                    });
                    return i.length && t.unshift(g(i, e.trailing)), []
                }
            }, para: function (e, t) {
                return [["para"].concat(this.processInline(e))]
            }
        }
    }, f.dialects.Gruber.inline = {
        __oneElement__: function (e, t, r) {
            var n, i;
            t = t || this.dialect.inline.__patterns__;
            var l = new RegExp("([\\s\\S]*?)(" + (t.source || t) + ")");
            if (n = l.exec(e), !n)return [e.length, e];
            if (n[1])return [n[1].length, n[1]];
            var i;
            return n[2]in this.dialect.inline && (i = this.dialect.inline[n[2]].call(this, e.substr(n.index), n, r || [])), i = i || [n[2].length, n[2]]
        }, __call__: function (e, t) {
            function r(e) {
                "string" == typeof e && "string" == typeof i[i.length - 1] ? i[i.length - 1] += e : i.push(e)
            }

            for (var n, i = []; e.length > 0;)n = this.dialect.inline.__oneElement__.call(this, e, t, i), e = e.substr(n.shift()), v(n, r);
            return i
        }, "]": function () {
        }, "}": function () {
        }, __escape__: /^\\[\\`\*_{}\[\]()#\+.!\-]/, "\\": function (e) {
            return this.dialect.inline.__escape__.exec(e) ? [2, e.charAt(1)] : [1, "\\"]
        }, "![": function (e) {
            var t = e.match(/^!\[(.*?)\][ \t]*\([ \t]*([^")]*?)(?:[ \t]+(["'])(.*?)\3)?[ \t]*\)/);
            if (t) {
                t[2] && "<" == t[2][0] && ">" == t[2][t[2].length - 1] && (t[2] = t[2].substring(1, t[2].length - 1)), t[2] = this.dialect.inline.__call__.call(this, t[2], /\\/)[0];
                var r = {alt: t[1], href: t[2] || ""};
                return void 0 !== t[4] && (r.title = t[4]), [t[0].length, ["img", r]]
            }
            return t = e.match(/^!\[(.*?)\][ \t]*\[(.*?)\]/), t ? [t[0].length, ["img_ref", {
                alt: t[1],
                ref: t[2].toLowerCase(),
                original: t[0]
            }]] : [2, "!["]
        }, "[": function b(e) {
            var t = String(e), r = f.DialectHelpers.inline_until_char.call(this, e.substr(1), "]");
            if (!r)return [1, "["];
            var b, n, i = 1 + r[0], l = r[1];
            e = e.substr(i);
            var s = e.match(/^\s*\([ \t]*([^"']*)(?:[ \t]+(["'])(.*?)\2)?[ \t]*\)/);
            if (s) {
                var a = s[1];
                if (i += s[0].length, a && "<" == a[0] && ">" == a[a.length - 1] && (a = a.substring(1, a.length - 1)), !s[3])for (var c = 1, o = 0; o < a.length; o++)switch (a[o]) {
                    case"(":
                        c++;
                        break;
                    case")":
                        0 == --c && (i -= a.length - o, a = a.substring(0, o))
                }
                return a = this.dialect.inline.__call__.call(this, a, /\\/)[0], n = {href: a || ""}, void 0 !== s[3] && (n.title = s[3]), b = ["link", n].concat(l), [i, b]
            }
            return s = e.match(/^\s*\[(.*?)\]/), s ? (i += s[0].length, n = {
                ref: (s[1] || String(l)).toLowerCase(),
                original: t.substr(0, i)
            }, b = ["link_ref", n].concat(l), [i, b]) : 1 == l.length && "string" == typeof l[0] ? (n = {
                ref: l[0].toLowerCase(),
                original: t.substr(0, i)
            }, b = ["link_ref", n, l[0]], [i, b]) : [1, "["]
        }, "<": function (e) {
            var t;
            return null != (t = e.match(/^<(?:((https?|ftp|mailto):[^>]+)|(.*?@.*?\.[a-zA-Z]+))>/)) ? t[3] ? [t[0].length, ["link", {href: "mailto:" + t[3]}, t[3]]] : "mailto" == t[2] ? [t[0].length, ["link", {href: t[1]}, t[1].substr("mailto:".length)]] : [t[0].length, ["link", {href: t[1]}, t[1]]] : [1, "<"]
        }, "`": function (e) {
            var t = e.match(/(`+)(([\s\S]*?)\1)/);
            return t && t[2] ? [t[1].length + t[2].length, ["inlinecode", t[3]]] : [1, "`"]
        }, "  \n": function (e) {
            return [3, ["linebreak"]]
        }
    }, f.dialects.Gruber.inline["**"] = i("strong", "**"), f.dialects.Gruber.inline.__ = i("strong", "__"), f.dialects.Gruber.inline["*"] = i("em", "*"), f.dialects.Gruber.inline._ = i("em", "_"), f.buildBlockOrder = function (e) {
        var t = [];
        for (var r in e)"__order__" != r && "__call__" != r && t.push(r);
        e.__order__ = t
    }, f.buildInlinePatterns = function (e) {
        var t = [];
        for (var r in e)if (!r.match(/^__.*__$/)) {
            var n = r.replace(/([\\.*+?|()\[\]{}])/g, "\\$1").replace(/\n/, "\\n");
            t.push(1 == r.length ? n : "(?:" + n + ")")
        }
        t = t.join("|"), e.__patterns__ = t;
        var i = e.__call__;
        e.__call__ = function (e, r) {
            return void 0 != r ? i.call(this, e, r) : i.call(this, e, t)
        }
    }, f.DialectHelpers = {}, f.DialectHelpers.inline_until_char = function (e, t) {
        for (var r = 0, n = []; ;) {
            if (e.charAt(r) == t)return r++, [r, n];
            if (r >= e.length)return null;
            var i = this.dialect.inline.__oneElement__.call(this, e.substr(r));
            r += i[0], n.push.apply(n, i.slice(1))
        }
    }, f.subclassDialect = function (e) {
        function t() {
        }

        function r() {
        }

        return t.prototype = e.block, r.prototype = e.inline, {block: new t, inline: new r}
    }, f.buildBlockOrder(f.dialects.Gruber.block), f.buildInlinePatterns(f.dialects.Gruber.inline), f.dialects.Maruku = f.subclassDialect(f.dialects.Gruber), f.dialects.Maruku.processMetaHash = function (e) {
        for (var t = l(e), r = {}, n = 0; n < t.length; ++n)if (/^#/.test(t[n]))r.id = t[n].substring(1); else if (/^\./.test(t[n]))r["class"] ? r["class"] = r["class"] + t[n].replace(/./, " ") : r["class"] = t[n].substring(1); else if (/\=/.test(t[n])) {
            var i = t[n].split(/\=/);
            r[i[0]] = i[1]
        }
        return r
    }, f.dialects.Maruku.block.document_meta = function (e, t) {
        if (!(e.lineNumber > 1) && e.match(/^(?:\w+:.*\n)*\w+:.*$/)) {
            s(this.tree) || this.tree.splice(1, 0, {});
            var r = e.split(/\n/);
            for (p in r) {
                var n = r[p].match(/(\w+):\s*(.*)$/), i = n[1].toLowerCase(), l = n[2];
                this.tree[1][i] = l
            }
            return []
        }
    }, f.dialects.Maruku.block.block_meta = function (e, t) {
        var r = e.match(/(^|\n) {0,3}\{:\s*((?:\\\}|[^\}])*)\s*\}$/);
        if (r) {
            var n, i = this.dialect.processMetaHash(r[2]);
            if ("" === r[1]) {
                var l = this.tree[this.tree.length - 1];
                if (n = s(l), "string" == typeof l)return;
                n || (n = {}, l.splice(1, 0, n));
                for (a in i)n[a] = i[a];
                return []
            }
            var c = e.replace(/\n.*$/, ""), o = this.processBlock(c, []);
            n = s(o[0]), n || (n = {}, o[0].splice(1, 0, n));
            for (a in i)n[a] = i[a];
            return o
        }
    }, f.dialects.Maruku.block.definition_list = function (e, t) {
        var r, n, i = /^((?:[^\s:].*\n)+):\s+([\s\S]+)$/, l = ["dl"];
        if (n = e.match(i)) {
            for (var s = [e]; t.length && i.exec(t[0]);)s.push(t.shift());
            for (var a = 0; a < s.length; ++a) {
                var n = s[a].match(i), c = n[1].replace(/\n$/, "").split(/\n/), o = n[2].split(/\n:\s+/);
                for (r = 0; r < c.length; ++r)l.push(["dt", c[r]]);
                for (r = 0; r < o.length; ++r)l.push(["dd"].concat(this.processInline(o[r].replace(/(\n)\s+/, "$1"))))
            }
            return [l]
        }
    }, f.dialects.Maruku.block.table = function k(e, t) {
        var r, n, i = function (e, t) {
            t = t || "\\s", t.match(/^[\\|\[\]{}?*.+^$]$/) && (t = "\\" + t);
            for (var r, n = [], i = new RegExp("^((?:\\\\.|[^\\\\" + t + "])*)" + t + "(.*)"); r = e.match(i);)n.push(r[1]), e = r[2];
            return n.push(e), n
        }, l = /^ {0,3}\|(.+)\n {0,3}\|\s*([\-:]+[\-| :]*)\n((?:\s*\|.*(?:\n|$))*)(?=\n|$)/, s = /^ {0,3}(\S(?:\\.|[^\\|])*\|.*)\n {0,3}([\-:]+\s*\|[\-| :]*)\n((?:(?:\\.|[^\\|])*\|.*(?:\n|$))*)(?=\n|$)/;
        if (n = e.match(l))n[3] = n[3].replace(/^\s*\|/gm, ""); else if (!(n = e.match(s)))return;
        var k = ["table", ["thead", ["tr"]], ["tbody"]];
        n[2] = n[2].replace(/\|\s*$/, "").split("|");
        var a = [];
        for (v(n[2], function (e) {
            e.match(/^\s*-+:\s*$/) ? a.push({align: "right"}) : e.match(/^\s*:-+\s*$/) ? a.push({align: "left"}) : e.match(/^\s*:-+:\s*$/) ? a.push({align: "center"}) : a.push({})
        }), n[1] = i(n[1].replace(/\|\s*$/, ""), "|"), r = 0; r < n[1].length; r++)k[1][1].push(["th", a[r] || {}].concat(this.processInline(n[1][r].trim())));
        return v(n[3].replace(/\|\s*$/gm, "").split("\n"), function (e) {
            var t = ["tr"];
            for (e = i(e, "|"), r = 0; r < e.length; r++)t.push(["td", a[r] || {}].concat(this.processInline(e[r].trim())));
            k[2].push(t)
        }, this), [k]
    }, f.dialects.Maruku.inline["{:"] = function (e, t, r) {
        if (!r.length)return [2, "{:"];
        var n = r[r.length - 1];
        if ("string" == typeof n)return [2, "{:"];
        var i = e.match(/^\{:\s*((?:\\\}|[^\}])*)\s*\}/);
        if (!i)return [2, "{:"];
        var l = this.dialect.processMetaHash(i[1]), a = s(n);
        a || (a = {}, n.splice(1, 0, a));
        for (var c in l)a[c] = l[c];
        return [i[0].length, ""]
    }, f.dialects.Maruku.inline.__escape__ = /^\\[\\`\*_{}\[\]()#\+.!\-|:]/, f.buildBlockOrder(f.dialects.Maruku.block), f.buildInlinePatterns(f.dialects.Maruku.inline);
    var v, d = Array.isArray || function (e) {
            return "[object Array]" == Object.prototype.toString.call(e)
        };
    v = Array.prototype.forEach ? function (e, t, r) {
        return e.forEach(t, r)
    } : function (e, t, r) {
        for (var n = 0; n < e.length; n++)t.call(r || e, e[n], n, e)
    };
    var _ = function (e) {
        for (var t in e)if (hasOwnProperty.call(e, t))return !1;
        return !0
    };
    e.renderJsonML = function (e, t) {
        t = t || {}, t.root = t.root || !1;
        var r = [];
        if (t.root)r.push(o(e)); else for (e.shift(), !e.length || "object" != typeof e[0] || e[0]instanceof Array || e.shift(); e.length;)r.push(o(e.shift()));
        return r.join("\n\n")
    }
}(function () {
    return "undefined" == typeof exports ? (window.markdown = {}, window.markdown) : exports
}());
var slaaskApp = function () {
    this.guest_id = 0, this.guest_lat = 0, this.guest_lng = 0, this.already_registered = !1, this.hide_header = !1, this.user_infos = null, this.open = !1, this.previous_title = document.title, this.emoji = window.emojiParser, this.emoticons = {
        ":simple_smile:": "smile",
        "<3": "heart",
        ":o)": "monkey_face",
        ":*": "kiss",
        ":-*": "kiss",
        "</3": "broken_heart",
        "=)": "smiley",
        "=-)": "smiley",
        "C:": "smile",
        "c:": "smile",
        ":D": "smile",
        ":-D": "smile",
        ":>": "laughing",
        ":->": "laughing",
        ";)": "wink",
        ";-)": "wink",
        ":)": "smile",
        "(:": "smile",
        ":-)": "smile",
        "8)": "sunglasses",
        ":|": "neutral_face",
        ":-|": "neutral_face",
        ":\\": "confused",
        ":-\\": "confused",
        ":/": "confused",
        ":-/": "confused",
        ":p": "stuck_out_tongue",
        ":-p": "stuck_out_tongue",
        ":P": "stuck_out_tongue",
        ":-P": "stuck_out_tongue",
        ":b": "stuck_out_tongue",
        ":-b": "stuck_out_tongue",
        ";p": "stuck_out_tongue_winking_eye",
        ";-p": "stuck_out_tongue_winking_eye",
        ";b": "stuck_out_tongue_winking_eye",
        ";-b": "stuck_out_tongue_winking_eye",
        ";P": "stuck_out_tongue_winking_eye",
        ";-P": "stuck_out_tongue_winking_eye",
        "):": "disappointed",
        ":(": "disappointed",
        ":-(": "disappointed",
        ">:(": "angry",
        ">:-(": "angry",
        ":'(": "cry",
        "D:": "anguished",
        ":o": "open_mouth",
        ":-o": "open_mouth"
    }
};
slaaskApp.prototype.init = function (e, t) {
    this.api_key = e, this.cookie_token = this.getCookieToken(), this.ajaxCall("/api/initialize_widget", {key: e}, this.loadWithConfiguration)
}, slaaskApp.prototype.getCookieToken = function () {
    var e = this.getCookie("slaask-token-" + this.api_key);
    return "" != e ? e : this.setCookie("slaask-token-" + this.api_key, this.generateRandomToken(), 730)
}, slaaskApp.prototype.getCookie = function (e) {
    for (var t = e + "=", s = document.cookie.split(";"), a = 0; a < s.length; a++) {
        for (var i = s[a]; " " == i.charAt(0);)i = i.substring(1);
        if (0 == i.indexOf(t))return i.substring(t.length, i.length)
    }
    return ""
}, slaaskApp.prototype.setCookie = function (e, t, s) {
    var a = new Date;
    a.setTime(a.getTime() + 24 * s * 60 * 60 * 1e3);
    var i = "expires=" + a.toUTCString();
    return document.cookie = e + "=" + t + "; " + i, t
}, slaaskApp.prototype.generateRandomToken = function () {
    return first = Math.random().toString(36).substr(2), second = Math.random().toString(36).substr(2), first + second
}, slaaskApp.prototype.initializeEverything = function (e, t) {
    "undefined" != typeof t && this.setCustomOptions(t), this.errored || this.hide_on_mobile || 1 != this.available && "hidden" == this.offline_mode || (0 == this.guest_id && "undefined" == typeof Pusher ? (this.initializeCss(), this.initializePusher(function (e) {
        e.pusher = new Pusher("d792cf980e3792e5398e", {encrypted: !0}), e.finishInitialization()
    })) : app.finishInitialization())
}, slaaskApp.prototype.loadWithConfiguration = function (e, t) {
    if (e.success) {
        if (t.errored = !1, t.window_title = e.config.window_title, t.window_color = e.config.window_color, t.title_color = e.config.title_color, t.chat_color = e.config.chat_color, t.chat_text_color = e.config.chat_text_color, t.support_img = e.config.support_img, t.api_ws_token = e.config.api_ws_token, t.support_name = e.config.support_name, t.greeting_message = e.config.greeting_message, t.plan = e.config.plan, t.client_ip = e.config.ip, t.available = e.config.available, t.offline_mode = e.config.offline_mode, e.config.hide_on_mobile) {
            var s = window, a = document, i = a.documentElement, n = a.getElementsByTagName("body")[0], o = s.innerWidth || i.clientWidth || n.clientWidth;
            s.innerHeight || i.clientHeight || n.clientHeight;
            t.hide_on_mobile = 780 > o
        } else t.hide_on_mobile = !1;
        t.online_input_content = e.config.online_input_content, t.online_submit_content = e.config.online_submit_content, t.online_customer_name = e.config.online_customer_name, t.offline_email_content = e.config.offline_email_content, t.offline_message_content = e.config.offline_message_content, t.offline_object_content = e.config.offline_object_content, t.offline_submit_content = e.config.offline_submit_content, t.online_submit_color = e.config.online_submit_color, t.online_submit_background = e.config.online_submit_background, t.offline_submit_color = e.config.offline_submit_color, t.offline_submit_background = e.config.offline_submit_background, t.geoloc_method = e.config.geoloc_method, t.audio_ring = new Audio("https://cdn.slaask.com/sounds/ring.mp3"), t.initializeEverything()
    } else t.errored = !0, console.log("=> slaask API Key unavailable")
}, slaaskApp.prototype.setCustomOptions = function (e) {
    "undefined" != typeof e.hide_header && (this.hide_header = e.hide_header)
}, slaaskApp.prototype.finishInitialization = function () {
    this.slaaskCreateWidgetInDom(), this.sendLogInfos(), document.getElementById("slaask-box-heading").innerHTML = '<div id="slaask-cross" class="cross hidden" style="' + this.slaaskGetCrossWithColor() + '"></div>' + this.window_title, this.slaaskRenderNewMessage(null, this.greeting_message, this.support_name), this.initializeFormSubmit(), this.initializeScriptInteractions()
}, slaaskApp.prototype.identify = function (e, t) {
    "free" != this.plan && (this.user_infos = {display_name: e, more: t})
}, slaaskApp.prototype.initializeFormSubmit = function () {
    app = this, this.available ? document.getElementById("slaask-form").addEventListener("submit", function (e) {
        e.preventDefault(), message = document.getElementById("slaask-input").value, message.length > 0 ? (message = app.preEmojify(message), send_data = {
            key: app.api_key,
            guest_id: app.guest_id,
            message: message
        }, app.ajaxCall("/api/publish", send_data, app.checkAvailabilityCallback), document.getElementById("slaask-input").value = "", app.triggerInternalEvent("slaask.sent_message", {
            message: message,
            from: app.guest_id
        }), app.slaaskRenderMyMessage(message)) : document.getElementById("slaask-input").focus()
    }) : document.getElementById("slaask-offline-form").addEventListener("submit", function (e) {
        e.preventDefault(), email = document.getElementById("slaask-email-input").value, object = document.getElementById("slaask-object-input").value, message = document.getElementById("slaask-message-input").value, email.length > 0 ? (send_data = {
            key: app.api_key,
            guest_id: app.guest_id,
            email: email,
            object: object,
            message: message
        }, app.ajaxCall("/api/send_email", send_data, app.nullCallback), document.getElementById("slaask-offline-form").innerHTML = "", app.slaaskRenderNewMessage(null, "Thank you for your email, we will answer as fast as possible", app.support_name)) : document.getElementById("slaask-email-input").focus()
    })
}, slaaskApp.prototype.initializeScriptInteractions = function () {
    document.getElementById("slaask-box-heading").addEventListener("click", function () {
        app.addOrRemoveClass("slaask-open-close", "hidden"), app.addOrRemoveClass("slaask-cross", "hidden"), document.getElementById("slaask-input").focus(), app.slaaskScrollToBottom(), app.triggerInternalEventBy("user")
    }), document.getElementById("slaask-box").addEventListener("click", function () {
        app.titleChangingStop()
    });
    for (var e = document.getElementsByClassName("slaask-open-widget"), t = 0; t < e.length; t++)e[t].addEventListener("click", function () {
        app.addOrRemoveClass("slaask-open-close", "hidden"), app.addOrRemoveClass("slaask-cross", "hidden"), document.getElementById("slaask-input").focus(), app.slaaskScrollToBottom(), app.triggerInternalEventBy("external_link")
    });
    document.getElementById("slaask-open-close").addEventListener("click", function () {
        document.getElementById("slaask-input").focus()
    })
}, slaaskApp.prototype.triggerInternalEventBy = function (e) {
    this.open ? (app.triggerInternalEvent("slaask.close", {by: e}), this.open = !1) : (app.triggerInternalEvent("slaask.open", {by: e}), this.open = !0)
}, slaaskApp.prototype.addOrRemoveClass = function (e, t) {
    this.open ? this.addClass(e, t) : this.removeClass(e, t)
}, slaaskApp.prototype.addClass = function (e, t) {
    document.getElementById(e).className += " " + t
}, slaaskApp.prototype.removeClass = function (e, t) {
    var s = document.getElementById(e), a = new RegExp("(\\s|^)" + t + "(\\s|$)");
    s.className = s.className.replace(a, " ")
}, slaaskApp.prototype.initializeCss = function () {
    var e = document.createElement("link");
    e.href = "https://cdn.slaask.com/chat.min.css", e.type = "text/css", e.rel = "stylesheet", document.getElementsByTagName("head")[0].appendChild(e)
}, slaaskApp.prototype.initializePusher = function (e) {
    app = this;
    var t = app.createScriptTag("https://js.pusher.com/3.0/pusher.min.js");
    t.onload = function () {
        e(app)
    }
}, slaaskApp.prototype.slaaskCreateWidgetInDom = function () {
    var e = document.getElementById("slaask-box");
    null != e && e.remove(), header_class = "", this.hide_header && (header_class = " hidden"), this.available ? document.body.insertAdjacentHTML("beforeend", '<section id="slaask-box" class="slaask-box"><header id="slaask-box-heading" class="slaask-box-heading on' + header_class + '" style="background-color: ' + this.window_color + "!important; color: " + this.title_color + '!important"></header><div id="slaask-open-close" class="slaask-open-close hidden"><div class="slaask-box-body"><div class="chat-conversation"><ul id="conversation-list" class="conversation-list"></ul><div class="slaask-whitelabel"><a href="https://slaask.com" target="_blank">Chat tool powered by<img alt="Slaask" class="slaask-whitelabel-image" src="https://cdn.slaask.com/slaask_logo_sm.png"></a></div></div></div><div id="slaask-inputs" class="slaask-inputs"><form id="slaask-form" class="slaask-form"><input id="slaask-input" class="chat-input slaask-input" placeholder="' + this.online_input_content + '" type="text"/><input style="background: ' + this.online_submit_background + "!important; color: " + this.online_submit_color + '!important" class="slaask-submit" value="' + this.online_submit_content + '" type="submit" /></form></div></div></section>') : document.body.insertAdjacentHTML("beforeend", '<section id="slaask-box" class="slaask-box"><header id="slaask-box-heading" class="slaask-box-heading off' + header_class + '" style="background-color: ' + this.window_color + "!important; color: " + this.title_color + '!important"></header><div id="slaask-open-close" class="slaask-open-close hidden"><div class="slaask-box-body"><div class="chat-conversation"><ul id="conversation-list" class="conversation-list"></ul></div><form id="slaask-offline-form" class="chat-offline"><input id="slaask-email-input" class="chat-input slaask-input" placeholder="' + this.offline_email_content + '" type="text"><input id="slaask-object-input" class="chat-input slaask-input" placeholder="' + this.offline_object_content + '" type="text"><textarea id="slaask-message-input" class="chat-input slaask-input" placeholder="' + this.offline_message_content + '" type="text"></textarea><input style="background: ' + this.offline_submit_background + "!important; color: " + this.offline_submit_color + '!important" class="slaask-submit-offline" type="submit" value="' + this.offline_submit_content + '"></form></div></div></section>')
}, slaaskApp.prototype.sendLogInfos = function () {
    send_data = {
        key: this.api_key,
        token: this.cookie_token,
        ip: this.client_ip,
        user_infos: this.user_infos
    }, this.ajaxCall("/api/send_logs", send_data, this.initializeWithLogInfos)
}, slaaskApp.prototype.slaaskSendUserInfos = function () {
    this.already_registered ? send_data = {
        key: this.api_key,
        guest_id: this.guest_id,
        current_page: window.location.href,
        user_infos: this.user_infos
    } : send_data = {
        key: this.api_key,
        guest_id: this.guest_id,
        latitude: this.guest_lat,
        longitude: this.guest_lng,
        language: navigator.language,
        current_page: window.location.href,
        platform: platform.os.family + " (" + platform.os.version + ")",
        browser: platform.name + " (" + platform.version + ")",
        user_infos: this.user_infos
    }, this.ajaxCall("/api/send_infos", send_data, this.nullCallback)
}, slaaskApp.prototype.nullCallback = function (e, t) {
}, slaaskApp.prototype.checkAvailabilityCallback = function (e, t) {
    t.available = e.available, e.available || t.finishInitialization()
}, slaaskApp.prototype.initializeWithLogInfos = function (e, t) {
    if (t.guest_id = e.id, t.api_ws_token = e.token, t.guest_name = e.name, t.guest_lat = e.latitude, t.guest_lng = e.longitude, t.already_registered = e.already_registered, t.slaaskSubscribeToChannel(), t.available)for (a = e.messages, i = 0; i < e.messages.length; i++)message = e.messages[i], "notification" == message.type ? t.slaaskRenderNotificationMessage(message.text) : "me" == message.name ? t.slaaskRenderMyMessage(message.text, message.name) : t.slaaskRenderNewMessage(message.id, message.text, message.name, message.action_link, message.image);
    t.triggerInternalEvent("slaask.ready", {}), "browser" == t.geoloc_method && 0 == t.guest_lat ? navigator.geolocation.getCurrentPosition(function (e) {
        t.guest_lat = e.coords.latitude, t.guest_lng = e.coords.longitude, t.slaaskSendUserInfos()
    }) : t.slaaskSendUserInfos()
}, slaaskApp.prototype.slaaskSubscribeToChannel = function () {
    app = this, channel = this.pusher.channel(this.api_key + "-" + this.api_ws_token), this.available && "undefined" == typeof channel && (this.slaaskChannel = this.pusher.subscribe(this.api_key + "-" + this.api_ws_token), this.slaaskChannel.bind("new_message", function (e) {
        app.titleChanging(e.name), app.slaaskDisplayNewMessage(e.id, e.text, e.name, e.action_link, e.picture)
    }), this.slaaskChannel.bind("edited_message", function (e) {
        document.getElementById("slaask-message-" + e.id).innerHTML = app.slaaskNewMessageContent(e.id, e.text, e.name, e.action_link, e.image)
    }), this.slaaskChannel.bind("deleted_message", function (e) {
        document.getElementById("slaask-message-" + e.id).remove()
    }), this.slaaskChannel.bind("redirection", function (e) {
        app.slaaskRedirectToUrl(e.url)
    }), this.slaaskChannel.bind("notification", function (e) {
        app.slaaskRenderNotificationMessage(e.text)
    }))
}, slaaskApp.prototype.slaaskDisplayNewMessage = function (e, t, s, a, i) {
    app.show(), app.ring(), app.triggerInternalEvent("slaask.recieved_message", {
        message: t,
        from: s
    }), app.slaaskRenderNewMessage(e, t, s, a, i)
}, slaaskApp.prototype.slaaskRenderMyMessage = function (e) {
    document.getElementById("conversation-list").insertAdjacentHTML("beforeend", '<li class="odd"><div class="conversation-text"><div class="ctext-wrap"><i>' + this.online_customer_name + "</i>" + this.parseMessageHtml(e) + '<div class="ctext-wrap-before-border"></div><div class="ctext-wrap-before"></div></div></div></li>'), "" == document.getElementById("slaask-input").value, app.slaaskScrollToBottom()
}, slaaskApp.prototype.slaaskRenderNewMessage = function (e, t, s, a, i) {
    messageHtml = this.slaaskNewMessageContent(e, t, s, a, i), document.getElementById("conversation-list").insertAdjacentHTML("beforeend", messageHtml), app.slaaskScrollToBottom()
}, slaaskApp.prototype.slaaskNewMessageContent = function (e, t, s, a, i) {
    return "undefined" == typeof a && (a = !1), "undefined" == typeof i && (i = this.support_img), '<li id="slaask-message-' + e + '"><div class="chat-avatar"><img src="' + i + '" alt="male"></div><div class="conversation-text"><div class="ctext-wrap" style="background-color: ' + this.chat_color + '!important"><i style="color:' + this.chat_text_color + '!important">' + s + '</i><div style="color:' + this.chat_text_color + '!important">' + this.parseMessageHtml(t) + "</div>" + this.slaaskRenderActionLink(a) + '<div class="ctext-wrap-before-border"></div><div class="ctext-wrap-before" style="border-right-color: ' + this.chat_color + '!important"></div></div></div></li>'
}, slaaskApp.prototype.slaaskRenderNotificationMessage = function (e) {
    document.getElementById("conversation-list").insertAdjacentHTML("beforeend", '<li><hr><p class="slaask-notification">' + e + "</p><hr></li>"), app.slaaskScrollToBottom()
}, slaaskApp.prototype.slaaskRenderActionLink = function (e) {
    return e ? '<a class="slaask-btn" href="' + e.link + '" target="_blank">' + e.text + "</a>" : ""
}, slaaskApp.prototype.slaaskRedirectToUrl = function (e) {
    window.location = e
}, slaaskApp.prototype.slaaskScrollToBottom = function () {
    var e = document.getElementsByClassName("slaask-box-body")[0];
    e.scrollTop = e.scrollHeight
}, slaaskApp.prototype.createScriptTag = function (e) {
    var t = document.createElement("script");
    return t.src = e, document.getElementsByTagName("head")[0].appendChild(t), t
}, slaaskApp.prototype.ajaxCall = function (e, t, s) {
    var a = this.getAjaxRequest(s, this);
    a.open("POST", "https://slaask.com" + e, !0), a.setRequestHeader("Content-Type", "application/json"), a.send(JSON.stringify(t))
}, slaaskApp.prototype.getAjaxRequest = function (e, t) {
    var s;
    try {
        s = new XMLHttpRequest
    } catch (a) {
        try {
            s = new ActiveXObject("Msxml2.XMLHTTP")
        } catch (a) {
            try {
                s = new ActiveXObject("Microsoft.XMLHTTP")
            } catch (a) {
                return null
            }
        }
    }
    return s.onreadystatechange = function () {
        4 == s.readyState && e(JSON.parse(s.responseText), t)
    }, s
}, slaaskApp.prototype.parseMessageHtml = function (e) {
    return e = markdown.toHTML(e), e = e.replace(/\n/gi, function () {
        return "<br/>"
    }), this.emojify(e)
}, slaaskApp.prototype.titleChanging = function (e) {
    this.from_title = e;
    var t = this;
    this.title_interval = setInterval(function () {
        document.title == t.previous_title ? document.title = t.from_title + " send you a message" : document.title = t.previous_title
    }, 3e3)
}, slaaskApp.prototype.titleChangingStop = function () {
    clearInterval(this.title_interval), document.title = this.previous_title
}, slaaskApp.prototype.urlify = function (e) {
    var t = /(https?:\/\/[^\s]+)/g;
    return e.replace(t, function (e) {
        return '<a href="' + e + '" target="_blank">' + e + "</a>"
    })
}, slaaskApp.prototype.emojify = function (e) {
    return this.emoji(e, "https://cdn.slaask.com/emoji", {classes: "slaask-emoji"})
}, slaaskApp.prototype.preEmojify = function (e) {
    for (var t in this.emoticons)e = e.replace(" " + t, " :" + this.emoticons[t] + ":");
    return e
}, slaaskApp.prototype.ring = function () {
    this.audio_ring.play()
}, slaaskApp.prototype.message = function (e, t, s, a) {
    "undefined" == typeof t && (t = this.support_name), "undefined" == typeof s && (s = !1), app.slaaskDisplayNewMessage(null, e, t, s, a)
}, slaaskApp.prototype.show = function (e) {
    this.hide_header && this.removeClass("slaask-box-heading", "hidden"), this.removeClass("slaask-open-close", "hidden"), this.removeClass("slaask-cross", "hidden"), this.open || (app.triggerInternalEvent("slaask.open", {by: "new_message"}), this.open = !0), "undefined" == typeof e ? document.getElementById("slaask-input").focus() : "false" != e.focus && document.getElementById("slaask-input").focus()
}, slaaskApp.prototype.hide = function () {
    this.hide_header && this.addClass("slaask-box-heading", "hidden"), this.addClass("slaask-open-close", "hidden"), this.addClass("slaask-cross", "hidden"), this.open && (app.triggerInternalEvent("slaask.close", {by: "new_message"}), this.open = !1)
}, slaaskApp.prototype.slaaskGetCrossWithColor = function () {
    return "background-image: url(&quot;data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' width='16px' height='16px' viewBox='0 0 612 612' style='enable-background:new 0 0 612 612;' xml:space='preserve' fill='" + this.title_color + "'><g><g id='cross'><g><polygon points='612,36.004 576.521,0.603 306,270.608 35.478,0.603 0,36.004 270.522,306.011 0,575.997 35.478,611.397 306,341.411 576.521,611.397 612,575.997 341.459,306.011'/></g></g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg>&quot;);"
}, slaaskApp.prototype.triggerInternalEvent = function (e, t) {
    var s = new CustomEvent(e, {detail: t});
    document.dispatchEvent(s)
};
var _slaask = _slaask || new slaaskApp;
