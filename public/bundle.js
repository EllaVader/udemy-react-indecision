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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__person_js__ = __webpack_require__(2);
//import './utils.js';




console.log('app.js is running');
console.log(Object(__WEBPACK_IMPORTED_MODULE_0__utils_js__["c" /* square */])(4));
console.log(Object(__WEBPACK_IMPORTED_MODULE_0__utils_js__["a" /* add */])(100, 23));
console.log(Object(__WEBPACK_IMPORTED_MODULE_0__utils_js__["b" /* default */])(100, 25));

console.log(Object(__WEBPACK_IMPORTED_MODULE_1__person_js__["c" /* isAdult */])(5));
console.log(Object(__WEBPACK_IMPORTED_MODULE_1__person_js__["a" /* canDrink */])(21));
console.log(Object(__WEBPACK_IMPORTED_MODULE_1__person_js__["b" /* default */])(65));

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return square; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return add; });
console.log('utils.js is running');

// named export - can export this way too
//export const square = (x) => x * x;
//export const add = (a, b) => a + b;

// export - Two types: 1. default export 2. named exports
// default exports there must only be 1
// named exports - the name of the method to export, must match what is defined in import
//export { square, add, subtract as default };


const subtract = (a,b) => a - b;
const square = (x) => x * x;
const add = (a, b) => a + b;

//or do export default like this:
//export default subtract;

// or do the export like this:
/* harmony default export */ __webpack_exports__["b"] = ((a, b) => a - b);


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return isAdult; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return canDrink; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return isSenior; });
const isAdult = (x) => x >= 18;
const canDrink = (x) => x >= 21;

const isSenior = (x) => x >= 65;



/***/ })
/******/ ]);