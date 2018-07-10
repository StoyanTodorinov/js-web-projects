const services = require('../services')

module.exports = {
  createComment: async (req, res) => {
    let comment = req.body
    await services.categories.createComment(comment)
    res.json({ message: 'Comment created' })
  },
  getCommentsByProductId: async (req, res) => {
    let productId = req.params.productId
    res.json(await services.comments.getCommentsByProductId(productId))
  }
}