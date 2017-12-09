const mongoose = require('mongoose')

const CommentSchema = new mongoose.Schema(
  {
    content: { type: String, required: true },
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    dish: { type: mongoose.Schema.Types.ObjectId, ref: 'Dish', required: true }
  },
  { timestamps: true }
)

module.exports = mongoose.model('Comment', CommentSchema)
