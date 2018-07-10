const Comment = require('mongoose').model('Comment')

async function createComment (comment) {
  await Comment.create(comment)
}

async function getCommentsByProductId (productId) {
  let comment = await Comment.find({ productId }).sort('-date')
  return comment
}

module.exports = {
  createComment,
  getCommentsByProductId
}
