(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _main_main_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./main/main.component */ "./src/app/main/main.component.ts");
/* harmony import */ var _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./not-found/not-found.component */ "./src/app/not-found/not-found.component.ts");
/* harmony import */ var _personal_account_personal_account_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./personal-account/personal-account.component */ "./src/app/personal-account/personal-account.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _services_signalr_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/signalr.service */ "./src/app/services/signalr.service.ts");
/* harmony import */ var _services_api_client__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./services/api.client */ "./src/app/services/api.client.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _room_room_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./room/room.component */ "./src/app/room/room.component.ts");














const appRoutes = [
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"] },
    { path: 'room', children: [
            {
                path: ":roomId",
                component: _room_room_component__WEBPACK_IMPORTED_MODULE_11__["RoomComponent"]
            }
        ] },
    { path: '**', component: _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_5__["NotFoundComponent"] }
];
class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_main_main_component__WEBPACK_IMPORTED_MODULE_4__["MainComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [_services_signalr_service__WEBPACK_IMPORTED_MODULE_8__["SignalRService"], _services_api_client__WEBPACK_IMPORTED_MODULE_9__["ApiClient"]], imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(appRoutes), _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_main_main_component__WEBPACK_IMPORTED_MODULE_4__["MainComponent"], _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_5__["NotFoundComponent"], _personal_account_personal_account_component__WEBPACK_IMPORTED_MODULE_6__["PersonalAccountComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"], _room_room_component__WEBPACK_IMPORTED_MODULE_11__["RoomComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(appRoutes), _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"]],
                declarations: [_main_main_component__WEBPACK_IMPORTED_MODULE_4__["MainComponent"], _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_5__["NotFoundComponent"], _personal_account_personal_account_component__WEBPACK_IMPORTED_MODULE_6__["PersonalAccountComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"], _room_room_component__WEBPACK_IMPORTED_MODULE_11__["RoomComponent"]],
                providers: [_services_signalr_service__WEBPACK_IMPORTED_MODULE_8__["SignalRService"], _services_api_client__WEBPACK_IMPORTED_MODULE_9__["ApiClient"]],
                bootstrap: [_main_main_component__WEBPACK_IMPORTED_MODULE_4__["MainComponent"]]
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_api_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/api.client */ "./src/app/services/api.client.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");




