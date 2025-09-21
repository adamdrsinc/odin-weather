/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/style.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/style.css ***!
  \*****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../resource/font/Norse-Bold.otf */ \"./src/resource/font/Norse-Bold.otf\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `@font-face{\n    font-family: \"norse-bold\";\n    src: url(${___CSS_LOADER_URL_REPLACEMENT_0___}) format(\"opentype\");\n    font-weight: normal;\n    font-style: normal;\n    font-display: swap;\n}\n\n*{\n    padding: 0;\n    margin: 0;\n    box-sizing: border-box;\n}\n\nbody{\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    min-height: 100vh;\n}\n\nheader,\nfooter{\n    padding: 0 15vw;\n}\n\n\nheader{\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    height: 12vh;\n\n}\n\n#header-logo-group{\n    display: flex;\n    align-items: center;\n    gap: 12px;\n    font-family: \"norse-bold\", sans-serif;\n    font-size: 2rem;\n    cursor: pointer;\n}\n\n.logo{\n    max-height: 9vh;\n    max-width: 9vh;\n    filter: invert(1);\n    transition: filter 0.3s ease;\n    cursor: pointer;\n}\n\n.logo:hover,\n#heaer-logo-group{\n    filter: invert(0.7);\n}\n\n#header-links{\n    display: flex;\n    gap: 16px;\n    height: 100%;\n}\n\n#header-links button{\n    padding: 0 32px;\n    font-size: 2rem;\n    background-color: transparent;\n    border: none;\n    cursor: pointer;\n    color: black;\n    transition: color 0.3s ease;\n}\n\n#header-links button:hover{\n    color: gray;\n}\n\nfooter{\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    height: 15vh;\n    border-top: 4px solid black;\n    background-color: rgb(221, 233, 243);\n}\n\n#footer-content{\n    display: flex;\n    gap: 48px;\n}\n\n.footer-group{\n    display: flex;\n    flex-direction: column;\n    gap: 16px;\n}\n\n.footer-group button{\n    font-size: 1.5rem;\n    background-color: transparent;\n    color: black;\n    cursor: pointer;\n    border: none;\n    transition: color 0.3s ease;\n}\n\n.footer-group button:hover{\n    color: gray;\n}\n\n\n#content{\n    flex: 1;\n    margin: 0 auto;\n    padding: 32px;\n    width: 100%;\n    max-width: 1200px;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n\n}\n\n\n#searchbar{\n    flex: 1;\n    width: 100%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n#searchbar input{\n    height: 4rem;\n    border-radius: 12px;\n    border: 3px solid black;\n    padding: 0px 8px;\n    font-size: 2rem;\n}\n\n#searchbar img{\n    display: block;\n    width: 5vh;\n    height: 5vh;\n    cursor: pointer;\n}\n\n#error-box{\n    --error-color: rgb(80, 24, 24);\n\n    display: none;\n    justify-content: center;\n    align-items: center;\n    border: 2px solid var(--error-color);\n    border-radius: 12px;\n    background-color: lightcoral;\n    color:var(--error-color);\n    min-height: 3vh;\n    min-width: 100%;\n    margin: 1vh 0;\n}\n\n#error-box.visible-flex{\n    display: flex;\n}\n\n#main-details{\n    flex: 1;\n    width: 100%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n#main-details-container{\n    display: grid;\n    grid-template-columns: 1fr 1fr 1fr 1fr; \n    grid-template-rows: 1fr 1fr;\n    justify-items: center;\n    align-items: center;\n    text-align: center;\n\n}\n\n#main-details-icon{\n    display: block;\n    grid-column: 1/2;\n    grid-row: 1/3;\n    width: 13rem;\n    height: 13rem;\n}\n\n#location-temperature-current{\n    font-size: 6rem;\n    grid-column: 2/3;\n    grid-row: 1/3;\n}\n\n#location-temperature-high{\n    font-size: 4rem;\n    grid-column: 3/4;\n    grid-row: 1/2;\n    margin-right: 16px;\n}\n\n#location-temperature-low{\n    font-size: 4rem;\n    grid-column: 4/5;\n    grid-row: 1/2;\n}\n\n#location-text{\n    font-size: 4rem;\n    grid-column: 3/5;\n    grid-row: 2/3;\n}\n\n.celsius{\n    font-size: 0.7em;\n}\n\n#cards-container{\n    --card-size: 200px;\n\n    flex: 1;\n    width: 100%;\n    display: grid;\n    grid-template-columns: repeat(auto-fit, minmax(var(--card-size), 1fr));\n    grid-template-rows: 1fr;\n    grid-auto-rows: 1fr;\n    gap: 32px;\n\n    padding: 16px 0;\n}\n\n.card{\n\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    grid-template-rows: 1fr 1fr 1fr;\n    justify-items: center;\n    align-items: center;\n\n    padding: 16px;\n\n    background-color: rgb(170, 212, 231);\n    border: 2px solid black;\n    border-radius: 12px;\n\n    min-height: var(--card-size);\n    min-width: var(--card-size);\n}\n\n.card-day{\n    grid-column: 1/3;\n    grid-row: 1/2;\n    text-align: center;\n    font-size: 1.8rem;\n}\n\n\n.card-temperature-high{\n    grid-column: 2/3;\n    grid-row: 2/3;\n    font-size: 2.5rem;\n    align-self: flex-end;\n}\n\n.card-temperature-low{\n    grid-column: 2/3;\n    grid-row: 3/4;\n    font-size: 2rem;\n    align-self: flex-start;\n}\n\n.card-icon{\n    grid-column: 1/2;\n    grid-row: 2/4;\n}\n\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://webdev-template/./src/css/style.css?./node_modules/css-loader/dist/cjs.js\n}");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
