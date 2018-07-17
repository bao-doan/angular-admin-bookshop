(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/_helpers/fake-backend.ts":
/*!******************************************!*\
  !*** ./src/app/_helpers/fake-backend.ts ***!
  \******************************************/
/*! exports provided: FakeBackendInterceptor, fakeBackendProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FakeBackendInterceptor", function() { return FakeBackendInterceptor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fakeBackendProvider", function() { return fakeBackendProvider; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FakeBackendInterceptor = /** @class */ (function () {
    function FakeBackendInterceptor() {
    }
    FakeBackendInterceptor.prototype.intercept = function (request, next) {
        var testUser = { id: 1, username: 'bao', password: 'doan', firstName: 'Test', lastName: 'User' };
        // wrap in delayed observable to simulate server api call
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(null).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["mergeMap"])(function () {
            // authenticate
            if (request.url.endsWith('/api/authenticate') && request.method === 'POST') {
                if (request.body.username === testUser.username && request.body.password === testUser.password) {
                    // if login details are valid return 200 OK with a fake jwt token
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"]({ status: 200, body: { token: 'fake-jwt-token' } }));
                }
                else {
                    // else return 400 bad request
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])('Username or password is incorrect');
                }
            }
            // get users
            if (request.url.endsWith('/api/users') && request.method === 'GET') {
                // check for fake auth token in header and return users if valid, this security is implemented server side in a real application
                if (request.headers.get('Authorization') === 'Bearer fake-jwt-token') {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"]({ status: 200, body: [testUser] }));
                }
                else {
                    // return 401 not authorised if token is null or invalid
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])('Unauthorised');
                }
            }
            // pass through any requests not handled above
            return next.handle(request);
        }))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["materialize"])())
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["delay"])(500))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["dematerialize"])());
    };
    FakeBackendInterceptor = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], FakeBackendInterceptor);
    return FakeBackendInterceptor;
}());

var fakeBackendProvider = {
    // use fake backend in place of Http service for backend-less development
    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HTTP_INTERCEPTORS"],
    useClass: FakeBackendInterceptor,
    multi: true
};


/***/ }),

/***/ "./src/app/_helpers/index.ts":
/*!***********************************!*\
  !*** ./src/app/_helpers/index.ts ***!
  \***********************************/
/*! exports provided: JwtInterceptor, FakeBackendInterceptor, fakeBackendProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _jwt_interceptor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./jwt.interceptor */ "./src/app/_helpers/jwt.interceptor.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "JwtInterceptor", function() { return _jwt_interceptor__WEBPACK_IMPORTED_MODULE_0__["JwtInterceptor"]; });

/* harmony import */ var _fake_backend__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fake-backend */ "./src/app/_helpers/fake-backend.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FakeBackendInterceptor", function() { return _fake_backend__WEBPACK_IMPORTED_MODULE_1__["FakeBackendInterceptor"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fakeBackendProvider", function() { return _fake_backend__WEBPACK_IMPORTED_MODULE_1__["fakeBackendProvider"]; });





/***/ }),

/***/ "./src/app/_helpers/jwt.interceptor.ts":
/*!*********************************************!*\
  !*** ./src/app/_helpers/jwt.interceptor.ts ***!
  \*********************************************/
/*! exports provided: JwtInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JwtInterceptor", function() { return JwtInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var JwtInterceptor = /** @class */ (function () {
    function JwtInterceptor() {
    }
    JwtInterceptor.prototype.intercept = function (request, next) {
        // add authorization header with jwt token if available
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        // let sessionUser = JSON.parse(sessionStorage.getItem('currentUser'));
        if (currentUser && currentUser.token) {
            request = request.clone({
                setHeaders: {
                    Authorization: "" + currentUser.token
                }
            });
        }
        return next.handle(request);
    };
    JwtInterceptor = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], JwtInterceptor);
    return JwtInterceptor;
}());



/***/ }),

/***/ "./src/app/app-custom/app-custom.module.ts":
/*!*************************************************!*\
  !*** ./src/app/app-custom/app-custom.module.ts ***!
  \*************************************************/
/*! exports provided: AppCustomModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppCustomModule", function() { return AppCustomModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _pipe_filter_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pipe-filter.pipe */ "./src/app/app-custom/pipe-filter.pipe.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AppCustomModule = /** @class */ (function () {
    function AppCustomModule() {
    }
    AppCustomModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
            ],
            exports: [_pipe_filter_pipe__WEBPACK_IMPORTED_MODULE_2__["PipeFilterPipe"]],
            declarations: [_pipe_filter_pipe__WEBPACK_IMPORTED_MODULE_2__["PipeFilterPipe"]]
        })
    ], AppCustomModule);
    return AppCustomModule;
}());



/***/ }),

/***/ "./src/app/app-custom/pipe-filter.pipe.ts":
/*!************************************************!*\
  !*** ./src/app/app-custom/pipe-filter.pipe.ts ***!
  \************************************************/
/*! exports provided: PipeFilterPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PipeFilterPipe", function() { return PipeFilterPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var PipeFilterPipe = /** @class */ (function () {
    function PipeFilterPipe() {
    }
    PipeFilterPipe.prototype.transform = function (books, title, args) {
        if (!title) {
            return null;
        }
        else {
            if (title) {
                books = books.filter(function (b) {
                    return b.title.toLowerCase().toString().indexOf(title.toLowerCase()) != -1;
                });
                return books;
            }
        }
    };
    PipeFilterPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'pipeFilter'
        })
    ], PipeFilterPipe);
    return PipeFilterPipe;
}());



/***/ }),

/***/ "./src/app/app-directive/forbidden-name.directive.ts":
/*!***********************************************************!*\
  !*** ./src/app/app-directive/forbidden-name.directive.ts ***!
  \***********************************************************/
/*! exports provided: forbiddenNameValidator, ForbiddenValidatorDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "forbiddenNameValidator", function() { return forbiddenNameValidator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForbiddenValidatorDirective", function() { return ForbiddenValidatorDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/** A hero's name can't match the given regular expression */
function forbiddenNameValidator(nameRe) {
    return function (control) {
        var forbidden = nameRe.test(control.value);
        return forbidden ? { 'forbiddenName': { value: control.value } } : null;
    };
}
var ForbiddenValidatorDirective = /** @class */ (function () {
    function ForbiddenValidatorDirective() {
    }
    ForbiddenValidatorDirective_1 = ForbiddenValidatorDirective;
    ForbiddenValidatorDirective.prototype.validate = function (control) {
        return this.forbiddenName ? forbiddenNameValidator(new RegExp(this.forbiddenName, 'i'))(control)
            : null;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('appForbiddenName'),
        __metadata("design:type", String)
    ], ForbiddenValidatorDirective.prototype, "forbiddenName", void 0);
    ForbiddenValidatorDirective = ForbiddenValidatorDirective_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[appForbiddenName]',
            providers: [{ provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALIDATORS"], useExisting: ForbiddenValidatorDirective_1, multi: true }]
        })
    ], ForbiddenValidatorDirective);
    return ForbiddenValidatorDirective;
    var ForbiddenValidatorDirective_1;
}());



/***/ }),

/***/ "./src/app/app-routing/app-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/app-routing/app-routing.module.ts ***!
  \***************************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _category_category_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../category/category.component */ "./src/app/category/category.component.ts");
/* harmony import */ var _product_product_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../product/product.component */ "./src/app/product/product.component.ts");
/* harmony import */ var _product_add_product_add_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../product-add/product-add.component */ "./src/app/product-add/product-add.component.ts");
/* harmony import */ var _order_order_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../order/order.component */ "./src/app/order/order.component.ts");
/* harmony import */ var _user_user_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../user/user.component */ "./src/app/user/user.component.ts");
/* harmony import */ var _staff_staff_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../staff/staff.component */ "./src/app/staff/staff.component.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../profile/profile.component */ "./src/app/profile/profile.component.ts");
/* harmony import */ var _auth_auth_guard__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../auth/auth.guard */ "./src/app/auth/auth.guard.ts");
/* harmony import */ var _home_layout_home_layout_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../home-layout/home-layout.component */ "./src/app/home-layout/home-layout.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _login_layout_login_layout_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../login-layout/login-layout.component */ "./src/app/login-layout/login-layout.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../login/login.component */ "./src/app/login/login.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var routes = [
    { path: '', redirectTo: 'product', pathMatch: 'full' },
    {
        path: '', component: _login_layout_login_layout_component__WEBPACK_IMPORTED_MODULE_13__["LoginLayoutComponent"], children: [
            { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_14__["LoginComponent"] }
        ]
    },
    {
        path: '', component: _home_layout_home_layout_component__WEBPACK_IMPORTED_MODULE_11__["HomeLayoutComponent"],
        canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_10__["AuthGuard"]],
        children: [
            { path: '', redirectTo: 'product', pathMatch: 'full' },
            { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_12__["HomeComponent"] },
            { path: 'profile', component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_9__["ProfileComponent"] },
            { path: 'dashboard', component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__["DashboardComponent"] },
            { path: 'category', component: _category_category_component__WEBPACK_IMPORTED_MODULE_3__["CategoryComponent"] },
            { path: 'product', component: _product_product_component__WEBPACK_IMPORTED_MODULE_4__["ProductComponent"] },
            { path: 'product-add', component: _product_add_product_add_component__WEBPACK_IMPORTED_MODULE_5__["ProductAddComponent"] },
            { path: 'manage-order', component: _order_order_component__WEBPACK_IMPORTED_MODULE_6__["OrderComponent"] },
            { path: 'manage-user', component: _user_user_component__WEBPACK_IMPORTED_MODULE_7__["UserComponent"] },
            { path: 'manage-staff', component: _staff_staff_component__WEBPACK_IMPORTED_MODULE_8__["StaffComponent"] }
        ]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            declarations: []
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing_app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing/app-routing.module */ "./src/app/app-routing/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _category_category_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./category/category.component */ "./src/app/category/category.component.ts");
/* harmony import */ var _product_product_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./product/product.component */ "./src/app/product/product.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _product_add_product_add_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./product-add/product-add.component */ "./src/app/product-add/product-add.component.ts");
/* harmony import */ var _breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./breadcrumb/breadcrumb.component */ "./src/app/breadcrumb/breadcrumb.component.ts");
/* harmony import */ var _order_order_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./order/order.component */ "./src/app/order/order.component.ts");
/* harmony import */ var _user_user_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./user/user.component */ "./src/app/user/user.component.ts");
/* harmony import */ var _staff_staff_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./staff/staff.component */ "./src/app/staff/staff.component.ts");
/* harmony import */ var froala_editor_js_froala_editor_pkgd_min_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! froala-editor/js/froala_editor.pkgd.min.js */ "./node_modules/froala-editor/js/froala_editor.pkgd.min.js");
/* harmony import */ var froala_editor_js_froala_editor_pkgd_min_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(froala_editor_js_froala_editor_pkgd_min_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var angular_froala_wysiwyg__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! angular-froala-wysiwyg */ "./node_modules/angular-froala-wysiwyg/index.js");
/* harmony import */ var _app_directive_forbidden_name_directive__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./app-directive/forbidden-name.directive */ "./src/app/app-directive/forbidden-name.directive.ts");
/* harmony import */ var _home_layout_home_layout_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./home-layout/home-layout.component */ "./src/app/home-layout/home-layout.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _login_layout_login_layout_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./login-layout/login-layout.component */ "./src/app/login-layout/login-layout.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _auth_auth_guard__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./auth/auth.guard */ "./src/app/auth/auth.guard.ts");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./_helpers */ "./src/app/_helpers/index.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/profile/profile.component.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _app_custom_app_custom_module__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./app-custom/app-custom.module */ "./src/app/app-custom/app-custom.module.ts");
/* harmony import */ var _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./not-found/not-found.component */ "./src/app/not-found/not-found.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














// Import Froala Editor.


// Import Angular2 plugin.













