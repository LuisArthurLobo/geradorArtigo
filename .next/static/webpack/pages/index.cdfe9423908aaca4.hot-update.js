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

/***/ "./src/app/components/ai-career-guide/markdownRenderer.js":
/*!****************************************************************!*\
  !*** ./src/app/components/ai-career-guide/markdownRenderer.js ***!
  \****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-markdown */ \"./node_modules/react-markdown/lib/index.js\");\n/* harmony import */ var react_syntax_highlighter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-syntax-highlighter */ \"./node_modules/react-syntax-highlighter/dist/esm/prism.js\");\n/* harmony import */ var react_syntax_highlighter_dist_cjs_styles_prism__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-syntax-highlighter/dist/cjs/styles/prism */ \"./node_modules/react-syntax-highlighter/dist/cjs/styles/prism/index.js\");\n/* harmony import */ var _styles_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles.module.css */ \"./src/app/components/ai-career-guide/styles.module.css\");\n/* harmony import */ var _styles_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_module_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_fonts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../styles/fonts */ \"./src/app/styles/fonts.js\");\n\n\n\n\n\n\n\nconst MarkdownComponents = {\n    // Title styling with Fahkwang font\n    h1: (param)=>{\n        let { children } = param;\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n            className: \"\".concat((_styles_module_css__WEBPACK_IMPORTED_MODULE_2___default().markdownH1), \" \").concat(_styles_fonts__WEBPACK_IMPORTED_MODULE_3__.heading.className),\n            children: children\n        }, void 0, false, {\n            fileName: \"/Users/luisarthurlobomeneses/Documents/geradorTexto/geradortexto/src/app/components/ai-career-guide/markdownRenderer.js\",\n            lineNumber: 11,\n            columnNumber: 5\n        }, undefined);\n    },\n    // Handle special characters and dashes\n    text: (param)=>{\n        let { children } = param;\n        if (typeof children === 'string') {\n            // Replace hyphens with em dashes\n            const formattedText = children.replace(/--/g, '—') // Replace double hyphen with em dash\n            .replace(RegExp(\"(?<=[^\\\\s])-(?=[^\\\\s])\", \"g\"), '–'); // Replace single hyphen between words with en dash\n            return formattedText;\n        }\n        return children;\n    },\n    // Section headers with Kanit font\n    h2: (param)=>{\n        let { children } = param;\n        console.log('Rendering H2:', children);\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n            className: \"\".concat((_styles_module_css__WEBPACK_IMPORTED_MODULE_2___default().markdownH2), \" \").concat(_styles_fonts__WEBPACK_IMPORTED_MODULE_3__.subheading.className),\n            children: children\n        }, void 0, false, {\n            fileName: \"/Users/luisarthurlobomeneses/Documents/geradorTexto/geradortexto/src/app/components/ai-career-guide/markdownRenderer.js\",\n            lineNumber: 33,\n            columnNumber: 7\n        }, undefined);\n    },\n    h3: (param)=>{\n        let { children } = param;\n        console.log('Rendering H3:', children);\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n            className: \"\".concat((_styles_module_css__WEBPACK_IMPORTED_MODULE_2___default().markdownH3), \" \").concat(_styles_fonts__WEBPACK_IMPORTED_MODULE_3__.subheading.className),\n            children: children\n        }, void 0, false, {\n            fileName: \"/Users/luisarthurlobomeneses/Documents/geradorTexto/geradortexto/src/app/components/ai-career-guide/markdownRenderer.js\",\n            lineNumber: 42,\n            columnNumber: 7\n        }, undefined);\n    },\n    // Paragraphs with Shippori Mincho B1 font\n    p: (param)=>{\n        let { children, className } = param;\n        if (className === null || className === void 0 ? void 0 : className.includes('lead')) {\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"\".concat((_styles_module_css__WEBPACK_IMPORTED_MODULE_2___default().markdownParagraphLead), \" \").concat(_styles_fonts__WEBPACK_IMPORTED_MODULE_3__.paragraph.className),\n                children: children\n            }, void 0, false, {\n                fileName: \"/Users/luisarthurlobomeneses/Documents/geradorTexto/geradortexto/src/app/components/ai-career-guide/markdownRenderer.js\",\n                lineNumber: 52,\n                columnNumber: 9\n            }, undefined);\n        }\n        // Use H3 style for AI-generated text\n        if (className === null || className === void 0 ? void 0 : className.includes('ai-text')) {\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_2___default().markdownH3),\n                children: children\n            }, void 0, false, {\n                fileName: \"/Users/luisarthurlobomeneses/Documents/geradorTexto/geradortexto/src/app/components/ai-career-guide/markdownRenderer.js\",\n                lineNumber: 60,\n                columnNumber: 9\n            }, undefined);\n        }\n        // Handle text with em dashes\n        if (typeof children === 'string') {\n            const parts = children.split(/(–[^–]+–)/g);\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"\".concat((_styles_module_css__WEBPACK_IMPORTED_MODULE_2___default().markdownParagraph), \" \").concat(_styles_fonts__WEBPACK_IMPORTED_MODULE_3__.paragraph.className),\n                children: parts.map((part, index)=>{\n                    if (part.startsWith('–') && part.endsWith('–')) {\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"em\", {\n                            className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_2___default().markdownEmphasis),\n                            children: part.slice(1, -1)\n                        }, index, false, {\n                            fileName: \"/Users/luisarthurlobomeneses/Documents/geradorTexto/geradortexto/src/app/components/ai-career-guide/markdownRenderer.js\",\n                            lineNumber: 73,\n                            columnNumber: 22\n                        }, undefined);\n                    }\n                    return part;\n                })\n            }, void 0, false, {\n                fileName: \"/Users/luisarthurlobomeneses/Documents/geradorTexto/geradortexto/src/app/components/ai-career-guide/markdownRenderer.js\",\n                lineNumber: 70,\n                columnNumber: 9\n            }, undefined);\n        }\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n            className: \"\".concat((_styles_module_css__WEBPACK_IMPORTED_MODULE_2___default().markdownParagraph), \" \").concat(_styles_fonts__WEBPACK_IMPORTED_MODULE_3__.paragraph.className),\n            children: children\n        }, void 0, false, {\n            fileName: \"/Users/luisarthurlobomeneses/Documents/geradorTexto/geradortexto/src/app/components/ai-career-guide/markdownRenderer.js\",\n            lineNumber: 82,\n            columnNumber: 7\n        }, undefined);\n    },\n    // Lists with custom bullets\n    ul: (param)=>{\n        let { children } = param;\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n            className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_2___default().markdownList),\n            children: children\n        }, void 0, false, {\n            fileName: \"/Users/luisarthurlobomeneses/Documents/geradorTexto/geradortexto/src/app/components/ai-career-guide/markdownRenderer.js\",\n            lineNumber: 90,\n            columnNumber: 5\n        }, undefined);\n    },\n    // List items with square bullets\n    li: (param)=>{\n        let { children } = param;\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n            className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_2___default().markdownListItem),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                    className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_2___default().markdownListBullet)\n                }, void 0, false, {\n                    fileName: \"/Users/luisarthurlobomeneses/Documents/geradorTexto/geradortexto/src/app/components/ai-career-guide/markdownRenderer.js\",\n                    lineNumber: 98,\n                    columnNumber: 7\n                }, undefined),\n                children\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/luisarthurlobomeneses/Documents/geradorTexto/geradortexto/src/app/components/ai-career-guide/markdownRenderer.js\",\n            lineNumber: 97,\n            columnNumber: 5\n        }, undefined);\n    },\n    // Emphasis styles\n    strong: (param)=>{\n        let { children } = param;\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n            className: \"\".concat((_styles_module_css__WEBPACK_IMPORTED_MODULE_2___default().markdownStrong), \" \").concat(_styles_fonts__WEBPACK_IMPORTED_MODULE_3__.subheading.className),\n            children: children\n        }, void 0, false, {\n            fileName: \"/Users/luisarthurlobomeneses/Documents/geradorTexto/geradortexto/src/app/components/ai-career-guide/markdownRenderer.js\",\n            lineNumber: 105,\n            columnNumber: 5\n        }, undefined);\n    },\n    em: (param)=>{\n        let { children } = param;\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"em\", {\n            className: \"\".concat((_styles_module_css__WEBPACK_IMPORTED_MODULE_2___default().markdownEmphasis), \" \").concat(_styles_fonts__WEBPACK_IMPORTED_MODULE_3__.subheading.className),\n            children: children\n        }, void 0, false, {\n            fileName: \"/Users/luisarthurlobomeneses/Documents/geradorTexto/geradortexto/src/app/components/ai-career-guide/markdownRenderer.js\",\n            lineNumber: 111,\n            columnNumber: 5\n        }, undefined);\n    },\n    // Code blocks with syntax highlighting\n    code: (param)=>{\n        let { node, inline, className, children, ...props } = param;\n        const match = /language-(\\w+)/.exec(className || '');\n        const language = match ? match[1] : '';\n        return !inline && language ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_syntax_highlighter__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n            style: react_syntax_highlighter_dist_cjs_styles_prism__WEBPACK_IMPORTED_MODULE_5__.atomDark,\n            language: language,\n            PreTag: \"div\",\n            className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_2___default().markdownCodeBlock),\n            ...props,\n            children: String(children).replace(/\\n$/, '')\n        }, void 0, false, {\n            fileName: \"/Users/luisarthurlobomeneses/Documents/geradorTexto/geradortexto/src/app/components/ai-career-guide/markdownRenderer.js\",\n            lineNumber: 122,\n            columnNumber: 7\n        }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"code\", {\n            className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_2___default().inlineCode),\n            ...props,\n            children: children\n        }, void 0, false, {\n            fileName: \"/Users/luisarthurlobomeneses/Documents/geradorTexto/geradortexto/src/app/components/ai-career-guide/markdownRenderer.js\",\n            lineNumber: 132,\n            columnNumber: 7\n        }, undefined);\n    },\n    // Links with external indicator\n    a: (param)=>{\n        let { node, children, href, ...props } = param;\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n            href: href,\n            className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_2___default().markdownLink),\n            target: \"_blank\",\n            rel: \"noopener noreferrer\",\n            ...props,\n            children: children\n        }, void 0, false, {\n            fileName: \"/Users/luisarthurlobomeneses/Documents/geradorTexto/geradortexto/src/app/components/ai-career-guide/markdownRenderer.js\",\n            lineNumber: 140,\n            columnNumber: 5\n        }, undefined);\n    },\n    // Blockquotes with distinctive styling\n    blockquote: (param)=>{\n        let { children } = param;\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"blockquote\", {\n            className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_2___default().markdownBlockquote),\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_2___default().markdownBlockquoteContent),\n                children: children\n            }, void 0, false, {\n                fileName: \"/Users/luisarthurlobomeneses/Documents/geradorTexto/geradortexto/src/app/components/ai-career-guide/markdownRenderer.js\",\n                lineNumber: 154,\n                columnNumber: 7\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"/Users/luisarthurlobomeneses/Documents/geradorTexto/geradortexto/src/app/components/ai-career-guide/markdownRenderer.js\",\n            lineNumber: 153,\n            columnNumber: 5\n        }, undefined);\n    }\n};\nconst renderList = (tokens, idx)=>{\n    if (tokens[idx].type === 'bullet_list_open') {\n        return '<ul class=\"'.concat((_styles_module_css__WEBPACK_IMPORTED_MODULE_2___default().markdownList), '\">');\n    }\n    return '</ul>';\n};\nconst renderListItem = (tokens, idx)=>{\n    if (tokens[idx].type === 'list_item_open') {\n        return '<li class=\"'.concat((_styles_module_css__WEBPACK_IMPORTED_MODULE_2___default().markdownListItem), '\"><span class=\"').concat((_styles_module_css__WEBPACK_IMPORTED_MODULE_2___default().markdownListBullet), '\"></span>');\n    }\n    return '</li>';\n};\nconst renderMarkdown = (content)=>{\n    console.log('Rendering markdown content:', {\n        content,\n        hasH2: content.includes('##'),\n        hasH3: content.includes('###')\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_markdown__WEBPACK_IMPORTED_MODULE_6__.Markdown, {\n        components: MarkdownComponents,\n        className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_2___default().markdownContent),\n        renderers: {\n            list: renderList,\n            listItem: renderListItem\n        },\n        children: content\n    }, void 0, false, {\n        fileName: \"/Users/luisarthurlobomeneses/Documents/geradorTexto/geradortexto/src/app/components/ai-career-guide/markdownRenderer.js\",\n        lineNumber: 183,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderMarkdown);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYXBwL2NvbXBvbmVudHMvYWktY2FyZWVyLWd1aWRlL21hcmtkb3duUmVuZGVyZXIuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBMEI7QUFDaUI7QUFDMkI7QUFDSTtBQUNqQztBQUMyQjtBQUVwRSxNQUFNUyxxQkFBcUI7SUFDekIsbUNBQW1DO0lBQ25DQyxJQUFJO1lBQUMsRUFBRUMsUUFBUSxFQUFFOzZCQUNmLDhEQUFDRDtZQUFHRSxXQUFXLEdBQXdCTixPQUFyQkQsc0VBQWlCLEVBQUMsS0FBcUIsT0FBbEJDLGtEQUFPQSxDQUFDTSxTQUFTO3NCQUNyREQ7Ozs7Ozs7SUFJTCx1Q0FBdUM7SUFDdkNHLE1BQU07WUFBQyxFQUFFSCxRQUFRLEVBQUU7UUFDakIsSUFBSSxPQUFPQSxhQUFhLFVBQVU7WUFDaEMsaUNBQWlDO1lBQ2pDLE1BQU1JLGdCQUFnQkosU0FDbkJLLE9BQU8sQ0FBQyxPQUFPLEtBQU0scUNBQXFDO2FBQzFEQSxPQUFPLENBQUMsdUNBQXlCLE1BQU0sbURBQW1EO1lBRTdGLE9BQU9EO1FBQ1Q7UUFDQSxPQUFPSjtJQUNUO0lBRUEsa0NBQWtDO0lBQ2xDTSxJQUFJO1lBQUMsRUFBRU4sUUFBUSxFQUFFO1FBQ2ZPLFFBQVFDLEdBQUcsQ0FBQyxpQkFBaUJSO1FBQzdCLHFCQUNFLDhEQUFDTTtZQUFHTCxXQUFXLEdBQXdCTCxPQUFyQkYsc0VBQWlCLEVBQUMsS0FBd0IsT0FBckJFLHFEQUFVQSxDQUFDSyxTQUFTO3NCQUN4REQ7Ozs7OztJQUdQO0lBRUFVLElBQUk7WUFBQyxFQUFFVixRQUFRLEVBQUU7UUFDZk8sUUFBUUMsR0FBRyxDQUFDLGlCQUFpQlI7UUFDN0IscUJBQ0UsOERBQUNVO1lBQUdULFdBQVcsR0FBd0JMLE9BQXJCRixzRUFBaUIsRUFBQyxLQUF3QixPQUFyQkUscURBQVVBLENBQUNLLFNBQVM7c0JBQ3hERDs7Ozs7O0lBR1A7SUFFQSwwQ0FBMEM7SUFDMUNZLEdBQUc7WUFBQyxFQUFFWixRQUFRLEVBQUVD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QyxXQUFXUCx3RUFBbUI7WUFDOUJ1RCxRQUFPO1lBQ1BDLEtBQUk7WUFDSCxHQUFHYixLQUFLO3NCQUVSckM7Ozs7Ozs7SUFJTCx1Q0FBdUM7SUFDdkNtRCxZQUFZO1lBQUMsRUFBRW5ELFFBQVEsRUFBRTs2QkFDdkIsOERBQUNtRDtZQUFXbEQsV0FBV1AsOEVBQXlCO3NCQUM5Qyw0RUFBQzJEO2dCQUFJcEQsV0FBV1AscUZBQWdDOzBCQUM3Q007Ozs7Ozs7Ozs7OztBQUlUO0FBRUEsTUFBTXVELGFBQWEsQ0FBQ0MsUUFBUUM7SUFDMUIsSUFBSUQsTUFBTSxDQUFDQyxJQUFJLENBQUNDLElBQUksS0FBSyxvQkFBb0I7UUFDM0MsT0FBTyxjQUFrQyxPQUFwQmhFLHdFQUFtQixFQUFDO0lBQzNDO0lBQ0EsT0FBTztBQUNUO0FBRUEsTUFBTWlFLGlCQUFpQixDQUFDSCxRQUFRQztJQUM5QixJQUFJRCxNQUFNLENBQUNDLElBQUksQ0FBQ0MsSUFBSSxLQUFLLGtCQUFrQjtRQUN6QyxPQUFPLGNBQXVEaEUsT0FBekNBLDRFQUF1QixFQUFDLG1CQUEyQyxPQUExQkEsOEVBQXlCLEVBQUM7SUFDMUY7SUFDQSxPQUFPO0FBQ1Q7QUFFQSxNQUFNa0UsaUJBQWlCLENBQUNDO0lBQ3RCdEQsUUFBUUMsR0FBRyxDQUFDLCtCQUErQjtRQUN6Q3FEO1FBQ0FDLE9BQU9ELFFBQVFoRCxRQUFRLENBQUM7UUFDeEJrRCxPQUFPRixRQUFRaEQsUUFBUSxDQUFDO0lBQzFCO0lBRUEscUJBQ0UsOERBQUN2QixvREFBYUE7UUFDWjBFLFlBQVlsRTtRQUNaRyxXQUFXUCwyRUFBc0I7UUFDakN3RSxXQUFXO1lBQ1RDLE1BQU1aO1lBQ05hLFVBQVVUO1FBQ1o7a0JBRUNFOzs7Ozs7QUFHUDtBQUVBLGlFQUFlRCxjQUFjQSxFQUFDIiwic291cmNlcyI6WyIvVXNlcnMvbHVpc2FydGh1cmxvYm9tZW5lc2VzL0RvY3VtZW50cy9nZXJhZG9yVGV4dG8vZ2VyYWRvcnRleHRvL3NyYy9hcHAvY29tcG9uZW50cy9haS1jYXJlZXItZ3VpZGUvbWFya2Rvd25SZW5kZXJlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJlYWN0TWFya2Rvd24gZnJvbSAncmVhY3QtbWFya2Rvd24nO1xuaW1wb3J0IHsgUHJpc20gYXMgU3ludGF4SGlnaGxpZ2h0ZXIgfSBmcm9tICdyZWFjdC1zeW50YXgtaGlnaGxpZ2h0ZXInO1xuaW1wb3J0IHsgYXRvbURhcmsgfSBmcm9tICdyZWFjdC1zeW50YXgtaGlnaGxpZ2h0ZXIvZGlzdC9janMvc3R5bGVzL3ByaXNtJztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9zdHlsZXMubW9kdWxlLmNzcyc7XG5pbXBvcnQgeyBoZWFkaW5nLCBzdWJoZWFkaW5nLCBwYXJhZ3JhcGggfSBmcm9tICcuLi8uLi9zdHlsZXMvZm9udHMnO1xuXG5jb25zdCBNYXJrZG93bkNvbXBvbmVudHMgPSB7XG4gIC8vIFRpdGxlIHN0eWxpbmcgd2l0aCBGYWhrd2FuZyBmb250XG4gIGgxOiAoeyBjaGlsZHJlbiB9KSA9PiAoXG4gICAgPGgxIGNsYXNzTmFtZT17YCR7c3R5bGVzLm1hcmtkb3duSDF9ICR7aGVhZGluZy5jbGFzc05hbWV9YH0+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9oMT5cbiAgKSxcblxuICAvLyBIYW5kbGUgc3BlY2lhbCBjaGFyYWN0ZXJzIGFuZCBkYXNoZXNcbiAgdGV4dDogKHsgY2hpbGRyZW4gfSkgPT4ge1xuICAgIGlmICh0eXBlb2YgY2hpbGRyZW4gPT09ICdzdHJpbmcnKSB7XG4gICAgICAvLyBSZXBsYWNlIGh5cGhlbnMgd2l0aCBlbSBkYXNoZXNcbiAgICAgIGNvbnN0IGZvcm1hdHRlZFRleHQgPSBjaGlsZHJlblxuICAgICAgICAucmVwbGFjZSgvLS0vZywgJ+KAlCcpICAvLyBSZXBsYWNlIGRvdWJsZSBoeXBoZW4gd2l0aCBlbSBkYXNoXG4gICAgICAgIC5yZXBsYWNlKC8oPzw9W15cXHNdKS0oPz1bXlxcc10pL2csICfigJMnKTsgLy8gUmVwbGFjZSBzaW5nbGUgaHlwaGVuIGJldHdlZW4gd29yZHMgd2l0aCBlbiBkYXNoXG4gICAgICBcbiAgICAgIHJldHVybiBmb3JtYXR0ZWRUZXh0O1xuICAgIH1cbiAgICByZXR1cm4gY2hpbGRyZW47XG4gIH0sXG5cbiAgLy8gU2VjdGlvbiBoZWFkZXJzIHdpdGggS2FuaXQgZm9udFxuICBoMjogKHsgY2hpbGRyZW4gfSkgPT4ge1xuICAgIGNvbnNvbGUubG9nKCdSZW5kZXJpbmcgSDI6JywgY2hpbGRyZW4pO1xuICAgIHJldHVybiAoXG4gICAgICA8aDIgY2xhc3NOYW1lPXtgJHtzdHlsZXMubWFya2Rvd25IMn0gJHtzdWJoZWFkaW5nLmNsYXNzTmFtZX1gfT5cbiAgICAgICAge2NoaWxkcmVufVxuICAgICAgPC9oMj5cbiAgICApO1xuICB9LFxuXG4gIGgzOiAoeyBjaGlsZHJlbiB9KSA9PiB7XG4gICAgY29uc29sZS5sb2coJ1JlbmRlcmluZyBIMzonLCBjaGlsZHJlbik7XG4gICAgcmV0dXJuIChcbiAgICAgIDxoMyBjbGFzc05hbWU9e2Ake3N0eWxlcy5tYXJrZG93bkgzfSAke3N1YmhlYWRpbmcuY2xhc3NOYW1lfWB9PlxuICAgICAgICB7Y2hpbGRyZW59XG4gICAgICA8L2gzPlxuICAgICk7XG4gIH0sXG5cbiAgLy8gUGFyYWdyYXBocyB3aXRoIFNoaXBwb3JpIE1pbmNobyBCMSBmb250XG4gIHA6ICh7IGNoaWxkcmVuLCBjbGFzc05hbWUgfSkgPT4ge1xuICAgIGlmIChjbGFzc05hbWU/LmluY2x1ZGVzKCdsZWFkJykpIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxwIGNsYXNzTmFtZT17YCR7c3R5bGVzLm1hcmtkb3duUGFyYWdyYXBoTGVhZH0gJHtwYXJhZ3JhcGguY2xhc3NOYW1lfWB9PlxuICAgICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgPC9wPlxuICAgICAgKTtcbiAgICB9XG4gICAgLy8gVXNlIEgzIHN0eWxlIGZvciBBSS1nZW5lcmF0ZWQgdGV4dFxuICAgIGlmIChjbGFzc05hbWU/LmluY2x1ZGVzKCdhaS10ZXh0JykpIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLm1hcmtkb3duSDN9PlxuICAgICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgPC9wPlxuICAgICAgKTtcbiAgICB9XG5cbiAgICAvLyBIYW5kbGUgdGV4dCB3aXRoIGVtIGRhc2hlc1xuICAgIGlmICh0eXBlb2YgY2hpbGRyZW4gPT09ICdzdHJpbmcnKSB7XG4gICAgICBjb25zdCBwYXJ0cyA9IGNoaWxkcmVuLnNwbGl0KC8o4oCTW17igJNdK+KAkykvZyk7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8cCBjbGFzc05hbWU9e2Ake3N0eWxlcy5tYXJrZG93blBhcmFncmFwaH0gJHtwYXJhZ3JhcGguY2xhc3NOYW1lfWB9PlxuICAgICAgICAgIHtwYXJ0cy5tYXAoKHBhcnQsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICBpZiAocGFydC5zdGFydHNXaXRoKCfigJMnKSAmJiBwYXJ0LmVuZHNXaXRoKCfigJMnKSkge1xuICAgICAgICAgICAgICByZXR1cm4gPGVtIGtleT17aW5kZXh9IGNsYXNzTmFtZT17c3R5bGVzLm1hcmtkb3duRW1waGFzaXN9PntwYXJ0LnNsaWNlKDEsIC0xKX08L2VtPjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBwYXJ0O1xuICAgICAgICAgIH0pfVxuICAgICAgICA8L3A+XG4gICAgICApO1xuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICA8cCBjbGFzc05hbWU9e2Ake3N0eWxlcy5tYXJrZG93blBhcmFncmFwaH0gJHtwYXJhZ3JhcGguY2xhc3NOYW1lfWB9PlxuICAgICAgICB7Y2hpbGRyZW59XG4gICAgICA8L3A+XG4gICAgKTtcbiAgfSxcblxuICAvLyBMaXN0cyB3aXRoIGN1c3RvbSBidWxsZXRzXG4gIHVsOiAoeyBjaGlsZHJlbiB9KSA9PiAoXG4gICAgPHVsIGNsYXNzTmFtZT17c3R5bGVzLm1hcmtkb3duTGlzdH0+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC91bD5cbiAgKSxcblxuICAvLyBMaXN0IGl0ZW1zIHdpdGggc3F1YXJlIGJ1bGxldHNcbiAgbGk6ICh7IGNoaWxkcmVuIH0pID0+IChcbiAgICA8bGkgY2xhc3NOYW1lPXtzdHlsZXMubWFya2Rvd25MaXN0SXRlbX0+XG4gICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5tYXJrZG93bkxpc3RCdWxsZXR9Pjwvc3Bhbj5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L2xpPlxuICApLFxuXG4gIC8vIEVtcGhhc2lzIHN0eWxlc1xuICBzdHJvbmc6ICh7IGNoaWxkcmVuIH0pID0+IChcbiAgICA8c3Ryb25nIGNsYXNzTmFtZT17YCR7c3R5bGVzLm1hcmtkb3duU3Ryb25nfSAke3N1YmhlYWRpbmcuY2xhc3NOYW1lfWB9PlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvc3Ryb25nPlxuICApLFxuXG4gIGVtOiAoeyBjaGlsZHJlbiB9KSA9PiAoXG4gICAgPGVtIGNsYXNzTmFtZT17YCR7c3R5bGVzLm1hcmtkb3duRW1waGFzaXN9ICR7c3ViaGVhZGluZy5jbGFzc05hbWV9YH0+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9lbT5cbiAgKSxcblxuICAvLyBDb2RlIGJsb2NrcyB3aXRoIHN5bnRheCBoaWdobGlnaHRpbmdcbiAgY29kZTogKHsgbm9kZSwgaW5saW5lLCBjbGFzc05hbWUsIGNoaWxkcmVuLCAuLi5wcm9wcyB9KSA9PiB7XG4gICAgY29uc3QgbWF0Y2ggPSAvbGFuZ3VhZ2UtKFxcdyspLy5leGVjKGNsYXNzTmFtZSB8fCAnJyk7XG4gICAgY29uc3QgbGFuZ3VhZ2UgPSBtYXRjaCA/IG1hdGNoWzFdIDogJyc7XG4gICAgXG4gICAgcmV0dXJuICFpbmxpbmUgJiYgbGFuZ3VhZ2UgPyAoXG4gICAgICA8U3ludGF4SGlnaGxpZ2h0ZXJcbiAgICAgICAgc3R5bGU9e2F0b21EYXJrfVxuICAgICAgICBsYW5ndWFnZT17bGFuZ3VhZ2V9XG4gICAgICAgIFByZVRhZz1cImRpdlwiXG4gICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLm1hcmtkb3duQ29kZUJsb2NrfVxuICAgICAgICB7Li4ucHJvcHN9XG4gICAgICA+XG4gICAgICAgIHtTdHJpbmcoY2hpbGRyZW4pLnJlcGxhY2UoL1xcbiQvLCAnJyl9XG4gICAgICA8L1N5bnRheEhpZ2hsaWdodGVyPlxuICAgICkgOiAoXG4gICAgICA8Y29kZSBjbGFzc05hbWU9e3N0eWxlcy5pbmxpbmVDb2RlfSB7Li4ucHJvcHN9PlxuICAgICAgICB7Y2hpbGRyZW59XG4gICAgICA8L2NvZGU+XG4gICAgKTtcbiAgfSxcblxuICAvLyBMaW5rcyB3aXRoIGV4dGVybmFsIGluZGljYXRvclxuICBhOiAoeyBub2RlLCBjaGlsZHJlbiwgaHJlZiwgLi4ucHJvcHMgfSkgPT4gKFxuICAgIDxhIFxuICAgICAgaHJlZj17aHJlZn1cbiAgICAgIGNsYXNzTmFtZT17c3R5bGVzLm1hcmtkb3duTGlua31cbiAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCJcbiAgICAgIHsuLi5wcm9wc31cbiAgICA+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9hPlxuICApLFxuXG4gIC8vIEJsb2NrcXVvdGVzIHdpdGggZGlzdGluY3RpdmUgc3R5bGluZ1xuICBibG9ja3F1b3RlOiAoeyBjaGlsZHJlbiB9KSA9PiAoXG4gICAgPGJsb2NrcXVvdGUgY2xhc3NOYW1lPXtzdHlsZXMubWFya2Rvd25CbG9ja3F1b3RlfT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubWFya2Rvd25CbG9ja3F1b3RlQ29udGVudH0+XG4gICAgICAgIHtjaGlsZHJlbn1cbiAgICAgIDwvZGl2PlxuICAgIDwvYmxvY2txdW90ZT5cbiAgKVxufTtcblxuY29uc3QgcmVuZGVyTGlzdCA9ICh0b2tlbnMsIGlkeCkgPT4ge1xuICBpZiAodG9rZW5zW2lkeF0udHlwZSA9PT0gJ2J1bGxldF9saXN0X29wZW4nKSB7XG4gICAgcmV0dXJuIGA8dWwgY2xhc3M9XCIke3N0eWxlcy5tYXJrZG93bkxpc3R9XCI+YDtcbiAgfVxuICByZXR1cm4gJzwvdWw+Jztcbn07XG5cbmNvbnN0IHJlbmRlckxpc3RJdGVtID0gKHRva2VucywgaWR4KSA9PiB7XG4gIGlmICh0b2tlbnNbaWR4XS50eXBlID09PSAnbGlzdF9pdGVtX29wZW4nKSB7XG4gICAgcmV0dXJuIGA8bGkgY2xhc3M9XCIke3N0eWxlcy5tYXJrZG93bkxpc3RJdGVtfVwiPjxzcGFuIGNsYXNzPVwiJHtzdHlsZXMubWFya2Rvd25MaXN0QnVsbGV0fVwiPjwvc3Bhbj5gO1xuICB9XG4gIHJldHVybiAnPC9saT4nO1xufTtcblxuY29uc3QgcmVuZGVyTWFya2Rvd24gPSAoY29udGVudCkgPT4ge1xuICBjb25zb2xlLmxvZygnUmVuZGVyaW5nIG1hcmtkb3duIGNvbnRlbnQ6Jywge1xuICAgIGNvbnRlbnQsXG4gICAgaGFzSDI6IGNvbnRlbnQuaW5jbHVkZXMoJyMjJyksXG4gICAgaGFzSDM6IGNvbnRlbnQuaW5jbHVkZXMoJyMjIycpXG4gIH0pO1xuICBcbiAgcmV0dXJuIChcbiAgICA8UmVhY3RNYXJrZG93blxuICAgICAgY29tcG9uZW50cz17TWFya2Rvd25Db21wb25lbnRzfVxuICAgICAgY2xhc3NOYW1lPXtzdHlsZXMubWFya2Rvd25Db250ZW50fVxuICAgICAgcmVuZGVyZXJzPXt7XG4gICAgICAgIGxpc3Q6IHJlbmRlckxpc3QsXG4gICAgICAgIGxpc3RJdGVtOiByZW5kZXJMaXN0SXRlbVxuICAgICAgfX1cbiAgICA+XG4gICAgICB7Y29udGVudH1cbiAgICA8L1JlYWN0TWFya2Rvd24+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCByZW5kZXJNYXJrZG93bjsiXSwibmFtZXMiOlsiUmVhY3QiLCJSZWFjdE1hcmtkb3duIiwiUHJpc20iLCJTeW50YXhIaWdobGlnaHRlciIsImF0b21EYXJrIiwic3R5bGVzIiwiaGVhZGluZyIsInN1YmhlYWRpbmciLCJwYXJhZ3JhcGgiLCJNYXJrZG93bkNvbXBvbmVudHMiLCJoMSIsImNoaWxkcmVuIiwiY2xhc3NOYW1lIiwibWFya2Rvd25IMSIsInRleHQiLCJmb3JtYXR0ZWRUZXh0IiwicmVwbGFjZSIsImgyIiwiY29uc29sZSIsImxvZyIsIm1hcmtkb3duSDIiLCJoMyIsIm1hcmtkb3duSDMiLCJwIiwiaW5jbHVkZXMiLCJtYXJrZG93blBhcmFncmFwaExlYWQiLCJwYXJ0cyIsInNwbGl0IiwibWFya2Rvd25QYXJhZ3JhcGgiLCJtYXAiLCJwYXJ0IiwiaW5kZXgiLCJzdGFydHNXaXRoIiwiZW5kc1dpdGgiLCJlbSIsIm1hcmtkb3duRW1waGFzaXMiLCJzbGljZSIsInVsIiwibWFya2Rvd25MaXN0IiwibGkiLCJtYXJrZG93bkxpc3RJdGVtIiwic3BhbiIsIm1hcmtkb3duTGlzdEJ1bGxldCIsInN0cm9uZyIsIm1hcmtkb3duU3Ryb25nIiwiY29kZSIsIm5vZGUiLCJpbmxpbmUiLCJwcm9wcyIsIm1hdGNoIiwiZXhlYyIsImxhbmd1YWdlIiwic3R5bGUiLCJQcmVUYWciLCJtYXJrZG93bkNvZGVCbG9jayIsIlN0cmluZyIsImlubGluZUNvZGUiLCJhIiwiaHJlZiIsIm1hcmtkb3duTGluayIsInRhcmdldCIsInJlbCIsImJsb2NrcXVvdGUiLCJtYXJrZG93bkJsb2NrcXVvdGUiLCJkaXYiLCJtYXJrZG93bkJsb2NrcXVvdGVDb250ZW50IiwicmVuZGVyTGlzdCIsInRva2VucyIsImlkeCIsInR5cGUiLCJyZW5kZXJMaXN0SXRlbSIsInJlbmRlck1hcmtkb3duIiwiY29udGVudCIsImhhc0gyIiwiaGFzSDMiLCJjb21wb25lbnRzIiwibWFya2Rvd25Db250ZW50IiwicmVuZGVyZXJzIiwibGlzdCIsImxpc3RJdGVtIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/app/components/ai-career-guide/markdownRenderer.js\n"));

/***/ })

});