/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
:root {
  --bodyBg: white;
  --bodyColor: black;
  --headerBg: blanchedalmond;
  --headerColor: white;

  --submitbtnBg: rgb(6, 164, 6);
  --submitBtnColor: white;

  --inputFieldBG: rgb(212, 212, 212);
  --inputFieldBorder: rgb(41, 41, 41);
  --inputFieldColor: rgb(41, 41, 41);
  --inputFieldPlaceholder: rgb(0, 0, 0);

  --weatherDivColor: rgb(247, 226, 226);
  --weatherDivBg: rgb(157, 49, 49);

  font-size: 16px;
}
body {
  width: 100vw;
  height: 100vh;
  background-color: blanchedalmond;
}

/*header*/
header {
  display: flex;
  gap: 1rem;
  background: var(--headerBg);
  color: var(--headerColor);
  width: 100%;
  align-items: center;
  justify-content: space-between;
  padding: 0.4rem 1rem;
  flex-wrap: wrap;
  position: absolute;
  top: 0;
}
header > .logoDiv {
  width: 50px;
}
header > .searchForm {
  display: flex;
  gap: 1rem;
  margin-right: 15px;
}
header > .searchForm > .searchInputField {
  padding: 0.4rem 0.4rem;
  font-size: 1rem;
  min-width: 80px;
  width: 100%;
  border-radius: 5px;
  border: 1px solid var(--inputFieldBorder);
  background-color: var(--inputFieldBG);
  color: var(--inputFieldColor);
}
.searchInputField::placeholder {
  color: var(--inputFieldPlaceholder);
}
.searchInputField:focus {
  outline: 2px solid rgb(19, 94, 199);
}
.submitBtn {
  padding: 0.4rem 0.4rem;
  font-size: 1rem;
  font-weight: 900;
  border-radius: 10px;
  border: none;
  outline: none;
  cursor: pointer;
  background-color: var(--submitbtnBg);
  color: var(--submitBtnColor);
  transition: all 0.3s;
}
.submitBtn:hover {
  outline: 1px solid white;
}
.submitBtn:active {
  outline: none;
  transform: scale(0.8);
}

.contentDiv {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.contentDiv > .weatherDiv {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--weatherDivBg);
  color: var(--weatherDivColor);
  padding: 1rem;
  border-radius: 10px;
  max-width: 50%;
  min-width: fit-content;
  width: 100%;
}
.contentDiv > .weatherDiv > .locationHeading {
  font-size: 2rem;
  margin-bottom: 0.7rem;
  font-weight: 900;
  text-align: left;
  width: 100%;
  border-bottom: 1px solid var(--weatherDivColor);
}
.contentDiv > .weatherDiv > .weatherConditionText {
  font-size: 1.4rem;
  font-weight: 700;
  margin-bottom: 20px;
  width: 100%;
  text-align: center;
}

.contentDiv > .weatherDiv > .weatherContent {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  gap: 1rem;
  width: 100%;
}
.contentDiv > .weatherDiv > .weatherContent > .temperature {
  font-size: 4rem;
  font-weight: 900;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  width: 100%;
  border-right: 2px solid var(--weatherDivColor);
  text-align: center;
  padding-right: 10px;
}
.contentDiv > .weatherDiv > .weatherContent > .moreWeatherDetailsDiv {
  display: grid;
  gap: 1rem;
  width: 100%;
  text-align: center;
}
.contentDiv
  > .weatherDiv
  > .weatherContent
  > .moreWeatherDetailsDiv
  > .moreWeatherDetails {
  font-size: 1.1rem;
  font-weight: 600;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
}
.weatherImg {
  margin-top: 20px;
  width: 100px;
}

.toggleUnitBtn {
  padding: 0.4rem;
  font-size: 2rem;
  margin-top: 20px;
  border-radius: 10px;
  width: 10rem;
  background-color: darkolivegreen;
  color: white;
  outline: 2px solid white;
  border: none;
  cursor: pointer;
  transition: all 0.3s;
}
.toggleUnitBtn:active {
  transform: scale(0.8);
}
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,SAAS;EACT,UAAU;EACV,sBAAsB;AACxB;AACA;EACE,eAAe;EACf,kBAAkB;EAClB,0BAA0B;EAC1B,oBAAoB;;EAEpB,6BAA6B;EAC7B,uBAAuB;;EAEvB,kCAAkC;EAClC,mCAAmC;EACnC,kCAAkC;EAClC,qCAAqC;;EAErC,qCAAqC;EACrC,gCAAgC;;EAEhC,eAAe;AACjB;AACA;EACE,YAAY;EACZ,aAAa;EACb,gCAAgC;AAClC;;AAEA,SAAS;AACT;EACE,aAAa;EACb,SAAS;EACT,2BAA2B;EAC3B,yBAAyB;EACzB,WAAW;EACX,mBAAmB;EACnB,8BAA8B;EAC9B,oBAAoB;EACpB,eAAe;EACf,kBAAkB;EAClB,MAAM;AACR;AACA;EACE,WAAW;AACb;AACA;EACE,aAAa;EACb,SAAS;EACT,kBAAkB;AACpB;AACA;EACE,sBAAsB;EACtB,eAAe;EACf,eAAe;EACf,WAAW;EACX,kBAAkB;EAClB,yCAAyC;EACzC,qCAAqC;EACrC,6BAA6B;AAC/B;AACA;EACE,mCAAmC;AACrC;AACA;EACE,mCAAmC;AACrC;AACA;EACE,sBAAsB;EACtB,eAAe;EACf,gBAAgB;EAChB,mBAAmB;EACnB,YAAY;EACZ,aAAa;EACb,eAAe;EACf,oCAAoC;EACpC,4BAA4B;EAC5B,oBAAoB;AACtB;AACA;EACE,wBAAwB;AAC1B;AACA;EACE,aAAa;EACb,qBAAqB;AACvB;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,aAAa;EACb,mBAAmB;EACnB,uBAAuB;AACzB;AACA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,qCAAqC;EACrC,6BAA6B;EAC7B,aAAa;EACb,mBAAmB;EACnB,cAAc;EACd,sBAAsB;EACtB,WAAW;AACb;AACA;EACE,eAAe;EACf,qBAAqB;EACrB,gBAAgB;EAChB,gBAAgB;EAChB,WAAW;EACX,+CAA+C;AACjD;AACA;EACE,iBAAiB;EACjB,gBAAgB;EAChB,mBAAmB;EACnB,WAAW;EACX,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,6BAA6B;EAC7B,SAAS;EACT,WAAW;AACb;AACA;EACE,eAAe;EACf,gBAAgB;EAChB,wEAAwE;EACxE,WAAW;EACX,8CAA8C;EAC9C,kBAAkB;EAClB,mBAAmB;AACrB;AACA;EACE,aAAa;EACb,SAAS;EACT,WAAW;EACX,kBAAkB;AACpB;AACA;;;;;EAKE,iBAAiB;EACjB,gBAAgB;EAChB,wEAAwE;AAC1E;AACA;EACE,gBAAgB;EAChB,YAAY;AACd;;AAEA;EACE,eAAe;EACf,eAAe;EACf,gBAAgB;EAChB,mBAAmB;EACnB,YAAY;EACZ,gCAAgC;EAChC,YAAY;EACZ,wBAAwB;EACxB,YAAY;EACZ,eAAe;EACf,oBAAoB;AACtB;AACA;EACE,qBAAqB;AACvB","sourcesContent":["* {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n}\r\n:root {\r\n  --bodyBg: white;\r\n  --bodyColor: black;\r\n  --headerBg: blanchedalmond;\r\n  --headerColor: white;\r\n\r\n  --submitbtnBg: rgb(6, 164, 6);\r\n  --submitBtnColor: white;\r\n\r\n  --inputFieldBG: rgb(212, 212, 212);\r\n  --inputFieldBorder: rgb(41, 41, 41);\r\n  --inputFieldColor: rgb(41, 41, 41);\r\n  --inputFieldPlaceholder: rgb(0, 0, 0);\r\n\r\n  --weatherDivColor: rgb(247, 226, 226);\r\n  --weatherDivBg: rgb(157, 49, 49);\r\n\r\n  font-size: 16px;\r\n}\r\nbody {\r\n  width: 100vw;\r\n  height: 100vh;\r\n  background-color: blanchedalmond;\r\n}\r\n\r\n/*header*/\r\nheader {\r\n  display: flex;\r\n  gap: 1rem;\r\n  background: var(--headerBg);\r\n  color: var(--headerColor);\r\n  width: 100%;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  padding: 0.4rem 1rem;\r\n  flex-wrap: wrap;\r\n  position: absolute;\r\n  top: 0;\r\n}\r\nheader > .logoDiv {\r\n  width: 50px;\r\n}\r\nheader > .searchForm {\r\n  display: flex;\r\n  gap: 1rem;\r\n  margin-right: 15px;\r\n}\r\nheader > .searchForm > .searchInputField {\r\n  padding: 0.4rem 0.4rem;\r\n  font-size: 1rem;\r\n  min-width: 80px;\r\n  width: 100%;\r\n  border-radius: 5px;\r\n  border: 1px solid var(--inputFieldBorder);\r\n  background-color: var(--inputFieldBG);\r\n  color: var(--inputFieldColor);\r\n}\r\n.searchInputField::placeholder {\r\n  color: var(--inputFieldPlaceholder);\r\n}\r\n.searchInputField:focus {\r\n  outline: 2px solid rgb(19, 94, 199);\r\n}\r\n.submitBtn {\r\n  padding: 0.4rem 0.4rem;\r\n  font-size: 1rem;\r\n  font-weight: 900;\r\n  border-radius: 10px;\r\n  border: none;\r\n  outline: none;\r\n  cursor: pointer;\r\n  background-color: var(--submitbtnBg);\r\n  color: var(--submitBtnColor);\r\n  transition: all 0.3s;\r\n}\r\n.submitBtn:hover {\r\n  outline: 1px solid white;\r\n}\r\n.submitBtn:active {\r\n  outline: none;\r\n  transform: scale(0.8);\r\n}\r\n\r\n.contentDiv {\r\n  width: 100%;\r\n  height: 100%;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n.contentDiv > .weatherDiv {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  background-color: var(--weatherDivBg);\r\n  color: var(--weatherDivColor);\r\n  padding: 1rem;\r\n  border-radius: 10px;\r\n  max-width: 50%;\r\n  min-width: fit-content;\r\n  width: 100%;\r\n}\r\n.contentDiv > .weatherDiv > .locationHeading {\r\n  font-size: 2rem;\r\n  margin-bottom: 0.7rem;\r\n  font-weight: 900;\r\n  text-align: left;\r\n  width: 100%;\r\n  border-bottom: 1px solid var(--weatherDivColor);\r\n}\r\n.contentDiv > .weatherDiv > .weatherConditionText {\r\n  font-size: 1.4rem;\r\n  font-weight: 700;\r\n  margin-bottom: 20px;\r\n  width: 100%;\r\n  text-align: center;\r\n}\r\n\r\n.contentDiv > .weatherDiv > .weatherContent {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-evenly;\r\n  gap: 1rem;\r\n  width: 100%;\r\n}\r\n.contentDiv > .weatherDiv > .weatherContent > .temperature {\r\n  font-size: 4rem;\r\n  font-weight: 900;\r\n  font-family: \"Franklin Gothic Medium\", \"Arial Narrow\", Arial, sans-serif;\r\n  width: 100%;\r\n  border-right: 2px solid var(--weatherDivColor);\r\n  text-align: center;\r\n  padding-right: 10px;\r\n}\r\n.contentDiv > .weatherDiv > .weatherContent > .moreWeatherDetailsDiv {\r\n  display: grid;\r\n  gap: 1rem;\r\n  width: 100%;\r\n  text-align: center;\r\n}\r\n.contentDiv\r\n  > .weatherDiv\r\n  > .weatherContent\r\n  > .moreWeatherDetailsDiv\r\n  > .moreWeatherDetails {\r\n  font-size: 1.1rem;\r\n  font-weight: 600;\r\n  font-family: \"Franklin Gothic Medium\", \"Arial Narrow\", Arial, sans-serif;\r\n}\r\n.weatherImg {\r\n  margin-top: 20px;\r\n  width: 100px;\r\n}\r\n\r\n.toggleUnitBtn {\r\n  padding: 0.4rem;\r\n  font-size: 2rem;\r\n  margin-top: 20px;\r\n  border-radius: 10px;\r\n  width: 10rem;\r\n  background-color: darkolivegreen;\r\n  color: white;\r\n  outline: 2px solid white;\r\n  border: none;\r\n  cursor: pointer;\r\n  transition: all 0.3s;\r\n}\r\n.toggleUnitBtn:active {\r\n  transform: scale(0.8);\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/homepage.js":
/*!*************************!*\
  !*** ./src/homepage.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createHomePage: () => (/* binding */ createHomePage),
/* harmony export */   getWeather: () => (/* binding */ getWeather),
/* harmony export */   populateSuggestionList: () => (/* binding */ populateSuggestionList),
/* harmony export */   toggleTemperatureUnits: () => (/* binding */ toggleTemperatureUnits)
/* harmony export */ });
/* harmony import */ var _Icons_logo_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Icons/logo.svg */ "./src/Icons/logo.svg");
/* harmony import */ var _updateWeather__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./updateWeather */ "./src/updateWeather.js");





