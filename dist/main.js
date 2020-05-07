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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js!./src/sass/style.scss":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src!./node_modules/resolve-url-loader!./node_modules/sass-loader/dist/cjs.js!./src/sass/style.scss ***!
  \******************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\nexports.push([module.i, \"@import url(https://fonts.googleapis.com/css2?family=Jost:wght@200;300;400;500&display=swap);\"]);\n// Module\nexports.push([module.i, \"*,\\n*::before,\\n*::after {\\n  margin: 0;\\n  padding: 0;\\n  box-sizing: inherit; }\\n\\nhtml {\\n  font-size: 62.5%;\\n  box-sizing: border-box; }\\n\\nbody {\\n  min-height: 100vh;\\n  min-width: 100vw; }\\n\\n@-webkit-keyframes background-animation {\\n  0% {\\n    transform: scale(1); }\\n  50% {\\n    transform: scale(5); }\\n  100% {\\n    transform: scale(1); } }\\n\\n@keyframes background-animation {\\n  0% {\\n    transform: scale(1); }\\n  50% {\\n    transform: scale(5); }\\n  100% {\\n    transform: scale(1); } }\\n\\n@-webkit-keyframes load-header {\\n  0% {\\n    opacity: 0;\\n    transform: translateY(2rem); }\\n  50% {\\n    opacity: 1;\\n    transform: translateY(0); }\\n  75% {\\n    opacity: 1;\\n    transform: translateY(0); }\\n  100% {\\n    opacity: 1;\\n    transform: translateY(-20rem); } }\\n\\n@keyframes load-header {\\n  0% {\\n    opacity: 0;\\n    transform: translateY(2rem); }\\n  50% {\\n    opacity: 1;\\n    transform: translateY(0); }\\n  75% {\\n    opacity: 1;\\n    transform: translateY(0); }\\n  100% {\\n    opacity: 1;\\n    transform: translateY(-20rem); } }\\n\\n@-webkit-keyframes btn-start-animation {\\n  0% {\\n    opacity: 0;\\n    transform: translateY(10rem); }\\n  100% {\\n    opacity: 1;\\n    transform: translateY(0); } }\\n\\n@keyframes btn-start-animation {\\n  0% {\\n    opacity: 0;\\n    transform: translateY(10rem); }\\n  100% {\\n    opacity: 1;\\n    transform: translateY(0); } }\\n\\n.container {\\n  position: absolute;\\n  width: 100%;\\n  height: 100%;\\n  overflow: hidden; }\\n  .container .background {\\n    background-color: #ffe53b;\\n    background-image: linear-gradient(147deg, #ffe53b 0%, #ff2525 74%), linear-gradient(327deg, #ff2525 0%, #ffe53b 74%);\\n    height: 100%;\\n    width: 100%;\\n    -webkit-animation-name: background-animation;\\n            animation-name: background-animation;\\n    -webkit-animation-duration: 5s;\\n            animation-duration: 5s;\\n    -webkit-animation-iteration-count: infinite;\\n            animation-iteration-count: infinite; }\\n  .container .content {\\n    width: 100%;\\n    height: 100%;\\n    position: absolute;\\n    top: 0;\\n    left: 0;\\n    display: flex;\\n    flex-direction: column;\\n    justify-content: center;\\n    align-items: center; }\\n\\n.btn {\\n  width: 30rem;\\n  height: 7rem;\\n  top: -5rem;\\n  border-radius: 100px;\\n  border: none;\\n  background-color: rgba(255, 190, 11, 0.4);\\n  cursor: pointer;\\n  transition: all 0.2s;\\n  box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.2);\\n  z-index: 2;\\n  position: relative; }\\n  .btn:hover {\\n    transform: scale(1.1) translateY(-0.5rem);\\n    box-shadow: 0 1.5rem 3rem rgba(0, 0, 0, 0.2); }\\n    .btn:hover::before {\\n      transform: scaleX(1.4) scaleY(1.3);\\n      opacity: 0; }\\n  .btn:active {\\n    transform: translateY(-0.2rem);\\n    box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.2); }\\n  .btn:focus {\\n    outline: none; }\\n  .btn::before {\\n    content: '';\\n    position: absolute;\\n    top: 0;\\n    left: 0;\\n    width: 100%;\\n    height: 100%;\\n    border-radius: 100px;\\n    background-color: rgba(255, 190, 11, 0.4);\\n    transition: all 0.3s;\\n    z-index: 1; }\\n  .btn-start {\\n    text-transform: uppercase;\\n    font-size: 2.5rem;\\n    font-family: inherit;\\n    color: #333;\\n    font-weight: 500;\\n    -webkit-animation-name: btn-start-animation;\\n            animation-name: btn-start-animation;\\n    -webkit-animation-duration: 2s;\\n            animation-duration: 2s;\\n    -webkit-animation-delay: 2.5s;\\n            animation-delay: 2.5s;\\n    -webkit-animation-fill-mode: backwards;\\n            animation-fill-mode: backwards; }\\n\\nbody {\\n  font-size: 1.6rem;\\n  font-family: 'Jost', sans-serif;\\n  font-weight: 400; }\\n\\n.content {\\n  -webkit-backface-visibility: hidden;\\n          backface-visibility: hidden; }\\n  .content__header {\\n    font-weight: 200;\\n    font-size: 10rem;\\n    color: #eee;\\n    -webkit-animation-name: load-header;\\n            animation-name: load-header;\\n    -webkit-animation-duration: 3.5s;\\n            animation-duration: 3.5s;\\n    -webkit-animation-fill-mode: forwards;\\n            animation-fill-mode: forwards; }\\n\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/sass/style.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src!./node_modules/resolve-url-loader!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\n\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return \"/*# sourceURL=\".concat(cssMapping.sourceRoot || '').concat(source, \" */\");\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\n  return \"/*# \".concat(data, \" */\");\n}\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : undefined;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && btoa) {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _sass_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sass/style.scss */ \"./src/sass/style.scss\");\n/* harmony import */ var _sass_style_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_sass_style_scss__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _modules_container__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/_container */ \"./src/modules/_container.js\");\n/* harmony import */ var _modules_content__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/_content */ \"./src/modules/_content.js\");\n/* harmony import */ var _modules_header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/_header */ \"./src/modules/_header.js\");\n/* harmony import */ var _modules_form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/_form */ \"./src/modules/_form.js\");\n\n\n\n\n\n// import createStartBtn from './modules/_startBtn';\n\n\nObject(_modules_container__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\nObject(_modules_content__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\nObject(_modules_header__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n// createStartBtn();\nObject(_modules_form__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/modules/_container.js":
/*!***********************************!*\
  !*** ./src/modules/_container.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _domElements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_domElements */ \"./src/modules/_domElements.js\");\n\n\nfunction createContainer() {\n  const { container, script, background } = _domElements__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\n  document.body.insertBefore(container, script);\n  container.appendChild(background);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (createContainer);\n\n\n//# sourceURL=webpack:///./src/modules/_container.js?");

/***/ }),

