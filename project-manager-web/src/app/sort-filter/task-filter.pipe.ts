import { Pipe, PipeTransform } from '@angular/core';
import { Task } from '../model/task';
import { ViewTaskComponent } from '../task/view-task/view-task.component';

@Pipe({
  name: 'taskFilter'
})
export class TaskFilterPipe implements PipeTransform {

  constructor(private viewTaskComponent: ViewTaskComponent) {}

  transform(tasks: Task[], projectName: string, taskName: string, parentTaskName: string, priority: number, startDate: string, endDate: string): Task[] {
    if ((undefined === projectName || '' == projectName)
        && (undefined === taskName || '' == taskName)
        && (undefined === parentTaskName || '' == parentTaskName)
        && (undefined === priority || '' == priority.toString()) 
        && (undefined === startDate || '' == startDate)
        && (undefined === endDate || '' == endDate)) {
      return tasks;
    }
    return tasks.filter(function(task) {
      if (projectName && task.project.projectName) {
        return task.project.projectName.toLowerCase().includes(projectName.toLowerCase());
      } 
      if (taskName && task.taskName) {
        return task.taskName.toLowerCase().includes(taskName.toLowerCase());
      } 
      if (parentTaskName && task.parentTask) {
        return task.parentTask.parentTaskName.toLowerCase().includes(parentTaskName.toLowerCase());
      } 
      if (priority && task.priority) {
        return task.priority == priority;
      }
      if (startDate && task.startDate) {
        return Date.parse(task.startDate) >= Date.parse(startDate);
      } 
      if (endDate && task.endDate) {
        return Date.parse(task.endDate) <= Date.parse(endDate);
      }
    });
  }
}
