// Provide a default path to dwr.engine
if (typeof this['dwr'] == 'undefined') this.dwr = {};
if (typeof dwr['engine'] == 'undefined') dwr.engine = {};
if (typeof dwr.engine['_mappedClasses'] == 'undefined') dwr.engine._mappedClasses = {};

if (window['dojo']) dojo.provide('dwr.interface.DWRHelper');

if (typeof this['DWRHelper'] == 'undefined') DWRHelper = {};

DWRHelper._path = '/bnh/dwr';

/**
 * @param {class java.lang.String} p0 a param
 * @param {function|Object} callback callback function or options object
 */
DWRHelper.log = function(p0, callback) {
  return dwr.engine._execute(DWRHelper._path, 'DWRHelper', 'log', arguments);
};

/**
 * @param {function|Object} callback callback function or options object
 */
DWRHelper.getUserInfo = function(callback) {
  return dwr.engine._execute(DWRHelper._path, 'DWRHelper', 'getUserInfo', arguments);
};

/**
 * @param {class java.lang.String} p0 a param
 * @param {function|Object} callback callback function or options object
 */
DWRHelper.setCurrency = function(p0, callback) {
  return dwr.engine._execute(DWRHelper._path, 'DWRHelper', 'setCurrency', arguments);
};

/**
 * @param {function|Object} callback callback function or options object
 */
DWRHelper.ping = function(callback) {
  return dwr.engine._execute(DWRHelper._path, 'DWRHelper', 'ping', arguments);
};

/**
 * @param {int} p0 a param
 * @param {class java.lang.String} p1 a param
 * @param {function|Object} callback callback function or options object
 */
DWRHelper.getIncludes = function(p0, p1, callback) {
  return dwr.engine._execute(DWRHelper._path, 'DWRHelper', 'getIncludes', arguments);
};

/**
 * @param {class java.lang.String} p0 a param
 * @param {class java.lang.String} p1 a param
 * @param {class java.lang.String} p2 a param
 * @param {class java.lang.String} p3 a param
 * @param {class java.lang.String} p4 a param
 * @param {class [Ljava.lang.String;} p5 a param
 * @param {function|Object} callback callback function or options object
 */
DWRHelper.login = function(p0, p1, p2, p3, p4, p5, callback) {
  return dwr.engine._execute(DWRHelper._path, 'DWRHelper', 'login', arguments);
};

/**
 * @param {class java.lang.String} p0 a param
 * @param {function|Object} callback callback function or options object
 */
DWRHelper.setLanguage = function(p0, callback) {
  return dwr.engine._execute(DWRHelper._path, 'DWRHelper', 'setLanguage', arguments);
};

/**
 * @param {class java.lang.String} p0 a param
 * @param {class java.lang.String} p1 a param
 * @param {class java.lang.String} p2 a param
 * @param {class java.lang.String} p3 a param
 * @param {class java.lang.String} p4 a param
 * @param {class java.lang.String} p5 a param
 * @param {class java.lang.String} p6 a param
 * @param {function|Object} callback callback function or options object
 */
DWRHelper.updateAddress = function(p0, p1, p2, p3, p4, p5, p6, callback) {
  return dwr.engine._execute(DWRHelper._path, 'DWRHelper', 'updateAddress', arguments);
};

/**
 * @param {class java.lang.String} p0 a param
 * @param {class java.lang.String} p1 a param
 * @param {class java.lang.String} p2 a param
 * @param {class java.lang.String} p3 a param
 * @param {class java.lang.String} p4 a param
 * @param {boolean} p5 a param
 * @param {boolean} p6 a param
 * @param {class java.lang.String} p7 a param
 * @param {class java.lang.String} p8 a param
 * @param {class java.lang.String} p9 a param
 * @param {class java.lang.Oject}  p10 a param
 * @param {function|Object} callback callback function or options object
 */
DWRHelper.addCreditCard = function(p0, p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, callback) {
  return dwr.engine._execute(DWRHelper._path, 'DWRHelper', 'addCreditCard', arguments);
};

/**
 * @param {class java.lang.String} p0 a param
 * @param {class java.lang.String} p1 a param
 * @param {class java.lang.String} p2 a param
 * @param {class java.lang.String} p3 a param
 * @param {class java.lang.String} p4 a param
 * @param {boolean} p5 a param
 * @param {boolean} p6 a param
 * @param {class java.lang.String} p7 a param
 * @param {class java.lang.String} p8 a param
 * @param {class java.lang.String} p9 a param
 * @param {function|Object} callback callback function or options object
 */
DWRHelper.addCreditCardWithToken = function(p0, p1, p2, p3, p4, p5, p6, p7, p8, p9, callback) {
  return dwr.engine._execute(DWRHelper._path, 'DWRHelper', 'addCreditCardWithToken', arguments);
};

/**
 * @param {class java.lang.String} p0 a param
 * @param {function|Object} callback callback function or options object
 */
DWRHelper.getSchool = function(p0, callback) {
  return dwr.engine._execute(DWRHelper._path, 'DWRHelper', 'getSchool', arguments);
};

/**
 * @param {class java.lang.String} p0 a param
 * @param {class java.lang.String} p1 a param
 * @param {function|Object} callback callback function or options object
 */
DWRHelper.getModels = function(p0, p1, callback) {
  return dwr.engine._execute(DWRHelper._path, 'DWRHelper', 'getModels', arguments);
};

/**
 * @param {class java.lang.String} p0 a param
 * @param {class java.lang.String} p1 a param
 * @param {class java.lang.String} p2 a param
 * @param {function|Object} callback callback function or options object
 */
DWRHelper.getAccessoriesForItemOnLabel = function(p0, p1, p2, callback) {
  return dwr.engine._execute(DWRHelper._path, 'DWRHelper', 'getAccessoriesForItemOnLabel', arguments);
};

/**
 * @param {class java.lang.String} p0 a param
 * @param {class java.lang.String} p1 a param
 * @param {class java.lang.String} p2 a param
 * @param {boolean} p3 a param
 * @param {function|Object} callback callback function or options object
 */
DWRHelper.getAccessoriesForItemOnLabel2 = function(p0, p1, p2, p3, callback) {
  return dwr.engine._execute(DWRHelper._path, 'DWRHelper', 'getAccessoriesForItemOnLabel2', arguments);
};

/**
 * @param {class java.lang.String} p0 a param
 * @param {class java.lang.String} p1 a param
 * @param {class java.lang.String} p2 a param
 * @param {function|Object} callback callback function or options object
 */
DWRHelper.getKitItems = function(p0, p1, p2, callback) {
  return dwr.engine._execute(DWRHelper._path, 'DWRHelper', 'getKitItems', arguments);
};

