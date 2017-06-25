"use strict";
var taskboard_component_1 = require('./taskboard/taskboard.component');
var router_1 = require('@angular/router');
var sobre_page_component_1 = require('./sobre/sobre-page.component');
var acervo_component_1 = require('./acervo/acervo.component');
var appRoutes = [
    { path: '', redirectTo: 'taskboard', pathMatch: 'full' },
    { path: 'taskboard', component: taskboard_component_1.TaskboardComponent },
    { path: 'livros', component: acervo_component_1.AcervoComponent },
    { path: 'sobre-page', component: sobre_page_component_1.SobrePageComponent }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routes.js.map