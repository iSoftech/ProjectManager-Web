import { Pipe, PipeTransform } from '@angular/core';
import { Project } from '../model/project';
import { ViewProjectComponent } from '../project/view-project/view-project.component';

@Pipe({
  name: 'orderByProjectName',
  pure: false
})
export class OrderByProjectNamePipe implements PipeTransform {

  constructor(private viewProjectComponent: ViewProjectComponent) {}

  transform(projects: Project[]): Project[] {
    this.viewProjectComponent.sort();
    return this.viewProjectComponent.projects;
  }

}