/**
 * @param {class java.lang.String} p0 a param
 * @param {class java.lang.String} p1 a param
 * @param {class java.lang.String} p2 a param
 * @param {function|Object} callback callback function or options object
 */
DWRHelper.addToComparisonChart = function(p0, p1, p2, callback) {
  return dwr.engine._execute(DWRHelper._path, 'DWRHelper', 'addToComparisonChart', arguments);
};

/**
 * @param {class java.lang.String} p0 a param
 * @param {class java.lang.String} p1 a param
 * @param {class java.lang.String} p2 a param
 * @param {function|Object} callback callback function or options object
 */
DWRHelper.removeFromComparisonChart = function(p0, p1, p2, callback) {
  return dwr.engine._execute(DWRHelper._path, 'DWRHelper', 'removeFromComparisonChart', arguments);
};

/**
 * @param {function|Object} callback callback function or options object
 */
DWRHelper.clearCompareChart = function(callback) {
  return dwr.engine._execute(DWRHelper._path, 'DWRHelper', 'clearCompareChart', arguments);
};

/**
 * @param {class java.lang.String} p0 a param
 * @param {function|Object} callback callback function or options object
 */
DWRHelper.isZipCodeRequired = function(p0, callback) {
  return dwr.engine._execute(DWRHelper._path, 'DWRHelper', 'isZipCodeRequired', arguments);
};

/**
 * @param {int} p0 a param
 * @param {class java.lang.String} p1 a param
 * @param {function|Object} callback callback function or options object
 */
DWRHelper.getFeatures = function(p0, p1, callback) {
  return dwr.engine._execute(DWRHelper._path, 'DWRHelper', 'getFeatures', arguments);
};

/**
 * @param {int} p0 a param
 * @param {class java.lang.String} p1 a param
 * @param {function|Object} callback callback function or options object
 */
DWRHelper.getSpecifications = function(p0, p1, callback) {
  return dwr.engine._execute(DWRHelper._path, 'DWRHelper', 'getSpecifications', arguments);
};

/**
 * @param {int} p0 a param
 * @param {class java.lang.String} p1 a param
 * @param {function|Object} callback callback function or options object
 */
DWRHelper.getKitComments = function(p0, p1, callback) {
  return dwr.engine._execute(DWRHelper._path, 'DWRHelper', 'getKitComments', arguments);
};

/**
 * @param {class java.lang.String} p0 a param
 * @param {class java.lang.String} p1 a param
 * @param {class java.lang.String} p2 a param
 * @param {class java.lang.String} p3 a param
 * @param {class java.lang.String} p4 a param
 * @param {class java.lang.String} p5 a param
 * @param {boolean} p6 a param
 * @param {function|Object} callback callback function or options object
 */
DWRHelper.getMonthsEvents = function(p0, p1, p2, p3, p4, p5, p6, callback) {
  return dwr.engine._execute(DWRHelper._path, 'DWRHelper', 'getMonthsEvents', arguments);
};

/**
 * @param {class java.lang.String} p0 a param
 * @param {class java.lang.String} p1 a param
 * @param {boolean} p2 a param
 * @param {function|Object} callback callback function or options object
 */
DWRHelper.getMonthsEvents = function(p0, p1, p2, callback) {
  return dwr.engine._execute(DWRHelper._path, 'DWRHelper', 'getMonthsEvents', arguments);
};

/**
 * @param {function|Object} callback callback function or options object
 */
DWRHelper.getLastMonthEvents = function(callback) {
  return dwr.engine._execute(DWRHelper._path, 'DWRHelper', 'getLastMonthEvents', arguments);
};

/**
 * @param {class java.lang.String} p0 a param
 * @param {class java.lang.String} p1 a param
 * @param {class java.lang.String} p2 a param
 * @param {function|Object} callback callback function or options object
 */
DWRHelper.setLastMonthEvents = function(p0, p1, p2, callback) {
  return dwr.engine._execute(DWRHelper._path, 'DWRHelper', 'setLastMonthEvents', arguments);
};

/**
 * @param {int} p0 a param
 * @param {int} p1 a param
 * @param {int} p2 a param
 * @param {int} p3 a param
 * @param {boolean} p4 a param
 * @param {function|Object} callback callback function or options object
 */
DWRHelper.getDatesOfEvents = function(p0, p1, p2, p3, p4, callback) {
  return dwr.engine._execute(DWRHelper._path, 'DWRHelper', 'getDatesOfEvents', arguments);
};

/**
 * @param {class java.lang.String} p0 a param
 * @param {class java.lang.String} p1 a param
 * @param {class java.lang.String} p2 a param
 * @param {boolean} p3 a param
 * @param {function|Object} callback callback function or options object
 */
DWRHelper.getShipMethods = function(p0, p1, p2, p3, callback) {
  return dwr.engine._execute(DWRHelper._path, 'DWRHelper', 'getShipMethods', arguments);
};

/**
 * @param {function|Object} callback callback function or options object
 */
DWRHelper.getGiftMethods = function(callback) {
  return dwr.engine._execute(DWRHelper._path, 'DWRHelper', 'getGiftMethods', arguments);
};

/**
 * @param {class java.lang.String} p0 a param
 * @param {function|Object} callback callback function or options object
 */
DWRHelper.applyPromoCode = function(p0, callback) {
  return dwr.engine._execute(DWRHelper._path, 'DWRHelper', 'applyPromoCode', arguments);
};

/**
 * @param {int} p0 a param
 * @param {double} p1 a param
 * @param {function|Object} callback callback function or options object
 */
DWRHelper.getLeasingCharge = function(p0, p1, callback) {
  return dwr.engine._execute(DWRHelper._path, 'DWRHelper', 'getLeasingCharge', arguments);
};

/**
 * @param {class java.lang.String} p0 a param
 * @param {class java.lang.String} p1 a param
 * @param {class java.lang.String} p2 a param
 * @param {class java.lang.String} p3 a param
 * @param {int} p4 a param
 * @param {class java.lang.String} p5 a param
 * @param {function|Object} callback callback function or options object
 */
DWRHelper.calculateLandedCost = function(p0, p1, p2, p3, p4, p5, callback) {
  return dwr.engine._execute(DWRHelper._path, 'DWRHelper', 'calculateLandedCost', arguments);
};

/**
 * @param {class java.lang.String} p0 a param
 * @param {function|Object} callback callback function or options object
 */
DWRHelper.getSuggestedSearch = function(p0, callback) {
  return dwr.engine._execute(DWRHelper._path, 'DWRHelper', 'getSuggestedSearch', arguments);
};

