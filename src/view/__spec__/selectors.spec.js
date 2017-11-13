import { getViewRoot, getViewId } from '../selectors';

// Create selectors `getViewRoot(state)` and `getViewId(state)`
const STATE = {
  view: {
    root: 'comments',
    id: 4323,
  },
};

describe('getViewRoot', () => {
  it('should return the root of the view', () => {
    const root = getViewRoot(STATE);
    expect(root).toBe('comments');
  });

  it('should return the id of the view', () => {
    const id = getViewId(STATE);
    expect(id).toBe(4323);
  });
});