var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _category_category_component__WEBPACK_IMPORTED_MODULE_6__["CategoryComponent"],
                _product_product_component__WEBPACK_IMPORTED_MODULE_7__["ProductComponent"],
                _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_8__["DashboardComponent"],
                _product_add_product_add_component__WEBPACK_IMPORTED_MODULE_9__["ProductAddComponent"],
                _app_directive_forbidden_name_directive__WEBPACK_IMPORTED_MODULE_16__["ForbiddenValidatorDirective"],
                _breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_10__["BreadcrumbComponent"],
                _order_order_component__WEBPACK_IMPORTED_MODULE_11__["OrderComponent"],
                _user_user_component__WEBPACK_IMPORTED_MODULE_12__["UserComponent"],
                _staff_staff_component__WEBPACK_IMPORTED_MODULE_13__["StaffComponent"],
                _home_layout_home_layout_component__WEBPACK_IMPORTED_MODULE_17__["HomeLayoutComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_18__["HomeComponent"],
                _login_layout_login_layout_component__WEBPACK_IMPORTED_MODULE_19__["LoginLayoutComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_20__["LoginComponent"],
                _profile_profile_component__WEBPACK_IMPORTED_MODULE_24__["ProfileComponent"],
                _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_27__["NotFoundComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _app_routing_app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _app_custom_app_custom_module__WEBPACK_IMPORTED_MODULE_26__["AppCustomModule"],
                angular_froala_wysiwyg__WEBPACK_IMPORTED_MODULE_15__["FroalaEditorModule"].forRoot(),
                angular_froala_wysiwyg__WEBPACK_IMPORTED_MODULE_15__["FroalaViewModule"].forRoot()
            ],
            providers: [
                _auth_auth_guard__WEBPACK_IMPORTED_MODULE_21__["AuthGuard"],
                _auth_auth_service__WEBPACK_IMPORTED_MODULE_22__["AuthService"],
                _services_user_service__WEBPACK_IMPORTED_MODULE_25__["UserService"],
                {
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HTTP_INTERCEPTORS"],
                    useClass: _helpers__WEBPACK_IMPORTED_MODULE_23__["JwtInterceptor"],
                    multi: true
                },
                // provider used to create fake backend
                _helpers__WEBPACK_IMPORTED_MODULE_23__["fakeBackendProvider"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth/auth.guard.ts":
/*!************************************!*\
  !*** ./src/app/auth/auth.guard.ts ***!
  \************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthGuard = /** @class */ (function () {
    function AuthGuard(router) {
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        var currentuser = localStorage.getItem('currentUser');
        //   let sessionuser = sessionStorage.getItem('currentUser');
        if (currentuser) {
            // logged in so return true
            return true;
        }
        // not logged in so redirect to login page with the return url
        this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
        return false;
    };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/auth/auth.service.ts":
/*!**************************************!*\
  !*** ./src/app/auth/auth.service.ts ***!
  \**************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
var AuthService = /** @class */ (function () {
    function AuthService(http, router) {
        this.http = http;
        this.router = router;
        this.loginUrl = 'http://green-web-ecommerce.herokuapp.com/v1/users/login';
        this.demo = "http://green-web-bookshop.herokuapp.com/api/orders/login";
    }
    AuthService.prototype.login = function (username, password) {
        return this.http.post(this.loginUrl, { email: username, password: password })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
            // login successful if there's a jwt token in the response
            if (res && res.token) {
                // store username and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('currentUser', JSON.stringify({ email: username, token: res.token }));
            }
        }));
    };
    AuthService.prototype.logout = function () {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
        // navigate to login component
        // this.loggedIn.next(false);
        this.router.navigate(['/login']);
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/breadcrumb/breadcrumb.component.css":
/*!*****************************************************!*\
  !*** ./src/app/breadcrumb/breadcrumb.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/breadcrumb/breadcrumb.component.html":
/*!******************************************************!*\
  !*** ./src/app/breadcrumb/breadcrumb.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ol class=\"breadcrumb\">\r\n  <li class=\"breadcrumb-item\">\r\n      <a href=\"#\">Admin</a>\r\n  </li>\r\n  <li class=\"breadcrumb-item active\">{{breadcrumbTitle}}</li>\r\n</ol>"

/***/ }),

/***/ "./src/app/breadcrumb/breadcrumb.component.ts":
/*!****************************************************!*\
  !*** ./src/app/breadcrumb/breadcrumb.component.ts ***!
  \****************************************************/
/*! exports provided: BreadcrumbComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BreadcrumbComponent", function() { return BreadcrumbComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BreadcrumbComponent = /** @class */ (function () {
    function BreadcrumbComponent() {
    }
    BreadcrumbComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], BreadcrumbComponent.prototype, "breadcrumbTitle", void 0);
    BreadcrumbComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-breadcrumb',
            template: __webpack_require__(/*! ./breadcrumb.component.html */ "./src/app/breadcrumb/breadcrumb.component.html"),
            styles: [__webpack_require__(/*! ./breadcrumb.component.css */ "./src/app/breadcrumb/breadcrumb.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], BreadcrumbComponent);
    return BreadcrumbComponent;
}());



/***/ }),

/***/ "./src/app/category/category.component.css":
/*!*************************************************!*\
  !*** ./src/app/category/category.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/category/category.component.html":
/*!**************************************************!*\
  !*** ./src/app/category/category.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = " <!-- Breadcrumb-->\r\n <app-breadcrumb [breadcrumbTitle]=\"componentTitle\"></app-breadcrumb>\r\n\r\n<div class=\"container-fluid\">\r\n  <div class=\"row\">\r\n    <div class=\"col-12 col-md-6 col-lg-5 mb-3\">\r\n      <h5 class=\"mb-3\">Create New Category</h5>\r\n        <div class=\"form-group\">\r\n          <label for=\"formAddCategory\">Name</label>\r\n          <input [(ngModel)]=\"objectGenre.name\" (keyup.enter)=\"addGenre()\" type=\"text\" id=\"formAddCategory\" name=\"formAddCategory\"\r\n            class=\"form-control myInput-elegant-2 d-inline\" #genrename=\"ngModel\" required minlength=\"4\" autofocus>\r\n          <div *ngIf=\"genrename.invalid && (genrename.dirty || genrename.touched)\" class=\"\">\r\n            <div *ngIf=\"genrename.errors.minlength\" class=\"alert alert-warning\">\r\n              Input name must be at least 4 characters long.\r\n            </div>\r\n          </div>\r\n        </div>\r\n      <button (click)=\"addGenre()\" [disabled]=\"!(objectGenre.name?.length >= 4)\" class=\"btn btn-success rounded-0 d-block ml-auto\">\r\n        <i class=\"fas fa-plus\"></i> Create</button>\r\n    </div>\r\n    <div class=\"col-12\">\r\n      <table class=\"table table-striped table-hover table-outline mb-2\">\r\n        <thead class=\"thead-light\">\r\n          <tr>\r\n            <th class=\"d-flex flex-row justify-content-between\">\r\n              <span>Category</span>\r\n              <button (click)=\"getGenres()\" class=\"btn btn-link p-0\" type=\"button\">\r\n                <i class=\"fas fa-sync-alt\"></i> Refresh</button>\r\n            </th>\r\n          </tr>\r\n        </thead>\r\n        <tbody *ngIf=\"genres\" class=\"\">\r\n          <tr *ngFor=\"let genre of genres\">\r\n            <td class=\"d-flex flex-row justify-content-between\">\r\n              <span>{{genre.name}}</span>\r\n              <span>\r\n                <a (click)=\"onSelect(genre)\" class=\"mr-3\" data-toggle=\"modal\" data-target=\"#modalEdit\" href=\"\">Edit</a>\r\n                <a (click)=\"onSelectDelete(genre)\" class=\"text-danger\" title=\"Remove\" data-toggle=\"modal\" data-target=\"#modalDelete\" href=\"\">Delete</a>\r\n              </span>\r\n            </td>\r\n          </tr>\r\n        </tbody>\r\n      </table>\r\n      <p>Displaying {{genres?.length || '0 item'}}\r\n        <span *ngIf=\"genres?.length == 1\">item</span>\r\n        <span *ngIf=\"genres?.length == 0\">item</span>\r\n        <span *ngIf=\"genres?.length\">items</span>\r\n      </p>\r\n      <!-- <p *ngIf=\"!genres?.length\">\r\n        No item to display!\r\n      </p> -->\r\n    </div>\r\n  </div>\r\n</div>\r\n<!-- Modal: DELETE -->\r\n<div *ngIf=\"selectedDelete\" id=\"modalDelete\" class=\"modal\" tabindex=\"-1\" role=\"dialog\">\r\n  <div class=\"modal-dialog\" role=\"document\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <h5 class=\"modal-title\">Confirm delete</h5>\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <p>Are you sure want to delete?</p>\r\n        <b class=\"text-danger\">{{selectedDelete.name}} </b>\r\n      </div>\r\n      <div class=\"modal-footer\">\r\n        <button (click)=\"deleteGenre(selectedDelete)\" data-dismiss=\"modal\" type=\"button\" class=\"btn btn-primary\">Delete</button>\r\n        <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Keep</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<!-- Modal: EDIT -->\r\n<div id=\"modalEdit\" class=\"modal\" tabindex=\"-1\" role=\"dialog\">\r\n  <div class=\"modal-dialog\" role=\"document\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <h5 class=\"modal-title\">Editing</h5>\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n      </div>\r\n      <div *ngIf=\"selectedGenre\" class=\"modal-body\">\r\n        <!-- doing -->\r\n        <div class=\"form-group\">\r\n          <label for=\"formAddCategory\">Category:</label>\r\n          <input [(ngModel)]=\"selectedGenre.name\" type=\"text\" id=\"formAddCategory\" name=\"formAddCategory\" class=\"form-control myInput-elegant-2\"\r\n            #genrenameEdit=\"ngModel\" required minlength=\"4\">\r\n          <div *ngIf=\"genrenameEdit.invalid && (genrenameEdit.dirty || genrenameEdit.touched)\" class=\"\">\r\n            <div *ngIf=\"genrenameEdit.errors.required\" class=\"alert alert-danger\">\r\n              Name is required.\r\n            </div>\r\n            <div *ngIf=\"genrenameEdit.errors.minlength\" class=\"alert alert-warning\">\r\n              Input name must be at least 4 characters long.\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <p>Name: {{selectedGenre.name}}</p>\r\n        <p>Id: {{selectedGenre._id}}</p>\r\n        <p>Created date: {{selectedGenre.create_date}}</p>\r\n      </div>\r\n      <div class=\"modal-footer\">\r\n        <button data-target=\"#modalConfirmUpdate\" data-toggle=\"modal\" data-dismiss=\"modal\" type=\"button\" class=\"btn btn-primary\">Update</button>\r\n        <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Discard</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<!-- MODAL: Confirm Update -->\r\n<div id=\"modalConfirmUpdate\" class=\"modal\" tabindex=\"-1\" role=\"dialog\">\r\n  <div class=\"modal-dialog\" role=\"document\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <h5 class=\"modal-title\">Confirm Update</h5>\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <p>Are you sure want to update?</p>\r\n        <p *ngIf=\"selectedGenre\">To: {{selectedGenre.name}}</p>\r\n      </div>\r\n      <div class=\"modal-footer\">\r\n        <button (click)=\"updateGenre()\" data-dismiss=\"modal\" type=\"button\" class=\"btn btn-primary\">Yes</button>\r\n        <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">No</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<!-- SNACKBAR -->\r\n<div id=\"snackbar\">You added <span class=\"text-success\">{{noti}}</span> sucessfully!</div>"

/***/ }),

/***/ "./src/app/category/category.component.ts":
/*!************************************************!*\
  !*** ./src/app/category/category.component.ts ***!
  \************************************************/
