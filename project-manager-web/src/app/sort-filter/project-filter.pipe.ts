import { Pipe, PipeTransform } from '@angular/core';
import { Project } from '../model/project';
import { ViewProjectComponent } from '../project/view-project/view-project.component';

@Pipe({
  name: 'projectFilter'
})
export class ProjectFilterPipe implements PipeTransform {

  constructor(private viewProjectComponent: ViewProjectComponent) {}

  transform(projects: Project[], projectName: string, priority: number, noOfTasks: number, completed: number, startDate: string, endDate: string): Project[] {
    if ((undefined === projectName || '' == projectName)
        && (undefined === priority || '' == priority.toString()) 
        && (undefined === noOfTasks || '' == noOfTasks.toString()) 
        && (undefined === completed || '' == completed.toString()) 
        && (undefined === startDate || '' == startDate)
        && (undefined === endDate || '' == endDate)) {
      return projects;
    }
    return projects.filter(function(project) {
      if (projectName && project.projectName) {
        return project.projectName.toLowerCase().includes(projectName.toLowerCase());
      } 
      if (priority && project.priority) {
        return project.priority == priority;
      }
      if (noOfTasks && project.noOfTasks) {
        return project.noOfTasks == noOfTasks;
      } else if (noOfTasks > -1 && project.noOfTasks > -1) {
        return project.noOfTasks == noOfTasks;
      }
      if (completed && project.completed) {
        return project.completed == completed;
      } else if (completed > -1 && project.completed > -1) {
        return project.completed == completed;
      }
      if (startDate && project.startDate) {
        return Date.parse(project.startDate) >= Date.parse(startDate);
      } 
      if (endDate && project.endDate) {
        return Date.parse(project.endDate) <= Date.parse(endDate);
      }
    });
  }
}
