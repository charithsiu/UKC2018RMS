System.register(['./register.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var register_component_1;
    var RegisterRoutes;
    return {
        setters:[
            function (register_component_1_1) {
                register_component_1 = register_component_1_1;
            }],
        execute: function() {
            exports_1("RegisterRoutes", RegisterRoutes = [{
                    path: 'register',
                    component: register_component_1.RegisterComponent,
                    children: [],
                }]);
        }
    }
});
//# sourceMappingURL=register.routers.js.map