eval("{\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://webdev-template/./node_modules/css-loader/dist/runtime/api.js?\n}");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

"use strict";
eval("{\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://webdev-template/./node_modules/css-loader/dist/runtime/getUrl.js?\n}");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";
eval("{\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://webdev-template/./node_modules/css-loader/dist/runtime/noSourceMaps.js?\n}");

/***/ }),

/***/ "./node_modules/pubsub-js/src/pubsub.js":
/*!**********************************************!*\
  !*** ./node_modules/pubsub-js/src/pubsub.js ***!
  \**********************************************/
/***/ (function(module, exports, __webpack_require__) {

eval("{/* module decorator */ module = __webpack_require__.nmd(module);\n/**\n * Copyright (c) 2010,2011,2012,2013,2014 Morgan Roderick http://roderick.dk\n * License: MIT - http://mrgnrdrck.mit-license.org\n *\n * https://github.com/mroderick/PubSubJS\n */\n\n(function (root, factory){\n    'use strict';\n\n    var PubSub = {};\n\n    if (root.PubSub) {\n        PubSub = root.PubSub;\n        console.warn(\"PubSub already loaded, using existing version\");\n    } else {\n        root.PubSub = PubSub;\n        factory(PubSub);\n    }\n    // CommonJS and Node.js module support\n    if (true){\n        if (module !== undefined && module.exports) {\n            exports = module.exports = PubSub; // Node.js specific `module.exports`\n        }\n        exports.PubSub = PubSub; // CommonJS module 1.1.1 spec\n        module.exports = exports = PubSub; // CommonJS\n    }\n    // AMD support\n    /* eslint-disable no-undef */\n    else // removed by dead control flow\n{}\n\n}(( typeof window === 'object' && window ) || this || __webpack_require__.g, function (PubSub){\n    'use strict';\n\n    var messages = {},\n        lastUid = -1,\n        ALL_SUBSCRIBING_MSG = '*';\n\n    function hasKeys(obj){\n        var key;\n\n        for (key in obj){\n            if ( Object.prototype.hasOwnProperty.call(obj, key) ){\n                return true;\n            }\n        }\n        return false;\n    }\n\n    /**\n     * Returns a function that throws the passed exception, for use as argument for setTimeout\n     * @alias throwException\n     * @function\n     * @param { Object } ex An Error object\n     */\n    function throwException( ex ){\n        return function reThrowException(){\n            throw ex;\n        };\n    }\n\n    function callSubscriberWithDelayedExceptions( subscriber, message, data ){\n        try {\n            subscriber( message, data );\n        } catch( ex ){\n            setTimeout( throwException( ex ), 0);\n        }\n    }\n\n    function callSubscriberWithImmediateExceptions( subscriber, message, data ){\n        subscriber( message, data );\n    }\n\n    function deliverMessage( originalMessage, matchedMessage, data, immediateExceptions ){\n        var subscribers = messages[matchedMessage],\n            callSubscriber = immediateExceptions ? callSubscriberWithImmediateExceptions : callSubscriberWithDelayedExceptions,\n            s;\n\n        if ( !Object.prototype.hasOwnProperty.call( messages, matchedMessage ) ) {\n            return;\n        }\n\n        for (s in subscribers){\n            if ( Object.prototype.hasOwnProperty.call(subscribers, s)){\n                callSubscriber( subscribers[s], originalMessage, data );\n            }\n        }\n    }\n\n    function createDeliveryFunction( message, data, immediateExceptions ){\n        return function deliverNamespaced(){\n            var topic = String( message ),\n                position = topic.lastIndexOf( '.' );\n\n            // deliver the message as it is now\n            deliverMessage(message, message, data, immediateExceptions);\n\n            // trim the hierarchy and deliver message to each level\n            while( position !== -1 ){\n                topic = topic.substr( 0, position );\n                position = topic.lastIndexOf('.');\n                deliverMessage( message, topic, data, immediateExceptions );\n            }\n\n            deliverMessage(message, ALL_SUBSCRIBING_MSG, data, immediateExceptions);\n        };\n    }\n\n    function hasDirectSubscribersFor( message ) {\n        var topic = String( message ),\n            found = Boolean(Object.prototype.hasOwnProperty.call( messages, topic ) && hasKeys(messages[topic]));\n\n        return found;\n    }\n\n    function messageHasSubscribers( message ){\n        var topic = String( message ),\n            found = hasDirectSubscribersFor(topic) || hasDirectSubscribersFor(ALL_SUBSCRIBING_MSG),\n            position = topic.lastIndexOf( '.' );\n\n        while ( !found && position !== -1 ){\n            topic = topic.substr( 0, position );\n            position = topic.lastIndexOf( '.' );\n            found = hasDirectSubscribersFor(topic);\n        }\n\n        return found;\n    }\n\n    function publish( message, data, sync, immediateExceptions ){\n        message = (typeof message === 'symbol') ? message.toString() : message;\n\n        var deliver = createDeliveryFunction( message, data, immediateExceptions ),\n            hasSubscribers = messageHasSubscribers( message );\n\n        if ( !hasSubscribers ){\n            return false;\n        }\n\n        if ( sync === true ){\n            deliver();\n        } else {\n            setTimeout( deliver, 0 );\n        }\n        return true;\n    }\n\n    /**\n     * Publishes the message, passing the data to it's subscribers\n     * @function\n     * @alias publish\n     * @param { String } message The message to publish\n     * @param {} data The data to pass to subscribers\n     * @return { Boolean }\n     */\n    PubSub.publish = function( message, data ){\n        return publish( message, data, false, PubSub.immediateExceptions );\n    };\n\n    /**\n     * Publishes the message synchronously, passing the data to it's subscribers\n     * @function\n     * @alias publishSync\n     * @param { String } message The message to publish\n     * @param {} data The data to pass to subscribers\n     * @return { Boolean }\n     */\n    PubSub.publishSync = function( message, data ){\n        return publish( message, data, true, PubSub.immediateExceptions );\n    };\n\n    /**\n     * Subscribes the passed function to the passed message. Every returned token is unique and should be stored if you need to unsubscribe\n     * @function\n     * @alias subscribe\n     * @param { String } message The message to subscribe to\n     * @param { Function } func The function to call when a new message is published\n     * @return { String }\n     */\n    PubSub.subscribe = function( message, func ){\n        if ( typeof func !== 'function'){\n            return false;\n        }\n\n        message = (typeof message === 'symbol') ? message.toString() : message;\n\n        // message is not registered yet\n        if ( !Object.prototype.hasOwnProperty.call( messages, message ) ){\n            messages[message] = {};\n        }\n\n        // forcing token as String, to allow for future expansions without breaking usage\n        // and allow for easy use as key names for the 'messages' object\n        var token = 'uid_' + String(++lastUid);\n        messages[message][token] = func;\n\n        // return token for unsubscribing\n        return token;\n    };\n\n    PubSub.subscribeAll = function( func ){\n        return PubSub.subscribe(ALL_SUBSCRIBING_MSG, func);\n    };\n\n    /**\n     * Subscribes the passed function to the passed message once\n     * @function\n     * @alias subscribeOnce\n     * @param { String } message The message to subscribe to\n     * @param { Function } func The function to call when a new message is published\n     * @return { PubSub }\n     */\n    PubSub.subscribeOnce = function( message, func ){\n        var token = PubSub.subscribe( message, function(){\n            // before func apply, unsubscribe message\n            PubSub.unsubscribe( token );\n            func.apply( this, arguments );\n        });\n        return PubSub;\n    };\n\n    /**\n     * Clears all subscriptions\n     * @function\n     * @public\n     * @alias clearAllSubscriptions\n     */\n    PubSub.clearAllSubscriptions = function clearAllSubscriptions(){\n        messages = {};\n    };\n\n    /**\n     * Clear subscriptions by the topic\n     * @function\n     * @public\n     * @alias clearAllSubscriptions\n     * @return { int }\n     */\n    PubSub.clearSubscriptions = function clearSubscriptions(topic){\n        var m;\n        for (m in messages){\n            if (Object.prototype.hasOwnProperty.call(messages, m) && m.indexOf(topic) === 0){\n                delete messages[m];\n            }\n        }\n    };\n\n    /**\n       Count subscriptions by the topic\n     * @function\n     * @public\n     * @alias countSubscriptions\n     * @return { Array }\n    */\n    PubSub.countSubscriptions = function countSubscriptions(topic){\n        var m;\n        // eslint-disable-next-line no-unused-vars\n        var token;\n        var count = 0;\n        for (m in messages) {\n            if (Object.prototype.hasOwnProperty.call(messages, m) && m.indexOf(topic) === 0) {\n                for (token in messages[m]) {\n                    count++;\n                }\n                break;\n            }\n        }\n        return count;\n    };\n\n\n    /**\n       Gets subscriptions by the topic\n     * @function\n     * @public\n     * @alias getSubscriptions\n    */\n    PubSub.getSubscriptions = function getSubscriptions(topic){\n        var m;\n        var list = [];\n        for (m in messages){\n            if (Object.prototype.hasOwnProperty.call(messages, m) && m.indexOf(topic) === 0){\n                list.push(m);\n            }\n        }\n        return list;\n    };\n\n    /**\n     * Removes subscriptions\n     *\n     * - When passed a token, removes a specific subscription.\n     *\n\t * - When passed a function, removes all subscriptions for that function\n     *\n\t * - When passed a topic, removes all subscriptions for that topic (hierarchy)\n     * @function\n     * @public\n     * @alias subscribeOnce\n     * @param { String | Function } value A token, function or topic to unsubscribe from\n     * @example // Unsubscribing with a token\n     * var token = PubSub.subscribe('mytopic', myFunc);\n     * PubSub.unsubscribe(token);\n     * @example // Unsubscribing with a function\n     * PubSub.unsubscribe(myFunc);\n     * @example // Unsubscribing from a topic\n     * PubSub.unsubscribe('mytopic');\n     */\n    PubSub.unsubscribe = function(value){\n        var descendantTopicExists = function(topic) {\n                var m;\n                for ( m in messages ){\n                    if ( Object.prototype.hasOwnProperty.call(messages, m) && m.indexOf(topic) === 0 ){\n                        // a descendant of the topic exists:\n                        return true;\n                    }\n                }\n\n                return false;\n            },\n            isTopic    = typeof value === 'string' && ( Object.prototype.hasOwnProperty.call(messages, value) || descendantTopicExists(value) ),\n            isToken    = !isTopic && typeof value === 'string',\n            isFunction = typeof value === 'function',\n            result = false,\n            m, message, t;\n\n        if (isTopic){\n            PubSub.clearSubscriptions(value);\n            return;\n        }\n\n        for ( m in messages ){\n            if ( Object.prototype.hasOwnProperty.call( messages, m ) ){\n                message = messages[m];\n\n                if ( isToken && message[value] ){\n                    delete message[value];\n                    result = value;\n                    // tokens are unique, so we can just stop here\n                    break;\n                }\n\n                if (isFunction) {\n                    for ( t in message ){\n                        if (Object.prototype.hasOwnProperty.call(message, t) && message[t] === value){\n                            delete message[t];\n                            result = true;\n                        }\n                    }\n                }\n            }\n        }\n\n        return result;\n    };\n}));\n\n\n//# sourceURL=webpack://webdev-template/./node_modules/pubsub-js/src/pubsub.js?\n}");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";
eval("{\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://webdev-template/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?\n}");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";
eval("{\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://webdev-template/./node_modules/style-loader/dist/runtime/insertBySelector.js?\n}");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
eval("{\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://webdev-template/./node_modules/style-loader/dist/runtime/insertStyleElement.js?\n}");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("{\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://webdev-template/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?\n}");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";
eval("{\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://webdev-template/./node_modules/style-loader/dist/runtime/styleDomAPI.js?\n}");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
eval("{\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://webdev-template/./node_modules/style-loader/dist/runtime/styleTagTransform.js?\n}");

/***/ }),

