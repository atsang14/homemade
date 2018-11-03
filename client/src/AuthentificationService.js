export const _register = (username, email, password) => {
  return fetch('http://localhost:3000/register/', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ username, email, password })
  }).then(res => res.json());
};

export const _login = (username, password) => {
  return fetch('http://localhost:3000/login/', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ username, password })
  }).then(res => res.json());
};

export const _verifier = token => {
  console.log('VERIFIER!!!' + JSON.stringify({ token }));
  return fetch('http://localhost:3000/verifier/', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ token })
  }).then(res => res.json());
};
