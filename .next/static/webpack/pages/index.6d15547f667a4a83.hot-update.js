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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles.module.css */ \"./src/app/components/ai-career-guide/styles.module.css\");\n/* harmony import */ var _styles_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_module_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _TypingAnimation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TypingAnimation */ \"./src/app/components/ai-career-guide/TypingAnimation.js\");\n/* harmony import */ var _markdownRenderer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./markdownRenderer */ \"./src/app/components/ai-career-guide/markdownRenderer.js\");\n/* harmony import */ var _InputSection__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./InputSection */ \"./src/app/components/ai-career-guide/InputSection.js\");\n/* harmony import */ var _DotsNavigation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./DotsNavigation */ \"./src/app/components/ai-career-guide/DotsNavigation.js\");\n/* harmony import */ var _VersionInfo__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./VersionInfo */ \"./src/app/components/ai-career-guide/VersionInfo.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nconst AICareerGuide = ()=>{\n    _s();\n    const [topic, setTopic] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');\n    const [messages, setMessages] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [currentProcessing, setCurrentProcessing] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const messagesContainerRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const suggestions = [\n        {\n            text: \"Desenvolvimento pessoal\",\n            color: \"orange\"\n        },\n        {\n            text: \"UI para mobile\",\n            color: \"pink\"\n        },\n        {\n            text: \"InVision\",\n            color: \"blue\"\n        },\n        {\n            text: \"Priorização\",\n            color: \"red\"\n        },\n        {\n            text: \"Testes A/B\",\n            color: \"yellow\"\n        }\n    ];\n    const handleInputChange = (e)=>{\n        setTopic(e.target.value);\n    };\n    const handleSubmit = (e)=>{\n        e.preventDefault();\n        generateContent();\n    };\n    const handleSuggestionClick = (suggestion)=>{\n        setTopic(suggestion);\n        generateContent();\n    };\n    const generateContent = async ()=>{\n        if (!topic.trim()) return;\n        setCurrentProcessing({\n            question: topic,\n            state: 'thinking'\n        });\n        try {\n            const response = await fetch('/api/generate-content', {\n                method: 'POST',\n                headers: {\n                    'Content-Type': 'application/json'\n                },\n                body: JSON.stringify({\n                    topic\n                })\n            });\n            if (!response.ok) {\n                throw new Error('Failed to generate content');\n            }\n            const data = await response.json();\n            setCurrentProcessing((prev)=>({\n                    ...prev,\n                    state: 'typing',\n                    answer: data.content\n                }));\n            setTopic('');\n        } catch (err) {\n            setError('Failed to generate content. Please try again.');\n            setCurrentProcessing(null);\n        }\n    };\n    const handleTypingComplete = ()=>{\n        if (currentProcessing) {\n            setMessages((prev)=>[\n                    ...prev,\n                    {\n                        answer: currentProcessing.answer\n                    }\n                ]);\n        }\n        setCurrentProcessing(null);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_2___default().container),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_2___default().title),\n                children: \"Vou te ajudar a acelerar sua carreira\"\n            }, void 0, false, {\n                fileName: \"/Users/luisarthurlobomeneses/Documents/geradorTexto/geradortexto/src/app/components/ai-career-guide/index.js\",\n                lineNumber: 85,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_2___default().subtitle),\n                children: \"Sendo na \\xe1rea de produtos digitais, conte comigo ツ\"\n            }, void 0, false, {\n                fileName: \"/Users/luisarthurlobomeneses/Documents/geradorTexto/geradortexto/src/app/components/ai-career-guide/index.js\",\n                lineNumber: 86,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                onSubmit: handleSubmit,\n                className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_2___default().searchContainer),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        value: topic,\n                        onChange: handleInputChange,\n                        placeholder: \"O que voc\\xea gostaria de aprender?\",\n                        className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_2___default().searchInput)\n                    }, void 0, false, {\n                        fileName: \"/Users/luisarthurlobomeneses/Documents/geradorTexto/geradortexto/src/app/components/ai-career-guide/index.js\",\n                        lineNumber: 89,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        type: \"submit\",\n                        className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_2___default().searchButton),\n                        children: \"Perguntar\"\n                    }, void 0, false, {\n                        fileName: \"/Users/luisarthurlobomeneses/Documents/geradorTexto/geradortexto/src/app/components/ai-career-guide/index.js\",\n                        lineNumber: 96,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/luisarthurlobomeneses/Documents/geradorTexto/geradortexto/src/app/components/ai-career-guide/index.js\",\n                lineNumber: 88,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_2___default().topicsContainer),\n                children: suggestions.map((suggestion, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: ()=>handleSuggestionClick(suggestion.text),\n                        className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_2___default().topicTag),\n                        style: {\n                            borderColor: suggestion.color\n                        },\n                        children: suggestion.text\n                    }, index, false, {\n                        fileName: \"/Users/luisarthurlobomeneses/Documents/geradorTexto/geradortexto/src/app/components/ai-career-guide/index.js\",\n                        lineNumber: 103,\n                        columnNumber: 11\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"/Users/luisarthurlobomeneses/Documents/geradorTexto/geradortexto/src/app/components/ai-career-guide/index.js\",\n                lineNumber: 101,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_2___default().messagesContainer),\n                ref: messagesContainerRef,\n                children: [\n                    messages.map((message, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_2___default().messageContainer),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"\".concat((_styles_module_css__WEBPACK_IMPORTED_MODULE_2___default().markdownContent), \" prose prose-xl dark:prose-invert max-w-none ai-text\"),\n                                children: (0,_markdownRenderer__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(message.answer)\n                            }, void 0, false, {\n                                fileName: \"/Users/luisarthurlobomeneses/Documents/geradorTexto/geradortexto/src/app/components/ai-career-guide/index.js\",\n                                lineNumber: 117,\n                                columnNumber: 13\n                            }, undefined)\n                        }, index, false, {\n                            fileName: \"/Users/luisarthurlobomeneses/Documents/geradorTexto/geradortexto/src/app/components/ai-career-guide/index.js\",\n                            lineNumber: 116,\n                            columnNumber: 11\n                        }, undefined)),\n                    currentProcessing && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_2___default().messageContainer),\n                        children: currentProcessing.state === 'thinking' ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_2___default().thinkingState),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_2___default().thinkingDots),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        children: \"Thinking\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/luisarthurlobomeneses/Documents/geradorTexto/geradortexto/src/app/components/ai-career-guide/index.js\",\n                                        lineNumber: 128,\n                                        columnNumber: 19\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_2___default().dot),\n                                        children: \".\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/luisarthurlobomeneses/Documents/geradorTexto/geradortexto/src/app/components/ai-career-guide/index.js\",\n                                        lineNumber: 129,\n                                        columnNumber: 19\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_2___default().dot),\n                                        children: \".\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/luisarthurlobomeneses/Documents/geradorTexto/geradortexto/src/app/components/ai-career-guide/index.js\",\n                                        lineNumber: 130,\n                                        columnNumber: 19\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_2___default().dot),\n                                        children: \".\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/luisarthurlobomeneses/Documents/geradorTexto/geradortexto/src/app/components/ai-career-guide/index.js\",\n                                        lineNumber: 131,\n                                        columnNumber: 19\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/luisarthurlobomeneses/Documents/geradorTexto/geradortexto/src/app/components/ai-career-guide/index.js\",\n                                lineNumber: 127,\n                                columnNumber: 17\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/luisarthurlobomeneses/Documents/geradorTexto/geradortexto/src/app/components/ai-career-guide/index.js\",\n                            lineNumber: 126,\n                            columnNumber: 15\n                        }, undefined) : currentProcessing.state === 'typing' ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"\".concat((_styles_module_css__WEBPACK_IMPORTED_MODULE_2___default().markdownContent), \" prose prose-xl dark:prose-invert max-w-none ai-text\"),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TypingAnimation__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                text: currentProcessing.answer,\n                                onComplete: handleTypingComplete\n                            }, void 0, false, {\n                                fileName: \"/Users/luisarthurlobomeneses/Documents/geradorTexto/geradortexto/src/app/components/ai-career-guide/index.js\",\n                                lineNumber: 136,\n                                columnNumber: 17\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/luisarthurlobomeneses/Documents/geradorTexto/geradortexto/src/app/components/ai-career-guide/index.js\",\n                            lineNumber: 135,\n                            columnNumber: 15\n                        }, undefined) : null\n                    }, void 0, false, {\n                        fileName: \"/Users/luisarthurlobomeneses/Documents/geradorTexto/geradortexto/src/app/components/ai-career-guide/index.js\",\n                        lineNumber: 124,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/luisarthurlobomeneses/Documents/geradorTexto/geradortexto/src/app/components/ai-career-guide/index.js\",\n                lineNumber: 114,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_DotsNavigation__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                messagesContainerRef: messagesContainerRef\n            }, void 0, false, {\n                fileName: \"/Users/luisarthurlobomeneses/Documents/geradorTexto/geradortexto/src/app/components/ai-career-guide/index.js\",\n                lineNumber: 145,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_VersionInfo__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/luisarthurlobomeneses/Documents/geradorTexto/geradortexto/src/app/components/ai-career-guide/index.js\",\n                lineNumber: 146,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/luisarthurlobomeneses/Documents/geradorTexto/geradortexto/src/app/components/ai-career-guide/index.js\",\n        lineNumber: 84,\n        columnNumber: 5\n    }, undefined);\n};\n_s(AICareerGuide, \"E0tmSkPzWOv7w8+q9euMAi6q5dE=\");\n_c = AICareerGuide;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AICareerGuide);\nvar _c;\n$RefreshReg$(_c, \"AICareerGuide\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYXBwL2NvbXBvbmVudHMvYWktY2FyZWVyLWd1aWRlL2luZGV4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBMkQ7QUFDbEI7QUFDTztBQUNBO0FBQ047QUFDSTtBQUNOO0FBRXhDLE1BQU1VLGdCQUFnQjs7SUFDcEIsTUFBTSxDQUFDQyxPQUFPQyxTQUFTLEdBQUdYLCtDQUFRQSxDQUFDO0lBQ25DLE1BQU0sQ0FBQ1ksVUFBVUMsWUFBWSxHQUFHYiwrQ0FBUUEsQ0FBQyxFQUFFO0lBQzNDLE1BQU0sQ0FBQ2MsbUJBQW1CQyxxQkFBcUIsR0FBR2YsK0NBQVFBLENBQUM7SUFDM0QsTUFBTSxDQUFDZ0IsT0FBT0MsU0FBUyxHQUFHakIsK0NBQVFBLENBQUM7SUFDbkMsTUFBTWtCLHVCQUF1QmpCLDZDQUFNQSxDQUFDO0lBRXBDLE1BQU1rQixjQUFjO1FBQ2xCO1lBQUVDLE1BQU07WUFBMkJDLE9BQU87UUFBUztRQUNuRDtZQUFFRCxNQUFNO1lBQWtCQyxPQUFPO1FBQU87UUFDeEM7WUFBRUQsTUFBTTtZQUFZQyxPQUFPO1FBQU87UUFDbEM7WUFBRUQsTUFBTTtZQUFlQyxPQUFPO1FBQU07UUFDcEM7WUFBRUQsTUFBTTtZQUFjQyxPQUFPO1FBQVM7S0FDdkM7SUFFRCxNQUFNQyxvQkFBb0IsQ0FBQ0M7UUFDekJaLFNBQVNZLEVBQUVDLE1BQU0sQ0FBQ0MsS0FBSztJQUN6QjtJQUVBLE1BQU1DLGVBQWUsQ0FBQ0g7UUFDcEJBLEVBQUVJLGNBQWM7UUFDaEJDO0lBQ0Y7SUFFQSxNQUFNQyx3QkFBd0IsQ0FBQ0M7UUFDN0JuQixTQUFTbUI7UUFDVEY7SUFDRjtJQUVBLE1BQU1BLGtCQUFrQjtRQUN0QixJQUFJLENBQUNsQixNQUFNcUIsSUFBSSxJQUFJO1FBRW5CaEIscUJBQXFCO1lBQ25CaUIsVUFBVXRCO1lBQ1Z1QixPQUFPO1FBQ1Q7UUFFQSxJQUFJO1lBQ0YsTUFBTUMsV0FBVyxNQUFNQyxNQUFNLHlCQUF5QjtnQkFDcERDLFFBQVE7Z0JB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QUFzQkE7Ozs7OzswQkFDdEMsOERBQUNWLG9EQUFXQTs7Ozs7Ozs7Ozs7QUFHbEI7R0E1SU1DO0tBQUFBO0FBOElOLGlFQUFlQSxhQUFhQSxFQUFDIiwic291cmNlcyI6WyIvVXNlcnMvbHVpc2FydGh1cmxvYm9tZW5lc2VzL0RvY3VtZW50cy9nZXJhZG9yVGV4dG8vZ2VyYWRvcnRleHRvL3NyYy9hcHAvY29tcG9uZW50cy9haS1jYXJlZXItZ3VpZGUvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VSZWYsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9zdHlsZXMubW9kdWxlLmNzcyc7XG5pbXBvcnQgVHlwaW5nQW5pbWF0aW9uIGZyb20gJy4vVHlwaW5nQW5pbWF0aW9uJztcbmltcG9ydCByZW5kZXJNYXJrZG93biBmcm9tICcuL21hcmtkb3duUmVuZGVyZXInO1xuaW1wb3J0IElucHV0U2VjdGlvbiBmcm9tICcuL0lucHV0U2VjdGlvbic7XG5pbXBvcnQgRG90c05hdmlnYXRpb24gZnJvbSAnLi9Eb3RzTmF2aWdhdGlvbic7XG5pbXBvcnQgVmVyc2lvbkluZm8gZnJvbSAnLi9WZXJzaW9uSW5mbyc7XG5cbmNvbnN0IEFJQ2FyZWVyR3VpZGUgPSAoKSA9PiB7XG4gIGNvbnN0IFt0b3BpYywgc2V0VG9waWNdID0gdXNlU3RhdGUoJycpO1xuICBjb25zdCBbbWVzc2FnZXMsIHNldE1lc3NhZ2VzXSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW2N1cnJlbnRQcm9jZXNzaW5nLCBzZXRDdXJyZW50UHJvY2Vzc2luZ10gPSB1c2VTdGF0ZShudWxsKTtcbiAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZShudWxsKTtcbiAgY29uc3QgbWVzc2FnZXNDb250YWluZXJSZWYgPSB1c2VSZWYobnVsbCk7XG5cbiAgY29uc3Qgc3VnZ2VzdGlvbnMgPSBbXG4gICAgeyB0ZXh0OiBcIkRlc2Vudm9sdmltZW50byBwZXNzb2FsXCIsIGNvbG9yOiBcIm9yYW5nZVwiIH0sXG4gICAgeyB0ZXh0OiBcIlVJIHBhcmEgbW9iaWxlXCIsIGNvbG9yOiBcInBpbmtcIiB9LFxuICAgIHsgdGV4dDogXCJJblZpc2lvblwiLCBjb2xvcjogXCJibHVlXCIgfSxcbiAgICB7IHRleHQ6IFwiUHJpb3JpemHDp8Ojb1wiLCBjb2xvcjogXCJyZWRcIiB9LFxuICAgIHsgdGV4dDogXCJUZXN0ZXMgQS9CXCIsIGNvbG9yOiBcInllbGxvd1wiIH1cbiAgXTtcblxuICBjb25zdCBoYW5kbGVJbnB1dENoYW5nZSA9IChlKSA9PiB7XG4gICAgc2V0VG9waWMoZS50YXJnZXQudmFsdWUpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGdlbmVyYXRlQ29udGVudCgpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZVN1Z2dlc3Rpb25DbGljayA9IChzdWdnZXN0aW9uKSA9PiB7XG4gICAgc2V0VG9waWMoc3VnZ2VzdGlvbik7XG4gICAgZ2VuZXJhdGVDb250ZW50KCk7XG4gIH07XG5cbiAgY29uc3QgZ2VuZXJhdGVDb250ZW50ID0gYXN5bmMgKCkgPT4ge1xuICAgIGlmICghdG9waWMudHJpbSgpKSByZXR1cm47XG4gICAgXG4gICAgc2V0Q3VycmVudFByb2Nlc3Npbmcoe1xuICAgICAgcXVlc3Rpb246IHRvcGljLFxuICAgICAgc3RhdGU6ICd0aGlua2luZydcbiAgICB9KTtcbiAgICBcbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnL2FwaS9nZW5lcmF0ZS1jb250ZW50Jywge1xuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgIH0sXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgdG9waWMgfSksXG4gICAgICB9KTtcblxuICAgICAgaWYgKCFyZXNwb25zZS5vaykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ZhaWxlZCB0byBnZW5lcmF0ZSBjb250ZW50Jyk7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICBcbiAgICAgIHNldEN1cnJlbnRQcm9jZXNzaW5nKHByZXYgPT4gKHtcbiAgICAgICAgLi4ucHJldixcbiAgICAgICAgc3RhdGU6ICd0eXBpbmcnLFxuICAgICAgICBhbnN3ZXI6IGRhdGEuY29udGVudFxuICAgICAgfSkpO1xuXG4gICAgICBzZXRUb3BpYygnJyk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBzZXRFcnJvcignRmFpbGVkIHRvIGdlbmVyYXRlIGNvbnRlbnQuIFBsZWFzZSB0cnkgYWdhaW4uJyk7XG4gICAgICBzZXRDdXJyZW50UHJvY2Vzc2luZyhudWxsKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlVHlwaW5nQ29tcGxldGUgPSAoKSA9PiB7XG4gICAgaWYgKGN1cnJlbnRQcm9jZXNzaW5nKSB7XG4gICAgICBzZXRNZXNzYWdlcyhwcmV2ID0+IFsuLi5wcmV2LCB7XG4gICAgICAgIGFuc3dlcjogY3VycmVudFByb2Nlc3NpbmcuYW5zd2VyXG4gICAgICB9XSk7XG4gICAgfVxuICAgIHNldEN1cnJlbnRQcm9jZXNzaW5nKG51bGwpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxuICAgICAgPGgxIGNsYXNzTmFtZT17c3R5bGVzLnRpdGxlfT5Wb3UgdGUgYWp1ZGFyIGEgYWNlbGVyYXIgc3VhIGNhcnJlaXJhPC9oMT5cbiAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLnN1YnRpdGxlfT5TZW5kbyBuYSDDoXJlYSBkZSBwcm9kdXRvcyBkaWdpdGFpcywgY29udGUgY29taWdvIOODhDwvcD5cbiAgICAgIFxuICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0gY2xhc3NOYW1lPXtzdHlsZXMuc2VhcmNoQ29udGFpbmVyfT5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgIHZhbHVlPXt0b3BpY31cbiAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlSW5wdXRDaGFuZ2V9XG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJPIHF1ZSB2b2PDqiBnb3N0YXJpYSBkZSBhcHJlbmRlcj9cIlxuICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLnNlYXJjaElucHV0fVxuICAgICAgICAvPlxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzc05hbWU9e3N0eWxlcy5zZWFyY2hCdXR0b259PlxuICAgICAgICAgIFBlcmd1bnRhclxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgIDwvZm9ybT5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50b3BpY3NDb250YWluZXJ9PlxuICAgICAgICB7c3VnZ2VzdGlvbnMubWFwKChzdWdnZXN0aW9uLCBpbmRleCkgPT4gKFxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIGtleT17aW5kZXh9XG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVTdWdnZXN0aW9uQ2xpY2soc3VnZ2VzdGlvbi50ZXh0KX1cbiAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLnRvcGljVGFnfVxuICAgICAgICAgICAgc3R5bGU9e3sgYm9yZGVyQ29sb3I6IHN1Z2dlc3Rpb24uY29sb3IgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7c3VnZ2VzdGlvbi50ZXh0fVxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICApKX1cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm1lc3NhZ2VzQ29udGFpbmVyfSByZWY9e21lc3NhZ2VzQ29udGFpbmVyUmVmfT5cbiAgICAgICAge21lc3NhZ2VzLm1hcCgobWVzc2FnZSwgaW5kZXgpID0+IChcbiAgICAgICAgICA8ZGl2IGtleT17aW5kZXh9IGNsYXNzTmFtZT17c3R5bGVzLm1lc3NhZ2VDb250YWluZXJ9PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake3N0eWxlcy5tYXJrZG93bkNvbnRlbnR9IHByb3NlIHByb3NlLXhsIGRhcms6cHJvc2UtaW52ZXJ0IG1heC13LW5vbmUgYWktdGV4dGB9PlxuICAgICAgICAgICAgICB7cmVuZGVyTWFya2Rvd24obWVzc2FnZS5hbnN3ZXIpfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICkpfVxuICAgICAgICBcbiAgICAgICAge2N1cnJlbnRQcm9jZXNzaW5nICYmIChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm1lc3NhZ2VDb250YWluZXJ9PlxuICAgICAgICAgICAge2N1cnJlbnRQcm9jZXNzaW5nLnN0YXRlID09PSAndGhpbmtpbmcnID8gKFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRoaW5raW5nU3RhdGV9PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudGhpbmtpbmdEb3RzfT5cbiAgICAgICAgICAgICAgICAgIDxzcGFuPlRoaW5raW5nPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMuZG90fT4uPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMuZG90fT4uPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMuZG90fT4uPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICkgOiBjdXJyZW50UHJvY2Vzc2luZy5zdGF0ZSA9PT0gJ3R5cGluZycgPyAoXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtzdHlsZXMubWFya2Rvd25Db250ZW50fSBwcm9zZSBwcm9zZS14bCBkYXJrOnByb3NlLWludmVydCBtYXgtdy1ub25lIGFpLXRleHRgfT5cbiAgICAgICAgICAgICAgICA8VHlwaW5nQW5pbWF0aW9uIFxuICAgICAgICAgICAgICAgICAgdGV4dD17Y3VycmVudFByb2Nlc3NpbmcuYW5zd2VyfVxuICAgICAgICAgICAgICAgICAgb25Db21wbGV0ZT17aGFuZGxlVHlwaW5nQ29tcGxldGV9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKX1cbiAgICAgIDwvZGl2PlxuICAgICAgPERvdHNOYXZpZ2F0aW9uIG1lc3NhZ2VzQ29udGFpbmVyUmVmPXttZXNzYWdlc0NvbnRhaW5lclJlZn0gLz5cbiAgICAgIDxWZXJzaW9uSW5mbyAvPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQUlDYXJlZXJHdWlkZTtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlUmVmIiwidXNlRWZmZWN0Iiwic3R5bGVzIiwiVHlwaW5nQW5pbWF0aW9uIiwicmVuZGVyTWFya2Rvd24iLCJJbnB1dFNlY3Rpb24iLCJEb3RzTmF2aWdhdGlvbiIsIlZlcnNpb25JbmZvIiwiQUlDYXJlZXJHdWlkZSIsInRvcGljIiwic2V0VG9waWMiLCJtZXNzYWdlcyIsInNldE1lc3NhZ2VzIiwiY3VycmVudFByb2Nlc3NpbmciLCJzZXRDdXJyZW50UHJvY2Vzc2luZyIsImVycm9yIiwic2V0RXJyb3IiLCJtZXNzYWdlc0NvbnRhaW5lclJlZiIsInN1Z2dlc3Rpb25zIiwidGV4dCIsImNvbG9yIiwiaGFuZGxlSW5wdXRDaGFuZ2UiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJoYW5kbGVTdWJtaXQiLCJwcmV2ZW50RGVmYXVsdCIsImdlbmVyYXRlQ29udGVudCIsImhhbmRsZVN1Z2dlc3Rpb25DbGljayIsInN1Z2dlc3Rpb24iLCJ0cmltIiwicXVlc3Rpb24iLCJzdGF0ZSIsInJlc3BvbnNlIiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJvayIsIkVycm9yIiwiZGF0YSIsImpzb24iLCJwcmV2IiwiYW5zd2VyIiwiY29udGVudCIsImVyciIsImhhbmRsZVR5cGluZ0NvbXBsZXRlIiwiZGl2IiwiY2xhc3NOYW1lIiwiY29udGFpbmVyIiwiaDEiLCJ0aXRsZSIsInAiLCJzdWJ0aXRsZSIsImZvcm0iLCJvblN1Ym1pdCIsInNlYXJjaENvbnRhaW5lciIsImlucHV0IiwidHlwZSIsIm9uQ2hhbmdlIiwicGxhY2Vob2xkZXIiLCJzZWFyY2hJbnB1dCIsImJ1dHRvbiIsInNlYXJjaEJ1dHRvbiIsInRvcGljc0NvbnRhaW5lciIsIm1hcCIsImluZGV4Iiwib25DbGljayIsInRvcGljVGFnIiwic3R5bGUiLCJib3JkZXJDb2xvciIsIm1lc3NhZ2VzQ29udGFpbmVyIiwicmVmIiwibWVzc2FnZSIsIm1lc3NhZ2VDb250YWluZXIiLCJtYXJrZG93bkNvbnRlbnQiLCJ0aGlua2luZ1N0YXRlIiwidGhpbmtpbmdEb3RzIiwic3BhbiIsImRvdCIsIm9uQ29tcGxldGUiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/app/components/ai-career-guide/index.js\n"));

/***/ })

});