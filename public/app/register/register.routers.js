System.register(['./register.component', './regpage_f/registerpage_f.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var register_component_1, registerpage_f_component_1;
    var RegisterRoutes;
    return {
        setters:[
            function (register_component_1_1) {
                register_component_1 = register_component_1_1;
            },
            function (registerpage_f_component_1_1) {
                registerpage_f_component_1 = registerpage_f_component_1_1;
            }],
        execute: function() {
            exports_1("RegisterRoutes", RegisterRoutes = [{
                    path: 'register',
                    component: register_component_1.RegisterComponent,
                    children: [
                        { path: 'regpage_f', component: registerpage_f_component_1.RegisterPage_FComponent },
                    ],
                }]);
        }
    }
});
//# sourceMappingURL=register.routers.js.map