/*! exports provided: CategoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryComponent", function() { return CategoryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_genre_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/genre.service */ "./src/app/services/genre.service.ts");
/* harmony import */ var _view_models_genre__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../view-models/genre */ "./src/app/view-models/genre.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CategoryComponent = /** @class */ (function () {
    // objectGenre: Genre;
    // updatingGenre= new Genre(this.selectedGenre.name);
    function CategoryComponent(genreService, location, route) {
        this.genreService = genreService;
        this.location = location;
        this.route = route;
        this.componentTitle = 'Categories';
        this.updatingGenre = this.selectedDelete;
        this.objectGenre = new _view_models_genre__WEBPACK_IMPORTED_MODULE_4__["Genre"]();
        this.notification = {}; //For add, edit, delete notification
        this.on_s = "items";
    }
    CategoryComponent.prototype.ngOnInit = function () {
        this.getGenres();
        // this.countGenres();
    };
    CategoryComponent.prototype.onSelect = function (genre) {
        this.selectedGenre = genre;
    };
    CategoryComponent.prototype.onSelectDelete = function (genre) {
        this.selectedDelete = genre;
    };
    CategoryComponent.prototype.getGenres = function () {
        var _this = this;
        this.genreService.getGenres().subscribe(function (z) { return _this.genres = z; });
    };
    ;
    // countGenres(): void {
    //   if (this.genres.length == 1 ) {
    //   }
    // }
    CategoryComponent.prototype.addGenre = function () {
        var _this = this;
        this.noti = this.objectGenre.name;
        if (this.objectGenre.name.length > 0) {
            this.genreService.addGenre(this.objectGenre).subscribe(function (_) {
                _this.objectGenre.name = "";
                _this.genres.push(_);
            });
        }
        this.onNoti();
    };
    CategoryComponent.prototype.deleteGenre = function (genre) {
        this.genres = this.genres.filter(function (h) { return h !== genre; });
        this.genreService.deleteGenre(genre).subscribe();
    };
    CategoryComponent.prototype.updateGenre = function () {
        this.genreService.updateGenre(this.selectedGenre)
            .subscribe();
    };
    // Bao doan
    CategoryComponent.prototype.onNoti = function () {
        var x = document.getElementById("snackbar");
        x.className = "show";
        setTimeout(function () { x.className = x.className.replace("show", ""); }, 3000);
    };
    CategoryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-category',
            template: __webpack_require__(/*! ./category.component.html */ "./src/app/category/category.component.html"),
            styles: [__webpack_require__(/*! ./category.component.css */ "./src/app/category/category.component.css")]
        }),
        __metadata("design:paramtypes", [_services_genre_service__WEBPACK_IMPORTED_MODULE_3__["GenreService"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], CategoryComponent);
    return CategoryComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.component.css":
/*!***************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.html":
/*!****************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Breadcrumb-->\r\n<app-breadcrumb [breadcrumbTitle]=\"componentTitle\"></app-breadcrumb>\r\n<div class=\"container-fluid\" *ngIf=\"user.first\">\r\n    <div class=\"row mt-4\">\r\n        <div class=\"col-12\">\r\n          <h3 *ngIf=\"user\">Welcome <span class=\"text-success\">{{user.first}} {{user.last}}</span> !</h3>\r\n        </div>\r\n      </div>\r\n  <div class=\"row py-4\">\r\n      <div class=\"col-sm-6 col-md-4 mb-1\">\r\n          <div class=\"card text-white bg-primary\">\r\n            <div class=\"card-body pb-0\">\r\n              <div class=\"btn-group float-right\">\r\n                <button type=\"button\" class=\"btn btn-transparent dropdown-toggle p-0\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n                  <i class=\"icon-settings\"></i>\r\n                </button>\r\n                <div class=\"dropdown-menu dropdown-menu-right\">\r\n                  <a class=\"dropdown-item\" href=\"#\">View profile</a>\r\n                  <a class=\"dropdown-item\" href=\"#\">Another action</a>\r\n                  <a class=\"dropdown-item\" href=\"#\">Something else here</a>\r\n                </div>\r\n              </div>\r\n              <div class=\"text-value\">Profile</div>\r\n              <div>View profile</div>\r\n              <div class=\"mt-3 mx-3\"></div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      <div class=\"col-sm-6 col-md-4 mb-1\">\r\n          <div class=\"card text-white bg-warning\">\r\n            <div class=\"card-body pb-0\">\r\n              <div class=\"btn-group float-right\">\r\n                <button type=\"button\" class=\"btn btn-transparent dropdown-toggle p-0\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n                  <i class=\"icon-settings\"></i>\r\n                </button>\r\n                <div class=\"dropdown-menu dropdown-menu-right\">\r\n                  <a class=\"dropdown-item\" href=\"#\">Manage Customers</a>\r\n                  <a class=\"dropdown-item\" href=\"#\">Manage Staffs</a>\r\n                </div>\r\n              </div>\r\n              <div class=\"text-value\">People</div>\r\n              <div>Customer account, Staff account</div>\r\n              <div class=\"mt-3 mx-3\"></div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      <div class=\"col-sm-6 col-md-4 mb-1\">\r\n          <div class=\"card text-white bg-success\">\r\n            <div class=\"card-body pb-0\">\r\n              <div class=\"btn-group float-right\">\r\n                <button type=\"button\" class=\"btn btn-transparent dropdown-toggle p-0\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n                  <i class=\"icon-settings\"></i>\r\n                </button>\r\n                <div class=\"dropdown-menu dropdown-menu-right\">\r\n                  <a class=\"dropdown-item\" href=\"#\">Manage Categories</a>\r\n                  <a class=\"dropdown-item\" href=\"#\">Manage Products</a>\r\n                  <a class=\"dropdown-item\" href=\"#\">Manage Oders</a>\r\n                </div>\r\n              </div>\r\n              <div class=\"text-value\">Shop</div>\r\n              <div>Categories, Products, Purchase oders</div>\r\n              <div class=\"mt-3 mx-3\"></div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _view_models_user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../view-models/user */ "./src/app/view-models/user.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DashboardComponent = /** @class */ (function () {
    // users: Users = new Users();
    // user: User = this.users.user;
    // person:string = this.users.first;
    function DashboardComponent(userService) {
        this.userService = userService;
        this.componentTitle = 'Dashboard';
        this.user = new _view_models_user__WEBPACK_IMPORTED_MODULE_2__["User"]();
    }
    DashboardComponent.prototype.ngOnInit = function () {
        this.getUsers();
        this.user_email = JSON.parse(localStorage.currentUser).email;
    };
    DashboardComponent.prototype.getUsers = function () {
        var _this = this;
        this.userService.getUsers().subscribe(function (_) { return _this.user = _.user; });
    };
    DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/home-layout/home-layout.component.css":
/*!*******************************************************!*\
  !*** ./src/app/home-layout/home-layout.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/home-layout/home-layout.component.html":
/*!********************************************************!*\
  !*** ./src/app/home-layout/home-layout.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<body class=\"app header-fixed sidebar-fixed aside-menu-fixed sidebar-lg-show\">\r\n    <header class=\"app-header navbar\">\r\n        <button class=\"navbar-toggler sidebar-toggler d-lg-none mr-auto\" type=\"button\" data-toggle=\"sidebar-show\" title=\"Show/Hide Menu\">\r\n            <span class=\"navbar-toggler-icon\"></span>\r\n        </button>\r\n        <a class=\"navbar-brand\" href=\"\" routerLink=\"/dashboard\">\r\n            <span class=\"navbar-brand-full\" alt=\"Brand Logo Full\">Admin Panel</span>\r\n            <span class=\"navbar-brand-minimized\" width=\"30\" height=\"30\" alt=\"Brand Logo Mini\">B</span>\r\n        </a>\r\n        <ul class=\"nav navbar-nav ml-auto\">\r\n            <li class=\"nav-item mr-2\">\r\n                <button class=\"dropdown-toggle btn btn-pill btn-ghost-success d-sm-down-none\" type=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n                    {{user_email}}\r\n                </button>\r\n                <div class=\"dropdown-menu dropdown-menu-right\">\r\n                        <a class=\"dropdown-item\" href=\"\" routerLink=\"/dashboard\">\r\n                            <i class=\"fas fa-tachometer-alt\"></i> Dashboard</a>\r\n                        <a class=\"dropdown-item\" href=\"https://bao-doan.github.io\">\r\n                            <i class=\"fas fa-shopping-cart\"></i> Shop Page</a>\r\n                        <a class=\"dropdown-item\" href=\"#\" data-toggle=\"modal\" data-target=\"#modalAdminLogout\">\r\n                            <i class=\"fas fa-sign-out-alt\"></i> Logout</a>\r\n                    </div>\r\n            </li>\r\n            <li class=\"nav-item d-md-none\">\r\n                <button class=\"navbar-toggler dropdown-toggle\" type=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n                    <i class=\"fas fa-cog text-dark\" title=\"Go Dashboard or go Homepage\"></i>\r\n                </button>\r\n                <div class=\"dropdown-menu dropdown-menu-right\">\r\n                        <a class=\"dropdown-item\" href=\"\" routerLink=\"/dashboard\">\r\n                            <i class=\"fas fa-tachometer-alt\"></i> Dashboard</a>\r\n                        <a class=\"dropdown-item\" href=\"https://bao-doan.github.io\">\r\n                            <i class=\"fas fa-shopping-cart\"></i> Shop Page</a>\r\n                        <a class=\"dropdown-item\" href=\"#\" data-toggle=\"modal\" data-target=\"#modalAdminLogout\">\r\n                            <i class=\"fas fa-sign-out-alt\"></i> Logout</a>\r\n                    </div>\r\n            </li>\r\n        </ul>\r\n    </header>\r\n    <div class=\"app-body\">\r\n        <div class=\"sidebar\">\r\n            <nav class=\"sidebar-nav\">\r\n                <ul class=\"nav\">\r\n\r\n                    <li class=\"nav-title text-warning\">ADMIN</li>\r\n                    <li class=\"nav-item\">\r\n                        <a class=\"nav-link\" href=\"#\" routerLink=\"/dashboard\" routerLinkActive=\"active\">\r\n                            <i class=\"fas fa-tachometer-alt nav-icon\"></i> Dashboard\r\n                        </a>\r\n                        <a class=\"nav-link\" href=\"#\" routerLink=\"/profile\" routerLinkActive=\"active\">\r\n                            <i class=\"fas fa-user nav-icon\"></i> Profile\r\n                        </a>\r\n                    </li>\r\n                    \r\n                    <li class=\"nav-title text-warning\">SHOP</li>\r\n                    <li class=\"nav-item\">\r\n                        <a class=\"nav-link\" href=\"\" routerLink=\"/category\" routerLinkActive=\"active\">\r\n                            <i class=\"fas fa-book nav-icon\"></i> All Categories\r\n                        </a>\r\n                    </li>\r\n                    <li class=\"nav-item\">\r\n                        <a class=\"nav-link\" href=\"#\" routerLink=\"/product\" routerLinkActive=\"active\">\r\n                            <i class=\"fas fa-book nav-icon\"></i> All Products\r\n                        </a>\r\n                    </li>\r\n                    <li class=\"nav-item\">\r\n                        <a class=\"nav-link\" href=\"#\" routerLink=\"/manage-order\" routerLinkActive=\"active\">\r\n                            <i class=\"fas fa-book nav-icon\"></i> Purchase Orders\r\n                        </a>\r\n                    </li>\r\n                    <li class=\"nav-title text-warning\">ACCOUNTS</li>\r\n                    <li class=\"nav-item\">\r\n                        <a class=\"nav-link\" href=\"#\" routerLink=\"/manage-user\" routerLinkActive=\"active\">\r\n                            <i class=\"far fa-address-book nav-icon\"></i> Manage Users\r\n                        </a>\r\n                    </li>\r\n                    <li class=\"nav-item\">\r\n                            <a class=\"nav-link\" href=\"#\" routerLink=\"/manage-staff\" routerLinkActive=\"active\">\r\n                                <i class=\"far fa-address-book nav-icon\"></i> Manage Staffs\r\n                            </a>\r\n                        </li>\r\n                </ul>\r\n            </nav>\r\n        </div>\r\n        <main class=\"main\">\r\n            <!-- Main content -->\r\n            <router-outlet></router-outlet>\r\n        </main>\r\n    </div>\r\n    <footer class=\"app-footer mt-4\">\r\n        <div>\r\n            <a href=\"../../index.html\">Brand Co., Ltd</a>\r\n            <span>&copy; 2018.</span>\r\n        </div>\r\n        <div class=\"ml-auto\">\r\n            <span>Powered by</span>\r\n            <a href=\"https://coreui.io\">CoreUI</a>\r\n        </div>\r\n    </footer>\r\n</body>\r\n<!-- MODAL: Admin Logout -->\r\n<div class=\"modal fade\" id=\"modalAdminLogout\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"modalAdminLogoutLabel\" aria-hidden=\"true\">\r\n    <div class=\"modal-dialog\" role=\"document\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n                <h5 class=\"modal-title\" id=\"exampleModalLabel\">Admin Logout</h5>\r\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n                    <span aria-hidden=\"true\">&times;</span>\r\n                </button>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n                <p class=\"text-danger\">{{user_email}}</p>\r\n                <p>Are yout sure want to logout?</p>\r\n            </div>\r\n            <div class=\"modal-footer\">\r\n                <button (click)=\"onLogout()\" type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\">Yes</button>\r\n                <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">No</button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/home-layout/home-layout.component.ts":
/*!******************************************************!*\
  !*** ./src/app/home-layout/home-layout.component.ts ***!
  \******************************************************/
/*! exports provided: HomeLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeLayoutComponent", function() { return HomeLayoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../auth/auth.service */ "./src/app/auth/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeLayoutComponent = /** @class */ (function () {
    function HomeLayoutComponent(authService) {
        this.authService = authService;
    }
    HomeLayoutComponent.prototype.ngOnInit = function () {
        this.user_email = JSON.parse(localStorage.getItem('currentUser')).email;
    };
    HomeLayoutComponent.prototype.onLogout = function () {
        this.authService.logout();
    };
    HomeLayoutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home-layout',
            template: __webpack_require__(/*! ./home-layout.component.html */ "./src/app/home-layout/home-layout.component.html"),
            styles: [__webpack_require__(/*! ./home-layout.component.css */ "./src/app/home-layout/home-layout.component.css")]
        }),
        __metadata("design:paramtypes", [_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]])
    ], HomeLayoutComponent);
    return HomeLayoutComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "This is HomeComponent."

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/login-layout/login-layout.component.css":
/*!*********************************************************!*\
  !*** ./src/app/login-layout/login-layout.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/login-layout/login-layout.component.html":
/*!**********************************************************!*\
  !*** ./src/app/login-layout/login-layout.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/login-layout/login-layout.component.ts":
/*!********************************************************!*\
  !*** ./src/app/login-layout/login-layout.component.ts ***!
  \********************************************************/