/**
 * @param {int} p0 a param
 * @param {class java.lang.String} p1 a param
 * @param {class java.lang.String} p2 a param
 * @param {class java.lang.String} p3 a param
 * @param {class java.lang.String} p4 a param
 * @param {class java.lang.String} p5 a param
 * @param {class java.lang.String} p6 a param
 * @param {class java.lang.String} p7 a param
 * @param {class java.lang.String} p8 a param
 * @param {class java.lang.String} p9 a param
 * @param {class java.lang.String} p10 a param
 * @param {class java.lang.String} p11 a param
 * @param {function|Object} callback callback function or options object
 */
DWRHelper.addToCart = function(p0, p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, p11, callback) {
  return dwr.engine._execute(DWRHelper._path, 'DWRHelper', 'addToCart', arguments);
};

/**
 * @param {int} p0 a param
 * @param {class java.lang.String} p1 a param
 * @param {class java.lang.String} p2 a param
 * @param {function|Object} callback callback function or options object
 */
DWRHelper.getWishLists = function(p0, p1, p2, callback) {
  return dwr.engine._execute(DWRHelper._path, 'DWRHelper', 'getWishLists', arguments);
};

/**
 * @param {class java.lang.String} p0 a param
 * @param {function|Object} callback callback function or options object
 */
DWRHelper.getWishListsForMoveCart = function(p0, callback) {
  return dwr.engine._execute(DWRHelper._path, 'DWRHelper', 'getWishListsForMoveCart', arguments);
};

/**
 * @param {class java.lang.String} p0 a param
 * @param {function|Object} callback callback function or options object
 */
DWRHelper.getWishListsForMoveWishList = function(p0, callback) {
  return dwr.engine._execute(DWRHelper._path, 'DWRHelper', 'getWishListsForMoveWishList', arguments);
};

/**
 * @param {int} p0 a param
 * @param {class java.lang.String} p1 a param
 * @param {class java.lang.String} p2 a param
 * @param {class java.lang.String} p3 a param
 * @param {function|Object} callback callback function or options object
 */
DWRHelper.getWishListsForMoveWishListItem = function(p0, p1, p2, p3, callback) {
  return dwr.engine._execute(DWRHelper._path, 'DWRHelper', 'getWishListsForMoveWishListItem', arguments);
};

/**
 * @param {class java.lang.String} p0 a param
 * @param {class java.lang.String} p1 a param
 * @param {class java.lang.String} p2 a param
 * @param {class java.lang.String} p3 a param
 * @param {class java.lang.String} p4 a param
 * @param {class java.lang.String} p5 a param
 * @param {boolean} p6 a param
 * @param {boolean} p7 a param
 * @param {boolean} p8 a param
 * @param {class java.lang.String} p9 a param
 * @param {class java.lang.String} p10 a param
 * @param {class java.lang.String} p11 a param
 * @param {class [Ljava.lang.Integer;} p12 a param
 * @param {class [Ljava.lang.String;} p13 a param
 * @param {boolean} p14 a param
 * @param {function|Object} callback callback function or options object
 */
DWRHelper.addToWishList = function(p0, p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, p11, p12, p13, p14, callback) {
  return dwr.engine._execute(DWRHelper._path, 'DWRHelper', 'addToWishList', arguments);
};

/**
 * @param {class java.lang.String} p0 a param
 * @param {class java.lang.String} p1 a param
 * @param {class java.lang.String} p2 a param
 * @param {class java.lang.String} p3 a param
 * @param {boolean} p4 a param
 * @param {function|Object} callback callback function or options object
 */
DWRHelper.addWishListToCart = function(p0, p1, p2, p3, p4, callback) {
  return dwr.engine._execute(DWRHelper._path, 'DWRHelper', 'addWishListToCart', arguments);
};

/**
 * @param {class java.lang.String} p0 a param
 * @param {class java.lang.String} p1 a param
 * @param {class java.lang.String} p2 a param
 * @param {class java.lang.String} p3 a param
 * @param {class java.lang.String} p4 a param
 * @param {function|Object} callback callback function or options object
 */
DWRHelper.loginWithQualifier = function(p0, p1, p2, p3, p4, callback) {
  return dwr.engine._execute(DWRHelper._path, 'DWRHelper', 'loginWithQualifier', arguments);
};

/**
 * @param {class java.lang.String} p0 a param
 * @param {class java.lang.String} p1 a param
 * @param {int} p2 a param
 * @param {class java.lang.String} p3 a param
 * @param {class java.lang.String} p4 a param
 * @param {class java.lang.String} p5 a param
 * @param {class java.lang.String} p6 a param
 * @param {class java.lang.String} p7 a param
 * @param {class java.lang.String} p8 a param
 * @param {class [Ljava.lang.String;} p9 a param
 * @param {function|Object} callback callback function or options object
 */
DWRHelper.loginFromLayer = function(p0, p1, p2, p3, p4, p5, p6, p7, p8, p9, callback) {
  return dwr.engine._execute(DWRHelper._path, 'DWRHelper', 'loginFromLayer', arguments);
};

/**
 * @param {class java.lang.String} p0 a param
 * @param {class java.lang.String} p1 a param
 * @param {function|Object} callback callback function or options object
 */
DWRHelper.loginFromInvoice = function(p0, p1, callback) {
  return dwr.engine._execute(DWRHelper._path, 'DWRHelper', 'loginFromInvoice', arguments);
};

/**
 * @param {class java.lang.String} p0 a param
 * @param {class java.lang.String} p1 a param
 * @param {function|Object} callback callback function or options object
 */
DWRHelper.forgotPassword = function(p0, p1, callback) {
  return dwr.engine._execute(DWRHelper._path, 'DWRHelper', 'forgotPassword', arguments);
};

/**
 * @param {class java.lang.String} p0 a param
 * @param {class java.lang.String} p1 a param
 * @param {class java.lang.String} p2 a param
 * @param {function|Object} callback callback function or options object
 */
DWRHelper.forgotPasswordFromLayer = function(p0, p1, p2, callback) {
  return dwr.engine._execute(DWRHelper._path, 'DWRHelper', 'forgotPasswordFromLayer', arguments);
};

/**
 * @param {class java.lang.String} p0 a param
 * @param {class java.lang.String} p1 a param
 * @param {class java.lang.String} p2 a param
 * @param {class java.lang.String} p3 a param
 * @param {class java.lang.String} p4 a param
 * @param {class java.lang.String} p5 a param
 * @param {class java.lang.String} p6 a param
 * @param {class java.lang.String} p7 a param
 * @param {class java.lang.String} p8 a param
 * @param {class [Ljava.lang.String;} p9 a param
 * @param {function|Object} callback callback function or options object
 */
