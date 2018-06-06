import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'
import { RunPageComponent } from './page/run-page/run-page.component';
import { EditPageComponent } from './page/edit-page/edit-page.component';
import { CreatePageComponent } from './page/create-page/create-page.component';
import { ListProcessComponent } from './component/list-process/list-process.component';

export const appRoutes: Routes = [
    { path: 'run', component: RunPageComponent },
    { path: 'list', component: ListProcessComponent },
    { path: 'edit', component: EditPageComponent },
    { path: 'create', component: CreatePageComponent },
    { path: '', redirectTo: '/run', pathMatch: 'full' },
];