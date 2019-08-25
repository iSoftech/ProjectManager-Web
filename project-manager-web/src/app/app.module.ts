import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule} from '@angular/http'; 
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './nav-bar/navbar.component';
import { AddTaskComponent } from './task/add-task/add-task.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EditTaskComponent } from './task/edit-task/edit-task.component';
import { ViewTaskComponent } from './task/view-task/view-task.component';
import { UserService } from './api-service/user.service';
import { ProjectService } from './api-service/project.service';
import { TaskService } from './api-service/task.service';
import { OrderByTaskNamePipe } from './sort-filter/order-by-task-name.pipe';
import { TaskFilterPipe } from './sort-filter/task-filter.pipe';
import { AddUserComponent } from './user/add-user/add-user.component';
import { ViewUserComponent } from './user/view-user/view-user.component';
import { EditUserComponent } from './user/edit-user/edit-user.component';
import { AddProjectComponent } from './project/add-project/add-project.component';
import { ViewProjectComponent } from './project/view-project/view-project.component';
import { EditProjectComponent } from './project/edit-project/edit-project.component';
import { UserFilterPipe } from './sort-filter/user-filter.pipe';
import { ProjectFilterPipe } from './sort-filter/project-filter.pipe';
import { OrderByProjectNamePipe } from './sort-filter/order-by-project-name.pipe';
import { OrderByEmployeeIdPipe } from './sort-filter/order-by-employee-id.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AddTaskComponent,
    EditTaskComponent,
    ViewTaskComponent,
    OrderByTaskNamePipe,
    TaskFilterPipe,
    AddUserComponent,
    ViewUserComponent,
    EditUserComponent,
    AddProjectComponent,
    ViewProjectComponent,
    EditProjectComponent,
    UserFilterPipe,
    ProjectFilterPipe,
    OrderByProjectNamePipe,
    OrderByEmployeeIdPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    HttpModule
  ],
  providers: [UserService, ProjectService, TaskService],
  bootstrap: [AppComponent]
})
export class AppModule { }
