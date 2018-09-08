/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/pug-runtime/index.js":
/*!*******************************************!*\
  !*** ./node_modules/pug-runtime/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar pug_has_own_property = Object.prototype.hasOwnProperty;\n\n/**\n * Merge two attribute objects giving precedence\n * to values in object `b`. Classes are special-cased\n * allowing for arrays and merging/joining appropriately\n * resulting in a string.\n *\n * @param {Object} a\n * @param {Object} b\n * @return {Object} a\n * @api private\n */\n\nexports.merge = pug_merge;\nfunction pug_merge(a, b) {\n  if (arguments.length === 1) {\n    var attrs = a[0];\n    for (var i = 1; i < a.length; i++) {\n      attrs = pug_merge(attrs, a[i]);\n    }\n    return attrs;\n  }\n\n  for (var key in b) {\n    if (key === 'class') {\n      var valA = a[key] || [];\n      a[key] = (Array.isArray(valA) ? valA : [valA]).concat(b[key] || []);\n    } else if (key === 'style') {\n      var valA = pug_style(a[key]);\n      valA = valA && valA[valA.length - 1] !== ';' ? valA + ';' : valA;\n      var valB = pug_style(b[key]);\n      valB = valB && valB[valB.length - 1] !== ';' ? valB + ';' : valB;\n      a[key] = valA + valB;\n    } else {\n      a[key] = b[key];\n    }\n  }\n\n  return a;\n};\n\n/**\n * Process array, object, or string as a string of classes delimited by a space.\n *\n * If `val` is an array, all members of it and its subarrays are counted as\n * classes. If `escaping` is an array, then whether or not the item in `val` is\n * escaped depends on the corresponding item in `escaping`. If `escaping` is\n * not an array, no escaping is done.\n *\n * If `val` is an object, all the keys whose value is truthy are counted as\n * classes. No escaping is done.\n *\n * If `val` is a string, it is counted as a class. No escaping is done.\n *\n * @param {(Array.<string>|Object.<string, boolean>|string)} val\n * @param {?Array.<string>} escaping\n * @return {String}\n */\nexports.classes = pug_classes;\nfunction pug_classes_array(val, escaping) {\n  var classString = '', className, padding = '', escapeEnabled = Array.isArray(escaping);\n  for (var i = 0; i < val.length; i++) {\n    className = pug_classes(val[i]);\n    if (!className) continue;\n    escapeEnabled && escaping[i] && (className = pug_escape(className));\n    classString = classString + padding + className;\n    padding = ' ';\n  }\n  return classString;\n}\nfunction pug_classes_object(val) {\n  var classString = '', padding = '';\n  for (var key in val) {\n    if (key && val[key] && pug_has_own_property.call(val, key)) {\n      classString = classString + padding + key;\n      padding = ' ';\n    }\n  }\n  return classString;\n}\nfunction pug_classes(val, escaping) {\n  if (Array.isArray(val)) {\n    return pug_classes_array(val, escaping);\n  } else if (val && typeof val === 'object') {\n    return pug_classes_object(val);\n  } else {\n    return val || '';\n  }\n}\n\n/**\n * Convert object or string to a string of CSS styles delimited by a semicolon.\n *\n * @param {(Object.<string, string>|string)} val\n * @return {String}\n */\n\nexports.style = pug_style;\nfunction pug_style(val) {\n  if (!val) return '';\n  if (typeof val === 'object') {\n    var out = '';\n    for (var style in val) {\n      /* istanbul ignore else */\n      if (pug_has_own_property.call(val, style)) {\n        out = out + style + ':' + val[style] + ';';\n      }\n    }\n    return out;\n  } else {\n    return val + '';\n  }\n};\n\n/**\n * Render the given attribute.\n *\n * @param {String} key\n * @param {String} val\n * @param {Boolean} escaped\n * @param {Boolean} terse\n * @return {String}\n */\nexports.attr = pug_attr;\nfunction pug_attr(key, val, escaped, terse) {\n  if (val === false || val == null || !val && (key === 'class' || key === 'style')) {\n    return '';\n  }\n  if (val === true) {\n    return ' ' + (terse ? key : key + '=\"' + key + '\"');\n  }\n  if (typeof val.toJSON === 'function') {\n    val = val.toJSON();\n  }\n  if (typeof val !== 'string') {\n    val = JSON.stringify(val);\n    if (!escaped && val.indexOf('\"') !== -1) {\n      return ' ' + key + '=\\'' + val.replace(/'/g, '&#39;') + '\\'';\n    }\n  }\n  if (escaped) val = pug_escape(val);\n  return ' ' + key + '=\"' + val + '\"';\n};\n\n/**\n * Render the given attributes object.\n *\n * @param {Object} obj\n * @param {Object} terse whether to use HTML5 terse boolean attributes\n * @return {String}\n */\nexports.attrs = pug_attrs;\nfunction pug_attrs(obj, terse){\n  var attrs = '';\n\n  for (var key in obj) {\n    if (pug_has_own_property.call(obj, key)) {\n      var val = obj[key];\n\n      if ('class' === key) {\n        val = pug_classes(val);\n        attrs = pug_attr(key, val, false, terse) + attrs;\n        continue;\n      }\n      if ('style' === key) {\n        val = pug_style(val);\n      }\n      attrs += pug_attr(key, val, false, terse);\n    }\n  }\n\n  return attrs;\n};\n\n/**\n * Escape the given string of `html`.\n *\n * @param {String} html\n * @return {String}\n * @api private\n */\n\nvar pug_match_html = /[\"&<>]/;\nexports.escape = pug_escape;\nfunction pug_escape(_html){\n  var html = '' + _html;\n  var regexResult = pug_match_html.exec(html);\n  if (!regexResult) return _html;\n\n  var result = '';\n  var i, lastIndex, escape;\n  for (i = regexResult.index, lastIndex = 0; i < html.length; i++) {\n    switch (html.charCodeAt(i)) {\n      case 34: escape = '&quot;'; break;\n      case 38: escape = '&amp;'; break;\n      case 60: escape = '&lt;'; break;\n      case 62: escape = '&gt;'; break;\n      default: continue;\n    }\n    if (lastIndex !== i) result += html.substring(lastIndex, i);\n    lastIndex = i + 1;\n    result += escape;\n  }\n  if (lastIndex !== i) return result + html.substring(lastIndex, i);\n  else return result;\n};\n\n/**\n * Re-throw the given `err` in context to the\n * the pug in `filename` at the given `lineno`.\n *\n * @param {Error} err\n * @param {String} filename\n * @param {String} lineno\n * @param {String} str original source\n * @api private\n */\n\nexports.rethrow = pug_rethrow;\nfunction pug_rethrow(err, filename, lineno, str){\n  if (!(err instanceof Error)) throw err;\n  if ((typeof window != 'undefined' || !filename) && !str) {\n    err.message += ' on line ' + lineno;\n    throw err;\n  }\n  try {\n    str = str || __webpack_require__(/*! fs */ \"fs\").readFileSync(filename, 'utf8')\n  } catch (ex) {\n    pug_rethrow(err, null, lineno)\n  }\n  var context = 3\n    , lines = str.split('\\n')\n    , start = Math.max(lineno - context, 0)\n    , end = Math.min(lines.length, lineno + context);\n\n  // Error context\n  var context = lines.slice(start, end).map(function(line, i){\n    var curr = i + start + 1;\n    return (curr == lineno ? '  > ' : '    ')\n      + curr\n      + '| '\n      + line;\n  }).join('\\n');\n\n  // Alter exception message\n  err.path = filename;\n  err.message = (filename || 'Pug') + ':' + lineno\n    + '\\n' + context + '\\n\\n' + err.message;\n  throw err;\n};\n\n\n//# sourceURL=webpack:///./node_modules/pug-runtime/index.js?");

/***/ }),

