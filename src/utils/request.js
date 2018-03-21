import fetch from 'dva/fetch';
import _ from 'lodash'

function parseJSON(response) {
  return response.json();
}

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }

  const error = new Error(response.statusText);
  error.response = response;
  throw error;
}

/**
 * Requests a URL, returning a promise.
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to "fetch"
 * @return {object}           An object containing either "data" or "err"
 */
export default function request(url, options) {
 /* if(!options.headers){
    options.headers = {
      'Accept':'application/json',
        'Content-Type': 'application/json'
    }
    options
  }*/

  return fetch(url,_.assign({
    headers:{
    'Accept':'application/json',
    'Content-Type': 'application/json'
    },
    credentials:'include'
  },options))
    .then(checkStatus)
    .then(parseJSON)
    .then(data => ({ data }))
    .catch(err => ({ err }));
}