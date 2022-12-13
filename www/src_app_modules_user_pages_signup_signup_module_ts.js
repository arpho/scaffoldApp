"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_modules_user_pages_signup_signup_module_ts"],{

/***/ 36636:
/*!************************************************************!*\
  !*** ./src/app/modules/user/pages/signup/signup.module.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SignupPageModule": () => (/* binding */ SignupPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _signup_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./signup.page */ 94671);
/* harmony import */ var src_app_modules_dynamic_form_dynamic_form_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/modules/dynamic-form/dynamic-form.module */ 74316);








const routes = [
    {
        path: '',
        component: _signup_page__WEBPACK_IMPORTED_MODULE_0__.SignupPage
    }
];
let SignupPageModule = class SignupPageModule {
};
SignupPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule.forRoot(),
            _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule.forChild(routes),
            src_app_modules_dynamic_form_dynamic_form_module__WEBPACK_IMPORTED_MODULE_1__.DynamicFormModule
        ],
        declarations: [_signup_page__WEBPACK_IMPORTED_MODULE_0__.SignupPage]
    })
], SignupPageModule);



/***/ }),

/***/ 94671:
/*!**********************************************************!*\
  !*** ./src/app/modules/user/pages/signup/signup.page.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SignupPage": () => (/* binding */ SignupPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _signup_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./signup.page.html?ngResource */ 17040);
/* harmony import */ var _signup_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./signup.page.scss?ngResource */ 97985);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth.service */ 49955);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var src_app_modules_dynamic_form_models_question_textbox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/modules/dynamic-form/models/question-textbox */ 72644);
/* harmony import */ var src_app_modules_dynamic_form_models_question_email__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/modules/dynamic-form/models/question-email */ 12321);
/* harmony import */ var _models_userModel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../models/userModel */ 60783);
/* harmony import */ var src_app_modules_dynamic_form_models_password_question__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/modules/dynamic-form/models/password-question */ 99250);
/* harmony import */ var _services_users_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/users.service */ 67862);
/* harmony import */ var src_app_modules_dynamic_form_models_question_checkBox__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/modules/dynamic-form/models/question-checkBox */ 98411);
/* harmony import */ var src_app_configs_configs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/configs/configs */ 80191);















let SignupPage = class SignupPage {
    constructor(modalCtrl, authService, loadingCtrl, alertCtrl, formBuilder, router, service) {
        this.modalCtrl = modalCtrl;
        this.authService = authService;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.formBuilder = formBuilder;
        this.router = router;
        this.service = service;
        this.usersFields = [new src_app_modules_dynamic_form_models_question_textbox__WEBPACK_IMPORTED_MODULE_3__.TextboxQuestion({
                key: 'firstName',
                label: 'nome',
                required: true,
                order: 1,
                value: !src_app_configs_configs__WEBPACK_IMPORTED_MODULE_9__.configs.locked ? "Giuseppe" : ''
            }), new src_app_modules_dynamic_form_models_question_textbox__WEBPACK_IMPORTED_MODULE_3__.TextboxQuestion({
                key: 'lastName',
                label: 'cognome',
                required: true,
                order: 2,
                value: !src_app_configs_configs__WEBPACK_IMPORTED_MODULE_9__.configs.locked ? "D'Amico" : ''
            }), new src_app_modules_dynamic_form_models_question_email__WEBPACK_IMPORTED_MODULE_4__.EmailQuestion({
                key: 'email',
                label: 'email',
                required: true,
                order: 3,
                value: !src_app_configs_configs__WEBPACK_IMPORTED_MODULE_9__.configs.locked ? "damicogiuseppe77@gmail.com" : ''
            }),
            new src_app_modules_dynamic_form_models_password_question__WEBPACK_IMPORTED_MODULE_6__.PasswordQuestion({
                key: 'password',
                label: 'password', required: src_app_configs_configs__WEBPACK_IMPORTED_MODULE_9__.configs.locked,
                retypePassword: true,
            }),
            new src_app_modules_dynamic_form_models_question_checkBox__WEBPACK_IMPORTED_MODULE_8__.CheckBoxQuestion({
                key: "GDPR",
                label: "Autorizzazione alla gestione dei dati personali",
                text: "Autorizzo il trattamento dei miei dati personali " +
                    " ai sensi dell’art. 13 del Decreto Legislativo 30 giugno 2003," +
                    " n. 196 “Codice in materia di protezione dei dati personali” e dell’art. 13 del GDPR (Regolamento UE 2016/679).x",
                required: true,
                value: !src_app_configs_configs__WEBPACK_IMPORTED_MODULE_9__.configs.locked,
                validator: _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.requiredTrue
            })
        ];
        this.signupForm = this.formBuilder.group({
            email: [
                '',
                _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.email]),
            ],
            password: [
                '',
                _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.minLength(6), _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required]),
            ],
        });
    }
    ngOnDestroy() {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }
    ngOnInit() { }
    filter(ev) {
    }
    dismiss(payment) {
        this.modalCtrl.dismiss(payment);
    }
    submit(ev) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            this.user = new _models_userModel__WEBPACK_IMPORTED_MODULE_5__.UserModel().load(ev);
            this.user.password = src_app_configs_configs__WEBPACK_IMPORTED_MODULE_9__.configs.locked ? ev.password.password : "VilU7240#";
            this.user.email = ev.email;
            this.signupUser(this.signupForm, this.user);
        });
    }
    signupUser(signupForm, user) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            const email = signupForm.value.email.email;
            const password = signupForm.value.password;
            const successHandler = () => (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
                yield this.service.callCloudPushUser(user.serialize());
                console.log('loading', this.modal);
                this.modal.dismiss().then(() => {
                });
            });
            const complete = () => {
                this.router.navigateByUrl('home');
            };
            const errorHandler = (error) => {
                this.modal.dismiss().then(() => (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
                    const alert = yield this.alertCtrl.create({
                        message: error.message ? error.message : `utente ${user.getTitle().value} creato correttamente`,
                        buttons: [{ text: 'Ok', role: 'cancel' }],
                    });
                    yield alert.present();
                    yield alert.onDidDismiss();
                    this.router.navigateByUrl('home');
                }));
            };
            this.authService.signupUser(user, successHandler, errorHandler, complete);
            this.modal = yield this.loadingCtrl.create();
            yield this.modal.present();
        });
    }
};
SignupPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.ModalController },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.LoadingController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.AlertController },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormBuilder },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_13__.Router },
    { type: _services_users_service__WEBPACK_IMPORTED_MODULE_7__.UsersService }
];
SignupPage = (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_14__.Component)({
        selector: 'app-signup',
        template: _signup_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_signup_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], SignupPage);



