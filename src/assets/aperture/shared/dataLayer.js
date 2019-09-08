/**
 * datalayer modifications.
 * this file should not use jQuery.
 */
window.BH = window.BH || {};
BH.globals = BH.globals || {};
if (!String.prototype.startsWith) {
	String.prototype.startsWith = function(searchString, position) {
		position = position || 0;
		return this.substr(position, searchString.length) === searchString;
	};
}
(function(evt, cb) {
	if (document.readyState == "complete") {
		cb();
	} else if (window.addEventListener) {
		window.addEventListener(evt, cb);
	} else {
		window.attachEvent("on" + evt, cb);
	}
})("load", extractCookieAndInsertIntoDataLayer);

function extractCookieAndInsertIntoDataLayer() {
	var getCookie = function(cookie) {
		if (document.cookieObj) return document.cookieObj[cookie];
		var parts = document.cookie.split(";"),
			i,
			parts,
			part,
			name,
			val;
		document.cookieObj = {};
		for (i = 0; i < parts.length; i++) {
			part = parts[i].split("=");
			name = part.shift().trim();
			val = part.join("=").trim();
			document.cookieObj[name] = val;
		}
		return getCookie(cookie);
	};
	var url = window.location.href;
	var dataLayerCookie = decodeURIComponent(getCookie("dlc"));
	var dataLayerInfo = dataLayerCookie != null ? dataLayerCookie.split("|") : null;
	var jSessionIDCookie = getCookie("JSESSIONID");
	var jSessionID = jSessionIDCookie != null ? jSessionIDCookie.split("!")[0] : null;
	var cookieID = getCookie("cookieID") != null ? getCookie("cookieID") : null;
	var hashedRememberID = getCookie("rememberId") != null ? hashSha256(getCookie("rememberId")) : null;
	var rememberID = getCookie("rememberId") != null ? getCookie("rememberId") : null;
	var termTyped = getCookie("termTyped") != null ? getCookie("termTyped") : null;
	var SSSC_C = getCookie("SSSC_C");
	var BannerID = null;
	var portal = null;
	var isNewSession = false;

	var stsOrigin = null;
	var stsDestRaw =
		getParameter(url, "sts") != null
			? getParameter(url, "sts")
			: getCookie("stscookie") != null
			? getCookie("stscookie")
			: null;
	var stsDest = stsDestRaw != null ? convertSts(stsDestRaw) : null;

	var cm_mmc = null;
	var originalSearch = null;
	var keyWord = null;
	var isNttUrl = url.indexOf("Ntt=") != -1 || url.indexOf("/Ntt") != -1;
	var ntt = getParameter(url, "Ntt");
	var isSearch = null;
	var biDestUrl = getParameter(url, "BI");
	var emailHashed = null;
	var emailEncrypted = null;
	var atclk = getParameter(url, "atclk");
	var typedValue =
		getParameter(url, "typedValue") != null
			? getParameter(url, "typedValue")
			: getCookie("typedvaluecookie") != null
			? getCookie("typedvaluecookie")
			: null;
	var typedValueTemp = null;
	var NLPAction = getParameter(url, "NLPAction") != null ? getParameter(url, "NLPAction") : "";
	var unfilteredBI = null;
	var longitude = null;
	var latitude = null;
	var cartInfo = getCookie("TopBarCart");

	if (typedValue != null && typedValue != "") {
		termTyped = typedValue;
	}

	if (typeof dlo !== "undefined") {
		originalSearch = dlo.search.originalSearch;
	}

	if (dataLayerInfo != null) {
		for (var i = 0; i < dataLayerInfo.length; i++) {
			var key = dataLayerInfo[i].split("=")[0];
			if (key == "BI") BannerID = dataLayerInfo[i].split("=")[1];
			else if (key == "NS") isNewSession = true;
			else if (key == "STS") stsOrigin = dataLayerInfo[i].split("=")[1];
			else if (key == "CM_MMC") cm_mmc = dataLayerInfo[i].split("=")[1];
			else if (key == "SRCH" && dataLayerInfo[i].length > 5) originalSearch = dataLayerInfo[i].substring(5);
			else if (key == "KW") keyWord = dataLayerInfo[i].split("=")[1];
			else if (key == "EMLH") emailHashed = dataLayerInfo[i].split("=")[1];
			else if (key == "EMLE") emailEncrypted = dataLayerInfo[i].split(/=(.+)/)[1];
			else if (key == "TYPEDVALUE") typedValueTemp = dataLayerInfo[i].split("=")[1];
			else if (key == "UNBI") unfilteredBI = dataLayerInfo[i].split("=")[1];
			else if (key == "LONG") longitude = dataLayerInfo[i].split("=")[1];
			else if (key == "NTT" && (ntt == null || "" == ntt)) {
				ntt = dataLayerInfo[i].split("=")[1];
				if (ntt != null && "" != ntt) isNttUrl = true;
			} else if (key == "LAT") latitude = dataLayerInfo[i].split("=")[1];

			if (typedValue != null && typedValue != "") {
				termTyped = typedValueTemp;
			}
		}
	}

	if (BannerID == null && biDestUrl != null) BannerID = biDestUrl;
	if (BannerID == null) BannerID = getParameter(document.referrer, "BI");

	BannerID = cleanBannerID(BannerID);
	if (BannerID != null && getParameter(url, "gclid") != null) BannerID = null;

	isSearch = originalSearch != null || isNttUrl || (typeof dlo !== "undefined" && dlo.search.changedSearch != null);

	insert();
	delete_cookie("dlc");

	if (typeof getCookie("stscookie") !== "undefined" && getCookie("stscookie") != null) {
		delete_cookie("stscookie");
		delete_cookie("typedvaluecookie");
	}

	delete_cookie("termTyped");
	function insert() {
		if (typeof dlo !== "undefined") {
			dlo.user.bi = BannerID;
			dlo.user.isNewSession = isNewSession;
			dlo.user.emailHashed = emailHashed;
			dlo.user.optiHash = emailEncrypted;
			dlo.search.sts = stsOrigin != null ? stsOrigin : stsDest != null ? stsDest : null;
			dlo.search.originalSearch = originalSearch;
			dlo.search.isNttUrl = isNttUrl;
			dlo.search.ntt = ntt;
			if (!searchTermChanged()) dlo.search.changedSearch = null;
			dlo.search.isSearch = isSearch;
			dlo.user.jSessionId = jSessionID;
			dlo.user.rememberId = rememberID;
			dlo.user.hashedRememberID = hashedRememberID;
			dlo.user.cookieId = cookieID;
			dlo.user.SSSC_C = SSSC_C;
			dlo.user.cm_mmc = cm_mmc;
			dlo.user.dataLayerInfo = dataLayerInfo;
			dlo.user.isReferredFromOutside =
				document.referrer != null && document.referrer != "" && document.referrer.indexOf("bhphotovideo") == -1;
			dlo.user.isNoReferrer =
				typeof document.referrer == "undefined" || document.referrer == null || document.referrer == "";
			dlo.search.isSearchBoxUsed =
				dlo.search.sts != null &&
				!dlo.user.isReferredFromOutside &&
				!isRefinementClick(url) &&
				!dlo.user.isNoReferrer;
			dlo.user.kw = keyWord;
			dlo.user.unfilteredBI = unfilteredBI;
			dlo.user.longitude = longitude;
			dlo.user.latitude = latitude;

			if (dlo.user.isReferredFromOutside) dlo.user.referrer = document.referrer;

			if (window.addEventListener && !BH.globals.dloPushEvt) {
				window.addEventListener("pushstate", function() {
					if (isRefinementClick(location.href)) dlo.search.isSearchBoxUsed = false;
				});
				BH.globals.dloPushEvt = true;
			}

			if (dlo.loc == "productList" && typeof bannerCategoriesArray !== "undefined") {
				for (var i = 0; i < bannerCategoriesArray.length; i++) {
					bannerCategoriesArray[i] = getParameter(bannerCategoriesArray[i], "ci");
				}

				dlo.list.categoryBanners = bannerCategoriesArray;
			}

			if (dlo.search.sts != null && atclk == null) dlo.search.termTyped = termTyped;

			if (
				(dlo.search.termTyped == "" || dlo.search.termTyped == null) &&
				dlo.search.sts != null &&
				getCookie("typedvaluecookie") != null &&
				getCookie("typedvaluecookie") != ""
			) {
				dlo.search.sts = getCookie("stscookie");
				dlo.search.termTyped = getCookie("typedvaluecookie");
			}
			dlo.search.NLPAction = NLPAction;

			dlo.completed = "yes";
		}
	}

	function getExFld2() {
		var exFld2 = "";

		if (dlo.loc == "productList") {
			exFld2 +=
				ab(dlo.user.isUsed ? "Used" : "NEW") +
				ab(getExFld2Sub3()) +
				ab(getExFld2Sub6()) +
				ab(dlo.search.sts != null ? "Sts:" + dlo.search.sts : "Sts:---");
		} else exFld2 += "[---][---][---][---][---][---][---][---]";

		return exFld2;
	}

	function getExFld3() {
		var exFld3 = "[---][---][---][---][---][---][---][---]";

		return exFld3;
	}

	function getExFld4() {
		var exFld4 =
			ab(dlo.user.language) +
			ab(dlo.user.catalogue) +
			ab(dlo.user.b2bCatalogue) +
			ab("---") +
			ab("---") +
			ab("---") +
			getExFld4Sub8_9(dlo.user.bi) +
			ab(dlo.user.SSSC_C != null && dlo.user.SSSC_C != "" ? "SSSC:" + dlo.user.SSSC_C : "---");

		return exFld4;
	}

	function getExFld2Sub3() {
		if (dlo.search.isSearch) return dlo.search.originalSearch + "~" + dlo.search.searchCount;
		else return "NAV" + "~" + dlo.search.searchCount;
	}

	function getExFld2Sub6() {
		var value = "";

		if (searchTermChanged()) value = dlo.search.changedSearch;
		else if (dlo.search.originalSearch != null) {
			if (dlo.list.catId != "") value = "CID`" + dlo.list.catId;
		}

		if (value == "") value = "---";

		return value;
	}

	function isRefinementClick(url) {
		if (url.indexOf("atclk=") > -1) return true;
		else return false;
	}

	function searchTermChanged() {
		if (
			dlo.search.changedSearch !== "" &&
			dlo.search.changedSearch != null &&
			dlo.search.originalSearch !== "" &&
			dlo.search.originalSearch != null &&
			dlo.search.changedSearch !== dlo.search.originalSearch
		)
			return true;
		else return false;
	}

	function userCharacteristics() {
		var isLandingPage = dlo.user.isReferredFromOutside;
		var isSearch = dlo.search.isSearch;
		var searchBoxUsed = dlo.search.isSearchBoxUsed;
		var noReferer = dlo.user.isNoReferrer;
		var suffix = dlo.user.isNewSession ? "e" : "o";

		if (isLandingPage && isSearch) return "LP-SRCH" + suffix;
		else if (isLandingPage) return "LP" + suffix;
		else if (searchBoxUsed) return "OS-SRCH";
		else if (noReferer) return "NO-RFRL" + suffix;
		else return "NAV";
	}

	function nTS() {}

	function delete_cookie(name) {
		document.cookie = name + "=; expires=Thu, 01 Jan 1970 00:00:00 GMT; domain=.bhphotovideo.com; path=/";
	}

	function convertSts(stsParam) {
		if (stsParam == null) return null;

		return stsParam.startsWith("cat")
			? "Ctgrs"
			: stsParam.startsWith("ma")
			? "Manl"
			: stsParam.startsWith("ps")
			? "Psrch"
			: stsParam.startsWith("pi")
			? "Pitem"
			: stsParam.startsWith("ta")
			? "Typhd"
			: stsParam.startsWith("br")
			? "Brand"
			: stsParam.startsWith("hist-ps")
			? "Hist-ps"
			: stsParam.startsWith("hist-cat")
			? "Hist-cat"
			: stsParam.startsWith("hist-pi")
			? "Hist-pi"
			: stsParam.startsWith("suggestions-pi")
			? "Sugg-pi"
			: stsParam.startsWith("brand-pi")
			? "Brand-pi"
			: stsParam.startsWith("ccat-pi")
			? "Cat-pi"
			: stsParam.startsWith("sugst")
			? "Sugst"
			: null;
	}

	function getExField1(bannerID, cm_mmc, dataLayerInfo) {
		var bannerValue;

		if (bannerID != null) {
			var keyWord = null;
			var campaignName = null;
			var campaignDept = null;
			for (i in dataLayerInfo) {
				var key = dataLayerInfo[i].split("=")[0];
				if (key == "CN") campaignName = dataLayerInfo[i].split("=")[1];
				else if (key == "CD") campaignDept = dataLayerInfo[i].split("=")[1];
				else if (key == "KW") keyWord = dataLayerInfo[i].split("=")[1];
			}
			var bannerValue = "";
			if (campaignDept != null) bannerValue += campaignDept + "-_-";
			if (campaignName != null) bannerValue += campaignName + "-_-";
			if (bannerID != null) bannerValue += bannerID + "-_-";
			if (keyWord != null) bannerValue += keyWord + "-_-";
			bannerValue = bannerValue.substring(0, bannerValue.length - 3);

			return "cm_mmc=" + bannerValue;
		} else if (cm_mmc != null) {
			return "cm_mmc=" + cm_mmc;
		}

		return null;
	}

	function getExFld4Sub8_9(bannerID) {
		return bannerID == null ? "[---][---]" : "[BI=" + bannerID + "][" + dlo.user.kw + "]";
	}

	function getExField5(jSessionID, cookieID) {
		return "[" + cookieID + "][" + jSessionID + "]";
	}

	function getParameter(url, param) {
		if (!param || !url) return null;
		var regex, index, val;
		regex = new RegExp("[?,&,/]" + param + "[=,/][^&,/]*");
		val = url.match(regex);
		if (!val) return null;
		val = val[0];
		val = val.substr(param.length + 2);

		return val;
	}

	function ab(s) {
		if (s == null || s === "") return "[---]";
		else return "[" + s + "]";
	}

	function purify(s) {
		if (s == null) return s;

		var replacement = s.replace(/[<>]/g, " ");
		return replacement;
	}

	function cleanBannerID(bannerID) {
		if (typeof bannerID == "undefined" || bannerID == null) return bannerID;

		var s = bannerID.match(/\d+/);

		if (s != null) return s[0];
		else return null;
	}

	function hashSha256(text) {
		try {
			return sha256(text);
		} catch (e) {}

		return null;
	}
}
