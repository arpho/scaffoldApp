"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_customers_list_customers_customers_module_ts"],{

/***/ 44373:
/*!***********************************************!*\
  !*** ./src/app/modules/helpers/dateHelper.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Utilities4Date": () => (/* binding */ Utilities4Date)
/* harmony export */ });
var _a;
class Utilities4Date {
    static getDateListFrom(extractionsItems) {
        return Array.from(new Set(extractionsItems.map(e => e.italianDate)));
    }
    converter(date) {
        return `${date.split('/')[1]}/${date.split('/')[0]}/${date.split('/')[2]}`;
    }
    fromDatePickerFormat2ItalianFormat(date) {
        const splitDate = date.split('-');
        return `${splitDate[2]}/${splitDate[1]}/${splitDate[0]}`;
    }
    fromItalian2AmericanFormat(date) {
        return this.converter(date);
    }
}
_a = Utilities4Date;
Utilities4Date.mSecIn24H = 1000 * 60 * 60 * 24;
Utilities4Date.sorterDescendingDate = (a, b) => a.dateInmmsec - b.dateInmmsec;
Utilities4Date.addDays2Date = (day, days) => new Date(day.getTime() + _a.mSecIn24H * days);


/***/ }),

/***/ 73841:
/*!****************************************************************************!*\
  !*** ./src/app/pages/customers/list/customers/customers-routing.module.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CustomersPageRoutingModule": () => (/* binding */ CustomersPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _customers_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./customers.page */ 92049);




const routes = [
    {
        path: '',
        component: _customers_page__WEBPACK_IMPORTED_MODULE_0__.CustomersPage
    }
];
let CustomersPageRoutingModule = class CustomersPageRoutingModule {
};
CustomersPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], CustomersPageRoutingModule);



/***/ }),

/***/ 71002:
/*!********************************************************************!*\
  !*** ./src/app/pages/customers/list/customers/customers.module.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CustomersPageModule": () => (/* binding */ CustomersPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _customers_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./customers-routing.module */ 73841);
/* harmony import */ var _customers_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./customers.page */ 92049);
/* harmony import */ var src_app_modules_item_item_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/modules/item/item.module */ 89355);








let CustomersPageModule = class CustomersPageModule {
};
CustomersPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _customers_routing_module__WEBPACK_IMPORTED_MODULE_0__.CustomersPageRoutingModule,
            src_app_modules_item_item_module__WEBPACK_IMPORTED_MODULE_2__.ItemModule
        ],
        declarations: [_customers_page__WEBPACK_IMPORTED_MODULE_1__.CustomersPage]
    })
], CustomersPageModule);



/***/ }),

/***/ 92049:
/*!******************************************************************!*\
  !*** ./src/app/pages/customers/list/customers/customers.page.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CustomersPage": () => (/* binding */ CustomersPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _customers_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./customers.page.html?ngResource */ 46186);
/* harmony import */ var _customers_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./customers.page.scss?ngResource */ 65265);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _modules_helpers_dateHelper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../modules/helpers/dateHelper */ 44373);
/* harmony import */ var src_app_modules_dynamic_form_models_question_textbox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/modules/dynamic-form/models/question-textbox */ 72644);
/* harmony import */ var src_app_services_customers_customers_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/customers/customers-service.service */ 62791);
/* harmony import */ var _create_new_customer_new_customer_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../create/new-customer/new-customer.page */ 57560);
/* harmony import */ var _edit_update_customer_update_customer_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../edit/update-customer/update-customer.page */ 50230);









let CustomersPage = class CustomersPage {
    constructor(service) {
        this.service = service;
        this.editModalPage = _edit_update_customer_update_customer_page__WEBPACK_IMPORTED_MODULE_6__.UpdateCustomerPage;
        this.createModalPage = _create_new_customer_new_customer_page__WEBPACK_IMPORTED_MODULE_5__.NewCustomerPage;
        this.filterFields = [
            new src_app_modules_dynamic_form_models_question_textbox__WEBPACK_IMPORTED_MODULE_3__.TextboxQuestion({
                key: "nome",
                label: "filtra per nome",
                filterFunction: (value, customer) => customer.
                    firstName.trim().toUpperCase().includes(value.trim().toUpperCase())
            }),
            new src_app_modules_dynamic_form_models_question_textbox__WEBPACK_IMPORTED_MODULE_3__.TextboxQuestion({
                key: "surname",
                label: "filtra per cognome",
                filterFunction: (value, customer) => customer.
                    lastName.trim().toUpperCase().includes(value.trim().toUpperCase())
            }),
            new src_app_modules_dynamic_form_models_question_textbox__WEBPACK_IMPORTED_MODULE_3__.TextboxQuestion({
                key: "email",
                label: "filtra per email",
                filterFunction: (value, customer) => customer.
                    email.trim().toLowerCase().includes(value.trim().toLowerCase())
            })
        ];
    }
    filterFunction(customer) {
        return true;
    }
    ngOnInit() {
    }
    expiringCustomers() {
        const today = new Date();
        const expirationDate = _modules_helpers_dateHelper__WEBPACK_IMPORTED_MODULE_2__.Utilities4Date.addDays2Date(today, 31);
        this.filterFunction = (customer) => customer.expirationTime < expirationDate.getTime();
    }
    setFilter(ev) {
        this.filterFunction = ev;
    }
};
CustomersPage.ctorParameters = () => [
    { type: src_app_services_customers_customers_service_service__WEBPACK_IMPORTED_MODULE_4__.CustomersService }
];
CustomersPage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-customers',
        template: _customers_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_customers_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], CustomersPage);



/***/ }),

/***/ 65265:
/*!*******************************************************************************!*\
  !*** ./src/app/pages/customers/list/customers/customers.page.scss?ngResource ***!
  \*******************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjdXN0b21lcnMucGFnZS5zY3NzIn0= */";

/***/ }),

/***/ 46186:
/*!*******************************************************************************!*\
  !*** ./src/app/pages/customers/list/customers/customers.page.html?ngResource ***!
  \*******************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>customers</ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-back-button class=\"button-clear ion-chevron-left\" defaultHref=\"/home\"></ion-back-button>\n    </ion-buttons>\n    <div slot=\"end\">\n    <ion-icon name=\"calendar\" (click)=\"expiringCustomers()\"></ion-icon>\n      <app-items-filter [filterFields]=\"filterFields\" \n      (filterFunction)=\"setFilter($event)\"></app-items-filter>\n    </div>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <app-page-items-list\n   [service]='service'\n   [filterFunction]=\"filterFunction\"\n   [createModalPage]=\"createModalPage\"\n   [editModalPage]=\"editModalPage\">\n    </app-page-items-list>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_customers_list_customers_customers_module_ts.js.map