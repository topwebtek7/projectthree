/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
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
/******/ 	return __webpack_require__(__webpack_require__.s = 10);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

LoginController.$inject = [];

function LoginController() {
  const vm = this;
}

module.exports = LoginController;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/Aylin/GA/project-3/client/components/show/show.controller.js'");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

throw new Error("Module build failed: SyntaxError: Unexpected token (6:2)\n\n\u001b[0m \u001b[90m 4 | \u001b[39mangular\n \u001b[90m 5 | \u001b[39m  \u001b[33m.\u001b[39mmodule(\u001b[32m'gradeBook'\u001b[39m\u001b[33m,\u001b[39m [])\u001b[33m;\u001b[39m\n\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 6 | \u001b[39m  \u001b[33m.\u001b[39mconfig(uiRouterSetup)\u001b[33m;\u001b[39m\n \u001b[90m   | \u001b[39m  \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\n \u001b[90m 7 | \u001b[39m\n \u001b[90m 8 | \u001b[39muiRouterSetup\u001b[33m.\u001b[39m$inject \u001b[33m=\u001b[39m [\u001b[32m'$stateProvider'\u001b[39m\u001b[33m,\u001b[39m \u001b[32m'$urlRouterProvider'\u001b[39m]\u001b[33m;\u001b[39m\n \u001b[90m 9 | \u001b[39m\u001b[36mfunction\u001b[39m uiRouterSetup($stateProvider\u001b[33m,\u001b[39m $urlRouterProvider) {\u001b[0m\n");

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

const controller = __webpack_require__(0);
const template = __webpack_require__(6);

const component = {
  controller: controller,
  template: template
};

angular.module('gradeBook').component('login', LoginComponent);

/***/ }),
/* 4 */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/Aylin/GA/project-3/client/components/show/show.component.js'");

/***/ }),
/* 5 */,
/* 6 */
/***/ (function(module, exports) {

module.exports = "<div class=\"login-section\">\n  <h1>Login</h1>\n\n</div>\n";

/***/ }),
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(2);
__webpack_require__(3);
__webpack_require__(0);
__webpack_require__(4);
module.exports = __webpack_require__(1);


/***/ })
/******/ ]);