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

/***/ "./src/app/components/ai-career-guide/index.js":
/*!*****************************************************!*\
  !*** ./src/app/components/ai-career-guide/index.js ***!
  \*****************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles.module.css */ \"./src/app/components/ai-career-guide/styles.module.css\");\n/* harmony import */ var _styles_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_module_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _TypingAnimation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TypingAnimation */ \"./src/app/components/ai-career-guide/TypingAnimation.js\");\n/* harmony import */ var _markdownRenderer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./markdownRenderer */ \"./src/app/components/ai-career-guide/markdownRenderer.js\");\n/* harmony import */ var _InputSection__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./InputSection */ \"./src/app/components/ai-career-guide/InputSection.js\");\n/* harmony import */ var _DotsNavigation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./DotsNavigation */ \"./src/app/components/ai-career-guide/DotsNavigation.js\");\n/* harmony import */ var _VersionInfo__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./VersionInfo */ \"./src/app/components/ai-career-guide/VersionInfo.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nconst AICareerGuide = ()=>{\n    _s();\n    const [topic, setTopic] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');\n    const [messages, setMessages] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [currentProcessing, setCurrentProcessing] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const messagesContainerRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const suggestions = [\n        {\n            text: \"Desenvolvimento pessoal\",\n            color: \"orange\"\n        },\n        {\n            text: \"UI para mobile\",\n            color: \"pink\"\n        },\n        {\n            text: \"InVision\",\n            color: \"blue\"\n        },\n        {\n            text: \"Priorização\",\n            color: \"red\"\n        },\n        {\n            text: \"Testes A/B\",\n            color: \"yellow\"\n        }\n    ];\n    const handleInputChange = (e)=>{\n        setTopic(e.target.value);\n    };\n    const handleSubmit = (e)=>{\n        e.preventDefault();\n        generateContent();\n    };\n    const handleSuggestionClick = (suggestion)=>{\n        setTopic(suggestion);\n        generateContent();\n    };\n    const generateContent = async ()=>{\n        if (!topic.trim()) return;\n        setCurrentProcessing({\n            question: topic,\n            state: 'thinking'\n        });\n        try {\n            const response = await fetch('/api/generate-content', {\n                method: 'POST',\n                headers: {\n                    'Content-Type': 'application/json'\n                },\n                body: JSON.stringify({\n                    topic\n                })\n            });\n            if (!response.ok) {\n                throw new Error('Failed to generate content');\n            }\n            const data = await response.json();\n            setCurrentProcessing((prev)=>({\n                    ...prev,\n                    state: 'typing',\n                    answer: data.content\n                }));\n            setTopic('');\n        } catch (err) {\n            setError('Failed to generate content. Please try again.');\n            setCurrentProcessing(null);\n        }\n    };\n    const handleTypingComplete = ()=>{\n        if (currentProcessing) {\n            setMessages((prev)=>[\n                    ...prev,\n                    {\n                        answer: currentProcessing.answer\n                    }\n                ]);\n        }\n        setCurrentProcessing(null);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_2___default().container),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_2___default().title),\n                children: \"Vou te ajudar a acelerar sua carreira\"\n            }, void 0, false, {\n                fileName: \"/Users/luisarthurlobomeneses/Documents/geradorTexto/geradortexto/src/app/components/ai-career-guide/index.js\",\n                lineNumber: 85,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_2___default().subtitle),\n                children: \"Sendo na \\xe1rea de produtos digitais, conte comigo ツ\"\n            }, void 0, false, {\n                fileName: \"/Users/luisarthurlobomeneses/Documents/geradorTexto/geradortexto/src/app/components/ai-career-guide/index.js\",\n                lineNumber: 86,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                onSubmit: handleSubmit,\n                className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_2___default().searchContainer),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        value: topic,\n                        onChange: handleInputChange,\n                        placeholder: \"O que voc\\xea gostaria de aprender?\",\n                        className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_2___default().searchInput)\n                    }, void 0, false, {\n                        fileName: \"/Users/luisarthurlobomeneses/Documents/geradorTexto/geradortexto/src/app/components/ai-career-guide/index.js\",\n                        lineNumber: 89,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        type: \"submit\",\n                        className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_2___default().searchButton),\n                        children: \"Perguntar\"\n                    }, void 0, false, {\n                        fileName: \"/Users/luisarthurlobomeneses/Documents/geradorTexto/geradortexto/src/app/components/ai-career-guide/index.js\",\n                        lineNumber: 96,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/luisarthurlobomeneses/Documents/geradorTexto/geradortexto/src/app/components/ai-career-guide/index.js\",\n                lineNumber: 88,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_2___default().topicsContainer),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_2___default().topicsText),\n                        children: \"As perguntas mais comuns agora s\\xe3o\"\n                    }, void 0, false, {\n                        fileName: \"/Users/luisarthurlobomeneses/Documents/geradorTexto/geradortexto/src/app/components/ai-career-guide/index.js\",\n                        lineNumber: 102,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_2___default().topicTag),\n                        \"data-color\": \"orange\",\n                        onClick: ()=>handleSuggestionClick(\"Desenvolvimento pessoal\"),\n                        children: \"Desenvolvimento pessoal\"\n                    }, void 0, false, {\n                        fileName: \"/Users/luisarthurlobomeneses/Documents/geradorTexto/geradortexto/src/app/components/ai-career-guide/index.js\",\n                        lineNumber: 103,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_2___default().topicTag),\n                        \"data-color\": \"pink\",\n                        onClick: ()=>handleSuggestionClick(\"UI para mobile\"),\n                        children: \"UI para mobile\"\n                    }, void 0, false, {\n                        fileName: \"/Users/luisarthurlobomeneses/Documents/geradorTexto/geradortexto/src/app/components/ai-career-guide/index.js\",\n                        lineNumber: 110,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_2___default().topicConnector),\n                        children: \"e\"\n                    }, void 0, false, {\n                        fileName: \"/Users/luisarthurlobomeneses/Documents/geradorTexto/geradortexto/src/app/components/ai-career-guide/index.js\",\n                        lineNumber: 117,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_2___default().topicTag),\n                        \"data-color\": \"blue\",\n                        onClick: ()=>handleSuggestionClick(\"InVision\"),\n                        children: \"InVision\"\n                    }, void 0, false, {\n                        fileName: \"/Users/luisarthurlobomeneses/Documents/geradorTexto/geradortexto/src/app/components/ai-career-guide/index.js\",\n                        lineNumber: 118,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/luisarthurlobomeneses/Documents/geradorTexto/geradortexto/src/app/components/ai-career-guide/index.js\",\n                lineNumber: 101,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_2___default().messagesContainer),\n                ref: messagesContainerRef,\n                children: [\n                    messages.map((message, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_2___default().messageContainer),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"\".concat((_styles_module_css__WEBPACK_IMPORTED_MODULE_2___default().markdownContent), \" prose prose-xl dark:prose-invert max-w-none ai-text\"),\n                                children: (0,_markdownRenderer__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(message.answer)\n                            }, void 0, false, {\n                                fileName: \"/Users/luisarthurlobomeneses/Documents/geradorTexto/geradortexto/src/app/components/ai-career-guide/index.js\",\n                                lineNumber: 130,\n                                columnNumber: 13\n                            }, undefined)\n                        }, index, false, {\n                            fileName: \"/Users/luisarthurlobomeneses/Documents/geradorTexto/geradortexto/src/app/components/ai-career-guide/index.js\",\n                            lineNumber: 129,\n                            columnNumber: 11\n                        }, undefined)),\n                    currentProcessing && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_2___default().messageContainer),\n                        children: currentProcessing.state === 'thinking' ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_2___default().thinkingState),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_2___default().thinkingDots),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        children: \"Thinking\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/luisarthurlobomeneses/Documents/geradorTexto/geradortexto/src/app/components/ai-career-guide/index.js\",\n                                        lineNumber: 141,\n                                        columnNumber: 19\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_2___default().dot),\n                                        children: \".\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/luisarthurlobomeneses/Documents/geradorTexto/geradortexto/src/app/components/ai-career-guide/index.js\",\n                                        lineNumber: 142,\n                                        columnNumber: 19\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_2___default().dot),\n                                        children: \".\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/luisarthurlobomeneses/Documents/geradorTexto/geradortexto/src/app/components/ai-career-guide/index.js\",\n                                        lineNumber: 143,\n                                        columnNumber: 19\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_2___default().dot),\n                                        children: \".\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/luisarthurlobomeneses/Documents/geradorTexto/geradortexto/src/app/components/ai-career-guide/index.js\",\n                                        lineNumber: 144,\n                                        columnNumber: 19\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/luisarthurlobomeneses/Documents/geradorTexto/geradortexto/src/app/components/ai-career-guide/index.js\",\n                                lineNumber: 140,\n                                columnNumber: 17\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/luisarthurlobomeneses/Documents/geradorTexto/geradortexto/src/app/components/ai-career-guide/index.js\",\n                            lineNumber: 139,\n                            columnNumber: 15\n                        }, undefined) : currentProcessing.state === 'typing' ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"\".concat((_styles_module_css__WEBPACK_IMPORTED_MODULE_2___default().markdownContent), \" prose prose-xl dark:prose-invert max-w-none ai-text\"),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TypingAnimation__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                text: currentProcessing.answer,\n                                onComplete: handleTypingComplete\n                            }, void 0, false, {\n                                fileName: \"/Users/luisarthurlobomeneses/Documents/geradorTexto/geradortexto/src/app/components/ai-career-guide/index.js\",\n                                lineNumber: 149,\n                                columnNumber: 17\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/luisarthurlobomeneses/Documents/geradorTexto/geradortexto/src/app/components/ai-career-guide/index.js\",\n                            lineNumber: 148,\n                            columnNumber: 15\n                        }, undefined) : null\n                    }, void 0, false, {\n                        fileName: \"/Users/luisarthurlobomeneses/Documents/geradorTexto/geradortexto/src/app/components/ai-career-guide/index.js\",\n                        lineNumber: 137,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/luisarthurlobomeneses/Documents/geradorTexto/geradortexto/src/app/components/ai-career-guide/index.js\",\n                lineNumber: 127,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_DotsNavigation__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                messagesContainerRef: messagesContainerRef\n            }, void 0, false, {\n                fileName: \"/Users/luisarthurlobomeneses/Documents/geradorTexto/geradortexto/src/app/components/ai-career-guide/index.js\",\n                lineNumber: 158,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_VersionInfo__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/luisarthurlobomeneses/Documents/geradorTexto/geradortexto/src/app/components/ai-career-guide/index.js\",\n                lineNumber: 159,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/luisarthurlobomeneses/Documents/geradorTexto/geradortexto/src/app/components/ai-career-guide/index.js\",\n        lineNumber: 84,\n        columnNumber: 5\n    }, undefined);\n};\n_s(AICareerGuide, \"E0tmSkPzWOv7w8+q9euMAi6q5dE=\");\n_c = AICareerGuide;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AICareerGuide);\nvar _c;\n$RefreshReg$(_c, \"AICareerGuide\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYXBwL2NvbXBvbmVudHMvYWktY2FyZWVyLWd1aWRlL2luZGV4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBMkQ7QUFDbEI7QUFDTztBQUNBO0FBQ047QUFDSTtBQUNOO0FBRXhDLE1BQU1VLGdCQUFnQjs7SUFDcEIsTUFBTSxDQUFDQyxPQUFPQyxTQUFTLEdBQUdYLCtDQUFRQSxDQUFDO0lBQ25DLE1BQU0sQ0FBQ1ksVUFBVUMsWUFBWSxHQUFHYiwrQ0FBUUEsQ0FBQyxFQUFFO0lBQzNDLE1BQU0sQ0FBQ2MsbUJBQW1CQyxxQkFBcUIsR0FBR2YsK0NBQVFBLENBQUM7SUFDM0QsTUFBTSxDQUFDZ0IsT0FBT0MsU0FBUyxHQUFHakIsK0NBQVFBLENBQUM7SUFDbkMsTUFBTWtCLHVCQUF1QmpCLDZDQUFNQSxDQUFDO0lBRXBDLE1BQU1rQixjQUFjO1FBQ2xCO1lBQUVDLE1BQU07WUFBMkJDLE9BQU87UUFBUztRQUNuRDtZQUFFRCxNQUFNO1lBQWtCQyxPQUFPO1FBQU87UUFDeEM7WUFBRUQsTUFBTTtZQUFZQyxPQUFPO1FBQU87UUFDbEM7WUFBRUQsTUFBTTtZQUFlQyxPQUFPO1FBQU07UUFDcEM7WUFBRUQsTUFBTTtZQUFjQyxPQUFPO1FBQVM7S0FDdkM7SUFFRCxNQUFNQyxvQkFBb0IsQ0FBQ0M7UUFDekJaLFNBQVNZLEVBQUVDLE1BQU0sQ0FBQ0MsS0FBSztJQUN6QjtJQUVBLE1BQU1DLGVBQWUsQ0FBQ0g7UUFDcEJBLEVBQUVJLGNBQWM7UUFDaEJDO0lBQ0Y7SUFFQSxNQUFNQyx3QkFBd0IsQ0FBQ0M7UUFDN0JuQixTQUFTbUI7UUFDVEY7SUFDRjtJQUVBLE1BQU1BLGtCQUFrQjtRQUN0QixJQUFJLENBQUNsQixNQUFNcUIsSUFBSSxJQUFJO1FBRW5CaEIscUJBQXFCO1lBQ25CaUIsVUFBVXRCO1lBQ1Z1QixPQUFPO1FBQ1Q7UUFFQSxJQUFJO1lBQ0YsTUFBTUMsV0FBVyxNQUFNQyxNQUFNLHlCQUF5QjtnQkFDcERDLFFBQVE7Z0JB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OERBQUNpQjs0QkFBSUMsV0FBVyxHQUEwQixPQUF2QmhELDJFQUFzQixFQUFDO3NDQUN4Qyw0RUFBQ0Msd0RBQWVBO2dDQUNkZ0IsTUFBTU4sa0JBQWtCZ0MsTUFBTTtnQ0FDOUJzQyxZQUFZbkM7Ozs7Ozs7Ozs7d0NBR2Q7Ozs7Ozs7Ozs7OzswQkFJViw4REFBQzFDLHVEQUFjQTtnQkFBQ1csc0JBQXNCQTs7Ozs7OzBCQUN0Qyw4REFBQ1Ysb0RBQVdBOzs7Ozs7Ozs7OztBQUdsQjtHQXpKTUM7S0FBQUE7QUEySk4saUVBQWVBLGFBQWFBLEVBQUMiLCJzb3VyY2VzIjpbIi9Vc2Vycy9sdWlzYXJ0aHVybG9ib21lbmVzZXMvRG9jdW1lbnRzL2dlcmFkb3JUZXh0by9nZXJhZG9ydGV4dG8vc3JjL2FwcC9jb21wb25lbnRzL2FpLWNhcmVlci1ndWlkZS9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZVJlZiwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuL3N0eWxlcy5tb2R1bGUuY3NzJztcbmltcG9ydCBUeXBpbmdBbmltYXRpb24gZnJvbSAnLi9UeXBpbmdBbmltYXRpb24nO1xuaW1wb3J0IHJlbmRlck1hcmtkb3duIGZyb20gJy4vbWFya2Rvd25SZW5kZXJlcic7XG5pbXBvcnQgSW5wdXRTZWN0aW9uIGZyb20gJy4vSW5wdXRTZWN0aW9uJztcbmltcG9ydCBEb3RzTmF2aWdhdGlvbiBmcm9tICcuL0RvdHNOYXZpZ2F0aW9uJztcbmltcG9ydCBWZXJzaW9uSW5mbyBmcm9tICcuL1ZlcnNpb25JbmZvJztcblxuY29uc3QgQUlDYXJlZXJHdWlkZSA9ICgpID0+IHtcbiAgY29uc3QgW3RvcGljLCBzZXRUb3BpY10gPSB1c2VTdGF0ZSgnJyk7XG4gIGNvbnN0IFttZXNzYWdlcywgc2V0TWVzc2FnZXNdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbY3VycmVudFByb2Nlc3NpbmcsIHNldEN1cnJlbnRQcm9jZXNzaW5nXSA9IHVzZVN0YXRlKG51bGwpO1xuICBjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlKG51bGwpO1xuICBjb25zdCBtZXNzYWdlc0NvbnRhaW5lclJlZiA9IHVzZVJlZihudWxsKTtcblxuICBjb25zdCBzdWdnZXN0aW9ucyA9IFtcbiAgICB7IHRleHQ6IFwiRGVzZW52b2x2aW1lbnRvIHBlc3NvYWxcIiwgY29sb3I6IFwib3JhbmdlXCIgfSxcbiAgICB7IHRleHQ6IFwiVUkgcGFyYSBtb2JpbGVcIiwgY29sb3I6IFwicGlua1wiIH0sXG4gICAgeyB0ZXh0OiBcIkluVmlzaW9uXCIsIGNvbG9yOiBcImJsdWVcIiB9LFxuICAgIHsgdGV4dDogXCJQcmlvcml6YcOnw6NvXCIsIGNvbG9yOiBcInJlZFwiIH0sXG4gICAgeyB0ZXh0OiBcIlRlc3RlcyBBL0JcIiwgY29sb3I6IFwieWVsbG93XCIgfVxuICBdO1xuXG4gIGNvbnN0IGhhbmRsZUlucHV0Q2hhbmdlID0gKGUpID0+IHtcbiAgICBzZXRUb3BpYyhlLnRhcmdldC52YWx1ZSk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgZ2VuZXJhdGVDb250ZW50KCk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlU3VnZ2VzdGlvbkNsaWNrID0gKHN1Z2dlc3Rpb24pID0+IHtcbiAgICBzZXRUb3BpYyhzdWdnZXN0aW9uKTtcbiAgICBnZW5lcmF0ZUNvbnRlbnQoKTtcbiAgfTtcblxuICBjb25zdCBnZW5lcmF0ZUNvbnRlbnQgPSBhc3luYyAoKSA9PiB7XG4gICAgaWYgKCF0b3BpYy50cmltKCkpIHJldHVybjtcbiAgICBcbiAgICBzZXRDdXJyZW50UHJvY2Vzc2luZyh7XG4gICAgICBxdWVzdGlvbjogdG9waWMsXG4gICAgICBzdGF0ZTogJ3RoaW5raW5nJ1xuICAgIH0pO1xuICAgIFxuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCcvYXBpL2dlbmVyYXRlLWNvbnRlbnQnLCB7XG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgfSxcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyB0b3BpYyB9KSxcbiAgICAgIH0pO1xuXG4gICAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignRmFpbGVkIHRvIGdlbmVyYXRlIGNvbnRlbnQnKTtcbiAgICAgIH1cblxuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgIFxuICAgICAgc2V0Q3VycmVudFByb2Nlc3NpbmcocHJldiA9PiAoe1xuICAgICAgICAuLi5wcmV2LFxuICAgICAgICBzdGF0ZTogJ3R5cGluZycsXG4gICAgICAgIGFuc3dlcjogZGF0YS5jb250ZW50XG4gICAgICB9KSk7XG5cbiAgICAgIHNldFRvcGljKCcnKTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHNldEVycm9yKCdGYWlsZWQgdG8gZ2VuZXJhdGUgY29udGVudC4gUGxlYXNlIHRyeSBhZ2Fpbi4nKTtcbiAgICAgIHNldEN1cnJlbnRQcm9jZXNzaW5nKG51bGwpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBoYW5kbGVUeXBpbmdDb21wbGV0ZSA9ICgpID0+IHtcbiAgICBpZiAoY3VycmVudFByb2Nlc3NpbmcpIHtcbiAgICAgIHNldE1lc3NhZ2VzKHByZXYgPT4gWy4uLnByZXYsIHtcbiAgICAgICAgYW5zd2VyOiBjdXJyZW50UHJvY2Vzc2luZy5hbnN3ZXJcbiAgICAgIH1dKTtcbiAgICB9XG4gICAgc2V0Q3VycmVudFByb2Nlc3NpbmcobnVsbCk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XG4gICAgICA8aDEgY2xhc3NOYW1lPXtzdHlsZXMudGl0bGV9PlZvdSB0ZSBhanVkYXIgYSBhY2VsZXJhciBzdWEgY2FycmVpcmE8L2gxPlxuICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMuc3VidGl0bGV9PlNlbmRvIG5hIMOhcmVhIGRlIHByb2R1dG9zIGRpZ2l0YWlzLCBjb250ZSBjb21pZ28g44OEPC9wPlxuICAgICAgXG4gICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fSBjbGFzc05hbWU9e3N0eWxlcy5zZWFyY2hDb250YWluZXJ9PlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgdmFsdWU9e3RvcGljfVxuICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVJbnB1dENoYW5nZX1cbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIk8gcXVlIHZvY8OqIGdvc3RhcmlhIGRlIGFwcmVuZGVyP1wiXG4gICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuc2VhcmNoSW5wdXR9XG4gICAgICAgIC8+XG4gICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzTmFtZT17c3R5bGVzLnNlYXJjaEJ1dHRvbn0+XG4gICAgICAgICAgUGVyZ3VudGFyXG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC9mb3JtPlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRvcGljc0NvbnRhaW5lcn0+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLnRvcGljc1RleHR9PkFzIHBlcmd1bnRhcyBtYWlzIGNvbXVucyBhZ29yYSBzw6NvPC9zcGFuPlxuICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMudG9waWNUYWd9XG4gICAgICAgICAgZGF0YS1jb2xvcj1cIm9yYW5nZVwiXG4gICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlU3VnZ2VzdGlvbkNsaWNrKFwiRGVzZW52b2x2aW1lbnRvIHBlc3NvYWxcIil9XG4gICAgICAgID5cbiAgICAgICAgICBEZXNlbnZvbHZpbWVudG8gcGVzc29hbFxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPGJ1dHRvblxuICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLnRvcGljVGFnfVxuICAgICAgICAgIGRhdGEtY29sb3I9XCJwaW5rXCJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVTdWdnZXN0aW9uQ2xpY2soXCJVSSBwYXJhIG1vYmlsZVwiKX1cbiAgICAgICAgPlxuICAgICAgICAgIFVJIHBhcmEgbW9iaWxlXG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy50b3BpY0Nvbm5lY3Rvcn0+ZTwvc3Bhbj5cbiAgICAgICAgPGJ1dHRvblxuICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLnRvcGljVGFnfVxuICAgICAgICAgIGRhdGEtY29sb3I9XCJibHVlXCJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVTdWdnZXN0aW9uQ2xpY2soXCJJblZpc2lvblwiKX1cbiAgICAgICAgPlxuICAgICAgICAgIEluVmlzaW9uXG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubWVzc2FnZXNDb250YWluZXJ9IHJlZj17bWVzc2FnZXNDb250YWluZXJSZWZ9PlxuICAgICAgICB7bWVzc2FnZXMubWFwKChtZXNzYWdlLCBpbmRleCkgPT4gKFxuICAgICAgICAgIDxkaXYga2V5PXtpbmRleH0gY2xhc3NOYW1lPXtzdHlsZXMubWVzc2FnZUNvbnRhaW5lcn0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7c3R5bGVzLm1hcmtkb3duQ29udGVudH0gcHJvc2UgcHJvc2UteGwgZGFyazpwcm9zZS1pbnZlcnQgbWF4LXctbm9uZSBhaS10ZXh0YH0+XG4gICAgICAgICAgICAgIHtyZW5kZXJNYXJrZG93bihtZXNzYWdlLmFuc3dlcil9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKSl9XG4gICAgICAgIFxuICAgICAgICB7Y3VycmVudFByb2Nlc3NpbmcgJiYgKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubWVzc2FnZUNvbnRhaW5lcn0+XG4gICAgICAgICAgICB7Y3VycmVudFByb2Nlc3Npbmcuc3RhdGUgPT09ICd0aGlua2luZycgPyAoXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudGhpbmtpbmdTdGF0ZX0+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50aGlua2luZ0RvdHN9PlxuICAgICAgICAgICAgICAgICAgPHNwYW4+VGhpbmtpbmc8L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5kb3R9Pi48L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5kb3R9Pi48L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5kb3R9Pi48L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKSA6IGN1cnJlbnRQcm9jZXNzaW5nLnN0YXRlID09PSAndHlwaW5nJyA/IChcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake3N0eWxlcy5tYXJrZG93bkNvbnRlbnR9IHByb3NlIHByb3NlLXhsIGRhcms6cHJvc2UtaW52ZXJ0IG1heC13LW5vbmUgYWktdGV4dGB9PlxuICAgICAgICAgICAgICAgIDxUeXBpbmdBbmltYXRpb24gXG4gICAgICAgICAgICAgICAgICB0ZXh0PXtjdXJyZW50UHJvY2Vzc2luZy5hbnN3ZXJ9XG4gICAgICAgICAgICAgICAgICBvbkNvbXBsZXRlPXtoYW5kbGVUeXBpbmdDb21wbGV0ZX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApfVxuICAgICAgPC9kaXY+XG4gICAgICA8RG90c05hdmlnYXRpb24gbWVzc2FnZXNDb250YWluZXJSZWY9e21lc3NhZ2VzQ29udGFpbmVyUmVmfSAvPlxuICAgICAgPFZlcnNpb25JbmZvIC8+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBBSUNhcmVlckd1aWRlO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VSZWYiLCJ1c2VFZmZlY3QiLCJzdHlsZXMiLCJUeXBpbmdBbmltYXRpb24iLCJyZW5kZXJNYXJrZG93biIsIklucHV0U2VjdGlvbiIsIkRvdHNOYXZpZ2F0aW9uIiwiVmVyc2lvbkluZm8iLCJBSUNhcmVlckd1aWRlIiwidG9waWMiLCJzZXRUb3BpYyIsIm1lc3NhZ2VzIiwic2V0TWVzc2FnZXMiLCJjdXJyZW50UHJvY2Vzc2luZyIsInNldEN1cnJlbnRQcm9jZXNzaW5nIiwiZXJyb3IiLCJzZXRFcnJvciIsIm1lc3NhZ2VzQ29udGFpbmVyUmVmIiwic3VnZ2VzdGlvbnMiLCJ0ZXh0IiwiY29sb3IiLCJoYW5kbGVJbnB1dENoYW5nZSIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsImhhbmRsZVN1Ym1pdCIsInByZXZlbnREZWZhdWx0IiwiZ2VuZXJhdGVDb250ZW50IiwiaGFuZGxlU3VnZ2VzdGlvbkNsaWNrIiwic3VnZ2VzdGlvbiIsInRyaW0iLCJxdWVzdGlvbiIsInN0YXRlIiwicmVzcG9uc2UiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsIm9rIiwiRXJyb3IiLCJkYXRhIiwianNvbiIsInByZXYiLCJhbnN3ZXIiLCJjb250ZW50IiwiZXJyIiwiaGFuZGxlVHlwaW5nQ29tcGxldGUiLCJkaXYiLCJjbGFzc05hbWUiLCJjb250YWluZXIiLCJoMSIsInRpdGxlIiwicCIsInN1YnRpdGxlIiwiZm9ybSIsIm9uU3VibWl0Iiwic2VhcmNoQ29udGFpbmVyIiwiaW5wdXQiLCJ0eXBlIiwib25DaGFuZ2UiLCJwbGFjZWhvbGRlciIsInNlYXJjaElucHV0IiwiYnV0dG9uIiwic2VhcmNoQnV0dG9uIiwidG9waWNzQ29udGFpbmVyIiwic3BhbiIsInRvcGljc1RleHQiLCJ0b3BpY1RhZyIsImRhdGEtY29sb3IiLCJvbkNsaWNrIiwidG9waWNDb25uZWN0b3IiLCJtZXNzYWdlc0NvbnRhaW5lciIsInJlZiIsIm1hcCIsIm1lc3NhZ2UiLCJpbmRleCIsIm1lc3NhZ2VDb250YWluZXIiLCJtYXJrZG93bkNvbnRlbnQiLCJ0aGlua2luZ1N0YXRlIiwidGhpbmtpbmdEb3RzIiwiZG90Iiwib25Db21wbGV0ZSJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/app/components/ai-career-guide/index.js\n"));

/***/ })

});