/***/ "./src/components/About/About.jsx":
/*!****************************************!*\
  !*** ./src/components/About/About.jsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _About_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./About.scss */ \"./src/components/About/About.scss\");\n/* harmony import */ var _About_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_About_scss__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nclass About extends react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"] {\n\n\trender() {\n\t\treturn react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n\t\t\t'div',\n\t\t\t{ className: _About_scss__WEBPACK_IMPORTED_MODULE_1___default.a.root },\n\t\t\treact__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n\t\t\t\t'div',\n\t\t\t\t{ className: _About_scss__WEBPACK_IMPORTED_MODULE_1___default.a.container },\n\t\t\t\treact__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n\t\t\t\t\t'div',\n\t\t\t\t\t{ className: _About_scss__WEBPACK_IMPORTED_MODULE_1___default.a.heading },\n\t\t\t\t\treact__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n\t\t\t\t\t\t'h2',\n\t\t\t\t\t\tnull,\n\t\t\t\t\t\t'About'\n\t\t\t\t\t)\n\t\t\t\t),\n\t\t\t\treact__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n\t\t\t\t\t'div',\n\t\t\t\t\t{ className: _About_scss__WEBPACK_IMPORTED_MODULE_1___default.a.content },\n\t\t\t\t\treact__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n\t\t\t\t\t\t'p',\n\t\t\t\t\t\tnull,\n\t\t\t\t\t\t'This template is build using React, Webpack, SASS and ReactRouter. It is intended as a starting point for isometric react projects and generates a server side script from src/server.js and client side using src/app.js. React router configuration is in src/routes.js.'\n\t\t\t\t\t)\n\t\t\t\t)\n\t\t\t)\n\t\t);\n\t}\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (About);\n\n//# sourceURL=webpack:///./src/components/About/About.jsx?");

