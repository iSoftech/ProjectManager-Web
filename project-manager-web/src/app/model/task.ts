import { ParentTask } from "./parentTask";
import { User } from "./user";
import { Project } from "./project";

export class Task {
    taskId: number = 0;
    taskName: string = '';
    priority: number = 15;
    startDate: string = '';
    endDate: string = '';
    active: string = '';
    isParentTask: string = '';
    parentTask = new ParentTask();
    user = new User();
    project = new Project();
}