import { Component, OnInit } from '@angular/core';
import { Project } from '../../model/project';
import { ProjectService } from '../../api-service/project.service';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';

@Component({
  selector: 'view-project',
  templateUrl: './view-project.component.html',
  styleUrls: ['./view-project.component.css']
})
export class ViewProjectComponent implements OnInit {

  projects: Project[];
  
  constructor(private projectService: ProjectService, private router: Router) {}

  ngOnInit() {
    this.viewProjects();
  }

  viewProjects() {
    this.projectService.getAllProjects().subscribe(data => {
      this.projects = data.response; 
     // this.sort();
    });
  }

  editProject(project: Project) {
    window.localStorage.removeItem('selectedProjectId');
    window.localStorage.setItem('selectedProjectId', project.projectId.toString());
    this.router.navigate(['edit-project']);
  }

  prepareEndProject(project: Project) {
    window.localStorage.removeItem('selectedProjectId');
    window.localStorage.setItem('selectedProjectId', project.projectId.toString());
  }

  endProject() {
    let selectedProjectId: any = window.localStorage.getItem('selectedProjectId');
    if (selectedProjectId) {
      let selectedProject: Project;
      this.projectService.getProject(selectedProjectId).subscribe(data => {
        selectedProject = data.response;
        selectedProject.active = 'N';
        this.projectService.updateProject(selectedProject).pipe(first())
        .subscribe(data => {
            if (data.statusCode == 201) {
              setTimeout("2000");
              alert("You've successfully suspended a Project!");
              this.ngOnInit();
            } else {
              alert(data.message);
            }
          }, error => {
            alert("Sorry! Something went wrong, update cannot be possible at the moment. Please try again.");
        });
      });
    }
  }

  sort() {
    this.projects.sort((t1: Project, t2: Project) => {
      let num = t1.projectName.localeCompare(t2.projectName);
      if (num < 0) {
        return -1;
      } else if (num > 0) {
        return 1;
      } else {
        return 0;
      }
    });
  }

}
