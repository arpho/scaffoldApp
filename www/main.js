(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["main"],{

/***/ 90158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _configs_configs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./configs/configs */ 80191);
/* harmony import */ var _modules_user_services_authguard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/user/services/authguard */ 36682);
/* harmony import */ var _modules_user_services_role_guards_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/user/services/role-guards.service */ 9959);






const routes = [
    {
        path: '',
        redirectTo: 'menu',
        pathMatch: 'full'
    },
    {
        path: 'home',
        redirectTo: 'menu',
        pathMatch: 'full'
    },
    { path: "users",
        loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./modules/user/user.module */ 30335)).then(m => m.UserModule)
    },
    {
        path: 'customers',
        canActivate: [_modules_user_services_authguard__WEBPACK_IMPORTED_MODULE_1__.AuthGuard, _modules_user_services_role_guards_service__WEBPACK_IMPORTED_MODULE_2__.RoleGuardService],
        data: { maximumRoleLevel: 2, locked: _configs_configs__WEBPACK_IMPORTED_MODULE_0__.configs.locked },
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_customers_list_customers_customers_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/customers/list/customers/customers.module */ 71002)).then(m => m.CustomersPageModule)
    },
    {
        path: 'update-customer',
        canActivate: [_modules_user_services_authguard__WEBPACK_IMPORTED_MODULE_1__.AuthGuard],
        data: { maximumRoleLevel: 2,
            locked: _configs_configs__WEBPACK_IMPORTED_MODULE_0__.configs.locked },
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_customers_edit_update-customer_update-customer_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/customers/edit/update-customer/update-customer.module */ 57538)).then(m => m.UpdateCustomerPageModule)
    },
    {
        path: 'new-customer',
        canActivate: [_modules_user_services_authguard__WEBPACK_IMPORTED_MODULE_1__.AuthGuard, _modules_user_services_role_guards_service__WEBPACK_IMPORTED_MODULE_2__.RoleGuardService],
        data: { maximumRoleLevel: 2, locked: _configs_configs__WEBPACK_IMPORTED_MODULE_0__.configs.locked },
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_customers_create_new-customer_new-customer_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/customers/create/new-customer/new-customer.module */ 30602)).then(m => m.NewCustomerPageModule)
    },
    {
        path: 'menu',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_menu_menu_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/menu/menu.module */ 30252)).then(m => m.MenuPageModule)
    },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forRoot(routes, { preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_5__.PreloadAllModules })
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule]
    })
], AppRoutingModule);



/***/ }),

/***/ 55041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _app_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component.html?ngResource */ 33383);
/* harmony import */ var _app_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component.scss?ngResource */ 79259);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/app */ 66369);
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/auth */ 23628);
/* harmony import */ var _configs_credentials__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./configs/credentials */ 20688);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _modules_helpers_menu_models_business_checkers_checkEnabled__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/helpers/menu/models/business/checkers/checkEnabled */ 39641);
/* harmony import */ var _modules_helpers_menu_models_business_checkers_checkExpiration__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/helpers/menu/models/business/checkers/checkExpiration */ 29201);
/* harmony import */ var _modules_helpers_menu_models_business_checkers_checkRole__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/helpers/menu/models/business/checkers/checkRole */ 24234);
/* harmony import */ var _modules_helpers_menu_models_business_menuComposer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/helpers/menu/models/business/menuComposer */ 21495);













let AppComponent = class AppComponent {
    constructor(router, menu) {
        this.router = router;
        this.menu = menu;
        this.transformationIndex = -1;
        this.onOwnClick = (index, url) => {
            const out = () => {
                if (index != -1) {
                    this.transformationIndex = index;
                }
                else {
                    this.router.navigate([url]);
                }
            };
            return out;
        };
        this.menuItems = [
            {
                menuItem: {
                    title: 'Algoritmo Genial',
                    src: "/assets/icon/icons/genial.svg",
                    url: '/magic',
                    icon: 'mail',
                    onClick: this.onOwnClick(-1, "/magic"),
                    function: () => { }
                },
                orLogic: false,
                canAdd: [
                    new _modules_helpers_menu_models_business_checkers_checkEnabled__WEBPACK_IMPORTED_MODULE_5__.CheckEnabled(),
                    new _modules_helpers_menu_models_business_checkers_checkExpiration__WEBPACK_IMPORTED_MODULE_6__.CheckExpiration()
                ]
            },
            {
                menuItem: {
                    title: "utenti",
                    url: "/customers",
                    icon: "people",
                    onClick: this.onOwnClick(-1, "/customers")
                },
                canAdd: [
                    new _modules_helpers_menu_models_business_checkers_checkEnabled__WEBPACK_IMPORTED_MODULE_5__.CheckEnabled(),
                    new _modules_helpers_menu_models_business_checkers_checkExpiration__WEBPACK_IMPORTED_MODULE_6__.CheckExpiration(),
                    new _modules_helpers_menu_models_business_checkers_checkRole__WEBPACK_IMPORTED_MODULE_7__.CheckRole(2)
                ],
                orLogic: false
            },
            {
                menuItem: {
                    title: "gestisci estrazioni",
                    url: "/crud",
                    icon: "list",
                    onClick: this.onOwnClick(-1, "/crud")
                },
                canAdd: [
                    new _modules_helpers_menu_models_business_checkers_checkEnabled__WEBPACK_IMPORTED_MODULE_5__.CheckEnabled(),
                    new _modules_helpers_menu_models_business_checkers_checkExpiration__WEBPACK_IMPORTED_MODULE_6__.CheckExpiration(),
                    new _modules_helpers_menu_models_business_checkers_checkRole__WEBPACK_IMPORTED_MODULE_7__.CheckRole(2)
                ],
                orLogic: false
            },
            {
                menuItem: {
                    title: "Intervalli",
                    url: "intervals",
                    icon: "stats-chart",
                    onClick: this.onOwnClick(-1, "/intervals")
                },
                canAdd: [
                    new _modules_helpers_menu_models_business_checkers_checkEnabled__WEBPACK_IMPORTED_MODULE_5__.CheckEnabled(),
                    new _modules_helpers_menu_models_business_checkers_checkExpiration__WEBPACK_IMPORTED_MODULE_6__.CheckExpiration()
                ],
                orLogic: false
            }
        ];
        this.appPages = [];
        this.labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
    }
    isSelected(index) {
        return (index == this.transformationIndex) ? "selected" : "unselected";
    }
    ngOnInit() {
        const app = (0,firebase_app__WEBPACK_IMPORTED_MODULE_2__.initializeApp)(_configs_credentials__WEBPACK_IMPORTED_MODULE_4__.credentials.firebase);
        const auth = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_3__.getAuth)();
        (0,firebase_auth__WEBPACK_IMPORTED_MODULE_3__.onAuthStateChanged)(auth, (user) => (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            if (user) {
                const token = yield user.getIdTokenResult(true).then(result => {
                    const menu = _modules_helpers_menu_models_business_menuComposer__WEBPACK_IMPORTED_MODULE_8__.menuComposer.composeMenuByClaims(this.menuItems, result.claims);
                    this.appPages = menu;
                    console.log("claims", result.claims);
                });
            }
            else {
                this.router.navigate(["/users/login"]);
            }
        }));
    }
};
AppComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.MenuController }
];
AppComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_12__.Component)({
        selector: 'app-root',
        template: _app_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_app_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], AppComponent);



/***/ }),

/***/ 36747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/platform-browser */ 50318);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ 55041);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ 90158);
/* harmony import */ var _modules_item_item_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/item/item.module */ 89355);
/* harmony import */ var _modules_dynamic_form_dynamic_form_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/dynamic-form/dynamic-form.module */ 74316);
/* harmony import */ var _modules_helpers_helpers_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/helpers/helpers.module */ 33552);
/* harmony import */ var _modules_user_user_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/user/user.module */ 30335);
/* harmony import */ var _modules_item_pages_selector_items_selector_items_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/item/pages/selector-items/selector-items.page */ 50596);
/* harmony import */ var _modules_user_pages_edit_user_edit_user_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/user/pages/edit-user/edit-user.page */ 71104);
/* harmony import */ var _modules_user_pages_profile_profile_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/user/pages/profile/profile.page */ 46630);
/* harmony import */ var _pages_customers_create_new_customer_new_customer_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/customers/create/new-customer/new-customer.page */ 57560);
/* harmony import */ var _pages_customers_edit_update_customer_update_customer_page__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/customers/edit/update-customer/update-customer.page */ 50230);
/* harmony import */ var _components_scatter_scatter_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/scatter/scatter.component */ 52683);
/* harmony import */ var _components_bar_bar_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/bar/bar.component */ 14150);
/* harmony import */ var _modules_item_pages_filter_popup_filter_popup_page__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./modules/item/pages/filter-popup/filter-popup.page */ 50429);
/* harmony import */ var _components_cookies_law_cookies_law_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/cookies-law/cookies-law.component */ 73471);
/* harmony import */ var _pages_menu_menu_page__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./pages/menu/menu.page */ 67506);





















let AppModule = class AppModule {
};
AppModule = (0,tslib__WEBPACK_IMPORTED_MODULE_16__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_17__.NgModule)({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent,
            _modules_item_pages_selector_items_selector_items_page__WEBPACK_IMPORTED_MODULE_6__.SelectorItemsPage,
            _modules_user_pages_edit_user_edit_user_page__WEBPACK_IMPORTED_MODULE_7__.EditUserPage,
            _modules_user_pages_profile_profile_page__WEBPACK_IMPORTED_MODULE_8__.ProfilePage,
            _pages_customers_create_new_customer_new_customer_page__WEBPACK_IMPORTED_MODULE_9__.NewCustomerPage,
            _pages_customers_edit_update_customer_update_customer_page__WEBPACK_IMPORTED_MODULE_10__.UpdateCustomerPage,
            _components_scatter_scatter_component__WEBPACK_IMPORTED_MODULE_11__.ScatterComponent,
            _components_bar_bar_component__WEBPACK_IMPORTED_MODULE_12__.BarComponent,
            _modules_item_pages_filter_popup_filter_popup_page__WEBPACK_IMPORTED_MODULE_13__.FilterPopupPage,
            _components_cookies_law_cookies_law_component__WEBPACK_IMPORTED_MODULE_14__.CookiesLawComponent,
            _pages_menu_menu_page__WEBPACK_IMPORTED_MODULE_15__.MenuPage,
        ],
        entryComponents: [],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_18__.BrowserModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_19__.IonicModule.forRoot(),
            _app_routing_module__WEBPACK_IMPORTED_MODULE_1__.AppRoutingModule,
            _modules_dynamic_form_dynamic_form_module__WEBPACK_IMPORTED_MODULE_3__.DynamicFormModule,
            _modules_item_item_module__WEBPACK_IMPORTED_MODULE_2__.ItemModule,
            _modules_helpers_helpers_module__WEBPACK_IMPORTED_MODULE_4__.HelpersModule,
            _modules_user_user_module__WEBPACK_IMPORTED_MODULE_5__.UserModule,
        ],
        providers: [{ provide: _angular_router__WEBPACK_IMPORTED_MODULE_20__.RouteReuseStrategy, useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_19__.IonicRouteStrategy }],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent],
        exports: [],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_17__.CUSTOM_ELEMENTS_SCHEMA]
    })
], AppModule);



/***/ }),

/***/ 72252:
/*!***********************************************!*\
  !*** ./src/app/business/EnablingCodeMaker.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "enablingCodeMaker": () => (/* binding */ enablingCodeMaker)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 34929);

class enablingCodeMaker {
    constructor(service) {
        this.service = service;
    }
    makeCode(length) {
        var result = '';
        var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var charactersLength = characters.length;
        for (var i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() *
                charactersLength));
        }
        return result;
    }
    makeUniqueCode(length) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function* () {
            let code = this.makeCode(length);
            this.service.items.subscribe(codes => {
                while (codes.map(c => c.code).includes(code)) {
                    console.log("recalculating code");
                    code = this.makeCode(length);
                }
            });
            return code;
        });
    }
}


/***/ }),

/***/ 14150:
/*!*************************************************!*\
  !*** ./src/app/components/bar/bar.component.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BarComponent": () => (/* binding */ BarComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _bar_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bar.component.html?ngResource */ 38763);
/* harmony import */ var _bar_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bar.component.scss?ngResource */ 39470);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! d3 */ 17659);





let BarComponent = class BarComponent {
    constructor() { }
    ngOnChanges(changes) {
        this.margin = 40;
        this.width = 450 - (this.margin * 2);
        this.height = 400 - (this.margin * 2);
        //this.createSvg(); 
        if (!this.svg) {
            this.createSvg();
        }
        else {
            // remove all the g elements to reset the svg
            d3__WEBPACK_IMPORTED_MODULE_2__.select("svg").remove();
            this.createSvg();
            this.drawBars(this.data);
        }
        if (changes.data) {
            this.drawBars(this.data);
        }
        if (changes.numeroEstratto) {
            const lastDate = this.data[this.data.length - 1].date;
            this.title = `intervalli del ${this.numeroEstratto} sulla ruota di ${this.weel} fino al ${this.data[this.data.length - 1].date}`;
        }
    }
    makeTitle() {
        return this.data ?
            `intervalli del ${this.numeroEstratto} sulla ruota di ${this.weel} fino al ${this.data[this.data.length - 1].date}` : "";
    }
    createSvg() {
        this.svg = d3__WEBPACK_IMPORTED_MODULE_2__.select("figure#bar")
            .append("svg")
            .attr("width", this.width + (this.margin * 2))
            .attr("height", this.height + (this.margin * 2))
            .append("g")
            .attr("transform", "translate(" + this.margin + "," + this.margin + ")")
            .attr("id", "intervals").attr("align", "center");
        //.text(`intervalli per ${this.numeroEstratto} `);
        const title = this.svg.append("g");
        title.append("text")
            .text(this.makeTitle());
    }
    drawBars(data) {
        if (data) {
            // Create the X-axis band scale
            const x = d3__WEBPACK_IMPORTED_MODULE_2__.scaleBand()
                .range([0, this.width])
                .domain(data.map(d => d.id))
                .padding(0.2);
            // Draw the X-axis on the DOM
            this.svg.append("g")
                .attr("transform", "translate(0," + this.height + ")")
                .call(d3__WEBPACK_IMPORTED_MODULE_2__.axisBottom(x))
                .selectAll("text")
                .attr("transform", "translate(-10,0)rotate(-45)")
                .style("text-anchor", "end");
            // Create the Y-axis band scale
            const y = d3__WEBPACK_IMPORTED_MODULE_2__.scaleLinear()
                .domain([0, 150])
                .range([this.height, 0]);
            // Draw the Y-axis on the DOM
            this.svg.append("g")
                .call(d3__WEBPACK_IMPORTED_MODULE_2__.axisLeft(y));
            // Create and fill the bars
            this.svg.append("path")
                .datum(data).attr("fill", "none")
                .attr("stroke", "steelblue")
                .attr("stroke-width", 1.5)
                .attr("d", d3__WEBPACK_IMPORTED_MODULE_2__.line()
                .x(function (d) { return x(d['id']); })
                .y(function (d) { return y(d['interval']); }));
            //div for text on hover
            var div = d3__WEBPACK_IMPORTED_MODULE_2__.select("body").append("div")
                .attr("class", "tooltip")
                .style("opacity", 0); // div hidden at start
            // Add dots
            const dots = this.svg.append('g');
            dots.selectAll("dot")
                .data(this.data)
                .enter()
                .append("circle")
                .attr("cx", d => x(d['id']))
                .attr("cy", d => y(d['interval']))
                .attr("r", 5)
                .style("opacity", .5)
                .style("fill", "#69b3a2")
                .on('mouseover', function (d, i) {
                d3__WEBPACK_IMPORTED_MODULE_2__.select(this).transition().duration(500)
                    .attr('r', 7);
                div.transition()
                    .duration(100)
                    .style("opacity", 1); // tooltip div is visible
                div.html(`${i['interval']}- ${i['date']}`)
                    .style("left", (d.pageX + 10) + "px")
                    .style("top", (d.pageY - 15) + "px");
            })
                .on('mouseout', function (d, i) {
                d3__WEBPACK_IMPORTED_MODULE_2__.select(this).transition()
                    .duration(200)
                    .attr('r', 5);
                div.transition()
                    .duration(200)
                    .style('opacity', 0); // div tooltip hidden
            });
            // Add labels
            /*     dots.selectAll("text")
                .data(this.data)
                .enter()
                .append("text")
                .text(d => d['date'])
                .attr("x", d => x(d['id']))
                .attr("y", d => y(d['interval'])) */
            /* .selectAll("bars")
            .data(this.data)
            .enter()
            .append("rect")
            .attr("x", d => x(d.id))
            .attr("y", d => y(d.interval))
            .attr("width", x.bandwidth())
            .attr("height", (d) => this.height - y(d.interval))
            .attr("fill", "#d04a35"); */
        }
    }
    ngOnInit() {
        this.margin = 50;
        this.width = 450 - (this.margin * 2);
        this.height = 400 - (this.margin * 2);
        if (!this.svg) {
            console.log("svg not defined");
            this.createSvg();
        }
        //this.drawBars(this.data);
    }
};
BarComponent.ctorParameters = () => [];
BarComponent.propDecorators = {
    numeroEstratto: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }],
    data: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }],
    weel: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }]
};
BarComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-bar',
        template: _bar_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_bar_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], BarComponent);



/***/ }),

/***/ 73471:
/*!*****************************************************************!*\
  !*** ./src/app/components/cookies-law/cookies-law.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CookiesLawComponent": () => (/* binding */ CookiesLawComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _cookies_law_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cookies-law.component.html?ngResource */ 34030);
/* harmony import */ var _cookies_law_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cookies-law.component.scss?ngResource */ 91721);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 93819);
var CookiesLawComponent_1;





let CookiesLawComponent = CookiesLawComponent_1 = class CookiesLawComponent {
    constructor(popoverController) {
        this.popoverController = popoverController;
    }
    ngOnInit() { }
    settingsPopover(ev) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            const siteInfo = { id: 1, name: 'edupala' };
            const popover = yield this.popoverController.create({
                component: CookiesLawComponent_1,
                event: ev,
                cssClass: 'popover_setting',
                componentProps: {
                    site: siteInfo
                },
                translucent: true
            });
            popover.onDidDismiss().then((result) => {
                console.log(result.data);
            });
            return yield popover.present();
            /** Sync event from popover component */
        });
    }
};
CookiesLawComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.PopoverController }
];
CookiesLawComponent = CookiesLawComponent_1 = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-cookies-law',
        template: _cookies_law_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_cookies_law_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], CookiesLawComponent);



/***/ }),

/***/ 52683:
/*!*********************************************************!*\
  !*** ./src/app/components/scatter/scatter.component.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ScatterComponent": () => (/* binding */ ScatterComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _scatter_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scatter.component.html?ngResource */ 87320);
/* harmony import */ var _scatter_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scatter.component.scss?ngResource */ 50168);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! d3 */ 17659);





let ScatterComponent = class ScatterComponent {
    constructor() {
        this.data = [
            { "Framework": "Vue", "Stars": "166443", "Released": "2014" },
            { "Framework": "React", "Stars": "150793", "Released": "2013" },
            { "Framework": "Angular", "Stars": "62342", "Released": "2016" },
            { "Framework": "Backbone", "Stars": "27647", "Released": "2010" },
            { "Framework": "Ember", "Stars": "21471", "Released": "2011" },
        ];
        this.margin = 50;
        this.width = 250 - (this.margin * 2);
        this.height = 400 - (this.margin * 2);
    }
    drawPlot() {
        // Add X axis
        const x = d3__WEBPACK_IMPORTED_MODULE_2__.scaleLinear()
            .domain([2009, 2017])
            .range([0, this.width]);
        this.svg.append("g")
            .attr("transform", "translate(0," + this.height + ")")
            .call(d3__WEBPACK_IMPORTED_MODULE_2__.axisBottom(x).tickFormat(d3__WEBPACK_IMPORTED_MODULE_2__.format("d")));
        // Add Y axis
        const y = d3__WEBPACK_IMPORTED_MODULE_2__.scaleLinear()
            .domain([0, 200000])
            .range([this.height, 0]);
        this.svg.append("g")
            .call(d3__WEBPACK_IMPORTED_MODULE_2__.axisLeft(y));
        // Add dots
        const dots = this.svg.append('g');
        dots.selectAll("dot")
            .data(this.data)
            .enter()
            .append("circle")
            .attr("cx", d => x(d.Released))
            .attr("cy", d => y(d.Stars))
            .attr("r", 7)
            .style("opacity", .5)
            .style("fill", "#69b3a2");
        // Add labels
        dots.selectAll("text")
            .data(this.data)
            .enter()
            .append("text")
            .text(d => d.Framework)
            .attr("x", d => x(d.Released))
            .attr("y", d => y(d.Stars));
    }
    createSvg() {
        this.svg = d3__WEBPACK_IMPORTED_MODULE_2__.select("figure#scatter")
            .append("svg")
            .attr("width", this.width + (this.margin * 2))
            .attr("height", this.height + (this.margin * 2))
            .append("g")
            .attr("transform", "translate(" + this.margin + "," + this.margin + ")");
    }
    ngOnInit() {
        this.createSvg();
        this.drawPlot();
    }
};
ScatterComponent.ctorParameters = () => [];
ScatterComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-scatter',
        template: _scatter_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_scatter_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ScatterComponent);



/***/ }),

/***/ 80191:
/*!************************************!*\
  !*** ./src/app/configs/configs.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "configs": () => (/* binding */ configs),
/* harmony export */   "registrationStrategy": () => (/* binding */ registrationStrategy)
/* harmony export */ });
/* harmony import */ var _models_usersType__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/usersType */ 83686);
/* harmony import */ var _modules_user_models_privilegesLevelModel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modules/user/models/privilegesLevelModel */ 59201);


var registrationStrategy;
(function (registrationStrategy) {
    registrationStrategy[registrationStrategy["regular"] = 0] = "regular";
    registrationStrategy[registrationStrategy["twoSteps"] = 1] = "twoSteps";
})(registrationStrategy || (registrationStrategy = {}));
const configs = {
    accessLevel: [
        new _modules_user_models_privilegesLevelModel__WEBPACK_IMPORTED_MODULE_1__.RoleModel({ key: "Sviluppatore", value: 1 }),
        new _modules_user_models_privilegesLevelModel__WEBPACK_IMPORTED_MODULE_1__.RoleModel({ key: "Responsabile", value: 2 }),
        new _modules_user_models_privilegesLevelModel__WEBPACK_IMPORTED_MODULE_1__.RoleModel({ key: "Utente standard", value: 3 })
    ],
    appName: "arpho's projects",
    userType: [
        { key: "regular", value: _models_usersType__WEBPACK_IMPORTED_MODULE_0__.UserType.regular },
        { key: "clerk", value: _models_usersType__WEBPACK_IMPORTED_MODULE_0__.UserType.clerk }
    ],
    offlineEntityNumber: 0,
    weels: [
        "Bari",
        "Cagliari",
        "Firenze",
        "Genova",
        "Milano",
        "Napoli",
        "Palermo",
        "Roma",
        "Torino",
        "Venezia",
        "Nazionale"
    ],
    locked: false,
    enablingCodeLength: 5,
    registrationStrategy: registrationStrategy.regular
};


/***/ }),

/***/ 20688:
/*!****************************************!*\
  !*** ./src/app/configs/credentials.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "credentials": () => (/* binding */ credentials)
/* harmony export */ });
const credentials = {
    firebase: {
        apiKey: "AIzaSyC8KpEkGQG9oIKaZ9RXm3en8YxroR3X8qA",
        authDomain: "arphosprojects.firebaseapp.com",
        projectId: "arphosprojects",
        storageBucket: "arphosprojects.appspot.com",
        messagingSenderId: "627269106498",
        databaseURL: "https://arphosprojects-default-rtdb.europe-west1.firebasedatabase.app",
        appId: "1:627269106498:web:aa3cf64120f673af5fe6db",
        measurementId: "G-0F82R80WZ4"
    },
    google: {
        api_key: 'AIzaSyDznBFTvvbLzPqgmAd7hC_fUbKGPzL_F6E' // 'AIzaSyClc8roQ21e1VFTzJTS0XkG7pVA_c3SGis'
    }
};
/* { fdirewbase's rules
  "rules": {
     "https://genial-lotto-default-rtdb.europe-west1.firebasedatabase.app"
  
        "categorie":{
          "$uid":{
            ".read":"$uid===auth.uid",
              ".write":"$uid===auth.uid"
          }
        },
          "fornitori":{
          "$uid":{
                            ".read":"$uid===auth.uid",
              ".write":"$uid===auth.uid"
          }
        },
          "acquisti":{
          "$uid":{
                            ".read":"$uid===auth.uid",
              ".write":"$uid===auth.uid"
          }
        },
          "userProfile":{
          "$uid":{
                            ".read":"$uid===auth.uid",
              ".write":"$uid===auth.uid"
          }
        },
          "widgets":{
          "$uid":{
                            ".read":"$uid===auth.uid",
              ".write":"$uid===auth.uid"
          }
        },
          "pagamenti":{
          "$uid":{
                            ".read":"$uid===auth.uid",
              ".write":"$uid===auth.uid"
          }
        }


La formula dopo l’unione figurale
Hai
A B C
Somma
A+B=risultato X( se supera 90 fare la differenza a 90 per trovare il numero )
B+C= risultati Y  ( se supera 90 come sopra)
Poi
X+Y= 1 numero Z GIOCABILE
Z-90= 2 numero giocabile

}
} */


/***/ }),

/***/ 12693:
/*!***********************************!*\
  !*** ./src/app/models/Address.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Address": () => (/* binding */ Address)
/* harmony export */ });
/* harmony import */ var _modules_helpers_serializers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modules/helpers/serializers */ 59163);

class Address {
    constructor(value) {
        this.serializers = new _modules_helpers_serializers__WEBPACK_IMPORTED_MODULE_0__.Serializers();
        this.load(value);
    }
    load(value) {
        Object.assign(this, value);
        return this;
    }
    fetchAddress() {
        return `${this.street}, ${this.number}, ${this.cap} ${this.city} ${this.province}`;
    }
    setAddress(v) {
        Object.assign(this, v);
        return this;
    }
    serialize() {
        return {
            'street': this.serializers.serialize2String(this.street),
            'cap': this.serializers.serialize2String(this.cap),
            'city': this.serializers.serialize2String(this.city),
            'number': this.serializers.serialize2String(this.number),
            'province': this.serializers.serialize2String(this.province),
            'longitude': this.serializers.serialize2PositiveNumber(this.longitude),
            'latitude': this.serializers.serialize2PositiveNumber(this.latitude)
        };
    }
    getTitle() {
        throw new Error("Method not implemented.");
    }
    getCountingText() {
        throw new Error("Method not implemented.");
    }
    getNote() {
        throw new Error("Method not implemented.");
    }
    build(item) {
        throw new Error("Method not implemented.");
    }
    isArchived() {
        throw new Error("Method not implemented.");
    }
    archiveItem(b) {
        throw new Error("Method not implemented.");
    }
    isArchivable() {
        throw new Error("Method not implemented.");
    }
    getValue2() {
        throw new Error("Method not implemented.");
    }
    getValue3() {
        throw new Error("Method not implemented.");
    }
    getValue4() {
        throw new Error("Method not implemented.");
    }
    setKey(key) {
        throw new Error("Method not implemented.");
    }
    getEditPopup(item, service) {
        throw new Error("Method not implemented.");
    }
    initialize(item) {
        throw new Error("Method not implemented.");
    }
    getAggregate() {
        throw new Error("Method not implemented.");
    }
    aggregateAction() {
        throw new Error("Method not implemented.");
    }
    hasQuickActions() {
        throw new Error("Method not implemented.");
    }
    getElement() {
        throw new Error("Method not implemented.");
    }
}


/***/ }),

/***/ 55296:
/*!************************************!*\
  !*** ./src/app/models/Customer.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Customer": () => (/* binding */ Customer)
/* harmony export */ });
/* harmony import */ var _models_Address__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/Address */ 12693);
/* harmony import */ var _modules_user_models_birthDateModel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modules/user/models/birthDateModel */ 50573);
/* harmony import */ var _modules_user_models_userModel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../modules/user/models/userModel */ 60783);
/* harmony import */ var _usersType__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./usersType */ 83686);
/* harmony import */ var _telephone__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./telephone */ 56241);
/* harmony import */ var _modules_item_models_value__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../modules/item/models/value */ 24263);
/* harmony import */ var _modules_user_models_privilegesLevelModel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../modules/user/models/privilegesLevelModel */ 59201);
/* harmony import */ var _modules_helpers_serializers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../modules/helpers/serializers */ 59163);








class Customer extends _modules_user_models_userModel__WEBPACK_IMPORTED_MODULE_2__.UserModel {
    constructor(user, key) {
        super(user, key);
        this._enablingCodeUsed = false;
        this.telephones = [];
        this.dor = new _modules_user_models_birthDateModel__WEBPACK_IMPORTED_MODULE_1__.DateModel(new Date()); // date of registration
        this.role = new _modules_user_models_privilegesLevelModel__WEBPACK_IMPORTED_MODULE_6__.RoleModel({ key: "Utente standard", value: 3 });
        this.load(user);
        if (!this.userType) {
            this.userType = _usersType__WEBPACK_IMPORTED_MODULE_3__.UserType.regular;
        }
    }
    get enablingCode() {
        return this._enablingCode;
    }
    set enablingCode(code) {
        this._enablingCode = code;
    }
    get enablingCodeUsed() {
        return this._enablingCodeUsed;
    }
    set enablingCodeUsed(value) {
        this._enablingCodeUsed = value;
        if (value && this.dor == undefined) {
            this.dor = new _modules_user_models_birthDateModel__WEBPACK_IMPORTED_MODULE_1__.DateModel(new Date());
        }
    }
    load(v) {
        super.load(v);
        this.telephones = [];
        Object.assign(this, v);
        this.level = this.level || 3;
        this.level = Number(this.level); // casting to number
        this.role = super.roleFactory(this.level);
        if (v && v['dor']) {
            this.dor = new _modules_user_models_birthDateModel__WEBPACK_IMPORTED_MODULE_1__.DateModel(new Date(this.dor));
        }
        if (v && v['telephones']) {
            this.telephones = v['telephones'].map((t) => {
                return new _telephone__WEBPACK_IMPORTED_MODULE_4__.Telephone(t);
            });
        }
        if (v && v['indirizzo']) {
            this.address = new _models_Address__WEBPACK_IMPORTED_MODULE_0__.Address(v['indirizzo']);
        }
        else {
            this.address = new _models_Address__WEBPACK_IMPORTED_MODULE_0__.Address();
        }
        if (!this.dor) { // I assume user from db has a valid dor, if not is a a faulty user
            this.dor = new _modules_user_models_birthDateModel__WEBPACK_IMPORTED_MODULE_1__.DateModel(new Date("01-01-1972")); // set a very old Date this user has never been registered 
        }
        return this;
    }
    serialize() {
        const serializers = new _modules_helpers_serializers__WEBPACK_IMPORTED_MODULE_7__.Serializers();
        const telephones = this.telephones.map((t) => t.serialize());
        var out = Object.assign(Object.assign({}, super.serialize()), {
            level: serializers.serialize2PositiveNumber(this.level, 3),
            telephones: telephones,
            archived: !!this.archived,
            dor: new _modules_user_models_birthDateModel__WEBPACK_IMPORTED_MODULE_1__.DateModel(this.dor).formatDate(),
            userType: this.userType,
            enablingCode: serializers.serialize2String(this.enablingCode),
            enablingCodeUsed: this.enablingCodeUsed
        });
        if (this.key) {
            out = Object.assign(Object.assign({}, out), { key: serializers.serialize2String(this.key) });
        }
        if (this.address instanceof _models_Address__WEBPACK_IMPORTED_MODULE_0__.Address) {
            out = Object.assign(Object.assign({}, out), { address: this.address.serialize() });
        }
        return out;
    }
    getValue2() {
        return new _modules_item_models_value__WEBPACK_IMPORTED_MODULE_5__.Value({
            value: this.email,
            label: "email"
        });
    }
    getValue4() {
        return new _modules_item_models_value__WEBPACK_IMPORTED_MODULE_5__.Value({ label: 'key', value: this.key });
    }
    getValue3() {
        return new _modules_item_models_value__WEBPACK_IMPORTED_MODULE_5__.Value({ value: this.enabled ? "abilitato" : "non abilitato", label: 'utente ' });
    }
    /*  getUserTypeKey(level) {
 
         var out = configs.userType.filter(
             (access: UserTypeModel) => access.value === level
         )[0]
 
         return out ? out.key : ''
 
     } */
    setKey(key) {
        this.key = key;
        return this;
    }
    getTitle() {
        return new _modules_item_models_value__WEBPACK_IMPORTED_MODULE_5__.Value({ value: `${this.firstName} ${this.lastName}`, label: 'utente' });
    }
    getElement() {
        return { element: 'utente', genere: 'o' };
    }
}


/***/ }),

