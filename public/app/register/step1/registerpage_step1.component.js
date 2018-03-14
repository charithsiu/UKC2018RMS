System.register(['@angular/core', '@angular/router', '../register.service'], function(exports_1, context_1) {
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
    var core_1, router_1, register_service_1;
    var Registerpage_step1Component;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (register_service_1_1) {
                register_service_1 = register_service_1_1;
            }],
        execute: function() {
            Registerpage_step1Component = (function () {
                function Registerpage_step1Component(_registerService, _router) {
                    this._registerService = _registerService;
                    this._router = _router;
                    this.register = {};
                }
                Registerpage_step1Component.prototype.signup = function () {
                    var _this = this;
                    this._registerService.signup(this.register)
                        .subscribe(function (result) { return _this._router.navigate(['/thankyou']); }, function (error) { return _this.errorMessage = error; });
                };
                Registerpage_step1Component.prototype.ngAfterViewInit = function () {
                    $(document).ready(function () {
                        //alert("Hello");
                        //$('#registerform')[0].reset();
                        //location.reload();
                        // $('#termselect').val("Spring 2018").val();
                        //$('#programselect').val("IST Online Program").val();
                        //$("#programselect option[text='IST Online Program']").attr("selected","selected"); 
                    });
                };
                Registerpage_step1Component = __decorate([
                    core_1.Component({
                        selector: 'regpage_f',
                        templateUrl: 'app/register/step1/registerpage_step1.template.html',
                        providers: [register_service_1.RegisterService]
                    }), 
                    __metadata('design:paramtypes', [register_service_1.RegisterService, router_1.Router])
                ], Registerpage_step1Component);
                return Registerpage_step1Component;
            }());
            exports_1("Registerpage_step1Component", Registerpage_step1Component);
        }
    }
});
//# sourceMappingURL=registerpage_step1.component.js.map