/***/ }),

/***/ "./src/components/About/About.scss":
/*!*****************************************!*\
  !*** ./src/components/About/About.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\nmodule.exports = {\"root\":\"About__root--2Pc3I\",\"container\":\"About__container--14LRN\",\"heading\":\"About__heading--3qDXC\"};\n\n//# sourceURL=webpack:///./src/components/About/About.scss?");

/***/ }),

/***/ "./src/components/App/App.jsx":
/*!************************************!*\
  !*** ./src/components/App/App.jsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Header */ \"./src/components/Header/Header.jsx\");\n/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Footer */ \"./src/components/Footer/Footer.jsx\");\n/* harmony import */ var _App_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./App.scss */ \"./src/components/App/App.scss\");\n/* harmony import */ var _App_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_App_scss__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _Index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Index */ \"./src/components/Index/Index.jsx\");\n/* harmony import */ var _About__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../About */ \"./src/components/About/About.jsx\");\n/* harmony import */ var _NotFound__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../NotFound */ \"./src/components/NotFound/NotFound.jsx\");\n\n\n\n\n\n\n\n\n\n\nclass App extends react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"] {\n\n\tconstructor(props) {\n\t\tsuper();\n\n\t\tthis.props = props;\n\t}\n\n\trender() {\n\t\tconst basePath = this.props.basePath || '/';\n\n\t\treturn react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n\t\t\t'div',\n\t\t\tnull,\n\t\t\treact__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Header__WEBPACK_IMPORTED_MODULE_3__[\"default\"], null),\n\t\t\treact__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n\t\t\t\t'div',\n\t\t\t\t{ className: _App_scss__WEBPACK_IMPORTED_MODULE_5___default.a.appBody },\n\t\t\t\treact__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n\t\t\t\t\treact_router_dom__WEBPACK_IMPORTED_MODULE_2__[\"Switch\"],\n\t\t\t\t\tnull,\n\t\t\t\t\treact__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__[\"Route\"], { exact: true, path: basePath, component: _Index__WEBPACK_IMPORTED_MODULE_6__[\"default\"] }),\n\t\t\t\t\treact__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__[\"Route\"], { path: `${basePath}about`, component: _About__WEBPACK_IMPORTED_MODULE_7__[\"default\"] }),\n\t\t\t\t\treact__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__[\"Route\"], { component: _NotFound__WEBPACK_IMPORTED_MODULE_8__[\"default\"] })\n\t\t\t\t)\n\t\t\t),\n\t\t\treact__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Footer__WEBPACK_IMPORTED_MODULE_4__[\"default\"], null)\n\t\t);\n\t}\n\n}\n\nApp.propTypes = {};\n/* harmony default export */ __webpack_exports__[\"default\"] = (App);\n\n//# sourceURL=webpack:///./src/components/App/App.jsx?");

/***/ }),

/***/ "./src/components/App/App.scss":
/*!*************************************!*\
  !*** ./src/components/App/App.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\nmodule.exports = {\"browserupgrade\":\"App__browserupgrade--1t44r\"};\n\n//# sourceURL=webpack:///./src/components/App/App.scss?");

/***/ }),

