import { TaskboardComponent } from './taskboard/taskboard.component';
import { RouterModule, Routes } from '@angular/router';

import { SobrePageComponent } from './sobre/sobre-page.component';
import { AcervoComponent } from './acervo/acervo.component';

const appRoutes: Routes = [
    {path: '', redirectTo: 'taskboard', pathMatch: 'full'},
    {path: 'taskboard', component: TaskboardComponent},
    {path: 'livros', component: AcervoComponent},
    {path: 'sobre-page', component: SobrePageComponent}
];

export const routing = RouterModule.forRoot(appRoutes);