/***/ 56241:
/*!*************************************!*\
  !*** ./src/app/models/telephone.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Telephone": () => (/* binding */ Telephone)
/* harmony export */ });
/* harmony import */ var _modules_helpers_serializers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modules/helpers/serializers */ 59163);

class Telephone {
    constructor(v) {
        this.load(v);
    }
    serialize() {
        const serializers = new _modules_helpers_serializers__WEBPACK_IMPORTED_MODULE_0__.Serializers();
        return { numero: serializers.serialize2String(this.numero), note: serializers.serialize2String(this.note) };
    }
    load(v) {
        Object.assign(this, v);
        return this;
    }
}


/***/ }),

/***/ 83686:
/*!*************************************!*\
  !*** ./src/app/models/usersType.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserType": () => (/* binding */ UserType)
/* harmony export */ });
var UserType;
(function (UserType) {
    UserType[UserType["regular"] = 0] = "regular";
    UserType[UserType["clerk"] = 1] = "clerk";
})(UserType || (UserType = {}));


/***/ }),

/***/ 43596:
/*!****************************************************************************************!*\
  !*** ./src/app/modules/dynamic-form/components/dynamic-form/dynamic-form.component.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DynamicFormComponent": () => (/* binding */ DynamicFormComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _dynamic_form_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dynamic-form.component.html?ngResource */ 27445);
/* harmony import */ var _dynamic_form_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dynamic-form.component.scss?ngResource */ 93462);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _services_question_control_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/question-control.service */ 92446);






let DynamicFormComponent = class DynamicFormComponent {
    constructor(qcs) {
        this.qcs = qcs;
        this.interactiveSubmit = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
        this.singleSubmit = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
        // the page could need to observe the form
        this.Form = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
        this.changes = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
        this.questions = [];
    }
    ngOnChanges(changes) {
        this.changes.emit(changes);
    }
    ngOnInit() {
        this.form = this.qcs.toFormGroup(this.questions);
        this.form.valueChanges.subscribe(data => {
            this.changes.emit(data);
        });
        if (this.questions.filter(v => v.key === "location").length > 0) {
            this.form.addControl("address", new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl()); // input-geolocation usa un control in più
        }
        this.form.valueChanges.subscribe(v => {
            this.interactiveSubmit.emit(v);
        });
        this.Form.emit(this.form);
    }
    onSubmit() {
        this.payLoad = {};
        this.singleSubmit.emit(this.form.value);
    }
};
DynamicFormComponent.ctorParameters = () => [
    { type: _services_question_control_service__WEBPACK_IMPORTED_MODULE_2__.QuestionControlService }
];
DynamicFormComponent.propDecorators = {
    interactiveSubmit: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output }],
    singleSubmit: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output }],
    Form: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output }],
    changes: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output }],
    questions: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }],
    submitText: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }],
    hideSubmitButton: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }]
};
DynamicFormComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: "app-dynamic-form",
        template: _dynamic_form_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__.ChangeDetectionStrategy.OnPush,
        providers: [_services_question_control_service__WEBPACK_IMPORTED_MODULE_2__.QuestionControlService],
        styles: [_dynamic_form_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], DynamicFormComponent);



/***/ }),

/***/ 10163:
/*!**************************************************************************************!*\
  !*** ./src/app/modules/dynamic-form/components/email-field/email-field.component.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EmailFieldComponent": () => (/* binding */ EmailFieldComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _email_field_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./email-field.component.html?ngResource */ 84661);
/* harmony import */ var _email_field_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./email-field.component.scss?ngResource */ 71391);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 90587);
var EmailFieldComponent_1;





let EmailFieldComponent = EmailFieldComponent_1 = class EmailFieldComponent {
    constructor(formBuilder) {
        this.formBuilder = formBuilder;
        this.email = '';
        this.touched = false;
        this.onChange = (password) => { };
        // tslint:disable-next-line: ban-types
        this.onTouch = () => { };
        this.onValidationChange = () => { };
    }
    set value(email) {
        this.email = email;
    }
    writeValue(email) {
        this.email = email;
    }
    registerOnChange(fn) {
        this.onChange = fn;
    }
    registerOnTouched(fn) {
        this.onTouch = fn;
    }
    setDisabledState(disabled) {
        this.disabled = disabled;
    }
    markAsTouched() {
        if (!this.touched) {
            this.onTouch();
            this.touched = true;
        }
    }
    validate(control) {
        if (!this.isValid()) {
            return { notValidEmail: this.email };
        }
    }
    registerOnValidatorChange(fn) {
        this.onValidationChange = fn;
    }
    isValid() {
        var _a;
        return !this.touched || !!((_a = this.emailForm.value.email) === null || _a === void 0 ? void 0 : _a.match(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/));
    }
    ngOnInit() {
        this.emailForm = this.formBuilder.group({ email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl(this.email, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.email) });
        this.subscription = this.emailForm.valueChanges.subscribe(d => {
            this.markAsTouched();
            this.onChange(d.email);
        });
    }
};
EmailFieldComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormBuilder }
];
EmailFieldComponent.propDecorators = {
    email: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }]
};
EmailFieldComponent = EmailFieldComponent_1 = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-email-field',
        template: _email_field_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        providers: [{
                provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NG_VALUE_ACCESSOR,
                multi: true,
                useExisting: EmailFieldComponent_1
            },
            {
                provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NG_VALIDATORS,
                multi: true,
                useExisting: EmailFieldComponent_1
            }],
        styles: [_email_field_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], EmailFieldComponent);



/***/ }),

/***/ 11924:
/*!*******************************************************************************************************!*\
  !*** ./src/app/modules/dynamic-form/components/formFields/code-generator/code-generator.component.ts ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CodeGeneratorComponent": () => (/* binding */ CodeGeneratorComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _code_generator_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./code-generator.component.html?ngResource */ 86225);
/* harmony import */ var _code_generator_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./code-generator.component.scss?ngResource */ 72095);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 32425);
var CodeGeneratorComponent_1;






let CodeGeneratorComponent = CodeGeneratorComponent_1 = class CodeGeneratorComponent {
    constructor(formBuilder) {
        this.formBuilder = formBuilder;
        this.code = "";
        this.subscription = rxjs__WEBPACK_IMPORTED_MODULE_2__.Subscription.EMPTY;
        this.touched = false;
        this.onChange = (password) => { };
        // tslint:disable-next-line: ban-types
        this.onTouch = () => { };
        this.onValidationChange = () => { };
    }
    set value(code) {
        this.code = code;
    }
    get value() {
        return this.code;
    }
    isValid() {
        return true;
    }
    registerOnChange(fn) {
        this.onChange = fn;
    }
    registerOnTouched(fn) {
        this.onTouch = fn;
    }
    markAsTouched() {
        if (!this.touched) {
            this.onTouch();
            this.touched = true;
        }
    }
    validate(control) {
        return this.validator(control);
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
    writeValue(code) {
        this.code = code;
    }
    setDisabledState(isDisabled) {
        throw new Error('Method not implemented.');
    }
    registerOnValidatorChange(fn) {
        this.onValidationChange = fn;
    }
    execute() {
        console.log("executing code");
        this.generatorFunction().then(code => {
            this.enablingCodeForm.controls['code'].setValue(code);
        });
        this.enablingCodeForm.controls['code'].setValue(this.generatorFunction());
    }
    ngOnInit() {
        console.log("genera code");
        this.enablingCodeForm = this.formBuilder.group({ code: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(this.code) });
        this.subscription = this.enablingCodeForm.valueChanges.subscribe(d => {
            this.markAsTouched();
            this.onChange(d.code);
        });
    }
};
CodeGeneratorComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder }
];
CodeGeneratorComponent.propDecorators = {
    code: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input }],
    generatorFunction: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input }],
    validator: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input }]
};
CodeGeneratorComponent = CodeGeneratorComponent_1 = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-code-generator',
        template: _code_generator_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        providers: [{
                provide: _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NG_VALUE_ACCESSOR,
                multi: true,
                useExisting: CodeGeneratorComponent_1
            },
            {
                provide: _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NG_VALIDATORS,
                multi: true,
                useExisting: CodeGeneratorComponent_1
            }],
        styles: [_code_generator_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], CodeGeneratorComponent);



/***/ }),

/***/ 30419:
/*!********************************************************************************************!*\
  !*** ./src/app/modules/dynamic-form/components/password-field/password-field.component.ts ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PasswordFieldComponent": () => (/* binding */ PasswordFieldComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _password_field_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./password-field.component.html?ngResource */ 24722);
/* harmony import */ var _password_field_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./password-field.component.scss?ngResource */ 28975);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 90587);
var PasswordFieldComponent_1;





let PasswordFieldComponent = PasswordFieldComponent_1 = class PasswordFieldComponent {
    constructor(formBuilder) {
        this.formBuilder = formBuilder;
        this.onChange = (password) => { };
        // tslint:disable-next-line: ban-types
        this.onTouch = () => { };
        this.onValidationChange = () => { };
        this.password = '';
        this.touched = false;
    }
    set id(id) {
        this._id = id;
    }
    get id() {
        return this._id;
    }
    set value(pass) {
        this.password = pass;
    }
    get value() {
        return this.password;
    }
    get match() {
        return this.passwordForm.value.password == this.passwordForm.value.retype;
    }
    get isValid() {
        return this.match || !this.touched || (this.touched && !!!this.retypePassword && !this.match);
    }
    ngOnDestroy() {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }
    validate(control) {
        const password = control.value;
        if (this.retypePassword) {
            if (password.password != password.retype) {
                return { passwordMismatch: {} };
            }
        }
    }
    registerOnValidatorChange(fn) {
        this.onValidationChange = fn;
    }
    writeValue(pass) {
        this.password = pass;
    }
    registerOnChange(fn) {
        this.onChange = fn;
    }
    registerOnTouched(fn) {
        this.onTouch = fn;
    }
    setDisabledState(disabled) {
        this.disabled = disabled;
    }
    markAsTouched() {
        if (!this.touched) {
            this.onTouch();
            this.touched = true;
        }
    }
    ngOnInit() {
        this.passwordForm = this.retypePassword ? this.formBuilder.group({
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl(this.password, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required),
            retype: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl(this.retype)
        }) : this.formBuilder.group({
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl(this.password, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required)
        });
        this.subscription = this.passwordForm.valueChanges.subscribe(d => {
            this.markAsTouched();
            this.onChange({ 'password': d.password, 'retype': d.retype });
        });
    }
};
PasswordFieldComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormBuilder }
];
PasswordFieldComponent.propDecorators = {
    retypePassword: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }],
    id: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }],
    value: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }]
};
PasswordFieldComponent = PasswordFieldComponent_1 = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-password-field',
        template: _password_field_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        providers: [
            {
                provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NG_VALUE_ACCESSOR,
                multi: true,
                useExisting: PasswordFieldComponent_1
            },
            {
                provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NG_VALIDATORS,
                multi: true,
                useExisting: PasswordFieldComponent_1
            }
        ],
        styles: [_password_field_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], PasswordFieldComponent);



/***/ }),

/***/ 27415:
/*!**************************************************************************************************************!*\
  !*** ./src/app/modules/dynamic-form/components/question-form-component/question-form-component.component.ts ***!
  \**************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QuestionFormComponent": () => (/* binding */ QuestionFormComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _question_form_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./question-form-component.html?ngResource */ 59751);
/* harmony import */ var _question_form_component_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./question-form-component.component.scss?ngResource */ 27498);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 90587);





let QuestionFormComponent = class QuestionFormComponent {
    constructor(fb) {
        this.fb = fb;
    }
    writeValue(obj) {
        throw new Error('Method not implemented.');
    }
    setDisabledState(isDisabled) {
        throw new Error('Method not implemented.');
    }
    ngOnInit() {
        var _a, _b;
        this.value = this.question ? this.question.value : undefined;
        this.form = this.form
            ? this.form
            : this.fb.group({
                // I need an instance of formgroup for run the tests
                name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl((_a = this.question) === null || _a === void 0 ? void 0 : _a.key),
                value: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl((_b = this.question) === null || _b === void 0 ? void 0 : _b.value)
            });
    }
    ngOnChanges(changes) {
    }
    get isValid() {
        return this.question ? this.form.controls[this.question.key].valid : false;
    }
    get getValue() {
        return this.question.key ? this.form.get(this.question.key).value : '';
    }
    getIcon() {
        return this.form.get(this.question.key).value ? String(this.question.iconTrue) : String(this.question.iconFalse);
    }
};
QuestionFormComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormBuilder }
];
QuestionFormComponent.propDecorators = {
    question: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }],
    form: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }]
};
QuestionFormComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-question',
        template: _question_form_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__.ChangeDetectionStrategy.OnPush,
        styles: [_question_form_component_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], QuestionFormComponent);



/***/ }),

/***/ 74316:
/*!*************************************************************!*\
  !*** ./src/app/modules/dynamic-form/dynamic-form.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DynamicFormModule": () => (/* binding */ DynamicFormModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _components_question_form_component_question_form_component_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/question-form-component/question-form-component.component */ 27415);
/* harmony import */ var _components_dynamic_form_dynamic_form_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/dynamic-form/dynamic-form.component */ 43596);
/* harmony import */ var _services_question_control_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/question-control.service */ 92446);
/* harmony import */ var _item_item_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../item/item.module */ 89355);
/* harmony import */ var _components_password_field_password_field_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/password-field/password-field.component */ 30419);
/* harmony import */ var _components_email_field_email_field_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/email-field/email-field.component */ 10163);
/* harmony import */ var _components_formFields_code_generator_code_generator_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/formFields/code-generator/code-generator.component */ 11924);












let DynamicFormModule = class DynamicFormModule {
};
DynamicFormModule = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.NgModule)({
        declarations: [_components_question_form_component_question_form_component_component__WEBPACK_IMPORTED_MODULE_0__.QuestionFormComponent, _components_dynamic_form_dynamic_form_component__WEBPACK_IMPORTED_MODULE_1__.DynamicFormComponent, _components_password_field_password_field_component__WEBPACK_IMPORTED_MODULE_4__.PasswordFieldComponent, _components_email_field_email_field_component__WEBPACK_IMPORTED_MODULE_5__.EmailFieldComponent, _components_formFields_code_generator_code_generator_component__WEBPACK_IMPORTED_MODULE_6__.CodeGeneratorComponent],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonicModule.forRoot(),
            _angular_forms__WEBPACK_IMPORTED_MODULE_11__.ReactiveFormsModule,
            _item_item_module__WEBPACK_IMPORTED_MODULE_3__.ItemModule,
        ],
        exports: [_components_question_form_component_question_form_component_component__WEBPACK_IMPORTED_MODULE_0__.QuestionFormComponent, _components_dynamic_form_dynamic_form_component__WEBPACK_IMPORTED_MODULE_1__.DynamicFormComponent],
        providers: [_services_question_control_service__WEBPACK_IMPORTED_MODULE_2__.QuestionControlService]
    })
], DynamicFormModule);



/***/ }),

/***/ 1010:
/*!**************************************************************!*\
  !*** ./src/app/modules/dynamic-form/models/question-base.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QuestionBase": () => (/* binding */ QuestionBase)
/* harmony export */ });
//import { Options } from 'selenium-webdriver';
class QuestionBase {
    constructor(options) {
        this.onChange = () => { };
        this.filterFactory = (options) => {
            return options && options[this.key] ? (item) => this.filterFunction(options[this.key], item) : this.neutralFilter;
        };
        this.value = options["value"];
        this.key = options.key || "";
        this.type = options['type'] || '';
        this.label = options.label || "";
        this.required = !!options['required'];
        this.value = options['value'];
        this.filterFunction = options['filterFunction'];
        this.order = options['order'] === undefined ? 1 : options['order'];
        this.asyncValidator = options['asyncValidator'];
        this.controlType = options['controlType'] || "";
        // tslint:disable-next-line: prefer-const
        for (let key in options) {
            if (options[key]) {
                this[key] = options[key];
            }
        }
        this.neutralFilter = (item) => true;
        this.filterFunction = options['filterFunction'] || this.neutralFilter;
    }
    selectedItem(item) { }
    ItemsFilterFunction(item) {
        return true;
    }
    createPopup(service) { }
    sorterFunction(a, b) { return 0; }
}


/***/ }),

/***/ 38878:
/*!**************************************************************!*\
  !*** ./src/app/modules/dynamic-form/models/question-date.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DateQuestion": () => (/* binding */ DateQuestion)
/* harmony export */ });
/* harmony import */ var _question_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./question-base */ 1010);

class DateQuestion extends _question_base__WEBPACK_IMPORTED_MODULE_0__.QuestionBase {
    constructor(options = { key: 'date', label: 'set a date',
        presentation: 'date',
        isDateEnabled: (date) => { return true; }
    }) {
        super(options);
        this.controlType = "datebox";
        /*
        // tslint:disable-next-line: no-string-literal
        this.type = options["type"] || ""; */
    }
}


/***/ }),

/***/ 90402:
/*!******************************************************************!*\
  !*** ./src/app/modules/dynamic-form/models/question-dropdown.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DropdownQuestion": () => (/* binding */ DropdownQuestion)
/* harmony export */ });
/* harmony import */ var _question_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./question-base */ 1010);

class DropdownQuestion extends _question_base__WEBPACK_IMPORTED_MODULE_0__.QuestionBase {
    constructor(options) {
        super(options);
        this.controlType = 'dropdown';
        this.options = [];
        // tslint:disable-next-line: no-string-literal
        this.options = options['options'] || [];
    }
}


/***/ }),

/***/ 12321:
/*!***************************************************************!*\
  !*** ./src/app/modules/dynamic-form/models/question-email.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EmailQuestion": () => (/* binding */ EmailQuestion)
/* harmony export */ });
/* harmony import */ var _question_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./question-base */ 1010);

class EmailQuestion extends _question_base__WEBPACK_IMPORTED_MODULE_0__.QuestionBase {
    constructor(options) {
        super(options);
        this.controlType = 'email';
    }
}


/***/ }),

/***/ 72644:
/*!*****************************************************************!*\
  !*** ./src/app/modules/dynamic-form/models/question-textbox.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TextboxQuestion": () => (/* binding */ TextboxQuestion)
/* harmony export */ });
/* harmony import */ var _question_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./question-base */ 1010);

class TextboxQuestion extends _question_base__WEBPACK_IMPORTED_MODULE_0__.QuestionBase {
    constructor(options) {
        super(options);
        this.controlType = 'textbox';
        // tslint:disable-next-line: no-string-literal
        this.type = options['type'] || '';
    }
}


/***/ }),

/***/ 92446:
/*!***************************************************************************!*\
  !*** ./src/app/modules/dynamic-form/services/question-control.service.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QuestionControlService": () => (/* binding */ QuestionControlService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ 90587);



let QuestionControlService = class QuestionControlService {
    constructor(fb) {
        this.fb = fb;
    }
    questionFactory(question) {
        const Question = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormControl(question.value || '');
        if (question.required) {
            Question.addValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.required);
        }
        if (question.validator) {
            Question.addValidators(question.validator);
        }
        if (question.asyncValidator) {
            console.log(question, question.asyncValidator);
            Question.setAsyncValidators(question.asyncValidator);
            Question.updateValueAndValidity();
        }
        return Question;
    }
    toFormGroup(questions) {
        const group = {};
        questions.forEach(question => {
            group[question.key] = this.questionFactory(question); // question.required ? new FormControl(question.value || '', Validators.required)
            //: new FormControl(question.value||'');
        });
        return this.fb.group(group);
    }
};
QuestionControlService.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormBuilder }
];
QuestionControlService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)()
], QuestionControlService);



/***/ }),

/***/ 41231:
/*!******************************************************!*\
  !*** ./src/app/modules/helpers/createFirebaseApp.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MyFirebaseHelper": () => (/* binding */ MyFirebaseHelper)
/* harmony export */ });
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/app */ 66369);

class MyFirebaseHelper {
    constructor() {
        this.createFirebaseApp = (config = {}) => {
            try {
                return (0,firebase_app__WEBPACK_IMPORTED_MODULE_0__.getApp)();
            }
            catch (error) {
                return (0,firebase_app__WEBPACK_IMPORTED_MODULE_0__.initializeApp)(config);
            }
        };
    }
}


/***/ }),

/***/ 33552:
/*!***************************************************!*\
  !*** ./src/app/modules/helpers/helpers.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HelpersModule": () => (/* binding */ HelpersModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _services_toaster_my_toast_service_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services/toaster/my-toast-service.service */ 30218);




let HelpersModule = class HelpersModule {
};
HelpersModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        declarations: [],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule
        ],
        providers: [_services_toaster_my_toast_service_service__WEBPACK_IMPORTED_MODULE_0__.MyToastService]
    })
], HelpersModule);



/***/ }),

/***/ 39641:
/*!*******************************************************************************!*\
  !*** ./src/app/modules/helpers/menu/models/business/checkers/checkEnabled.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CheckEnabled": () => (/* binding */ CheckEnabled)
/* harmony export */ });
class CheckEnabled {
    constructor() {
        this.canAdd = (claims, locked) => locked ? claims['enabled'] ? claims['enabled'] : false : true;
        // if not locked always true
    }
}


/***/ }),

/***/ 29201:
/*!**********************************************************************************!*\
  !*** ./src/app/modules/helpers/menu/models/business/checkers/checkExpiration.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CheckExpiration": () => (/* binding */ CheckExpiration)
/* harmony export */ });
class CheckExpiration {
    constructor() {
        this.canAdd = (claims, locked) => {
            return locked ?
                claims.expirationTime ? claims.expirationTime >= new Date().getTime() : false :
                true;
        };
    }
}


/***/ }),

/***/ 24234:
/*!****************************************************************************!*\
  !*** ./src/app/modules/helpers/menu/models/business/checkers/checkRole.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CheckRole": () => (/* binding */ CheckRole)
/* harmony export */ });
class CheckRole {
    constructor(level) {
        this.level = level;
    }
    canAdd(claims, locked) {
        let out = false;
        if (locked) {
            out = claims.level <= this.level;
        }
        else {
            out = true;
        }
        return out;
    }
}


/***/ }),

/***/ 21495:
/*!**********************************************************************!*\
  !*** ./src/app/modules/helpers/menu/models/business/menuComposer.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "menuComposer": () => (/* binding */ menuComposer)
/* harmony export */ });
class menuComposer {
    static evaluateClaims(claims, checkList, orLogic = false) {
        let out = !orLogic;
        if (!orLogic) {
            if (checkList) {
                checkList.forEach(check => {
                    out = out && check.canAdd(claims);
                });
            }
            else {
                out = true;
            }
        }
        else {
            checkList.forEach(check => {
                out = out || check.canAdd(claims);
            });
        }
        return out;
    }
    static composeMenuByClaims(items, claims) {
        const menu = [];
        items.forEach(item => {
            if (this.evaluateClaims(claims, item.canAdd, item.orLogic)) {
                menu.push(item.menuItem);
            }
        });
        return menu;
    }
}


/***/ }),

/***/ 59163:
/*!************************************************!*\
  !*** ./src/app/modules/helpers/serializers.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Serializers": () => (/* binding */ Serializers)
/* harmony export */ });
class Serializers {
    constructor() {
        this.serialize2String = (v) => {
            return v ? v : '';
        };
        this.serialize2PositiveNumber = (n, defaultNumber = -1) => {
            return n ? n : defaultNumber;
        };
    }
    serialize2Array(v) {
        return v ? v : [];
    }
}


/***/ }),

/***/ 79786:
/*!*****************************************************************************!*\
  !*** ./src/app/modules/helpers/services/messages/message-broker.service.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MessageBrokerService": () => (/* binding */ MessageBrokerService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 84505);



let MessageBrokerService = class MessageBrokerService {
    constructor() {
        this._brokers = {};
        this.brokers = {};
    }
    addBroker(key) {
        const _broker = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject("");
        if (!this._brokers[key]) {
            this._brokers[key] = _broker;
            const broker = _broker.asObservable();
            this.brokers[key] = broker;
        }
    }
    subscribeTo(key, next) {
        if (!this.brokers[key]) {
            this.addBroker(key);
        }
        return this.brokers[key] ? this.brokers[key].subscribe(next) : undefined;
    }
    brokersList() {
        return Object.keys(this.brokers);
    }
    publish(key, msg) {
        var out = true;
        if (this._brokers[key]) {
            this._brokers[key].next(msg);
        }
        else {
            out = false;
        }
        return out;
    }
};
MessageBrokerService.ctorParameters = () => [];
MessageBrokerService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root'
    })
], MessageBrokerService);



/***/ }),

/***/ 30218:
/*!******************************************************************************!*\
  !*** ./src/app/modules/helpers/services/toaster/my-toast-service.service.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MyToastService": () => (/* binding */ MyToastService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ 93819);



let MyToastService = class MyToastService {
    constructor(toastController) {
        this.toastController = toastController;
    }
    presentToast(message, position = 'top', duration = 2000) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: message,
                position: position,
                duration: duration
            });
            toast.present();
        });
    }
};
MyToastService.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.ToastController }
];
MyToastService = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root'
    })
], MyToastService);



/***/ }),

/***/ 6103:
/*!****************************************************************!*\
  !*** ./src/app/modules/item/components/item/item.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MyItemComponent": () => (/* binding */ MyItemComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _item_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./item.component.html?ngResource */ 93621);
/* harmony import */ var _item_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./item.component.scss?ngResource */ 84964);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 93819);





let MyItemComponent = class MyItemComponent {
    constructor(alertCtrl) {
        this.alertCtrl = alertCtrl;
    }
    ngOnChanges(changes) { }
    ngOnInit() {
        if (this.Item) {
            this.Item.load();
        }
    }
};
MyItemComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.AlertController }
];
MyItemComponent.propDecorators = {
    Item: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }],
    Service: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }]
};
MyItemComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: "my-item",
        template: _item_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__.ChangeDetectionStrategy.OnPush,
        styles: [_item_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], MyItemComponent);



/***/ }),

/***/ 66344:
/*!********************************************************************************!*\
  !*** ./src/app/modules/item/components/items-filter/items-filter.component.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ItemsFilterComponent": () => (/* binding */ ItemsFilterComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _items_filter_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./items-filter.component.html?ngResource */ 40325);
/* harmony import */ var _items_filter_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./items-filter.component.scss?ngResource */ 53542);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _pages_filter_popup_filter_popup_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../pages/filter-popup/filter-popup.page */ 50429);






//import { access } from 'fs';
// tslint:disable:semicolon
let ItemsFilterComponent = class ItemsFilterComponent {
    constructor(modal) {
        this.modal = modal;
        this.filterSet = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
        this.filterFunction = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
        this.filterFactory = (filterSettings, fields) => {
            const questionMapper = (question) => question.filterFactory(filterSettings);
            const filterFunctionReducer = (acc, currentFunction) => (item) => acc(item) && currentFunction(item);
            return fields.map(questionMapper).reduce(filterFunctionReducer, (item) => true);
        };
    }
    ngOnInit() {
    }
    showPopup() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modal.create({ component: _pages_filter_popup_filter_popup_page__WEBPACK_IMPORTED_MODULE_2__.FilterPopupPage, componentProps: { filterFields: this.filterFields } });
            modal.onDidDismiss().then(data => {
                this.filterSet.emit(data.data);
                this.filterFunction.emit(this.filterFactory(data.data, this.filterFields));
            });
            return yield modal.present();
        });
    }
};
ItemsFilterComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ModalController }
];
ItemsFilterComponent.propDecorators = {
    filterFields: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }],
    filterSet: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output }],
    filterFunction: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output }]
};
ItemsFilterComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-items-filter',
        template: _items_filter_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_items_filter_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ItemsFilterComponent);



/***/ }),

/***/ 7693:
/*!****************************************************************************!*\
  !*** ./src/app/modules/item/components/items-list/items-list.component.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ItemsListComponent": () => (/* binding */ ItemsListComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _items_list_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./items-list.component.html?ngResource */ 47058);
/* harmony import */ var _items_list_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./items-list.component.scss?ngResource */ 65825);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 93819);





let ItemsListComponent = class ItemsListComponent {
    constructor(alertCtrl) {
        this.alertCtrl = alertCtrl;
        this.showSpinner = true;
    }
    ngOnInit() {
        this.filterFunction = (v) => true;
        if (this.service) {
            this.dummyItem = this.service.getEmptyItem();
        }
    }
    create() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            const popup = this.createPopup;
            const alert = yield this.alertCtrl.create(popup);
            yield alert.present();
        });
    }
    deleteItem(item, slide) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            slide.close();
            const element = this.service.getEmptyItem().getElement();
            const alert = yield this.alertCtrl.create({
                message: ` vuoi davvero cancellare quest${element.genere} ${element.element}?(${item.title})`,
                buttons: [
                    {
                        text: "Annulla",
                        role: "cancel",
                        handler: () => { }
                    },
                    {
                        text: "Cancella",
                        handler: () => {
                            this.service.deleteItem(item.key);
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    pluralOrSingular(text, n) {
        return n > 1 ? text.plural : text.singular;
    }
    showFilter() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () { });
    }
    ngOnChanges(changes) {
        if (changes.items_list && changes.items_list.currentValue) {
            this.items_list = changes.items_list.currentValue;
            this.showSpinner = false;
        }
        if (changes.filterFunction) {
            this.filterFunction = changes.filterFunction.currentValue;
        }
    }
    countItems() {
        return this.items_list
            ? this.items_list.filter(this.filterFunction).length
            : "loading";
    }
    do(item) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            const popup = item.getEditPopup(item, this.service);
            const alert = yield this.alertCtrl.create(popup);
            yield alert.present();
        });
    }
};
ItemsListComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.AlertController }
];
ItemsListComponent.propDecorators = {
    items_list: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input }],
    service: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input }],
    filterFunction: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input }],
    createPopup: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input }]
};
ItemsListComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: "my-items-list",
        template: _items_list_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_4__.ChangeDetectionStrategy.OnPush,
        styles: [_items_list_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ItemsListComponent);



/***/ }),

/***/ 5751:
/*!**************************************************************************!*\
  !*** ./src/app/modules/item/components/page-item/page-item.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PageItemComponent": () => (/* binding */ PageItemComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _page_item_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page-item.page.html?ngResource */ 92538);
/* harmony import */ var _page_item_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./page-item.page.scss?ngResource */ 97784);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _item_item_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../item/item.component */ 6103);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _models_value__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models/value */ 24263);








let PageItemComponent = class PageItemComponent extends _item_item_component__WEBPACK_IMPORTED_MODULE_2__.MyItemComponent {
    constructor(alertCtrl, router, ref, modal) {
        super(alertCtrl);
        this.alertCtrl = alertCtrl;
        this.router = router;
        this.ref = ref;
        this.modal = modal;
        this.Note = new _models_value__WEBPACK_IMPORTED_MODULE_3__.Value({ label: 'note', value: this.note });
    }
    ngOnInit() {
        if (this.Item) {
            this.setValue();
        }
    }
    setValue() {
        this.title = String(this.Item ? this.Item.getTitle().value : '');
        this.note = String(this.Item ? this.Item.getNote().value : '');
        this.value2 = this.Item.getValue2();
        this.value3 = this.Item.getValue3();
        this.value4 = this.Item.getValue4();
    }
    doAction(action) {
        action.getAction()({
            alertCtrl: this.alertCtrl,
            router: this.router,
            Service: this.Service,
            modal: this.modal
        });
    }
};
PageItemComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.AlertController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.ChangeDetectorRef },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.ModalController }
];
PageItemComponent.propDecorators = {
    Item: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input }]
};
PageItemComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: "app-page-item",
        template: _page_item_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_6__.ChangeDetectionStrategy.OnPush,
        styles: [_page_item_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], PageItemComponent);



/***/ }),

/***/ 12768:
/*!*********************************************************************************!*\
  !*** ./src/app/modules/item/components/page-items-list/page-items-list.page.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PageItemsListComponent": () => (/* binding */ PageItemsListComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _page_items_list_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page-items-list.page.html?ngResource */ 96275);
/* harmony import */ var _page_items_list_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./page-items-list.page.scss?ngResource */ 29294);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 52816);



// tslint:disable:semicolon



