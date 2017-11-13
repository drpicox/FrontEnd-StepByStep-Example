import { ajax } from 'rxjs/observable/dom/ajax';

export default function myAjax(options) {
  let headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    ...options.headers,
  };

  return ajax({
    responseType: 'json',
    ...options,
    headers,
  });
}
