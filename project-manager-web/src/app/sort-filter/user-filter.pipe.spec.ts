import { UserFilterPipe } from './user-filter.pipe';
import { ViewUserComponent } from '../user/view-user/view-user.component';

describe('UserFilterPipe', () => {
  it('create an instance', () => {
    let viewUser: ViewUserComponent;
    const pipe = new UserFilterPipe(viewUser);
    expect(pipe).toBeTruthy();
  });
});
