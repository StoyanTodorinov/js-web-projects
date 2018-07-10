const Comment = require('mongoose').model('Comment')

// async function allCategories () {
//     let comments = await Comment.find({productId:})
//     return categories
// }

async function createComment (comment) {
  await Comment.create(comment)
}

async function getCommentsByProductId (productId) {
  return await Comment.find({ productId }).sort('-date')
}

module.exports = {
  createComment,
  getCommentsByProductId
}