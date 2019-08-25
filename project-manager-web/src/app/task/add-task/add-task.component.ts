import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Task } from '../../model/task';
import { TaskService } from '../../api-service/task.service';
import { Router } from '@angular/router';
import { first } from "rxjs/operators";

@Component({
    selector: 'add-task',
    templateUrl: './add-task.component.html',
    styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent {

    addTaskForm: FormGroup;

    constructor(private formBuilder: FormBuilder, private taskService: TaskService, private router: Router) {
        this.addTaskForm = this.initializeFormGroup();
    }

    initializeFormGroup(): FormGroup {
        return this.formBuilder.group({
            taskId: [''],
            taskName: ['', Validators.required],
            isParentTask: [''],
            parentTask: this.formBuilder.group({
                parentTaskId: [''],
                parentTaskName: ['']
            }),
            priority: ['15', Validators.compose([Validators.required, Validators.min(0), Validators.max(30)])],
            startDate: ['', Validators.required],
            endDate: ['', Validators.required],
            active: ['Y'],
            project: this.formBuilder.group({
                projectId: [''],
                projectName: ['', Validators.required],
                priority: [''],
                startDate: [''],
                endDate: [''],
                active: [''],
                noOfTasks: [''],
                completed: [''],
                user: this.formBuilder.group({
                    userId: [''],
                    employeeId: [''],
                    firstName: [''],
                    lastName: [''],
                    active: ['']
                })
            }),
            user: this.formBuilder.group({
                userId: [''],
                employeeId: ['', Validators.required],
                firstName: [''],
                lastName: [''],
                active: ['']
            })
        });
     }

    addTask() {
        const newTask: Task = Object.assign({}, this.addTaskForm.value);
        newTask.parentTask = Object.assign({}, newTask.parentTask);
        newTask.project = Object.assign({}, newTask.project);
        newTask.user = Object.assign({}, newTask.user);
        this.taskService.addTask(newTask)
        .pipe(first())
        .subscribe(
            data => {
                if (data.statusCode == 201) {
                    alert("You've successfully added a new Task!");
                    this.router.navigate(['view-tasks']);
                } else {
                    alert(data.message);
                }
            }, 
            error => {
                alert("Sorry! Something went wrong, new task cannot be added at the moment. Please try again.");
            }
        );
    }

    onSubmit() {
        this.addTask();
    }

    reset() {
        this.addTaskForm.reset({
            taskId: '',
            taskName: '',
            isParentTask: '',
            parentTask: ({
                parentTaskId: '',
                parentTaskName: ''
            }),
            priority: '15',
            startDate: '',
            endDate: '',
            active: 'Y',
            project: ({
                projectId: '',
                projectName: ''
            }),
            user: ({
                userId: '',
                employeeId: ''
            })
        });
    }
}
