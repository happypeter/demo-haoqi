const mongoose = require('mongoose')

const DishSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    desc: { type: String, required: true },
    poster: { type: String, required: true },
    price: { type: Number, required: true }
  },
  { timestamps: true }
)

module.exports = mongoose.model('Dish', DishSchema)
