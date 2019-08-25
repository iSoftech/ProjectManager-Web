import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { User } from '../../model/user';
import { UserService } from '../../api-service/user.service';
import { Router } from '@angular/router';
import { first } from "rxjs/operators";

@Component({
  selector: 'add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent {

  addUserForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private userService: UserService, private router: Router) {
      this.addUserForm = this.initializeFormGroup();
  }

  initializeFormGroup(): FormGroup {
      return this.formBuilder.group({
          userId: [''],
          firstName: ['', Validators.required],
          lastName: ['', Validators.required],
          employeeId: ['', Validators.compose([Validators.required])],
          active: ['Y']
      });
   }

  addUser() {
      const newUser: User = Object.assign({}, this.addUserForm.value);
      this.userService.addUser(newUser)
      .pipe(first())
      .subscribe(
          data => {
              if (data.statusCode == 201) {
                  alert("You've successfully added a new User!");
                  this.router.navigate(['view-users']);
              } else {
                  alert(data.message);
              }
          }, 
          error => {
              alert("Sorry! Something went wrong, new user cannot be added at the moment. Please try again.");
          }
      );
  }

  onSubmit() {
      this.addUser();
  }

  reset() {
      this.addUserForm.reset({
          userId: '',
          firstName: '',
          lastName: '',
          employeeId: '',
          active: 'Y'
      });
  }

}
