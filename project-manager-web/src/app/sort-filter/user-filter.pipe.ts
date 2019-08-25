import { Pipe, PipeTransform } from '@angular/core';
import { User } from '../model/user';
import { ViewUserComponent } from '../user/view-user/view-user.component';

@Pipe({
  name: 'userFilter'
})
export class UserFilterPipe implements PipeTransform {

  constructor(private viewUserComponent: ViewUserComponent) {}

  transform(users: User[], firstName: string, lastName: string, employeeId: number): User[] {
    if ((undefined === firstName || '' == firstName)
        && (undefined === lastName || '' == lastName)
        && (undefined === employeeId || '' == employeeId.toString())) {
      return users;
    }
    return users.filter(function(user) {
      if (firstName && user.firstName) {
        return user.firstName.toLowerCase().includes(firstName.toLowerCase());
      } 
      if (lastName && user.lastName) {
        return user.lastName.toLowerCase().includes(lastName.toLowerCase());
      } 
      if (employeeId && user.employeeId) {
        return user.employeeId == employeeId;
      }
    });
  }

}