/*! exports provided: LoginLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginLayoutComponent", function() { return LoginLayoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LoginLayoutComponent = /** @class */ (function () {
    function LoginLayoutComponent() {
    }
    LoginLayoutComponent.prototype.ngOnInit = function () {
    };
    LoginLayoutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login-layout',
            template: __webpack_require__(/*! ./login-layout.component.html */ "./src/app/login-layout/login-layout.component.html"),
            styles: [__webpack_require__(/*! ./login-layout.component.css */ "./src/app/login-layout/login-layout.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LoginLayoutComponent);
    return LoginLayoutComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div class=\"row justify-content-center mt-5\">\n    <div class=\"col-12 col-md-6 col-lg-5\">\n      <div class=\"card p-4\">\n        <div class=\"card-body\">\n          <h3>Login</h3>\n          <p class=\"text-muted\">You are signing in as an Administrator.</p>\n          <form [formGroup]=\"loginAdminForm\" (ngSubmit)=\"onSubmit()\">\n\n            <div class=\"form-group mb-3\">\n              <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                  <span class=\"input-group-text\">\n                    <i class=\"icon-user\"></i>\n                  </span>\n                </div>\n                <input formControlName=\"username\" required type=\"text\" class=\"form-control text-truncate rounded-0\" placeholder=\"Email\" autofocus>\n               \n              </div>\n              <div *ngIf=\"submitted && f.username.errors\" class=\"text-danger\">\n                <div *ngIf=\"f.username.errors.required\">* Email is required</div>\n                <div *ngIf=\"f.username.errors.email\">* Must be a valid Email address</div>\n              </div>\n            </div>\n            \n           \n            <div class=\"form-group mb-3\">\n              <div class=\"input-group position-relative rounded-circle\">\n                <div class=\"input-group-prepend\">\n                  <span class=\"input-group-text\">\n                    <i class=\"icon-lock\"></i>\n                  </span>\n                </div>\n                <input formControlName=\"password\" required [type]=\"show\" class=\"form-control text-truncate\" placeholder=\"Password\">\n                   \n                    <!-- <div class=\"input-group-append\"> -->\n                      <!-- <span class=\"input-group-text\"> -->\n                        <button (click)=\"onToggle()\" type=\"button\"  class=\"myText-link myIcon-inside text-muted\"><i *ngIf=\"!value\" class=\"far fa-eye\"></i><i *ngIf=\"value\" class=\"far fa-eye-slash\"></i></button>\n                      <!-- </span> -->\n                    <!-- </div> -->\n                \n              </div>\n              <div *ngIf=\"submitted && f.password.errors\" class=\"text-danger\">\n                <div *ngIf=\"f.password.errors.required\">* Password is required</div>\n              </div>\n            </div>\n           \n           \n            <div class=\"form-group form-check custom-control custom-checkbox\">\n              <input [(ngModel)]=\"remember\" type=\"checkbox\" class=\"form-check-input custom-control-input\" id=\"formLoginRemember\" [ngModelOptions]=\"{standalone: true}\">\n              <label class=\"form-check-label custom-control-label text-muted\" for=\"formLoginRemember\">Remember login</label>\n          </div>\n            <div class=\"row\">\n              <div class=\"col-6\">\n                <button [disabled]=\"loading\" type=\"submit\" class=\"btn btn-primary px-4\">Login</button>\n                <img *ngIf=\"loading\" src=\"data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==\"\n                />\n              </div>\n              <div class=\"col-12\">\n                <button type=\"button\" class=\"btn btn-link px-0\">Forgot password?</button>\n              </div>\n              <div class=\"col-12 mt-3\">\n                <div *ngIf=\"error\" class=\"text-danger\"><i class=\"icon-close\"></i> Cannot login because: <b>{{error.error.error}}</b></div>\n              </div>\n            </div>\n          </form>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../auth/auth.service */ "./src/app/auth/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginComponent = /** @class */ (function () {
    function LoginComponent(fb, route, router, authService) {
        this.fb = fb;
        this.route = route;
        this.router = router;
        this.authService = authService;
        this.loading = false;
        this.submitted = false;
        this.error = '';
        // For toggle Show or Hide password input
        this.show = "password";
        this.value = 0;
        //For Remember password
        this.remember = false;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.loginAdminForm = this.fb.group({
            username: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
        // this.authService.logout();
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    };
    Object.defineProperty(LoginComponent.prototype, "f", {
        // convenience getter for easy access to form fields
        get: function () { return this.loginAdminForm.controls; },
        enumerable: true,
        configurable: true
    });
    LoginComponent.prototype.onSubmit = function () {
        this.submitted = true;
        // stop here if form is invalid
        if (this.loginAdminForm.invalid) {
            return;
        }
        this.isLoggedIn();
        // this.onCheckRemember();
    };
    LoginComponent.prototype.onToggle = function () {
        if (this.value % 2 == 1) {
            this.show = "password";
            this.value = 0;
        }
        else {
            this.show = "text";
            this.value = 1;
        }
    };
    LoginComponent.prototype.onCheckRemember = function () {
        // console.log(this.remember);
        var sessionuser = sessionStorage.getItem('currentUser').toString();
        if (this.remember == false) {
            // window.onunload = function() {localStorage.removeItem('currentUser')};
        }
        else {
            localStorage.setItem('currentUser2', "" + sessionuser);
        }
    };
    LoginComponent.prototype.isLoggedIn = function () {
        var currentuser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentuser && currentuser.token) {
            var confirmPopup = window.confirm("You must logout before logging in as an another User\nDo you want to logout now?");
            console.log("Already logged in, User: " + currentuser.email + " | Token: " + currentuser.token);
            if (confirmPopup == true) {
                this.authService.logout();
                alert('You are logged out');
            }
            else { }
        }
        else {
            console.log('No user logged in, ready to log in now');
            this.onLogin();
        }
    };
    LoginComponent.prototype.onLogin = function () {
        var _this = this;
        this.loading = true;
        this.authService.login(this.f.username.value, this.f.password.value)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["first"])())
            .subscribe(function (data) {
            _this.router.navigate([_this.returnUrl]);
        }, function (error) {
            _this.error = error;
            _this.loading = false;
        });
        // if (sessionStorage.getItem('currentUser')) { 
        //   this.onCheckRemember(); 
        // } else {
        //   console.log('chua co sessionStorage');
        // }
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/not-found/not-found.component.css":
/*!***************************************************!*\
  !*** ./src/app/not-found/not-found.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/not-found/not-found.component.html":
/*!****************************************************!*\
  !*** ./src/app/not-found/not-found.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-12 text-center myBody-buffer d-flex flex-column justify-content-center py-3\">\n        <h1>NOT FOUND.</h1>\n        <h3 class=\"text-danger\">Site is not available now.</h3>\n        <p>This site is under construction, please visit later.</p>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/not-found/not-found.component.ts":
/*!**************************************************!*\
  !*** ./src/app/not-found/not-found.component.ts ***!
  \**************************************************/
/*! exports provided: NotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function() { return NotFoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NotFoundComponent = /** @class */ (function () {
    function NotFoundComponent() {
    }
    NotFoundComponent.prototype.ngOnInit = function () {
    };
    NotFoundComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-not-found',
            template: __webpack_require__(/*! ./not-found.component.html */ "./src/app/not-found/not-found.component.html"),
            styles: [__webpack_require__(/*! ./not-found.component.css */ "./src/app/not-found/not-found.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NotFoundComponent);
    return NotFoundComponent;
}());



/***/ }),

/***/ "./src/app/order/order.component.css":
/*!*******************************************!*\
  !*** ./src/app/order/order.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/order/order.component.html":
/*!********************************************!*\
  !*** ./src/app/order/order.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = " <!-- Breadcrumb-->\r\n <app-breadcrumb [breadcrumbTitle]=\"componentTitle\"></app-breadcrumb>\r\n<div class=\"container-fluid\">\r\n  <div class=\"row\">\r\n    <!-- <div class=\"col-sm-6 col-md-4 mb-3\">\r\n      <div class=\"input-group\">\r\n        <input type=\"text\" class=\"form-control\" placeholder=\"Search order\" aria-label=\"Search order\" aria-describedby=\"basic-addon2\">\r\n        <div class=\"input-group-append\">\r\n          <button class=\"btn btn-outline-secondary\" type=\"button\">\r\n            <i class=\"fas fa-search\"></i>\r\n          </button>\r\n        </div>\r\n      </div>\r\n    </div> -->\r\n    <div class=\"col-12 mb-3\">\r\n        <button (click)=\"getOrders()\" class=\"btn btn-link p-0 d-block float-right\" type=\"button\"><i class=\"fas fa-sync-alt\"></i> Refresh</button>\r\n    </div>\r\n    <div class=\"col-12 mb-3 table-responsive\">\r\n      <table class=\"table table-striped table-hover table-outline mb-2\">\r\n        <thead class=\"thead-light\">\r\n          <tr>\r\n            <th>Order ID</th>\r\n            <th>Customer Email</th>\r\n            <th>Amount</th>\r\n          </tr>\r\n        </thead>\r\n        <tbody *ngIf=\"orders\" class=\"\">\r\n          <tr *ngFor=\"let order of orders\" title=\"Click to view details\" class=\"myCursor\">\r\n            <td (click)=\"onSelect(order)\" data-target=\"#modalProductDetail\" data-toggle=\"modal\">{{order._id}}</td>\r\n            <td (click)=\"onSelect(order)\" data-target=\"#modalProductDetail\" data-toggle=\"modal\">{{order._user?.email}}</td>\r\n            <td (click)=\"onSelect(order)\" data-target=\"#modalProductDetail\" data-toggle=\"modal\">{{order.total | currency:'VND'}}</td>\r\n          </tr>\r\n        </tbody>\r\n      </table>\r\n      <p *ngIf=\"orders\">Displaying {{orders?.length || '0'}}\r\n          <span *ngIf=\"orders?.length <= 1\">item</span> \r\n          <span *ngIf=\"orders?.length > 1\">items</span> \r\n        </p>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/order/order.component.ts":
/*!******************************************!*\
  !*** ./src/app/order/order.component.ts ***!
  \******************************************/
/*! exports provided: OrderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderComponent", function() { return OrderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_order_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/order.service */ "./src/app/services/order.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var OrderComponent = /** @class */ (function () {
    function OrderComponent(orderService) {
        this.orderService = orderService;
        this.componentTitle = 'Manage Orders';
    }
    OrderComponent.prototype.ngOnInit = function () {
        this.getOrders();
    };
    OrderComponent.prototype.onSelect = function (order) {
        this.selectedOrder = order;
    };
    OrderComponent.prototype.getOrders = function () {
        var _this = this;
        this.orderService.getOrders().subscribe(function (_) { return _this.orders = _; });
    };
    OrderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-order',
            template: __webpack_require__(/*! ./order.component.html */ "./src/app/order/order.component.html"),
            styles: [__webpack_require__(/*! ./order.component.css */ "./src/app/order/order.component.css")]
        }),
        __metadata("design:paramtypes", [_services_order_service__WEBPACK_IMPORTED_MODULE_1__["OrderService"]])
    ], OrderComponent);
    return OrderComponent;
}());



/***/ }),

