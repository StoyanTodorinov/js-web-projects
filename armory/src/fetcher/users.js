import * as urls from './urls'

export async function login (user) {
  await fetch(urls.LOGIN_URL, {
    method: 'POST',
    body: JSON.stringify(user),
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(res => res.json())
    .catch(error => console.error('Error:', error))
    .then(response => {
      if (typeof response === 'object') {
        setStorage(response)
      }
    })
}

export async function register (user) {
  await fetch(urls.REGISTER_URL, {
    method: 'POST',
    body: JSON.stringify(user),
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(res => res.json())
    .catch(error => console.error('Error:', error))
    .then(response => {
      if (typeof response === 'object') {
        setStorage(response)
      }
    })
}

export function logout () {
  emptyStorage()
}

export function update (user) {
  fetch(urls.USERS_URL, {
    method: 'PUT',
    body: JSON.stringify(user),
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(res => res.json())
    .catch(error => console.error('Error:', error))
    .then(response => console.log(response))
}

function setStorage (user) {
  localStorage.setItem('user', JSON.stringify(user))
}

function emptyStorage () {
  localStorage.clear()
}
