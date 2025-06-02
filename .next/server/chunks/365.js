exports.id = 365;
exports.ids = [365];
exports.modules = {

/***/ 1881:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "KF": () => (/* binding */ getGallaryAnasayfa),
/* harmony export */   "fr": () => (/* binding */ getGallaryBlogById),
/* harmony export */   "h3": () => (/* binding */ getGallaryById)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9648);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_0__]);
axios__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

const apiUrl = "https://api.1860kadievi.com/api";
const getGallaryAnasayfa = async ()=>{
    try {
        const response = await axios__WEBPACK_IMPORTED_MODULE_0__["default"].get(`${apiUrl}/galaries/getlist`);
        return response.data;
    } catch (error) {
        console.log("getGallaryAnasayfa api hatası", error);
        return null;
    }
};
const getGallaryById = async (evId)=>{
    try {
        const response = await axios__WEBPACK_IMPORTED_MODULE_0__["default"].get(`${apiUrl}/galaries/getlist`, {
            params: {
                evId
            }
        });
        return response.data;
    } catch (error) {
        console.log("getGallaryById api hatası", error);
        return null;
    }
};
// GALLARY BLOG 
const getGallaryBlogById = async (blogId)=>{
    try {
        const response = await axios__WEBPACK_IMPORTED_MODULE_0__["default"].get(`${apiUrl}/galaryBlogs/getlist`, {
            params: {
                blogId
            }
        });
        return response.data;
    } catch (error) {
        console.log("getGallgetGallaryBlogByIdaryById api hatası", error);
        return null;
    }
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8069:
/***/ (() => {



/***/ })

};
;