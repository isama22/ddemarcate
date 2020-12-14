const BASE_URL = '/api/users/';

import tokenService from './tokenService';

function signup(user) {
  return fetch(BASE_URL + 'signup', {
    method: 'POST',
    headers: new Headers({'Content-Type': 'application/json'}),
    body: JSON.stringify(user)
  })
  .then(res => {
    if (res.ok) return res.json();
    throw new Error('Email already taken!');
  })
  // Parameter destructuring!
  .then(({ token }) => {
    tokenService.setToken(token);
  });
}

export default {
  signup
};