/***/ "./src/PubSubConsts.js":
/*!*****************************!*\
  !*** ./src/PubSubConsts.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   PubSubConsts: () => (/* binding */ PubSubConsts)\n/* harmony export */ });\nclass PubSubConsts {\n    static NEW_SEARCH = \"new_search\";\n    static DATA_PUBLISHED = \"publish_get_weather_data\";\n}\n\n\n\n\n//# sourceURL=webpack://webdev-template/./src/PubSubConsts.js?\n}");

/***/ }),

/***/ "./src/Secret.js":
/*!***********************!*\
  !*** ./src/Secret.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst API_KEY = \"ZXL46HDJ8J7NB5Q9QQHMABRXD\";\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (API_KEY);\n\n\n//# sourceURL=webpack://webdev-template/./src/Secret.js?\n}");

/***/ }),

/***/ "./src/UIHandler.js":
/*!**************************!*\
  !*** ./src/UIHandler.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   UIHandler: () => (/* binding */ UIHandler)\n/* harmony export */ });\n/* harmony import */ var _PubSubConsts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PubSubConsts */ \"./src/PubSubConsts.js\");\n/* harmony import */ var _resource_img_weather_sunny_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./resource/img/weather-sunny.svg */ \"./src/resource/img/weather-sunny.svg\");\n/* harmony import */ var _resource_img_snowflake_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./resource/img/snowflake.svg */ \"./src/resource/img/snowflake.svg\");\n/* harmony import */ var _resource_img_weather_cloudy_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./resource/img/weather-cloudy.svg */ \"./src/resource/img/weather-cloudy.svg\");\n/* harmony import */ var _resource_img_weather_fog_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./resource/img/weather-fog.svg */ \"./src/resource/img/weather-fog.svg\");\n/* harmony import */ var _resource_img_weather_partly_cloudy_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./resource/img/weather-partly-cloudy.svg */ \"./src/resource/img/weather-partly-cloudy.svg\");\n/* harmony import */ var _resource_img_weather_night_partly_cloudy_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./resource/img/weather-night-partly-cloudy.svg */ \"./src/resource/img/weather-night-partly-cloudy.svg\");\n/* harmony import */ var _resource_img_weather_pouring_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./resource/img/weather-pouring.svg */ \"./src/resource/img/weather-pouring.svg\");\n/* harmony import */ var _resource_img_weather_windy_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./resource/img/weather-windy.svg */ \"./src/resource/img/weather-windy.svg\");\n\n\n\n\n\n\n\n\n\n\nclass UIHandler {\n    static init() {\n        this.addAllSubscribers();\n        this.addAllEventListeners();\n    }\n\n    //Subscribers\n    static addAllSubscribers() {\n        PubSub.subscribe(_PubSubConsts__WEBPACK_IMPORTED_MODULE_0__.PubSubConsts.DATA_PUBLISHED, (message, data) => {\n            if (Object.keys(data).length === 0) {\n                this.displayGetLocationError();\n            } else {\n                this.uiOnDataSubscriptionUpdate(data);\n            }\n        });\n    }\n\n    //Event Listeners\n    static addAllEventListeners() {\n        this.addSearchButtonListener();\n    }\n\n    static addSearchButtonListener() {\n        const searchButton = document.getElementById(\"search-button\");\n        searchButton.addEventListener(\"click\", (e) => {\n            document.getElementById(\"error-box\").className = \"\";\n\n            const locationInput = document.getElementById(\"input-location\");\n            PubSub.publish(_PubSubConsts__WEBPACK_IMPORTED_MODULE_0__.PubSubConsts.NEW_SEARCH, {\n                location: locationInput.value,\n            });\n            locationInput.value = \"\";\n        });\n    }\n\n    //UI Changers\n    static uiOnDataSubscriptionUpdate(data) {\n        this.uiUpdateLocation(\n            data.resolvedAddress,\n            data.currentConditions,\n            data.days\n        );\n        this.uiUpdateDays(data.days.slice(0, 10));\n    }\n\n    static uiUpdateLocation(resolvedAddress, currentConditions, allDays) {\n        const locationTextEl = document.getElementById(\"location-text\");\n        locationTextEl.textContent = resolvedAddress\n            .split(\" \")\n            .map((el) => {\n                return el.charAt(0).toUpperCase() + el.slice(1);\n            })\n            .join(\" \");\n\n        const currentLocationTempEl = document.getElementById(\n            \"location-temperature-current\"\n        );\n        currentLocationTempEl.innerHTML = `${currentConditions.temp}`;\n\n        const highLocationTempEl = document.getElementById(\n            \"location-temperature-high\"\n        );\n        highLocationTempEl.innerHTML = `Hi: ${allDays[0].tempmax}`;\n\n        const lowLocationTempEl = document.getElementById(\n            \"location-temperature-low\"\n        );\n        lowLocationTempEl.innerHTML = `Low: ${allDays[0].tempmin}`;\n\n        this.setIcon(\n            document.getElementById(\"main-details-icon\"),\n            allDays[0].icon\n        );\n    }\n\n    static uiUpdateDays(days) {\n        const allCards = document.getElementsByClassName(\"card\");\n        Array.from(allCards).forEach((card, index) => {\n            const correspondingDay = days[index];\n\n            const [year, month, day] = correspondingDay.datetime.split(\"-\");\n\n            card.querySelector(\".card-day\").innerText = `${month}-${day}`;\n            card.querySelector(\".card-temperature-high\").innerText =\n                correspondingDay.tempmax;\n            card.querySelector(\".card-temperature-low\").innerText =\n                correspondingDay.tempmin;\n\n            const icon = card.querySelector(\".card-icon\");\n            this.setIcon(icon, correspondingDay.icon);\n        });\n    }\n\n    static setIcon(element, iconChoice) {\n        const icons = {\n            cloudy: _resource_img_weather_cloudy_svg__WEBPACK_IMPORTED_MODULE_3__,\n            \"partly-cloudy-day\": _resource_img_weather_partly_cloudy_svg__WEBPACK_IMPORTED_MODULE_5__,\n            \"partly-cloudy-night\": _resource_img_weather_night_partly_cloudy_svg__WEBPACK_IMPORTED_MODULE_6__,\n            fog: _resource_img_weather_fog_svg__WEBPACK_IMPORTED_MODULE_4__,\n            wind: _resource_img_weather_windy_svg__WEBPACK_IMPORTED_MODULE_8__,\n            snow: _resource_img_snowflake_svg__WEBPACK_IMPORTED_MODULE_2__,\n            rain: _resource_img_weather_pouring_svg__WEBPACK_IMPORTED_MODULE_7__,\n            \"clear-day\": _resource_img_weather_sunny_svg__WEBPACK_IMPORTED_MODULE_1__,\n            \"clear-night\": _resource_img_weather_sunny_svg__WEBPACK_IMPORTED_MODULE_1__,\n        };\n\n        const filename = icons[iconChoice] || _resource_img_weather_sunny_svg__WEBPACK_IMPORTED_MODULE_1__;\n        element.src = filename;\n    }\n\n    static displayGetLocationError() {\n        const errorBoxEl = document.getElementById(\"error-box\");\n        errorBoxEl.classList.add(\"visible-flex\");\n    }\n}\n\n\n\n\n//# sourceURL=webpack://webdev-template/./src/UIHandler.js?\n}");

