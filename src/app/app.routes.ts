import { TaskboardComponent } from './taskboard/taskboard.component';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
    {path: '', redirectTo: 'taskboard', pathMatch: 'full'},
    {path: 'taskboard', component: TaskboardComponent}
];

export const routing = RouterModule.forRoot(appRoutes);