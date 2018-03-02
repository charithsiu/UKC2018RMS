System.register(['@angular/core', '@angular/router', '../authentication.service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, authentication_service_1;
    var SigninComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (authentication_service_1_1) {
                authentication_service_1 = authentication_service_1_1;
            }],
        execute: function() {
            SigninComponent = (function () {
                function SigninComponent(_authenticationService, _router) {
                    this._authenticationService = _authenticationService;
                    this._router = _router;
                    this.credentials = {};
                }
                SigninComponent.prototype.signin = function () {
                    var _this = this;
                    this._authenticationService.signin(this.credentials).subscribe(function (result) { return _this._router.navigate(['/']); }, function (error) { return _this.errorMessage = error; });
                };
                SigninComponent = __decorate([
                    core_1.Component({
                        selector: 'signin',
                        templateUrl: 'app/authentication/signin/signin.template.html'
                    }), 
                    __metadata('design:paramtypes', [authentication_service_1.AuthenticationService, router_1.Router])
                ], SigninComponent);
                return SigninComponent;
            }());
            exports_1("SigninComponent", SigninComponent);
        }
    }
});
//# sourceMappingURL=signin.component.js.map