function createHomePage() {
  const contentDiv = document.createElement("div");
  contentDiv.setAttribute("id", "contentDiv");
  contentDiv.classList.add("contentDiv");

  const body = document.querySelector("body");
  body.appendChild(createHeader());
  body.appendChild(contentDiv);
}

function createHeader() {
  const header = document.createElement("header");
  header.classList.add("header");
  header.setAttribute("id", "header");

  const logoDiv = document.createElement("logo");
  logoDiv.classList.add("logoDiv");
  logoDiv.setAttribute("id", "logoDiv");
  const logo = new Image();
  logo.src = _Icons_logo_svg__WEBPACK_IMPORTED_MODULE_0__;
  logoDiv.appendChild(logo);

  header.appendChild(logoDiv);
  header.appendChild(createSearchForm());

  return header;
}

function createSearchForm() {
  const form = document.createElement("form");
  form.classList.add("searchForm");
  form.setAttribute("id", "searchForm");

  const inputField = document.createElement("input");
  inputField.setAttribute("type", "text");
  inputField.setAttribute("id", "inputField");
  inputField.setAttribute("placeholder", "Search for a city.");
  inputField.setAttribute("list", "suggestionList");
  inputField.setAttribute("required", "");
  inputField.classList.add("searchInputField");

  const suggestionList = document.createElement("datalist");
  suggestionList.setAttribute("id", "suggestionList");
  suggestionList.classList.add("suggestionList");

  const submitBtn = document.createElement("button");
  submitBtn.setAttribute("type", "submit");
  submitBtn.setAttribute("id", "submitBtn");
  submitBtn.classList.add("submitBtn");
  submitBtn.textContent = "Search";

  form.appendChild(inputField);
  form.appendChild(submitBtn);
  form.appendChild(suggestionList);
  return form;
}

function populateSuggestionList() {
  const inputField = document.getElementById("inputField");
  const suggestionList = document.getElementById("suggestionList");
  inputField.addEventListener("input", () => {
    const locations = new Promise((resolve, reject) => {
      resolve((0,_updateWeather__WEBPACK_IMPORTED_MODULE_1__.getLocation)(inputField.value));
    });
    locations
      .then((locations) => {
        locations.forEach((location) => {
          const option = document.createElement("option");
          option.value = `${location.name}, ${location.country}, ${location.region}`;
          suggestionList.appendChild(option);
        });
      })
      .catch((error) => {
        console.error("'locations' array is empty. ", error);
      });
  });
}

function getWeather() {
  const form = document.getElementById("searchForm");
  const inputField = document.getElementById("inputField");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const weatherDetails = new Promise((resolve, reject) => {
      resolve((0,_updateWeather__WEBPACK_IMPORTED_MODULE_1__.getCurrentWeather)(inputField.value));
    });
    weatherDetails.then((weatherDetails) => {
      const contentDiv = document.getElementById("contentDiv");
      contentDiv.innerHTML = "";
      displayWeather(weatherDetails);
    });
  });
}

function displayWeather(weatherDetails) {
  const contentDiv = document.getElementById("contentDiv");

  const toggleUnitBtn = document.createElement("button");
  toggleUnitBtn.classList.add("toggleUnitBtn");
  toggleUnitBtn.setAttribute("id", "toggleUnitBtn");
  toggleUnitBtn.setAttribute("type", "button");
  toggleUnitBtn.setAttribute("data-status", "celcius");
  toggleUnitBtn.textContent = "\u00B0C";

  const weatherDiv = document.createElement("div");
  weatherDiv.setAttribute("id", "weatherDiv");
  weatherDiv.classList.add("weatherDiv");

  const locationHeading = document.createElement("h1");
  locationHeading.classList.add("locationHeading");
  locationHeading.textContent = `${weatherDetails.location.name}, ${weatherDetails.location.country}`;

  const weatherConditionText = document.createElement("div");
  weatherConditionText.classList.add("weatherConditionText");
  weatherConditionText.textContent = weatherDetails.current.condition.text;

  const temperature = document.createElement("div");
  temperature.classList.add("temperature");
  temperature.setAttribute("id", "temperature");

  const feelsLike = document.createElement("div");
  feelsLike.classList.add("feelsLike");
  feelsLike.setAttribute("id", "feelsLike");
  feelsLike.classList.add("moreWeatherDetails");

  const wind = document.createElement("div");
  wind.classList.add("moreWeatherDetails");
  wind.textContent = `Wind : ${weatherDetails.current.wind_mph} MPH`;

  const humidity = document.createElement("div");
  humidity.classList.add("moreWeatherDetails");
  humidity.textContent = `Humidity : ${weatherDetails.current.humidity}%`;
  const unitStatus = toggleUnitBtn.getAttribute("data-status");
  if (unitStatus === "celcius") {
    temperature.textContent = `${weatherDetails.current.temp_c}\u00B0C`;
    feelsLike.textContent = `Feels like ${weatherDetails.current.feelslike_c}\u00B0C`;
  } else {
    temperature.textContent = `${weatherDetails.current.temp_f}\u00B0F`;
    feelsLike.textContent = `Feels like ${weatherDetails.current.feelslike_f}\u00B0F`;
  }

  const weatherContent = document.createElement("div");
  weatherContent.classList.add("weatherContent");
  weatherContent.appendChild(temperature);
  const moreWeatherDeteilsDiv = document.createElement("div");

  moreWeatherDeteilsDiv.classList.add("moreWeatherDetailsDiv");
  moreWeatherDeteilsDiv.appendChild(feelsLike);
  moreWeatherDeteilsDiv.appendChild(wind);
  moreWeatherDeteilsDiv.appendChild(humidity);

  weatherContent.appendChild(moreWeatherDeteilsDiv);

  weatherDiv.appendChild(locationHeading);
  weatherDiv.appendChild(weatherConditionText);
  weatherDiv.appendChild(weatherContent);
  toggleUnitBtn.addEventListener("click", () => {
    toggleTemperatureUnits(weatherDetails, toggleUnitBtn);
  });

  const weatherImg = new Image();
  weatherImg.src = weatherDetails.current.condition.icon;
  weatherImg.classList.add("weatherImg");
  weatherDiv.appendChild(weatherImg);
  weatherDiv.appendChild(toggleUnitBtn);
  contentDiv.appendChild(weatherDiv);
}

