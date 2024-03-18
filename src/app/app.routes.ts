import { Routes } from '@angular/router';
import { TodolistComponent } from './todolist/todolist.component';
import { AddTdlComponent } from './add-tdl/add-tdl.component';
import { EditTdlComponent } from './edit-tdl/edit-tdl.component';

export const routes: Routes = [
    {path: '', redirectTo: '/list', pathMatch: 'full'},
    {path: 'list', component: TodolistComponent},
    {path: 'add', component: AddTdlComponent},
    {path: 'edit/:id', component: EditTdlComponent},
];