/***/ "./src/modules/_content.js":
/*!*********************************!*\
  !*** ./src/modules/_content.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _domElements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_domElements */ \"./src/modules/_domElements.js\");\n\n\nfunction createContent() {\n  const { content, container } = _domElements__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\n\n  container.appendChild(content);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (createContent);\n\n\n//# sourceURL=webpack:///./src/modules/_content.js?");

/***/ }),

/***/ "./src/modules/_domElements.js":
/*!*************************************!*\
  !*** ./src/modules/_domElements.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst container = document.createElement('div');\ncontainer.classList.add('container');\n\nconst script = document.querySelector('script');\n\nconst background = document.createElement('div');\nbackground.classList.add('background');\n\nconst content = document.createElement('div');\ncontent.classList.add('content');\n\nconst header = document.createElement('h1');\nheader.classList.add('content__header');\n\nconst startBtn = document.createElement('button');\nstartBtn.classList.add('btn', 'btn-start');\n\nconst form = document.createElement('form');\nconst input = document.createElement('input');\nconst formBtn = document.createElement('button');\nform.classList.add('form');\ninput.type = 'text';\ninput.classList.add('input');\nformBtn.classList('btn', 'btn-form');\n\nconst elements = {\n  container,\n  script,\n  background,\n  content,\n  header,\n  startBtn,\n  form,\n  input,\n  formBtn,\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (elements);\n\n\n//# sourceURL=webpack:///./src/modules/_domElements.js?");

/***/ }),

/***/ "./src/modules/_form.js":
/*!******************************!*\
  !*** ./src/modules/_form.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _domElements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_domElements */ \"./src/modules/_domElements.js\");\n\n\nfunction createForm() {\n  const { content, form, input, formBtn } = _domElements__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\n\n  form.appendChild(input);\n  form.appendChild(formBtn);\n\n  content.appendChild(form);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (createForm);\n\n\n//# sourceURL=webpack:///./src/modules/_form.js?");

/***/ }),

/***/ "./src/modules/_header.js":
/*!********************************!*\
  !*** ./src/modules/_header.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _domElements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_domElements */ \"./src/modules/_domElements.js\");\n\n\nfunction createHeader() {\n  const { content, header } = _domElements__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\n  header.textContent = \"What's the weather?\";\n\n  content.appendChild(header);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (createHeader);\n\n\n//# sourceURL=webpack:///./src/modules/_header.js?");

/***/ }),

/***/ "./src/sass/style.scss":
/*!*****************************!*\
  !*** ./src/sass/style.scss ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/postcss-loader/src!../../node_modules/resolve-url-loader!../../node_modules/sass-loader/dist/cjs.js!./style.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js!./src/sass/style.scss\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\n\n\nmodule.exports = content.locals || {};\n\n//# sourceURL=webpack:///./src/sass/style.scss?");

/***/ })

/******/ });