"use strict";
var taskboard_component_1 = require('./taskboard/taskboard.component');
var router_1 = require('@angular/router');
var appRoutes = [
    { path: '', redirectTo: 'taskboard', pathMatch: 'full' },
    { path: 'taskboard', component: taskboard_component_1.TaskboardComponent }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routes.js.map