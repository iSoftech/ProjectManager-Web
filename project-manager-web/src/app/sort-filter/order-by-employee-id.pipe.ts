import { Pipe, PipeTransform } from '@angular/core';
import { User } from '../model/user';
import { ViewUserComponent } from '../user/view-user/view-user.component';

@Pipe({
  name: 'orderByEmployeeId',
  pure: false
})
export class OrderByEmployeeIdPipe implements PipeTransform {

  constructor(private viewUserComponent: ViewUserComponent) {}

  transform(users: User[]): User[] {
    this.viewUserComponent.sort();
    return this.viewUserComponent.users;
  }

}