/***/ }),

/***/ "./src/WeatherAPI.js":
/*!***************************!*\
  !*** ./src/WeatherAPI.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   WeatherInterfacer: () => (/* binding */ WeatherInterfacer)\n/* harmony export */ });\n/* harmony import */ var _Secret_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Secret.js */ \"./src/Secret.js\");\n/* harmony import */ var pubsub_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! pubsub-js */ \"./node_modules/pubsub-js/src/pubsub.js\");\n/* harmony import */ var pubsub_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(pubsub_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _PubSubConsts_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PubSubConsts.js */ \"./src/PubSubConsts.js\");\n\n\n\n\nclass WeatherInterfacer {\n    static #BASE_URL =\n        \"https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/\";\n\n    static init() {\n        pubsub_js__WEBPACK_IMPORTED_MODULE_1___default().subscribe(_PubSubConsts_js__WEBPACK_IMPORTED_MODULE_2__.PubSubConsts.NEW_SEARCH, (message, data) => {\n            const location = data.location;\n            this.getData(location);\n        });\n    }\n\n    static async getData(location, startDate = \"\", endDate = \"\") {\n        try {\n            let completeURL = this.#BASE_URL;\n\n            location = location.toLowerCase();\n            completeURL += `${location}`;\n\n            if (startDate) {\n                completeURL += `/${startDate}`;\n                if (endDate) {\n                    completeURL += `/${endDate}`;\n                }\n            }\n\n            const response = await fetch(`${completeURL}?key=${_Secret_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]}`);\n\n            if (!response.ok) {\n                throw new Error(\n                    `Error: ${response.status} ${response.statusText}`\n                );\n            }\n\n            const data = await response.json();\n\n            console.log(data);\n\n            const dataToPublish = {\n                resolvedAddress: data.resolvedAddress,\n                days: data.days,\n                currentConditions: data.currentConditions,\n            };\n\n            pubsub_js__WEBPACK_IMPORTED_MODULE_1___default().publish(_PubSubConsts_js__WEBPACK_IMPORTED_MODULE_2__.PubSubConsts.DATA_PUBLISHED, dataToPublish);\n        } catch (error) {\n            pubsub_js__WEBPACK_IMPORTED_MODULE_1___default().publish(_PubSubConsts_js__WEBPACK_IMPORTED_MODULE_2__.PubSubConsts.DATA_PUBLISHED, {});\n        }\n    }\n}\n\n\n\n\n//# sourceURL=webpack://webdev-template/./src/WeatherAPI.js?\n}");

