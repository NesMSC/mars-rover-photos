/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/css/main.css":
/*!**************************!*\
  !*** ./src/css/main.css ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://nasa-rovers-photos-app/./src/css/main.css?");

/***/ }),

/***/ "./src/css/spinner.css":
/*!*****************************!*\
  !*** ./src/css/spinner.css ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://nasa-rovers-photos-app/./src/css/spinner.css?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _templates_rovers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./templates/rovers.js */ \"./src/templates/rovers.js\");\n/* harmony import */ var _templates_Gallery_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./templates/Gallery.js */ \"./src/templates/Gallery.js\");\n/* harmony import */ var _css_main_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./css/main.css */ \"./src/css/main.css\");\n/* harmony import */ var _templates_Navbar_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./templates/Navbar.js */ \"./src/templates/Navbar.js\");\n/* harmony import */ var _templates_Spinner_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./templates/Spinner.js */ \"./src/templates/Spinner.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n(async function App(){\r\n    const nav =  false || document.getElementById('nav');\r\n    nav.innerHTML = _templates_Navbar_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"];\r\n\r\n    const roversMain =  false || document.getElementById('rovers');\r\n\r\n\r\n    const showRovers = async () => {\r\n        roversMain.innerHTML = (0,_templates_Spinner_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(true);\r\n        const rovers = await _templates_rovers_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\r\n        roversMain.innerHTML = (0,_templates_Spinner_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(false);\r\n        for (const rover of rovers) {\r\n            roversMain.innerHTML += rover;\r\n        }\r\n\r\n        const cards = [...document.getElementsByClassName('card')];\r\n        cards.forEach(element => {\r\n            element.addEventListener('click', (e) => {\r\n                e.preventDefault();\r\n                showGallery({rover: element.id});\r\n            });\r\n        });\r\n    }\r\n\r\n    showRovers();\r\n\r\n    const btn_rovers =  false || document.getElementById('btn-rovers');\r\n    btn_rovers.addEventListener('click', showRovers);\r\n\r\n    const showGallery = async (options) => {\r\n        roversMain.innerHTML = (0,_templates_Spinner_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(true);\r\n        const photos = await (0,_templates_Gallery_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(options);\r\n        roversMain.innerHTML = (0,_templates_Spinner_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(false);\r\n        for (const photo of photos) {\r\n            roversMain.innerHTML += photo;\r\n        }\r\n        \r\n        document.getElementById('rover')\r\n            .value = options.rover;\r\n    }\r\n\r\n    const btn =  false || document.getElementById('btn');\r\n    btn.addEventListener('click', (e) => {\r\n        e.preventDefault()\r\n        showGallery({rover: 'Curiosity'});\r\n    });\r\n \r\n    document.querySelector('form')\r\n        .addEventListener('submit', async e => {\r\n            e.preventDefault();\r\n            // Capturamos la data en un objeto\r\n            const data = Object.fromEntries(\r\n               new FormData(e.target)\r\n            )\r\n            \r\n            showGallery(data);\r\n        })\r\n\r\n})()\n\n//# sourceURL=webpack://nasa-rovers-photos-app/./src/index.js?");

/***/ }),

/***/ "./src/templates/Gallery.js":
/*!**********************************!*\
  !*** ./src/templates/Gallery.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _utils_fetchData_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/fetchData.js */ \"./src/utils/fetchData.js\");\n\r\n\r\nconst getPhotos = async ({\r\n    sol = 1,\r\n    earth_date = null,\r\n    rover = 'curiosity',\r\n    camera = null,\r\n    page = 1\r\n}) => {\r\n\r\n    let url = `https://api.nasa.gov/mars-photos/api/v1/rovers/${rover}/photos?`;\r\n\r\n    url += (earth_date)? `earth_date=${earth_date}` : `sol=${sol}`;\r\n    url += `&page=${page}`;\r\n    url += (camera)? `&camera=${camera}` : '';\r\n    url += `&api_key=jyVxWVo7kU1r7zSJJ5TEpXH24mKmK6uAV0pdGxSa`\r\n    \r\n    const data = await (0,_utils_fetchData_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(url);\r\n\r\n    const arrayGallery = [];\r\n\r\n    data.photos.forEach(element => {\r\n        const template = `\r\n            <div class=\"gallery\">\r\n                <div class=\"gallery-item\">\r\n                    <div class=\"gallery-info\">\r\n                        <ul>\r\n                            <li><strong>Camera: </strong>${element.camera.full_name} (${element.camera.name})</li>\r\n                            <li><strong>Earth date: </strong>${element.earth_date}</li>\r\n                            <li><strong>Sol: </strong>${element.sol}</li>\r\n                        </ul>\r\n                    </div>\r\n                    <figure>\r\n                        <img src=\"${element.img_src}\" loading=\"lazy\" alt=\"Rover Photo\">\r\n                    </figure>\r\n                </div>\r\n            </div>\r\n        ` \r\n        \r\n        arrayGallery.push(template);\r\n    });\r\n\r\n    return arrayGallery;\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getPhotos);\n\n//# sourceURL=webpack://nasa-rovers-photos-app/./src/templates/Gallery.js?");

/***/ }),

/***/ "./src/templates/Navbar.js":
/*!*********************************!*\
  !*** ./src/templates/Navbar.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _assets_icons_nasaLogo_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/icons/nasaLogo.png */ \"./src/assets/icons/nasaLogo.png\");\n\r\n\r\nconst Navbar = () => {\r\n    const template = `\r\n        <nav>\r\n            <a href=\"#\">\r\n                <img src=\"${_assets_icons_nasaLogo_png__WEBPACK_IMPORTED_MODULE_0__}\" alt=\"NASA ICON LOGO\">\r\n            </a>\r\n            <ul>\r\n                <li><a class=\"nav-btn_rovers\" href=\"#\" id=\"btn-rovers\">Rovers</a></li>\r\n                <li><a class=\"nav-btn\" href=\"#\" id=\"btn\">Gallery</a></li>\r\n            </ul>\r\n        </nav>\r\n    \r\n    `\r\n    return template;\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Navbar());\r\n\n\n//# sourceURL=webpack://nasa-rovers-photos-app/./src/templates/Navbar.js?");

/***/ }),

