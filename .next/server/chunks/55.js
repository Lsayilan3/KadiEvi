"use strict";
exports.id = 55;
exports.ids = [55];
exports.modules = {

/***/ 7767:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Layout_Layout)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: ./src/components/footer/Footer.jsx
var Footer = __webpack_require__(8853);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: external "react-intl"
var external_react_intl_ = __webpack_require__(3126);
;// CONCATENATED MODULE: ./src/components/header/LayoutHeader.jsx





/*---------Using reducer mange the active or inactive menu----------*/ const initialState = {
    activeMenu: ""
};
function reducer(state, action) {
    switch(action.type){
        case "homeOne":
            return {
                activeMenu: "homeOne"
            };
        case "suits":
            return {
                activeMenu: "suits"
            };
        case "blog":
            return {
                activeMenu: "blog"
            };
        case "pages":
            return {
                activeMenu: "pages"
            };
        case "hotel-facilities":
            return {
                activeMenu: "hotel-facilities"
            };
        default:
            return {
                activeMenu: ""
            };
    }
}
function LayoutHeader({ name  }) {
    const { 0: selectedLocale , 1: setSelectedLocale  } = (0,external_react_.useState)("tr");
    (0,external_react_.useEffect)(()=>{
        if (false) {}
    }, []);
    const handleChangeLocale = (newLocale)=>{
        const localeMap = {
            tr: "1",
            en: "2",
            it: "3",
            es: "4",
            ru: "5",
            ja: "6",
            de: "7",
            fr: "8",
            pt: "9"
        };
        localStorage.setItem("Dil", localeMap[newLocale]);
        window.dispatchEvent(new Event("storage"));
        setSelectedLocale(newLocale);
    };
    const getButtonText = ()=>{
        switch(selectedLocale){
            case "en":
                return "English";
            case "it":
                return "Italiano";
            case "es":
                return "Espa\xf1ol";
            case "ru":
                return "Русский";
            case "ja":
                return "日本語";
            case "de":
                return "Deutsch";
            case "fr":
                return "Fran\xe7ais";
            case "pt":
                return "Portugu\xeas";
            default:
                return "T\xfcrk\xe7e";
        }
    };
    /////////////////////////////////////
    const { 0: showMobileMenu , 1: setMobileMenu  } = (0,external_react_.useState)(false);
    const { 0: state , 1: dispatch  } = (0,external_react_.useReducer)(reducer, initialState);
    const router = (0,router_.useRouter)();
    const currentRoute = router.pathname;
    (0,external_react_.useEffect)(()=>{
        window.addEventListener("scroll", isSticky);
        return ()=>{
            window.removeEventListener("scroll", isSticky);
        };
    });
    const handleMobileMenu = ()=>{
        if (showMobileMenu === false || showMobileMenu === 0) {
            setMobileMenu(1);
        } else {
            setMobileMenu(false);
        }
    };
    const isSticky = (e)=>{
        const header = document.querySelector("header");
        const scrollTop = window.scrollY;
        scrollTop >= 100 ? header.classList.add("sticky") : header.classList ? header.classList.remove("sticky") : header.classList.add("sticky");
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                className: "top-bar2",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                    className: "container-lg container-fluid",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                        className: "row",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                            className: "col-lg-12",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "top-bar-items",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "hotline",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                                                className: "hotline-icon",
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
                                                    width: 26,
                                                    height: 26,
                                                    viewBox: "0 0 26 26",
                                                    xmlns: "http://www.w3.org/2000/svg",
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsx)("path", {
                                                            d: "M20.5488 16.106C20.0165 15.5518 19.3745 15.2554 18.694 15.2554C18.0191 15.2554 17.3716 15.5463 16.8173 16.1005L15.0833 17.8291C14.9406 17.7522 14.7979 17.6809 14.6608 17.6096C14.4632 17.5108 14.2766 17.4175 14.1175 17.3187C12.4932 16.2871 11.0171 14.9426 9.6013 13.2031C8.91536 12.3361 8.45441 11.6063 8.11968 10.8655C8.56965 10.4539 8.9867 10.0259 9.39277 9.61431C9.54642 9.46066 9.70007 9.30152 9.85372 9.14787C11.0061 7.9955 11.0061 6.50291 9.85372 5.35054L8.35564 3.85246C8.18553 3.68234 8.00993 3.50674 7.8453 3.33115C7.51606 2.99092 7.17034 2.63972 6.81366 2.31047C6.28137 1.78368 5.64483 1.50381 4.97535 1.50381C4.30588 1.50381 3.65836 1.78368 3.10961 2.31047C3.10412 2.31596 3.10412 2.31596 3.09864 2.32145L1.23289 4.20365C0.530497 4.90605 0.129911 5.7621 0.0421114 6.75533C-0.089588 8.35768 0.382335 9.85027 0.744508 10.827C1.63348 13.2251 2.96145 15.4475 4.94243 17.8291C7.34594 20.699 10.2378 22.9653 13.5413 24.5622C14.8034 25.1603 16.4881 25.8682 18.3703 25.9889C18.4855 25.9944 18.6062 25.9999 18.716 25.9999C19.9836 25.9999 21.0482 25.5445 21.8823 24.639C21.8878 24.628 21.8987 24.6226 21.9042 24.6116C22.1896 24.2659 22.5188 23.9531 22.8645 23.6184C23.1005 23.3934 23.3419 23.1574 23.5779 22.9105C24.1212 22.3453 24.4065 21.6868 24.4065 21.0118C24.4065 20.3314 24.1157 19.6783 23.5614 19.1296L20.5488 16.106ZM22.5133 21.8843C22.5078 21.8843 22.5078 21.8898 22.5133 21.8843C22.2993 22.1148 22.0798 22.3233 21.8439 22.5538C21.4872 22.894 21.125 23.2507 20.7848 23.6513C20.2305 24.2439 19.5775 24.5238 18.7215 24.5238C18.6392 24.5238 18.5514 24.5238 18.4691 24.5183C16.8393 24.414 15.3247 23.7775 14.1888 23.2342C11.0829 21.7307 8.35564 19.596 6.08931 16.8907C4.21808 14.6354 2.96694 12.5501 2.13833 10.3112C1.62799 8.94484 1.44142 7.88026 1.52373 6.87606C1.57861 6.23402 1.82554 5.70174 2.281 5.24628L4.15223 3.37504C4.42112 3.12262 4.70647 2.98543 4.98633 2.98543C5.33204 2.98543 5.6119 3.19396 5.7875 3.36956C5.79299 3.37504 5.79847 3.38053 5.80396 3.38602C6.1387 3.69881 6.45697 4.02257 6.79171 4.36828C6.96182 4.54388 7.13742 4.71948 7.31302 4.90056L8.8111 6.39865C9.39277 6.98032 9.39277 7.51809 8.8111 8.09976C8.65196 8.2589 8.49831 8.41804 8.33918 8.57169C7.87823 9.04361 7.43923 9.48261 6.96182 9.91063C6.95085 9.92161 6.93987 9.92709 6.93438 9.93807C6.46246 10.41 6.55026 10.8709 6.64903 11.1837C6.65452 11.2002 6.66001 11.2167 6.6655 11.2331C7.05511 12.177 7.60385 13.0659 8.43795 14.125L8.44344 14.1305C9.95798 15.9962 11.5548 17.4504 13.3163 18.5644C13.5413 18.7071 13.7718 18.8223 13.9913 18.932C14.1888 19.0308 14.3754 19.1241 14.5345 19.2229C14.5565 19.2339 14.5784 19.2503 14.6004 19.2613C14.787 19.3546 14.9626 19.3985 15.1436 19.3985C15.5991 19.3985 15.8845 19.1131 15.9777 19.0198L17.8545 17.1431C18.041 16.9566 18.3374 16.7316 18.6831 16.7316C19.0233 16.7316 19.3032 16.9456 19.4733 17.1322C19.4788 17.1376 19.4788 17.1376 19.4842 17.1431L22.5078 20.1667C23.0731 20.7265 23.0731 21.3026 22.5133 21.8843Z"
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsx)("path", {
                                                            d: "M14.0512 6.18495C15.4889 6.4264 16.7949 7.10685 17.8375 8.14947C18.8802 9.19209 19.5551 10.4981 19.8021 11.9358C19.8624 12.298 20.1752 12.5504 20.5319 12.5504C20.5758 12.5504 20.6142 12.5449 20.6581 12.5395C21.0642 12.4736 21.3331 12.0895 21.2672 11.6834C20.9709 9.94387 20.1478 8.35799 18.8911 7.10136C17.6345 5.84473 16.0486 5.0216 14.3091 4.72528C13.903 4.65943 13.5244 4.92832 13.4531 5.3289C13.3817 5.72949 13.6451 6.1191 14.0512 6.18495Z"
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsx)("path", {
                                                            d: "M25.9707 11.4691C25.4823 8.60468 24.1324 5.99813 22.0581 3.92387C19.9838 1.8496 17.3773 0.49968 14.5128 0.011294C14.1122 -0.0600432 13.7336 0.214331 13.6623 0.614917C13.5964 1.02099 13.8653 1.39963 14.2714 1.47096C16.8285 1.90447 19.1607 3.11721 21.0155 4.96649C22.8702 6.82125 24.0775 9.15343 24.511 11.7106C24.5714 12.0728 24.8841 12.3252 25.2408 12.3252C25.2847 12.3252 25.3231 12.3197 25.367 12.3142C25.7676 12.2539 26.042 11.8697 25.9707 11.4691Z"
                                                        })
                                                    ]
                                                })
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "hotline-info",
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsx)("span", {
                                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsx)(external_react_intl_.FormattedMessage, {
                                                            id: "simdiAra",
                                                            values: {
                                                                name
                                                            }
                                                        })
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsx)("h6", {
                                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("a", {
                                                            href: "tel:+903843418866",
                                                            children: "+90 384 341 88 66"
                                                        })
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                                        className: "top-bar-icon",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsx)((link_default()), {
                                            href: "/",
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("a", {})
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "email d-flex align-items-center",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                                                className: "email-icon",
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("svg", {
                                                    width: 26,
                                                    height: 26,
                                                    viewBox: "0 0 26 26",
                                                    xmlns: "http://www.w3.org/2000/svg",
                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("g", {
                                                        clipPath: "url(#clip0_461_205)",
                                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("path", {
                                                            d: "M23.5117 3.30075H2.38674C1.04261 3.30075 -0.0507812 4.39414 -0.0507812 5.73827V20.3633C-0.0507812 21.7074 1.04261 22.8008 2.38674 22.8008H23.5117C24.8558 22.8008 25.9492 21.7074 25.9492 20.3633V5.73827C25.9492 4.39414 24.8558 3.30075 23.5117 3.30075ZM23.5117 4.92574C23.6221 4.92574 23.7271 4.94865 23.8231 4.98865L12.9492 14.4131L2.07526 4.98865C2.17127 4.9487 2.27629 4.92574 2.38668 4.92574H23.5117ZM23.5117 21.1757H2.38674C1.93844 21.1757 1.57421 20.8116 1.57421 20.3632V6.70547L12.4168 16.1024C12.57 16.2349 12.7596 16.3008 12.9492 16.3008C13.1388 16.3008 13.3285 16.2349 13.4816 16.1024L24.3242 6.70547V20.3633C24.3242 20.8116 23.96 21.1757 23.5117 21.1757Z"
                                                        })
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "email-info",
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsx)("span", {
                                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsx)(external_react_intl_.FormattedMessage, {
                                                            id: "emailH",
                                                            values: {
                                                                name
                                                            }
                                                        })
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsx)("h6", {
                                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("a", {
                                                            href: "mailto:info@kadievi.com",
                                                            children: "info@kadievi.com"
                                                        })
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            })
                        })
                    })
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsx)("header", {
                className: "header-area style-2",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                    className: "container-lg container-fluid",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                        className: "row",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "col-12 d-flex align-items-center justify-content-between",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                                    className: "header-logo",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsx)((link_default()), {
                                        href: "/",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("a", {
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("img", {
                                                alt: "image",
                                                src: "/assets/images/header-logo2d.svg"
                                            })
                                        })
                                    })
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: showMobileMenu === 1 ? "main-menu show-menu" : "main-menu",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "mobile-logo-area d-lg-none d-flex justify-content-between align-items-center",
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                                                    className: "mobile-logo-wrap ",
                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsx)((link_default()), {
                                                        href: "/",
                                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("a", {
                                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("img", {
                                                                alt: "image",
                                                                src: "/assets/images/header-logo2d.svg"
                                                            })
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                                                    className: "menu-close-btn",
                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("i", {
                                                        className: "bi bi-x-lg",
                                                        onClick: handleMobileMenu
                                                    })
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                            className: "menu-list",
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime_.jsx)("li", {
                                                    onClick: ()=>dispatch({
                                                            type: "homeOne"
                                                        }),
                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsx)((link_default()), {
                                                        href: "/",
                                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("a", {
                                                            className: `link-style ${currentRoute === "/" ? "active" : "disabled"}`,
                                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsx)(external_react_intl_.FormattedMessage, {
                                                                id: "anasayfa",
                                                                values: {
                                                                    name
                                                                }
                                                            })
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsx)("li", {
                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsx)((link_default()), {
                                                        href: "/about",
                                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("a", {
                                                            className: `link-style ${currentRoute === "/about" ? "active" : "disabled"}`,
                                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsx)(external_react_intl_.FormattedMessage, {
                                                                id: "hakkimizda",
                                                                values: {
                                                                    name
                                                                }
                                                            })
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                    className: "menu-item-has-children",
                                                    onClick: ()=>dispatch({
                                                            type: "suits"
                                                        }),
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsx)("a", {
                                                            href: "#",
                                                            className: state.activeMenu === "suits" ? "active drop-down" : "drop-down",
                                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsx)(external_react_intl_.FormattedMessage, {
                                                                id: "evler",
                                                                values: {
                                                                    name
                                                                }
                                                            })
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsx)("i", {
                                                            className: state.activeMenu === "suits" ? "bx bx-minus dropdown-icon" : "bx bx-plus dropdown-icon"
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                            className: state.activeMenu === "suits" ? "submenu d-block" : "submenu d-xl-block d-none",
                                                            children: [
                                                                /*#__PURE__*/ (0,jsx_runtime_.jsx)("li", {
                                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsx)((link_default()), {
                                                                        href: "/room-suits1",
                                                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("a", {
                                                                            className: currentRoute === "/hotel-facilities" || currentRoute === "/gallery" || currentRoute === "/faq" ? "drop-down active" : "drop-down",
                                                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsx)(external_react_intl_.FormattedMessage, {
                                                                                id: "house_2plus1",
                                                                                values: {
                                                                                    name
                                                                                }
                                                                            })
                                                                        })
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ (0,jsx_runtime_.jsx)("li", {
                                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsx)((link_default()), {
                                                                        href: "/room-suits4",
                                                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("a", {
                                                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsx)(external_react_intl_.FormattedMessage, {
                                                                                id: "suites",
                                                                                values: {
                                                                                    name
                                                                                }
                                                                            })
                                                                        })
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ (0,jsx_runtime_.jsx)("li", {
                                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsx)((link_default()), {
                                                                        href: "/room-suits3",
                                                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("a", {
                                                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsx)(external_react_intl_.FormattedMessage, {
                                                                                id: "luxury",
                                                                                values: {
                                                                                    name
                                                                                }
                                                                            })
                                                                        })
                                                                    })
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                    className: "menu-item-has-children",
                                                    onClick: ()=>dispatch({
                                                            type: "pages"
                                                        }),
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsx)((link_default()), {
                                                            href: "#",
                                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("a", {
                                                                className: currentRoute === "/hotel-facilities" || currentRoute === "/gallery" || currentRoute === "/faq" ? "drop-down active" : "drop-down",
                                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsx)(external_react_intl_.FormattedMessage, {
                                                                    id: "sayfalar",
                                                                    values: {
                                                                        name
                                                                    }
                                                                })
                                                            })
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsx)("i", {
                                                            className: state.activeMenu === "pages" ? "bx bx-minus dropdown-icon" : "bx bx-plus dropdown-icon"
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                            className: state.activeMenu === "pages" ? "submenu d-block" : "submenu d-xl-block d-none",
                                                            children: [
                                                                /*#__PURE__*/ (0,jsx_runtime_.jsx)("li", {
                                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsx)((link_default()), {
                                                                        href: "/hotel-facilities",
                                                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("a", {
                                                                            className: currentRoute === "/hotel-facilities" ? "active" : "disabled",
                                                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsx)(external_react_intl_.FormattedMessage, {
                                                                                id: "tesislerimiz",
                                                                                values: {
                                                                                    name
                                                                                }
                                                                            })
                                                                        })
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ (0,jsx_runtime_.jsx)("li", {
                                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsx)((link_default()), {
                                                                        href: "/faq",
                                                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("a", {
                                                                            className: currentRoute === "/faq" ? "active" : "disabled",
                                                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsx)(external_react_intl_.FormattedMessage, {
                                                                                id: "sss",
                                                                                values: {
                                                                                    name
                                                                                }
                                                                            })
                                                                        })
                                                                    })
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsx)("li", {
                                                    onClick: ()=>dispatch({
                                                            type: "blog"
                                                        }),
                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsx)((link_default()), {
                                                        href: "/blog",
                                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("a", {
                                                            className: "link-style",
                                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsx)(external_react_intl_.FormattedMessage, {
                                                                id: "blog",
                                                                values: {
                                                                    name
                                                                }
                                                            })
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsx)("li", {
                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsx)((link_default()), {
                                                        href: "/contact",
                                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("a", {
                                                            className: currentRoute === "/contact" ? "active" : "disabled",
                                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsx)(external_react_intl_.FormattedMessage, {
                                                                id: "iletisim",
                                                                values: {
                                                                    name
                                                                }
                                                            })
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                    className: "menu-item-has-children",
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                            style: {
                                                                cursor: "pointer"
                                                            },
                                                            onClick: (e)=>e.preventDefault(),
                                                            className: state.activeMenu === "blog" ? "active drop-down" : "drop-down",
                                                            children: [
                                                                /*#__PURE__*/ (0,jsx_runtime_.jsx)("i", {
                                                                    style: {
                                                                        opacity: 0.9,
                                                                        marginRight: 4,
                                                                        color: " #3CAA9F"
                                                                    },
                                                                    className: "fa-regular fa-font-awesome flag-icon bayrak"
                                                                }),
                                                                getButtonText()
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsx)("i", {
                                                            className: state.activeMenu === "blog" ? "bx bx-minus dropdown-icon" : "bx bx-plus dropdown-icon"
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                            className: state.activeMenu === "blog" ? "submenu d-block" : "submenu d-xl-block d-none",
                                                            children: [
                                                                /*#__PURE__*/ (0,jsx_runtime_.jsx)("li", {
                                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("a", {
                                                                        style: {
                                                                            cursor: "pointer"
                                                                        },
                                                                        className: `nav-link ${selectedLocale === "tr" ? "selected" : ""}`,
                                                                        onClick: ()=>handleChangeLocale("tr"),
                                                                        children: "T\xfcrk\xe7e"
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ (0,jsx_runtime_.jsx)("li", {
                                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("a", {
                                                                        style: {
                                                                            cursor: "pointer"
                                                                        },
                                                                        className: `nav-link ${selectedLocale === "en" ? "selected" : ""}`,
                                                                        onClick: ()=>handleChangeLocale("en"),
                                                                        children: "English"
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ (0,jsx_runtime_.jsx)("li", {
                                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("a", {
                                                                        style: {
                                                                            cursor: "pointer"
                                                                        },
                                                                        className: `nav-link ${selectedLocale === "it" ? "selected" : ""}`,
                                                                        onClick: ()=>handleChangeLocale("it"),
                                                                        children: "Italiano"
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ (0,jsx_runtime_.jsx)("li", {
                                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("a", {
                                                                        style: {
                                                                            cursor: "pointer"
                                                                        },
                                                                        className: `nav-link ${selectedLocale === "es" ? "selected" : ""}`,
                                                                        onClick: ()=>handleChangeLocale("es"),
                                                                        children: "Espa\xf1ol"
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ (0,jsx_runtime_.jsx)("li", {
                                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("a", {
                                                                        style: {
                                                                            cursor: "pointer"
                                                                        },
                                                                        className: `nav-link ${selectedLocale === "ru" ? "selected" : ""}`,
                                                                        onClick: ()=>handleChangeLocale("ru"),
                                                                        children: "Русский"
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ (0,jsx_runtime_.jsx)("li", {
                                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("a", {
                                                                        style: {
                                                                            cursor: "pointer"
                                                                        },
                                                                        className: `nav-link ${selectedLocale === "ja" ? "selected" : ""}`,
                                                                        onClick: ()=>handleChangeLocale("ja"),
                                                                        children: "日本語"
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ (0,jsx_runtime_.jsx)("li", {
                                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("a", {
                                                                        style: {
                                                                            cursor: "pointer"
                                                                        },
                                                                        className: `nav-link ${selectedLocale === "de" ? "selected" : ""}`,
                                                                        onClick: ()=>handleChangeLocale("de"),
                                                                        children: "Deutsch"
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ (0,jsx_runtime_.jsx)("li", {
                                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("a", {
                                                                        style: {
                                                                            cursor: "pointer"
                                                                        },
                                                                        className: `nav-link ${selectedLocale === "fr" ? "selected" : ""}`,
                                                                        onClick: ()=>handleChangeLocale("fr"),
                                                                        children: "Fran\xe7ais"
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ (0,jsx_runtime_.jsx)("li", {
                                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("a", {
                                                                        style: {
                                                                            cursor: "pointer"
                                                                        },
                                                                        className: `nav-link ${selectedLocale === "pt" ? "selected" : ""}`,
                                                                        onClick: ()=>handleChangeLocale("pt"),
                                                                        children: "Portugu\xeas"
                                                                    })
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                                            className: "d-lg-none d-block",
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("form", {
                                                className: "mobile-menu-form",
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                        className: "hotline pt-50",
                                                        children: [
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                                                                className: "hotline-icon",
                                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
                                                                    width: 26,
                                                                    height: 26,
                                                                    viewBox: "0 0 26 26",
                                                                    xmlns: "http://www.w3.org/2000/svg",
                                                                    children: [
                                                                        /*#__PURE__*/ (0,jsx_runtime_.jsx)("path", {
                                                                            d: "M20.5488 16.106C20.0165 15.5518 19.3745 15.2554 18.694 15.2554C18.0191 15.2554 17.3716 15.5463 16.8173 16.1005L15.0833 17.8291C14.9406 17.7522 14.7979 17.6809 14.6608 17.6096C14.4632 17.5108 14.2766 17.4175 14.1175 17.3187C12.4932 16.2871 11.0171 14.9426 9.6013 13.2031C8.91536 12.3361 8.45441 11.6063 8.11968 10.8655C8.56965 10.4539 8.9867 10.0259 9.39277 9.61431C9.54642 9.46066 9.70007 9.30152 9.85372 9.14787C11.0061 7.9955 11.0061 6.50291 9.85372 5.35054L8.35564 3.85246C8.18553 3.68234 8.00993 3.50674 7.8453 3.33115C7.51606 2.99092 7.17034 2.63972 6.81366 2.31047C6.28137 1.78368 5.64483 1.50381 4.97535 1.50381C4.30588 1.50381 3.65836 1.78368 3.10961 2.31047C3.10412 2.31596 3.10412 2.31596 3.09864 2.32145L1.23289 4.20365C0.530497 4.90605 0.129911 5.7621 0.0421114 6.75533C-0.089588 8.35768 0.382335 9.85027 0.744508 10.827C1.63348 13.2251 2.96145 15.4475 4.94243 17.8291C7.34594 20.699 10.2378 22.9653 13.5413 24.5622C14.8034 25.1603 16.4881 25.8682 18.3703 25.9889C18.4855 25.9944 18.6062 25.9999 18.716 25.9999C19.9836 25.9999 21.0482 25.5445 21.8823 24.639C21.8878 24.628 21.8987 24.6226 21.9042 24.6116C22.1896 24.2659 22.5188 23.9531 22.8645 23.6184C23.1005 23.3934 23.3419 23.1574 23.5779 22.9105C24.1212 22.3453 24.4065 21.6868 24.4065 21.0118C24.4065 20.3314 24.1157 19.6783 23.5614 19.1296L20.5488 16.106ZM22.5133 21.8843C22.5078 21.8843 22.5078 21.8898 22.5133 21.8843C22.2993 22.1148 22.0798 22.3233 21.8439 22.5538C21.4872 22.894 21.125 23.2507 20.7848 23.6513C20.2305 24.2439 19.5775 24.5238 18.7215 24.5238C18.6392 24.5238 18.5514 24.5238 18.4691 24.5183C16.8393 24.414 15.3247 23.7775 14.1888 23.2342C11.0829 21.7307 8.35564 19.596 6.08931 16.8907C4.21808 14.6354 2.96694 12.5501 2.13833 10.3112C1.62799 8.94484 1.44142 7.88026 1.52373 6.87606C1.57861 6.23402 1.82554 5.70174 2.281 5.24628L4.15223 3.37504C4.42112 3.12262 4.70647 2.98543 4.98633 2.98543C5.33204 2.98543 5.6119 3.19396 5.7875 3.36956C5.79299 3.37504 5.79847 3.38053 5.80396 3.38602C6.1387 3.69881 6.45697 4.02257 6.79171 4.36828C6.96182 4.54388 7.13742 4.71948 7.31302 4.90056L8.8111 6.39865C9.39277 6.98032 9.39277 7.51809 8.8111 8.09976C8.65196 8.2589 8.49831 8.41804 8.33918 8.57169C7.87823 9.04361 7.43923 9.48261 6.96182 9.91063C6.95085 9.92161 6.93987 9.92709 6.93438 9.93807C6.46246 10.41 6.55026 10.8709 6.64903 11.1837C6.65452 11.2002 6.66001 11.2167 6.6655 11.2331C7.05511 12.177 7.60385 13.0659 8.43795 14.125L8.44344 14.1305C9.95798 15.9962 11.5548 17.4504 13.3163 18.5644C13.5413 18.7071 13.7718 18.8223 13.9913 18.932C14.1888 19.0308 14.3754 19.1241 14.5345 19.2229C14.5565 19.2339 14.5784 19.2503 14.6004 19.2613C14.787 19.3546 14.9626 19.3985 15.1436 19.3985C15.5991 19.3985 15.8845 19.1131 15.9777 19.0198L17.8545 17.1431C18.041 16.9566 18.3374 16.7316 18.6831 16.7316C19.0233 16.7316 19.3032 16.9456 19.4733 17.1322C19.4788 17.1376 19.4788 17.1376 19.4842 17.1431L22.5078 20.1667C23.0731 20.7265 23.0731 21.3026 22.5133 21.8843Z"
                                                                        }),
                                                                        /*#__PURE__*/ (0,jsx_runtime_.jsx)("path", {
                                                                            d: "M14.0512 6.18495C15.4889 6.4264 16.7949 7.10685 17.8375 8.14947C18.8802 9.19209 19.5551 10.4981 19.8021 11.9358C19.8624 12.298 20.1752 12.5504 20.5319 12.5504C20.5758 12.5504 20.6142 12.5449 20.6581 12.5395C21.0642 12.4736 21.3331 12.0895 21.2672 11.6834C20.9709 9.94387 20.1478 8.35799 18.8911 7.10136C17.6345 5.84473 16.0486 5.0216 14.3091 4.72528C13.903 4.65943 13.5244 4.92832 13.4531 5.3289C13.3817 5.72949 13.6451 6.1191 14.0512 6.18495Z"
                                                                        }),
                                                                        /*#__PURE__*/ (0,jsx_runtime_.jsx)("path", {
                                                                            d: "M25.9707 11.4691C25.4823 8.60468 24.1324 5.99813 22.0581 3.92387C19.9838 1.8496 17.3773 0.49968 14.5128 0.011294C14.1122 -0.0600432 13.7336 0.214331 13.6623 0.614917C13.5964 1.02099 13.8653 1.39963 14.2714 1.47096C16.8285 1.90447 19.1607 3.11721 21.0155 4.96649C22.8702 6.82125 24.0775 9.15343 24.511 11.7106C24.5714 12.0728 24.8841 12.3252 25.2408 12.3252C25.2847 12.3252 25.3231 12.3197 25.367 12.3142C25.7676 12.2539 26.042 11.8697 25.9707 11.4691Z"
                                                                        })
                                                                    ]
                                                                })
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                className: "hotline-info",
                                                                children: [
                                                                    /*#__PURE__*/ (0,jsx_runtime_.jsx)("span", {
                                                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsx)(external_react_intl_.FormattedMessage, {
                                                                            id: "emailH",
                                                                            values: {
                                                                                name
                                                                            }
                                                                        })
                                                                    }),
                                                                    /*#__PURE__*/ (0,jsx_runtime_.jsx)("h6", {
                                                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("a", {
                                                                            href: "tel:+903843418866",
                                                                            children: "+90 384 341 88 66"
                                                                        })
                                                                    })
                                                                ]
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                        className: "email pt-20 d-flex align-items-center",
                                                        children: [
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                                                                className: "email-icon",
                                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("svg", {
                                                                    width: 26,
                                                                    height: 26,
                                                                    viewBox: "0 0 26 26",
                                                                    xmlns: "http://www.w3.org/2000/svg",
                                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("g", {
                                                                        clipPath: "url(#clip0_461_205)",
                                                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("path", {
                                                                            d: "M23.5117 3.30075H2.38674C1.04261 3.30075 -0.0507812 4.39414 -0.0507812 5.73827V20.3633C-0.0507812 21.7074 1.04261 22.8008 2.38674 22.8008H23.5117C24.8558 22.8008 25.9492 21.7074 25.9492 20.3633V5.73827C25.9492 4.39414 24.8558 3.30075 23.5117 3.30075ZM23.5117 4.92574C23.6221 4.92574 23.7271 4.94865 23.8231 4.98865L12.9492 14.4131L2.07526 4.98865C2.17127 4.9487 2.27629 4.92574 2.38668 4.92574H23.5117ZM23.5117 21.1757H2.38674C1.93844 21.1757 1.57421 20.8116 1.57421 20.3632V6.70547L12.4168 16.1024C12.57 16.2349 12.7596 16.3008 12.9492 16.3008C13.1388 16.3008 13.3285 16.2349 13.4816 16.1024L24.3242 6.70547V20.3633C24.3242 20.8116 23.96 21.1757 23.5117 21.1757Z"
                                                                        })
                                                                    })
                                                                })
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                className: "email-info",
                                                                children: [
                                                                    /*#__PURE__*/ (0,jsx_runtime_.jsx)("span", {
                                                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsx)(external_react_intl_.FormattedMessage, {
                                                                            id: "emailH",
                                                                            values: {
                                                                                name
                                                                            }
                                                                        })
                                                                    }),
                                                                    /*#__PURE__*/ (0,jsx_runtime_.jsx)("h6", {
                                                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("a", {
                                                                            href: "mailto:info@kadievi.com",
                                                                            children: "info@kadievi.com"
                                                                        })
                                                                    })
                                                                ]
                                                            })
                                                        ]
                                                    })
                                                ]
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "nav-right d-flex align-items-center",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                                            className: "header-btn",
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsx)((link_default()), {
                                                href: "/room-suits1",
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("a", {
                                                    className: "btn--primary eg-btn",
                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsx)(external_react_intl_.FormattedMessage, {
                                                        id: "rezervasyon",
                                                        values: {
                                                            name
                                                        }
                                                    })
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                                            className: "mobile-menu-btn d-lg-none d-block",
                                            onClick: handleMobileMenu,
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("i", {
                                                className: "bx bx-menu"
                                            })
                                        })
                                    ]
                                })
                            ]
                        })
                    })
                })
            })
        ]
    });
}
/* harmony default export */ const header_LayoutHeader = (LayoutHeader);

;// CONCATENATED MODULE: ./src/components/Layout/Layout.jsx





function Layout({ children  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsx)((head_default()), {
                children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("link", {
                    rel: "icon",
                    href: "favicon.ico"
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsx)(header_LayoutHeader, {}),
            children,
            /*#__PURE__*/ (0,jsx_runtime_.jsx)(Footer/* default */.Z, {})
        ]
    });
}
/* harmony default export */ const Layout_Layout = (Layout);


/***/ }),

/***/ 8870:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_3__);




function Breadcrum({ name  }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
        className: "breadcrumb-section",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
            className: "container",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                className: "row d-flex justify-content-center align-items-center text-center",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "col-lg-8",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h2", {
                            className: "breadcrumb-title",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_3__.FormattedMessage, {
                                id: "suitHouse",
                                values: {
                                    name
                                }
                            })
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("nav", {
                            "aria-label": "breadcrumb",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ol", {
                                className: "breadcrumb d-flex justify-content-center",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("li", {
                                        className: "breadcrumb-item",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                            href: "/",
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a", {
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_3__.FormattedMessage, {
                                                    id: "anasayfa",
                                                    values: {
                                                        name
                                                    }
                                                })
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("li", {
                                        className: "breadcrumb-item active",
                                        "aria-current": "page",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_3__.FormattedMessage, {
                                            id: "suitHouse",
                                            values: {
                                                name
                                            }
                                        })
                                    })
                                ]
                            })
                        })
                    ]
                })
            })
        })
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Breadcrum);


/***/ })

};
;