DWRHelper.newAccount = function(p0, p1, p2, p3, p4, p5, p6, p7, p8, p9, callback) {
  return dwr.engine._execute(DWRHelper._path, 'DWRHelper', 'newAccount', arguments);
};

/**
 * @param {class java.lang.String} p0 a param
 * @param {class java.lang.String} p1 a param
 * @param {class java.lang.String} p2 a param
 * @param {class java.lang.String} p3 a param
 * @param {function|Object} callback callback function or options object
 */
DWRHelper.newAccountFromInvoice = function(p0, p1, p2, p3, callback) {
  return dwr.engine._execute(DWRHelper._path, 'DWRHelper', 'newAccountFromInvoice', arguments);
};

/**
 * @param {class java.lang.String} p0 a param
 * @param {class java.lang.String} p1 a param
 * @param {class java.lang.String} p2 a param
 * @param {class java.lang.String} p3 a param
 * @param {class java.lang.String} p4 a param
 * @param {class java.lang.String} p5 a param
 * @param {int} p6 a param
 * @param {class java.lang.String} p7 a param
 * @param {class java.lang.String} p8 a param
 * @param {class java.lang.String} p9 a param
 * @param {class java.lang.String} p10 a param
 * @param {class java.lang.String} p11 a param
 * @param {class java.lang.String} p12 a param
 * @param {class [Ljava.lang.String;} p13 a param
 * @param {function|Object} callback callback function or options object
 */
DWRHelper.newAccountFromLayer = function(p0, p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, p11, p12, p13, callback) {
  return dwr.engine._execute(DWRHelper._path, 'DWRHelper', 'newAccountFromLayer', arguments);
};

/**
 * @param {class java.lang.String} p0 a param
 * @param {class java.lang.String} p1 a param
 * @param {class java.lang.String} p2 a param
 * @param {class java.lang.String} p3 a param
 * @param {class java.lang.String} p4 a param
 * @param {class java.lang.String} p5 a param
 * @param {class java.lang.String} p6 a param
 * @param {class java.lang.String} p7 a param
 * @param {boolean} p8 a param
 * @param {function|Object} callback callback function or options object
 */
DWRHelper.newAccountWithAjax = function(p0, p1, p2, p3, p4, p5, p6, p7, p8, callback) {
  return dwr.engine._execute(DWRHelper._path, 'DWRHelper', 'newAccountWithAjax', arguments);
};

/**
 * @param {int} p0 a param
 * @param {function|Object} callback callback function or options object
 */
DWRHelper.getNotifyMe = function(p0, callback) {
  return dwr.engine._execute(DWRHelper._path, 'DWRHelper', 'getNotifyMe', arguments);
};

/**
 * @param {class java.lang.String} p0 a param
 * @param {int} p1 a param
 * @param {class java.lang.String} p2 a param
 * @param {class java.lang.String} p3 a param
 * @param {function|Object} callback callback function or options object
 */
DWRHelper.notifyMe = function(p0, p1, p2, p3, callback) {
  return dwr.engine._execute(DWRHelper._path, 'DWRHelper', 'notifyMe', arguments);
};

/**
 * @param {function|Object} callback callback function or options object
 */
DWRHelper.getCartInfo = function(callback) {
  return dwr.engine._execute(DWRHelper._path, 'DWRHelper', 'getCartInfo', arguments);
};

/**
 * @param {class java.lang.String} p0 a param
 * @param {class java.lang.String} p1 a param
 * @param {class java.lang.String} p2 a param
 * @param {function|Object} callback callback function or options object
 */
DWRHelper.deleteFromWishList = function(p0, p1, p2, callback) {
  return dwr.engine._execute(DWRHelper._path, 'DWRHelper', 'deleteFromWishList', arguments);
};

/**
 * @param {class java.lang.String} p0 a param
 * @param {class java.lang.String} p1 a param
 * @param {class java.lang.String} p2 a param
 * @param {function|Object} callback callback function or options object
 */
DWRHelper.deleteItemFromWishList = function(p0, p1, p2, callback) {
  return dwr.engine._execute(DWRHelper._path, 'DWRHelper', 'deleteItemFromWishList', arguments);
};

/**
 * @param {class java.lang.String} p0 a param
 * @param {class [Ljava.lang.Integer;} p1 a param
 * @param {class [Ljava.lang.String;} p2 a param
 * @param {function|Object} callback callback function or options object
 */
DWRHelper.removeItemsFromWishList = function(p0, p1, p2, callback) {
  return dwr.engine._execute(DWRHelper._path, 'DWRHelper', 'removeItemsFromWishList', arguments);
};

/**
 * @param {class java.lang.String} p0 a param
 * @param {class java.lang.String} p1 a param
 * @param {function|Object} callback callback function or options object
 */
DWRHelper.adjustWishlistTotal = function(p0, p1, callback) {
  return dwr.engine._execute(DWRHelper._path, 'DWRHelper', 'adjustWishlistTotal', arguments);
};

/**
 * @param {class java.lang.String} p0 a param
 * @param {class java.lang.String} p1 a param
 * @param {class java.lang.String} p2 a param
 * @param {int} p3 a param
 * @param {function|Object} callback callback function or options object
 */
DWRHelper.setQtyWished = function(p0, p1, p2, p3, callback) {
  return dwr.engine._execute(DWRHelper._path, 'DWRHelper', 'setQtyWished', arguments);
};

/**
 * @param {class java.lang.String} p0 a param
 * @param {boolean} p1 a param
 * @param {function|Object} callback callback function or options object
 */
DWRHelper.setIsShared = function(p0, p1, callback) {
  return dwr.engine._execute(DWRHelper._path, 'DWRHelper', 'setIsShared', arguments);
};

/**
 * @param {class java.lang.String} p0 a param
 * @param {class java.lang.String} p1 a param
 * @param {class java.lang.String} p2 a param
 * @param {class java.lang.String} p3 a param
 * @param {function|Object} callback callback function or options object
 */
DWRHelper.updateCart = function(p0, p1, p2, p3, callback) {
  return dwr.engine._execute(DWRHelper._path, 'DWRHelper', 'updateCart', arguments);
};

/**
 * @param {class java.lang.String} p0 a param
 * @param {class java.lang.String} p1 a param
 * @param {class java.lang.String} p2 a param
 * @param {function|Object} callback callback function or options object
 */
DWRHelper.updateCart = function(p0, p1, p2, callback) {
  return dwr.engine._execute(DWRHelper._path, 'DWRHelper', 'updateCart', arguments);
};

