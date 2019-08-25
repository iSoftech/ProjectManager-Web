import { OrderByProjectNamePipe } from './order-by-project-name.pipe';
import { ViewProjectComponent } from '../project/view-project/view-project.component';

describe('OrderByProjectNamePipe', () => {
  it('create an instance', () => {
    let viewProject: ViewProjectComponent;
    const pipe = new OrderByProjectNamePipe(viewProject);
    expect(pipe).toBeTruthy();
  });
});
