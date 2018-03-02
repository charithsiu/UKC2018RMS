System.register(['./thankyou.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var thankyou_component_1;
    var ThankyouRoutes;
    return {
        setters:[
            function (thankyou_component_1_1) {
                thankyou_component_1 = thankyou_component_1_1;
            }],
        execute: function() {
            exports_1("ThankyouRoutes", ThankyouRoutes = [{
                    path: 'thankyou',
                    component: thankyou_component_1.ThankyouComponent,
                }]);
        }
    }
});
//# sourceMappingURL=thankyou.routes.js.map