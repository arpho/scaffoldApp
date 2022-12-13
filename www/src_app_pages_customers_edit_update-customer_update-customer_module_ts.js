"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_customers_edit_update-customer_update-customer_module_ts"],{

/***/ 63737:
/*!****************************************************************************************!*\
  !*** ./src/app/pages/customers/edit/update-customer/update-customer-routing.module.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UpdateCustomerPageRoutingModule": () => (/* binding */ UpdateCustomerPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _update_customer_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./update-customer.page */ 50230);




const routes = [
    {
        path: '',
        component: _update_customer_page__WEBPACK_IMPORTED_MODULE_0__.UpdateCustomerPage
    }
];
let UpdateCustomerPageRoutingModule = class UpdateCustomerPageRoutingModule {
};
UpdateCustomerPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], UpdateCustomerPageRoutingModule);



/***/ }),

/***/ 57538:
/*!********************************************************************************!*\
  !*** ./src/app/pages/customers/edit/update-customer/update-customer.module.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UpdateCustomerPageModule": () => (/* binding */ UpdateCustomerPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _update_customer_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./update-customer-routing.module */ 63737);
/* harmony import */ var src_app_modules_dynamic_form_dynamic_form_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/modules/dynamic-form/dynamic-form.module */ 74316);







let UpdateCustomerPageModule = class UpdateCustomerPageModule {
};
UpdateCustomerPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _update_customer_routing_module__WEBPACK_IMPORTED_MODULE_0__.UpdateCustomerPageRoutingModule,
            src_app_modules_dynamic_form_dynamic_form_module__WEBPACK_IMPORTED_MODULE_1__.DynamicFormModule
        ],
        declarations: []
    })
], UpdateCustomerPageModule);



/***/ })

}]);
//# sourceMappingURL=src_app_pages_customers_edit_update-customer_update-customer_module_ts.js.map