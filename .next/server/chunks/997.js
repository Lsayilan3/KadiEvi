"use strict";
exports.id = 997;
exports.ids = [997];
exports.modules = {

/***/ 1217:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var yet_another_react_lightbox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5717);
/* harmony import */ var yet_another_react_lightbox_styles_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8069);
/* harmony import */ var yet_another_react_lightbox_styles_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(yet_another_react_lightbox_styles_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var yet_another_react_lightbox_plugins_fullscreen__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1485);
/* harmony import */ var _services_gallaryServices_gallaryService__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1881);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _services_homeServices_anasayfaService__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2297);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(3126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_8__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([yet_another_react_lightbox__WEBPACK_IMPORTED_MODULE_2__, yet_another_react_lightbox_plugins_fullscreen__WEBPACK_IMPORTED_MODULE_4__, _services_gallaryServices_gallaryService__WEBPACK_IMPORTED_MODULE_5__, _services_homeServices_anasayfaService__WEBPACK_IMPORTED_MODULE_7__]);
([yet_another_react_lightbox__WEBPACK_IMPORTED_MODULE_2__, yet_another_react_lightbox_plugins_fullscreen__WEBPACK_IMPORTED_MODULE_4__, _services_gallaryServices_gallaryService__WEBPACK_IMPORTED_MODULE_5__, _services_homeServices_anasayfaService__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);










function Gallary1({ evId , name  }) {
    const { 0: isOpenimg , 1: setOpenimg  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
        openingState: false,
        openingIndex: 0
    });
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter)();
    const { 0: evData , 1: setEvData  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const { 0: slides , 1: setSlides  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (evId) {
            (0,_services_gallaryServices_gallaryService__WEBPACK_IMPORTED_MODULE_5__/* .getGallaryById */ .h3)(evId).then((data)=>{
                if (data && data.length > 0) {
                    // resimTipId === 2 olanları filtrele
                    const filteredData = data.filter((item)=>item.resimTipiId === 2);
                    setEvData(filteredData);
                    // console.log("Filtered data", filteredData);
                    const dynamicSlides = filteredData.map((item, index)=>({
                            src: `${(0,_services_homeServices_anasayfaService__WEBPACK_IMPORTED_MODULE_7__/* .getPhotoUrl */ .h)()}${item.photo}`,
                            index: index
                        }));
                    setSlides(dynamicSlides);
                }
            });
        }
    }, [
        evId
    ]);
    const photoUrl = (0,_services_homeServices_anasayfaService__WEBPACK_IMPORTED_MODULE_7__/* .getPhotoUrl */ .h)();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                className: "home-one-gallery mb-120",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "container",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                            className: "row",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                                className: "col-12",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "section-title1 text-center",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_8__.FormattedMessage, {
                                                id: "gallery",
                                                values: {
                                                    name
                                                }
                                            })
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h2", {
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_8__.FormattedMessage, {
                                                id: "otelimiziGorun",
                                                values: {
                                                    name
                                                }
                                            })
                                        })
                                    ]
                                })
                            })
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                            className: "row g-2",
                            children: evData && evData.map((item, index)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                                    className: "col-lg-4 col-md-6",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "gallery-item one",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img", {
                                                className: "img-fluid",
                                                src: `${(0,_services_homeServices_anasayfaService__WEBPACK_IMPORTED_MODULE_7__/* .getPhotoUrl */ .h)()}${item.photo}`,
                                                alt: `Gallery Image ${index + 1}`
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a", {
                                                className: "gallary-item-overlay",
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("i", {
                                                    className: "bi bi-eye",
                                                    onClick: ()=>setOpenimg({
                                                            openingState: true,
                                                            openingIndex: index
                                                        })
                                                })
                                            })
                                        ]
                                    })
                                }, item.galaryId))
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(yet_another_react_lightbox__WEBPACK_IMPORTED_MODULE_2__["default"], {
                open: isOpenimg.openingState,
                plugins: [
                    yet_another_react_lightbox_plugins_fullscreen__WEBPACK_IMPORTED_MODULE_4__["default"]
                ],
                index: isOpenimg.openingIndex,
                close: ()=>setOpenimg(false),
                styles: {
                    container: {
                        backgroundColor: "rgba(0, 0, 0, .9)"
                    }
                },
                slides: slides
            })
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Gallary1);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 85:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _services_housesServices_houseService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4959);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_3__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_services_housesServices_houseService__WEBPACK_IMPORTED_MODULE_2__]);
_services_housesServices_houseService__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




