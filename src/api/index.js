import myAjax from './lib/myAjax';

export default {
  get: (url, options) =>
    myAjax({
      url,
      method: 'GET',
      ...options,
    }),

  post: (url, body, options) =>
    myAjax({
      url,
      method: 'POST',
      body: JSON.stringify(body),
      ...options,
    }),

  put: (url, body, options) =>
    myAjax({
      url,
      method: 'PUT',
      body: JSON.stringify(body),
      ...options,
    }),

  delete: (url, options) =>
    myAjax({
      url,
      method: 'DELETE',
      ...options,
    }),
};