let PageItemsListComponent = class PageItemsListComponent {
    constructor(alertCtrl, router, modalController, ref) {
        this.alertCtrl = alertCtrl;
        this.router = router;
        this.modalController = modalController;
        this.ref = ref;
        this.showSpinner = true;
        // this.showSpinner = false
        this.filterFunction = v => true;
    }
    getMultiplicityText() {
        var out = this.dummyItem.getCountingText().plural;
        if (this.countItems() == 1) {
            out = this.dummyItem.getCountingText().singular;
        }
        return out;
    }
    createItem() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({ component: this.createModalPage });
            return yield modal.present();
        });
    }
    ngOnInit() {
        if (!this.filterFunction) {
            this.filterFunction = this.filterFunction ? this.filterFunction : (v) => true;
        }
        if (!this.sorterFunction) {
            this.sorterFunction = (a, b) => 0;
        }
        if (this.service) {
            this.dummyItem = this.service.getEmptyItem();
            if (this.items_list) {
                const next = () => {
                    this.ref.markForCheck();
                };
                this.items_list.forEach(item => {
                    if (item) {
                        item.load(next);
                    }
                });
            }
        }
    }
    updateItem(item, slide) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({ component: this.editModalPage, componentProps: { item } });
            // tslint:disable-next-line: no-string-literal
            slide['close']();
            return yield modal.present();
        });
    }
    deleteItem(item, slide) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            // tslint:disable-next-line: no-string-literal
            slide['close']();
            const element = this.service.getEmptyItem().getElement();
            const alert = yield this.alertCtrl.create({
                message: ` vuoi davvero cancellare quest${element.genere} ${element.element}?(${item.title})`,
                buttons: [
                    {
                        text: "Annulla",
                        role: "cancel",
                        handler: () => { }
                    },
                    {
                        text: "Cancella",
                        handler: () => {
                            this.service.deleteItem(item.key);
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    ngOnChanges(changes) {
        if (this.service && this.service._items) {
            this.service._items.subscribe((items) => {
                if (items) {
                    this.showSpinner = false;
                    this.secondSpinner = false;
                }
            });
        }
        if (changes.items_list && changes.items_list.currentValue) {
            this.items_list = changes.items_list.currentValue;
            this.showSpinner = false;
        }
        if (changes.filterFunction) {
            this.filterFunction = changes.filterFunction.currentValue;
        }
    }
    countItems() {
        var count;
        if (this.service) {
            this.service._items.subscribe(items => {
                count = items.filter(this.filterFunction).length;
            });
        }
        return (count) ? count : "loading";
    }
    editItem(item) {
        this.router.navigate([this.editModalPage, item.key]);
    }
};
PageItemsListComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.AlertController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.ModalController },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.ChangeDetectorRef }
];
PageItemsListComponent.propDecorators = {
    items_list: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input }],
    secondSpinner: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input }],
    service: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input }],
    editModalPage: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input }],
    filterFunction: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input }],
    sorterFunction: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input }],
    createModalPage: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input }]
};
PageItemsListComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: "app-page-items-list",
        template: _page_items_list_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_5__.ChangeDetectionStrategy.OnPush,
        styles: [_page_items_list_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], PageItemsListComponent);



/***/ }),

/***/ 92328:
/*!************************************************************************************!*\
  !*** ./src/app/modules/item/components/selector-items/selector-items.component.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SelectorItemsComponent": () => (/* binding */ SelectorItemsComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _selector_items_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./selector-items.component.html?ngResource */ 95418);
/* harmony import */ var _selector_items_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./selector-items.component.scss?ngResource */ 85015);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _pages_selector_items_selector_items_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../pages/selector-items/selector-items.page */ 50596);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var src_app_modules_item_services_modals_modals_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/modules/item/services/modals/modals-service */ 93772);
var SelectorItemsComponent_1;



// tslint:disable:semicolon





let SelectorItemsComponent = SelectorItemsComponent_1 = class SelectorItemsComponent {
    constructor(modalCtrl, modals) {
        this.modalCtrl = modalCtrl;
        this.modals = modals;
        // tslint:disable: no-input-rename
        // tslint:disable-next-line: variable-name
        this._value = undefined;
        this.selectedItem = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
        // @Input() formControlName: string
        this.externalId = '';
        this._ID = '';
        this.disabled = false;
        // tslint:disable-next-line: ban-types
        this.onChange = () => { };
        // tslint:disable-next-line: ban-types
        this.onTouched = () => { };
    }
    set id(value) {
        this._ID = value;
        this.externalId = null;
    }
    get id() {
        return this._ID;
    }
    writeValue(value) {
        if (value !== undefined) {
            this.item = value;
            this.value = value;
        }
        this.onChange(value);
    }
    get value() {
        return this._value;
    }
    set value(val) {
        this._value = val;
        this.onChange(val);
        this.onTouched();
    }
    registerOnChange(fn) {
        this.onChange = fn;
    }
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    setDisabledState(disabled) {
        this.disabled = disabled;
    }
    ngOnInit() {
    }
    ngOnChanges(changes) {
        if (changes.sorterFunction) {
            this.sorterFunction = changes.sorterFunction.currentValue;
        }
        if (changes.filterFunction) {
            this.filterFunction = changes.filterFunction.currentValue;
        }
    }
    action() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const modalId = new Date().getTime();
            const modal = yield this.modalCtrl.create({
                component: _pages_selector_items_selector_items_page__WEBPACK_IMPORTED_MODULE_2__.SelectorItemsPage,
                componentProps: {
                    item: this.item,
                    title: this.text,
                    service: this.service,
                    filterFunction: this.filterFunction,
                    sorterFunction: this.sorterFunction,
                    createPopup: this.createPopup,
                    modalId: modalId
                }
            });
            this.modals.setModal(modalId, modal);
            modal.onDidDismiss().then(data => {
                this.item = data.data;
                this.selectedItem.emit(data.data);
                this.writeValue(this.item);
                modal.dismiss(this.item);
            });
            return yield modal.present();
        });
    }
};
SelectorItemsComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ModalController },
    { type: src_app_modules_item_services_modals_modals_service__WEBPACK_IMPORTED_MODULE_3__.ModalsService }
];
SelectorItemsComponent.propDecorators = {
    text: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input }],
    _value: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input, args: ['value',] }],
    item: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input }],
    service: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input }],
    selectedItem: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Output }],
    createPopup: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input }],
    filterFunction: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input }],
    sorterFunction: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input }],
    externalId: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.HostBinding, args: ['attr.id',] }],
    id: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input }]
};
SelectorItemsComponent = SelectorItemsComponent_1 = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-selector-items',
        template: _selector_items_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_4__.ChangeDetectionStrategy.OnPush,
        providers: [{
                provide: _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NG_VALUE_ACCESSOR,
                multi: true,
                useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.forwardRef)(() => SelectorItemsComponent_1)
            }],
        styles: [_selector_items_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], SelectorItemsComponent);



/***/ }),

/***/ 430:
/*!****************************************************************************!*\
  !*** ./src/app/modules/item/components/show-value/show-value.component.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ShowValueComponent": () => (/* binding */ ShowValueComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _show_value_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./show-value.component.html?ngResource */ 86467);
/* harmony import */ var _show_value_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./show-value.component.scss?ngResource */ 64670);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);




let ShowValueComponent = class ShowValueComponent {
    constructor() { }
    ngOnInit() {
    }
};
ShowValueComponent.ctorParameters = () => [];
ShowValueComponent.propDecorators = {
    value: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }]
};
ShowValueComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'app-show-value',
        template: _show_value_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_show_value_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ShowValueComponent);



/***/ }),

/***/ 89355:
/*!*********************************************!*\
  !*** ./src/app/modules/item/item.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ItemModule": () => (/* binding */ ItemModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _components_item_item_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/item/item.component */ 6103);
/* harmony import */ var _components_items_list_items_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/items-list/items-list.component */ 7693);
/* harmony import */ var _pipes_filter_items_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pipes/filter-items.pipe */ 93413);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _components_page_item_page_item_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/page-item/page-item.component */ 5751);
/* harmony import */ var _components_page_items_list_page_items_list_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/page-items-list/page-items-list.page */ 12768);
/* harmony import */ var _components_show_value_show_value_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/show-value/show-value.component */ 430);
/* harmony import */ var _pipes_sorter_items_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pipes/sorter-items.pipe */ 83682);
/* harmony import */ var _components_items_filter_items_filter_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/items-filter/items-filter.component */ 66344);
/* harmony import */ var _components_selector_items_selector_items_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/selector-items/selector-items.component */ 92328);














let ItemModule = class ItemModule {
};
ItemModule = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.NgModule)({
        declarations: [
            _components_item_item_component__WEBPACK_IMPORTED_MODULE_0__.MyItemComponent,
            _components_items_list_items_list_component__WEBPACK_IMPORTED_MODULE_1__.ItemsListComponent,
            _pipes_filter_items_pipe__WEBPACK_IMPORTED_MODULE_2__.FilterItemsPipe,
            _components_selector_items_selector_items_component__WEBPACK_IMPORTED_MODULE_8__.SelectorItemsComponent,
            _components_items_filter_items_filter_component__WEBPACK_IMPORTED_MODULE_7__.ItemsFilterComponent,
            _pipes_sorter_items_pipe__WEBPACK_IMPORTED_MODULE_6__.SorterItemsPipe,
            _components_selector_items_selector_items_component__WEBPACK_IMPORTED_MODULE_8__.SelectorItemsComponent,
            _components_page_item_page_item_component__WEBPACK_IMPORTED_MODULE_3__.PageItemComponent,
            _components_page_items_list_page_items_list_page__WEBPACK_IMPORTED_MODULE_4__.PageItemsListComponent,
            _components_show_value_show_value_component__WEBPACK_IMPORTED_MODULE_5__.ShowValueComponent,
            _components_items_filter_items_filter_component__WEBPACK_IMPORTED_MODULE_7__.ItemsFilterComponent,
        ],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.CommonModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.IonicModule.forRoot(),
            _angular_forms__WEBPACK_IMPORTED_MODULE_13__.ReactiveFormsModule],
        // entryComponents:[FilterPopupPage],
        exports: [
            _components_item_item_component__WEBPACK_IMPORTED_MODULE_0__.MyItemComponent,
            _components_items_list_items_list_component__WEBPACK_IMPORTED_MODULE_1__.ItemsListComponent,
            _components_page_item_page_item_component__WEBPACK_IMPORTED_MODULE_3__.PageItemComponent,
            _pipes_sorter_items_pipe__WEBPACK_IMPORTED_MODULE_6__.SorterItemsPipe,
            _pipes_filter_items_pipe__WEBPACK_IMPORTED_MODULE_2__.FilterItemsPipe,
            _components_selector_items_selector_items_component__WEBPACK_IMPORTED_MODULE_8__.SelectorItemsComponent,
            _components_page_items_list_page_items_list_page__WEBPACK_IMPORTED_MODULE_4__.PageItemsListComponent,
            _components_items_filter_items_filter_component__WEBPACK_IMPORTED_MODULE_7__.ItemsFilterComponent,
            _components_show_value_show_value_component__WEBPACK_IMPORTED_MODULE_5__.ShowValueComponent,
            // FilterPopupPage
        ],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_10__.NO_ERRORS_SCHEMA]
    })
], ItemModule);



/***/ }),

/***/ 72154:
/*!********************************************************!*\
  !*** ./src/app/modules/item/models/question-switch.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SwitchQuestion": () => (/* binding */ SwitchQuestion)
/* harmony export */ });
/* harmony import */ var _dynamic_form_models_question_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../dynamic-form/models/question-base */ 1010);

class SwitchQuestion extends _dynamic_form_models_question_base__WEBPACK_IMPORTED_MODULE_0__.QuestionBase {
    constructor(options) {
        super(options);
        this.controlType = 'switchBox';
        // tslint:disable: no-string-literal
        this.labelFalse = options['labelFalse'] || '';
        this.labelTrue = options['labelTrue'] || '';
        this.iconTrue = options['iconTrue'] || 'radio-button-off';
        this.iconFalse = options['iconFalse'] || 'checkmark';
        this.type = options['type'] || 'boolean';
    }
    textValue() {
        return this.value ? this.labelTrue : this.labelFalse;
    }
}


/***/ }),

/***/ 75753:
/*!*********************************************************!*\
  !*** ./src/app/modules/item/models/question-textbox.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TextboxQuestion": () => (/* binding */ TextboxQuestion)
/* harmony export */ });
/* harmony import */ var _dynamic_form_models_question_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../dynamic-form/models/question-base */ 1010);

class TextboxQuestion extends _dynamic_form_models_question_base__WEBPACK_IMPORTED_MODULE_0__.QuestionBase {
    constructor(options) {
        super(options);
        this.controlType = 'textbox';
        // tslint:disable-next-line: no-string-literal
        this.type = options['type'] || '';
    }
}


/***/ }),

/***/ 24263:
/*!**********************************************!*\
  !*** ./src/app/modules/item/models/value.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Value": () => (/* binding */ Value)
/* harmony export */ });
class Value {
    constructor(args = { label: '', value: undefined }) {
        this.label = args.label;
        this.value = args.value;
    }
}


/***/ }),

/***/ 50429:
/*!**********************************************************************!*\
  !*** ./src/app/modules/item/pages/filter-popup/filter-popup.page.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FilterPopupPage": () => (/* binding */ FilterPopupPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _filter_popup_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./filter-popup.page.html?ngResource */ 11871);
/* harmony import */ var _filter_popup_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./filter-popup.page.scss?ngResource */ 66135);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 93819);



// tslint:disable:semicolon


let FilterPopupPage = class FilterPopupPage {
    constructor(modalCtrl, navParams) {
        this.modalCtrl = modalCtrl;
        this.filterFields = navParams.get('filterFields');
    }
    ngOnInit() {
    }
    submit(ev) {
        this.modalCtrl.dismiss(ev);
    }
    dismiss() {
        this.modalCtrl.dismiss();
    }
    editing(ev) {
    }
};
FilterPopupPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.ModalController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.NavParams }
];
FilterPopupPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-filter-popup',
        template: _filter_popup_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_filter_popup_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], FilterPopupPage);



/***/ }),

/***/ 50596:
/*!**************************************************************************!*\
  !*** ./src/app/modules/item/pages/selector-items/selector-items.page.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SelectorItemsPage": () => (/* binding */ SelectorItemsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _selector_items_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./selector-items.page.html?ngResource */ 5000);
/* harmony import */ var _selector_items_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./selector-items.page.scss?ngResource */ 96790);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _services_modals_modals_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/modals/modals-service */ 93772);



// tslint:disable: semicolon



let SelectorItemsPage = class SelectorItemsPage {
    constructor(modalCtrl, navParams, modalsService) {
        this.modalCtrl = modalCtrl;
        this.navParams = navParams;
        this.modalsService = modalsService;
        this.title = `Seleziona  ${this.navParams.get('title')}`;
        this.selectedItem = this.navParams.get('item');
        this.service = this.navParams.get('service');
        this.createPopup = this.navParams.get('createPopup');
        this.filterFunction = this.navParams.get('filterFunction');
        this.sorterFunction = this.navParams.get('sorterFunction');
        this.modalId = this.navParams.get('modalId');
    }
    ngOnInit() {
        if (this.service) {
            this.service._items.subscribe((items) => {
                this.itemsList = items;
            });
        }
    }
    createItem() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modalCtrl.create({ component: this.createPopup });
            modal.onDidDismiss().then(item => {
                this.modalsService.dismissModal(this.modalId, item.data);
                // this.selected(item.data)
            });
            return yield modal.present();
        });
    }
    filter(ev) {
        this.filterFunction = (item) => (item.title) ? item.title.toUpperCase().includes(ev.detail.value.toUpperCase()) : false;
    }
    ngOnChanges(changes) {
        if (changes.sorterFunction) {
            this.sorterFunction = changes.sorterFunction;
        }
        if (changes.filterFunction) {
            this.filterFunction = changes.filterFunction;
        }
    }
    selected(item) {
        this.selectedItem = item;
        this.dismiss(item);
    }
    dismiss(item) {
        this.selectedItem = item;
        this.modalCtrl.dismiss(item);
    }
};
SelectorItemsPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.ModalController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.NavParams },
    { type: _services_modals_modals_service__WEBPACK_IMPORTED_MODULE_2__.ModalsService }
];
SelectorItemsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-selector-items-page',
        template: _selector_items_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_selector_items_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], SelectorItemsPage);



/***/ }),

/***/ 93413:
/*!*********************************************************!*\
  !*** ./src/app/modules/item/pipes/filter-items.pipe.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FilterItemsPipe": () => (/* binding */ FilterItemsPipe)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);


let FilterItemsPipe = class FilterItemsPipe {
    transform(allItems, args) {
        return (args && allItems) ? allItems.filter(args) : allItems;
    }
};
FilterItemsPipe = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Pipe)({
        name: 'filterItems'
    })
], FilterItemsPipe);



/***/ }),

/***/ 83682:
/*!*********************************************************!*\
  !*** ./src/app/modules/item/pipes/sorter-items.pipe.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SorterItemsPipe": () => (/* binding */ SorterItemsPipe)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);


let SorterItemsPipe = class SorterItemsPipe {
    transform(allItems, args) {
        return (args && allItems) ? allItems.sort(args) : allItems;
    }
};
SorterItemsPipe = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Pipe)({
        name: 'sorterItems'
    })
], SorterItemsPipe);



/***/ }),

/***/ 93772:
/*!****************************************************************!*\
  !*** ./src/app/modules/item/services/modals/modals-service.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ModalsService": () => (/* binding */ ModalsService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);


let ModalsService = class ModalsService {
    constructor() {
        this.modals = { key: 0, modal: undefined };
    }
    setModal(key, modal) {
        this.modals[key] = modal;
    }
    dismissModal(key, data) {
        this.modals[key].dismiss(data);
    }
};
ModalsService.ctorParameters = () => [];
ModalsService = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable)({
        providedIn: 'root'
    })
], ModalsService);



/***/ }),

/***/ 44834:
/*!****************************************************************************************!*\
  !*** ./src/app/modules/user/components/login-definitivo/login-definitivo.component.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginDefinitivoComponent": () => (/* binding */ LoginDefinitivoComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _login_definitivo_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login-definitivo.component.html?ngResource */ 32810);
/* harmony import */ var _login_definitivo_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login-definitivo.component.scss?ngResource */ 90989);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/auth */ 23628);
/* harmony import */ var src_app_configs_configs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/configs/configs */ 80191);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/auth.service */ 49955);










let LoginDefinitivoComponent = class LoginDefinitivoComponent {
    constructor(loadingCtrl, alertCtrl, authService, router, formBuilder) {
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.authService = authService;
        this.router = router;
        this.formBuilder = formBuilder;
        this.buttonText = "";
        this.loginForm = this.formBuilder.group({
            email: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.email])],
            password: [
                "",
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.minLength(6)])
            ]
        });
    }
    ngOnInit() {
        if (src_app_configs_configs__WEBPACK_IMPORTED_MODULE_3__.configs.registrationStrategy == src_app_configs_configs__WEBPACK_IMPORTED_MODULE_3__.registrationStrategy.regular) {
            this.buttonText = "Registra Utente";
        }
        if (src_app_configs_configs__WEBPACK_IMPORTED_MODULE_3__.configs.registrationStrategy == src_app_configs_configs__WEBPACK_IMPORTED_MODULE_3__.registrationStrategy.twoSteps) {
            this.buttonText = "Completa la registrazione ";
        }
    }
    onSubmit() { }
    register() {
        if (src_app_configs_configs__WEBPACK_IMPORTED_MODULE_3__.configs.registrationStrategy == src_app_configs_configs__WEBPACK_IMPORTED_MODULE_3__.registrationStrategy.regular) {
            this.router.navigateByUrl("users/signup");
        }
        if (src_app_configs_configs__WEBPACK_IMPORTED_MODULE_3__.configs.registrationStrategy == src_app_configs_configs__WEBPACK_IMPORTED_MODULE_3__.registrationStrategy.twoSteps) {
            this.router.navigateByUrl("users/complete-registration");
        }
    }
    loginUser(loginForm) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            if (!loginForm.valid) {
                console.log("Form is not valid yet, current value:", loginForm.value);
            }
            else {
                const email = loginForm.value.email;
                const password = loginForm.value.password;
                this.authService.loginUser(email, password).then(() => {
                    const auth = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_2__.getAuth)();
                    (0,firebase_auth__WEBPACK_IMPORTED_MODULE_2__.setPersistence)(auth, firebase_auth__WEBPACK_IMPORTED_MODULE_2__.browserLocalPersistence);
                    this.loading.dismiss().then(() => {
                        this.router.navigateByUrl("home");
                    });
                }, error => {
                    this.loading.dismiss().then(() => (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
                        const alert = yield this.alertCtrl.create({
                            message: error.message,
                            buttons: [{ text: "Ok", role: "cancel" }]
                        });
                        yield alert.present();
                    }));
                });
                this.loading = yield this.loadingCtrl.create();
                yield this.loading.present();
            }
        });
    }
};
LoginDefinitivoComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.LoadingController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.AlertController },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_4__.AuthService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.Router },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder }
];
LoginDefinitivoComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-login-definitivo',
        template: _login_definitivo_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_login_definitivo_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], LoginDefinitivoComponent);



/***/ }),

/***/ 94406:
/*!******************************************************************!*\
  !*** ./src/app/modules/user/components/login/login.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginComponent": () => (/* binding */ LoginComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _login_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.component.html?ngResource */ 7136);
/* harmony import */ var _login_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.component.scss?ngResource */ 74450);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/auth */ 23628);
/* harmony import */ var src_app_configs_configs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/configs/configs */ 80191);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/auth.service */ 49955);










let LoginComponent = class LoginComponent {
    constructor(loadingCtrl, alertCtrl, authService, router, formBuilder) {
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.authService = authService;
        this.router = router;
        this.formBuilder = formBuilder;
        this.buttonText = "";
        this.loginForm = this.formBuilder.group({
            email: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.email])],
            password: [
                "",
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.minLength(6)])
            ]
        });
    }
    ngOnInit() {
        if (src_app_configs_configs__WEBPACK_IMPORTED_MODULE_3__.configs.registrationStrategy == src_app_configs_configs__WEBPACK_IMPORTED_MODULE_3__.registrationStrategy.regular) {
            this.buttonText = "Registra Utente";
        }
        if (src_app_configs_configs__WEBPACK_IMPORTED_MODULE_3__.configs.registrationStrategy == src_app_configs_configs__WEBPACK_IMPORTED_MODULE_3__.registrationStrategy.twoSteps) {
            this.buttonText = "Completa Registrazione ";
        }
    }
    onSubmit() { }
    register() {
        if (src_app_configs_configs__WEBPACK_IMPORTED_MODULE_3__.configs.registrationStrategy == src_app_configs_configs__WEBPACK_IMPORTED_MODULE_3__.registrationStrategy.regular) {
            this.router.navigateByUrl("users/signup");
        }
        if (src_app_configs_configs__WEBPACK_IMPORTED_MODULE_3__.configs.registrationStrategy == src_app_configs_configs__WEBPACK_IMPORTED_MODULE_3__.registrationStrategy.twoSteps) {
            this.router.navigateByUrl("users/complete-registration");
        }
    }
    loginUser(loginForm) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            if (!loginForm.valid) {
                console.log("Form is not valid yet, current value:", loginForm.value);
            }
            else {
                const email = loginForm.value.email;
                const password = loginForm.value.password;
                this.authService.loginUser(email, password).then(() => {
                    const auth = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_2__.getAuth)();
                    (0,firebase_auth__WEBPACK_IMPORTED_MODULE_2__.setPersistence)(auth, firebase_auth__WEBPACK_IMPORTED_MODULE_2__.browserLocalPersistence);
                    this.loading.dismiss().then(() => {
                        this.router.navigateByUrl("home");
                    });
                }, error => {
                    this.loading.dismiss().then(() => (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
                        const alert = yield this.alertCtrl.create({
                            message: error.message,
                            buttons: [{ text: "Ok", role: "cancel" }]
                        });
                        yield alert.present();
                    }));
                });
                this.loading = yield this.loadingCtrl.create();
                yield this.loading.present();
            }
        });
    }
};
LoginComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.LoadingController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.AlertController },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_4__.AuthService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.Router },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder }
];
LoginComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-login-component',
        template: _login_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_login_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], LoginComponent);



/***/ }),

/***/ 71932:
/*!******************************************************************************!*\
  !*** ./src/app/modules/user/components/logout-user/logout-user.component.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LogoutUserComponent": () => (/* binding */ LogoutUserComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _logout_user_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./logout-user.component.html?ngResource */ 27273);
/* harmony import */ var _logout_user_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./logout-user.component.scss?ngResource */ 78516);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/auth */ 23628);





let LogoutUserComponent = class LogoutUserComponent {
    constructor() {
        this.email = "";
    }
    logout() {
        const auth = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_2__.getAuth)();
        console.log("logout", auth);
        (0,firebase_auth__WEBPACK_IMPORTED_MODULE_2__.signOut)(auth);
    }
    ngOnInit() {
        const auth = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_2__.getAuth)();
        (0,firebase_auth__WEBPACK_IMPORTED_MODULE_2__.onAuthStateChanged)(auth, (user) => (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            if (user) {
                this.email = user.email;
            }
        }));
    }
};
LogoutUserComponent.ctorParameters = () => [];
LogoutUserComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-logout-user',
        template: _logout_user_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_logout_user_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], LogoutUserComponent);



/***/ }),

/***/ 68821:
/*!******************************************************************************!*\
  !*** ./src/app/modules/user/components/sleek-login/sleek-login.component.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SleekLoginComponent": () => (/* binding */ SleekLoginComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _sleek_login_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sleek-login.component.html?ngResource */ 44336);
/* harmony import */ var _sleek_login_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sleek-login.component.scss?ngResource */ 47104);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/auth */ 23628);
/* harmony import */ var src_app_configs_configs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/configs/configs */ 80191);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/auth.service */ 49955);










let SleekLoginComponent = class SleekLoginComponent {
    constructor(loadingCtrl, alertCtrl, authService, router, formBuilder) {
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.authService = authService;
        this.router = router;
        this.formBuilder = formBuilder;
        this.buttonText = "";
        this.loginForm = this.formBuilder.group({
            email: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.email])],
            password: [
                "",
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.minLength(6)])
            ]
        });
    }
    ngOnInit() {
        if (src_app_configs_configs__WEBPACK_IMPORTED_MODULE_3__.configs.registrationStrategy == src_app_configs_configs__WEBPACK_IMPORTED_MODULE_3__.registrationStrategy.regular) {
            this.buttonText = "Registra Utente";
        }
        if (src_app_configs_configs__WEBPACK_IMPORTED_MODULE_3__.configs.registrationStrategy == src_app_configs_configs__WEBPACK_IMPORTED_MODULE_3__.registrationStrategy.twoSteps) {
            this.buttonText = "Completa la registrazione ";
        }
    }
    onSubmit() { }
    register() {
        if (src_app_configs_configs__WEBPACK_IMPORTED_MODULE_3__.configs.registrationStrategy == src_app_configs_configs__WEBPACK_IMPORTED_MODULE_3__.registrationStrategy.regular) {
            this.router.navigateByUrl("users/signup");
        }
        if (src_app_configs_configs__WEBPACK_IMPORTED_MODULE_3__.configs.registrationStrategy == src_app_configs_configs__WEBPACK_IMPORTED_MODULE_3__.registrationStrategy.twoSteps) {
            this.router.navigateByUrl("users/complete-registration");
        }
    }
    loginUser(loginForm) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            if (!loginForm.valid) {
                console.log("Form is not valid yet, current value:", loginForm.value);
            }
            else {
                const email = loginForm.value.email;
                const password = loginForm.value.password;
                this.authService.loginUser(email, password).then(() => {
                    const auth = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_2__.getAuth)();
                    (0,firebase_auth__WEBPACK_IMPORTED_MODULE_2__.setPersistence)(auth, firebase_auth__WEBPACK_IMPORTED_MODULE_2__.browserLocalPersistence);
                    this.loading.dismiss().then(() => {
                        this.router.navigateByUrl("home");
                    });
                }, error => {
                    this.loading.dismiss().then(() => (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
                        const alert = yield this.alertCtrl.create({
                            message: error.message,
                            buttons: [{ text: "Ok", role: "cancel" }]
                        });
                        yield alert.present();
                    }));
                });
                this.loading = yield this.loadingCtrl.create();
                yield this.loading.present();
            }
        });
    }
};
SleekLoginComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.LoadingController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.AlertController },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_4__.AuthService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.Router },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder }
];
SleekLoginComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-sleek-login',
        template: _sleek_login_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_sleek_login_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], SleekLoginComponent);



/***/ }),

/***/ 50573:
/*!*******************************************************!*\
  !*** ./src/app/modules/user/models/birthDateModel.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DateModel": () => (/* binding */ DateModel)
/* harmony export */ });
// tslint:disable:semicolon
class DateModel extends Date {
    constructor(d) {
        super(d);
        this.day = 18;
        this.month = 10;
        this.year = 2020;
        this.fullDate = new Date();
        this.initialize(d);
    }
    initialize(d) {
        if (d && d["day"] && d["year"] && d["month"]) {
            this.day = d["day"];
            this.month = d["month"];
            this.year = d["year"];
        }
        else {
            try {
                this.fullDate = new Date(d);
                this.day = this.fullDate.getDate();
                this.year = this.fullDate.getFullYear();
                this.month = this.fullDate.getMonth();
            }
            catch (e) { }
        }
    }
    formatFullDate() {
        return this.fullDate.toISOString();
    }
    formatDate() {
        const mm = this.month + 1;
        const dd = this.day;
        return [this.year, (mm > 9 ? "" : "0") + mm, (dd > 9 ? "" : "0") + dd].join("-");
    }
    ItalianFormatDate() {
        const mm = this.month + 1;
        const dd = this.day;
        return [(dd > 9 ? "" : "0") + dd, (mm > 9 ? "" : "0") + mm, this.year].join("/");
    }
    /**
     *
     * @param days  number numbers of days to shift the date
     * @returns DateModel
     */
    shiftDate(days) {
        const milliSecInOneDay = 1000 * 60 * 60 * 24;
        this.fullDate = new Date(this.fullDate.getTime() + days * milliSecInOneDay);
        this.initialize(this.fullDate);
        return this;
    }
    getFullDate() {
        return this.fullDate;
    }
    updateDate(d) {
        const newDate = new Date(d);
        this.fullDate.setDate(newDate.getDate());
        this.fullDate.setMonth(newDate.getMonth());
        this.fullDate.setFullYear(newDate.getFullYear());
    }
    loadFromDate(d) {
        this.year = d.getFullYear();
        this.month = d.getMonth();
        this.day = d.getDay();
    }
    serialize() {
        return { year: this.year, month: this.month, day: this.day };
    }
}


/***/ }),

/***/ 31:
/*!*****************************************************!*\
  !*** ./src/app/modules/user/models/enablingCode.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EnablingCode": () => (/* binding */ EnablingCode)
/* harmony export */ });
/* harmony import */ var _helpers_serializers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/serializers */ 59163);
/* harmony import */ var _birthDateModel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./birthDateModel */ 50573);


class EnablingCode {
    constructor(v) {
        this.code = '';
        this.load(v);
    }
    load(v) {
        Object.assign(this, v);
        if (v) {
            if (v["creationDate"]) {
                this.creationDate = new _birthDateModel__WEBPACK_IMPORTED_MODULE_1__.DateModel(new Date(v["creationDate"]));
            }
            else {
                this.creationDate = new _birthDateModel__WEBPACK_IMPORTED_MODULE_1__.DateModel(new Date());
            }
            if (v["utilizationDate"]) {
                this.utilizationDate = new _birthDateModel__WEBPACK_IMPORTED_MODULE_1__.DateModel(new Date(v["utilizationDate"]));
            }
        }
        else {
            this.creationDate = new _birthDateModel__WEBPACK_IMPORTED_MODULE_1__.DateModel(new Date());
        }
        return this;
    }
    setKey(key) {
        this.key = key;
        return this;
    }
    serialize() {
        const serializers = new _helpers_serializers__WEBPACK_IMPORTED_MODULE_0__.Serializers();
        return {
            code: serializers.serialize2String(this.code),
            customerKey: serializers.serialize2String(this.customerKey),
            creationDate: serializers.serialize2String(this.creationDate.formatDate()),
            utilizationDate: serializers.serialize2String(this.utilizationDate ? this.utilizationDate.formatDate() : '')
        };
    }
}


/***/ }),

/***/ 59201:
/*!*************************************************************!*\
  !*** ./src/app/modules/user/models/privilegesLevelModel.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RoleModel": () => (/* binding */ RoleModel)
/* harmony export */ });
class RoleModel {
    constructor(level) {
        this.value = level.value;
        this.key = level.key;
    }
    isAllowed(Level) {
        return this.value <= Level.value;
    }
}


/***/ }),

/***/ 60783:
/*!**************************************************!*\
  !*** ./src/app/modules/user/models/userModel.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserModel": () => (/* binding */ UserModel)
/* harmony export */ });
/* harmony import */ var _item_models_value__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../item/models/value */ 24263);
/* harmony import */ var _birthDateModel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./birthDateModel */ 50573);
/* harmony import */ var src_app_configs_configs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/configs/configs */ 80191);
/* harmony import */ var _helpers_serializers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../helpers/serializers */ 59163);




