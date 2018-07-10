const categoriesArr = [
  { name: 'Knives' },
  { name: 'Firearms' },
  { name: 'Hatchets' },
  { name: 'Axes' },
  { name: 'Armors' },
  { name: 'Equipment' },
  { name: 'Survival' },
  { name: 'Sharpening stones' },
  { name: 'Food' }
]

const productsArr = [
  {
    name: 'Katana',
    promo: 20,
    categoryName: 'Knives',
    price: 200.99,
    img: 'https://images-na.ssl-images-amazon.com/images/I/81lw5x16GYL._SL1500_.jpg',
    description: 'A very light blade but very sharp and useful',
    additionalInformation: {
      weight: 1.500
    }
  },
  {
    name: 'Wakizashi',
    promo: 10,
    categoryName: 'Knives',
    price: 159.99,
    img: 'https://cdn3.volusion.com/z93az.6qog9/v/vspfiles/photos/016-S101W-3.jpg?1528910443',
    description: "A very light and short blade, a samurai's second blade",
    additionalInformation: {
      weight: 500,
      materials: 'Carbon and stainless steel'
    }
  },
  {
    name: 'Proelia TX010BB',
    categoryName: 'Knives',
    price: 109.95,
    img: 'https://www.knifeworks.com/media/catalog/product/cache/5fed40bb88b4797a5a141f62af3f5faf/k/n/knifework-tx010bb1.jpg',
    description: 'Proelia Knives, TX010BB, 4 in. Tanto Blade, Black Stonewashed, Black G10 Handle'
  },
  {
    name: 'Desert Eagle .44 Magnum',
    categoryName: 'Firearms',
    price: 1095.66,
    img: 'https://i.ytimg.com/vi/xOD9UXBrNXA/maxresdefault.jpg',
    description: 'The MRI Desert Eagle is a semi-automatic handgun notable for chambering the largest centerfire cartridge of any magazine-fed, self-loading pistol'
  }
]

let commentsArr = [
  {
    text: 'Looks amasing!',
    productId: '5b443c16c583bb2c5c940bb1',
    author: 'sto'
  },
  {
    text: 'It also is on promotion not just amasing looks',
    productId: '5b443c16c583bb2c5c940bb1',
    author: 'Admin'
  },
  {
    text: 'I am looking for a higher quality blade...',
    productId: '5b443c16c583bb2c5c940bb1',
    author: 'Admin'
  }
]

module.exports = {
  categoriesArr,
  productsArr,
  commentsArr
}