function RoomFeatures({ evId , name  }) {
    const { 0: evData , 1: setEvData  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const { 0: evDetail , 1: setEvDetail  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const { 0: ekServisler , 1: setEkServisler  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const { 0: olanaklar , 1: setOlanaklar  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const defaultDil = "tr";
    const { 0: dil , 1: setDil  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(defaultDil);
    const fetchEvData = async (evId, dil)=>{
        try {
            const [evDetail, ekServisData, olanakData] = await Promise.all([
                (0,_services_housesServices_houseService__WEBPACK_IMPORTED_MODULE_2__/* .getevDetailDilId */ .up)(evId, dil),
                (0,_services_housesServices_houseService__WEBPACK_IMPORTED_MODULE_2__/* .getOdaEkServiceDilId */ .Gf)(evId, dil),
                (0,_services_housesServices_houseService__WEBPACK_IMPORTED_MODULE_2__/* .getOdaOlanakDilId */ .fx)(evId, dil), 
            ]);
            if (evDetail && evDetail.length > 0) {
                setEvData(evDetail);
            } else {
                setEvData(null);
            }
            setEvDetail(evDetail || []);
            setEkServisler(ekServisData || []);
            setOlanaklar(olanakData || []);
        // console.log("evDetail:", evDetail);
        // console.log("ekServisler:", ekServisData);
        // console.log("olanaklar:", olanakData);
        } catch (error) {
            console.error("fetchEvData hatası:", error);
            setEvData(null);
            setEkServisler([]);
            setOlanaklar([]);
        }
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (false) {}
    }, [
        evId
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const handleStorageChange = (event)=>{
            if (event.key === "Dil") {
                const newDil = event.newValue || defaultDil;
                setDil(newDil);
                fetchEvData(evId, newDil);
            }
        };
        if (false) {}
    }, [
        dil,
        evId
    ]);
    if (!evData) return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", {});
    // const photoUrl = getPhotoUrl();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            evDetail && evDetail.map((evDetail, index)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h2", {
                            children: evDetail.baslik
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                            className: "stars d-flex align-items-center",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("li", {
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("i", {
                                        className: "bi bi-star-fill"
                                    })
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("li", {
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("i", {
                                        className: "bi bi-star-fill"
                                    })
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("li", {
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("i", {
                                        className: "bi bi-star-fill"
                                    })
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("li", {
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("i", {
                                        className: "bi bi-star-fill"
                                    })
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("li", {
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("i", {
                                        className: "bi bi-star-fill"
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", {
                            dangerouslySetInnerHTML: {
                                __html: evDetail.editor // evDetail.editor içeriğini HTML olarak render et
                            }
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", {
                            children: evDetail.p
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h4", {
                            children: evDetail.cocukBaslik
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", {
                            children: evDetail.cocukP
                        })
                    ]
                })),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h4", {
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_3__.FormattedMessage, {
                    id: "oda_ozelligi",
                    values: {
                        name
                    }
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("ul", {
                className: "room-features d-flex align-items-center",
                children: ekServisler.map((ekServis, index)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                                children: ekServis.baslik
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                                style: {
                                    marginLeft: "5px"
                                },
                                dangerouslySetInnerHTML: {
                                    __html: ekServis.icon // Her ekServis öğesinin icon özelliğini kullanıyoruz
                                }
                            })
                        ]
                    }, index))
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("ul", {
                className: "room-features extra-service d-flex align-items-center",
                children: olanaklar.map((olanaklar, index)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("i", {
                                className: "bi bi-circle"
                            }),
                            olanaklar.baslik
                        ]
                    }, index))
            })
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RoomFeatures);
{}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;