/***/ "./src/app/product-add/product-add.component.css":
/*!*******************************************************!*\
  !*** ./src/app/product-add/product-add.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/product-add/product-add.component.html":
/*!********************************************************!*\
  !*** ./src/app/product-add/product-add.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Breadcrumb-->\r\n<app-breadcrumb [breadcrumbTitle]=\"componentTitle\"></app-breadcrumb>\r\n<div class=\"container-fluid\">\r\n    <form [formGroup]=\"bookForm\" #formDir=\"ngForm\">\r\n        <div class=\"row\">\r\n            <div class=\"col-12\">\r\n                <h3 class=\"myText-warm mb-3\">Create New Product</h3>\r\n                <a routerLink=\"/product\" href=\"\" class=\"text-dark\">\r\n                    <i class=\"far fa-address-book\"></i> All products</a>\r\n            </div>\r\n            <div class=\"col-12\">\r\n                <button type=\"button\" class=\"btn btn-danger rounded-0 float-right\" (click)=\"createAddForm()\">\r\n                    <i class=\"fas fa-eraser\"></i> Reset</button>\r\n                <button type=\"submit\" (click)=\"onSaveBook()\" [disabled]=\"bookForm.invalid\" class=\"btn btn-success rounded-0 float-right\">\r\n                    <i class=\"fas fa-plus\"></i> Create</button>\r\n            </div>\r\n            <div class=\"col-12 mb-3\">\r\n                <div class=\"form-group\">\r\n                    <label for=\"formAddBookTitle\">Title (*)</label>\r\n                    <input type=\"text\" id=\"formAddBookTitle\" name=\"formAddBookTitle\" class=\"form-control myInput-elegant-2\" formControlName=\"title\"\r\n                        required autofocus>\r\n                    <div *ngIf=\"f.title.invalid && (f.title.dirty || f.title.touched)\" class=\"\">\r\n                        <div *ngIf=\"f.title.errors.required\" class=\"text-danger\">\r\n                            * Title is required.\r\n                        </div>\r\n                        <div *ngIf=\"f.title.errors.minlength\" class=\"text-warning\">\r\n                            * Title must be at least 4 characters long.\r\n                        </div>\r\n                    </div>\r\n\r\n                </div>\r\n\r\n            </div>\r\n            <div class=\"col-12 col-sm-6 col-md-4 mb-3\">\r\n                <div class=\"form-group\">\r\n                    <label for=\"formAddBookAuthor\">Author (*)</label>\r\n                    <input type=\"text\" id=\"formAddBookAuthor\" name=\"formAddBookAuthor\" class=\"form-control myInput-elegant-2\" formControlName=\"author\"\r\n                        required>\r\n                    <div *ngIf=\"f.author.invalid && (f.author.dirty || f.author.touched)\" class=\"\">\r\n                        <div *ngIf=\"f.author.errors.required\" class=\"text-danger\">\r\n                            * Author name is required.\r\n                        </div>\r\n                        <div *ngIf=\"f.author.errors.minlength\" class=\"text-warning\">\r\n                            * Author name must be at least 4 characters long.\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-12 col-sm-6 col-md-4 mb-3\">\r\n                <div class=\"form-group\">\r\n                    <label for=\"formAddBookPublisher\">Publisher (*)</label>\r\n                    <input type=\"text\" id=\"formAddBookPublisher\" name=\"formAddBookPublisher\" class=\"form-control myInput-elegant-2\" formControlName=\"publisher\"\r\n                        required>\r\n                    <div *ngIf=\"f.publisher.invalid && (f.publisher.dirty || f.publisher.touched)\" class=\"\">\r\n                        <div *ngIf=\"f.publisher.errors.required\" class=\"text-danger\">\r\n                            * Publisher is required.\r\n                        </div>\r\n                        <div *ngIf=\"f.publisher.errors.minlength\" class=\"text-warning\">\r\n                            * Publisher must be at least 4 characters long.\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-12 col-sm-6 col-md-4 mb-3\">\r\n                <div class=\"form-group\">\r\n                    <label (click)=\"getGenres()\" for=\"formAddBookSelectGenre\">Genre (*)</label>\r\n                    <select *ngIf=\"genres\" class=\"form-control myInput-elegant-2\" id=\"formAddBookSelectGenre\" formControlName=\"genre\" required>\r\n                        <option *ngFor=\"let x of genres\" [ngValue]=\"x\">{{x.name}}</option>\r\n                    </select>\r\n                    <div *ngIf=\"f.genre.errors && f.genre.touched\" class=\"text-danger\">\r\n                        <div *ngIf=\"f.genre.errors.required\">* Genre must be selected</div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-12 col-sm-6 col-md-4 mb-3\">\r\n                <div class=\"form-group\">\r\n                    <label for=\"formAddBookPages\">Pages</label>\r\n                    <input type=\"number\" min=\"0\" oninput=\"this.value = Math.abs(this.value)\" id=\"formAddBookPages\" name=\"formAddBookPages\" class=\"form-control myInput-elegant-2\"\r\n                        formControlName=\"pages\">\r\n                </div>\r\n            </div>\r\n            <div class=\"col-12 col-sm-6 col-md-4 mb-3\">\r\n                <div class=\"form-group\">\r\n                    <label for=\"formAddBookWeight\">Weight</label>\r\n                    <input type=\"number\" min=\"0\" oninput=\"this.value = Math.abs(this.value)\" id=\"formAddBookWeight\" name=\"formAddBookWeight\"\r\n                        class=\"form-control myInput-elegant-2\" formControlName=\"weight\">\r\n                </div>\r\n            </div>\r\n            <div class=\"col-12 col-sm-6 col-md-4 mb-3\">\r\n                <div class=\"form-group\">\r\n                    <label for=\"formAddBookReleaseDate\">Release Date</label>\r\n                    <input type=\"date\" id=\"formAddBookReleaseDate\" name=\"formAddBookReleaseDate\" class=\"form-control myInput-elegant-2\"\r\n                        formControlName=\"releaseDate\" placeholder=\"\">\r\n                </div>\r\n            </div>\r\n            <div class=\"col-12 col-sm-6 col-md-4 mb-3\">\r\n                <div class=\"form-group\">\r\n                    <label for=\"formAddBookSKU\">SKU</label>\r\n                    <input type=\"text\" id=\"formAddBookSKU\" name=\"formAddBookSKU\" class=\"form-control myInput-elegant-2\" formControlName=\"sku\">\r\n                </div>\r\n            </div>\r\n            <div class=\"col-12 col-sm-6 col-md-4 mb-3\">\r\n                <div class=\"form-group\">\r\n                    <label for=\"formAddBookPreviousPrice\">Previous Price (*)</label>\r\n                    <input type=\"number\" min=\"0\" oninput=\"this.value = Math.abs(this.value)\" id=\"formAddBookPreviousPrice\" name=\"formAddBookPreviousPrice\"\r\n                        class=\"form-control myInput-elegant-2\" formControlName=\"previousPrice\" required>\r\n                    <div *ngIf=\"f.previousPrice.invalid && (f.previousPrice.dirty || f.previousPrice.touched)\" class=\"\">\r\n                        <div *ngIf=\"f.previousPrice.errors.required\" class=\"text-danger\">\r\n                            Number is required.\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-12 col-sm-6 col-md-4 mb-3\">\r\n                <div class=\"form-group\">\r\n                    <label for=\"formAddBookSellingPrice\">Selling Price (*)</label>\r\n                    <input type=\"number\" min=\"0\" oninput=\"this.value = Math.abs(this.value)\" id=\"formAddBookSellingPrice\" name=\"formAddBookSellingPrice\"\r\n                        class=\"form-control myInput-elegant-2\" formControlName=\"sellingPrice\" required>\r\n                    <div *ngIf=\"f.sellingPrice.invalid && (f.sellingPrice.dirty || f.sellingPrice.touched)\" class=\"\">\r\n                        <div *ngIf=\"f.sellingPrice.errors.required\" class=\"text-danger\">\r\n                            Number is required.\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-12 mb-3\">\r\n                <div class=\"form-group\">\r\n                    <label for=\"formAddBookImages\">Main Image (*)</label>\r\n                    <input type=\"text\" id=\"formAddBookImages\" name=\"formAddBookImages\" class=\"form-control myInput-elegant-2\" formControlName=\"images_main\"\r\n                        required>\r\n                    <div *ngIf=\"f.images_main.invalid && (f.images_main.dirty || f.images_main.touched)\" class=\"\">\r\n                        <div *ngIf=\"f.images_main.errors.required\" class=\"text-danger\">\r\n                            Required a link.\r\n                        </div>\r\n                    </div>\r\n                    <a href=\"\" class=\"text-dark mt-2\" data-toggle=\"collapse\" href=\"#collapseReviewImage\" role=\"button\" aria-expanded=\"false\"\r\n                        aria-controls=\"collapseReviewImage\">\r\n                        <i class=\"far fa-image\"></i> View Image</a>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-12\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-12 col-sm-4 col-lg-4 mb-3\">\r\n                        <div class=\"form-group\">\r\n                            <label for=\"formAddBookSizeWidth\">Width (cm)</label>\r\n                            <input type=\"number\" min=\"0\" oninput=\"this.value = Math.abs(this.value)\" id=\"formAddBookSizeWidth\" name=\"formAddBookSizeWidth\"\r\n                                class=\"form-control myInput-elegant-2\" formControlName=\"size_width\">\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-12 col-sm-4 col-lg-4 mb-3\">\r\n                        <div class=\"form-group\">\r\n                            <label for=\"formAddBookSizeHeight\">Height (cm)</label>\r\n                            <input type=\"number\" min=\"0\" oninput=\"this.value = Math.abs(this.value)\" id=\"formAddBookSizeHeight\" name=\"formAddBookSizeHeight\"\r\n                                class=\"form-control myInput-elegant-2\" formControlName=\"size_height\">\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-12 col-sm-4 col-lg-4 mb-3\">\r\n                        <div class=\"form-group\">\r\n                            <label for=\"formAddBookSizeDepth\">Depth (cm)</label>\r\n                            <input type=\"number\" min=\"0\" oninput=\"this.value = Math.abs(this.value)\" id=\"formAddBookSizeDepth\" name=\"formAddBookSizeDepth\"\r\n                                class=\"form-control myInput-elegant-2\" formControlName=\"size_depth\">\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"col-12 mb-3\">\r\n                <div class=\"form-group\">\r\n                    <label for=\"formAddBookShortDescription\">Short Description</label>\r\n                    <textarea class=\"form-control myInput-elegant-2\" id=\"formAddBookShortDescription\" rows=\"3\" formControlName=\"shortDescription\"></textarea>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-12 mb-3\">\r\n                <div class=\"form-group\">\r\n                    <label for=\"formAddBookFullDescription\">Full Description</label>\r\n                    <textarea [froalaEditor]=\"HelloFroala\" class=\"form-control\" id=\"formAddBookFullDescription\" rows=\"10\" formControlName=\"fullDescription\"></textarea>\r\n                </div>\r\n\r\n            </div>\r\n\r\n        </div>\r\n    </form>\r\n</div>\r\n\r\n<!-- MODAL: Missing fields -->\r\n<div id=\"modalMissingField\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\">\r\n    <div class=\"modal-dialog\" role=\"document\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n                <h5 class=\"modal-title\">Missing information</h5>\r\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n                    <span aria-hidden=\"true\">&times;</span>\r\n                </button>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n                <p>it looks like you have left some fields empty</p>\r\n                <p class=\"text-danger\">Pages, Weight, ...</p>\r\n                <p>Do you want to check again?</p>\r\n            </div>\r\n            <div class=\"modal-footer\">\r\n                <button type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\">No, just proceed</button>\r\n                <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Let me check</button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/product-add/product-add.component.ts":
/*!******************************************************!*\
  !*** ./src/app/product-add/product-add.component.ts ***!
  \******************************************************/
/*! exports provided: ProductAddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductAddComponent", function() { return ProductAddComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_book_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/book.service */ "./src/app/services/book.service.ts");
/* harmony import */ var _services_genre_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/genre.service */ "./src/app/services/genre.service.ts");
/* harmony import */ var _view_models_book__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../view-models/book */ "./src/app/view-models/book.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ProductAddComponent = /** @class */ (function () {
    function ProductAddComponent(fb, bookService, genreService) {
        this.fb = fb;
        this.bookService = bookService;
        this.genreService = genreService;
        this.componentTitle = 'Product Add';
        this.objectBook = new _view_models_book__WEBPACK_IMPORTED_MODULE_4__["Book"]();
    }
    ProductAddComponent.prototype.ngOnInit = function () {
        this.createAddForm();
    };
    ProductAddComponent.prototype.createAddForm = function () {
        this.getGenres();
        // this.objectBook = new Book();
        this.bookForm = this.fb.group({
            title: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(4)]],
            author: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(4)]],
            publisher: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(4)]],
            pages: [''],
            weight: [''],
            releaseDate: [''],
            sku: [''],
            previousPrice: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            sellingPrice: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            images_main: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            size_width: [''],
            size_height: [''],
            size_depth: [''],
            shortDescription: [''],
            fullDescription: [''],
            genre: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]]
        });
    };
    Object.defineProperty(ProductAddComponent.prototype, "f", {
        get: function () { return this.bookForm.controls; },
        enumerable: true,
        configurable: true
    });
    ProductAddComponent.prototype.onSaveBook = function () {
        // Assign value from bookForm to objectBook
        this.objectBook.title = this.f.title.value;
        this.objectBook.author = this.f.author.value;
        this.objectBook.publisher = this.f.publisher.value;
        this.objectBook.genre._id = this.f.genre.value._id;
        this.objectBook.genre.name = this.f.genre.value.name;
        this.objectBook.pages = this.f.pages.value;
        this.objectBook.weight = this.f.weight.value;
        this.objectBook.releaseDate = this.f.releaseDate.value;
        this.objectBook.sku = this.f.sku.value;
        this.objectBook.previousPrice = this.f.previousPrice.value;
        this.objectBook.sellingPrice = this.f.sellingPrice.value;
        this.objectBook.images.main = this.f.images_main.value;
        this.objectBook.size.width = this.f.size_width.value;
        this.objectBook.size.height = this.f.size_height.value;
        this.objectBook.size.depth = this.f.size_depth.value;
        this.objectBook.shortDescription = this.f.shortDescription.value;
        this.objectBook.fullDescription = this.f.fullDescription.value;
        // End of Assigning
        this.addBook();
    };
    ProductAddComponent.prototype.getGenres = function () {
        var _this = this;
        this.genreService.getGenres().subscribe(function (__) { return _this.genres = __; });
    };
    ProductAddComponent.prototype.addBook = function () {
        var _this = this;
        this.bookService.addBook(this.objectBook).subscribe(function (_) {
            console.log(_);
            alert("You have added successfully!\nProduct: " + _this.bookForm.value.title + "\nAuthor: " + _this.bookForm.value.author);
        });
    };
    ProductAddComponent.prototype.onCheckMissing = function () {
        return true;
    };
    ProductAddComponent.prototype.onListMissing = function () {
    };
    ProductAddComponent.prototype.onCallModal = function () {
        //this is for data-toggle=""
    };
    ProductAddComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-product-add',
            template: __webpack_require__(/*! ./product-add.component.html */ "./src/app/product-add/product-add.component.html"),
            styles: [__webpack_require__(/*! ./product-add.component.css */ "./src/app/product-add/product-add.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _services_book_service__WEBPACK_IMPORTED_MODULE_2__["BookService"],
            _services_genre_service__WEBPACK_IMPORTED_MODULE_3__["GenreService"]])
    ], ProductAddComponent);
    return ProductAddComponent;
}());



/***/ }),