class HomeComponent {
    constructor(apiClient) {
        this.apiClient = apiClient;
        this.roomId = "";
    }
    ngOnInit() {
    }
    enterRoomById() {
        if (this.roomId.length !== 36) {
            alert("The entered room id is not valid");
        }
        else {
            window.location.href = `/room/${this.roomId}`;
        }
    }
    createNewRoom() {
        this.apiClient.post("Room/create", {}).then((data) => {
            window.location.href = `/room/${data.id}`;
        });
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_api_client__WEBPACK_IMPORTED_MODULE_1__["ApiClient"])); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["home"]], decls: 30, vars: 2, consts: [[1, "home-page"], [1, "header"], [1, "project-name-container"], ["width", "40", "height", "36", "viewBox", "0 0 40 36", "fill", "none", "xmlns", "http://www.w3.org/2000/svg", 1, "project-name-icom"], ["d", "M19.9663 31.8069L27.7913 35.7194L40.1988 9.59812L22.225 0.278748L19.8206 5.08625L17.7813 0.900623L-0.193115 10.22L11.5694 35.7056L19.9663 31.8069ZM22.775 1.97125L38.5513 10.1519L27.2088 34.0306L10.8388 25.8456L22.775 1.97125ZM17.2188 2.59937L19.1163 6.49437L9.16126 26.4044L18.5375 31.0925L12.18 34.0444L1.44313 10.78L17.2188 2.59937Z", "fill", "#8E8D8A"], ["d", "M24.3084 3.90403L23.1904 3.34503L22.5655 4.59496L23.6835 5.15396L24.3084 3.90403Z", "fill", "#8E8D8A"], ["d", "M3.19071 11.4049L3.81567 12.6548L4.93367 12.0958L4.30871 10.8459L3.19071 11.4049Z", "fill", "#8E8D8A"], ["d", "M25.6913 32.0967L26.8093 32.6557L27.4342 31.4058L26.3162 30.8468L25.6913 32.0967Z", "fill", "#8E8D8A"], ["d", "M21.965 23.3225L22.1419 23.6162L22.6819 23.6275C24.3838 23.6275 30.0707 23.3781 31.8 20.1725C32.7538 18.4037 32.6894 15.9044 30.9219 14.9512C29.8282 14.3606 28.2494 14.2225 27.1775 14.6106C27.1538 14.3419 27.0963 14.0744 27.0057 13.8106C26.7132 12.9669 26.1069 12.2625 25.2975 11.8262C24.7919 11.5531 24.1975 11.4094 23.5769 11.4094C22.1032 11.4094 20.6963 12.1806 20.0757 13.3294C18.1482 16.9012 21.8082 23.0619 21.965 23.3225ZM21.175 13.9225C21.5707 13.19 22.58 12.6587 23.5763 12.6587C23.99 12.6587 24.38 12.7506 24.7038 12.9256C25.2369 13.2131 25.6344 13.6725 25.8238 14.2187C26.0119 14.7606 25.9675 15.3325 25.7007 15.8287L26.8007 16.4219C27.1857 15.7081 28.1744 15.6312 28.5825 15.6312C29.1982 15.6312 29.8357 15.7837 30.3294 16.05C31.4632 16.6619 31.2694 18.525 30.7013 19.5787C29.3219 22.1319 24.0494 22.3575 22.8594 22.375C21.83 20.5462 19.9288 16.2331 21.175 13.9225Z", "fill", "#8E8D8A"], [1, "project-name-titel"], ["id", "create-new-room", 3, "click"], [1, "body"], [1, "first-title"], [1, "description"], [1, "or"], [1, "enter-room"], [1, "fild"], ["for", "room-num"], ["type", "text", "name", "room-num", "id", "room-num", "placeholder", "Room Number", 3, "value", "ngModel", "ngModelChange"], ["id", "enter-room", 3, "click"], [1, "footer"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "svg", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "path", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "path", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "path", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "path", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "path", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Planning Poker Room ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_button_click_11_listener() { return ctx.createNewRoom(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Create new room ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " A distributed scrum planning tool for evaluating agile projects. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " The first person to create a room is the moderator. Share the URL or room number with other team members to join the room. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_button_click_18_listener() { return ctx.createNewRoom(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " Create new room ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " OR ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "label", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " Enter The Room Number ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function HomeComponent_Template_input_ngModelChange_26_listener($event) { return ctx.roomId = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_button_click_27_listener() { return ctx.enterRoomById(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " Enter the room ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", ctx.roomId);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.roomId);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"]], styles: [".home-page[_ngcontent-%COMP%] {\r\n    margin: 0 40px;\r\n}\r\n\r\n.home-page[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    width: 100%;\r\n    height: 100px;\r\n    display: flex;\r\n    align-items: center;\r\n    background: #EAE7DC;\r\n}\r\n\r\n.home-page[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .project-name-container[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    align-items: center;\r\n}\r\n\r\n.home-page[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .project-name-container[_ngcontent-%COMP%]   .project-name-icom[_ngcontent-%COMP%] {\r\n    margin-right: 8px;\r\n}\r\n\r\n.home-page[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .project-name-container[_ngcontent-%COMP%]   .project-name-titel[_ngcontent-%COMP%] {\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    font-size: 24px;\r\n    line-height: 29px;\r\n    color: #8E8D8A;\r\n}\r\n\r\n.home-page[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    right: 0;\r\n}\r\n\r\n.body[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    align-items: center;\r\n    flex-direction: column; \r\n    margin: 86px 0;\r\n    background: #EAE7DC;\r\n}\r\n\r\n.body[_ngcontent-%COMP%]   *[_ngcontent-%COMP%]:not(:last-child) {\r\n    margin-bottom: 32px;\r\n}\r\n\r\n.body[_ngcontent-%COMP%]   .first-title[_ngcontent-%COMP%] {\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    font-size: 56px;\r\n    line-height: 68px;\r\n    text-align: center;\r\n\r\n    color: #E85A4F;\r\n}\r\n\r\n.body[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%] {\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    font-size: 20px;\r\n    line-height: 24px;\r\n    text-align: center;\r\n\r\n    color: #8E8D8A;\r\n}\r\n\r\n.body[_ngcontent-%COMP%]   .or[_ngcontent-%COMP%] {\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    font-size: 20px;\r\n    line-height: 24px;\r\n    text-align: center;\r\n    color: #E98074;\r\n}\r\n\r\n.body[_ngcontent-%COMP%]   .enter-room[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n}\r\n\r\n.body[_ngcontent-%COMP%]   .enter-room[_ngcontent-%COMP%]   .fild[_ngcontent-%COMP%] {\r\n    margin-bottom: 20px;\r\n}\r\n\r\n.body[_ngcontent-%COMP%]   .enter-room[_ngcontent-%COMP%]   .fild[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    font-size: 20px;\r\n    line-height: 24px;\r\n    text-align: center;\r\n    color: #E98074;\r\n    margin: 0 14px 0 0;\r\n}\r\n\r\n.body[_ngcontent-%COMP%]   .enter-room[_ngcontent-%COMP%]   .fild[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\r\n    width: 275px;\r\n    height: 48px;\r\n    border: 1px solid #8E8D8A;\r\n    border-radius: 4px;\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    font-size: 16px;\r\n    line-height: 19px;\r\n    text-align: center;\r\n    color: #8E8D8A;\r\n}\r\n\r\nbutton[_ngcontent-%COMP%] {\r\n    width: 194px;\r\n    height: 48px;\r\n    background: #EAE7DC;\r\n    border: 1px solid #8E8D8A;\r\n    border-radius: 4px;\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    font-size: 18px;\r\n    line-height: 22px;\r\n    text-align: center;\r\n    color: #000000;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxhQUFhO0lBQ2IsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsUUFBUTtBQUNaOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixzQkFBc0I7SUFDdEIsY0FBYztJQUNkLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixrQkFBa0I7O0lBRWxCLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsa0JBQWtCOztJQUVsQixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osWUFBWTtJQUNaLHlCQUF5QjtJQUN6QixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIseUJBQXlCO0lBQ3pCLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLGNBQWM7QUFDbEIiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ob21lLXBhZ2Uge1xyXG4gICAgbWFyZ2luOiAwIDQwcHg7XHJcbn1cclxuXHJcbi5ob21lLXBhZ2UgLmhlYWRlciB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwcHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQ6ICNFQUU3REM7XHJcbn1cclxuXHJcbi5ob21lLXBhZ2UgLmhlYWRlciAucHJvamVjdC1uYW1lLWNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLmhvbWUtcGFnZSAuaGVhZGVyIC5wcm9qZWN0LW5hbWUtY29udGFpbmVyIC5wcm9qZWN0LW5hbWUtaWNvbSB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDhweDtcclxufVxyXG5cclxuLmhvbWUtcGFnZSAuaGVhZGVyIC5wcm9qZWN0LW5hbWUtY29udGFpbmVyIC5wcm9qZWN0LW5hbWUtdGl0ZWwge1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyOXB4O1xyXG4gICAgY29sb3I6ICM4RThEOEE7XHJcbn1cclxuXHJcbi5ob21lLXBhZ2UgLmhlYWRlciBidXR0b24ge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcmlnaHQ6IDA7XHJcbn1cclxuXHJcbi5ib2R5IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgXHJcbiAgICBtYXJnaW46IDg2cHggMDtcclxuICAgIGJhY2tncm91bmQ6ICNFQUU3REM7XHJcbn1cclxuXHJcbi5ib2R5ICo6bm90KDpsYXN0LWNoaWxkKSB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAzMnB4O1xyXG59XHJcblxyXG4uYm9keSAuZmlyc3QtdGl0bGUge1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGZvbnQtc2l6ZTogNTZweDtcclxuICAgIGxpbmUtaGVpZ2h0OiA2OHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxuICAgIGNvbG9yOiAjRTg1QTRGO1xyXG59XHJcblxyXG4uYm9keSAuZGVzY3JpcHRpb24ge1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxuICAgIGNvbG9yOiAjOEU4RDhBO1xyXG59XHJcblxyXG4uYm9keSAub3Ige1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6ICNFOTgwNzQ7XHJcbn1cclxuXHJcbi5ib2R5IC5lbnRlci1yb29tIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLmJvZHkgLmVudGVyLXJvb20gLmZpbGQge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxufVxyXG5cclxuLmJvZHkgLmVudGVyLXJvb20gLmZpbGQgbGFiZWwge1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6ICNFOTgwNzQ7XHJcbiAgICBtYXJnaW46IDAgMTRweCAwIDA7XHJcbn1cclxuXHJcbi5ib2R5IC5lbnRlci1yb29tIC5maWxkIGlucHV0IHtcclxuICAgIHdpZHRoOiAyNzVweDtcclxuICAgIGhlaWdodDogNDhweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICM4RThEOEE7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDE5cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogIzhFOEQ4QTtcclxufVxyXG5cclxuYnV0dG9uIHtcclxuICAgIHdpZHRoOiAxOTRweDtcclxuICAgIGhlaWdodDogNDhweDtcclxuICAgIGJhY2tncm91bmQ6ICNFQUU3REM7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjOEU4RDhBO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyMnB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6ICMwMDAwMDA7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.css']
            }]
    }], function () { return [{ type: _services_api_client__WEBPACK_IMPORTED_MODULE_1__["ApiClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/main/main.component.ts":
/*!****************************************!*\
  !*** ./src/app/main/main.component.ts ***!
  \****************************************/
/*! exports provided: MainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainComponent", function() { return MainComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



class MainComponent {
    constructor() { }
    ngOnInit() {
    }
}
MainComponent.ɵfac = function MainComponent_Factory(t) { return new (t || MainComponent)(); };
MainComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MainComponent, selectors: [["main"]], decls: 1, vars: 0, template: function MainComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MainComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'main',
                templateUrl: './main.component.html'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/models/user-estimate.model.ts":
/*!***********************************************!*\
  !*** ./src/app/models/user-estimate.model.ts ***!
  \***********************************************/
/*! exports provided: UserEstimate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserEstimate", function() { return UserEstimate; });
class UserEstimate {
    constructor(estimate, id) {
        this.Estimate = estimate;
        this.Id = id;
    }
}


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


class NotFoundComponent {
    constructor() { }
    ngOnInit() {
    }
}
NotFoundComponent.ɵfac = function NotFoundComponent_Factory(t) { return new (t || NotFoundComponent)(); };
NotFoundComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NotFoundComponent, selectors: [["not-found"]], decls: 2, vars: 0, template: function NotFoundComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "not-found works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25vdC1mb3VuZC9ub3QtZm91bmQuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NotFoundComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'not-found',
                templateUrl: './not-found.component.html',
                styleUrls: ['./not-found.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/personal-account/personal-account.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/personal-account/personal-account.component.ts ***!
  \****************************************************************/
/*! exports provided: PersonalAccountComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonalAccountComponent", function() { return PersonalAccountComponent; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");






function PersonalAccountComponent_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "p", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "\u0412\u0441\u0435 \u0432\u0430\u0448\u0438 \u0437\u0430\u043A\u0430\u0437\u044B \u043F\u0440\u043E\u0438\u0437\u0432\u0435\u0434\u0435\u043D\u043D\u044B\u0435 \u0437\u0430 \u0432\u0441\u0435 \u0432\u0440\u0435\u043C\u044F:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, " \u0414\u0430\u0442\u0430: 01.12.2022");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, " \u041A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u0432\u0435\u0449\u0435\u0439: 5");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, " \u041E\u0431\u0449\u0430\u044F\u0441\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C: 2550 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, " \u0414\u0430\u0442\u0430: 01.12.2022");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, " \u041A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u0432\u0435\u0449\u0435\u0439: 7");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, " \u041E\u0431\u0449\u0430\u044F\u0441\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C: 3250 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, " \u0414\u0430\u0442\u0430: 01.12.2022");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, " \u041A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u0432\u0435\u0449\u0435\u0439: 15");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, " \u041E\u0431\u0449\u0430\u044F\u0441\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C: 10100 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function PersonalAccountComponent_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "p", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "\u0412\u0430\u0448\u0438 \u043B\u0438\u0447\u043D\u044B\u0435 \u0434\u0430\u043D\u043D\u044B\u0435:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "p", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "\u0418\u043C\u044F: Artem");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "e-mail: atr.malyykin@gmail.com");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
class PersonalAccountComponent {
    constructor(http) {
        this.http = http;
        this.tub = "orders";
    }
    ngOnInit() {
        const myHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]().set('Authorization', localStorage.getItem('auth_token'));
        console.log(myHeaders);
        this.http.post(`http://localhost:5000//api/order/Get/All`, { headers: myHeaders })
            .subscribe((resp) => {
            this.orders = resp;
        });
        this.http.post(`http://localhost:5000//api/Visitors/Get/PersonalData`, { headers: myHeaders })
            .subscribe((resp) => {
            this.orders = resp;
        });
    }
    exit() {
        localStorage.removeItem('auth_token');
    }
    setTub(tub) {
        this.tub = tub;
    }
}
PersonalAccountComponent.ɵfac = function PersonalAccountComponent_Factory(t) { return new (t || PersonalAccountComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"])); };
PersonalAccountComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: PersonalAccountComponent, selectors: [["personal-account"]], decls: 15, vars: 2, consts: [[1, "scope"], [1, "section-name"], [1, "grup"], [1, "nav-block"], [1, "btn-group", 3, "click"], [1, "btn-group", "rg"], ["routerLink", "/", 1, "btn-group", 3, "click"], ["class", "wrapper", 4, "ngIf"], [1, "wrapper"], [1, "wrapper", "section-name"], [1, "wrapper-item"]], template: function PersonalAccountComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "\u041B\u0438\u0447\u043D\u044B\u0439 \u043A\u0430\u0431\u0438\u043D\u0435\u0442");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PersonalAccountComponent_Template_button_click_5_listener() { return ctx.setTub("orders"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, " \u0412\u0441\u0435 \u0437\u0430\u043A\u0430\u0437\u044B ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PersonalAccountComponent_Template_button_click_7_listener() { return ctx.setTub("personalData"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, " \u041B\u0438\u0447\u043D\u044B\u0435 \u0434\u0430\u043D\u043D\u044B\u0435 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PersonalAccountComponent_Template_button_click_10_listener() { return ctx.exit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, " \u0412\u044B\u0439\u0442\u0438 \u0438\u0437 \u0430\u043A\u043A\u0430\u0443\u043D\u0442\u0430 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, PersonalAccountComponent_div_13_Template, 21, 0, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, PersonalAccountComponent_div_14_Template, 7, 0, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.tub === "orders");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.tub === "personalData");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]], styles: [".btn-group[_ngcontent-%COMP%] {\r\n    height: 100%;\r\n    min-width: 150px;\r\n    display: flex;\r\n    align-items: center;\r\n    color: #952CFF !important;\r\n    font-size: 16px;\r\n    font-weight: 300;\r\n    margin: 0;\r\n    background-color: #FAF2FF;\r\n    border: none;\r\n}\r\n\r\n.btn-group.rg[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    display: flex;\r\n    flex-direction: row-reverse;\r\n}\r\n\r\n.nav-block[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    margin: 0;\r\n    height: 35px;\r\n    color: #FAF2FF;\r\n    display: flex;\r\n}\r\n\r\n.scope[_ngcontent-%COMP%] {\r\n    width: 100vw;\r\n    min-height: 87vh;\r\n    background-color: #FAF2FF;\r\n    display: flex;\r\n    align-items: center;\r\n    flex-direction: column;\r\n    padding: 36px 68px 36px 68px;\r\n}\r\n\r\n.grup[_ngcontent-%COMP%] {\r\n    padding: 10px 0px;\r\n    width: 100%;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: flex-start;\r\n}\r\n\r\n.section-name[_ngcontent-%COMP%] {\r\n    font-size: 24px;\r\n    color: #952CFF;\r\n}\r\n\r\n.wrapper.section-name[_ngcontent-%COMP%] {\r\n    font-size: 20px;\r\n    margin: 0px;\r\n}\r\n\r\nhr[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    margin: 0;\r\n    border-top: 1px solid #952CFF;\r\n}\r\n\r\n.wrapper[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    padding: 10px 0px;\r\n    width: 100%;\r\n    gap: 10px;\r\n}\r\n\r\n.wrapper-item[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    justify-content: left;\r\n    align-items: center;\r\n    width: 100%;\r\n    height: 100px;\r\n    background-color: #952CFF;\r\n    padding: 10px;\r\n}\r\n\r\n.wrapper-item[_ngcontent-%COMP%] {\r\n    color: #FAF2FF;\r\n    font-size: 16px;\r\n    font-weight: 300;\r\n}\r\n\r\n.wrapper-item[_ngcontent-%COMP%]:hover {\r\n    text-decoration: none;\r\n    cursor: pointer;\r\n}\r\n\r\nsvg[_ngcontent-%COMP%] {\r\n    width: 225px;\r\n    margin-right: 32px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGVyc29uYWwtYWNjb3VudC9wZXJzb25hbC1hY2NvdW50LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIseUJBQXlCO0lBQ3pCLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsU0FBUztJQUNULHlCQUF5QjtJQUN6QixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksV0FBVztJQUNYLGFBQWE7SUFDYiwyQkFBMkI7QUFDL0I7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsU0FBUztJQUNULFlBQVk7SUFDWixjQUFjO0lBQ2QsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIseUJBQXlCO0lBQ3pCLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsc0JBQXNCO0lBQ3RCLDRCQUE0QjtBQUNoQzs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixXQUFXO0lBQ1gsYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsY0FBYztBQUNsQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsU0FBUztJQUNULDZCQUE2QjtBQUNqQzs7QUFFQTtJQUNJLGFBQWE7SUFDYixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLFdBQVc7SUFDWCxTQUFTO0FBQ2I7O0FBRUE7SUFDSSxhQUFhO0lBQ2IscUJBQXFCO0lBQ3JCLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsYUFBYTtJQUNiLHlCQUF5QjtJQUN6QixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksY0FBYztJQUNkLGVBQWU7SUFDZixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixrQkFBa0I7QUFDdEIiLCJmaWxlIjoic3JjL2FwcC9wZXJzb25hbC1hY2NvdW50L3BlcnNvbmFsLWFjY291bnQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5idG4tZ3JvdXAge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgbWluLXdpZHRoOiAxNTBweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgY29sb3I6ICM5NTJDRkYgIWltcG9ydGFudDtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkFGMkZGO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG59XHJcblxyXG4uYnRuLWdyb3VwLnJnIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZTtcclxufVxyXG5cclxuLm5hdi1ibG9jayB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGhlaWdodDogMzVweDtcclxuICAgIGNvbG9yOiAjRkFGMkZGO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxufVxyXG5cclxuLnNjb3BlIHtcclxuICAgIHdpZHRoOiAxMDB2dztcclxuICAgIG1pbi1oZWlnaHQ6IDg3dmg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkFGMkZGO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgcGFkZGluZzogMzZweCA2OHB4IDM2cHggNjhweDtcclxufVxyXG5cclxuLmdydXAge1xyXG4gICAgcGFkZGluZzogMTBweCAwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbn1cclxuXHJcbi5zZWN0aW9uLW5hbWUge1xyXG4gICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgY29sb3I6ICM5NTJDRkY7XHJcbn1cclxuXHJcbi53cmFwcGVyLnNlY3Rpb24tbmFtZSB7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBtYXJnaW46IDBweDtcclxufVxyXG5cclxuaHIge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgIzk1MkNGRjtcclxufVxyXG5cclxuLndyYXBwZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIHBhZGRpbmc6IDEwcHggMHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBnYXA6IDEwcHg7XHJcbn1cclxuXHJcbi53cmFwcGVyLWl0ZW0ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogbGVmdDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTUyQ0ZGO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxufVxyXG5cclxuLndyYXBwZXItaXRlbSB7XHJcbiAgICBjb2xvcjogI0ZBRjJGRjtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbn1cclxuXHJcbi53cmFwcGVyLWl0ZW06aG92ZXIge1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG5zdmcge1xyXG4gICAgd2lkdGg6IDIyNXB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAzMnB4O1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](PersonalAccountComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'personal-account',
                templateUrl: './personal-account.component.html',
                styleUrls: ['./personal-account.component.css']
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/room/room.component.ts":
/*!****************************************!*\
  !*** ./src/app/room/room.component.ts ***!
  \****************************************/
/*! exports provided: RoomComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoomComponent", function() { return RoomComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/dist/esm/index.js");
/* harmony import */ var _models_user_estimate_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/user-estimate.model */ "./src/app/models/user-estimate.model.ts");
/* harmony import */ var _services_signalr_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/signalr.service */ "./src/app/services/signalr.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/clipboard */ "./node_modules/@angular/cdk/fesm2015/clipboard.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};









function RoomComponent_a_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Invite players");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RoomComponent_div_17_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r15.roomModel == null ? null : ctx_r15.roomModel.visitors[1] == null ? null : ctx_r15.roomModel.visitors[1].estimate);
} }
function RoomComponent_div_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, RoomComponent_div_17_span_2_Template, 2, 1, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("selected", (ctx_r1.roomModel == null ? null : ctx_r1.roomModel.visitors[1] == null ? null : ctx_r1.roomModel.visitors[1].estimate) !== "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.averageEstimate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.roomModel == null ? null : ctx_r1.roomModel.visitors[1] == null ? null : ctx_r1.roomModel.visitors[1].name);
} }
function RoomComponent_div_20_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r16.roomModel == null ? null : ctx_r16.roomModel.visitors[4] == null ? null : ctx_r16.roomModel.visitors[4].estimate);
} }
function RoomComponent_div_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, RoomComponent_div_20_span_2_Template, 2, 1, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("selected", (ctx_r2.roomModel == null ? null : ctx_r2.roomModel.visitors[4] == null ? null : ctx_r2.roomModel.visitors[4].estimate) !== "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.averageEstimate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.roomModel == null ? null : ctx_r2.roomModel.visitors[4] == null ? null : ctx_r2.roomModel.visitors[4].name);
} }
function RoomComponent_div_21_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r17.roomModel == null ? null : ctx_r17.roomModel.visitors[2] == null ? null : ctx_r17.roomModel.visitors[2].estimate);
} }
function RoomComponent_div_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, RoomComponent_div_21_span_2_Template, 2, 1, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("selected", (ctx_r3.roomModel == null ? null : ctx_r3.roomModel.visitors[2] == null ? null : ctx_r3.roomModel.visitors[2].estimate) !== "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.averageEstimate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r3.roomModel == null ? null : ctx_r3.roomModel.visitors[2] == null ? null : ctx_r3.roomModel.visitors[2].name);
} }
function RoomComponent_div_22_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r18.roomModel == null ? null : ctx_r18.roomModel.visitors[6] == null ? null : ctx_r18.roomModel.visitors[6].estimate);
} }
function RoomComponent_div_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, RoomComponent_div_22_span_2_Template, 2, 1, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("selected", (ctx_r4.roomModel == null ? null : ctx_r4.roomModel.visitors[6] == null ? null : ctx_r4.roomModel.visitors[6].estimate) !== "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.averageEstimate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r4.roomModel == null ? null : ctx_r4.roomModel.visitors[6] == null ? null : ctx_r4.roomModel.visitors[6].name);
} }
function RoomComponent_span_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Choose your cards!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RoomComponent_button_25_Template(rf, ctx) { if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RoomComponent_button_25_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r19.revealCards(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Reveal cards ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RoomComponent_div_26_Template(rf, ctx) { if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RoomComponent_div_26_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r22); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r21.startNewVoting(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Start new voting ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Average: ", ctx_r7.averageEstimate, "");
} }
function RoomComponent_div_28_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r23.roomModel == null ? null : ctx_r23.roomModel.visitors[7] == null ? null : ctx_r23.roomModel.visitors[7].estimate);
} }
function RoomComponent_div_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, RoomComponent_div_28_span_2_Template, 2, 1, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("selected", (ctx_r8.roomModel == null ? null : ctx_r8.roomModel.visitors[7] == null ? null : ctx_r8.roomModel.visitors[7].estimate) !== "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r8.averageEstimate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r8.roomModel == null ? null : ctx_r8.roomModel.visitors[7] == null ? null : ctx_r8.roomModel.visitors[7].name);
} }
function RoomComponent_div_29_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r24.roomModel == null ? null : ctx_r24.roomModel.visitors[3] == null ? null : ctx_r24.roomModel.visitors[3].estimate);
} }
function RoomComponent_div_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, RoomComponent_div_29_span_2_Template, 2, 1, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("selected", (ctx_r9.roomModel == null ? null : ctx_r9.roomModel.visitors[3] == null ? null : ctx_r9.roomModel.visitors[3].estimate) !== "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r9.averageEstimate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r9.roomModel == null ? null : ctx_r9.roomModel.visitors[3] == null ? null : ctx_r9.roomModel.visitors[3].name);
} }
function RoomComponent_div_30_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r25.roomModel == null ? null : ctx_r25.roomModel.visitors[5] == null ? null : ctx_r25.roomModel.visitors[5].estimate);
} }
function RoomComponent_div_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, RoomComponent_div_30_span_2_Template, 2, 1, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("selected", (ctx_r10.roomModel == null ? null : ctx_r10.roomModel.visitors[5] == null ? null : ctx_r10.roomModel.visitors[5].estimate) !== "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r10.averageEstimate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r10.roomModel == null ? null : ctx_r10.roomModel.visitors[5] == null ? null : ctx_r10.roomModel.visitors[5].name);
} }
function RoomComponent_div_31_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r26.roomModel == null ? null : ctx_r26.roomModel.visitors[0] == null ? null : ctx_r26.roomModel.visitors[0].estimate);
} }
function RoomComponent_div_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, RoomComponent_div_31_span_2_Template, 2, 1, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("selected", (ctx_r11.roomModel == null ? null : ctx_r11.roomModel.visitors[0] == null ? null : ctx_r11.roomModel.visitors[0].estimate) !== "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r11.averageEstimate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r11.roomModel == null ? null : ctx_r11.roomModel.visitors[0] == null ? null : ctx_r11.roomModel.visitors[0].name);
} }
function RoomComponent_li_37_Template(rf, ctx) { if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RoomComponent_li_37_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r29); const estimate_r27 = ctx.$implicit; const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r28.estimateSelected(estimate_r27); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const estimate_r27 = ctx.$implicit;
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("selected", ctx_r12.selectedEstimate === estimate_r27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](estimate_r27);
} }
function RoomComponent_div_38_Template(rf, ctx) { if (rf & 1) {
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RoomComponent_div_38_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r31); const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r30.closeInvitePlayersPopUp(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "svg", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "path", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Invite players");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RoomComponent_div_38_Template_button_click_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r31); const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r32.copyLink(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Copy invitation link");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r13.link, " ");
} }
function RoomComponent_div_39_Template(rf, ctx) { if (rf & 1) {
    const _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Choose your display name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RoomComponent_div_39_Template_input_ngModelChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r34); const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r33.roomName = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RoomComponent_div_39_Template_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r34); const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r35.closeNamePopUp(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Continue to game ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", ctx_r14.roomName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r14.roomName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r14.roomName === "");
} }
class RoomComponent {
    constructor(signalRService, activeRoute, clipboard) {
        this.signalRService = signalRService;
        this.activeRoute = activeRoute;
        this.clipboard = clipboard;
        this.isInvitePlayersPopUpOpen = false;
        this.isNamePopUpOpen = false;
        this.didEveryoneVote = false;
        this.estimates = ["0", "0,5", "1", "2", "3", "5", "8", "13", "21", "34", "55", "89", "?", "☕"];
        this.unsubscribe$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.roomName = "";
        this.link = window.location.href;
        this.averageEstimate = null;
        this.selectedEstimate = "";
    }
    ngOnInit() {
        return __awaiter(this, void 0, void 0, function* () {
            this.activeRoute.params
                .pipe(Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["takeUntil"])(this.unsubscribe$))
                .subscribe((routeParams) => __awaiter(this, void 0, void 0, function* () {
                this.roomId = routeParams.roomId;
            }));
            if (!this.signalRService.isConected) {
                yield this.signalRService.startConnection();
            }
            this.openNamePopUp();
            this.signalRService.enterRoom$
                .pipe(Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["takeUntil"])(this.unsubscribe$))
                .subscribe(message => {
                console.log("enterRoom$");
                this.roomModel = message;
            });
            this.signalRService.sendEstimate$
                .pipe(Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["takeUntil"])(this.unsubscribe$))
                .subscribe(message => {
                console.log("sendEstimate$");
                this.roomModel.visitors = message;
                this.didEveryoneVote = true;
                this.roomModel.visitors.forEach(visitor => {
                    if (visitor.estimate === '') {
                        this.didEveryoneVote = false;
                    }
                });
            });
            this.signalRService.startNewVoting$
                .pipe(Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["takeUntil"])(this.unsubscribe$))
                .subscribe(message => {
                console.log("startNewVoting$");
                this.roomModel.visitors = message;
                this.didEveryoneVote = true;
                this.roomModel.visitors.forEach(visitor => {
                    if (visitor.estimate === '') {
                        this.didEveryoneVote = false;
                    }
                });
                this.averageEstimate = null;
                this.selectedEstimate = "";
            });
            this.signalRService.revealCards$
                .pipe(Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["takeUntil"])(this.unsubscribe$))
                .subscribe(() => {
                console.log("revealCards$");
                let sumEstimates = 0;
                this.roomModel.visitors.forEach(visitor => {
                    sumEstimates += Number(visitor.estimate);
                });
                this.averageEstimate = sumEstimates / this.roomModel.visitors.length;
                this.averageEstimate = this.averageEstimate.toFixed(2);
            });
            // не адекватный костыль на предзащиту, на защите не прокатит 
            window.onfocus = () => {
            };
            window.onmousemove = () => {
            };
        });
    }
    openHome() {
        window.location.href = "/";
    }
    closeInvitePlayersPopUp() {
        this.isInvitePlayersPopUpOpen = false;
    }
    openInvitePlayersPopUp() {
        this.isInvitePlayersPopUpOpen = true;
    }
    copyLink() {
        const linkText = document.getElementById('link-to-copy').textContent;
        this.clipboard.copy(linkText);
    }
    closeNamePopUp() {
        return __awaiter(this, void 0, void 0, function* () {
            this.isNamePopUpOpen = false;
            yield this.signalRService.enterRoom(this.roomId, this.roomName);
        });
    }
    openNamePopUp() {
        this.isNamePopUpOpen = true;
    }
    estimateSelected(estimate) {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.selectedEstimate === estimate) {
                estimate = this.selectedEstimate = "";
            }
            else {
                this.selectedEstimate = estimate;
            }
            const userEstimate = new _models_user_estimate_model__WEBPACK_IMPORTED_MODULE_2__["UserEstimate"](estimate, this.roomModel.userId);
            yield this.signalRService.sendEstimate(userEstimate, this.roomId);
        });
    }
    leaveRoom() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.signalRService.disconeconectRoom(this.roomId, this.roomName);
            this.openHome();
        });
    }
    revealCards() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.signalRService.revealCards(this.roomId);
        });
    }
    startNewVoting() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.signalRService.startNewVoting(this.roomId);
        });
    }
}
RoomComponent.ɵfac = function RoomComponent_Factory(t) { return new (t || RoomComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_signalr_service__WEBPACK_IMPORTED_MODULE_3__["SignalRService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_5__["Clipboard"])); };
RoomComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RoomComponent, selectors: [["room"]], decls: 40, vars: 19, consts: [[1, "room-page"], [1, "header"], [1, "project-name-container", 3, "click"], ["width", "40", "height", "36", "viewBox", "0 0 40 36", "fill", "none", "xmlns", "http://www.w3.org/2000/svg", 1, "project-name-icom"], ["d", "M19.9663 31.8069L27.7913 35.7194L40.1988 9.59812L22.225 0.278748L19.8206 5.08625L17.7813 0.900623L-0.193115 10.22L11.5694 35.7056L19.9663 31.8069ZM22.775 1.97125L38.5513 10.1519L27.2088 34.0306L10.8388 25.8456L22.775 1.97125ZM17.2188 2.59937L19.1163 6.49437L9.16126 26.4044L18.5375 31.0925L12.18 34.0444L1.44313 10.78L17.2188 2.59937Z", "fill", "#8E8D8A"], ["d", "M24.3084 3.90403L23.1904 3.34503L22.5655 4.59496L23.6835 5.15396L24.3084 3.90403Z", "fill", "#8E8D8A"], ["d", "M3.19071 11.4049L3.81567 12.6548L4.93367 12.0958L4.30871 10.8459L3.19071 11.4049Z", "fill", "#8E8D8A"], ["d", "M25.6913 32.0967L26.8093 32.6557L27.4342 31.4058L26.3162 30.8468L25.6913 32.0967Z", "fill", "#8E8D8A"], ["d", "M21.965 23.3225L22.1419 23.6162L22.6819 23.6275C24.3838 23.6275 30.0707 23.3781 31.8 20.1725C32.7538 18.4037 32.6894 15.9044 30.9219 14.9512C29.8282 14.3606 28.2494 14.2225 27.1775 14.6106C27.1538 14.3419 27.0963 14.0744 27.0057 13.8106C26.7132 12.9669 26.1069 12.2625 25.2975 11.8262C24.7919 11.5531 24.1975 11.4094 23.5769 11.4094C22.1032 11.4094 20.6963 12.1806 20.0757 13.3294C18.1482 16.9012 21.8082 23.0619 21.965 23.3225ZM21.175 13.9225C21.5707 13.19 22.58 12.6587 23.5763 12.6587C23.99 12.6587 24.38 12.7506 24.7038 12.9256C25.2369 13.2131 25.6344 13.6725 25.8238 14.2187C26.0119 14.7606 25.9675 15.3325 25.7007 15.8287L26.8007 16.4219C27.1857 15.7081 28.1744 15.6312 28.5825 15.6312C29.1982 15.6312 29.8357 15.7837 30.3294 16.05C31.4632 16.6619 31.2694 18.525 30.7013 19.5787C29.3219 22.1319 24.0494 22.3575 22.8594 22.375C21.83 20.5462 19.9288 16.2331 21.175 13.9225Z", "fill", "#8E8D8A"], [1, "project-name-titel"], [1, "invite-players", 3, "disabled", "click"], [1, "leave-the-room", 3, "disabled", "click"], [1, "body"], ["class", "invite-players-link", "href", "", 4, "ngIf"], ["class", "card card-2", 4, "ngIf"], [1, "table-wrapper"], [1, "left"], ["class", "card card-5", 4, "ngIf"], ["class", "card card-3", 4, "ngIf"], ["class", "card card-7", 4, "ngIf"], [1, "table"], [4, "ngIf"], ["class", "reveal-cards", 3, "click", 4, "ngIf"], ["class", "flex-d", 4, "ngIf"], [1, "right"], ["class", "card card-8", 4, "ngIf"], ["class", "card card-4", 4, "ngIf"], ["class", "card card-6", 4, "ngIf"], ["class", "card card-1", 4, "ngIf"], [1, "footer"], [1, "choose-estimate"], [1, "choose-estimate-span"], [1, "estimates"], ["class", "estimate", 4, "ngFor", "ngForOf"], ["class", "reg-confirm", 4, "ngIf"], ["href", "", 1, "invite-players-link"], [1, "card", "card-2"], [1, "card-body"], [1, "card-name"], [1, "card", "card-5"], [1, "card", "card-3"], [1, "card", "card-7"], [1, "reveal-cards", 3, "click"], [1, "flex-d"], [1, "inline-b"], [1, "card", "card-8"], [1, "card", "card-4"], [1, "card", "card-6"], [1, "card", "card-1"], [1, "estimate"], [1, "estimate-btn", 3, "click"], [1, "reg-confirm"], [1, "reg-pop-up"], [1, "pop-up-header"], [1, "pop-up-btn", "round-btn", 3, "click"], ["width", "20", "height", "20", "viewBox", "0 0 30 30", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M7.92898 7.92893C7.53845 8.31946 7.53845 8.95262 7.92898 9.34315L13.5858 15L7.92898 20.6569C7.53845 21.0474 7.53845 21.6805 7.92898 22.0711C8.3195 22.4616 8.95267 22.4616 9.34319 22.0711L15 16.4142L20.6569 22.0711C21.0474 22.4616 21.6806 22.4616 22.0711 22.0711C22.4616 21.6805 22.4616 21.0474 22.0711 20.6569L16.4143 15L22.0711 9.34315C22.4616 8.95262 22.4616 8.31946 22.0711 7.92893C21.6806 7.53841 21.0474 7.53841 20.6569 7.92893L15 13.5858L9.34319 7.92893C8.95267 7.53841 8.3195 7.53841 7.92898 7.92893Z", "fill", "currentColor"], [1, "section-name", "pop-up-text"], [1, "link-wrapper"], ["id", "link-to-copy", 1, "link"], [1, "pop-up-footer"], [1, "btn", "pop-up-btn", 3, "click"], ["type", "text", "name", "room-num", "id", "room-num", "placeholder", "Your display name", 3, "value", "ngModel", "ngModelChange"], [1, "btn", "pop-up-btn", 3, "disabled", "click"]], template: function RoomComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RoomComponent_Template_div_click_2_listener() { return ctx.openHome(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "svg", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "path", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "path", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "path", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "path", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "path", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Planning Poker Room ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RoomComponent_Template_button_click_11_listener() { return ctx.openInvitePlayersPopUp(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Invite players ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RoomComponent_Template_button_click_13_listener() { return ctx.leaveRoom(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Leave the room ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, RoomComponent_a_16_Template, 2, 0, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, RoomComponent_div_17_Template, 5, 4, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, RoomComponent_div_20_Template, 5, 4, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, RoomComponent_div_21_Template, 5, 4, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, RoomComponent_div_22_Template, 5, 4, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, RoomComponent_span_24_Template, 2, 0, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, RoomComponent_button_25_Template, 2, 0, "button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, RoomComponent_div_26_Template, 5, 1, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, RoomComponent_div_28_Template, 5, 4, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, RoomComponent_div_29_Template, 5, 4, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, RoomComponent_div_30_Template, 5, 4, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, RoomComponent_div_31_Template, 5, 4, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "span", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Choose your estimate \uD83D\uDC47");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "ul", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](37, RoomComponent_li_37_Template, 4, 3, "li", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](38, RoomComponent_div_38_Template, 14, 1, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](39, RoomComponent_div_39_Template, 8, 3, "div", 34);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.signalRService.isConected);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.signalRService.isConected);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.roomModel == null ? null : ctx.roomModel.visitors == null ? null : ctx.roomModel.visitors.length) > 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.roomModel == null ? null : ctx.roomModel.visitors == null ? null : ctx.roomModel.visitors.length) > 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.roomModel == null ? null : ctx.roomModel.visitors == null ? null : ctx.roomModel.visitors.length) > 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.roomModel == null ? null : ctx.roomModel.visitors == null ? null : ctx.roomModel.visitors.length) > 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("reveal", ctx.didEveryoneVote);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.didEveryoneVote && !ctx.averageEstimate);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.didEveryoneVote && !ctx.averageEstimate);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.averageEstimate);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.roomModel == null ? null : ctx.roomModel.visitors == null ? null : ctx.roomModel.visitors.length) > 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.roomModel == null ? null : ctx.roomModel.visitors == null ? null : ctx.roomModel.visitors.length) > 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.roomModel == null ? null : ctx.roomModel.visitors == null ? null : ctx.roomModel.visitors.length) > 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.roomModel == null ? null : ctx.roomModel.visitors == null ? null : ctx.roomModel.visitors.length) > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.estimates);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isInvitePlayersPopUpOpen);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isNamePopUpOpen);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"]], styles: [".room-page[_ngcontent-%COMP%] {\r\n    margin: 0 40px;\r\n    height: 100vh;\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\n.room-page[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    width: 100%;\r\n    height: 100px;\r\n    display: flex;\r\n    align-items: center;\r\n    background: #EAE7DC;\r\n    flex-shrink: 0;\r\n}\r\n\r\n.room-page[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .project-name-container[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    align-items: center;\r\n    cursor: pointer;\r\n}\r\n\r\n.room-page[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .project-name-container[_ngcontent-%COMP%]   .project-name-icom[_ngcontent-%COMP%] {\r\n    margin-right: 8px;\r\n}\r\n\r\n.room-page[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .project-name-container[_ngcontent-%COMP%]   .project-name-titel[_ngcontent-%COMP%] {\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    font-size: 24px;\r\n    line-height: 29px;\r\n    color: #8E8D8A;\r\n}\r\n\r\n.room-page[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .leave-the-room[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    right: 0;\r\n}\r\n\r\n.room-page[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .invite-players[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    right: 214px;\r\n}\r\n\r\n.estimate-btn[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    overflow: hidden;\r\n    font-weight: 700;\r\n    width: 48px;\r\n    height: 80px;\r\n    font-size: 19px;\r\n    background: #EAE7DC;\r\n    border: 2px solid #E85A4F;\r\n    border-radius: 4px;\r\n    -webkit-transition: .4s ease-out;\r\n    -webkit-transition-delay: 0.1s;\r\n    -o-transition: .1s ease-out;\r\n    -o-transition-delay: 0.1s;\r\n    -moz-transition: .1s ease-out;\r\n    -moz-transition-delay: 0.1s;\r\n     transition: .1s ease-out;\r\n     transition-delay: 0.1s;\r\n}\r\n\r\n.invite-players-link[_ngcontent-%COMP%] {\r\n    margin-bottom: 20px;\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    font-size: 18px;\r\n    line-height: 22px;\r\n    color: #E85A4F;\r\n}\r\n\r\n.table[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    width: 280px;\r\n    height: 280px;\r\n    background: #E98074;\r\n    border-radius: 100%;\r\n    margin: 0;\r\n}\r\n\r\n.table.reveal[_ngcontent-%COMP%] {\r\n    border: 4px solid #E85A4F;\r\n}\r\n\r\n.table[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    font-size: 18px;\r\n    line-height: 22px;\r\n}\r\n\r\n.inline-b[_ngcontent-%COMP%] {\r\n    display: inline-block;\r\n}\r\n\r\n.flex-d[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    flex-direction: column;\r\n}\r\n\r\n.flex-d[_ngcontent-%COMP%]   *[_ngcontent-%COMP%]:not(:last-child) {\r\n    margin-bottom: 16px;\r\n}\r\n\r\n.card[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    align-items: center;\r\n    flex-direction: column;\r\n}\r\n\r\n.card[_ngcontent-%COMP%]   .card-body.selected[_ngcontent-%COMP%]{\r\n    background-color: #E85A4F;\r\n}\r\n\r\n.card-body[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    font-size: 18px;\r\n    width: 35px;\r\n    height: 60px;\r\n    background: #D8C3A5;\r\n    border-radius: 4px;\r\n    margin-bottom: 8px;\r\n}\r\n\r\n.card-name[_ngcontent-%COMP%] {\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    font-size: 14px;\r\n    line-height: 22px;\r\n}\r\n\r\n.choose-estimate-span[_ngcontent-%COMP%] {\r\n    margin-bottom: 20px;\r\n    display: inline-block;\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    font-size: 18px;\r\n    line-height: 22px;\r\n}\r\n\r\n.estimates[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    margin: 0;\r\n    padding: 0;\r\n    gap: 8px;\r\n}\r\n\r\n.estimate[_ngcontent-%COMP%] {\r\n    display: block;\r\n}\r\n\r\n.body[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    flex-direction: column;\r\n    background: #EAE7DC;\r\n    height: 100%;\r\n}\r\n\r\nbutton[_ngcontent-%COMP%] {\r\n    width: 194px;\r\n    height: 48px;\r\n    background: #EAE7DC;\r\n    border: 1px solid #8E8D8A;\r\n    border-radius: 4px;\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    font-size: 18px;\r\n    line-height: 22px;\r\n    text-align: center;\r\n    color: #000000;\r\n}\r\n\r\n.footer[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    justify-content: center;\r\n    margin-bottom: 26px;\r\n    flex-shrink: 0;\r\n}\r\n\r\n.table-wrapper[_ngcontent-%COMP%] {\r\n    display: flex;\r\n}\r\n\r\n.table-wrapper[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\n.table-wrapper[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\n.estimates[_ngcontent-%COMP%]:hover   .estimate[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\r\n    background-color: #E85A4F;\r\n    margin-top: -8px;\r\n    -webkit-transition: .4s ease-out;\r\n    -webkit-transition-delay: 0.1s;\r\n    -o-transition: .1s ease-out;\r\n    -o-transition-delay: 0.1s;\r\n    -moz-transition: .1s ease-out;\r\n    -moz-transition-delay: 0.1s;\r\n     transition: .1s ease-out;\r\n     transition-delay: 0.1s;\r\n}\r\n\r\n.estimates[_ngcontent-%COMP%]   .estimate[_ngcontent-%COMP%]   button.selected[_ngcontent-%COMP%] {\r\n    background-color: #E85A4F;\r\n    margin-top: -8px;\r\n    -webkit-transition: .4s ease-out;\r\n    -webkit-transition-delay: 0.1s;\r\n    -o-transition: .1s ease-out;\r\n    -o-transition-delay: 0.1s;\r\n    -moz-transition: .1s ease-out;\r\n    -moz-transition-delay: 0.1s;\r\n     transition: .1s ease-out;\r\n     transition-delay: 0.1s;\r\n}\r\n\r\n.card-1[_ngcontent-%COMP%] {\r\n    margin-top: 45px;\r\n}\r\n\r\n.card-2[_ngcontent-%COMP%] {\r\n    margin-bottom: 20px;\r\n}\r\n\r\n.card-3[_ngcontent-%COMP%] {\r\n    margin-right: 50px;\r\n}\r\n\r\n.card-4[_ngcontent-%COMP%] {\r\n    margin-left: 50px;\r\n}\r\n\r\n.card-5[_ngcontent-%COMP%] {\r\n    margin-bottom: 25px;\r\n}\r\n\r\n.card-6[_ngcontent-%COMP%] {\r\n    margin-top: 25px;\r\n}\r\n\r\n.card-7[_ngcontent-%COMP%] {\r\n    margin-top: 25px;\r\n}\r\n\r\n.card-8[_ngcontent-%COMP%] {\r\n    margin-bottom: 25px;\r\n}\r\n\r\n.table-wrapper[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%] {\r\n    width: 88px;\r\n}\r\n\r\n.table-wrapper[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%] {\r\n    width: 88px;\r\n}\r\n\r\n.reg-confirm[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    top: 0px;\r\n    position: absolute;\r\n    width: 100vw;\r\n    height: 100vh;\r\n    background: rgba(0, 0, 0, 0.5);\r\n    z-index: 100;\r\n}\r\n\r\n.reg-pop-up[_ngcontent-%COMP%] {\r\n    padding: 40px;\r\n    border-radius: 8px;\r\n    background-color: #EAE7DC;\r\n    display: flex;\r\n    flex-direction: column;\r\n    width: 630px;\r\n}\r\n\r\n.pop-up-btn[_ngcontent-%COMP%] {\r\n    background-color: #E98074;\r\n    color: black;\r\n    border: 1px solid #8E8D8A;\r\n}\r\n\r\n.pop-up-footer[_ngcontent-%COMP%]   .pop-up-btn[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    height: 40px;\r\n    background-color: #E98074;\r\n    font-size: 18px;\r\n}\r\n\r\n.pop-up-text[_ngcontent-%COMP%] {\r\n    color: black;\r\n    font-weight: 500;\r\n    margin-top: 16px;\r\n    font-size: 24px;\r\n    margin-bottom: 36px;\r\n}\r\n\r\n.round-btn[_ngcontent-%COMP%] {\r\n    border-radius: 100px;\r\n    height: 28px;\r\n    width: 28px;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n}\r\n\r\n.pop-up-header[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    justify-content: flex-end;\r\n    width: 100%;\r\n}\r\n\r\n.pop-up-footer[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    justify-content: flex-start;\r\n    width: 100%;\r\n}\r\n\r\n.link-wrapper[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-direction: row;\r\n    align-items: center;\r\n    padding: 8px 12px;\r\n    margin-bottom: 24px;\r\n    width: 100%;\r\n\r\n    background: white;\r\n    border-radius: 8px;\r\n\r\n    .link {\r\n        margin-right: 10px;\r\n        width: 100%;\r\n        height: 24px;\r\n        font-weight: 400;\r\n        font-size: 14px;\r\n        line-height: 24px;\r\n\r\n        -webkit-text-decoration-line: underline;\r\n\r\n                text-decoration-line: underline;\r\n        white-space: nowrap;\r\n        overflow: hidden;\r\n    }\r\n}\r\n\r\n.reg-pop-up[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    height: 40px;\r\n    margin-bottom: 24px;\r\n}\r\n\r\n.reveal-cards[_ngcontent-%COMP%] {\r\n    border-color: #E85A4F;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcm9vbS9yb29tLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxjQUFjO0lBQ2QsYUFBYTtJQUNiLGFBQWE7SUFDYixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLGFBQWE7SUFDYixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsUUFBUTtBQUNaOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLFdBQVc7SUFDWCxZQUFZO0lBQ1osZUFBZTtJQUNmLG1CQUFtQjtJQUNuQix5QkFBeUI7SUFDekIsa0JBQWtCO0lBQ2xCLGdDQUFnQztJQUNoQyw4QkFBOEI7SUFDOUIsMkJBQTJCO0lBQzNCLHlCQUF5QjtJQUN6Qiw2QkFBNkI7SUFDN0IsMkJBQTJCO0tBQzFCLHdCQUF3QjtLQUN4QixzQkFBc0I7QUFDM0I7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixZQUFZO0lBQ1osYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIsU0FBUztBQUNiOztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0kscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixlQUFlO0lBQ2YsV0FBVztJQUNYLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixxQkFBcUI7SUFDckIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFNBQVM7SUFDVCxVQUFVO0lBQ1YsUUFBUTtBQUNaOztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osWUFBWTtJQUNaLG1CQUFtQjtJQUNuQix5QkFBeUI7SUFDekIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsY0FBYztBQUNsQjs7QUFFQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsZ0JBQWdCO0lBQ2hCLGdDQUFnQztJQUNoQyw4QkFBOEI7SUFDOUIsMkJBQTJCO0lBQzNCLHlCQUF5QjtJQUN6Qiw2QkFBNkI7SUFDN0IsMkJBQTJCO0tBQzFCLHdCQUF3QjtLQUN4QixzQkFBc0I7QUFDM0I7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsZ0JBQWdCO0lBQ2hCLGdDQUFnQztJQUNoQyw4QkFBOEI7SUFDOUIsMkJBQTJCO0lBQzNCLHlCQUF5QjtJQUN6Qiw2QkFBNkI7SUFDN0IsMkJBQTJCO0tBQzFCLHdCQUF3QjtLQUN4QixzQkFBc0I7QUFDM0I7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixRQUFRO0lBQ1Isa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLHlCQUF5QjtJQUN6QixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsWUFBWTtJQUNaLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1oseUJBQXlCO0lBQ3pCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksb0JBQW9CO0lBQ3BCLFlBQVk7SUFDWixXQUFXO0lBQ1gsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxhQUFhO0lBQ2IseUJBQXlCO0lBQ3pCLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGFBQWE7SUFDYiwyQkFBMkI7SUFDM0IsV0FBVztBQUNmOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIsaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQixXQUFXOztJQUVYLGlCQUFpQjtJQUNqQixrQkFBa0I7O0lBRWxCO1FBQ0ksa0JBQWtCO1FBQ2xCLFdBQVc7UUFDWCxZQUFZO1FBQ1osZ0JBQWdCO1FBQ2hCLGVBQWU7UUFDZixpQkFBaUI7O1FBRWpCLHVDQUErQjs7Z0JBQS9CLCtCQUErQjtRQUMvQixtQkFBbUI7UUFDbkIsZ0JBQWdCO0lBQ3BCO0FBQ0o7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLHFCQUFxQjtBQUN6QiIsImZpbGUiOiJzcmMvYXBwL3Jvb20vcm9vbS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJvb20tcGFnZSB7XHJcbiAgICBtYXJnaW46IDAgNDBweDtcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG5cclxuLnJvb20tcGFnZSAuaGVhZGVyIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDBweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZDogI0VBRTdEQztcclxuICAgIGZsZXgtc2hyaW5rOiAwO1xyXG59XHJcblxyXG4ucm9vbS1wYWdlIC5oZWFkZXIgLnByb2plY3QtbmFtZS1jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5yb29tLXBhZ2UgLmhlYWRlciAucHJvamVjdC1uYW1lLWNvbnRhaW5lciAucHJvamVjdC1uYW1lLWljb20ge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA4cHg7XHJcbn1cclxuXHJcbi5yb29tLXBhZ2UgLmhlYWRlciAucHJvamVjdC1uYW1lLWNvbnRhaW5lciAucHJvamVjdC1uYW1lLXRpdGVsIHtcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjlweDtcclxuICAgIGNvbG9yOiAjOEU4RDhBO1xyXG59XHJcblxyXG4ucm9vbS1wYWdlIC5oZWFkZXIgLmxlYXZlLXRoZS1yb29tIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHJpZ2h0OiAwO1xyXG59XHJcblxyXG4ucm9vbS1wYWdlIC5oZWFkZXIgLmludml0ZS1wbGF5ZXJzIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHJpZ2h0OiAyMTRweDtcclxufVxyXG5cclxuLmVzdGltYXRlLWJ0biB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICB3aWR0aDogNDhweDtcclxuICAgIGhlaWdodDogODBweDtcclxuICAgIGZvbnQtc2l6ZTogMTlweDtcclxuICAgIGJhY2tncm91bmQ6ICNFQUU3REM7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjRTg1QTRGO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiAuNHMgZWFzZS1vdXQ7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb24tZGVsYXk6IDAuMXM7XHJcbiAgICAtby10cmFuc2l0aW9uOiAuMXMgZWFzZS1vdXQ7XHJcbiAgICAtby10cmFuc2l0aW9uLWRlbGF5OiAwLjFzO1xyXG4gICAgLW1vei10cmFuc2l0aW9uOiAuMXMgZWFzZS1vdXQ7XHJcbiAgICAtbW96LXRyYW5zaXRpb24tZGVsYXk6IDAuMXM7XHJcbiAgICAgdHJhbnNpdGlvbjogLjFzIGVhc2Utb3V0O1xyXG4gICAgIHRyYW5zaXRpb24tZGVsYXk6IDAuMXM7XHJcbn1cclxuXHJcbi5pbnZpdGUtcGxheWVycy1saW5rIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDIycHg7XHJcbiAgICBjb2xvcjogI0U4NUE0RjtcclxufVxyXG5cclxuLnRhYmxlIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICB3aWR0aDogMjgwcHg7XHJcbiAgICBoZWlnaHQ6IDI4MHB4O1xyXG4gICAgYmFja2dyb3VuZDogI0U5ODA3NDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XHJcbiAgICBtYXJnaW46IDA7XHJcbn1cclxuXHJcbi50YWJsZS5yZXZlYWwge1xyXG4gICAgYm9yZGVyOiA0cHggc29saWQgI0U4NUE0RjtcclxufVxyXG5cclxuLnRhYmxlIHNwYW4ge1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyMnB4O1xyXG59XHJcblxyXG4uaW5saW5lLWIge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG59XHJcblxyXG4uZmxleC1kIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcblxyXG4uZmxleC1kICo6bm90KDpsYXN0LWNoaWxkKSB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xyXG59XHJcblxyXG4uY2FyZCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuXHJcbi5jYXJkIC5jYXJkLWJvZHkuc2VsZWN0ZWR7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRTg1QTRGO1xyXG59XHJcblxyXG4uY2FyZC1ib2R5IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICB3aWR0aDogMzVweDtcclxuICAgIGhlaWdodDogNjBweDtcclxuICAgIGJhY2tncm91bmQ6ICNEOEMzQTU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA4cHg7XHJcbn1cclxuXHJcbi5jYXJkLW5hbWUge1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyMnB4O1xyXG59XHJcblxyXG4uY2hvb3NlLWVzdGltYXRlLXNwYW4ge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjJweDtcclxufVxyXG5cclxuLmVzdGltYXRlcyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIGdhcDogOHB4O1xyXG59XHJcblxyXG4uZXN0aW1hdGUge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbi5ib2R5IHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYmFja2dyb3VuZDogI0VBRTdEQztcclxuICAgIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuYnV0dG9uIHtcclxuICAgIHdpZHRoOiAxOTRweDtcclxuICAgIGhlaWdodDogNDhweDtcclxuICAgIGJhY2tncm91bmQ6ICNFQUU3REM7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjOEU4RDhBO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyMnB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6ICMwMDAwMDA7XHJcbn1cclxuXHJcbi5mb290ZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjZweDtcclxuICAgIGZsZXgtc2hyaW5rOiAwO1xyXG59XHJcblxyXG4udGFibGUtd3JhcHBlciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcblxyXG4udGFibGUtd3JhcHBlciAubGVmdCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG5cclxuLnRhYmxlLXdyYXBwZXIgLnJpZ2h0IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcblxyXG4uZXN0aW1hdGVzOmhvdmVyIC5lc3RpbWF0ZSBidXR0b246aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0U4NUE0RjtcclxuICAgIG1hcmdpbi10b3A6IC04cHg7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IC40cyBlYXNlLW91dDtcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbi1kZWxheTogMC4xcztcclxuICAgIC1vLXRyYW5zaXRpb246IC4xcyBlYXNlLW91dDtcclxuICAgIC1vLXRyYW5zaXRpb24tZGVsYXk6IDAuMXM7XHJcbiAgICAtbW96LXRyYW5zaXRpb246IC4xcyBlYXNlLW91dDtcclxuICAgIC1tb3otdHJhbnNpdGlvbi1kZWxheTogMC4xcztcclxuICAgICB0cmFuc2l0aW9uOiAuMXMgZWFzZS1vdXQ7XHJcbiAgICAgdHJhbnNpdGlvbi1kZWxheTogMC4xcztcclxufVxyXG5cclxuLmVzdGltYXRlcyAuZXN0aW1hdGUgYnV0dG9uLnNlbGVjdGVkIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNFODVBNEY7XHJcbiAgICBtYXJnaW4tdG9wOiAtOHB4O1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiAuNHMgZWFzZS1vdXQ7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb24tZGVsYXk6IDAuMXM7XHJcbiAgICAtby10cmFuc2l0aW9uOiAuMXMgZWFzZS1vdXQ7XHJcbiAgICAtby10cmFuc2l0aW9uLWRlbGF5OiAwLjFzO1xyXG4gICAgLW1vei10cmFuc2l0aW9uOiAuMXMgZWFzZS1vdXQ7XHJcbiAgICAtbW96LXRyYW5zaXRpb24tZGVsYXk6IDAuMXM7XHJcbiAgICAgdHJhbnNpdGlvbjogLjFzIGVhc2Utb3V0O1xyXG4gICAgIHRyYW5zaXRpb24tZGVsYXk6IDAuMXM7XHJcbn1cclxuXHJcbi5jYXJkLTEge1xyXG4gICAgbWFyZ2luLXRvcDogNDVweDtcclxufVxyXG5cclxuLmNhcmQtMiB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG59XHJcblxyXG4uY2FyZC0zIHtcclxuICAgIG1hcmdpbi1yaWdodDogNTBweDtcclxufVxyXG5cclxuLmNhcmQtNCB7XHJcbiAgICBtYXJnaW4tbGVmdDogNTBweDtcclxufVxyXG5cclxuLmNhcmQtNSB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyNXB4O1xyXG59XHJcblxyXG4uY2FyZC02IHtcclxuICAgIG1hcmdpbi10b3A6IDI1cHg7XHJcbn1cclxuXHJcbi5jYXJkLTcge1xyXG4gICAgbWFyZ2luLXRvcDogMjVweDtcclxufVxyXG5cclxuLmNhcmQtOCB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyNXB4O1xyXG59XHJcblxyXG4udGFibGUtd3JhcHBlciAubGVmdCB7XHJcbiAgICB3aWR0aDogODhweDtcclxufVxyXG5cclxuLnRhYmxlLXdyYXBwZXIgLnJpZ2h0IHtcclxuICAgIHdpZHRoOiA4OHB4O1xyXG59XHJcblxyXG4ucmVnLWNvbmZpcm0ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIHRvcDogMHB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDEwMHZ3O1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC41KTtcclxuICAgIHotaW5kZXg6IDEwMDtcclxufVxyXG5cclxuLnJlZy1wb3AtdXAge1xyXG4gICAgcGFkZGluZzogNDBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNFQUU3REM7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIHdpZHRoOiA2MzBweDtcclxufVxyXG5cclxuLnBvcC11cC1idG4ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0U5ODA3NDtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICM4RThEOEE7XHJcbn1cclxuXHJcbi5wb3AtdXAtZm9vdGVyIC5wb3AtdXAtYnRuIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0U5ODA3NDtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxufVxyXG5cclxuLnBvcC11cC10ZXh0IHtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBtYXJnaW4tdG9wOiAxNnB4O1xyXG4gICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMzZweDtcclxufVxyXG5cclxuLnJvdW5kLWJ0biB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMDBweDtcclxuICAgIGhlaWdodDogMjhweDtcclxuICAgIHdpZHRoOiAyOHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLnBvcC11cC1oZWFkZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLnBvcC11cC1mb290ZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4ubGluay13cmFwcGVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDhweCAxMnB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjRweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG5cclxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG5cclxuICAgIC5saW5rIHtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiAyNHB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xyXG5cclxuICAgICAgICB0ZXh0LWRlY29yYXRpb24tbGluZTogdW5kZXJsaW5lO1xyXG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIH1cclxufVxyXG5cclxuLnJlZy1wb3AtdXAgaW5wdXQge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyNHB4O1xyXG59XHJcblxyXG4ucmV2ZWFsLWNhcmRzIHtcclxuICAgIGJvcmRlci1jb2xvcjogI0U4NUE0RjtcclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RoomComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'room',
                templateUrl: './room.component.html',
                styleUrls: ['./room.component.css']
            }]
    }], function () { return [{ type: _services_signalr_service__WEBPACK_IMPORTED_MODULE_3__["SignalRService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }, { type: _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_5__["Clipboard"] }]; }, null); })();
class UserModal {
}


/***/ }),

/***/ "./src/app/services/api.client.ts":
/*!****************************************!*\
  !*** ./src/app/services/api.client.ts ***!
  \****************************************/
/*! exports provided: ApiClient */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiClient", function() { return ApiClient; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");




class ApiClient {
    constructor(http, zone) {
        this.http = http;
        this.zone = zone;
        this.apiRoot = "http://localhost:5000/api";
    }
    post(url, data, silent) {
        const observable = this.http.post(`${this.apiRoot}/${url}`, JSON.stringify(data), { headers: this.getHeaders(), observe: "response", withCredentials: this.getCredentialsOption() });
        return this.subscribe(observable, url, silent);
    }
    getHeaders() {
        return new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({ "content-type": "application/json", "cache-control": "no-cache" });
    }
    getCredentialsOption() {
        return undefined;
    }
    subscribe(observable, url, silent, full = false) {
        const promise = new Promise((resolve, reject) => {
            observable.subscribe({
                next: r => {
                    setTimeout(() => {
                        this.zone.run(() => {
                            if (full) {
                                resolve(r);
                            }
                            else {
                                resolve(r["body"]);
                            }
                        });
                    });
                },
                error: r => {
                    if (silent) { // ToDo check
                        if (r.status === 500) {
                            resolve({ code: "500" });
                        }
                        else {
                            resolve(r.error || null);
                        }
                    }
                }
            });
        });
        return promise;
    }
}
ApiClient.ɵfac = function ApiClient_Factory(t) { return new (t || ApiClient)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"])); };
ApiClient.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ApiClient, factory: ApiClient.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ApiClient, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/signalr.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/signalr.service.ts ***!
  \*********************************************/
/*! exports provided: SignalRService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignalRService", function() { return SignalRService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _microsoft_signalr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @microsoft/signalr */ "./node_modules/@microsoft/signalr/dist/esm/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/dist/esm/index.js");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};