/***/ }),

/***/ 97985:
/*!***********************************************************************!*\
  !*** ./src/app/modules/user/pages/signup/signup.page.scss?ngResource ***!
  \***********************************************************************/
/***/ ((module) => {

module.exports = "form {\n  margin-bottom: 32px;\n}\nform button {\n  margin-top: 20px !important;\n}\np {\n  font-size: 0.8em;\n  color: #d2d2d2;\n}\nion-label {\n  margin-left: 5px;\n}\nion-input {\n  padding: 5px;\n}\n.invalid {\n  border-bottom: 1px solid #ff6153;\n}\n.error-message {\n  min-height: 2.2rem;\n}\n.error-message ion-label {\n  margin: 2px 0;\n  font-size: 60%;\n  color: #ff6153;\n}\n.error-message .item-inner {\n  border-bottom: 0 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpZ251cC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxtQkFBQTtBQUNKO0FBQUk7RUFDSSwyQkFBQTtBQUVSO0FBRUE7RUFDSSxnQkFBQTtFQUNBLGNBQUE7QUFDSjtBQUVBO0VBQ0ksZ0JBQUE7QUFDSjtBQUVBO0VBQ0ksWUFBQTtBQUNKO0FBRUE7RUFDSSxnQ0FBQTtBQUNKO0FBRUE7RUFDSSxrQkFBQTtBQUNKO0FBQUk7RUFDSSxhQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7QUFFUjtBQUFJO0VBQ0ksMkJBQUE7QUFFUiIsImZpbGUiOiJzaWdudXAucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZm9ybSB7XG4gICAgbWFyZ2luLWJvdHRvbTogMzJweDtcbiAgICBidXR0b24ge1xuICAgICAgICBtYXJnaW4tdG9wOiAyMHB4ICFpbXBvcnRhbnQ7XG4gICAgfVxufVxuXG5wIHtcbiAgICBmb250LXNpemU6IDAuOGVtO1xuICAgIGNvbG9yOiAjZDJkMmQyO1xufVxuXG5pb24tbGFiZWwge1xuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XG59XG5cbmlvbi1pbnB1dCB7XG4gICAgcGFkZGluZzogNXB4O1xufVxuXG4uaW52YWxpZCB7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmZjYxNTM7XG59XG5cbi5lcnJvci1tZXNzYWdlIHtcbiAgICBtaW4taGVpZ2h0OiAyLjJyZW07XG4gICAgaW9uLWxhYmVsIHtcbiAgICAgICAgbWFyZ2luOiAycHggMDtcbiAgICAgICAgZm9udC1zaXplOiA2MCU7XG4gICAgICAgIGNvbG9yOiAjZmY2MTUzO1xuICAgIH1cbiAgICAuaXRlbS1pbm5lciB7XG4gICAgICAgIGJvcmRlci1ib3R0b206IDAgIWltcG9ydGFudDtcbiAgICB9XG59Il19 */";

/***/ }),

/***/ 17040:
/*!***********************************************************************!*\
  !*** ./src/app/modules/user/pages/signup/signup.page.html?ngResource ***!
  \***********************************************************************/
/***/ ((module) => {

module.exports = "\n<ion-content>\n\n  <app-dynamic-form [questions]=\"usersFields\" (interactiveSubmit)=\"filter($event)\" (singleSubmit)=\"submit($event)\"></app-dynamic-form>\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_modules_user_pages_signup_signup_module_ts.js.map