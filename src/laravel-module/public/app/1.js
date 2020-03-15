(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./src/app/website/website-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/website/website-routing.module.ts ***!
  \***************************************************/
/*! exports provided: WebsiteRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebsiteRoutingModule", function() { return WebsiteRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _website_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./website.component */ "./src/app/website/website.component.ts");




var routes = [
    {
        path: '',
        component: _website_component__WEBPACK_IMPORTED_MODULE_3__["WebsiteComponent"]
    }
];
var WebsiteRoutingModule = /** @class */ (function () {
    function WebsiteRoutingModule() {
    }
    WebsiteRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], WebsiteRoutingModule);
    return WebsiteRoutingModule;
}());



/***/ }),

/***/ "./src/app/website/website.component.css":
/*!***********************************************!*\
  !*** ./src/app/website/website.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3dlYnNpdGUvd2Vic2l0ZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/website/website.component.html":
/*!************************************************!*\
  !*** ./src/app/website/website.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n    Website works!\n</p>\n\n<button [routerLink]=\"['admin']\" routerLinkActive=\"active\">Go to Admin</button>"

/***/ }),

/***/ "./src/app/website/website.component.ts":
/*!**********************************************!*\
  !*** ./src/app/website/website.component.ts ***!
  \**********************************************/
/*! exports provided: WebsiteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebsiteComponent", function() { return WebsiteComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var WebsiteComponent = /** @class */ (function () {
    function WebsiteComponent() {
    }
    WebsiteComponent.prototype.ngOnInit = function () {
    };
    WebsiteComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-website',
            template: __webpack_require__(/*! ./website.component.html */ "./src/app/website/website.component.html"),
            styles: [__webpack_require__(/*! ./website.component.css */ "./src/app/website/website.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], WebsiteComponent);
    return WebsiteComponent;
}());



/***/ }),

/***/ "./src/app/website/website.module.ts":
/*!*******************************************!*\
  !*** ./src/app/website/website.module.ts ***!
  \*******************************************/
/*! exports provided: WebsiteModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebsiteModule", function() { return WebsiteModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _website_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./website.component */ "./src/app/website/website.component.ts");
/* harmony import */ var _website_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./website-routing.module */ "./src/app/website/website-routing.module.ts");





var WebsiteModule = /** @class */ (function () {
    function WebsiteModule() {
    }
    WebsiteModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _website_routing_module__WEBPACK_IMPORTED_MODULE_4__["WebsiteRoutingModule"]
            ],
            declarations: [
                _website_component__WEBPACK_IMPORTED_MODULE_3__["WebsiteComponent"]
            ]
        })
    ], WebsiteModule);
    return WebsiteModule;
}());



/***/ })

}]);
//# sourceMappingURL=1.js.map