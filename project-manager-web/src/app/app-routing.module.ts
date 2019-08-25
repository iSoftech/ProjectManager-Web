import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddTaskComponent } from './task/add-task/add-task.component';
import { ViewTaskComponent } from './task/view-task/view-task.component';
import { EditTaskComponent } from './task/edit-task/edit-task.component';
import { AddUserComponent } from './user/add-user/add-user.component';
import { ViewUserComponent } from './user/view-user/view-user.component';
import { EditUserComponent } from './user/edit-user/edit-user.component';
import { AddProjectComponent } from './project/add-project/add-project.component';
import { ViewProjectComponent } from './project/view-project/view-project.component';
import { EditProjectComponent } from './project/edit-project/edit-project.component';

const routes: Routes = [
    { path: '', redirectTo: 'view-users', pathMatch: 'full' },
    { path: 'view-users', component: ViewUserComponent },
    { path: 'add-user', component: AddUserComponent },
    { path: 'edit-user', component: EditUserComponent },
    { path: 'view-projects', component: ViewProjectComponent },
    { path: 'add-project', component: AddProjectComponent },
    { path: 'edit-project', component: EditProjectComponent },
    { path: 'view-tasks', component: ViewTaskComponent },
    { path: 'add-task', component: AddTaskComponent },
    { path: 'edit-task', component: EditTaskComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
