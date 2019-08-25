import { OrderByEmployeeIdPipe } from './order-by-employee-id.pipe';
import { ViewUserComponent } from '../user/view-user/view-user.component';

describe('OrderByEmployeeIdPipe', () => {
  it('create an instance', () => {
    let viewUser: ViewUserComponent;
    const pipe = new OrderByEmployeeIdPipe(viewUser);
    expect(pipe).toBeTruthy();
  });
});