/***/ }),

/***/ "./src/css/style.css":
/*!***************************!*\
  !*** ./src/css/style.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/css/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://webdev-template/./src/css/style.css?\n}");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/style.css */ \"./src/css/style.css\");\n/* harmony import */ var _WeatherAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./WeatherAPI.js */ \"./src/WeatherAPI.js\");\n/* harmony import */ var _UIHandler_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./UIHandler.js */ \"./src/UIHandler.js\");\n\n\n\n\n(() => {\n    _UIHandler_js__WEBPACK_IMPORTED_MODULE_2__.UIHandler.init();\n    _WeatherAPI_js__WEBPACK_IMPORTED_MODULE_1__.WeatherInterfacer.init();\n\n    _WeatherAPI_js__WEBPACK_IMPORTED_MODULE_1__.WeatherInterfacer.getData(\"London\");\n})();\n\n\n//# sourceURL=webpack://webdev-template/./src/index.js?\n}");

/***/ }),

/***/ "./src/resource/font/Norse-Bold.otf":
/*!******************************************!*\
  !*** ./src/resource/font/Norse-Bold.otf ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("{module.exports = __webpack_require__.p + \"5efe60ef5042faec1224.otf\";\n\n//# sourceURL=webpack://webdev-template/./src/resource/font/Norse-Bold.otf?\n}");

/***/ }),

