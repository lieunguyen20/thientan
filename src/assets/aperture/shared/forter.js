(function() {
	var siteId = "07c0aec6173f";

	function t(t, e) {
		for (var n = t.split(""), r = 0; r < n.length; ++r) n[r] = String.fromCharCode(n[r].charCodeAt(0) + e);
		return n.join("");
	}

	function e(e) {
		return t(e, -h).replace(/%SN%/g, siteId);
	}

	function n(t) {
		for (var e = escape(t) + "=", n = document.cookie.split(";"), r = 0; r < n.length; r++) {
			for (var o = n[r]; " " == o.charAt(0); ) o = o.substring(1, o.length);
			if (0 === o.indexOf(e)) return unescape(o.substring(e.length, o.length));
		}
		return null;
	}

	function r(t, e) {
		var r = new Date();
		r.setTime(r.getTime() + 15768e7);
		var o,
			i,
			a,
			u = "; expires=" + r.toGMTString();
		if (((a = location.host), 1 === a.split(".").length))
			document.cookie = escape(t) + "=" + escape(e) + u + "; path=/";
		else {
			(i = a.split(".")),
				i.shift(),
				(o = "." + i.join(".")),
				(document.cookie = escape(t) + "=" + escape(e) + u + "; path=/; domain=" + o);
			var c = n(t);
			(null != c && c == e) ||
				((o = "." + a), (document.cookie = escape(t) + "=" + escape(e) + u + "; path=/; domain=" + o));
		}
	}

	function o(t) {
		(x.ex = t), p(x);
	}

	function i(t, e, n) {
		var r = document.createElement("script");
		(r.onerror = n),
			(r.onload = e),
			(r.type = "text/javascript"),
			(r.id = "ftr__script"),
			(r.async = !0),
			(r.src = "https://" + t);
		var o = document.getElementsByTagName("script")[0];
		o.parentNode.insertBefore(r, o);
	}

	function a() {
		U(S.uAL), setTimeout(u, v, S.uAL);
	}

	function u(t) {
		try {
			var e = t === S.uDF ? m : g;
			i(
				e,
				function() {
					k(), (x.ex = t + S.uS), p(x);
				},
				function() {
					try {
						k(), (x.td = 1 * new Date() - x.ts), (x.ex = t + S.uF), p(x), t === S.uDF && a();
					} catch (e) {
						(x.ex = t + S.eUoe), p(x);
					}
				}
			);
		} catch (e) {
			(x.ex = t + S.eTlu), p(x);
		}
	}
	var c = "fort",
		s = "erTo",
		d = "ken",
		f = c + s + d,
		l = "6",
		h = 3,
		m = e("(VQ(1fgq71iruwhu1frp2vq2(VQ(2vfulsw1mv"),
		g = e("g68x4yj4t5;e6z1forxgiurqw1qhw2vq2(VQ(2vfulsw1mv"),
		v = 10;
	window.ftr__startScriptLoad = 1 * new Date();
	var p = function(t) {
			var e = function(t) {
					return t || "";
				},
				n = e(t.id) + "_" + e(t.ts) + "_" + e(t.td) + "_" + e(t.ex) + "_" + e(l);
			r(f, n);
		},
		w = function() {
			str = n(f) || "";
			var t = str.split("_"),
				e = function(e) {
					return t[e] || void 0;
				};
			return {
				id: e(0),
				ts: e(1),
				td: e(2),
				ex: e(3),
				vr: e(4),
			};
		},
		T = (function() {
			for (var t = {}, e = "fgu", n = [], r = 0; r < 256; r++) n[r] = (r < 16 ? "0" : "") + r.toString(16);
			var o = function(t, e, r, o, i) {
					var a = i ? "-" : "";
					return (
						n[255 & t] +
						n[(t >> 8) & 255] +
						n[(t >> 16) & 255] +
						n[(t >> 24) & 255] +
						a +
						n[255 & e] +
						n[(e >> 8) & 255] +
						a +
						n[((e >> 16) & 15) | 64] +
						n[(e >> 24) & 255] +
						a +
						n[(63 & r) | 128] +
						n[(r >> 8) & 255] +
						a +
						n[(r >> 16) & 255] +
						n[(r >> 24) & 255] +
						n[255 & o] +
						n[(o >> 8) & 255] +
						n[(o >> 16) & 255] +
						n[(o >> 24) & 255]
					);
				},
				i = function() {
					if (window.Uint32Array && window.crypto && window.crypto.getRandomValues) {
						var t = new window.Uint32Array(4);
						return (
							window.crypto.getRandomValues(t),
							{
								d0: t[0],
								d1: t[1],
								d2: t[2],
								d3: t[3],
							}
						);
					}
					return {
						d0: (4294967296 * Math.random()) >>> 0,
						d1: (4294967296 * Math.random()) >>> 0,
						d2: (4294967296 * Math.random()) >>> 0,
						d3: (4294967296 * Math.random()) >>> 0,
					};
				},
				a = function() {
					var t = "",
						e = function(t, e) {
							for (var n = "", r = t; r > 0; --r) n += e.charAt((1e3 * Math.random()) % e.length);
							return n;
						};
					return (t += e(2, "0123456789")), (t += e(1, "123456789")), (t += e(8, "0123456789"));
				};
			return (
				(t.safeGenerateNoDash = function() {
					try {
						var t = i();
						return o(t.d0, t.d1, t.d2, t.d3, !1);
					} catch (t) {
						try {
							return e + a();
						} catch (t) {}
					}
				}),
				(t.isValidNumericalToken = function(t) {
					return (
						t &&
						t.toString().length <= 11 &&
						t.length >= 9 &&
						parseInt(t, 10).toString().length <= 11 &&
						parseInt(t, 10).toString().length >= 9
					);
				}),
				(t.isValidUUIDToken = function(t) {
					return t && 32 === t.toString().length && /^[\\d\\w]+$/.test(t);
				}),
				(t.isValidFGUToken = function(t) {
					return 0 == t.indexOf(e) && t.length >= 12;
				}),
				t
			);
		})(),
		S = {
			uDF: "UDF",
			uAL: "UAL",
			mLd: "1",
			eTlu: "2",
			eUoe: "3",
			uS: "4",
			uF: "9",
			tmos: ["T5", "T10", "T15", "T30", "T60"],
			tmosSecs: [5, 10, 15, 30, 60],
		},
		y = function(t, e) {
			for (var n = S.tmos, r = 0; r < n.length; r++) if (t + n[r] === e) return !0;
			return !1;
		};
	try {
		var x = w();
		try {
			(x.id && (T.isValidNumericalToken(x.id) || T.isValidUUIDToken(x.id) || T.isValidFGUToken(x.id))) ||
				(x.id = T.safeGenerateNoDash()),
				(x.ts = window.ftr__startScriptLoad),
				p(x);
			var D = new Array(S.tmosSecs.length),
				U = function(t) {
					for (var e = 0; e < S.tmosSecs.length; e++)
						D[e] = setTimeout(o, 1e3 * S.tmosSecs[e], t + S.tmos[e]);
				},
				k = function() {
					for (var t = 0; t < S.tmosSecs.length; t++) clearTimeout(D[t]);
				};
			y(S.uDF, x.ex) ? a() : (U(S.uDF), setTimeout(u, v, S.uDF));
		} catch (t) {
			(x.ex = S.mLd), p(x);
		}
	} catch (t) {}
})();