// import { EditUserPage } from '../pages/edit-user/edit-user.page';
class UserModel {
    constructor(user, key) {
        this.email = "";
        this.firstName = "";
        this.lastName = "";
        this.offlineEnabled = false; // for the moment false for default
        this.load(user);
        if (this.level) {
            this.role = src_app_configs_configs__WEBPACK_IMPORTED_MODULE_2__.configs.accessLevel.filter((access) => access.value === this.level)[0];
        }
        if (key) {
            this.key = key;
            this.uid = key;
        }
    }
    set expirationDate(date) {
        this._expirationDate = new _birthDateModel__WEBPACK_IMPORTED_MODULE_1__.DateModel(new Date(date));
        this._expirationTime = this._expirationDate.getTime();
    }
    get expirationDate() {
        return this._expirationDate ? this._expirationDate.formatDate() : "";
    }
    get expirationTime() {
        return this._expirationTime;
    }
    isArchived() {
        return this.archived;
    }
    archiveItem(b) {
        this.archived = b;
    }
    isArchivable() {
        return true;
    }
    setKey(key) {
        this.key = key;
        return this;
    }
    isOfflineEnabled() {
        return this.offlineEnabled;
    }
    initialize(user) {
        Object.assign(this, user);
        return this;
    }
    getNote() {
        return new _item_models_value__WEBPACK_IMPORTED_MODULE_0__.Value({
            value: `${this.firstName} ${this.lastName}`,
            label: 'user'
        });
    }
    getTitle() {
        return new _item_models_value__WEBPACK_IMPORTED_MODULE_0__.Value({ value: this.email, label: 'user mail' });
    }
    build(item) {
        const loader = ([Key, value]) => {
            this[Key] = value;
        };
        if (!this._expirationDate) {
            this.expirationDate = new _birthDateModel__WEBPACK_IMPORTED_MODULE_1__.DateModel(new Date()).formatDate();
        }
        Object.entries(item).forEach(loader);
        // tslint:disable-next-line: no-string-literal
        if (item['birthDate']) {
            // tslint:disable-next-line: no-strin
            this.birthDate = new _birthDateModel__WEBPACK_IMPORTED_MODULE_1__.DateModel(item['birthDate']);
        }
        this.role = src_app_configs_configs__WEBPACK_IMPORTED_MODULE_2__.configs.accessLevel.filter((access) => access.value === this.level)[0];
    }
    hasQuickActions() {
        return false;
    }
    getQuickActions() {
        return this.quickActions;
    }
    getCountingText() {
        return { plural: 'utenti', singular: 'utente' };
    }
    serialize() {
        var _a, _b, _c;
        const serializer = new _helpers_serializers__WEBPACK_IMPORTED_MODULE_3__.Serializers();
        const out = {
            uid: this.uid || this.key,
            birthDate: this.birthDate ? this.birthDate.serialize() : '',
            email: (_a = this.email) !== null && _a !== void 0 ? _a : '',
            firstName: (_b = this.firstName) !== null && _b !== void 0 ? _b : '',
            lastName: (_c = this.lastName) !== null && _c !== void 0 ? _c : '',
            enabled: !!this.enabled,
            expirationDate: serializer.serialize2String(this.expirationDate),
            level: this.role && this.role.value ? this.role.value : 3,
            archived: !!this.archived
        };
        if (!out.uid) {
            delete out.uid;
        }
        return this.key ? Object.assign(Object.assign({}, out), { key: this.key }) : out;
    }
    roleFactory(level) {
        const out = src_app_configs_configs__WEBPACK_IMPORTED_MODULE_2__.configs.accessLevel.filter((access) => access.value === level)[0];
        return out ? out : src_app_configs_configs__WEBPACK_IMPORTED_MODULE_2__.configs.accessLevel[2]; //utente standard
    }
    load(args) {
        var _a;
        Object.assign(this, args);
        this.role = this.roleFactory(this.level);
        this.key = (_a = this.key) !== null && _a !== void 0 ? _a : this.uid;
        this.enabled = Boolean(this.enabled);
        this.expirationDate = this.expirationDate || new _birthDateModel__WEBPACK_IMPORTED_MODULE_1__.DateModel(new Date()).formatDate();
        return this;
    }
    getValue3() {
        var _a;
        const value = new _item_models_value__WEBPACK_IMPORTED_MODULE_0__.Value({ value: (_a = this.role) === null || _a === void 0 ? void 0 : _a.key, label: 'ruolo ' });
        return value;
    }
    getValue2() {
        const value = new _item_models_value__WEBPACK_IMPORTED_MODULE_0__.Value({
            value: this.enabled ? '' : ' non abilitato',
            label: ' abilitato'
        });
        return value;
    }
    getValue4() {
        const value = new _item_models_value__WEBPACK_IMPORTED_MODULE_0__.Value({
            value: this.enabled ? 'si' : 'no',
            label: ' abilitato '
        });
        return value;
    }
    getEditPopup() {
        return '/user/edit-user';
    }
    /*
    getEditPopup(item, service) {
      return "to be implemented";
    }*/
    getAggregate() {
        return new _item_models_value__WEBPACK_IMPORTED_MODULE_0__.Value({ label: 'aggregato', value: 'to be implemented' });
    }
    getCreatePopup() {
        return 'to be implemented';
    }
    getElement() {
        const genere = 'o';
        return { element: 'volantinaggio', genere };
    }
}


/***/ }),

/***/ 71104:
/*!****************************************************************!*\
  !*** ./src/app/modules/user/pages/edit-user/edit-user.page.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditUserPage": () => (/* binding */ EditUserPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _edit_user_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit-user.page.html?ngResource */ 34747);
/* harmony import */ var _edit_user_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit-user.page.scss?ngResource */ 52739);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _models_userModel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/userModel */ 60783);
/* harmony import */ var _services_users_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/users.service */ 67862);
/* harmony import */ var src_app_modules_item_models_question_textbox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/modules/item/models/question-textbox */ 75753);
/* harmony import */ var src_app_modules_item_models_question_switch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/modules/item/models/question-switch */ 72154);
/* harmony import */ var src_app_modules_dynamic_form_models_question_date__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/modules/dynamic-form/models/question-date */ 38878);
/* harmony import */ var _models_birthDateModel__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../models/birthDateModel */ 50573);
/* harmony import */ var src_app_modules_dynamic_form_models_question_dropdown__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/modules/dynamic-form/models/question-dropdown */ 90402);
/* harmony import */ var src_app_configs_configs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/configs/configs */ 80191);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic/angular */ 93819);














let EditUserPage = class EditUserPage {
    constructor(router, route, service, navParams, modalCtrl) {
        this.router = router;
        this.route = route;
        this.service = service;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
    }
    dismiss() {
        this.modalCtrl.dismiss();
    }
    setBirthDate() {
        if (!this.currentUser.birthDate) {
            this.currentUser.birthDate = new _models_birthDateModel__WEBPACK_IMPORTED_MODULE_7__.DateModel({
                year: 1977,
                day: 16,
                month: 2
            });
            this.currentUser.birthDate.loadFromDate(new Date());
        }
    }
    setTitle() {
        this.title =
            this.currentUser.firstName && this.currentUser.lastName
                ? `${this.currentUser.firstName} ${this.currentUser.lastName}`
                : this.currentUser.email;
    }
    ngOnInit() {
        if (this.navParams.get('item')) {
            this.currentUser = new _models_userModel__WEBPACK_IMPORTED_MODULE_2__.UserModel(this.navParams.get('item'), this.navParams.get('item').key);
        }
        this.currentUser && this.setBirthDate();
        this.submitText = 'modifica';
        this.currentUser && this.setTitle();
        const questions = [
            new src_app_modules_item_models_question_textbox__WEBPACK_IMPORTED_MODULE_4__.TextboxQuestion({
                key: 'firstName',
                label: 'nome',
                value: this.currentUser ? this.currentUser.firstName : 'nome',
                order: 1,
                required: true
            }),
            new src_app_modules_item_models_question_textbox__WEBPACK_IMPORTED_MODULE_4__.TextboxQuestion({
                key: 'lastName',
                label: 'cognome',
                value: this.currentUser ? this.currentUser.lastName : 'cognome',
                order: 2
            }),
            new src_app_modules_item_models_question_switch__WEBPACK_IMPORTED_MODULE_5__.SwitchQuestion({
                key: 'enabled',
                label: 'abilitato',
                value: this.currentUser ? this.currentUser.enabled : false,
                labelTrue: 'utente  abilitato',
                labelFalse: ' utente non abilitato ',
                iconTrue: 'happy',
                iconFalse: 'remove-circle',
                order: 3
            }),
            new src_app_modules_dynamic_form_models_question_date__WEBPACK_IMPORTED_MODULE_6__.DateQuestion({
                key: 'birthDate',
                label: 'Data di nascita',
                required: true,
                value: this.currentUser ? new _models_birthDateModel__WEBPACK_IMPORTED_MODULE_7__.DateModel(this.currentUser.birthDate).formatDate() : new _models_birthDateModel__WEBPACK_IMPORTED_MODULE_7__.DateModel(new Date()),
                order: 4
            }),
            new src_app_modules_dynamic_form_models_question_dropdown__WEBPACK_IMPORTED_MODULE_8__.DropdownQuestion({
                key: 'level',
                label: 'Ruolo utente',
                options: src_app_configs_configs__WEBPACK_IMPORTED_MODULE_9__.configs.accessLevel,
                value: this.currentUser ? this.currentUser.level : 3
            }),
            new src_app_modules_item_models_question_switch__WEBPACK_IMPORTED_MODULE_5__.SwitchQuestion({
                key: 'offlineEnabled',
                label: 'supporto offline ',
                value: this.currentUser ? this.currentUser.enabled : false,
                labelTrue: 'supporto offline ok',
                labelFalse: ' solo cloud ',
                iconTrue: 'cloud-upload',
                iconFalse: 'cloud',
                order: 3
            }),
        ];
        this.questions = questions;
    }
    filter(ev) { }
    submit(ev) {
        ev.email = this.currentUser.email; // non modifico email
        const user = new _models_userModel__WEBPACK_IMPORTED_MODULE_2__.UserModel(ev);
        user.key = this.currentUser.key;
        user.role = src_app_configs_configs__WEBPACK_IMPORTED_MODULE_9__.configs.accessLevel.filter((r) => {
            // tslint:disable: triple-equals
            // tslint:disable-next-line: no-unused-expression
            r.value == this.currentUser.level;
        })[0];
        user.role = src_app_configs_configs__WEBPACK_IMPORTED_MODULE_9__.configs.accessLevel.filter((v) => v.value == ev.level)[0];
        /*admin.auth().setCustomUserClaims(this.currentUser.key, {
          role: this.currentUser.level
        });*/
        this.service
            .updateItem(user)
            .then(v => {
            this.router.navigate(['/users']);
        })
            .catch(e => {
        });
    }
};
EditUserPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__.Router },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__.ActivatedRoute },
    { type: _services_users_service__WEBPACK_IMPORTED_MODULE_3__.UsersService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.NavParams },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.ModalController }
];
EditUserPage = (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_13__.Component)({
        selector: 'app-edit-user',
        template: _edit_user_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_edit_user_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], EditUserPage);



/***/ }),

/***/ 93370:
/*!********************************************************!*\
  !*** ./src/app/modules/user/pages/login/login.page.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPage": () => (/* binding */ LoginPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _login_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.page.html?ngResource */ 64501);
/* harmony import */ var _login_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page.scss?ngResource */ 91672);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth.service */ 49955);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/auth */ 23628);
/* harmony import */ var src_app_configs_configs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/configs/configs */ 80191);










let LoginPage = class LoginPage {
    constructor(loadingCtrl, alertCtrl, authService, router, formBuilder) {
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.authService = authService;
        this.router = router;
        this.formBuilder = formBuilder;
        this.buttonText = "";
        this.loginForm = this.formBuilder.group({
            email: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.email])],
            password: [
                "",
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.minLength(6)])
            ]
        });
    }
    ngOnInit() {
        if (src_app_configs_configs__WEBPACK_IMPORTED_MODULE_4__.configs.registrationStrategy == src_app_configs_configs__WEBPACK_IMPORTED_MODULE_4__.registrationStrategy.regular) {
            this.buttonText = "Registra Utente";
        }
        if (src_app_configs_configs__WEBPACK_IMPORTED_MODULE_4__.configs.registrationStrategy == src_app_configs_configs__WEBPACK_IMPORTED_MODULE_4__.registrationStrategy.twoSteps) {
            this.buttonText = "Completa Registrazione ";
        }
    }
    onSubmit() { }
    register() {
        if (src_app_configs_configs__WEBPACK_IMPORTED_MODULE_4__.configs.registrationStrategy == src_app_configs_configs__WEBPACK_IMPORTED_MODULE_4__.registrationStrategy.regular) {
            this.router.navigateByUrl("users/signup");
        }
        if (src_app_configs_configs__WEBPACK_IMPORTED_MODULE_4__.configs.registrationStrategy == src_app_configs_configs__WEBPACK_IMPORTED_MODULE_4__.registrationStrategy.twoSteps) {
            this.router.navigateByUrl("users/complete-registration");
        }
    }
    loginUser(loginForm) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            if (!loginForm.valid) {
                console.log("Form is not valid yet, current value:", loginForm.value);
            }
            else {
                const email = loginForm.value.email;
                const password = loginForm.value.password;
                this.authService.loginUser(email, password).then(() => {
                    const auth = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_3__.getAuth)();
                    (0,firebase_auth__WEBPACK_IMPORTED_MODULE_3__.setPersistence)(auth, firebase_auth__WEBPACK_IMPORTED_MODULE_3__.browserLocalPersistence);
                    this.loading.dismiss().then(() => {
                        this.router.navigateByUrl("home");
                    });
                }, error => {
                    this.loading.dismiss().then(() => (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
                        const alert = yield this.alertCtrl.create({
                            message: error.message,
                            buttons: [{ text: "Ok", role: "cancel" }]
                        });
                        yield alert.present();
                    }));
                });
                this.loading = yield this.loadingCtrl.create();
                yield this.loading.present();
            }
        });
    }
};
LoginPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.LoadingController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.AlertController },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.Router },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder }
];
LoginPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: "app-login",
        template: _login_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_login_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], LoginPage);



/***/ }),

/***/ 46630:
/*!************************************************************!*\
  !*** ./src/app/modules/user/pages/profile/profile.page.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfilePage": () => (/* binding */ ProfilePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _profile_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./profile.page.html?ngResource */ 52611);
/* harmony import */ var _profile_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./profile.page.scss?ngResource */ 87954);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth.service */ 49955);
/* harmony import */ var _services_profile_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/profile.service */ 64073);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 52816);








let ProfilePage = class ProfilePage {
    constructor(alertCtrl, authService, profileService, router) {
        this.alertCtrl = alertCtrl;
        this.authService = authService;
        this.profileService = profileService;
        this.router = router;
    }
    ngOnInit() {
        console.log('init profile');
        this.userProfile = { firstName: 'nome', lastName: 'cognome' };
        if (this.profileService.getUserProfileReference()) {
            console.log('getting profile');
            this.profileService
                .getUserProfileReference()
                .on("value", userProfileSnapshot => {
                console.log('got profile', userProfileSnapshot);
                this.userProfile = userProfileSnapshot.val() || { firstName: '', lastName: '' };
                if (this.userProfile.birthDate) {
                    var dob = new Date();
                    dob.setFullYear(this.userProfile.birthDate.year);
                    dob.setMonth(Number(this.userProfile.birthDate.month));
                    dob.setDate(this.userProfile.birthDate.day);
                    this.birthDate = dob.toISOString();
                }
            });
        }
    }
    logOut() {
        this.authService.logoutUser().then(() => {
            this.router.navigateByUrl("login");
        });
    }
    updateName() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertCtrl.create({
                subHeader: "Il tuo nome e cognome",
                inputs: [
                    {
                        type: "text",
                        name: "firstName",
                        placeholder: "Il tuo Nome",
                        value: this.userProfile ? this.userProfile.firstName : ''
                    },
                    {
                        type: "text",
                        name: "lastName",
                        placeholder: "Il tuo Cognome",
                        value: this.userProfile ? this.userProfile.lastName : ''
                    }
                ],
                buttons: [
                    { text: "Annulla" },
                    {
                        text: "Salva",
                        handler: data => {
                            this.userProfile.firstName = data.firstName;
                            this.userProfile.lastName = data.lastName;
                            this.profileService.updateName(data.firstName, data.lastName).then((value => { console.log('updated', value); }));
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    extract_date_from_data(d) {
        return d.split("T")[0].split("-");
    }
    makeup_date(dateList) {
        return {
            year: Number(dateList[0]),
            month: Number(dateList[1]),
            day: Number(dateList[2])
        };
    }
    changedDate(d) {
    }
    updateDOB(birthDate, ev) {
        birthDate = this.makeup_date(this.extract_date_from_data(birthDate));
        if (birthDate === undefined) {
            return;
        }
        else if (birthDate.year === undefined ||
            birthDate.month === undefined ||
            birthDate.day === undefined) {
            return;
        }
        const dateOfBirth = new Date(birthDate.year, birthDate.month - 1, birthDate.day);
        this.profileService.updateDOB(dateOfBirth);
    }
    updateEmail() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertCtrl.create({
                inputs: [
                    { type: "text", name: "newEmail", placeholder: "la tua nuova mail" },
                    { name: "password", placeholder: "la tua password", type: "password" }
                ],
                buttons: [
                    { text: "Annulla" },
                    {
                        text: "Salva",
                        handler: data => {
                            this.profileService
                                .updateEmail(data.newEmail, data.password)
                                .then(() => {
                            })
                                .catch(error => {
                                console.log("ERROR: " + error.message);
                            });
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    updatePassword() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertCtrl.create({
                inputs: [
                    {
                        name: "newPassword",
                        placeholder: "Nuova password",
                        type: "password"
                    },
                    {
                        name: "oldPassword",
                        placeholder: "Vecchia password",
                        type: "password"
                    }
                ],
                buttons: [
                    { text: "Annulla" },
                    {
                        text: "Salva",
                        handler: data => {
                            this.profileService.updatePassword(data.newPassword, data.oldPassword);
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
};
ProfilePage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.AlertController },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService },
    { type: _services_profile_service__WEBPACK_IMPORTED_MODULE_3__.ProfileService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router }
];
ProfilePage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: "app-profile",
        template: _profile_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_profile_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ProfilePage);



/***/ }),

/***/ 49955:
/*!*******************************************************!*\
  !*** ./src/app/modules/user/services/auth.service.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthService": () => (/* binding */ AuthService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var firebase_compat_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/compat/app */ 8427);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 12378);
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/auth */ 23628);
/* harmony import */ var firebase_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/database */ 89187);
/* harmony import */ var _models_userModel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/userModel */ 60783);
/* harmony import */ var _configs_credentials__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../configs/credentials */ 20688);










firebase_compat_app__WEBPACK_IMPORTED_MODULE_0__["default"].initializeApp(_configs_credentials__WEBPACK_IMPORTED_MODULE_4__.credentials.firebase);
let AuthService = class AuthService {
    constructor() { }
    loginUser(email, password) {
        this.auth = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_1__.getAuth)();
        return (0,firebase_auth__WEBPACK_IMPORTED_MODULE_1__.signInWithEmailAndPassword)(this.auth, email, password);
    }
    resetPassword(email) {
        const user = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_1__.getAuth)();
        return (0,firebase_auth__WEBPACK_IMPORTED_MODULE_1__.sendPasswordResetEmail)(user, email);
    }
    signupUser(user, next, error, complete) {
        return this.createUserObserver(user.email, user.password).subscribe({
            next: v => {
                (0,firebase_auth__WEBPACK_IMPORTED_MODULE_1__.sendEmailVerification)(v['user']);
                const db = (0,firebase_database__WEBPACK_IMPORTED_MODULE_2__.getDatabase)();
                const newUser = new _models_userModel__WEBPACK_IMPORTED_MODULE_3__.UserModel(user).load(user);
                const usersRef = (0,firebase_database__WEBPACK_IMPORTED_MODULE_2__.ref)(db, '/userProfile');
                console.log('new user', newUser.serialize());
                (0,firebase_database__WEBPACK_IMPORTED_MODULE_2__.push)(usersRef, newUser.serialize());
                if (next) {
                    next(v['user']);
                }
            },
            error: e => {
                console.error('errore', e);
                if (error) {
                    error(e);
                }
            },
            complete: () => {
                console.log('ok');
                if (complete) {
                    console.log("completing");
                    complete();
                }
            }
        });
    }
    getCustomclaims(next) {
        const auth = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_1__.getAuth)();
        (0,firebase_auth__WEBPACK_IMPORTED_MODULE_1__.onAuthStateChanged)(auth, (user) => (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            if (user) {
                yield user.getIdTokenResult(true).then(result => {
                    next(result.claims);
                });
            }
        }));
    }
    createUserObserver(email, pass) {
        const auth = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_1__.getAuth)();
        const observer = new rxjs__WEBPACK_IMPORTED_MODULE_6__.Observable(subscriber => {
            (0,firebase_auth__WEBPACK_IMPORTED_MODULE_1__.createUserWithEmailAndPassword)(auth, email, pass)
                .then((userCredential) => {
                subscriber.next(userCredential);
                subscriber.complete();
            })
                .catch((error) => {
                subscriber.error(error);
                subscriber.complete();
            });
        });
        return observer;
    }
    logoutUser() {
        const user = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_1__.getAuth)();
        return user.signOut();
    }
};
AuthService.ctorParameters = () => [];
AuthService = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Injectable)({
        providedIn: 'root'
    })
], AuthService);



/***/ }),

/***/ 2199:
/*!************************************************************!*\
  !*** ./src/app/modules/user/services/authguard.service.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthGuard": () => (/* binding */ AuthGuard)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var firebase_compat_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/compat/app */ 8427);
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/auth */ 23628);
/* harmony import */ var _users_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./users.service */ 67862);
/* harmony import */ var _models_userModel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/userModel */ 60783);







let AuthGuard = class AuthGuard {
    constructor(router, users) {
        this.router = router;
        this.users = users;
    }
    canActivate(next, state) {
        console.log("can activate");
        return new Promise((resolve, reject) => {
            firebase_compat_app__WEBPACK_IMPORTED_MODULE_0__["default"].auth().onAuthStateChanged((user) => {
                if (user) {
                    console.log("user from auth", user);
                    this.users.setLoggedUser(new _models_userModel__WEBPACK_IMPORTED_MODULE_3__.UserModel(user, user.uid));
                    resolve(true);
                }
                else {
                    console.log("User is not logged in");
                    this.router.navigate(["/users/login"]);
                    console.log("routing to the login");
                    resolve(false);
                }
            });
        });
    }
};
AuthGuard.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router },
    { type: _users_service__WEBPACK_IMPORTED_MODULE_2__.UsersService }
];
AuthGuard = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Injectable)({
        providedIn: "root"
    })
], AuthGuard);



/***/ }),

/***/ 36682:
/*!****************************************************!*\
  !*** ./src/app/modules/user/services/authguard.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthGuard": () => (/* binding */ AuthGuard)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _users_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./users.service */ 67862);
/* harmony import */ var _models_userModel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/userModel */ 60783);
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/auth */ 23628);







let AuthGuard = class AuthGuard {
    constructor(router, User) {
        this.router = router;
        this.User = User;
    }
    delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
    canActivate(next, state) {
        const locked = next.data.locked;
        return new Promise((resolve, reject) => {
            if (!locked) {
                resolve(true);
            }
            const auth = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_2__.getAuth)();
            (0,firebase_auth__WEBPACK_IMPORTED_MODULE_2__.onAuthStateChanged)(auth, (user) => {
                if (user) {
                    console.log('authorised', user);
                    this.User.setLoggedUser(new _models_userModel__WEBPACK_IMPORTED_MODULE_1__.UserModel().setKey(user.uid));
                    resolve(true);
                }
                else {
                    console.log('not authorized');
                    this.router.navigate(["/users/login"]);
                    resolve(false);
                }
            });
        });
    }
};
AuthGuard.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router },
    { type: _users_service__WEBPACK_IMPORTED_MODULE_0__.UsersService }
];
AuthGuard = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Injectable)({
        providedIn: "root"
    })
], AuthGuard);



/***/ }),

/***/ 7506:
/*!**********************************************************************!*\
  !*** ./src/app/modules/user/services/codes/enabling-code.service.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EnablingCodeService": () => (/* binding */ EnablingCodeService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/auth */ 23628);
/* harmony import */ var firebase_database__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/database */ 89187);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 84505);
/* harmony import */ var _models_enablingCode__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/enablingCode */ 31);






let EnablingCodeService = class EnablingCodeService {
    constructor() {
        this.items_list = [];
        this._items = new rxjs__WEBPACK_IMPORTED_MODULE_3__.BehaviorSubject([]);
        this.items = this._items.asObservable();
        this.reference = "enablingCode";
        this.populateItems = (UsersListSnapshot) => {
            this.items_list = [];
            UsersListSnapshot.forEach(snap => {
                const code = new _models_enablingCode__WEBPACK_IMPORTED_MODULE_2__.EnablingCode(snap.val()).setKey(snap.key);
                this.items_list.push(code);
            });
            this._items.next(this.items_list);
        };
        this.ngOnInit();
    }
    ngOnInit() {
        this.db = (0,firebase_database__WEBPACK_IMPORTED_MODULE_1__.getDatabase)();
        this.itemsListReference = (0,firebase_database__WEBPACK_IMPORTED_MODULE_1__.ref)(this.db); //,"/userProfile");
        this.loadDataAndPublish();
    }
    loadDataAndPublish() {
        const auth = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_0__.getAuth)();
        (0,firebase_auth__WEBPACK_IMPORTED_MODULE_0__.onAuthStateChanged)(auth, (user) => {
            if (user) {
                this.itemsListReference = (0,firebase_database__WEBPACK_IMPORTED_MODULE_1__.ref)(this.db, this.reference);
                (0,firebase_database__WEBPACK_IMPORTED_MODULE_1__.onValue)(this.itemsListReference, (codes) => {
                    this.populateItems(codes);
                });
            }
        });
    }
    getItem(key, next) {
        if (this.itemsListReference) {
            const itemRef = (0,firebase_database__WEBPACK_IMPORTED_MODULE_1__.ref)(this.db, this.reference + key);
            (0,firebase_database__WEBPACK_IMPORTED_MODULE_1__.onValue)(itemRef, (snap) => {
                const code = new _models_enablingCode__WEBPACK_IMPORTED_MODULE_2__.EnablingCode(snap.val()).setKey(snap.key);
                next(code);
            });
        }
    }
    createItem(item) {
        const itemRef = (0,firebase_database__WEBPACK_IMPORTED_MODULE_1__.ref)(this.db, this.reference);
        return (0,firebase_database__WEBPACK_IMPORTED_MODULE_1__.push)(itemRef, item.serialize());
    }
    updateItem(item) {
        const itemRef = (0,firebase_database__WEBPACK_IMPORTED_MODULE_1__.ref)(this.db, this.reference + item.key);
        return (0,firebase_database__WEBPACK_IMPORTED_MODULE_1__.update)(itemRef, item.serialize());
    }
    deleteItem(key) {
        const itemRef = (0,firebase_database__WEBPACK_IMPORTED_MODULE_1__.ref)(this.db, this.reference + key);
        return (0,firebase_database__WEBPACK_IMPORTED_MODULE_1__.remove)(itemRef);
    }
};
EnablingCodeService.ctorParameters = () => [];
EnablingCodeService = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Injectable)({
        providedIn: 'root'
    })
], EnablingCodeService);



/***/ }),

/***/ 64073:
/*!**********************************************************!*\
  !*** ./src/app/modules/user/services/profile.service.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfileService": () => (/* binding */ ProfileService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var firebase_compat_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/compat/app */ 8427);
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/auth */ 23628);
/* harmony import */ var firebase_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/database */ 89187);






let ProfileService = class ProfileService {
    constructor() {
        this.reference = "userProfile";
        const auth = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_1__.getAuth)();
        (0,firebase_auth__WEBPACK_IMPORTED_MODULE_1__.onAuthStateChanged)(auth, user => {
            if (user) {
                console.log('user', user.uid);
                this.currentUser = auth.currentUser;
                this.userProfileReference = firebase_compat_app__WEBPACK_IMPORTED_MODULE_0__["default"].database().ref(`/${this.reference}/${user.uid}/`);
                console.log('profile', this.userProfileReference);
            }
        });
    }
    getUserProfileReference() {
        console.log('getting usr profile reference');
        return this.userProfileReference;
    }
    updateName(firstName, lastName) {
        return this.userProfileReference.update({ firstName, lastName });
    }
    updateDOB(birthDate) {
        return this.userProfileReference.update({
            birthDate: {
                year: birthDate.getFullYear(),
                month: birthDate.getMonth(),
                day: birthDate.getDate()
            }
        });
    }
    updateEmail(newEmail, password) {
        const auth = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_1__.getAuth)();
        const user = auth.currentUser;
        const out = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_1__.updatePassword)(user, password);
        const credential = firebase_auth__WEBPACK_IMPORTED_MODULE_1__.EmailAuthProvider.credential(auth.currentUser.email, password);
        return (0,firebase_auth__WEBPACK_IMPORTED_MODULE_1__.reauthenticateWithCredential)(auth.currentUser, credential)
            .then(() => {
            this.updateEmail(auth.currentUser.email, newEmail).then(() => {
                this.userProfileReference.update({ email: newEmail });
            });
        })
            .catch(error => {
            console.error(error);
        });
    }
    updatePassword(newPassword, oldPassword) {
        const auth = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_1__.getAuth)();
        const user = auth.currentUser;
        //const cred = 
        const credential = firebase_compat_app__WEBPACK_IMPORTED_MODULE_0__["default"].auth.EmailAuthProvider.credential(this.currentUser.email, oldPassword);
        const out = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_1__.updatePassword)(user, newPassword);
        return;
        (0,firebase_auth__WEBPACK_IMPORTED_MODULE_1__.reauthenticateWithCredential)(auth.currentUser, credential)
            .then(() => {
        })
            .catch(error => {
            console.error(error);
        });
    }
};
ProfileService.ctorParameters = () => [];
ProfileService = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)({
        providedIn: "root"
    })
], ProfileService);



/***/ }),

/***/ 9959:
/*!**************************************************************!*\
  !*** ./src/app/modules/user/services/role-guards.service.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RoleGuardService": () => (/* binding */ RoleGuardService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var firebase_compat_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/compat/app */ 8427);
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/auth */ 23628);
/* harmony import */ var _users_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./users.service */ 67862);
/* harmony import */ var _configs_credentials__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../configs/credentials */ 20688);
/* harmony import */ var src_app_configs_configs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/configs/configs */ 80191);



// import { decode } from "jwt-decode";






let RoleGuardService = class RoleGuardService {
    constructor(router, Users) {
        this.router = router;
        this.Users = Users;
    }
    canActivate(route) {
        // this will be passed from the route config
        // on the data property
        console.log('role guard', route);
        const maximumRoleLevel = this.Users.FetchRole(route.data.maximumRoleLevel);
        const locked = route.data.locked;
        console.log("minimum role", maximumRoleLevel);
        const firebaseApp = firebase_compat_app__WEBPACK_IMPORTED_MODULE_0__["default"].initializeApp(_configs_credentials__WEBPACK_IMPORTED_MODULE_3__.credentials.firebase);
        const auth = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_1__.getAuth)(firebaseApp);
        (0,firebase_auth__WEBPACK_IMPORTED_MODULE_1__.onAuthStateChanged)(auth, ((user) => {
            if (!locked) {
                return true;
            }
            if (user) {
                if (!this.Users.getLoggedUser()) {
                }
                return true;
            }
            else {
                this.router.navigate(["/users/login"]);
            }
        }));
        if (auth.currentUser) {
            auth
                .currentUser.getIdTokenResult(true)
                .then(token => {
                console.log("claims", token.claims);
                if (!src_app_configs_configs__WEBPACK_IMPORTED_MODULE_4__.configs.locked) {
                    return true;
                }
                // tslint:disable-next-line: curly
                if (token.claims.level <= maximumRoleLevel.value)
                    return true;
                else {
                    const message = `per accedere a questa sezione devi godere almeno dei privilegi di ${maximumRoleLevel.key} 
             per chiarimenti rivolgiti all'amministratore`;
                    this.router.navigate(["users/not-authorized", message]);
                }
            });
        }
        // const token = localStorage.getItem("token");
        // decode the token to get its payload
        // const tokenPayload = decode(token);
        /*
        if (tokenPayload.role !== expectedRole) {
          this.router.navigate(["login"]);
          return false;
        }*/
        console.log("logged user", this.Users.getLoggedUser());
        return true; // this.Users.getLoggedUser().privileges.isAllowed(expectedRole);
    }
};
RoleGuardService.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router },
    { type: _users_service__WEBPACK_IMPORTED_MODULE_2__.UsersService }
];
RoleGuardService = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Injectable)({
        providedIn: "root"
    })
], RoleGuardService);



/***/ }),

/***/ 67862:
/*!********************************************************!*\
  !*** ./src/app/modules/user/services/users.service.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UsersService": () => (/* binding */ UsersService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/auth */ 23628);
/* harmony import */ var firebase_database__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/database */ 89187);
/* harmony import */ var _models_userModel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/userModel */ 60783);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 84505);
/* harmony import */ var firebase_functions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/functions */ 40003);
/* harmony import */ var src_app_configs_configs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/configs/configs */ 80191);
var UsersService_1;

// tslint:disable: quotemark