/***/ "./src/templates/Spinner.js":
/*!**********************************!*\
  !*** ./src/templates/Spinner.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _css_spinner_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/spinner.css */ \"./src/css/spinner.css\");\n\r\n/**\r\n*\r\n*\r\n*@param boolean show show loading spinner\r\n*@return spinner component or null\r\n**/\r\n\r\nconst Spinner = (show) => {\r\n\r\n    const template = `\r\n        <div class=\"lds-ring\">\r\n            <div></div>\r\n            <div></div>\r\n            <div></div>\r\n            <div></div>\r\n        </div>\r\n    `\r\n    return (show)? template : null;\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Spinner);\n\n//# sourceURL=webpack://nasa-rovers-photos-app/./src/templates/Spinner.js?");

/***/ }),

/***/ "./src/templates/rovers.js":
/*!*********************************!*\
  !*** ./src/templates/rovers.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _utils_fetchData_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/fetchData.js */ \"./src/utils/fetchData.js\");\n/* harmony import */ var _assets_img_Curiosity_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/img/Curiosity.jpg */ \"./src/assets/img/Curiosity.jpg\");\n/* harmony import */ var _assets_img_Opportunity_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/img/Opportunity.jpg */ \"./src/assets/img/Opportunity.jpg\");\n/* harmony import */ var _assets_img_Perseverance_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/img/Perseverance.jpg */ \"./src/assets/img/Perseverance.jpg\");\n/* harmony import */ var _assets_img_Spirit_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/img/Spirit.jpg */ \"./src/assets/img/Spirit.jpg\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nconst getRovers = async () => {\r\n    const url = 'https://api.nasa.gov/mars-photos/api/v1/rovers?api_key=jyVxWVo7kU1r7zSJJ5TEpXH24mKmK6uAV0pdGxSa';\r\n    const rovers = await (0,_utils_fetchData_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(url);\r\n    const img = {\r\n        Curiosity: _assets_img_Curiosity_jpg__WEBPACK_IMPORTED_MODULE_1__,\r\n        Opportunity: _assets_img_Opportunity_jpg__WEBPACK_IMPORTED_MODULE_2__,\r\n        Perseverance: _assets_img_Perseverance_jpg__WEBPACK_IMPORTED_MODULE_3__,\r\n        Spirit: _assets_img_Spirit_jpg__WEBPACK_IMPORTED_MODULE_4__\r\n    }\r\n    const cards = [];\r\n    rovers.rovers.forEach(element => {\r\n        const template = `\r\n            <div id=\"${element.name.toLowerCase()}\" class=\"card\">\r\n                <div class=\"card-header\">\r\n                    <picture>\r\n                        <img src=\"${img[element.name]}\" alt=\"Rover\">\r\n                    </picture>\r\n                    <div class=\"card-name\">\r\n                        <span>${element.name}</span>\r\n                    </div>\r\n                </div>\r\n                <div class=\"card-body\">\r\n                    <ul>\r\n                        <li class=\"${(element.status == 'active')? 'active' : 'inactive'}\">${element.status}</li>\r\n                        <li class=\"info\">Landing: </li>\r\n                        <li>${element.landing_date}</li>\r\n                        <li class=\"info\">Launch: </li>\r\n                        <li>${element.launch_date}</li>\r\n                        <li class=\"info\">Photos: </li>\r\n                        <li>${new Intl.NumberFormat('En-us').format(element.total_photos)}</li>\r\n                    </ul>\r\n                </div>\r\n            </div>\r\n        `\r\n        cards.push(template);\r\n    });\r\n\r\n    return cards;\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getRovers());\r\n\r\n\n\n//# sourceURL=webpack://nasa-rovers-photos-app/./src/templates/rovers.js?");

