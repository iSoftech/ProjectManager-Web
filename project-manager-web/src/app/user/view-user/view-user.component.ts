import { Component, OnInit } from '@angular/core';
import { User } from '../../model/user';
import { UserService } from '../../api-service/user.service';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { isNumber } from 'util';


@Component({
  selector: 'view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.css']
})
export class ViewUserComponent implements OnInit {

  users: User[];
  
  constructor(private userService: UserService, private router: Router) {}

  ngOnInit() {
    this.viewUsers();
  }

  viewUsers() {
    this.userService.getAllUsers().subscribe(data => {
      this.users = data.response; 
      this.sort();
    });
  }

  editUser(user: User) {
    window.localStorage.removeItem('selectedUserId');
    window.localStorage.setItem('selectedUserId', user.userId.toString());
    this.router.navigate(['edit-user']);
  }

  prepareDeleteUser(user: User) {
    window.localStorage.removeItem('selectedUserId');
    window.localStorage.setItem('selectedUserId', user.userId.toString());
  }

  deleteUser() {
    let selectedUserId: any = window.localStorage.getItem('selectedUserId');
    if (selectedUserId) {
      let selectedUser: User;
      this.userService.getUser(selectedUserId).subscribe(data => {
        selectedUser = data.response;
        selectedUser.active = 'N';
        this.userService.updateUser(selectedUser).pipe(first())
        .subscribe(data => {
            if (data.statusCode == 201) {
              setTimeout("2000");
              alert("You've successfully deleted an User!");
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
    this.users.sort((u1: User, u2: User) => {
      if (null === u1 || null === u1.employeeId) {
        return 1;
      }
      if (null === u2 || null === u2.employeeId) {
        return -1;
      }
      if (isNumber(u1.employeeId) && isNumber(u2.employeeId)) {
        if (u1.employeeId === u2.employeeId) {
          return 0;
        }
        return u1.employeeId > u2.employeeId ? 1 : -1;
      }
    });
  }
}
