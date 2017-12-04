import { getSearch, getSearchPostList } from '../selectors';

const POST_1 = {
  title: 'Stars are blue',
};

const POST_2 = {
  title: 'Red dwarfs are not blue',
};

const POST_3 = {
  title: 'There are stars on the floor',
};

const STATE = {
  search: 'star',
  posts: {
    1: POST_1,
    2: POST_2,
    3: POST_3,
  },
};

describe('getSearch', () => {
  it('should return the current search text', () => {
    const search = getSearch(STATE);
    expect(search).toBe('star');
  });
});

describe('getSearchPostsList', () => {
  describe('it should return the list of posts that contains the string', () => {
    const list = getSearchPostList(STATE);
    expect(list).toContain(POST_3);
  });

  describe('it should be case insensitive', () => {
    const list = getSearchPostList(STATE);
    expect(list).toContain(POST_1);
  });

  describe('it should not include non matching posts', () => {
    const list = getSearchPostList(STATE);
    expect(list).not.toContain(POST_2);
  });

  describe('it should return the same result instance if STATE does not change', () => {
    const list1 = getSearchPostList(STATE);
    const list2 = getSearchPostList(STATE);

    expect(list1).toBe(list2);
  });
});