/**
 * @param {class java.lang.String} p0 a param
 * @param {class java.lang.String} p1 a param
 * @param {function|Object} callback callback function or options object
 */
DWRHelper.removeFromCart = function(p0, p1, callback) {
  return dwr.engine._execute(DWRHelper._path, 'DWRHelper', 'removeFromCart', arguments);
};

/**
 * @param {class java.lang.String} p0 a param
 * @param {class java.lang.String} p1 a param
 * @param {class java.lang.String} p2 a param
 * @param {function|Object} callback callback function or options object
 */
DWRHelper.removeWarranty = function(p0, p1, p2, callback) {
  return dwr.engine._execute(DWRHelper._path, 'DWRHelper', 'removeWarranty', arguments);
};

/**
 * @param {class java.lang.String} p0 a param
 * @param {class java.lang.String} p1 a param
 * @param {class java.lang.String} p2 a param
 * @param {function|Object} callback callback function or options object
 */
DWRHelper.removeInstallation = function(p0, p1, p2, callback) {
  return dwr.engine._execute(DWRHelper._path, 'DWRHelper', 'removeInstallation', arguments);
};

/**
 * @param {class java.lang.String} p0 a param
 * @param {class java.lang.String} p1 a param
 * @param {function|Object} callback callback function or options object
 */
DWRHelper.removeFromCartLayer = function(p0, p1, callback) {
  return dwr.engine._execute(DWRHelper._path, 'DWRHelper', 'removeFromCartLayer', arguments);
};

/**
 * @param {class java.lang.String} p0 a param
 * @param {class java.lang.String} p1 a param
 * @param {class java.lang.String} p2 a param
 * @param {class java.lang.String} p3 a param
 * @param {class java.lang.String} p4 a param
 * @param {function|Object} callback callback function or options object
 */
DWRHelper.addWarranty = function(p0, p1, p2, p3, p4, callback) {
  return dwr.engine._execute(DWRHelper._path, 'DWRHelper', 'addWarranty', arguments);
};

/**
 * @param {class java.lang.String} p0 a param
 * @param {class java.lang.String} p1 a param
 * @param {class java.lang.String} p2 a param
 * @param {class java.lang.String} p3 a param
 * @param {function|Object} callback callback function or options object
 */
DWRHelper.addInstallation = function(p0, p1, p2, p3, callback) {
  return dwr.engine._execute(DWRHelper._path, 'DWRHelper', 'addInstallation', arguments);
};

/**
 * @param {class java.lang.String} p0 a param
 * @param {class java.lang.String} p1 a param
 * @param {function|Object} callback callback function or options object
 */
DWRHelper.showAccessoriesInCart = function(p0, p1, callback) {
  return dwr.engine._execute(DWRHelper._path, 'DWRHelper', 'showAccessoriesInCart', arguments);
};

/**
 * @param {function|Object} callback callback function or options object
 */
DWRHelper.refreshCart = function(callback) {
  return dwr.engine._execute(DWRHelper._path, 'DWRHelper', 'refreshCart', arguments);
};

/**
 * @param {class java.lang.String} p0 a param
 * @param {class java.lang.String} p1 a param
 * @param {class java.lang.String} p2 a param
 * @param {function|Object} callback callback function or options object
 */
DWRHelper.getKelbyPage = function(p0, p1, p2, callback) {
  return dwr.engine._execute(DWRHelper._path, 'DWRHelper', 'getKelbyPage', arguments);
};

/**
 * @param {function|Object} callback callback function or options object
 */
DWRHelper.getjQueryValidation = function(callback) {
  return dwr.engine._execute(DWRHelper._path, 'DWRHelper', 'getjQueryValidation', arguments);
};

/**
 * @param {class java.lang.String} p0 a param
 * @param {class java.lang.String} p1 a param
 * @param {class java.lang.String} p2 a param
 * @param {function|Object} callback callback function or options object
 */
DWRHelper.loginForCheckout = function(p0, p1, p2, callback) {
  return dwr.engine._execute(DWRHelper._path, 'DWRHelper', 'loginForCheckout', arguments);
};

/**
 * @param {class java.lang.String} p0 a param
 * @param {function|Object} callback callback function or options object
 */
DWRHelper.loginForExpireCheckout = function(p0, callback) {
  return dwr.engine._execute(DWRHelper._path, 'DWRHelper', 'loginForExpireCheckout', arguments);
};

/**
 * @param {class java.lang.String} p0 a param
 * @param {class java.lang.String} p1 a param
 * @param {class java.lang.String} p2 a param
 * @param {function|Object} callback callback function or options object
 */
DWRHelper.getPasswordForCheckout = function(p0, p1, p2, callback) {
  return dwr.engine._execute(DWRHelper._path, 'DWRHelper', 'getPasswordForCheckout', arguments);
};

/**
 * @param {class java.lang.String} p0 a param
 * @param {class java.lang.String} p1 a param
 * @param {class java.lang.String} p2 a param
 * @param {function|Object} callback callback function or options object
 */
DWRHelper.getPasswordWithQualifier = function(p0, p1, p2, callback) {
  return dwr.engine._execute(DWRHelper._path, 'DWRHelper', 'getPasswordWithQualifier', arguments);
};

/**
 * @param {class java.lang.String} p0 a param
 * @param {class java.lang.String} p1 a param
 * @param {class java.lang.String} p2 a param
 * @param {class java.lang.String} p3 a param
 * @param {class java.lang.String} p4 a param
 * @param {class java.lang.String} p5 a param
 * @param {class java.lang.String} p6 a param
 * @param {class java.lang.String} p7 a param
 * @param {class java.lang.String} p8 a param
 * @param {function|Object} callback callback function or options object
 */
DWRHelper.registerForCheckout = function(p0, p1, p2, p3, p4, p5, p6, p7, p8, callback) {
  return dwr.engine._execute(DWRHelper._path, 'DWRHelper', 'registerForCheckout', arguments);
};

/**
 * @param {class java.lang.String} p0 a param
 * @param {class java.lang.String} p1 a param
 * @param {class java.lang.String} p2 a param
 * @param {function|Object} callback callback function or options object
 */
DWRHelper.sortCompare = function(p0, p1, p2, callback) {
  return dwr.engine._execute(DWRHelper._path, 'DWRHelper', 'sortCompare', arguments);
};

/**
 * @param {class java.lang.String} p0 a param
 * @param {function|Object} callback callback function or options object
 */
DWRHelper.removeItemFromComparisonChart = function(p0, callback) {
  return dwr.engine._execute(DWRHelper._path, 'DWRHelper', 'removeItemFromComparisonChart', arguments);
};