let UsersService = UsersService_1 = class UsersService {
    constructor() {
        this.items_list = [];
        this._items = new rxjs__WEBPACK_IMPORTED_MODULE_5__.BehaviorSubject([]);
        this._loggedUser = new rxjs__WEBPACK_IMPORTED_MODULE_5__.BehaviorSubject(new _models_userModel__WEBPACK_IMPORTED_MODULE_2__.UserModel);
        this.loggedUser = this._loggedUser.asObservable();
        this.items = this._items.asObservable();
        this.reference = 'userProfile';
        this.populateItems = (UsersListSnapshot) => {
            this.items_list = [];
            UsersListSnapshot.forEach(snap => {
                const user = new _models_userModel__WEBPACK_IMPORTED_MODULE_2__.UserModel(undefined, snap.key).load(snap.val());
                user.key = snap.key; // alcuni item non hanno il campo key
                this.items_list.push(user);
                if (user.key === '') {
                }
            });
            this._items.next(this.items_list);
        };
        this.db = (0,firebase_database__WEBPACK_IMPORTED_MODULE_1__.getDatabase)();
        this.itemsListReference = (0,firebase_database__WEBPACK_IMPORTED_MODULE_1__.ref)(this.db); //,"/userProfile");
        this.loadDataAndPublish();
    }
    ngOnInit() {
    }
    loadDataAndPublish() {
        const auth = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_0__.getAuth)();
        (0,firebase_auth__WEBPACK_IMPORTED_MODULE_0__.onAuthStateChanged)(auth, (user) => {
            if (user) {
                this.itemsListReference = (0,firebase_database__WEBPACK_IMPORTED_MODULE_1__.ref)(this.db, this.reference);
                (0,firebase_database__WEBPACK_IMPORTED_MODULE_1__.onValue)(this.itemsListReference, (users) => {
                    this.populateItems(users);
                });
            }
        });
    }
    getItem(key, next) {
        if (this.itemsListReference) {
            const itemRef = (0,firebase_database__WEBPACK_IMPORTED_MODULE_1__.ref)(this.db, this.reference + key);
            (0,firebase_database__WEBPACK_IMPORTED_MODULE_1__.onValue)(itemRef, (snap) => { next(snap); });
        }
    }
    FetchRole(level) {
        return src_app_configs_configs__WEBPACK_IMPORTED_MODULE_4__.configs.accessLevel.filter(accesslevel => accesslevel.value == level)[0];
    }
    getLoggedUser() {
        return this.loggedUser;
    }
    //
    callCloudPushUser(user) {
        const functions = (0,firebase_functions__WEBPACK_IMPORTED_MODULE_3__.getFunctions)();
        const insertUser = (0,firebase_functions__WEBPACK_IMPORTED_MODULE_3__.httpsCallable)(functions, 'adminAddUserProfile');
        return insertUser(user).then((msg) => {
            console.log('insert use', msg);
        }).catch((error) => {
            console.error(error);
        });
    }
    setLoggedUser(user) {
        console.log('setting user', user);
        this._loggedUser.next(new _models_userModel__WEBPACK_IMPORTED_MODULE_2__.UserModel(user, user['uid']));
        UsersService_1.loggedUser = new _models_userModel__WEBPACK_IMPORTED_MODULE_2__.UserModel(user, user['uid']);
        return this.loggedUser;
    }
    deleteItem(key) {
        const itemRef = (0,firebase_database__WEBPACK_IMPORTED_MODULE_1__.ref)(this.db, this.reference + key);
        return (0,firebase_database__WEBPACK_IMPORTED_MODULE_1__.remove)(itemRef);
    }
    getEmptyItem() {
        return new _models_userModel__WEBPACK_IMPORTED_MODULE_2__.UserModel();
    }
    createItem(item) {
        const itemRef = (0,firebase_database__WEBPACK_IMPORTED_MODULE_1__.ref)(this.db, this.reference);
        return (0,firebase_database__WEBPACK_IMPORTED_MODULE_1__.push)(itemRef, item.serialize());
    }
    getEntitiesList() {
        return this.itemsListReference;
    }
    updateItem(item) {
        const itemRef = (0,firebase_database__WEBPACK_IMPORTED_MODULE_1__.ref)(this.db, this.reference + item.key);
        return (0,firebase_database__WEBPACK_IMPORTED_MODULE_1__.update)(itemRef, item.serialize());
    }
};
UsersService.ctorParameters = () => [];
UsersService = UsersService_1 = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Injectable)({
        providedIn: "root"
    })
], UsersService);



/***/ }),

/***/ 39084:
/*!*****************************************************!*\
  !*** ./src/app/modules/user/user-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "routes": () => (/* binding */ routes)
/* harmony export */ });
/* harmony import */ var _services_authguard_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services/authguard.service */ 2199);
/* harmony import */ var _services_role_guards_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/role-guards.service */ 9959);


// import { CanActivate } from "@angular/router/src/utils/preactivation";
const routes = [
    {
        path: "profile",
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_modules_user_pages_profile_profile_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/profile/profile.module */ 83463)).then(m => m.ProfilePageModule),
        canActivate: [_services_authguard_service__WEBPACK_IMPORTED_MODULE_0__.AuthGuard]
    },
    {
        path: "signup",
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_modules_user_pages_signup_signup_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/signup/signup.module */ 36636)).then(m => m.SignupPageModule)
    },
    {
        path: "login",
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_modules_user_pages_login_login_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/login/login.module */ 46419)).then(m => m.LoginPageModule)
    },
    {
        path: "reset-password",
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_modules_user_pages_reset-password_reset-password_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/reset-password/reset-password.module */ 71196)).then(m => m.ResetPasswordPageModule),
    },
    {
        path: "profile",
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_modules_user_pages_profile_profile_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/profile/profile.module */ 83463)).then(m => m.ProfilePageModule),
        canActivate: [_services_authguard_service__WEBPACK_IMPORTED_MODULE_0__.AuthGuard]
    },
    {
        path: "users",
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_modules_user_pages_users_users_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/users/users.module */ 40216)).then(m => m.UsersPageModule),
        canActivate: [_services_authguard_service__WEBPACK_IMPORTED_MODULE_0__.AuthGuard, _services_role_guards_service__WEBPACK_IMPORTED_MODULE_1__.RoleGuardService]
    },
    {
        path: "edit-user/:key",
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_modules_user_pages_edit-user_edit-user_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/edit-user/edit-user.module */ 77792)).then(m => m.EditUserPageModule),
        canActivate: [_services_authguard_service__WEBPACK_IMPORTED_MODULE_0__.AuthGuard]
    },
    {
        path: "not-authorized/:message",
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_modules_user_pages_not-authorized_not-authorized_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/not-authorized/not-authorized.module */ 15812)).then(m => m.NotAuthorizedPageModule)
    },
    {
        path: 'complete-registration',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_modules_user_pages_complete-registration_complete-registration_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/complete-registration/complete-registration.module */ 40222)).then(m => m.CompleteRegistrationPageModule)
    }
];


/***/ }),

/***/ 30335:
/*!*********************************************!*\
  !*** ./src/app/modules/user/user.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserModule": () => (/* binding */ UserModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _pages_login_login_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/login/login.page */ 93370);
/* harmony import */ var _user_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user-routing.module */ 39084);
/* harmony import */ var _dynamic_form_dynamic_form_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../dynamic-form/dynamic-form.module */ 74316);
/* harmony import */ var _components_logout_user_logout_user_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/logout-user/logout-user.component */ 71932);
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/login/login.component */ 94406);
/* harmony import */ var _components_login_definitivo_login_definitivo_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/login-definitivo/login-definitivo.component */ 44834);
/* harmony import */ var _components_sleek_login_sleek_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/sleek-login/sleek-login.component */ 68821);













let UserModule = class UserModule {
};
UserModule = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.NgModule)({
        declarations: [
            _pages_login_login_page__WEBPACK_IMPORTED_MODULE_0__.LoginPage,
            _components_logout_user_logout_user_component__WEBPACK_IMPORTED_MODULE_3__.LogoutUserComponent,
            _components_login_login_component__WEBPACK_IMPORTED_MODULE_4__.LoginComponent,
            _components_login_definitivo_login_definitivo_component__WEBPACK_IMPORTED_MODULE_5__.LoginDefinitivoComponent,
            _components_sleek_login_sleek_login_component__WEBPACK_IMPORTED_MODULE_6__.SleekLoginComponent
        ],
        imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__.ReactiveFormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonicModule.forRoot(),
            _angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterModule.forChild(_user_routing_module__WEBPACK_IMPORTED_MODULE_1__.routes),
            _angular_common__WEBPACK_IMPORTED_MODULE_12__.CommonModule,
            _dynamic_form_dynamic_form_module__WEBPACK_IMPORTED_MODULE_2__.DynamicFormModule,
        ],
        exports: [
            _components_logout_user_logout_user_component__WEBPACK_IMPORTED_MODULE_3__.LogoutUserComponent,
            _components_login_login_component__WEBPACK_IMPORTED_MODULE_4__.LoginComponent,
            _components_login_definitivo_login_definitivo_component__WEBPACK_IMPORTED_MODULE_5__.LoginDefinitivoComponent,
            _components_sleek_login_sleek_login_component__WEBPACK_IMPORTED_MODULE_6__.SleekLoginComponent
        ]
    })
], UserModule);



/***/ }),

/***/ 57560:
/*!**************************************************************************!*\
  !*** ./src/app/pages/customers/create/new-customer/new-customer.page.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NewCustomerPage": () => (/* binding */ NewCustomerPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _new_customer_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./new-customer.page.html?ngResource */ 2822);
/* harmony import */ var _new_customer_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./new-customer.page.scss?ngResource */ 73114);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var src_app_business_EnablingCodeMaker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/business/EnablingCodeMaker */ 72252);
/* harmony import */ var src_app_models_Customer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/models/Customer */ 55296);
/* harmony import */ var src_app_modules_dynamic_form_models_question_email__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/modules/dynamic-form/models/question-email */ 12321);
/* harmony import */ var src_app_modules_dynamic_form_models_question_textbox__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/modules/dynamic-form/models/question-textbox */ 72644);
/* harmony import */ var src_app_modules_helpers_services_toaster_my_toast_service_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/modules/helpers/services/toaster/my-toast-service.service */ 30218);
/* harmony import */ var src_app_modules_user_models_enablingCode__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/modules/user/models/enablingCode */ 31);
/* harmony import */ var src_app_modules_user_services_codes_enabling_code_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/modules/user/services/codes/enabling-code.service */ 7506);
/* harmony import */ var src_app_services_customers_customers_service_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/customers/customers-service.service */ 62791);













let NewCustomerPage = class NewCustomerPage {
    constructor(service, modalCtrl, toaster, codes) {
        this.service = service;
        this.modalCtrl = modalCtrl;
        this.toaster = toaster;
        this.codes = codes;
        this.submitText = "preregistra utente";
        this.customer = new src_app_models_Customer__WEBPACK_IMPORTED_MODULE_3__.Customer();
        this.formFields = [];
    }
    dismiss(v) {
        this.modalCtrl.dismiss(v);
    }
    ngOnInit() {
        this.customer.dor = undefined; // l'utente non si è ancora registrato
        this.setFormFields();
    }
    setFormFields() {
        this.formFields = [];
        const codeMaker = new src_app_business_EnablingCodeMaker__WEBPACK_IMPORTED_MODULE_2__.enablingCodeMaker(this.codes);
        this.formFields = [
            new src_app_modules_dynamic_form_models_question_textbox__WEBPACK_IMPORTED_MODULE_5__.TextboxQuestion({
                label: "nome",
                key: "firstName",
                value: this.customer.firstName
            }),
            new src_app_modules_dynamic_form_models_question_textbox__WEBPACK_IMPORTED_MODULE_5__.TextboxQuestion({
                key: "lastName",
                label: "Cognome",
            }),
            new src_app_modules_dynamic_form_models_question_email__WEBPACK_IMPORTED_MODULE_4__.EmailQuestion({
                label: "email",
                key: "email",
                required: true,
                value: this.customer.email
            }),
            /*  new EnablingCodeQuestion({
               label: "codice di abilitazione",
               key: "enablingCode",
               generatorFunction: () => codeMaker.makeUniqueCode(configs.enablingCodeLength),
               validator: (control: AbstractControl) => {
                 const enough = control.value.length >= configs.enablingCodeLength
                 return enough ? null : { noGood: true }
               },
               asyncValidator:[new AsyncEnablingCodeValidator(this.codes).getValidator()]
             })
        */
        ];
    }
    filter(ev) {
        console.log("typing ", ev);
    }
    generateCode() {
        console.log("generating code");
        this.customer.enablingCode = "test";
        this.setFormFields();
    }
    getUser() {
        console.log("get user");
        this.service.getUser("a@iol.it").then(res => {
            console.log("got user", res);
        }).catch(err => {
            console.error("error", err);
        });
    }
    submit(ev) {
        console.log("submitted", ev);
        this.customer.load(ev);
        this.customer.dor = undefined;
        console.log("new user", this.customer);
        this.service.createItem(this.customer).then(() => (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
            const code = new src_app_modules_user_models_enablingCode__WEBPACK_IMPORTED_MODULE_7__.EnablingCode({ code: this.customer.enablingCode });
            yield this.codes.createItem(code);
            this.toaster.presentToast("utente inizializzato correttamente");
            this.dismiss();
        })).catch(err => {
            console.log("errore", err);
            this.toaster.presentToast("ho riscontrato dei problemi, riprova");
        });
    }
};
NewCustomerPage.ctorParameters = () => [
    { type: src_app_services_customers_customers_service_service__WEBPACK_IMPORTED_MODULE_9__.CustomersService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.ModalController },
    { type: src_app_modules_helpers_services_toaster_my_toast_service_service__WEBPACK_IMPORTED_MODULE_6__.MyToastService },
    { type: src_app_modules_user_services_codes_enabling_code_service__WEBPACK_IMPORTED_MODULE_8__.EnablingCodeService }
];
NewCustomerPage = (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_12__.Component)({
        selector: 'app-new-customer',
        template: _new_customer_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_new_customer_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], NewCustomerPage);



/***/ }),

/***/ 50230:
/*!******************************************************************************!*\
  !*** ./src/app/pages/customers/edit/update-customer/update-customer.page.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UpdateCustomerPage": () => (/* binding */ UpdateCustomerPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _update_customer_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./update-customer.page.html?ngResource */ 86520);
/* harmony import */ var _update_customer_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./update-customer.page.scss?ngResource */ 44492);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var src_app_configs_configs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/configs/configs */ 80191);
/* harmony import */ var src_app_models_Customer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/models/Customer */ 55296);
/* harmony import */ var src_app_modules_dynamic_form_models_question_date__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/modules/dynamic-form/models/question-date */ 38878);
/* harmony import */ var src_app_modules_dynamic_form_models_question_dropdown__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/modules/dynamic-form/models/question-dropdown */ 90402);
/* harmony import */ var src_app_modules_dynamic_form_models_question_textbox__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/modules/dynamic-form/models/question-textbox */ 72644);
/* harmony import */ var src_app_modules_helpers_services_toaster_my_toast_service_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/modules/helpers/services/toaster/my-toast-service.service */ 30218);
/* harmony import */ var src_app_modules_item_models_question_switch__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/modules/item/models/question-switch */ 72154);
/* harmony import */ var src_app_services_customers_customers_service_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/customers/customers-service.service */ 62791);













let UpdateCustomerPage = class UpdateCustomerPage {
    constructor(navParams, modalCtrl, service, toaster) {
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.service = service;
        this.toaster = toaster;
        this.customer = new src_app_models_Customer__WEBPACK_IMPORTED_MODULE_3__.Customer;
    }
    filter(ev) {
    }
    submit(ev) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
            this.customer.load(ev);
            console.log("submitting form", ev, this.customer);
            try {
                this.service.updateItem(this.customer);
                const result = yield this.service.addCustomClaim({
                    email: this.customer.email,
                    claims: {
                        expirationTime: this.customer._expirationTime,
                        enabled: this.customer.enabled,
                        level: this.customer.level,
                        userType: this.customer.userType
                    }
                });
                console.log("done", result);
                this.toaster.presentToast("user updated");
                this.dismiss(this.customer);
            }
            catch (error) {
                console.log(error);
                this.toaster.presentToast("ho riscontrato dei problemi");
                this.dismiss();
            }
        });
    }
    dismiss(customer) {
        this.modalCtrl.dismiss(customer);
    }
    ngOnInit() {
        this.customer.load(this.navParams.get("item"));
        console.log("customer", this.customer);
        console.log("customer", this.customer);
        this.formFields = [
            new src_app_modules_dynamic_form_models_question_textbox__WEBPACK_IMPORTED_MODULE_6__.TextboxQuestion({
                key: "firstName",
                label: "nome",
                required: true,
                value: this.customer.firstName
            }),
            new src_app_modules_dynamic_form_models_question_textbox__WEBPACK_IMPORTED_MODULE_6__.TextboxQuestion({
                key: "lastName",
                label: "cognome",
                value: this.customer.lastName,
                required: true
            }),
            new src_app_modules_dynamic_form_models_question_dropdown__WEBPACK_IMPORTED_MODULE_5__.DropdownQuestion({
                key: "level",
                label: "privilegi utente",
                options: src_app_configs_configs__WEBPACK_IMPORTED_MODULE_2__.configs.accessLevel, value: this.customer.level
            }),
            new src_app_modules_item_models_question_switch__WEBPACK_IMPORTED_MODULE_8__.SwitchQuestion({
                key: "enabled",
                label: "abilitato",
                value: this.customer.enabled,
                iconTrue: "checkmark-circle",
                iconFalse: "close-circle",
                labelFalse: "utente non abilitato",
                labelTrue: "utente abilitato"
            }),
            new src_app_modules_dynamic_form_models_question_date__WEBPACK_IMPORTED_MODULE_4__.DateQuestion({
                key: "expirationDate",
                label: "scadenza Abbonamento",
                presentation: "date",
                value: this.customer.expirationDate
            })
        ];
    }
};
UpdateCustomerPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.NavParams },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.ModalController },
    { type: src_app_services_customers_customers_service_service__WEBPACK_IMPORTED_MODULE_9__.CustomersService },
    { type: src_app_modules_helpers_services_toaster_my_toast_service_service__WEBPACK_IMPORTED_MODULE_7__.MyToastService }
];
UpdateCustomerPage = (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_12__.Component)({
        selector: 'app-update-customer',
        template: _update_customer_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_update_customer_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], UpdateCustomerPage);



/***/ }),

/***/ 67506:
/*!*****************************************!*\
  !*** ./src/app/pages/menu/menu.page.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MenuPage": () => (/* binding */ MenuPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _menu_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu.page.html?ngResource */ 73950);
/* harmony import */ var _menu_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu.page.scss?ngResource */ 83202);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/app */ 66369);
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/auth */ 23628);
/* harmony import */ var src_app_configs_configs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/configs/configs */ 80191);
/* harmony import */ var src_app_configs_credentials__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/configs/credentials */ 20688);
/* harmony import */ var src_app_modules_helpers_menu_models_business_checkers_checkEnabled__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/modules/helpers/menu/models/business/checkers/checkEnabled */ 39641);
/* harmony import */ var src_app_modules_helpers_menu_models_business_checkers_checkExpiration__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/modules/helpers/menu/models/business/checkers/checkExpiration */ 29201);
/* harmony import */ var src_app_modules_helpers_menu_models_business_menuComposer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/modules/helpers/menu/models/business/menuComposer */ 21495);
/* harmony import */ var src_app_modules_helpers_services_messages_message_broker_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/modules/helpers/services/messages/message-broker.service */ 79786);













let MenuPage = class MenuPage {
    constructor(router, messages) {
        this.router = router;
        this.messages = messages;
        this.appPages = [];
        this.transformationIndex = -1;
        this.onOwnClick = (index, url) => {
            const out = () => {
                if (index == -1) {
                    this.router.navigate([url]);
                }
                if (index == -3) {
                    window.location.href = url;
                }
            };
            return out;
        };
        this.menuItems = [
            {
                menuItem: {
                    title: "UTENTI",
                    url: "/customers",
                    icon: "people",
                    onClick: this.onOwnClick(-1, "/customers")
                },
                canAdd: [
                /*         new CheckEnabled(),
                        new CheckExpiration(),
                        new CheckRole(2) */
                ],
                orLogic: false
            },
        ];
    }
    ngOnInit() {
        const app = (0,firebase_app__WEBPACK_IMPORTED_MODULE_2__.initializeApp)(src_app_configs_credentials__WEBPACK_IMPORTED_MODULE_5__.credentials.firebase);
        const auth = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_3__.getAuth)();
        console.log("config", src_app_configs_configs__WEBPACK_IMPORTED_MODULE_4__.configs);
        (0,firebase_auth__WEBPACK_IMPORTED_MODULE_3__.onAuthStateChanged)(auth, (user) => (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
            if (user) {
                const token = yield user.getIdTokenResult(true).then(result => {
                    const menu = src_app_modules_helpers_menu_models_business_menuComposer__WEBPACK_IMPORTED_MODULE_8__.menuComposer.composeMenuByClaims(this.menuItems, result.claims);
                    this.appPages = menu;
                    console.log("claims", result.claims);
                    if (!new src_app_modules_helpers_menu_models_business_checkers_checkEnabled__WEBPACK_IMPORTED_MODULE_6__.CheckEnabled().canAdd(result.claims, src_app_configs_configs__WEBPACK_IMPORTED_MODULE_4__.configs.locked)) {
                        this.router.navigate(["users/not-authorized", `contatta l'amministratore di ${src_app_configs_configs__WEBPACK_IMPORTED_MODULE_4__.configs.appName} per abilitare la tua utenza`]);
                    }
                    if (!new src_app_modules_helpers_menu_models_business_checkers_checkExpiration__WEBPACK_IMPORTED_MODULE_7__.CheckExpiration().canAdd({ expirationTime: Number(result.claims["expirationTime"]) }, src_app_configs_configs__WEBPACK_IMPORTED_MODULE_4__.configs.locked)) {
                        console.log('account scaduto');
                        this.router.navigate(["users/not-authorized", "contatta l'amministratore di Genial Lotto per rinnovare il tuo abbonamento"]);
                    }
                });
            }
            else {
                this.router.navigate(["/users/login"]);
            }
        }));
    }
};
MenuPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_11__.Router },
    { type: src_app_modules_helpers_services_messages_message_broker_service__WEBPACK_IMPORTED_MODULE_9__.MessageBrokerService }
];
MenuPage = (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_12__.Component)({
        selector: 'app-menu',
        template: _menu_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_menu_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], MenuPage);



/***/ }),

/***/ 62791:
/*!*****************************************************************!*\
  !*** ./src/app/services/customers/customers-service.service.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CustomersService": () => (/* binding */ CustomersService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var firebase_database__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/database */ 89187);
/* harmony import */ var firebase_functions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/functions */ 40003);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 84505);
/* harmony import */ var src_app_configs_credentials__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/configs/credentials */ 20688);
/* harmony import */ var src_app_models_Customer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/models/Customer */ 55296);
/* harmony import */ var src_app_modules_helpers_createFirebaseApp__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/modules/helpers/createFirebaseApp */ 41231);
/* harmony import */ var src_app_modules_user_services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/modules/user/services/auth.service */ 49955);









let CustomersService = class CustomersService {
    constructor(authService) {
        this.authService = authService;
        this.reference = "userProfile";
        this._items = new rxjs__WEBPACK_IMPORTED_MODULE_6__.BehaviorSubject([]);
        this.items = this._items.asObservable();
        new src_app_modules_helpers_createFirebaseApp__WEBPACK_IMPORTED_MODULE_4__.MyFirebaseHelper().createFirebaseApp(src_app_configs_credentials__WEBPACK_IMPORTED_MODULE_2__.credentials.firebase);
        this.reference = 'userProfile';
        this.db = (0,firebase_database__WEBPACK_IMPORTED_MODULE_0__.getDatabase)();
        this.itemsListRef = (0,firebase_database__WEBPACK_IMPORTED_MODULE_0__.ref)(this.db, this.reference);
        this.loadDataAndPublish(this.publishItems);
    }
    publishItems(lista) {
        this._items.next(lista);
    }
    deleteAuthUser(data) {
        console.log("deleting", data);
        const functions = (0,firebase_functions__WEBPACK_IMPORTED_MODULE_1__.getFunctions)();
        const deleteAuthUser = (0,firebase_functions__WEBPACK_IMPORTED_MODULE_1__.httpsCallable)(functions, 'deleteAuthUser');
        return deleteAuthUser(data);
    }
    addCustomClaim(data) {
        const functions = (0,firebase_functions__WEBPACK_IMPORTED_MODULE_1__.getFunctions)();
        const addCustomClaim = (0,firebase_functions__WEBPACK_IMPORTED_MODULE_1__.httpsCallable)(functions, 'addCustomClaim');
        return addCustomClaim({ email: data.email, claims: data.claims });
    }
    getUser(email) {
        console.log("getting user of", email);
        const functions = (0,firebase_functions__WEBPACK_IMPORTED_MODULE_1__.getFunctions)();
        const getUserProfile = (0,firebase_functions__WEBPACK_IMPORTED_MODULE_1__.httpsCallable)(functions, "getUserProfile");
        return getUserProfile({ email: email });
    }
    getItem(key, next) {
        const reference = (0,firebase_database__WEBPACK_IMPORTED_MODULE_0__.ref)(this.db, `${this.reference}/${key}`);
        (0,firebase_database__WEBPACK_IMPORTED_MODULE_0__.onValue)(reference, user => { next(user); });
    }
    updateItem(item) {
        const reference = (0,firebase_database__WEBPACK_IMPORTED_MODULE_0__.ref)(this.db, `${this.reference}/${item.key}`);
        return (0,firebase_database__WEBPACK_IMPORTED_MODULE_0__.set)(reference, item.serialize());
    }
    deleteItem(key) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            var email = "";
            const reference = (0,firebase_database__WEBPACK_IMPORTED_MODULE_0__.ref)(this.db, `${this.reference}/${key}`);
            this.getItem(key, (user) => {
                if (user.val()) { // con il nuovo sistema di registrazione utenti potrebbe 
                    email = user.val().email;
                    console.log("user to delete", user.val());
                    this.deleteAuthUser({ email: email }).then(() => { });
                }
            });
            return (0,firebase_database__WEBPACK_IMPORTED_MODULE_0__.remove)(reference).then(res => { console.log(`removed ${res}`); }).catch(err => { console.log(`deleted user data for ${email}`); });
        });
    }
    getEmptyItem() {
        return new src_app_models_Customer__WEBPACK_IMPORTED_MODULE_3__.Customer();
    }
    createItem(item) {
        return (0,firebase_database__WEBPACK_IMPORTED_MODULE_0__.push)(this.itemsListRef, item.serialize());
    }
    loadDataAndPublish(next) {
        (0,firebase_database__WEBPACK_IMPORTED_MODULE_0__.onValue)(this.itemsListRef, (snapshot) => {
            this.items_list = [];
            snapshot.forEach(e => {
                const item = new src_app_models_Customer__WEBPACK_IMPORTED_MODULE_3__.Customer(e.val());
                item.setKey(e.key);
                this.items_list.push(item);
            });
            this.publishItems(this.items_list);
        });
    }
};
CustomersService.ctorParameters = () => [
    { type: src_app_modules_user_services_auth_service__WEBPACK_IMPORTED_MODULE_5__.AuthService }
];
CustomersService = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Injectable)({
        providedIn: 'root'
    })
], CustomersService);



/***/ }),

/***/ 92340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 14431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ 68150);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 36747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 92340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
(0,_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__.platformBrowserDynamic)().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.log(err));


/***/ }),

