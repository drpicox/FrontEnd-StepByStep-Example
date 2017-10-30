import reducer from '../../../reducer';

import { getRepoList } from '../selectors';

describe('repos.current', () => {
  describe('getRepoList', () => {
    it('should return the list of repos', () => {
      const state = reducer(undefined, {});
      const repoList = getRepoList(state);
      expect(repoList).toEqual(expect.arrayContaining([expect.any(String)]));
    });
  });
});