/**
 * @param {class java.lang.String} p0 a param
 * @param {class java.lang.String} p1 a param
 * @param {class java.lang.String} p2 a param
 * @param {class java.lang.String} p3 a param
 * @param {class java.lang.String} p4 a param
 * @param {function|Object} callback callback function or options object
 */
DWRHelper.updateBundleItemQty = function(p0, p1, p2, p3, p4, callback) {
  return dwr.engine._execute(DWRHelper._path, 'DWRHelper', 'updateBundleItemQty', arguments);
};

/**
 * @param {class java.lang.String} p0 a param
 * @param {class java.lang.String} p1 a param
 * @param {function|Object} callback callback function or options object
 */
DWRHelper.updateBundleMainItemQty = function(p0, p1, callback) {
  return dwr.engine._execute(DWRHelper._path, 'DWRHelper', 'updateBundleMainItemQty', arguments);
};

/**
 * @param {class java.lang.String} p0 a param
 * @param {class java.lang.String} p1 a param
 * @param {class java.lang.String} p2 a param
 * @param {boolean} p3 a param
 * @param {function|Object} callback callback function or options object
 */
DWRHelper.emailCompare = function(p0, p1, p2, p3, callback) {
  return dwr.engine._execute(DWRHelper._path, 'DWRHelper', 'emailCompare', arguments);
};

/**
 * @param {function|Object} callback callback function or options object
 */
DWRHelper.getUsersItemCompareSize = function(callback) {
  return dwr.engine._execute(DWRHelper._path, 'DWRHelper', 'getUsersItemCompareSize', arguments);
};

/**
 * @param {class java.lang.String} p0 a param
 * @param {class java.lang.String} p1 a param
 * @param {function|Object} callback callback function or options object
 */
DWRHelper.setSessionAttribute = function(p0, p1, callback) {
  return dwr.engine._execute(DWRHelper._path, 'DWRHelper', 'setSessionAttribute', arguments);
};

/**
 * @param {class java.lang.String} p0 a param
 * @param {function|Object} callback callback function or options object
 */
DWRHelper.addEmailSubscription = function(p0, callback) {
  return dwr.engine._execute(DWRHelper._path, 'DWRHelper', 'addEmailSubscription', arguments);
};

/**
 * @param {class java.lang.String} p0 a param
 * @param {class java.lang.String} p1 a param
 * @param {function|Object} callback callback function or options object
 */
DWRHelper.isTopCategoryEqual = function(p0, p1, callback) {
  return dwr.engine._execute(DWRHelper._path, 'DWRHelper', 'isTopCategoryEqual', arguments);
};

/**
 * @param {class java.lang.String} p0 a param
 * @param {class java.lang.String} p1 a param
 * @param {function|Object} callback callback function or options object
 */
DWRHelper.addCheckoutPreference = function(p0, p1, callback) {
  return dwr.engine._execute(DWRHelper._path, 'DWRHelper', 'addCheckoutPreference', arguments);
};

/**
 * @param {class java.lang.String} p0 a param
 * @param {class java.lang.String} p1 a param
 * @param {class java.lang.String} p2 a param
 * @param {boolean} p3 a param
 * @param {function|Object} callback callback function or options object
 */
DWRHelper.createWishList = function(p0, p1, p2, p3, callback) {
  return dwr.engine._execute(DWRHelper._path, 'DWRHelper', 'createWishList', arguments);
};

/**
 * @param {class java.lang.String} p0 a param
 * @param {function|Object} callback callback function or options object
 */
DWRHelper.deleteWishList = function(p0, callback) {
  return dwr.engine._execute(DWRHelper._path, 'DWRHelper', 'deleteWishList', arguments);
};

/**
 * @param {int} p0 a param
 * @param {function|Object} callback callback function or options object
 */
DWRHelper.setItemsPerPageForWishList = function(p0, callback) {
  return dwr.engine._execute(DWRHelper._path, 'DWRHelper', 'setItemsPerPageForWishList', arguments);
};

/**
 * @param {class java.lang.String} p0 a param
 * @param {boolean} p1 a param
 * @param {function|Object} callback callback function or options object
 */
DWRHelper.getWishListEditLayer = function(p0, p1, callback) {
  return dwr.engine._execute(DWRHelper._path, 'DWRHelper', 'getWishListEditLayer', arguments);
};

/**
 * @param {class java.lang.String} p0 a param
 * @param {class java.lang.String} p1 a param
 * @param {class java.lang.String} p2 a param
 * @param {class java.lang.String} p3 a param
 * @param {boolean} p4 a param
 * @param {function|Object} callback callback function or options object
 */
DWRHelper.updateWishList = function(p0, p1, p2, p3, p4, callback) {
  return dwr.engine._execute(DWRHelper._path, 'DWRHelper', 'updateWishList', arguments);
};

/**
 * @param {class java.lang.String} p0 a param
 * @param {class java.lang.String} p1 a param
 * @param {function|Object} callback callback function or options object
 */
DWRHelper.getGiftCardBalance = function(p0, p1, callback) {
  return dwr.engine._execute(DWRHelper._path, 'DWRHelper', 'getGiftCardBalance', arguments);
};

/**
 * @param {class java.lang.String} p0 a param
 * @param {class java.lang.String} p1 a param
 * @param {function|Object} callback callback function or options object
 */
DWRHelper.getGiftCardBalanceForCheckout = function(p0, p1, callback) {
  return dwr.engine._execute(DWRHelper._path, 'DWRHelper', 'getGiftCardBalanceForCheckout', arguments);
};

/**
 * @param {class java.lang.String} p0 a param
 * @param {class java.lang.String} p1 a param
 * @param {int} p2 a param
 * @param {class java.lang.String} p3 a param
 * @param {function|Object} callback callback function or options object
 */
DWRHelper.loadQuickFinder = function(p0, p1, p2, p3, callback) {
  return dwr.engine._execute(DWRHelper._path, 'DWRHelper', 'loadQuickFinder', arguments);
};

/**
 * @param {class java.lang.String} p0 a param
 * @param {class java.lang.String} p1 a param
 * @param {class java.lang.String} p2 a param
 * @param {class java.lang.String} p3 a param
 * @param {class java.lang.String} p4 a param
 * @param {class java.lang.String} p5 a param
 * @param {class java.lang.String} p6 a param
 * @param {class java.lang.String} p7 a param
 * @param {class java.lang.String} p8 a param
 * @param {class java.lang.String} p9 a param
 * @param {class java.lang.String} p10 a param
 * @param {class java.lang.String} p11 a param
 * @param {class java.lang.String} p12 a param
 * @param {class java.lang.String} p13 a param
 * @param {class java.lang.String} p14 a param
 * @param {class java.lang.String} p15 a param
 * @param {boolean} p16 a param
 * @param {class java.lang.String} p17 a param
 * @param {class java.lang.String} p18 a param
 * @param {class java.lang.String} p19 a param
 * @param {class java.lang.String} p20 a param
 * @param {class java.lang.String} p21 a param
 * @param {boolean} p22 a param
 * @param {function|Object} callback callback function or options object
 */