/***/ "./src/app/product/product.component.css":
/*!***********************************************!*\
  !*** ./src/app/product/product.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/product/product.component.html":
/*!************************************************!*\
  !*** ./src/app/product/product.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Breadcrumb-->\r\n<app-breadcrumb [breadcrumbTitle]=\"componentTitle\"></app-breadcrumb>\r\n<!-- ProductComponent -->\r\n<div class=\"container-fluid\">\r\n  <div class=\"row\">\r\n    <div class=\"col-12 mb-3\">\r\n      <a routerLink=\"/product-add\" href=\"\" class=\"text-success\">\r\n        <i class=\"fas fa-plus-circle mr-2\"></i>\r\n        <span class=\"text-underline\">Add new product</span>\r\n      </a>\r\n    </div>\r\n    <div class=\"col-12 col-sm-6 col-md-5 col-lg-4\">\r\n      <div class=\"form-group position-relative w-100\">\r\n         <div class=\"position-relative\">\r\n            <input [(ngModel)]=\"title\" id=\"search-box\" type=\"text\" class=\"form-control text-truncate\" placeholder=\"Search product\" aria-label=\"Search by title\"\r\n            aria-describedby=\"basic-addon2\">\r\n            <button *ngIf=\"title\" (click)=\"onClearSearch()\" class=\"myText-link-2 myIcon-inside\" type=\"button\">\r\n                <i class=\"fas fa-times\"></i>\r\n              </button>\r\n         </div>\r\n        <ul *ngIf=\"books && title\" class=\"list-group mySearch rounded-0 w-100\">\r\n          <li *ngFor=\"let book of books | pipeFilter :title\" class=\"list-group-item myCursor list-group-item-action\">\r\n            <span class=\"w-75 float-left text-truncate\" (click)=\"onSelect(book)\" data-target=\"#modalProductDetail\"\r\n            data-toggle=\"modal\">{{book.title}}</span>\r\n            <span class=\"w-auto float-right px-0\">\r\n              <button (click)=\"onSelect(book)\" class=\"myText-link-2\" data-toggle=\"modal\" title=\"Edit this item\" data-target=\"#modalEdit\">\r\n                <i class=\"fas fa-pencil-alt\"></i>\r\n              </button>\r\n              <button (click)=\"onSelect(book)\" class=\"text-danger myText-link-2\" title=\"Remove\" data-toggle=\"modal\" data-target=\"#modalDelete\">\r\n                <i class=\"far fa-trash-alt\"></i>\r\n              </button>\r\n            </span>\r\n          </li>\r\n        </ul>\r\n      </div>\r\n    </div>\r\n    <!-- Show items button -->\r\n    <div class=\"col-12\">\r\n      <div class=\"form-group float-right\">\r\n        <label class=\"sr-only\" for=\"selectPagination\">Items per Page</label>\r\n        <select [(ngModel)]=\"step\" (change)=\"onShowOption(step)\" class=\"form-control myInput-elegant-3 w-auto\" id=\"selectPagination\"\r\n          required>\r\n          <option [ngValue]=\"books?.length\">Show all</option>\r\n          <option [ngValue]=\"2\">Show 2 items</option>\r\n          <option [ngValue]=\"5\">Show 5 items</option>\r\n          <option [ngValue]=\"10\">Show 10 items</option>\r\n          <option [ngValue]=\"20\">Show 20 items</option>\r\n        </select>\r\n      </div>\r\n    </div>\r\n    <!-- table -->\r\n    <div class=\"col-12 mb-3 table-responsive\">\r\n      <table class=\"table table-striped table-hover table-outline mb-2\">\r\n        <thead class=\"thead-light\">\r\n          <tr>\r\n            <th>No.</th>\r\n            <th>Product</th>\r\n            <th>Author</th>\r\n            <th>Publisher</th>\r\n            <th>\r\n              <button (click)=\"getBooks()\" class=\"btn btn-link p-0 d-block ml-auto\" type=\"button\">\r\n                <i class=\"fas fa-sync-alt\"></i> Refresh</button>\r\n            </th>\r\n          </tr>\r\n        </thead>\r\n        <tbody *ngIf=\"books\" class=\"\">\r\n          <tr *ngFor=\"let book of books2\" title=\"Click to view details\" class=\"myCursor\">\r\n\r\n            <td (click)=\"onSelect(book)\" data-target=\"#modalProductDetail\" data-toggle=\"modal\">{{books.indexOf(book) + 1}}</td>\r\n            <td (click)=\"onSelect(book)\" data-target=\"#modalProductDetail\" data-toggle=\"modal\">{{book.title}}</td>\r\n            <td (click)=\"onSelect(book)\" data-target=\"#modalProductDetail\" data-toggle=\"modal\">{{book.author}}</td>\r\n            <td (click)=\"onSelect(book)\" data-target=\"#modalProductDetail\" data-toggle=\"modal\">{{book.publisher}}</td>\r\n            <td>\r\n              <span class=\"d-block text-right\">\r\n                <a (click)=\"onSelect(book)\" class=\"mr-3\" data-toggle=\"modal\" title=\"Edit this item\" data-target=\"#modalEdit\" href=\"\">Edit</a>\r\n                <a (click)=\"onSelect(book)\" class=\"text-danger\" title=\"Remove\" data-toggle=\"modal\" data-target=\"#modalDelete\" href=\"\">Delete</a>\r\n              </span>\r\n            </td>\r\n          </tr>\r\n\r\n        </tbody>\r\n      </table>\r\n      <p class=\"text-muted\">Displaying {{books2?.length || '0'}} {{(books2?.length > 1) ? 'items' : 'item'}} out of {{books?.length|| '0'}} {{(books?.length\r\n        > 1) ? 'items' : 'item'}}</p>\r\n    </div>\r\n    <!-- Pagination -->\r\n    <div class=\"col-12 d-flex justify-content-center mb-3\">\r\n      <nav class=\"mb-3\" aria-label=\"Page navigation example\">\r\n        <ul class=\"pagination\">\r\n          <li class=\"\">\r\n            <button (click)=\"onPrevPage(selectedPage)\" [class.invisible]=\"selectedPage == 1\" class=\"btn btn-link text-dark\" title=\"Previous\">\r\n              <i class=\"fas fa-chevron-left\"></i>\r\n              <span class=\"sr-only\">Prev</span>\r\n            </button>\r\n          </li>\r\n          <li class=\"page-item\" *ngFor=\"let page of pageArray\" [class.active]=\"page == selectedPage\">\r\n            <button class=\"btn btn-pill page-link mx-1\" *ngIf=\"page < 6\" (click)=\"onShowItems(page)\">{{page}}</button>\r\n            <button class=\"btn btn-pill page-link mx-1\" *ngIf=\"page >= 6\" (click)=\"onShowItems(page)\">...</button>\r\n            <!-- <button class=\"page-link\" *ngIf=\"selectedPage >= 6\" (click)=\"onShowItems(page)\">{{page}}</button> -->\r\n          </li>\r\n          <!-- <li [hidden]=\"step == books?.length\" class=\"page-item\" [class.active]=\"page == selectedPage\">\r\n            <button class=\"page-link\">All</button>\r\n          </li> -->\r\n\r\n          <li class=\"\">\r\n            <button (click)=\"onNextPage(selectedPage)\" [class.invisible]=\"selectedPage == pages\" class=\"btn btn-link text-dark\" title=\"Next\">\r\n              <i class=\"fas fa-chevron-right\"></i>\r\n              <span class=\"sr-only\">Next</span>\r\n            </button>\r\n          </li>\r\n        </ul>\r\n      </nav>\r\n    </div>\r\n  </div>\r\n</div>\r\n<!-- MODAL: Details -->\r\n<div id=\"modalProductDetail\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\">\r\n  <div class=\"modal-dialog modal-lg\" role=\"document\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <h5 class=\"modal-title\">Product Details</h5>\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <div class=\"container-fluid\">\r\n          <div class=\"row\" *ngIf=\"selectedBook\">\r\n            <div class=\"col-12 mb-2\">\r\n              <div class=\"row\">\r\n                <div class=\"col-4 d-none d-sm-block\">\r\n                  <img *ngIf=\"selectedBook.images.main\" [src]=\"selectedBook.images.main\" class=\"w-100\" alt=\"\">\r\n                  <div *ngIf=\"!(selectedBook.images.main)\" class=\"text-muted\">(Image is unvailable)</div>\r\n                </div>\r\n                <div class=\"col-12 col-sm-8\">\r\n                  <div class=\"mb-2\">\r\n                    <h5 class=\"d-inline\">{{selectedBook.title}} </h5>\r\n                    <s *ngIf=\"selectedBook.previousPrice > selectedBook.sellingPrice\" class=\"mr-2\"> {{selectedBook.previousPrice | currency:'VND'}}</s>\r\n                    <span class=\"text-danger\"> {{selectedBook.sellingPrice | currency:'VND'}}</span>\r\n                  </div>\r\n                  <p class=\"font-italic\">{{selectedBook.shortDescription}}</p>\r\n                </div>\r\n              </div>\r\n              <div class=\"row\">\r\n                <div class=\"col-5 d-block d-sm-none mx-auto\">\r\n                  <img *ngIf=\"selectedBook.images.main\" [src]=\"selectedBook.images.main\" class=\"w-100\" alt=\"\">\r\n                  <div *ngIf=\"!(selectedBook.images.main)\" class=\"text-muted\">(Image is unvailable)</div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-12 mb-2 table-responsive\">\r\n              <table class=\"table table-striped table-hover table-outline\">\r\n                <tbody class=\"\">\r\n                  <tr>\r\n                    <th scope=\"row\">Publisher</th>\r\n                    <td>{{selectedBook.publisher}}</td>\r\n                  </tr>\r\n                  <tr>\r\n                    <th scope=\"row\">Genre</th>\r\n                    <td>{{selectedBook.genre.name}}</td>\r\n                  </tr>\r\n                  <tr>\r\n                    <th scope=\"row\">SKU</th>\r\n                    <td>{{selectedBook.sku}}</td>\r\n                  </tr>\r\n                  <tr>\r\n                    <th scope=\"row\">Pages</th>\r\n                    <td>{{selectedBook.pages}}</td>\r\n                  </tr>\r\n                  <tr>\r\n                    <th scope=\"row\">Weight</th>\r\n                    <td>{{selectedBook.weight}}</td>\r\n                  </tr>\r\n                  <tr>\r\n                    <th scope=\"row\">Dimension\r\n                      <br>(\r\n                      <span *ngIf=\"selectedBook.size.width\">Width</span>\r\n                      <span *ngIf=\"selectedBook.size.height\"> x Height</span>\r\n                      <span *ngIf=\"selectedBook.size.depth\"> x Depth</span>)</th>\r\n                    <td>\r\n                      <span *ngIf=\"selectedBook.size.width\">{{selectedBook.size.width}} cm</span>\r\n                      <span *ngIf=\"selectedBook.size.height\"> x {{selectedBook.size.height}} cm</span>\r\n                      <span *ngIf=\"selectedBook.size.depth\"> x {{selectedBook.size.depth}} cm</span>\r\n                    </td>\r\n                  </tr>\r\n                  <tr>\r\n                    <th scope=\"row\">Release Date</th>\r\n                    <td>{{selectedBook.releaseDate | date:'mediumDate'}}</td>\r\n                  </tr>\r\n\r\n                </tbody>\r\n              </table>\r\n            </div>\r\n            <div class=\"col-12\">\r\n              <h5>Description:</h5>\r\n              <div [innerHTML]=\"selectedBook.fullDescription\"></div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"modal-footer\">\r\n        <button data-dismiss=\"modal\" type=\"button\" class=\"btn btn-primary\">Close</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<!-- Modal: DELETE -->\r\n<div *ngIf=\"selectedBook\" id=\"modalDelete\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\">\r\n  <div class=\"modal-dialog\" role=\"document\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <h5 class=\"modal-title\">Confirm delete</h5>\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <p>Are you sure want to delete?</p>\r\n        <b class=\"text-danger\">{{selectedBook.title}} </b>\r\n      </div>\r\n      <div class=\"modal-footer\">\r\n        <button (click)=\"deleteBook(selectedBook)\" data-dismiss=\"modal\" type=\"button\" class=\"btn btn-primary\">Delete</button>\r\n        <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Keep</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<!-- Modal: EDIT BOOK -->\r\n<div class=\"modal fade\" id=\"modalEdit\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"modalEditLabel\" aria-hidden=\"true\">\r\n  <div class=\"modal-dialog modal-lg\" role=\"document\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <h5 class=\"modal-title\" id=\"exampleModalLabel\">Edit Product</h5>\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <div class=\"container-fluid\">\r\n          <div *ngIf=\"selectedBook\" class=\"row\">\r\n            <div class=\"col-12 mb-3\">\r\n              <div class=\"form-group\">\r\n                <label for=\"formAddBookTitle\">Title (*)</label>\r\n                <input [(ngModel)]=\"selectedBook.title\" type=\"text\" id=\"formAddBookTitle\" name=\"formAddBookTitle\" class=\"form-control myInput-elegant-2\"\r\n                  placeholder=\"\">\r\n              </div>\r\n            </div>\r\n            <div class=\"col-12 col-sm-6 col-md-4 mb-3\">\r\n              <div class=\"form-group\">\r\n                <label for=\"formAddBookAuthor\">Author (*)</label>\r\n                <input [(ngModel)]=\"selectedBook.author\" type=\"text\" id=\"formAddBookAuthor\" name=\"formAddBookAuthor\" class=\"form-control myInput-elegant-2\"\r\n                  placeholder=\"\">\r\n              </div>\r\n            </div>\r\n            <div class=\"col-12 col-sm-6 col-md-4 mb-3\">\r\n              <div class=\"form-group\">\r\n                <label for=\"formAddBookPublisher\">Publisher (*)</label>\r\n                <input [(ngModel)]=\"selectedBook.publisher\" type=\"text\" id=\"formAddBookPublisher\" name=\"formAddBookPublisher\" class=\"form-control myInput-elegant-2\"\r\n                  placeholder=\"\">\r\n              </div>\r\n            </div>\r\n            <div class=\"col-12 col-sm-6 col-md-4 mb-3\">\r\n              <div class=\"form-group\">\r\n                <label for=\"formEditBookSelectGenre\">Genre (*)</label>\r\n                <select *ngIf=\"genres\" [(ngModel)]=\"selectedBook.genre\" [compareWith]=\"compareFn\" class=\"form-control\" id=\"formEditBookSelectGenre\">\r\n                  <option *ngFor=\"let x of genres\" [ngValue]=\"x\">{{x.name}}</option>\r\n                </select>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-12 col-sm-6 col-md-4 mb-3\">\r\n              <div class=\"form-group\">\r\n                <label for=\"formAddBookPages\">Pages</label>\r\n                <input [(ngModel)]=\"selectedBook.pages\" type=\"number\" min=\"0\" id=\"formAddBookPages\" name=\"formAddBookPages\" class=\"form-control myInput-elegant-2\"\r\n                  placeholder=\"\">\r\n              </div>\r\n            </div>\r\n            <div class=\"col-12 col-sm-6 col-md-4 mb-3\">\r\n              <div class=\"form-group\">\r\n                <label for=\"formAddBookWeight\">Weight</label>\r\n                <input [(ngModel)]=\"selectedBook.weight\" type=\"number\" min=\"0\" id=\"formAddBookWeight\" name=\"formAddBookWeight\" class=\"form-control myInput-elegant-2\"\r\n                  placeholder=\"\">\r\n              </div>\r\n            </div>\r\n            <div class=\"col-12 col-sm-6 col-md-4 mb-3\">\r\n              <div class=\"form-group\">\r\n                <label for=\"formAddBookReleaseDate\">Release Date</label>\r\n                <input [(ngModel)]=\"selectedBook.releaseDate\" type=\"text\" id=\"formAddBookReleaseDate\" name=\"formAddBookReleaseDate\" class=\"form-control myInput-elegant-2\"\r\n                  placeholder=\"\">\r\n              </div>\r\n            </div>\r\n            <div class=\"col-12 col-sm-6 col-md-4 mb-3\">\r\n              <div class=\"form-group\">\r\n                <label for=\"formAddBookSKU\">SKU</label>\r\n                <input [(ngModel)]=\"selectedBook.sku\" type=\"text\" id=\"formAddBookSKU\" name=\"formAddBookSKU\" class=\"form-control myInput-elegant-2\"\r\n                  placeholder=\"\">\r\n              </div>\r\n            </div>\r\n            <div class=\"col-12 col-sm-6 col-md-4 mb-3\">\r\n              <div class=\"form-group\">\r\n                <label for=\"formAddBookPreviousPrice\">Previous Price (*)</label>\r\n                <input [(ngModel)]=\"selectedBook.previousPrice\" type=\"number\" min=\"0\" id=\"formAddBookPreviousPrice\" name=\"formAddBookPreviousPrice\"\r\n                  class=\"form-control myInput-elegant-2\" placeholder=\"\">\r\n              </div>\r\n            </div>\r\n            <div class=\"col-12 col-sm-6 col-md-4 mb-3\">\r\n              <div class=\"form-group\">\r\n                <label for=\"formAddBookSellingPrice\">Selling Price (*)</label>\r\n                <input [(ngModel)]=\"selectedBook.sellingPrice\" type=\"number\" min=\"0\" id=\"formAddBookSellingPrice\" name=\"formAddBookSellingPrice\"\r\n                  class=\"form-control myInput-elegant-2\" placeholder=\"\">\r\n              </div>\r\n            </div>\r\n            <div class=\"col-12 col-md-8 mb-3\">\r\n              <div class=\"form-group\">\r\n                <label for=\"formAddBookImages\">Main Image (*)</label>\r\n                <input [(ngModel)]=\"selectedBook.images.main\" type=\"text\" id=\"formAddBookImages\" name=\"formAddBookImages\" class=\"form-control myInput-elegant-2 mb-2\"\r\n                  placeholder=\"\" *ngIf=\"selectedBook.images\">\r\n                <a href=\"\" class=\"text-dark\" data-toggle=\"collapse\" href=\"#collapseReviewImage\" role=\"button\" aria-expanded=\"false\" aria-controls=\"collapseReviewImage\">\r\n                  <i class=\"far fa-image\"></i> View Image</a>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-12 col-md-10 col-lg-4 mb-3\">\r\n              <div class=\"collapse\" id=\"collapseReviewImage\">\r\n                <img *ngIf=\"selectedBook.images.main\" [src]=\"selectedBook.images.main\" alt=\"Warning: No image link found. You must add a link for image\"\r\n                  class=\"w-100\">\r\n              </div>\r\n            </div>\r\n            <div class=\"col-12\">\r\n              <div class=\"row\">\r\n                <div class=\"col-12 col-sm-6 col-lg-4 mb-3\">\r\n                  <div class=\"form-group\">\r\n                    <label for=\"formAddBookSizeWidth\">Width</label>\r\n                    <input [(ngModel)]=\"selectedBook.size.width\" type=\"number\" min=\"0\" id=\"formAddBookSizeWidth\" name=\"formAddBookSizeWidth\"\r\n                      class=\"form-control myInput-elegant-2\" placeholder=\"\">\r\n                  </div>\r\n                </div>\r\n                <div class=\"col-12 col-sm-6 col-lg-4 mb-3\">\r\n                  <div class=\"form-group\">\r\n                    <label for=\"formAddBookSizeHeight\">Height</label>\r\n                    <input [(ngModel)]=\"selectedBook.size.height\" type=\"number\" min=\"0\" id=\"formAddBookSizeHeight\" name=\"formAddBookSizeHeight\"\r\n                      class=\"form-control myInput-elegant-2\" placeholder=\"\">\r\n                  </div>\r\n                </div>\r\n                <div class=\"col-12 col-sm-6 col-lg-4 mb-3\">\r\n                  <div class=\"form-group\">\r\n                    <label for=\"formAddBookSizeDepth\">Depth</label>\r\n                    <input [(ngModel)]=\"selectedBook.size.depth\" type=\"number\" min=\"0\" sid=\"formAddBookSizeDepth\" name=\"formAddBookSizeDepth\"\r\n                      class=\"form-control myInput-elegant-2\" placeholder=\"\">\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"col-12 mb-3\">\r\n              <div class=\"form-group\">\r\n                <label for=\"formAddBookShortDescription\">Short Description</label>\r\n                <textarea [(ngModel)]=\"selectedBook.shortDescription\" class=\"form-control myInput-elegant-2\" id=\"formAddBookShortDescription\"\r\n                  rows=\"3\"></textarea>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-12 mb-3\">\r\n              <div class=\"form-group\">\r\n                <label for=\"formAddBookFullDescription\">Full Description</label>\r\n                <textarea [(ngModel)]=\"selectedBook.fullDescription\" [froalaEditor]=\"HelloFroala\" class=\"form-control\" id=\"formAddBookFullDescription\"\r\n                  rows=\"10\"></textarea>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"modal-footer\">\r\n        <button (click)=\"updateBook()\" type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\">Save changes</button>\r\n        <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Discard</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/product/product.component.ts":
/*!**********************************************!*\
  !*** ./src/app/product/product.component.ts ***!
  \**********************************************/
