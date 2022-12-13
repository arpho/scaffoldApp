"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_modules_user_pages_users_users_module_ts"],{

/***/ 40216:
/*!**********************************************************!*\
  !*** ./src/app/modules/user/pages/users/users.module.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UsersPageModule": () => (/* binding */ UsersPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _users_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./users.page */ 82058);
/* harmony import */ var src_app_modules_item_item_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/modules/item/item.module */ 89355);








const routes = [
    {
        path: "",
        component: _users_page__WEBPACK_IMPORTED_MODULE_0__.UsersPage
    }
];
let UsersPageModule = class UsersPageModule {
};
UsersPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            src_app_modules_item_item_module__WEBPACK_IMPORTED_MODULE_1__.ItemModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule.forChild(routes)
        ],
        declarations: [_users_page__WEBPACK_IMPORTED_MODULE_0__.UsersPage]
    })
], UsersPageModule);



/***/ }),

/***/ 82058:
/*!********************************************************!*\
  !*** ./src/app/modules/user/pages/users/users.page.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UsersPage": () => (/* binding */ UsersPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _users_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./users.page.html?ngResource */ 14775);
/* harmony import */ var _users_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./users.page.scss?ngResource */ 41550);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _services_users_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/users.service */ 67862);
/* harmony import */ var _edit_user_edit_user_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../edit-user/edit-user.page */ 71104);






let UsersPage = class UsersPage {
    constructor(service) {
        this.service = service;
        this.editModalPage = _edit_user_edit_user_page__WEBPACK_IMPORTED_MODULE_3__.EditUserPage;
    }
    ngOnInit() {
        console.log('utenti page initialized');
    }
};
UsersPage.ctorParameters = () => [
    { type: _services_users_service__WEBPACK_IMPORTED_MODULE_2__.UsersService }
];
UsersPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: "app-users",
        template: _users_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_users_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], UsersPage);



/***/ }),

/***/ 41550:
/*!*********************************************************************!*\
  !*** ./src/app/modules/user/pages/users/users.page.scss?ngResource ***!
  \*********************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ1c2Vycy5wYWdlLnNjc3MifQ== */";

/***/ }),

/***/ 14775:
/*!*********************************************************************!*\
  !*** ./src/app/modules/user/pages/users/users.page.html?ngResource ***!
  \*********************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button\n        class=\"button-clear ion-chevron-left\"\n        defaultHref=\"/home\"\n      ></ion-back-button>\n    </ion-buttons>\n    <ion-title>utenti</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-card class=\"welcome-card\">\n    <ion-card-header>\n      <ion-card-subtitle>Get Started</ion-card-subtitle>\n      <ion-card-title>Welcome to Ionic</ion-card-title>\n    </ion-card-header>\n    <ion-card-content> </ion-card-content>\n  </ion-card>\n  <app-page-items-list\n    [service]=\"service\"\n    [editModalPage]=\"editModalPage\"\n  ></app-page-items-list>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_modules_user_pages_users_users_module_ts.js.map