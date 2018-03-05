System.register(['@angular/core', '@angular/common', '@angular/forms', '@angular/router', './register.routers', './register.component', './thankyou/thankyou.component'], function(exports_1, context_1) {
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
    var core_1, common_1, forms_1, router_1, register_routers_1, register_component_1, thankyou_component_1;
    var RegisterModule;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (forms_1_1) {
                forms_1 = forms_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (register_routers_1_1) {
                register_routers_1 = register_routers_1_1;
            },
            function (register_component_1_1) {
                register_component_1 = register_component_1_1;
            },
            function (thankyou_component_1_1) {
                thankyou_component_1 = thankyou_component_1_1;
            }],
        execute: function() {
            RegisterModule = (function () {
                function RegisterModule() {
                }
                RegisterModule = __decorate([
                    core_1.NgModule({
                        imports: [
                            common_1.CommonModule,
                            forms_1.FormsModule,
                            router_1.RouterModule.forChild(register_routers_1.RegisterRoutes),
                        ],
                        declarations: [
                            register_component_1.RegisterComponent,
                            thankyou_component_1.ThankyouComponent,
                        ]
                    }), 
                    __metadata('design:paramtypes', [])
                ], RegisterModule);
                return RegisterModule;
            }());
            exports_1("RegisterModule", RegisterModule);
        }
    }
});
//# sourceMappingURL=register.module.js.map