/***/ "./src/components/Footer/Footer.jsx":
/*!******************************************!*\
  !*** ./src/components/Footer/Footer.jsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Footer_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Footer.scss */ \"./src/components/Footer/Footer.scss\");\n/* harmony import */ var _Footer_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Footer_scss__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\nclass Footer extends react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"] {\n\n\tconstructor(props) {\n\t\tsuper();\n\n\t\tthis.props = props;\n\t\tthis.state = {};\n\t}\n\n\trender() {\n\t\tconst className = this.props.className ? `${_Footer_scss__WEBPACK_IMPORTED_MODULE_2___default.a.content} ${this.props.className}` : _Footer_scss__WEBPACK_IMPORTED_MODULE_2___default.a.content;\n\t\treturn react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n\t\t\t'div',\n\t\t\t{ className: className },\n\t\t\treact__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n\t\t\t\t'p',\n\t\t\t\tnull,\n\t\t\t\t'Footer'\n\t\t\t)\n\t\t);\n\t}\n\n}\n\nFooter.propTypes = {\n\tclassName: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Footer);\n\n//# sourceURL=webpack:///./src/components/Footer/Footer.jsx?");

/***/ }),

/***/ "./src/components/Footer/Footer.scss":
/*!*******************************************!*\
  !*** ./src/components/Footer/Footer.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/components/Footer/Footer.scss?");

/***/ }),

/***/ "./src/components/Header/Header.jsx":
/*!******************************************!*\
  !*** ./src/components/Header/Header.jsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Header_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Header.scss */ \"./src/components/Header/Header.scss\");\n/* harmony import */ var _Header_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Header_scss__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _logo_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./logo.png */ \"./src/components/Header/logo.png\");\n/* harmony import */ var _logo_png__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_logo_png__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\n\nclass Header extends react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"] {\n  constructor(props) {\n    super(props);\n    this.state = {};\n    this.toggleMenu = this.toggleMenu.bind(this);\n  }\n  componentDidMount() {\n    console.log('hello mounty');\n  }\n  toggleMenu(e) {\n    console.log('Ping');\n    e.classList.toggle(\"change\");\n  }\n\n  render() {\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n      'div',\n      { className: _Header_scss__WEBPACK_IMPORTED_MODULE_1___default.a.root, onClick: console.log('outer ping') },\n      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n        'div',\n        { className: _Header_scss__WEBPACK_IMPORTED_MODULE_1___default.a.container },\n        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n          'div',\n          { className: _Header_scss__WEBPACK_IMPORTED_MODULE_1___default.a.hamburger, onClick: console.log('inner ping') },\n          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('div', { className: _Header_scss__WEBPACK_IMPORTED_MODULE_1___default.a.bar1 }),\n          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('div', { className: _Header_scss__WEBPACK_IMPORTED_MODULE_1___default.a.bar2 }),\n          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('div', { className: _Header_scss__WEBPACK_IMPORTED_MODULE_1___default.a.bar3 })\n        ),\n        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n          'div',\n          { className: _Header_scss__WEBPACK_IMPORTED_MODULE_1___default.a.banner },\n          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n            'h1',\n            { className: _Header_scss__WEBPACK_IMPORTED_MODULE_1___default.a.bannerTitle },\n            'React'\n          ),\n          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n            'p',\n            { className: _Header_scss__WEBPACK_IMPORTED_MODULE_1___default.a.bannerDesc },\n            'Complex web apps made easy'\n          )\n        )\n      )\n    );\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);\n\n//# sourceURL=webpack:///./src/components/Header/Header.jsx?");

/***/ }),

/***/ "./src/components/Header/Header.scss":
/*!*******************************************!*\
  !*** ./src/components/Header/Header.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\nmodule.exports = {\"root\":\"Header__root--14IZ-\",\"container\":\"Header__container--izfMl\",\"brand\":\"Header__brand--1-TOO\",\"brandTxt\":\"Header__brandTxt--162t7\",\"nav\":\"Header__nav--3wxEr\",\"banner\":\"Header__banner--UgCID\",\"bannerTitle\":\"Header__bannerTitle--3Qi2j\",\"bannerDesc\":\"Header__bannerDesc--3OwMT\",\"hamburger\":\"Header__hamburger--3VBnB\",\"bar1\":\"Header__bar1--2sCRa\",\"bar2\":\"Header__bar2--3-534\",\"bar3\":\"Header__bar3--1sMvu\",\"change\":\"Header__change--ilVJk\"};\n\n//# sourceURL=webpack:///./src/components/Header/Header.scss?");

/***/ }),

/***/ "./src/components/Header/logo.png":
/*!****************************************!*\
  !*** ./src/components/Header/logo.png ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"736714400cc3e46dd537b0e024daba7e.png\";\n\n//# sourceURL=webpack:///./src/components/Header/logo.png?");

/***/ }),

