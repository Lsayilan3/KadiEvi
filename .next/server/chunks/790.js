"use strict";
exports.id = 790;
exports.ids = [790];
exports.modules = {

/***/ 790:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ useMetaData)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _metaData_metaData_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5256);


const localeMap = {
    "1": "tr",
    "2": "en",
    "3": "it",
    "4": "es",
    "5": "ru",
    "6": "ja",
    "7": "de",
    "8": "fr",
    "9": "pt"
};
function useMetaData(page) {
    const { 0: meta , 1: setMeta  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
        description: "",
        title: ""
    });
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        // LocalStorage'den dili al
        const savedLocale = localStorage.getItem("Dil");
        // Varsayılan dil ayarla
        const currentLocale = localeMap[savedLocale] || "tr";
        // Meta bilgilerini ayarla
        const pageMeta = _metaData_metaData_json__WEBPACK_IMPORTED_MODULE_1__[page];
        if (pageMeta) {
            setMeta(pageMeta[currentLocale] || {
                description: "",
                title: ""
            });
        } else {
            setMeta({
                description: "",
                title: ""
            });
        }
        // LocalStorage'deki dil değişikliklerini kontrol et
        const handleStorageChange = ()=>{
            const updatedLocale = localStorage.getItem("Dil");
            const updatedLocaleValue = localeMap[updatedLocale] || "tr";
            setMeta(_metaData_metaData_json__WEBPACK_IMPORTED_MODULE_1__[page] && _metaData_metaData_json__WEBPACK_IMPORTED_MODULE_1__[page][updatedLocaleValue] || {
                description: "",
                title: ""
            });
        };
        window.addEventListener("storage", handleStorageChange);
        return ()=>window.removeEventListener("storage", handleStorageChange);
    }, [
        page
    ]);
    return meta;
}


/***/ })

};
;