"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.jsx":
/*!*************************!*\
  !*** ./pages/index.jsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_PromptBox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/PromptBox */ \"./components/PromptBox.tsx\");\n/* harmony import */ var _components_RenderScreen__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/RenderScreen */ \"./components/RenderScreen.jsx\");\n/* harmony import */ var _components_CodeEditor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/CodeEditor */ \"./components/CodeEditor.jsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction Home() {\n    _s();\n    const [code, setCode] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(\"\");\n    const handleCode = (newCode)=>{\n        setCode(newCode);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Flux Frame\"\n                    }, void 0, false, {\n                        fileName: \"/home/anushka/Desktop/S5/course/se/project/fluxframe/pages/index.jsx\",\n                        lineNumber: 18,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"AI web developer\"\n                    }, void 0, false, {\n                        fileName: \"/home/anushka/Desktop/S5/course/se/project/fluxframe/pages/index.jsx\",\n                        lineNumber: 19,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.ico\"\n                    }, void 0, false, {\n                        fileName: \"/home/anushka/Desktop/S5/course/se/project/fluxframe/pages/index.jsx\",\n                        lineNumber: 20,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/anushka/Desktop/S5/course/se/project/fluxframe/pages/index.jsx\",\n                lineNumber: 17,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"grid grid-cols-6 h-screen\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"col-span-4 h-screen\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_RenderScreen__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                                        fileName: \"/home/anushka/Desktop/S5/course/se/project/fluxframe/pages/index.jsx\",\n                                        lineNumber: 27,\n                                        columnNumber: 23\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/home/anushka/Desktop/S5/course/se/project/fluxframe/pages/index.jsx\",\n                                    lineNumber: 26,\n                                    columnNumber: 19\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"col-span-2\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_CodeEditor__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                        onChange: handleCode,\n                                        code: code\n                                    }, void 0, false, {\n                                        fileName: \"/home/anushka/Desktop/S5/course/se/project/fluxframe/pages/index.jsx\",\n                                        lineNumber: 30,\n                                        columnNumber: 23\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/home/anushka/Desktop/S5/course/se/project/fluxframe/pages/index.jsx\",\n                                    lineNumber: 29,\n                                    columnNumber: 19\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/anushka/Desktop/S5/course/se/project/fluxframe/pages/index.jsx\",\n                            lineNumber: 25,\n                            columnNumber: 15\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"absolute bottom-0 w-screen \",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_PromptBox__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                                fileName: \"/home/anushka/Desktop/S5/course/se/project/fluxframe/pages/index.jsx\",\n                                lineNumber: 34,\n                                columnNumber: 21\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/home/anushka/Desktop/S5/course/se/project/fluxframe/pages/index.jsx\",\n                            lineNumber: 33,\n                            columnNumber: 15\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/anushka/Desktop/S5/course/se/project/fluxframe/pages/index.jsx\",\n                    lineNumber: 24,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/anushka/Desktop/S5/course/se/project/fluxframe/pages/index.jsx\",\n                lineNumber: 23,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/anushka/Desktop/S5/course/se/project/fluxframe/pages/index.jsx\",\n        lineNumber: 16,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"IyWYJSZmPOQ025EjfLsvo6LmHmg=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQTRCO0FBQ29CO0FBQ007QUFDSjtBQUNuQjtBQUdoQixTQUFTSzs7SUFDcEIsTUFBTSxDQUFDQyxNQUFNQyxRQUFRLEdBQUdILCtDQUFRQSxDQUFDO0lBRWpDLE1BQU1JLGFBQWEsQ0FBQ0M7UUFDaEJGLFFBQVFFO0lBQ1o7SUFFRixxQkFDRSw4REFBQ0M7OzBCQUNDLDhEQUFDVixrREFBSUE7O2tDQUNILDhEQUFDVztrQ0FBTTs7Ozs7O2tDQUNQLDhEQUFDQzt3QkFBS0MsTUFBSzt3QkFBY0MsU0FBUTs7Ozs7O2tDQUNqQyw4REFBQ0M7d0JBQUtDLEtBQUk7d0JBQU9DLE1BQUs7Ozs7Ozs7Ozs7OzswQkFHeEIsOERBQUNDOzBCQUNHLDRFQUFDUjs7c0NBQ0csOERBQUNBOzRCQUFJUyxXQUFVOzs4Q0FDWCw4REFBQ1Q7b0NBQUlTLFdBQVU7OENBQ1gsNEVBQUNqQixnRUFBWUE7Ozs7Ozs7Ozs7OENBRWpCLDhEQUFDUTtvQ0FBSVMsV0FBVTs4Q0FDWCw0RUFBQ2hCLDhEQUFVQTt3Q0FBQ2lCLFVBQVVaO3dDQUFZRixNQUFNQTs7Ozs7Ozs7Ozs7Ozs7Ozs7c0NBR2hELDhEQUFDSTs0QkFBSVMsV0FBVTtzQ0FDVCw0RUFBQ2xCLDZEQUFTQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTTlCO0dBaEN3Qkk7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanN4PzdmZmQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IFByb21wdEJveCBmcm9tIFwiLi4vY29tcG9uZW50cy9Qcm9tcHRCb3hcIjtcbmltcG9ydCBSZW5kZXJTY3JlZW4gZnJvbSBcIi4uL2NvbXBvbmVudHMvUmVuZGVyU2NyZWVuXCI7XG5pbXBvcnQgQ29kZUVkaXRvciBmcm9tIFwiLi4vY29tcG9uZW50cy9Db2RlRWRpdG9yXCI7XG5pbXBvcnQge3VzZVN0YXRlfSBmcm9tIFwicmVhY3RcIjtcblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICAgIGNvbnN0IFtjb2RlLCBzZXRDb2RlXSA9IHVzZVN0YXRlKFwiXCIpO1xuXG4gICAgY29uc3QgaGFuZGxlQ29kZSA9IChuZXdDb2RlKSA9PiB7XG4gICAgICAgIHNldENvZGUobmV3Q29kZSk7XG4gICAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+Rmx1eCBGcmFtZTwvdGl0bGU+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9XCJBSSB3ZWIgZGV2ZWxvcGVyXCIgLz5cbiAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5pY29cIiAvPlxuICAgICAgPC9IZWFkPlxuXG4gICAgICA8bWFpbj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTYgaC1zY3JlZW5cIj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNwYW4tNCBoLXNjcmVlblwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxSZW5kZXJTY3JlZW4gLz5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc3Bhbi0yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPENvZGVFZGl0b3Igb25DaGFuZ2U9e2hhbmRsZUNvZGV9IGNvZGU9e2NvZGV9IC8+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgYm90dG9tLTAgdy1zY3JlZW4gXCI+XG4gICAgICAgICAgICAgICAgICAgIDxQcm9tcHRCb3ggLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICA8L21haW4+XG4gICAgPC9kaXY+XG4gIClcbn1cbiJdLCJuYW1lcyI6WyJIZWFkIiwiUHJvbXB0Qm94IiwiUmVuZGVyU2NyZWVuIiwiQ29kZUVkaXRvciIsInVzZVN0YXRlIiwiSG9tZSIsImNvZGUiLCJzZXRDb2RlIiwiaGFuZGxlQ29kZSIsIm5ld0NvZGUiLCJkaXYiLCJ0aXRsZSIsIm1ldGEiLCJuYW1lIiwiY29udGVudCIsImxpbmsiLCJyZWwiLCJocmVmIiwibWFpbiIsImNsYXNzTmFtZSIsIm9uQ2hhbmdlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.jsx\n"));

/***/ })

});