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
/******/ 	__webpack_require__.p = "/todo-list-app/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js?!./src/style/main.scss":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??ref--5-2!./src/style/main.scss ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Imports\nexports.push([module.i, \"@import url(https://fonts.googleapis.com/css?family=Cantarell&display=swap);\", \"\"]);\n// Module\nexports.push([module.i, \"* {\\n  padding: 0;\\n  margin: 0;\\n  box-sizing: border-box;\\n}\\n\\nbody {\\n  display: flex;\\n  justify-content: center;\\n  font-family: \\\"Cantarell\\\", sans-serif;\\n  background-color: #292929;\\n  color: white;\\n}\\n\\n#app {\\n  display: flex;\\n  flex-flow: column wrap;\\n  width: 100%;\\n}\\n#app .header {\\n  display: flex;\\n  align-items: center;\\n  width: 100%;\\n  height: 70px;\\n  border-bottom: 1px solid #4b4b4b;\\n  background-color: #252525;\\n}\\n#app .header .title {\\n  padding-left: 20px;\\n  font-size: 2em;\\n}\\n#app .footer {\\n  position: fixed;\\n  left: 0;\\n  bottom: 0;\\n  display: flex;\\n  align-items: center;\\n  width: 100%;\\n  height: 70px;\\n  border-top: 1px solid #4b4b4b;\\n  background-color: #252525;\\n}\\n#app .footer .author {\\n  padding-left: 20px;\\n  font-size: 1em;\\n}\", \"\"]);\n\n\n//# sourceURL=webpack:///./src/style/main.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??ref--5-2");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js?!./src/style/message.scss":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??ref--5-2!./src/style/message.scss ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Module\nexports.push([module.i, \".message {\\n  display: flex;\\n  justify-content: center;\\n  width: 100%;\\n  font-size: 3em;\\n  color: #ffc400;\\n  margin-top: 4rem;\\n}\", \"\"]);\n\n\n//# sourceURL=webpack:///./src/style/message.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??ref--5-2");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js?!./src/style/modal.scss":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??ref--5-2!./src/style/modal.scss ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Module\nexports.push([module.i, \".popup {\\n  display: none;\\n  position: fixed;\\n  z-index: 200;\\n  top: 30%;\\n  left: 20%;\\n  width: 60%;\\n  background: white;\\n  padding: 2rem;\\n  background-color: #252525;\\n  border: 1px solid #4b4b4b;\\n  border-radius: 5px;\\n  font-size: 1.3em;\\n}\\n.popup .popup-content {\\n  display: flex;\\n  flex-flow: row wrap;\\n  justify-content: space-between;\\n}\\n.popup .popup-content .popup-title {\\n  display: flex;\\n  width: 100%;\\n  margin-bottom: 2rem;\\n}\\n.popup .popup-content .popup-title span {\\n  margin-right: 20px;\\n  font-size: 1.5em;\\n}\\n.popup .popup-content .popup-title .popup-input {\\n  display: flex;\\n  align-items: center;\\n  width: 100%;\\n}\\n.popup .popup-content .popup-title .popup-input input[type=text] {\\n  padding: 15px 0 15px 15px;\\n  height: 100%;\\n  flex-grow: 1;\\n  resize: none;\\n  font-size: 0.8em;\\n  background-color: transparent;\\n  border: 1px solid #4b4b4b;\\n  border-radius: 5px;\\n  color: white;\\n}\\n.popup .popup-content .popup-title .popup-input input[type=text]:focus {\\n  outline: none;\\n  background-color: #303030;\\n}\\n.popup .popup-content .popup-description {\\n  width: 100%;\\n}\\n.popup .popup-content .popup-description span {\\n  font-size: 1.5em;\\n}\\n.popup .popup-content .popup-description textarea {\\n  margin-top: 1rem;\\n  width: 100%;\\n  resize: none;\\n  padding: 15px 0 15px 15px;\\n  font-size: 0.2em;\\n  font-size: 1.1em;\\n  background-color: transparent;\\n  border: 1px solid #4b4b4b;\\n  border-radius: 5px;\\n  color: white;\\n}\\n.popup .popup-content .popup-description textarea:focus {\\n  outline: none;\\n  background-color: #303030;\\n}\\n.popup .popup-content .popup-actions {\\n  display: flex;\\n  justify-content: space-between;\\n  width: 100%;\\n  text-align: right;\\n  margin-top: 2rem;\\n}\\n.popup .popup-content .popup-actions .popup-priority span {\\n  font-size: 1.5em;\\n  margin-right: 0.8rem;\\n}\\n.popup .popup-content .popup-actions .popup-priority select {\\n  padding: 0.5em 1.4em 0.5em 0.8em;\\n  margin: 0;\\n  border: 1px solid #4b4b4b;\\n  border-radius: 5px;\\n  background-color: #252525;\\n  font-size: 1em;\\n  color: white;\\n}\\n.popup .popup-content .popup-actions .popup-priority select:hover {\\n  cursor: pointer;\\n  border-color: #585858;\\n}\\n.popup .popup-content .popup-actions .popup-buttons {\\n  display: flex;\\n  align-content: center;\\n}\\n.popup .popup-content .popup-actions .popup-buttons button {\\n  border-radius: 5px;\\n  border: 1px solid #4b4b4b;\\n  display: inline-block;\\n  cursor: pointer;\\n  font-size: 1em;\\n  font-weight: bold;\\n  padding: 5px 40px;\\n  margin-left: 1rem;\\n  text-decoration: none;\\n  background-color: transparent;\\n  color: white;\\n}\\n.popup .popup-content .popup-actions .popup-buttons button:active {\\n  transform: scale(0.98);\\n  transition: transform 0.05s;\\n}\\n.popup .popup-content .popup-actions .popup-buttons button:hover {\\n  background-color: #303030;\\n}\\n.popup .popup-content .popup-actions .popup-buttons button:active {\\n  background-color: #424242;\\n}\\n.popup .popup-content .popup-actions .popup-buttons button:focus {\\n  outline: 0;\\n}\\n.popup .popup-content .popup-actions .popup-buttons .cancel-button {\\n  background-color: #a80000;\\n}\\n.popup .popup-content .popup-actions .popup-buttons .cancel-button:hover {\\n  background-color: #9b0000;\\n}\\n.popup .popup-content .popup-actions .popup-buttons .cancel-button:active {\\n  background-color: #850000;\\n}\\n.popup .popup-content .popup-actions .popup-buttons .save-button {\\n  background-color: #008d00;\\n}\\n.popup .popup-content .popup-actions .popup-buttons .save-button:hover {\\n  background-color: #007c00;\\n}\\n.popup .popup-content .popup-actions .popup-buttons .save-button:active {\\n  background-color: #007200;\\n}\\n\\n.back {\\n  display: none;\\n  position: fixed;\\n  width: 100%;\\n  height: 100%;\\n  top: 0;\\n  left: 0;\\n  background: rgba(0, 0, 0, 0.5);\\n  z-index: 100;\\n}\", \"\"]);\n\n\n//# sourceURL=webpack:///./src/style/modal.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??ref--5-2");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js?!./src/style/todo-item.scss":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??ref--5-2!./src/style/todo-item.scss ***!
  \*************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Module\nexports.push([module.i, \".todo-list {\\n  display: flex;\\n  flex-flow: row wrap;\\n  justify-content: flex-start;\\n  margin-bottom: 7rem;\\n}\\n.todo-list .todo-item {\\n  display: flex;\\n  flex-flow: column wrap;\\n  justify-content: space-between;\\n  width: 20%;\\n  height: 300px;\\n  border: 1px solid #4b4b4b;\\n  border-radius: 5px;\\n  padding: 20px;\\n  margin: 2rem 0 0 2rem;\\n  background-color: #252525;\\n}\\n.todo-list .todo-item .label {\\n  font-size: 1.3em;\\n}\\n.todo-list .todo-item .info {\\n  display: flex;\\n  flex-flow: column wrap;\\n  justify-content: space-between;\\n  align-content: flex-start;\\n}\\n.todo-list .todo-item .info .priority-info {\\n  display: flex;\\n  justify-content: center;\\n  width: 40%;\\n  border: 1px dashed #4b4b4b;\\n  border-radius: 5px;\\n  padding: 5px 10px;\\n  margin-bottom: 2rem;\\n}\\n.todo-list .todo-item .info .status-info {\\n  width: 100%;\\n  display: flex;\\n  align-items: center;\\n  justify-content: space-around;\\n}\\n.todo-list .todo-item .info .status-info button {\\n  width: 30%;\\n  border-radius: 5px;\\n  border: 1px solid #4b4b4b;\\n  display: inline-block;\\n  cursor: pointer;\\n  font-size: 1em;\\n  font-weight: bold;\\n  padding: 5px 5px;\\n  text-decoration: none;\\n  background-color: transparent;\\n  color: white;\\n}\\n.todo-list .todo-item .info .status-info button:active {\\n  transform: scale(0.98);\\n  transition: transform 0.05s;\\n}\\n.todo-list .todo-item .info .status-info button:focus {\\n  outline: 0;\\n}\\n.todo-list .todo-item .info .status-info .item-done-button {\\n  background-color: #008d00;\\n}\\n.todo-list .todo-item .info .status-info .item-done-button:hover {\\n  background-color: #007c00;\\n}\\n.todo-list .todo-item .info .status-info .item-done-button:active {\\n  background-color: #007200;\\n}\\n.todo-list .todo-item .info .status-info .item-edit-button {\\n  background-color: #00718d;\\n}\\n.todo-list .todo-item .info .status-info .item-edit-button:hover {\\n  background-color: #006781;\\n}\\n.todo-list .todo-item .info .status-info .item-edit-button:active {\\n  background-color: #006079;\\n}\\n.todo-list .todo-item .info .status-info .item-delete-button {\\n  background-color: #a80000;\\n}\\n.todo-list .todo-item .info .status-info .item-delete-button:hover {\\n  background-color: #9b0000;\\n}\\n.todo-list .todo-item .info .status-info .item-delete-button:active {\\n  background-color: #850000;\\n}\\n.todo-list .item-done {\\n  background-color: #3d3d3d;\\n}\\n.todo-list .item-done div:not(:last-child) {\\n  text-decoration: line-through;\\n}\", \"\"]);\n\n\n//# sourceURL=webpack:///./src/style/todo-item.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??ref--5-2");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js?!./src/style/todo-list.scss":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??ref--5-2!./src/style/todo-list.scss ***!
  \*************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Module\nexports.push([module.i, \".todo {\\n  display: flex;\\n  justify-content: space-around;\\n  align-content: center;\\n  margin-top: 2rem;\\n  height: 40px;\\n}\\n.todo .filter-todo {\\n  display: flex;\\n  justify-content: space-around;\\n  align-content: center;\\n  width: 75%;\\n}\\n.todo .filter-todo .search-panel {\\n  display: flex;\\n  align-content: center;\\n}\\n.todo .filter-todo .search-panel input[type=text] {\\n  background-color: transparent;\\n  border: 1px solid #4b4b4b;\\n  margin-right: 5px;\\n  font-size: 1em;\\n  color: white;\\n  padding: 5px 20px;\\n  border-radius: 5px;\\n}\\n.todo .filter-todo .search-panel input[type=text]:focus {\\n  outline: none;\\n  background-color: #303030;\\n}\\n.todo .filter-todo .status, .todo .filter-todo .priority {\\n  display: flex;\\n  align-items: center;\\n}\\n.todo .filter-todo .label-todo {\\n  margin-right: 10px;\\n}\\n.todo .filter-todo .todo-select {\\n  padding: 0.5em 1.4em 0.5em 0.8em;\\n  margin: 0;\\n  border: 1px solid #4b4b4b;\\n  border-radius: 5px;\\n  background-color: #252525;\\n  font-size: 1em;\\n  color: white;\\n}\\n.todo .filter-todo .todo-select::-ms-expand {\\n  display: none;\\n}\\n.todo .filter-todo .todo-select:hover {\\n  cursor: pointer;\\n  border-color: #585858;\\n}\\n.todo .filter-todo .todo-select:focus {\\n  border-color: #424242;\\n  box-shadow: 0 0 1px 1px rgba(73, 73, 73, 0.7);\\n  outline: none;\\n}\\n.todo .filter-todo .todo-select option {\\n  padding-left: 100px;\\n}\\n.todo .add-item {\\n  display: flex;\\n  justify-content: center;\\n  width: 25%;\\n}\\n.todo .add-item .create-button {\\n  border-radius: 5px;\\n  border: 1px solid #4b4b4b;\\n  display: inline-block;\\n  cursor: pointer;\\n  font-size: 1em;\\n  font-weight: bold;\\n  padding: 5px 40px;\\n  text-decoration: none;\\n  background-color: transparent;\\n  color: white;\\n}\\n.todo .add-item .create-button:active {\\n  transform: scale(0.98);\\n  transition: transform 0.05s;\\n}\\n.todo .add-item .create-button:hover {\\n  background-color: #303030;\\n}\\n.todo .add-item .create-button:active {\\n  background-color: #424242;\\n}\\n.todo .add-item .create-button:focus {\\n  outline: 0;\\n}\", \"\"]);\n\n\n//# sourceURL=webpack:///./src/style/todo-list.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??ref--5-2");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \"{\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    for (var i = 0; i < this.length; i++) {\n      // eslint-disable-next-line prefer-destructuring\n      var id = this[i][0];\n\n      if (id != null) {\n        alreadyImportedModules[id] = true;\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = modules[_i]; // skip already imported module\n      // this implementation is not 100% perfect for weird media query combinations\n      // when a module is imported multiple times with different media queries.\n      // I hope this will never occur (Hey this way we have smaller bundles)\n\n      if (item[0] == null || !alreadyImportedModules[item[0]]) {\n        if (mediaQuery && !item[2]) {\n          item[2] = mediaQuery;\n        } else if (mediaQuery) {\n          item[2] = \"(\".concat(item[2], \") and (\").concat(mediaQuery, \")\");\n        }\n\n        list.push(item);\n      }\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\n\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return \"/*# sourceURL=\".concat(cssMapping.sourceRoot).concat(source, \" */\");\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\n  return \"/*# \".concat(data, \" */\");\n}\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar stylesInDom = {};\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nfunction listToStyles(list, options) {\n  var styles = [];\n  var newStyles = {};\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var css = item[1];\n    var media = item[2];\n    var sourceMap = item[3];\n    var part = {\n      css: css,\n      media: media,\n      sourceMap: sourceMap\n    };\n\n    if (!newStyles[id]) {\n      styles.push(newStyles[id] = {\n        id: id,\n        parts: [part]\n      });\n    } else {\n      newStyles[id].parts.push(part);\n    }\n  }\n\n  return styles;\n}\n\nfunction addStylesToDom(styles, options) {\n  for (var i = 0; i < styles.length; i++) {\n    var item = styles[i];\n    var domStyle = stylesInDom[item.id];\n    var j = 0;\n\n    if (domStyle) {\n      domStyle.refs++;\n\n      for (; j < domStyle.parts.length; j++) {\n        domStyle.parts[j](item.parts[j]);\n      }\n\n      for (; j < item.parts.length; j++) {\n        domStyle.parts.push(addStyle(item.parts[j], options));\n      }\n    } else {\n      var parts = [];\n\n      for (; j < item.parts.length; j++) {\n        parts.push(addStyle(item.parts[j], options));\n      }\n\n      stylesInDom[item.id] = {\n        id: item.id,\n        refs: 1,\n        parts: parts\n      };\n    }\n  }\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n\n  if (typeof options.attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : undefined;\n\n    if (nonce) {\n      options.attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(options.attributes).forEach(function (key) {\n    style.setAttribute(key, options.attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  }\n\n  if (sourceMap && btoa) {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  options.attributes = typeof options.attributes === 'object' ? options.attributes : {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  var styles = listToStyles(list, options);\n  addStylesToDom(styles, options);\n  return function update(newList) {\n    var mayRemove = [];\n\n    for (var i = 0; i < styles.length; i++) {\n      var item = styles[i];\n      var domStyle = stylesInDom[item.id];\n\n      if (domStyle) {\n        domStyle.refs--;\n        mayRemove.push(domStyle);\n      }\n    }\n\n    if (newList) {\n      var newStyles = listToStyles(newList, options);\n      addStylesToDom(newStyles, options);\n    }\n\n    for (var _i = 0; _i < mayRemove.length; _i++) {\n      var _domStyle = mayRemove[_i];\n\n      if (_domStyle.refs === 0) {\n        for (var j = 0; j < _domStyle.parts.length; j++) {\n          _domStyle.parts[j]();\n        }\n\n        delete stylesInDom[_domStyle.id];\n      }\n    }\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _js_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/data */ \"./src/js/data.js\");\n/* harmony import */ var _style_main_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style/main.scss */ \"./src/style/main.scss\");\n/* harmony import */ var _style_main_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_style_main_scss__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _style_modal_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style/modal.scss */ \"./src/style/modal.scss\");\n/* harmony import */ var _style_modal_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_style_modal_scss__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _style_todo_list_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style/todo-list.scss */ \"./src/style/todo-list.scss\");\n/* harmony import */ var _style_todo_list_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_style_todo_list_scss__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _style_todo_item_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style/todo-item.scss */ \"./src/style/todo-item.scss\");\n/* harmony import */ var _style_todo_item_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_style_todo_item_scss__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _style_message_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./style/message.scss */ \"./src/style/message.scss\");\n/* harmony import */ var _style_message_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_style_message_scss__WEBPACK_IMPORTED_MODULE_5__);\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance\"); }\n\nfunction _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === \"[object Arguments]\") return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }\n\n\n\n\n\n\n\nvar idx = _js_data__WEBPACK_IMPORTED_MODULE_0__[\"default\"].idx,\n    customLabel = _js_data__WEBPACK_IMPORTED_MODULE_0__[\"default\"].customLabel,\n    customDescription = _js_data__WEBPACK_IMPORTED_MODULE_0__[\"default\"].customDescription,\n    customPriority = _js_data__WEBPACK_IMPORTED_MODULE_0__[\"default\"].customPriority,\n    search = _js_data__WEBPACK_IMPORTED_MODULE_0__[\"default\"].search,\n    currentPriority = _js_data__WEBPACK_IMPORTED_MODULE_0__[\"default\"].currentPriority,\n    currentStatus = _js_data__WEBPACK_IMPORTED_MODULE_0__[\"default\"].currentStatus,\n    todoItems = _js_data__WEBPACK_IMPORTED_MODULE_0__[\"default\"].todoItems;\n\nvar createTodoItem = function createTodoItem(label, description, priority) {\n  todoItems.push({\n    label: label,\n    description: description,\n    id: idx,\n    status: 'open',\n    priority: priority\n  });\n  idx += 1;\n};\n\nvar message = document.createElement('div');\nmessage.classList.add('message');\nvar todoList = document.querySelector('.todo-list');\n\nvar renderElements = function renderElements(arr) {\n  todoList.innerHTML = '';\n\n  if (todoItems.length === 0) {\n    message.innerHTML = \"\\n                        <span>It's time to add new todo</span>\\n                        \";\n    todoList.appendChild(message);\n  }\n\n  arr.map(function (_ref) {\n    var id = _ref.id,\n        label = _ref.label,\n        description = _ref.description,\n        priority = _ref.priority,\n        status = _ref.status;\n    var todoItem = document.createElement('div');\n\n    if (status === 'done') {\n      todoItem.classList.add('item-done');\n    }\n\n    todoItem.classList.add('todo-item');\n    todoItem.innerHTML = \"            \\n                <div class=\\\"label\\\">\\n                    <span>\".concat(label, \"</span>\\n                </div>\\n                <div class=\\\"description\\\">\\n                    <span>\").concat(description, \"</span>\\n                </div>\\n                <div class=\\\"info\\\">\\n                    <div class=\\\"priority-info\\\">\\n                        <span>\").concat(priority, \"</span>\\n                    </div>\\n                    <div class=\\\"status-info\\\">\\n                        <button data-done=\\\"\").concat(id, \"\\\" class=\\\"item-done-button\\\">Done</button>\\n                        <button data-edit=\\\"\").concat(id, \"\\\" class=\\\"item-edit-button\\\">Edit</button>\\n                        <button data-delete=\\\"\").concat(id, \"\\\" class=\\\"item-delete-button\\\">Delete</button>\\n                    </div>\\n                </div>\\n                \");\n    todoList.appendChild(todoItem);\n  });\n\n  if (arr.length > 0) {\n    var buttonsDone = _toConsumableArray(document.querySelectorAll('.item-done-button'));\n\n    buttonsDone.map(function (el) {\n      el.addEventListener('click', function () {\n        var index = todoItems.findIndex(function (item) {\n          return item.id === parseInt(el.dataset.done, 10);\n        });\n        todoItems[index].status = 'done';\n        renderElements(filterArrPriority(filterArrStatus(searchedArr(todoItems))));\n      });\n    });\n\n    var buttonsDelete = _toConsumableArray(document.querySelectorAll('.item-delete-button'));\n\n    buttonsDelete.map(function (el) {\n      el.addEventListener('click', function () {\n        var index = todoItems.findIndex(function (item) {\n          return item.id === parseInt(el.dataset[\"delete\"], 10);\n        });\n        todoItems = [].concat(_toConsumableArray(todoItems.slice(0, index)), _toConsumableArray(todoItems.slice(index + 1)));\n        renderElements(filterArrPriority(filterArrStatus(searchedArr(todoItems))));\n      });\n    });\n\n    var buttonsEdit = _toConsumableArray(document.querySelectorAll('.item-edit-button'));\n\n    buttonsEdit.map(function (el) {\n      var index = todoItems.findIndex(function (item) {\n        return item.id === parseInt(el.dataset.edit, 10);\n      });\n      el.addEventListener('click', function () {\n        customLabel = todoItems[index].label;\n        customDescription = todoItems[index].description;\n        customPriority = todoItems[index].priority;\n        popupInputLabel.value = customLabel;\n        popupInputDescription.value = customDescription;\n        popupPrioritySelect.value = customPriority;\n        popup.style.display = 'block';\n        back.style.display = 'block';\n        todoItems = [].concat(_toConsumableArray(todoItems.slice(0, index)), _toConsumableArray(todoItems.slice(index + 1)));\n        renderElements(filterArrPriority(filterArrStatus(searchedArr(todoItems))));\n      });\n    });\n  }\n};\n\nvar searchedArr = function searchedArr(arr) {\n  return arr.filter(function (el) {\n    return el.label.toLowerCase().includes(search.toLowerCase());\n  });\n};\n\nvar filterArrStatus = function filterArrStatus(arr) {\n  if (currentStatus === 'all') return arr;\n\n  if (currentStatus === 'open') {\n    return arr.filter(function (el) {\n      return el.status === 'open';\n    });\n  }\n\n  if (currentStatus === 'done') {\n    return arr.filter(function (el) {\n      return el.status === 'done';\n    });\n  }\n};\n\nvar filterArrPriority = function filterArrPriority(arr) {\n  if (currentPriority === 'all') return arr;\n\n  if (currentPriority === 'high') {\n    return arr.filter(function (el) {\n      return el.priority === 'high';\n    });\n  }\n\n  if (currentPriority === 'normal') {\n    return arr.filter(function (el) {\n      return el.priority === 'normal';\n    });\n  }\n\n  if (currentPriority === 'low') {\n    return arr.filter(function (el) {\n      return el.priority === 'low';\n    });\n  }\n}; //\n// TODO MODAL\n//\n\n\nvar createButton = document.querySelector('.create-button');\nvar cancelButton = document.querySelector('.cancel-button');\nvar saveButton = document.querySelector('.save-button');\nvar popup = document.querySelector('.popup');\nvar back = document.querySelector('.back');\nvar popupInputLabel = document.querySelector('.popup-input-label');\nvar popupInputDescription = document.querySelector('.popup-input-description');\nvar popupPrioritySelect = document.querySelector('.popup-priority-select');\n\nvar closePopup = function closePopup() {\n  popup.style.display = 'none';\n  back.style.display = 'none';\n  customLabel = '';\n  customDescription = '';\n  customPriority = 'normal';\n};\n\ncreateButton.addEventListener('click', function () {\n  popupInputLabel.value = customLabel;\n  popupInputDescription.value = customDescription;\n  popupPrioritySelect.value = customPriority;\n  popup.style.display = 'block';\n  back.style.display = 'block';\n});\ncancelButton.addEventListener('click', closePopup);\nback.addEventListener('click', closePopup);\nsaveButton.addEventListener('click', function () {\n  if (!customLabel || !customDescription) return;\n  createTodoItem(customLabel, customDescription, customPriority);\n  renderElements(filterArrPriority(filterArrStatus(searchedArr(todoItems))));\n  var _ref2 = ['', ''];\n  customLabel = _ref2[0];\n  customDescription = _ref2[1];\n  customPriority = _ref2[2];\n  closePopup();\n});\npopupInputLabel.addEventListener('input', function () {\n  customLabel = popupInputLabel.value;\n});\npopupInputDescription.addEventListener('input', function () {\n  customDescription = popupInputDescription.value;\n});\npopupPrioritySelect.addEventListener('change', function () {\n  customPriority = popupPrioritySelect.value;\n}, false); //\n// TODO MODAL\n//\n// SEARCH\n\nvar visibleItems = null;\nvar searchInput = document.querySelector('.search-input');\nsearchInput.addEventListener('input', function () {\n  search = searchInput.value;\n  visibleItems = filterArrPriority(filterArrStatus(searchedArr(todoItems)));\n  renderElements(visibleItems);\n\n  if (visibleItems.length === 0) {\n    message.innerHTML = \"\\n                        <span>No todos with this label</span>\\n                        \";\n    todoList.appendChild(message);\n  }\n});\nvar statusSelect = document.querySelector('.todo-select-status');\nstatusSelect.addEventListener('change', function () {\n  currentStatus = statusSelect.value;\n  visibleItems = filterArrPriority(filterArrStatus(searchedArr(todoItems)));\n  renderElements(visibleItems);\n\n  if (visibleItems.length === 0) {\n    message.innerHTML = \"\\n                            <span>No todos with this status</span>\\n                            \";\n    todoList.appendChild(message);\n  }\n}, false);\nvar prioritySelect = document.querySelector('.todo-select-priority');\nprioritySelect.addEventListener('change', function () {\n  currentPriority = prioritySelect.value;\n  visibleItems = filterArrPriority(filterArrStatus(searchedArr(todoItems)));\n  renderElements(visibleItems);\n\n  if (visibleItems.length === 0) {\n    message.innerHTML = \"\\n                            <span>No todos with this priority</span>\\n                            \";\n    todoList.appendChild(message);\n  }\n}, false);\nrenderElements(todoItems);\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/js/data.js":
/*!************************!*\
  !*** ./src/js/data.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar state = {\n  todoItems: [],\n  idx: 0,\n  customLabel: '',\n  customDescription: '',\n  customPriority: 'normal',\n  search: '',\n  currentPriority: 'all',\n  currentStatus: 'all'\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (state);\n\n//# sourceURL=webpack:///./src/js/data.js?");

/***/ }),