/***/ 50863:
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/ lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \******************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./ion-accordion_2.entry.js": [
		70079,
		"common",
		"node_modules_ionic_core_dist_esm_ion-accordion_2_entry_js"
	],
	"./ion-action-sheet.entry.js": [
		25593,
		"common",
		"node_modules_ionic_core_dist_esm_ion-action-sheet_entry_js"
	],
	"./ion-alert.entry.js": [
		13225,
		"common",
		"node_modules_ionic_core_dist_esm_ion-alert_entry_js"
	],
	"./ion-app_8.entry.js": [
		4812,
		"common",
		"node_modules_ionic_core_dist_esm_ion-app_8_entry_js"
	],
	"./ion-avatar_3.entry.js": [
		86655,
		"node_modules_ionic_core_dist_esm_ion-avatar_3_entry_js"
	],
	"./ion-back-button.entry.js": [
		44856,
		"common",
		"node_modules_ionic_core_dist_esm_ion-back-button_entry_js"
	],
	"./ion-backdrop.entry.js": [
		13059,
		"node_modules_ionic_core_dist_esm_ion-backdrop_entry_js"
	],
	"./ion-breadcrumb_2.entry.js": [
		58648,
		"common",
		"node_modules_ionic_core_dist_esm_ion-breadcrumb_2_entry_js"
	],
	"./ion-button_2.entry.js": [
		98308,
		"node_modules_ionic_core_dist_esm_ion-button_2_entry_js"
	],
	"./ion-card_5.entry.js": [
		44690,
		"node_modules_ionic_core_dist_esm_ion-card_5_entry_js"
	],
	"./ion-checkbox.entry.js": [
		64090,
		"node_modules_ionic_core_dist_esm_ion-checkbox_entry_js"
	],
	"./ion-chip.entry.js": [
		36214,
		"node_modules_ionic_core_dist_esm_ion-chip_entry_js"
	],
	"./ion-col_3.entry.js": [
		69447,
		"node_modules_ionic_core_dist_esm_ion-col_3_entry_js"
	],
	"./ion-datetime-button.entry.js": [
		17950,
		"default-node_modules_ionic_core_dist_esm_parse-26477881_js-node_modules_ionic_core_dist_esm_t-6bed99",
		"node_modules_ionic_core_dist_esm_ion-datetime-button_entry_js"
	],
	"./ion-datetime_3.entry.js": [
		79689,
		"default-node_modules_ionic_core_dist_esm_parse-26477881_js-node_modules_ionic_core_dist_esm_t-6bed99",
		"common",
		"node_modules_ionic_core_dist_esm_ion-datetime_3_entry_js"
	],
	"./ion-fab_3.entry.js": [
		18840,
		"common",
		"node_modules_ionic_core_dist_esm_ion-fab_3_entry_js"
	],
	"./ion-img.entry.js": [
		40749,
		"node_modules_ionic_core_dist_esm_ion-img_entry_js"
	],
	"./ion-infinite-scroll_2.entry.js": [
		69667,
		"common",
		"node_modules_ionic_core_dist_esm_ion-infinite-scroll_2_entry_js"
	],
	"./ion-input.entry.js": [
		83288,
		"node_modules_ionic_core_dist_esm_ion-input_entry_js"
	],
	"./ion-item-option_3.entry.js": [
		35473,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item-option_3_entry_js"
	],
	"./ion-item_8.entry.js": [
		53634,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item_8_entry_js"
	],
	"./ion-loading.entry.js": [
		22855,
		"node_modules_ionic_core_dist_esm_ion-loading_entry_js"
	],
	"./ion-menu_3.entry.js": [
		495,
		"common",
		"node_modules_ionic_core_dist_esm_ion-menu_3_entry_js"
	],
	"./ion-modal.entry.js": [
		58737,
		"common",
		"node_modules_ionic_core_dist_esm_ion-modal_entry_js"
	],
	"./ion-nav_2.entry.js": [
		99632,
		"common",
		"node_modules_ionic_core_dist_esm_ion-nav_2_entry_js"
	],
	"./ion-picker-column-internal.entry.js": [
		54446,
		"common",
		"node_modules_ionic_core_dist_esm_ion-picker-column-internal_entry_js"
	],
	"./ion-picker-internal.entry.js": [
		32275,
		"node_modules_ionic_core_dist_esm_ion-picker-internal_entry_js"
	],
	"./ion-popover.entry.js": [
		48050,
		"common",
		"node_modules_ionic_core_dist_esm_ion-popover_entry_js"
	],
	"./ion-progress-bar.entry.js": [
		18994,
		"node_modules_ionic_core_dist_esm_ion-progress-bar_entry_js"
	],
	"./ion-radio_2.entry.js": [
		23592,
		"node_modules_ionic_core_dist_esm_ion-radio_2_entry_js"
	],
	"./ion-range.entry.js": [
		35454,
		"common",
		"node_modules_ionic_core_dist_esm_ion-range_entry_js"
	],
	"./ion-refresher_2.entry.js": [
		290,
		"common",
		"node_modules_ionic_core_dist_esm_ion-refresher_2_entry_js"
	],
	"./ion-reorder_2.entry.js": [
		92666,
		"common",
		"node_modules_ionic_core_dist_esm_ion-reorder_2_entry_js"
	],
	"./ion-ripple-effect.entry.js": [
		64816,
		"node_modules_ionic_core_dist_esm_ion-ripple-effect_entry_js"
	],
	"./ion-route_4.entry.js": [
		45534,
		"node_modules_ionic_core_dist_esm_ion-route_4_entry_js"
	],
	"./ion-searchbar.entry.js": [
		94902,
		"common",
		"node_modules_ionic_core_dist_esm_ion-searchbar_entry_js"
	],
	"./ion-segment_2.entry.js": [
		91938,
		"common",
		"node_modules_ionic_core_dist_esm_ion-segment_2_entry_js"
	],
	"./ion-select_3.entry.js": [
		78179,
		"node_modules_ionic_core_dist_esm_ion-select_3_entry_js"
	],
	"./ion-slide_2.entry.js": [
		90668,
		"node_modules_ionic_core_dist_esm_ion-slide_2_entry_js"
	],
	"./ion-spinner.entry.js": [
		61624,
		"common",
		"node_modules_ionic_core_dist_esm_ion-spinner_entry_js"
	],
	"./ion-split-pane.entry.js": [
		19989,
		"node_modules_ionic_core_dist_esm_ion-split-pane_entry_js"
	],
	"./ion-tab-bar_2.entry.js": [
		28902,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab-bar_2_entry_js"
	],
	"./ion-tab_2.entry.js": [
		70199,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab_2_entry_js"
	],
	"./ion-text.entry.js": [
		48395,
		"node_modules_ionic_core_dist_esm_ion-text_entry_js"
	],
	"./ion-textarea.entry.js": [
		96357,
		"node_modules_ionic_core_dist_esm_ion-textarea_entry_js"
	],
	"./ion-toast.entry.js": [
		38268,
		"node_modules_ionic_core_dist_esm_ion-toast_entry_js"
	],
	"./ion-toggle.entry.js": [
		15269,
		"common",
		"node_modules_ionic_core_dist_esm_ion-toggle_entry_js"
	],
	"./ion-virtual-scroll.entry.js": [
		32875,
		"node_modules_ionic_core_dist_esm_ion-virtual-scroll_entry_js"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(() => {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = 50863;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 79259:
/*!***********************************************!*\
  !*** ./src/app/app.component.scss?ngResource ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = "ion-menu ion-content {\n  --background: var(--ion-item-background, var(--ion-background-color, #fff));\n}\n\nion-menu.md ion-content {\n  --padding-start: 8px;\n  --padding-end: 8px;\n  --padding-top: 20px;\n  --padding-bottom: 20px;\n}\n\nion-menu.md ion-list {\n  padding: 20px 0;\n}\n\nion-menu.md ion-note {\n  margin-bottom: 30px;\n}\n\nion-menu.md ion-list-header,\nion-menu.md ion-note {\n  padding-left: 10px;\n}\n\nion-menu.md ion-list#inbox-list {\n  border-bottom: 1px solid var(--ion-color-step-150, #d7d8da);\n}\n\nion-menu.md ion-list#inbox-list ion-list-header {\n  font-size: 22px;\n  font-weight: 600;\n  min-height: 20px;\n}\n\nion-menu.md ion-list#labels-list ion-list-header {\n  font-size: 16px;\n  margin-bottom: 18px;\n  color: #757575;\n  min-height: 26px;\n}\n\nion-menu.md ion-item {\n  --padding-start: 10px;\n  --padding-end: 10px;\n  border-radius: 4px;\n}\n\nion-menu.md ion-item.selected {\n  --background: rgba(var(--ion-color-primary-rgb), 0.14);\n}\n\nion-menu.md ion-item.selected ion-icon {\n  color: var(--ion-color-primary);\n}\n\nion-menu.md ion-item ion-icon {\n  color: #616e7e;\n}\n\nion-menu.md ion-item ion-label {\n  font-weight: 500;\n}\n\nion-menu.ios ion-content {\n  --padding-bottom: 20px;\n}\n\nion-menu.ios ion-list {\n  padding: 20px 0 0 0;\n}\n\nion-menu.ios ion-note {\n  line-height: 24px;\n  margin-bottom: 20px;\n}\n\nion-menu.ios ion-item {\n  --padding-start: 16px;\n  --padding-end: 16px;\n  --min-height: 50px;\n}\n\nion-menu.ios ion-item.selected ion-icon {\n  color: var(--ion-color-primary);\n}\n\nion-menu.ios ion-item ion-icon {\n  font-size: 24px;\n  color: #73849a;\n}\n\nion-menu.ios ion-list#labels-list ion-list-header {\n  margin-bottom: 8px;\n}\n\nion-menu.ios ion-list-header,\nion-menu.ios ion-note {\n  padding-left: 16px;\n  padding-right: 16px;\n}\n\nion-menu.ios ion-note {\n  margin-bottom: 8px;\n}\n\nion-note {\n  display: inline-block;\n  font-size: 16px;\n  color: var(--ion-color-medium-shade);\n}\n\nion-item.selected {\n  --color: var(--ion-color-primary);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDJFQUFBO0FBQ0Y7O0FBRUE7RUFDRSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtBQUNGOztBQUVBO0VBQ0UsZUFBQTtBQUNGOztBQUVBO0VBQ0UsbUJBQUE7QUFDRjs7QUFFQTs7RUFFRSxrQkFBQTtBQUNGOztBQUVBO0VBQ0UsMkRBQUE7QUFDRjs7QUFFQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUVBLGdCQUFBO0FBQUY7O0FBR0E7RUFDRSxlQUFBO0VBRUEsbUJBQUE7RUFFQSxjQUFBO0VBRUEsZ0JBQUE7QUFIRjs7QUFNQTtFQUNFLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQUhGOztBQU1BO0VBQ0Usc0RBQUE7QUFIRjs7QUFNQTtFQUNFLCtCQUFBO0FBSEY7O0FBTUE7RUFDRSxjQUFBO0FBSEY7O0FBTUE7RUFDRSxnQkFBQTtBQUhGOztBQU1BO0VBQ0Usc0JBQUE7QUFIRjs7QUFNQTtFQUNFLG1CQUFBO0FBSEY7O0FBTUE7RUFDRSxpQkFBQTtFQUNBLG1CQUFBO0FBSEY7O0FBTUE7RUFDRSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUFIRjs7QUFNQTtFQUNFLCtCQUFBO0FBSEY7O0FBTUE7RUFDRSxlQUFBO0VBQ0EsY0FBQTtBQUhGOztBQU1BO0VBQ0Usa0JBQUE7QUFIRjs7QUFNQTs7RUFFRSxrQkFBQTtFQUNBLG1CQUFBO0FBSEY7O0FBTUE7RUFDRSxrQkFBQTtBQUhGOztBQU1BO0VBQ0UscUJBQUE7RUFDQSxlQUFBO0VBRUEsb0NBQUE7QUFKRjs7QUFPQTtFQUNFLGlDQUFBO0FBSkYiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLW1lbnUgaW9uLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1pdGVtLWJhY2tncm91bmQsIHZhcigtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yLCAjZmZmKSk7XG59XG5cbmlvbi1tZW51Lm1kIGlvbi1jb250ZW50IHtcbiAgLS1wYWRkaW5nLXN0YXJ0OiA4cHg7XG4gIC0tcGFkZGluZy1lbmQ6IDhweDtcbiAgLS1wYWRkaW5nLXRvcDogMjBweDtcbiAgLS1wYWRkaW5nLWJvdHRvbTogMjBweDtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWxpc3Qge1xuICBwYWRkaW5nOiAyMHB4IDA7XG59XG5cbmlvbi1tZW51Lm1kIGlvbi1ub3RlIHtcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWxpc3QtaGVhZGVyLFxuaW9uLW1lbnUubWQgaW9uLW5vdGUge1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG59XG5cbmlvbi1tZW51Lm1kIGlvbi1saXN0I2luYm94LWxpc3Qge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLXN0ZXAtMTUwLCAjZDdkOGRhKTtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWxpc3QjaW5ib3gtbGlzdCBpb24tbGlzdC1oZWFkZXIge1xuICBmb250LXNpemU6IDIycHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG5cbiAgbWluLWhlaWdodDogMjBweDtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWxpc3QjbGFiZWxzLWxpc3QgaW9uLWxpc3QtaGVhZGVyIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuXG4gIG1hcmdpbi1ib3R0b206IDE4cHg7XG5cbiAgY29sb3I6ICM3NTc1NzU7XG5cbiAgbWluLWhlaWdodDogMjZweDtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWl0ZW0ge1xuICAtLXBhZGRpbmctc3RhcnQ6IDEwcHg7XG4gIC0tcGFkZGluZy1lbmQ6IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWl0ZW0uc2VsZWN0ZWQge1xuICAtLWJhY2tncm91bmQ6IHJnYmEodmFyKC0taW9uLWNvbG9yLXByaW1hcnktcmdiKSwgMC4xNCk7XG59XG5cbmlvbi1tZW51Lm1kIGlvbi1pdGVtLnNlbGVjdGVkIGlvbi1pY29uIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWl0ZW0gaW9uLWljb24ge1xuICBjb2xvcjogIzYxNmU3ZTtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWl0ZW0gaW9uLWxhYmVsIHtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuaW9uLW1lbnUuaW9zIGlvbi1jb250ZW50IHtcbiAgLS1wYWRkaW5nLWJvdHRvbTogMjBweDtcbn1cblxuaW9uLW1lbnUuaW9zIGlvbi1saXN0IHtcbiAgcGFkZGluZzogMjBweCAwIDAgMDtcbn1cblxuaW9uLW1lbnUuaW9zIGlvbi1ub3RlIHtcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5cbmlvbi1tZW51LmlvcyBpb24taXRlbSB7XG4gIC0tcGFkZGluZy1zdGFydDogMTZweDtcbiAgLS1wYWRkaW5nLWVuZDogMTZweDtcbiAgLS1taW4taGVpZ2h0OiA1MHB4O1xufVxuXG5pb24tbWVudS5pb3MgaW9uLWl0ZW0uc2VsZWN0ZWQgaW9uLWljb24ge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xufVxuXG5pb24tbWVudS5pb3MgaW9uLWl0ZW0gaW9uLWljb24ge1xuICBmb250LXNpemU6IDI0cHg7XG4gIGNvbG9yOiAjNzM4NDlhO1xufVxuXG5pb24tbWVudS5pb3MgaW9uLWxpc3QjbGFiZWxzLWxpc3QgaW9uLWxpc3QtaGVhZGVyIHtcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xufVxuXG5pb24tbWVudS5pb3MgaW9uLWxpc3QtaGVhZGVyLFxuaW9uLW1lbnUuaW9zIGlvbi1ub3RlIHtcbiAgcGFkZGluZy1sZWZ0OiAxNnB4O1xuICBwYWRkaW5nLXJpZ2h0OiAxNnB4O1xufVxuXG5pb24tbWVudS5pb3MgaW9uLW5vdGUge1xuICBtYXJnaW4tYm90dG9tOiA4cHg7XG59XG5cbmlvbi1ub3RlIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBmb250LXNpemU6IDE2cHg7XG5cbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0tc2hhZGUpO1xufVxuXG5pb24taXRlbS5zZWxlY3RlZCB7XG4gIC0tY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbn0iXX0= */";

/***/ }),

/***/ 39470:
/*!**************************************************************!*\
  !*** ./src/app/components/bar/bar.component.scss?ngResource ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJiYXIuY29tcG9uZW50LnNjc3MifQ== */";

/***/ }),

/***/ 91721:
/*!******************************************************************************!*\
  !*** ./src/app/components/cookies-law/cookies-law.component.scss?ngResource ***!
  \******************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb29raWVzLWxhdy5jb21wb25lbnQuc2NzcyJ9 */";

/***/ }),

/***/ 50168:
/*!**********************************************************************!*\
  !*** ./src/app/components/scatter/scatter.component.scss?ngResource ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzY2F0dGVyLmNvbXBvbmVudC5zY3NzIn0= */";

/***/ }),

/***/ 93462:
/*!*****************************************************************************************************!*\
  !*** ./src/app/modules/dynamic-form/components/dynamic-form/dynamic-form.component.scss?ngResource ***!
  \*****************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = ".errorMessage {\n  color: red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImR5bmFtaWMtZm9ybS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFVBQUE7QUFDSiIsImZpbGUiOiJkeW5hbWljLWZvcm0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXJyb3JNZXNzYWdlIHtcbiAgICBjb2xvcjogcmVkO1xufSJdfQ== */";

/***/ }),

/***/ 71391:
/*!***************************************************************************************************!*\
  !*** ./src/app/modules/dynamic-form/components/email-field/email-field.component.scss?ngResource ***!
  \***************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = ".question {\n  display: flex;\n  border-radius: 1em;\n  box-shadow: 2px 2px #f5f5dc;\n  border: solid #e1e2e6 1px;\n  flex: 1 1 0%;\n  flex-direction: inherit;\n  align-items: inherit;\n  align-self: stretch;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  box-sizing: border-box;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVtYWlsLWZpZWxkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLGtCQUFBO0VBQ0EsMkJBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtFQUNBLG9CQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7QUFDSiIsImZpbGUiOiJlbWFpbC1maWVsZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5xdWVzdGlvbntcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGJvcmRlci1yYWRpdXM6IDFlbTtcbiAgICBib3gtc2hhZG93OiAycHggMnB4ICNmNWY1ZGM7XG4gICAgYm9yZGVyOiBzb2xpZCAjZTFlMmU2IDFweDtcbiAgICBmbGV4OiAxIDEgMCU7XG4gICAgZmxleC1kaXJlY3Rpb246IGluaGVyaXQ7XG4gICAgYWxpZ24taXRlbXM6IGluaGVyaXQ7XG4gICAgYWxpZ24tc2VsZjogc3RyZXRjaDtcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59Il19 */";

/***/ }),

/***/ 72095:
/*!********************************************************************************************************************!*\
  !*** ./src/app/modules/dynamic-form/components/formFields/code-generator/code-generator.component.scss?ngResource ***!
  \********************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb2RlLWdlbmVyYXRvci5jb21wb25lbnQuc2NzcyJ9 */";

/***/ }),

/***/ 28975:
/*!*********************************************************************************************************!*\
  !*** ./src/app/modules/dynamic-form/components/password-field/password-field.component.scss?ngResource ***!
  \*********************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = ".question {\n  display: flex;\n  border-radius: 1em;\n  box-shadow: 2px 2px #f5f5dc;\n  border: solid #e1e2e6 1px;\n  flex: 1 1 0%;\n  flex-direction: inherit;\n  align-items: inherit;\n  align-self: stretch;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  box-sizing: border-box;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhc3N3b3JkLWZpZWxkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLGtCQUFBO0VBQ0EsMkJBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtFQUNBLG9CQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7QUFDSiIsImZpbGUiOiJwYXNzd29yZC1maWVsZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5xdWVzdGlvbntcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGJvcmRlci1yYWRpdXM6IDFlbTtcbiAgICBib3gtc2hhZG93OiAycHggMnB4ICNmNWY1ZGM7XG4gICAgYm9yZGVyOiBzb2xpZCAjZTFlMmU2IDFweDtcbiAgICBmbGV4OiAxIDEgMCU7XG4gICAgZmxleC1kaXJlY3Rpb246IGluaGVyaXQ7XG4gICAgYWxpZ24taXRlbXM6IGluaGVyaXQ7XG4gICAgYWxpZ24tc2VsZjogc3RyZXRjaDtcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59Il19 */";

/***/ }),

/***/ 27498:
/*!***************************************************************************************************************************!*\
  !*** ./src/app/modules/dynamic-form/components/question-form-component/question-form-component.component.scss?ngResource ***!
  \***************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "p.switchText {\n  font-style: oblique;\n  background-color: #ece8e8;\n  width: -moz-fit-content;\n  width: fit-content;\n  border-radius: 16px;\n}\n\n.errorMessage {\n  color: red;\n}\n\nlabel, input, select, textarea {\n  font-family: cursive;\n  font-weight: bold;\n  line-height: normal;\n  background-color: cadetblue;\n  color: antiquewhite;\n}\n\ninput, select, textarea {\n  font-family: cursive;\n  font-weight: bold;\n  line-height: normal;\n  color: midnightblue;\n}\n\nion-textarea {\n  min-height: 2em;\n}\n\n.question {\n  display: flex;\n  border-radius: 1em;\n  box-shadow: 2px 2px #f5f5dc;\n  border: solid #e1e2e6 1px;\n  flex: 1 1 0%;\n  flex-direction: inherit;\n  align-items: inherit;\n  align-self: stretch;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  box-sizing: border-box;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInF1ZXN0aW9uLWZvcm0tY29tcG9uZW50LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksbUJBQUE7RUFDQSx5QkFBQTtFQUNBLHVCQUFBO0VBQUEsa0JBQUE7RUFDQSxtQkFBQTtBQUNKOztBQUVBO0VBQ0ksVUFBQTtBQUNKOztBQUVBO0VBQ0ksb0JBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsMkJBQUE7RUFDQSxtQkFBQTtBQUNKOztBQUVDO0VBQ0csb0JBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QUFDSjs7QUFFQTtFQUVJLGVBQUE7QUFBSjs7QUFHQTtFQUNJLGFBQUE7RUFDQSxrQkFBQTtFQUNBLDJCQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7RUFDQSxvQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0FBQUoiLCJmaWxlIjoicXVlc3Rpb24tZm9ybS1jb21wb25lbnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJwLnN3aXRjaFRleHQge1xuICAgIGZvbnQtc3R5bGU6IG9ibGlxdWU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VjZThlODtcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XG4gICAgYm9yZGVyLXJhZGl1czoxNnB4O1xufVxuXG4uZXJyb3JNZXNzYWdlIHtcbiAgICBjb2xvcjogcmVkO1xufVxuXG5sYWJlbCwgaW5wdXQsIHNlbGVjdCwgdGV4dGFyZWEge1xuICAgIGZvbnQtZmFtaWx5OiBjdXJzaXZlO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGxpbmUtaGVpZ2h0OiBub3JtYWw7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogY2FkZXRibHVlO1xuICAgIGNvbG9yOiBhbnRpcXVld2hpdGU7XG59XG5cbiBpbnB1dCwgc2VsZWN0LCB0ZXh0YXJlYSB7XG4gICAgZm9udC1mYW1pbHk6IGN1cnNpdmU7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcbiAgICBjb2xvcjogbWlkbmlnaHRibHVlO1xufVxuXG5pb24tdGV4dGFyZWEge1xuICAgIC8vYm9yZGVyOiBzb2xpZCBibGFjayAxcHg7XG4gICAgbWluLWhlaWdodDogMmVtO1xufVxuXG4ucXVlc3Rpb257XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBib3JkZXItcmFkaXVzOiAxZW07XG4gICAgYm94LXNoYWRvdzogMnB4IDJweCAjZjVmNWRjO1xuICAgIGJvcmRlcjogc29saWQgI2UxZTJlNiAxcHg7XG4gICAgZmxleDogMSAxIDAlO1xuICAgIGZsZXgtZGlyZWN0aW9uOiBpbmhlcml0O1xuICAgIGFsaWduLWl0ZW1zOiBpbmhlcml0O1xuICAgIGFsaWduLXNlbGY6IHN0cmV0Y2g7XG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufSJdfQ== */";

/***/ }),

/***/ 84964:
/*!*****************************************************************************!*\
  !*** ./src/app/modules/item/components/item/item.component.scss?ngResource ***!
  \*****************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "p.note {\n  font-style: italic;\n  color: aliceblue;\n  background-color: lightgray;\n  font-size: 0.7em;\n  top: 17px;\n  position: relative;\n}\n\narticle {\n  display: flex;\n  border-radius: 1em;\n  background-color: #f3f4f7;\n  border: solid #f4f5f8 1px;\n  flex: 1 1 0%;\n  flex-direction: inherit;\n  align-items: inherit;\n  align-self: stretch;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  box-sizing: border-box;\n}\n\nh1.itemTitle {\n  width: 5em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIml0ZW0uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsMkJBQUE7RUFDQSxnQkFBQTtFQUNBLFNBQUE7RUFDQSxrQkFBQTtBQUNKOztBQUVBO0VBQ0ksYUFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtFQUNBLG9CQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7QUFDSjs7QUFFRTtFQUNFLFVBQUE7QUFDSiIsImZpbGUiOiJpdGVtLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsicC5ub3RlIHtcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XG4gICAgY29sb3I6IGFsaWNlYmx1ZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyYXk7XG4gICAgZm9udC1zaXplOiAwLjdlbTtcbiAgICB0b3A6IDE3cHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG5hcnRpY2xlIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGJvcmRlci1yYWRpdXM6IDFlbTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMjI1ZGVnIDIyJSA5NiUpO1xuICAgIGJvcmRlcjogc29saWQgI2Y0ZjVmOCAxcHg7XG4gICAgZmxleDogMSAxIDAlO1xuICAgIGZsZXgtZGlyZWN0aW9uOiBpbmhlcml0O1xuICAgIGFsaWduLWl0ZW1zOiBpbmhlcml0O1xuICAgIGFsaWduLXNlbGY6IHN0cmV0Y2g7XG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICB9XG5cbiAgaDEuaXRlbVRpdGxlIHtcbiAgICB3aWR0aDogNWVtO1xufSJdfQ== */";

/***/ }),

/***/ 53542:
/*!*********************************************************************************************!*\
  !*** ./src/app/modules/item/components/items-filter/items-filter.component.scss?ngResource ***!
  \*********************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpdGVtcy1maWx0ZXIuY29tcG9uZW50LnNjc3MifQ== */";

/***/ }),

/***/ 65825:
/*!*****************************************************************************************!*\
  !*** ./src/app/modules/item/components/items-list/items-list.component.scss?ngResource ***!
  \*****************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = ".calm {\n  color: green;\n}\n\n.danger {\n  background-color: red;\n}\n\np.counter {\n  font-size: xx-small;\n  width: -moz-fit-content;\n  width: fit-content;\n  font-style: oblique;\n}\n\np.value2 {\n  left: -6em;\n  position: relative;\n  top: 0em;\n  width: 16em;\n  /* left: 4em; */\n}\n\np.itemTitle {\n  font-weight: bold;\n  font-style: oblique;\n}\n\n.spinner {\n  margin: 100px auto;\n  width: 40px;\n  height: 40px;\n  position: relative;\n  text-align: center;\n  animation: sk-rotate 2s infinite linear;\n}\n\n.dot1,\n.dot2 {\n  width: 60%;\n  height: 60%;\n  display: inline-block;\n  position: absolute;\n  top: 0;\n  background-color: #333;\n  border-radius: 100%;\n  animation: sk-bounce 2s infinite ease-in-out;\n}\n\n.dot2 {\n  top: auto;\n  bottom: 0;\n  animation-delay: -1s;\n}\n\n@keyframes sk-rotate {\n  100% {\n    transform: rotate(360deg);\n    -webkit-transform: rotate(360deg);\n  }\n}\n\n@keyframes sk-bounce {\n  0%, 100% {\n    transform: scale(0);\n    -webkit-transform: scale(0);\n  }\n  50% {\n    transform: scale(1);\n    -webkit-transform: scale(1);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIml0ZW1zLWxpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0FBQ0Y7O0FBRUE7RUFDRSxxQkFBQTtBQUNGOztBQUVBO0VBQ0UsbUJBQUE7RUFFQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUFDRjs7QUFFQTtFQUNFLFVBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBQUNGOztBQUVBO0VBQ0UsaUJBQUE7RUFDQSxtQkFBQTtBQUNGOztBQUVBO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFHQSx1Q0FBQTtBQUFGOztBQUdBOztFQUVFLFVBQUE7RUFDQSxXQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBR0EsNENBQUE7QUFERjs7QUFJQTtFQUNFLFNBQUE7RUFDQSxTQUFBO0VBRUEsb0JBQUE7QUFERjs7QUFVQTtFQUNFO0lBQ0UseUJBQUE7SUFDQSxpQ0FBQTtFQUZGO0FBQ0Y7O0FBZ0JBO0VBQ0U7SUFFRSxtQkFBQTtJQUNBLDJCQUFBO0VBUEY7RUFVQTtJQUNFLG1CQUFBO0lBQ0EsMkJBQUE7RUFSRjtBQUNGIiwiZmlsZSI6Iml0ZW1zLWxpc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FsbSB7XG4gIGNvbG9yOiBncmVlbjtcbn1cblxuLmRhbmdlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbn1cblxucC5jb3VudGVyIHtcbiAgZm9udC1zaXplOiB4eC1zbWFsbDtcbiAgd2lkdGg6IC13ZWJraXQtZml0LWNvbnRlbnQ7XG4gIHdpZHRoOiAtbW96LWZpdC1jb250ZW50O1xuICB3aWR0aDogZml0LWNvbnRlbnQ7XG4gIGZvbnQtc3R5bGU6IG9ibGlxdWU7XG59XG5cbnAudmFsdWUyIHtcbiAgbGVmdDogLTZlbTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDBlbTtcbiAgd2lkdGg6IDE2ZW07XG4gIC8qIGxlZnQ6IDRlbTsgKi9cbn1cblxucC5pdGVtVGl0bGUge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zdHlsZTogb2JsaXF1ZTtcbn1cblxuLnNwaW5uZXIge1xuICBtYXJnaW46IDEwMHB4IGF1dG87XG4gIHdpZHRoOiA0MHB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuXG4gIC13ZWJraXQtYW5pbWF0aW9uOiBzay1yb3RhdGUgMnMgaW5maW5pdGUgbGluZWFyO1xuICBhbmltYXRpb246IHNrLXJvdGF0ZSAycyBpbmZpbml0ZSBsaW5lYXI7XG59XG5cbi5kb3QxLFxuLmRvdDIge1xuICB3aWR0aDogNjAlO1xuICBoZWlnaHQ6IDYwJTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMzMztcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcblxuICAtd2Via2l0LWFuaW1hdGlvbjogc2stYm91bmNlIDJzIGluZmluaXRlIGVhc2UtaW4tb3V0O1xuICBhbmltYXRpb246IHNrLWJvdW5jZSAycyBpbmZpbml0ZSBlYXNlLWluLW91dDtcbn1cblxuLmRvdDIge1xuICB0b3A6IGF1dG87XG4gIGJvdHRvbTogMDtcbiAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IC0xcztcbiAgYW5pbWF0aW9uLWRlbGF5OiAtMXM7XG59XG5cbkAtd2Via2l0LWtleWZyYW1lcyBzay1yb3RhdGUge1xuICAxMDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4gIH1cbn1cblxuQGtleWZyYW1lcyBzay1yb3RhdGUge1xuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbiAgfVxufVxuXG5ALXdlYmtpdC1rZXlmcmFtZXMgc2stYm91bmNlIHtcbiAgMCUsXG4gIDEwMCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwKTtcbiAgfVxuXG4gIDUwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEpO1xuICB9XG59XG5cbkBrZXlmcmFtZXMgc2stYm91bmNlIHtcbiAgMCUsXG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDApO1xuICB9XG5cbiAgNTAlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgfVxufVxuIl19 */";

/***/ }),

/***/ 97784:
/*!**********************************************************************************!*\
  !*** ./src/app/modules/item/components/page-item/page-item.page.scss?ngResource ***!
  \**********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = ".note {\n  font-style: italic;\n  background-color: lightgray;\n  font-size: 0.7em;\n  top: 17px;\n  position: relative;\n}\n\np.itemTitle {\n  font-weight: bold;\n  font-style: oblique;\n}\n\nion-fab.fab-horizontal-end.fab-vertical-bottom.hydrated {\n  top: 0px;\n}\n\np.note {\n  font-style: italic;\n  font-size: large;\n}\n\np.value3 {\n  position: relative;\n}\n\nspan.value2 {\n  position: absolute;\n  top: 3em;\n}\n\nspan.value4 {\n  position: relative;\n}\n\np.note {\n  width: -moz-fit-content;\n  width: fit-content;\n}\n\ndiv.input-wrapper {\n  padding-left: unset;\n  padding-right: unset;\n  padding-inline-start: 16px;\n  padding-inline-end: 16px;\n}\n\narticle {\n  display: flex;\n  border-radius: 1em;\n  box-shadow: 2px 2px #f5f5dc;\n  border: solid #f4f5f8 1px;\n  flex: 1 1 0%;\n  flex-direction: inherit;\n  align-items: inherit;\n  align-self: stretch;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  box-sizing: border-box;\n}\n\np.value3 {\n  font-size: 10px;\n  top: -0.35em;\n  right: -1em;\n}\n\n.value2 {\n  position: relative;\n  left: 1em;\n  top: 0.5em;\n}\n\napp-show-value.value2 {\n  position: relative;\n  left: 11em;\n  top: 3.5em;\n  font-size: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2UtaXRlbS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtFQUNBLDJCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7QUFDSjs7QUFFQTtFQUNJLGlCQUFBO0VBQ0EsbUJBQUE7QUFDSjs7QUFFQTtFQUNJLFFBQUE7QUFDSjs7QUFFQTtFQUNJLGtCQUFBO0VBQ0EsZ0JBQUE7QUFDSjs7QUFFQTtFQUNJLGtCQUFBO0FBQ0o7O0FBRUE7RUFDSSxrQkFBQTtFQUNBLFFBQUE7QUFDSjs7QUFFQTtFQUNJLGtCQUFBO0FBQ0o7O0FBRUE7RUFDSSx1QkFBQTtFQUFBLGtCQUFBO0FBQ0o7O0FBRUE7RUFDSSxtQkFBQTtFQUNBLG9CQUFBO0VBRUEsMEJBQUE7RUFFQSx3QkFBQTtBQUNKOztBQUVBO0VBQ0ksYUFBQTtFQUNBLGtCQUFBO0VBQ0EsMkJBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtFQUNBLG9CQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7QUFDSjs7QUFFQTtFQUNJLGVBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQUNKOztBQUNBO0VBQ0ksa0JBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtBQUVKOztBQUVBO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7QUFDRiIsImZpbGUiOiJwYWdlLWl0ZW0ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5vdGUge1xuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyYXk7XG4gICAgZm9udC1zaXplOiAwLjdlbTtcbiAgICB0b3A6IDE3cHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG5wLml0ZW1UaXRsZSB7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgZm9udC1zdHlsZTogb2JsaXF1ZTtcbn1cblxuaW9uLWZhYi5mYWItaG9yaXpvbnRhbC1lbmQuZmFiLXZlcnRpY2FsLWJvdHRvbS5oeWRyYXRlZCB7XG4gICAgdG9wOiAwcHg7XG59XG5cbnAubm90ZSB7XG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xuICAgIGZvbnQtc2l6ZTogbGFyZ2U7XG59XG5cbnAudmFsdWUzIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbnNwYW4udmFsdWUyIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAzZW07XG59XG5cbnNwYW4udmFsdWU0IHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbnAubm90ZSB7XG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xufVxuXG5kaXYuaW5wdXQtd3JhcHBlciB7XG4gICAgcGFkZGluZy1sZWZ0OiB1bnNldDtcbiAgICBwYWRkaW5nLXJpZ2h0OiB1bnNldDtcbiAgICAtd2Via2l0LXBhZGRpbmctc3RhcnQ6IDE2cHg7XG4gICAgcGFkZGluZy1pbmxpbmUtc3RhcnQ6IDE2cHg7XG4gICAgLXdlYmtpdC1wYWRkaW5nLWVuZDogMTZweDtcbiAgICBwYWRkaW5nLWlubGluZS1lbmQ6IDE2cHg7XG59XG5cbmFydGljbGV7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBib3JkZXItcmFkaXVzOiAxZW07XG4gICAgYm94LXNoYWRvdzogMnB4IDJweCAjZjVmNWRjO1xuICAgIGJvcmRlcjogc29saWQgI2Y0ZjVmOCAxcHg7XG4gICAgZmxleDogMSAxIDAlO1xuICAgIGZsZXgtZGlyZWN0aW9uOiBpbmhlcml0O1xuICAgIGFsaWduLWl0ZW1zOiBpbmhlcml0O1xuICAgIGFsaWduLXNlbGY6IHN0cmV0Y2g7XG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG5wLnZhbHVlMyB7XG4gICAgZm9udC1zaXplOiAxMHB4O1xuICAgIHRvcDogLTAuMzVlbTtcbiAgICByaWdodDogLTFlbTtcbn1cbi52YWx1ZTJ7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGxlZnQ6MWVtO1xuICAgIHRvcDowLjVlbTtcbiAgICA7XG59XG5cbmFwcC1zaG93LXZhbHVlLnZhbHVlMiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbGVmdDogMTFlbTtcbiAgdG9wOiAzLjVlbTtcbiAgZm9udC1zaXplOiAxMHB4O1xufSJdfQ== */";

/***/ }),