/***/ "./src/components/Index/Index.jsx":
/*!****************************************!*\
  !*** ./src/components/Index/Index.jsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Index_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Index.scss */ \"./src/components/Index/Index.scss\");\n/* harmony import */ var _Index_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Index_scss__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nclass Index extends react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"] {\n\n\trender() {\n\t\treturn react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n\t\t\t'div',\n\t\t\t{ className: _Index_scss__WEBPACK_IMPORTED_MODULE_1___default.a.root },\n\t\t\treact__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n\t\t\t\t'div',\n\t\t\t\t{ className: _Index_scss__WEBPACK_IMPORTED_MODULE_1___default.a.container },\n\t\t\t\treact__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n\t\t\t\t\t'div',\n\t\t\t\t\t{ className: _Index_scss__WEBPACK_IMPORTED_MODULE_1___default.a.heading },\n\t\t\t\t\treact__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n\t\t\t\t\t\t'h2',\n\t\t\t\t\t\tnull,\n\t\t\t\t\t\t'Sample Page'\n\t\t\t\t\t)\n\t\t\t\t),\n\t\t\t\treact__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n\t\t\t\t\t'div',\n\t\t\t\t\t{ className: _Index_scss__WEBPACK_IMPORTED_MODULE_1___default.a.content },\n\t\t\t\t\treact__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n\t\t\t\t\t\t'p',\n\t\t\t\t\t\tnull,\n\t\t\t\t\t\t'Lorem ipsum dolor sit amet, ex eum utinam consectetuer. Veniam quaeque facilisi eam ex, at mel labitur repudiare, id erat euismod vis. Has debet inimicus no, has ne eripuit mediocrem aliquando, ei sint delenit pri. Choro convenire deterruisset nec id, evertitur reprehendunt ea nec.'\n\t\t\t\t\t),\n\t\t\t\t\treact__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n\t\t\t\t\t\t'p',\n\t\t\t\t\t\tnull,\n\t\t\t\t\t\t'Volumus eligendi consequat mei in, elitr voluptua assueverit per ad, mucius philosophia vix ei. Eum ne labore gubergren reformidans, te vim verear legimus inimicus. At nec perpetua cotidieque. Ex everti aliquam mel. Est no deleniti tractatos adipiscing, at mei detraxit dissentiet. Eu audire quaeque eos, ei feugiat facilis sit, at duo mentitum offendit appareat.'\n\t\t\t\t\t),\n\t\t\t\t\treact__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n\t\t\t\t\t\t'p',\n\t\t\t\t\t\tnull,\n\t\t\t\t\t\t'Eu assum eruditi consequuntur usu. Nec eu tollit labore facilisis, dicunt iudicabit philosophia eam eu. Omnesque deleniti urbanitas ad pro, congue urbanitas intellegam id nam. No exerci expetenda sea. Ex dicam verterem gubergren qui.'\n\t\t\t\t\t),\n\t\t\t\t\treact__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n\t\t\t\t\t\t'p',\n\t\t\t\t\t\tnull,\n\t\t\t\t\t\t'Audire salutandi pro ne, veritus albucius ne per. Ea his simul omnes ocurreret, eu delectus partiendo persecuti eum. Case exerci utroque no per, eu vel delenit perpetua repudiare. Vim ex legere habemus, vix ne tempor detracto, ad sit veritus rationibus. Nec no regione convenire tractatos, an vide etiam voluptaria sea. Cu petentium complectitur eum.'\n\t\t\t\t\t)\n\t\t\t\t)\n\t\t\t)\n\t\t);\n\t}\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);\n\n//# sourceURL=webpack:///./src/components/Index/Index.jsx?");

/***/ }),

/***/ "./src/components/Index/Index.scss":
/*!*****************************************!*\
  !*** ./src/components/Index/Index.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\nmodule.exports = {\"root\":\"Index__root--xHz9Y\",\"container\":\"Index__container--9lkSI\",\"heading\":\"Index__heading--36oOI\"};\n\n//# sourceURL=webpack:///./src/components/Index/Index.scss?");

/***/ }),