DWRHelper.saveAddress = function(p0, p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, p11, p12, p13, p14, p15, p16, p17, p18, p19, p20, p21, p22, callback) {
  return dwr.engine._execute(DWRHelper._path, 'DWRHelper', 'saveAddress', arguments);
};

/**
 * @param {boolean} p0 a param
 * @param {function|Object} callback callback function or options object
 */
DWRHelper.setShipSameAsBill = function(p0, callback) {
  return dwr.engine._execute(DWRHelper._path, 'DWRHelper', 'setShipSameAsBill', arguments);
};

/**
 * @param {class java.lang.String} p0 a param
 * @param {class java.lang.String} p1 a param
 * @param {function|Object} callback callback function or options object
 */
DWRHelper.selectShipMethod = function(p0, p1, callback) {
  return dwr.engine._execute(DWRHelper._path, 'DWRHelper', 'selectShipMethod', arguments);
};

/**
 * @param {class java.lang.String} p0 a param
 * @param {function|Object} callback callback function or options object
 */
DWRHelper.selectProfile = function(p0, callback) {
  return dwr.engine._execute(DWRHelper._path, 'DWRHelper', 'selectProfile', arguments);
};

/**
 * @param {class java.lang.String} p0 a param
 * @param {function|Object} callback callback function or options object
 */
DWRHelper.setSplitOrder = function(p0, callback) {
  return dwr.engine._execute(DWRHelper._path, 'DWRHelper', 'setSplitOrder', arguments);
};

/**
 * @param {boolean} p0 a param
 * @param {boolean} p1 a param
 * @param {function|Object} callback callback function or options object
 */
DWRHelper.setIsGift = function(p0, p1, callback) {
  return dwr.engine._execute(DWRHelper._path, 'DWRHelper', 'setIsGift', arguments);
};

/**
 * @param {class java.lang.String} p0 a param
 * @param {class java.lang.String} p1 a param
 * @param {function|Object} callback callback function or options object
 */
DWRHelper.setGiftMessage = function(p0, p1, callback) {
  return dwr.engine._execute(DWRHelper._path, 'DWRHelper', 'setGiftMessage', arguments);
};

/**
 * @param {class java.lang.String} p0 a param
 * @param {class java.lang.String} p1 a param
 * @param {function|Object} callback callback function or options object
 */
DWRHelper.setGiftMessageInOrder = function(p0, p1, callback) {
  return dwr.engine._execute(DWRHelper._path, 'DWRHelper', 'setGiftMessageInOrder', arguments);
};

/**
 * @param {class java.lang.String} p0 a param
 * @param {boolean} p1 a param
 * @param {function|Object} callback callback function or options object
 */
DWRHelper.setCustomerAccount = function(p0, p1, callback) {
  return dwr.engine._execute(DWRHelper._path, 'DWRHelper', 'setCustomerAccount', arguments);
};

/**
 * @param {boolean} p0 a param
 * @param {function|Object} callback callback function or options object
 */
DWRHelper.setTaxExemptForOrder = function(p0, callback) {
  return dwr.engine._execute(DWRHelper._path, 'DWRHelper', 'setTaxExemptForOrder', arguments);
};

/**
 * @param {function|Object} callback callback function or options object
 */
DWRHelper.setSiteInfoCookie = function(callback) {
  return dwr.engine._execute(DWRHelper._path, 'DWRHelper', 'setSiteInfoCookie', arguments);
};

/**
 * @param {function|Object} callback callback function or options object
 */
DWRHelper.expireCheckoutSession = function(callback) {
  return dwr.engine._execute(DWRHelper._path, 'DWRHelper', 'expireCheckoutSession', arguments);
};

/**
 * @param {class java.lang.String} p0 a param
 * @param {class java.lang.String} p1 a param
 * @param {function|Object} callback callback function or options object
 */
DWRHelper.submitComment = function(p0, p1, callback) {
  return dwr.engine._execute(DWRHelper._path, 'DWRHelper', 'submitComment', arguments);
};

/**
 * @param {class java.lang.String} p0 a param
 * @param {class java.lang.String} p1 a param
 * @param {class java.lang.String} p2 a param
 * @param {class java.lang.String} p3 a param
 * @param {function|Object} callback callback function or options object
 */
DWRHelper.updateCreditCard = function(p0, p1, p2, p3, callback) {
  return dwr.engine._execute(DWRHelper._path, 'DWRHelper', 'updateCreditCard', arguments);
};

/**
 * @param {class java.lang.String} p0 a param
 * @param {class java.lang.String} p1 a param
 * @param {function|Object} callback callback function or options object
 */
DWRHelper.addCid = function(p0, p1, callback) {
  return dwr.engine._execute(DWRHelper._path, 'DWRHelper', 'addCid', arguments);
};

/**
 * @param {class java.lang.String} p0 a param
 * @param {boolean} p1 a param
 * @param {boolean} p2 a param
 * @param {function|Object} callback callback function or options object
 */
DWRHelper.removeCreditCard = function(p0, p1, p2, callback) {
  return dwr.engine._execute(DWRHelper._path, 'DWRHelper', 'removeCreditCard', arguments);
};

/**
 * @param {class java.lang.String} p0 a param
 * @param {function|Object} callback callback function or options object
 */
DWRHelper.removeCreditCardFromAccount = function(p0, callback) {
  return dwr.engine._execute(DWRHelper._path, 'DWRHelper', 'removeCreditCardFromAccount', arguments);
};

/**
 * @param {class java.lang.String} p0 a param
 * @param {class java.lang.String} p1 a param
 * @param {class java.lang.String} p2 a param
 * @param {function|Object} callback callback function or options object
 */
DWRHelper.updateCreditCardInAccount = function(p0, p1, p2, callback) {
  return dwr.engine._execute(DWRHelper._path, 'DWRHelper', 'updateCreditCardInAccount', arguments);
};

/**
 * @param {class java.lang.String} p0 a param
 * @param {function|Object} callback callback function or options object
 */
DWRHelper.selectCC = function(p0, callback) {
  return dwr.engine._execute(DWRHelper._path, 'DWRHelper', 'selectCC', arguments);
};

/**
 * @param {class java.lang.String} p0 a param
 * @param {boolean} p1 a param
 * @param {function|Object} callback callback function or options object
 */
