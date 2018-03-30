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
    var Register_step2Component;
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
            Register_step2Component = (function () {
                function Register_step2Component(_registerService, _router, _route) {
                    this._registerService = _registerService;
                    this._router = _router;
                    this._route = _route;
                    this.register = {};
                }
                /* signup() {
                this._registerService.signup(this.register)
                                          .subscribe(result  => this._router.navigate(['/thankyou']),
                                                      error =>  this.errorMessage = error);
                } */
                Register_step2Component.prototype.ngOnInit = function () {
                    var _this = this;
                    this.paramsObserver = this._route.params.subscribe(function (params) {
                        var registerId = params['registerId'];
                        console.log(registerId);
                        _this._registerService.read(registerId).subscribe(function (register) {
                            _this.register = register;
                        }, function (error) { return _this._router.navigate(['/register/step1']); });
                    });
                };
                Register_step2Component.prototype.ngOnDestroy = function () {
                    this.paramsObserver.unsubscribe();
                };
                Register_step2Component.prototype.ngAfterViewInit = function () {
                    $(document).ready(function () {
                        $("#room").hide();
                        $("#broom").hide();
                        var price = 0.00;
                        $('input[type=radio][name=sharedsuiterb]').change(function () {
                            //var bla = $('#txt_name').val();
                            if (this.value == 'false') {
                                price = 300.00;
                                alert("Your price:" + price);
                                $("#room").hide();
                                $("#broom").hide();
                            }
                            else {
                                $("#broom").show();
                            }
                        });
                        $('input[type=radio][name=sharedbrrb]').change(function () {
                            if (this.value == 'false') {
                                price = 170.00;
                                alert("Your price:" + price);
                                $("#room").hide();
                            }
                            else {
                                $("#room").show();
                            }
                        });
                        $('input[type=radio][name=sharedroomrb]').change(function () {
                            if (this.value == 'false') {
                                price = 120.00;
                                alert("Your price:" + price);
                            }
                            else {
                                price = 90.00;
                                alert("Your price:$" + price);
                            }
                        });
                        $('#adultselect').change(function () {
                            //var bla = $('#txt_name').val();
                            alert("test");
                            /* if (this.value == 'false') {
                        
                            }else{
                               
                            }*/
                        });
                        //$('#registerform')[0].reset();
                        //location.reload();
                        // $('#termselect').val("Spring 2018").val();
                        //$('#programselect').val("IST Online Program").val();
                        //$("#programselect option[text='IST Online Program']").attr("selected","selected"); 
                    });
                };
                Register_step2Component = __decorate([
                    core_1.Component({
                        selector: 'step2',
                        templateUrl: 'app/register/step2/register_step2.template.html',
                        providers: [register_service_1.RegisterService]
                    }), 
                    __metadata('design:paramtypes', [register_service_1.RegisterService, router_1.Router, router_1.ActivatedRoute])
                ], Register_step2Component);
                return Register_step2Component;
            }());
            exports_1("Register_step2Component", Register_step2Component);
        }
    }
});
//# sourceMappingURL=register_step2.component.js.map