import 'isomorphic-fetch';

export const callApi = (path, options) => {
  const apiHost = 'http://localhost:8000';
  const headers = new Headers({
    'Origin': apiHost,
    'X-Requested-With': 'XMLHttpRequest',      
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  });

  return fetch(apiHost + path,  { headers, ...options }).then(response => {    
    return response.json();
  });
}