/***/ "./src/components/NotFound/NotFound.jsx":
/*!**********************************************!*\
  !*** ./src/components/NotFound/NotFound.jsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _NotFound_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./NotFound.scss */ \"./src/components/NotFound/NotFound.scss\");\n/* harmony import */ var _NotFound_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_NotFound_scss__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\nclass NotFound extends react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"] {\n\n\tconstructor(props) {\n\t\tsuper();\n\t\tthis.props = props;\n\t}\n\n\trender() {\n\t\treturn react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n\t\t\t'div',\n\t\t\t{ className: _NotFound_scss__WEBPACK_IMPORTED_MODULE_2___default.a.container },\n\t\t\treact__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n\t\t\t\t'div',\n\t\t\t\t{ className: _NotFound_scss__WEBPACK_IMPORTED_MODULE_2___default.a.heading },\n\t\t\t\treact__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n\t\t\t\t\t'h2',\n\t\t\t\t\tnull,\n\t\t\t\t\t'Error 404'\n\t\t\t\t)\n\t\t\t),\n\t\t\treact__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n\t\t\t\t'div',\n\t\t\t\t{ className: _NotFound_scss__WEBPACK_IMPORTED_MODULE_2___default.a.content },\n\t\t\t\treact__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n\t\t\t\t\t'p',\n\t\t\t\t\tnull,\n\t\t\t\t\t'Oh dear! It looks like the page ',\n\t\t\t\t\tthis.props.location.pathname,\n\t\t\t\t\t' could not be found.'\n\t\t\t\t)\n\t\t\t)\n\t\t);\n\t}\n\n}\n\nNotFound.propTypes = {\n\tlocation: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({\n\t\tpathname: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string\n\t})\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (NotFound);\n\n//# sourceURL=webpack:///./src/components/NotFound/NotFound.jsx?");

/***/ }),

/***/ "./src/components/NotFound/NotFound.scss":
/*!***********************************************!*\
  !*** ./src/components/NotFound/NotFound.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\nmodule.exports = {\"container\":\"NotFound__container--2PbzV\",\"heading\":\"NotFound__heading--n6nFk\",\"content\":\"NotFound__content--1N67Q\"};\n\n//# sourceURL=webpack:///./src/components/NotFound/NotFound.scss?");

/***/ }),

/***/ "./src/config/general.js":
/*!*******************************!*\
  !*** ./src/config/general.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = {\n\tbasePath: '/',\n\ttitle: 'My App',\n\tdescription: 'A simple react application boilerplate'\n};\n\n//# sourceURL=webpack:///./src/config/general.js?");

/***/ }),

/***/ "./src/redux/actionTypes.js":
/*!**********************************!*\
  !*** ./src/redux/actionTypes.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/**\n* actionTypes.js\n* Define global action strings for redux reducers\n**/\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n\tsetDummy: 'setDummy'\n});\n\n//# sourceURL=webpack:///./src/redux/actionTypes.js?");

/***/ }),

/***/ "./src/redux/preloadStore.js":
/*!***********************************!*\
  !*** ./src/redux/preloadStore.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var babel_polyfill__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-polyfill */ \"babel-polyfill\");\n/* harmony import */ var babel_polyfill__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_polyfill__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _reducers_RootReducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reducers/RootReducer */ \"./src/redux/reducers/RootReducer.js\");\n\n\n\nfunction preloadStore(store, url) {\n\tlet loaderPromise = new Promise(resolve => resolve());\n\n\tif (url.match(/admin\\/?$/)) {\n\t\t/* Load data and return promise resolving when store is udpated */\n\t}\n\n\treturn loaderPromise.then(() => store);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (preloadStore);\n\n//# sourceURL=webpack:///./src/redux/preloadStore.js?");

/***/ }),

/***/ "./src/redux/reducers/DummyReducer.js":
/*!********************************************!*\
  !*** ./src/redux/reducers/DummyReducer.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return setDummyReducer; });\n/* harmony import */ var _actionTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actionTypes */ \"./src/redux/actionTypes.js\");\n/**\n* DummyReducer.js\n* A sample redux reducer\n**/\n\n\n\nfunction copyDummyData(data) {\n\tconst newDummy = {\n\t\tmyData: dummy\n\t};\n\treturn newDummy;\n}\n\nfunction setDummyReducer(state, action) {\n\tswitch (action.type) {\n\t\tcase _actionTypes__WEBPACK_IMPORTED_MODULE_0__[\"default\"].setDummy:\n\t\t\treturn copyDummyData(action.payload);\n\t\tdefault:\n\t\t\treturn state || {};\n\t}\n}\n\n//# sourceURL=webpack:///./src/redux/reducers/DummyReducer.js?");

/***/ }),

/***/ "./src/redux/reducers/RootReducer.js":
/*!*******************************************!*\
  !*** ./src/redux/reducers/RootReducer.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _DummyReducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DummyReducer */ \"./src/redux/reducers/DummyReducer.js\");\n/**\n* RootReducer.js\n* The root reducer to combine all other reducers used in the application\n**/\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"combineReducers\"])({\n\tdummy: _DummyReducer__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n}));\n\n//# sourceURL=webpack:///./src/redux/reducers/RootReducer.js?");

