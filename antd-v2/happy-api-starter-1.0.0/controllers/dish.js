const Dish = require('../models/dish.js')

// 列出所有文章
exports.all = (req, res) => {
  Dish.find({}).exec(
    (err, dishes) => {
      if (err) return res.status(500).json({ msg: '查找失败', err })
      if (dishes) {
        return setTimeout(() => res.json({ msg: '读取成功', dishes }), 300)
      }
    }
  )
}

exports.remove = (req, res) => {
  Dish.findOne({ _id: req.params.id }).exec(
    (err, dish) => {
      if (err) return res.status(500).json({ msg: '查找失败', err })
      if (dish) {
        dish.remove( err => {
          if (err) return res.status(500).json({ error: err.message });
          return setTimeout(() => res.json({ msg: '删除成功' }), 300)
        })
      }
    }
  )
}

exports.seed = (req, res) => {
  const dishes = [
    {
      poster: 'tlms.png',
      name: '提拉米苏',
      price: 20,
      desc: '好吃好吃'
    },
    {
      poster: 'hsl.png',
      name: '黑森林',
      price: 20,
      desc: '好吃好吃'
    }
  ]

  dishes.forEach(dish => {
    let newDish = new Dish(dish)
    newDish.save()
  })

  res.send('填充数据库成功！')
}

exports.new = (req, res) => {
  const dish = new Dish(req.body)
  dish.save((err, dish) => {
    if (err) return res.status(403).json({ msg: '保存失败，请重试', err })
    return res.json({ msg: '保存成功', dish })
  })
}

exports.uploadPoster = function (req, res) {
  res.json({
    filename: req.file.filename
  })
}
