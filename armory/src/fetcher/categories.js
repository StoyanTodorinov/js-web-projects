import * as urls from './urls'

export async function allCategories() {
    let categories = []
    await fetch(urls.CATEGORIES_URL)
        .then(res => res.json())
        .catch(error => console.error('Error:', error))
        .then(response => {
            categories = response
        })
    return categories
}