/***/ }),

/***/ "./src/redux/store.js":
/*!****************************!*\
  !*** ./src/redux/store.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _reducers_RootReducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reducers/RootReducer */ \"./src/redux/reducers/RootReducer.js\");\n/**\n* store.js\n* Redux store definiation\n**/\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"createStore\"])(_reducers_RootReducer__WEBPACK_IMPORTED_MODULE_1__[\"default\"]));\n\n//# sourceURL=webpack:///./src/redux/store.js?");

/***/ }),

/***/ "./src/server.js":
/*!***********************!*\
  !*** ./src/server.js ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router */ \"react-router\");\n/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_router__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _redux_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./redux/store */ \"./src/redux/store.js\");\n/* harmony import */ var _redux_preloadStore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./redux/preloadStore */ \"./src/redux/preloadStore.js\");\n/* harmony import */ var _views_index_pug__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./views/index.pug */ \"./src/views/index.pug\");\n/* harmony import */ var _views_index_pug__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_views_index_pug__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _components_App__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/App */ \"./src/components/App/App.jsx\");\n/* harmony import */ var _config_general__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./config/general */ \"./src/config/general.js\");\n/* harmony import */ var _config_general__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_config_general__WEBPACK_IMPORTED_MODULE_10__);\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nfunction _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step(\"next\", value); }, function (err) { step(\"throw\", err); }); } } return step(\"next\"); }); }; }\n\n\n\n\n\n\n\n\n\n\n\n\n\nconst status = {\n\terror: 500,\n\tredirect: 302,\n\tsuccess: 200,\n\tnotFound: 404\n};\n\n// Data to send to pug template\nconst pugConfig = {\n\ttitle: _config_general__WEBPACK_IMPORTED_MODULE_10___default.a.title,\n\tdescription: _config_general__WEBPACK_IMPORTED_MODULE_10___default.a.description,\n\tscripts: ['/app.js']\n};\n\nconst app = express__WEBPACK_IMPORTED_MODULE_1___default()();\nconst port = process.env.PORT || 5000;\n\napp.use(express__WEBPACK_IMPORTED_MODULE_1___default.a.static(path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, 'public')));\n\napp.use('*', (() => {\n\tvar _ref = _asyncToGenerator(function* (req, res) {\n\n\t\tObject(_redux_preloadStore__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(_redux_store__WEBPACK_IMPORTED_MODULE_6__[\"default\"], req.originalUrl, req.user).then(function (loadedStore) {\n\t\t\tconst context = {};\n\t\t\tconst contentHtml = react_dom_server__WEBPACK_IMPORTED_MODULE_3___default.a.renderToString(react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\n\t\t\t\treact_redux__WEBPACK_IMPORTED_MODULE_5__[\"Provider\"],\n\t\t\t\t{ store: loadedStore },\n\t\t\t\treact__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\n\t\t\t\t\treact_router__WEBPACK_IMPORTED_MODULE_4__[\"StaticRouter\"],\n\t\t\t\t\t{ location: req.originalUrl, context: context },\n\t\t\t\t\treact__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_App__WEBPACK_IMPORTED_MODULE_9__[\"default\"], { basePath: _config_general__WEBPACK_IMPORTED_MODULE_10___default.a.basePath })\n\t\t\t\t)\n\t\t\t));\n\t\t\tconsole.log(context);\n\n\t\t\tconst variables = _extends({}, pugConfig, { content: contentHtml, basePath: _config_general__WEBPACK_IMPORTED_MODULE_10___default.a.basePath, state: JSON.stringify(_redux_store__WEBPACK_IMPORTED_MODULE_6__[\"default\"].getState()) });\n\t\t\tconst html = _views_index_pug__WEBPACK_IMPORTED_MODULE_8___default()(variables);\n\t\t\tres.status(status.success).send(html);\n\t\t}).catch(function (err) {\n\t\t\tconsole.error(err);\n\t\t\tres.status(status.error).send('Server error loading page');\n\t\t});\n\t});\n\n\treturn function (_x, _x2) {\n\t\treturn _ref.apply(this, arguments);\n\t};\n})());\n\napp.listen(port, () => {\n\t/*eslint-disable no-console*/\n\tconsole.log(`Listening on ${port}`);\n});\n\n//# sourceURL=webpack:///./src/server.js?");

