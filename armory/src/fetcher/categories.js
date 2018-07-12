import * as urls from './urls'

export async function allCategories () {
  let categories = []
  await fetch(urls.CATEGORIES_URL)
    .then(res => res.json())
    .catch(error => console.error('Error:', error))
    .then(response => {
      categories = response
    })
  return categories
}

export async function create (category) {
  await fetch(urls.CATEGORIES_URL, {
    method: 'POST',
    body: JSON.stringify(category),
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(res => res.json())
    .catch(error => console.error('Error:', error))
    .then(response => {
      console.log(response)
    })
}
