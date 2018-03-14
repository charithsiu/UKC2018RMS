System.register(['./register.component', './step1/registerpage_step1.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var register_component_1, registerpage_step1_component_1;
    var RegisterRoutes;
    return {
        setters:[
            function (register_component_1_1) {
                register_component_1 = register_component_1_1;
            },
            function (registerpage_step1_component_1_1) {
                registerpage_step1_component_1 = registerpage_step1_component_1_1;
            }],
        execute: function() {
            exports_1("RegisterRoutes", RegisterRoutes = [{
                    path: 'register',
                    component: register_component_1.RegisterComponent,
                    children: [
                        { path: 'step1', component: registerpage_step1_component_1.Registerpage_step1Component },
                    ],
                }]);
        }
    }
});
//# sourceMappingURL=register.routers.js.map