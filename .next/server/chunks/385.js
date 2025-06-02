"use strict";
exports.id = 385;
exports.ids = [385];
exports.modules = {

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

/***/ }),

/***/ 4959:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Gf": () => (/* binding */ getOdaEkServiceDilId),
/* harmony export */   "fx": () => (/* binding */ getOdaOlanakDilId),
/* harmony export */   "up": () => (/* binding */ getevDetailDilId),
/* harmony export */   "x4": () => (/* binding */ getEvDilId)
/* harmony export */ });
/* unused harmony exports getEv, getEvById */
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9648);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_0__]);
axios__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

const apiUrl = "https://api.1860kadievi.com/api";
const getEv = async ()=>{
    try {
        const response = await axios.get(apiUrl + `/evs/getall`);
        return response.data;
    } catch (error) {
        console.log("getEv api hatası", error);
        return [];
    }
};
const getEvDilId = async (dil)=>{
    try {
        const url = `${apiUrl}/evs/getall?dil=${dil}`;
        const response = await axios__WEBPACK_IMPORTED_MODULE_0__["default"].get(url);
        return response.data;
    } catch (error) {
        console.log("getEvmDilId api hatası", error);
        return [];
    }
};
const getEvById = async (evId)=>{
    try {
        const response = await axios.get(`${apiUrl}/evDetails/getlist`, {
            params: {
                EvId: evId
            }
        });
        return response.data;
    } catch (error) {
        console.log("getEvById api hatası", error);
        return null;
    }
};
const getevDetailDilId = async (evId, dil)=>{
    try {
        const url = `${apiUrl}/evDetails/getlist?evId=${evId}&dil=${dil}`;
        const response = await axios__WEBPACK_IMPORTED_MODULE_0__["default"].get(url);
        return response.data;
    } catch (error) {
        console.log("getevDetailDilId api hatası", error);
        return [];
    }
};
const getOdaEkServiceDilId = async (evId, dil)=>{
    try {
        const url = `${apiUrl}/odaEkServices/getlist?evId=${evId}&dil=${dil}`;
        const response = await axios__WEBPACK_IMPORTED_MODULE_0__["default"].get(url);
        return response.data;
    } catch (error) {
        console.log("getOdaEkServiceDilId api hatası", error);
        return [];
    }
};
const getOdaOlanakDilId = async (evId, dil)=>{
    try {
        const url = `${apiUrl}/odaOlanaks/getlist?evId=${evId}&dil=${dil}`;
        const response = await axios__WEBPACK_IMPORTED_MODULE_0__["default"].get(url);
        return response.data;
    } catch (error) {
        console.log("getOdaEkServiceDilId api hatası", error);
        return [];
    }
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;