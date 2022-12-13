"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_customers_create_new-customer_new-customer_module_ts"],{

/***/ 70442:
/*!************************************************************************************!*\
  !*** ./src/app/pages/customers/create/new-customer/new-customer-routing.module.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NewCustomerPageRoutingModule": () => (/* binding */ NewCustomerPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _new_customer_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./new-customer.page */ 57560);




const routes = [
    {
        path: '',
        component: _new_customer_page__WEBPACK_IMPORTED_MODULE_0__.NewCustomerPage
    }
];
let NewCustomerPageRoutingModule = class NewCustomerPageRoutingModule {
};
NewCustomerPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], NewCustomerPageRoutingModule);



/***/ }),

/***/ 30602:
/*!****************************************************************************!*\
  !*** ./src/app/pages/customers/create/new-customer/new-customer.module.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NewCustomerPageModule": () => (/* binding */ NewCustomerPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _new_customer_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./new-customer-routing.module */ 70442);
/* harmony import */ var src_app_modules_dynamic_form_dynamic_form_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/modules/dynamic-form/dynamic-form.module */ 74316);







let NewCustomerPageModule = class NewCustomerPageModule {
};
NewCustomerPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _new_customer_routing_module__WEBPACK_IMPORTED_MODULE_0__.NewCustomerPageRoutingModule,
            src_app_modules_dynamic_form_dynamic_form_module__WEBPACK_IMPORTED_MODULE_1__.DynamicFormModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule
        ],
        declarations: []
    })
], NewCustomerPageModule);



/***/ })

}]);
//# sourceMappingURL=src_app_pages_customers_create_new-customer_new-customer_module_ts.js.map