/***/ "./src/style/main.scss":
/*!*****************************!*\
  !*** ./src/style/main.scss ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js??ref--5-2!./main.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js?!./src/style/main.scss\");\n\nif (typeof content === 'string') {\n  content = [[module.i, content, '']];\n}\n\nvar options = {}\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\")(content, options);\n\nif (content.locals) {\n  module.exports = content.locals;\n}\n\n\n//# sourceURL=webpack:///./src/style/main.scss?");

/***/ }),

/***/ "./src/style/message.scss":
/*!********************************!*\
  !*** ./src/style/message.scss ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js??ref--5-2!./message.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js?!./src/style/message.scss\");\n\nif (typeof content === 'string') {\n  content = [[module.i, content, '']];\n}\n\nvar options = {}\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\")(content, options);\n\nif (content.locals) {\n  module.exports = content.locals;\n}\n\n\n//# sourceURL=webpack:///./src/style/message.scss?");

/***/ }),

/***/ "./src/style/modal.scss":
/*!******************************!*\
  !*** ./src/style/modal.scss ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js??ref--5-2!./modal.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js?!./src/style/modal.scss\");\n\nif (typeof content === 'string') {\n  content = [[module.i, content, '']];\n}\n\nvar options = {}\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\")(content, options);\n\nif (content.locals) {\n  module.exports = content.locals;\n}\n\n\n//# sourceURL=webpack:///./src/style/modal.scss?");

/***/ }),

/***/ "./src/style/todo-item.scss":
/*!**********************************!*\
  !*** ./src/style/todo-item.scss ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js??ref--5-2!./todo-item.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js?!./src/style/todo-item.scss\");\n\nif (typeof content === 'string') {\n  content = [[module.i, content, '']];\n}\n\nvar options = {}\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\")(content, options);\n\nif (content.locals) {\n  module.exports = content.locals;\n}\n\n\n//# sourceURL=webpack:///./src/style/todo-item.scss?");

/***/ }),

/***/ "./src/style/todo-list.scss":
/*!**********************************!*\
  !*** ./src/style/todo-list.scss ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js??ref--5-2!./todo-list.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js?!./src/style/todo-list.scss\");\n\nif (typeof content === 'string') {\n  content = [[module.i, content, '']];\n}\n\nvar options = {}\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\")(content, options);\n\nif (content.locals) {\n  module.exports = content.locals;\n}\n\n\n//# sourceURL=webpack:///./src/style/todo-list.scss?");

/***/ })

/******/ });