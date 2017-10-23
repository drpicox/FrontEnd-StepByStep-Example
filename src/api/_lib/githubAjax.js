import { ajax } from 'rxjs/observable/dom/ajax';

// NOTE: it uses process.env.REACT_APP_GITHUB_AUTH
// and environment variable that had set in base64
// the github username:password,
// ex: https://www.base64encode.org/ picard:aaobg0
// export REACT_APP_GITHUB_AUTH="cGljYXJkOmFhb2JnMA=="
export default function githubAjax(options) {
  let headers = {
    Authorization: 'Basic ' + process.env.REACT_APP_GITHUB_AUTH,
    Accept: 'application/vnd.github.inertia-preview+json',
    'Content-Type': 'application/json',
    ...options.headers,
  };

  return ajax({
    responseType: 'json',
    ...options,
    headers,
  }).switchMap(result => {
    // " <https://api.github.com/repositories/104482407/issues?per_page=3&page=2>; rel="next",
    const link = result.xhr.getResponseHeader('Link');
    const match = link && link.match(/<([^>]+)>; rel="next"/);
    const next = match && match[1];
    if (next) {
      return ajax({ ...options, url: next }).map(nextResult => ({
        ...nextResult,
        response: [...result.response, ...nextResult.response],
      }));
    }
    return [result];
  });
}
