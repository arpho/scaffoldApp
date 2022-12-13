"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_modules_user_pages_not-authorized_not-authorized_module_ts"],{

/***/ 15812:
/*!****************************************************************************!*\
  !*** ./src/app/modules/user/pages/not-authorized/not-authorized.module.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotAuthorizedPageModule": () => (/* binding */ NotAuthorizedPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _not_authorized_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./not-authorized.page */ 7618);







const routes = [
    {
        path: '',
        component: _not_authorized_page__WEBPACK_IMPORTED_MODULE_0__.NotAuthorizedPage
    }
];
let NotAuthorizedPageModule = class NotAuthorizedPageModule {
};
NotAuthorizedPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forChild(routes)
        ],
        declarations: [_not_authorized_page__WEBPACK_IMPORTED_MODULE_0__.NotAuthorizedPage]
    })
], NotAuthorizedPageModule);



/***/ }),

/***/ 7618:
/*!**************************************************************************!*\
  !*** ./src/app/modules/user/pages/not-authorized/not-authorized.page.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotAuthorizedPage": () => (/* binding */ NotAuthorizedPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _not_authorized_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./not-authorized.page.html?ngResource */ 54347);
/* harmony import */ var _not_authorized_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./not-authorized.page.scss?ngResource */ 17855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 52816);





let NotAuthorizedPage = class NotAuthorizedPage {
    constructor(router, route) {
        this.router = router;
        this.route = route;
    }
    goHome() {
        this.router.navigate(["home"]);
    }
    ngOnInit() {
        this.image = "../../assets/img/notcrossing.jpg";
        this.message = this.route.snapshot.paramMap.get("message");
    }
};
NotAuthorizedPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.ActivatedRoute }
];
NotAuthorizedPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: "app-not-authorized",
        template: _not_authorized_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_not_authorized_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], NotAuthorizedPage);



/***/ }),

/***/ 17855:
/*!***************************************************************************************!*\
  !*** ./src/app/modules/user/pages/not-authorized/not-authorized.page.scss?ngResource ***!
  \***************************************************************************************/
/***/ ((module) => {

module.exports = "p.alert-message {\n  font-weight: bolder;\n  color: #b31b10;\n  font-family: cursive;\n}\n\nion-title.title-md.hydrated {\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vdC1hdXRob3JpemVkLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLG9CQUFBO0FBQ0o7O0FBRUE7RUFDSSxrQkFBQTtBQUNKIiwiZmlsZSI6Im5vdC1hdXRob3JpemVkLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInAuYWxlcnQtbWVzc2FnZSB7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbiAgICBjb2xvcjogI2IzMWIxMDtcbiAgICBmb250LWZhbWlseTogY3Vyc2l2ZTtcbn1cblxuaW9uLXRpdGxlLnRpdGxlLW1kLmh5ZHJhdGVkIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59Il19 */";

/***/ }),

/***/ 54347:
/*!***************************************************************************************!*\
  !*** ./src/app/modules/user/pages/not-authorized/not-authorized.page.html?ngResource ***!
  \***************************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button\n        (click)=\"goHome()\"\n        class=\"button-clear ion-chevron-left\"\n        defaultHref=\"/home\"\n      >\n        <ion-icon name=\"arrow-back\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>Non Autorizzato</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <p class=\"alert-message\">{{ message }}</p>\n\n\n  <ion-img src=\"/assets/images/not-authorized.svg\"\n  >\n  </ion-img>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_modules_user_pages_not-authorized_not-authorized_module_ts.js.map