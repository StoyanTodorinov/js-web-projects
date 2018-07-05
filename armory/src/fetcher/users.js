import * as urls from './urls'

export function login (user) {
  fetch(urls.LOGIN_URL, {
    method: 'POST',
    body: JSON.stringify(user),
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(res => res.json())
    .catch(error => console.error('Error:', error))
    .then(user => setStorage(user))
}

export function register (user) {
  fetch(urls.REGISTER_URL, {
    method: 'POST',
    body: JSON.stringify(user),
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(res => res.json())
    .catch(error => console.error('Error:', error))
    .then(user => setStorage(user))
}

export function logout () {
  emptyStorage()
}

function setStorage (user) {
  localStorage.setItem('user', JSON.stringify(user))
}

function emptyStorage () {
  localStorage.clear()
}
