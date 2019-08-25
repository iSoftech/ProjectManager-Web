import { TaskFilterPipe } from './task-filter.pipe';
import { ViewTaskComponent } from '../task/view-task/view-task.component';

describe('TaskFilterPipe', () => {
  it('create an instance', () => {
    let viewTask: ViewTaskComponent;
    const pipe = new TaskFilterPipe(viewTask);
    expect(pipe).toBeTruthy();
  });
});
