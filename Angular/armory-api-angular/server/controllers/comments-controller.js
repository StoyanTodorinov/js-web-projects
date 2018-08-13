const services = require('../services')

module.exports = {
  createComment: async (req, res) => {
    let comment = req.body
    res.status(201).json(await services.comments.createComment(comment))
  },
  getCommentsByProductId: async (req, res) => {
    let productId = req.params.productId
    res.status(200).json(await services.comments.getCommentsByProductId(productId))
  },
  updateComment: async (req, res) => {
    let comment = req.body
    let commentId = comment._id
    await services.comments.updateComment(commentId, comment)
    res.status(200).json({ message: 'Comment updated!' })
  },
  deleteComment: async (req, res) => {
    let commentId = req.params.commentId
    await services.comments.deleteComment(commentId)
    res.status(200).json({ message: 'Comment deleted!' })
  }
}
