import reducer from '../../../reducer';

import { setCurrentRepo } from '../actions';
import { getCurrentRepo } from '../selectors';

describe('repos.current', () => {
  describe('getCurrentRepo', () => {
    it('should return the setted repo', () => {
      const state = reducer(undefined, setCurrentRepo('newRepo'));
      const value = getCurrentRepo(state);
      expect(value).toBe('newRepo');
    });
  });
});