/***/ }),

/***/ "./src/utils/fetchData.js":
/*!********************************!*\
  !*** ./src/utils/fetchData.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n//let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;\r\n/*\r\n* Get data from api\r\n* \r\n* @param string urlApi Api url\r\n*/\r\nconst fetchData = (urlApi) => {\r\n    return new Promise((resolve, reject) => {\r\n        const xhttp = new XMLHttpRequest();\r\n        xhttp.open('GET', urlApi, true);\r\n        xhttp.onreadystatechange = () => {\r\n            if(xhttp.readyState === 4){\r\n                (xhttp.status === 200)\r\n                    ? resolve(JSON.parse(xhttp.responseText))\r\n                    : reject(new Error('error: ' + urlApi));\r\n            }\r\n        }\r\n    \r\n        xhttp.send();\r\n    })\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (fetchData);\n\n//# sourceURL=webpack://nasa-rovers-photos-app/./src/utils/fetchData.js?");

/***/ }),

/***/ "./src/assets/icons/nasaLogo.png":
/*!***************************************!*\
  !*** ./src/assets/icons/nasaLogo.png ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/images/4c2faf0c3b95b1f3a5b5.png\";\n\n//# sourceURL=webpack://nasa-rovers-photos-app/./src/assets/icons/nasaLogo.png?");

/***/ }),

/***/ "./src/assets/img/Curiosity.jpg":
/*!**************************************!*\
  !*** ./src/assets/img/Curiosity.jpg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/images/ad53d5986db68d428d76.jpg\";\n\n//# sourceURL=webpack://nasa-rovers-photos-app/./src/assets/img/Curiosity.jpg?");

/***/ }),

/***/ "./src/assets/img/Opportunity.jpg":
/*!****************************************!*\
  !*** ./src/assets/img/Opportunity.jpg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/images/ee5c6517f3c9bbec225b.jpg\";\n\n//# sourceURL=webpack://nasa-rovers-photos-app/./src/assets/img/Opportunity.jpg?");

/***/ }),

/***/ "./src/assets/img/Perseverance.jpg":
/*!*****************************************!*\
  !*** ./src/assets/img/Perseverance.jpg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/images/3882cebf569b4f7025c1.jpg\";\n\n//# sourceURL=webpack://nasa-rovers-photos-app/./src/assets/img/Perseverance.jpg?");

/***/ }),

/***/ "./src/assets/img/Spirit.jpg":
/*!***********************************!*\
  !*** ./src/assets/img/Spirit.jpg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/images/1b51fb1222c65eb559bf.jpg\";\n\n//# sourceURL=webpack://nasa-rovers-photos-app/./src/assets/img/Spirit.jpg?");

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
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
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