class SignalRService {
    constructor() {
        this.isConected = false;
        this.enterRoom$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.sendEstimate$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.startNewVoting$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.revealCards$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    startConnection() {
        return __awaiter(this, void 0, void 0, function* () {
            this.hubConnection = new _microsoft_signalr__WEBPACK_IMPORTED_MODULE_1__["HubConnectionBuilder"]()
                .withUrl('http://localhost:5000/voting')
                .build();
            this.hubConnection.serverTimeoutInMilliseconds = 100000000;
            yield this.hubConnection
                .start()
                .then(() => {
                console.log('Connection started');
                this.isConected = true;
            })
                .catch(err => console.log('Error while starting connection: ' + err));
            this.hubConnection.on("Receive", (message) => {
                console.log(message);
                this.enterRoom$.next(message);
            });
            this.hubConnection.on("ChangingEstimate", (message) => {
                console.log(message);
                this.sendEstimate$.next(message);
            });
            this.hubConnection.on("StartNewVoting", (message) => {
                console.log(message);
                this.startNewVoting$.next(message);
            });
            this.hubConnection.on("RevealCards", () => {
                this.revealCards$.next();
            });
        });
    }
    ;
    enterRoom(roomId, roomName) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.hubConnection.invoke("Conect", roomName, roomId)
                .then((data) => {
                console.log("enterRoomOK");
                console.log(data);
            })
                .catch(function (err) {
                return console.error(err.toString());
            });
        });
    }
    ;
    sendEstimate(userEstimate, roomName) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(userEstimate);
            console.log(roomName);
            yield this.hubConnection.invoke("Voting", userEstimate.Estimate, userEstimate.Id, roomName)
                .then((data) => {
                console.log("sendEstimateOK");
                console.log(data);
            })
                .catch(function (err) {
                return console.error(err.toString());
            });
        });
    }
    ;
    disconeconectRoom(roomId, roomName) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.hubConnection.invoke("Disconeconect", roomName, roomId)
                .then((data) => {
                console.log("disconeconectRoomOK");
                console.log(data);
            })
                .catch(function (err) {
                return console.error(err.toString());
            });
        });
    }
    ;
    startNewVoting(roomId) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.hubConnection.invoke("StartNewVoting", roomId)
                .then((data) => {
                console.log("startNewVotingOK");
                console.log(data);
            })
                .catch(function (err) {
                return console.error(err.toString());
            });
        });
    }
    ;
    revealCards(roomId) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.hubConnection.invoke("RevealCards", roomId)
                .then((data) => {
                console.log("revealCardsOK");
                console.log(data);
            })
                .catch(function (err) {
                return console.error(err.toString());
            });
        });
    }
    ;
}
SignalRService.ɵfac = function SignalRService_Factory(t) { return new (t || SignalRService)(); };
SignalRService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SignalRService, factory: SignalRService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SignalRService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");



Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
const platform = Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_0__["platformBrowserDynamic"])();
platform.bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"]);


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Учеба\Диплом\Diplom\WebClient\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map