function toggleTemperatureUnits(weatherDetails, toggleUnitBtn) {
  const temperature = document.getElementById("temperature");
  const feelsLike = document.getElementById("feelsLike");

  const weatherDiv = document.getElementById("weatherDiv");

  if (toggleUnitBtn.getAttribute("data-status") === "celcius") {
    toggleUnitBtn.setAttribute("data-status", "farenheit");
    toggleUnitBtn.textContent = "\u00B0F";

    temperature.textContent = `${weatherDetails.current.temp_f}\u00B0F`;
    feelsLike.textContent = `Feels like ${weatherDetails.current.feelslike_f}\u00B0F`;
  } else {
    toggleUnitBtn.setAttribute("data-status", "celcius");
    toggleUnitBtn.textContent = "\u00B0C";

    temperature.textContent = `${weatherDetails.current.temp_c}\u00B0C`;
    feelsLike.textContent = `Feels like ${weatherDetails.current.feelslike_c}\u00B0C`;
  }
}


/***/ }),

/***/ "./src/updateWeather.js":
/*!******************************!*\
  !*** ./src/updateWeather.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getCurrentWeather: () => (/* binding */ getCurrentWeather),
/* harmony export */   getLocation: () => (/* binding */ getLocation)
/* harmony export */ });

async function getLocation(location) {
  try {
    const responseLocations = await fetch(
      `https://api.weatherapi.com/v1/search.json?key=97ee98d25b6e4c3c9bb153401232407&q=${location}`
    );
    const resultLocations = await responseLocations.json();
    return resultLocations;
  } catch (error) {
    const errorMsg = `Cannot retrieve locations : ${error}`;
    console.error(errorMsg);
    return errorMsg;
  }
}

async function getCurrentWeather(location) {
  try {
    const currentWeatherResponse = await fetch(
      `https://api.weatherapi.com/v1/forecast.json?key=97ee98d25b6e4c3c9bb153401232407&q=${location}&days=3`
    );
    const currentWeatherResult = await currentWeatherResponse.json();
    return currentWeatherResult;
  } catch (error) {
    const errorMsg = `Cannot retrieve Weather Details : ${error}`;
    console.error(errorMsg);
    return errorMsg;
  }
}


/***/ }),

/***/ "./src/Icons/logo.svg":
/*!****************************!*\
  !*** ./src/Icons/logo.svg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b01ae29b7473ba3052d3.svg";

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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _updateWeather__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./updateWeather */ "./src/updateWeather.js");
/* harmony import */ var _homepage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./homepage */ "./src/homepage.js");




(0,_homepage__WEBPACK_IMPORTED_MODULE_2__.createHomePage)();
(0,_homepage__WEBPACK_IMPORTED_MODULE_2__.populateSuggestionList)();
(0,_homepage__WEBPACK_IMPORTED_MODULE_2__.getWeather)();