/***/ 29294:
/*!**********************************************************************************************!*\
  !*** ./src/app/modules/item/components/page-items-list/page-items-list.page.scss?ngResource ***!
  \**********************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = ".calm {\n  color: green;\n}\n\n.danger {\n  background-color: red;\n}\n\n.addItem {\n  position: fixed;\n  bottom: 0em;\n}\n\n.counter {\n  font-size: xx-small;\n  font-style: oblique;\n  /* background-color: #1976d2; */\n  border-radius: 10px;\n  width: -moz-fit-content;\n  /* width: fit-content; */\n}\n\n.container {\n  align-items: flex-start;\n  overflow: scroll;\n}\n\n.spinner {\n  margin: 100px auto;\n  width: 40px;\n  height: 40px;\n  position: relative;\n  text-align: center;\n  animation: sk-rotate 2s infinite linear;\n}\n\n.fab-button {\n  position: sticky;\n  top: 4rem;\n  background-color: #1976d2;\n  border: 0;\n  border-radius: 30px;\n  width: 37px;\n  height: 37px;\n  color: #fff;\n  /* bottom: -143em; */\n  left: 2em;\n  line-height: -167px;\n  text-align: center;\n}\n\n.dot1,\n.dot2 {\n  width: 60%;\n  height: 60%;\n  display: inline-block;\n  position: absolute;\n  top: 0;\n  background-color: #333;\n  border-radius: 100%;\n  animation: sk-bounce 2s infinite ease-in-out;\n}\n\n.dot2 {\n  top: auto;\n  bottom: 0;\n  animation-delay: -1s;\n}\n\n@keyframes sk-rotate {\n  100% {\n    transform: rotate(360deg);\n    -webkit-transform: rotate(360deg);\n  }\n}\n\n@keyframes sk-bounce {\n  0%, 100% {\n    transform: scale(0);\n    -webkit-transform: scale(0);\n  }\n  50% {\n    transform: scale(1);\n    -webkit-transform: scale(1);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2UtaXRlbXMtbGlzdC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0FBQ0o7O0FBRUE7RUFDSSxxQkFBQTtBQUNKOztBQUVBO0VBQ0ksZUFBQTtFQUNBLFdBQUE7QUFDSjs7QUFFQTtFQUNJLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSwrQkFBQTtFQUNBLG1CQUFBO0VBRUEsdUJBQUE7RUFDQSx3QkFBQTtBQUNKOztBQUVBO0VBQ0ksdUJBQUE7RUFDQSxnQkFBQTtBQUNKOztBQUVBO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFHQSx1Q0FBQTtBQUFKOztBQUdBO0VBRUksZ0JBQUE7RUFDQSxTQUFBO0VBQ0EseUJBQUE7RUFDQSxTQUFBO0VBRUEsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxvQkFBQTtFQUVBLFNBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FBRko7O0FBS0E7O0VBRUksVUFBQTtFQUNBLFdBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFHQSw0Q0FBQTtBQUhKOztBQU1BO0VBQ0ksU0FBQTtFQUNBLFNBQUE7RUFFQSxvQkFBQTtBQUhKOztBQVlBO0VBQ0k7SUFDSSx5QkFBQTtJQUNBLGlDQUFBO0VBSk47QUFDRjs7QUFtQkE7RUFFSTtJQUVJLG1CQUFBO0lBQ0EsMkJBQUE7RUFYTjtFQWNFO0lBQ0ksbUJBQUE7SUFDQSwyQkFBQTtFQVpOO0FBQ0YiLCJmaWxlIjoicGFnZS1pdGVtcy1saXN0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYWxtIHtcbiAgICBjb2xvcjogZ3JlZW5cbn1cblxuLmRhbmdlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkXG59XG5cbi5hZGRJdGVtIHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgYm90dG9tOiAwZW07XG59XG5cbi5jb3VudGVyIHtcbiAgICBmb250LXNpemU6IHh4LXNtYWxsO1xuICAgIGZvbnQtc3R5bGU6IG9ibGlxdWU7XG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogIzE5NzZkMjsgKi9cbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIHdpZHRoOiAtd2Via2l0LWZpdC1jb250ZW50O1xuICAgIHdpZHRoOiAtbW96LWZpdC1jb250ZW50O1xuICAgIC8qIHdpZHRoOiBmaXQtY29udGVudDsgKi9cbn1cblxuLmNvbnRhaW5lciB7XG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gICAgb3ZlcmZsb3c6IHNjcm9sbDtcbn1cblxuLnNwaW5uZXIge1xuICAgIG1hcmdpbjogMTAwcHggYXV0bztcbiAgICB3aWR0aDogNDBweDtcbiAgICBoZWlnaHQ6IDQwcHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcblxuICAgIC13ZWJraXQtYW5pbWF0aW9uOiBzay1yb3RhdGUgMi4wcyBpbmZpbml0ZSBsaW5lYXI7XG4gICAgYW5pbWF0aW9uOiBzay1yb3RhdGUgMi4wcyBpbmZpbml0ZSBsaW5lYXI7XG59XG5cbi5mYWItYnV0dG9uIHtcbiAgICBwb3NpdGlvbjogLXdlYmtpdC1zdGlja3k7XG4gICAgcG9zaXRpb246IHN0aWNreTtcbiAgICB0b3A6IDRyZW07XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzE5NzZkMjtcbiAgICBib3JkZXI6IDA7XG4gICAgLy9wb3NpdGlvbjogZml4ZWQ7XG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgICB3aWR0aDogMzdweDtcbiAgICBoZWlnaHQ6IDM3cHg7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgLyogYm90dG9tOiAtMTQzZW07ICovXG4gICAgLy8gdG9wOiAwO1xuICAgIGxlZnQ6IDJlbTtcbiAgICBsaW5lLWhlaWdodDogLTE2N3B4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmRvdDEsXG4uZG90MiB7XG4gICAgd2lkdGg6IDYwJTtcbiAgICBoZWlnaHQ6IDYwJTtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XG5cbiAgICAtd2Via2l0LWFuaW1hdGlvbjogc2stYm91bmNlIDIuMHMgaW5maW5pdGUgZWFzZS1pbi1vdXQ7XG4gICAgYW5pbWF0aW9uOiBzay1ib3VuY2UgMi4wcyBpbmZpbml0ZSBlYXNlLWluLW91dDtcbn1cblxuLmRvdDIge1xuICAgIHRvcDogYXV0bztcbiAgICBib3R0b206IDA7XG4gICAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IC0xLjBzO1xuICAgIGFuaW1hdGlvbi1kZWxheTogLTEuMHM7XG59XG5cbkAtd2Via2l0LWtleWZyYW1lcyBzay1yb3RhdGUge1xuICAgIDEwMCUge1xuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZylcbiAgICB9XG59XG5cbkBrZXlmcmFtZXMgc2stcm90YXRlIHtcbiAgICAxMDAlIHtcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpXG4gICAgfVxufVxuXG5ALXdlYmtpdC1rZXlmcmFtZXMgc2stYm91bmNlIHtcblxuICAgIDAlLFxuICAgIDEwMCUge1xuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMC4wKVxuICAgIH1cblxuICAgIDUwJSB7XG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLjApXG4gICAgfVxufVxuXG5Aa2V5ZnJhbWVzIHNrLWJvdW5jZSB7XG5cbiAgICAwJSxcbiAgICAxMDAlIHtcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjApO1xuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMC4wKTtcbiAgICB9XG5cbiAgICA1MCUge1xuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMCk7XG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLjApO1xuICAgIH1cbn0iXX0= */";

/***/ }),

/***/ 85015:
/*!*************************************************************************************************!*\
  !*** ./src/app/modules/item/components/selector-items/selector-items.component.scss?ngResource ***!
  \*************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzZWxlY3Rvci1pdGVtcy5jb21wb25lbnQuc2NzcyJ9 */";

/***/ }),

/***/ 64670:
/*!*****************************************************************************************!*\
  !*** ./src/app/modules/item/components/show-value/show-value.component.scss?ngResource ***!
  \*****************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzaG93LXZhbHVlLmNvbXBvbmVudC5zY3NzIn0= */";

/***/ }),

/***/ 66135:
/*!***********************************************************************************!*\
  !*** ./src/app/modules/item/pages/filter-popup/filter-popup.page.scss?ngResource ***!
  \***********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmaWx0ZXItcG9wdXAucGFnZS5zY3NzIn0= */";

/***/ }),

/***/ 96790:
/*!***************************************************************************************!*\
  !*** ./src/app/modules/item/pages/selector-items/selector-items.page.scss?ngResource ***!
  \***************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "input.native-input.sc-ion-input-md {\n  position: relative;\n  top: -3em;\n  left: 9em;\n  border: 1px solid black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlbGVjdG9yLWl0ZW1zLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFNBQUE7RUFDQSx1QkFBQTtBQUNKIiwiZmlsZSI6InNlbGVjdG9yLWl0ZW1zLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlucHV0Lm5hdGl2ZS1pbnB1dC5zYy1pb24taW5wdXQtbWQge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0b3A6IC0zZW07XG4gICAgbGVmdDogOWVtO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrXG59Il19 */";

/***/ }),

/***/ 90989:
/*!*****************************************************************************************************!*\
  !*** ./src/app/modules/user/components/login-definitivo/login-definitivo.component.scss?ngResource ***!
  \*****************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = ".parent {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.loginImage {\n  size: 20%;\n  width: 20%;\n  margin: auto;\n}\n\n.login {\n  width: 60%;\n}\n\nmain.inner-scroll.scroll-y {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\nbackground-color {\n  /* Chrome10+,Safari5.1+ */\n  /* Opera 11.10+ */\n  /* IE10+ */\n  background: linear-gradient(135deg, #EA5C54 0%, #bb6dec 100%);\n  /* W3C */\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLWRlZmluaXRpdm8uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQUNKOztBQUVBO0VBQ0ksU0FBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0FBQ0o7O0FBQ0E7RUFDSSxVQUFBO0FBRUo7O0FBQ0E7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQUVKOztBQUNBO0VBRTRFLHlCQUFBO0VBQ0wsaUJBQUE7RUFDQyxVQUFBO0VBQ3BFLDZEQUFBO0VBQWdFLFFBQUE7QUFLcEUiLCJmaWxlIjoibG9naW4tZGVmaW5pdGl2by5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wYXJlbnR7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4ubG9naW5JbWFnZSB7XG4gICAgc2l6ZTogMjAlO1xuICAgIHdpZHRoOiAyMCU7XG4gICAgbWFyZ2luOiBhdXRvO1xufVxuLmxvZ2lue1xuICAgIHdpZHRoOjYwJVxufVxuXG5tYWluLmlubmVyLXNjcm9sbC5zY3JvbGwteSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG5iYWNrZ3JvdW5kLWNvbG9ye1xuICAgIC8vICAtLWJhY2tncm91bmQ6IHVybCgvYXNzZXRzL2ltYWdlcy9nZW5pYWxsb3R0by5qcGcpIDUwJSA1MCUvNjAwcHggNjAwcHggbm8tcmVwZWF0O1xuICAgIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KC00NWRlZywgICNFQTVDNTQgIDAlLCNiYjZkZWMgMTAwJSk7IC8qIENocm9tZTEwKyxTYWZhcmk1LjErICovXG4gICAgYmFja2dyb3VuZDogLW8tbGluZWFyLWdyYWRpZW50KC00NWRlZywgICNFQTVDNTQgIDAlLCNiYjZkZWMgMTAwJSk7IC8qIE9wZXJhIDExLjEwKyAqL1xuICAgIGJhY2tncm91bmQ6IC1tcy1saW5lYXItZ3JhZGllbnQoLTQ1ZGVnLCAgI0VBNUM1NCAgMCUsI2JiNmRlYyAxMDAlKTsgLyogSUUxMCsgKi9cbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAgI0VBNUM1NCAgMCUsI2JiNmRlYyAxMDAlKTsgLyogVzNDICovXG4gICAgICBcbiAgfSJdfQ== */";

/***/ }),

/***/ 74450:
/*!*******************************************************************************!*\
  !*** ./src/app/modules/user/components/login/login.component.scss?ngResource ***!
  \*******************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = ".background-image {\n  --background: url(/assets/images/loginImage.jpg) 50% 50%/300px 300px no-repeat ;\n}\n\n.login {\n  position: relative;\n  top: 72.5%;\n  width: 52%;\n  left: 19%;\n}\n\n.loginButtons {\n  position: absolute;\n  top: 90%;\n  padding: 0.2rem;\n}\n\n.parent {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.loginImage {\n  size: 50%;\n  width: 50%;\n  position: absolute;\n  top: 33%;\n  margin: auto;\n  left: 23%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksK0VBQUE7QUFDSjs7QUFHQztFQUNHLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0FBQUo7O0FBRUE7RUFDSSxrQkFBQTtFQUNBLFFBQUE7RUFHQSxlQUFBO0FBREo7O0FBS0E7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQUZKOztBQUtBO0VBQ0ksU0FBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxZQUFBO0VBQ0EsU0FBQTtBQUZKIiwiZmlsZSI6ImxvZ2luLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJhY2tncm91bmQtaW1hZ2V7XG4gICAgLS1iYWNrZ3JvdW5kOiB1cmwoL2Fzc2V0cy9pbWFnZXMvbG9naW5JbWFnZS5qcGcpIDUwJSA1MCUvMzAwcHggMzAwcHggbm8tcmVwZWF0ICA7XG4gICAgXG59XG5cbiAubG9naW4ge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0b3A6IDcyLjUlO1xuICAgIHdpZHRoOiA1MiU7XG4gICAgbGVmdDogMTklO1xufSBcbi5sb2dpbkJ1dHRvbnMge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDkwJTtcbiAgICAvL2xlZnQ6NTAlO1xuICAgIC8vanVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgcGFkZGluZzogMC4ycmVtO1xuICAgLy8gbWFyZ2luOiBhdXRvO1xufVxuXG4ucGFyZW50e1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmxvZ2luSW1hZ2Uge1xuICAgIHNpemU6IDUwJTtcbiAgICB3aWR0aDogNTAlO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDMzJTtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgbGVmdDogMjMlO1xufSJdfQ== */";

/***/ }),

/***/ 78516:
/*!*******************************************************************************************!*\
  !*** ./src/app/modules/user/components/logout-user/logout-user.component.scss?ngResource ***!
  \*******************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsb2dvdXQtdXNlci5jb21wb25lbnQuc2NzcyJ9 */";

/***/ }),

/***/ 47104:
/*!*******************************************************************************************!*\
  !*** ./src/app/modules/user/components/sleek-login/sleek-login.component.scss?ngResource ***!
  \*******************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "@import url(https://fonts.googleapis.com/css?family=Open+Sans:100,300,400,700);\n@import url(//netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.css);\nbody, html {\n  height: 100%;\n}\nbody {\n  font-family: \"Open Sans\";\n  font-weight: 100;\n  display: flex;\n  overflow: hidden;\n}\ninput ::-webkit-input-placeholder {\n  color: rgba(255, 255, 255, 0.7);\n}\ninput ::-moz-placeholder {\n  color: rgba(255, 255, 255, 0.7);\n}\ninput :-ms-input-placeholder {\n  color: rgba(255, 255, 255, 0.7);\n}\ninput:focus {\n  outline: 0 transparent solid;\n}\ninput:focus ::-webkit-input-placeholder {\n  color: rgba(0, 0, 0, 0.7);\n}\ninput:focus ::-moz-placeholder {\n  color: rgba(0, 0, 0, 0.7);\n}\ninput:focus :-ms-input-placeholder {\n  color: rgba(0, 0, 0, 0.7);\n}\n.login-form {\n  min-height: 10rem;\n  margin: auto;\n  max-width: 50%;\n  padding: 0.5rem;\n}\n.login-text {\n  color: black;\n  font-size: 1.5rem;\n  margin: 0 auto;\n  max-width: 50%;\n  padding: 0.5rem;\n  text-align: center;\n}\n.login-text .fa-stack-1x {\n  color: black;\n}\n.login-username, .login-password {\n  background: transparent;\n  border: 0 solid;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.5);\n  color: black;\n  display: block;\n  margin: 1rem;\n  padding: 0.5rem;\n  transition: 250ms background ease-in;\n  width: calc(100% - 3rem);\n}\n.login-username:focus, .login-password:focus {\n  background: white;\n  color: black;\n  transition: 250ms background ease-in;\n}\n.login-forgot-pass {\n  bottom: 0;\n  color: white;\n  cursor: pointer;\n  display: block;\n  font-size: 75%;\n  left: 0;\n  opacity: 0.6;\n  padding: 0.5rem;\n  text-align: center;\n  width: 100%;\n}\n.login-forgot-pass:hover .login-forgot-pass:focus {\n  background: white;\n  color: black;\n  transition: 250ms background ease-in;\n}\n.login-new-user {\n  bottom: 1.5rem;\n  color: white;\n  cursor: pointer;\n  display: block;\n  font-size: 75%;\n  left: 0;\n  opacity: 0.6;\n  padding: 0.25rem;\n  min-width: 1px;\n  text-align: center;\n  width: 100%;\n}\n.login-new-user:hover .login-new-user:focus {\n  background: white;\n  color: black;\n  transition: 250ms background ease-in;\n}\n.login-submit {\n  border: 1px solid white;\n  background: transparent;\n  color: white;\n  display: block;\n  margin: 1rem auto;\n  min-width: 1px;\n  padding: 0.25rem;\n  transition: 250ms background ease-in;\n}\n.login-submit:hover, .login-submit:focus {\n  background: white;\n  color: black;\n  transition: 250ms background ease-in;\n}\n[class*=underlay] {\n  left: 25%;\n  min-height: 60%;\n  min-width: 50%;\n  position: fixed;\n  top: 5%;\n}\n.underlay-photo {\n  background: url(\"/assets/images/loginImage.jpg\") 50% 50%/300px 30px no-repeat;\n  background-size: cover;\n  z-index: -1;\n}\n.underlay-black {\n  background: rgba(0, 0, 0, 0.7);\n  z-index: -1;\n}\n@keyframes hue-rotate {\n  from {\n    -webkit-filter: grayscale(30%) hue-rotate(0deg);\n  }\n  to {\n    -webkit-filter: grayscale(30%) hue-rotate(360deg);\n  }\n}\n.error-message {\n  min-height: 2.2rem;\n}\n.error-message ion-label {\n  margin: 2px 0;\n  font-size: 60%;\n  color: #ff6153;\n}\n.error-message .item-inner {\n  border-bottom: 0 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNsZWVrLWxvZ2luLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFRLDhFQUFBO0FBQ0EsOEVBQUE7QUFFUjtFQUNFLFlBQUE7QUFBRjtBQUVBO0VBQ0Usd0JBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtBQUNGO0FBRUU7RUFDRywrQkFBQTtBQUNMO0FBQ0U7RUFDRywrQkFBQTtBQUNMO0FBQ0U7RUFDRywrQkFBQTtBQUNMO0FBQ0U7RUFDRSw0QkFBQTtBQUNKO0FBQUk7RUFDQyx5QkFBQTtBQUVMO0FBQUk7RUFDRyx5QkFBQTtBQUVQO0FBQUk7RUFDRyx5QkFBQTtBQUVQO0FBR0E7RUFHRSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQUZGO0FBSUE7RUFHRSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQUhGO0FBS0U7RUFDRSxZQUFBO0FBSEo7QUFPQTtFQUNFLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLGlEQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLG9DQUFBO0VBQ0Esd0JBQUE7QUFKRjtBQUtFO0VBQ0UsaUJBQUE7RUFDQSxZQUFBO0VBQ0Esb0NBQUE7QUFISjtBQU9BO0VBRUUsU0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7RUFDQSxPQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFFQSxrQkFBQTtFQUVBLFdBQUE7QUFQRjtBQVFFO0VBQ0UsaUJBQUE7RUFDQSxZQUFBO0VBQ0Esb0NBQUE7QUFOSjtBQVNBO0VBRUUsY0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7RUFDQSxPQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUVBLGtCQUFBO0VBRUEsV0FBQTtBQVRGO0FBVUU7RUFDRSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxvQ0FBQTtBQVJKO0FBV0E7RUFDRSx1QkFBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLG9DQUFBO0FBUkY7QUFTRTtFQUNFLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLG9DQUFBO0FBUEo7QUFjQTtFQUNFLFNBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxPQUFBO0FBWEY7QUFhQTtFQUNFLDZFQUFBO0VBQ0Esc0JBQUE7RUFFQSxXQUFBO0FBWEY7QUFhQTtFQUNFLDhCQUFBO0VBQ0EsV0FBQTtBQVZGO0FBYUE7RUFDRTtJQUNFLCtDQUFBO0VBVkY7RUFZQTtJQUNFLGlEQUFBO0VBVkY7QUFDRjtBQWFBO0VBQ0Usa0JBQUE7QUFYRjtBQVlFO0VBQ0ksYUFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0FBVk47QUFZRTtFQUNJLDJCQUFBO0FBVk4iLCJmaWxlIjoic2xlZWstbG9naW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9T3BlbitTYW5zOjEwMCwzMDAsNDAwLDcwMCk7XG5AaW1wb3J0IHVybCgvL25ldGRuYS5ib290c3RyYXBjZG4uY29tL2ZvbnQtYXdlc29tZS80LjAuMy9jc3MvZm9udC1hd2Vzb21lLmNzcyk7XG5cbmJvZHksIGh0bWwge1xuICBoZWlnaHQ6IDEwMCU7XG59XG5ib2R5IHtcbiAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnO1xuICBmb250LXdlaWdodDogMTAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuaW5wdXQge1xuICA6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge1xuICAgICBjb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwwLjcpO1xuICB9XG4gIDo6LW1vei1wbGFjZWhvbGRlciB7XG4gICAgIGNvbG9yOiByZ2JhKDI1NSwyNTUsMjU1LDAuNyk7ICBcbiAgfVxuICA6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHsgIFxuICAgICBjb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwwLjcpOyAgXG4gIH1cbiAgJjpmb2N1cyB7XG4gICAgb3V0bGluZTogMCB0cmFuc3BhcmVudCBzb2xpZDtcbiAgICA6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge1xuICAgICBjb2xvcjogcmdiYSgwLDAsMCwwLjcpO1xuICAgIH1cbiAgICA6Oi1tb3otcGxhY2Vob2xkZXIge1xuICAgICAgIGNvbG9yOiByZ2JhKDAsMCwwLDAuNyk7ICBcbiAgICB9XG4gICAgOi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7ICBcbiAgICAgICBjb2xvcjogcmdiYSgwLDAsMCwwLjcpOyAgXG4gICAgfVxuICB9XG59XG5cbi5sb2dpbi1mb3JtIHtcbiAgLy9iYWNrZ3JvdW5kOiAjMjIyO1xuICAvL2JveC1zaGFkb3c6IDAgMCAxcmVtIHJnYmEoMCwwLDAsMC4zKTtcbiAgbWluLWhlaWdodDogMTByZW07XG4gIG1hcmdpbjogYXV0bztcbiAgbWF4LXdpZHRoOiA1MCU7XG4gIHBhZGRpbmc6IC41cmVtO1xufVxuLmxvZ2luLXRleHQge1xuICAvL2JhY2tncm91bmQ6IGhzbCg0MCwzMCw2MCk7XG4gIC8vYm9yZGVyLWJvdHRvbTogLjVyZW0gc29saWQgd2hpdGU7XG4gIGNvbG9yOiBibGFjaztcbiAgZm9udC1zaXplOiAxLjVyZW07XG4gIG1hcmdpbjogMCBhdXRvO1xuICBtYXgtd2lkdGg6IDUwJTtcbiAgcGFkZGluZzogLjVyZW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgLy90ZXh0LXNoYWRvdzogMXB4IC0xcHggMCByZ2JhKDAsMCwwLDAuMyk7XG4gIC5mYS1zdGFjay0xeCB7XG4gICAgY29sb3I6IGJsYWNrO1xuICB9XG59XG5cbi5sb2dpbi11c2VybmFtZSwgLmxvZ2luLXBhc3N3b3JkIHtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlcjogMCBzb2xpZDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEod2hpdGUsIC41KTtcbiAgY29sb3I6IGJsYWNrO1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luOiAxcmVtO1xuICBwYWRkaW5nOiAuNXJlbTtcbiAgdHJhbnNpdGlvbjogMjUwbXMgYmFja2dyb3VuZCBlYXNlLWluO1xuICB3aWR0aDogY2FsYygxMDAlIC0gM3JlbSk7XG4gICY6Zm9jdXMge1xuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgIGNvbG9yOiBibGFjaztcbiAgICB0cmFuc2l0aW9uOiAyNTBtcyBiYWNrZ3JvdW5kIGVhc2UtaW47XG4gIH1cbn1cblxuLmxvZ2luLWZvcmdvdC1wYXNzIHtcbiAgLy9ib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcbiAgYm90dG9tOiAwO1xuICBjb2xvcjogd2hpdGU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZvbnQtc2l6ZTogNzUlO1xuICBsZWZ0OiAwO1xuICBvcGFjaXR5OiAwLjY7XG4gIHBhZGRpbmc6IC41cmVtO1xuICAvL3Bvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAvL3RleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgd2lkdGg6IDEwMCU7XG4gICY6aG92ZXIgICY6Zm9jdXN7XG4gICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgY29sb3I6IGJsYWNrO1xuICAgIHRyYW5zaXRpb246IDI1MG1zIGJhY2tncm91bmQgZWFzZS1pbjtcbiAgfVxufVxuLmxvZ2luLW5ldy11c2VyIHtcbiAgLy9ib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcbiAgYm90dG9tOiAxLjVyZW07XG4gIGNvbG9yOiB3aGl0ZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBkaXNwbGF5OiBibG9jaztcbiAgZm9udC1zaXplOiA3NSU7XG4gIGxlZnQ6IDA7XG4gIG9wYWNpdHk6IDAuNjtcbiAgcGFkZGluZzogLjI1cmVtO1xuICBtaW4td2lkdGg6IDFweDtcbiAgLy9wb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgLy90ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIHdpZHRoOiAxMDAlO1xuICAmOmhvdmVyICAmOmZvY3Vze1xuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgIGNvbG9yOiBibGFjaztcbiAgICB0cmFuc2l0aW9uOiAyNTBtcyBiYWNrZ3JvdW5kIGVhc2UtaW47XG4gIH1cbn1cbi5sb2dpbi1zdWJtaXQge1xuICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbjogMXJlbSBhdXRvO1xuICBtaW4td2lkdGg6IDFweDtcbiAgcGFkZGluZzogLjI1cmVtO1xuICB0cmFuc2l0aW9uOiAyNTBtcyBiYWNrZ3JvdW5kIGVhc2UtaW47XG4gICY6aG92ZXIsICY6Zm9jdXMge1xuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgIGNvbG9yOiBibGFjaztcbiAgICB0cmFuc2l0aW9uOiAyNTBtcyBiYWNrZ3JvdW5kIGVhc2UtaW47XG4gIH1cbn1cblxuXG5cblxuW2NsYXNzKj11bmRlcmxheV0ge1xuICBsZWZ0OiAyNSU7XG4gIG1pbi1oZWlnaHQ6IDYwJTtcbiAgbWluLXdpZHRoOiA1MCU7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiA1JTtcbn1cbi51bmRlcmxheS1waG90byB7XG4gIGJhY2tncm91bmQ6IHVybCgnL2Fzc2V0cy9pbWFnZXMvbG9naW5JbWFnZS5qcGcnKSA1MCUgNTAlLzMwMHB4IDMwcHggbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuIC8vIC13ZWJraXQtZmlsdGVyOiBncmF5c2NhbGUoMzAlKTtcbiAgei1pbmRleDogLTE7XG59XG4udW5kZXJsYXktYmxhY2sge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsMCwwLDAuNyk7XG4gIHotaW5kZXg6IC0xO1xufVxuXG5Aa2V5ZnJhbWVzIGh1ZS1yb3RhdGUge1xuICBmcm9tIHtcbiAgICAtd2Via2l0LWZpbHRlcjogZ3JheXNjYWxlKDMwJSkgaHVlLXJvdGF0ZSgwZGVnKTtcbiAgfVxuICB0byB7XG4gICAgLXdlYmtpdC1maWx0ZXI6IGdyYXlzY2FsZSgzMCUpIGh1ZS1yb3RhdGUoMzYwZGVnKTtcbiAgfVxufVxuXG4uZXJyb3ItbWVzc2FnZSB7XG4gIG1pbi1oZWlnaHQ6IDIuMnJlbTtcbiAgaW9uLWxhYmVsIHtcbiAgICAgIG1hcmdpbjogMnB4IDA7XG4gICAgICBmb250LXNpemU6IDYwJTtcbiAgICAgIGNvbG9yOiAjZmY2MTUzO1xuICB9XG4gIC5pdGVtLWlubmVyIHtcbiAgICAgIGJvcmRlci1ib3R0b206IDAgIWltcG9ydGFudDtcbiAgfVxufSJdfQ== */";

/***/ }),

/***/ 52739:
/*!*****************************************************************************!*\
  !*** ./src/app/modules/user/pages/edit-user/edit-user.page.scss?ngResource ***!
  \*****************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "ion-title.title-md.hydrated {\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVkaXQtdXNlci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtBQUNKIiwiZmlsZSI6ImVkaXQtdXNlci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tdGl0bGUudGl0bGUtbWQuaHlkcmF0ZWQge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn0iXX0= */";

/***/ }),

/***/ 91672:
/*!*********************************************************************!*\
  !*** ./src/app/modules/user/pages/login/login.page.scss?ngResource ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "form {\n  margin-bottom: 32px;\n}\nform button {\n  margin-top: 20px !important;\n}\np {\n  font-size: 0.8em;\n  color: #d2d2d2;\n}\nion-label {\n  margin-left: 5px;\n}\nion-input {\n  padding: 5px;\n}\n.invalid {\n  border-bottom: 1px solid #ff6153;\n}\n.error-message {\n  min-height: 2.2rem;\n}\n.error-message ion-label {\n  margin: 2px 0;\n  font-size: 60%;\n  color: #ff6153;\n}\n.error-message .item-inner {\n  border-bottom: 0 !important;\n}\n.background-color {\n  /* Chrome10+,Safari5.1+ */\n  /* Opera 11.10+ */\n  /* IE10+ */\n  background: linear-gradient(135deg, #EA5C54 0%, #bb6dec 100%);\n  /* W3C */\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG1CQUFBO0FBQ0o7QUFBSTtFQUNJLDJCQUFBO0FBRVI7QUFFQTtFQUNJLGdCQUFBO0VBQ0EsY0FBQTtBQUNKO0FBRUE7RUFDSSxnQkFBQTtBQUNKO0FBRUE7RUFDSSxZQUFBO0FBQ0o7QUFFQTtFQUNJLGdDQUFBO0FBQ0o7QUFFQTtFQUNJLGtCQUFBO0FBQ0o7QUFBSTtFQUNJLGFBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtBQUVSO0FBQUk7RUFDSSwyQkFBQTtBQUVSO0FBSUE7RUFFMEUseUJBQUE7RUFDTCxpQkFBQTtFQUNDLFVBQUE7RUFDcEUsNkRBQUE7RUFBZ0UsUUFBQTtBQUVsRSIsImZpbGUiOiJsb2dpbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJmb3JtIHtcbiAgICBtYXJnaW4tYm90dG9tOiAzMnB4O1xuICAgIGJ1dHRvbiB7XG4gICAgICAgIG1hcmdpbi10b3A6IDIwcHggIWltcG9ydGFudDtcbiAgICB9XG59XG5cbnAge1xuICAgIGZvbnQtc2l6ZTogMC44ZW07XG4gICAgY29sb3I6ICNkMmQyZDI7XG59XG5cbmlvbi1sYWJlbCB7XG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcbn1cblxuaW9uLWlucHV0IHtcbiAgICBwYWRkaW5nOiA1cHg7XG59XG5cbi5pbnZhbGlkIHtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2ZmNjE1Mztcbn1cblxuLmVycm9yLW1lc3NhZ2Uge1xuICAgIG1pbi1oZWlnaHQ6IDIuMnJlbTtcbiAgICBpb24tbGFiZWwge1xuICAgICAgICBtYXJnaW46IDJweCAwO1xuICAgICAgICBmb250LXNpemU6IDYwJTtcbiAgICAgICAgY29sb3I6ICNmZjYxNTM7XG4gICAgfVxuICAgIC5pdGVtLWlubmVyIHtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMCAhaW1wb3J0YW50O1xuICAgIH1cbn1cblxuXG5cbi5iYWNrZ3JvdW5kLWNvbG9ye1xuICAvLyAgLS1iYWNrZ3JvdW5kOiB1cmwoL2Fzc2V0cy9pbWFnZXMvZ2VuaWFsbG90dG8uanBnKSA1MCUgNTAlLzYwMHB4IDYwMHB4IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoLTQ1ZGVnLCAgI0VBNUM1NCAgMCUsI2JiNmRlYyAxMDAlKTsgLyogQ2hyb21lMTArLFNhZmFyaTUuMSsgKi9cbiAgYmFja2dyb3VuZDogLW8tbGluZWFyLWdyYWRpZW50KC00NWRlZywgICNFQTVDNTQgIDAlLCNiYjZkZWMgMTAwJSk7IC8qIE9wZXJhIDExLjEwKyAqL1xuICBiYWNrZ3JvdW5kOiAtbXMtbGluZWFyLWdyYWRpZW50KC00NWRlZywgICNFQTVDNTQgIDAlLCNiYjZkZWMgMTAwJSk7IC8qIElFMTArICovXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICAjRUE1QzU0ICAwJSwjYmI2ZGVjIDEwMCUpOyAvKiBXM0MgKi9cbiAgICBcbn0iXX0= */";

/***/ }),

