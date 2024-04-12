"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./app/page.tsx":
/*!**********************!*\
  !*** ./app/page.tsx ***!
  \**********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _globals_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./globals.css */ \"(app-pages-browser)/./app/globals.css\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nconst Gallery = ()=>{\n    _s();\n    const [selectedImage, setSelectedImage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [images, setImages] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const getImages = async ()=>{\n        const res = await fetch(\"/api/photos\");\n        const data = await res.json();\n        setImages(data);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        getImages();\n    }, []);\n    const handleImageClick = (imageSrc)=>{\n        console.log(\"handleImageClick\");\n        setSelectedImage(imageSrc);\n    };\n    const handleCloseClick = ()=>{\n        console.log(\"handleCloseClick\");\n        setSelectedImage(null);\n    };\n    const handleSubmit = async (event)=>{\n        event.preventDefault();\n        setLoading(true);\n        const fileInput = document.getElementById(\"image\");\n        if (fileInput && fileInput.files && fileInput.files.length > 0) {\n            const file = fileInput.files[0];\n            console.log(file);\n            try {\n                const formData = new FormData();\n                formData.append(\"file\", file);\n                formData.append(\"upload_preset\", \"jlhjp4lf\");\n                const res = await fetch(\"https://api.cloudinary.com/v1_1/dyxdzygtq/image/upload\", {\n                    method: \"POST\",\n                    body: formData\n                });\n                const data = await res.json();\n                const uploadImage = await fetch(\"/api/photos\", {\n                    method: \"POST\",\n                    headers: {\n                        \"Content-Type\": \"application/json\"\n                    },\n                    body: JSON.stringify({\n                        imagePath: data.secure_url\n                    })\n                });\n                const uploadImageData = await uploadImage.json();\n                console.log(uploadImageData);\n                getImages();\n                fileInput.value = \"\";\n                setLoading(false);\n            } catch (err) {\n                alert(err);\n                setLoading(false);\n            }\n        }\n    };\n    const handleDelete = async (id)=>{\n        try {\n            const res = await fetch(\"/api/photos?id=\".concat(id), {\n                method: \"DELETE\"\n            });\n            const data = await res.json();\n            console.log(data);\n            getImages();\n        } catch (err) {\n            alert(err);\n        }\n    };\n    const renderImage = (imageData, index)=>{\n        console.log(imageData);\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"image-con\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                    src: imageData.imagePath,\n                    alt: \"\",\n                    onClick: ()=>handleImageClick(imageData.imagePath)\n                }, void 0, false, {\n                    fileName: \"D:\\\\my-app\\\\app\\\\page.tsx\",\n                    lineNumber: 93,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    className: \"delete-button\",\n                    onClick: ()=>handleDelete(imageData._id),\n                    children: [\n                        \"Verwijder\",\n                        \" \"\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\my-app\\\\app\\\\page.tsx\",\n                    lineNumber: 98,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, index, true, {\n            fileName: \"D:\\\\my-app\\\\app\\\\page.tsx\",\n            lineNumber: 92,\n            columnNumber: 7\n        }, undefined);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                className: \"form-container\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                    className: \"form\",\n                    onSubmit: handleSubmit,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"file\",\n                            id: \"image\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\my-app\\\\app\\\\page.tsx\",\n                            lineNumber: 112,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            type: \"submit\",\n                            children: \"Upload\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\my-app\\\\app\\\\page.tsx\",\n                            lineNumber: 113,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\my-app\\\\app\\\\page.tsx\",\n                    lineNumber: 111,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"D:\\\\my-app\\\\app\\\\page.tsx\",\n                lineNumber: 110,\n                columnNumber: 7\n            }, undefined),\n            loading && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: \"Loading...\"\n            }, void 0, false, {\n                fileName: \"D:\\\\my-app\\\\app\\\\page.tsx\",\n                lineNumber: 117,\n                columnNumber: 19\n            }, undefined),\n            selectedImage && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"view-image\",\n                onClick: handleCloseClick,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        src: selectedImage,\n                        alt: \"Selected\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\my-app\\\\app\\\\page.tsx\",\n                        lineNumber: 120,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        children: \"X\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\my-app\\\\app\\\\page.tsx\",\n                        lineNumber: 121,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\my-app\\\\app\\\\page.tsx\",\n                lineNumber: 119,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"image-container\",\n                children: images.map(renderImage)\n            }, void 0, false, {\n                fileName: \"D:\\\\my-app\\\\app\\\\page.tsx\",\n                lineNumber: 125,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\my-app\\\\app\\\\page.tsx\",\n        lineNumber: 109,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Gallery, \"ra/xUV1fgXcJihrjahZlJqvxRVU=\");\n_c = Gallery;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Gallery);\nvar _c;\n$RefreshReg$(_c, \"Gallery\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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S1IsV0FBVTtvQkFBT1MsVUFBVXZDOztzQ0FDL0IsOERBQUN3Qzs0QkFBTUMsTUFBSzs0QkFBT2hCLElBQUc7Ozs7OztzQ0FDdEIsOERBQUNVOzRCQUFPTSxNQUFLO3NDQUFTOzs7Ozs7Ozs7Ozs7Ozs7OztZQUl6QnJELHlCQUFXLDhEQUFDeUM7MEJBQUk7Ozs7OztZQUNoQjdDLCtCQUNDLDhEQUFDNkM7Z0JBQUlDLFdBQVU7Z0JBQWFJLFNBQVNuQzs7a0NBQ25DLDhEQUFDZ0M7d0JBQUlDLEtBQUtoRDt3QkFBZWlELEtBQUk7Ozs7OztrQ0FDN0IsOERBQUNTO2tDQUFLOzs7Ozs7Ozs7Ozs7MEJBSVYsOERBQUNiO2dCQUFJQyxXQUFVOzBCQUFtQjVDLE9BQU95RCxHQUFHLENBQUNqQjs7Ozs7Ozs7Ozs7O0FBR25EO0dBM0hNM0M7S0FBQUE7QUE2SE4sK0RBQWVBLE9BQU9BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL3BhZ2UudHN4Pzc2MDMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgXCIuL2dsb2JhbHMuY3NzXCI7XG5cbmNvbnN0IEdhbGxlcnk6IFJlYWN0LkZDID0gKCkgPT4ge1xuICBjb25zdCBbc2VsZWN0ZWRJbWFnZSwgc2V0U2VsZWN0ZWRJbWFnZV0gPSB1c2VTdGF0ZTxzdHJpbmcgfCBudWxsPihudWxsKTtcbiAgY29uc3QgW2ltYWdlcywgc2V0SW1hZ2VzXSA9IHVzZVN0YXRlPHN0cmluZ1tdPihbXSk7XG5cbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIGNvbnN0IGdldEltYWdlcyA9IGFzeW5jICgpID0+IHtcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChcIi9hcGkvcGhvdG9zXCIpO1xuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpO1xuICAgIHNldEltYWdlcyhkYXRhKTtcbiAgfTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGdldEltYWdlcygpO1xuICB9LCBbXSk7XG5cbiAgY29uc3QgaGFuZGxlSW1hZ2VDbGljayA9IChpbWFnZVNyYzogc3RyaW5nKSA9PiB7XG4gICAgY29uc29sZS5sb2coXCJoYW5kbGVJbWFnZUNsaWNrXCIpO1xuICAgIHNldFNlbGVjdGVkSW1hZ2UoaW1hZ2VTcmMpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZUNsb3NlQ2xpY2sgPSAoKSA9PiB7XG4gICAgY29uc29sZS5sb2coXCJoYW5kbGVDbG9zZUNsaWNrXCIpO1xuICAgIHNldFNlbGVjdGVkSW1hZ2UobnVsbCk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gYXN5bmMgKGV2ZW50OiBhbnkpID0+IHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHNldExvYWRpbmcodHJ1ZSk7XG4gICAgY29uc3QgZmlsZUlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbWFnZVwiKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xuICAgIGlmIChmaWxlSW5wdXQgJiYgZmlsZUlucHV0LmZpbGVzICYmIGZpbGVJbnB1dC5maWxlcy5sZW5ndGggPiAwKSB7XG4gICAgICBjb25zdCBmaWxlID0gZmlsZUlucHV0LmZpbGVzWzBdO1xuXG4gICAgICBjb25zb2xlLmxvZyhmaWxlKTtcblxuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcbiAgICAgICAgZm9ybURhdGEuYXBwZW5kKFwiZmlsZVwiLCBmaWxlKTtcbiAgICAgICAgZm9ybURhdGEuYXBwZW5kKFwidXBsb2FkX3ByZXNldFwiLCBcImpsaGpwNGxmXCIpO1xuICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChcbiAgICAgICAgICBcImh0dHBzOi8vYXBpLmNsb3VkaW5hcnkuY29tL3YxXzEvZHl4ZHp5Z3RxL2ltYWdlL3VwbG9hZFwiLCBcbiAgICAgICAgICB7XG4gICAgICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgICAgICAgYm9keTogZm9ybURhdGEsXG4gICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcblxuICAgICAgICBjb25zdCB1cGxvYWRJbWFnZSA9IGF3YWl0IGZldGNoKFwiL2FwaS9waG90b3NcIiwge1xuICAgICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICAgICAgfSxcbiAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgICBpbWFnZVBhdGg6IGRhdGEuc2VjdXJlX3VybCxcbiAgICAgICAgICB9KSxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29uc3QgdXBsb2FkSW1hZ2VEYXRhID0gYXdhaXQgdXBsb2FkSW1hZ2UuanNvbigpO1xuXG4gICAgICAgIGNvbnNvbGUubG9nKHVwbG9hZEltYWdlRGF0YSk7XG4gICAgICAgIGdldEltYWdlcygpO1xuICAgICAgICBmaWxlSW5wdXQudmFsdWUgPSBcIlwiO1xuICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICBhbGVydChlcnIpO1xuICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlRGVsZXRlID0gYXN5bmMgKGlkOiBzdHJpbmcpID0+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYC9hcGkvcGhvdG9zP2lkPSR7aWR9YCwge1xuICAgICAgICBtZXRob2Q6IFwiREVMRVRFXCIsXG4gICAgICB9KTtcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpO1xuICAgICAgY29uc29sZS5sb2coZGF0YSk7XG4gICAgICBnZXRJbWFnZXMoKTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGFsZXJ0KGVycik7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IHJlbmRlckltYWdlID0gKGltYWdlRGF0YTogYW55LCBpbmRleDogbnVtYmVyKSA9PiB7XG4gICAgY29uc29sZS5sb2coaW1hZ2VEYXRhKTtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbWFnZS1jb25cIiBrZXk9e2luZGV4fT5cbiAgICAgICAgPGltZ1xuICAgICAgICAgIHNyYz17aW1hZ2VEYXRhLmltYWdlUGF0aH1cbiAgICAgICAgICBhbHQ9XCJcIlxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZUltYWdlQ2xpY2soaW1hZ2VEYXRhLmltYWdlUGF0aCl9XG4gICAgICAgIC8+XG4gICAgICAgIDxidXR0b25cbiAgICAgICAgICBjbGFzc05hbWU9XCJkZWxldGUtYnV0dG9uXCJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVEZWxldGUoaW1hZ2VEYXRhLl9pZCl9XG4gICAgICAgID5cbiAgICAgICAgICBWZXJ3aWpkZXJ7XCIgXCJ9XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJmb3JtLWNvbnRhaW5lclwiPlxuICAgICAgICA8Zm9ybSBjbGFzc05hbWU9XCJmb3JtXCIgb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJmaWxlXCIgaWQ9XCJpbWFnZVwiIC8+XG4gICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+VXBsb2FkPC9idXR0b24+XG4gICAgICAgIDwvZm9ybT5cbiAgICAgIDwvc2VjdGlvbj5cblxuICAgICAge2xvYWRpbmcgJiYgPGRpdj5Mb2FkaW5nLi4uPC9kaXY+fVxuICAgICAge3NlbGVjdGVkSW1hZ2UgJiYgKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInZpZXctaW1hZ2VcIiBvbkNsaWNrPXtoYW5kbGVDbG9zZUNsaWNrfT5cbiAgICAgICAgICA8aW1nIHNyYz17c2VsZWN0ZWRJbWFnZX0gYWx0PVwiU2VsZWN0ZWRcIiAvPlxuICAgICAgICAgIDxzcGFuPlg8L3NwYW4+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKX1cblxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbWFnZS1jb250YWluZXJcIj57aW1hZ2VzLm1hcChyZW5kZXJJbWFnZSl9PC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBHYWxsZXJ5O1xuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiR2FsbGVyeSIsInNlbGVjdGVkSW1hZ2UiLCJzZXRTZWxlY3RlZEltYWdlIiwiaW1hZ2VzIiwic2V0SW1hZ2VzIiwibG9hZGluZyIsInNldExvYWRpbmciLCJnZXRJbWFnZXMiLCJyZXMiLCJmZXRjaCIsImRhdGEiLCJqc29uIiwiaGFuZGxlSW1hZ2VDbGljayIsImltYWdlU3JjIiwiY29uc29sZSIsImxvZyIsImhhbmRsZUNsb3NlQ2xpY2siLCJoYW5kbGVTdWJtaXQiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiZmlsZUlucHV0IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImZpbGVzIiwibGVuZ3RoIiwiZmlsZSIsImZvcm1EYXRhIiwiRm9ybURhdGEiLCJhcHBlbmQiLCJtZXRob2QiLCJib2R5IiwidXBsb2FkSW1hZ2UiLCJoZWFkZXJzIiwiSlNPTiIsInN0cmluZ2lmeSIsImltYWdlUGF0aCIsInNlY3VyZV91cmwiLCJ1cGxvYWRJbWFnZURhdGEiLCJ2YWx1ZSIsImVyciIsImFsZXJ0IiwiaGFuZGxlRGVsZXRlIiwiaWQiLCJyZW5kZXJJbWFnZSIsImltYWdlRGF0YSIsImluZGV4IiwiZGl2IiwiY2xhc3NOYW1lIiwiaW1nIiwic3JjIiwiYWx0Iiwib25DbGljayIsImJ1dHRvbiIsIl9pZCIsInNlY3Rpb24iLCJmb3JtIiwib25TdWJtaXQiLCJpbnB1dCIsInR5cGUiLCJzcGFuIiwibWFwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/page.tsx\n"));

/***/ })

});