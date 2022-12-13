"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_modules_user_pages_complete-registration_complete-registration_module_ts"],{

/***/ 77140:
/*!**************************************************************************************************!*\
  !*** ./src/app/modules/user/pages/complete-registration/complete-registration-routing.module.ts ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CompleteRegistrationPageRoutingModule": () => (/* binding */ CompleteRegistrationPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _complete_registration_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./complete-registration.page */ 17484);




const routes = [
    {
        path: '',
        component: _complete_registration_page__WEBPACK_IMPORTED_MODULE_0__.CompleteRegistrationPage
    }
];
let CompleteRegistrationPageRoutingModule = class CompleteRegistrationPageRoutingModule {
};
CompleteRegistrationPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], CompleteRegistrationPageRoutingModule);



/***/ }),

/***/ 40222:
/*!******************************************************************************************!*\
  !*** ./src/app/modules/user/pages/complete-registration/complete-registration.module.ts ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CompleteRegistrationPageModule": () => (/* binding */ CompleteRegistrationPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _complete_registration_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./complete-registration-routing.module */ 77140);
/* harmony import */ var _complete_registration_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./complete-registration.page */ 17484);
/* harmony import */ var src_app_modules_dynamic_form_dynamic_form_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/modules/dynamic-form/dynamic-form.module */ 74316);








let CompleteRegistrationPageModule = class CompleteRegistrationPageModule {
};
CompleteRegistrationPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _complete_registration_routing_module__WEBPACK_IMPORTED_MODULE_0__.CompleteRegistrationPageRoutingModule,
            src_app_modules_dynamic_form_dynamic_form_module__WEBPACK_IMPORTED_MODULE_2__.DynamicFormModule
        ],
        declarations: [_complete_registration_page__WEBPACK_IMPORTED_MODULE_1__.CompleteRegistrationPage],
    })
], CompleteRegistrationPageModule);



/***/ }),

/***/ 17484:
/*!****************************************************************************************!*\
  !*** ./src/app/modules/user/pages/complete-registration/complete-registration.page.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CompleteRegistrationPage": () => (/* binding */ CompleteRegistrationPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _complete_registration_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./complete-registration.page.html?ngResource */ 82133);
/* harmony import */ var _complete_registration_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./complete-registration.page.scss?ngResource */ 45067);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var src_app_modules_dynamic_form_models_password_question__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/modules/dynamic-form/models/password-question */ 99250);
/* harmony import */ var src_app_modules_dynamic_form_models_question_checkBox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/modules/dynamic-form/models/question-checkBox */ 98411);
/* harmony import */ var src_app_modules_dynamic_form_models_question_email__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/modules/dynamic-form/models/question-email */ 12321);
/* harmony import */ var src_app_modules_dynamic_form_models_question_textbox__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/modules/dynamic-form/models/question-textbox */ 72644);









let CompleteRegistrationPage = class CompleteRegistrationPage {
    constructor() {
        this.submitText = "completa registrazione";
    }
    ngOnInit() {
        this.usersFields = [
            new src_app_modules_dynamic_form_models_question_textbox__WEBPACK_IMPORTED_MODULE_5__.TextboxQuestion({
                key: "enablingCode",
                label: "codice di abilitazione",
                required: true,
                order: 0
            }),
            new src_app_modules_dynamic_form_models_question_textbox__WEBPACK_IMPORTED_MODULE_5__.TextboxQuestion({
                key: 'firstName',
                label: 'nome',
                required: true,
                order: 1
            }), new src_app_modules_dynamic_form_models_question_textbox__WEBPACK_IMPORTED_MODULE_5__.TextboxQuestion({
                key: 'lastName',
                label: 'cognome',
                required: true,
                order: 2
            }), new src_app_modules_dynamic_form_models_question_email__WEBPACK_IMPORTED_MODULE_4__.EmailQuestion({
                key: 'email',
                label: 'email',
                required: true,
                order: 3
            }),
            new src_app_modules_dynamic_form_models_password_question__WEBPACK_IMPORTED_MODULE_2__.PasswordQuestion({
                key: 'password',
                label: 'password', required: true,
                retypePassword: true,
            }),
            new src_app_modules_dynamic_form_models_question_checkBox__WEBPACK_IMPORTED_MODULE_3__.CheckBoxQuestion({
                key: "GDPR",
                label: "Autorizzazione alla gestione dei dati personali",
                text: "Autorizzo il trattamento dei miei dati personali " +
                    " ai sensi dell’art. 13 del Decreto Legislativo 30 giugno 2003," +
                    " n. 196 “Codice in materia di protezione dei dati personali” e dell’art. 13 del GDPR (Regolamento UE 2016/679).x",
                required: true,
                value: false,
                validator: _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.requiredTrue
            })
        ];
    }
    filter(ev) {
        console.log("typing", ev);
    }
    submit(ev) {
        console.log("submit", ev);
        //TODO retrieve code
        //TODO retrieve user by email
        //TODO check conditions
        //TODO update code
        //TODO register auth user
        //TODO update userProfile
    }
};
CompleteRegistrationPage.ctorParameters = () => [];
CompleteRegistrationPage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-complete-registration',
        template: _complete_registration_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_complete_registration_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], CompleteRegistrationPage);



/***/ }),

/***/ 45067:
/*!*****************************************************************************************************!*\
  !*** ./src/app/modules/user/pages/complete-registration/complete-registration.page.scss?ngResource ***!
  \*****************************************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb21wbGV0ZS1yZWdpc3RyYXRpb24ucGFnZS5zY3NzIn0= */";

/***/ }),

/***/ 82133:
/*!*****************************************************************************************************!*\
  !*** ./src/app/modules/user/pages/complete-registration/complete-registration.page.html?ngResource ***!
  \*****************************************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>completeRegistration</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <app-dynamic-form [questions]=\"usersFields\" (interactiveSubmit)=\"filter($event)\" (singleSubmit)=\"submit($event)\" [submitText]=\"submitText\"></app-dynamic-form>\n\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_modules_user_pages_complete-registration_complete-registration_module_ts.js.map