import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Project } from '../../model/project';
import { ProjectService } from '../../api-service/project.service';
import { Router } from '@angular/router';
import {first} from "rxjs/operators";

@Component({
  selector: 'edit-project',
  templateUrl: './edit-project.component.html',
  styleUrls: ['./edit-project.component.css']
})
export class EditProjectComponent implements OnInit {

  editProjectForm: FormGroup;
  
  constructor(private formBuilder: FormBuilder, private projectService: ProjectService, private router: Router) {
  }

  ngOnInit() {
    let selectedProjectId = window.localStorage.getItem("selectedProjectId");
    if (selectedProjectId) {
      this.editProjectForm = this.initializeFormGroup(this.formBuilder);
      this.getProject(selectedProjectId);
    }
  }

  initializeFormGroup(formBuilder: FormBuilder) {
    return formBuilder.group({ 
        projectId: [''],
        projectName: ['', Validators.required],
        user: formBuilder.group({
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

  getProject(projectId: any) {
    this.projectService.getProject(projectId).subscribe(data => {
      this.editProjectForm.setValue(data.response);
    });
  }

  updateProject() {
    const editedProject: Project = Object.assign({}, this.editProjectForm.value);
    editedProject.user = Object.assign({}, editedProject.user);
    this.projectService.updateProject(editedProject)
      .pipe(first())
      .subscribe(data => {
          if (data.statusCode == 201) {
            alert("You've successfully updated the Project!");
            this.router.navigate(['view-projects']);
          } else {
            alert(data.message);
          }
        }, error => {
          alert("Sorry! Something went wrong, update cannot be possible at the moment. Please try again.");
      });
  }

  onSubmit() {
    this.updateProject();
  }

  cancelEdit(): void {
    this.router.navigate(['view-projects']);
  }

}
