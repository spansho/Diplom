(function () {
  function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == typeof value && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    "./$$_lazy_route_resource lazy recursive":
    /*!******************************************************!*\
      !*** ./$$_lazy_route_resource lazy namespace object ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function $$_lazy_route_resourceLazyRecursive(module, exports) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      module.exports = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
      /***/
    },

    /***/
    "./src/app/app.module.ts":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: AppModule */

    /***/
    function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/fesm2015/core.js");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/platform-browser */
      "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/fesm2015/forms.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/fesm2015/router.js");
      /* harmony import */


      var _main_main_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./main/main.component */
      "./src/app/main/main.component.ts");
      /* harmony import */


      var _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./not-found/not-found.component */
      "./src/app/not-found/not-found.component.ts");
      /* harmony import */


      var _personal_account_personal_account_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./personal-account/personal-account.component */
      "./src/app/personal-account/personal-account.component.ts");
      /* harmony import */


      var _home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./home/home.component */
      "./src/app/home/home.component.ts");
      /* harmony import */


      var _services_signalr_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./services/signalr.service */
      "./src/app/services/signalr.service.ts");
      /* harmony import */


      var _services_api_client__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./services/api.client */
      "./src/app/services/api.client.ts");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/fesm2015/http.js");
      /* harmony import */


      var _room_room_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./room/room.component */
      "./src/app/room/room.component.ts");

      var appRoutes = [{
        path: '',
        component: _home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"]
      }, {
        path: 'room',
        children: [{
          path: ":roomId",
          component: _room_room_component__WEBPACK_IMPORTED_MODULE_11__["RoomComponent"]
        }]
      }, {
        path: '**',
        component: _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_5__["NotFoundComponent"]
      }];

      var AppModule = /*#__PURE__*/_createClass(function AppModule() {
        _classCallCheck(this, AppModule);
      });

      AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: AppModule,
        bootstrap: [_main_main_component__WEBPACK_IMPORTED_MODULE_4__["MainComponent"]]
      });
      AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function AppModule_Factory(t) {
          return new (t || AppModule)();
        },
        providers: [_services_signalr_service__WEBPACK_IMPORTED_MODULE_8__["SignalRService"], _services_api_client__WEBPACK_IMPORTED_MODULE_9__["ApiClient"]],
        imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(appRoutes), _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppModule, {
          declarations: [_main_main_component__WEBPACK_IMPORTED_MODULE_4__["MainComponent"], _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_5__["NotFoundComponent"], _personal_account_personal_account_component__WEBPACK_IMPORTED_MODULE_6__["PersonalAccountComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"], _room_room_component__WEBPACK_IMPORTED_MODULE_11__["RoomComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(appRoutes), _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"]],
            declarations: [_main_main_component__WEBPACK_IMPORTED_MODULE_4__["MainComponent"], _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_5__["NotFoundComponent"], _personal_account_personal_account_component__WEBPACK_IMPORTED_MODULE_6__["PersonalAccountComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"], _room_room_component__WEBPACK_IMPORTED_MODULE_11__["RoomComponent"]],
            providers: [_services_signalr_service__WEBPACK_IMPORTED_MODULE_8__["SignalRService"], _services_api_client__WEBPACK_IMPORTED_MODULE_9__["ApiClient"]],
            bootstrap: [_main_main_component__WEBPACK_IMPORTED_MODULE_4__["MainComponent"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "./src/app/home/home.component.ts":
    /*!****************************************!*\
      !*** ./src/app/home/home.component.ts ***!
      \****************************************/

    /*! exports provided: HomeComponent */

    /***/
    function srcAppHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
        return HomeComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/fesm2015/core.js");
      /* harmony import */


      var _services_api_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../services/api.client */
      "./src/app/services/api.client.ts");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/fesm2015/forms.js");

      var HomeComponent = /*#__PURE__*/function () {
        function HomeComponent(apiClient) {
          _classCallCheck(this, HomeComponent);

          this.apiClient = apiClient;
          this.roomId = "";
        }

        _createClass(HomeComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "enterRoomById",
          value: function enterRoomById() {
            if (this.roomId.length !== 36) {
              alert("The entered room id is not valid");
            } else {
              window.location.href = "/room/".concat(this.roomId);
            }
          }
        }, {
          key: "createNewRoom",
          value: function createNewRoom() {
            this.apiClient.post("Room/create", {}).then(function (data) {
              window.location.href = "/room/".concat(data.id);
            });
          }
        }]);

        return HomeComponent;
      }();

      HomeComponent.ɵfac = function HomeComponent_Factory(t) {
        return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_api_client__WEBPACK_IMPORTED_MODULE_1__["ApiClient"]));
      };

      HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: HomeComponent,
        selectors: [["home"]],
        decls: 30,
        vars: 2,
        consts: [[1, "home-page"], [1, "header"], [1, "project-name-container"], ["width", "40", "height", "36", "viewBox", "0 0 40 36", "fill", "none", "xmlns", "http://www.w3.org/2000/svg", 1, "project-name-icom"], ["d", "M19.9663 31.8069L27.7913 35.7194L40.1988 9.59812L22.225 0.278748L19.8206 5.08625L17.7813 0.900623L-0.193115 10.22L11.5694 35.7056L19.9663 31.8069ZM22.775 1.97125L38.5513 10.1519L27.2088 34.0306L10.8388 25.8456L22.775 1.97125ZM17.2188 2.59937L19.1163 6.49437L9.16126 26.4044L18.5375 31.0925L12.18 34.0444L1.44313 10.78L17.2188 2.59937Z", "fill", "#8E8D8A"], ["d", "M24.3084 3.90403L23.1904 3.34503L22.5655 4.59496L23.6835 5.15396L24.3084 3.90403Z", "fill", "#8E8D8A"], ["d", "M3.19071 11.4049L3.81567 12.6548L4.93367 12.0958L4.30871 10.8459L3.19071 11.4049Z", "fill", "#8E8D8A"], ["d", "M25.6913 32.0967L26.8093 32.6557L27.4342 31.4058L26.3162 30.8468L25.6913 32.0967Z", "fill", "#8E8D8A"], ["d", "M21.965 23.3225L22.1419 23.6162L22.6819 23.6275C24.3838 23.6275 30.0707 23.3781 31.8 20.1725C32.7538 18.4037 32.6894 15.9044 30.9219 14.9512C29.8282 14.3606 28.2494 14.2225 27.1775 14.6106C27.1538 14.3419 27.0963 14.0744 27.0057 13.8106C26.7132 12.9669 26.1069 12.2625 25.2975 11.8262C24.7919 11.5531 24.1975 11.4094 23.5769 11.4094C22.1032 11.4094 20.6963 12.1806 20.0757 13.3294C18.1482 16.9012 21.8082 23.0619 21.965 23.3225ZM21.175 13.9225C21.5707 13.19 22.58 12.6587 23.5763 12.6587C23.99 12.6587 24.38 12.7506 24.7038 12.9256C25.2369 13.2131 25.6344 13.6725 25.8238 14.2187C26.0119 14.7606 25.9675 15.3325 25.7007 15.8287L26.8007 16.4219C27.1857 15.7081 28.1744 15.6312 28.5825 15.6312C29.1982 15.6312 29.8357 15.7837 30.3294 16.05C31.4632 16.6619 31.2694 18.525 30.7013 19.5787C29.3219 22.1319 24.0494 22.3575 22.8594 22.375C21.83 20.5462 19.9288 16.2331 21.175 13.9225Z", "fill", "#8E8D8A"], [1, "project-name-titel"], ["id", "create-new-room", 3, "click"], [1, "body"], [1, "first-title"], [1, "description"], [1, "or"], [1, "enter-room"], [1, "fild"], ["for", "room-num"], ["type", "text", "name", "room-num", "id", "room-num", "placeholder", "Room Number", 3, "value", "ngModel", "ngModelChange"], ["id", "enter-room", 3, "click"], [1, "footer"]],
        template: function HomeComponent_Template(rf, ctx) {
          if (rf & 1) {
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

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_button_click_11_listener() {
              return ctx.createNewRoom();
            });

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

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_button_click_18_listener() {
              return ctx.createNewRoom();
            });

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

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function HomeComponent_Template_input_ngModelChange_26_listener($event) {
              return ctx.roomId = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "button", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_button_click_27_listener() {
              return ctx.enterRoomById();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " Enter the room ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", ctx.roomId);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.roomId);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"]],
        styles: [".home-page[_ngcontent-%COMP%] {\r\n    margin: 0 40px;\r\n}\r\n\r\n.home-page[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    width: 100%;\r\n    height: 100px;\r\n    display: flex;\r\n    align-items: center;\r\n    background: #EAE7DC;\r\n}\r\n\r\n.home-page[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .project-name-container[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    align-items: center;\r\n}\r\n\r\n.home-page[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .project-name-container[_ngcontent-%COMP%]   .project-name-icom[_ngcontent-%COMP%] {\r\n    margin-right: 8px;\r\n}\r\n\r\n.home-page[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .project-name-container[_ngcontent-%COMP%]   .project-name-titel[_ngcontent-%COMP%] {\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    font-size: 24px;\r\n    line-height: 29px;\r\n    color: #8E8D8A;\r\n}\r\n\r\n.home-page[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    right: 0;\r\n}\r\n\r\n.body[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    align-items: center;\r\n    flex-direction: column; \r\n    margin: 86px 0;\r\n    background: #EAE7DC;\r\n}\r\n\r\n.body[_ngcontent-%COMP%]   *[_ngcontent-%COMP%]:not(:last-child) {\r\n    margin-bottom: 32px;\r\n}\r\n\r\n.body[_ngcontent-%COMP%]   .first-title[_ngcontent-%COMP%] {\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    font-size: 56px;\r\n    line-height: 68px;\r\n    text-align: center;\r\n\r\n    color: #E85A4F;\r\n}\r\n\r\n.body[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%] {\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    font-size: 20px;\r\n    line-height: 24px;\r\n    text-align: center;\r\n\r\n    color: #8E8D8A;\r\n}\r\n\r\n.body[_ngcontent-%COMP%]   .or[_ngcontent-%COMP%] {\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    font-size: 20px;\r\n    line-height: 24px;\r\n    text-align: center;\r\n    color: #E98074;\r\n}\r\n\r\n.body[_ngcontent-%COMP%]   .enter-room[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n}\r\n\r\n.body[_ngcontent-%COMP%]   .enter-room[_ngcontent-%COMP%]   .fild[_ngcontent-%COMP%] {\r\n    margin-bottom: 20px;\r\n}\r\n\r\n.body[_ngcontent-%COMP%]   .enter-room[_ngcontent-%COMP%]   .fild[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    font-size: 20px;\r\n    line-height: 24px;\r\n    text-align: center;\r\n    color: #E98074;\r\n    margin: 0 14px 0 0;\r\n}\r\n\r\n.body[_ngcontent-%COMP%]   .enter-room[_ngcontent-%COMP%]   .fild[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\r\n    width: 275px;\r\n    height: 48px;\r\n    border: 1px solid #8E8D8A;\r\n    border-radius: 4px;\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    font-size: 16px;\r\n    line-height: 19px;\r\n    text-align: center;\r\n    color: #8E8D8A;\r\n}\r\n\r\nbutton[_ngcontent-%COMP%] {\r\n    width: 194px;\r\n    height: 48px;\r\n    background: #EAE7DC;\r\n    border: 1px solid #8E8D8A;\r\n    border-radius: 4px;\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    font-size: 18px;\r\n    line-height: 22px;\r\n    text-align: center;\r\n    color: #000000;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxhQUFhO0lBQ2IsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsUUFBUTtBQUNaOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixzQkFBc0I7SUFDdEIsY0FBYztJQUNkLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixrQkFBa0I7O0lBRWxCLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsa0JBQWtCOztJQUVsQixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osWUFBWTtJQUNaLHlCQUF5QjtJQUN6QixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIseUJBQXlCO0lBQ3pCLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLGNBQWM7QUFDbEIiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ob21lLXBhZ2Uge1xyXG4gICAgbWFyZ2luOiAwIDQwcHg7XHJcbn1cclxuXHJcbi5ob21lLXBhZ2UgLmhlYWRlciB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwcHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQ6ICNFQUU3REM7XHJcbn1cclxuXHJcbi5ob21lLXBhZ2UgLmhlYWRlciAucHJvamVjdC1uYW1lLWNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLmhvbWUtcGFnZSAuaGVhZGVyIC5wcm9qZWN0LW5hbWUtY29udGFpbmVyIC5wcm9qZWN0LW5hbWUtaWNvbSB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDhweDtcclxufVxyXG5cclxuLmhvbWUtcGFnZSAuaGVhZGVyIC5wcm9qZWN0LW5hbWUtY29udGFpbmVyIC5wcm9qZWN0LW5hbWUtdGl0ZWwge1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyOXB4O1xyXG4gICAgY29sb3I6ICM4RThEOEE7XHJcbn1cclxuXHJcbi5ob21lLXBhZ2UgLmhlYWRlciBidXR0b24ge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcmlnaHQ6IDA7XHJcbn1cclxuXHJcbi5ib2R5IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgXHJcbiAgICBtYXJnaW46IDg2cHggMDtcclxuICAgIGJhY2tncm91bmQ6ICNFQUU3REM7XHJcbn1cclxuXHJcbi5ib2R5ICo6bm90KDpsYXN0LWNoaWxkKSB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAzMnB4O1xyXG59XHJcblxyXG4uYm9keSAuZmlyc3QtdGl0bGUge1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGZvbnQtc2l6ZTogNTZweDtcclxuICAgIGxpbmUtaGVpZ2h0OiA2OHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxuICAgIGNvbG9yOiAjRTg1QTRGO1xyXG59XHJcblxyXG4uYm9keSAuZGVzY3JpcHRpb24ge1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxuICAgIGNvbG9yOiAjOEU4RDhBO1xyXG59XHJcblxyXG4uYm9keSAub3Ige1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6ICNFOTgwNzQ7XHJcbn1cclxuXHJcbi5ib2R5IC5lbnRlci1yb29tIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLmJvZHkgLmVudGVyLXJvb20gLmZpbGQge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxufVxyXG5cclxuLmJvZHkgLmVudGVyLXJvb20gLmZpbGQgbGFiZWwge1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6ICNFOTgwNzQ7XHJcbiAgICBtYXJnaW46IDAgMTRweCAwIDA7XHJcbn1cclxuXHJcbi5ib2R5IC5lbnRlci1yb29tIC5maWxkIGlucHV0IHtcclxuICAgIHdpZHRoOiAyNzVweDtcclxuICAgIGhlaWdodDogNDhweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICM4RThEOEE7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDE5cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogIzhFOEQ4QTtcclxufVxyXG5cclxuYnV0dG9uIHtcclxuICAgIHdpZHRoOiAxOTRweDtcclxuICAgIGhlaWdodDogNDhweDtcclxuICAgIGJhY2tncm91bmQ6ICNFQUU3REM7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjOEU4RDhBO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyMnB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6ICMwMDAwMDA7XHJcbn0iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'home',
            templateUrl: './home.component.html',
            styleUrls: ['./home.component.css']
          }]
        }], function () {
          return [{
            type: _services_api_client__WEBPACK_IMPORTED_MODULE_1__["ApiClient"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/main/main.component.ts":
    /*!****************************************!*\
      !*** ./src/app/main/main.component.ts ***!
      \****************************************/

    /*! exports provided: MainComponent */

    /***/
    function srcAppMainMainComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MainComponent", function () {
        return MainComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/fesm2015/router.js");

      var MainComponent = /*#__PURE__*/function () {
        function MainComponent() {
          _classCallCheck(this, MainComponent);
        }

        _createClass(MainComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return MainComponent;
      }();

      MainComponent.ɵfac = function MainComponent_Factory(t) {
        return new (t || MainComponent)();
      };

      MainComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: MainComponent,
        selectors: [["main"]],
        decls: 1,
        vars: 0,
        template: function MainComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
        encapsulation: 2
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MainComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'main',
            templateUrl: './main.component.html'
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/models/user-estimate.model.ts":
    /*!***********************************************!*\
      !*** ./src/app/models/user-estimate.model.ts ***!
      \***********************************************/

    /*! exports provided: UserEstimate */

    /***/
    function srcAppModelsUserEstimateModelTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UserEstimate", function () {
        return UserEstimate;
      });

      var UserEstimate = /*#__PURE__*/_createClass(function UserEstimate(estimate, id) {
        _classCallCheck(this, UserEstimate);

        this.Estimate = estimate;
        this.Id = id;
      });
      /***/

    },

    /***/
    "./src/app/not-found/not-found.component.ts":
    /*!**************************************************!*\
      !*** ./src/app/not-found/not-found.component.ts ***!
      \**************************************************/

    /*! exports provided: NotFoundComponent */

    /***/
    function srcAppNotFoundNotFoundComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function () {
        return NotFoundComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/fesm2015/core.js");

      var NotFoundComponent = /*#__PURE__*/function () {
        function NotFoundComponent() {
          _classCallCheck(this, NotFoundComponent);
        }

        _createClass(NotFoundComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return NotFoundComponent;
      }();

      NotFoundComponent.ɵfac = function NotFoundComponent_Factory(t) {
        return new (t || NotFoundComponent)();
      };

      NotFoundComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: NotFoundComponent,
        selectors: [["not-found"]],
        decls: 2,
        vars: 0,
        template: function NotFoundComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "not-found works!");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25vdC1mb3VuZC9ub3QtZm91bmQuY29tcG9uZW50LmNzcyJ9 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NotFoundComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'not-found',
            templateUrl: './not-found.component.html',
            styleUrls: ['./not-found.component.css']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/personal-account/personal-account.component.ts":
    /*!****************************************************************!*\
      !*** ./src/app/personal-account/personal-account.component.ts ***!
      \****************************************************************/

    /*! exports provided: PersonalAccountComponent */

    /***/
    function srcAppPersonalAccountPersonalAccountComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PersonalAccountComponent", function () {
        return PersonalAccountComponent;
      });
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/fesm2015/http.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/fesm2015/router.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/fesm2015/common.js");

      function PersonalAccountComponent_div_13_Template(rf, ctx) {
        if (rf & 1) {
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
        }
      }

      function PersonalAccountComponent_div_14_Template(rf, ctx) {
        if (rf & 1) {
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
        }
      }

      var PersonalAccountComponent = /*#__PURE__*/function () {
        function PersonalAccountComponent(http) {
          _classCallCheck(this, PersonalAccountComponent);

          this.http = http;
          this.tub = "orders";
        }

        _createClass(PersonalAccountComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            var myHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]().set('Authorization', localStorage.getItem('auth_token'));
            console.log(myHeaders);
            this.http.post("http://localhost:5000//api/order/Get/All", {
              headers: myHeaders
            }).subscribe(function (resp) {
              _this.orders = resp;
            });
            this.http.post("http://localhost:5000//api/Visitors/Get/PersonalData", {
              headers: myHeaders
            }).subscribe(function (resp) {
              _this.orders = resp;
            });
          }
        }, {
          key: "exit",
          value: function exit() {
            localStorage.removeItem('auth_token');
          }
        }, {
          key: "setTub",
          value: function setTub(tub) {
            this.tub = tub;
          }
        }]);

        return PersonalAccountComponent;
      }();

      PersonalAccountComponent.ɵfac = function PersonalAccountComponent_Factory(t) {
        return new (t || PersonalAccountComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]));
      };

      PersonalAccountComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: PersonalAccountComponent,
        selectors: [["personal-account"]],
        decls: 15,
        vars: 2,
        consts: [[1, "scope"], [1, "section-name"], [1, "grup"], [1, "nav-block"], [1, "btn-group", 3, "click"], [1, "btn-group", "rg"], ["routerLink", "/", 1, "btn-group", 3, "click"], ["class", "wrapper", 4, "ngIf"], [1, "wrapper"], [1, "wrapper", "section-name"], [1, "wrapper-item"]],
        template: function PersonalAccountComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "p", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "\u041B\u0438\u0447\u043D\u044B\u0439 \u043A\u0430\u0431\u0438\u043D\u0435\u0442");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "button", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PersonalAccountComponent_Template_button_click_5_listener() {
              return ctx.setTub("orders");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, " \u0412\u0441\u0435 \u0437\u0430\u043A\u0430\u0437\u044B ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "button", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PersonalAccountComponent_Template_button_click_7_listener() {
              return ctx.setTub("personalData");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, " \u041B\u0438\u0447\u043D\u044B\u0435 \u0434\u0430\u043D\u043D\u044B\u0435 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "button", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PersonalAccountComponent_Template_button_click_10_listener() {
              return ctx.exit();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, " \u0412\u044B\u0439\u0442\u0438 \u0438\u0437 \u0430\u043A\u043A\u0430\u0443\u043D\u0442\u0430 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, PersonalAccountComponent_div_13_Template, 21, 0, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, PersonalAccountComponent_div_14_Template, 7, 0, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.tub === "orders");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.tub === "personalData");
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]],
        styles: [".btn-group[_ngcontent-%COMP%] {\r\n    height: 100%;\r\n    min-width: 150px;\r\n    display: flex;\r\n    align-items: center;\r\n    color: #952CFF !important;\r\n    font-size: 16px;\r\n    font-weight: 300;\r\n    margin: 0;\r\n    background-color: #FAF2FF;\r\n    border: none;\r\n}\r\n\r\n.btn-group.rg[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    display: flex;\r\n    flex-direction: row-reverse;\r\n}\r\n\r\n.nav-block[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    margin: 0;\r\n    height: 35px;\r\n    color: #FAF2FF;\r\n    display: flex;\r\n}\r\n\r\n.scope[_ngcontent-%COMP%] {\r\n    width: 100vw;\r\n    min-height: 87vh;\r\n    background-color: #FAF2FF;\r\n    display: flex;\r\n    align-items: center;\r\n    flex-direction: column;\r\n    padding: 36px 68px 36px 68px;\r\n}\r\n\r\n.grup[_ngcontent-%COMP%] {\r\n    padding: 10px 0px;\r\n    width: 100%;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: flex-start;\r\n}\r\n\r\n.section-name[_ngcontent-%COMP%] {\r\n    font-size: 24px;\r\n    color: #952CFF;\r\n}\r\n\r\n.wrapper.section-name[_ngcontent-%COMP%] {\r\n    font-size: 20px;\r\n    margin: 0px;\r\n}\r\n\r\nhr[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    margin: 0;\r\n    border-top: 1px solid #952CFF;\r\n}\r\n\r\n.wrapper[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    padding: 10px 0px;\r\n    width: 100%;\r\n    gap: 10px;\r\n}\r\n\r\n.wrapper-item[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    justify-content: left;\r\n    align-items: center;\r\n    width: 100%;\r\n    height: 100px;\r\n    background-color: #952CFF;\r\n    padding: 10px;\r\n}\r\n\r\n.wrapper-item[_ngcontent-%COMP%] {\r\n    color: #FAF2FF;\r\n    font-size: 16px;\r\n    font-weight: 300;\r\n}\r\n\r\n.wrapper-item[_ngcontent-%COMP%]:hover {\r\n    text-decoration: none;\r\n    cursor: pointer;\r\n}\r\n\r\nsvg[_ngcontent-%COMP%] {\r\n    width: 225px;\r\n    margin-right: 32px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGVyc29uYWwtYWNjb3VudC9wZXJzb25hbC1hY2NvdW50LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIseUJBQXlCO0lBQ3pCLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsU0FBUztJQUNULHlCQUF5QjtJQUN6QixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksV0FBVztJQUNYLGFBQWE7SUFDYiwyQkFBMkI7QUFDL0I7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsU0FBUztJQUNULFlBQVk7SUFDWixjQUFjO0lBQ2QsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIseUJBQXlCO0lBQ3pCLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsc0JBQXNCO0lBQ3RCLDRCQUE0QjtBQUNoQzs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixXQUFXO0lBQ1gsYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsY0FBYztBQUNsQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsU0FBUztJQUNULDZCQUE2QjtBQUNqQzs7QUFFQTtJQUNJLGFBQWE7SUFDYixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLFdBQVc7SUFDWCxTQUFTO0FBQ2I7O0FBRUE7SUFDSSxhQUFhO0lBQ2IscUJBQXFCO0lBQ3JCLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsYUFBYTtJQUNiLHlCQUF5QjtJQUN6QixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksY0FBYztJQUNkLGVBQWU7SUFDZixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixrQkFBa0I7QUFDdEIiLCJmaWxlIjoic3JjL2FwcC9wZXJzb25hbC1hY2NvdW50L3BlcnNvbmFsLWFjY291bnQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5idG4tZ3JvdXAge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgbWluLXdpZHRoOiAxNTBweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgY29sb3I6ICM5NTJDRkYgIWltcG9ydGFudDtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkFGMkZGO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG59XHJcblxyXG4uYnRuLWdyb3VwLnJnIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZTtcclxufVxyXG5cclxuLm5hdi1ibG9jayB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGhlaWdodDogMzVweDtcclxuICAgIGNvbG9yOiAjRkFGMkZGO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxufVxyXG5cclxuLnNjb3BlIHtcclxuICAgIHdpZHRoOiAxMDB2dztcclxuICAgIG1pbi1oZWlnaHQ6IDg3dmg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkFGMkZGO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgcGFkZGluZzogMzZweCA2OHB4IDM2cHggNjhweDtcclxufVxyXG5cclxuLmdydXAge1xyXG4gICAgcGFkZGluZzogMTBweCAwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbn1cclxuXHJcbi5zZWN0aW9uLW5hbWUge1xyXG4gICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgY29sb3I6ICM5NTJDRkY7XHJcbn1cclxuXHJcbi53cmFwcGVyLnNlY3Rpb24tbmFtZSB7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBtYXJnaW46IDBweDtcclxufVxyXG5cclxuaHIge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgIzk1MkNGRjtcclxufVxyXG5cclxuLndyYXBwZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIHBhZGRpbmc6IDEwcHggMHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBnYXA6IDEwcHg7XHJcbn1cclxuXHJcbi53cmFwcGVyLWl0ZW0ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogbGVmdDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTUyQ0ZGO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxufVxyXG5cclxuLndyYXBwZXItaXRlbSB7XHJcbiAgICBjb2xvcjogI0ZBRjJGRjtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbn1cclxuXHJcbi53cmFwcGVyLWl0ZW06aG92ZXIge1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG5zdmcge1xyXG4gICAgd2lkdGg6IDIyNXB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAzMnB4O1xyXG59Il19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](PersonalAccountComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
          args: [{
            selector: 'personal-account',
            templateUrl: './personal-account.component.html',
            styleUrls: ['./personal-account.component.css']
          }]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/room/room.component.ts":
    /*!****************************************!*\
      !*** ./src/app/room/room.component.ts ***!
      \****************************************/

    /*! exports provided: RoomComponent */

    /***/
    function srcAppRoomRoomComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RoomComponent", function () {
        return RoomComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/fesm2015/core.js");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      "./node_modules/rxjs/dist/esm/index.js");
      /* harmony import */


      var _models_user_estimate_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../models/user-estimate.model */
      "./src/app/models/user-estimate.model.ts");
      /* harmony import */


      var _services_signalr_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../services/signalr.service */
      "./src/app/services/signalr.service.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/fesm2015/router.js");
      /* harmony import */


      var _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/cdk/clipboard */
      "./node_modules/@angular/cdk/fesm2015/clipboard.js");
      /* harmony import */


      var _services_api_client__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../services/api.client */
      "./src/app/services/api.client.ts");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/fesm2015/common.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/fesm2015/forms.js");

      var __awaiter = undefined && undefined.__awaiter || function (thisArg, _arguments, P, generator) {
        function adopt(value) {
          return value instanceof P ? value : new P(function (resolve) {
            resolve(value);
          });
        }

        return new (P || (P = Promise))(function (resolve, reject) {
          function fulfilled(value) {
            try {
              step(generator.next(value));
            } catch (e) {
              reject(e);
            }
          }

          function rejected(value) {
            try {
              step(generator["throw"](value));
            } catch (e) {
              reject(e);
            }
          }

          function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
          }

          step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
      };

      function RoomComponent_a_24_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Invite players");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function RoomComponent_div_25_span_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r20.roomModel == null ? null : ctx_r20.roomModel.visitors[1] == null ? null : ctx_r20.roomModel.visitors[1].estimate);
        }
      }

      function RoomComponent_div_25_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, RoomComponent_div_25_span_2_Template, 2, 1, "span", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("selected", ctx_r1.roomModel == null ? null : ctx_r1.roomModel.visitors[1] == null ? null : ctx_r1.roomModel.visitors[1].estimate);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.averageEstimate);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.roomModel == null ? null : ctx_r1.roomModel.visitors[1] == null ? null : ctx_r1.roomModel.visitors[1].name);
        }
      }

      function RoomComponent_div_28_span_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r21.roomModel == null ? null : ctx_r21.roomModel.visitors[4] == null ? null : ctx_r21.roomModel.visitors[4].estimate);
        }
      }

      function RoomComponent_div_28_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, RoomComponent_div_28_span_2_Template, 2, 1, "span", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("selected", ctx_r2.roomModel == null ? null : ctx_r2.roomModel.visitors[4] == null ? null : ctx_r2.roomModel.visitors[4].estimate);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.averageEstimate);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.roomModel == null ? null : ctx_r2.roomModel.visitors[4] == null ? null : ctx_r2.roomModel.visitors[4].name);
        }
      }

      function RoomComponent_div_29_span_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r22.roomModel == null ? null : ctx_r22.roomModel.visitors[2] == null ? null : ctx_r22.roomModel.visitors[2].estimate);
        }
      }

      function RoomComponent_div_29_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, RoomComponent_div_29_span_2_Template, 2, 1, "span", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("selected", ctx_r3.roomModel == null ? null : ctx_r3.roomModel.visitors[2] == null ? null : ctx_r3.roomModel.visitors[2].estimate);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.averageEstimate);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r3.roomModel == null ? null : ctx_r3.roomModel.visitors[2] == null ? null : ctx_r3.roomModel.visitors[2].name);
        }
      }

      function RoomComponent_div_30_span_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r23.roomModel == null ? null : ctx_r23.roomModel.visitors[6] == null ? null : ctx_r23.roomModel.visitors[6].estimate);
        }
      }

      function RoomComponent_div_30_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, RoomComponent_div_30_span_2_Template, 2, 1, "span", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("selected", ctx_r4.roomModel == null ? null : ctx_r4.roomModel.visitors[6] == null ? null : ctx_r4.roomModel.visitors[6].estimate);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.averageEstimate);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r4.roomModel == null ? null : ctx_r4.roomModel.visitors[6] == null ? null : ctx_r4.roomModel.visitors[6].name);
        }
      }

      function RoomComponent_span_32_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Choose your cards!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function RoomComponent_button_33_Template(rf, ctx) {
        if (rf & 1) {
          var _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RoomComponent_button_33_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r25);

            var ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r24.revealCards();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Reveal cards ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function RoomComponent_div_34_Template(rf, ctx) {
        if (rf & 1) {
          var _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RoomComponent_div_34_Template_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r27);

            var ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r26.startNewVoting();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Start new voting ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Average: ", ctx_r7.averageEstimate, "");
        }
      }

      function RoomComponent_div_36_span_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r28.roomModel == null ? null : ctx_r28.roomModel.visitors[7] == null ? null : ctx_r28.roomModel.visitors[7].estimate);
        }
      }

      function RoomComponent_div_36_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, RoomComponent_div_36_span_2_Template, 2, 1, "span", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("selected", ctx_r8.roomModel == null ? null : ctx_r8.roomModel.visitors[7] == null ? null : ctx_r8.roomModel.visitors[7].estimate);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r8.averageEstimate);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r8.roomModel == null ? null : ctx_r8.roomModel.visitors[7] == null ? null : ctx_r8.roomModel.visitors[7].name);
        }
      }

      function RoomComponent_div_37_span_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r29.roomModel == null ? null : ctx_r29.roomModel.visitors[3] == null ? null : ctx_r29.roomModel.visitors[3].estimate);
        }
      }

      function RoomComponent_div_37_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, RoomComponent_div_37_span_2_Template, 2, 1, "span", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("selected", ctx_r9.roomModel == null ? null : ctx_r9.roomModel.visitors[3] == null ? null : ctx_r9.roomModel.visitors[3].estimate);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r9.averageEstimate);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r9.roomModel == null ? null : ctx_r9.roomModel.visitors[3] == null ? null : ctx_r9.roomModel.visitors[3].name);
        }
      }

      function RoomComponent_div_38_span_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r30.roomModel == null ? null : ctx_r30.roomModel.visitors[5] == null ? null : ctx_r30.roomModel.visitors[5].estimate);
        }
      }

      function RoomComponent_div_38_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, RoomComponent_div_38_span_2_Template, 2, 1, "span", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("selected", ctx_r10.roomModel == null ? null : ctx_r10.roomModel.visitors[5] == null ? null : ctx_r10.roomModel.visitors[5].estimate);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r10.averageEstimate);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r10.roomModel == null ? null : ctx_r10.roomModel.visitors[5] == null ? null : ctx_r10.roomModel.visitors[5].name);
        }
      }

      function RoomComponent_div_39_span_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r31.roomModel == null ? null : ctx_r31.roomModel.visitors[0] == null ? null : ctx_r31.roomModel.visitors[0].estimate);
        }
      }

      function RoomComponent_div_39_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, RoomComponent_div_39_span_2_Template, 2, 1, "span", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("selected", ctx_r11.roomModel == null ? null : ctx_r11.roomModel.visitors[0] == null ? null : ctx_r11.roomModel.visitors[0].estimate);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r11.averageEstimate);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r11.roomModel == null ? null : ctx_r11.roomModel.visitors[0] == null ? null : ctx_r11.roomModel.visitors[0].name);
        }
      }

      function RoomComponent_li_45_Template(rf, ctx) {
        if (rf & 1) {
          var _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RoomComponent_li_45_Template_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r34);

            var estimate_r32 = ctx.$implicit;

            var ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r33.estimateSelected(estimate_r32);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var estimate_r32 = ctx.$implicit;

          var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("selected", ctx_r12.selectedEstimate === estimate_r32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](estimate_r32);
        }
      }

      function RoomComponent_div_46_Template(rf, ctx) {
        if (rf & 1) {
          var _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RoomComponent_div_46_Template_button_click_3_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r36);

            var ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r35.closeInvitePlayersPopUp();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "svg", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "path", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Invite players");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RoomComponent_div_46_Template_button_click_12_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r36);

            var ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r37.copyLink();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Copy invitation link");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r13.link, " ");
        }
      }

      function RoomComponent_div_47_Template(rf, ctx) {
        if (rf & 1) {
          var _r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Choose your display name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 68);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RoomComponent_div_47_Template_input_ngModelChange_4_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r39);

            var ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r38.roomName = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RoomComponent_div_47_Template_button_click_6_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r39);

            var ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r40.closeNamePopUp();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Continue to game ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", ctx_r14.roomName);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r14.roomName);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r14.roomName === "");
        }
      }

      function RoomComponent_div_48_li_13_Template(rf, ctx) {
        if (rf & 1) {
          var _r46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 79);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RoomComponent_div_48_li_13_Template_li_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r46);

            var issue_r44 = ctx.$implicit;

            var ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r45.openSelectedIssuePopup(issue_r44);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 80);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 81);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RoomComponent_div_48_li_13_Template_button_click_4_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r46);

            var issue_r44 = ctx.$implicit;

            var ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            ctx_r47.deleteIssue(issue_r44);
            return $event.stopPropagation();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "svg", 82);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "path", 83);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 84);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 85);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Evaluate it ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var issue_r44 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](issue_r44 == null ? null : issue_r44.priority);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", issue_r44 == null ? null : issue_r44.name, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](issue_r44 == null ? null : issue_r44.estimation);
        }
      }

      function RoomComponent_div_48_div_14_Template(rf, ctx) {
        if (rf & 1) {
          var _r49 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 86);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RoomComponent_div_48_div_14_Template_div_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r49);

            var ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r48.newIssuesClick = true;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 87);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "svg", 82);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "path", 88);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Add an issue");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function RoomComponent_div_48_div_15_Template(rf, ctx) {
        if (rf & 1) {
          var _r51 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 89);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 90);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RoomComponent_div_48_div_15_Template_input_ngModelChange_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r51);

            var ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r50.issueName = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 91);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 92);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RoomComponent_div_48_div_15_Template_button_click_3_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r51);

            var ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r52.newIssuesClick = false;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Cancel");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 93);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RoomComponent_div_48_div_15_Template_button_click_6_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r51);

            var ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r53.createNewIssues();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Save");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", ctx_r43.issueName);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r43.issueName);
        }
      }

      function RoomComponent_div_48_Template(rf, ctx) {
        if (rf & 1) {
          var _r55 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 71);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Issues");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RoomComponent_div_48_Template_button_click_7_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r55);

            var ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r54.issuesPopupClose();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "svg", 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "path", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 73);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 74);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "ul", 75);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, RoomComponent_div_48_li_13_Template, 14, 3, "li", 76);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, RoomComponent_div_48_div_14_Template, 6, 0, "div", 77);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, RoomComponent_div_48_div_15_Template, 9, 2, "div", 78);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r15.issuesList);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r15.newIssuesClick);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r15.newIssuesClick);
        }
      }

      function RoomComponent_div_49_Template(rf, ctx) {
        if (rf & 1) {
          var _r57 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 94);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RoomComponent_div_49_Template_button_click_3_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r57);

            var ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r56.isLoginPopupOpen = false;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "svg", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "path", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 95);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Sign in to be able to track the results of the task evaluation");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "form", 96);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("submit", function RoomComponent_div_49_Template_form_submit_8_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r57);

            var ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r58.signIn();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Email");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "input", 97);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RoomComponent_div_49_Template_input_ngModelChange_12_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r57);

            var ctx_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r59.login = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Password");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "input", 98);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RoomComponent_div_49_Template_input_ngModelChange_16_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r57);

            var ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r60.password = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 99);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " Sign In ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "To Sign Up, click \uD83D\uDC47");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RoomComponent_div_49_Template_button_click_22_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r57);

            var ctx_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r61.toRegisterPopup();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " Sign Up ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", ctx_r16.login);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r16.login);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", ctx_r16.password);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r16.password);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r16.login === "" && ctx_r16.password === "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r16.roomName === "");
        }
      }

      function RoomComponent_div_50_Template(rf, ctx) {
        if (rf & 1) {
          var _r63 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RoomComponent_div_50_Template_button_click_3_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r63);

            var ctx_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r62.isRegisterPopupOpen = false;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "svg", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "path", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 95);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Sign up to be able to track the results of the task evaluation");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "form", 96);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("submit", function RoomComponent_div_50_Template_form_submit_8_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r63);

            var ctx_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r64.signUp();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Email");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "input", 100);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RoomComponent_div_50_Template_input_ngModelChange_12_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r63);

            var ctx_r65 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r65.login = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Password");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "input", 101);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RoomComponent_div_50_Template_input_ngModelChange_16_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r63);

            var ctx_r66 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r66.password = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 99);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " Sign Up ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", ctx_r17.login);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r17.login);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", ctx_r17.password);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r17.password);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r17.login === "" && ctx_r17.password === "");
        }
      }

      function RoomComponent_div_51_tr_20_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var issue_r68 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", issue_r68.name, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", issue_r68.estimation, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", issue_r68.priority, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", issue_r68.creatingTime, " ");
        }
      }

      function RoomComponent_div_51_Template(rf, ctx) {
        if (rf & 1) {
          var _r70 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 102);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RoomComponent_div_51_Template_button_click_3_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r70);

            var ctx_r69 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r69.isUserIssuePopupOpen = false;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "svg", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "path", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "All your estimated tasks");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "table", 103);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "thead");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "th", 104);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Name ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Estimation ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Priority ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " Date ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, RoomComponent_div_51_tr_20_Template, 9, 4, "tr", 105);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r18.issuesList);
        }
      }

      function RoomComponent_div_52_Template(rf, ctx) {
        if (rf & 1) {
          var _r72 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 102);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 106);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RoomComponent_div_52_Template_button_click_3_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r72);

            var ctx_r71 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r71.deleteSelectedIssue();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "svg", 82);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "path", 83);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RoomComponent_div_52_Template_button_click_6_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r72);

            var ctx_r73 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r73.closeSelectedIssuePopup();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "svg", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "path", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "All your estimated tasks");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Priority");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "input", 68);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RoomComponent_div_52_Template_input_ngModelChange_14_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r72);

            var ctx_r74 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r74.selectedIssue.priority = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "input", 68);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RoomComponent_div_52_Template_input_ngModelChange_18_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r72);

            var ctx_r75 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r75.selectedIssue.name = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Link");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "input", 68);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RoomComponent_div_52_Template_input_ngModelChange_22_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r72);

            var ctx_r76 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r76.selectedIssue.link = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Description");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "input", 68);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RoomComponent_div_52_Template_input_ngModelChange_26_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r72);

            var ctx_r77 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r77.selectedIssue.description = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 107);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "button", 108);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " Evaluate it ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "button", 108);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", ctx_r19.selectedIssue.priority);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r19.selectedIssue.priority);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", ctx_r19.selectedIssue.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r19.selectedIssue.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", ctx_r19.selectedIssue.link);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r19.selectedIssue.link);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", ctx_r19.selectedIssue.description);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r19.selectedIssue.description);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r19.selectedIssue == null ? null : ctx_r19.selectedIssue.estimation);
        }
      }

      var RoomComponent = /*#__PURE__*/function () {
        function RoomComponent(signalRService, activeRoute, clipboard, apiClient) {
          _classCallCheck(this, RoomComponent);

          this.signalRService = signalRService;
          this.activeRoute = activeRoute;
          this.clipboard = clipboard;
          this.apiClient = apiClient;
          this.isInvitePlayersPopUpOpen = false;
          this.isNamePopUpOpen = false;
          this.didEveryoneVote = false;
          this.issuesPopupOpen = false;
          this.newIssuesClick = false;
          this.isLoginPopupOpen = false;
          this.isRegisterPopupOpen = false;
          this.isUserIssuePopupOpen = false;
          this.isSelectedIssuePopupOpen = false;
          this.estimates = ["0", "0,5", "1", "2", "3", "5", "8", "13", "21", "34", "55", "89", "?", "☕"];
          this.unsubscribe$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
          this.roomName = "";
          this.issueName = "";
          this.login = "";
          this.password = "";
          this.link = window.location.href;
          this.averageEstimate = null;
          this.selectedEstimate = "";
        }

        _createClass(RoomComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
              var _this2 = this;

              return _regeneratorRuntime().wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      this.activeRoute.params.pipe(Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["takeUntil"])(this.unsubscribe$)).subscribe(function (routeParams) {
                        return __awaiter(_this2, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
                          return _regeneratorRuntime().wrap(function _callee$(_context) {
                            while (1) {
                              switch (_context.prev = _context.next) {
                                case 0:
                                  this.roomId = routeParams.roomId;

                                case 1:
                                case "end":
                                  return _context.stop();
                              }
                            }
                          }, _callee, this);
                        }));
                      });

                      if (this.signalRService.isConected) {
                        _context2.next = 4;
                        break;
                      }

                      _context2.next = 4;
                      return this.signalRService.startConnection();

                    case 4:
                      this.openNamePopUp();
                      this.signalRService.enterRoom$.pipe(Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["takeUntil"])(this.unsubscribe$)).subscribe(function (message) {
                        console.log("enterRoom$");
                        _this2.roomModel = message;
                        console.log(_this2.roomModel);
                      });
                      this.signalRService.sendEstimate$.pipe(Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["takeUntil"])(this.unsubscribe$)).subscribe(function (message) {
                        console.log("sendEstimate$");
                        _this2.roomModel.visitors = message;
                        _this2.didEveryoneVote = true;

                        _this2.roomModel.visitors.forEach(function (visitor) {
                          if (!visitor.estimate) {
                            _this2.didEveryoneVote = false;
                          }
                        });
                      });
                      this.signalRService.startNewVoting$.pipe(Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["takeUntil"])(this.unsubscribe$)).subscribe(function (message) {
                        console.log("startNewVoting$");
                        _this2.roomModel.visitors = message;
                        _this2.didEveryoneVote = true;

                        _this2.roomModel.visitors.forEach(function (visitor) {
                          if (!visitor.estimate) {
                            _this2.didEveryoneVote = false;
                          }
                        });

                        _this2.averageEstimate = null;
                        _this2.selectedEstimate = "";
                      });
                      this.signalRService.revealCards$.pipe(Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["takeUntil"])(this.unsubscribe$)).subscribe(function () {
                        console.log("revealCards$");
                      });
                      this.signalRService.createNewIssues$.pipe(Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["takeUntil"])(this.unsubscribe$)).subscribe(function (message) {
                        console.log("createNewIssues$");
                        console.log(message);
                        _this2.issuesList = message;
                      }); // не адекватный костыль на предзащиту, на защите не прокатит.
                      // Почему сразу не прокатит?

                      window.onfocus = function () {};

                      window.onmousemove = function () {};

                    case 12:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "openHome",
          value: function openHome() {
            window.location.href = "/";
          }
        }, {
          key: "closeInvitePlayersPopUp",
          value: function closeInvitePlayersPopUp() {
            this.isInvitePlayersPopUpOpen = false;
          }
        }, {
          key: "openInvitePlayersPopUp",
          value: function openInvitePlayersPopUp() {
            this.isInvitePlayersPopUpOpen = true;
          }
        }, {
          key: "copyLink",
          value: function copyLink() {
            var linkText = document.getElementById('link-to-copy').textContent;
            this.clipboard.copy(linkText);
          }
        }, {
          key: "closeNamePopUp",
          value: function closeNamePopUp() {
            return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
              return _regeneratorRuntime().wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      this.isNamePopUpOpen = false;
                      _context3.next = 3;
                      return this.signalRService.enterRoom(this.roomId, this.roomName);

                    case 3:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          }
        }, {
          key: "openNamePopUp",
          value: function openNamePopUp() {
            this.isNamePopUpOpen = true;
          }
        }, {
          key: "estimateSelected",
          value: function estimateSelected(estimate) {
            return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
              var userEstimate;
              return _regeneratorRuntime().wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      if (this.selectedEstimate === estimate) {
                        estimate = this.selectedEstimate = "";
                      } else {
                        this.selectedEstimate = estimate;
                      }

                      userEstimate = new _models_user_estimate_model__WEBPACK_IMPORTED_MODULE_2__["UserEstimate"](estimate, this.roomModel.userId);
                      _context4.next = 4;
                      return this.signalRService.sendEstimate(userEstimate, this.roomId);

                    case 4:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this);
            }));
          }
        }, {
          key: "leaveRoom",
          value: function leaveRoom() {
            return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
              return _regeneratorRuntime().wrap(function _callee5$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      _context5.next = 2;
                      return this.signalRService.disconeconectRoom(this.roomId, this.roomName);

                    case 2:
                      this.openHome();

                    case 3:
                    case "end":
                      return _context5.stop();
                  }
                }
              }, _callee5, this);
            }));
          }
        }, {
          key: "revealCards",
          value: function revealCards() {
            return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee6() {
              var sumEstimates;
              return _regeneratorRuntime().wrap(function _callee6$(_context6) {
                while (1) {
                  switch (_context6.prev = _context6.next) {
                    case 0:
                      sumEstimates = 0;
                      this.roomModel.visitors.forEach(function (visitor) {
                        sumEstimates += Number(visitor.estimate);
                      });
                      this.averageEstimate = sumEstimates / this.roomModel.visitors.length;
                      this.averageEstimate = this.averageEstimate.toFixed(2);
                      _context6.next = 6;
                      return this.signalRService.revealCards(this.roomId, this.averageEstimate);

                    case 6:
                    case "end":
                      return _context6.stop();
                  }
                }
              }, _callee6, this);
            }));
          }
        }, {
          key: "startNewVoting",
          value: function startNewVoting() {
            return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee7() {
              return _regeneratorRuntime().wrap(function _callee7$(_context7) {
                while (1) {
                  switch (_context7.prev = _context7.next) {
                    case 0:
                      _context7.next = 2;
                      return this.signalRService.startNewVoting(this.roomId);

                    case 2:
                    case "end":
                      return _context7.stop();
                  }
                }
              }, _callee7, this);
            }));
          }
        }, {
          key: "issuesPopupClose",
          value: function issuesPopupClose() {
            this.issuesPopupOpen = false;
            this.newIssuesClick = false;
          }
        }, {
          key: "createNewIssues",
          value: function createNewIssues() {
            return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee8() {
              return _regeneratorRuntime().wrap(function _callee8$(_context8) {
                while (1) {
                  switch (_context8.prev = _context8.next) {
                    case 0:
                      _context8.next = 2;
                      return this.signalRService.createNewIssue(this.roomId, this.issueName);

                    case 2:
                      this.newIssuesClick = false;

                    case 3:
                    case "end":
                      return _context8.stop();
                  }
                }
              }, _callee8, this);
            }));
          }
        }, {
          key: "toRegisterPopup",
          value: function toRegisterPopup() {
            this.isLoginPopupOpen = false;
            this.isRegisterPopupOpen = true;
          }
        }, {
          key: "toLoginPopup",
          value: function toLoginPopup() {
            this.isLoginPopupOpen = true;
            this.isRegisterPopupOpen = false;
          }
        }, {
          key: "openSelectedIssuePopup",
          value: function openSelectedIssuePopup(issue) {
            this.selectedIssue = issue;
            this.isSelectedIssuePopupOpen = true;
          }
        }, {
          key: "signUp",
          value: function signUp() {
            return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee9() {
              var result;
              return _regeneratorRuntime().wrap(function _callee9$(_context9) {
                while (1) {
                  switch (_context9.prev = _context9.next) {
                    case 0:
                      _context9.next = 2;
                      return this.apiClient.post("register/register", {
                        mail: this.login,
                        password: this.password
                      });

                    case 2:
                      result = _context9.sent;
                      console.log(result);
                      alert("Registration was successful");
                      this.toLoginPopup();

                    case 6:
                    case "end":
                      return _context9.stop();
                  }
                }
              }, _callee9, this);
            }));
          }
        }, {
          key: "signIn",
          value: function signIn() {
            return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee10() {
              var result;
              return _regeneratorRuntime().wrap(function _callee10$(_context10) {
                while (1) {
                  switch (_context10.prev = _context10.next) {
                    case 0:
                      _context10.next = 2;
                      return this.apiClient.post("register/entrance", {
                        mail: this.login,
                        password: this.password
                      });

                    case 2:
                      result = _context10.sent;
                      localStorage.setItem('auth_token', result.token);
                      alert("Registration was successful");
                      this.isLoginPopupOpen = false;

                    case 6:
                    case "end":
                      return _context10.stop();
                  }
                }
              }, _callee10, this);
            }));
          }
        }, {
          key: "isLogin",
          get: function get() {
            return localStorage.getItem('auth_token') !== null;
          }
        }, {
          key: "getUserIssuesList",
          value: function getUserIssuesList() {
            return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee11() {
              var result;
              return _regeneratorRuntime().wrap(function _callee11$(_context11) {
                while (1) {
                  switch (_context11.prev = _context11.next) {
                    case 0:
                      _context11.next = 2;
                      return this.apiClient.get("register/entrance");

                    case 2:
                      result = _context11.sent;
                      localStorage.setItem('auth_token', result.token);
                      alert("Registration was successful");
                      this.isLoginPopupOpen = false;

                    case 6:
                    case "end":
                      return _context11.stop();
                  }
                }
              }, _callee11, this);
            }));
          }
        }, {
          key: "updateIssue",
          value: function updateIssue(issue) {
            return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee12() {
              return _regeneratorRuntime().wrap(function _callee12$(_context12) {
                while (1) {
                  switch (_context12.prev = _context12.next) {
                    case 0:
                      _context12.next = 2;
                      return this.signalRService.updateIssue(this.roomId, issue.issueId, issue.name, issue.description, issue.priority, issue.link, issue.estimation);

                    case 2:
                    case "end":
                      return _context12.stop();
                  }
                }
              }, _callee12, this);
            }));
          }
        }, {
          key: "deleteIssue",
          value: function deleteIssue(issue) {
            return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee13() {
              return _regeneratorRuntime().wrap(function _callee13$(_context13) {
                while (1) {
                  switch (_context13.prev = _context13.next) {
                    case 0:
                      _context13.next = 2;
                      return this.signalRService.deleteIssue(this.roomId, issue.issueId);

                    case 2:
                    case "end":
                      return _context13.stop();
                  }
                }
              }, _callee13, this);
            }));
          }
        }, {
          key: "deleteSelectedIssue",
          value: function deleteSelectedIssue() {
            return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee14() {
              return _regeneratorRuntime().wrap(function _callee14$(_context14) {
                while (1) {
                  switch (_context14.prev = _context14.next) {
                    case 0:
                      _context14.next = 2;
                      return this.deleteIssue(this.selectedIssue);

                    case 2:
                      this.selectedIssue = null;
                      this.isSelectedIssuePopupOpen = false;

                    case 4:
                    case "end":
                      return _context14.stop();
                  }
                }
              }, _callee14, this);
            }));
          }
        }, {
          key: "closeSelectedIssuePopup",
          value: function closeSelectedIssuePopup() {
            return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee15() {
              return _regeneratorRuntime().wrap(function _callee15$(_context15) {
                while (1) {
                  switch (_context15.prev = _context15.next) {
                    case 0:
                      _context15.next = 2;
                      return this.updateIssue(this.selectedIssue);

                    case 2:
                      this.isSelectedIssuePopupOpen = false;

                    case 3:
                    case "end":
                      return _context15.stop();
                  }
                }
              }, _callee15, this);
            }));
          }
        }]);

        return RoomComponent;
      }();

      RoomComponent.ɵfac = function RoomComponent_Factory(t) {
        return new (t || RoomComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_signalr_service__WEBPACK_IMPORTED_MODULE_3__["SignalRService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_5__["Clipboard"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_api_client__WEBPACK_IMPORTED_MODULE_6__["ApiClient"]));
      };

      RoomComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: RoomComponent,
        selectors: [["room"]],
        decls: 53,
        vars: 26,
        consts: [[1, "room-page"], [1, "header"], [1, "project-name-container", 3, "click"], ["width", "40", "height", "36", "viewBox", "0 0 40 36", "fill", "none", "xmlns", "http://www.w3.org/2000/svg", 1, "project-name-icom"], ["d", "M19.9663 31.8069L27.7913 35.7194L40.1988 9.59812L22.225 0.278748L19.8206 5.08625L17.7813 0.900623L-0.193115 10.22L11.5694 35.7056L19.9663 31.8069ZM22.775 1.97125L38.5513 10.1519L27.2088 34.0306L10.8388 25.8456L22.775 1.97125ZM17.2188 2.59937L19.1163 6.49437L9.16126 26.4044L18.5375 31.0925L12.18 34.0444L1.44313 10.78L17.2188 2.59937Z", "fill", "#8E8D8A"], ["d", "M24.3084 3.90403L23.1904 3.34503L22.5655 4.59496L23.6835 5.15396L24.3084 3.90403Z", "fill", "#8E8D8A"], ["d", "M3.19071 11.4049L3.81567 12.6548L4.93367 12.0958L4.30871 10.8459L3.19071 11.4049Z", "fill", "#8E8D8A"], ["d", "M25.6913 32.0967L26.8093 32.6557L27.4342 31.4058L26.3162 30.8468L25.6913 32.0967Z", "fill", "#8E8D8A"], ["d", "M21.965 23.3225L22.1419 23.6162L22.6819 23.6275C24.3838 23.6275 30.0707 23.3781 31.8 20.1725C32.7538 18.4037 32.6894 15.9044 30.9219 14.9512C29.8282 14.3606 28.2494 14.2225 27.1775 14.6106C27.1538 14.3419 27.0963 14.0744 27.0057 13.8106C26.7132 12.9669 26.1069 12.2625 25.2975 11.8262C24.7919 11.5531 24.1975 11.4094 23.5769 11.4094C22.1032 11.4094 20.6963 12.1806 20.0757 13.3294C18.1482 16.9012 21.8082 23.0619 21.965 23.3225ZM21.175 13.9225C21.5707 13.19 22.58 12.6587 23.5763 12.6587C23.99 12.6587 24.38 12.7506 24.7038 12.9256C25.2369 13.2131 25.6344 13.6725 25.8238 14.2187C26.0119 14.7606 25.9675 15.3325 25.7007 15.8287L26.8007 16.4219C27.1857 15.7081 28.1744 15.6312 28.5825 15.6312C29.1982 15.6312 29.8357 15.7837 30.3294 16.05C31.4632 16.6619 31.2694 18.525 30.7013 19.5787C29.3219 22.1319 24.0494 22.3575 22.8594 22.375C21.83 20.5462 19.9288 16.2331 21.175 13.9225Z", "fill", "#8E8D8A"], [1, "project-name-titel"], [1, "invite-players", 3, "disabled", "click"], [1, "leave-the-room", 3, "disabled", "click"], [1, "issue-btn", 3, "disabled", "click"], ["width", "23", "height", "24", "viewBox", "0 0 23 24", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M6.75862 2C5.10177 2 3.75862 3.34315 3.75862 5V19C3.75862 20.6569 5.10177 22 6.75862 22H18.7586C20.4155 22 21.7586 20.6569 21.7586 19V5C21.7586 3.34315 20.4155 2 18.7586 2H6.75862ZM5.75862 5C5.75862 4.44772 6.20634 4 6.75862 4H18.7586C19.3109 4 19.7586 4.44772 19.7586 5V19C19.7586 19.5523 19.3109 20 18.7586 20H6.75862C6.20634 20 5.75862 19.5523 5.75862 19V5ZM8.75862 7C8.20634 7 7.75862 7.44772 7.75862 8C7.75862 8.55228 8.20634 9 8.75862 9H16.7586C17.3109 9 17.7586 8.55228 17.7586 8C17.7586 7.44772 17.3109 7 16.7586 7H8.75862ZM8.75862 11C8.20634 11 7.75862 11.4477 7.75862 12C7.75862 12.5523 8.20634 13 8.75862 13H16.7586C17.3109 13 17.7586 12.5523 17.7586 12C17.7586 11.4477 17.3109 11 16.7586 11H8.75862ZM7.75862 16C7.75862 15.4477 8.20634 15 8.75862 15H12.7586C13.3109 15 13.7586 15.4477 13.7586 16C13.7586 16.5523 13.3109 17 12.7586 17H8.75862C8.20634 17 7.75862 16.5523 7.75862 16Z", "fill", "currentColor"], [1, "body"], [1, "user-name", 3, "click"], ["width", "28", "height", "28", "viewBox", "0 0 24 24", 0, "xml", "space", "preserve", "xmlns", "http://www.w3.org/2000/svg", "enable-background", "new 0 0 24 24"], ["d", "M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.6 0 12 0zm0 4c2.2 0 4 2.2 4 5s-1.8 5-4 5-4-2.2-4-5 1.8-5 4-5zm6.6 15.5C16.9 21 14.5 22 12 22s-4.9-1-6.6-2.5c-.4-.4-.5-1-.1-1.4 1.1-1.3 2.6-2.2 4.2-2.7.8.4 1.6.6 2.5.6s1.7-.2 2.5-.6c1.7.5 3.1 1.4 4.2 2.7.4.4.4 1-.1 1.4z", "fill", "#E98074", 1, "fill-000000"], ["class", "invite-players-link", "href", "", 4, "ngIf"], ["class", "card card-2", 4, "ngIf"], [1, "table-wrapper"], [1, "left"], ["class", "card card-5", 4, "ngIf"], ["class", "card card-3", 4, "ngIf"], ["class", "card card-7", 4, "ngIf"], [1, "table"], [4, "ngIf"], ["class", "reveal-cards", 3, "click", 4, "ngIf"], ["class", "flex-d", 4, "ngIf"], [1, "right"], ["class", "card card-8", 4, "ngIf"], ["class", "card card-4", 4, "ngIf"], ["class", "card card-6", 4, "ngIf"], ["class", "card card-1", 4, "ngIf"], [1, "footer"], [1, "choose-estimate"], [1, "choose-estimate-span"], [1, "estimates"], ["class", "estimate", 4, "ngFor", "ngForOf"], ["class", "reg-confirm", 4, "ngIf"], ["href", "", 1, "invite-players-link"], [1, "card", "card-2"], [1, "card-body"], [1, "card-name"], [1, "card", "card-5"], [1, "card", "card-3"], [1, "card", "card-7"], [1, "reveal-cards", 3, "click"], [1, "flex-d"], [1, "inline-b"], [1, "card", "card-8"], [1, "card", "card-4"], [1, "card", "card-6"], [1, "card", "card-1"], [1, "estimate"], [1, "estimate-btn", 3, "click"], [1, "reg-confirm"], [1, "reg-pop-up"], [1, "pop-up-header"], [1, "pop-up-btn", "round-btn", 3, "click"], ["width", "20", "height", "20", "viewBox", "0 0 30 30", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M7.92898 7.92893C7.53845 8.31946 7.53845 8.95262 7.92898 9.34315L13.5858 15L7.92898 20.6569C7.53845 21.0474 7.53845 21.6805 7.92898 22.0711C8.3195 22.4616 8.95267 22.4616 9.34319 22.0711L15 16.4142L20.6569 22.0711C21.0474 22.4616 21.6806 22.4616 22.0711 22.0711C22.4616 21.6805 22.4616 21.0474 22.0711 20.6569L16.4143 15L22.0711 9.34315C22.4616 8.95262 22.4616 8.31946 22.0711 7.92893C21.6806 7.53841 21.0474 7.53841 20.6569 7.92893L15 13.5858L9.34319 7.92893C8.95267 7.53841 8.3195 7.53841 7.92898 7.92893Z", "fill", "currentColor"], [1, "section-name", "pop-up-text"], [1, "link-wrapper"], ["id", "link-to-copy", 1, "link"], [1, "pop-up-footer"], [1, "btn", "pop-up-btn", 3, "click"], ["type", "text", "name", "room-num", "id", "room-num", "placeholder", "Your display name", 3, "value", "ngModel", "ngModelChange"], [1, "btn", "pop-up-btn", 3, "disabled", "click"], [1, "right-sidebar-wrapper"], [1, "sidebar-header"], ["width", "40", "height", "40", "viewBox", "0 0 30 30", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], [1, "sidebar-body"], [1, "sidebar-body-content"], [1, "issue-list"], ["class", "issue-card", 3, "click", 4, "ngFor", "ngForOf"], ["class", "new-issue", 3, "click", 4, "ngIf"], ["class", "new-issue", 4, "ngIf"], [1, "issue-card", 3, "click"], [1, "row-1"], [3, "click"], ["width", "24", "height", "24", "viewBox", "0 0 24 24", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M6 22C5.44772 22 5 21.5523 5 21V8H3V6H8V3C8 2.44772 8.44772 2 9 2H15C15.5523 2 16 2.44772 16 3V6H21V8H19V21C19 21.5523 18.5523 22 18 22H6ZM14 4H10V6H14V4ZM17 8H9H7V20H17V8ZM11 18V10H9V18H11ZM15 18V10H13V18H15Z", "fill", "currentColor"], [1, "row-2"], [1, "row-3"], [1, "new-issue", 3, "click"], [1, "new-issue-btn"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M12 2C11.4477 2 11 2.44772 11 3V11H3C2.44772 11 2 11.4477 2 12C2 12.5523 2.44772 13 3 13H11V21C11 21.5523 11.4477 22 12 22C12.5523 22 13 21.5523 13 21V13H21C21.5523 13 22 12.5523 22 12C22 11.4477 21.5523 11 21 11H13V3C13 2.44772 12.5523 2 12 2Z", "fill", "currentColor"], [1, "new-issue"], ["type", "text", "name", "issue-name", "id", "issue-name", "placeholder", "Write a title for the issue", 3, "value", "ngModel", "ngModelChange"], [1, "issue-name-btns"], [1, "new-issue-btn-close", 3, "click"], [1, "new-issue-btn-save", 3, "click"], ["type", "input", 1, "pop-up-btn", "round-btn", 3, "click"], [1, "section-name", "pop-up-text", "font-size-20"], [3, "submit"], ["type", "email", "name", "email", "required", "true", "id", "Email-1", "placeholder", "Email", 3, "value", "ngModel", "ngModelChange"], ["type", "password", "name", "password", "required", "true", "id", "Password-1", "placeholder", "Password", 3, "value", "ngModel", "ngModelChange"], ["type", "submit", "name", "submit", 1, "btn", "pop-up-btn", 3, "disabled"], ["type", "email", "name", "email", "required", "true", "id", "Email-2", "placeholder", "Email", 3, "value", "ngModel", "ngModelChange"], ["type", "password", "name", "password", "required", "true", "id", "Password-2", "placeholder", "Password", 3, "value", "ngModel", "ngModelChange"], [1, "reg-pop-up", "vwvh-80"], [1, "issues-table"], [1, "issue-name-width"], [4, "ngFor", "ngForOf"], [1, "mini-btn", "right", 3, "click"], [1, "issue-bottom"], [1, "w-fit-content"]],
        template: function RoomComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RoomComponent_Template_div_click_2_listener() {
              return ctx.openHome();
            });

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

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RoomComponent_Template_button_click_11_listener() {
              return ctx.openInvitePlayersPopUp();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Invite players ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RoomComponent_Template_button_click_13_listener() {
              return ctx.leaveRoom();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Leave the room ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RoomComponent_Template_button_click_15_listener() {
              return ctx.issuesPopupOpen = true;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "svg", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "path", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RoomComponent_Template_a_click_19_listener() {
              return ctx.isLogin ? ctx.isUserIssuePopupOpen = true : ctx.isLoginPopupOpen = true;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "svg", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "path", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, RoomComponent_a_24_Template, 2, 0, "a", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, RoomComponent_div_25_Template, 5, 4, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, RoomComponent_div_28_Template, 5, 4, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, RoomComponent_div_29_Template, 5, 4, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, RoomComponent_div_30_Template, 5, 4, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, RoomComponent_span_32_Template, 2, 0, "span", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, RoomComponent_button_33_Template, 2, 0, "button", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](34, RoomComponent_div_34_Template, 5, 1, "div", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](36, RoomComponent_div_36_Template, 5, 4, "div", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](37, RoomComponent_div_37_Template, 5, 4, "div", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](38, RoomComponent_div_38_Template, 5, 4, "div", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](39, RoomComponent_div_39_Template, 5, 4, "div", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "span", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Choose your estimate \uD83D\uDC47");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "ul", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](45, RoomComponent_li_45_Template, 4, 3, "li", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](46, RoomComponent_div_46_Template, 14, 1, "div", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](47, RoomComponent_div_47_Template, 8, 3, "div", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](48, RoomComponent_div_48_Template, 16, 3, "div", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](49, RoomComponent_div_49_Template, 24, 6, "div", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](50, RoomComponent_div_50_Template, 20, 5, "div", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](51, RoomComponent_div_51_Template, 21, 1, "div", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](52, RoomComponent_div_52_Template, 32, 9, "div", 40);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.signalRService.isConected);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.signalRService.isConected);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.signalRService.isConected);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.roomModel == null ? null : ctx.roomModel.name);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

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

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.issuesPopupOpen);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoginPopupOpen);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isRegisterPopupOpen);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isUserIssuePopupOpen);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isSelectedIssuePopupOpen);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["RequiredValidator"]],
        styles: [".issue-name-width[_ngcontent-%COMP%] {\r\n    width: 35%;\r\n}\r\n\r\n.w-fit-content[_ngcontent-%COMP%] {\r\n    width: -moz-fit-content !important;\r\n    width: fit-content !important;\r\n}\r\n\r\n.issue-bottom[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n}\r\n\r\n.mini-btn[_ngcontent-%COMP%] {\r\n    width: 35px;\r\n    height: 35px;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n}\r\n\r\n.mini-btn.right[_ngcontent-%COMP%] {\r\n    margin-right: 8px;\r\n}\r\n\r\n.issue-list[_ngcontent-%COMP%]   .row-1[_ngcontent-%COMP%] {\r\n    align-items: center;\r\n    display: flex;\r\n    justify-content: space-between;\r\n    font-size: 18px;\r\n}\r\n\r\n.issue-list[_ngcontent-%COMP%]   .row-2[_ngcontent-%COMP%] {\r\n    color: #1a2935;\r\n    font-size: 1.6rem;\r\n    line-height: 1.45em;\r\n    margin: 0.8rem 0 0;\r\n    padding: 0;\r\n    word-break: break-word;\r\n}\r\n\r\n.issue-list[_ngcontent-%COMP%]   .row-3[_ngcontent-%COMP%] {\r\n    align-items: center;\r\n    display: flex;\r\n    height: 4.8rem;\r\n    justify-content: space-between;\r\n    margin-top: 1.6rem;\r\n}\r\n\r\n.issue-card[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n    width: -moz-fit-content;\r\n    width: fit-content;\r\n    height: 38px;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n}\r\n\r\n.issue-list[_ngcontent-%COMP%]   *[_ngcontent-%COMP%]:not(:last-child) {\r\n    margin-bottom: 16px;\r\n}\r\n\r\n.issue-card[_ngcontent-%COMP%] {\r\n    background-color: #D8C3A5;\r\n    border-radius: 8px;\r\n    box-shadow: 0 1px 4px rgba(26,41,53,.24);\r\n    cursor: pointer;\r\n    display: block;\r\n    padding: 2.4rem 1.6rem 1.6rem;\r\n    position: relative;\r\n    width: 100%;\r\n}\r\n\r\n.vwvh-80[_ngcontent-%COMP%] {\r\n    width: 80vw !important;\r\n    height: 80vh !important;\r\n}\r\n\r\n.right-sidebar-wrapper[_ngcontent-%COMP%] {\r\n    position: fixed;\r\n    right: 0;\r\n    top: 0;\r\n    height: 100%;\r\n    width: 480px;\r\n    background-color: #EAE7DC;\r\n}\r\n\r\n.right-sidebar-wrapper[_ngcontent-%COMP%]   .sidebar-header[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    height: 10rem;\r\n    justify-content: space-between;\r\n    left: 0;\r\n    padding: 0 4rem;\r\n    position: absolute;\r\n    right: 0;\r\n    top: 0;\r\n}\r\n\r\n.right-sidebar-wrapper[_ngcontent-%COMP%]   .sidebar-header[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%] {\r\n    align-items: center;\r\n    display: flex;\r\n    height: 10rem;\r\n}\r\n\r\n.right-sidebar-wrapper[_ngcontent-%COMP%]   .sidebar-header[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n    font-size: 20px;\r\n}\r\n\r\n.right-sidebar-wrapper[_ngcontent-%COMP%]   .sidebar-header[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%] {\r\n    align-items: center;\r\n    display: flex;\r\n    height: 10rem;\r\n}\r\n\r\n.right-sidebar-wrapper[_ngcontent-%COMP%]   .sidebar-header[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n    width: 40px;\r\n    height: 40px;\r\n}\r\n\r\n.sidebar-body[_ngcontent-%COMP%] {\r\n    bottom: 0;\r\n    left: 0;\r\n    position: absolute;\r\n    right: 0;\r\n    top: 10rem;\r\n}\r\n\r\n.sidebar-body-content[_ngcontent-%COMP%] {\r\n    display: grid;\r\n    grid-template-rows: 1fr auto;\r\n    max-height: 100%;\r\n    width: 100%;\r\n}\r\n\r\n.issue-list[_ngcontent-%COMP%] {\r\n    align-items: flex-end;\r\n    display: flex;\r\n    flex-direction: column;\r\n    list-style: none;\r\n    margin: 0;\r\n    overflow-y: auto;\r\n    padding: 2px 4rem 4px;\r\n}\r\n\r\n.new-issue[_ngcontent-%COMP%] {\r\n    padding: 1.6rem 4rem;\r\n    width: 100%;\r\n}\r\n\r\n.issue-btn[_ngcontent-%COMP%] {\r\n    width: 48px;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    position: absolute;\r\n    right: 0;\r\n}\r\n\r\n.new-issue-btn[_ngcontent-%COMP%] {\r\n    background: transparent;\r\n    height: 4.8rem;\r\n    width: 100%;\r\n    display: flex;\r\n    flex-direction: row;\r\n    align-items: center;\r\n    background: #EAE7DC;\r\n    border: none;\r\n    border-radius: 4px;\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    line-height: 22px;\r\n    text-align: center;\r\n    color: #000000;\r\n}\r\n\r\n.new-issue-btn[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n    font-size: 20px;\r\n    margin-left: 8px;\r\n}\r\n\r\n#issue-name[_ngcontent-%COMP%] {\r\n    height: 48px;\r\n    width: 100%;\r\n    font-size: 18px;\r\n}\r\n\r\n.issue-name-btns[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    margin-top: 18px;\r\n}\r\n\r\n.new-issue-btn-save[_ngcontent-%COMP%] {\r\n    background: #E98074;\r\n}\r\n\r\n.room-page[_ngcontent-%COMP%] {\r\n    margin: 0 40px;\r\n    height: 100vh;\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\n.room-page[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    width: 100%;\r\n    height: 100px;\r\n    display: flex;\r\n    align-items: center;\r\n    background: #EAE7DC;\r\n    flex-shrink: 0;\r\n}\r\n\r\n.room-page[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .project-name-container[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    align-items: center;\r\n    cursor: pointer;\r\n}\r\n\r\n.room-page[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .project-name-container[_ngcontent-%COMP%]   .project-name-icom[_ngcontent-%COMP%] {\r\n    margin-right: 8px;\r\n}\r\n\r\n.room-page[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .project-name-container[_ngcontent-%COMP%]   .project-name-titel[_ngcontent-%COMP%] {\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    font-size: 24px;\r\n    line-height: 29px;\r\n    color: #8E8D8A;\r\n}\r\n\r\n.room-page[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .leave-the-room[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    right: 68px;\r\n}\r\n\r\n.room-page[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .invite-players[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    right: 282px;\r\n}\r\n\r\n.user-name[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    left: 0;\r\n    top: 0;\r\n    width: -moz-fit-content;\r\n    width: fit-content;\r\n    display: flex;\r\n    flex-direction: row;\r\n    align-items: center;\r\n    justify-content: center;\r\n    font-size: 18px;\r\n    color: #000000;\r\n    cursor: pointer;\r\n}\r\n\r\n.user-name[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\r\n    margin-right: 8px;\r\n    color: #E98074;\r\n}\r\n\r\n.user-name[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:hover {\r\n    text-decoration: none;\r\n}\r\n\r\n.user-name[_ngcontent-%COMP%]:hover {\r\n    text-decoration: none;\r\n}\r\n\r\n.font-size-20[_ngcontent-%COMP%] {\r\n    font-size: 20px !important;\r\n}\r\n\r\n.estimate-btn[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    overflow: hidden;\r\n    font-weight: 700;\r\n    width: 48px;\r\n    height: 80px;\r\n    font-size: 19px;\r\n    background: #EAE7DC;\r\n    border: 2px solid #E85A4F;\r\n    border-radius: 4px;\r\n    -webkit-transition: .4s ease-out;\r\n    -webkit-transition-delay: 0.1s;\r\n    -o-transition: .1s ease-out;\r\n    -o-transition-delay: 0.1s;\r\n    -moz-transition: .1s ease-out;\r\n    -moz-transition-delay: 0.1s;\r\n     transition: .1s ease-out;\r\n     transition-delay: 0.1s;\r\n}\r\n\r\n.invite-players-link[_ngcontent-%COMP%] {\r\n    margin-bottom: 20px;\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    font-size: 18px;\r\n    line-height: 22px;\r\n    color: #E85A4F;\r\n}\r\n\r\n.table[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    width: 280px;\r\n    height: 280px;\r\n    background: #E98074;\r\n    border-radius: 100%;\r\n    margin: 0;\r\n}\r\n\r\n.table.reveal[_ngcontent-%COMP%] {\r\n    border: 4px solid #E85A4F;\r\n}\r\n\r\n.table[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    font-size: 18px;\r\n    line-height: 22px;\r\n}\r\n\r\n.inline-b[_ngcontent-%COMP%] {\r\n    display: inline-block;\r\n}\r\n\r\n.flex-d[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    flex-direction: column;\r\n}\r\n\r\n.flex-d[_ngcontent-%COMP%]   *[_ngcontent-%COMP%]:not(:last-child) {\r\n    margin-bottom: 16px;\r\n}\r\n\r\n.card[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    align-items: center;\r\n    flex-direction: column;\r\n}\r\n\r\n.card[_ngcontent-%COMP%]   .card-body.selected[_ngcontent-%COMP%]{\r\n    background-color: #E85A4F;\r\n}\r\n\r\n.card-body[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    font-size: 18px;\r\n    width: 35px;\r\n    height: 60px;\r\n    background: #D8C3A5;\r\n    border-radius: 4px;\r\n    margin-bottom: 8px;\r\n}\r\n\r\n.card-name[_ngcontent-%COMP%] {\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    font-size: 14px;\r\n    line-height: 22px;\r\n}\r\n\r\n.choose-estimate-span[_ngcontent-%COMP%] {\r\n    margin-bottom: 20px;\r\n    display: inline-block;\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    font-size: 18px;\r\n    line-height: 22px;\r\n}\r\n\r\n.estimates[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    margin: 0;\r\n    padding: 0;\r\n    gap: 8px;\r\n}\r\n\r\n.estimate[_ngcontent-%COMP%] {\r\n    display: block;\r\n}\r\n\r\n.body[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    flex-direction: column;\r\n    background: #EAE7DC;\r\n    height: 100%;\r\n}\r\n\r\nbutton[_ngcontent-%COMP%] {\r\n    width: 194px;\r\n    height: 48px;\r\n    background: #EAE7DC;\r\n    border: 1px solid #8E8D8A;\r\n    border-radius: 4px;\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    font-size: 18px;\r\n    line-height: 22px;\r\n    text-align: center;\r\n    color: #000000;\r\n}\r\n\r\n.footer[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    justify-content: center;\r\n    margin-bottom: 26px;\r\n    flex-shrink: 0;\r\n}\r\n\r\n.table-wrapper[_ngcontent-%COMP%] {\r\n    display: flex;\r\n}\r\n\r\n.table-wrapper[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\n.table-wrapper[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\n.estimates[_ngcontent-%COMP%]:hover   .estimate[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\r\n    background-color: #E85A4F;\r\n    margin-top: -8px;\r\n    -webkit-transition: .4s ease-out;\r\n    -webkit-transition-delay: 0.1s;\r\n    -o-transition: .1s ease-out;\r\n    -o-transition-delay: 0.1s;\r\n    -moz-transition: .1s ease-out;\r\n    -moz-transition-delay: 0.1s;\r\n     transition: .1s ease-out;\r\n     transition-delay: 0.1s;\r\n}\r\n\r\n.estimates[_ngcontent-%COMP%]   .estimate[_ngcontent-%COMP%]   button.selected[_ngcontent-%COMP%] {\r\n    background-color: #E85A4F;\r\n    margin-top: -8px;\r\n    -webkit-transition: .4s ease-out;\r\n    -webkit-transition-delay: 0.1s;\r\n    -o-transition: .1s ease-out;\r\n    -o-transition-delay: 0.1s;\r\n    -moz-transition: .1s ease-out;\r\n    -moz-transition-delay: 0.1s;\r\n     transition: .1s ease-out;\r\n     transition-delay: 0.1s;\r\n}\r\n\r\n.card-1[_ngcontent-%COMP%] {\r\n    margin-top: 45px;\r\n}\r\n\r\n.card-2[_ngcontent-%COMP%] {\r\n    margin-bottom: 20px;\r\n}\r\n\r\n.card-3[_ngcontent-%COMP%] {\r\n    margin-right: 50px;\r\n}\r\n\r\n.card-4[_ngcontent-%COMP%] {\r\n    margin-left: 50px;\r\n}\r\n\r\n.card-5[_ngcontent-%COMP%] {\r\n    margin-bottom: 25px;\r\n}\r\n\r\n.card-6[_ngcontent-%COMP%] {\r\n    margin-top: 25px;\r\n}\r\n\r\n.card-7[_ngcontent-%COMP%] {\r\n    margin-top: 25px;\r\n}\r\n\r\n.card-8[_ngcontent-%COMP%] {\r\n    margin-bottom: 25px;\r\n}\r\n\r\n.table-wrapper[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%] {\r\n    width: 88px;\r\n}\r\n\r\n.table-wrapper[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%] {\r\n    width: 88px;\r\n}\r\n\r\n.reg-confirm[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    top: 0px;\r\n    position: absolute;\r\n    width: 100%;\r\n    height: 100%;\r\n    background: rgba(0, 0, 0, 0.5);\r\n    z-index: 100;\r\n}\r\n\r\n.reg-pop-up[_ngcontent-%COMP%] {\r\n    padding: 40px;\r\n    border-radius: 8px;\r\n    background-color: #EAE7DC;\r\n    display: flex;\r\n    flex-direction: column;\r\n    width: 630px;\r\n}\r\n\r\n.pop-up-btn[_ngcontent-%COMP%] {\r\n    background-color: #E98074;\r\n    color: black;\r\n    border: 1px solid #8E8D8A;\r\n}\r\n\r\n.pop-up-footer[_ngcontent-%COMP%]   .pop-up-btn[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    height: 40px;\r\n    background-color: #E98074;\r\n    font-size: 18px;\r\n}\r\n\r\n.pop-up-text[_ngcontent-%COMP%] {\r\n    color: black;\r\n    font-weight: 500;\r\n    margin-top: 16px;\r\n    font-size: 24px;\r\n    margin-bottom: 36px;\r\n}\r\n\r\n.round-btn[_ngcontent-%COMP%] {\r\n    border-radius: 100px;\r\n    height: 35px;\r\n    width: 35px;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n}\r\n\r\n.pop-up-header[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    justify-content: flex-end;\r\n    width: 100%;\r\n}\r\n\r\n.pop-up-footer[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    justify-content: flex-start;\r\n    flex-direction: column;\r\n    width: 100%;\r\n}\r\n\r\n.pop-up-footer[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n    font-size: 18px;\r\n}\r\n\r\n.pop-up-footer[_ngcontent-%COMP%]   *[_ngcontent-%COMP%]:not(:last-child) {\r\n    margin-bottom: 16px;\r\n}\r\n\r\n.link-wrapper[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-direction: row;\r\n    align-items: center;\r\n    padding: 8px 12px;\r\n    margin-bottom: 24px;\r\n    width: 100%;\r\n\r\n    background: white;\r\n    border-radius: 8px;\r\n\r\n    .link {\r\n        margin-right: 10px;\r\n        width: 100%;\r\n        height: 24px;\r\n        font-weight: 400;\r\n        font-size: 14px;\r\n        line-height: 24px;\r\n\r\n        -webkit-text-decoration-line: underline;\r\n\r\n                text-decoration-line: underline;\r\n        white-space: nowrap;\r\n        overflow: hidden;\r\n    }\r\n}\r\n\r\n.reg-pop-up[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    height: 40px;\r\n    margin-bottom: 24px;\r\n}\r\n\r\n.reveal-cards[_ngcontent-%COMP%] {\r\n    border-color: #E85A4F;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcm9vbS9yb29tLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxrQ0FBNkI7SUFBN0IsNkJBQTZCO0FBQ2pDOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQiw4QkFBOEI7QUFDbEM7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1Ysc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLGFBQWE7SUFDYixjQUFjO0lBQ2QsOEJBQThCO0lBQzlCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLHVCQUFrQjtJQUFsQixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLGtCQUFrQjtJQUNsQix3Q0FBd0M7SUFDeEMsZUFBZTtJQUNmLGNBQWM7SUFDZCw2QkFBNkI7SUFDN0Isa0JBQWtCO0lBQ2xCLFdBQVc7QUFDZjs7QUFFQTtJQUNJLHNCQUFzQjtJQUN0Qix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsUUFBUTtJQUNSLE1BQU07SUFDTixZQUFZO0lBQ1osWUFBWTtJQUNaLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLE9BQU87SUFDUCxlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixNQUFNO0FBQ1Y7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLGFBQWE7SUFDYixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxTQUFTO0lBQ1QsT0FBTztJQUNQLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsVUFBVTtBQUNkOztBQUVBO0lBQ0ksYUFBYTtJQUNiLDRCQUE0QjtJQUM1QixnQkFBZ0I7SUFDaEIsV0FBVztBQUNmOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsZ0JBQWdCO0lBQ2hCLFNBQVM7SUFDVCxnQkFBZ0I7SUFDaEIscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksb0JBQW9CO0lBQ3BCLFdBQVc7QUFDZjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixrQkFBa0I7SUFDbEIsUUFBUTtBQUNaOztBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLGNBQWM7SUFDZCxXQUFXO0lBQ1gsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7SUFDWCxlQUFlO0FBQ25COztBQUVBO0lBQ0ksYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsYUFBYTtJQUNiLGFBQWE7SUFDYixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLGFBQWE7SUFDYixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsV0FBVztBQUNmOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsT0FBTztJQUNQLE1BQU07SUFDTix1QkFBa0I7SUFBbEIsa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixlQUFlO0lBQ2YsY0FBYztJQUNkLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsY0FBYztBQUNsQjs7QUFFQTtJQUNJLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLDBCQUEwQjtBQUM5Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsV0FBVztJQUNYLFlBQVk7SUFDWixlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLHlCQUF5QjtJQUN6QixrQkFBa0I7SUFDbEIsZ0NBQWdDO0lBQ2hDLDhCQUE4QjtJQUM5QiwyQkFBMkI7SUFDM0IseUJBQXlCO0lBQ3pCLDZCQUE2QjtJQUM3QiwyQkFBMkI7S0FDMUIsd0JBQXdCO0tBQ3hCLHNCQUFzQjtBQUMzQjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsY0FBYztBQUNsQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLFlBQVk7SUFDWixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQixTQUFTO0FBQ2I7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLGVBQWU7SUFDZixXQUFXO0lBQ1gsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLHFCQUFxQjtJQUNyQixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsU0FBUztJQUNULFVBQVU7SUFDVixRQUFRO0FBQ1o7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLHlCQUF5QjtJQUN6QixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsY0FBYztBQUNsQjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixnQkFBZ0I7SUFDaEIsZ0NBQWdDO0lBQ2hDLDhCQUE4QjtJQUM5QiwyQkFBMkI7SUFDM0IseUJBQXlCO0lBQ3pCLDZCQUE2QjtJQUM3QiwyQkFBMkI7S0FDMUIsd0JBQXdCO0tBQ3hCLHNCQUFzQjtBQUMzQjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixnQkFBZ0I7SUFDaEIsZ0NBQWdDO0lBQ2hDLDhCQUE4QjtJQUM5QiwyQkFBMkI7SUFDM0IseUJBQXlCO0lBQ3pCLDZCQUE2QjtJQUM3QiwyQkFBMkI7S0FDMUIsd0JBQXdCO0tBQ3hCLHNCQUFzQjtBQUMzQjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLFFBQVE7SUFDUixrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFlBQVk7SUFDWiw4QkFBOEI7SUFDOUIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIseUJBQXlCO0lBQ3pCLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1oseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWix5QkFBeUI7SUFDekIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxvQkFBb0I7SUFDcEIsWUFBWTtJQUNaLFdBQVc7SUFDWCxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGFBQWE7SUFDYix5QkFBeUI7SUFDekIsV0FBVztBQUNmOztBQUVBO0lBQ0ksYUFBYTtJQUNiLDJCQUEyQjtJQUMzQixzQkFBc0I7SUFDdEIsV0FBVztBQUNmOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIsV0FBVzs7SUFFWCxpQkFBaUI7SUFDakIsa0JBQWtCOztJQUVsQjtRQUNJLGtCQUFrQjtRQUNsQixXQUFXO1FBQ1gsWUFBWTtRQUNaLGdCQUFnQjtRQUNoQixlQUFlO1FBQ2YsaUJBQWlCOztRQUVqQix1Q0FBK0I7O2dCQUEvQiwrQkFBK0I7UUFDL0IsbUJBQW1CO1FBQ25CLGdCQUFnQjtJQUNwQjtBQUNKOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxxQkFBcUI7QUFDekIiLCJmaWxlIjoic3JjL2FwcC9yb29tL3Jvb20uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pc3N1ZS1uYW1lLXdpZHRoIHtcclxuICAgIHdpZHRoOiAzNSU7XHJcbn1cclxuXHJcbi53LWZpdC1jb250ZW50IHtcclxuICAgIHdpZHRoOiBmaXQtY29udGVudCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uaXNzdWUtYm90dG9tIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG59XHJcblxyXG4ubWluaS1idG4ge1xyXG4gICAgd2lkdGg6IDM1cHg7XHJcbiAgICBoZWlnaHQ6IDM1cHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4ubWluaS1idG4ucmlnaHQge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA4cHg7XHJcbn1cclxuXHJcbi5pc3N1ZS1saXN0IC5yb3ctMSB7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxufVxyXG5cclxuLmlzc3VlLWxpc3QgLnJvdy0yIHtcclxuICAgIGNvbG9yOiAjMWEyOTM1O1xyXG4gICAgZm9udC1zaXplOiAxLjZyZW07XHJcbiAgICBsaW5lLWhlaWdodDogMS40NWVtO1xyXG4gICAgbWFyZ2luOiAwLjhyZW0gMCAwO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XHJcbn1cclxuXHJcbi5pc3N1ZS1saXN0IC5yb3ctMyB7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGhlaWdodDogNC44cmVtO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgbWFyZ2luLXRvcDogMS42cmVtO1xyXG59XHJcblxyXG4uaXNzdWUtY2FyZCBidXR0b24ge1xyXG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xyXG4gICAgaGVpZ2h0OiAzOHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLmlzc3VlLWxpc3QgKjpub3QoOmxhc3QtY2hpbGQpIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XHJcbn1cclxuXHJcbi5pc3N1ZS1jYXJkIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNEOEMzQTU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICBib3gtc2hhZG93OiAwIDFweCA0cHggcmdiYSgyNiw0MSw1MywuMjQpO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBwYWRkaW5nOiAyLjRyZW0gMS42cmVtIDEuNnJlbTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4udnd2aC04MCB7XHJcbiAgICB3aWR0aDogODB2dyAhaW1wb3J0YW50O1xyXG4gICAgaGVpZ2h0OiA4MHZoICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5yaWdodC1zaWRlYmFyLXdyYXBwZXIge1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogNDgwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRUFFN0RDO1xyXG59XHJcblxyXG4ucmlnaHQtc2lkZWJhci13cmFwcGVyIC5zaWRlYmFyLWhlYWRlciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgaGVpZ2h0OiAxMHJlbTtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBwYWRkaW5nOiAwIDRyZW07XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICByaWdodDogMDtcclxuICAgIHRvcDogMDtcclxufVxyXG5cclxuLnJpZ2h0LXNpZGViYXItd3JhcHBlciAuc2lkZWJhci1oZWFkZXIgLmxlZnQge1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBoZWlnaHQ6IDEwcmVtO1xyXG59XHJcblxyXG4ucmlnaHQtc2lkZWJhci13cmFwcGVyIC5zaWRlYmFyLWhlYWRlciAubGVmdCBzcGFuIHtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxufVxyXG5cclxuLnJpZ2h0LXNpZGViYXItd3JhcHBlciAuc2lkZWJhci1oZWFkZXIgLnJpZ2h0IHtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgaGVpZ2h0OiAxMHJlbTtcclxufVxyXG5cclxuLnJpZ2h0LXNpZGViYXItd3JhcHBlciAuc2lkZWJhci1oZWFkZXIgLnJpZ2h0IGJ1dHRvbiB7XHJcbiAgICB3aWR0aDogNDBweDtcclxuICAgIGhlaWdodDogNDBweDtcclxufVxyXG5cclxuLnNpZGViYXItYm9keSB7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICB0b3A6IDEwcmVtO1xyXG59XHJcblxyXG4uc2lkZWJhci1ib2R5LWNvbnRlbnQge1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIGF1dG87XHJcbiAgICBtYXgtaGVpZ2h0OiAxMDAlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5pc3N1ZS1saXN0IHtcclxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIG92ZXJmbG93LXk6IGF1dG87XHJcbiAgICBwYWRkaW5nOiAycHggNHJlbSA0cHg7XHJcbn1cclxuXHJcbi5uZXctaXNzdWUge1xyXG4gICAgcGFkZGluZzogMS42cmVtIDRyZW07XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmlzc3VlLWJ0biB7XHJcbiAgICB3aWR0aDogNDhweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICByaWdodDogMDtcclxufVxyXG5cclxuLm5ldy1pc3N1ZS1idG4ge1xyXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICBoZWlnaHQ6IDQuOHJlbTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZDogI0VBRTdEQztcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBsaW5lLWhlaWdodDogMjJweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOiAjMDAwMDAwO1xyXG59XHJcblxyXG4ubmV3LWlzc3VlLWJ0biBzcGFuIHtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiA4cHg7XHJcbn1cclxuXHJcbiNpc3N1ZS1uYW1lIHtcclxuICAgIGhlaWdodDogNDhweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG59XHJcblxyXG4uaXNzdWUtbmFtZS1idG5zIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBtYXJnaW4tdG9wOiAxOHB4O1xyXG59XHJcblxyXG4ubmV3LWlzc3VlLWJ0bi1zYXZlIHtcclxuICAgIGJhY2tncm91bmQ6ICNFOTgwNzQ7XHJcbn1cclxuXHJcbi5yb29tLXBhZ2Uge1xyXG4gICAgbWFyZ2luOiAwIDQwcHg7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuXHJcbi5yb29tLXBhZ2UgLmhlYWRlciB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwcHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQ6ICNFQUU3REM7XHJcbiAgICBmbGV4LXNocmluazogMDtcclxufVxyXG5cclxuLnJvb20tcGFnZSAuaGVhZGVyIC5wcm9qZWN0LW5hbWUtY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4ucm9vbS1wYWdlIC5oZWFkZXIgLnByb2plY3QtbmFtZS1jb250YWluZXIgLnByb2plY3QtbmFtZS1pY29tIHtcclxuICAgIG1hcmdpbi1yaWdodDogOHB4O1xyXG59XHJcblxyXG4ucm9vbS1wYWdlIC5oZWFkZXIgLnByb2plY3QtbmFtZS1jb250YWluZXIgLnByb2plY3QtbmFtZS10aXRlbCB7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDI5cHg7XHJcbiAgICBjb2xvcjogIzhFOEQ4QTtcclxufVxyXG5cclxuLnJvb20tcGFnZSAuaGVhZGVyIC5sZWF2ZS10aGUtcm9vbSB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICByaWdodDogNjhweDtcclxufVxyXG5cclxuLnJvb20tcGFnZSAuaGVhZGVyIC5pbnZpdGUtcGxheWVycyB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICByaWdodDogMjgycHg7XHJcbn1cclxuXHJcbi51c2VyLW5hbWUge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHRvcDogMDtcclxuICAgIHdpZHRoOiBmaXQtY29udGVudDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgY29sb3I6ICMwMDAwMDA7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi51c2VyLW5hbWUgc3ZnIHtcclxuICAgIG1hcmdpbi1yaWdodDogOHB4O1xyXG4gICAgY29sb3I6ICNFOTgwNzQ7XHJcbn1cclxuXHJcbi51c2VyLW5hbWUgc3Bhbjpob3ZlciB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuXHJcbi51c2VyLW5hbWU6aG92ZXIge1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcblxyXG4uZm9udC1zaXplLTIwIHtcclxuICAgIGZvbnQtc2l6ZTogMjBweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uZXN0aW1hdGUtYnRuIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIHdpZHRoOiA0OHB4O1xyXG4gICAgaGVpZ2h0OiA4MHB4O1xyXG4gICAgZm9udC1zaXplOiAxOXB4O1xyXG4gICAgYmFja2dyb3VuZDogI0VBRTdEQztcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkICNFODVBNEY7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IC40cyBlYXNlLW91dDtcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbi1kZWxheTogMC4xcztcclxuICAgIC1vLXRyYW5zaXRpb246IC4xcyBlYXNlLW91dDtcclxuICAgIC1vLXRyYW5zaXRpb24tZGVsYXk6IDAuMXM7XHJcbiAgICAtbW96LXRyYW5zaXRpb246IC4xcyBlYXNlLW91dDtcclxuICAgIC1tb3otdHJhbnNpdGlvbi1kZWxheTogMC4xcztcclxuICAgICB0cmFuc2l0aW9uOiAuMXMgZWFzZS1vdXQ7XHJcbiAgICAgdHJhbnNpdGlvbi1kZWxheTogMC4xcztcclxufVxyXG5cclxuLmludml0ZS1wbGF5ZXJzLWxpbmsge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjJweDtcclxuICAgIGNvbG9yOiAjRTg1QTRGO1xyXG59XHJcblxyXG4udGFibGUge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIHdpZHRoOiAyODBweDtcclxuICAgIGhlaWdodDogMjgwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjRTk4MDc0O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcclxuICAgIG1hcmdpbjogMDtcclxufVxyXG5cclxuLnRhYmxlLnJldmVhbCB7XHJcbiAgICBib3JkZXI6IDRweCBzb2xpZCAjRTg1QTRGO1xyXG59XHJcblxyXG4udGFibGUgc3BhbiB7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDIycHg7XHJcbn1cclxuXHJcbi5pbmxpbmUtYiB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbn1cclxuXHJcbi5mbGV4LWQge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuXHJcbi5mbGV4LWQgKjpub3QoOmxhc3QtY2hpbGQpIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XHJcbn1cclxuXHJcbi5jYXJkIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG5cclxuLmNhcmQgLmNhcmQtYm9keS5zZWxlY3RlZHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNFODVBNEY7XHJcbn1cclxuXHJcbi5jYXJkLWJvZHkge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIHdpZHRoOiAzNXB4O1xyXG4gICAgaGVpZ2h0OiA2MHB4O1xyXG4gICAgYmFja2dyb3VuZDogI0Q4QzNBNTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDhweDtcclxufVxyXG5cclxuLmNhcmQtbmFtZSB7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDIycHg7XHJcbn1cclxuXHJcbi5jaG9vc2UtZXN0aW1hdGUtc3BhbiB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyMnB4O1xyXG59XHJcblxyXG4uZXN0aW1hdGVzIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgZ2FwOiA4cHg7XHJcbn1cclxuXHJcbi5lc3RpbWF0ZSB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuLmJvZHkge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBiYWNrZ3JvdW5kOiAjRUFFN0RDO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG5idXR0b24ge1xyXG4gICAgd2lkdGg6IDE5NHB4O1xyXG4gICAgaGVpZ2h0OiA0OHB4O1xyXG4gICAgYmFja2dyb3VuZDogI0VBRTdEQztcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICM4RThEOEE7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDIycHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogIzAwMDAwMDtcclxufVxyXG5cclxuLmZvb3RlciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyNnB4O1xyXG4gICAgZmxleC1zaHJpbms6IDA7XHJcbn1cclxuXHJcbi50YWJsZS13cmFwcGVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuXHJcbi50YWJsZS13cmFwcGVyIC5sZWZ0IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcblxyXG4udGFibGUtd3JhcHBlciAucmlnaHQge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuXHJcbi5lc3RpbWF0ZXM6aG92ZXIgLmVzdGltYXRlIGJ1dHRvbjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRTg1QTRGO1xyXG4gICAgbWFyZ2luLXRvcDogLThweDtcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogLjRzIGVhc2Utb3V0O1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uLWRlbGF5OiAwLjFzO1xyXG4gICAgLW8tdHJhbnNpdGlvbjogLjFzIGVhc2Utb3V0O1xyXG4gICAgLW8tdHJhbnNpdGlvbi1kZWxheTogMC4xcztcclxuICAgIC1tb3otdHJhbnNpdGlvbjogLjFzIGVhc2Utb3V0O1xyXG4gICAgLW1vei10cmFuc2l0aW9uLWRlbGF5OiAwLjFzO1xyXG4gICAgIHRyYW5zaXRpb246IC4xcyBlYXNlLW91dDtcclxuICAgICB0cmFuc2l0aW9uLWRlbGF5OiAwLjFzO1xyXG59XHJcblxyXG4uZXN0aW1hdGVzIC5lc3RpbWF0ZSBidXR0b24uc2VsZWN0ZWQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0U4NUE0RjtcclxuICAgIG1hcmdpbi10b3A6IC04cHg7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IC40cyBlYXNlLW91dDtcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbi1kZWxheTogMC4xcztcclxuICAgIC1vLXRyYW5zaXRpb246IC4xcyBlYXNlLW91dDtcclxuICAgIC1vLXRyYW5zaXRpb24tZGVsYXk6IDAuMXM7XHJcbiAgICAtbW96LXRyYW5zaXRpb246IC4xcyBlYXNlLW91dDtcclxuICAgIC1tb3otdHJhbnNpdGlvbi1kZWxheTogMC4xcztcclxuICAgICB0cmFuc2l0aW9uOiAuMXMgZWFzZS1vdXQ7XHJcbiAgICAgdHJhbnNpdGlvbi1kZWxheTogMC4xcztcclxufVxyXG5cclxuLmNhcmQtMSB7XHJcbiAgICBtYXJnaW4tdG9wOiA0NXB4O1xyXG59XHJcblxyXG4uY2FyZC0yIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbn1cclxuXHJcbi5jYXJkLTMge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA1MHB4O1xyXG59XHJcblxyXG4uY2FyZC00IHtcclxuICAgIG1hcmdpbi1sZWZ0OiA1MHB4O1xyXG59XHJcblxyXG4uY2FyZC01IHtcclxuICAgIG1hcmdpbi1ib3R0b206IDI1cHg7XHJcbn1cclxuXHJcbi5jYXJkLTYge1xyXG4gICAgbWFyZ2luLXRvcDogMjVweDtcclxufVxyXG5cclxuLmNhcmQtNyB7XHJcbiAgICBtYXJnaW4tdG9wOiAyNXB4O1xyXG59XHJcblxyXG4uY2FyZC04IHtcclxuICAgIG1hcmdpbi1ib3R0b206IDI1cHg7XHJcbn1cclxuXHJcbi50YWJsZS13cmFwcGVyIC5sZWZ0IHtcclxuICAgIHdpZHRoOiA4OHB4O1xyXG59XHJcblxyXG4udGFibGUtd3JhcHBlciAucmlnaHQge1xyXG4gICAgd2lkdGg6IDg4cHg7XHJcbn1cclxuXHJcbi5yZWctY29uZmlybSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgdG9wOiAwcHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC41KTtcclxuICAgIHotaW5kZXg6IDEwMDtcclxufVxyXG5cclxuLnJlZy1wb3AtdXAge1xyXG4gICAgcGFkZGluZzogNDBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNFQUU3REM7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIHdpZHRoOiA2MzBweDtcclxufVxyXG5cclxuLnBvcC11cC1idG4ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0U5ODA3NDtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICM4RThEOEE7XHJcbn1cclxuXHJcbi5wb3AtdXAtZm9vdGVyIC5wb3AtdXAtYnRuIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0U5ODA3NDtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxufVxyXG5cclxuLnBvcC11cC10ZXh0IHtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBtYXJnaW4tdG9wOiAxNnB4O1xyXG4gICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMzZweDtcclxufVxyXG5cclxuLnJvdW5kLWJ0biB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMDBweDtcclxuICAgIGhlaWdodDogMzVweDtcclxuICAgIHdpZHRoOiAzNXB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLnBvcC11cC1oZWFkZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLnBvcC11cC1mb290ZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLnBvcC11cC1mb290ZXIgc3BhbiB7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbn1cclxuXHJcbi5wb3AtdXAtZm9vdGVyICo6bm90KDpsYXN0LWNoaWxkKSB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xyXG59XHJcblxyXG4ubGluay13cmFwcGVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDhweCAxMnB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjRweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG5cclxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG5cclxuICAgIC5saW5rIHtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiAyNHB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xyXG5cclxuICAgICAgICB0ZXh0LWRlY29yYXRpb24tbGluZTogdW5kZXJsaW5lO1xyXG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIH1cclxufVxyXG5cclxuLnJlZy1wb3AtdXAgaW5wdXQge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyNHB4O1xyXG59XHJcblxyXG4ucmV2ZWFsLWNhcmRzIHtcclxuICAgIGJvcmRlci1jb2xvcjogI0U4NUE0RjtcclxufVxyXG4iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RoomComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'room',
            templateUrl: './room.component.html',
            styleUrls: ['./room.component.css']
          }]
        }], function () {
          return [{
            type: _services_signalr_service__WEBPACK_IMPORTED_MODULE_3__["SignalRService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
          }, {
            type: _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_5__["Clipboard"]
          }, {
            type: _services_api_client__WEBPACK_IMPORTED_MODULE_6__["ApiClient"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/services/api.client.ts":
    /*!****************************************!*\
      !*** ./src/app/services/api.client.ts ***!
      \****************************************/

    /*! exports provided: ApiClient */

    /***/
    function srcAppServicesApiClientTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ApiClient", function () {
        return ApiClient;
      });
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/fesm2015/http.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/fesm2015/core.js");

      var ApiClient = /*#__PURE__*/function () {
        function ApiClient(http, zone) {
          _classCallCheck(this, ApiClient);

          this.http = http;
          this.zone = zone;
          this.apiRoot = "http://localhost:5000/api";
        }

        _createClass(ApiClient, [{
          key: "get",
          value: function get(url, silent) {
            var full = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
            var observable = this.http.get("".concat(this.apiRoot, "/").concat(url), {
              headers: this.getHeaders(),
              observe: "response",
              withCredentials: this.getCredentialsOption()
            });
            return this.subscribe(observable, url, silent, full);
          }
        }, {
          key: "post",
          value: function post(url, data, silent) {
            var observable = this.http.post("".concat(this.apiRoot, "/").concat(url), JSON.stringify(data), {
              headers: this.getHeaders(),
              observe: "response",
              withCredentials: this.getCredentialsOption()
            });
            return this.subscribe(observable, url, silent);
          }
        }, {
          key: "getHeaders",
          value: function getHeaders() {
            return new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
              "content-type": "application/json",
              "cache-control": "no-cache"
            });
          }
        }, {
          key: "getCredentialsOption",
          value: function getCredentialsOption() {
            return undefined;
          }
        }, {
          key: "subscribe",
          value: function subscribe(observable, url, silent) {
            var _this3 = this;

            var full = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
            var promise = new Promise(function (resolve, reject) {
              observable.subscribe({
                next: function next(r) {
                  setTimeout(function () {
                    _this3.zone.run(function () {
                      if (full) {
                        resolve(r);
                      } else {
                        resolve(r["body"]);
                      }
                    });
                  });
                },
                error: function error(r) {
                  if (silent) {
                    // ToDo check
                    if (r.status === 500) {
                      resolve({
                        code: "500"
                      });
                    } else {
                      resolve(r.error || null);
                    }
                  }
                }
              });
            });
            return promise;
          }
        }]);

        return ApiClient;
      }();

      ApiClient.ɵfac = function ApiClient_Factory(t) {
        return new (t || ApiClient)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]));
      };

      ApiClient.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: ApiClient,
        factory: ApiClient.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ApiClient, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/services/signalr.service.ts":
    /*!*********************************************!*\
      !*** ./src/app/services/signalr.service.ts ***!
      \*********************************************/

    /*! exports provided: SignalRService */

    /***/
    function srcAppServicesSignalrServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SignalRService", function () {
        return SignalRService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/fesm2015/core.js");
      /* harmony import */


      var _microsoft_signalr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @microsoft/signalr */
      "./node_modules/@microsoft/signalr/dist/esm/index.js");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      "./node_modules/rxjs/dist/esm/index.js");

      var __awaiter = undefined && undefined.__awaiter || function (thisArg, _arguments, P, generator) {
        function adopt(value) {
          return value instanceof P ? value : new P(function (resolve) {
            resolve(value);
          });
        }

        return new (P || (P = Promise))(function (resolve, reject) {
          function fulfilled(value) {
            try {
              step(generator.next(value));
            } catch (e) {
              reject(e);
            }
          }

          function rejected(value) {
            try {
              step(generator["throw"](value));
            } catch (e) {
              reject(e);
            }
          }

          function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
          }

          step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
      };

      var SignalRService = /*#__PURE__*/function () {
        function SignalRService() {
          _classCallCheck(this, SignalRService);

          this.isConected = false;
          this.enterRoom$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
          this.sendEstimate$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
          this.startNewVoting$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
          this.revealCards$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
          this.createNewIssues$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        }

        _createClass(SignalRService, [{
          key: "startConnection",
          value: function startConnection() {
            return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee16() {
              var _this4 = this;

              return _regeneratorRuntime().wrap(function _callee16$(_context16) {
                while (1) {
                  switch (_context16.prev = _context16.next) {
                    case 0:
                      this.hubConnection = new _microsoft_signalr__WEBPACK_IMPORTED_MODULE_1__["HubConnectionBuilder"]().withUrl('http://localhost:5000/voting').build();
                      this.hubConnection.serverTimeoutInMilliseconds = 100000000;
                      _context16.next = 4;
                      return this.hubConnection.start().then(function () {
                        console.log('Connection started');
                        _this4.isConected = true;
                      })["catch"](function (err) {
                        return console.log('Error while starting connection: ' + err);
                      });

                    case 4:
                      this.hubConnection.on("Receive", function (message) {
                        console.log(message);

                        _this4.enterRoom$.next(message);
                      });
                      this.hubConnection.on("ChangingEstimate", function (message) {
                        console.log(message);

                        _this4.sendEstimate$.next(message);
                      });
                      this.hubConnection.on("StartNewVoting", function (message) {
                        console.log(message);

                        _this4.startNewVoting$.next(message);
                      });
                      this.hubConnection.on("RevealCards", function () {
                        _this4.revealCards$.next();
                      });
                      this.hubConnection.on("IssuesListChanged", function (message) {
                        console.log(message);

                        _this4.createNewIssues$.next(message);
                      });

                    case 9:
                    case "end":
                      return _context16.stop();
                  }
                }
              }, _callee16, this);
            }));
          }
        }, {
          key: "enterRoom",
          value: function enterRoom(roomId, roomName) {
            return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee17() {
              return _regeneratorRuntime().wrap(function _callee17$(_context17) {
                while (1) {
                  switch (_context17.prev = _context17.next) {
                    case 0:
                      _context17.next = 2;
                      return this.hubConnection.invoke("Conect", roomName, roomId).then(function (data) {
                        console.log("enterRoomOK");
                        console.log(data);
                      })["catch"](function (err) {
                        return console.error(err.toString());
                      });

                    case 2:
                    case "end":
                      return _context17.stop();
                  }
                }
              }, _callee17, this);
            }));
          }
        }, {
          key: "sendEstimate",
          value: function sendEstimate(userEstimate, roomName) {
            return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee18() {
              return _regeneratorRuntime().wrap(function _callee18$(_context18) {
                while (1) {
                  switch (_context18.prev = _context18.next) {
                    case 0:
                      console.log(userEstimate);
                      console.log(roomName);
                      _context18.next = 4;
                      return this.hubConnection.invoke("Voting", userEstimate.Estimate, userEstimate.Id, roomName).then(function (data) {
                        console.log("sendEstimateOK");
                        console.log(data);
                      })["catch"](function (err) {
                        return console.error(err.toString());
                      });

                    case 4:
                    case "end":
                      return _context18.stop();
                  }
                }
              }, _callee18, this);
            }));
          }
        }, {
          key: "disconeconectRoom",
          value: function disconeconectRoom(roomId, roomName) {
            return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee19() {
              return _regeneratorRuntime().wrap(function _callee19$(_context19) {
                while (1) {
                  switch (_context19.prev = _context19.next) {
                    case 0:
                      _context19.next = 2;
                      return this.hubConnection.invoke("Disconeconect", roomName, roomId).then(function (data) {
                        console.log("disconeconectRoomOK");
                        console.log(data);
                      })["catch"](function (err) {
                        return console.error(err.toString());
                      });

                    case 2:
                    case "end":
                      return _context19.stop();
                  }
                }
              }, _callee19, this);
            }));
          }
        }, {
          key: "startNewVoting",
          value: function startNewVoting(roomId) {
            return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee20() {
              return _regeneratorRuntime().wrap(function _callee20$(_context20) {
                while (1) {
                  switch (_context20.prev = _context20.next) {
                    case 0:
                      _context20.next = 2;
                      return this.hubConnection.invoke("StartNewVoting", roomId).then(function (data) {
                        console.log("startNewVotingOK");
                        console.log(data);
                      })["catch"](function (err) {
                        return console.error(err.toString());
                      });

                    case 2:
                    case "end":
                      return _context20.stop();
                  }
                }
              }, _callee20, this);
            }));
          }
        }, {
          key: "revealCards",
          value: function revealCards(roomId, estimation) {
            var issueId = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "";
            return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee21() {
              return _regeneratorRuntime().wrap(function _callee21$(_context21) {
                while (1) {
                  switch (_context21.prev = _context21.next) {
                    case 0:
                      _context21.next = 2;
                      return this.hubConnection.invoke("RevealCards", roomId, estimation, issueId).then(function (data) {
                        console.log("revealCardsOK");
                        console.log(data);
                      })["catch"](function (err) {
                        return console.error(err.toString());
                      });

                    case 2:
                    case "end":
                      return _context21.stop();
                  }
                }
              }, _callee21, this);
            }));
          }
        }, {
          key: "createNewIssue",
          value: function createNewIssue(roomId, issueName) {
            return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee22() {
              return _regeneratorRuntime().wrap(function _callee22$(_context22) {
                while (1) {
                  switch (_context22.prev = _context22.next) {
                    case 0:
                      _context22.next = 2;
                      return this.hubConnection.invoke("CreateNewIssueAsync", roomId, issueName).then(function (data) {
                        console.log("CreateNewIssueAsync");
                        console.log(data);
                      })["catch"](function (err) {
                        return console.error(err.toString());
                      });

                    case 2:
                    case "end":
                      return _context22.stop();
                  }
                }
              }, _callee22, this);
            }));
          }
        }, {
          key: "updateIssue",
          value: function updateIssue(roomId, issueId, name, description, priority, link, estimation) {
            return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee23() {
              return _regeneratorRuntime().wrap(function _callee23$(_context23) {
                while (1) {
                  switch (_context23.prev = _context23.next) {
                    case 0:
                      _context23.next = 2;
                      return this.hubConnection.invoke("UpdateIssue", roomId, issueId, name, description, priority, link, estimation.toString()).then(function (data) {
                        console.log("UpdateIssue");
                        console.log(data);
                      })["catch"](function (err) {
                        return console.error(err.toString());
                      });

                    case 2:
                    case "end":
                      return _context23.stop();
                  }
                }
              }, _callee23, this);
            }));
          }
        }, {
          key: "deleteIssue",
          value: function deleteIssue(roomId, issueId) {
            return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee24() {
              return _regeneratorRuntime().wrap(function _callee24$(_context24) {
                while (1) {
                  switch (_context24.prev = _context24.next) {
                    case 0:
                      _context24.next = 2;
                      return this.hubConnection.invoke("DeleteIssue", roomId, issueId).then(function (data) {
                        console.log("DeleteIssue");
                        console.log(data);
                      })["catch"](function (err) {
                        return console.error(err.toString());
                      });

                    case 2:
                    case "end":
                      return _context24.stop();
                  }
                }
              }, _callee24, this);
            }));
          }
        }]);

        return SignalRService;
      }();

      SignalRService.ɵfac = function SignalRService_Factory(t) {
        return new (t || SignalRService)();
      };

      SignalRService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: SignalRService,
        factory: SignalRService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SignalRService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "./src/main.ts":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function srcMainTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/platform-browser-dynamic */
      "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/fesm2015/core.js");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "./src/app/app.module.ts");

      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
      var platform = Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_0__["platformBrowserDynamic"])();
      platform.bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"]);
      /***/
    },

    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! C:\Учеба\Диплом\Diplom\WebClient\src\main.ts */
      "./src/main.ts");
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map