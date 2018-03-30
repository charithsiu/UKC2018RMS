System.register(['./register.component', './step1/register_step1.component', './step2/register_step2.component', './step3/register_step3.component', './step4/register_step4.component', './step5/register_step5.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var register_component_1, register_step1_component_1, register_step2_component_1, register_step3_component_1, register_step4_component_1, register_step5_component_1;
    var RegisterRoutes;
    return {
        setters:[
            function (register_component_1_1) {
                register_component_1 = register_component_1_1;
            },
            function (register_step1_component_1_1) {
                register_step1_component_1 = register_step1_component_1_1;
            },
            function (register_step2_component_1_1) {
                register_step2_component_1 = register_step2_component_1_1;
            },
            function (register_step3_component_1_1) {
                register_step3_component_1 = register_step3_component_1_1;
            },
            function (register_step4_component_1_1) {
                register_step4_component_1 = register_step4_component_1_1;
            },
            function (register_step5_component_1_1) {
                register_step5_component_1 = register_step5_component_1_1;
            }],
        execute: function() {
            exports_1("RegisterRoutes", RegisterRoutes = [{
                    path: 'register',
                    component: register_component_1.RegisterComponent,
                    children: [
                        { path: 'step1', component: register_step1_component_1.Register_step1Component },
                        { path: ':registerId/step2', component: register_step2_component_1.Register_step2Component },
                        { path: 'step3', component: register_step3_component_1.Register_step3Component },
                        { path: 'step4', component: register_step4_component_1.Register_step4Component },
                        { path: 'step5', component: register_step5_component_1.Register_step5Component },
                    ],
                }]);
        }
    }
});
//# sourceMappingURL=register.routers.js.map