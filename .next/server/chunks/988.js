"use strict";
exports.id = 988;
exports.ids = [988];
exports.modules = {

/***/ 3878:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FG": () => (/* binding */ getBlogDetailDilId),
/* harmony export */   "Jj": () => (/* binding */ getBlogilId)
/* harmony export */ });
/* unused harmony exports getBlog, getBlogById */
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9648);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_0__]);
axios__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

const apiUrl = "https://api.1860kadievi.com/api";
const getBlog = async ()=>{
    try {
        const response = await axios.get(apiUrl + `/blogs/getall`);
        return response.data;
    } catch (error) {
        console.log("getBlog api hatası", error);
        return [];
    }
};
const getBlogilId = async (dil)=>{
    try {
        const url = `${apiUrl}/blogs/getall?dil=${dil}`;
        const response = await axios__WEBPACK_IMPORTED_MODULE_0__["default"].get(url);
        return response.data;
    } catch (error) {
        console.log("getBlogilId api hatası", error);
        return [];
    }
};
const getBlogById = async (blogId)=>{
    try {
        const response = await axios.get(`${apiUrl}/blogDetails/getlist`, {
            params: {
                BlogId: blogId
            }
        });
        return response.data;
    } catch (error) {
        console.log("getBlogById api hatası", error);
        return null;
    }
};
const getBlogDetailDilId = async (blogId, dil)=>{
    try {
        const url = `${apiUrl}/blogDetails/getlist?blogId=${blogId}&dil=${dil}`;
        const response = await axios__WEBPACK_IMPORTED_MODULE_0__["default"].get(url);
        return response.data;
    } catch (error) {
        console.log("getBlogDetailDilId api hatası", error);
        return [];
    }
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2297:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "b4": () => (/* binding */ getAnasayfaDilId),
/* harmony export */   "h": () => (/* binding */ getPhotoUrl)
/* harmony export */ });
/* unused harmony export getAnasayfa */
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9648);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_0__]);
axios__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

const apiUrl = "https://api.1860kadievi.com/api";
const getAnasayfa = async ()=>{
    try {
        const response = await axios.get(apiUrl + `/anasayfas/getall`);
        return response.data;
    } catch (error) {
        console.log("getAnasayfa api hatası", error);
        return [];
    }
};
const getAnasayfaDilId = async (dil)=>{
    try {
        const url = `${apiUrl}/anasayfas/getall?dil=${dil}`;
        const response = await axios__WEBPACK_IMPORTED_MODULE_0__["default"].get(url);
        return response.data;
    } catch (error) {
        console.log("getAnasayfaDilId api hatası", error);
        return [];
    }
};
const getPhotoUrl = ()=>{
    return "https://api.1860kadievi.com";
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;