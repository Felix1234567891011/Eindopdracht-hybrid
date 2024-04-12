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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _globals_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./globals.css */ \"(app-pages-browser)/./app/globals.css\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nconst Gallery = ()=>{\n    _s();\n    const [selectedImage, setSelectedImage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [images, setImages] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const getImages = async ()=>{\n        const res = await fetch(\"/api/photos\");\n        const data = await res.json();\n        setImages(data);\n    };\n    // Fetch images on component mount\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        getImages();\n    }, []);\n    // Function to handle image selection\n    const handleImageClick = (imageSrc)=>{\n        console.log(\"handleImageClick\");\n        setSelectedImage(imageSrc);\n    };\n    // Function to close the selected image view\n    const handleCloseClick = ()=>{\n        console.log(\"handleCloseClick\");\n        setSelectedImage(null);\n    };\n    // Function to handle form submission\n    const handleSubmit = async (event)=>{\n        event.preventDefault();\n        setLoading(true);\n        const fileInput = document.getElementById(\"image\");\n        if (fileInput && fileInput.files && fileInput.files.length > 0) {\n            const file = fileInput.files[0];\n            console.log(file);\n            try {\n                const formData = new FormData();\n                formData.append(\"file\", file);\n                formData.append(\"upload_preset\", \"jlhjp4lf\");\n                const res = await fetch(\"https://api.cloudinary.com/v1_1/dyxdzygtq/image/upload\", {\n                    method: \"POST\",\n                    body: formData\n                });\n                const data = await res.json();\n                const uploadImage = await fetch(\"/api/photos\", {\n                    method: \"POST\",\n                    headers: {\n                        \"Content-Type\": \"application/json\"\n                    },\n                    body: JSON.stringify({\n                        imagePath: data.secure_url\n                    })\n                });\n                const uploadImageData = await uploadImage.json();\n                console.log(uploadImageData);\n                getImages();\n                fileInput.value = \"\";\n                setLoading(false);\n            } catch (err) {\n                alert(err);\n                setLoading(false);\n            }\n        }\n    };\n    const handleDelete = async (id)=>{\n        try {\n            const res = await fetch(\"/api/photos?id=\".concat(id), {\n                method: \"DELETE\"\n            });\n            const data = await res.json();\n            console.log(data);\n            getImages();\n        } catch (err) {\n            alert(err);\n        }\n    };\n    // Function to render each image in the gallery\n    const renderImage = (imageData, index)=>{\n        console.log(imageData);\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"image-con\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                    src: imageData.imagePath,\n                    alt: \"\",\n                    onClick: ()=>handleImageClick(imageData.imagePath)\n                }, void 0, false, {\n                    fileName: \"D:\\\\my-app\\\\app\\\\page.tsx\",\n                    lineNumber: 98,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    className: \"delete-button\",\n                    onClick: ()=>handleDelete(imageData._id),\n                    children: [\n                        \"Delete\",\n                        \" \"\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\my-app\\\\app\\\\page.tsx\",\n                    lineNumber: 103,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, index, true, {\n            fileName: \"D:\\\\my-app\\\\app\\\\page.tsx\",\n            lineNumber: 97,\n            columnNumber: 7\n        }, undefined);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                className: \"form-container\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                    className: \"form\",\n                    onSubmit: handleSubmit,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"file\",\n                            id: \"image\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\my-app\\\\app\\\\page.tsx\",\n                            lineNumber: 117,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            type: \"submit\",\n                            children: \"Upload\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\my-app\\\\app\\\\page.tsx\",\n                            lineNumber: 118,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\my-app\\\\app\\\\page.tsx\",\n                    lineNumber: 116,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"D:\\\\my-app\\\\app\\\\page.tsx\",\n                lineNumber: 115,\n                columnNumber: 7\n            }, undefined),\n            loading && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: \"Loading...\"\n            }, void 0, false, {\n                fileName: \"D:\\\\my-app\\\\app\\\\page.tsx\",\n                lineNumber: 122,\n                columnNumber: 19\n            }, undefined),\n            selectedImage && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"view-image\",\n                onClick: handleCloseClick,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        src: selectedImage,\n                        alt: \"Selected\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\my-app\\\\app\\\\page.tsx\",\n                        lineNumber: 125,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        children: \"X\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\my-app\\\\app\\\\page.tsx\",\n                        lineNumber: 126,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\my-app\\\\app\\\\page.tsx\",\n                lineNumber: 124,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"image-container\",\n                children: images.map(renderImage)\n            }, void 0, false, {\n                fileName: \"D:\\\\my-app\\\\app\\\\page.tsx\",\n                lineNumber: 130,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\my-app\\\\app\\\\page.tsx\",\n        lineNumber: 114,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Gallery, \"ra/xUV1fgXcJihrjahZlJqvxRVU=\");\n_c = Gallery;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Gallery);\nvar _c;\n$RefreshReg$(_c, \"Gallery\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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cEM7SUFFQSxxQkFDRSw4REFBQ0M7OzBCQUNDLDhEQUFDUTtnQkFBUVAsV0FBVTswQkFDakIsNEVBQUNRO29CQUFLUixXQUFVO29CQUFPUyxVQUFVdkM7O3NDQUMvQiw4REFBQ3dDOzRCQUFNQyxNQUFLOzRCQUFPaEIsSUFBRzs7Ozs7O3NDQUN0Qiw4REFBQ1U7NEJBQU9NLE1BQUs7c0NBQVM7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBSXpCckQseUJBQVcsOERBQUN5QzswQkFBSTs7Ozs7O1lBQ2hCN0MsK0JBQ0MsOERBQUM2QztnQkFBSUMsV0FBVTtnQkFBYUksU0FBU25DOztrQ0FDbkMsOERBQUNnQzt3QkFBSUMsS0FBS2hEO3dCQUFlaUQsS0FBSTs7Ozs7O2tDQUM3Qiw4REFBQ1M7a0NBQUs7Ozs7Ozs7Ozs7OzswQkFJViw4REFBQ2I7Z0JBQUlDLFdBQVU7MEJBQW1CNUMsT0FBT3lELEdBQUcsQ0FBQ2pCOzs7Ozs7Ozs7Ozs7QUFHbkQ7R0FoSU0zQztLQUFBQTtBQWtJTiwrREFBZUEsT0FBT0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvcGFnZS50c3g/NzYwMyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBcIi4vZ2xvYmFscy5jc3NcIjtcblxuY29uc3QgR2FsbGVyeTogUmVhY3QuRkMgPSAoKSA9PiB7XG4gIGNvbnN0IFtzZWxlY3RlZEltYWdlLCBzZXRTZWxlY3RlZEltYWdlXSA9IHVzZVN0YXRlPHN0cmluZyB8IG51bGw+KG51bGwpO1xuICBjb25zdCBbaW1hZ2VzLCBzZXRJbWFnZXNdID0gdXNlU3RhdGU8c3RyaW5nW10+KFtdKTtcblxuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgY29uc3QgZ2V0SW1hZ2VzID0gYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKFwiL2FwaS9waG90b3NcIik7XG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XG4gICAgc2V0SW1hZ2VzKGRhdGEpO1xuICB9O1xuXG4gIC8vIEZldGNoIGltYWdlcyBvbiBjb21wb25lbnQgbW91bnRcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBnZXRJbWFnZXMoKTtcbiAgfSwgW10pO1xuXG4gIC8vIEZ1bmN0aW9uIHRvIGhhbmRsZSBpbWFnZSBzZWxlY3Rpb25cbiAgY29uc3QgaGFuZGxlSW1hZ2VDbGljayA9IChpbWFnZVNyYzogc3RyaW5nKSA9PiB7XG4gICAgY29uc29sZS5sb2coXCJoYW5kbGVJbWFnZUNsaWNrXCIpO1xuICAgIHNldFNlbGVjdGVkSW1hZ2UoaW1hZ2VTcmMpO1xuICB9O1xuXG4gIC8vIEZ1bmN0aW9uIHRvIGNsb3NlIHRoZSBzZWxlY3RlZCBpbWFnZSB2aWV3XG4gIGNvbnN0IGhhbmRsZUNsb3NlQ2xpY2sgPSAoKSA9PiB7XG4gICAgY29uc29sZS5sb2coXCJoYW5kbGVDbG9zZUNsaWNrXCIpO1xuICAgIHNldFNlbGVjdGVkSW1hZ2UobnVsbCk7XG4gIH07XG5cbiAgLy8gRnVuY3Rpb24gdG8gaGFuZGxlIGZvcm0gc3VibWlzc2lvblxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSBhc3luYyAoZXZlbnQ6IGFueSkgPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgc2V0TG9hZGluZyh0cnVlKTtcbiAgICBjb25zdCBmaWxlSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImltYWdlXCIpIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG4gICAgaWYgKGZpbGVJbnB1dCAmJiBmaWxlSW5wdXQuZmlsZXMgJiYgZmlsZUlucHV0LmZpbGVzLmxlbmd0aCA+IDApIHtcbiAgICAgIGNvbnN0IGZpbGUgPSBmaWxlSW5wdXQuZmlsZXNbMF07XG5cbiAgICAgIGNvbnNvbGUubG9nKGZpbGUpO1xuXG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xuICAgICAgICBmb3JtRGF0YS5hcHBlbmQoXCJmaWxlXCIsIGZpbGUpO1xuICAgICAgICBmb3JtRGF0YS5hcHBlbmQoXCJ1cGxvYWRfcHJlc2V0XCIsIFwiamxoanA0bGZcIik7IFxuICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChcbiAgICAgICAgICBcImh0dHBzOi8vYXBpLmNsb3VkaW5hcnkuY29tL3YxXzEvZHl4ZHp5Z3RxL2ltYWdlL3VwbG9hZFwiLCBcbiAgICAgICAgICB7XG4gICAgICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgICAgICAgYm9keTogZm9ybURhdGEsXG4gICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcblxuICAgICAgICBjb25zdCB1cGxvYWRJbWFnZSA9IGF3YWl0IGZldGNoKFwiL2FwaS9waG90b3NcIiwge1xuICAgICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICAgICAgfSxcbiAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgICBpbWFnZVBhdGg6IGRhdGEuc2VjdXJlX3VybCxcbiAgICAgICAgICB9KSxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29uc3QgdXBsb2FkSW1hZ2VEYXRhID0gYXdhaXQgdXBsb2FkSW1hZ2UuanNvbigpO1xuXG4gICAgICAgIGNvbnNvbGUubG9nKHVwbG9hZEltYWdlRGF0YSk7XG4gICAgICAgIGdldEltYWdlcygpO1xuICAgICAgICBmaWxlSW5wdXQudmFsdWUgPSBcIlwiO1xuICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICBhbGVydChlcnIpO1xuICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlRGVsZXRlID0gYXN5bmMgKGlkOiBzdHJpbmcpID0+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYC9hcGkvcGhvdG9zP2lkPSR7aWR9YCwge1xuICAgICAgICBtZXRob2Q6IFwiREVMRVRFXCIsXG4gICAgICB9KTtcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpO1xuICAgICAgY29uc29sZS5sb2coZGF0YSk7XG4gICAgICBnZXRJbWFnZXMoKTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGFsZXJ0KGVycik7XG4gICAgfVxuICB9O1xuXG4gIC8vIEZ1bmN0aW9uIHRvIHJlbmRlciBlYWNoIGltYWdlIGluIHRoZSBnYWxsZXJ5XG4gIGNvbnN0IHJlbmRlckltYWdlID0gKGltYWdlRGF0YTogYW55LCBpbmRleDogbnVtYmVyKSA9PiB7XG4gICAgY29uc29sZS5sb2coaW1hZ2VEYXRhKTtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbWFnZS1jb25cIiBrZXk9e2luZGV4fT5cbiAgICAgICAgPGltZ1xuICAgICAgICAgIHNyYz17aW1hZ2VEYXRhLmltYWdlUGF0aH1cbiAgICAgICAgICBhbHQ9XCJcIlxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZUltYWdlQ2xpY2soaW1hZ2VEYXRhLmltYWdlUGF0aCl9XG4gICAgICAgIC8+XG4gICAgICAgIDxidXR0b25cbiAgICAgICAgICBjbGFzc05hbWU9XCJkZWxldGUtYnV0dG9uXCJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVEZWxldGUoaW1hZ2VEYXRhLl9pZCl9XG4gICAgICAgID5cbiAgICAgICAgICBEZWxldGV7XCIgXCJ9XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJmb3JtLWNvbnRhaW5lclwiPlxuICAgICAgICA8Zm9ybSBjbGFzc05hbWU9XCJmb3JtXCIgb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJmaWxlXCIgaWQ9XCJpbWFnZVwiIC8+XG4gICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+VXBsb2FkPC9idXR0b24+XG4gICAgICAgIDwvZm9ybT5cbiAgICAgIDwvc2VjdGlvbj5cblxuICAgICAge2xvYWRpbmcgJiYgPGRpdj5Mb2FkaW5nLi4uPC9kaXY+fVxuICAgICAge3NlbGVjdGVkSW1hZ2UgJiYgKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInZpZXctaW1hZ2VcIiBvbkNsaWNrPXtoYW5kbGVDbG9zZUNsaWNrfT5cbiAgICAgICAgICA8aW1nIHNyYz17c2VsZWN0ZWRJbWFnZX0gYWx0PVwiU2VsZWN0ZWRcIiAvPlxuICAgICAgICAgIDxzcGFuPlg8L3NwYW4+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKX1cblxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbWFnZS1jb250YWluZXJcIj57aW1hZ2VzLm1hcChyZW5kZXJJbWFnZSl9PC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBHYWxsZXJ5O1xuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiR2FsbGVyeSIsInNlbGVjdGVkSW1hZ2UiLCJzZXRTZWxlY3RlZEltYWdlIiwiaW1hZ2VzIiwic2V0SW1hZ2VzIiwibG9hZGluZyIsInNldExvYWRpbmciLCJnZXRJbWFnZXMiLCJyZXMiLCJmZXRjaCIsImRhdGEiLCJqc29uIiwiaGFuZGxlSW1hZ2VDbGljayIsImltYWdlU3JjIiwiY29uc29sZSIsImxvZyIsImhhbmRsZUNsb3NlQ2xpY2siLCJoYW5kbGVTdWJtaXQiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiZmlsZUlucHV0IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImZpbGVzIiwibGVuZ3RoIiwiZmlsZSIsImZvcm1EYXRhIiwiRm9ybURhdGEiLCJhcHBlbmQiLCJtZXRob2QiLCJib2R5IiwidXBsb2FkSW1hZ2UiLCJoZWFkZXJzIiwiSlNPTiIsInN0cmluZ2lmeSIsImltYWdlUGF0aCIsInNlY3VyZV91cmwiLCJ1cGxvYWRJbWFnZURhdGEiLCJ2YWx1ZSIsImVyciIsImFsZXJ0IiwiaGFuZGxlRGVsZXRlIiwiaWQiLCJyZW5kZXJJbWFnZSIsImltYWdlRGF0YSIsImluZGV4IiwiZGl2IiwiY2xhc3NOYW1lIiwiaW1nIiwic3JjIiwiYWx0Iiwib25DbGljayIsImJ1dHRvbiIsIl9pZCIsInNlY3Rpb24iLCJmb3JtIiwib25TdWJtaXQiLCJpbnB1dCIsInR5cGUiLCJzcGFuIiwibWFwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/page.tsx\n"));

/***/ })

});