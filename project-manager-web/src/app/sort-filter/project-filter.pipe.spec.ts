import { ProjectFilterPipe } from './project-filter.pipe';
import { ViewProjectComponent } from '../project/view-project/view-project.component';

describe('ProjectFilterPipe', () => {
  it('create an instance', () => {
    let viewProject: ViewProjectComponent;
    const pipe = new ProjectFilterPipe(viewProject);
    expect(pipe).toBeTruthy();
  });
});
