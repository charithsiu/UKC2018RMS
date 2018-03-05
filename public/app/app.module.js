System.register(['@angular/core', '@angular/platform-browser', '@angular/forms', '@angular/router', '@angular/http', './app.component', './app.routes', './home/home.module', './authentication/authentication.service', './authentication/authentication.module', './articles/articles.module', './register/register.module', './thankyou/thankyou.module'], function(exports_1, context_1) {
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
    var core_1, platform_browser_1, forms_1, router_1, http_1, app_component_1, app_routes_1, home_module_1, authentication_service_1, authentication_module_1, articles_module_1, register_module_1, thankyou_module_1;
    var AppModule;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (platform_browser_1_1) {
                platform_browser_1 = platform_browser_1_1;
            },
            function (forms_1_1) {
                forms_1 = forms_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (app_component_1_1) {
                app_component_1 = app_component_1_1;
            },
            function (app_routes_1_1) {
                app_routes_1 = app_routes_1_1;
            },
            function (home_module_1_1) {
                home_module_1 = home_module_1_1;
            },
            function (authentication_service_1_1) {
                authentication_service_1 = authentication_service_1_1;
            },
            function (authentication_module_1_1) {
                authentication_module_1 = authentication_module_1_1;
            },
            function (articles_module_1_1) {
                articles_module_1 = articles_module_1_1;
            },
            function (register_module_1_1) {
                register_module_1 = register_module_1_1;
            },
            function (thankyou_module_1_1) {
                thankyou_module_1 = thankyou_module_1_1;
            }],
        execute: function() {
            AppModule = (function () {
                function AppModule() {
                }
                AppModule = __decorate([
                    core_1.NgModule({
                        imports: [
                            platform_browser_1.BrowserModule,
                            http_1.HttpModule,
                            forms_1.FormsModule,
                            authentication_module_1.AuthenticationModule,
                            home_module_1.HomeModule,
                            articles_module_1.ArticlesModule,
                            register_module_1.RegisterModule,
                            thankyou_module_1.ThankyouModule,
                            router_1.RouterModule.forRoot(app_routes_1.AppRoutes),
                        ],
                        declarations: [
                            app_component_1.AppComponent
                        ],
                        providers: [
                            authentication_service_1.AuthenticationService
                        ],
                        bootstrap: [app_component_1.AppComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppModule);
                return AppModule;
            }());
            exports_1("AppModule", AppModule);
        }
    }
});
//# sourceMappingURL=app.module.js.map