/***/ "./src/resource/img/snowflake.svg":
/*!****************************************!*\
  !*** ./src/resource/img/snowflake.svg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("{module.exports = __webpack_require__.p + \"16ac8dee877cb053e2ce.svg\";\n\n//# sourceURL=webpack://webdev-template/./src/resource/img/snowflake.svg?\n}");

/***/ }),

/***/ "./src/resource/img/weather-cloudy.svg":
/*!*********************************************!*\
  !*** ./src/resource/img/weather-cloudy.svg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("{module.exports = __webpack_require__.p + \"9342e375ab3da73ddea5.svg\";\n\n//# sourceURL=webpack://webdev-template/./src/resource/img/weather-cloudy.svg?\n}");

/***/ }),

/***/ "./src/resource/img/weather-fog.svg":
/*!******************************************!*\
  !*** ./src/resource/img/weather-fog.svg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("{module.exports = __webpack_require__.p + \"911b3b6e9c527aa8094a.svg\";\n\n//# sourceURL=webpack://webdev-template/./src/resource/img/weather-fog.svg?\n}");

/***/ }),

/***/ "./src/resource/img/weather-night-partly-cloudy.svg":
/*!**********************************************************!*\
  !*** ./src/resource/img/weather-night-partly-cloudy.svg ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("{module.exports = __webpack_require__.p + \"58ea69388048ee6e953f.svg\";\n\n//# sourceURL=webpack://webdev-template/./src/resource/img/weather-night-partly-cloudy.svg?\n}");

/***/ }),