/*! exports provided: ProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductComponent", function() { return ProductComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_book_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/book.service */ "./src/app/services/book.service.ts");
/* harmony import */ var _view_models_book__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../view-models/book */ "./src/app/view-models/book.ts");
/* harmony import */ var _services_genre_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/genre.service */ "./src/app/services/genre.service.ts");
/* harmony import */ var _view_models_genre__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../view-models/genre */ "./src/app/view-models/genre.ts");
/* harmony import */ var _view_models_image__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../view-models/image */ "./src/app/view-models/image.ts");
/* harmony import */ var _view_models_size__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../view-models/size */ "./src/app/view-models/size.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ProductComponent = /** @class */ (function () {
    function ProductComponent(bookService, genreService) {
        this.bookService = bookService;
        this.genreService = genreService;
        this.componentTitle = 'Products';
        this.selectedBook = new _view_models_book__WEBPACK_IMPORTED_MODULE_2__["Book"]();
        this.selectedPage = 1;
        this.checkPluralItems = '';
        this.checkPluralBooks = '';
    }
    ProductComponent.prototype.ngOnInit = function () {
        this.getBooks();
        this.getGenres();
        this.step = 5;
    };
    // Select book when click
    ProductComponent.prototype.onSelect = function (book) {
        this.selectedBook = book;
        if (this.selectedBook.pages == null) {
            this.selectedBook.pages = 0;
            console.log("null pages changed to " + this.selectedBook.pages);
        }
        if (this.selectedBook.weight == null) {
            this.selectedBook.weight = 0;
            console.log("null weight changed to " + this.selectedBook.weight);
        }
        if (this.selectedBook.releaseDate == null) {
            // this.selectedBook.releaseDate = `${new Date().getMonth()+1}/${new Date().getDate()}/${new Date().getFullYear()}`;
            this.selectedBook.releaseDate = '';
            console.log("null date changed to " + this.selectedBook.releaseDate);
        }
        if (this.selectedBook.sku == null) {
            this.selectedBook.sku = 'No SKU';
            console.log("null sku changed to " + this.selectedBook.sku);
        }
        if (this.selectedBook.images == null) {
            this.selectedBook.images = new _view_models_image__WEBPACK_IMPORTED_MODULE_5__["Image"]();
        }
        if (this.selectedBook.size == null) {
            this.selectedBook.size = new _view_models_size__WEBPACK_IMPORTED_MODULE_6__["Size"]();
        }
    };
    // For sending HTTP requests to GET, PUT, DELETE data
    ProductComponent.prototype.getBooks = function () {
        var _this = this;
        this.bookService.getBooks().subscribe(function (z) {
            _this.books = z;
            _this.books2 = z.slice(0, _this.step);
            _this.onCountPages(z, _this.step);
            _this.onPrintLabel();
            _this.checkPluralHandler();
            _this.onShowItems(_this.selectedPage);
        });
    };
    ;
    ProductComponent.prototype.getGenres = function () {
        var _this = this;
        this.genreService.getGenres().subscribe(function (_) { return _this.genres = _; });
    };
    ;
    ProductComponent.prototype.deleteBook = function (book) {
        this.books = this.books.filter(function (h) { return h !== book; });
        this.bookService.deleteBook(book).subscribe();
    };
    ProductComponent.prototype.updateBook = function () {
        this.bookService.updateBook(this.selectedBook)
            .subscribe();
    };
    // For Select genre of Selected book to Edit
    ProductComponent.prototype.compareFn = function (optionOne, optionTwo) {
        optionOne = new _view_models_genre__WEBPACK_IMPORTED_MODULE_4__["Genre"]();
        optionTwo = new _view_models_genre__WEBPACK_IMPORTED_MODULE_4__["Genre"]();
        return optionOne._id == optionTwo._id;
    };
    // For Pagination
    ProductComponent.prototype.onCountPages = function (books, step) {
        var items = this.books.length;
        var pages;
        if (items % step == 0) {
            pages = items / step;
        }
        else {
            pages = Math.floor(items / step) + 1;
        }
        this.pages = pages;
        console.log("Books = " + this.books.length);
        console.log("Step = " + this.step);
        console.log("Pages = " + this.pages);
    };
    ProductComponent.prototype.onPrintLabel = function () {
        this.pageArray = new Array(this.pages);
        for (var i = 0; i < this.pageArray.length; i++) {
            this.pageArray[i] = i + 1;
        }
        console.log(this.pageArray);
    };
    ProductComponent.prototype.onShowItems = function (i) {
        // this.onShowAll();
        this.selectedPage = i;
        var a = this.step * i - this.step;
        var b;
        if (this.step * i >= this.books.length) {
            b = this.books.length;
        }
        else {
            b = this.step * i;
        }
        this.books2 = this.books.slice(a, b);
        this.checkPluralHandler();
        console.log("selectedPage: " + this.selectedPage);
    };
    ProductComponent.prototype.onShowAll = function () {
        this.books2 = this.books;
        this.checkPluralHandler();
    };
    ProductComponent.prototype.onShowOption = function (step) {
        // this.step = option;
        this.onCountPages(this.books, this.step);
        this.onPrintLabel();
        this.onShowItems(1);
    };
    ProductComponent.prototype.onNextPage = function (selectedPage) {
        this.selectedPage = (selectedPage < this.pages) ? (this.selectedPage = selectedPage + 1) : (this.selectedPage = selectedPage);
        this.onShowItems(this.selectedPage);
        console.log("Triggered \"Next\" " + this.selectedPage + "/" + this.pages);
    };
    ProductComponent.prototype.onPrevPage = function (selectedPage) {
        this.selectedPage = (selectedPage > 1) ? (this.selectedPage = selectedPage - 1) : (this.selectedPage = 1);
        this.onShowItems(this.selectedPage);
        console.log("Triggered \"Prev\" " + this.selectedPage + "/" + this.pages);
    };
    // For Check Prural 'item' or 'items'
    ProductComponent.prototype.checkPluralHandler = function () {
        this.checkPluralBooks = (this.books.length > 1) ? "items" : "item";
        this.checkPluralItems = (this.books2.length > 1) ? "items" : "item";
    };
    // For clear search button
    ProductComponent.prototype.onClearSearch = function () {
        this.title = '';
    };
    ProductComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-product',
            template: __webpack_require__(/*! ./product.component.html */ "./src/app/product/product.component.html"),
            styles: [__webpack_require__(/*! ./product.component.css */ "./src/app/product/product.component.css")]
        }),
        __metadata("design:paramtypes", [_services_book_service__WEBPACK_IMPORTED_MODULE_1__["BookService"], _services_genre_service__WEBPACK_IMPORTED_MODULE_3__["GenreService"]])
    ], ProductComponent);
    return ProductComponent;
}());



/***/ }),

/***/ "./src/app/profile/profile.component.css":
/*!***********************************************!*\
  !*** ./src/app/profile/profile.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/profile/profile.component.html":
/*!************************************************!*\
  !*** ./src/app/profile/profile.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-not-found></app-not-found>"

/***/ }),

/***/ "./src/app/profile/profile.component.ts":
/*!**********************************************!*\
  !*** ./src/app/profile/profile.component.ts ***!
  \**********************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProfileComponent = /** @class */ (function () {
    function ProfileComponent() {
    }
    ProfileComponent.prototype.ngOnInit = function () {
    };
    ProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.css */ "./src/app/profile/profile.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/services/book.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/book.service.ts ***!
  \******************************************/
/*! exports provided: BookService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookService", function() { return BookService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
var BookService = /** @class */ (function () {
    function BookService(http) {
        this.http = http;
        this.booksUrl = 'http://green-web-bookshop.herokuapp.com/api/books';
    }
    BookService.prototype.getBooks = function () {
        return this.http.get(this.booksUrl);
    };
    BookService.prototype.addBook = function (book) {
        return this.http.post(this.booksUrl, book, httpOptions);
    };
    BookService.prototype.deleteBook = function (book) {
        // const id = typeof genre === 'string' ? genre : genre._id;
        var url = this.booksUrl + "/" + book._id;
        return this.http.delete(url, httpOptions);
    };
    BookService.prototype.updateBook = function (book) {
        var url = this.booksUrl + "/" + book._id;
        return this.http.put(url, book, httpOptions);
    };
    BookService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], BookService);
    return BookService;
}());



/***/ }),

/***/ "./src/app/services/genre.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/genre.service.ts ***!
  \*******************************************/
/*! exports provided: GenreService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GenreService", function() { return GenreService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json'
    })
};
var GenreService = /** @class */ (function () {
    function GenreService(http) {
        this.http = http;
        this.genresUrl = 'https://green-web-bookshop.herokuapp.com/api/genres';
    }
    GenreService.prototype.getGenres = function () {
        return this.http.get(this.genresUrl);
    };
    GenreService.prototype.addGenre = function (genre) {
        return this.http.post(this.genresUrl, genre, httpOptions);
    };
    GenreService.prototype.deleteGenre = function (genre) {
        // const id = typeof genre === 'string' ? genre : genre._id;
        var url = this.genresUrl + "/" + genre._id;
        return this.http.delete(url, httpOptions);
    };
    /** PUT: update the hero on the server */
    // updateGenre (genre: Genre): Observable<any> {
    //   return this.http.put(this.genresUrl, genre, httpOptions);
    // }
    GenreService.prototype.updateGenre = function (genre) {
        var url = this.genresUrl + "/" + genre._id;
        return this.http.put(url, genre, httpOptions);
    };
    GenreService.prototype.searchHeroes = function (term) {
        if (!term.trim()) {
            // if not search term, return empty hero array.
            // return of([]);
        }
        return this.http.get(this.genresUrl + "/?name=" + term);
    };
    GenreService.prototype.onType = function (ten) {
        // return !this.name;
        if (this.ten.length == 0) {
            return true;
        }
        else {
            return false;
        }
    }; // Note: this onType() makes button disabled when there is no value in Input
    GenreService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], GenreService);
    return GenreService;
}());



/***/ }),

/***/ "./src/app/services/order.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/order.service.ts ***!
  \*******************************************/
/*! exports provided: OrderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderService", function() { return OrderService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
var OrderService = /** @class */ (function () {
    function OrderService(http) {
        this.http = http;
        this.ordersUrl = 'https://green-web-bookshop.herokuapp.com/api/orders';
    }
    OrderService.prototype.getOrders = function () {
        return this.http.get(this.ordersUrl);
    };
    OrderService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], OrderService);
    return OrderService;
}());