/* const a = await getLocation("paris");
console.log(a);
const b = await getCurrentWeather(a[0]);
console.log(b);
console.log("Hi"); */

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLGdGQUFnRixVQUFVLFVBQVUsWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsY0FBYyxhQUFhLGNBQWMsYUFBYSxhQUFhLGFBQWEsY0FBYyxhQUFhLGNBQWMsV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxVQUFVLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxXQUFXLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLFVBQVUsWUFBWSxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxXQUFXLFlBQVksV0FBVyxLQUFLLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLEtBQUssS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLE1BQU0sU0FBUyxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLFlBQVksV0FBVyxVQUFVLFlBQVksTUFBTSxLQUFLLFlBQVksNkJBQTZCLGdCQUFnQixpQkFBaUIsNkJBQTZCLEtBQUssV0FBVyxzQkFBc0IseUJBQXlCLGlDQUFpQywyQkFBMkIsd0NBQXdDLDhCQUE4Qiw2Q0FBNkMsMENBQTBDLHlDQUF5Qyw0Q0FBNEMsZ0RBQWdELHVDQUF1QywwQkFBMEIsS0FBSyxVQUFVLG1CQUFtQixvQkFBb0IsdUNBQXVDLEtBQUssOEJBQThCLG9CQUFvQixnQkFBZ0Isa0NBQWtDLGdDQUFnQyxrQkFBa0IsMEJBQTBCLHFDQUFxQywyQkFBMkIsc0JBQXNCLHlCQUF5QixhQUFhLEtBQUssdUJBQXVCLGtCQUFrQixLQUFLLDBCQUEwQixvQkFBb0IsZ0JBQWdCLHlCQUF5QixLQUFLLDhDQUE4Qyw2QkFBNkIsc0JBQXNCLHNCQUFzQixrQkFBa0IseUJBQXlCLGdEQUFnRCw0Q0FBNEMsb0NBQW9DLEtBQUssb0NBQW9DLDBDQUEwQyxLQUFLLDZCQUE2QiwwQ0FBMEMsS0FBSyxnQkFBZ0IsNkJBQTZCLHNCQUFzQix1QkFBdUIsMEJBQTBCLG1CQUFtQixvQkFBb0Isc0JBQXNCLDJDQUEyQyxtQ0FBbUMsMkJBQTJCLEtBQUssc0JBQXNCLCtCQUErQixLQUFLLHVCQUF1QixvQkFBb0IsNEJBQTRCLEtBQUsscUJBQXFCLGtCQUFrQixtQkFBbUIsb0JBQW9CLDBCQUEwQiw4QkFBOEIsS0FBSywrQkFBK0Isb0JBQW9CLDZCQUE2QiwwQkFBMEIsNENBQTRDLG9DQUFvQyxvQkFBb0IsMEJBQTBCLHFCQUFxQiw2QkFBNkIsa0JBQWtCLEtBQUssa0RBQWtELHNCQUFzQiw0QkFBNEIsdUJBQXVCLHVCQUF1QixrQkFBa0Isc0RBQXNELEtBQUssdURBQXVELHdCQUF3Qix1QkFBdUIsMEJBQTBCLGtCQUFrQix5QkFBeUIsS0FBSyxxREFBcUQsb0JBQW9CLDBCQUEwQixvQ0FBb0MsZ0JBQWdCLGtCQUFrQixLQUFLLGdFQUFnRSxzQkFBc0IsdUJBQXVCLG1GQUFtRixrQkFBa0IscURBQXFELHlCQUF5QiwwQkFBMEIsS0FBSywwRUFBMEUsb0JBQW9CLGdCQUFnQixrQkFBa0IseUJBQXlCLEtBQUssb0hBQW9ILHdCQUF3Qix1QkFBdUIsbUZBQW1GLEtBQUssaUJBQWlCLHVCQUF1QixtQkFBbUIsS0FBSyx3QkFBd0Isc0JBQXNCLHNCQUFzQix1QkFBdUIsMEJBQTBCLG1CQUFtQix1Q0FBdUMsbUJBQW1CLCtCQUErQixtQkFBbUIsc0JBQXNCLDJCQUEyQixLQUFLLDJCQUEyQiw0QkFBNEIsS0FBSyx1QkFBdUI7QUFDL3VMO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7O0FDdEwxQjs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscURBQXFEO0FBQ3JEO0FBQ0E7QUFDQSxnREFBZ0Q7QUFDaEQ7QUFDQTtBQUNBLHFGQUFxRjtBQUNyRjtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsaUJBQWlCO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixxQkFBcUI7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0ZBQXNGLHFCQUFxQjtBQUMzRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1YsaURBQWlELHFCQUFxQjtBQUN0RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0RBQXNELHFCQUFxQjtBQUMzRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDcEZhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1REFBdUQsY0FBYztBQUNyRTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZEEsTUFBK0Y7QUFDL0YsTUFBcUY7QUFDckYsTUFBNEY7QUFDNUYsTUFBK0c7QUFDL0csTUFBd0c7QUFDeEcsTUFBd0c7QUFDeEcsTUFBbUc7QUFDbkc7QUFDQTs7QUFFQTs7QUFFQSw0QkFBNEIscUdBQW1CO0FBQy9DLHdCQUF3QixrSEFBYTs7QUFFckMsdUJBQXVCLHVHQUFhO0FBQ3BDO0FBQ0EsaUJBQWlCLCtGQUFNO0FBQ3ZCLDZCQUE2QixzR0FBa0I7O0FBRS9DLGFBQWEsMEdBQUcsQ0FBQyxzRkFBTzs7OztBQUk2QztBQUNyRSxPQUFPLGlFQUFlLHNGQUFPLElBQUksc0ZBQU8sVUFBVSxzRkFBTyxtQkFBbUIsRUFBQzs7Ozs7Ozs7Ozs7QUMxQmhFOztBQUViO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsaUJBQWlCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsNEJBQTRCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsNkJBQTZCO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDbkZhOztBQUViOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ2pDYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDVGE7O0FBRWI7QUFDQTtBQUNBLGNBQWMsS0FBd0MsR0FBRyxzQkFBaUIsR0FBRyxDQUFJO0FBQ2pGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNUYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtEQUFrRDtBQUNsRDtBQUNBO0FBQ0EsMENBQTBDO0FBQzFDO0FBQ0E7QUFDQTtBQUNBLGlGQUFpRjtBQUNqRjtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLHlEQUF5RDtBQUN6RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQzVEYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2J1QztBQUMwQjtBQUNqRTtBQU1FO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsNENBQU87QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYywyREFBVztBQUN6QixLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsY0FBYyxJQUFJLGlCQUFpQixJQUFJLGdCQUFnQjtBQUNuRjtBQUNBLFNBQVM7QUFDVCxPQUFPO0FBQ1A7QUFDQTtBQUNBLE9BQU87QUFDUCxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsaUVBQWlCO0FBQy9CLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DLDZCQUE2QixJQUFJLGdDQUFnQztBQUNwRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQixpQ0FBaUM7QUFDaEU7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDLGdDQUFnQztBQUN2RTtBQUNBO0FBQ0EsaUNBQWlDLDhCQUE4QjtBQUMvRCwwQ0FBMEMsbUNBQW1DO0FBQzdFLElBQUk7QUFDSixpQ0FBaUMsOEJBQThCO0FBQy9ELDBDQUEwQyxtQ0FBbUM7QUFDN0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUMsOEJBQThCO0FBQy9ELDBDQUEwQyxtQ0FBbUM7QUFDN0UsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQyw4QkFBOEI7QUFDL0QsMENBQTBDLG1DQUFtQztBQUM3RTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDck0wQztBQUMxQztBQUNBO0FBQ0E7QUFDQSx5RkFBeUYsU0FBUztBQUNsRztBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0osb0RBQW9ELE1BQU07QUFDMUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJGQUEyRixTQUFTO0FBQ3BHO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSiwwREFBMEQsTUFBTTtBQUNoRTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUMzQkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDbEJBOzs7Ozs7Ozs7Ozs7OztBQ0FxQjtBQUM0QztBQUNlO0FBQ2hGO0FBQ0EseURBQWM7QUFDZCxpRUFBc0I7QUFDdEIscURBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3dlYXRoZXJhcHAvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3dlYXRoZXJhcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3dlYXRoZXJhcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwLy4vc3JjL2hvbWVwYWdlLmpzIiwid2VicGFjazovL3dlYXRoZXJhcHAvLi9zcmMvdXBkYXRlV2VhdGhlci5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYXRoZXJhcHAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3dlYXRoZXJhcHAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAqIHtcclxuICBtYXJnaW46IDA7XHJcbiAgcGFkZGluZzogMDtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcbjpyb290IHtcclxuICAtLWJvZHlCZzogd2hpdGU7XHJcbiAgLS1ib2R5Q29sb3I6IGJsYWNrO1xyXG4gIC0taGVhZGVyQmc6IGJsYW5jaGVkYWxtb25kO1xyXG4gIC0taGVhZGVyQ29sb3I6IHdoaXRlO1xyXG5cclxuICAtLXN1Ym1pdGJ0bkJnOiByZ2IoNiwgMTY0LCA2KTtcclxuICAtLXN1Ym1pdEJ0bkNvbG9yOiB3aGl0ZTtcclxuXHJcbiAgLS1pbnB1dEZpZWxkQkc6IHJnYigyMTIsIDIxMiwgMjEyKTtcclxuICAtLWlucHV0RmllbGRCb3JkZXI6IHJnYig0MSwgNDEsIDQxKTtcclxuICAtLWlucHV0RmllbGRDb2xvcjogcmdiKDQxLCA0MSwgNDEpO1xyXG4gIC0taW5wdXRGaWVsZFBsYWNlaG9sZGVyOiByZ2IoMCwgMCwgMCk7XHJcblxyXG4gIC0td2VhdGhlckRpdkNvbG9yOiByZ2IoMjQ3LCAyMjYsIDIyNik7XHJcbiAgLS13ZWF0aGVyRGl2Qmc6IHJnYigxNTcsIDQ5LCA0OSk7XHJcblxyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxufVxyXG5ib2R5IHtcclxuICB3aWR0aDogMTAwdnc7XHJcbiAgaGVpZ2h0OiAxMDB2aDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFuY2hlZGFsbW9uZDtcclxufVxyXG5cclxuLypoZWFkZXIqL1xyXG5oZWFkZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZ2FwOiAxcmVtO1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLWhlYWRlckJnKTtcclxuICBjb2xvcjogdmFyKC0taGVhZGVyQ29sb3IpO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIHBhZGRpbmc6IDAuNHJlbSAxcmVtO1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwO1xyXG59XHJcbmhlYWRlciA+IC5sb2dvRGl2IHtcclxuICB3aWR0aDogNTBweDtcclxufVxyXG5oZWFkZXIgPiAuc2VhcmNoRm9ybSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBnYXA6IDFyZW07XHJcbiAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xyXG59XHJcbmhlYWRlciA+IC5zZWFyY2hGb3JtID4gLnNlYXJjaElucHV0RmllbGQge1xyXG4gIHBhZGRpbmc6IDAuNHJlbSAwLjRyZW07XHJcbiAgZm9udC1zaXplOiAxcmVtO1xyXG4gIG1pbi13aWR0aDogODBweDtcclxuICB3aWR0aDogMTAwJTtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0taW5wdXRGaWVsZEJvcmRlcik7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW5wdXRGaWVsZEJHKTtcclxuICBjb2xvcjogdmFyKC0taW5wdXRGaWVsZENvbG9yKTtcclxufVxyXG4uc2VhcmNoSW5wdXRGaWVsZDo6cGxhY2Vob2xkZXIge1xyXG4gIGNvbG9yOiB2YXIoLS1pbnB1dEZpZWxkUGxhY2Vob2xkZXIpO1xyXG59XHJcbi5zZWFyY2hJbnB1dEZpZWxkOmZvY3VzIHtcclxuICBvdXRsaW5lOiAycHggc29saWQgcmdiKDE5LCA5NCwgMTk5KTtcclxufVxyXG4uc3VibWl0QnRuIHtcclxuICBwYWRkaW5nOiAwLjRyZW0gMC40cmVtO1xyXG4gIGZvbnQtc2l6ZTogMXJlbTtcclxuICBmb250LXdlaWdodDogOTAwO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXN1Ym1pdGJ0bkJnKTtcclxuICBjb2xvcjogdmFyKC0tc3VibWl0QnRuQ29sb3IpO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzO1xyXG59XHJcbi5zdWJtaXRCdG46aG92ZXIge1xyXG4gIG91dGxpbmU6IDFweCBzb2xpZCB3aGl0ZTtcclxufVxyXG4uc3VibWl0QnRuOmFjdGl2ZSB7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICB0cmFuc2Zvcm06IHNjYWxlKDAuOCk7XHJcbn1cclxuXHJcbi5jb250ZW50RGl2IHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcbi5jb250ZW50RGl2ID4gLndlYXRoZXJEaXYge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdlYXRoZXJEaXZCZyk7XHJcbiAgY29sb3I6IHZhcigtLXdlYXRoZXJEaXZDb2xvcik7XHJcbiAgcGFkZGluZzogMXJlbTtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIG1heC13aWR0aDogNTAlO1xyXG4gIG1pbi13aWR0aDogZml0LWNvbnRlbnQ7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuLmNvbnRlbnREaXYgPiAud2VhdGhlckRpdiA+IC5sb2NhdGlvbkhlYWRpbmcge1xyXG4gIGZvbnQtc2l6ZTogMnJlbTtcclxuICBtYXJnaW4tYm90dG9tOiAwLjdyZW07XHJcbiAgZm9udC13ZWlnaHQ6IDkwMDtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS13ZWF0aGVyRGl2Q29sb3IpO1xyXG59XHJcbi5jb250ZW50RGl2ID4gLndlYXRoZXJEaXYgPiAud2VhdGhlckNvbmRpdGlvblRleHQge1xyXG4gIGZvbnQtc2l6ZTogMS40cmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICB3aWR0aDogMTAwJTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5jb250ZW50RGl2ID4gLndlYXRoZXJEaXYgPiAud2VhdGhlckNvbnRlbnQge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcclxuICBnYXA6IDFyZW07XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuLmNvbnRlbnREaXYgPiAud2VhdGhlckRpdiA+IC53ZWF0aGVyQ29udGVudCA+IC50ZW1wZXJhdHVyZSB7XHJcbiAgZm9udC1zaXplOiA0cmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiA5MDA7XHJcbiAgZm9udC1mYW1pbHk6IFwiRnJhbmtsaW4gR290aGljIE1lZGl1bVwiLCBcIkFyaWFsIE5hcnJvd1wiLCBBcmlhbCwgc2Fucy1zZXJpZjtcclxuICB3aWR0aDogMTAwJTtcclxuICBib3JkZXItcmlnaHQ6IDJweCBzb2xpZCB2YXIoLS13ZWF0aGVyRGl2Q29sb3IpO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xyXG59XHJcbi5jb250ZW50RGl2ID4gLndlYXRoZXJEaXYgPiAud2VhdGhlckNvbnRlbnQgPiAubW9yZVdlYXRoZXJEZXRhaWxzRGl2IHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdhcDogMXJlbTtcclxuICB3aWR0aDogMTAwJTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLmNvbnRlbnREaXZcclxuICA+IC53ZWF0aGVyRGl2XHJcbiAgPiAud2VhdGhlckNvbnRlbnRcclxuICA+IC5tb3JlV2VhdGhlckRldGFpbHNEaXZcclxuICA+IC5tb3JlV2VhdGhlckRldGFpbHMge1xyXG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgZm9udC1mYW1pbHk6IFwiRnJhbmtsaW4gR290aGljIE1lZGl1bVwiLCBcIkFyaWFsIE5hcnJvd1wiLCBBcmlhbCwgc2Fucy1zZXJpZjtcclxufVxyXG4ud2VhdGhlckltZyB7XHJcbiAgbWFyZ2luLXRvcDogMjBweDtcclxuICB3aWR0aDogMTAwcHg7XHJcbn1cclxuXHJcbi50b2dnbGVVbml0QnRuIHtcclxuICBwYWRkaW5nOiAwLjRyZW07XHJcbiAgZm9udC1zaXplOiAycmVtO1xyXG4gIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICB3aWR0aDogMTByZW07XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogZGFya29saXZlZ3JlZW47XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIG91dGxpbmU6IDJweCBzb2xpZCB3aGl0ZTtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzO1xyXG59XHJcbi50b2dnbGVVbml0QnRuOmFjdGl2ZSB7XHJcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjgpO1xyXG59XHJcbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLFNBQVM7RUFDVCxVQUFVO0VBQ1Ysc0JBQXNCO0FBQ3hCO0FBQ0E7RUFDRSxlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLDBCQUEwQjtFQUMxQixvQkFBb0I7O0VBRXBCLDZCQUE2QjtFQUM3Qix1QkFBdUI7O0VBRXZCLGtDQUFrQztFQUNsQyxtQ0FBbUM7RUFDbkMsa0NBQWtDO0VBQ2xDLHFDQUFxQzs7RUFFckMscUNBQXFDO0VBQ3JDLGdDQUFnQzs7RUFFaEMsZUFBZTtBQUNqQjtBQUNBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixnQ0FBZ0M7QUFDbEM7O0FBRUEsU0FBUztBQUNUO0VBQ0UsYUFBYTtFQUNiLFNBQVM7RUFDVCwyQkFBMkI7RUFDM0IseUJBQXlCO0VBQ3pCLFdBQVc7RUFDWCxtQkFBbUI7RUFDbkIsOEJBQThCO0VBQzlCLG9CQUFvQjtFQUNwQixlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLE1BQU07QUFDUjtBQUNBO0VBQ0UsV0FBVztBQUNiO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsU0FBUztFQUNULGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0Usc0JBQXNCO0VBQ3RCLGVBQWU7RUFDZixlQUFlO0VBQ2YsV0FBVztFQUNYLGtCQUFrQjtFQUNsQix5Q0FBeUM7RUFDekMscUNBQXFDO0VBQ3JDLDZCQUE2QjtBQUMvQjtBQUNBO0VBQ0UsbUNBQW1DO0FBQ3JDO0FBQ0E7RUFDRSxtQ0FBbUM7QUFDckM7QUFDQTtFQUNFLHNCQUFzQjtFQUN0QixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osYUFBYTtFQUNiLGVBQWU7RUFDZixvQ0FBb0M7RUFDcEMsNEJBQTRCO0VBQzVCLG9CQUFvQjtBQUN0QjtBQUNBO0VBQ0Usd0JBQXdCO0FBQzFCO0FBQ0E7RUFDRSxhQUFhO0VBQ2IscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtBQUN6QjtBQUNBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIscUNBQXFDO0VBQ3JDLDZCQUE2QjtFQUM3QixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGNBQWM7RUFDZCxzQkFBc0I7RUFDdEIsV0FBVztBQUNiO0FBQ0E7RUFDRSxlQUFlO0VBQ2YscUJBQXFCO0VBQ3JCLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsV0FBVztFQUNYLCtDQUErQztBQUNqRDtBQUNBO0VBQ0UsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsV0FBVztFQUNYLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsNkJBQTZCO0VBQzdCLFNBQVM7RUFDVCxXQUFXO0FBQ2I7QUFDQTtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsd0VBQXdFO0VBQ3hFLFdBQVc7RUFDWCw4Q0FBOEM7RUFDOUMsa0JBQWtCO0VBQ2xCLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0UsYUFBYTtFQUNiLFNBQVM7RUFDVCxXQUFXO0VBQ1gsa0JBQWtCO0FBQ3BCO0FBQ0E7Ozs7O0VBS0UsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQix3RUFBd0U7QUFDMUU7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLGdDQUFnQztFQUNoQyxZQUFZO0VBQ1osd0JBQXdCO0VBQ3hCLFlBQVk7RUFDWixlQUFlO0VBQ2Ysb0JBQW9CO0FBQ3RCO0FBQ0E7RUFDRSxxQkFBcUI7QUFDdkJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiB7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG59XFxyXFxuOnJvb3Qge1xcclxcbiAgLS1ib2R5Qmc6IHdoaXRlO1xcclxcbiAgLS1ib2R5Q29sb3I6IGJsYWNrO1xcclxcbiAgLS1oZWFkZXJCZzogYmxhbmNoZWRhbG1vbmQ7XFxyXFxuICAtLWhlYWRlckNvbG9yOiB3aGl0ZTtcXHJcXG5cXHJcXG4gIC0tc3VibWl0YnRuQmc6IHJnYig2LCAxNjQsIDYpO1xcclxcbiAgLS1zdWJtaXRCdG5Db2xvcjogd2hpdGU7XFxyXFxuXFxyXFxuICAtLWlucHV0RmllbGRCRzogcmdiKDIxMiwgMjEyLCAyMTIpO1xcclxcbiAgLS1pbnB1dEZpZWxkQm9yZGVyOiByZ2IoNDEsIDQxLCA0MSk7XFxyXFxuICAtLWlucHV0RmllbGRDb2xvcjogcmdiKDQxLCA0MSwgNDEpO1xcclxcbiAgLS1pbnB1dEZpZWxkUGxhY2Vob2xkZXI6IHJnYigwLCAwLCAwKTtcXHJcXG5cXHJcXG4gIC0td2VhdGhlckRpdkNvbG9yOiByZ2IoMjQ3LCAyMjYsIDIyNik7XFxyXFxuICAtLXdlYXRoZXJEaXZCZzogcmdiKDE1NywgNDksIDQ5KTtcXHJcXG5cXHJcXG4gIGZvbnQtc2l6ZTogMTZweDtcXHJcXG59XFxyXFxuYm9keSB7XFxyXFxuICB3aWR0aDogMTAwdnc7XFxyXFxuICBoZWlnaHQ6IDEwMHZoO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhbmNoZWRhbG1vbmQ7XFxyXFxufVxcclxcblxcclxcbi8qaGVhZGVyKi9cXHJcXG5oZWFkZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGdhcDogMXJlbTtcXHJcXG4gIGJhY2tncm91bmQ6IHZhcigtLWhlYWRlckJnKTtcXHJcXG4gIGNvbG9yOiB2YXIoLS1oZWFkZXJDb2xvcik7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBwYWRkaW5nOiAwLjRyZW0gMXJlbTtcXHJcXG4gIGZsZXgtd3JhcDogd3JhcDtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHRvcDogMDtcXHJcXG59XFxyXFxuaGVhZGVyID4gLmxvZ29EaXYge1xcclxcbiAgd2lkdGg6IDUwcHg7XFxyXFxufVxcclxcbmhlYWRlciA+IC5zZWFyY2hGb3JtIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBnYXA6IDFyZW07XFxyXFxuICBtYXJnaW4tcmlnaHQ6IDE1cHg7XFxyXFxufVxcclxcbmhlYWRlciA+IC5zZWFyY2hGb3JtID4gLnNlYXJjaElucHV0RmllbGQge1xcclxcbiAgcGFkZGluZzogMC40cmVtIDAuNHJlbTtcXHJcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gIG1pbi13aWR0aDogODBweDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0taW5wdXRGaWVsZEJvcmRlcik7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pbnB1dEZpZWxkQkcpO1xcclxcbiAgY29sb3I6IHZhcigtLWlucHV0RmllbGRDb2xvcik7XFxyXFxufVxcclxcbi5zZWFyY2hJbnB1dEZpZWxkOjpwbGFjZWhvbGRlciB7XFxyXFxuICBjb2xvcjogdmFyKC0taW5wdXRGaWVsZFBsYWNlaG9sZGVyKTtcXHJcXG59XFxyXFxuLnNlYXJjaElucHV0RmllbGQ6Zm9jdXMge1xcclxcbiAgb3V0bGluZTogMnB4IHNvbGlkIHJnYigxOSwgOTQsIDE5OSk7XFxyXFxufVxcclxcbi5zdWJtaXRCdG4ge1xcclxcbiAgcGFkZGluZzogMC40cmVtIDAuNHJlbTtcXHJcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA5MDA7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgb3V0bGluZTogbm9uZTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXN1Ym1pdGJ0bkJnKTtcXHJcXG4gIGNvbG9yOiB2YXIoLS1zdWJtaXRCdG5Db2xvcik7XFxyXFxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcXHJcXG59XFxyXFxuLnN1Ym1pdEJ0bjpob3ZlciB7XFxyXFxuICBvdXRsaW5lOiAxcHggc29saWQgd2hpdGU7XFxyXFxufVxcclxcbi5zdWJtaXRCdG46YWN0aXZlIHtcXHJcXG4gIG91dGxpbmU6IG5vbmU7XFxyXFxuICB0cmFuc2Zvcm06IHNjYWxlKDAuOCk7XFxyXFxufVxcclxcblxcclxcbi5jb250ZW50RGl2IHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG59XFxyXFxuLmNvbnRlbnREaXYgPiAud2VhdGhlckRpdiB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13ZWF0aGVyRGl2QmcpO1xcclxcbiAgY29sb3I6IHZhcigtLXdlYXRoZXJEaXZDb2xvcik7XFxyXFxuICBwYWRkaW5nOiAxcmVtO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gIG1heC13aWR0aDogNTAlO1xcclxcbiAgbWluLXdpZHRoOiBmaXQtY29udGVudDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG4uY29udGVudERpdiA+IC53ZWF0aGVyRGl2ID4gLmxvY2F0aW9uSGVhZGluZyB7XFxyXFxuICBmb250LXNpemU6IDJyZW07XFxyXFxuICBtYXJnaW4tYm90dG9tOiAwLjdyZW07XFxyXFxuICBmb250LXdlaWdodDogOTAwO1xcclxcbiAgdGV4dC1hbGlnbjogbGVmdDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLXdlYXRoZXJEaXZDb2xvcik7XFxyXFxufVxcclxcbi5jb250ZW50RGl2ID4gLndlYXRoZXJEaXYgPiAud2VhdGhlckNvbmRpdGlvblRleHQge1xcclxcbiAgZm9udC1zaXplOiAxLjRyZW07XFxyXFxuICBmb250LXdlaWdodDogNzAwO1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGVudERpdiA+IC53ZWF0aGVyRGl2ID4gLndlYXRoZXJDb250ZW50IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxyXFxuICBnYXA6IDFyZW07XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuLmNvbnRlbnREaXYgPiAud2VhdGhlckRpdiA+IC53ZWF0aGVyQ29udGVudCA+IC50ZW1wZXJhdHVyZSB7XFxyXFxuICBmb250LXNpemU6IDRyZW07XFxyXFxuICBmb250LXdlaWdodDogOTAwO1xcclxcbiAgZm9udC1mYW1pbHk6IFxcXCJGcmFua2xpbiBHb3RoaWMgTWVkaXVtXFxcIiwgXFxcIkFyaWFsIE5hcnJvd1xcXCIsIEFyaWFsLCBzYW5zLXNlcmlmO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBib3JkZXItcmlnaHQ6IDJweCBzb2xpZCB2YXIoLS13ZWF0aGVyRGl2Q29sb3IpO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgcGFkZGluZy1yaWdodDogMTBweDtcXHJcXG59XFxyXFxuLmNvbnRlbnREaXYgPiAud2VhdGhlckRpdiA+IC53ZWF0aGVyQ29udGVudCA+IC5tb3JlV2VhdGhlckRldGFpbHNEaXYge1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdhcDogMXJlbTtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG4uY29udGVudERpdlxcclxcbiAgPiAud2VhdGhlckRpdlxcclxcbiAgPiAud2VhdGhlckNvbnRlbnRcXHJcXG4gID4gLm1vcmVXZWF0aGVyRGV0YWlsc0RpdlxcclxcbiAgPiAubW9yZVdlYXRoZXJEZXRhaWxzIHtcXHJcXG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xcclxcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG4gIGZvbnQtZmFtaWx5OiBcXFwiRnJhbmtsaW4gR290aGljIE1lZGl1bVxcXCIsIFxcXCJBcmlhbCBOYXJyb3dcXFwiLCBBcmlhbCwgc2Fucy1zZXJpZjtcXHJcXG59XFxyXFxuLndlYXRoZXJJbWcge1xcclxcbiAgbWFyZ2luLXRvcDogMjBweDtcXHJcXG4gIHdpZHRoOiAxMDBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnRvZ2dsZVVuaXRCdG4ge1xcclxcbiAgcGFkZGluZzogMC40cmVtO1xcclxcbiAgZm9udC1zaXplOiAycmVtO1xcclxcbiAgbWFyZ2luLXRvcDogMjBweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICB3aWR0aDogMTByZW07XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrb2xpdmVncmVlbjtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIG91dGxpbmU6IDJweCBzb2xpZCB3aGl0ZTtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzO1xcclxcbn1cXHJcXG4udG9nZ2xlVW5pdEJ0bjphY3RpdmUge1xcclxcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjgpO1xcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IGxvZ29JbWcgZnJvbSBcIi4vSWNvbnMvbG9nby5zdmdcIjtcclxuaW1wb3J0IHsgZ2V0TG9jYXRpb24sIGdldEN1cnJlbnRXZWF0aGVyIH0gZnJvbSBcIi4vdXBkYXRlV2VhdGhlclwiO1xyXG5cclxuZXhwb3J0IHtcclxuICBjcmVhdGVIb21lUGFnZSxcclxuICBwb3B1bGF0ZVN1Z2dlc3Rpb25MaXN0LFxyXG4gIGdldFdlYXRoZXIsXHJcbiAgdG9nZ2xlVGVtcGVyYXR1cmVVbml0cyxcclxufTtcclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUhvbWVQYWdlKCkge1xyXG4gIGNvbnN0IGNvbnRlbnREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGNvbnRlbnREaXYuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJjb250ZW50RGl2XCIpO1xyXG4gIGNvbnRlbnREaXYuY2xhc3NMaXN0LmFkZChcImNvbnRlbnREaXZcIik7XHJcblxyXG4gIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKTtcclxuICBib2R5LmFwcGVuZENoaWxkKGNyZWF0ZUhlYWRlcigpKTtcclxuICBib2R5LmFwcGVuZENoaWxkKGNvbnRlbnREaXYpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVIZWFkZXIoKSB7XHJcbiAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImhlYWRlclwiKTtcclxuICBoZWFkZXIuY2xhc3NMaXN0LmFkZChcImhlYWRlclwiKTtcclxuICBoZWFkZXIuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJoZWFkZXJcIik7XHJcblxyXG4gIGNvbnN0IGxvZ29EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibG9nb1wiKTtcclxuICBsb2dvRGl2LmNsYXNzTGlzdC5hZGQoXCJsb2dvRGl2XCIpO1xyXG4gIGxvZ29EaXYuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJsb2dvRGl2XCIpO1xyXG4gIGNvbnN0IGxvZ28gPSBuZXcgSW1hZ2UoKTtcclxuICBsb2dvLnNyYyA9IGxvZ29JbWc7XHJcbiAgbG9nb0Rpdi5hcHBlbmRDaGlsZChsb2dvKTtcclxuXHJcbiAgaGVhZGVyLmFwcGVuZENoaWxkKGxvZ29EaXYpO1xyXG4gIGhlYWRlci5hcHBlbmRDaGlsZChjcmVhdGVTZWFyY2hGb3JtKCkpO1xyXG5cclxuICByZXR1cm4gaGVhZGVyO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVTZWFyY2hGb3JtKCkge1xyXG4gIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKTtcclxuICBmb3JtLmNsYXNzTGlzdC5hZGQoXCJzZWFyY2hGb3JtXCIpO1xyXG4gIGZvcm0uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJzZWFyY2hGb3JtXCIpO1xyXG5cclxuICBjb25zdCBpbnB1dEZpZWxkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xyXG4gIGlucHV0RmllbGQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInRleHRcIik7XHJcbiAgaW5wdXRGaWVsZC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImlucHV0RmllbGRcIik7XHJcbiAgaW5wdXRGaWVsZC5zZXRBdHRyaWJ1dGUoXCJwbGFjZWhvbGRlclwiLCBcIlNlYXJjaCBmb3IgYSBjaXR5LlwiKTtcclxuICBpbnB1dEZpZWxkLnNldEF0dHJpYnV0ZShcImxpc3RcIiwgXCJzdWdnZXN0aW9uTGlzdFwiKTtcclxuICBpbnB1dEZpZWxkLnNldEF0dHJpYnV0ZShcInJlcXVpcmVkXCIsIFwiXCIpO1xyXG4gIGlucHV0RmllbGQuY2xhc3NMaXN0LmFkZChcInNlYXJjaElucHV0RmllbGRcIik7XHJcblxyXG4gIGNvbnN0IHN1Z2dlc3Rpb25MaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRhdGFsaXN0XCIpO1xyXG4gIHN1Z2dlc3Rpb25MaXN0LnNldEF0dHJpYnV0ZShcImlkXCIsIFwic3VnZ2VzdGlvbkxpc3RcIik7XHJcbiAgc3VnZ2VzdGlvbkxpc3QuY2xhc3NMaXN0LmFkZChcInN1Z2dlc3Rpb25MaXN0XCIpO1xyXG5cclxuICBjb25zdCBzdWJtaXRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gIHN1Ym1pdEJ0bi5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwic3VibWl0XCIpO1xyXG4gIHN1Ym1pdEJ0bi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInN1Ym1pdEJ0blwiKTtcclxuICBzdWJtaXRCdG4uY2xhc3NMaXN0LmFkZChcInN1Ym1pdEJ0blwiKTtcclxuICBzdWJtaXRCdG4udGV4dENvbnRlbnQgPSBcIlNlYXJjaFwiO1xyXG5cclxuICBmb3JtLmFwcGVuZENoaWxkKGlucHV0RmllbGQpO1xyXG4gIGZvcm0uYXBwZW5kQ2hpbGQoc3VibWl0QnRuKTtcclxuICBmb3JtLmFwcGVuZENoaWxkKHN1Z2dlc3Rpb25MaXN0KTtcclxuICByZXR1cm4gZm9ybTtcclxufVxyXG5cclxuZnVuY3Rpb24gcG9wdWxhdGVTdWdnZXN0aW9uTGlzdCgpIHtcclxuICBjb25zdCBpbnB1dEZpZWxkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbnB1dEZpZWxkXCIpO1xyXG4gIGNvbnN0IHN1Z2dlc3Rpb25MaXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzdWdnZXN0aW9uTGlzdFwiKTtcclxuICBpbnB1dEZpZWxkLmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCAoKSA9PiB7XHJcbiAgICBjb25zdCBsb2NhdGlvbnMgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgIHJlc29sdmUoZ2V0TG9jYXRpb24oaW5wdXRGaWVsZC52YWx1ZSkpO1xyXG4gICAgfSk7XHJcbiAgICBsb2NhdGlvbnNcclxuICAgICAgLnRoZW4oKGxvY2F0aW9ucykgPT4ge1xyXG4gICAgICAgIGxvY2F0aW9ucy5mb3JFYWNoKChsb2NhdGlvbikgPT4ge1xyXG4gICAgICAgICAgY29uc3Qgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcclxuICAgICAgICAgIG9wdGlvbi52YWx1ZSA9IGAke2xvY2F0aW9uLm5hbWV9LCAke2xvY2F0aW9uLmNvdW50cnl9LCAke2xvY2F0aW9uLnJlZ2lvbn1gO1xyXG4gICAgICAgICAgc3VnZ2VzdGlvbkxpc3QuYXBwZW5kQ2hpbGQob3B0aW9uKTtcclxuICAgICAgICB9KTtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCInbG9jYXRpb25zJyBhcnJheSBpcyBlbXB0eS4gXCIsIGVycm9yKTtcclxuICAgICAgfSk7XHJcbiAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldFdlYXRoZXIoKSB7XHJcbiAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2VhcmNoRm9ybVwiKTtcclxuICBjb25zdCBpbnB1dEZpZWxkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbnB1dEZpZWxkXCIpO1xyXG4gIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgY29uc3Qgd2VhdGhlckRldGFpbHMgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgIHJlc29sdmUoZ2V0Q3VycmVudFdlYXRoZXIoaW5wdXRGaWVsZC52YWx1ZSkpO1xyXG4gICAgfSk7XHJcbiAgICB3ZWF0aGVyRGV0YWlscy50aGVuKCh3ZWF0aGVyRGV0YWlscykgPT4ge1xyXG4gICAgICBjb25zdCBjb250ZW50RGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50RGl2XCIpO1xyXG4gICAgICBjb250ZW50RGl2LmlubmVySFRNTCA9IFwiXCI7XHJcbiAgICAgIGRpc3BsYXlXZWF0aGVyKHdlYXRoZXJEZXRhaWxzKTtcclxuICAgIH0pO1xyXG4gIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBkaXNwbGF5V2VhdGhlcih3ZWF0aGVyRGV0YWlscykge1xyXG4gIGNvbnN0IGNvbnRlbnREaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnREaXZcIik7XHJcblxyXG4gIGNvbnN0IHRvZ2dsZVVuaXRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gIHRvZ2dsZVVuaXRCdG4uY2xhc3NMaXN0LmFkZChcInRvZ2dsZVVuaXRCdG5cIik7XHJcbiAgdG9nZ2xlVW5pdEJ0bi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInRvZ2dsZVVuaXRCdG5cIik7XHJcbiAgdG9nZ2xlVW5pdEJ0bi5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiYnV0dG9uXCIpO1xyXG4gIHRvZ2dsZVVuaXRCdG4uc2V0QXR0cmlidXRlKFwiZGF0YS1zdGF0dXNcIiwgXCJjZWxjaXVzXCIpO1xyXG4gIHRvZ2dsZVVuaXRCdG4udGV4dENvbnRlbnQgPSBcIlxcdTAwQjBDXCI7XHJcblxyXG4gIGNvbnN0IHdlYXRoZXJEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIHdlYXRoZXJEaXYuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJ3ZWF0aGVyRGl2XCIpO1xyXG4gIHdlYXRoZXJEaXYuY2xhc3NMaXN0LmFkZChcIndlYXRoZXJEaXZcIik7XHJcblxyXG4gIGNvbnN0IGxvY2F0aW9uSGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcclxuICBsb2NhdGlvbkhlYWRpbmcuY2xhc3NMaXN0LmFkZChcImxvY2F0aW9uSGVhZGluZ1wiKTtcclxuICBsb2NhdGlvbkhlYWRpbmcudGV4dENvbnRlbnQgPSBgJHt3ZWF0aGVyRGV0YWlscy5sb2NhdGlvbi5uYW1lfSwgJHt3ZWF0aGVyRGV0YWlscy5sb2NhdGlvbi5jb3VudHJ5fWA7XHJcblxyXG4gIGNvbnN0IHdlYXRoZXJDb25kaXRpb25UZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICB3ZWF0aGVyQ29uZGl0aW9uVGV4dC5jbGFzc0xpc3QuYWRkKFwid2VhdGhlckNvbmRpdGlvblRleHRcIik7XHJcbiAgd2VhdGhlckNvbmRpdGlvblRleHQudGV4dENvbnRlbnQgPSB3ZWF0aGVyRGV0YWlscy5jdXJyZW50LmNvbmRpdGlvbi50ZXh0O1xyXG5cclxuICBjb25zdCB0ZW1wZXJhdHVyZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgdGVtcGVyYXR1cmUuY2xhc3NMaXN0LmFkZChcInRlbXBlcmF0dXJlXCIpO1xyXG4gIHRlbXBlcmF0dXJlLnNldEF0dHJpYnV0ZShcImlkXCIsIFwidGVtcGVyYXR1cmVcIik7XHJcblxyXG4gIGNvbnN0IGZlZWxzTGlrZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgZmVlbHNMaWtlLmNsYXNzTGlzdC5hZGQoXCJmZWVsc0xpa2VcIik7XHJcbiAgZmVlbHNMaWtlLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiZmVlbHNMaWtlXCIpO1xyXG4gIGZlZWxzTGlrZS5jbGFzc0xpc3QuYWRkKFwibW9yZVdlYXRoZXJEZXRhaWxzXCIpO1xyXG5cclxuICBjb25zdCB3aW5kID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICB3aW5kLmNsYXNzTGlzdC5hZGQoXCJtb3JlV2VhdGhlckRldGFpbHNcIik7XHJcbiAgd2luZC50ZXh0Q29udGVudCA9IGBXaW5kIDogJHt3ZWF0aGVyRGV0YWlscy5jdXJyZW50LndpbmRfbXBofSBNUEhgO1xyXG5cclxuICBjb25zdCBodW1pZGl0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgaHVtaWRpdHkuY2xhc3NMaXN0LmFkZChcIm1vcmVXZWF0aGVyRGV0YWlsc1wiKTtcclxuICBodW1pZGl0eS50ZXh0Q29udGVudCA9IGBIdW1pZGl0eSA6ICR7d2VhdGhlckRldGFpbHMuY3VycmVudC5odW1pZGl0eX0lYDtcclxuICBjb25zdCB1bml0U3RhdHVzID0gdG9nZ2xlVW5pdEJ0bi5nZXRBdHRyaWJ1dGUoXCJkYXRhLXN0YXR1c1wiKTtcclxuICBpZiAodW5pdFN0YXR1cyA9PT0gXCJjZWxjaXVzXCIpIHtcclxuICAgIHRlbXBlcmF0dXJlLnRleHRDb250ZW50ID0gYCR7d2VhdGhlckRldGFpbHMuY3VycmVudC50ZW1wX2N9XFx1MDBCMENgO1xyXG4gICAgZmVlbHNMaWtlLnRleHRDb250ZW50ID0gYEZlZWxzIGxpa2UgJHt3ZWF0aGVyRGV0YWlscy5jdXJyZW50LmZlZWxzbGlrZV9jfVxcdTAwQjBDYDtcclxuICB9IGVsc2Uge1xyXG4gICAgdGVtcGVyYXR1cmUudGV4dENvbnRlbnQgPSBgJHt3ZWF0aGVyRGV0YWlscy5jdXJyZW50LnRlbXBfZn1cXHUwMEIwRmA7XHJcbiAgICBmZWVsc0xpa2UudGV4dENvbnRlbnQgPSBgRmVlbHMgbGlrZSAke3dlYXRoZXJEZXRhaWxzLmN1cnJlbnQuZmVlbHNsaWtlX2Z9XFx1MDBCMEZgO1xyXG4gIH1cclxuXHJcbiAgY29uc3Qgd2VhdGhlckNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIHdlYXRoZXJDb250ZW50LmNsYXNzTGlzdC5hZGQoXCJ3ZWF0aGVyQ29udGVudFwiKTtcclxuICB3ZWF0aGVyQ29udGVudC5hcHBlbmRDaGlsZCh0ZW1wZXJhdHVyZSk7XHJcbiAgY29uc3QgbW9yZVdlYXRoZXJEZXRlaWxzRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuXHJcbiAgbW9yZVdlYXRoZXJEZXRlaWxzRGl2LmNsYXNzTGlzdC5hZGQoXCJtb3JlV2VhdGhlckRldGFpbHNEaXZcIik7XHJcbiAgbW9yZVdlYXRoZXJEZXRlaWxzRGl2LmFwcGVuZENoaWxkKGZlZWxzTGlrZSk7XHJcbiAgbW9yZVdlYXRoZXJEZXRlaWxzRGl2LmFwcGVuZENoaWxkKHdpbmQpO1xyXG4gIG1vcmVXZWF0aGVyRGV0ZWlsc0Rpdi5hcHBlbmRDaGlsZChodW1pZGl0eSk7XHJcblxyXG4gIHdlYXRoZXJDb250ZW50LmFwcGVuZENoaWxkKG1vcmVXZWF0aGVyRGV0ZWlsc0Rpdik7XHJcblxyXG4gIHdlYXRoZXJEaXYuYXBwZW5kQ2hpbGQobG9jYXRpb25IZWFkaW5nKTtcclxuICB3ZWF0aGVyRGl2LmFwcGVuZENoaWxkKHdlYXRoZXJDb25kaXRpb25UZXh0KTtcclxuICB3ZWF0aGVyRGl2LmFwcGVuZENoaWxkKHdlYXRoZXJDb250ZW50KTtcclxuICB0b2dnbGVVbml0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICB0b2dnbGVUZW1wZXJhdHVyZVVuaXRzKHdlYXRoZXJEZXRhaWxzLCB0b2dnbGVVbml0QnRuKTtcclxuICB9KTtcclxuXHJcbiAgY29uc3Qgd2VhdGhlckltZyA9IG5ldyBJbWFnZSgpO1xyXG4gIHdlYXRoZXJJbWcuc3JjID0gd2VhdGhlckRldGFpbHMuY3VycmVudC5jb25kaXRpb24uaWNvbjtcclxuICB3ZWF0aGVySW1nLmNsYXNzTGlzdC5hZGQoXCJ3ZWF0aGVySW1nXCIpO1xyXG4gIHdlYXRoZXJEaXYuYXBwZW5kQ2hpbGQod2VhdGhlckltZyk7XHJcbiAgd2VhdGhlckRpdi5hcHBlbmRDaGlsZCh0b2dnbGVVbml0QnRuKTtcclxuICBjb250ZW50RGl2LmFwcGVuZENoaWxkKHdlYXRoZXJEaXYpO1xyXG59XHJcblxyXG5mdW5jdGlvbiB0b2dnbGVUZW1wZXJhdHVyZVVuaXRzKHdlYXRoZXJEZXRhaWxzLCB0b2dnbGVVbml0QnRuKSB7XHJcbiAgY29uc3QgdGVtcGVyYXR1cmUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRlbXBlcmF0dXJlXCIpO1xyXG4gIGNvbnN0IGZlZWxzTGlrZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZmVlbHNMaWtlXCIpO1xyXG5cclxuICBjb25zdCB3ZWF0aGVyRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ3ZWF0aGVyRGl2XCIpO1xyXG5cclxuICBpZiAodG9nZ2xlVW5pdEJ0bi5nZXRBdHRyaWJ1dGUoXCJkYXRhLXN0YXR1c1wiKSA9PT0gXCJjZWxjaXVzXCIpIHtcclxuICAgIHRvZ2dsZVVuaXRCdG4uc2V0QXR0cmlidXRlKFwiZGF0YS1zdGF0dXNcIiwgXCJmYXJlbmhlaXRcIik7XHJcbiAgICB0b2dnbGVVbml0QnRuLnRleHRDb250ZW50ID0gXCJcXHUwMEIwRlwiO1xyXG5cclxuICAgIHRlbXBlcmF0dXJlLnRleHRDb250ZW50ID0gYCR7d2VhdGhlckRldGFpbHMuY3VycmVudC50ZW1wX2Z9XFx1MDBCMEZgO1xyXG4gICAgZmVlbHNMaWtlLnRleHRDb250ZW50ID0gYEZlZWxzIGxpa2UgJHt3ZWF0aGVyRGV0YWlscy5jdXJyZW50LmZlZWxzbGlrZV9mfVxcdTAwQjBGYDtcclxuICB9IGVsc2Uge1xyXG4gICAgdG9nZ2xlVW5pdEJ0bi5zZXRBdHRyaWJ1dGUoXCJkYXRhLXN0YXR1c1wiLCBcImNlbGNpdXNcIik7XHJcbiAgICB0b2dnbGVVbml0QnRuLnRleHRDb250ZW50ID0gXCJcXHUwMEIwQ1wiO1xyXG5cclxuICAgIHRlbXBlcmF0dXJlLnRleHRDb250ZW50ID0gYCR7d2VhdGhlckRldGFpbHMuY3VycmVudC50ZW1wX2N9XFx1MDBCMENgO1xyXG4gICAgZmVlbHNMaWtlLnRleHRDb250ZW50ID0gYEZlZWxzIGxpa2UgJHt3ZWF0aGVyRGV0YWlscy5jdXJyZW50LmZlZWxzbGlrZV9jfVxcdTAwQjBDYDtcclxuICB9XHJcbn1cclxuIiwiZXhwb3J0IHsgZ2V0Q3VycmVudFdlYXRoZXIsIGdldExvY2F0aW9uIH07XHJcbmFzeW5jIGZ1bmN0aW9uIGdldExvY2F0aW9uKGxvY2F0aW9uKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlc3BvbnNlTG9jYXRpb25zID0gYXdhaXQgZmV0Y2goXHJcbiAgICAgIGBodHRwczovL2FwaS53ZWF0aGVyYXBpLmNvbS92MS9zZWFyY2guanNvbj9rZXk9OTdlZTk4ZDI1YjZlNGMzYzliYjE1MzQwMTIzMjQwNyZxPSR7bG9jYXRpb259YFxyXG4gICAgKTtcclxuICAgIGNvbnN0IHJlc3VsdExvY2F0aW9ucyA9IGF3YWl0IHJlc3BvbnNlTG9jYXRpb25zLmpzb24oKTtcclxuICAgIHJldHVybiByZXN1bHRMb2NhdGlvbnM7XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnN0IGVycm9yTXNnID0gYENhbm5vdCByZXRyaWV2ZSBsb2NhdGlvbnMgOiAke2Vycm9yfWA7XHJcbiAgICBjb25zb2xlLmVycm9yKGVycm9yTXNnKTtcclxuICAgIHJldHVybiBlcnJvck1zZztcclxuICB9XHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGdldEN1cnJlbnRXZWF0aGVyKGxvY2F0aW9uKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IGN1cnJlbnRXZWF0aGVyUmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcclxuICAgICAgYGh0dHBzOi8vYXBpLndlYXRoZXJhcGkuY29tL3YxL2ZvcmVjYXN0Lmpzb24/a2V5PTk3ZWU5OGQyNWI2ZTRjM2M5YmIxNTM0MDEyMzI0MDcmcT0ke2xvY2F0aW9ufSZkYXlzPTNgXHJcbiAgICApO1xyXG4gICAgY29uc3QgY3VycmVudFdlYXRoZXJSZXN1bHQgPSBhd2FpdCBjdXJyZW50V2VhdGhlclJlc3BvbnNlLmpzb24oKTtcclxuICAgIHJldHVybiBjdXJyZW50V2VhdGhlclJlc3VsdDtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc3QgZXJyb3JNc2cgPSBgQ2Fubm90IHJldHJpZXZlIFdlYXRoZXIgRGV0YWlscyA6ICR7ZXJyb3J9YDtcclxuICAgIGNvbnNvbGUuZXJyb3IoZXJyb3JNc2cpO1xyXG4gICAgcmV0dXJuIGVycm9yTXNnO1xyXG4gIH1cclxufVxyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICFzY3JpcHRVcmwpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XHJcbmltcG9ydCB7IGdldEN1cnJlbnRXZWF0aGVyLCBnZXRMb2NhdGlvbiB9IGZyb20gXCIuL3VwZGF0ZVdlYXRoZXJcIjtcclxuaW1wb3J0IHsgY3JlYXRlSG9tZVBhZ2UsIHBvcHVsYXRlU3VnZ2VzdGlvbkxpc3QsIGdldFdlYXRoZXIgfSBmcm9tIFwiLi9ob21lcGFnZVwiO1xyXG5cclxuY3JlYXRlSG9tZVBhZ2UoKTtcclxucG9wdWxhdGVTdWdnZXN0aW9uTGlzdCgpO1xyXG5nZXRXZWF0aGVyKCk7XHJcblxyXG4vKiBjb25zdCBhID0gYXdhaXQgZ2V0TG9jYXRpb24oXCJwYXJpc1wiKTtcclxuY29uc29sZS5sb2coYSk7XHJcbmNvbnN0IGIgPSBhd2FpdCBnZXRDdXJyZW50V2VhdGhlcihhWzBdKTtcclxuY29uc29sZS5sb2coYik7XHJcbmNvbnNvbGUubG9nKFwiSGlcIik7ICovXHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==