/***/ "./src/resource/img/weather-partly-cloudy.svg":
/*!****************************************************!*\
  !*** ./src/resource/img/weather-partly-cloudy.svg ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("{module.exports = __webpack_require__.p + \"6cb8238507668441d7ee.svg\";\n\n//# sourceURL=webpack://webdev-template/./src/resource/img/weather-partly-cloudy.svg?\n}");

/***/ }),

/***/ "./src/resource/img/weather-pouring.svg":
/*!**********************************************!*\
  !*** ./src/resource/img/weather-pouring.svg ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("{module.exports = __webpack_require__.p + \"105e4d8334493ba05685.svg\";\n\n//# sourceURL=webpack://webdev-template/./src/resource/img/weather-pouring.svg?\n}");

/***/ }),

/***/ "./src/resource/img/weather-sunny.svg":
/*!********************************************!*\
  !*** ./src/resource/img/weather-sunny.svg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("{module.exports = __webpack_require__.p + \"a3d8e77d0f79f95ade8c.svg\";\n\n//# sourceURL=webpack://webdev-template/./src/resource/img/weather-sunny.svg?\n}");

/***/ }),

/***/ "./src/resource/img/weather-windy.svg":
/*!********************************************!*\
  !*** ./src/resource/img/weather-windy.svg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("{module.exports = __webpack_require__.p + \"9a5e68987c5e27b759b6.svg\";\n\n//# sourceURL=webpack://webdev-template/./src/resource/img/weather-windy.svg?\n}");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;