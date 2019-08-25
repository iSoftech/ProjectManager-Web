import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { User } from '../../model/user';
import { UserService } from '../../api-service/user.service';
import { Router } from '@angular/router';
import {first} from "rxjs/operators";

@Component({
  selector: 'edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  editUserForm: FormGroup;
  
  constructor(private formBuilder: FormBuilder, private userService: UserService, private router: Router) {
  }

  ngOnInit() {
    let selectedUserId = window.localStorage.getItem("selectedUserId");
    if (selectedUserId) {
      this.editUserForm = this.initializeFormGroup(this.formBuilder);
      this.getUser(selectedUserId);
    }
  }

  initializeFormGroup(formBuilder: FormBuilder) {
    return formBuilder.group({ 
        userId: [''],
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
        employeeId: ['', Validators.compose([Validators.required])],
        active: ['Y']
    });
  }

  getUser(userId: any) {
    this.userService.getUser(userId).subscribe(data => {
      this.editUserForm.setValue(data.response);
    });
  }

  updateUser() {
    const editedUser: User = Object.assign({}, this.editUserForm.value);
    this.userService.updateUser(editedUser)
      .pipe(first())
      .subscribe(data => {
          if (data.statusCode == 201) {
            alert("You've successfully updated the User!");
            this.router.navigate(['view-users']);
          } else {
            alert(data.message);
          }
        }, error => {
          alert("Sorry! Something went wrong, update cannot be possible at the moment. Please try again.");
      });
  }

  onSubmit() {
    this.updateUser();
  }

  cancelEdit(): void {
    this.router.navigate(['view-users']);
  }

}
