import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'nav-bar',
    templateUrl: 'navbar.component.html'
})
export class NavbarComponent {

    @Input() addTaskSelected: string;
    @Input() viewTasksSelected: string;
    @Input() addUserSelected: string;
    @Input() viewUsersSelected: string;
    @Input() addProjectSelected: string;
    @Input() viewProjectsSelected: string;
    
    constructor(private router: Router) { }

    addTask(): void {
        this.router.navigate(['add-task']);
    }

    viewTasks(): void {
        this.router.navigate(['view-tasks']);
    }

    addUser(): void {
        this.router.navigate(['add-user']);
    }

    viewUsers(): void {
        this.router.navigate(['view-users']);
    }

    addProject(): void {
        this.router.navigate(['add-project']);
    }

    viewProjects(): void {
        this.router.navigate(['view-projects']);
    }
}