DWRHelper.selectCardsForSplitPayment = function(p0, p1, callback) {
  return dwr.engine._execute(DWRHelper._path, 'DWRHelper', 'selectCardsForSplitPayment', arguments);
};

/**
 * @param {class java.lang.String} p0 a param
 * @param {class java.lang.String} p1 a param
 * @param {class java.lang.String} p2 a param
 * @param {class java.lang.String} p3 a param
 * @param {class java.lang.String} p4 a param
 * @param {class java.lang.String} p5 a param
 * @param {boolean} p6 a param
 * @param {boolean} p7 a param
 * @param {boolean} p8 a param
 * @param {class java.lang.String} p9 a param
 * @param {class java.lang.String} p10 a param
 * @param {class java.lang.String} p11 a param
 * @param {class java.lang.String} p12 a param
 * @param {boolean} p13 a param
 * @param {boolean} p14 a param
 * @param {class java.lang.String} p15 a param
 * @param {boolean} p16 a param
 * @param {function|Object} callback callback function or options object
 */
DWRHelper.addMoveToWishList = function(p0, p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, p11, p12, p13, p14, p15, p16, callback) {
  return dwr.engine._execute(DWRHelper._path, 'DWRHelper', 'addMoveToWishList', arguments);
};

/**
 * @param {class java.lang.String} p0 a param
 * @param {class java.lang.String} p1 a param
 * @param {function|Object} callback callback function or options object
 */
DWRHelper.addMoveToCartFromWishList = function(p0, p1, callback) {
  return dwr.engine._execute(DWRHelper._path, 'DWRHelper', 'addMoveToCartFromWishList', arguments);
};

/**
 * @param {class java.lang.String} p0 a param
 * @param {class java.lang.String} p1 a param
 * @param {boolean} p2 a param
 * @param {function|Object} callback callback function or options object
 */
DWRHelper.removeItemsFromNewWishList = function(p0, p1, p2, callback) {
  return dwr.engine._execute(DWRHelper._path, 'DWRHelper', 'removeItemsFromNewWishList', arguments);
};

/**
 * @param {class java.lang.String} p0 a param
 * @param {class java.lang.String} p1 a param
 * @param {class java.lang.String} p2 a param
 * @param {class java.lang.String} p3 a param
 * @param {function|Object} callback callback function or options object
 */
DWRHelper.setItemNote = function(p0, p1, p2, p3, callback) {
  return dwr.engine._execute(DWRHelper._path, 'DWRHelper', 'setItemNote', arguments);
};

/**
 * @param {class java.lang.String} p0 a param
 * @param {class java.lang.String} p1 a param
 * @param {function|Object} callback callback function or options object
 */
DWRHelper.setAccessSpecifier = function(p0, p1, callback) {
  return dwr.engine._execute(DWRHelper._path, 'DWRHelper', 'setAccessSpecifier', arguments);
};

/**
 * @param {class java.lang.String} p0 a param
 * @param {int} p1 a param
 * @param {int} p2 a param
 * @param {function|Object} callback callback function or options object
 */
DWRHelper.updateWishListItemPriority = function(p0, p1, p2, callback) {
  return dwr.engine._execute(DWRHelper._path, 'DWRHelper', 'updateWishListItemPriority', arguments);
};

/**
 * @param {class java.lang.String} p0 a param
 * @param {class java.lang.String} p1 a param
 * @param {class java.lang.String} p2 a param
 * @param {class java.lang.String} p3 a param
 * @param {function|Object} callback callback function or options object
 */
DWRHelper.updateWishListItemPriorityTextbox = function(p0, p1, p2, p3, callback) {
  return dwr.engine._execute(DWRHelper._path, 'DWRHelper', 'updateWishListItemPriorityTextbox', arguments);
};

/**
 * @param {class java.lang.String} p0 a param
 * @param {function|Object} callback callback function or options object
 */
DWRHelper.deleteNewWishList = function(p0, callback) {
  return dwr.engine._execute(DWRHelper._path, 'DWRHelper', 'deleteNewWishList', arguments);
};

/**
 * @param {class java.lang.String} p0 a param
 * @param {class java.lang.String} p1 a param
 * @param {function|Object} callback callback function or options object
 */
DWRHelper.GiftCardHistory = function(p0, p1, callback) {
  return dwr.engine._execute(DWRHelper._path, 'DWRHelper', 'GiftCardHistory', arguments);
};

/**
 * @param {class java.lang.String} p0 a param
 * @param {function|Object} callback callback function or options object
 */
DWRHelper.isEmailUnsubscribed = function(p0, callback) {
  return dwr.engine._execute(DWRHelper._path, 'DWRHelper', 'isEmailUnsubscribed', arguments);
};

/**
 * @param {class java.lang.String} p0 a param
 * @param {function|Object} callback callback function or options object
 */
DWRHelper.isEmailSubscribed = function(p0, callback) {
  return dwr.engine._execute(DWRHelper._path, 'DWRHelper', 'isEmailSubscribed', arguments);
};

/**
 * @param {boolean} p0 a param
 * @param {class java.lang.String} p1 a param
 * @param {function|Object} callback callback function or options object
 */
DWRHelper.saveSMSToOrder = function(p0, p1, callback) {
  return dwr.engine._execute(DWRHelper._path, 'DWRHelper', 'saveSMSToOrder', arguments);
};

/**
 * @param {class java.lang.String} p0 a param
 * @param {function|Object} callback callback function or options object
 */
DWRHelper.unSubscribeLinkEmail = function(p0, callback) {
  return dwr.engine._execute(DWRHelper._path, 'DWRHelper', 'unSubscribeLinkEmail', arguments);
};

/**
 * @param {class java.lang.String} p0 a param
 * @param {function|Object} callback callback function or options object
 */
DWRHelper.isEmailSubscribedDZ = function(p0, callback) {
  return dwr.engine._execute(DWRHelper._path, 'DWRHelper', 'isEmailSubscribedDZ', arguments);
};

/**
 * @param {class java.lang.String} p0 a param
 * @param {function|Object} callback callback function or options object
 */
DWRHelper.logBrazilPaymentSurvey = function(p0, callback) {
	  return dwr.engine._execute(DWRHelper._path, 'DWRHelper', 'logBrazilPaymentSurvey', arguments);
};

/**
 * @param {class java.lang.String} p0 a param
 * @param {function|Object} callback callback function or options object
 */
DWRHelper.pauseUnpausePhoneRecording = function(p0, callback) {
  return dwr.engine._execute(DWRHelper._path, 'DWRHelper', 'pauseUnpausePhoneRecording', arguments);
};

