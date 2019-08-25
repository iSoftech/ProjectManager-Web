import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Project } from '../../model/project';
import { ProjectService } from '../../api-service/project.service';
import { Router } from '@angular/router';
import { first } from "rxjs/operators";

@Component({
  selector: 'add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.css']
})
export class AddProjectComponent {

  addProjectForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private projectService: ProjectService, private router: Router) {
      this.addProjectForm = this.initializeFormGroup();
  }

  initializeFormGroup(): FormGroup {
      return this.formBuilder.group({
          projectId: [''],
          projectName: ['', Validators.required],
          user: this.formBuilder.group({
              userId: [''],
              employeeId: ['', Validators.required],
              firstName: [''],
              lastName: [''],
              active: ['']
          }),
          priority: ['15', Validators.compose([Validators.required, Validators.min(0), Validators.max(30)])],
          startDate: [''],
          endDate: [''],
          active: ['Y'],
          noOfTasks: [''],
          completed: ['']
      });
   }

  addProject() {
      const newProject: Project = Object.assign({}, this.addProjectForm.value);
      newProject.user = Object.assign({}, newProject.user);
      this.projectService.addProject(newProject)
      .pipe(first())
      .subscribe(
          data => {
              if (data.statusCode == 201) {
                  alert("You've successfully added a new Project!");
                  this.router.navigate(['view-projects']);
              } else {
                  alert(data.message);
              }
          }, 
          error => {
              alert("Sorry! Something went wrong, new project cannot be added at the moment. Please try again.");
          }
      );
  }

  onSubmit() {
      this.addProject();
  }

  reset() {
      this.addProjectForm.reset({
          projectId: '',
          projectName: '',
          user: ({
              userId: '',
              employeeId: ''
          }),
          priority: '15',
          startDate: '',
          endDate: '',
          active: 'Y'
      });
  }

}
