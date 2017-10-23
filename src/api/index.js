import githubAjax from './_lib/githubAjax';

export default {
  get: (url, options) =>
    githubAjax({
      url,
      method: 'GET',
      ...options,
    }),

  post: (url, body, options) =>
    githubAjax({
      url,
      method: 'POST',
      body: JSON.stringify(body),
      ...options,
    }),

  put: (url, body, options) =>
    githubAjax({
      url,
      method: 'PUT',
      body: JSON.stringify(body),
      ...options,
    }),

  delete: (url, options) =>
    githubAjax({
      url,
      method: 'DELETE',
      ...options,
    }),
};
