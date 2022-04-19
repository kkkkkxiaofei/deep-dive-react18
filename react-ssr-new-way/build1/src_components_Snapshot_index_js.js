"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(globalThis["webpackChunkreact_ssr_new_way"] = globalThis["webpackChunkreact_ssr_new_way"] || []).push([["src_components_Snapshot_index_js"],{

/***/ "./src/api/index.js":
/*!**************************!*\
  !*** ./src/api/index.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getMetrics\": () => (/* binding */ getMetrics),\n/* harmony export */   \"getRepo\": () => (/* binding */ getRepo),\n/* harmony export */   \"getRepos\": () => (/* binding */ getRepos)\n/* harmony export */ });\nconst getRepo = name => fetch(`/api/repos/${name}`).then(res => res.json());\nconst getRepos = () => fetch(\"/api/repos\").then(res => res.json());\nconst getMetrics = () => fetch(\"/api/metrics\").then(res => res.json());\n\n//# sourceURL=webpack://react-ssr-new-way/./src/api/index.js?");

/***/ }),

/***/ "./src/components/Snapshot/index.js":
/*!******************************************!*\
  !*** ./src/components/Snapshot/index.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _hook__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../hook */ \"./src/hook/index.js\");\n/* harmony import */ var _shared_Container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/Container */ \"./src/shared/Container/index.js\");\n/* harmony import */ var _Snapshot_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Snapshot.scss */ \"./src/components/Snapshot/Snapshot.scss\");\n\n\n\n\n\nconst Snapshot = () => {\n  const metrics = (0,_hook__WEBPACK_IMPORTED_MODULE_1__.useData)(\"metrics\");\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_shared_Container__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    title: \"Snapshot\",\n    className: \"snapshot\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"metricContainer\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"metricItem\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", null, \"Watchers:\", metrics.watchers)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"metricItem\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", null, \"Forks:\", metrics.forks)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"metricItem\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", null, \"Issues:\", metrics.issues))));\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Snapshot);\n\n//# sourceURL=webpack://react-ssr-new-way/./src/components/Snapshot/index.js?");

/***/ }),

/***/ "./src/hook/index.js":
/*!***************************!*\
  !*** ./src/hook/index.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"useData\": () => (/* binding */ useData),\n/* harmony export */   \"useFetch\": () => (/* binding */ useFetch)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../api */ \"./src/api/index.js\");\n/* harmony import */ var _context_DataContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../context/DataContext */ \"./src/context/DataContext.js\");\n\n\n\nconst useData = fetchKey => {\n  const ctx = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_context_DataContext__WEBPACK_IMPORTED_MODULE_2__.DataContext);\n\n  if (ctx) {\n    ctx[fetchKey].read();\n  }\n\n  return [];\n};\nconst useFetch = fetchCall => {\n  const [state, setState] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({\n    isPending: null,\n    data: null\n  });\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {\n    setState({ ...state,\n      isPending: true\n    });\n    fetchCall().then(data => {\n      setState({\n        data,\n        isPending: false\n      });\n    }).catch(console.error);\n  }, [fetchCall]);\n  return state;\n};\n\n//# sourceURL=webpack://react-ssr-new-way/./src/hook/index.js?");

/***/ }),

/***/ "./src/shared/Container/index.js":
/*!***************************************!*\
  !*** ./src/shared/Container/index.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Container_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Container.scss */ \"./src/shared/Container/Container.scss\");\n\n\n\nconst Container = _ref => {\n  let {\n    title,\n    className,\n    icon,\n    children\n  } = _ref;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: `container ${className}`\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"header\"\n  }, icon && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"img\", {\n    src: icon,\n    className: \"logo\",\n    alt: \"logo\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h1\", {\n    className: \"title\"\n  }, title)), children);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Container);\n\n//# sourceURL=webpack://react-ssr-new-way/./src/shared/Container/index.js?");

/***/ }),

/***/ "./src/components/Snapshot/Snapshot.scss":
/*!***********************************************!*\
  !*** ./src/components/Snapshot/Snapshot.scss ***!
  \***********************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \".metricContainer {\\n  display: flex;\\n  width: 50%;\\n}\\n.metricContainer .metricItem {\\n  text-align: center;\\n  border: 1px solid #cccccc;\\n  flex: 1;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://react-ssr-new-way/./src/components/Snapshot/Snapshot.scss?");

/***/ }),

/***/ "./src/shared/Container/Container.scss":
/*!*********************************************!*\
  !*** ./src/shared/Container/Container.scss ***!
  \*********************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \".container {\\n  padding: 10px;\\n}\\n.container .header {\\n  display: flex;\\n  align-items: center;\\n}\\n.container .header img {\\n  width: 40px;\\n}\\n.container .header .title {\\n  flex: 1;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://react-ssr-new-way/./src/shared/Container/Container.scss?");

/***/ })

}]);