/***/ }),

/***/ "./src/views/index.pug":
/*!*****************************!*\
  !*** ./src/views/index.pug ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var pug = __webpack_require__(/*! ../../node_modules/pug-runtime/index.js */ \"./node_modules/pug-runtime/index.js\");\n\nfunction template(locals) {var pug_html = \"\", pug_mixins = {}, pug_interp;;var locals_for_with = (locals || {});(function (content, scripts) {pug_html = pug_html + \"\\u003C!DOCTYPE html\\u003E\\u003Chtml lang=\\\"en\\\"\\u003E\\u003Chead\\u003E\\u003Ctitle\\u003Egovhack2018 adventuretime\\u003C\\u002Ftitle\\u003E\\u003Cmeta charset=\\\"utf-8\\\"\\u003E\\u003Cmeta http-equiv=\\\"X-UA-Compatible\\\" content=\\\"IE=edge\\\"\\u003E\\u003Cmeta name=\\\"description\\\" content=\\\"\\\"\\u003E\\u003Cmeta name=\\\"viewport\\\" content=\\\"width=device-width, initial-scale=1\\\"\\u003E\\u003Clink type=\\\"text\\u002Fcss\\\" rel=\\\"stylesheet\\\" href=\\\"style.css\\\"\\u003E\\u003C\\u002Fhead\\u003E\\u003Cbody\\u003E\\u003Cdiv id=\\\"app\\\"\\u003E\" + (null == (pug_interp = content) ? \"\" : pug_interp) + \"\\u003C\\u002Fdiv\\u003E\";\n// iterate scripts\n;(function(){\n  var $$obj = scripts;\n  if ('number' == typeof $$obj.length) {\n      for (var pug_index0 = 0, $$l = $$obj.length; pug_index0 < $$l; pug_index0++) {\n        var script = $$obj[pug_index0];\npug_html = pug_html + \"\\u003Cscript\" + (pug.attr(\"src\", script, true, true)+pug.attr(\"defer\", true, true, true)) + \"\\u003E\\u003C\\u002Fscript\\u003E\";\n      }\n  } else {\n    var $$l = 0;\n    for (var pug_index0 in $$obj) {\n      $$l++;\n      var script = $$obj[pug_index0];\npug_html = pug_html + \"\\u003Cscript\" + (pug.attr(\"src\", script, true, true)+pug.attr(\"defer\", true, true, true)) + \"\\u003E\\u003C\\u002Fscript\\u003E\";\n    }\n  }\n}).call(this);\n\npug_html = pug_html + \"\\u003C\\u002Fbody\\u003E\\u003C\\u002Fhtml\\u003E\";}.call(this,\"content\" in locals_for_with?locals_for_with.content:typeof content!==\"undefined\"?content:undefined,\"scripts\" in locals_for_with?locals_for_with.scripts:typeof scripts!==\"undefined\"?scripts:undefined));;return pug_html;};\nmodule.exports = template;\n\n//# sourceURL=webpack:///./src/views/index.pug?");

/***/ }),

/***/ 0:
/*!********************************************!*\
  !*** multi babel-polyfill ./src/server.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! babel-polyfill */\"babel-polyfill\");\nmodule.exports = __webpack_require__(/*! ./src/server.js */\"./src/server.js\");\n\n\n//# sourceURL=webpack:///multi_babel-polyfill_./src/server.js?");

/***/ }),

/***/ "babel-polyfill":
/*!*********************************!*\
  !*** external "babel-polyfill" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"babel-polyfill\");\n\n//# sourceURL=webpack:///external_%22babel-polyfill%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"fs\");\n\n//# sourceURL=webpack:///external_%22fs%22?");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");\n\n//# sourceURL=webpack:///external_%22path%22?");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"prop-types\");\n\n//# sourceURL=webpack:///external_%22prop-types%22?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");\n\n//# sourceURL=webpack:///external_%22react%22?");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom/server\");\n\n//# sourceURL=webpack:///external_%22react-dom/server%22?");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-redux\");\n\n//# sourceURL=webpack:///external_%22react-redux%22?");

/***/ }),

/***/ "react-router":
/*!*******************************!*\
  !*** external "react-router" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router\");\n\n//# sourceURL=webpack:///external_%22react-router%22?");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router-dom\");\n\n//# sourceURL=webpack:///external_%22react-router-dom%22?");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux\");\n\n//# sourceURL=webpack:///external_%22redux%22?");

/***/ })

/******/ });