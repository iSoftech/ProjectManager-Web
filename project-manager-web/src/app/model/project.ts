import { User } from "./user";

export class Project {
    projectId: number = 0;
    projectName: string = '';
    priority: number = 15;
    startDate: string = '';
    endDate: string = '';
    active: string = '';
    user = new User();
    noOfTasks: number = 0;
    completed: number = 0;
}