/***/ 87954:
/*!*************************************************************************!*\
  !*** ./src/app/modules/user/pages/profile/profile.page.scss?ngResource ***!
  \*************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9maWxlLnBhZ2Uuc2NzcyJ9 */";

/***/ }),

/***/ 73114:
/*!***************************************************************************************!*\
  !*** ./src/app/pages/customers/create/new-customer/new-customer.page.scss?ngResource ***!
  \***************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJuZXctY3VzdG9tZXIucGFnZS5zY3NzIn0= */";

/***/ }),

/***/ 44492:
/*!*******************************************************************************************!*\
  !*** ./src/app/pages/customers/edit/update-customer/update-customer.page.scss?ngResource ***!
  \*******************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ1cGRhdGUtY3VzdG9tZXIucGFnZS5zY3NzIn0= */";

/***/ }),

/***/ 83202:
/*!******************************************************!*\
  !*** ./src/app/pages/menu/menu.page.scss?ngResource ***!
  \******************************************************/
/***/ ((module) => {

"use strict";
module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtZW51LnBhZ2Uuc2NzcyJ9 */";

/***/ }),

/***/ 33383:
/*!***********************************************!*\
  !*** ./src/app/app.component.html?ngResource ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-app>\n\n    <ion-router-outlet id=\"main-content\"></ion-router-outlet>\n\n\n\n</ion-app>\n";

/***/ }),

/***/ 38763:
/*!**************************************************************!*\
  !*** ./src/app/components/bar/bar.component.html?ngResource ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "\n\n<figure id=\"bar\"></figure>";

/***/ }),

/***/ 34030:
/*!******************************************************************************!*\
  !*** ./src/app/components/cookies-law/cookies-law.component.html?ngResource ***!
  \******************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<p>\nusiamo solo cookies tecnici, servono a effettuare la navigazione o a fornire un servizio richiesto dall’utente.\n Non vengono utilizzati per scopi ulteriori e sono normalmente installati direttamente dal titolare del sito web.\n\nSenza il ricorso a tali cookie,\n alcune operazioni non potrebbero essere compiute o sarebbero più complesse e/o meno sicure,\n  per le quali i cookie, che consentono di effettuare e mantenere l’identificazione dell’utente nell’ambito \n  della sessione, risultano indispensabili.\n</p>\n";

/***/ }),

/***/ 87320:
/*!**********************************************************************!*\
  !*** ./src/app/components/scatter/scatter.component.html?ngResource ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<h2>Scatter Plot</h2>\n<figure id=\"scatter\"></figure>";

/***/ }),

/***/ 27445:
/*!*****************************************************************************************************!*\
  !*** ./src/app/modules/dynamic-form/components/dynamic-form/dynamic-form.component.html?ngResource ***!
  \*****************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div>\n  <form (ngSubmit)=\"onSubmit()\" [formGroup]=\"form\">\n    <div *ngFor=\"let question of questions\" class=\"form-row\">\n      <app-question [question]=\"question\" [form]=\"form\"></app-question>\n    </div>\n\n      <ion-button\n      *ngIf=\"!hideSubmitButton && !submitText\"\n        type=\"submit\"\n        [disabled]=\"!form?.valid\"\n        expand=\"block\"\n        href=\"distribuzione-create\"\n      >\n      \n        <ion-icon name=\"checkmark-circle\" ></ion-icon>\n     \n      </ion-button>\n\n      <ion-button\n      *ngIf=\"!hideSubmitButton && submitText\"\n        type=\"submit\"\n        [disabled]=\"!form?.valid\"\n        expand=\"block\"\n        href=\"distribuzione-create\"\n      >\n      \n        {{submitText}}\n     \n      </ion-button>\n  </form>\n\n  <div *ngIf=\"payLoad\" class=\"form-row\"></div>\n</div>\n";

/***/ }),

/***/ 84661:
/*!***************************************************************************************************!*\
  !*** ./src/app/modules/dynamic-form/components/email-field/email-field.component.html?ngResource ***!
  \***************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<form [formGroup]=\"emailForm\">\n  <label>email</label>\n  <input type=\"email\" [formControlName]=\"'email'\" class=\"question\">\n  <section style=\"color:red\" *ngIf=\"!isValid()\">\n    email non valida!\n  </section>\n  </form>";

/***/ }),

/***/ 86225:
/*!********************************************************************************************************************!*\
  !*** ./src/app/modules/dynamic-form/components/formFields/code-generator/code-generator.component.html?ngResource ***!
  \********************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<form [formGroup]=\"enablingCodeForm\">\n    <input type=\"text\" [formControlName]=\"'code'\" class=\"question\">\n    <ion-button (click)=\"execute()\"><ion-icon name=\"code-working\"></ion-icon> </ion-button>\n    <section style=\"color:red\" *ngIf=\"!isValid()\">\n     codice già in uso\n    </section>\n    </form>";

/***/ }),

/***/ 24722:
/*!*********************************************************************************************************!*\
  !*** ./src/app/modules/dynamic-form/components/password-field/password-field.component.html?ngResource ***!
  \*********************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div *ngIf=\"retypePassword\">\n<form [formGroup]=\"passwordForm\">\n  <label>digita la password</label>\n  <input type=\"password\" [formControlName]=\"'password'\" class=\"question\">\n  <label>ripeti la password</label>\n  <input type=\"password\" [formControlName]=\"'retype'\" class=\"question\">\n \n  <section style=\"color:red\" *ngIf=\"!isValid\">\n    le password non coincidono!\n  </section>\n\n\n</form>\n</div>\n<div *ngIf=\"!retypePassword\">\n  <form [formGroup]=\"passwordForm\">\n    <label>digita la password</label>\n    <input type=\"password\" [formControlName]=\"'password'\" class=\"question\">\n   \n    <section style=\"color:red\" *ngIf=\"!isValid\">\n      le password non coincidono!\n    </section>\n  \n  \n  </form>\n  </div>\n";

/***/ }),

/***/ 59751:
/*!*****************************************************************************************************************!*\
  !*** ./src/app/modules/dynamic-form/components/question-form-component/question-form-component.html?ngResource ***!
  \*****************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div [formGroup]=\"form\" >\n  <label [attr.for]=\"question?.key\">{{ question?.label }}</label>\n\n  <div [ngSwitch]=\"question?.controlType\">\n    <input\n    class='question'\n    ngDefaultControl\n      *ngSwitchCase=\"'textbox'\"\n      [formControlName]=\"question?.key\"\n      [type]=\"question?.type\"\n      \n    />\n    \n    \n    <section [ngSwitch]=\"question?.controlType\" class='question'>\n      <ion-textarea\n      ngDefaultControl\n        *ngSwitchCase=\"'textArea'\"\n        [formControlName]=\"question?.key\"\n        [id]=\"question?.key\"\n        autoGrow=\"question?.autoGrow\"\n        [value]= \"question?.value\"\n      ></ion-textarea>\n      </section>\n\n      <section *ngSwitchCase=\"'code'\" \n      >\n        <app-code-generator\n        class='question'\n        [formControlName]=\"question?.key\"\n        [id]=\"question?.key\"\n        [code]=\"question?.value\"\n        [generatorFunction]=\"question?.generatorFunction\"\n        [validator]=\"question?.validator\"\n        ></app-code-generator>\n      </section>\n\n<section *ngSwitchCase=\"'email'\"\n         >\n\n          <app-email-field\n          class='question'\n          [formControlName]=\"question?.key\"\n          [email]= \"question?.value\"\n          [id]=\"question.key\"\n          >\n          </app-email-field>\n\n     \n          \n\n    </section>\n    <section *ngSwitchCase=\"'checkbox'\">\n      <ion-checkbox\n      class='question'\n     [(ngModel)]=\"question.value\"\n      [formControlName]=\"question?.key\"\n      [id]=\"question.key\">\n    </ion-checkbox>\n    <p>{{question?.text}}</p>\n    </section>\n\n    <section *ngSwitchCase=\"'password'\">\n  \n    <app-password-field  class='question'\n    [formControlName]=\"question?.key\"\n    [retypePassword] =\"question?.retypePassword\"\n\n    ></app-password-field>\n    </section>\n  \n    <section *ngSwitchCase=\"'address'\">\n    </section>\n\n    <section *ngSwitchCase=\"'datebox'\" class='question'>\n      <ion-datetime [formControlName]=\"question?.key\" [id]=\"question?.key\"\n      [isDateEnabled]=\"question?.isDateEnabled\"\n      [presentation]=\"question?.presentation\"\n      max=\"3000-12-31T23:59:59\"\n      >\n      </ion-datetime>\n    </section>\n\n    <section *ngSwitchCase=\"'switchBox'\" class=\"question\">\n      <p class=\"switchText\">\n        {{ getValue ? question.labelTrue : question.labelFalse }}\n      </p>\n      <ion-icon\n        [name]=\"getValue ? question.iconTrue:question.iconFalse\"\n      ></ion-icon>\n      <ion-toggle\n        [formControlName]=\"question?.key\"\n        [id]=\"question?.key\"\n      ></ion-toggle>\n    </section>\n    \n \n    <section *ngSwitchCase=\"'itemSelector'\"\n    class=\"question\"\n    [formControlName]=\"question?.key\"\n    [id]=\"question?.key\"\n    ngDefaultControl\n    >\n        <app-selector-items\n        [formControlName]=\"question?.key\"\n        [id]=\"question?.key\"\n         [text]=\"question?.text\" [service]=\"question?.service\" (selectedItem)=\"question.selectedItem($event)\"\n          [sorterFunction]=\"question?.sorterFunction\"\n          [filterFunction]=\"question?.ItemsFilterFunction\"\n          [createPopup]= \"question?.createPopup\"\n          [item]=\"question?.value\"\n          (selectedItem)=\"question.selectedItem($event)\" ></app-selector-items>\n      \n    </section>\n    <ion-select\n      [id]=\"question?.key\"\n      *ngSwitchCase=\"'dropdown'\"\n      [formControlName]=\"question?.key\"\n    >\n      <ion-select-option *ngFor=\"let opt of question?.options\" [value]=\"opt?.value\">{{\n        opt.key\n      }}</ion-select-option>\n    </ion-select>\n\n  <section style=\"color:red\" *ngIf=\"!isValid\">\n    {{ question ? question.label : \"\" }} è richiesto\n  </section>\n</div>\n";

/***/ }),

/***/ 93621:
/*!*****************************************************************************!*\
  !*** ./src/app/modules/item/components/item/item.component.html?ngResource ***!
  \*****************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-item >\n  <p slot=\"start\">{{Item?.title}}</p>\n  <p slot=\"start\" class=\"note\">{{Item?.getNote().value}}</p>\n\n</ion-item>";

/***/ }),

/***/ 40325:
/*!*********************************************************************************************!*\
  !*** ./src/app/modules/item/components/items-filter/items-filter.component.html?ngResource ***!
  \*********************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<p>\n  \n  <ion-icon name=\"funnel\" (click)=\"showPopup()\"></ion-icon>\n</p>\n";

/***/ }),

/***/ 47058:
/*!*****************************************************************************************!*\
  !*** ./src/app/modules/item/components/items-list/items-list.component.html?ngResource ***!
  \*****************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<p class=\"counter\">{{ countItems() }} {{ dummyItem?.getCountingText()}}</p>\n<ion-icon name=\"search\" class=\"applyFi1lter\"></ion-icon>\n<ion-list>\n  <ion-fab>\n    <button ion-fab>\n      <ion-icon name=\"create\" (click)=\"create()\"></ion-icon>\n    </button>\n  </ion-fab>\n  <div></div>\n  <div class=\"spinner\" [style.display]=\"showSpinner ? 'block' : 'none'\">\n    <div class=\"dot1\"></div>\n    <div class=\"dot2\"></div>\n  </div>\n  <ion-item-sliding\n    *ngFor=\"let item of items_list | filterItems: filterFunction\"\n    #sliding_item\n  >\n    <my-item class=\"myItem\" [Item]=\"item\" (click)=\"do(item)\"></my-item>\n\n    <ion-item-options side=\"start\">\n      <button\n        ion-button\n        danger\n        class=\"danger\"\n        (click)=\"deleteItem(item, sliding_item)\"\n      >\n        <ion-icon name=\"trash\"></ion-icon>\n        Elimina\n      </button>\n    </ion-item-options>\n  </ion-item-sliding>\n</ion-list>\n";

/***/ }),

/***/ 92538:
/*!**********************************************************************************!*\
  !*** ./src/app/modules/item/components/page-item/page-item.page.html?ngResource ***!
  \**********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-item>\n  <article>\n    <p class=\"value3\">\n      {{ value3?.label }}\n      {{ value3?.value }}\n    </p>\n    <h1 slot=\"start\" class=\"itemTitle\">{{Item?.getTitle().value}}</h1>\n    <app-show-value [value]=Note></app-show-value>\n\n    <div>\n      <!--span [ngSwitch]=\"Item?.getNote().value\">\n        <p slot=\"start\" *ngSwitchCase=\"false\"></p>\n        <p class=\"note\">\n          {{ Item?.getNote().value }}\n        </p>\n      </span-->\n      <app-show-value [value]=Note class=\"note\"></app-show-value>\n\n    </div>\n    <app-show-value [value]=\"value2\" class=\"value2\"></app-show-value>\n\n    <span class=\"value4\" slot=\"start\" style=\"white-space: nowrap;\">\n\n    </span>\n\n    <div>\n      <span [ngSwitch]=\"Item?.hasQuickActions()\">\n        <div *ngSwitchCase=\"true\">\n          <ion-fab vertical=\"bottom\" horizontal=\"end\">\n            <ion-fab-button size=\"small\">\n              <ion-icon name=\"flash\" color=\"energetic\"></ion-icon>\n            </ion-fab-button>\n            <ion-fab-list side=\"start\">\n              <ion-fab-button *ngFor=\"let action of Item?.quickActions\">\n                <ion-icon (click)=\"doAction(action)\" name=\"{{ action?.getIcon() }}\"></ion-icon>\n              </ion-fab-button>\n            </ion-fab-list>\n          </ion-fab>\n        </div>\n        <p *ngSwitchCase=\"false\"></p>\n        <p *ngSwitchDefault></p>\n      </span>\n    </div>\n  </article>\n</ion-item>";

/***/ }),

/***/ 96275:
/*!**********************************************************************************************!*\
  !*** ./src/app/modules/item/components/page-items-list/page-items-list.page.html?ngResource ***!
  \**********************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<p class=\"counter\">{{ countItems() }} {{ getMultiplicityText() }}</p>\n\n<ion-list>\n  <div class=\"spinner\" [style.display]=\"showSpinner ? 'block' : 'none'\">\n    <div class=\"dot1\"></div>\n    <div class=\"dot2\"></div>\n  </div>\n  <ion-item-sliding\n    *ngFor=\"let item of service?.items |async | filterItems: filterFunction| sorterItems: sorterFunction\"\n    #sliding_item\n  >\n    <app-page-item [Item]=\"item\" ></app-page-item>\n\n    <ion-item-options side=\"start\">\n      <ion-button\n      ion-button\n      danger\n      color=\"danger\"\n        (click)=\"deleteItem(item, sliding_item)\"\n      >\n        <ion-icon name=\"trash\"></ion-icon>\n        Elimina\n      </ion-button>\n    </ion-item-options>\n    <ion-item-options side='end'>\n      <ion-button\n      ion-button\n      (click)=\"updateItem(item,sliding_item)\"\n      >\n      <ion-icon name='eye'></ion-icon>\n      Modifica\n      </ion-button>\n    </ion-item-options>\n  </ion-item-sliding>\n</ion-list>\n<ion-fab class=\"addItem\" vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\n  <ion-fab-button (click)=\"createItem()\">\n    <ion-icon name=\"add\"></ion-icon>\n  </ion-fab-button>\n</ion-fab>\n";

/***/ }),

/***/ 95418:
/*!*************************************************************************************************!*\
  !*** ./src/app/modules/item/components/selector-items/selector-items.component.html?ngResource ***!
  \*************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<p> seleziona {{text}} </p>\n<ion-button (click)=\"action()\">\n    <ion-icon name=\"list\" (click)=\"action()\"></ion-icon>\n</ion-button>\n<h2>{{item ? item?.getTitle()?.value:''}}</h2>";

/***/ }),

/***/ 86467:
/*!*****************************************************************************************!*\
  !*** ./src/app/modules/item/components/show-value/show-value.component.html?ngResource ***!
  \*****************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div>\n  <span [ngSwitch]=\"value?.value\">\n    <p slot=\"start\" *ngSwitchCase=\"!''\"></p>\n    <p>\n      {{ value?.value }}\n    </p>\n  </span>\n</div>";

/***/ }),

/***/ 11871:
/*!***********************************************************************************!*\
  !*** ./src/app/modules/item/pages/filter-popup/filter-popup.page.html?ngResource ***!
  \***********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>filterPopup</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"dismiss()\">\n        <ion-icon name=\"close\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <app-dynamic-form [questions]=\"filterFields\" (singleSubmit)=\"submit($event)\"(changes)=\"editing($event)\"></app-dynamic-form>\n\n</ion-content>";

/***/ }),

/***/ 5000:
/*!***************************************************************************************!*\
  !*** ./src/app/modules/item/pages/selector-items/selector-items.page.html?ngResource ***!
  \***************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>{{title}}</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"dismiss()\">\n        <ion-icon name=\"close\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-icon name=\"search\" slot='secondary'></ion-icon>\n    <ion-input slot=\"primary\" type=\"text\" (ionChange)=\"filter($event)\"></ion-input>\n  </ion-toolbar>\n\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-item *ngFor=\"let item of itemsList | filterItems: filterFunction | sorterItems: sorterFunction \">\n      <article (click)=\"selected(item)\">\n        <h1>{{item.getTitle().value}}</h1>\n      </article>\n    </ion-item>\n  </ion-list>\n\n  <ion-fab class=\"addItem\" vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\n    <ion-fab-button (click)=\"createItem()\">\n      <ion-icon name=\"add\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n\n</ion-content>";

/***/ }),

/***/ 32810:
/*!*****************************************************************************************************!*\
  !*** ./src/app/modules/user/components/login-definitivo/login-definitivo.component.html?ngResource ***!
  \*****************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "\n<ion-content  no-scroll padding center  >\n  <form class=\"login background-color\" [formGroup]=\"loginForm\" (ngSubmit)=\"onSubmit()\" novalidate >\n    <ion-img class=\"loginImage\" src=\"assets/images/loginImage.jpg\" ></ion-img>\n\n    <ion-item  >\n\n      <ion-label stacked>Email</ion-label>\n      <ion-input formControlName=\"email\" class=\"formField\"  color=\"dark\" type=\"email\" placeholder=\"Your email address\" [class.invalid]=\"!loginForm.controls['email'].valid &&\n    loginForm.controls['email'].touched\">\n  </ion-input>\n    </ion-item>\n    <ion-item class=\"error-message\" *ngIf=\"!loginForm.controls['email'].valid &&\n    loginForm.controls['email'].touched\">\n      <ion-label>Please enter a valid email address.</ion-label>\n    </ion-item>\n    <ion-item>\n      <ion-label stacked>Password</ion-label>\n      <ion-input class=\"formField\" formControlName=\"password\" type=\"password\" placeholder=\"Your\n    password\" [class.invalid]=\"!loginForm.controls['password'].valid&&\n    loginForm.controls['password'].touched\">\n      </ion-input>\n    </ion-item>\n    <ion-item class=\"error-message\" *ngIf=\"!loginForm.controls['password'].valid\n    && loginForm.controls['password'].touched\">\n      <ion-label>Your password needs more than 6 characters.</ion-label>\n    </ion-item>\n\n    <div class=\"parent\">\n      <div class=\"loginButtons \" >\n\n    <ion-button (click)=\"loginUser(loginForm)\" expand=\"block\" color=\"dark\" [disabled]=\"!loginForm.valid\" style=\"padding:0.4rem;width:100%\">\n      Log In\n    </ion-button>\n  <ion-button expand=\"block\" (click)=\"register()\" color=\"dark\" style=\"padding:0.4rem\">\n    {{buttonText}}\n  </ion-button>\n  <ion-button expand=\"block\"  routerLink=\"/users/reset-password\" color=\"dark\">\n    password dimenticata :(\n  </ion-button>\n\n\n  </div>\n  </div>\n    \n  </form>\n</ion-content>";

/***/ }),

/***/ 7136:
/*!*******************************************************************************!*\
  !*** ./src/app/modules/user/components/login/login.component.html?ngResource ***!
  \*******************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "\n<ion-content  no-scroll padding center style=\"background:-webkit-linear-gradient(-45deg,  #EA5C54  0%,#bb6dec 100%)\">\n\n \n\n  <ion-img class=\"loginImage\" src=\"assets/images/loginImage.jpg\" ></ion-img>\n\n<form class=\"login\" [formGroup]=\"loginForm\" (ngSubmit)=\"onSubmit()\" novalidate >\n\n\n\n  \n      \n\n\n\n\n    <ion-item>\n\n      <ion-label stacked>Email</ion-label>\n      <ion-input formControlName=\"email\" class=\"formField\"  color=\"dark\" type=\"email\" placeholder=\"Your email address\" [class.invalid]=\"!loginForm.controls['email'].valid &&\n    loginForm.controls['email'].touched\">\n      </ion-input>\n    </ion-item>\n    <ion-item class=\"error-message\" *ngIf=\"!loginForm.controls['email'].valid &&\n    loginForm.controls['email'].touched\">\n      <ion-label>Please enter a valid email address.</ion-label>\n    </ion-item>\n    <ion-item>\n      <ion-label stacked>Password</ion-label>\n      <ion-input formControlName=\"password\" type=\"password\" placeholder=\"Your\n    password\" [class.invalid]=\"!loginForm.controls['password'].valid&&\n    loginForm.controls['password'].touched\">\n      </ion-input>\n    </ion-item>\n    <ion-item class=\"error-message\" *ngIf=\"!loginForm.controls['password'].valid\n    && loginForm.controls['password'].touched\">\n      <ion-label>Your password needs more than 6 characters.</ion-label>\n    </ion-item>\n    <div class=\"parent\">\n      <div class=\"loginButtons \" >\n\n    <ion-button (click)=\"loginUser(loginForm)\" expand=\"block\" color=\"dark\" [disabled]=\"!loginForm.valid\" style=\"padding:0.4rem;width:100%\">\n      Log In\n    </ion-button>\n  <ion-button expand=\"block\" (click)=\"register()\" color=\"dark\" style=\"padding:0.4rem\">\n    {{buttonText}}\n  </ion-button>\n  <ion-button expand=\"block\"  routerLink=\"/users/reset-password\" color=\"dark\">\n    password dimenticata :(\n  </ion-button>\n\n\n  </div>\n  </div>\n</form>\n</ion-content>";

/***/ }),

/***/ 27273:
/*!*******************************************************************************************!*\
  !*** ./src/app/modules/user/components/logout-user/logout-user.component.html?ngResource ***!
  \*******************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-button (click)='logout()'><ion-icon name=\"log-out\"></ion-icon></ion-button>\n<p>Salve<br> {{email}}</p>";

/***/ }),

/***/ 44336:
/*!*******************************************************************************************!*\
  !*** ./src/app/modules/user/components/sleek-login/sleek-login.component.html?ngResource ***!
  \*******************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"login-group\">\n<form class=\"login-form\"[formGroup]=\"loginForm\" (ngSubmit)=\"onSubmit()\" novalidate >\n  <p class=\"login-text\">\n    <span class=\"fa-stack fa-lg\">\n      <i class=\"fa fa-circle fa-stack-2x\"></i>\n      <i class=\"fa fa-lock fa-stack-1x\"></i>\n    </span>\n  </p>\n  <ion-item  >\n    <ion-label stacked>Email</ion-label>\n    <ion-input formControlName=\"email\" class=\"login-username\"  color=\"dark\" type=\"email\" placeholder=\"il tuo indirizzo email\" [class.invalid]=\"!loginForm.controls['email'].valid &&\n  loginForm.controls['email'].touched\">\n  </ion-input>\n  </ion-item>\n\n  <ion-item class=\"error-message\" *ngIf=\"!loginForm.controls['email'].valid &&\n  loginForm.controls['email'].touched\">\n    <ion-label>inserisci il tuo indirizzo email</ion-label>\n  </ion-item>\n  <ion-item>\n    <ion-label stacked>Password</ion-label>\n    <ion-input class=\"login-password\" formControlName=\"password\" type=\"password\" placeholder=\"Your\n  password\" [class.invalid]=\"!loginForm.controls['password'].valid&&\n  loginForm.controls['password'].touched\">\n    </ion-input>\n  </ion-item>\n  <ion-item class=\"error-message\" *ngIf=\"!loginForm.controls['password'].valid\n  && loginForm.controls['password'].touched\">\n    <ion-label>Your password needs more than 6 characters.</ion-label>\n  </ion-item>\n\n  <ion-button (click)=\"loginUser(loginForm)\" expand=\"block\" color=\"dark\" [disabled]=\"!loginForm.valid\" class=\"login-submit\">\n    Accedi\n  </ion-button>\n  <ion-button expand=\"block\" class=\"login-new-user\" (click)=\"register()\" color=\"dark\" style=\"padding:0.4rem\">\n    {{buttonText}}\n  </ion-button>\n  <ion-button expand=\"block\" class=\"login-forgot-pass\"  routerLink=\"/users/reset-password\" color=\"dark\">\n    password dimenticata :(\n  </ion-button>\n\n</form>\n\n\n\n\n\n<div class=\"underlay-photo\"></div>\n</div>\n<div class=\"underlay-black\"></div> \n\n";

/***/ }),

/***/ 34747:
/*!*****************************************************************************!*\
  !*** ./src/app/modules/user/pages/edit-user/edit-user.page.html?ngResource ***!
  \*****************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button\n        class=\"button-clear ion-chevron-left\"\n        defaultHref=\"/home\"\n      ></ion-back-button>\n    </ion-buttons>\n    <ion-title>{{ title }}</ion-title>\n\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"dismiss()\">\n        <ion-icon name=\"close\"></ion-icon>\n        </ion-button>\n        </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <app-dynamic-form\n    [questions]=\"questions\"\n    [submitText]=\"submitText\"\n    (interactiveSubmit)=\"filter($event)\"\n    (singleSubmit)=\"submit($event)\"\n  ></app-dynamic-form>\n</ion-content>\n";

/***/ }),

/***/ 64501:
/*!*********************************************************************!*\
  !*** ./src/app/modules/user/pages/login/login.page.html?ngResource ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "\n<ion-content no-scroll padding style=\"background:linear-gradient(-45deg,  #EA5C54  0%,#bb6dec 100%)\">\n<body style=\"background:-webkit-linear-gradient(-45deg,  #EA5C54  0%,#bb6dec 100%)\" class=\"parent\" >\n<!--   <app-login-component></app-login-component> -->\n<!--   <app-login-definitivo></app-login-definitivo> -->\n<app-sleek-login></app-sleek-login>\n</body>\n</ion-content>";

/***/ }),

/***/ 52611:
/*!*************************************************************************!*\
  !*** ./src/app/modules/user/pages/profile/profile.page.html?ngResource ***!
  \*************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>profile</ion-title>\n\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/home\"></ion-back-button>\n    </ion-buttons>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"logOut()\">\n        <ion-icon slot=\"icon-only\" name=\"log-out\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-list>\n    <ion-list-header>\n      Personal Information\n    </ion-list-header>\n    <ion-item (click)=\"updateName()\">\n      <ion-label>\n        <ion-grid>\n          <ion-row>\n            <ion-col class=\"text-left\" size=\"5\"> Nome </ion-col>\n            <ion-col\n              class=\"text-center\"\n              size=\"7\"\n              *ngIf=\"userProfile?.firstName || userProfile?.lastName\"\n            >\n              {{ userProfile?.firstName }}\n            </ion-col>\n            <ion-col\n              size=\"7\"\n              class=\"placeholder-profile text-center\"\n              *ngIf=\"!userProfile?.firstName\"\n            >\n              <span> Tap here to edit. </span>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col class=\"text-left\" size=\"5\"> Cognome </ion-col>\n            <ion-col\n              class=\"text-center\"\n              size=\"7\"\n              *ngIf=\"userProfile?.firstName || userProfile?.lastName\"\n            >\n              {{ userProfile?.lastName }}\n            </ion-col>\n            <ion-col\n              size=\"7\"\n              class=\"placeholder-profile text-center\"\n              *ngIf=\"!userProfile?.firstName\"\n            >\n              <span> Tap here to edit. </span>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </ion-label>\n    </ion-item>\n    <ion-item>\n      <ion-label class=\"dob-label\">Data di Nascita</ion-label>\n      \n    </ion-item>\n    <ion-item (click)=\"updateEmail()\">\n      <ion-label>\n        <ion-grid>\n          <ion-row>\n            <ion-col class=\"text-left\" size=\"5\"> Email </ion-col>\n            <ion-col class=\"text-center\" size=\"7\" *ngIf=\"userProfile?.email\">\n              {{ userProfile?.email }}\n            </ion-col>\n            <ion-col\n              size=\"7\"\n              class=\"placeholder-profile text-center\"\n              *ngIf=\"!userProfile?.email\"\n            >\n              <span> Tap here to edit. </span>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </ion-label>\n    </ion-item>\n    <ion-item (click)=\"updatePassword()\">\n      <ion-label>\n        <ion-grid>\n          <ion-row>\n            <ion-col class=\"text-left\" size=\"5\"> Password </ion-col>\n            <ion-col class=\"text-center\" size=\"7\" class=\"placeholder-profile\">\n              <span> Tap here to edit. </span>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </ion-label>\n    </ion-item>\n  </ion-list>\n</ion-content>\n";

/***/ }),

/***/ 2822:
/*!***************************************************************************************!*\
  !*** ./src/app/pages/customers/create/new-customer/new-customer.page.html?ngResource ***!
  \***************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"dismiss()\">\n        <ion-icon name=\"close\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>newCustomer</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <app-dynamic-form [questions]=\"formFields\" (interactiveSubmit)=\"filter($event)\" (singleSubmit)=\"submit($event)\" [submitText]=\"submitText\"></app-dynamic-form>\n</ion-content>\n";

/***/ }),

/***/ 86520:
/*!*******************************************************************************************!*\
  !*** ./src/app/pages/customers/edit/update-customer/update-customer.page.html?ngResource ***!
  \*******************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>updateCustomer</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"dismiss()\">\n        <ion-icon name=\"close\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <app-dynamic-form [questions]=\"formFields\" (interactiveSubmit)=\"filter($event)\" (singleSubmit)=\"submit($event)\"></app-dynamic-form>\n  <p>utente iscritto il {{customer.dor.ItalianFormatDate()}}</p>\n</ion-content>\n";

/***/ }),

/***/ 73950:
/*!******************************************************!*\
  !*** ./src/app/pages/menu/menu.page.html?ngResource ***!
  \******************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-header>\n\n  <app-logout-user></app-logout-user>\n\n</ion-header>\n\n<ion-content>\n\n  <ion-content>\n\n\n\n    <ion-list id=\"inbox-list\">\n      <ion-list-header>\n        <ion-label text-center> Benvenuto in Genial lotto, scegli l'algoritmo <ion-icon name=\"arrow-down\"\n            style=\"zoom:4.0\" color=\"danger\"></ion-icon>\n        </ion-label>\n      </ion-list-header>\n\n\n      <ion-item class=\"menuItem\" routerDirection=\"root\" lines=\"none\" detail=\"false\" routerLinkActive=\"selected\"\n        (click)=\"p.onClick()\" *ngFor=\"let p of appPages; let i = index\">\n        <ion-icon color=\"danger\" slot=\"start\" name=\"arrow-forward\"></ion-icon>\n        <ion-icon slot=\"start\" [ios]=\"p.icon + '-outline'\" [md]=\"p.icon + '-sharp'\" *ngIf=\"!p.src\"></ion-icon>\n        <ion-img slot=\"start\" src={{p.src}} *ngIf=\"p.src\" style=\"height:40px\"></ion-img>\n        <ion-icon src=\"\"></ion-icon>\n        <ion-label style=\" background-color:black; color: white;\">{{ p.title }}</ion-label>\n      </ion-item>\n    </ion-list>\n    <ion-footer style=\"font-size:small\">Disclaimer:I risultati che otterrai grazie a Genial lotto saranno frutto del tuo\n      impegno profuso nel tempo!nessuno garantisce la Tua vincita\n      là dove non seguirai i video presenti nella piattaforma e non ti focalizzerai nel modo giusto! questo è un sistema\n      vincentelà dove tu seguirai e saprai\n      studiare, concentrato come Giusy consiglia. Non calcolare per giocare, ma calcola per capire, la vincita è una\n      conseguenza dell'aver capito,\n      ma se farai di testa Tua giocando a caso senza uno studio mirato e focalizzato, noi di Vinciamo insieme al lotto\n      decliniamo qualsiasi responsabilità sulle tue future perdite.\n      Grazie e Buone Vincite </ion-footer>\n  </ion-content>\n\n</ion-content>";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(14431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map