/***/ }),

/***/ "./src/app/services/user.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/user.service.ts ***!
  \******************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
        this.userUrl = 'http://green-web-ecommerce.herokuapp.com/v1/users/';
    }
    UserService.prototype.getUsers = function () {
        return this.http.get(this.userUrl);
    };
    UserService.prototype.addUser = function (users) {
        return this.http.post(this.userUrl, users, httpOptions);
    };
    UserService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/staff/staff.component.css":
/*!*******************************************!*\
  !*** ./src/app/staff/staff.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/staff/staff.component.html":
/*!********************************************!*\
  !*** ./src/app/staff/staff.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = " <!-- Breadcrumb-->\r\n <app-breadcrumb [breadcrumbTitle]=\"componentTitle\"></app-breadcrumb>\r\n <div class=\"container-fluid\">\r\n    <div class=\"row\">\r\n      <div class=\"col-sm-6 col-md-4 mb-3\">\r\n        <div class=\"input-group\">\r\n          <input type=\"text\" class=\"form-control\" placeholder=\"Search staff member\" aria-label=\"Search staff member\" aria-describedby=\"basic-addon2\">\r\n          <div class=\"input-group-append\">\r\n            <button class=\"btn btn-outline-secondary\" type=\"button\">\r\n              <i class=\"fas fa-search\"></i>\r\n            </button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-12 mb-3\">\r\n        <a href=\"\" class=\"text-success\">\r\n          <i class=\"fas fa-plus-circle mr-2\"></i>\r\n          <span class=\"text-underline\">Add new member</span>\r\n        </a>\r\n      </div>\r\n      <div class=\"col-12 mb-3 table-responsive\">\r\n        <table class=\"table table-striped table-hover table-outline mb-2\">\r\n          <thead class=\"thead-light\">\r\n            <tr>\r\n              <th>ID</th>\r\n              <th>Fullname</th>\r\n              <th>Email</th>\r\n              <th>Job Title</th>\r\n              <th>Status</th>\r\n              <th>\r\n                  <button (click)=\"getBooks()\" class=\"btn btn-link p-0 d-block ml-auto\" type=\"button\"><i class=\"fas fa-sync-alt\"></i> Refresh</button>\r\n              </th>\r\n            </tr>\r\n          </thead>\r\n          <tbody *ngIf=\"books\" class=\"\">\r\n            <tr *ngFor=\"let book of books\" title=\"Click to view details\" class=\"myCursor\">\r\n  \r\n              <td (click)=\"onSelect(book)\" data-target=\"#modalProductDetail\" data-toggle=\"modal\">123456</td>\r\n              <td (click)=\"onSelect(book)\" data-target=\"#modalProductDetail\" data-toggle=\"modal\">Bao Doan</td>\r\n              <td (click)=\"onSelect(book)\" data-target=\"#modalProductDetail\" data-toggle=\"modal\">baodoan.github@gmail.com</td>\r\n              <td (click)=\"onSelect(book)\" data-target=\"#modalProductDetail\" data-toggle=\"modal\">Manager</td>\r\n              <td (click)=\"onSelect(book)\" data-target=\"#modalProductDetail\" data-toggle=\"modal\">Online</td>\r\n              <td>\r\n                <span class=\"d-block text-right\">\r\n                  <a (click)=\"onSelectEdit(book)\" class=\"mr-3\" data-toggle=\"modal\" title=\"Edit this item\"  data-target=\"#modalEdit\" href=\"\">Edit</a>\r\n                  <a (click)=\"onSelectDelete(book)\" class=\"text-danger\" title=\"Remove\" data-toggle=\"modal\" data-target=\"#modalDelete\" href=\"\">Delete</a>\r\n                </span>\r\n              </td>\r\n            </tr>\r\n           \r\n          </tbody>\r\n        </table>\r\n        <p>Displaying {{books?.length || '0 item'}}\r\n            <span *ngIf=\"books?.length == 1\">item</span> \r\n            <span *ngIf=\"books?.length == 0\">item</span> \r\n            <span *ngIf=\"books?.length\">items</span> \r\n          </p>\r\n      </div>\r\n      <!-- Pagination -->\r\n      <div class=\"col-12 d-flex justify-content-center mb-3\">\r\n        <nav class=\"mb-3\" aria-label=\"Page navigation example\">\r\n          <ul class=\"pagination\">\r\n            <li class=\"page-item\">\r\n              <a class=\"page-link\" href=\"#\">Previous</a>\r\n            </li>\r\n            <li class=\"page-item\">\r\n              <a class=\"page-link\" href=\"#\">1</a>\r\n            </li>\r\n            <li class=\"page-item\">\r\n              <a class=\"page-link\" href=\"#\">2</a>\r\n            </li>\r\n            <li class=\"page-item\">\r\n              <a class=\"page-link\" href=\"#\">3</a>\r\n            </li>\r\n            <li class=\"page-item\">\r\n              <a class=\"page-link\" href=\"#\">Next</a>\r\n            </li>\r\n          </ul>\r\n        </nav>\r\n      </div>\r\n    </div>\r\n  </div>"

/***/ }),

/***/ "./src/app/staff/staff.component.ts":
/*!******************************************!*\
  !*** ./src/app/staff/staff.component.ts ***!
  \******************************************/
/*! exports provided: StaffComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StaffComponent", function() { return StaffComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_book_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/book.service */ "./src/app/services/book.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var StaffComponent = /** @class */ (function () {
    function StaffComponent(bookService) {
        this.bookService = bookService;
        this.componentTitle = 'Staffs';
    }
    StaffComponent.prototype.ngOnInit = function () {
        this.getBooks();
    };
    StaffComponent.prototype.onSelect = function (book) {
        this.selectedBook = book;
    };
    StaffComponent.prototype.getBooks = function () {
        var _this = this;
        this.bookService.getBooks().subscribe(function (z) { return _this.books = z; });
    };
    ;
    StaffComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-staff',
            template: __webpack_require__(/*! ./staff.component.html */ "./src/app/staff/staff.component.html"),
            styles: [__webpack_require__(/*! ./staff.component.css */ "./src/app/staff/staff.component.css")]
        }),
        __metadata("design:paramtypes", [_services_book_service__WEBPACK_IMPORTED_MODULE_1__["BookService"]])
    ], StaffComponent);
    return StaffComponent;
}());



/***/ }),

/***/ "./src/app/user/user.component.css":
/*!*****************************************!*\
  !*** ./src/app/user/user.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/user/user.component.html":
/*!******************************************!*\
  !*** ./src/app/user/user.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = " <!-- Breadcrumb-->\r\n <app-breadcrumb [breadcrumbTitle]=\"componentTitle\"></app-breadcrumb>\r\n <div class=\"container-fluid\">\r\n    <div class=\"row\">\r\n      <div class=\"col-sm-6 col-md-4 mb-3\">\r\n        <div class=\"input-group\">\r\n          <input type=\"text\" class=\"form-control\" placeholder=\"Search user\" aria-label=\"Search user\" aria-describedby=\"basic-addon2\">\r\n          <div class=\"input-group-append\">\r\n            <button class=\"btn btn-outline-secondary\" type=\"button\">\r\n              <i class=\"fas fa-search\"></i>\r\n            </button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-12 mb-3 table-responsive\">\r\n        <table class=\"table table-striped table-hover table-outline mb-2\">\r\n          <thead class=\"thead-light\">\r\n            <tr>\r\n              <th>ID</th>\r\n              <th>Firstname</th>\r\n              <th>Lastname</th>\r\n              <th>Email</th>\r\n              <th>\r\n                  <button (click)=\"getBooks()\" class=\"btn btn-link p-0 d-block ml-auto\" type=\"button\"><i class=\"fas fa-sync-alt\"></i> Refresh</button>\r\n              </th>\r\n            </tr>\r\n          </thead>\r\n          <tbody *ngIf=\"books\" class=\"\">\r\n            <tr *ngFor=\"let book of books\" title=\"Click to view details\" class=\"myCursor\">\r\n  \r\n              <td (click)=\"onSelect(book)\" data-target=\"#modalProductDetail\" data-toggle=\"modal\">123456</td>\r\n              <td (click)=\"onSelect(book)\" data-target=\"#modalProductDetail\" data-toggle=\"modal\">Bao</td>\r\n              <td (click)=\"onSelect(book)\" data-target=\"#modalProductDetail\" data-toggle=\"modal\">Doan</td>\r\n              <td (click)=\"onSelect(book)\" data-target=\"#modalProductDetail\" data-toggle=\"modal\">baodoan.github@gmail.com</td>\r\n              <td>\r\n                <span class=\"d-block text-right\">\r\n                  <a (click)=\"onSelectEdit(book)\" class=\"mr-3\" data-toggle=\"modal\" title=\"Edit this item\"  data-target=\"#modalEdit\" href=\"\">Edit</a>\r\n                  <a (click)=\"onSelectDelete(book)\" class=\"text-danger\" title=\"Remove\" data-toggle=\"modal\" data-target=\"#modalDelete\" href=\"\">Delete</a>\r\n                </span>\r\n              </td>\r\n            </tr>\r\n           \r\n          </tbody>\r\n        </table>\r\n        <p>Displaying {{books?.length || '0 item'}}\r\n            <span *ngIf=\"books?.length == 1\">item</span> \r\n            <span *ngIf=\"books?.length == 0\">item</span> \r\n            <span *ngIf=\"books?.length\">items</span> \r\n          </p>\r\n      </div>\r\n      <!-- Pagination -->\r\n      <div class=\"col-12 d-flex justify-content-center mb-3\">\r\n        <nav class=\"mb-3\" aria-label=\"Page navigation example\">\r\n          <ul class=\"pagination\">\r\n            <li class=\"page-item\">\r\n              <a class=\"page-link\" href=\"#\">Previous</a>\r\n            </li>\r\n            <li class=\"page-item\">\r\n              <a class=\"page-link\" href=\"#\">1</a>\r\n            </li>\r\n            <li class=\"page-item\">\r\n              <a class=\"page-link\" href=\"#\">2</a>\r\n            </li>\r\n            <li class=\"page-item\">\r\n              <a class=\"page-link\" href=\"#\">3</a>\r\n            </li>\r\n            <li class=\"page-item\">\r\n              <a class=\"page-link\" href=\"#\">Next</a>\r\n            </li>\r\n          </ul>\r\n        </nav>\r\n      </div>\r\n    </div>\r\n  </div>"

/***/ }),

/***/ "./src/app/user/user.component.ts":
/*!****************************************!*\
  !*** ./src/app/user/user.component.ts ***!
  \****************************************/
/*! exports provided: UserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserComponent", function() { return UserComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_book_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/book.service */ "./src/app/services/book.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserComponent = /** @class */ (function () {
    function UserComponent(bookService) {
        this.bookService = bookService;
        this.componentTitle = 'Users';
    }
    UserComponent.prototype.ngOnInit = function () {
        this.getBooks();
    };
    UserComponent.prototype.getBooks = function () {
        var _this = this;
        this.bookService.getBooks().subscribe(function (z) { return _this.books = z; });
    };
    ;
    UserComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user',
            template: __webpack_require__(/*! ./user.component.html */ "./src/app/user/user.component.html"),
            styles: [__webpack_require__(/*! ./user.component.css */ "./src/app/user/user.component.css")]
        }),
        __metadata("design:paramtypes", [_services_book_service__WEBPACK_IMPORTED_MODULE_1__["BookService"]])
    ], UserComponent);
    return UserComponent;
}());



/***/ }),

/***/ "./src/app/view-models/book.ts":
/*!*************************************!*\
  !*** ./src/app/view-models/book.ts ***!
  \*************************************/
/*! exports provided: Book */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Book", function() { return Book; });
/* harmony import */ var _genre__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./genre */ "./src/app/view-models/genre.ts");
/* harmony import */ var _image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./image */ "./src/app/view-models/image.ts");
/* harmony import */ var _size__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./size */ "./src/app/view-models/size.ts");



var Book = /** @class */ (function () {
    function Book() {
        this.images = new _image__WEBPACK_IMPORTED_MODULE_1__["Image"]();
        this.size = new _size__WEBPACK_IMPORTED_MODULE_2__["Size"]();
        this.genre = new _genre__WEBPACK_IMPORTED_MODULE_0__["Genre"]();
    }
    return Book;
}());



/***/ }),

/***/ "./src/app/view-models/genre.ts":
/*!**************************************!*\
  !*** ./src/app/view-models/genre.ts ***!
  \**************************************/
/*! exports provided: Genre */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Genre", function() { return Genre; });
var Genre = /** @class */ (function () {
    function Genre() {
    }
    return Genre;
}());



/***/ }),

/***/ "./src/app/view-models/image.ts":
/*!**************************************!*\
  !*** ./src/app/view-models/image.ts ***!
  \**************************************/
/*! exports provided: Image */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Image", function() { return Image; });
var Image = /** @class */ (function () {
    function Image() {
        // this.main = "demo url"
    }
    return Image;
}());



/***/ }),

/***/ "./src/app/view-models/size.ts":
/*!*************************************!*\
  !*** ./src/app/view-models/size.ts ***!
  \*************************************/
/*! exports provided: Size */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Size", function() { return Size; });
var Size = /** @class */ (function () {
    function Size() {
        // this.width = width;
        // this.height = height;
        // this.depth = depth;
    }
    return Size;
}());



/***/ }),

/***/ "./src/app/view-models/user.ts":
/*!*************************************!*\
  !*** ./src/app/view-models/user.ts ***!
  \*************************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
var User = /** @class */ (function () {
    function User() {
    }
    return User;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\baodo\OneDrive\Desktop\__DEVELOPER\4_my-projects\Do An Green\angular-admin-bookshop\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map